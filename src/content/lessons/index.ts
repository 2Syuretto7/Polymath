import type { LessonContent } from "@/lib/types";
import { lesson as m0_1_1 } from "./m0.1.1";
import { lesson as p0_1_1 } from "./p0.1.1";

/** Every authored lesson. Add new lessons here; the graph checks their links at build time. */
export const LESSONS: readonly LessonContent[] = [m0_1_1, p0_1_1];
