import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ExplanationViz, type Mystery } from "@/components/viz/ExplanationViz";
import type { LessonContent } from "@/lib/types";

const MYSTERIES: Mystery[] = [
  {
    title: "The wet lawn",
    hypotheses: ["it rained", "the sprinkler ran", "heavy dew"],
    clues: [
      { text: "The lawn is wet this morning.", fits: [true, true, true], why: "All three hypotheses explain the first clue. One observation rarely settles anything." },
      { text: "The pavement outside is dry.", fits: [false, true, true], why: "Rain would have wet the pavement too. Rain no longer explains everything." },
      { text: "The grass is soaked under the tree, where dew does not form.", fits: [false, true, false], why: "Dew settles on open grass on clear nights, not under cover. The sprinkler remains." },
      { text: "The sprinkler's timer was set to 5 a.m.", fits: [false, true, false], why: "A clue that the surviving hypothesis predicts, which makes it stronger still." },
    ],
    verdict: "The sprinkler explains every clue, and nothing else does. That is the best explanation, though a new clue could still overturn it.",
  },
  {
    title: "The wandering planet",
    hypotheses: ["Newton's laws fail far out", "an unseen planet pulls Uranus", "measurement error"],
    clues: [
      { text: "Uranus does not follow the orbit Newton's laws predict.", fits: [true, true, true], why: "Each hypothesis could explain the mismatch. Which explains it best?" },
      { text: "The mismatch is far larger than the known errors of the instruments.", fits: [true, true, false], why: "Careful astronomers ruled out simple error." },
      { text: "Newton's laws work superbly for every other planet.", fits: [false, true, true], why: "Abandoning laws that work everywhere else would cost a great deal. A rival that keeps them fits our background knowledge better." },
      { text: "A new planet is seen in 1846 close to where the calculation said it would be.", fits: [false, true, false], why: "The hypothesis made a precise, risky prediction, and it came true." },
    ],
    verdict: "The unseen planet, Neptune, explained the anomaly, kept laws that worked everywhere else, and predicted where to look. Few inferences to the best explanation have been so spectacularly confirmed.",
  },
];

