import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { BaseCheckViz } from "@/components/viz/BaseCheckViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p27.1.2",
  minutes: 90,
  links: {
    revisits: ["p27.1.1", "p11.1.1", "p11.2.3"],
    foreshadows: ["p27.1.3", "p27.5.2", "p27.5.3"],
  },

  puzzle: (
    <>
      <p>
        Physics describes the world with a few quantities: mass, charge, spin. Everyday talk uses thousands: wet, red,
        expensive, rude. Both are true descriptions. Yet it seems the first is closer to how the world is in itself. What
        makes some facts or concepts more fundamental than others?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a set of facts to count as fundamental, and test whether it is complete and independent.</p>
      <BaseCheckViz />
    </>
  ),

  theory: (
    <>
      <Definition title="fundamentality via grounding">
        <p>
          A fact is <strong>fundamental</strong> if it is not grounded in other facts. A fundamental base should be{" "}
          <strong>complete</strong>, grounding every other fact, and <strong>independent</strong>, with no member grounded
          in the rest. Whether such a base exists depends on whether grounding is well-founded.
        </p>
      </Definition>

      <Definition title="Lewis on natural properties">
        <p>
          David Lewis, in 1983, distinguished <strong>perfectly natural</strong> properties, such as mass and charge, from
          gerrymandered ones. Natural properties make for objective similarity, figure in laws of nature, and fix the
          reference of our words: they are reference magnets. Being grue is less natural than being green.
        </p>
      </Definition>

      <Theorem title="Sider's structure">
        <p>
          Theodore Sider, in <em>Writing the Book of the World</em> (2011), generalises naturalness to a primitive notion of{" "}
          <strong>structure</strong> that applies to expressions of any category: predicates, quantifiers, logical
          connectives. A language carves at the joints when its primitive terms are structural. The goal of metaphysics is
          to describe the world in joint-carving terms, and a question is substantive when its key terms carve at the
          joints.
        </p>
      </Theorem>

      <Example title="two ways to rank">
        <p>
          The grounding approach ranks facts: the hydrogen atom&rsquo;s existence is less fundamental than the particle
          facts. The structure approach ranks notions: &lsquo;charge&rsquo; is more joint-carving than &lsquo;wet&rsquo;.
          Sider holds that structure is the more basic idea, and that grounding is not needed; Fine and Schaffer hold the
          reverse.
        </p>
      </Example>

      <Remark title="is there a bottom level?">
        <p>
          Jonathan Schaffer asked &lsquo;Is there a fundamental level?&rsquo; (2003). If every particle has smaller parts
          without end, or every level is grounded in a lower one, then fundamentality-based metaphysics needs another
          foundation, or must accept that there is none.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "complete",
      rung: "check",
      prompt: <p>What does it mean for a fundamental base to be complete?</p>,
      answer: { kind: "choice", options: ["Every fact is in it or grounded in it", "It contains every fact", "No member is grounded in the others", "It is finite"], correct: [0] },
    },
    {
      key: "lewis",
      rung: "check",
      prompt: <p>Which role did Lewis give to natural properties?</p>,
      answer: { kind: "choice", options: ["They make for objective similarity and figure in laws", "They are the properties we perceive", "They are the properties named by common nouns", "They are the necessary properties"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, the starting base is not independent. Which fact should be removed to fix that?</p>,
      answer: { kind: "choice", options: ["1 and 2 attract", "particle 1 has charge −1", "particle 2 has charge +1", "the glass is wet"], correct: [0] },
    },
    {
      key: "sider",
      rung: "apply",
      prompt: <p>For Sider, which kinds of expression can carve at the joints?</p>,
      answer: { kind: "choice", options: ["Expressions of any category, including quantifiers and connectives", "Only predicates", "Only names", "Only sentences"], correct: [0] },
    },
    {
      key: "gunk",
      rung: "apply",
      prompt: <p>If matter is gunky, with every part having smaller parts, what follows for a view on which wholes are grounded in their parts?</p>,
      answer: { kind: "choice", options: ["There is no fundamental level of parts", "The cosmos is not grounded", "Grounding is reflexive", "Every whole is fundamental"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is fundamentality best understood through grounding of facts or through structure of concepts? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a position: grounding first (Fine, Schaffer), structure first (Sider), or both needed.",
          "Gives a consideration, such as Sider’s worry about grounding’s extra ideology, or grounding’s ability to rank particular facts.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could the world have no fundamental level at all? Would that matter?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes what a world without a fundamental level would be like, such as gunk or infinite descent of grounds.",
          "Considers whether that undermines explanation or physicalism.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Most assume that if there is a fundamental level, it lies at the bottom, among the smallest things. One view turns
        that upside down: the most fundamental thing is the biggest one.
      </p>
      <p>Next, priority monism.</p>
    </>
  ),
};
