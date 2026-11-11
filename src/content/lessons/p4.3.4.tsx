import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CompresenceViz } from "@/components/viz/CompresenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.3.4",
  minutes: 75,
  links: {
    revisits: ["p4.1.2", "p4.1.3", "p4.2.2"],
    foreshadows: ["p4.4.2", "p11.1.1", "p6.3.2"],
  },

  puzzle: (
    <>
      <p>
        You have never seen a perfectly straight line, a perfectly equal pair of sticks, or a perfectly just person.
        Every drawn line wobbles under a microscope; every fair decision has some flaw. Yet you can say that one line is
        straighter than another, and that a decision falls short of perfect fairness. Falls short of what?
      </p>
      <p>
        Plato&rsquo;s answer is the most famous and most disputed idea in his philosophy: besides the changing things we
        see, there are unchanging Forms, which we grasp only with the mind.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        In the <em>Phaedo</em>, Socrates notes that Simmias is taller than Socrates but shorter than Phaedo. The same
        Simmias is both tall and short. Try it with a stick: change what it is compared with and watch it become large or
        small, without changing at all.
      </p>
      <CompresenceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="what the Forms are">
        <p>
          For a character such as beauty, justice or equality, the <strong>Form</strong> (<em>eidos</em> or{" "}
          <em>idea</em>) is &ldquo;the Beautiful itself&rdquo;, &ldquo;the Equal itself&rdquo;. Across the middle
          dialogues, Plato describes the Forms as:
        </p>
        <ul>
          <li><strong>one over many</strong>: a single Form for the many things that share a name and character;</li>
          <li><strong>unchanging and eternal</strong>: the Beautiful does not come to be, pass away, or vary;</li>
          <li><strong>grasped by thought, not the senses</strong>;</li>
          <li><strong>purely what they are</strong>: the Beautiful is in no way ugly, the Equal in no way unequal;</li>
          <li><strong>causes</strong>: beautiful things are beautiful because they <em>participate in</em> the Beautiful.</li>
        </ul>
        <p>
          The many sensible things that take part in a Form are its <strong>particulars</strong>, which Plato sometimes
          describes as copies or likenesses of it.
        </p>
      </Definition>

      <Example title="the argument from opposites">
        <p>
          A common reconstruction runs as follows. Every beautiful thing we see is also, in some respect or comparison,
          ugly: a beautiful girl is ugly compared with a goddess. Every equal pair of sticks is also unequal in some respect.
          But what beauty is cannot itself be ugly, or it would be no account of beauty. So beauty is not any of the things
          we see, or any visible feature they share. It is something else, the Form, which is beautiful in no way ugly.
        </p>
        <p>
          In book 7 of the <em>Republic</em>, Socrates notes that a finger is never presented to the senses as also a
          non-finger, so sight is content with it. But the same finger appears both large and small, and this
          contradiction is what &ldquo;summons&rdquo; thought to ask what largeness really is.
        </p>
      </Example>

      <Example title="the argument from knowledge">
        <p>
          In book 5 of the <em>Republic</em>, Socrates argues that knowledge and opinion are different powers, so they must
          have different objects. Knowledge is of what fully is, and cannot be wrong. Opinion is of what &ldquo;both is
          and is not&rdquo;, things that are beautiful and also ugly, just and also unjust. The lover of sights and sounds
          who recognises many beautiful things but denies there is a Beautiful itself has only opinion, as in a dream.
        </p>
      </Example>

      <Remark title="Aristotle's account of the origin">
        <p>
          Aristotle, who studied with Plato for twenty years, explains in the <em>Metaphysics</em> that Plato accepted from
          the Heracliteans that sensible things are always in flux, so that there can be no knowledge of them; and from
          Socrates the search for universal definitions in ethics. Combining these, Plato concluded that the objects of
          definition must be something other than sensible things, and called them Forms. Socrates, Aristotle adds, had not
          separated the universals; Plato did.
        </p>
      </Remark>

      <Remark title="questions the theory raises">
        <ul>
          <li>
            <strong>Which Forms are there?</strong> In the <em>Parmenides</em>, the young Socrates is sure there are Forms
            of the Just and the Beautiful, unsure about Man, Fire or Water, and embarrassed at the idea of Forms of hair,
            mud and dirt.
          </li>
          <li>
            <strong>What is participation?</strong> Does a beautiful thing contain a part of the Beautiful, or resemble it?
            Each answer leads to trouble, as the <em>Parmenides</em> shows.
          </li>
          <li>
            <strong>Self-predication.</strong> Plato often speaks as if the Beautiful is itself beautiful, indeed the most
            beautiful thing there is. But is the Large large? Is the Form of Man a man? This is the seed of the famous
            third man argument.
          </li>
        </ul>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "one",
      rung: "check",
      prompt: <p>What does the &ldquo;one over many&rdquo; feature of the Forms say?</p>,
      answer: {
        kind: "choice",
        options: [
          "There is only one Form in total.",
          "There is a single Form for the many things that share a name and character.",
          "Each particular has many Forms.",
          "The Forms are many particulars.",
        ],
        correct: [1],
      },
    },
    {
      key: "features",
      rung: "check",
      prompt: <p>Which of these does Plato say of the Forms? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["They are unchanging.", "They are perceived by the senses.", "They are grasped by thought.", "They come to be and pass away."],
        correct: [0, 2],
      },
    },
    {
      key: "simmias",
      rung: "apply",
      prompt: <p>Simmias is taller than Socrates and shorter than Phaedo. What does this case illustrate?</p>,
      answer: {
        kind: "choice",
        options: [
          "That Simmias changes height.",
          "That one sensible thing can have opposite characters at once, in relation to different things.",
          "That there is no such thing as height.",
          "That Phaedo is a Form.",
        ],
        correct: [1],
      },
    },
    {
      key: "finger",
      rung: "apply",
      prompt: (
        <p>
          On the argument in book 7 of the <em>Republic</em>, which of these does <em>not</em> summon thought to look for
          what it really is?
        </p>
      ),
      answer: { kind: "choice", options: ["largeness", "being a finger", "equality", "beauty"], correct: [1] },
    },
    {
      key: "aristotle",
      rung: "apply",
      prompt: <p>According to Aristotle, which two influences led Plato to the Forms?</p>,
      answer: {
        kind: "choice",
        options: [
          "Pythagorean music and Egyptian religion.",
          "The Heraclitean view that sensible things are in flux, and Socrates' search for definitions.",
          "The atomists and the sophists.",
          "Homer and Hesiod.",
        ],
        correct: [1],
      },
    },
    {
      key: "opposites",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct the argument from opposites for the existence of the Beautiful itself in numbered steps. Does it show
          that the Form is separate from beautiful things, or only that beauty is not identical to any one of them?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives premises such as: every sensible beautiful thing is also ugly in some respect; what beauty is cannot be ugly in any respect.",
          "Concludes that beauty is not identical to any sensible beautiful thing, or to a sensible feature they share.",
          "Discusses whether separation follows, for instance noting that beauty might be a universal present in things rather than a separate entity. Any reasoned answer earns full credit.",
        ],
      },
    },
    {
      key: "selfpred",
      rung: "stretch",
      prompt: (
        <p>
          &ldquo;The Beautiful itself is beautiful&rdquo; sounds natural; &ldquo;the Large itself is large&rdquo; and
          &ldquo;the Form of Man is a man&rdquo; sound strange. Suggest a way of understanding these sentences that makes
          them true without making the Form one more beautiful, large or human thing.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains why literal self-predication causes trouble, for example by making the Form another member of its own group.",
          "Proposes an alternative reading, such as 'being beautiful is what the Beautiful is', a statement about the nature of the Form rather than a feature it has, or a comparison like 'justice is just' meaning that justice is the standard.",
          "Assesses the proposal. Any thoughtful suggestion earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Plato's Forms are, the argument from opposites and the argument from knowledge for believing in them, and one question the theory leaves open.",

  glimpse: (
    <p>
      The next lesson meets the Form of the Good through three images in the <em>Republic</em>. In the{" "}
      <em>Parmenides</em> Plato attacks his own theory. Metaphysics asks whether properties exist at all, and Medieval
      Philosophy turns the question into the problem of universals.
    </p>
  ),
};
