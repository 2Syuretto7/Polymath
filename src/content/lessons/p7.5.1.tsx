import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MissingShadeViz } from "@/components/viz/MissingShadeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.5.1",
  minutes: 75,
  links: {
    revisits: ["p7.3.1", "p7.4.1", "p7.3.2"],
    foreshadows: ["p7.5.2", "p7.5.4", "p8.1.2"],
  },

  puzzle: (
    <>
      <p>
        David Hume published <em>A Treatise of Human Nature</em> at twenty-seven, and it &ldquo;fell dead-born from the
        press&rdquo;. Its opening idea is simple. You can imagine a golden mountain, but only because you have seen gold and
        mountains. Someone born blind has no idea of scarlet. Every thought we can have, Hume claims, is built from copies of
        experiences. If that is right, it gives us a test for any philosophical word: from what experience was the idea
        copied? And what if there is none?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here is a series of shades with one gap, a shade imagined never to have been seen. Try to supply it from imagination.
      </p>
      <MissingShadeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="impressions and ideas">
        <p>
          Hume divides all perceptions of the mind into two kinds. <strong>Impressions</strong> are our lively perceptions
          when we see, hear, feel, love, hate or will; they include sensations and passions. <strong>Ideas</strong> are the
          fainter copies of these, used in thinking and memory. The difference is one of force and vivacity: the feeling of
          a burn compared with the memory of it.
        </p>
      </Definition>

      <Definition title="the copy principle">
        <p>
          The <strong>copy principle</strong> says that all our simple ideas, in their first appearance, are derived from
          simple impressions, which they exactly represent. Complex ideas, such as a golden mountain or a unicorn, are put
          together by the imagination from simple ones. Hume&rsquo;s evidence: analyse any idea, even that of God, and you
          find it made of simple ideas copied from impressions; and anyone lacking a sense lacks the corresponding ideas.
        </p>
      </Definition>

      <Example title="a test for meaning">
        <p>
          The principle becomes a tool. When we suspect that a philosophical term is used without any meaning, Hume says, we
          need only ask from what impression that supposed idea is derived. If none can be found, the suspicion is confirmed.
          He will turn this test on substance, on the self and, most famously, on the idea of necessary connection between
          cause and effect.
        </p>
      </Example>

      <Remark title="the missing shade, and association">
        <p>
          Hume himself gave a counterexample. Someone who has seen every shade of blue but one, laid out in order, would notice
          the gap and could form the idea of the missing shade without any impression of it. Hume called this a contradictory
          phenomenon, too singular to make him abandon the general maxim. Critics think it shows the copy principle is a
          tendency, not a law. Hume adds three principles of <strong>association</strong> by which ideas follow one another:
          resemblance, contiguity in time or place, and cause and effect. They are, he said, the cement of the universe, at
          least of the mental one.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "diff",
      rung: "check",
      prompt: <p>How does Hume distinguish impressions from ideas?</p>,
      answer: {
        kind: "choice",
        options: [
          "Impressions are innate; ideas are learnt.",
          "By force and vivacity: impressions are lively, ideas are their fainter copies.",
          "Impressions are in the body; ideas are in the soul.",
          "There is no difference.",
        ],
        correct: [1],
      },
    },
    {
      key: "assoc",
      rung: "check",
      prompt: <p>Which are Hume&rsquo;s principles of association of ideas? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Resemblance", "Contiguity in time or place", "Cause and effect", "Logical entailment", "Innate ideas"],
        correct: [0, 1, 2],
      },
    },
    {
      key: "golden",
      rung: "apply",
      prompt: <p>How does the copy principle explain our idea of a golden mountain?</p>,
      answer: {
        kind: "choice",
        options: [
          "We once saw one.",
          "It is a complex idea, put together by imagination from the ideas of gold and mountain, each copied from impressions.",
          "It is innate.",
          "It is not a real idea.",
        ],
        correct: [1],
      },
    },
    {
      key: "test",
      rung: "apply",
      prompt: <p>How does Hume use the copy principle as a test?</p>,
      answer: {
        kind: "choice",
        options: [
          "To prove God exists.",
          "To ask, of a doubtful term, from what impression its idea is derived; if none, the term is empty.",
          "To measure the vivacity of feelings.",
          "To classify the sciences.",
        ],
        correct: [1],
      },
    },
    {
      key: "shade",
      rung: "apply",
      prompt: <p>Why is the missing shade of blue a problem for Hume?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because blue is a secondary quality.",
          "Because it seems to be a simple idea formed without a matching impression, against the copy principle.",
          "Because nobody can see blue.",
          "Because shades cannot be ordered.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Does the missing shade of blue refute the copy principle? Give one reason it does and one reason it does not, and
          say which is stronger.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a reason it does: a single genuine counterexample shows the principle is not universal.",
          "Gives a reason it does not: the shade is built from neighbouring impressions, or the case is marginal, or the principle is meant as a general tendency.",
          "States which is stronger. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "concepts",
      rung: "stretch",
      prompt: (
        <p>
          Can the copy principle account for mathematical ideas such as infinity, or the number zero? Argue briefly.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Considers how such ideas might be built from impressions, such as by repeating a step or noticing absence.",
          "Considers the worry that some concepts go beyond any experience, as rationalists and Kant argued.",
          "Reaches a reasoned view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Hume's distinction between impressions and ideas, the copy principle and his evidence for it, how he uses it as a test for meaning, and the problem of the missing shade of blue.",

  glimpse: (
    <p>
      The next lesson applies the copy principle to causation and asks from what impression the idea of necessary connection
      could be copied. Later lessons apply it to the self, and Kant will argue that some of our concepts cannot be copied
      from experience at all.
    </p>
  ),
};
