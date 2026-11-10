"use client";

import { useState, useTransition } from "react";
import { teachBackAction } from "@/app/actions";

export function TeachBack({ lessonId, prompt, initial }: { lessonId: string; prompt: string; initial: string | null }) {
  const [text, setText] = useState(initial ?? "");
  const [saved, setSaved] = useState(initial !== null);
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <div className="teachback">
      <p className="teachback-prompt">{prompt}</p>
      <textarea className="input textarea" rows={8} value={text} aria-label="Your explanation"
        onChange={(e) => { setText(e.target.value); setSaved(false); }}
        placeholder="Explain it simply, as if to someone meeting the idea for the first time." />
      <div className="teachback-foot">
        <span className="hint">{words} words</span>
        <button type="button" className="btn btn-primary" disabled={pending || saved || words === 0}
          onClick={() => start(async () => {
            const res = await teachBackAction(lessonId, text);
            if (!res.ok) { setError(res.error ?? "Could not save."); return; }
            setError(null);
            setSaved(true);
            if (res.lessonMastered) window.dispatchEvent(new CustomEvent("polymath:mastered"));
          })}>
          {pending ? "Saving…" : saved ? "Saved" : "Save explanation"}
        </button>
      </div>
      {error && <p className="feedback feedback-wrong">{error}</p>}
      {saved && !error && (
        <p className="hint">Saved. From Phase 3, Parton reads this like a curious student and asks about any gaps.</p>
      )}
    </div>
  );
}
