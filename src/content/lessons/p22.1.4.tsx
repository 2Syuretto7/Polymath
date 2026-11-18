import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PebbleSplitViz } from "@/components/viz/PebbleSplitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.1.4",
  minutes: 80,
  links: {
    revisits: ["p22.1.3", "p22.1.2", "p0.4.2"],
    foreshadows: ["p22.2.1", "p22.6.2", "p22.6.3"],
  },

  puzzle: (
    <>
      <p>
        Every time anyone has put two things together with two more, they have had four. That is a lot of evidence. Is that
        why you believe 2 + 2 = 4? Or would you keep believing it even if, tomorrow, putting two and two together reliably
        gave five?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Split pebbles as Mill would, then try the harder cases.</p>
      <PebbleSplitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="radical empiricism">
        <p>
          John Stuart Mill&rsquo;s <em>System of Logic</em> (1843) holds that all knowledge comes from experience, with no a
          priori exceptions. The axioms of geometry and the truths of arithmetic are <strong>inductive
          generalisations</strong>, different from laws of nature only in being confirmed more often and more uniformly.
        </p>
      </Definition>

      <Example title="pebbles">
        <p>
          Numbers, for Mill, are names of properties of aggregates. The statement that 3 = 2 + 1 asserts a physical fact:
          &lsquo;that collections of objects exist, which while they impress the senses thus, ○○○, may be separated into two
          parts, thus, ○○ ○&rsquo;. Geometry likewise idealises experience: there are no points without magnitude or lines
          without breadth, and its theorems are approximately true of real figures.
        </p>
      </Example>

      <Definition title="the feeling of necessity">
        <p>
          Why, then, do these truths seem necessary? Mill answers that they are confirmed at every moment of our lives, so
          that we cannot even picture their failure. But inability to conceive the opposite is a fact about our minds, not
          proof of necessity: people once found the antipodes inconceivable.
        </p>
      </Definition>

      <Remark title="Frege's attack, and revivals">
        <p>
          In the <em>Foundations of Arithmetic</em> (1884), Frege mocked this as &lsquo;gingerbread or pebble
          arithmetic&rsquo;. What observed fact does 0 record, or 777864? We count things that are not physical at all, such
          as the figures of the syllogism or the solutions of an equation. And arithmetic would hold only by the luck that
          things are not all nailed down. Yet empiricism returned: Quine argued that mathematics is confirmed together with
          the sciences that use it, and Philip Kitcher (1983) traced arithmetic to the operations we perform on collections.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "source",
      rung: "check",
      prompt: <p>Where does mathematical knowledge come from, according to Mill?</p>,
      answer: { kind: "choice", options: ["Experience, by induction", "Pure intuition of space and time", "Recollection", "Logic and definitions alone"], correct: [0] },
    },
    {
      key: "nec",
      rung: "check",
      prompt: <p>How does Mill explain why arithmetic seems necessary?</p>,
      answer: { kind: "choice", options: ["It is confirmed so constantly that we cannot imagine its failure", "It is analytic", "God guarantees it", "It is about Forms"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with 7 pebbles split after 3, how many are in the second group?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "zero",
      rung: "apply",
      prompt: <p>What is Frege&rsquo;s point about the number 0?</p>,
      answer: { kind: "choice", options: ["No observed collection of pebbles corresponds to it", "It is not a number", "It cannot be added", "It is too large to observe"], correct: [0] },
    },
    {
      key: "drops",
      rung: "apply",
      prompt: <p>What would Mill most plausibly say about one drop of water poured into another making one drop?</p>,
      answer: { kind: "choice", options: ["Drops are not stable aggregates, so the case does not test arithmetic", "It refutes 1 + 1 = 2", "It proves arithmetic is analytic", "Water is not a physical object"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Could any experiment ever refute 2 + 2 = 4? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Mill’s view that arithmetic is an empirical generalisation and so is in principle revisable.",
          "Considers a reply, such as that any apparent counterexample would be explained away (something added or lost), which suggests arithmetic is not tested like a hypothesis.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is Mill right that being unable to conceive the opposite of a claim is no evidence that the claim is necessary?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an example of something once thought inconceivable that turned out true, or false.",
          "Considers whether mathematical inconceivability is different in kind.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Frege rejected Mill and Kant alike. Arithmetic, he argued, is neither empirical nor grounded in intuition: it is
        logic in disguise.
      </p>
      <p>
        Next, Frege&rsquo;s logicism: the <em>Foundations of Arithmetic</em>, number statements as statements about concepts,
        the context principle, Hume&rsquo;s principle, and the Julius Caesar problem.
      </p>
    </>
  ),
};
