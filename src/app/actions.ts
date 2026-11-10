"use server";

import { redirect } from "next/navigation";
import {
  changePassphrase,
  createAccount,
  requireOwner,
  signIn,
  signOut,
  signOutEverywhere,
} from "@/lib/auth";
import { query } from "@/lib/db";
import { OPENING_LESSONS } from "@/lib/curriculum";
import { normalisePassphrase } from "@/lib/passphrase";

export type FormState = { error?: string; done?: string } | undefined;

const text = (form: FormData, key: string) => String(form.get(key) ?? "");

export async function signUpAction(_: FormState, form: FormData): Promise<FormState> {
  const passphrase = text(form, "passphrase");
  if (normalisePassphrase(passphrase) !== normalisePassphrase(text(form, "confirm"))) return { error: "The two passphrases don't match." };
  const result = await createAccount(passphrase);
  if (!result.ok) return { error: result.error };
  redirect("/");
}

export async function signInAction(_: FormState, form: FormData): Promise<FormState> {
  const result = await signIn(text(form, "passphrase"));
  if (!result.ok) return { error: result.error };
  redirect("/");
}

export async function signOutAction() {
  await signOut();
  redirect("/signin");
}

export async function signOutEverywhereAction() {
  await requireOwner();
  await signOutEverywhere();
  redirect("/signin");
}

export async function changePassphraseAction(_: FormState, form: FormData): Promise<FormState> {
  await requireOwner();
  const next = text(form, "next");
  if (normalisePassphrase(next) !== normalisePassphrase(text(form, "confirm"))) return { error: "The two new passphrases don't match." };
  const result = await changePassphrase(text(form, "current"), next);
  if (!result.ok) return { error: result.error };
  return { done: "Passphrase changed. Other devices have been signed out." };
}

/** Marks a lesson as opened, so the Learn button resumes it on any device. */
export async function startLessonAction(lessonId: string) {
  await requireOwner();
  if (!OPENING_LESSONS.some((l) => l.id === lessonId)) return;
  await query(
    `INSERT INTO progress (lesson_id, status) VALUES ($1, 'in_progress')
     ON CONFLICT (lesson_id) DO UPDATE SET updated_at = now()
     WHERE progress.status <> 'mastered'`,
    [lessonId],
  );
}

/** The Learn button: decide the single best next step, record it, and go there. */
export async function learnAction() {
  await requireOwner();
  const { nextStep } = await import("@/lib/progress");
  const step = await nextStep();
  if (step.kind === "caught-up") redirect("/");
  await startLessonAction(step.lesson.id);
  redirect(`/learn/${step.lesson.id}`);
}
