import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SqrtGluingViz } from "@/components/viz/SqrtGluingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.3.1",
  minutes: 90,
  links: {
    revisits: ["m30.1.3", "m24.1.1", "m25.2.2"],
    foreshadows: ["m30.3.2", "m30.3.3", "m30.4.2"],
  },

  puzzle: (
    <>
      <p>
        Near any point of the unit circle in ℂ, z has a continuous square root. Choose one on each small arc. Can you always
        piece these local choices together into a continuous square root on the whole circle? If not, what exactly goes
        wrong, and how can the failure be recorded?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a sign for the square root on each of three arcs, and check whether they agree where the arcs overlap.</p>
      <SqrtGluingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="presheaves">
        <p>
          A <strong>presheaf</strong> F of sets (or groups, or rings) on a topological space X assigns to each open set U a
          set F(U), its <strong>sections</strong> over U, and to each inclusion V ⊆ U a <strong>restriction</strong> map{" "}
          <M>{"F(U) \\to F(V)"}</M>, written <M>{"s \\mapsto s|_V"}</M>, such that restricting from U to U does nothing and
          restricting in two steps equals restricting in one. Equivalently, F is a contravariant functor from the category
          of open sets of X, ordered by inclusion, to sets.
        </p>
      </Definition>

      <Definition title="sheaves">
        <p>
          F is a <strong>sheaf</strong> if, whenever U is covered by open sets <M>{"U_i"}</M>: (locality) two sections over
          U that agree on every <M>{"U_i"}</M> are equal; and (gluing) sections <M>{"s_i \\in F(U_i)"}</M> that agree on
          every overlap <M>{"U_i \\cap U_j"}</M> come from a section over U. Sections of a sheaf are determined locally and
          can be assembled from compatible local pieces.
        </p>
      </Definition>

      <Example title="sheaves and non-sheaves">
        <p>
          Continuous functions, smooth functions and holomorphic functions form sheaves: being continuous is a local
          condition. Bounded functions do not: x is bounded on each bounded interval of ℝ but not on ℝ. Constant functions
          do not either, on a space with two components. On a variety, the <strong>structure sheaf</strong>{" "}
          <M>{"\\mathcal{O}_X"}</M> assigns to U the regular functions on U, those locally given by quotients of
          polynomials.
        </p>
      </Example>

      <Theorem title="square roots on the circle">
        <p>
          Let F(U) be the set of continuous functions f on U with <M>{"f(z)^2 = z"}</M>. This is a sheaf, and every point
          has a neighbourhood with two sections. But F(circle) is empty: going once round multiplies any continuous square
          root by −1. Local sections that agree on each overlap of a cover would glue, so no choice of local roots can agree
          on every overlap. This is the double cover <M>{"z \\mapsto z^2"}</M> seen through its sheaf of sections.
        </p>
      </Theorem>

      <Remark title="why sheaves">
        <p>
          Sheaves separate what holds locally from what holds globally. The obstruction to gluing, measured systematically,
          is sheaf cohomology. In scheme theory a space is defined together with its structure sheaf, so that geometry and
          algebra are carried by the same object.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pre",
      rung: "check",
      prompt: <p>A presheaf on X is the same thing as what?</p>,
      answer: { kind: "choice", options: ["A contravariant functor from the open sets of X, ordered by inclusion, to sets", "A continuous function on X", "An open cover of X", "A covariant functor from sets to X"], correct: [0] },
    },
    {
      key: "glue",
      rung: "check",
      prompt: <p>What does the gluing axiom require?</p>,
      answer: { kind: "choice", options: ["Sections agreeing on all overlaps of a cover come from a section on the union", "Every section extends to all of X", "All restriction maps are surjective", "Sections are determined by their values at one point"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the largest number of overlaps that can agree at once?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "bounded",
      rung: "apply",
      prompt: <p>Why do bounded functions on open subsets of ℝ not form a sheaf?</p>,
      answer: { kind: "choice", options: ["Gluing fails: f(x) = x is bounded on each bounded interval but not on ℝ", "Restriction of a bounded function need not be bounded", "Locality fails", "They do form a sheaf"], correct: [0] },
    },
    {
      key: "struct",
      rung: "apply",
      prompt: <p>What does the structure sheaf of a variety assign to an open set U?</p>,
      answer: { kind: "choice", options: ["The ring of regular functions on U", "The set of points of U", "The closure of U", "The polynomial ring in all variables"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that continuous real functions form a sheaf on any topological space.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks locality: functions agreeing on every set of a cover agree at every point, so are equal.",
          "For gluing, defines f on U by f(x) = sᵢ(x) for any i with x in Uᵢ, well defined since the sᵢ agree on overlaps.",
          "Shows f is continuous because its restriction to each open Uᵢ is continuous.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the constant functions to ℝ do not form a sheaf on a space with two components.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes the cover by the two components, which do not overlap.",
          "Takes the constants 1 and 2 on the two pieces, compatible since the overlap is empty.",
          "Notes no constant function restricts to both. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A sheaf is a vast collection of data, one set for every open set. Much of it can be recovered from what happens
        arbitrarily close to each single point.
      </p>
      <p>Next, stalks.</p>
    </>
  ),
};
