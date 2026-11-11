import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["a true statement", "a false statement", "not a statement at all"];
const ITEMS: SortItem[] = [
  {
    text: "Theaetetus sits.",
    cat: "a true statement",
    why: "The Stranger's own example. Theaetetus is sitting as they talk, so it says of him things that are, as they are.",
  },
  {
    text: "Theaetetus flies.",
    cat: "a false statement",
    why: "The Stranger's other example. It is still about Theaetetus, so it is a statement, but it says of him things different from the things that are about him.",
  },
  {
    text: "Walks runs sleeps.",
    cat: "not a statement at all",
    why: "A string of verbs names actions but no one doing them. Nothing is said about anything, so it is neither true nor false.",
  },
  {
    text: "Lion stag horse.",
    cat: "not a statement at all",
    why: "A string of names picks out things but says nothing about them. A statement needs at least one name and one verb woven together.",
  },
  {
    text: "Change is different from rest.",
    cat: "a true statement",
    why: "Change blends with the kind Difference, in relation to rest. 'Change is not rest' says the same thing, and shows how 'is not' can be true without meaning 'is nothing at all'.",
  },
  {
    text: "Change rests.",
    cat: "a false statement",
    why: "Among the greatest kinds, Change and Rest do not blend. The statement joins what does not combine, and so is false, but it is still about something.",
  },
];

