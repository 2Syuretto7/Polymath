import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { VitaliViz } from "@/components/viz/VitaliViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.1.5",
  minutes: 85,
  links: {
    revisits: ["m22.1.4", "m1.6.2", "m6.1.3"],
    foreshadows: ["m22.2.1", "m22.3.3", "m22.5.3"],
  },

  puzzle: (
    <>
      <p>
        Cut a solid ball into five pieces, move them by rotations and translations only, and reassemble them into two solid
        balls, each the same size as the original. This is a theorem, proved by Banach and Tarski in 1924. Where has the extra
        volume come from?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Vitali&rsquo;s construction on the circle.</p>
      <VitaliViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Vitali set">
        <p>
          On <M>{"[0, 1)"}</M>, regarded as a circle by adding modulo 1, say <M>{"x \\sim y"}</M> if <M>{"x - y \\in \\mathbb{Q}"}</M>.
          This is an equivalence relation with uncountably many classes, each countable. By the axiom of choice there is a set{" "}
          <M>V</M> containing exactly one point of each class.
        </p>
      </Definition>

      <Theorem title="Vitali (1905)">
        <p>The set <M>V</M> is not Lebesgue measurable.</p>
        <p>
          For each rational <M>{"q \\in [0, 1)"}</M>, let <M>{"V_q = V + q \\pmod 1"}</M>. The <M>{"V_q"}</M> are pairwise
          disjoint, since a point in two of them would give two points of <M>V</M> differing by a rational; and they cover{" "}
          <M>{"[0, 1)"}</M>, since every point is equivalent to some point of <M>V</M>. If <M>V</M> were measurable, each{" "}
          <M>{"V_q"}</M> would be too, with the same measure <M>m</M>, and
        </p>
        <MD>{"1 = \\lambda([0, 1)) = \\sum_{q} \\lambda(V_q) = \\sum_q m \\in \\{0, \\infty\\},"}</MD>
        <p>a contradiction.</p>
      </Theorem>

      <Example title="what went wrong">
        <p>
          Nothing in the definition of Lebesgue measure is at fault. The argument shows that no measure on all subsets of{" "}
          <M>{"\\mathbb{R}"}</M> can be countably additive, translation invariant and give <M>{"[0, 1)"}</M> measure 1. Something
          must give, and we give up measuring every set.
        </p>
      </Example>

      <Remark title="Banach-Tarski and Solovay">
        <p>
          In three dimensions the rotation group contains a free group on two generators, whose paradoxical decomposition
          transfers to the sphere and then the ball, again by choosing points. The pieces are non-measurable, so volume is not
          violated, only undefined. Choice is essential: in 1970 Solovay built a model of set theory without full choice
          (assuming an inaccessible cardinal) in which every set of reals is Lebesgue measurable. Every set you can explicitly
          define is measurable in practice.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rel",
      rung: "check",
      prompt: <p>In Vitali&rsquo;s construction, when are x and y equivalent?</p>,
      answer: { kind: "choice", options: ["When x − y is rational", "When x = y", "When x − y is irrational", "When x and y are both rational"], correct: [0] },
    },
    {
      key: "choice",
      rung: "check",
      prompt: <p>Which axiom is used to form the set V?</p>,
      answer: { kind: "choice", options: ["The axiom of choice", "The axiom of infinity", "Extensionality", "Foundation"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s contradiction, what is the sum m + m + m + ⋯ when m = 0?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many translates V + q are used?</p>,
      answer: { kind: "choice", options: ["Countably many, one for each rational in [0, 1)", "Finitely many", "Uncountably many", "Exactly two"], correct: [0] },
    },
    {
      key: "bt",
      rung: "apply",
      prompt: <p>Why does the Banach-Tarski paradox not contradict the preservation of volume?</p>,
      answer: { kind: "choice", options: ["The pieces are non-measurable, so they have no volume", "Volume is not preserved by rotations", "The balls are hollow", "It uses infinitely many pieces"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the sets V + q (mod 1), for rational q in [0, 1), are pairwise disjoint and cover [0, 1).</p>,
      answer: {
        kind: "written",
        rubric: [
          "For disjointness: a common point gives v + q = v′ + q′ mod 1, so v − v′ is rational, hence v = v′ and q = q′.",
          "For covering: any x is equivalent to some v in V, so x − v is rational, and x = v + q mod 1 for q in [0, 1).",
          "States both conclusions clearly.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Since it yields non-measurable sets and Banach-Tarski, should mathematicians reject the axiom of choice? Give a reason.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Weighs what choice gives, such as bases of every vector space and Tychonoff’s theorem, against its strange consequences.",
          "Gives a reason for a view, perhaps noting that the strange sets are never explicitly definable.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With measurable sets in hand, we can say which functions to integrate: those for which the set where{" "}
        <M>{"f > a"}</M> is measurable, for every <M>a</M>. The class is closed under every limit operation, which the
        continuous or Riemann integrable functions are not.
      </p>
      <p>
        Next, measurable functions: the definition, closure under sums, products and limits, and the approximation of any
        measurable function by simple functions.
      </p>
    </>
  ),
};
