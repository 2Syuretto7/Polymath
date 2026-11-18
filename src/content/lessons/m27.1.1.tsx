import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CoinIntervalViz } from "@/components/viz/CoinIntervalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.1.1",
  minutes: 90,
  links: {
    revisits: ["m22.1.2", "m22.1.4", "m9.1.1"],
    foreshadows: ["m27.1.2", "m27.1.3", "m27.1.4"],
  },

  puzzle: (
    <>
      <p>
        Toss a fair coin forever. The chance that the first ten tosses are all heads is <M>{"2^{-10}"}</M>. But what is the
        chance that heads appears in exactly half the tosses in the long run, or that the pattern HHT never occurs? These
        events depend on infinitely many tosses, and each single infinite sequence has probability zero. What framework can
        give them probabilities at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Toss the coin a few times. Each finite run of results is an interval of [0, 1].</p>
      <CoinIntervalViz />
    </>
  ),

  theory: (
    <>
      <Definition title="probability space">
        <p>
          A <strong>probability space</strong> is a measure space <M>{"(\\Omega, \\mathcal{F}, P)"}</M> with{" "}
          <M>{"P(\\Omega) = 1"}</M>. Here Ω is the set of outcomes, <M>{"\\mathcal{F}"}</M> is a σ-algebra of subsets called{" "}
          <strong>events</strong>, and P is countably additive:{" "}
          <M>{"P\\left(\\bigcup_n A_n\\right) = \\sum_n P(A_n)"}</M> for disjoint events. This is Kolmogorov&rsquo;s axiomatisation
          of 1933.
        </p>
      </Definition>

      <Theorem title="basic properties">
        <p>
          From the axioms: <M>{"P(A^c) = 1 - P(A)"}</M>; if <M>{"A \\subseteq B"}</M> then <M>{"P(A) \\le P(B)"}</M>;{" "}
          <M>{"P(\\bigcup A_n) \\le \\sum P(A_n)"}</M>; and P is continuous along monotone sequences: if{" "}
          <M>{"A_n \\uparrow A"}</M> then <M>{"P(A_n) \\to P(A)"}</M>, and if <M>{"A_n \\downarrow A"}</M> then also{" "}
          <M>{"P(A_n) \\to P(A)"}</M>.
        </p>
        <p>
          <strong>Proof of upward continuity.</strong> Write A as the disjoint union of <M>{"A_1"}</M> and{" "}
          <M>{"A_{n+1} \\setminus A_n"}</M>. Countable additivity makes P(A) the limit of the partial sums, which are{" "}
          <M>{"P(A_n)"}</M>.
        </p>
      </Theorem>

      <Example title="coin tossing">
        <p>
          Let <M>{"\\Omega = \\{H, T\\}^{\\mathbb{N}}"}</M>. A <strong>cylinder set</strong> fixes the first n tosses and has
          probability <M>{"2^{-n}"}</M>. Carathéodory&rsquo;s extension theorem extends P from finite unions of cylinders to the
          σ-algebra they generate. Writing H as 1 and T as 0 sends a sequence to a binary expansion, and this identifies P with
          Lebesgue measure on [0, 1], apart from a null set of sequences ending in all heads or all tails.
        </p>
      </Example>

      <Example title="an event of probability zero">
        <p>
          The event &lsquo;all tosses are heads&rsquo; lies in every cylinder H…H, so its probability is at most{" "}
          <M>{"2^{-n}"}</M> for every n, hence zero. Yet it is not impossible. Probability zero is not the same as emptiness,
          and probability one, &lsquo;almost surely&rsquo;, is not certainty.
        </p>
      </Example>

      <Remark title="why σ-algebras">
        <p>
          One cannot assign a probability to every subset of [0, 1] consistently with translation invariance and countable
          additivity: Vitali&rsquo;s non-measurable set rules it out. So events must be restricted to a σ-algebra, and in
          practice the Borel sets, or their completion, are enough for everything we can describe.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What distinguishes a probability space from a general measure space?</p>,
      answer: { kind: "choice", options: ["The whole space has measure 1", "Every set is measurable", "The measure is finitely additive only", "The space is finite"], correct: [0] },
    },
    {
      key: "cyl",
      rung: "check",
      prompt: <p>What is the probability that the first 5 tosses of a fair coin are HTHHT?</p>,
      answer: { kind: "numeric", value: 0.03125, tolerance: 0.0001 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, press clear, then toss H and then T. What is the left endpoint of the interval?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "cont",
      rung: "apply",
      prompt: <p>Let <M>{"A_n"}</M> be the event that no head occurs in the first n tosses. What is <M>{"\\lim P(A_n)"}</M>?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "union",
      rung: "apply",
      prompt: <p>Events A and B have P(A) = 0.6 and P(B) = 0.7. What is the smallest possible value of P(A ∩ B)?</p>,
      answer: { kind: "numeric", value: 0.3, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove countable subadditivity: P(⋃ Aₙ) ≤ Σ P(Aₙ) for any events Aₙ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines disjoint sets Bₙ = Aₙ minus the union of A₁, …, Aₙ₋₁, with the same union as the Aₙ.",
          "Uses countable additivity: P(⋃ Aₙ) = Σ P(Bₙ).",
          "Uses Bₙ ⊆ Aₙ and monotonicity to conclude.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that there is no probability measure on the σ-algebra of all subsets of ℕ that gives every natural number the same probability.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lets c be the common probability of each singleton.",
          "Uses countable additivity: 1 = P(ℕ) = Σ c, which is 0 if c = 0 and infinite if c > 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        We rarely care about the outcome ω itself, but about numbers computed from it: the number of heads, the waiting time,
        the winnings. Such numbers are functions on Ω, and the right condition on them is measurability.
      </p>
      <p>Next, random variables.</p>
    </>
  ),
};
