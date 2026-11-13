import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["false, by error theory", "can be true, even by error theory"];
const ITEMS: SortItem[] = [
  {
    text: "Torturing for fun is wrong.",
    cat: "false, by error theory",
    why: "It says the act has objective, reason-giving wrongness. The error theorist says nothing has that property, so the claim is false.",
  },
  {
    text: "Most people believe that torturing for fun is wrong.",
    cat: "can be true, even by error theory",
    why: "A claim about people’s beliefs, not a moral claim. It is plainly true.",
  },
  {
    text: "You ought to keep your promises.",
    cat: "false, by error theory",
    why: "A claim of categorical moral obligation, binding whatever you want. Mackie says there are no such requirements.",
  },
  {
    text: "If you want to win the match, you ought to train.",
    cat: "can be true, even by error theory",
    why: "A hypothetical ought, backed by your own goal. Mackie’s queerness worry is about requirements that bind regardless of desire.",
  },
  {
    text: "Kindness is a virtue.",
    cat: "false, by error theory",
    why: "If “virtue” means a trait one is objectively required to have or admire, the claim fails. On a purely descriptive reading it might be true.",
  },
  {
    text: "In this society, eating beef is considered wrong.",
    cat: "can be true, even by error theory",
    why: "A report of a social norm, which can be true whether or not any moral facts exist.",
  },
  {
    text: "Slavery was unjust.",
    cat: "false, by error theory",
    why: "Strictly false on the theory, which many find the hardest bullet to bite. Error theorists stress that this does not make slavery just either.",
  },
];

export const lesson: LessonContent = {
  id: "p13.3.3",
  minutes: 80,
  links: {
    revisits: ["p13.3.2", "p13.3.1", "p11.1.1"],
    foreshadows: ["p13.3.4", "p13.3.5", "p30.3.2"],
  },

  puzzle: (
    <>
      <p>
        Many people once said that witches caused crop failures. They were not expressing attitudes; they meant it as fact,
        and they were wrong, because there are no witches. J. L. Mackie suggested that moral talk is in the same position: it
        aims to state objective facts, and there are none to state. Could all of morality be a mistake?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each claim. Which must an error theorist call false, and which can they still accept as true?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="False, or still possibly true, by error theory?" />
    </>
  ),

  theory: (
    <>
      <Definition title="error theory">
        <p>
          Moral judgements are beliefs that aim to describe objective moral facts, as the cognitivist says. But there are no
          such facts, so every positive moral claim is false. Mackie&rsquo;s slogan was &ldquo;there are no objective
          values&rdquo;.
        </p>
      </Definition>

      <Example title="the argument from relativity">
        <p>
          Moral codes vary widely between societies and periods. Mackie argued that this variation is better explained by
          people adopting different ways of life than by their perceiving, more or less accurately, the same objective moral
          facts.
        </p>
      </Example>

      <Definition title="the argument from queerness">
        <p>
          Objective values would be utterly unlike anything else in the universe: facts that by themselves give anyone a
          reason to act, whatever they want. Knowing them would need a special faculty of moral intuition, unlike any other
          way of knowing. And it is mysterious how such a fact could relate to the natural features, such as causing pain for
          fun, on which it depends.
        </p>
      </Definition>

      <Remark title="companions in guilt">
        <p>
          A common reply: other normative facts are just as queer. Epistemic reasons, such as the reason to believe what your
          evidence supports, also seem objective and categorical. If the queerness argument removes moral facts, it seems to
          remove these too, and with them the reasons for accepting error theory itself.
        </p>
      </Remark>

      <Remark title="what next">
        <p>
          If morality is false, should we stop using it? Fictionalists say we can keep speaking as if moral claims were true,
          as we speak of Sherlock Holmes. Conservationists say we can keep believing them, as useful errors.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does error theory say about moral judgements?</p>,
      answer: {
        kind: "choice",
        options: [
          "They express attitudes and are neither true nor false.",
          "They aim to state objective facts, but there are none, so they are all false.",
          "They are all true.",
          "They are true relative to each culture.",
        ],
        correct: [1],
      },
    },
    {
      key: "who",
      rung: "check",
      prompt: <p>Who gave the argument from queerness?</p>,
      answer: { kind: "choice", options: ["G. E. Moore", "J. L. Mackie", "R. M. Hare", "Peter Geach"], correct: [1] },
    },
    {
      key: "vs",
      rung: "apply",
      prompt: <p>How does error theory differ from non-cognitivism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Error theory says moral judgements are beliefs that aim at facts; non-cognitivism says they express attitudes.",
          "They do not differ.",
          "Error theory says moral claims are all true.",
          "Non-cognitivism says moral facts are queer.",
        ],
        correct: [0],
      },
    },
    {
      key: "queer",
      rung: "apply",
      prompt: <p>Which feature of objective values does the queerness argument point to?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are too common.",
          "They would give anyone a reason to act regardless of their desires, unlike any other fact.",
          "They are studied by physicists.",
          "They change every year.",
        ],
        correct: [1],
      },
    },
    {
      key: "companion",
      rung: "apply",
      prompt: <p>What is the companions in guilt reply to the argument from queerness?</p>,
      answer: {
        kind: "choice",
        options: [
          "Moral facts are no stranger than physical facts.",
          "Epistemic reasons are equally queer, so the argument would also remove reasons to believe, including reasons to believe error theory.",
          "Everyone is guilty of moral errors.",
          "Moral claims are all fictions.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the argument from queerness show that there are no objective values? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument: objective values would be strange in what they are and how we know them.",
          "Considers a reply, such as companions in guilt or a naturalist account.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If the error theory were true, should we keep making moral claims? Consider the fictionalist and conservationist answers.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains one or both answers.",
          "Weighs the usefulness of moral talk against honesty about its falsity.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what error theory says, how it differs from non-cognitivism, Mackie's arguments from relativity and queerness, and the companions in guilt reply.",

  glimpse: (
    <p>
      The next lesson defends moral realism against these challenges. Constructivism then offers a middle path, and graduate
      metaethics returns to robust realism.
    </p>
  ),
};
