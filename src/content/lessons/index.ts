import type { LessonContent } from "@/lib/types";
import { lesson as m0_1_1 } from "./m0.1.1";
import { lesson as m0_1_2 } from "./m0.1.2";
import { lesson as m0_1_3 } from "./m0.1.3";
import { lesson as m0_1_4 } from "./m0.1.4";
import { lesson as m0_1_5 } from "./m0.1.5";
import { lesson as p0_1_1 } from "./p0.1.1";
import { lesson as p0_1_2 } from "./p0.1.2";
import { lesson as p0_1_3 } from "./p0.1.3";
import { lesson as p0_1_4 } from "./p0.1.4";

/** Every authored lesson. Add new lessons here; the graph checks their links at build time. */
export const LESSONS: readonly LessonContent[] = [
  m0_1_1, m0_1_2, m0_1_3, m0_1_4, m0_1_5,
  p0_1_1, p0_1_2, p0_1_3, p0_1_4,
];
