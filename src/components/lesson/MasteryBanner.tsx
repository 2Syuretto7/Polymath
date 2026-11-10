"use client";

import { useEffect, useState } from "react";
import { learnAction } from "@/app/actions";

export function MasteryBanner({ initiallyMastered }: { initiallyMastered: boolean }) {
  const [mastered, setMastered] = useState(initiallyMastered);
  // Floats into view only at the moment of mastery; on later visits it sits quietly at the end.
  const [justNow, setJustNow] = useState(false);
  useEffect(() => {
    const on = () => { setMastered(true); setJustNow(true); };
    window.addEventListener("polymath:mastered", on);
    return () => window.removeEventListener("polymath:mastered", on);
  }, []);
  if (!mastered) return null;
  return (
    <div className={justNow ? "mastered is-floating" : "mastered"} role="status">
      <div>
        <p className="mastered-title">Lesson mastered</p>
        <p className="mastered-text">Its questions will return for review just before you would forget them.</p>
      </div>
      <form action={learnAction}>
        <button type="submit" className="btn btn-primary">Learn <span aria-hidden="true">→</span></button>
      </form>
    </div>
  );
}
