import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { NonstandardViz } from "@/components/viz/NonstandardViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.3.3",
  minutes: 85,
  links: {
    revisits: ["m20.3.2", "m20.1.3", "m1.8.1"],
    foreshadows: ["m20.3.4", "m20.6.3", "m38.1.1"],
  },

  puzzle: (
    <>
      <p>
        Write down every true sentence about the natural numbers in the language of 0, successor, addition, multiplication
        and order. Surely the only structure satisfying all of them is the natural numbers themselves, perhaps relabelled?
        After all, you have said everything that is true.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Add a new constant c and the sentences c &gt; 0, c &gt; 1, and so on. Slide to take more of them, then take all of
        them at once.
      </p>
      <NonstandardViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="compactness">
        <p>
          A set Γ of sentences has a model if and only if every finite subset of Γ has a model.
        </p>
      </Theorem>

      <Definition title="the proof">
        <p>
          One direction is trivial. For the other, suppose Γ has no model. By completeness, Γ is inconsistent: it proves a
          contradiction. A proof is finite, so it uses only finitely many premises <M>{"\\gamma_1, \\ldots, \\gamma_k"}</M>{" "}
          from Γ. Then that finite set is inconsistent, and by soundness it has no model.
        </p>
      </Definition>

      <Example title="finiteness is not first-order">
        <p>
          Let <M>{"\\lambda_n"}</M> say there are at least n elements: <M>{"\\exists x_1 \\ldots \\exists x_n"}</M> with all
          the <M>{"x_i"}</M> distinct. Suppose a theory T has arbitrarily large finite models. Then every finite subset of T ∪{" "}
          {"{"}<M>{"\\lambda_1, \\lambda_2, \\ldots"}</M>{"}"} has a model, namely a large enough finite model of T. By
          compactness the whole set has a model, which is infinite. So no set of sentences has exactly the finite structures
          as its models.
        </p>
      </Example>

      <Example title="nonstandard arithmetic">
        <p>
          Let Th(ℕ) be all sentences true in the natural numbers, and add a constant c with the sentences c &gt; 0, c &gt; 1,
          c &gt; 2, and so on. A finite subset mentions only finitely many of these, so ℕ with c interpreted as a large number
          satisfies it. By compactness there is a model of everything: it satisfies every truth of arithmetic, yet has an
          element larger than every standard number. Every true sentence still fails to pin ℕ down.
        </p>
      </Example>

      <Remark title="why the name">
        <p>
          The theorem is a topological compactness: in the space of complete theories, the sets of theories containing a given
          sentence form a basis of closed sets, and the theorem says any family of them with the finite intersection property
          has a common point. Lindström showed in 1969 that first-order logic is the strongest logic having both compactness
          and the downward Löwenheim-Skolem property, so these limitations are the price of its good behaviour.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the compactness theorem say?</p>,
      answer: {
        kind: "choice",
        options: ["Γ has a model if every finite subset of Γ has one", "Every model is finite", "Every theory is finite", "Every consistent theory is complete"],
        correct: [0],
      },
    },
    {
      key: "why",
      rung: "check",
      prompt: <p>Which fact about proofs drives the proof of compactness?</p>,
      answer: {
        kind: "choice",
        options: ["A proof is finite, so it uses only finitely many premises", "Proofs can be infinitely long", "Every sentence has a proof", "Proofs never use equality"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>Which natural number would you use for c to satisfy c &gt; 0, c &gt; 1, …, c &gt; 9? Give the smallest.</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "fin",
      rung: "apply",
      prompt: <p>What does compactness show about the property of being finite?</p>,
      answer: {
        kind: "choice",
        options: ["No set of first-order sentences has exactly the finite structures as its models", "Every finite structure is infinite", "Finiteness is defined by one sentence", "Only countable structures are finite"],
        correct: [0],
      },
    },
    {
      key: "nonst",
      rung: "apply",
      prompt: <p>The nonstandard model of Th(ℕ) satisfies every true sentence of arithmetic. In what way does it differ from ℕ?</p>,
      answer: {
        kind: "choice",
        options: ["It contains an element greater than every standard number", "It makes 2 + 2 = 5 true", "It has no zero", "It is finite"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if a theory T has arbitrarily large finite models, then it has an infinite model.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Adds the sentences saying there are at least n elements, for every n.",
          "Shows every finite subset has a model, using a finite model of T at least as large as the largest n mentioned.",
          "Applies compactness to get a model of the whole set, which must be infinite.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the existence of nonstandard models of arithmetic a defect of first-order logic, or a fact about arithmetic?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that second-order arithmetic pins down ℕ but loses completeness and compactness.",
          "Weighs what is gained and lost, for example Lindström’s theorem.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Compactness controls how many structures a theory has from above: if it has large finite ones, it has infinite ones.
        The Löwenheim-Skolem theorems, next, control size in every direction. A theory in a countable language with an
        infinite model has a countable one, and models of every infinite size besides.
      </p>
      <p>
        That gives the Skolem paradox: set theory proves that uncountable sets exist, yet it has a countable model. The
        resolution is a lesson about what &ldquo;uncountable&rdquo; means from inside a model.
      </p>
    </>
  ),
};
