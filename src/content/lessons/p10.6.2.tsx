import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PeerDisagreementViz } from "@/components/viz/PeerDisagreementViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p10.6.2",
  minutes: 80,
  links: {
    revisits: ["p10.6.1", "p10.5.2", "p10.3.2"],
    foreshadows: ["p28.3.1", "p10.6.3", "p10.7.1"],
  },

  puzzle: (
    <>
      <p>
        You and a friend, equally good at arithmetic, split a restaurant bill in your heads. You get 450 rupees each; your
        friend gets 430. Surely you should both lower your confidence. But what about disagreements in politics, ethics or
        philosophy, where equally thoughtful people have looked at the same arguments for years and still differ?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set two credences and decide how much weight to give your peer.</p>
      <PeerDisagreementViz />
    </>
  ),

  theory: (
    <>
      <Definition title="epistemic peers">
        <p>
          Two people are <strong>epistemic peers</strong> about a question if they have the same evidence and are equally good
          at evaluating it. The problem is what to do on discovering that a peer disagrees.
        </p>
      </Definition>

      <Definition title="conciliationism">
        <p>
          You should move significantly towards your peer&rsquo;s view; in the simplest version, the equal weight view of Adam
          Elga, give their opinion the same weight as your own. David Christensen&rsquo;s restaurant case supports this: the
          disagreement is evidence that someone has made a mistake, and you have no independent reason to think it was them.
        </p>
      </Definition>

      <Definition title="steadfastness">
        <p>
          You may keep your view, at least when you have in fact reasoned correctly. Thomas Kelly argues that the original
          evidence still supports what it supports, and the right response depends on who actually evaluated it well.
        </p>
      </Definition>

      <Example title="independence">
        <p>
          Conciliationists add that, in judging whether your peer erred, you must not rely on the very reasoning in dispute;
          otherwise you could always dismiss them as wrong because they disagree with you.
        </p>
      </Example>

      <Remark title="troubles for both">
        <p>
          Conciliationism seems to recommend scepticism about every controversial question, and it is self-undermining, since
          many epistemologists reject it, so by its own lights its defenders should doubt it. Steadfastness seems to license
          dogmatism. Total evidence views try a middle path: weigh both the first-order evidence and the fact of disagreement.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "peer",
      rung: "check",
      prompt: <p>What makes two people epistemic peers about a question?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are friends.",
          "They have the same evidence and are equally good at evaluating it.",
          "They agree with each other.",
          "They have the same job.",
        ],
        correct: [1],
      },
    },
    {
      key: "equal",
      rung: "check",
      prompt: <p>On the equal weight view, if you have credence 0.8 and your peer 0.4, what should your new credence be?</p>,
      answer: { kind: "numeric", value: 0.6, tolerance: 0.001 },
    },
    {
      key: "bill",
      rung: "apply",
      prompt: <p>What lesson is Christensen&rsquo;s restaurant case meant to support?</p>,
      answer: {
        kind: "choice",
        options: [
          "That arithmetic is unreliable.",
          "That discovering a peer's disagreement should reduce your confidence.",
          "That you should always trust yourself.",
          "That bills should be split equally.",
        ],
        correct: [1],
      },
    },
    {
      key: "indep",
      rung: "apply",
      prompt: <p>Why does conciliationism require independence when assessing a peer?</p>,
      answer: {
        kind: "choice",
        options: [
          "So that peers do not talk to each other.",
          "So you cannot dismiss the peer simply on the grounds that their view conflicts with the reasoning in dispute.",
          "So that both are equally confident.",
          "Because peers must be strangers.",
        ],
        correct: [1],
      },
    },
    {
      key: "self",
      rung: "apply",
      prompt: <p>Why is conciliationism said to be self-undermining?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is inconsistent with logic.",
          "Because many peers disagree about conciliationism itself, so by its own lights its defenders should lose confidence in it.",
          "Because it has no defenders.",
          "Because it requires agreement.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Should a philosopher lower their confidence in their view because equally able philosophers disagree? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the conciliationist case, for example through the restaurant analogy.",
          "Considers the steadfast reply or the worry about widespread scepticism.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "debate",
      rung: "stretch",
      prompt: <p>In a heated online argument, how would you decide whether the other person is really your epistemic peer? What difference should the answer make?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers evidence and competence as tests of peerhood.",
          "Connects the answer to how much one should move.",
          "Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the problem of peer disagreement, the equal weight view with the restaurant case, the steadfast view, the independence principle, and the worries that conciliationism leads to scepticism or undermines itself.",

  glimpse: (
    <p>
      The next lesson asks what happens when a speaker is not treated as a peer because of prejudice. Graduate epistemology
      returns to disagreement in more depth.
    </p>
  ),
};
