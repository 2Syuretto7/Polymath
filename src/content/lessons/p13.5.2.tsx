import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["harm intended as a means", "harm foreseen as a side effect"];
const ITEMS: SortItem[] = [
  {
    text: "A pilot bombs a munitions factory, knowing that civilians living nearby will die.",
    cat: "harm foreseen as a side effect",
    why: "The strategic bomber. The aim is to destroy the factory; the deaths are foreseen but not part of the plan. If the civilians somehow survived, the plan would succeed just as well.",
  },
  {
    text: "A pilot bombs a town to kill civilians and so break the enemy’s morale.",
    cat: "harm intended as a means",
    why: "The terror bomber. The deaths are the means to the goal: if the civilians survived, the plan would fail.",
  },
  {
    text: "A doctor gives a dying patient a high dose of morphine to relieve severe pain, foreseeing that it will hasten death.",
    cat: "harm foreseen as a side effect",
    why: "A standard medical application of double effect. Pain relief is the aim; the hastened death is foreseen.",
  },
  {
    text: "A doctor gives a lethal injection in order to end a patient’s suffering by ending their life.",
    cat: "harm intended as a means",
    why: "Death is the means by which the suffering is ended, so the doctrine treats this differently from the morphine case.",
  },
  {
    text: "A bystander diverts a runaway trolley away from five people onto a side track where one person stands.",
    cat: "harm foreseen as a side effect",
    why: "The one person’s death is not needed to save the five: if they jumped clear, the plan would work perfectly.",
  },
  {
    text: "A bystander pushes a large person off a footbridge so that their body stops the trolley before it hits five.",
    cat: "harm intended as a means",
    why: "The person’s body being hit is the very means of stopping the trolley.",
  },
  {
    text: "A surgeon removes the organs of one healthy patient to save five who need transplants.",
    cat: "harm intended as a means",
    why: "The one patient’s death, or at least the use of their body, is the means of saving the others.",
  },
];

export const lesson: LessonContent = {
  id: "p13.5.2",
  minutes: 80,
  links: {
    revisits: ["p13.5.1", "p5.3.2", "p13.1.2"],
    foreshadows: ["p13.5.3", "p13.5.4", "p30.4.1"],
  },

  puzzle: (
    <>
      <p>
        Two pilots drop bombs that kill the same number of civilians. One aimed at a factory and knew the civilians would die;
        the other aimed at the civilians. Many people judge the first act permissible in a just war and the second an
        atrocity. Can what is in someone&rsquo;s mind change whether an act with the same results is right?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each case: is the harm part of the agent&rsquo;s plan, or a foreseen side effect?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Intended as a means, or foreseen as a side effect?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the doctrine of double effect">
        <p>
          An act with a good effect and a bad effect may be permissible if: the act itself is not wrong in kind; the agent
          intends only the good effect; the bad effect is not the means to the good effect; and there is a proportionately
          serious reason for allowing the bad effect. The doctrine goes back to Thomas Aquinas on killing in self-defence.
        </p>
      </Definition>

      <Example title="the counterfactual test">
        <p>
          A useful test: if, by some miracle, the harm did not occur, would the plan still succeed? If so, the harm was a side
          effect. The strategic bomber passes; the terror bomber does not.
        </p>
      </Example>

      <Remark title="the problem of closeness">
        <p>
          The pusher on the footbridge might say they intended only that the large person&rsquo;s body stop the trolley, not
          that they die, and death was a side effect. If this works, the doctrine permits too much. Defenders need an account of
          when an effect is too close to what is intended to count as merely foreseen.
        </p>
      </Remark>

      <Remark title="is intention the point?">
        <p>
          Judith Jarvis Thomson and T. M. Scanlon argued that intentions bear on how we assess the agent, not on whether the
          act is permissible. A doctor who gives the morphine hoping the patient dies acts permissibly, if the dose was
          justified anyway, though they act from a bad motive. Warren Quinn reformulated the doctrine in terms of using
          people as means, which connects it to Kant&rsquo;s formula of humanity.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which condition belongs to the doctrine of double effect?</p>,
      answer: {
        kind: "choice",
        options: [
          "The bad effect must not be the means to the good effect.",
          "There must be no bad effect at all.",
          "The agent must not foresee the bad effect.",
          "The good effect must be certain.",
        ],
        correct: [0],
      },
    },
    {
      key: "origin",
      rung: "check",
      prompt: <p>To whom is the doctrine traditionally traced?</p>,
      answer: { kind: "choice", options: ["Thomas Aquinas", "David Hume", "J. S. Mill", "A. J. Ayer"], correct: [0] },
    },
    {
      key: "test",
      rung: "apply",
      prompt: <p>Apply the counterfactual test to the terror bomber. What does it show?</p>,
      answer: {
        kind: "choice",
        options: [
          "If the civilians survived, the plan would succeed, so the deaths are a side effect.",
          "If the civilians survived, the plan would fail, so the deaths are intended as a means.",
          "The test does not apply to bombing.",
          "The deaths are not foreseen.",
        ],
        correct: [1],
      },
    },
    {
      key: "prop",
      rung: "apply",
      prompt: <p>The strategic bomber would kill ten thousand civilians to destroy a minor supply depot. Which condition fails?</p>,
      answer: {
        kind: "choice",
        options: ["The act is wrong in kind", "The intention condition", "The means condition", "Proportionality"],
        correct: [3],
      },
    },
    {
      key: "close",
      rung: "apply",
      prompt: <p>What is the problem of closeness?</p>,
      answer: {
        kind: "choice",
        options: [
          "That victims are often physically close.",
          "That an agent may describe their intention narrowly, as intending only the impact and not the death, so the doctrine permits too much.",
          "That intentions are always obvious.",
          "That side effects never matter.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is there a moral difference between the strategic bomber and the terror bomber? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the doctrine of double effect and how it separates the cases.",
          "Considers an objection, such as closeness or the view that intention affects assessment of the agent rather than the act.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>A doctor gives the morphine for pain relief but secretly hopes the patient will die soon. Is the act wrong? What does your answer say about intention and permissibility?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Separates the permissibility of the act from the quality of the doctor’s motive.",
          "Relates this to Thomson’s or Scanlon’s challenge to the doctrine.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the doctrine of double effect and its conditions, the strategic and terror bomber cases with the counterfactual test, and the problem of closeness.",

  glimpse: (
    <p>
      The next lesson brings both distinctions together in the trolley problem. After that, the question is how much
      morality may demand. Graduate ethics asks how to act when unsure which of these principles is right.
    </p>
  ),
};
