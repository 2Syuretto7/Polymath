import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PsychConnectViz } from "@/components/viz/PsychConnectViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p30.2.1",
  minutes: 90,
  links: {
    revisits: ["p30.1.2", "p7.3.4", "p7.5.4"],
    foreshadows: ["p30.2.2", "p30.2.3", "p30.4.1"],
  },

  puzzle: (
    <>
      <p>
        You step into a teletransporter. Your body is scanned and destroyed on Earth, and a perfect replica, with all your
        memories and plans, is made on Mars. Have you travelled to Mars, or died and been replaced? Now suppose the scanner
        leaves your body intact on Earth. Which of the two is you?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose how much of your psychology carries over each year, and compare connectedness with continuity.</p>
      <PsychConnectViz />
    </>
  ),

  theory: (
    <>
      <Definition title="reductionism about persons">
        <p>
          In <em>Reasons and Persons</em> (1984), Derek Parfit argued that the fact of a person&rsquo;s identity over time
          just consists in more particular facts: physical continuity and psychological continuity. There is no further
          fact, such as a Cartesian ego or soul, which could be present or absent while everything else stays the same.
        </p>
      </Definition>

      <Definition title="Relation R">
        <p>
          <strong>Psychological connectedness</strong> is the holding of direct links, such as remembering an experience or
          carrying out an earlier intention. <strong>Psychological continuity</strong> is an overlapping chain of strong
          connectedness. Parfit called the combination <strong>Relation R</strong>, and held that any cause will do: it need
          not be the normal cause, the continued existence of the same brain.
        </p>
      </Definition>

      <Example title="fission">
        <p>
          Suppose each half of your brain is transplanted into a different body, and each person who wakes is R-related to
          you. Identity is one-one and transitive, so you cannot be both; neither has a better claim than the other; and it
          seems wrong to say you die, since a single successful transplant would count as survival. Parfit concluded that
          identity is not what matters: fission is about as good as ordinary survival, though no one who exists afterwards is
          you.
        </p>
      </Example>

      <Remark title="empty questions and practical consequences">
        <p>
          In a spectrum of cases between you and a quite different person, there is no sharp line, and the question whether
          the end person is you may have no answer. It is an empty question, since all the facts are known. Parfit found
          the view liberating: the wall between himself and others seemed less deep. It may also support caring less about
          one&rsquo;s distant future, and weaken the case for punishing someone for crimes long past.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Bernard Williams described a case in which you are told you will be tortured after your memories are replaced, and
          argued that fear remains apt, so bodily continuity seems to matter after all. Animalists such as Eric Olson hold
          that we are human animals, whose persistence is biological, not psychological.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "red",
      rung: "check",
      prompt: <p>What does reductionism about personal identity claim?</p>,
      answer: { kind: "choice", options: ["Identity over time consists in physical and psychological continuity, with no further fact", "Persons are immaterial souls", "Persons do not exist at all", "Identity depends only on having the same body"], correct: [0] },
    },
    {
      key: "r",
      rung: "check",
      prompt: <p>What is Parfit&rsquo;s Relation R?</p>,
      answer: { kind: "choice", options: ["Psychological connectedness and continuity, with any cause", "Sameness of brain", "Sameness of soul", "Legal identity"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, keep 80% each year for 5 years. What is the direct connectedness, to two decimal places?</p>,
      answer: { kind: "numeric", value: 0.33, tolerance: 0.01 },
    },
    {
      key: "fission",
      rung: "apply",
      prompt: <p>What did Parfit conclude from the fission case?</p>,
      answer: { kind: "choice", options: ["That identity is not what matters in survival", "That you die in fission", "That you become two people", "That fission is impossible"], correct: [0] },
    },
    {
      key: "trans",
      rung: "apply",
      prompt: <p>Which property of identity rules out saying you are both people after fission?</p>,
      answer: { kind: "choice", options: ["Transitivity, together with its being one-one", "Reflexivity alone", "Vagueness", "Contingency"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Would you survive teletransportation? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a criterion of personal identity or of what matters.",
          "Applies it to the teletransporter, perhaps considering the case where the original survives.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If psychological connectedness weakens over time, should you care less about your self in forty years?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Parfit’s distinction between connectedness and continuity.",
          "Considers what follows for prudence, such as saving for old age.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Who will exist in the future depends on what we do now, down to the timing of conception. Parfit saw that this
        simple fact makes trouble for the idea that a wrong act must be bad for someone.
      </p>
      <p>Next, the non-identity problem.</p>
    </>
  ),
};
