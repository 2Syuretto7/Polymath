import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PrecisionWeightViz } from "@/components/viz/PrecisionWeightViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p31.1.3",
  minutes: 90,
  links: {
    revisits: ["p31.1.2", "p12.7.2", "p12.3.4"],
    foreshadows: ["p31.3.1", "p31.2.1", "p31.4.1"],
  },

  puzzle: (
    <>
      <p>
        You cannot tickle yourself. A hollow mask, viewed from behind, still looks like a face bulging towards you. A
        familiar song played through heavy noise sounds clear once you know the words. In each case what you perceive is
        not simply what reaches your senses. What is the brain adding, and why?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change how reliable the prediction and the senses are, and see where the percept settles.</p>
      <PrecisionWeightViz />
    </>
  ),

  theory: (
    <>
      <Definition title="predictive processing">
        <p>
          On <strong>predictive processing</strong>, the brain maintains a hierarchical generative model of the causes of its
          sensory input. Each level predicts the activity of the level below; only the mismatch, the{" "}
          <strong>prediction error</strong>, is passed upwards, and the model is revised to reduce it. Perception is the
          brain&rsquo;s best hypothesis about the world, inferred from the inside out. The view was developed from Hermann von
          Helmholtz&rsquo;s idea of unconscious inference by Karl Friston, Andy Clark and Jakob Hohwy, among others.
        </p>
      </Definition>

      <Definition title="precision weighting">
        <p>
          Errors are weighted by their expected <strong>precision</strong>, or reliability. When the senses are reliable,
          errors drive large updates; in noise, expectations dominate. On this view attention is the optimisation of
          precision: attending to something turns up the gain on its prediction errors. With Gaussian beliefs, the percept is
          the precision-weighted average of prediction and signal.
        </p>
      </Definition>

      <Example title="action as prediction">
        <p>
          On <strong>active inference</strong>, error can also be reduced by acting so that the input matches the prediction:
          a movement is a predicted sensation made true. Self-tickling fails because the brain predicts the sensory
          consequences of its own movement and cancels them. Some have proposed that symptoms of schizophrenia, such as
          experiencing one&rsquo;s own actions as alien, reflect a failure of this cancellation.
        </p>
      </Example>

      <Remark title="questions">
        <p>
          Critics ask whether the framework is too flexible to test, since almost any behaviour can be described as reducing
          some prediction error, and why creatures that minimise surprise do not seek a dark room and stay there. Defenders
          reply that the generative model itself expects food, warmth and company. Philosophers debate whether the view makes
          the mind inward-looking, behind a veil of hypotheses, or deeply embodied, since prediction is for action.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "error",
      rung: "check",
      prompt: <p>On predictive processing, what is passed up the hierarchy from the senses?</p>,
      answer: { kind: "choice", options: ["Prediction error: the mismatch between prediction and input", "A complete copy of the input", "Nothing at all", "Only the predictions"], correct: [0] },
    },
    {
      key: "attn",
      rung: "check",
      prompt: <p>What is attention, on predictive processing?</p>,
      answer: { kind: "choice", options: ["The optimisation of precision, turning up the weight of some prediction errors", "A spotlight unrelated to prediction", "The suppression of all errors", "Conscious report"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set both precisions to 0.5. Where does the percept settle?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0.01 },
    },
    {
      key: "tickle",
      rung: "apply",
      prompt: <p>Why can you not tickle yourself, on this view?</p>,
      answer: { kind: "choice", options: ["The brain predicts the sensory effects of its own movement and cancels them", "The skin cannot feel one’s own fingers", "Tickling needs a second brain", "Self-touch is not perceived at all"], correct: [0] },
    },
    {
      key: "dark",
      rung: "apply",
      prompt: <p>What is the dark room problem?</p>,
      answer: { kind: "choice", options: ["If creatures minimise surprise, why do they not sit in an unchanging dark room?", "Why vision fails at night", "Why dreams are dark", "Why the brain has no light sensors"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is predictive processing a testable theory of the mind, or a flexible framework that fits anything? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the view fairly.",
          "Considers the worry about flexibility and a reply, such as specific models making specific predictions.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If perception is the brain&rsquo;s best hypothesis, do we perceive the world directly?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with whether inference puts a veil between mind and world.",
          "Considers an embodied or action-oriented reading.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        These theories ask which brain states are conscious. A different question is what fixes how an experience feels. One
        bold answer says: nothing but what the experience represents.
      </p>
      <p>Next, representationalism.</p>
    </>
  ),
};
