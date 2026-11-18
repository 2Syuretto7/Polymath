import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ZornChainViz } from "@/components/viz/ZornChainViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.6.5",
  minutes: 90,
  links: {
    revisits: ["m20.6.4", "m1.6.3", "m7.6.2"],
    foreshadows: ["m20.6.6", "m22.1.5", "m38.1.1"],
  },

  puzzle: (
    <>
      <p>
        Russell put it this way. Given infinitely many pairs of shoes, you can pick one shoe from each pair: always take the
        left one. Given infinitely many pairs of socks, there is no rule to tell the two socks of a pair apart. Can you still
        choose one from each pair? Is &ldquo;choose&rdquo; even meaningful without a rule?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Climb a chain of independent sets until you can go no higher.</p>
      <ZornChainViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the axiom of choice">
        <p>
          For every family of non-empty sets there is a <strong>choice function</strong> picking one element from each. For
          finitely many sets this is provable without the axiom; for infinitely many, in general, it is not.
        </p>
      </Definition>

      <Theorem title="equivalents (over ZF)">
        <p>
          The following are equivalent. <strong>Choice.</strong> <strong>Well-ordering theorem</strong> (Zermelo, 1904):
          every set can be well-ordered. <strong>Zorn&rsquo;s lemma</strong>: if every chain in a non-empty partial order has
          an upper bound, there is a maximal element. From choice to Zorn: use a choice function to climb, by transfinite
          recursion, picking a strict upper bound at each step; the climb must stop, since it cannot outrun the ordinals, and it
          stops at a maximal element.
        </p>
      </Theorem>

      <Example title="Zorn at work">
        <p>
          Every vector space has a basis: the linearly independent sets, ordered by inclusion, have unions of chains as upper
          bounds, and a maximal independent set spans. Every non-zero ring with 1 has a maximal ideal. Every field has an
          algebraic closure. The Hahn-Banach and Tychonoff theorems use it too.
        </p>
      </Example>

      <Remark title="why it was controversial">
        <p>
          Choice asserts existence without construction. It implies that ℝ has a well-order no one can describe, that a
          non-measurable set of reals exists, and the Banach-Tarski paradox: a ball can be cut into five pieces and reassembled
          into two balls of the same size. Gödel (1938) showed choice consistent with ZF, and Cohen (1963) showed its negation
          consistent too. Most mathematicians now accept it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "zorn",
      rung: "check",
      prompt: <p>What does Zorn&rsquo;s lemma say?</p>,
      answer: {
        kind: "choice",
        options: ["If every chain has an upper bound, there is a maximal element", "Every set is finite", "Every partial order is linear", "Every chain is finite"],
        correct: [0],
      },
    },
    {
      key: "fin",
      rung: "check",
      prompt: <p>When is the axiom of choice not needed?</p>,
      answer: { kind: "choice", options: ["For finitely many non-empty sets", "For infinitely many sets", "For uncountably many sets", "It is always needed"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many elements does every maximal independent set have?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "socks",
      rung: "apply",
      prompt: <p>Why do infinitely many pairs of shoes need no axiom of choice, but socks do?</p>,
      answer: {
        kind: "choice",
        options: ["For shoes there is a rule, take the left one; for socks there is none", "Shoes are finite", "Socks are uncountable", "Shoes are well-ordered by size"],
        correct: [0],
      },
    },
    {
      key: "bt",
      rung: "apply",
      prompt: <p>Which is a consequence of the axiom of choice?</p>,
      answer: { kind: "choice", options: ["The Banach-Tarski paradox", "Russell’s paradox", "The halting problem", "Gödel’s incompleteness"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use Zorn&rsquo;s lemma to prove that every vector space has a basis.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers the linearly independent subsets ordered by inclusion, a non-empty partial order.",
          "Shows the union of a chain is independent, since any dependence involves finitely many vectors from one member, so it is an upper bound.",
          "Takes a maximal independent set and shows it spans, since otherwise a vector outside its span could be added.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should a mathematician accept an axiom that proves the Banach-Tarski paradox?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that the pieces are non-measurable, so no volume is violated in a measurable sense.",
          "Weighs this against choice’s usefulness elsewhere.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Choice makes every set well-orderable, so every set has a cardinal, an aleph. In particular the real numbers have
        size some aleph, at least ℵ₁. Which one is it?
      </p>
      <p>
        Next, the continuum hypothesis, Cantor&rsquo;s conjecture that the reals have size ℵ₁: Hilbert&rsquo;s first problem,
        Gödel&rsquo;s and Cohen&rsquo;s proofs that ZFC can neither prove nor refute it, and the debate over whether it
        nonetheless has an answer.
      </p>
    </>
  ),
};
