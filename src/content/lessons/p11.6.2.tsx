import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TimeOntologyViz } from "@/components/viz/TimeOntologyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.6.2",
  minutes: 80,
  links: {
    revisits: ["p11.6.1", "p11.5.1", "p11.2.1"],
    foreshadows: ["p11.6.3", "p32.3.1", "p27.1.1"],
  },

  puzzle: (
    <>
      <p>
        Ashoka no longer exists, and Halley&rsquo;s comet will not return until 2061. Yet we say true things about both. Do
        past and future things exist, as distant places do, or is only the present real?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Switch between the views and see which events each counts as existing. Read what each must say about Ashoka.</p>
      <TimeOntologyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="four views">
        <ul>
          <li><strong>Presentism</strong>: only present things exist.</li>
          <li><strong>Growing block</strong>: past and present things exist; the future does not yet.</li>
          <li><strong>Eternalism</strong>: past, present and future things all exist; the present is not special.</li>
          <li><strong>Moving spotlight</strong>: all times exist, but one is objectively present, and which one changes.</li>
        </ul>
      </Definition>

      <Example title="the truthmaker objection">
        <p>
          &ldquo;Ashoka converted to Buddhism&rdquo; is true. Truthmaker theorists say every truth is made true by something
          that exists. For the presentist, Ashoka and his conversion do not exist, so what makes the claim true? Replies
          include present traces, irreducibly past-tensed properties of the world, or rejecting the truthmaker principle.
        </p>
      </Example>

      <Remark title="relativity">
        <p>
          Special relativity says events simultaneous in one frame are not simultaneous in another. If what exists is what is
          present, and the present is relative to a frame, existence seems relative too. Many take this to favour eternalism;
          presentists reply that there may be a privileged frame that physics cannot detect.
        </p>
      </Remark>

      <Remark title="cross-temporal relations">
        <p>
          &ldquo;I admire Ashoka&rdquo; seems to relate me to Ashoka. If relations need both relata to exist, presentism has
          trouble. Eternalists have no such trouble, but must say what makes the present feel special, and in what sense time
          passes at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pres",
      rung: "check",
      prompt: <p>What does presentism say?</p>,
      answer: { kind: "choice", options: ["Only present things exist", "All times exist equally", "Only the past exists", "The present is an illusion"], correct: [0] },
    },
    {
      key: "block",
      rung: "check",
      prompt: <p>On the growing block view, which exist?</p>,
      answer: { kind: "choice", options: ["Only the present", "Past and present, but not the future", "Past, present and future", "Only the future"], correct: [1] },
    },
    {
      key: "truth",
      rung: "apply",
      prompt: <p>What is the truthmaker objection to presentism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Truths about the past seem to lack anything existing to make them true",
          "Presentism makes the future fixed",
          "Presentism denies the present",
          "Truthmakers must be future",
        ],
        correct: [0],
      },
    },
    {
      key: "rel",
      rung: "apply",
      prompt: <p>Why is special relativity often thought to favour eternalism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it makes simultaneity relative to a frame, so a unique present seems unavailable",
          "Because it proves time travel",
          "Because it says the future is fixed by laws",
          "Because it denies motion",
        ],
        correct: [0],
      },
    },
    {
      key: "edge",
      rung: "apply",
      prompt: <p>Which is an objection to the growing block view?</p>,
      answer: {
        kind: "choice",
        options: [
          "It cannot make past truths true",
          "Past people would think they are at the present edge too, so how do we know we are?",
          "It denies the past",
          "It makes everything present",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Presentism or eternalism: which is more plausible? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States both views.",
          "Weighs an objection such as truthmakers, relativity or the feeling of passage.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "death",
      rung: "stretch",
      prompt: <p>If eternalism is true, does your past still exist? Would that change how you feel about death or loss?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what eternalism says about past times.",
          "Considers whether this could be consoling, or why it may not be.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend presentism, the growing block, eternalism and the moving spotlight, the truthmaker objection to presentism, and why relativity is often thought to favour eternalism.",

  glimpse: (
    <p>
      The next lesson asks whether time travel is possible, and which views of time allow it. Philosophy of physics studies
      the arrow of time, and graduate metaphysics the notion of grounding behind truthmaking.
    </p>
  ),
};
