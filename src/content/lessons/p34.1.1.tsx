import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { HermeneuticCircleViz } from "@/components/viz/HermeneuticCircleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p34.1.1",
  minutes: 90,
  links: {
    revisits: ["p19.2.2", "p19.2.4", "p9.1.2"],
    foreshadows: ["p34.1.2", "p34.2.2", "p34.3.3"],
  },

  puzzle: (
    <>
      <p>
        You open an old letter and read its first sentence. Already you have a guess about what kind of letter it is, and
        that guess shapes how you read the next sentence. But the guess came from you, not from the letter. If all
        understanding begins with such expectations, can we ever understand a text, a person or a past age as it really
        is, or only as we already expected it to be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Read the passage line by line, and see how the sense of the whole and of one word change together.</p>
      <HermeneuticCircleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the hermeneutic circle">
        <p>
          Hermeneutics, the theory of interpretation, has long noted a <strong>circle</strong>: we understand the parts of a
          text through the whole, and the whole through its parts. Friedrich Schleiermacher and Wilhelm Dilthey treated this
          as a method for reconstructing an author&rsquo;s meaning. Following Heidegger, Hans-Georg Gadamer, in{" "}
          <em>Truth and Method</em> (1960), treats it as a feature of human existence: we are always already within a
          tradition and a language that give us a <strong>fore-understanding</strong> of whatever we meet.
        </p>
      </Definition>

      <Definition title="prejudice and tradition">
        <p>
          Gadamer deliberately rehabilitates <strong>prejudice</strong>, in the literal sense of a pre-judgement. The
          Enlightenment, he argues, had a prejudice against prejudice: the ideal of a reader free of all assumptions is
          incoherent. The task is not to eliminate our fore-projections but to put them at risk, letting the text pull us up
          when it does not fit. Legitimate prejudices are those that survive this testing. Temporal distance helps, by
          filtering out the prejudices that belong only to a passing moment.
        </p>
      </Definition>

      <Example title="the fusion of horizons">
        <p>
          A <strong>horizon</strong> is the range of vision from a particular standpoint. Understanding a text from another
          age is not leaving our horizon to enter the author&rsquo;s, which would be impossible, nor imposing ours on it. It
          is a <strong>fusion of horizons</strong>, in which both are transformed: we come to see the question to which the
          text was an answer, and our own questions change. Understanding is thus a kind of conversation, and it always
          involves application to our situation, as when a judge applies an old law to a new case.
        </p>
      </Example>

      <Remark title="truth beyond method">
        <p>
          Gadamer&rsquo;s title is ironic: the truth of art, history and tradition is not reached by the methods of the
          natural sciences. Habermas objected that tradition can itself be distorted by power, and that a critique of
          ideology needs a standpoint beyond it; Gadamer replied that critique too stands within a tradition. Emilio
          Betti and E. D. Hirsch argued that without the author&rsquo;s intention as a standard, interpretation loses any
          criterion of correctness.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "circle",
      rung: "check",
      prompt: <p>What is the hermeneutic circle?</p>,
      answer: { kind: "choice", options: ["We understand the parts through the whole and the whole through the parts", "A logical fallacy to be avoided", "A circle of readers who agree", "The cycle of history"], correct: [0] },
    },
    {
      key: "prej",
      rung: "check",
      prompt: <p>What is Gadamer&rsquo;s attitude to prejudice?</p>,
      answer: { kind: "choice", options: ["Pre-judgements are a condition of understanding, to be tested rather than eliminated", "All prejudice must be removed before reading", "Prejudice is always correct", "Prejudice is irrelevant to interpretation"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the reader open to the text, how many revisions have been made after all five lines?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "fusion",
      rung: "apply",
      prompt: <p>What is the fusion of horizons?</p>,
      answer: { kind: "choice", options: ["Understanding in which the interpreter’s and the text’s horizons are both transformed", "Abandoning one’s own standpoint entirely", "Imposing one’s own views on the text", "Agreeing with the author on everything"], correct: [0] },
    },
    {
      key: "habermas",
      rung: "apply",
      prompt: <p>What was Habermas&rsquo;s objection to Gadamer?</p>,
      answer: { kind: "choice", options: ["Tradition can be distorted by power, so critique needs a standpoint beyond it", "Gadamer ignored tradition", "Interpretation is impossible", "Texts have no meaning"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Can we understand a text from the past without the prejudices of our own time? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Gadamer’s view of fore-understanding and the fusion of horizons.",
          "Considers an objection, such as the need for a standard of correct interpretation.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should the author&rsquo;s intention settle what a text means?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with Gadamer or with Hirsch’s defence of intention.",
          "Considers an example, such as a law or a poem applied in a new situation.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Gadamer trusts tradition and conversation. Another hermeneutic philosopher asks how to read texts that may be hiding
        something, and how a life itself can be understood as a story.
      </p>
      <p>Next, Ricoeur.</p>
    </>
  ),
};
