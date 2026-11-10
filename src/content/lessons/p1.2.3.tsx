import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { ChineseRoomViz } from "@/components/viz/ChineseRoomViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.2.3",
  minutes: 70,
  links: {
    revisits: ["p0.4.1", "p1.2.1"],
    foreshadows: ["p12.3.2", "p12.3.3", "p12.3.4", "p31.4.1"],
  },

  puzzle: (
    <>
      <Quote source={<>Alan Turing, &ldquo;Computing Machinery and Intelligence&rdquo;, <cite>Mind</cite> (1950)</>}>
        <p>I propose to consider the question, &lsquo;Can machines think?&rsquo;</p>
      </Quote>
      <p>
        You are reading this in a world where machines hold fluent conversations, write essays and explain mathematics. Some
        say they understand; some say they only shuffle symbols. Before reading on, write down what you would need to see to
        be convinced that a machine really thinks. Then ask whether a person could pass the same test without thinking.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Turing thought the question &ldquo;can machines think?&rdquo; was too vague to argue about, and replaced it with a
        test. If, in a typed conversation, a machine cannot be told apart from a person, then we should grant it whatever we
        grant the person. This fits the last lesson: behaviour is all the evidence we ever have for other minds.
      </p>
      <p>
        In 1980 John Searle replied with a thought experiment. Imagine a man who knows no Chinese, locked in a room with a
        rulebook that pairs strings of Chinese characters with other strings. Slips of paper come in; he looks up the shapes
        and copies out the answer. Outside, the answers are fluent. Walk through it below, and keep the meanings hidden at
        first, as they are for the man.
      </p>
      <ChineseRoomViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the imitation game">
        <p>
          In Turing&rsquo;s <strong>imitation game</strong>, now called the <strong>Turing test</strong>, an interrogator
          exchanges typed messages with two hidden players, one human and one machine, and must say which is which. Turing
          proposed that a machine which does as well in this game as a human deserves to be called intelligent, and he made a
          prediction.
        </p>
      </Definition>

      <Quote source={<>Alan Turing, &ldquo;Computing Machinery and Intelligence&rdquo; (1950)</>}>
        <p>
          I believe that in about fifty years&rsquo; time it will be possible to programme computers, with a storage capacity
          of about 10⁹, to make them play the imitation game so well that an average interrogator will not have more than 70
          per cent chance of making the right identification after five minutes of questioning.
        </p>
      </Quote>

      <Remark title="Lady Lovelace's objection">
        <p>
          Turing answered nine objections in advance. One came from Ada Lovelace, who had written in 1843 that
          Babbage&rsquo;s Analytical Engine &ldquo;has no pretensions whatever to originate anything. It can do whatever we
          know how to order it to perform.&rdquo; Turing replied that machines often surprise their makers, and that a machine
          which learns from experience may end up doing things no one ordered it to do.
        </p>
      </Remark>

      <Definition title="the Chinese room">
        <p>
          Searle&rsquo;s argument, in &ldquo;Minds, Brains, and Programs&rdquo; (1980), runs: a program is purely
          syntactic, a set of rules for manipulating symbols by their shapes. Syntax is not by itself sufficient for meaning,
          as the man in the room shows: he runs the program perfectly and understands nothing. Minds have meaning. So running
          a program cannot by itself be sufficient for a mind. Searle did not deny that machines could think; he held that
          brains are machines that do. His target was the claim that the right <em>program</em> would be enough.
        </p>
      </Definition>

      <Example title="replies">
        <p>
          <strong>The systems reply:</strong> the man does not understand Chinese, but he is only one part of a larger system,
          with the rulebook, the paper and the slots, and the whole system understands. Searle answered: let the man memorise
          the rulebook and work in the open air; now he is the whole system, and still understands nothing.{" "}
          <strong>The robot reply:</strong> put the program in a robot with cameras and arms, so its symbols connect to the
          world. Searle answered that this only adds more symbols coming in and going out. Each reply has replies of its own,
          and the debate is very much alive.
        </p>
      </Example>

      <Remark title="today">
        <p>
          Modern language models do not follow a hand-written rulebook; they learn statistical patterns from enormous amounts
          of text. Whether that difference matters to Searle&rsquo;s argument is now one of the liveliest questions in
          philosophy. Notice that the problem of other minds returns here in its sharpest form: a machine may give the very
          reports of thought and feeling that convince us in a friend.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "turing",
      rung: "check",
      prompt: <p>What did Turing propose to put in place of the question &ldquo;Can machines think?&rdquo;</p>,
      answer: {
        kind: "choice",
        options: [
          "a test of whether a machine can be told apart from a human in conversation",
          "a test of whether a machine is made of neurons",
          "a measure of how fast a machine calculates",
          "a proof that machines cannot think",
        ],
        correct: [0],
      },
    },
    {
      key: "syntax",
      rung: "check",
      prompt: <p>In the Chinese room, the man works only with&hellip;</p>,
      answer: { kind: "choice", options: ["the meanings of the symbols", "the shapes of the symbols", "pictures of the world", "spoken Chinese"], correct: [1] },
    },
    {
      key: "target",
      rung: "apply",
      prompt: <p>What is the Chinese room argument aimed against?</p>,
      answer: {
        kind: "choice",
        options: [
          "the claim that any machine could ever think",
          "the claim that running the right program is by itself enough for understanding",
          "the claim that humans understand Chinese",
          "the claim that brains are physical",
        ],
        correct: [1],
      },
    },
    {
      key: "systems",
      rung: "apply",
      prompt: <p>Which reply says that understanding belongs to the room as a whole, not to the man?</p>,
      answer: { kind: "choice", options: ["the robot reply", "the systems reply", "Lady Lovelace's objection", "the argument from analogy"], correct: [1] },
    },
    {
      key: "lovelace",
      rung: "apply",
      prompt: <p>How did Turing answer Lady Lovelace&rsquo;s objection?</p>,
      answer: {
        kind: "choice",
        options: [
          "by agreeing that machines can only do what they are told",
          "by pointing out that machines often surprise their makers, and that learning machines may do what no one ordered",
          "by denying that the Analytical Engine existed",
          "by appealing to God",
        ],
        correct: [1],
      },
    },
    {
      key: "standard-form",
      rung: "prove",
      prompt: (
        <p>
          Set out the Chinese room argument in standard form, with numbered premises and a conclusion. Then state the systems
          reply and say whether you find Searle&rsquo;s answer to it convincing.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Includes a premise that programs are purely syntactic, or work on symbols by shape alone.",
          "Includes a premise that syntax alone is not sufficient for meaning or understanding, supported by the room.",
          "Draws the conclusion that running a program is not by itself sufficient for a mind.",
          "States the systems reply and gives a reasoned view on Searle's memorisation answer.",
        ],
      },
    },
    {
      key: "test-test",
      rung: "stretch",
      prompt: (
        <p>
          Suppose a machine passes Turing&rsquo;s test. What, if anything, would it then be reasonable to believe about it?
          Connect your answer to the problem of other minds from the last lesson.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Says what passing the test would and would not establish.",
          "Connects to how we judge other human minds from behaviour.",
          "Considers at least one disanalogy between the machine and a human, such as how the behaviour was produced.",
          "Reaches a reasoned conclusion.",
        ],
      },
    },
  ],

  teachBack:
    "Explain the Chinese room to a friend who has never heard of it, and say what you think the strongest reply is.",

  glimpse: (
    <p>
      This completes the chapter on mind. Next comes free will: if your mind is part of the natural world, are your choices
      as fixed as the motion of the planets? The Turing test, the Chinese room and the computational theory of mind each
      have their own lesson in Philosophy of Mind, and the graduate course on mind and cognitive science asks directly
      whether language models understand.
    </p>
  ),
};
