import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BornRuleViz } from "@/components/viz/BornRuleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p32.2.1",
  minutes: 90,
  links: {
    revisits: ["p32.1.4", "p16.6.1", "p16.6.3"],
    foreshadows: ["p32.2.2", "p32.2.3", "p32.2.5"],
  },

  puzzle: (
    <>
      <p>
        An electron&rsquo;s spin is prepared in a superposition of up and down, and sent into a detector. By the
        Schrödinger equation, the electron, the detector and the physicist reading it all end up in a superposition of
        &lsquo;up, and seen as up&rsquo; and &lsquo;down, and seen as down&rsquo;. Yet the physicist sees one result. Where,
        and how, does a single outcome come from?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the angle of the state, and compare the Born probabilities with a hundred simulated outcomes.</p>
      <BornRuleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the quantum formalism">
        <p>
          A system&rsquo;s <strong>state</strong> is a vector in a Hilbert space, and states can be added: if up and down are
          states, so is the <strong>superposition</strong> cos θ up + sin θ down. Isolated systems evolve by the Schrödinger
          equation, which is deterministic and linear. The <strong>Born rule</strong> says a measurement yields each outcome
          with probability equal to the squared magnitude of its amplitude, after which the state is the one for that outcome.
        </p>
      </Definition>

      <Example title="the trilemma">
        <p>
          Tim Maudlin showed in 1995 that three claims are inconsistent: the wave function is a complete description of a
          system; it always evolves by the linear Schrödinger equation; and measurements always have single, definite
          outcomes. Linearity carries a superposition of the electron into a superposition of the detector, and if the wave
          function is complete, nothing else fixes which result occurred. Schrödinger&rsquo;s cat and Wigner&rsquo;s friend
          dramatise the same point.
        </p>
      </Example>

      <Definition title="the options">
        <p>
          Deny completeness, and add further variables, such as definite particle positions in{" "}
          <strong>Bohmian mechanics</strong>. Deny linearity, and add a real physical collapse, as in the{" "}
          <strong>GRW</strong> theory of Ghirardi, Rimini and Weber. Deny single outcomes, and accept that every outcome
          occurs in a branching world, as on <strong>Everett&rsquo;s</strong> view.
        </p>
      </Definition>

      <Remark title="Copenhagen and instrumentalism">
        <p>
          The textbook or Copenhagen view applies collapse at &lsquo;measurement&rsquo; without saying what physical process
          that is, which John Bell criticised as unprofessionally vague. Instrumentalist and QBist readings treat the wave
          function as a tool for prediction or a record of an agent&rsquo;s beliefs, and so deny there is a problem. Realists
          reply that this gives up on saying what the world is like.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lin",
      rung: "check",
      prompt: <p>How does an isolated quantum system evolve according to the Schrödinger equation?</p>,
      answer: { kind: "choice", options: ["Deterministically and linearly", "Randomly, with jumps", "Only when measured", "Not at all"], correct: [0] },
    },
    {
      key: "born",
      rung: "check",
      prompt: <p>What does the Born rule say?</p>,
      answer: { kind: "choice", options: ["The probability of an outcome is the squared magnitude of its amplitude", "Every outcome is equally likely", "The outcome is fixed in advance", "Probabilities equal the amplitudes themselves"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with θ = 60°, what is the probability of up, as a percentage?</p>,
      answer: { kind: "numeric", value: 25, tolerance: 1 },
    },
    {
      key: "bohm",
      rung: "apply",
      prompt: <p>Which approach denies that the wave function is a complete description?</p>,
      answer: { kind: "choice", options: ["Bohmian mechanics", "GRW collapse theory", "Everett’s many worlds", "The Born rule"], correct: [0] },
    },
    {
      key: "ev",
      rung: "apply",
      prompt: <p>Which claim of Maudlin&rsquo;s trilemma does Everett&rsquo;s view give up?</p>,
      answer: { kind: "choice", options: ["That measurements have single, definite outcomes", "That the wave function is complete", "That evolution is linear", "None of them"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is the Copenhagen interpretation a solution to the measurement problem? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the measurement problem, for example through Maudlin’s trilemma.",
          "Considers how Copenhagen handles it, and an objection such as the vagueness of ‘measurement’.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should a physical theory tell us what the world is like, or only predict the results of measurements?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with scientific realism or instrumentalism as applied to quantum theory.",
          "Considers what is lost or gained on each side.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If further variables fix the outcomes, perhaps they are local, carried along with each particle. Bell proved that no
        such local theory can reproduce the predictions of quantum mechanics, and experiments side with quantum mechanics.
      </p>
      <p>Next, Bell&rsquo;s theorem.</p>
    </>
  ),
};
