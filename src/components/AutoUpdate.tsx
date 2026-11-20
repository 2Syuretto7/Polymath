"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { decideUpdate } from "@/lib/update";

const CURRENT = process.env.NEXT_PUBLIC_BUILD_ID ?? "";
const TRIED_KEY = "polymath:update-tried";
const POLL_MS = 5 * 60 * 1000;
const MIN_GAP_MS = 15 * 1000;

function store(): Storage | null {
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

/** Fields the learner has typed into or chosen in since this page loaded. */
const touched = new Set<Element>();

/**
 * True when a reload would lose something the learner entered. React keeps a controlled field's default
 * in step with its value, so we track the fields the learner actually changed instead of comparing defaults.
 */
function hasUnsavedInput(): boolean {
  for (const el of Array.from(touched)) {
    if (!el.isConnected) {
      touched.delete(el);
      continue;
    }
    if (el instanceof HTMLInputElement && (el.type === "checkbox" || el.type === "radio")) {
      if (el.checked) return true;
    } else if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement) {
      if (el.value.trim() !== "") return true;
    } else if ((el.textContent ?? "").trim() !== "") return true;
  }
  return false;
}

function noteInput(e: Event) {
  if (e.target instanceof Element) touched.add(e.target);
}

/**
 * Keeps every open tab, on every device, on the newest deployment. It asks `/api/version` whenever the
 * tab comes back into view, regains focus or the network, every five minutes while visible, and on each
 * page change. When a new build is live it reloads at once, unless something typed would be lost; then it
 * shows a quiet bar and reloads as soon as the page is clear or the learner moves to another page.
 */
export function AutoUpdate() {
  const pathname = usePathname();
  const [pending, setPending] = useState(false);
  const pendingRef = useRef(false);
  const lastCheck = useRef(0);
  const firstPath = useRef(true);

  useEffect(() => {
    if (!CURRENT || process.env.NODE_ENV !== "production") return;
    let stopped = false;

    const reload = (live: string) => {
      store()?.setItem(TRIED_KEY, live);
      window.location.reload();
    };

    const check = async (force = false) => {
      if (stopped || document.visibilityState !== "visible") return;
      const now = Date.now();
      if (!force && now - lastCheck.current < MIN_GAP_MS) return;
      lastCheck.current = now;
      let live: string | null = null;
      try {
        const res = await fetch("/api/version", { cache: "no-store", headers: { accept: "application/json" } });
        if (res.ok) live = ((await res.json()) as { id?: string }).id || null;
      } catch {
        return;
      }
      if (stopped) return;
      const action = decideUpdate({ current: CURRENT, live, triedFor: store()?.getItem(TRIED_KEY) ?? null, dirty: hasUnsavedInput() });
      if (action === "reload" && live) return reload(live);
      const waiting = action === "wait";
      pendingRef.current = waiting;
      setPending(waiting);
    };

    const onVisible = () => {
      if (document.visibilityState === "visible") void check();
    };
    const onShow = (e: PageTransitionEvent) => {
      if (e.persisted) void check(true);
    };
    const onFocus = () => void check();
    const onOnline = () => void check(true);

    document.addEventListener("input", noteInput, true);
    document.addEventListener("change", noteInput, true);
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", onShow);
    window.addEventListener("focus", onFocus);
    window.addEventListener("online", onOnline);
    const poll = window.setInterval(() => void check(true), POLL_MS);
    // While an update waits on unsaved typing, look again often so it lands soon after the page is clear.
    const settle = window.setInterval(() => {
      if (pendingRef.current) void check(true);
    }, 30 * 1000);
    void check(true);

    return () => {
      stopped = true;
      document.removeEventListener("input", noteInput, true);
      document.removeEventListener("change", noteInput, true);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", onShow);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("online", onOnline);
      window.clearInterval(poll);
      window.clearInterval(settle);
    };
  }, []);

  // Moving to another page is a safe moment: load it fresh from the new build.
  useEffect(() => {
    if (firstPath.current) {
      firstPath.current = false;
      return;
    }
    if (pendingRef.current && !hasUnsavedInput()) window.location.reload();
  }, [pathname]);

  if (!pending) return null;
  return (
    <div className="update-bar" role="status">
      <span>A new version of Polymath is ready.</span>
      <button type="button" className="btn btn-ghost update-bar-btn" onClick={() => window.location.reload()}>
        Reload now
      </button>
    </div>
  );
}
