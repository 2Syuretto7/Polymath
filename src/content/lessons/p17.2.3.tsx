import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { SkolemHullViz } from "@/components/viz/SkolemHullViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p17.2.3",
  minutes: 85,
  links: {
    revisits: ["p17.2.2", "p17.2.1", "m1.4.1"],
    foreshadows: ["p17.3.1", "p22.5.1", "m20.3.4"],
  },

  puzzle: (
    <>
      <p>
        Set theory proves that the real numbers are uncountable: no list can contain them all. Yet there is a model of set
        theory in which the whole universe of sets is countable. How can a countable model contain a set that it itself says
        is uncountable?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Close a small set under operations, stage by stage, and count what you get.</p>
      <SkolemHullViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="downward Löwenheim–Skolem">
        <p>
          If a set of sentences in a countable language has a model, it has a countable model. Indeed, inside any infinite
          model there is a countable <strong>elementary substructure</strong>, satisfying exactly the same sentences with
          parameters from it. Proof idea: start with a countable set and close it under witnesses, adding for each true
          existential claim ∃x φ(x, a) about its elements some element satisfying it. Each stage adds countably many elements,
          and countably many stages give a countable set. Henkin&rsquo;s term model is already countable, which gives another
          proof.
        </p>
      </Theorem>

      <Theorem title="upward Löwenheim–Skolem">
        <p>
          If a set of sentences has an infinite model, it has models of every infinite size. Proof: add uncountably many new
          names with sentences saying they are all different; every finite subset is satisfiable in the infinite model, so
          compactness gives a model at least that big.
        </p>
      </Theorem>

      <Example title="Skolem's paradox">
        <p>
          ZFC proves &ldquo;there is an uncountable set&rdquo;. If ZFC has a model, it has a countable model M. Inside M some
          set r satisfies &ldquo;r is uncountable&rdquo;, though from outside r has only countably many members. Skolem&rsquo;s
          resolution: &ldquo;r is uncountable&rdquo; in M says that M contains no bijection between r and the natural numbers.
          A bijection exists, but outside M. There is no contradiction, only a mismatch between what the model can see and
          what is true about it.
        </p>
      </Example>

      <Remark title="relativity of set theory">
        <p>
          Skolem concluded that set-theoretic notions such as &ldquo;uncountable&rdquo; are relative to a model and have no
          absolute meaning. Hilary Putnam extended this into a model-theoretic argument against metaphysical realism about
          reference. Others reply that we understand &ldquo;all subsets&rdquo; in a way no countable model captures, or that
          the paradox shows only the limits of first-order formalisation, as compactness did.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "down",
      rung: "check",
      prompt: <p>What does the downward Löwenheim–Skolem theorem say, for a countable language?</p>,
      answer: {
        kind: "choice",
        options: ["Any set of sentences with a model has a countable model", "Every model is countable", "Every countable set is finite", "Any set of sentences with a model has an uncountable model"],
        correct: [0],
      },
    },
    {
      key: "resolve",
      rung: "check",
      prompt: <p>How did Skolem resolve his paradox?</p>,
      answer: {
        kind: "choice",
        options: [
          "‘Uncountable’ inside the model means the model contains no bijection with ℕ, though one exists outside it.",
          "ZFC is inconsistent.",
          "The real numbers are really countable.",
          "Countable models of ZFC do not exist.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with +, −, × and ÷, how many elements are there after one stage of closure?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "up",
      rung: "apply",
      prompt: <p>Which theorem is used to prove the upward Löwenheim–Skolem theorem?</p>,
      answer: { kind: "choice", options: ["Compactness", "Gödel’s incompleteness theorem", "Expressive adequacy", "The deduction theorem"], correct: [0] },
    },
    {
      key: "reals",
      rung: "apply",
      prompt: <p>The first-order theory of the real numbers as an ordered field has a countable model. Which of these could it be?</p>,
      answer: { kind: "choice", options: ["The real algebraic numbers", "The rationals", "The integers", "The natural numbers"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the union of countably many finite sets is countable, the fact the visualisation relies on.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lists the sets as S₀, S₁, S₂, … and lists the members of each finite set.",
          "Lists all members of S₀, then the new members of S₁, and so on, so every element appears at some finite position.",
          "Concludes that the union is countable, finite or countably infinite.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does Skolem&rsquo;s paradox show that &ldquo;uncountable&rdquo; has no absolute meaning?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the relativity reading: what counts as uncountable depends on which bijections the model contains.",
          "Considers a reply, such as that our intended notion of ‘all subsets’ is not captured by any first-order theory.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the downward and upward Löwenheim–Skolem theorems, Skolem’s paradox about countable models of set theory, and Skolem’s resolution of it.",

  glimpse: (
    <p>
      Next, the limits of formal systems: Gödel&rsquo;s incompleteness theorems, and the many things they are wrongly said to
      show.
    </p>
  ),
};