export const lesson: LessonContent = {
  id: "p4.4.3",
  minutes: 80,
  links: {
    revisits: ["p4.1.3", "p4.4.2", "p4.2.1"],
    foreshadows: ["p4.5.1", "p11.2.1", "p15.1.2"],
  },

  puzzle: (
    <>
      <p>
        Parmenides warned that you can never think or say what is not: there is nothing there to think about. But a false
        statement says what is not the case. &ldquo;Theaetetus flies&rdquo; is false because Theaetetus does not fly. If
        saying what is not is saying nothing, then a false statement says nothing, and so it cannot be false after all.
        Every statement would be true, or meaningless.
      </p>
      <p>
        This sounds like a trick, yet the sophists used it to argue that no one ever speaks falsely. How can falsehood be
        possible?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The <em>Sophist</em> ends with an account of what a statement is. Sort these strings into true statements, false
        statements, and strings that are not statements at all. Notice what the false ones have in common with the true
        ones.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="What kind of utterance is each one?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the setting and the hunt">
        <p>
          The <em>Sophist</em> continues the conversation of the <em>Theaetetus</em> on the next day. Socrates is present
          but nearly silent; the questions are put by a visitor from Elea, a follower of Parmenides, to Theaetetus. They
          try to define the sophist by <strong>division</strong>: splitting a kind into two and following one branch,
          as a skill of acquiring, then of hunting, then of hunting tame animals, and so on. Several divisions catch the
          sophist from different sides; the last says he is a maker of images, who produces false appearances of wisdom.
        </p>
      </Definition>

      <Example title="the problem of not-being">
        <p>
          To say that the sophist deals in falsehood, they need falsehood to exist, and so need what is not to be in some
          way. The Stranger shows that &ldquo;what is not&rdquo; in the absolute sense cannot even be spoken of
          consistently: to say it is unsayable is to say something of it, and to call it one thing. So he must lay hands on
          &ldquo;father Parmenides&rdquo; and show that what is not somehow is, and what is somehow is not. He calls this a
          kind of parricide.
        </p>
      </Example>

      <Example title="being is no easier">
        <p>
          It turns out that being is just as puzzling. The Stranger describes a battle of gods and giants. The giants,
          materialists, say only what can be touched exists. The gods, friends of the Forms, say true being is unchanging
          and separate. He offers the giants a mark of being, that whatever has the power to act or to be acted on is real,
          and argues against the friends of the Forms that knowing is a kind of acting, so being known is a kind of being
          acted on. Being must include both change and rest.
        </p>
      </Example>

      <Definition title="the greatest kinds">
        <p>
          The Stranger now studies how a few very general kinds combine, as letters do: some blend with each other, some do
          not. He takes five: <strong>Being</strong>, <strong>Change</strong>, <strong>Rest</strong>,{" "}
          <strong>Same</strong> and <strong>Different</strong>. Change and Rest do not blend. Both blend with Being, since
          both are. Each is the same as itself and different from the others. So Change is, and also is not: it is not
          Rest, not the Same, not the Different, and not Being itself.
        </p>
        <p>
          The key step: &ldquo;is not&rdquo; does not mean the opposite of being, but <strong>difference</strong>. The
          not-large is not nothing; it is what is different from the large, such as the equal or the small. What is not,
          in this sense, really is: it is a part of the Different.
        </p>
      </Definition>

      <Remark title="false statement">
        <p>
          A statement weaves together a name and a verb, and so is always about something. &ldquo;Theaetetus flies&rdquo;
          is about Theaetetus, who certainly is. What makes it false is that it says, of him, things different from the
          things that are about him. Falsehood is no longer saying what is not, in the impossible sense, but saying what is
          different from what is. With that, the sophist can be caught: false belief and false appearance are possible,
          and he trades in them.
        </p>
      </Remark>

      <Remark title="why it matters">
        <p>
          The <em>Sophist</em> separates three things that Parmenides ran together: existence, identity and predication.
          It also gives the first analysis of a sentence into subject and predicate. Many modern scholars, starting with
          G. E. L. Owen and J. L. Ackrill, have read it as an early piece of philosophy of language and logic. Aristotle
          builds his own theory of statements on it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "who",
      rung: "check",
      prompt: <p>Who leads the discussion in the <em>Sophist</em>?</p>,
      answer: {
        kind: "choice",
        options: ["Socrates.", "A visitor from Elea.", "Parmenides.", "Protagoras."],
        correct: [1],
      },
    },
    {
      key: "kinds",
      rung: "check",
      prompt: <p>Which of these are among the five greatest kinds? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Being", "Beauty", "Different", "Rest"], correct: [0, 2, 3] },
    },
    {
      key: "notlarge",
      rung: "apply",
      prompt: <p>On the Stranger&rsquo;s account, what does &ldquo;the not-large&rdquo; mean?</p>,
      answer: {
        kind: "choice",
        options: [
          "Nothing at all.",
          "What is different from the large, such as the small or the equal.",
          "The opposite of being.",
          "What is invisible.",
        ],
        correct: [1],
      },
    },
    {
      key: "statement",
      rung: "apply",
      prompt: <p>What does every statement need, according to the Stranger?</p>,
      answer: {
        kind: "choice",
        options: [
          "At least one name and one verb, woven together.",
          "A reference to a Form.",
          "At least three words.",
          "To be true.",
        ],
        correct: [0],
      },
    },
    {
      key: "power",
      rung: "apply",
      prompt: <p>What mark of being does the Stranger offer the materialist giants?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whatever can be touched is real.",
          "Whatever has the power to act or to be acted on is real.",
          "Whatever never changes is real.",
          "Whatever is thought of is real.",
        ],
        correct: [1],
      },
    },
    {
      key: "falsehood",
      rung: "prove",
      prompt: (
        <p>
          Set out the puzzle about false statement in numbered steps, then show which premise the Stranger rejects and
          what he puts in its place.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the puzzle: a false statement says what is not; what is not is nothing; saying nothing is not saying anything; so there are no false statements.",
          "Identifies the rejected premise: that saying what is not means saying what is not at all.",
          "Explains the replacement: a false statement is about something that is, and says of it things different from the things that are about it. A clear account earns full credit.",
        ],
      },
    },
    {
      key: "is",
      rung: "stretch",
      prompt: (
        <p>
          &ldquo;Socrates is.&rdquo; &ldquo;Socrates is Socrates.&rdquo; &ldquo;Socrates is wise.&rdquo; Explain the
          different jobs &ldquo;is&rdquo; does in these sentences. How does separating them help with the puzzles about
          not-being that go back to Parmenides?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes existence, identity and predication.",
          "Shows how a puzzle depends on running them together, for example that 'Change is not Rest' denies identity but not existence.",
          "Connects this to Parmenides or to the Sophist's account of false statement. Any reasoned discussion earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the puzzle about how false statements are possible, why the Stranger has to correct Parmenides, the greatest kinds and the idea that 'is not' means 'is different from', and his account of a false statement.",

  glimpse: (
    <p>
      Aristotle&rsquo;s <em>Categories</em> sorts the ways things are said to be. Metaphysics asks, with Quine, what we
      commit ourselves to by saying something exists, and Philosophy of Language revisits statements about what is not, in
      Russell&rsquo;s theory of descriptions.
    </p>
  ),
};
