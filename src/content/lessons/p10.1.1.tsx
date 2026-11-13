import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["knowledge", "not true", "not believed", "not justified"];
const ITEMS: SortItem[] = [
  {
    text: "Asha checks the timetable, sees the train leaves at 9, believes it, and it does.",
    cat: "knowledge",
    why: "True, believed, and supported by good evidence. A clear case.",
  },
  {
    text: "Before the 1990s, many astronomers firmly believed, on good evidence, that the universe's expansion was slowing down.",
    cat: "not true",
    why: "Justified and believed, but false: the expansion is accelerating. You cannot know what is not so.",
  },
  {
    text: "Ravi guesses the number of marbles in a jar and happens to be exactly right.",
    cat: "not justified",
    why: "A lucky guess is a true belief without good reasons. Plato already saw that true belief is not enough.",
  },
  {
    text: "Mira has excellent evidence that her friend is lying, and he is, but she refuses to believe it.",
    cat: "not believed",
    why: "The evidence and the truth are there, but without belief there is no knowledge on the traditional view.",
  },
  {
    text: "A juror becomes convinced the defendant is guilty because of his appearance, and he is in fact guilty.",
    cat: "not justified",
    why: "The belief is true, but the reason is prejudice, not evidence.",
  },
  {
    text: "Arjun works out by careful calculation that 17 × 23 = 391, and believes it.",
    cat: "knowledge",
    why: "A true belief reached by a sound method.",
  },
  {
    text: "Before Columbus, a sailor reasonably believed, as nearly everyone did, that no continent lay between Europe and Asia to the west.",
    cat: "not true",
    why: "Reasonable belief, but false.",
  },
];

export const lesson: LessonContent = {
  id: "p10.1.1",
  minutes: 75,
  links: {
    revisits: ["p1.1.2", "p4.4.1", "p9.7.1"],
    foreshadows: ["p10.1.2", "p10.2.1", "p10.3.1"],
  },

  puzzle: (
    <>
      <p>
        You know your own name, that fire burns, and that 2 + 2 = 4. You merely believe that it will not rain tomorrow. What
        is the difference? For much of the history of philosophy, a simple answer seemed right: knowledge is true belief with
        good reasons. This chapter tests that answer.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Sort each case: is it knowledge, or does it fail one of the three conditions? If it fails, say which.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Knowledge, or which condition fails?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the tripartite analysis">
        <p>
          S knows that p if and only if (1) p is true, (2) S believes that p, and (3) S is justified in believing that p. Each
          condition is meant to be necessary, and together they are meant to be sufficient. This is the analysis of knowledge
          as <strong>justified true belief</strong>.
        </p>
      </Definition>

      <Example title="why each condition">
        <p>
          Truth: &ldquo;I knew it, but I was wrong&rdquo; is incoherent; at most I thought I knew. Belief: someone who denies p
          does not know p, though there are puzzles about the unconfident examinee who answers correctly without feeling sure.
          Justification: a lucky guess is not knowledge, even when it is true.
        </p>
      </Example>

      <Definition title="justification">
        <p>
          Justification is what makes a belief reasonable to hold: evidence, reasons, or a reliable source. It comes in
          degrees and is fallible: one can be justified in a false belief, as the astronomers were. How much justification
          knowledge needs, and what kind, are the questions later lessons take up.
        </p>
      </Definition>

      <Remark title="where the analysis comes from">
        <p>
          In Plato&rsquo;s Theaetetus, Socrates considers whether knowledge is true belief with an account, logos, and finds every
          version of account wanting. In the Meno he compares true beliefs to the statues of Daedalus, which run away unless
          tied down, and suggests that knowledge is true belief tied down by reasoning. The tripartite analysis was widely
          assumed until 1963, when a three-page paper by Edmund Gettier argued that the three conditions are not sufficient.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "three",
      rung: "check",
      prompt: <p>Which are the three conditions of the traditional analysis? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Truth", "Belief", "Justification", "Certainty"], correct: [0, 1, 2] },
    },
    {
      key: "guess",
      rung: "check",
      prompt: <p>Which condition does a lucky guess fail?</p>,
      answer: { kind: "choice", options: ["Truth", "Belief", "Justification", "None"], correct: [2] },
    },
    {
      key: "false",
      rung: "apply",
      prompt: <p>Can a person be justified in believing something false, on the usual view?</p>,
      answer: {
        kind: "choice",
        options: [
          "No: justification guarantees truth.",
          "Yes: justification is fallible, so good evidence can mislead.",
          "Only in mathematics.",
          "Only if they are careless.",
        ],
        correct: [1],
      },
    },
    {
      key: "knew",
      rung: "apply",
      prompt: <p>Someone says &ldquo;I knew the shop would be open, but it was closed.&rdquo; What is the best description?</p>,
      answer: {
        kind: "choice",
        options: [
          "They knew something false.",
          "They thought they knew, but did not, since knowledge requires truth.",
          "They knew, but were unlucky.",
          "They had no belief.",
        ],
        correct: [1],
      },
    },
    {
      key: "meno",
      rung: "apply",
      prompt: <p>In the Meno, what does Plato compare true beliefs to?</p>,
      answer: {
        kind: "choice",
        options: ["Shadows in a cave", "Statues of Daedalus that run away unless tied down", "A wax tablet", "An aviary"],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is belief really necessary for knowledge? Consider a nervous student who answers a history question correctly, from study, but feels they are only guessing. Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States why the case seems to be knowledge without belief.",
          "Considers a reply, such as that the student has a weak or implicit belief.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "more",
      rung: "stretch",
      prompt: <p>Before reading about Gettier: can you think of a case where someone has a justified true belief, yet you would hesitate to call it knowledge?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes a case with truth, belief and justification.",
          "Explains what seems missing, such as that the belief is true only by luck.",
          "Reflects on what this suggests about the analysis. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the analysis of knowledge as justified true belief, why each of the three conditions seems necessary, what justification is and why it is fallible, and the history of the analysis from Plato to Gettier.",

  glimpse: (
    <p>
      The next lesson presents Gettier&rsquo;s counterexamples. Later lessons ask how justification can be structured, from
      foundationalism to coherentism, and whether reliability can replace it.
    </p>
  ),
};
