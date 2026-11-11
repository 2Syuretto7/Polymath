import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DoublingSquareViz } from "@/components/viz/DoublingSquareViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.3.1",
  minutes: 70,
  links: {
    revisits: ["p4.2.4", "m0.5.5"],
    foreshadows: ["p4.3.2", "p10.1.1", "p10.5.4"],
  },

  puzzle: (
    <>
      <p>
        Meno, a young aristocrat, asks Socrates whether virtue can be taught. Socrates replies that he does not even know
        what virtue is. After a few failed definitions, Meno loses patience and turns the tables with a puzzle of his own.
        How can you search for something when you do not know what it is? You would not know where to start, and if you
        stumbled on it, you would not recognise it.
      </p>
      <p>
        If Meno is right, inquiry is impossible: you cannot look for what you already know, and you cannot look for what
        you do not. Yet people do find things out. What is wrong with the puzzle?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Socrates answers with a demonstration. He calls over one of Meno&rsquo;s household slaves, a boy who has never
        studied geometry, and asks him only questions. Step through the lesson below. Socrates tells the boy nothing; at
        the end, the boy knows something he did not know he knew.
      </p>
      <DoublingSquareViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Meno's paradox">
        <p>Socrates restates Meno&rsquo;s challenge as a dilemma:</p>
        <ol>
          <li>For anything, either you know it or you do not.</li>
          <li>If you know it, you cannot search for it, since there is nothing to search for.</li>
          <li>If you do not know it, you cannot search for it, since you do not know what to look for.</li>
          <li>So you cannot search for anything.</li>
        </ol>
      </Definition>

      <Definition title="the theory of recollection">
        <p>
          Socrates&rsquo; reply draws on what he says priests and poets teach. The soul is immortal, has been born many
          times, and has learned everything there is. So what we call learning is really <strong>recollection</strong>
          (<em>anamn&ecirc;sis</em>): drawing out knowledge already in the soul. Searching is possible because we neither
          simply know nor simply fail to know. We have the knowledge, but have forgotten it.
        </p>
      </Definition>

      <Example title="what the demonstration is meant to show">
        <p>
          The boy first answers wrongly with confidence, then falls into perplexity, then, prompted by questions, sees that
          the square on the diagonal has double the area. Socrates insists he taught the boy nothing: every answer was the
          boy&rsquo;s own. Since the boy had no lessons in this life, Socrates concludes, the true beliefs were in him
          already, stirred up &ldquo;as in a dream&rdquo;. Questioned often enough and in different ways, he will end up
          knowing them as well as anyone.
        </p>
        <p>
          The middle stage matters. Before, the boy thought he knew; after his mistakes, he knows he does not. Meno had
          compared Socrates to a torpedo fish, which numbs whoever touches it. Socrates replies that the numbing is
          useful: the boy now wants to find out.
        </p>
      </Example>

      <Definition title="knowledge and true belief">
        <p>
          Late in the dialogue, Socrates draws a distinction with a long history. Someone with a true belief about the road
          to Larissa guides travellers as well as someone who knows the way. So why is knowledge worth more? Because true
          beliefs are like the statues of Daedalus, which were said to run away unless tied down. True beliefs stay put,
          and become knowledge, when they are tied down by &ldquo;working out the reason&rdquo; for them. That, Socrates
          adds, is recollection.
        </p>
      </Definition>

      <Remark title="how to read the demonstration">
        <p>
          Critics have long pointed out that Socrates&rsquo; questions are leading: many are yes-or-no questions that
          suggest their own answers. Even so, the boy must <em>see</em> for himself that the tilted square is made of four
          half-squares; no one can see it for him. Many modern readers keep that insight and drop the myth: some knowledge,
          such as geometry, can be reached by reasoning from within rather than taken from experience or from a teacher.
          This is an early version of the idea of <em>a priori</em> knowledge.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "paradox",
      rung: "check",
      prompt: <p>What does Meno&rsquo;s paradox claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "That virtue cannot be taught.",
          "That searching for what you do not know is impossible, since you would not know what to look for or recognise it.",
          "That the soul is immortal.",
          "That geometry is impossible.",
        ],
        correct: [1],
      },
    },
    {
      key: "side",
      rung: "check",
      prompt: (
        <p>The original square has side 2. What is the side of the square with double its area, to three decimal places?</p>
      ),
      answer: { kind: "numeric", value: 2.828, tolerance: 0.001 },
    },
    {
      key: "fifty",
      rung: "apply",
      prompt: <p>A square has side 5. What is the area of the square drawn on its diagonal?</p>,
      answer: { kind: "numeric", value: 50 },
    },
    {
      key: "daedalus",
      rung: "apply",
      prompt: <p>What turns a true belief into knowledge, according to the <em>Meno</em>?</p>,
      answer: {
        kind: "choice",
        options: [
          "Being taught it by an expert.",
          "Tying it down by working out the reason why it is true.",
          "Holding it with great confidence.",
          "Having it for a long time.",
        ],
        correct: [1],
      },
    },
    {
      key: "stage",
      rung: "apply",
      prompt: <p>Why does Socrates think the boy is better off after his two wrong answers?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because he now knows the right answer.",
          "Because he no longer thinks he knows, and so wants to find out.",
          "Because he has learned to obey.",
          "Because wrong answers are always useful.",
        ],
        correct: [1],
      },
    },
    {
      key: "reply",
      rung: "prove",
      prompt: (
        <p>
          Set out Meno&rsquo;s paradox as a dilemma in numbered steps. Explain how the theory of recollection rejects one of
          the premises. Then give a reply to the paradox that does not depend on recollection.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Presents the dilemma: one either knows or does not; either way search is impossible.",
          "Explains that recollection rejects the first premise or the third: one can have knowledge latently, or partially, and search by recovering it.",
          "Offers an independent reply, for instance that one can know enough to recognise an answer without knowing the answer, as with a crossword clue. Any sensible reply earns full credit.",
        ],
      },
    },
    {
      key: "leading",
      rung: "stretch",
      prompt: (
        <p>
          Does the slave boy episode show that learning is recollection, or only that skilful questioning can lead someone
          to see a truth? Defend an answer, saying what you think the boy contributed and what Socrates contributed.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies the role of Socrates' questions, including that some are leading.",
          "Identifies what the boy contributes, such as seeing the relationships in the figure for himself.",
          "Reaches a reasoned verdict on what the episode shows. Any thoughtful view earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Meno's paradox, how Socrates answers it with the theory of recollection and the slave boy, and the difference the Meno draws between knowledge and true belief.",

  glimpse: (
    <p>
      The <em>Phaedo</em> uses recollection as an argument for the immortality of the soul. Epistemology takes up the
      Meno&rsquo;s question of what knowledge adds to true belief, and asks whether any knowledge is a priori.
    </p>
  ),
};
