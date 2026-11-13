import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RecognitionViz } from "@/components/viz/RecognitionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p9.1.3",
  minutes: 90,
  links: {
    revisits: ["p9.1.2", "p14.1.1", "p8.5.2"],
    foreshadows: ["p9.2.2", "p33.3.1", "p19.3.2"],
  },

  puzzle: (
    <>
      <p>
        Why does it matter so much to us what others think of us? Hegel&rsquo;s answer is that we cannot be fully certain of
        ourselves as free, self-conscious beings unless another self-conscious being acknowledges us as one. A few pages of
        the <em>Phenomenology</em> turn this thought into a drama of struggle, domination and labour, which later inspired
        Marx, Sartre, Beauvoir and Fanon. How can the master end up dependent, and the slave free?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Switch recognition on and off between two self-consciousnesses, and read what situation results.
      </p>
      <RecognitionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="recognition">
        <p>
          Self-consciousness first seeks to confirm itself through desire, by consuming objects, but each satisfaction needs
          a new object. Only another self-consciousness can confirm it, by freely acknowledging it. <strong>Recognition</strong>{" "}
          (<em>Anerkennung</em>) is this acknowledgement of one self by another as a self. Hegel&rsquo;s claim is that
          self-consciousness exists only in being recognised.
        </p>
      </Definition>

      <Definition title="the struggle and its outcome">
        <p>
          Each self-consciousness wants recognition, and to show that it is not tied to mere life, each risks its life in a
          struggle. If one dies, recognition is lost. So one yields, preferring life: it becomes the{" "}
          <strong>bondsman</strong>, and the victor the <strong>lord</strong>. The lord enjoys things through the bondsman
          and is recognised in return.
        </p>
      </Definition>

      <Example title="the reversal">
        <p>
          The lord&rsquo;s recognition is hollow, since it comes from someone the lord does not recognise in return. The lord
          depends on the bondsman for everything. The bondsman, meanwhile, has felt the fear of death, which shakes loose every
          fixed attachment, and works on things, giving them form. In the products of labour the bondsman sees their own mind
          made objective. The truth of the independent consciousness, Hegel says, is the servile consciousness.
        </p>
      </Example>

      <Remark title="readings">
        <p>
          The passage leads on to Stoicism, scepticism and the &ldquo;unhappy consciousness&rdquo;, and Hegel&rsquo;s goal is
          mutual recognition, realised in the institutions of ethical life. Alexandre Koj&egrave;ve&rsquo;s lectures in 1930s
          Paris made the dialectic of lord and bondsman a key to all history, shaping Sartre on the look of the other,
          Beauvoir on woman as the Other, and Fanon on colonial domination. Contemporary theories of recognition, in Honneth
          and Taylor, return to it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "need",
      rung: "check",
      prompt: <p>According to Hegel, what can satisfy self-consciousness?</p>,
      answer: {
        kind: "choice",
        options: ["Consuming objects", "Recognition by another self-consciousness", "Solitary reflection", "Wealth"],
        correct: [1],
      },
    },
    {
      key: "risk",
      rung: "check",
      prompt: <p>Why does each self-consciousness risk its life in the struggle?</p>,
      answer: {
        kind: "choice",
        options: [
          "To win food.",
          "To show that it is not bound to mere life, and so prove itself free.",
          "Because it hates the other.",
          "Because God commands it.",
        ],
        correct: [1],
      },
    },
    {
      key: "hollow",
      rung: "apply",
      prompt: <p>Why is the lord&rsquo;s recognition unsatisfying?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the bondsman lies.",
          "Because it comes from someone the lord does not recognise in turn, whom the lord treats as a thing.",
          "Because the lord is lazy.",
          "Because recognition is impossible.",
        ],
        correct: [1],
      },
    },
    {
      key: "labour",
      rung: "apply",
      prompt: <p>What does labour give the bondsman?</p>,
      answer: {
        kind: "choice",
        options: [
          "Nothing but exhaustion.",
          "Wealth.",
          "A way of shaping the world in which they see their own mind made objective.",
          "The lord's recognition.",
        ],
        correct: [2],
      },
    },
    {
      key: "who",
      rung: "apply",
      prompt: <p>Whose Paris lectures made the lord and bondsman passage central to twentieth-century French thought?</p>,
      answer: { kind: "choice", options: ["Bergson", "Kojève", "Descartes", "Comte"], correct: [1] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Do we really need recognition from others to be self-conscious? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Hegel's claim that self-certainty requires confirmation from another self.",
          "Considers an objection, such as a Cartesian self known from within, or a reply from social development.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "hobbes",
      rung: "stretch",
      prompt: <p>Compare Hegel&rsquo;s struggle for recognition with Hobbes&rsquo;s state of nature.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that for Hobbes conflict arises over goods, security and glory, and fear of death leads to a sovereign.",
          "Notes that for Hegel the struggle is for recognition itself, and the outcome develops through labour towards mutual recognition.",
          "Reaches a view on which picture is more illuminating. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why Hegel thinks self-consciousness needs recognition, how the life-and-death struggle produces lord and bondsman, why the lord's position is hollow while the bondsman gains through fear and labour, and how the passage influenced later thought.",

  glimpse: (
    <p>
      The next lesson turns to Hegel&rsquo;s dialectic and his logic. Marx takes up labour and alienation later in the
      course, contemporary political philosophy develops theories of recognition, and the existentialists make the look of
      the other central to freedom.
    </p>
  ),
};
