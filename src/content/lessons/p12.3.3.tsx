import { Definition, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { RoomVariantsViz } from "@/components/viz/RoomVariantsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.3.3",
  minutes: 80,
  links: {
    revisits: ["p1.2.3", "p12.3.2", "p12.3.1"],
    foreshadows: ["p12.3.4", "p12.6.1", "p15.4.2"],
  },

  puzzle: (
    <>
      <p>
        A computer running a translation program swaps one string of symbols for another. Does it know what the words mean?
        John Searle argued in 1980 that no program, however good, could give understanding by itself, because running a program
        is something he could do without understanding anything.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Look at the original room and three replies, with Searle&rsquo;s answer to each. Record your verdict for every version.</p>
      <RoomVariantsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="strong and weak AI">
        <p>
          Searle distinguished <strong>weak AI</strong>, the claim that computers are useful tools for studying the mind, from{" "}
          <strong>strong AI</strong>, the claim that an appropriately programmed computer literally has a mind and understands.
          The Chinese room targets strong AI.
        </p>
      </Definition>

      <ArgumentStepViz
        title="Searle's argument from syntax and semantics"
        steps={[
          { claim: "Programs are purely formal: they operate on symbols by their shapes alone.", kind: "premise", note: "This is what makes them implementable on any hardware." },
          { claim: "Minds have semantics: thoughts are about things and have meanings.", kind: "premise", note: "Understanding Chinese involves knowing what the words mean." },
          { claim: "Syntax is not by itself sufficient for semantics.", kind: "premise", note: "The Chinese room is meant to show this: shuffling symbols by shape gives Searle no grasp of their meaning.", objection: "The systems reply: the room shows only that Searle lacks understanding, not that the whole system does." },
          { claim: "So running a program is not by itself sufficient for having a mind.", kind: "conclusion", note: "Searle adds that brains cause minds through their specific biological powers, which a program alone does not duplicate." },
        ]}
      />

      <Remark title="intuitions and scale">
        <p>
          Critics such as Paul and Patricia Churchland say the room trades on intuition. A person working by hand would take
          millennia to answer one question, and our sense that &ldquo;nothing understands here&rdquo; may be as unreliable as
          the old sense that light could not be electromagnetic waves because waving a magnet makes no light.
        </p>
      </Remark>

      <Remark title="what Searle accepts">
        <p>
          Searle is not a dualist. He holds that the brain is a machine and that machines can think, since we are such machines.
          His claim is that thinking requires the right causal powers, and that implementing a program does not guarantee them.
          Meaning comes, on his view, from intentionality that only certain physical systems have intrinsically.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "strong",
      rung: "check",
      prompt: <p>What does strong AI claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Computers are useful for studying the mind.",
          "An appropriately programmed computer literally understands and has a mind.",
          "Computers are faster than people.",
          "AI is dangerous.",
        ],
        correct: [1],
      },
    },
    {
      key: "syntax",
      rung: "check",
      prompt: <p>What is Searle&rsquo;s key premise about syntax?</p>,
      answer: { kind: "choice", options: ["Syntax is meaning", "Syntax is not by itself sufficient for semantics", "Syntax is impossible", "Syntax requires a brain"], correct: [1] },
    },
    {
      key: "systems",
      rung: "apply",
      prompt: <p>How does Searle answer the systems reply?</p>,
      answer: {
        kind: "choice",
        options: [
          "He agrees the system understands.",
          "He memorises the rulebook, so he is the whole system, and still understands nothing.",
          "He says systems do not exist.",
          "He adds a robot body.",
        ],
        correct: [1],
      },
    },
    {
      key: "robot",
      rung: "apply",
      prompt: <p>What does the robot reply add to the room?</p>,
      answer: {
        kind: "choice",
        options: [
          "A faster processor.",
          "Causal links between the symbols and things in the world, through sensors and actions.",
          "A second person.",
          "A larger rulebook.",
        ],
        correct: [1],
      },
    },
    {
      key: "dualist",
      rung: "apply",
      prompt: <p>Is Searle a dualist?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes: he thinks the mind is non-physical.",
          "No: he thinks brains cause minds through their physical causal powers, and that programs alone do not suffice.",
          "Yes: he thinks machines have souls.",
          "No: he denies minds exist.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the systems reply answer the Chinese room? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Chinese room argument and the systems reply.",
          "Evaluates Searle’s memorisation response.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "where",
      rung: "stretch",
      prompt: <p>If not from running the right program, where does meaning come from? Consider the robot reply and Searle&rsquo;s appeal to the brain.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers causal links to the world as a source of meaning.",
          "Considers Searle’s view that biology matters, and whether it is explanatory.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Chinese room, Searle’s argument that syntax does not give semantics, the systems, robot and brain simulator replies with his answers, and what Searle himself believes about minds and machines.",

  glimpse: (
    <p>
      The next lesson examines the computational theory of mind, which the room attacks. Later lessons ask what gives thoughts
      their content, and the philosophy of language returns to Searle on speech acts.
    </p>
  ),
};
