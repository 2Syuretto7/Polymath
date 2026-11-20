import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SpacetimeStructureViz } from "@/components/viz/SpacetimeStructureViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p32.1.1",
  minutes: 90,
  links: {
    revisits: ["p7.6.2", "p7.2.5", "p16.7.1"],
    foreshadows: ["p32.1.2", "p32.1.3", "p32.1.4"],
  },

  puzzle: (
    <>
      <p>
        If the whole universe were moving at a steady thousand kilometres a second in one direction, no experiment could
        tell. If it were rotating, the water in every bucket would climb the walls. Newton concluded that space is a real
        thing that can be moved through; Leibniz that it is only a system of relations. Can a single view respect both
        facts?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a structure for spacetime, and compare what it defines with what Newton&rsquo;s laws can detect.</p>
      <SpacetimeStructureViz />
    </>
  ),

  theory: (
    <>
      <Definition title="absolute space and relationism">
        <p>
          In the Scholium to the <em>Principia</em>, Newton distinguished <strong>absolute space</strong>, which remains
          always similar and immovable, from the relative spaces we measure, and true motion from apparent motion.{" "}
          <strong>Relationism</strong>, defended by Leibniz in his correspondence with Clarke, holds that space is nothing
          over and above the spatial relations among bodies, and motion nothing over and above change in those relations.
        </p>
      </Definition>

      <Example title="shifts and rotations">
        <p>
          Leibniz&rsquo;s <strong>static shift</strong> asks us to imagine the universe placed three metres to the east;
          the <strong>kinematic shift</strong> imagines it moving uniformly at a different velocity. By the principle of
          sufficient reason God could have no reason to prefer one placement, and by the identity of indiscernibles the
          shifted worlds are the same world, so absolute space is idle. Newton&rsquo;s bucket and his two globes, joined by a
          cord in otherwise empty space, reply that rotation shows itself in tension and curvature even when no relative
          motion does.
        </p>
      </Example>

      <Definition title="Galilean spacetime">
        <p>
          A four-dimensional reformulation dissolves part of the dispute. In <strong>Galilean</strong>, or neo-Newtonian,{" "}
          <strong>spacetime</strong>, there are absolute simultaneity, distances at a time and a structure of straight
          worldlines, so acceleration and rotation are absolute, but there is no fact about which straight worldlines are at
          rest. Earman&rsquo;s symmetry principles say that the symmetries of the laws and of spacetime should coincide;
          Galilean spacetime meets them for Newtonian mechanics.
        </p>
      </Definition>

      <Remark title="who won">
        <p>
          Mach suggested that inertia is caused by the distant stars, so a rotating bucket in an empty universe might behave
          differently; Einstein took this as an inspiration. Julian Barbour and Bruno Bertotti built relational theories
          that recover much of mechanics. Tim Maudlin and others argue that Galilean spacetime is a substantival structure,
          so Newton was right that there is more than relations, and Leibniz right that absolute velocity is idle.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kin",
      rung: "check",
      prompt: <p>What does Leibniz&rsquo;s kinematic shift imagine?</p>,
      answer: { kind: "choice", options: ["The whole universe moving uniformly with a different velocity", "The universe rotating", "The universe shrinking", "Time running backwards"], correct: [0] },
    },
    {
      key: "gal",
      rung: "check",
      prompt: <p>What does Galilean spacetime make absolute?</p>,
      answer: { kind: "choice", options: ["Acceleration and rotation, but not velocity", "Velocity, but not acceleration", "Position and velocity", "Nothing at all"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which structure defines exactly what Newton&rsquo;s laws can detect?</p>,
      answer: { kind: "choice", options: ["Galilean spacetime", "Leibnizian spacetime", "Newton’s absolute space", "None of them"], correct: [0] },
    },
    {
      key: "globes",
      rung: "apply",
      prompt: <p>What is Newton&rsquo;s two-globes thought experiment meant to show?</p>,
      answer: { kind: "choice", options: ["Rotation can be detected even with no relative motion to observe", "Globes attract by gravity", "Space is finite", "All motion is relative"], correct: [0] },
    },
    {
      key: "pii",
      rung: "apply",
      prompt: <p>Which principle did Leibniz use to conclude that shifted worlds are the same world?</p>,
      answer: { kind: "choice", options: ["The identity of indiscernibles", "The principle of inertia", "Ockham’s razor alone", "The conservation of energy"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does Newton&rsquo;s bucket show that space is a substance? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what the bucket shows, that rotation has effects not fixed by relative motion of bucket and water.",
          "Considers a reply, such as Mach’s appeal to the distant stars or Galilean spacetime with no absolute rest.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is Galilean spacetime a victory for Newton or for Leibniz?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains what Galilean spacetime keeps from Newton and what it drops.",
          "Considers whether its affine structure is a substance or a relation.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Galilean spacetime keeps absolute simultaneity. Einstein showed that two observers moving relative to one another
        cannot agree on which distant events happen at the same time, and that this costs physics nothing.
      </p>
      <p>Next, special relativity.</p>
    </>
  ),
};
