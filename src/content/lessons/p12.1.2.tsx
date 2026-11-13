import { Definition, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { InteractionViz } from "@/components/viz/InteractionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.1.2",
  minutes: 80,
  links: {
    revisits: ["p7.1.5", "p12.1.1", "p11.4.2"],
    foreshadows: ["p12.4.1", "p12.4.2", "p12.4.3"],
  },

  puzzle: (
    <>
      <p>
        You decide to raise your hand, and it rises. You prick your finger, and it hurts. Nothing seems more obvious than that
        mind and body act on each other. But if the mind is not physical, how does it push neurons? And if physics already
        explains every movement of every neuron, what is left for the mind to do?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare four dualist pictures of the causal links between mental and physical events. Which links does each keep, and at what cost?</p>
      <InteractionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the interaction problem">
        <p>
          Interactionist dualism holds that mental events cause physical ones and conversely. The <strong>interaction
          problem</strong> asks how this is possible. Elisabeth of Bohemia pressed the old form: causing motion seems to need
          contact and extension, which the mind lacks. The modern form is about the closure of physics.
        </p>
      </Definition>

      <ArgumentStepViz
        title="The causal closure argument"
        steps={[
          { claim: "Mental events cause physical events: my decision causes my arm to rise.", kind: "premise", note: "Denying this leads to epiphenomenalism." },
          { claim: "Every physical event that has a cause has a sufficient physical cause.", kind: "premise", note: "The causal closure of the physical, supported by the success of physiology: no unexplained forces are found in the brain.", objection: "Some dualists say the mind acts where physics is indeterministic, for example by settling quantum outcomes." },
          { claim: "Physical effects are not systematically overdetermined by separate mental and physical causes.", kind: "premise", note: "It would be a strange coincidence if every action had two independent sufficient causes." },
          { claim: "So mental causes must be physical causes.", kind: "conclusion", note: "The mental is identical to, or realised by, the physical. This is the main modern argument for physicalism." },
        ]}
      />

      <Remark title="conservation of energy">
        <p>
          Leibniz objected that a mind moving matter would add energy to the world. Modern dualists reply that conservation
          holds for closed systems, and the question is whether the brain is closed; or that the mind might redirect motion
          without adding energy. These replies are possible, but they make dualism depend on physics having gaps.
        </p>
      </Remark>

      <Remark title="the pairing problem">
        <p>
          Jaegwon Kim asked what makes a particular mind cause events in a particular body. Physical causes are paired with
          their effects by spatial relations. Two souls acting at the same moment, with no location, would have nothing to tie
          each to its own body.
        </p>
      </Remark>

      <Remark title="the alternatives">
        <p>
          Parallelism and occasionalism give up interaction and require divine arrangement. Epiphenomenalism keeps closure by
          making the mental an idle side-effect, at the cost of saying pain never causes wincing. Physicalism keeps mental
          causation by identifying the mental with the physical, and must then explain consciousness.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "closure",
      rung: "check",
      prompt: <p>What is the causal closure of the physical?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every physical event that has a cause has a sufficient physical cause.",
          "Physics is complete and finished.",
          "Mental events cause physical events.",
          "Nothing has a cause.",
        ],
        correct: [0],
      },
    },
    {
      key: "epi",
      rung: "check",
      prompt: <p>What does epiphenomenalism say about mental events?</p>,
      answer: { kind: "choice", options: ["They cause physical events.", "They are caused by physical events but cause nothing.", "They are caused by God.", "They do not exist."], correct: [1] },
    },
    {
      key: "over",
      rung: "apply",
      prompt: <p>Why is overdetermination a problem for the interactionist?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because then every action would have two independent sufficient causes, a systematic coincidence.",
          "Because overdetermination is logically impossible.",
          "Because it violates the law of gravity.",
          "Because it makes the mind physical.",
        ],
        correct: [0],
      },
    },
    {
      key: "pair",
      rung: "apply",
      prompt: <p>What is Kim&rsquo;s pairing problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "Minds come in pairs.",
          "Without spatial relations, nothing seems to tie a non-physical mind to the body it acts on.",
          "Brains have two hemispheres.",
          "Every cause needs two effects.",
        ],
        correct: [1],
      },
    },
    {
      key: "occ",
      rung: "apply",
      prompt: <p>On occasionalism, what happens when you decide to raise your arm?</p>,
      answer: {
        kind: "choice",
        options: [
          "Your decision moves your arm.",
          "On the occasion of your decision, God moves your arm.",
          "Your brain moves your arm, and the decision is idle.",
          "Your arm moves itself.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a dualist reject the causal closure of the physical? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the closure principle and the evidence for it.",
          "Considers a dualist strategy, such as action at quantum indeterminacies, and its costs.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "epi-ok",
      rung: "stretch",
      prompt: <p>If epiphenomenalism were true, could your belief that you are in pain be caused by your pain? Does this refute epiphenomenalism?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that on epiphenomenalism the pain causes nothing, so the belief is caused by the brain state alone.",
          "Considers whether this undermines knowledge of one’s own experiences.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the interaction problem for dualism, the causal closure argument for physicalism, the conservation and pairing objections, and how parallelism, occasionalism and epiphenomenalism try to avoid interaction.",

  glimpse: (
    <p>
      The next chapter turns to theories that identify the mind with behaviour or with the brain. Mental causation returns later,
      when Kim&rsquo;s exclusion problem threatens even physicalists.
    </p>
  ),
};
