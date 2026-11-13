import { Definition, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { RealiserViz } from "@/components/viz/RealiserViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.2.3",
  minutes: 80,
  links: {
    revisits: ["p12.2.2", "p12.2.1", "p1.2.2"],
    foreshadows: ["p12.3.1", "p12.3.4", "p16.7.2"],
  },

  puzzle: (
    <>
      <p>
        An octopus that has been hurt guards its wound and avoids the place where it was harmed. Its nervous system is built
        quite differently from ours, and most of it lies in its arms. If pain is a particular kind of human brain state, the
        octopus cannot be in pain. Is that what we should say?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a being. Compare the verdicts of type identity theory, functionalism and the species-specific reply.</p>
      <RealiserViz />
    </>
  ),

  theory: (
    <>
      <Definition title="multiple realisability">
        <p>
          A mental kind is <strong>multiply realisable</strong> if it can be realised by physically different states in
          different creatures, or in the same creature at different times. Hilary Putnam argued in 1967 that pain, hunger and
          belief are like this.
        </p>
      </Definition>

      <ArgumentStepViz
        title="Putnam's argument"
        steps={[
          { claim: "If type identity theory is true, pain is identical with one physical kind, say C-fibre firing.", kind: "premise", note: "That is what a type identity says." },
          { claim: "Then any creature in pain is in that physical state.", kind: "inference", note: "Identity is identity: no pain without C-fibre firing." },
          { claim: "But pain is found, or could be found, in creatures with very different physical make-ups: octopuses, possible Martians, robots.", kind: "premise", note: "Putnam called the identity theory’s bet ‘ambitious’: it must find one physical state shared by every possible creature in pain.", objection: "Bechtel and Mundale: at a coarse enough grain, brain areas in different species are similar; at a fine grain, so are the mental states different." },
          { claim: "So pain is not identical with any single physical kind.", kind: "conclusion", note: "Type identity theory is false; mental kinds are functional kinds." },
        ]}
      />

      <Remark title="the species-specific reply">
        <p>
          Jaegwon Kim and David Lewis replied that we can keep local identities: human pain is C-fibre firing, octopus pain is
          some octopus state. Critics say this fragments pain: what do human and octopus pain have in common? Kim answered
          that perhaps nothing scientifically useful, and that &ldquo;pain&rdquo; may not name a single natural kind.
        </p>
      </Remark>

      <Remark title="autonomy of the special sciences">
        <p>
          Jerry Fodor generalised the point. Economics talks of money, which can be coins, paper or electronic records; no law
          of physics is about money as such. Likewise psychology may describe kinds that physics cannot express, even though
          every token mental state is physical. This supports <strong>token</strong> physicalism, each particular mental event
          is physical, without <strong>type</strong> identity.
        </p>
      </Remark>

      <Remark title="where it leads">
        <p>
          If pain is not a physical kind, what kind is it? The natural answer is a functional kind: whatever plays the right
          causal role between damage, other mental states and behaviour. That is functionalism, the subject of the next
          chapter.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for pain to be multiply realisable?</p>,
      answer: {
        kind: "choice",
        options: [
          "Pain happens many times.",
          "Pain can be realised by physically different states in different creatures.",
          "Pain has many causes.",
          "Pain is not real.",
        ],
        correct: [1],
      },
    },
    {
      key: "target",
      rung: "check",
      prompt: <p>Which theory is multiple realisability mainly an objection to?</p>,
      answer: { kind: "choice", options: ["Functionalism", "Type identity theory", "Substance dualism", "Token physicalism"], correct: [1] },
    },
    {
      key: "octo",
      rung: "apply",
      prompt: <p>If pain is identical with C-fibre firing, what follows about an octopus that guards its wounds but has no C-fibres?</p>,
      answer: {
        kind: "choice",
        options: ["It is in pain.", "It is not in pain.", "It has C-fibres after all.", "Nothing follows."],
        correct: [1],
      },
    },
    {
      key: "kim",
      rung: "apply",
      prompt: <p>What is the species-specific reply?</p>,
      answer: {
        kind: "choice",
        options: [
          "Only humans feel pain.",
          "Pain in humans is one physical state, pain in octopuses another: identities are local to kinds of creature.",
          "Pain is a soul state.",
          "Pain is behaviour.",
        ],
        correct: [1],
      },
    },
    {
      key: "token",
      rung: "apply",
      prompt: <p>What is token physicalism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Each particular mental event is a physical event, though mental types need not be physical types.",
          "Each mental type is a physical type.",
          "Money is physical.",
          "Only some mental events are physical.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does multiple realisability refute the identity theory? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Putnam’s argument.",
          "Considers a reply, such as species-specific identities or the grain argument.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "robot",
      rung: "stretch",
      prompt: <p>If a robot&rsquo;s circuits played exactly the role pain plays in us, would the robot be in pain?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Connects the question to multiple realisability and the functionalist answer.",
          "Considers a reason for doubt, such as whether it would feel anything.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend multiple realisability with the octopus and robot examples, Putnam’s argument against type identity, the species-specific reply and the worry about it, Fodor’s point about the special sciences, and why the argument leads to functionalism.",

  glimpse: (
    <p>
      The next chapter develops functionalism and asks whether a computer could have a mind. Philosophy of science later
      returns to whether higher-level sciences reduce to physics.
    </p>
  ),
};
