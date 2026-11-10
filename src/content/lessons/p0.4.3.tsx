import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.4.3",
  minutes: 60,
  links: {
    revisits: ["p0.3.2"],
    foreshadows: ["p1.4.1", "p2.4.3", "p3.1.3", "p18.5.2"],
  },

  puzzle: (
    <>
      <p>Consider three puzzles.</p>
      <ol>
        <li>Twins are &ldquo;the same&rdquo;, yet they are two people. How can two things be the same?</li>
        <li>&ldquo;Cats&rdquo; has four letters, yet cats have no letters at all. So is the word made of letters or of fur?</li>
        <li>
          A brilliant swimming coach cannot swim. Does the coach know how to swim, or not?
        </li>
      </ol>
      <p>Each sounds like a contradiction. Find what each depends on before reading on.</p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each puzzle uses a word or phrase in two ways at once. Twins are the <em>same</em> in their properties, but not the{" "}
        <em>same</em> object. &ldquo;Cats&rdquo; in quotation marks is a word being talked about; cats without them are
        animals. The coach <em>knows that</em> swimming involves certain strokes, without <em>knowing how</em> to swim.
      </p>
      <p>
        Once the two senses are named and separated, the contradiction disappears, and often a real question remains
        underneath, now precise enough to answer. Drawing a <strong>distinction</strong> is one of the most productive moves
        in philosophy: much of the progress in the subject is a list of distinctions someone first noticed.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="drawing a distinction">
        <p>
          To <strong>draw a distinction</strong> is to show that a term, or a question, covers two different things, give
          each its own name, and show that a claim or argument trades on running them together.
        </p>
      </Definition>

      <p>Some distinctions every philosopher uses:</p>
      <ul>
        <li>
          <strong>Numerical and qualitative identity.</strong> Two things are qualitatively identical if they share their
          properties, like two copies of a book. Something is numerically identical with something only if they are one and
          the same thing: the Morning Star and the Evening Star are both Venus.
        </li>
        <li>
          <strong>Use and mention.</strong> A word is used to talk about the world (cats chase mice) and mentioned when we
          talk about the word itself (&ldquo;cats&rdquo; has four letters). Quotation marks mark a mention.
        </li>
        <li>
          <strong>Type and token.</strong> In &ldquo;the cat sat on the mat&rdquo; there are six word tokens but only five
          word types, since &ldquo;the&rdquo; occurs twice. The distinction is due to the American philosopher Charles
          Sanders Peirce.
        </li>
        <li>
          <strong>Knowing that and knowing how.</strong> Knowing that something is so is knowledge of a fact; knowing how is
          a skill. Gilbert Ryle argued in <cite>The Concept of Mind</cite> (1949) that the second cannot be reduced to the
          first.
        </li>
        <li>
          <strong>Necessary and sufficient conditions.</strong> Being a mammal is necessary for being a dog, but not
          sufficient. Being a dog is sufficient for being a mammal, but not necessary.
        </li>
      </ul>

      <Example title="the ship of Theseus">
        <p>
          The ship of Theseus has its planks replaced one by one until none of the originals remain. Is it the same ship?
          With the distinction in hand, there are two questions. Qualitatively, the new ship may be just like the old. The
          hard question is numerical: is it one and the same ship? Now add a twist from Thomas Hobbes: someone collects the
          discarded planks and rebuilds them into a ship. Two ships now compete to be numerically the same as the original,
          and they cannot both be, since they are not the same as each other. The distinction does not answer the puzzle,
          but it shows exactly where the difficulty lies.
        </p>
      </Example>

      <Remark title="a distinction must earn its place">
        <p>
          A distinction is not a magic word. Drawn to escape an objection, it must be real: the two senses should come apart
          in cases that have nothing to do with the argument at hand. If you cannot say what difference the distinction makes
          anywhere else, you may be inventing a difference to save a view. And a distinction only helps if the argument
          really trades on the conflation; if it works in both senses, the distinction changes nothing.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "identity",
      rung: "check",
      prompt: <p>&ldquo;Clark Kent is Superman.&rdquo; Which kind of identity is claimed?</p>,
      answer: { kind: "choice", options: ["qualitative identity", "numerical identity", "type identity", "neither"], correct: [1] },
    },
    {
      key: "tokens",
      rung: "check",
      prompt: <p>How many word <strong>types</strong> are there in &ldquo;a rose is a rose is a rose&rdquo;?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "use-mention",
      rung: "apply",
      prompt: <p>Select every sentence in which a word is <strong>mentioned</strong> rather than used.</p>,
      answer: {
        kind: "choice",
        options: [
          "Delhi is the capital of India.",
          "\"Delhi\" has five letters.",
          "\"Rupee\" comes from a Sanskrit word.",
          "The rupee fell against the dollar.",
        ],
        correct: [1, 2],
      },
    },
    {
      key: "necessary",
      rung: "apply",
      prompt: <p>Having fuel is ____ for a petrol car to run.</p>,
      answer: {
        kind: "choice",
        options: ["necessary but not sufficient", "sufficient but not necessary", "both necessary and sufficient", "neither"],
        correct: [0],
      },
    },
    {
      key: "coach",
      rung: "apply",
      prompt: <p>Which distinction resolves the swimming coach puzzle?</p>,
      answer: {
        kind: "choice",
        options: ["type and token", "use and mention", "knowing that and knowing how", "numerical and qualitative identity"],
        correct: [2],
      },
    },
    {
      key: "disarm",
      rung: "prove",
      prompt: (
        <p>
          &ldquo;Nobody is perfect. I am a nobody. So I am perfect.&rdquo; Identify the distinction the argument runs together,
          name both senses, and show that on each reading one premise is false or the argument is invalid.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies the two senses of 'nobody': no person at all, and an unimportant person.",
          "Shows that on the first reading 'I am a nobody' is false.",
          "Shows that on the second reading 'Nobody is perfect' does not mean that unimportant people are perfect, so the conclusion does not follow.",
        ],
      },
    },
    {
      key: "theseus",
      rung: "stretch",
      prompt: (
        <p>
          In Hobbes&rsquo;s version of the ship of Theseus, which ship do you think is numerically the same as the
          original, the repaired one or the rebuilt one? Defend your answer, and say which principle about identity it
          commits you to.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Chooses one ship, or argues that neither is, with reasons.",
          "States a principle, such as continuity of form and function or sameness of material.",
          "Considers a case that tests the principle.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the distinction between numerical and qualitative identity helps with the ship of Theseus, and why it does not settle the puzzle on its own.",

  glimpse: (
    <p>
      Next, reductio ad absurdum: refuting a claim by deriving something absurd from it. Numerical identity returns with
      personal identity in Introduction to Philosophy and with the identity rules of Logic I. Critical Reasoning treats
      definitions and ambiguity in detail, and Ryle&rsquo;s distinction returns with his philosophy in the history of
      analytic philosophy.
    </p>
  ),
};
