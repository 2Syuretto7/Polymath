import type { Exercise } from "./types";

export type MasteryReport = { score: number; solved: number; total: number; writtenDone: boolean; mastered: boolean };

/**
 * A lesson is mastered only when its complete set of check, apply and prove questions is done:
 * every auto-checked question solved and every written proof or argument accepted. A partial set,
 * however large, is never mastery. `required` must already exclude the optional stretch questions.
 */
export function masteryFromSolved(required: Exercise[], isSolved: (key: string) => boolean): MasteryReport {
  const auto = required.filter((e) => e.answer.kind !== "written");
  const written = required.filter((e) => e.answer.kind === "written");
  const solvedAuto = auto.filter((e) => isSolved(e.key)).length;
  const writtenDone = written.every((e) => isSolved(e.key));
  const solved = required.filter((e) => isSolved(e.key)).length;
  const total = required.length;
  const score = auto.length ? solvedAuto / auto.length : 1;
  return { score, solved, total, writtenDone, mastered: solved === total };
}
