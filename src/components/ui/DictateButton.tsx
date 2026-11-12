"use client";

import { useEffect, useRef, useState } from "react";
import { Mic } from "@/components/ui/Icons";

type Recognition = {
  lang: string; continuous: boolean; interimResults: boolean;
  onresult: ((e: { resultIndex: number; results: ArrayLike<{ isFinal: boolean; 0: { transcript: string } }> }) => void) | null;
  onend: (() => void) | null; onerror: (() => void) | null;
  start: () => void; stop: () => void;
};
type RecognitionCtor = new () => Recognition;

function recognitionCtor(): RecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { SpeechRecognition?: RecognitionCtor; webkitSpeechRecognition?: RecognitionCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

/** Speak instead of typing. Appends what is heard to the field; hidden where the browser cannot listen. */
export function DictateButton({ onText, disabled, tabIndex }: { onText: (text: string) => void; disabled?: boolean; tabIndex?: number }) {
  const [supported, setSupported] = useState(false);
  const [listening, setListening] = useState(false);
  const rec = useRef<Recognition | null>(null);
  const onTextRef = useRef(onText);
  onTextRef.current = onText;

  useEffect(() => { setSupported(recognitionCtor() !== null); }, []);
  useEffect(() => () => rec.current?.stop(), []);

  if (!supported) return null;

  const toggle = () => {
    if (listening) { rec.current?.stop(); return; }
    const Ctor = recognitionCtor();
    if (!Ctor) return;
    const r = new Ctor();
    r.lang = "en-IN";
    r.continuous = true;
    r.interimResults = false;
    r.onresult = (e) => {
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i];
        if (res.isFinal) onTextRef.current(res[0].transcript.trim());
      }
    };
    r.onend = () => setListening(false);
    r.onerror = () => setListening(false);
    rec.current = r;
    r.start();
    setListening(true);
  };

  return (
    <button type="button" className={`btn dictate ${listening ? "is-listening" : ""}`} onClick={toggle} disabled={disabled}
      aria-pressed={listening} aria-label={listening ? "Stop dictation" : "Dictate instead of typing"} title={listening ? "Stop dictation" : "Speak instead of typing"} tabIndex={tabIndex}>
      <Mic /><span className="dictate-label">{listening ? "Listening, tap to stop" : "Speak"}</span>
    </button>
  );
}

/** Joins dictated text onto what is already written, with a space or new line as needed. */
export function appendDictation(current: string, heard: string): string {
  if (!heard) return current;
  if (!current) return heard;
  return /\s$/.test(current) ? current + heard : `${current} ${heard}`;
}
