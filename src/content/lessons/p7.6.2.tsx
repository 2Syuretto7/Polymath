import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BucketViz } from "@/components/viz/BucketViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.6.2",
  minutes: 80,
  links: {
    revisits: ["p7.2.5", "p7.2.3", "p6.1.1"],
    foreshadows: ["p8.2.1", "p8.2.2", "p11.6.3"],
  },

  puzzle: (
    <>
      <p>
        Suppose God had created the whole universe five miles to the east of where it is, with everything else the same.
        Would anything be different? Leibniz said no, and concluded that space is not a thing at all, only a system of
        relations between things. Newton&rsquo;s defender, Samuel Clarke, replied that space is real, a kind of container,
        and that God could have placed the world anywhere in it. Their exchange of letters in 1715 and 1716 is one of the
        great debates of philosophy. Who was right?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Newton&rsquo;s bucket experiment, and compare the curvature of the water with its motion relative to the
        bucket.
      </p>
      <BucketViz />
    </>
  ),

  theory: (
    <>
      <Definition title="two views of space">
        <p>
          <strong>Substantivalism</strong>, Newton&rsquo;s view, holds that space is real and exists independently of the
          bodies in it, infinite, unchanging and the same everywhere. Things have absolute positions and absolute motions.{" "}
          <strong>Relationism</strong>, Leibniz&rsquo;s view, holds that space is nothing over and above the spatial
          relations between bodies: an order of coexistence, as time is an order of succession. Without bodies there would be
          no space.
        </p>
      </Definition>

      <Definition title="Leibniz's arguments">
        <p>
          Leibniz used two principles. By the <strong>principle of sufficient reason</strong>, God must have a reason for
          every choice; but if space were absolute, God could have no reason to place the world here rather than five miles
          east, since the two are indistinguishable. By the <strong>identity of indiscernibles</strong>, two situations that
          differ in no observable way are one and the same. So the shifted world is not a different world, and absolute
          position is an illusion.
        </p>
      </Definition>

      <Example title="Newton's bucket">
        <p>
          Newton replied with experiments, not principles. Hang a bucket of water by a twisted rope and let it spin. At first
          the bucket turns and the water does not, and the surface stays flat. Then the water catches up, turning with the
          bucket, and its surface becomes concave. The concavity does not track motion relative to the bucket, which is
          greatest at the start. Newton concluded that it tracks true rotation, motion relative to absolute space. Leibniz
          had no full answer to the dynamics of rotation.
        </p>
      </Example>

      <Remark title="the debate continues">
        <p>
          Clarke also pressed a theological point: the shifted world, though indiscernible to us, would be different to God,
          who chooses by will and needs no reason beyond it. Ernst Mach later suggested that the water rotates relative to the
          distant stars, not to space itself, an idea that influenced Einstein. In general relativity space-time is a dynamical
          field shaped by matter, neither Newton&rsquo;s fixed container nor Leibniz&rsquo;s mere relations. Kant, in his turn,
          made space a form of our intuition rather than either a thing or a relation among things.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "views",
      rung: "check",
      prompt: <p>What does relationism about space claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Space is a container that exists independently of bodies.",
          "Space is nothing over and above the spatial relations between bodies.",
          "Space does not exist and bodies have no relations.",
          "Space is made of atoms.",
        ],
        correct: [1],
      },
    },
    {
      key: "principles",
      rung: "check",
      prompt: <p>Which principles did Leibniz use against absolute space? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["The principle of sufficient reason", "The identity of indiscernibles", "The copy principle", "The principle of utility"],
        correct: [0, 1],
      },
    },
    {
      key: "shift",
      rung: "apply",
      prompt: <p>What is the point of the shifted-universe argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the universe is moving.",
          "That if space were absolute, God would have no reason to place the world in one position rather than another, and the two worlds would be indiscernible.",
          "That God placed the world at the centre.",
          "That space is infinite.",
        ],
        correct: [1],
      },
    },
    {
      key: "bucket",
      rung: "apply",
      prompt: <p>In the bucket experiment, at which stage is the water&rsquo;s surface concave while there is no motion relative to the bucket?</p>,
      answer: {
        kind: "choice",
        options: [
          "When the bucket first starts turning",
          "When the water has caught up and turns with the bucket",
          "When both are at rest",
          "Never",
        ],
        correct: [1],
      },
    },
    {
      key: "mach",
      rung: "apply",
      prompt: <p>What was Mach&rsquo;s reply to Newton&rsquo;s bucket?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the experiment was never done.",
          "That the water's rotation might be relative to the distant stars and the rest of the matter in the universe, not to absolute space.",
          "That water has no surface.",
          "That Newton was right.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Does Newton&rsquo;s bucket refute relationism about space? Explain the argument and one reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that the concavity tracks rotation but not motion relative to the bucket, so seems to need absolute motion.",
          "Gives a reply, such as Mach's appeal to the distant stars, or a relationist account of inertial frames.",
          "Reaches a view. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "pii",
      rung: "stretch",
      prompt: (
        <p>
          Imagine a universe containing only two exactly similar iron spheres. Does this refute the identity of
          indiscernibles, which Leibniz used against absolute space?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that the spheres share all qualities yet seem to be two, against the identity of indiscernibles.",
          "Considers a reply, such as relational properties distinguishing them, or questioning whether the case is coherent.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between substantival and relational views of space, Leibniz's arguments from sufficient reason and the identity of indiscernibles, Newton's bucket, and how the debate developed after them.",

  glimpse: (
    <p>
      The next course turns to Kant, who answered both Newton and Leibniz by making space and time forms of our intuition.
      The Metaphysics course returns to time, and the possibility of time travel tests what the relationist and the
      substantivalist can say.
    </p>
  ),
};
