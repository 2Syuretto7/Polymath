import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { LorentzBoostViz } from "@/components/viz/LorentzBoostViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p32.1.2",
  minutes: 90,
  links: {
    revisits: ["p32.1.1", "p16.3.1", "p16.6.1"],
    foreshadows: ["p32.1.3", "p32.1.4", "p32.3.1"],
  },

  puzzle: (
    <>
      <p>
        Two lightning bolts strike the ends of a moving train. An observer on the platform, midway between the strikes, sees
        them at the same moment. A passenger midway along the train sees the front one first. Which of them is right about
        whether the strikes were simultaneous, and if neither, what becomes of the present moment?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the speed of the moving frame, and watch its axes tilt and its coordinates for the event E change.</p>
      <LorentzBoostViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Einstein’s postulates">
        <p>
          In 1905 Einstein derived the theory from two postulates: the laws of physics take the same form in every inertial
          frame, and light travels at the same speed c in every inertial frame. Together they force the Lorentz
          transformations between frames, with the factor γ = 1/√(1 − v²/c²): moving clocks run slow, moving rods contract,
          and <strong>simultaneity is relative</strong> to a frame.
        </p>
      </Definition>

      <Definition title="Minkowski spacetime">
        <p>
          In 1908 Hermann Minkowski recast the theory geometrically: &lsquo;space by itself, and time by itself, are doomed
          to fade away into mere shadows.&rsquo; <strong>Minkowski spacetime</strong> has no absolute simultaneity, but an
          invariant <strong>interval</strong>, c²t² − x² − y² − z² in any inertial coordinates, and an absolute light-cone
          structure separating each event&rsquo;s possible causes and effects from events at spacelike separation.
        </p>
      </Definition>

      <Example title="conventionality and the present">
        <p>
          Reichenbach argued that distant simultaneity is a convention, since one-way light speed cannot be measured without
          synchronised clocks; David Malament replied in 1977 that standard simultaneity is the only non-trivial relation
          definable from the causal structure and an observer&rsquo;s worldline. Putnam and Rietdijk argued that if what is
          real for me includes what is simultaneous with me in some frame, relativity makes the future as real as the past,
          against presentism.
        </p>
      </Example>

      <Remark title="geometry or dynamics">
        <p>
          On the usual view, rods contract because of the geometry of spacetime. Harvey Brown argues the reverse: the
          Lorentz symmetry of the dynamical laws governing rods and clocks explains why they behave as they do, and the
          Minkowski geometry is a codification of that behaviour. The debate echoes Newton and Leibniz: is spacetime
          structure prior to matter, or a summary of how matter behaves?
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "post",
      rung: "check",
      prompt: <p>What are Einstein&rsquo;s two postulates of special relativity?</p>,
      answer: { kind: "choice", options: ["The laws are the same in every inertial frame, and light has the same speed in every inertial frame", "Space is curved, and mass bends light", "Time is absolute, and space is relative", "Energy is conserved, and momentum is not"], correct: [0] },
    },
    {
      key: "inv",
      rung: "check",
      prompt: <p>What do all inertial observers agree on in special relativity?</p>,
      answer: { kind: "choice", options: ["The spacetime interval between two events", "The time between two events", "The length of a rod", "Which events are simultaneous"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set v = 0.6c. What is γ?</p>,
      answer: { kind: "numeric", value: 1.25, tolerance: 0.01 },
    },
    {
      key: "sim",
      rung: "apply",
      prompt: <p>What does the relativity of simultaneity say?</p>,
      answer: { kind: "choice", options: ["Events simultaneous in one inertial frame need not be simultaneous in another", "No two events are ever simultaneous", "All events are simultaneous", "Simultaneity depends on the observer’s position only"], correct: [0] },
    },
    {
      key: "pr",
      rung: "apply",
      prompt: <p>Which view of time is the Putnam-Rietdijk argument aimed against?</p>,
      answer: { kind: "choice", options: ["Presentism", "Eternalism", "The B-theory", "Relationism about space"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does special relativity refute presentism? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States how the relativity of simultaneity threatens a unique, frame-independent present.",
          "Considers a presentist reply, such as a preferred foliation or a present confined to a single point.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the geometry of spacetime explain why moving rods contract, or do the dynamics of rods explain the geometry?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the geometrical view and Brown’s dynamical view.",
          "Considers what would count as an explanation on each side.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Minkowski spacetime is flat and fixed. In general relativity spacetime curves and responds to matter, which raises
        the old question sharply: is the metric field a container, or just one more physical field?
      </p>
      <p>Next, general relativity and substantivalism.</p>
    </>
  ),
};
