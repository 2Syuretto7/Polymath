import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { JustifyInductionViz } from "@/components/viz/JustifyInductionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.5.3",
  minutes: 80,
  links: {
    revisits: ["p7.5.2", "p1.1.3", "p7.5.1"],
    foreshadows: ["p16.4.2", "p16.2.1", "p16.4.3"],
  },

  puzzle: (
    <>
      <p>
        Bread has nourished you every time you ate it. You expect the next slice to nourish you too, and you would think
        anyone mad who doubted it. Hume asks a quiet question: what reason do you have? Not what causes you to expect it, but
        what makes the expectation reasonable. He looked for an answer and found none. If he is right, all our knowledge of
        the future, and all of science, rests on something other than reason.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Try to justify the inference to tomorrow&rsquo;s sunrise. Each reply you can give is one Hume considered.
      </p>
      <JustifyInductionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="inductive inference">
        <p>
          An <strong>inductive inference</strong> goes from observed cases to unobserved ones: all observed bread has
          nourished, so this bread will nourish. Unlike a valid deduction, its premises can be true and its conclusion false.
          Hume&rsquo;s question is whether we have any reason to think the conclusion is even probable, given the premises.
        </p>
      </Definition>

      <Definition title="Hume's dilemma">
        <p>
          Any argument for the inference must be either <strong>demonstrative</strong>, concerning relations of ideas, or{" "}
          <strong>probable</strong>, concerning matters of fact. It cannot be demonstrative, since the course of nature could
          change without contradiction. It cannot be probable, since probable arguments all rest on the relation of cause and
          effect, and so on experience, and so on the assumption that the future will resemble the past, the{" "}
          <strong>uniformity principle</strong>. To argue for that principle from experience is to argue in a circle.
        </p>
      </Definition>

      <Example title="custom">
        <p>
          Hume&rsquo;s own response is not to stop inferring. That is impossible: nature is too strong for principle.
          Instead, it is <strong>custom</strong>, or habit, that leads us from past to future. A child who has burned their
          hand avoids the candle without reasoning. Custom is the great guide of human life. This is a sceptical
          conclusion about justification combined with a naturalistic account of belief.
        </p>
      </Example>

      <Remark title="replies">
        <p>
          Many responses have been tried. Some say induction needs no justification, since being reasonable just means
          reasoning inductively, as P. F. Strawson argued. Karl Popper accepted Hume&rsquo;s conclusion and tried to
          rebuild science on falsification alone. Bayesians justify updating beliefs by probability theory, though priors
          remain to be explained. Reichenbach argued that if any method works, induction will. Nelson Goodman added a new
          riddle: even granting induction, which predicates should we project, green or grue? None of these replies has
          won general agreement.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is an inductive inference?</p>,
      answer: {
        kind: "choice",
        options: [
          "An inference whose conclusion follows necessarily from its premises.",
          "An inference from observed cases to unobserved ones, whose premises can be true while its conclusion is false.",
          "A proof by mathematical induction.",
          "An inference about ideas only.",
        ],
        correct: [1],
      },
    },
    {
      key: "uniform",
      rung: "check",
      prompt: <p>What is the uniformity principle?</p>,
      answer: {
        kind: "choice",
        options: [
          "That all people are equal.",
          "That the future will resemble the past, or unobserved cases resemble observed ones.",
          "That nature has no laws.",
          "That every event has a cause.",
        ],
        correct: [1],
      },
    },
    {
      key: "demo",
      rung: "apply",
      prompt: <p>Why can the inductive inference not be justified demonstratively, according to Hume?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because demonstrations are too long.",
          "Because a change in the course of nature implies no contradiction, so it cannot be ruled out by reason alone.",
          "Because mathematics is uncertain.",
          "Because God could intervene.",
        ],
        correct: [1],
      },
    },
    {
      key: "circle",
      rung: "apply",
      prompt: <p>What is circular about justifying induction by its past success?</p>,
      answer: {
        kind: "choice",
        options: [
          "Nothing; it is a good argument.",
          "It infers from induction's past success to its future success, which is itself an inductive inference.",
          "It uses deduction.",
          "It relies on innate ideas.",
        ],
        correct: [1],
      },
    },
    {
      key: "custom",
      rung: "apply",
      prompt: <p>What, for Hume, actually produces our expectations about the future?</p>,
      answer: {
        kind: "choice",
        options: ["Reason", "Custom or habit", "Revelation", "Mathematics"],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Set out Hume&rsquo;s argument that inductive inference cannot be justified, and say whether one reply you know of
          succeeds.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the dilemma: a justification must be demonstrative or probable.",
          "Explains why each fails: no contradiction in nature changing; probable reasoning presupposes uniformity, so circular.",
          "Assesses one reply, such as Strawson, Popper, Bayesianism or Reichenbach. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "chicken",
      rung: "stretch",
      prompt: (
        <p>
          Russell described a chicken fed every day by a farmer, who one day wrings its neck instead. What does the example
          show, and does it make induction irrational?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the chicken's expectation was formed by induction from repeated experience and was false.",
          "Distinguishes showing induction is fallible from showing it is unjustified or irrational.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what an inductive inference is, Hume's argument that it cannot be justified by demonstration or by probable reasoning, his appeal to custom, and one modern reply.",

  glimpse: (
    <p>
      The next lesson applies Hume&rsquo;s empiricism to the self. The Philosophy of Science course returns to induction in
      Popper&rsquo;s falsificationism, in Goodman&rsquo;s grue problem and in Bayesian confirmation theory.
    </p>
  ),
};
