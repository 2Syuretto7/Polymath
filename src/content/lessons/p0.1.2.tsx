import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.1.2",
  minutes: 55,
  links: {
    foreshadows: ["p1.1.3", "p5.1.1", "p16.1.3", "p16.2.1"],
  },

  puzzle: (
    <>
      <p>
        The desk in front of you looks solid, coloured and still. A physicist tells you it is mostly empty space, with
        tiny particles moving at great speed and no colour at all.
      </p>
      <p>
        Is the desk really solid? Is there one desk or two, the one you see and the one the physicist describes? And whose
        job is it to answer: the physicist&rsquo;s, or someone else&rsquo;s?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        In 1927 the astronomer Arthur Eddington opened a set of lectures with exactly this puzzle. He said he had two
        tables: the familiar one, solid and substantial, and the &ldquo;scientific&rdquo; one, mostly emptiness. Physics
        can tell you everything about the particles. What it cannot tell you, by measurement alone, is how its description
        relates to the familiar one: whether the familiar table is an illusion, or whether &ldquo;solid&rdquo; was never
        a claim about what fills the space in the first place but about what happens when you press on it.
      </p>
      <p>
        That second question uses the facts, but it is not settled by more of them. It is a question about concepts, the
        conceptual kind from the last lesson. Science and philosophy are not rivals here. They are working on different
        strands of one question.
      </p>
      <p>
        There is also a history. Until about two hundred years ago, physics was called <em>natural philosophy</em>.
        Newton&rsquo;s great book of 1687 is titled <em>Mathematical Principles of Natural Philosophy</em>. Many sciences
        began as philosophy and left home once they found methods of their own for settling their questions.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="two routes to knowledge">
        <ul>
          <li>
            A claim is known <strong>a posteriori</strong> (&ldquo;from what comes after&rdquo;) if knowing it depends on
            experience: observation, measurement, experiment. <em>Water boils at 100&deg;C at sea level.</em>
          </li>
          <li>
            A claim is known <strong>a priori</strong> (&ldquo;from what comes before&rdquo;) if it can be known by
            reasoning alone, without checking the world. <em>Every bachelor is unmarried. <span className="nowrap">7 + 5 = 12.</span></em>
          </li>
        </ul>
      </Definition>

      <p>
        Science is the great a posteriori enterprise. Much of philosophy, like mathematics, works a priori: by analysing
        concepts, drawing distinctions and testing arguments. But the line is not clean, and the interesting work happens
        where the two meet. There are three main ways they meet.
      </p>

      <h3>1. Philosophy as the source of sciences</h3>
      <p>
        A question tends to leave philosophy when people agree on a method for answering it. Physics left with Galileo and
        Newton, once measurement and mathematics could settle questions about motion. Psychology left in the late
        nineteenth century with the laboratory experiment. Logic, in the twentieth century, gave rise to computer
        science. What stays behind, on this picture, are the questions for which no agreed method yet exists, which is one
        reason philosophy can seem never to make progress. Its successes keep being renamed.
      </p>

      <h3>2. Philosophy of science</h3>
      <p>
        Science raises questions it cannot answer by its own methods, because they are questions <em>about</em> those
        methods. What makes a theory scientific? What is an explanation? Why should what has always happened continue to
        happen? Karl Popper proposed that a theory is scientific only if it is <strong>falsifiable</strong>: it must forbid
        something, so that some possible observation would show it false.
      </p>

      <Example title="falsifiability">
        <p>
          &ldquo;All copper conducts electricity&rdquo; is falsifiable: one non-conducting piece of copper would refute
          it. &ldquo;Everything happens for a reason&rdquo;, as usually used, is not: whatever happens, a reason can be
          found after the fact. Popper did not say unfalsifiable claims are meaningless or false, only that they are not
          science. Whether his test draws the line in the right place is itself debated, in Philosophy of Science.
        </p>
      </Example>

      <h3>3. Science informing philosophy</h3>
      <p>
        Philosophers must respect the facts. Discoveries in neuroscience bear on what a mind is; evolutionary biology bears
        on where our moral feelings came from. But facts alone rarely settle a philosophical question, and one gap in
        particular deserves a name. David Hume noticed it in 1739:
      </p>
      <Quote source={<>David Hume, <cite>A Treatise of Human Nature</cite>, Book 3, Part 1, Section 1</>}>
        <p>
          In every system of morality, which I have hitherto met with, I have always remark&rsquo;d, that the author
          proceeds for some time in the ordinary way of reasoning &hellip; when of a sudden I am surpriz&rsquo;d to find,
          that instead of the usual copulations of propositions, <em>is</em>, and <em>is not</em>, I meet with no
          proposition that is not connected with an <em>ought</em>, or an <em>ought not</em>.
        </p>
      </Quote>

      <Definition title="the is–ought gap">
        <p>
          A conclusion about what <em>ought</em> to be cannot be drawn from premises only about what <em>is</em>. To
          reach an &ldquo;ought&rdquo;, an argument needs at least one premise that is itself normative.
        </p>
      </Definition>

      <Example title="spotting the gap">
        <p>
          &ldquo;Humans evolved to favour their own relatives, so we ought to favour our relatives.&rdquo; The premise may
          well be true. The conclusion does not follow unless we add something like &ldquo;we ought to act as we evolved
          to act&rdquo;, and once that hidden premise is out in the open, it looks doubtful: we also evolved to crave sugar.
        </p>
      </Example>

      <Remark title="two mistakes to avoid">
        <p>
          One mistake is to think science will eventually answer every question, so philosophy is just science that has
          not happened yet. But the claim &ldquo;only science gives knowledge&rdquo; is not itself a scientific finding; no
          experiment establishes it. The opposite mistake is to think philosophy can ignore science. A theory of mind that
          contradicts what we know about brains is a bad theory. The best philosophy is answerable to the facts and
          careful about what the facts can and cannot show.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "a-priori",
      rung: "check",
      prompt: <p>Select every claim that can be known a priori.</p>,
      answer: {
        kind: "choice",
        options: [
          "Every bachelor is unmarried.",
          "Water boils at 100°C at sea level.",
          "7 + 5 = 12.",
          "There are more than a thousand species of ant.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "newton",
      rung: "check",
      prompt: <p>In Newton&rsquo;s time, what was physics usually called?</p>,
      answer: { kind: "choice", options: ["Natural philosophy", "Metaphysics", "Mechanics of the soul", "Empirical theology"], correct: [0] },
    },
    {
      key: "falsifiable",
      rung: "apply",
      prompt: <p>Select every claim that is falsifiable in Popper&rsquo;s sense.</p>,
      answer: {
        kind: "choice",
        options: [
          "All copper conducts electricity.",
          "Everything happens for a reason.",
          "This coin will land heads in more than 60 percent of the next 1,000 tosses.",
          "The universe was created five minutes ago, complete with false memories and fake fossils.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "gap",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;Most people in this country eat meat, so eating meat is morally acceptable.&rdquo; What is the main
          problem with this argument?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The premise is false.",
          "It draws a conclusion about what is acceptable from a premise only about what people do.",
          "It is circular: the conclusion is assumed in the premise.",
          "Moral claims can never be argued for.",
        ],
        correct: [1],
      },
    },
    {
      key: "two-tables",
      rung: "apply",
      prompt: <p>Which response to Eddington&rsquo;s two tables is closest to the view this lesson suggests?</p>,
      answer: {
        kind: "choice",
        options: [
          "Physics has shown that the familiar table is an illusion.",
          "The scientific table is a mere model; only the familiar table is real.",
          "Both descriptions can be true; the philosophical work is to say how they fit together, for instance what 'solid' really claims.",
          "The question is meaningless because it cannot be tested.",
        ],
        correct: [2],
      },
    },
    {
      key: "left-home",
      rung: "prove",
      prompt: (
        <p>
          Choose a question that once belonged to philosophy and now belongs mainly to a science (or one you think is
          moving that way). In a short paragraph, say what changed to make it answerable by observation, and whether any
          part of the question stayed behind.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Names a specific question, not just a field.",
          "Identifies the method or discovery that made it empirically answerable.",
          "Considers whether a conceptual or normative strand remains.",
          "Gives reasons rather than bare assertions.",
        ],
      },
    },
    {
      key: "scientism",
      rung: "stretch",
      prompt: (
        <p>
          Is &ldquo;only science gives us knowledge&rdquo; a scientific claim? Argue for an answer in one paragraph, and
          say what follows for someone who believes it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Considers how the claim could be established, and whether any observation could do so.",
          "Draws the consequence: if it is not scientific, by its own standard it is not known.",
          "Considers a reply, such as a weaker or more charitable version of the claim.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend who loves science why physics cannot, by itself, answer the question 'Is the desk really solid?', and why that is not a criticism of physics.",

  glimpse: (
    <p>
      Next you will see philosophy at work in ordinary conversation. Popper&rsquo;s criterion returns in full in
      Philosophy of Science, along with the problem it was meant to answer, the problem of induction, which you meet
      first in Introduction to Philosophy. The is–ought gap is the starting point for metaethics, and you will test it on
      the claim that morality is relative to culture in Introduction to Ethics.
    </p>
  ),
};
