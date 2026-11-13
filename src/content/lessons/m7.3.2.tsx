import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CycleViz } from "@/components/viz/CycleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.3.2",
  minutes: 80,
  links: {
    revisits: ["m7.3.1", "m1.6.2", "m7.1.4"],
    foreshadows: ["m7.3.3", "m7.4.4", "m7.4.3"],
  },

  puzzle: (
    <>
      <p>
        Shuffle a deck of cards with a perfect riffle: cut it exactly in half and interleave the halves card by card. Repeat.
        After eight such shuffles a 52-card deck returns to its original order. Why eight? The answer is hidden in how the
        shuffle moves cards around in loops.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each point has one arrow out and one arrow in. Follow the arrows, then swap the ends of two arrows and see what
        happens to the loops.
      </p>
      <CycleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="cycles">
        <p>
          A <strong>cycle</strong> <M>{"(a_1\\,a_2\\,\\ldots\\,a_k)"}</M> sends each <M>{"a_i"}</M> to{" "}
          <M>{"a_{i+1}"}</M> and <M>{"a_k"}</M> to <M>{"a_1"}</M>, fixing everything else. It has length <M>{"k"}</M>; a cycle
          of length 2 is a <strong>transposition</strong>. Cycles are <strong>disjoint</strong> if they move no common point,
          and disjoint cycles commute.
        </p>
      </Definition>

      <Theorem title="cycle decomposition">
        <p>
          Every permutation of a finite set is a product of disjoint cycles, uniquely up to the order of the factors and the
          omission of fixed points. Its order is the least common multiple of the cycle lengths.
        </p>
      </Theorem>

      <Proof>
        <p>
          Say <M>{"i \\sim j"}</M> if <M>{"j = \\sigma^k(i)"}</M> for some <M>{"k"}</M>; this is an equivalence relation, and on
          each class <M>{"\\sigma"}</M> acts as a single cycle <M>{"(i\\,\\sigma(i)\\,\\sigma^2(i)\\ldots)"}</M>, which closes up
          because the set is finite and <M>{"\\sigma"}</M> is injective. The classes, and so the cycles, are determined by{" "}
          <M>{"\\sigma"}</M>. Since disjoint cycles commute, <M>{"\\sigma^m = e"}</M> exactly when every cycle&rsquo;s length
          divides <M>{"m"}</M>.
        </p>
      </Proof>

      <Example title="cycle type and conjugacy">
        <p>
          The <strong>cycle type</strong> lists the cycle lengths. Two permutations are conjugate in <M>{"S_n"}</M> exactly when
          they have the same cycle type: <M>{"\\tau\\sigma\\tau^{-1}"}</M> is obtained by applying <M>{"\\tau"}</M> to every
          entry in the cycles of <M>{"\\sigma"}</M>. So the conjugacy classes of <M>{"S_n"}</M> correspond to the partitions of{" "}
          <M>{"n"}</M>: <M>{"S_4"}</M> has five, for <M>{"4, 3{+}1, 2{+}2, 2{+}1{+}1"}</M> and <M>{"1{+}1{+}1{+}1"}</M>.
        </p>
      </Example>

      <Remark title="transpositions">
        <p>
          A cycle of length <M>{"k"}</M> is a product of <M>{"k - 1"}</M> transpositions:{" "}
          <M>{"(a_1\\,\\ldots\\,a_k) = (a_1\\,a_k)\\cdots(a_1\\,a_3)(a_1\\,a_2)"}</M>. So every permutation is a product of
          transpositions, and the fewest needed is <M>{"n"}</M> minus the number of cycles. The perfect riffle of 52 cards
          splits into cycles whose lengths have least common multiple 8.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "write",
      rung: "check",
      prompt: <p>The permutation of 1, …, 5 in one-line notation 3 1 2 5 4 sends 1 to 3, 2 to 1, and so on. What is it in cycle notation?</p>,
      answer: { kind: "choice", options: ["(1 3 2)(4 5)", "(1 2 3)(4 5)", "(1 3)(2)(4 5)", "(1 3 2 5 4)"], correct: [0] },
    },
    {
      key: "order",
      rung: "check",
      prompt: <p>What is the order of (1 2 3)(4 5)?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "maxord",
      rung: "apply",
      prompt: <p>What is the largest order of an element of S₇? Try cycle types such as 4 + 3.</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "classes",
      rung: "apply",
      prompt: <p>How many conjugacy classes does S₅ have?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "trans",
      rung: "apply",
      prompt: <p>What is the fewest number of transpositions whose product is (1 2 3 4 5)?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that disjoint cycles commute. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes disjoint cycles α and β and checks any point x in three cases: moved by α, moved by β, or by neither.",
          "In each case αβ(x) = βα(x), since each cycle fixes the points the other moves.",
        ],
      },
    },
    {
      key: "conj",
      rung: "stretch",
      prompt: <p>Show that τ(1 2 3)τ⁻¹ = (τ(1) τ(2) τ(3)) for any permutation τ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks τ(1) maps to τ(2): τ(1 2 3)τ⁻¹(τ(1)) = τ(2), and similarly for the others.",
          "Notes points not of the form τ(i) for i = 1, 2, 3 are fixed. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how every permutation splits into disjoint cycles, why the order is the lcm of the cycle lengths, how cycle type determines conjugacy in Sₙ, and how cycles are built from transpositions.",

  glimpse: (
    <p>
      The next lesson shows that a permutation&rsquo;s parity, odd or even number of transpositions, is well defined, which
      gives the alternating group. Cycle types return in the class equation, and in counting colourings with Burnside&rsquo;s
      lemma.
    </p>
  ),
};
