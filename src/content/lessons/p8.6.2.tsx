import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SublimeViz } from "@/components/viz/SublimeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p8.6.2",
  minutes: 80,
  links: {
    revisits: ["p8.6.1", "p8.4.2", "p8.5.3"],
    foreshadows: ["p8.6.3", "p24.4.1", "p9.1.1"],
  },

  puzzle: (
    <>
      <p>
        A rose pleases us in a calm, easy way. A storm at sea, a range of towering mountains or the night sky is different: we
        feel small, even threatened, and yet we seek such sights out and call the experience exhilarating. Edmund Burke had
        explained this by the physiology of fear. Kant found something stranger in it: a pleasure that arises from the
        failure of our own powers, and that tells us something about ourselves rather than about nature.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Follow Kant&rsquo;s chain of measures, from a person&rsquo;s height to the system of galaxies. At each stage, ask
        whether you can still take in the magnitude as a single whole.
      </p>
      <SublimeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the beautiful and the sublime">
        <p>
          The beautiful concerns the <strong>form</strong> of an object, which is bounded. The sublime can be found in a{" "}
          <strong>formless</strong> object, when it is presented as unbounded. Beauty brings a direct feeling of life
          furthered; the sublime is a <strong>negative pleasure</strong>, arising through a momentary check to our powers,
          followed by a stronger outpouring of them.
        </p>
      </Definition>

      <Definition title="the mathematical sublime">
        <p>
          The sublime is what is <strong>absolutely great</strong>, great beyond all comparison. Number can measure anything,
          but the imagination must also <strong>comprehend</strong> its units in one intuition, and that power has a
          maximum. Before the vast, apprehension runs on while comprehension fails. Reason, meanwhile, demands totality, the
          idea of the infinite as a whole. The feeling of imagination&rsquo;s inadequacy to reason&rsquo;s idea, and of our
          own possession of that idea, is the mathematical sublime.
        </p>
      </Definition>

      <Example title="the dynamical sublime">
        <p>
          Thunderclouds, volcanoes, hurricanes and the boundless ocean in a storm show nature as a <strong>might</strong>.
          Seen from a place of safety, they make our physical power seem trivial, but they also reveal a power of
          resistance in us of a different kind: as rational and moral beings, nature has no dominion over us. Someone
          actually afraid cannot judge the sublime, just as someone hungry cannot judge a meal&rsquo;s beauty.
        </p>
      </Example>

      <Remark title="the sublime is in the mind">
        <p>
          Strictly, Kant says, no object of nature is sublime. We attribute sublimity to the ocean by a kind of{" "}
          <strong>subreption</strong>, substituting respect for the object in place of respect for the idea of humanity in
          ourselves. The feeling is thus close to moral respect for the law, and Kant prized the sublime as a bridge from
          aesthetics to morality. Later Romantic poets and painters made it one of their great themes.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "absolute",
      rung: "check",
      prompt: <p>How does Kant define the sublime in its mathematical form?</p>,
      answer: {
        kind: "choice",
        options: ["What is pleasant to the senses", "What is absolutely great, great beyond all comparison", "What is useful", "What is perfectly proportioned"],
        correct: [1],
      },
    },
    {
      key: "where",
      rung: "check",
      prompt: <p>Where, strictly speaking, is the sublime to be found, according to Kant?</p>,
      answer: {
        kind: "choice",
        options: ["In large natural objects", "In works of art", "In the mind of the one who judges", "In God alone"],
        correct: [2],
      },
    },
    {
      key: "storm",
      rung: "apply",
      prompt: <p>A storm at sea, watched from the safety of the shore, is an example of which kind of sublime?</p>,
      answer: { kind: "choice", options: ["Mathematical", "Dynamical", "Neither, it is beautiful", "Neither, it is agreeable"], correct: [1] },
    },
    {
      key: "safe",
      rung: "apply",
      prompt: <p>Why must the observer be safe for the dynamical sublime?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because danger makes the object smaller.",
          "Because real fear leaves no room for the free judgement in which we discover our power of resistance.",
          "Because Kant was cautious.",
          "Because safety is itself sublime.",
        ],
        correct: [1],
      },
    },
    {
      key: "pyramid",
      rung: "apply",
      prompt: (
        <p>
          Kant quotes Savary: to feel the full effect of the pyramids, one must neither go too near nor stay too far away.
          Why not too near?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Because the stones are ugly close up.",
          "Because apprehension takes so long that the first parts fade before the last are reached, so comprehension fails.",
          "Because it is dangerous.",
          "Because the guides forbid it.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the sublime just a pleasant kind of fear? Argue briefly, with Kant in view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Kant's view that the pleasure comes from discovering reason's superiority over nature, not from fear itself.",
          "Gives a reason for or against, such as Burke's physiological account, or the role of safety.",
          "Reaches a view. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "art",
      rung: "stretch",
      prompt: <p>Kant mostly finds the sublime in raw nature. Can a work of art or a human achievement be sublime? Discuss.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Kant's preference for raw nature, where no human purpose limits the magnitude.",
          "Considers a case such as a cathedral, a symphony, or a scientific picture of the universe.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the sublime differs from the beautiful, what the mathematical and dynamical sublime are, why the observer must be safe, and why Kant says the sublime is really in the mind.",

  glimpse: (
    <p>
      The final lesson of the course turns to the second half of the third Critique, on purpose in living nature. The
      sublime fed directly into German idealism and Romanticism, and the Aesthetics course asks how aesthetic and moral
      value are related.
    </p>
  ),
};
