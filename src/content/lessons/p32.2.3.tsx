import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BranchWeightViz } from "@/components/viz/BranchWeightViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p32.2.3",
  minutes: 90,
  links: {
    revisits: ["p32.2.1", "p32.2.2", "p16.4.3"],
    foreshadows: ["p32.2.4", "p32.2.5", "p32.3.2"],
  },

  puzzle: (
    <>
      <p>
        Suppose the wave function never collapses. Then after you measure a spin, there is a version of you who saw up and a
        version who saw down, each as real as the other. If every outcome occurs, what could it mean to say that up was 80
        per cent likely, and why should you expect to see up?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the number of measurements and the Born weight, and compare counting branches with weighing them.</p>
      <BranchWeightViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the relative-state view">
        <p>
          Hugh Everett proposed in 1957 that the universal wave function always evolves by the Schrödinger equation, with no
          collapse. A measurement entangles the system with the apparatus and observer, and each term of the resulting
          superposition contains an observer who has seen a definite result. Bryce DeWitt later popularised this as the{" "}
          <strong>many-worlds interpretation</strong>.
        </p>
      </Definition>

      <Example title="decoherence and the preferred basis">
        <p>
          A superposition can be written in many bases, so which branches are the worlds? <strong>Decoherence</strong>, studied
          by Dieter Zeh and Wojciech Zurek, answers that interaction with the environment rapidly suppresses interference
          between macroscopically distinct states, so a quasi-classical branching structure emerges. On David Wallace&rsquo;s
          view worlds are emergent patterns, real but not fundamental, like tigers in particle physics.
        </p>
      </Example>

      <Definition title="the probability problem">
        <p>
          If every outcome occurs with certainty, probability seems to have no place. David Deutsch and Wallace argue that a
          rational agent who knows they will branch should weight future branches by squared amplitude, by a decision-theoretic
          derivation of the Born rule. Lev Vaidman stresses self-locating uncertainty: after branching but before looking,
          you do not know which branch you are on.
        </p>
      </Definition>

      <Remark title="objections and attractions">
        <p>
          Critics argue that the decision-theoretic axioms beg the question, that branch counting is as natural as weighting,
          and that an ontology of countless unobservable worlds is extravagant. Defenders reply that the theory adds nothing
          to the formalism, is local in an important sense, and is taken literally by many working physicists.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "idea",
      rung: "check",
      prompt: <p>What does Everett&rsquo;s interpretation say about collapse?</p>,
      answer: { kind: "choice", options: ["There is none: the wave function always evolves by the Schrödinger equation", "It happens at every measurement", "It happens when a conscious mind observes", "It happens randomly, at a fixed rate"], correct: [0] },
    },
    {
      key: "dec",
      rung: "check",
      prompt: <p>What role does decoherence play in many worlds?</p>,
      answer: { kind: "choice", options: ["It suppresses interference between macroscopically distinct states, picking out branches", "It causes collapse", "It makes the theory deterministic", "It removes entanglement"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many branches are there after 4 measurements?</p>,
      answer: { kind: "numeric", value: 16, tolerance: 0 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>Why does counting branches conflict with the Born rule?</p>,
      answer: { kind: "choice", options: ["Counting makes half-and-half records typical whatever the amplitudes", "There are no branches to count", "Counting gives the Born rule exactly", "Branches cannot be counted at all"], correct: [0] },
    },
    {
      key: "dw",
      rung: "apply",
      prompt: <p>How do Deutsch and Wallace try to recover the Born rule?</p>,
      answer: { kind: "choice", options: ["From decision theory: a rational agent should weight branches by squared amplitude", "By adding hidden variables", "By introducing collapse", "By counting branches"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Can probability make sense if every outcome of a measurement occurs? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the probability problem for many worlds.",
          "Considers a proposed solution, such as the decision-theoretic argument or self-locating uncertainty.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the many-worlds interpretation extravagant, or the most economical reading of quantum mechanics?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes economy of laws from economy of entities.",
          "Considers what other interpretations add to the formalism.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Another way out keeps a single world and the Schrödinger equation, but adds what the wave function leaves out:
        particles with definite positions at all times, guided by the wave.
      </p>
      <p>Next, Bohmian mechanics.</p>
    </>
  ),
};
