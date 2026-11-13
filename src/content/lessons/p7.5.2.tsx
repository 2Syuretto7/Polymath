import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BilliardViz } from "@/components/viz/BilliardViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.5.2",
  minutes: 85,
  links: {
    revisits: ["p7.5.1", "p6.2.3", "p4.5.4"],
    foreshadows: ["p7.5.3", "p11.4.1", "p11.4.2"],
  },

  puzzle: (
    <>
      <p>
        One billiard ball rolls into another, and the second moves off. We say the first caused the second to move, and we
        mean more than that one event followed the other: we mean it had to. Adam, Hume says, newly created with perfect
        reasoning, could not have inferred from the sight of water that it would drown him, or from the light and warmth of
        fire that it would burn. Where, then, does our idea of that must come from? Look as closely as you like at the
        collision: can you see the necessity?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Run the collision through, then imagine seeing it again and again. Note what you observe in each case and what
        changes with repetition.
      </p>
      <BilliardViz />
    </>
  ),

  theory: (
    <>
      <Definition title="relations of ideas and matters of fact">
        <p>
          Hume&rsquo;s fork divides all objects of reasoning into two kinds. <strong>Relations of ideas</strong>, as in
          geometry and arithmetic, are known by thought alone, and their denial is a contradiction.{" "}
          <strong>Matters of fact</strong> can be denied without contradiction: that the sun will not rise tomorrow is as
          intelligible as that it will. All reasoning about matters of fact beyond present experience rests on cause and
          effect.
        </p>
      </Definition>

      <Definition title="what we observe">
        <p>
          In any single case of causation we observe <strong>contiguity</strong>, that cause and effect are next to each other
          in space and time; <strong>priority</strong>, that the cause comes first; and, over many cases,{" "}
          <strong>constant conjunction</strong>, that like causes are always followed by like effects. But the idea of cause
          contains a further element, <strong>necessary connection</strong>, and no impression of it is found in the objects.
          Nor is it in the mind&rsquo;s power over the body, since we do not know how willing moves our limbs.
        </p>
      </Definition>

      <Example title="where the idea comes from">
        <p>
          Repetition adds nothing new to any of the observed cases. But after many repetitions the mind, on seeing the cause,
          is carried by custom to expect the effect. This felt <strong>determination of the mind</strong> is a new
          impression, an inner one, and the idea of necessary connection is copied from it. We then project it onto the
          objects, as the mind is apt to spread itself on external things.
        </p>
      </Example>

      <Remark title="two definitions, and readings">
        <p>
          Hume gives two definitions of cause. A cause is an object followed by another, where all objects similar to the
          first are followed by objects similar to the second. Or: an object followed by another, whose appearance always
          conveys the thought to that other. The first underlies <strong>regularity theories</strong> of causation; the second
          is psychological. Al-Ghazali had argued long before that we observe only conjunction, not necessity, though he
          concluded that God is the true cause. Interpreters now dispute whether Hume denied real necessity in nature or only
          our knowledge of it, the so-called new Hume debate.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "fork",
      rung: "check",
      prompt: <p>Which of these are matters of fact, in Hume&rsquo;s sense? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["The sun will rise tomorrow.", "Three times five is fifteen.", "Fire burns.", "A triangle has three sides."],
        correct: [0, 2],
      },
    },
    {
      key: "observe",
      rung: "check",
      prompt: <p>Which of these does Hume say we observe in cases of causation? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Contiguity", "Priority of the cause", "Constant conjunction, over many cases", "Necessary connection"],
        correct: [0, 1, 2],
      },
    },
    {
      key: "adam",
      rung: "apply",
      prompt: <p>What is the point of Hume&rsquo;s example of Adam and the water?</p>,
      answer: {
        kind: "choice",
        options: [
          "That Adam was foolish.",
          "That causal knowledge cannot be reached by reason alone, before experience.",
          "That water is dangerous.",
          "That God causes everything.",
        ],
        correct: [1],
      },
    },
    {
      key: "source",
      rung: "apply",
      prompt: <p>From what impression does Hume think the idea of necessary connection is copied?</p>,
      answer: {
        kind: "choice",
        options: [
          "An impression of power in the cause.",
          "The feeling of the mind being carried by custom from the cause to expect the effect.",
          "The impression of touch.",
          "There is no idea of necessary connection.",
        ],
        correct: [1],
      },
    },
    {
      key: "def",
      rung: "apply",
      prompt: <p>Which of Hume&rsquo;s definitions of cause is the basis of regularity theories?</p>,
      answer: {
        kind: "choice",
        options: [
          "An object followed by another, where all objects similar to the first are followed by objects similar to the second.",
          "An object whose appearance conveys the thought to the other.",
          "An object containing a power.",
          "An act of God.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Set out Hume&rsquo;s argument that we have no impression of necessary connection in the objects, and say whether
          you find it convincing.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that in a single case we see only one event following another, touching it.",
          "Notes repetition adds no new feature to the objects, and that we cannot observe the power of the will either.",
          "Gives a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "counter",
      rung: "stretch",
      prompt: (
        <p>
          Some philosophers say we do perceive causation directly, as when we feel a push or see a knife cut bread. How might
          Hume reply?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the objection that some perceptions seem to present causing itself.",
          "Gives a Humean reply, such as that we feel pressure and see sequences but not the necessity, or that the impression is shaped by habit.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Hume's fork between relations of ideas and matters of fact, what we do and do not observe in causation, where Hume thinks the idea of necessary connection comes from, and his two definitions of cause.",

  glimpse: (
    <p>
      The next lesson asks whether, having no insight into necessary connection, we have any reason to expect the future to
      resemble the past: the problem of induction. The Metaphysics course develops Hume&rsquo;s first definition into
      regularity theories, and compares them with counterfactual theories of causation.
    </p>
  ),
};
