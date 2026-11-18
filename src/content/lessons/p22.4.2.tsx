import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { HeytingOpenViz } from "@/components/viz/HeytingOpenViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.4.2",
  minutes: 85,
  links: {
    revisits: ["p22.4.1", "p17.4.2", "m6.4.1"],
    foreshadows: ["p22.4.3", "p22.5.1", "p22.6.4"],
  },

  puzzle: (
    <>
      <p>
        Brouwer held that mathematics comes before language and that logic merely describes it. Yet if intuitionists reject
        some classical laws, someone has to say which laws remain. Can a philosophy that distrusts formal logic have a formal
        logic of its own, and what would its symbols mean?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Treat open sets as truth values, and watch excluded middle and double negation fail at the boundary.</p>
      <HeytingOpenViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Heyting’s formalisation">
        <p>
          In 1930 Arend Heyting, Brouwer&rsquo;s student, published axioms for intuitionistic propositional and predicate
          logic, and for intuitionistic arithmetic. The logic is classical logic without excluded middle, or equivalently
          without double negation elimination: from &lsquo;not not A&rsquo; one may not infer A. Brouwer was unimpressed by
          the project; most other mathematicians found that it made intuitionism something they could check.
        </p>
      </Definition>

      <Definition title="meaning as proof conditions">
        <p>
          Heyting explained each logical constant by what counts as a proof of a statement built with it, not by when it is
          true. A proof of &lsquo;A and B&rsquo; is a proof of each; of &lsquo;A or B&rsquo;, a proof of one, with a
          note of which; of &lsquo;if A then B&rsquo;, a method turning any proof of A into a proof of B; and &lsquo;not
          A&rsquo; means A leads to absurdity. You met this as the BHK interpretation. Philosophically it is a theory of
          meaning: to understand a statement is to know what would prove it.
        </p>
      </Definition>

      <Theorem title="topological models">
        <p>
          The open sets of a topological space form a <strong>Heyting algebra</strong>: union for &lsquo;or&rsquo;,
          intersection for &lsquo;and&rsquo;, and the interior of the complement for &lsquo;not&rsquo;. Tarski showed in
          1938 that a formula is provable in intuitionistic propositional logic exactly when it takes the value &lsquo;whole
          space&rsquo; in every such algebra, and the real line already suffices. In the visualisation, excluded middle misses
          boundary points, so it is not a law.
        </p>
      </Theorem>

      <Example title="the Disputation">
        <p>
          Heyting&rsquo;s 1956 dialogue sets an intuitionist, Int, against Class, a classical mathematician, with Form,
          Letter, Prag and Sign joining in. Class says the intuitionist&rsquo;s talk of mental constructions is psychology;
          Int replies that classical mathematics talks of truths it can never reach. Int&rsquo;s modest claim is that
          intuitionistic mathematics needs no metaphysics: it studies constructions, and needs no belief in a realm of
          objects beyond them.
        </p>
      </Example>

      <Remark title="a weaker logic, a finer one">
        <p>
          Intuitionistic logic proves less, but distinguishes more. Classically, &lsquo;not every x fails P&rsquo; and
          &lsquo;some x has P&rsquo; are equivalent; intuitionistically, only the second gives you an x. Gödel and Gentzen
          showed classical arithmetic can be translated into intuitionistic arithmetic by inserting double negations, so
          neither is the more risky.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "drop",
      rung: "check",
      prompt: <p>Which law does Heyting&rsquo;s logic drop from classical logic?</p>,
      answer: { kind: "choice", options: ["Excluded middle, or equivalently double negation elimination", "Modus ponens", "The law of non-contradiction", "Conjunction introduction"], correct: [0] },
    },
    {
      key: "meaning",
      rung: "check",
      prompt: <p>How does Heyting explain the meaning of a logical constant?</p>,
      answer: { kind: "choice", options: ["By what counts as a proof of a statement built with it", "By a truth table", "By its use in ordinary speech", "By its shape on the page"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with U = (¼, ¾), how many points does U ∨ ¬U miss?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "dneg",
      rung: "apply",
      prompt: <p>In the visualisation, with U = (0, ½) ∪ (½, 1), what is ¬¬U?</p>,
      answer: { kind: "choice", options: ["The whole interval (0, 1), which is larger than U", "U itself", "The empty set", "The single point ½"], correct: [0] },
    },
    {
      key: "or",
      rung: "apply",
      prompt: <p>On Heyting&rsquo;s reading, what must a proof of &lsquo;A or B&rsquo; supply?</p>,
      answer: { kind: "choice", options: ["A proof of A or a proof of B, with a note of which", "A refutation of ‘not A and not B’", "A truth table", "Proofs of both A and B"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Heyting&rsquo;s Int says intuitionism needs no metaphysics. Is that true? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Int’s claim: intuitionism studies constructions, not a realm of independent objects.",
          "Considers an objection, such as that talk of possible constructions, or of the mind, is itself metaphysical.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Brouwer thought logic comes after mathematics. Does Heyting&rsquo;s formalisation betray that view, or serve it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Brouwer’s view that formal systems only record constructions.",
          "Considers what formalisation gains, such as checkability, or risks, such as fixing what should stay open.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Heyting explained the connectives through proof. Michael Dummett turned this into an argument: if the meaning of a
        statement must be something speakers can show in their use of it, then meaning cannot outrun what we can recognise,
        and classical logic must go.
      </p>
      <p>
        Next, Dummett: the manifestation and acquisition arguments, anti-realism, harmony between introduction and
        elimination rules, Prior&rsquo;s tonk, and the realist replies.
      </p>
    </>
  ),
};
