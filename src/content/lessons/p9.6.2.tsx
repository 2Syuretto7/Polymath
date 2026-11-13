import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["master morality", "slave morality"];
const ITEMS: SortItem[] = [
  {
    text: "Good first means noble, powerful, happy; bad is an afterthought for the common and the low.",
    cat: "master morality",
    why: "The good is the noble’s description of themselves. Bad is a pale contrast, without hatred.",
  },
  {
    text: "Evil is the first concept, and good is defined as whatever is not like the oppressor.",
    cat: "slave morality",
    why: "The creative act is a No to the outside. The master’s good becomes the slave’s evil.",
  },
  {
    text: "Values spring from a triumphant Yes said to oneself.",
    cat: "master morality",
    why: "Noble valuation acts and grows spontaneously, seeking its opposite only to affirm itself more gratefully.",
  },
  {
    text: "Values are born from ressentiment, the impotent hatred of those denied action.",
    cat: "slave morality",
    why: "Ressentiment becomes creative, taking an imaginary revenge in the form of values.",
  },
  {
    text: "Meekness, patience and humility are praised as the highest virtues.",
    cat: "slave morality",
    why: "Weakness is redescribed as achievement: not being able to take revenge becomes not wanting to.",
  },
  {
    text: "The lambs say the bird of prey could have chosen to be a lamb, and so is to blame.",
    cat: "slave morality",
    why: "Nietzsche’s parable: the fiction of a free subject behind the deed lets the weak hold the strong accountable.",
  },
  {
    text: "Injuries are quickly forgotten, and an enemy is respected, even needed.",
    cat: "master morality",
    why: "The noble cannot take enemies seriously for long. Only someone respected can be a true enemy.",
  },
];

export const lesson: LessonContent = {
  id: "p9.6.2",
  minutes: 85,
  links: {
    revisits: ["p9.6.1", "p9.1.3", "p9.5.3"],
    foreshadows: ["p9.6.3", "p34.3.2", "p13.3.3"],
  },

  puzzle: (
    <>
      <p>
        Where did our ideas of good and evil come from? English psychologists of Nietzsche&rsquo;s day said that unselfish acts
        were first praised because they were useful, and the usefulness was later forgotten. Nietzsche found this naive. In
        On the Genealogy of Morals (1887) he tells a darker story, and asks a sharper question: what is the value of these
        values?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each attitude into the two types of morality that Nietzsche describes in the first essay.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Master morality or slave morality?" />
    </>
  ),

  theory: (
    <>
      <Definition title="genealogy">
        <p>
          A genealogy traces how a value or practice came to be, through struggles, reinterpretations and accidents. Its key
          principle: the origin of a thing and its present purpose are different matters. Punishment, for instance, has served
          many purposes over time, and its current meaning is a synthesis of them that resists definition.
        </p>
      </Definition>

      <Example title="first essay: good and evil, good and bad">
        <p>
          Noble peoples called themselves good and the common bad. Under domination, a priestly caste led a slave revolt in
          morality: the weak, unable to act, took revenge in valuation, calling the strong evil and themselves good. Nietzsche
          says this revolt has a history of two thousand years and has been victorious.
        </p>
      </Example>

      <Example title="second essay: guilt and bad conscience">
        <p>
          The German Schuld means both guilt and debt. Nietzsche traces moral guilt to the relation of creditor and debtor, in
          which suffering was accepted as repayment. Bad conscience arises when people confined within society can no longer
          discharge their instincts outward, so turn them inward against themselves.
        </p>
      </Example>

      <Example title="third essay: the ascetic ideal">
        <p>
          Why have priests, philosophers and even scientists honoured self-denial? The ascetic ideal gives suffering a meaning,
          and humans can bear any suffering except meaningless suffering. &ldquo;Man would rather will nothingness than not
          will.&rdquo; Even the unconditional will to truth, Nietzsche argues, is a late form of this ideal.
        </p>
      </Example>

      <Remark title="the genetic fallacy and later genealogies">
        <p>
          Does a disreputable origin discredit a value? Not by itself, and Nietzsche knew this. His point is rather that values
          we take as self-evident have a history, and that knowing it opens the question of their worth. Foucault adopted the
          method for prisons and sexuality, and Bernard Williams for truthfulness. Nietzsche&rsquo;s remarks on priests and Jews
          have also been misused; he despised the antisemites of his day.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "first",
      rung: "check",
      prompt: <p>In master morality, which concept comes first?</p>,
      answer: { kind: "choice", options: ["Evil", "Good, meaning noble", "Guilt", "Duty"], correct: [1] },
    },
    {
      key: "ress",
      rung: "check",
      prompt: <p>What is ressentiment?</p>,
      answer: {
        kind: "choice",
        options: [
          "Gratitude towards the strong.",
          "The impotent hatred of those denied action, which becomes creative of values.",
          "A noble form of pride.",
          "Indifference to morality.",
        ],
        correct: [1],
      },
    },
    {
      key: "schuld",
      rung: "apply",
      prompt: <p>What does Nietzsche infer from the double meaning of the German word Schuld?</p>,
      answer: {
        kind: "choice",
        options: [
          "That moral guilt derives from the material relation of debt.",
          "That debts are immoral.",
          "That guilt is a purely religious idea.",
          "That language is unreliable.",
        ],
        correct: [0],
      },
    },
    {
      key: "lambs",
      rung: "apply",
      prompt: <p>What is the point of the lambs and the birds of prey?</p>,
      answer: {
        kind: "choice",
        options: [
          "That birds of prey are evil.",
          "That the idea of a free subject behind the deed lets the weak blame the strong for being strong.",
          "That animals have morality.",
          "That lambs should become birds of prey.",
        ],
        correct: [1],
      },
    },
    {
      key: "origin",
      rung: "apply",
      prompt: <p>What does Nietzsche&rsquo;s study of punishment illustrate?</p>,
      answer: {
        kind: "choice",
        options: [
          "That punishment has one fixed purpose.",
          "That the origin of a practice and its present purposes are different matters.",
          "That punishment should be abolished.",
          "That punishment began with the Christian church.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>If Nietzsche&rsquo;s story of the origin of morality is true, does it show that our morality is mistaken? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Raises the genetic fallacy: origins alone do not settle value.",
          "Considers how a genealogy might still weaken a value, such as by undermining its claimed justification.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "ascetic",
      rung: "stretch",
      prompt: <p>Nietzsche says even the will to truth is a form of the ascetic ideal. What might he mean, and is he right?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the claim: valuing truth unconditionally, at any cost to life, resembles self-denial.",
          "Considers whether truth can be valued for life-affirming reasons instead.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Nietzsche's genealogical method, the contrast between master and slave morality and the role of ressentiment, his account of guilt and bad conscience, the ascetic ideal, and the question of the genetic fallacy.",

  glimpse: (
    <p>
      The next lesson examines the will to power, the drive Nietzsche saw at work in the slave revolt and everywhere else.
      Foucault developed genealogy into an analysis of power and knowledge, and metaethics asks whether moral claims can be
      true at all.
    </p>
  ),
};
