import { Definition, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { TimeLoopViz } from "@/components/viz/TimeLoopViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.6.3",
  minutes: 80,
  links: {
    revisits: ["p11.6.2", "p11.6.1", "p11.4.2"],
    foreshadows: ["p11.7.1", "p32.1.3", "p32.3.1"],
  },

  puzzle: (
    <>
      <p>
        Tim builds a time machine, travels to 1921, and sets out to shoot his grandfather before his father is born. If he
        succeeds, he is never born, so he never travels, so he does not succeed. Does this show that time travel is
        impossible? Or only that Tim will miss?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose how you will respond to a note from your future self, then try each possible note. Which histories hang
        together?
      </p>
      <TimeLoopViz />
    </>
  ),

  theory: (
    <>
      <Definition title="time travel">
        <p>
          David Lewis defined it as a discrepancy between two kinds of time. <strong>External time</strong> is the time of
          the world; <strong>personal time</strong> is the time of the traveller, measured by their watch, their ageing and
          their memories. A traveller who steps into the machine and steps out a minute later by personal time, but a century
          earlier by external time, has travelled back in time.
        </p>
      </Definition>

      <ArgumentStepViz
        title="The grandfather paradox"
        steps={[
          { claim: "If backward time travel is possible, Tim can travel to 1921.", kind: "premise", note: "Nothing about the machine stops him." },
          { claim: "In 1921 Tim has a gun, good aim and the will to shoot. So Tim can kill his grandfather.", kind: "premise", note: "He is as able as any assassin who succeeds.", objection: "Lewis: ‘can’ is relative to a set of facts. Relative to Tim’s gun and skill he can; relative to the fact that Grandfather lived until 1957, he cannot." },
          { claim: "But Grandfather survived, so Tim cannot kill him: no one can change the past.", kind: "premise", note: "The past is fixed: what happened, happened." },
          { claim: "So Tim both can and cannot kill his grandfather.", kind: "inference", note: "A contradiction, it seems.", objection: "Not a contradiction, only two senses of ‘can’ relative to different facts, as when someone who speaks Finnish ‘can’ speak it and ‘cannot’ when gagged." },
          { claim: "So backward time travel is impossible.", kind: "conclusion", note: "Lewis rejects the step: what follows is only that Tim will fail, for some ordinary reason, a slip on a banana peel." },
        ]}
      />

      <Remark title="changing and affecting the past">
        <p>
          Lewis&rsquo;s traveller does not <em>change</em> the past: there is one 1921, and it already includes Tim&rsquo;s
          visit. But they can <em>affect</em> it, by being one of its causes. Physicists studying closed timelike curves reach a
          similar view, Novikov&rsquo;s self-consistency principle: only globally consistent histories occur.
        </p>
      </Remark>

      <Remark title="causal loops">
        <p>
          A consistent loop can still be strange. A traveller gives the young Ramanujan a notebook of his own theorems, which he
          later writes down, and the notebook is carried back. Who discovered the theorems? Such <strong>bootstrap</strong>{" "}
          loops contain information with no origin. Lewis thought them strange but not impossible, as a loop is no more
          inexplicable than an uncaused first event.
        </p>
      </Remark>

      <Remark title="time travel and the metaphysics of time">
        <p>
          Eternalism makes room for time travel: the past is there to visit. Presentism has trouble, since there is no past to
          arrive in. Branching or hypertime views avoid the paradoxes by letting the traveller arrive in a different history,
          but then it is unclear that they have travelled in time rather than to a different world.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>On Lewis&rsquo;s definition, what is time travel?</p>,
      answer: {
        kind: "choice",
        options: [
          "Any change in position over time.",
          "A discrepancy between the traveller’s personal time and external time.",
          "Moving faster than light.",
          "Remembering the past.",
        ],
        correct: [1],
      },
    },
    {
      key: "aim",
      rung: "check",
      prompt: <p>What does the grandfather paradox claim to show?</p>,
      answer: { kind: "choice", options: ["That backward time travel is impossible", "That the future is open", "That time is unreal", "That causation is regularity"], correct: [0] },
    },
    {
      key: "lewis",
      rung: "apply",
      prompt: <p>How does Lewis answer the grandfather paradox?</p>,
      answer: {
        kind: "choice",
        options: [
          "Tim kills his grandfather and creates a new timeline.",
          "‘Can’ is relative to facts: Tim can kill relative to his skill, cannot relative to Grandfather’s survival, and will fail for an ordinary reason.",
          "Time machines cannot be built.",
          "Tim’s grandfather is not really his grandfather.",
        ],
        correct: [1],
      },
    },
    {
      key: "loop",
      rung: "apply",
      prompt: <p>In the note example, you resolve to copy whatever note you receive. What follows?</p>,
      answer: {
        kind: "choice",
        options: [
          "No consistent history exists.",
          "Exactly one consistent history exists.",
          "Two consistent histories exist, and nothing in the loop settles which occurs.",
          "The note must be blank.",
        ],
        correct: [2],
      },
    },
    {
      key: "present",
      rung: "apply",
      prompt: <p>Why is backward time travel harder for a presentist to accept?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because presentists deny that people can move.",
          "Because, for a presentist, past times do not exist, so there is nowhere to travel to.",
          "Because presentism implies determinism.",
          "Because presentists accept only the B series.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can Tim kill his grandfather? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the paradox and why it seems to rule out time travel.",
          "Considers Lewis’s relativity of ‘can’, or another response such as branching histories.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "bootstrap",
      rung: "stretch",
      prompt: <p>Is a loop in which information has no origin, like the notebook of theorems, a reason to reject time travel?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes what is strange about the loop.",
          "Weighs Lewis’s reply that the loop is no worse than an uncaused event, or another consideration.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Lewis’s definition of time travel, the grandfather paradox and Lewis’s reply about the meaning of ‘can’, the difference between changing and affecting the past, and why causal loops and presentism make time travel puzzling.",

  glimpse: (
    <p>
      The puzzle about what Tim can do returns in the next chapter, where the question is whether anyone can do otherwise in a
      deterministic world. Philosophy of physics later asks whether relativity permits time travel at all.
    </p>
  ),
};
