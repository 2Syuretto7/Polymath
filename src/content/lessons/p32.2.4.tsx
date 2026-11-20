import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BohmTrajectoryViz } from "@/components/viz/BohmTrajectoryViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p32.2.4",
  minutes: 90,
  links: {
    revisits: ["p32.2.1", "p32.2.2", "p32.2.3"],
    foreshadows: ["p32.2.5", "p32.3.2", "p32.1.2"],
  },

  puzzle: (
    <>
      <p>
        In the two-slit experiment, each electron makes a single dot on the screen, yet the dots build up an interference
        pattern. The obvious thought is that each electron went through one slit or the other, guided by something that went
        through both. Textbooks long said that this thought was impossible. Is it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Open one slit or two, and follow the paths that particles take under the guidance of the wave function.</p>
      <BohmTrajectoryViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the pilot wave">
        <p>
          Louis de Broglie proposed in 1927, and David Bohm developed in 1952, a theory in which the complete state of a
          system is its wave function together with the actual positions of its particles. The wave function always evolves
          by the Schrödinger equation, and never collapses. The positions move according to the{" "}
          <strong>guidance equation</strong>: each particle&rsquo;s velocity is fixed by the gradient of the phase of the wave
          function, evaluated at the actual configuration of all the particles.
        </p>
      </Definition>

      <Definition title="quantum equilibrium">
        <p>
          The guidance equation is <strong>equivariant</strong>: if positions are distributed according to |ψ|² at one time,
          they remain so at all times. Given this distribution at the start, Bohmian mechanics reproduces the Born rule and
          every statistical prediction of standard quantum mechanics. Detlef Dürr, Sheldon Goldstein and Nino Zanghì argue
          that quantum equilibrium is typical, much as thermal equilibrium is in statistical mechanics; Antony Valentini
          explores the possibility of non-equilibrium matter that would violate the Born rule.
        </p>
      </Definition>

      <Example title="measurement without collapse">
        <p>
          In a measurement the wave function of system and apparatus spreads into branches with macroscopically different
          pointer positions, as in Everett&rsquo;s theory. But the actual particles occupy just one branch, which fixes the
          outcome. The other branches are empty: they still exist, but since they no longer overlap the actual configuration
          they cease to affect it, so the wave function behaves as if it had collapsed.
        </p>
      </Example>

      <Remark title="the price">
        <p>
          The velocity of each particle depends on the instantaneous positions of all others, however distant. John Bell,
          who admired the theory, saw that this non-locality is required of any theory reproducing quantum predictions, and it
          was what led him to his theorem. Making the theory relativistic seems to need a preferred foliation of spacetime
          that experiments cannot detect. Properties other than position, such as spin, are not possessed in advance but
          depend on how they are measured. David Deutsch called pilot-wave theories &lsquo;parallel-universes theories in a
          state of chronic denial&rsquo;, since the empty branches evolve just as Everett&rsquo;s worlds do.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>In Bohmian mechanics, what is the complete state of a system?</p>,
      answer: { kind: "choice", options: ["The wave function together with the actual positions of the particles", "The wave function alone", "The positions alone", "A list of measurement outcomes"], correct: [0] },
    },
    {
      key: "collapse",
      rung: "check",
      prompt: <p>Does the wave function collapse in Bohmian mechanics?</p>,
      answer: { kind: "choice", options: ["No: it always evolves by the Schrödinger equation", "Yes, at every measurement", "Yes, at random times", "Only for large objects"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with two slits open, does any trajectory cross the centre line between the slits?</p>,
      answer: { kind: "choice", options: ["No: by symmetry the velocity there is zero, and trajectories never cross", "Yes, most do", "Only those from the upper slit", "Only when one slit is closed"], correct: [0] },
    },
    {
      key: "born",
      rung: "apply",
      prompt: <p>How does Bohmian mechanics recover the Born rule?</p>,
      answer: { kind: "choice", options: ["If positions start distributed as |ψ|², the guidance equation keeps them so", "It adds the Born rule as a separate collapse law", "It does not recover it", "By counting branches"], correct: [0] },
    },
    {
      key: "bell",
      rung: "apply",
      prompt: <p>How does Bohmian mechanics stand to Bell&rsquo;s theorem?</p>,
      answer: { kind: "choice", options: ["It is explicitly non-local, as Bell showed any such theory must be", "It is local and violates Bell’s inequality", "It satisfies Bell’s inequality", "It predates the issue and is unaffected"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does Bohmian mechanics solve the measurement problem? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States how the theory gives definite outcomes, through the actual positions and the empty branches.",
          "Considers an objection, such as non-locality, the preferred foliation or the empty branches.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If Bohmian mechanics and Everett&rsquo;s theory make the same predictions, what could decide between them?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recognises the underdetermination of theory by evidence.",
          "Considers a theoretical virtue, such as simplicity, locality, or the treatment of probability.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Bohm adds to the wave function; Everett takes it as everything. A third option changes the equation itself, so that
        superpositions of large objects collapse by themselves.
      </p>
      <p>Next, collapse theories.</p>
    </>
  ),
};
