import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { IgnitionViz } from "@/components/viz/IgnitionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p31.1.1",
  minutes: 90,
  links: {
    revisits: ["p12.5.4", "p12.3.1", "p12.5.3"],
    foreshadows: ["p31.1.2", "p31.1.3", "p31.4.1"],
  },

  puzzle: (
    <>
      <p>
        A word is flashed on a screen for a few hundredths of a second and then covered by a pattern. On some trials you see
        it, on others you see nothing, though the screen showed exactly the same thing. Your brain processed the word both
        times. What happened on the trials you saw it that did not happen on the others?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Raise the strength of a brief stimulus, and compare early sensory activity with late activity across the brain.</p>
      <IgnitionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the global workspace">
        <p>
          Bernard Baars proposed in <em>A Cognitive Theory of Consciousness</em> (1988) that the mind contains many
          specialised processors working unconsciously and in parallel, and a single workspace of limited capacity. Whatever
          enters the workspace is <strong>broadcast</strong> to all the processors at once, for memory, report, planning and
          reasoning. On the theory, a content is conscious just when it is globally broadcast in this way. Baars compared the
          workspace to the lit stage of a theatre, with a large unseen audience.
        </p>
      </Definition>

      <Definition title="the global neuronal workspace">
        <p>
          Stanislas Dehaene, Jean-Pierre Changeux and Lionel Naccache gave the idea a neural form: neurons with long-range
          connections, dense in prefrontal and parietal cortex, link distant areas. When a stimulus is strong enough, activity
          in them undergoes <strong>ignition</strong>, a sudden, self-sustaining and all-or-none rise about 300 milliseconds
          after the stimulus. Below threshold, processing stays local and fades.
        </p>
      </Definition>

      <Example title="evidence from the laboratory">
        <p>
          In masking and attentional-blink experiments, identical stimuli are sometimes seen and sometimes not. Seen trials
          show late, amplified activity spreading to frontal areas and a large late brain wave; unseen trials show early
          sensory responses only. Subliminal priming shows that unconscious processing can reach meaning and influence
          behaviour, but briefly. Dehaene&rsquo;s <em>Consciousness and the Brain</em> (2014) surveys this work.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Ned Block distinguished <strong>access consciousness</strong>, information available for reasoning and report,
          from <strong>phenomenal consciousness</strong>, what experience is like, and argued that the workspace explains the
          first and perhaps not the second. Since the evidence depends on report, critics ask whether it tracks consciousness
          or only reporting it. And as a functional theory, it faces the question of zombies: could a system have a workspace
          and no experience? An adversarial collaboration testing it against integrated information theory, published in
          2025, produced results that challenged predictions of both.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "gwt",
      rung: "check",
      prompt: <p>According to global workspace theory, what makes a content conscious?</p>,
      answer: { kind: "choice", options: ["Its being globally broadcast to many specialised processors", "Its being processed by any neuron", "Its being stored in long-term memory", "Its being about the self"], correct: [0] },
    },
    {
      key: "ign",
      rung: "check",
      prompt: <p>What is ignition in the global neuronal workspace?</p>,
      answer: { kind: "choice", options: ["A sudden, self-sustaining, all-or-none rise in widespread late activity", "A gradual increase in sensory activity", "The first response in the visual cortex", "A seizure"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the smallest stimulus strength at which ignition occurs?</p>,
      answer: { kind: "numeric", value: 50, tolerance: 0 },
    },
    {
      key: "block",
      rung: "apply",
      prompt: <p>In Block&rsquo;s terms, which kind of consciousness does the workspace theory most directly explain?</p>,
      answer: { kind: "choice", options: ["Access consciousness", "Phenomenal consciousness", "Self-consciousness", "Creature consciousness"], correct: [0] },
    },
    {
      key: "prime",
      rung: "apply",
      prompt: <p>What does subliminal priming suggest about unconscious processing?</p>,
      answer: { kind: "choice", options: ["It can reach meaning and influence behaviour, but its effects are brief", "It does not happen", "It is identical to conscious processing", "It occurs only in sleep"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does global workspace theory explain consciousness, or only access to information? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the theory fairly, with global broadcast or ignition.",
          "Considers the access and phenomenal distinction, or the worry from zombies.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If an artificial system had a global workspace architecture, would global workspace theory imply it is conscious? Should we accept that?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the theory is functional, so the architecture is what matters on it.",
          "Weighs a reason for or against accepting the implication.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The workspace theory locates consciousness in what a system does with information. A rival locates it in how the
        parts of a system constrain one another, and assigns every system a number measuring how much it is conscious.
      </p>
      <p>Next, integrated information theory.</p>
    </>
  ),
};
