import type { LessonNode } from "./graph";
import type { Track } from "./types";
import { REVIEW_MAX, REVIEW_MIN } from "./parton/recallPrompts";

/** How many questions a review session shows when this many ideas are due: three to five. */
export const reviewSessionSize = (due: number) => Math.max(REVIEW_MIN, Math.min(REVIEW_MAX, due));

export type LearnInputs = {
  /** A lesson started but not yet mastered, most recent first. */
  openLesson: LessonNode | null;
  dueReviews: number;
  /** A review session was finished since the last lesson work, so a lesson comes next. */
  reviewedSinceLesson?: boolean;
  /** Unlocked, authored, unmastered lessons in curriculum order. */
  frontier: LessonNode[];
  /** Track of the most recently started lesson, to alternate. */
  lastTrack: Track | null;
  newLessonsToday: number;
  pace: number;
};

export type LearnStep =
  | { kind: "continue"; lesson: LessonNode }
  | { kind: "review"; count: number }
  | { kind: "begin"; lesson: LessonNode }
  | { kind: "rest"; reason: "pace" | "waiting" };

/** Reviews below this many wait until a lesson is finished, so they never crowd out new learning. */
const REVIEW_THRESHOLD = 1;

/**
 * The single best next step:
 * 1. finish what is open;
 * 2. reviews that are due, unless a review session has just been finished: then a lesson comes first;
 * 3. begin the next unlocked lesson, alternating mathematics and philosophy,
 *    within the daily pace for new lessons.
 */
export function chooseNextStep(input: LearnInputs): LearnStep {
  if (input.openLesson) return { kind: "continue", lesson: input.openLesson };
  if (input.dueReviews >= REVIEW_THRESHOLD && !input.reviewedSinceLesson) return { kind: "review", count: input.dueReviews };
  if (input.newLessonsToday >= input.pace) return { kind: "rest", reason: "pace" };
  if (input.frontier.length === 0) return { kind: "rest", reason: "waiting" };
  const other = input.lastTrack === "mathematics" ? "philosophy" : "mathematics";
  const preferred = input.frontier.find((n) => n.track === other);
  return { kind: "begin", lesson: preferred ?? input.frontier[0] };
}

export function describeStep(step: LearnStep): string {
  switch (step.kind) {
    case "continue":
      return `Continue: ${step.lesson.title}`;
    case "review":
      return `${reviewSessionSize(step.count)} questions to review`;
    case "begin":
      return `Begin: ${step.lesson.title}`;
    case "rest":
      return step.reason === "pace"
        ? "That's today's new learning done. Come back tomorrow."
        : "You're ahead of the writing. New lessons are on their way.";
  }
}
