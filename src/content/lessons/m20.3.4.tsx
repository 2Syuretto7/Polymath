import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { SkolemHullViz } from "@/components/viz/SkolemHullViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.3.4",
  minutes: 85,
  links: {
    revisits: ["m20.3.3", "m20.3.1", "m1.8.2"],
    foreshadows: ["m20.6.1", "m20.6.3", "m38.1.1"],
  },

  puzzle: (
    <>
      <p>
        The real numbers are uncountable, and their first-order theory as an ordered field says a great deal about them.
        Could some countable structure satisfy exactly the same first-order sentences as the reals? And could a theory with a
        countable model also have a model as large as you like?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Close the set {"{"}0, 1{"}"} under the field operations, stage by stage. Each stage is finite, so the result is
        countable, yet it is closed under everything the operations demand.
      </p>
      <SkolemHullViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="downward Löwenheim-Skolem">
        <p>
          If a theory in a countable language has an infinite model, it has a countable model. More sharply, every structure
          𝔅 for a countable language has a countable <strong>elementary substructure</strong> 𝔄: a substructure such that for
          every formula φ and elements <M>{"a_1, \\ldots, a_n"}</M> of 𝔄, 𝔄 ⊨ φ[a] if and only if 𝔅 ⊨ φ[a].
        </p>
      </Theorem>

      <Definition title="the idea of the proof">
        <p>
          Start with a countable subset. For each formula ∃y φ(x, y) and each tuple from the current set where 𝔅 has a
          witness, add one witness. There are countably many formulas and tuples, so each stage is countable, and so is the
          union of countably many stages. The Tarski-Vaught test then shows the union is elementary: every existential
          demand made inside it is met inside it. The Henkin construction gives the first form directly, since the term
          model of a countable language is countable.
        </p>
      </Definition>

      <Theorem title="upward Löwenheim-Skolem">
        <p>
          If a theory has an infinite model, then for every infinite cardinal κ at least the size of the language it has a
          model of size κ. Proof: add κ new constants <M>{"c_i"}</M> with sentences <M>{"c_i \\neq c_j"}</M> for{" "}
          <M>{"i \\neq j"}</M>. Any finite subset is satisfied in the given infinite model, so by compactness the whole set
          has a model, of size at least κ; then apply the downward theorem for the larger language to cut it to exactly κ.
        </p>
      </Theorem>

      <Example title="Skolem's paradox">
        <p>
          ZFC proves that there is an uncountable set, such as the set of real numbers. Yet, if ZFC has a model, it has a
          countable one. There is no contradiction. Inside the countable model, the set playing the reals is countable from
          outside, but the model contains no bijection between it and the natural numbers. &ldquo;Uncountable&rdquo; means
          &ldquo;no bijection exists&rdquo;, and what exists depends on the model.
        </p>
      </Example>

      <Remark title="no first-order theory with an infinite model fixes its size">
        <p>
          Together, the two theorems show that no first-order theory with an infinite model has, up to isomorphism, only
          one model. Second-order logic can characterise ℕ and ℝ, but loses completeness and compactness. This trade-off is
          a recurring theme of model theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "down",
      rung: "check",
      prompt: <p>What does the downward Löwenheim-Skolem theorem give?</p>,
      answer: {
        kind: "choice",
        options: ["A countable elementary substructure of any structure for a countable language", "An uncountable model of every theory", "A finite model of every theory", "A proof of every valid sentence"],
        correct: [0],
      },
    },
    {
      key: "up",
      rung: "check",
      prompt: <p>Which theorem is the main tool in proving the upward theorem?</p>,
      answer: { kind: "choice", options: ["Compactness", "Soundness", "The deduction theorem", "Cantor’s theorem"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, using only +, −, × and ÷, does any stage contain an irrational number?</p>,
      answer: { kind: "choice", options: ["No: everything generated from 0 and 1 is rational", "Yes, at stage 2", "Yes, at stage 3", "Only √2"], correct: [0] },
    },
    {
      key: "elem",
      rung: "apply",
      prompt: <p>𝔄 is an elementary substructure of 𝔅. A sentence σ is true in 𝔅. What follows?</p>,
      answer: { kind: "choice", options: ["σ is true in 𝔄", "σ is false in 𝔄", "Nothing", "𝔄 = 𝔅"], correct: [0] },
    },
    {
      key: "skolem",
      rung: "apply",
      prompt: <p>How is Skolem&rsquo;s paradox resolved?</p>,
      answer: {
        kind: "choice",
        options: ["The countable model lacks any bijection between its ‘reals’ and its natural numbers", "ZFC is inconsistent", "The reals are countable after all", "Löwenheim-Skolem fails for set theory"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a theory with an infinite model has a model of size at least κ, for any infinite cardinal κ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Adds κ new constants with sentences saying distinct constants name distinct elements.",
          "Shows every finite subset has a model by interpreting the finitely many constants used as distinct elements of the given infinite model.",
          "Applies compactness and notes the resulting model has at least κ elements.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does Skolem&rsquo;s paradox show that uncountability is relative, with no absolute fact about it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that countability within a model depends on which bijections the model contains.",
          "Weighs whether there is an intended model in which the question has an absolute answer.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        First-order logic is complete, compact and blind to size. The next chapter turns to what a first-order theory can
        say about itself. Gödel&rsquo;s key idea was to code formulas and proofs as numbers, so that arithmetic, which talks
        about numbers, can also talk about its own syntax.
      </p>
      <p>
        Next, arithmetisation: how &ldquo;n codes a proof of the formula coded by k&rdquo; becomes a plain property of two
        numbers that a machine can check.
      </p>
    </>
  ),
};
