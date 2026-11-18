import { M } from "@/components/Math";
import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { VStagesViz } from "@/components/viz/VStagesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.6.1",
  minutes: 90,
  links: {
    revisits: ["m20.5.4", "m1.4.5", "m1.8.3"],
    foreshadows: ["m20.6.2", "m20.6.5", "m20.6.6"],
  },

  puzzle: (
    <>
      <p>
        Frege took it as obvious that any condition defines a set: the set of all x such that φ(x). Russell showed in 1901
        that the condition &ldquo;x is not a member of itself&rdquo; defines a set that is a member of itself exactly when
        it is not. Which sets exist, then, and on what principle?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Build the universe of sets from nothing, one stage at a time.</p>
      <VStagesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the cumulative hierarchy">
        <p>
          Set <M>{"V_0 = \\varnothing"}</M>, <M>{"V_{\\alpha+1} = \\mathcal P(V_\\alpha)"}</M>, and at limit stages take the
          union of earlier stages. A set is formed only at a stage after all its members. Russell&rsquo;s set cannot exist
          because there is no stage at which all sets have been formed.
        </p>
      </Definition>

      <Definition title="the axioms of ZFC">
        <p>
          <strong>Extensionality</strong>: sets with the same members are equal. <strong>Pairing</strong>,{" "}
          <strong>union</strong> and <strong>power set</strong>: {"{"}a, b{"}"}, ⋃a and 𝒫(a) exist. <strong>Infinity</strong>:
          there is a set containing ∅ and closed under x ↦ x ∪ {"{"}x{"}"}. <strong>Separation</strong>: for any set a and
          formula φ, {"{"}x ∈ a : φ(x){"}"} exists. <strong>Replacement</strong>: the image of a set under a definable function
          is a set. <strong>Foundation</strong>: every non-empty set has an ∈-minimal member. <strong>Choice</strong>: every
          family of non-empty sets has a choice function.
        </p>
      </Definition>

      <Example title="Russell blocked">
        <p>
          Separation only carves subsets out of an existing set a. Apply it to x ∉ x: R = {"{"}x ∈ a : x ∉ x{"}"} exists, and
          the paradox now shows only that R ∉ a. So no set contains every set: there is no universal set.
        </p>
      </Example>

      <Remark title="mathematics in sets">
        <p>
          Von Neumann&rsquo;s numerals 0 = ∅, n + 1 = n ∪ {"{"}n{"}"} give the natural numbers; Kuratowski&rsquo;s pair
          (a, b) = {"{"}{"{"}a{"}"}, {"{"}a, b{"}"}{"}"} gives relations and functions; Dedekind cuts give the reals. ZFC was
          assembled by Zermelo (1908), with replacement added by Fraenkel and Skolem (1922). By Gödel&rsquo;s second theorem,
          ZFC cannot prove its own consistency.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sep",
      rung: "check",
      prompt: <p>How does the separation axiom avoid Russell&rsquo;s paradox?</p>,
      answer: {
        kind: "choice",
        options: ["It only forms subsets of a set that already exists", "It forbids the symbol ∈", "It makes every set finite", "It allows only sets of numbers"],
        correct: [0],
      },
    },
    {
      key: "inf",
      rung: "check",
      prompt: <p>Which axiom guarantees an infinite set?</p>,
      answer: { kind: "choice", options: ["Infinity", "Pairing", "Extensionality", "Foundation"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many sets does the stage V₄ contain?</p>,
      answer: { kind: "numeric", value: 16 },
    },
    {
      key: "v3",
      rung: "apply",
      prompt: <p>How many elements does V₃ have?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>In von Neumann&rsquo;s coding, what is the number 2?</p>,
      answer: { kind: "choice", options: ["{∅, {∅}}", "{{∅}}", "{∅, ∅}", "{2}"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove from separation that there is no set of all sets.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes a set U contains every set and forms R = {x ∈ U : x ∉ x} by separation.",
          "Notes R ∈ U, so asking whether R ∈ R gives R ∈ R if and only if R ∉ R.",
          "Concludes the contradiction refutes the existence of U.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Are the ZFC axioms true, or just useful? What could make them true?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Mentions a justification, such as the iterative conception of set or the success of mathematics built on them.",
          "Considers an alternative view, such as formalism or pluralism about set theories.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The stages of the hierarchy are indexed by ω and beyond: V₀, V₁, …, then Vω, Vω+1 and so on. The indices are ordinals,
        the measures of well-ordered length, which extend counting past the finite.
      </p>
      <p>
        Next, the ordinals: von Neumann&rsquo;s definition, successor and limit ordinals, ω + 1 and ω · 2, why 1 + ω equals ω
        but ω + 1 does not, and why every well-order looks like exactly one ordinal.
      </p>
    </>
  ),
};
