import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CopernicanViz } from "@/components/viz/CopernicanViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p8.1.1",
  minutes: 80,
  links: {
    revisits: ["p7.5.2", "p7.5.3", "p7.2.5"],
    foreshadows: ["p8.1.2", "p8.1.3", "p10.5.4"],
  },

  puzzle: (
    <>
      <p>
        Kant said that Hume interrupted his dogmatic slumber. For years he had taught the metaphysics of Leibniz and Wolff,
        which claimed to prove by reason alone that the soul is simple, that the world has a first cause and that God exists.
        Hume&rsquo;s attack on causation suggested that reason alone can prove nothing about the world at all. Mathematics and
        physics plainly make progress, while metaphysics has been a battlefield of endless quarrels for two thousand years.
        Why the difference, and is metaphysics possible at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Compare the two hypotheses about how knowledge relates to its objects, and see how each answers the same three
        questions.
      </p>
      <CopernicanViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the critical question">
        <p>
          In the <em>Critique of Pure Reason</em>, 1781, Kant proposes to examine reason itself before trusting it: to ask what
          it can know without experience, and where its limits lie. A <strong>critique</strong> in his sense is not a
          complaint but an assessment of a faculty&rsquo;s powers and bounds. Only after this can we tell which metaphysical
          questions have answers.
        </p>
      </Definition>

      <Definition title="the Copernican revolution">
        <p>
          Copernicus, failing to explain the heavens on the assumption that the stars revolve around the observer, tried
          letting the observer move instead. Kant makes a similar move. Everyone had assumed that our knowledge must conform to
          objects; then a priori knowledge of objects is a mystery. Suppose instead that objects, as we experience them, must
          conform to the conditions of our knowledge. Then we can know a priori whatever those conditions impose.
        </p>
      </Definition>

      <Example title="spectacles that cannot be removed">
        <p>
          A common image: if everyone wore blue spectacles that could never come off, we could know in advance that everything
          we would ever see is tinted blue, without any study of the things themselves. The image is imperfect, since Kant
          thinks the mind contributes form, such as spatial order and causal connection, not a colour. But it captures the
          central idea: necessity in our knowledge comes from us, and holds of things only as they appear to us.
        </p>
      </Example>

      <Remark title="between rationalism and empiricism">
        <p>
          Against the empiricists, Kant holds that experience has a structure we can know a priori, so Hume&rsquo;s scepticism
          about causation is answered for the world we experience. Against the rationalists, he holds that this knowledge
          reaches only the world of possible experience. God, freedom and the immortal soul lie beyond it, so the old
          metaphysics, which claimed to prove them, must be abandoned, though Kant thinks they return as matters of practical
          faith.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "woke",
      rung: "check",
      prompt: <p>Whose work did Kant say woke him from his dogmatic slumber?</p>,
      answer: { kind: "choice", options: ["Descartes", "Leibniz", "Hume", "Newton"], correct: [2] },
    },
    {
      key: "critique",
      rung: "check",
      prompt: <p>What does Kant mean by a critique of pure reason?</p>,
      answer: {
        kind: "choice",
        options: [
          "A rejection of all reasoning.",
          "An examination of what reason can know without experience, and of its limits.",
          "A history of philosophy.",
          "A defence of the metaphysics of Leibniz in every detail.",
        ],
        correct: [1],
      },
    },
    {
      key: "copernican",
      rung: "apply",
      prompt: <p>What is Kant&rsquo;s Copernican hypothesis?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the earth goes round the sun.",
          "That objects, as we experience them, conform to the conditions of our knowledge.",
          "That knowledge conforms passively to objects.",
          "That only God knows objects as they are.",
        ],
        correct: [1],
      },
    },
    {
      key: "why",
      rung: "apply",
      prompt: <p>Why does the Copernican hypothesis explain a priori knowledge of objects?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because experience teaches us everything in advance.",
          "Because what the mind itself contributes to experience can be known independently of any particular experience.",
          "Because God guarantees our ideas.",
          "Because objects are made of ideas.",
        ],
        correct: [1],
      },
    },
    {
      key: "limit",
      rung: "apply",
      prompt: <p>Which of these lies beyond the reach of theoretical knowledge, on Kant&rsquo;s view?</p>,
      answer: {
        kind: "choice",
        options: [
          "That every event has a cause.",
          "That the soul is immortal.",
          "That space has three dimensions.",
          "That 7 + 5 = 12.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          In a few sentences, explain how Kant&rsquo;s Copernican revolution answers Hume on causation, and what it costs.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Says Hume found no ground for the necessity of causal connection in experience.",
          "Says for Kant causation is a condition the mind imposes on experience, so it holds necessarily of all objects of experience.",
          "Notes the cost: it holds only of things as they appear, not of things in themselves. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "fair",
      rung: "stretch",
      prompt: (
        <p>
          Is the comparison with Copernicus apt? Copernicus moved the observer, and Kant puts the observer at the centre.
          Give your view.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes the shared move: explaining appearances by the observer's contribution rather than the object's alone.",
          "Notes the tension: Copernicus decentred us, while Kant makes the knowing subject central.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why Kant thought metaphysics needed a critique, what his Copernican revolution is, and how it explains a priori knowledge while limiting it to the world of experience.",

  glimpse: (
    <p>
      The next lesson asks the question Kant puts at the centre of the Critique: how are synthetic a priori judgements
      possible? After that, transcendental idealism separates things as they appear from things in themselves, and the
      Philosophy of Mind course returns to the idea that the mind structures its own experience.
    </p>
  ),
};
