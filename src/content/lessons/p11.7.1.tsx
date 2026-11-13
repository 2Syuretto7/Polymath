import { Definition, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["the past is not fixed", "the laws are not fixed", "rule beta fails"];
const ITEMS: SortItem[] = [
  {
    text: "Lewis: you could have done something such that, had you done it, a law of nature would have been broken.",
    cat: "the laws are not fixed",
    why: "This is local miracle compatibilism. You cannot break a law, but you can do something such that, if you had done it, a small divergence miracle would have happened before your act.",
  },
  {
    text: "Had you raised your hand, the remote past would have been slightly different; you can do something such that, had you done it, the past would have been otherwise.",
    cat: "the past is not fixed",
    why: "Multiple-pasts compatibilism keeps the laws fixed and lets the past vary in the counterfactual.",
  },
  {
    text: "McKay and Johnson: no one has a choice about whether an unflipped coin lands heads, nor about whether it lands tails, yet you had a choice about whether it lands neither.",
    cat: "rule beta fails",
    why: "Their counterexample shows that the original rule beta implies a principle about conjunctions that is false.",
  },
  {
    text: "On a Humean view, laws merely summarise what happens, so had you acted otherwise, the laws would simply have been different.",
    cat: "the laws are not fixed",
    why: "Humean compatibilists such as Beebee and Mele deny that the laws constrain us, since they depend on what we do.",
  },
  {
    text: "Facts such as ‘yesterday it was true that I would raise my hand today’ are soft facts about the past, and may be up to me.",
    cat: "the past is not fixed",
    why: "The Ockhamist distinction between hard and soft facts about the past allows that some facts about the past depend on the future.",
  },
  {
    text: "Having no choice about p, and no choice about whether p leads to q, does not show you have no choice about q.",
    cat: "rule beta fails",
    why: "This denies the transfer principle that carries powerlessness from the past and laws to the present act.",
  },
];

export const lesson: LessonContent = {
  id: "p11.7.1",
  minutes: 80,
  links: {
    revisits: ["p1.3.1", "p1.3.2", "p11.3.1"],
    foreshadows: ["p11.7.2", "p11.7.3", "p11.7.4"],
  },

  puzzle: (
    <>
      <p>
        If determinism is true, the state of the world a million years ago, together with the laws of nature, fixed that you
        would read this sentence now. You had no say in the distant past, and no say in the laws. How then could you have had
        any say in what follows from them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Peter van Inwagen&rsquo;s consequence argument. Open the objections as you go.</p>
      <ArgumentStepViz
        title="The consequence argument"
        steps={[
          { claim: "If determinism is true, the remote past P₀ and the laws L together entail every later truth, including that you do not raise your hand at noon.", kind: "premise", note: "This is just what determinism says." },
          { claim: "No one has, or ever had, any choice about P₀.", kind: "premise", note: "The past before anyone was born is fixed.", objection: "Some compatibilists say you could have done something such that, had you done it, the past would have been different." },
          { claim: "No one has, or ever had, any choice about L.", kind: "premise", note: "We cannot break the laws of nature.", objection: "Lewis: you cannot break a law, but you might have done something such that, had you done it, a law would have been broken." },
          { claim: "If no one has a choice about p, and no one has a choice about whether p implies q, then no one has a choice about q.", kind: "premise", note: "Rule beta: powerlessness transfers along implication.", objection: "McKay and Johnson found a counterexample to the original rule; later versions repair it." },
          { claim: "So no one has any choice about whether you raise your hand at noon.", kind: "conclusion", note: "And the same goes for every act. If determinism is true, no one can do otherwise." },
        ]}
      />
    </>
  ),

  theory: (
    <>
      <Definition title="incompatibilism">
        <p>
          <strong>Incompatibilism</strong> is the thesis that free will, or the ability to do otherwise, is incompatible with
          determinism. Incompatibilists who believe in free will are <em>libertarians</em>; those who deny it are{" "}
          <em>hard incompatibilists</em> or hard determinists.
        </p>
      </Definition>

      <Definition title="the operator N">
        <p>
          Van Inwagen writes <strong>Np</strong> for &ldquo;p, and no one has, or ever had, any choice about whether p&rdquo;.
          Rule alpha: from &ldquo;necessarily p&rdquo; infer Np. Rule beta: from Np and N(p → q) infer Nq. With these, the
          argument is valid: N(P₀ and L), and since P₀ and L entail the act, N of the act.
        </p>
      </Definition>

      <p>Every compatibilist must deny something. Sort these replies by the step they reject.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which part of the argument does each reply reject?" />

      <Remark title="local miracles">
        <p>
          Lewis distinguishes a strong and a weak thesis. The strong one, that I can break a law, is absurd. The weak one is
          that I could have done something such that, had I done it, a law would have been broken. In a deterministic world, a
          world where I raise my hand differs from ours by a small miracle just before. Lewis says that is no stranger than
          what any compatibilist believes.
        </p>
      </Remark>

      <Remark title="repairing beta">
        <p>
          McKay and Johnson showed that beta implies agglomeration: from Np and Nq infer N(p and q). An unflipped coin refutes
          this. You had no choice about its not landing heads, since had you flipped it might have landed heads anyway, and
          likewise for tails, but you could have made it land one way or the other. Van Inwagen and others replaced beta with
          a principle about what is settled before your birth, and the debate continues.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "incompat",
      rung: "check",
      prompt: <p>What is incompatibilism?</p>,
      answer: {
        kind: "choice",
        options: [
          "The thesis that determinism is false.",
          "The thesis that free will is incompatible with determinism.",
          "The thesis that no one is ever responsible.",
          "The thesis that the laws of nature change.",
        ],
        correct: [1],
      },
    },
    {
      key: "beta",
      rung: "check",
      prompt: <p>What does rule beta say?</p>,
      answer: {
        kind: "choice",
        options: [
          "If p is necessary, no one has a choice about p.",
          "If no one has a choice about p, nor about whether p implies q, then no one has a choice about q.",
          "If p is true, someone chose it.",
          "If no one has a choice about p, p is false.",
        ],
        correct: [1],
      },
    },
    {
      key: "lewis",
      rung: "apply",
      prompt: <p>Which premise does Lewis&rsquo;s local miracle compatibilism reject?</p>,
      answer: { kind: "choice", options: ["That determinism entails the act", "That no one has a choice about the past", "That no one has a choice about the laws", "That the conclusion follows"], correct: [2] },
    },
    {
      key: "weak",
      rung: "apply",
      prompt: <p>Lewis accepts which of these?</p>,
      answer: {
        kind: "choice",
        options: [
          "I can do something that is a law-breaking event.",
          "I could have done something such that, had I done it, a law would have been broken.",
          "The laws of nature are up to me.",
          "Determinism is false.",
        ],
        correct: [1],
      },
    },
    {
      key: "coin",
      rung: "apply",
      prompt: <p>What does the McKay–Johnson coin show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That coins are indeterministic.",
          "That the original rule beta implies a false principle about conjunctions.",
          "That the past is not fixed.",
          "That rule alpha is invalid.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Which premise of the consequence argument is weakest? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument’s structure, including rule beta.",
          "Picks a premise and gives a compatibilist reason for doubting it, or defends all premises.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "lewis-ok",
      rung: "stretch",
      prompt: <p>Is it plausible that you could have done something such that, had you done it, a law of nature would have been broken?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Lewis’s weak thesis and how it differs from the strong one.",
          "Considers whether the weak thesis gives a real ability or only a counterfactual.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend van Inwagen’s consequence argument, what rule beta says, how Lewis’s local miracle reply works, the alternative of letting the past vary, and the McKay–Johnson counterexample.",

  glimpse: (
    <p>
      The consequence argument is about the ability to do otherwise. The next lesson asks whether responsibility needs that
      ability at all, through Frankfurt&rsquo;s cases.
    </p>
  ),
};
