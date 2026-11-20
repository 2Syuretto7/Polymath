import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { MuddyChildrenViz } from "@/components/viz/MuddyChildrenViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p26.3.1",
  minutes: 90,
  links: {
    revisits: ["p26.2.2", "p26.1.3", "p17.4.2"],
    foreshadows: ["p26.3.2", "p26.3.3", "p26.4.3"],
  },

  puzzle: (
    <>
      <p>
        Three children play outside, and two get mud on their foreheads. Each can see the others but not themselves. A
        parent says: &lsquo;At least one of you is muddy.&rsquo; Every child already knew that. Yet after the parent speaks,
        the muddy children can work out that they are muddy, and before it they could not. How can telling people what they
        already know change what they can know?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose who is muddy. Make the announcement, then ask repeatedly whether anyone knows. Watch the possible worlds
        disappear.
      </p>
      <MuddyChildrenViz />
    </>
  ),

  theory: (
    <>
      <Definition title="epistemic models">
        <p>
          Jaakko Hintikka&rsquo;s <em>Knowledge and Belief</em> (1962) read □ as knowledge. For each agent a, a relation{" "}
          <strong>~ₐ</strong> holds between worlds a cannot tell apart. <strong>Kₐφ</strong>, &lsquo;a knows that φ&rsquo;, is
          true at w when φ is true at every world a cannot distinguish from w. Typically ~ₐ is an equivalence relation, and
          the logic of each Kₐ is S5.
        </p>
      </Definition>

      <Theorem title="the principles">
        <ul>
          <li>T, Kφ → φ: knowledge is factive.</li>
          <li>4, Kφ → KKφ: positive introspection, the KK principle.</li>
          <li>5, ¬Kφ → K¬Kφ: negative introspection.</li>
          <li>K and necessitation: agents know all consequences of what they know, and all logical truths.</li>
        </ul>
        <p>
          T is beyond dispute. Williamson&rsquo;s anti-luminosity argument attacks 4, and 5 fails for anyone who wrongly
          believes they know. The last principle is the <strong>problem of logical omniscience</strong>: no real agent knows
          every consequence of what they know.
        </p>
      </Theorem>

      <Definition title="common knowledge">
        <p>
          A fact is <strong>common knowledge</strong> in a group if everyone knows it, everyone knows that everyone knows it,
          and so on without end. In the puzzle, before the announcement everyone knows someone is muddy, but not that
          everyone knows that everyone knows it. The public announcement makes it common knowledge.
        </p>
      </Definition>

      <Example title="public announcement">
        <p>
          In dynamic epistemic logic, begun by Jan Plaza in 1989, a truthful public announcement of φ deletes every world
          where φ is false. Each round of &lsquo;nobody knows&rsquo; is itself an announcement and deletes more worlds. With k
          muddy children, the muddy ones know after k − 1 rounds.
        </p>
      </Example>

      <Remark title="beyond philosophy">
        <p>
          Epistemic logic is now used in computer science, for reasoning about distributed systems where processors know
          different things, and in economics, where Robert Aumann showed that agents with common priors cannot agree to
          disagree once their posteriors are common knowledge.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "k",
      rung: "check",
      prompt: <p>When is Kₐφ true at a world w?</p>,
      answer: { kind: "choice", options: ["When φ is true at every world a cannot distinguish from w", "When φ is true at w", "When φ is true at some world a considers possible", "When a believes φ"], correct: [0] },
    },
    {
      key: "omni",
      rung: "check",
      prompt: <p>What is the problem of logical omniscience?</p>,
      answer: { kind: "choice", options: ["The logic implies agents know all consequences of what they know", "Agents cannot know logical truths", "Knowledge is not factive", "No one can know anything"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, make all three children muddy. After the announcement, how many rounds of &lsquo;nobody knows&rsquo; pass before they know?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "five",
      rung: "apply",
      prompt: <p>Which principle fails for someone who falsely believes they know something?</p>,
      answer: { kind: "choice", options: ["Negative introspection: ¬Kφ → K¬Kφ", "Factivity: Kφ → φ", "Necessitation for tautologies", "The K axiom"], correct: [0] },
    },
    {
      key: "ck",
      rung: "apply",
      prompt: <p>With two muddy children, what does the parent&rsquo;s announcement add?</p>,
      answer: { kind: "choice", options: ["It makes the fact common knowledge", "Nothing at all", "It tells each child their own state", "It makes a false statement true"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Explain why, with exactly two muddy children, each muddy child knows after one round of &lsquo;nobody knows&rsquo;.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a muddy child who sees exactly one other muddy child.",
          "Notes that if they were clean, the other muddy child would see no mud and would have known at once from the announcement.",
          "Concludes that since nobody knew, they must be muddy.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should a logic of knowledge include the KK principle?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the KK principle.",
          "Considers an argument for or against, such as introspection or Williamson’s anti-luminosity argument.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Read □ as &lsquo;it ought to be that&rsquo;, and the same machinery gives a logic of obligation. But that logic meets
        puzzles of its own, about obligations that arise only when other obligations are broken.
      </p>
      <p>Next, deontic logic.</p>
    </>
  ),
};