export const lesson: LessonContent = {
  id: "p3.3.3",
  minutes: 65,
  links: {
    revisits: ["p3.1.1", "p3.3.1"],
    foreshadows: ["p16.1.2", "p16.6.1"],
  },

  puzzle: (
    <>
      <p>
        You come home to find the biscuit tin open and empty, crumbs on the floor leading to the dog&rsquo;s basket, and
        the dog looking unusually pleased. You conclude that the dog ate the biscuits.
      </p>
      <p>
        This is not a generalisation from a sample, nor an argument from analogy, nor a deduction: the evidence does not
        guarantee the conclusion. Yet it is how detectives, doctors and scientists reason every day. What kind of
        reasoning is it, and when is it good?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        We reason backwards from what we see to what would explain it. Usually several explanations are possible, so we
        compare them: which explains all the evidence, fits what we already know, and does so without extra assumptions?
        Reveal the clues one at a time and watch the rivals fall away.
      </p>
      <ExplanationViz mysteries={MYSTERIES} />
    </>
  ),

  theory: (
    <>
      <Definition title="inference to the best explanation">
        <p>The form is</p>
        <ol>
          <li>E is observed.</li>
          <li>If H were true, it would explain E.</li>
          <li>No available rival explains E as well as H.</li>
          <li>So H is probably true.</li>
        </ol>
        <p>
          Charles Sanders Peirce called this kind of reasoning <strong>abduction</strong>. Note the link with the first
          lesson of this course: an explanation tells us why something we accept is so. Here we turn that round, and
          accept a hypothesis because it would explain what we see.
        </p>
      </Definition>

      <Remark title="what makes an explanation better">
        <ul>
          <li><strong>Scope</strong>: it explains more of the evidence.</li>
          <li><strong>Fit</strong>: it agrees with our well-established background knowledge.</li>
          <li><strong>Simplicity</strong>: it needs fewer new assumptions, objects or coincidences.</li>
          <li><strong>Testability</strong>: it predicts something further, which can be checked.</li>
          <li><strong>Not ad hoc</strong>: it was not made up just to fit the evidence it explains.</li>
        </ul>
        <p>
          These virtues can pull in different directions, and weighing them is a matter of judgement, not a formula.
        </p>
      </Remark>

      <Example title="Neptune, and Vulcan">
        <p>
          In 1846 Urbain Le Verrier, working from the irregularities in the orbit of Uranus, calculated where an unseen
          planet would have to be, and Johann Galle found Neptune close to that position. Le Verrier later tried the same
          reasoning on an anomaly in the orbit of Mercury, proposing a small planet, Vulcan, inside it. Vulcan was never
          found. The anomaly was explained in 1915 by Einstein&rsquo;s general theory of relativity, which did what the
          Uranus case had made seem too costly: it revised Newton&rsquo;s laws. The same pattern of reasoning succeeded
          once and failed once, because the list of available rivals was incomplete.
        </p>
      </Example>

      <Definition title="ad hoc hypotheses">
        <p>
          A hypothesis is <strong>ad hoc</strong> if it is added only to rescue a theory from awkward evidence, and has no
          independent support. &ldquo;The psychic&rsquo;s powers fail whenever a sceptic is present&rdquo; explains the
          failed tests, but only because it was made up to do so, and it predicts nothing new. Neptune was not ad hoc: it
          told astronomers where to look, and could have been found absent.
        </p>
      </Definition>

      <Remark title="the best of a bad lot">
        <p>
          The best explanation we have thought of may still be false, if the true one is not on our list. So an inference
          to the best explanation is only as strong as the search for rivals behind it. A good reasoner asks not only
          &ldquo;which of these is best?&rdquo; but also &ldquo;what else could explain this?&rdquo;
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "virtue",
      rung: "check",
      prompt: (
        <p>
          Two explanations account equally well for a patient&rsquo;s symptoms. One requires one disease; the other
          requires three unrelated diseases at once. Which virtue favours the first?
        </p>
      ),
      answer: { kind: "choice", options: ["scope", "simplicity", "testability", "fit with background knowledge"], correct: [1] },
    },
    {
      key: "adhoc",
      rung: "check",
      prompt: <p>Which of these hypotheses is most clearly ad hoc?</p>,
      answer: {
        kind: "choice",
        options: [
          "The bridge collapsed because a bolt had corroded, which an inspection can check.",
          "The remedy works, but only for people who believe in it strongly enough, which is why the trial failed.",
          "The plant died because it was not watered, which the dry soil confirms.",
          "The car would not start because the battery was flat, as the dashboard lights suggest.",
        ],
        correct: [1],
      },
    },
    {
      key: "best",
      rung: "apply",
      prompt: (
        <p>
          The office printer prints blank pages. The ink cartridge was replaced yesterday, and a protective strip is still
          visible on the new cartridge. Which is the best explanation?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The printer's software has a rare fault.",
          "The protective strip was not removed from the new cartridge.",
          "Someone is playing a trick.",
          "The paper is faulty.",
        ],
        correct: [1],
      },
    },
    {
      key: "discriminate",
      rung: "apply",
      prompt: (
        <p>
          Your houseplant&rsquo;s leaves are turning yellow. You suspect either overwatering or too little light. Which
          observation would best tell these apart?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The leaves are yellow.",
          "The soil is soggy and smells sour, though the plant sits by a bright window.",
          "The plant is a fern.",
          "The plant was bought last month.",
        ],
        correct: [1],
      },
    },
    {
      key: "badlot",
      rung: "apply",
      prompt: <p>What is the &ldquo;best of a bad lot&rdquo; problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "The simplest explanation is always false.",
          "The best explanation we have considered may be false if the true one is not among those considered.",
          "There are too many explanations to compare.",
          "Explanations cannot be compared.",
        ],
        correct: [1],
      },
    },
    {
      key: "neptune",
      rung: "prove",
      prompt: (
        <p>
          Put the reasoning that led to Neptune into the form of an inference to the best explanation, and say which
          virtues made the hypothesis better than its rivals before the planet was seen.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the evidence (the irregular orbit of Uranus), the hypothesis (an unseen planet) and at least one rival (failure of Newton's laws, or error).",
          "Names relevant virtues, such as fit with background knowledge (it keeps laws that work elsewhere), scope or testability (it predicted where to look).",
          "Sets these out in the four-step form, or in clear prose following it.",
        ],
      },
    },
    {
      key: "vulcan",
      rung: "stretch",
      prompt: (
        <p>
          The same reasoning that found Neptune predicted Vulcan, which does not exist. What does this show about
          inference to the best explanation? Does it mean Le Verrier reasoned badly the second time?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that the inference depends on the rivals considered, and that a better rival (general relativity) was not yet available.",
          "Discusses whether Le Verrier's reasoning was reasonable given what was known then, distinguishing good reasoning from a true conclusion.",
          "Draws a general lesson, such as that inferences to the best explanation are fallible and should be held open to revision. Any thoughtful answer is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what an inference to the best explanation is, which virtues make one explanation better than another, and why the Neptune and Vulcan stories teach caution.",

  glimpse: (
    <p>
      Philosophy of Science studies the hypothetico-deductive method, which tests hypotheses through their predictions,
      and the no-miracles argument for scientific realism, itself an inference to the best explanation: the best
      explanation of science&rsquo;s success, it says, is that its theories are roughly true.
    </p>
  ),
};
