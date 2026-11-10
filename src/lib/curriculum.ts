/**
 * Phase 1 seed: the opening lessons of the two bridge courses, enough for the
 * Learn button to make a real choice. Phase 2 replaces this with lesson files
 * and the full graph.
 */
export type Track = "mathematics" | "philosophy";

export type LessonRef = {
  id: string;
  track: Track;
  course: string;
  chapter: string;
  title: string;
};

export const TOTAL_LESSONS = 1700;

export const OPENING_LESSONS: readonly LessonRef[] = [
  { id: "m0.1.1", track: "mathematics", course: "M0 Foundations of School Mathematics", chapter: "Numbers", title: "Counting and the natural numbers" },
  { id: "p0.1.1", track: "philosophy", course: "P0 Thinking and Writing Philosophically", chapter: "What philosophy is", title: "Philosophy's questions" },
  { id: "m0.1.2", track: "mathematics", course: "M0 Foundations of School Mathematics", chapter: "Numbers", title: "Integers and signed arithmetic" },
  { id: "p0.1.2", track: "philosophy", course: "P0 Thinking and Writing Philosophically", chapter: "What philosophy is", title: "Philosophy and science" },
  { id: "m0.1.3", track: "mathematics", course: "M0 Foundations of School Mathematics", chapter: "Numbers", title: "Fractions and ratios" },
  { id: "p0.1.3", track: "philosophy", course: "P0 Thinking and Writing Philosophically", chapter: "What philosophy is", title: "Philosophy in everyday life" },
];

export type LearnStep =
  | { kind: "continue"; lesson: LessonRef }
  | { kind: "begin"; lesson: LessonRef }
  | { kind: "caught-up" };

export type ProgressRow = { lesson_id: string; status: string };

/**
 * The single next step: finish what is open first, otherwise begin the next
 * lesson in order (the seed already alternates the two tracks).
 * Phase 2 adds due reviews, repair work and the full graph frontier.
 */
export function chooseNextStep(progress: readonly ProgressRow[]): LearnStep {
  const status = new Map(progress.map((p) => [p.lesson_id, p.status]));
  const open = OPENING_LESSONS.find((l) => status.get(l.id) === "in_progress");
  if (open) return { kind: "continue", lesson: open };
  const next = OPENING_LESSONS.find((l) => status.get(l.id) !== "mastered");
  if (next) return { kind: "begin", lesson: next };
  return { kind: "caught-up" };
}

export function describeStep(step: LearnStep): string {
  switch (step.kind) {
    case "continue":
      return `Continue: ${step.lesson.title}`;
    case "begin":
      return `Begin: ${step.lesson.title}`;
    case "caught-up":
      return "You're up to date. New lessons are on their way.";
  }
}
