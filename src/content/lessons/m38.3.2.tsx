import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { EhrenfeuchtModelsViz } from "@/components/viz/EhrenfeuchtModelsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.3.2",
  minutes: 90,
  links: {
    revisits: ["m38.3.1", "m20.3.1", "m38.1.1"],
    foreshadows: ["m38.3.3", "m38.5.2", "m38.4.2"],
  },

  puzzle: (
    <>
      <p>
        The standard model ℕ satisfies every sentence of true arithmetic, yet compactness gives models of the same sentences
        with an element larger than every numeral. ℕ manages to leave out the type of such an element. When can a type be
        left out of some model, and when is every model forced to realise it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose one of the countable models of Ehrenfeucht&rsquo;s theory, and see whether it realises the type above the constants.</p>
      <EhrenfeuchtModelsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="isolated types and atomic models">
        <p>
          A type p over ∅ of a complete theory T is <strong>isolated</strong> by a formula φ if φ is consistent with T and{" "}
          <M>{"T \\vdash \\varphi \\to \\psi"}</M> for every ψ in p. An isolated type is realised in every model of T: by
          completeness <M>{"T \\vdash \\exists x\\, \\varphi(x)"}</M>, and a witness satisfies all of p. A model is{" "}
          <strong>atomic</strong> if every tuple in it realises an isolated type, and <strong>prime</strong> if it embeds
          elementarily into every model of T.
        </p>
      </Definition>

      <Theorem title="the omitting types theorem">
        <p>
          Let T be a consistent theory in a countable language, and p a type that is not isolated. Then T has a countable
          model omitting p. The proof is a Henkin construction: list the new constants <M>{"c_0, c_1, \\ldots"}</M>, and at
          stage k, given the finitely many sentences θ added so far, use the fact that θ does not isolate p to find ψ in p
          with <M>{"\\theta \\wedge \\neg\\psi(c_k)"}</M> consistent, and add <M>{"\\neg\\psi(c_k)"}</M>. Every element of the
          final model is named by some <M>{"c_k"}</M>, and so fails to realise p. Countably many non-isolated types can be
          omitted at once.
        </p>
      </Theorem>

      <Example title="Ehrenfeucht’s three models">
        <p>
          Let T be the theory of dense linear orders without endpoints, with constants{" "}
          <M>{"c_0 < c_1 < c_2 < \\cdots"}</M>. It is complete. The type <M>{"p(x) = \\{x > c_n : n \\in \\mathbb{N}\\}"}</M>{" "}
          is not isolated, and a countable model omits it, realises it with a least element, or realises it without one.
          These three are the only countable models up to isomorphism. Vaught proved that no complete countable theory has
          exactly two.
        </p>
      </Example>

      <Theorem title="countable categoricity">
        <p>
          The <strong>Ryll-Nardzewski theorem</strong> says that a complete theory in a countable language is
          ℵ₀-categorical exactly when <M>{"S_n(\\emptyset)"}</M> is finite for every n. Then every type is isolated, so
          every countable model is atomic, and atomic countable models are isomorphic by a back-and-forth argument. Dense
          linear orders without endpoints are the classic example.
        </p>
      </Theorem>

      <Remark title="prime models and Vaught’s conjecture">
        <p>
          A countable complete theory has a prime model exactly when the isolated types are dense in each Stone space, and
          the prime model is then the countable atomic model, unique up to isomorphism. Vaught conjectured that the number
          of countable models is either at most ℵ₀ or exactly <M>{"2^{\\aleph_0}"}</M>; it remains open.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hyp",
      rung: "check",
      prompt: <p>Which types does the omitting types theorem allow us to omit?</p>,
      answer: { kind: "choice", options: ["Types that are not isolated", "All types", "Only isolated types", "Only types over infinite sets"], correct: [0] },
    },
    {
      key: "lang",
      rung: "check",
      prompt: <p>What hypothesis on the language does the omitting types theorem need?</p>,
      answer: { kind: "choice", options: ["The language is countable", "The language is finite", "The language has no function symbols", "The language has no constants"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many countable models does Ehrenfeucht&rsquo;s theory have, up to isomorphism?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "dlo",
      rung: "apply",
      prompt: <p>Why is the theory of dense linear orders without endpoints ℵ₀-categorical, by Ryll-Nardzewski?</p>,
      answer: { kind: "choice", options: ["It has only finitely many n-types over ∅ for each n", "It has no types at all", "Every model is finite", "It has a unique uncountable model"], correct: [0] },
    },
    {
      key: "iso",
      rung: "apply",
      prompt: <p>Can a model of a complete theory omit an isolated type?</p>,
      answer: { kind: "choice", options: ["No: the isolating formula has a witness, which realises the whole type", "Yes, always", "Only if the model is uncountable", "Only if the language is countable"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if a type p is isolated in a complete theory T, then every model of T realises p.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lets φ isolate p, so φ is consistent with T and T proves φ → ψ for every ψ in p.",
          "Uses completeness of T to get that T proves ∃x φ(x), so every model has a witness a.",
          "Concludes that a satisfies every ψ in p, so a realises p.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why do the three countable models in Ehrenfeucht&rsquo;s example differ from one another?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that one model omits p while the other two realise it.",
          "Notes that in one of the others p has a least realisation and in the third it does not.",
          "Observes that an isomorphism fixing the constants would preserve both properties. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        At the other extreme from models that omit types are models that realise as many types as possible. Such models are
        rich enough to be unique.
      </p>
      <p>Next, saturated and homogeneous models.</p>
    </>
  ),
};
