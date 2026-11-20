import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RubberHandViz } from "@/components/viz/RubberHandViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p31.3.1",
  minutes: 90,
  links: {
    revisits: ["p31.1.3", "p12.7.1", "p12.5.4"],
    foreshadows: ["p31.3.2", "p31.4.1", "p31.4.2"],
  },

  puzzle: (
    <>
      <p>
        Your own hand is hidden behind a screen, and a rubber hand lies in front of you. Someone strokes both with brushes,
        at the same moments. After a minute many people feel the touch in the rubber hand, and flinch when it is threatened
        with a knife. If the feeling that a hand is yours can be moved to a rubber glove, what is the feeling of being a self
        made of?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the delay between the seen and the felt strokes, and watch the illusion appear or vanish.</p>
      <RubberHandViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the self-model theory">
        <p>
          Thomas Metzinger argues in <em>Being No One</em> (2003) that there are no such things as selves. What exists is a{" "}
          <strong>phenomenal self-model</strong>: a representation the brain constructs of the organism as a whole, its body,
          its states and its perspective. The model is <strong>transparent</strong>: we cannot experience it as a model, so
          we experience being someone, rather than representing someone.
        </p>
      </Definition>

      <Definition title="ownership and agency">
        <p>
          Philosophers distinguish the <strong>sense of ownership</strong>, that this body or this thought is mine, from the{" "}
          <strong>sense of agency</strong>, that I am the one doing it. They come apart: when someone lifts your arm, you own
          the movement but are not its agent. Predictive accounts treat both as inferences: ownership from the binding of sight
          and touch, agency from the match between predicted and actual consequences of action.
        </p>
      </Definition>

      <Example title="bodily illusions">
        <p>
          In the rubber hand illusion, synchronous stroking makes the rubber hand feel owned and shifts the felt position of
          the real hand towards it. In full-body versions, using cameras and a headset, Henrik Ehrsson and Olaf Blanke&rsquo;s
          groups led people to locate themselves in a body seen at a distance, much as in some out-of-body experiences. In
          somatoparaphrenia, after certain right-hemisphere strokes, patients deny that their own limb belongs to them.
        </p>
      </Example>

      <Remark title="is the self an illusion?">
        <p>
          Critics reply that a model must be a model of something, and that the experiences in these illusions are still had
          by someone: misplacing one&rsquo;s hand does not show there is no one whose hand it is. Dan Zahavi argues for a
          minimal self, the first-personal givenness of experience, which no illusion removes. Metzinger accepts that there is
          an organism and a model; what he denies is a further, enduring thing that the model represents.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "psm",
      rung: "check",
      prompt: <p>According to Metzinger, what exists instead of a self?</p>,
      answer: { kind: "choice", options: ["A transparent phenomenal self-model constructed by the brain", "An immaterial soul", "Nothing at all, not even experience", "A bundle of physical objects"], correct: [0] },
    },
    {
      key: "own",
      rung: "check",
      prompt: <p>If someone else lifts your arm, which sense do you keep and which do you lack?</p>,
      answer: { kind: "choice", options: ["You keep ownership and lack agency", "You keep agency and lack ownership", "You keep both", "You lack both"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the largest delay, in milliseconds, at which the illusion is still reported?</p>,
      answer: { kind: "numeric", value: 300, tolerance: 0 },
    },
    {
      key: "drift",
      rung: "apply",
      prompt: <p>What is proprioceptive drift in the rubber hand illusion?</p>,
      answer: { kind: "choice", options: ["A shift in the felt position of the real hand towards the rubber hand", "A movement of the rubber hand", "A loss of touch in the real hand", "A change in the stroking rhythm"], correct: [0] },
    },
    {
      key: "zahavi",
      rung: "apply",
      prompt: <p>What does Zahavi&rsquo;s minimal self consist in?</p>,
      answer: { kind: "choice", options: ["The first-personal givenness of experience", "A narrative told over a lifetime", "The body’s position in space", "A soul distinct from the brain"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the rubber hand illusion show that the self is a construction of the brain? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes the illusion and what it shows about bodily ownership.",
          "Considers whether ownership of a body part is the same as being a self, or a reply such as Zahavi’s.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If the self is a model, whose model is it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the worry that a model needs a modeller.",
          "Considers Metzinger’s reply that the organism, not a self, does the modelling.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The thought that there is no enduring self is not new. Buddhist philosophers argued for it more than two thousand
        years ago, and Hume reached a similar view by looking inward and finding only perceptions.
      </p>
      <p>Next, no-self views, East and West.</p>
    </>
  ),
};
