import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { PriorityTreeViz } from "@/components/viz/PriorityTreeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p27.1.3",
  minutes: 90,
  links: {
    revisits: ["p27.1.2", "p11.5.2", "p11.1.1"],
    foreshadows: ["p27.3.1", "p27.3.2", "p27.4.1"],
  },

  puzzle: (
    <>
      <p>
        A circle and its two halves: which is prior? Common sense says the parts make up the whole. But you can draw the
        circle first and then divide it in many ways, into halves, thirds or quarters. Perhaps the whole comes first and
        the parts are abstractions from it. Could the whole universe be like that?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare where the fundamental level lies under each view, then tick gunk.</p>
      <PriorityTreeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="priority monism and pluralism">
        <p>
          <strong>Existence monism</strong> says only one concrete thing exists. <strong>Priority monism</strong>, defended
          by Jonathan Schaffer in &lsquo;Monism: The Priority of the Whole&rsquo; (2010), grants that many things exist but
          says the cosmos is the one fundamental concrete object, and every proper part is grounded in it.{" "}
          <strong>Priority pluralism</strong> says the fundamental concrete objects are many: the smallest parts.
        </p>
      </Definition>

      <Theorem title="the argument from entanglement">
        <p>
          In quantum mechanics, entangled systems have states that are not fixed by the states of their parts: the whole
          has properties that do not supervene on the intrinsic properties of the parts. If the universe is one entangled
          system, its parts do not determine the whole, but the whole determines the parts. So the whole is the better
          candidate for fundamentality.
        </p>
      </Theorem>

      <Theorem title="the argument from gunk">
        <p>
          If gunk is possible, with every part having further proper parts, then pluralism makes some possible worlds lack a
          fundamental level. Monism guarantees a fundamental level in every world with a cosmos. If fundamentality must be
          well-founded as a matter of necessity, monism wins.
        </p>
      </Theorem>

      <Example title="history">
        <p>
          The idea has roots in Parmenides, Spinoza and the British idealists, notably F. H. Bradley, who held that
          relations require a single underlying whole. Russell and Moore&rsquo;s rejection of idealism made pluralism the
          default in analytic philosophy.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Critics reply that common sense and much of science explain wholes by their parts; that entanglement may show
          holism about properties without showing priority of the cosmos; and that monism leaves unexplained why the cosmos
          has the distribution of features it does, while pluralism explains wholes by recombining independent parts.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does priority monism claim?</p>,
      answer: { kind: "choice", options: ["Many things exist, but the cosmos is the one fundamental concrete object", "Only one thing exists", "The smallest parts are fundamental", "Nothing is fundamental"], correct: [0] },
    },
    {
      key: "who",
      rung: "check",
      prompt: <p>Who defended priority monism in 2010?</p>,
      answer: { kind: "choice", options: ["Jonathan Schaffer", "David Lewis", "Theodore Sider", "Kit Fine"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose priority pluralism and tick gunk. How many fundamental objects are there?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0 },
    },
    {
      key: "ent",
      rung: "apply",
      prompt: <p>What does the entanglement argument claim about an entangled whole?</p>,
      answer: { kind: "choice", options: ["Its state is not fixed by the intrinsic states of its parts", "It has no parts", "It is not physical", "Its parts are fundamental"], correct: [0] },
    },
    {
      key: "circle",
      rung: "apply",
      prompt: <p>In the puzzle&rsquo;s circle example, which view does &lsquo;divide it in many ways&rsquo; support?</p>,
      answer: { kind: "choice", options: ["That the whole is prior to its parts", "That the parts are prior", "That the circle does not exist", "That halves are fundamental"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does quantum entanglement support priority monism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how entangled states fail to supervene on the parts’ intrinsic states.",
          "Considers a reply, such as holism about properties without priority of the cosmos, or relations as fundamental.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is it a necessary truth that there is a fundamental level? How does your answer bear on the monism debate?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a position on whether well-foundedness is necessary.",
          "Connects it to the gunk argument for monism.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Grounding and fundamentality concern how the actual world is ordered. Metaphysics must also say what other
        possible worlds are. Lewis said they are as real as ours.
      </p>
      <p>Next, Lewis&rsquo;s realism defended and attacked.</p>
    </>
  ),
};
