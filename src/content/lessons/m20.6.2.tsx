import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { OrdinalTicksViz } from "@/components/viz/OrdinalTicksViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.6.2",
  minutes: 85,
  links: {
    revisits: ["m20.6.1", "m1.5.4", "m1.8.2"],
    foreshadows: ["m20.6.3", "m20.6.4", "m20.6.6"],
  },

  puzzle: (
    <>
      <p>
        Count 0, 1, 2, … through all the natural numbers. Can you keep counting after that? Cantor, studying where a
        Fourier series could fail to converge, found he needed to: he removed isolated points from a set again and again, and
        then again after infinitely many removals.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the order types. Which ones are really different?</p>
      <OrdinalTicksViz />
    </>
  ),

  theory: (
    <>
      <Definition title="well-orders and ordinals">
        <p>
          A <strong>well-order</strong> is a linear order in which every non-empty subset has a least element. An{" "}
          <strong>ordinal</strong>, following von Neumann, is a transitive set well-ordered by ∈. Each ordinal is the set of
          smaller ordinals: 0 = ∅, 1 = {"{"}0{"}"}, 2 = {"{"}0, 1{"}"}, and ω = {"{"}0, 1, 2, …{"}"}.
        </p>
      </Definition>

      <Definition title="successors and limits">
        <p>
          The <strong>successor</strong> of α is <M>{"\\alpha + 1 = \\alpha \\cup \\{\\alpha\\}"}</M>. A non-zero ordinal that is
          not a successor is a <strong>limit</strong>, the union of all smaller ordinals: ω, ω · 2, ω². The ordinals go on: 0,
          1, 2, …, ω, ω + 1, …, ω · 2, …, ω², …, <M>{"\\omega^\\omega"}</M>, …
        </p>
      </Definition>

      <Theorem title="representation">
        <p>
          Every well-ordered set is order-isomorphic to exactly one ordinal, its order type. The proof uses replacement to
          collect the order types of the initial segments.
        </p>
      </Theorem>

      <Example title="arithmetic is not commutative">
        <p>
          α + β is the order type of a copy of α followed by a copy of β. So 1 + ω is a point followed by ω: still ω. But
          ω + 1 is ω followed by a point, which has a largest element, so ω + 1 ≠ ω. Similarly 2 · ω = ω, while ω · 2 = ω + ω.
        </p>
      </Example>

      <Remark title="Burali-Forti">
        <p>
          The ordinals are well-ordered by ∈, and there is no set of all ordinals: if there were, it would itself be an ordinal
          larger than every ordinal, including itself. Like Russell&rsquo;s, this paradox shows some collections are too large
          to be sets.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "wo",
      rung: "check",
      prompt: <p>What is a well-order?</p>,
      answer: {
        kind: "choice",
        options: ["A linear order in which every non-empty subset has a least element", "An order with a largest element", "Any finite order", "An order with no gaps"],
        correct: [0],
      },
    },
    {
      key: "limit",
      rung: "check",
      prompt: <p>Which is a limit ordinal?</p>,
      answer: { kind: "choice", options: ["ω · 2", "ω + 1", "5", "ω + 2"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which of these is equal to ω?</p>,
      answer: { kind: "choice", options: ["1 + ω", "ω + 1", "ω + 2", "ω · 2"], correct: [0] },
    },
    {
      key: "three",
      rung: "apply",
      prompt: <p>How many elements does the ordinal 3 have, as a von Neumann set?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "evens",
      rung: "apply",
      prompt: <p>Order ℕ by putting all even numbers first, in order, then all odd numbers. What is the order type?</p>,
      answer: { kind: "choice", options: ["ω · 2", "ω", "ω + 1", "2"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that ω + 1 is not isomorphic to ω as an order.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that ω + 1 has a largest element.",
          "Notes that ω has no largest element, since every n has a successor.",
          "Concludes that an order isomorphism would preserve a largest element, so none exists.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>ω + 1 and ω have the same number of elements but different order types. Which notion better deserves the name &ldquo;how many&rdquo;?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes size by bijection from length by order isomorphism.",
          "Gives a reason for preferring one, or for keeping both for different purposes.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        ω, ω + 1, ω · 2 and ω² are all different ordinals, yet they are all countable: each can be put in bijection with ℕ.
        Ordinals measure length; for size we need a coarser notion.
      </p>
      <p>
        Next, cardinals: the size of a set as the least ordinal in bijection with it, the alephs ℵ₀, ℵ₁, ℵ₂, …, cardinal
        arithmetic, and Cantor&rsquo;s theorem that a set&rsquo;s power set is always strictly larger.
      </p>
    </>
  ),
};
