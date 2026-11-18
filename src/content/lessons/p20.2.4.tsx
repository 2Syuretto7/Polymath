import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ParamanuViz } from "@/components/viz/ParamanuViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.2.4",
  minutes: 80,
  links: {
    revisits: ["p20.2.3", "p20.2.1", "p0.4.4"],
    foreshadows: ["p20.5.4", "p20.5.6", "p20.4.2"],
  },

  puzzle: (
    <>
      <p>
        Cut a lump of clay in half, then in half again, and keep going. Either you reach pieces that cannot be cut, or you
        never do. If you never do, does the lump contain infinitely many pieces? And then why is it smaller than a mountain,
        which also contains infinitely many?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Build visible things from atoms, step by step.</p>
      <ParamanuViz />
    </>
  ),

  theory: (
    <>
      <Definition title="paramāṇu">
        <p>
          For Vaiśeṣika, the four material substances, earth, water, fire and air, are made of <strong>atoms</strong>{" "}
          (paramāṇu): partless, eternal and imperceptible, each kind with its own qualities. Ether, time, space, self and mind
          are not atomic. Atoms are not created or destroyed; only their combinations are.
        </p>
      </Definition>

      <Example title="the argument for atoms">
        <p>
          If division never ended, every object, a mountain or a mustard seed, would have infinitely many parts, and there
          would be no ground for one being larger than the other. Since they plainly differ in size, division must end in
          partless units. Wholes are also needed: the pot is a new substance, not just a heap of atoms, since we see one pot.
        </p>
      </Example>

      <Definition title="dyads, triads and adṛṣṭa">
        <p>
          Two atoms make a <strong>dyad</strong>, still invisible; three dyads make a <strong>triad</strong>, the smallest
          visible thing, like a mote in a sunbeam. Atoms are inert; what sets them moving at creation, according to later
          Vaiśeṣika, is <strong>adṛṣṭa</strong>, the unseen force of past karma, guided in theistic Nyāya-Vaiśeṣika by God.
        </p>
      </Definition>

      <Remark title="objections">
        <p>
          Critics pressed hard. Vasubandhu asked how partless atoms can join: if they touch on one side, they have sides, and
          so parts; if they touch completely, they coincide, and nothing grows. Śaṅkara asked how inert atoms could begin to
          move, and why sizeless atoms should make sized things. The debate parallels Greek and early modern disputes about
          atoms and the continuum.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "atom",
      rung: "check",
      prompt: <p>Which property do Vaiśeṣika atoms not have?</p>,
      answer: { kind: "choice", options: ["Parts", "Eternity", "Qualities", "A kind such as earth or water"], correct: [0] },
    },
    {
      key: "not",
      rung: "check",
      prompt: <p>Which substance is not made of atoms?</p>,
      answer: { kind: "choice", options: ["Ether", "Earth", "Water", "Fire"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many atoms make up a triad?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "arg",
      rung: "apply",
      prompt: <p>What does the mountain and mustard seed argument aim to show?</p>,
      answer: {
        kind: "choice",
        options: ["Division must end in partless atoms, or sizes could not differ", "Mountains are made of seeds", "Size is an illusion", "Atoms are visible"],
        correct: [0],
      },
    },
    {
      key: "vas",
      rung: "apply",
      prompt: <p>What is Vasubandhu&rsquo;s objection?</p>,
      answer: {
        kind: "choice",
        options: ["Partless atoms could not join: contact on one side implies parts", "Atoms are too heavy", "Atoms are visible", "There are too few atoms"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the mountain and mustard seed argument for atoms sound? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument: infinite divisibility would make all things equal in parts and so in size.",
          "Considers an objection, such as that infinities can differ in measure, as with intervals of reals, or replies to one.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Modern physics has particles with no known parts. Does that vindicate Vaiśeṣika, or is the question different?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a similarity, such as partless constituents.",
          "Notes a difference, such as that the argument was a priori, or that modern particles are not eternal.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Vaiśeṣika divided the world into many kinds of substance. Sāṃkhya, perhaps the oldest of the systems, took the
        opposite course: it recognises just two fundamental principles, consciousness and matter, with everything else,
        including intellect and the sense of self, on the side of matter.
      </p>
      <p>
        Next, puruṣa and prakṛti: Sāṃkhya&rsquo;s dualism, the twenty-five principles, its argument that effects pre-exist in
        their causes, and its account of liberation as consciousness ceasing to identify with matter.
      </p>
    </>
  ),
};
