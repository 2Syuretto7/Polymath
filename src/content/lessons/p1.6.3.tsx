import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SisyphusViz } from "@/components/viz/SisyphusViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.6.3",
  minutes: 60,
  links: {
    revisits: ["p0.1.1", "p1.5.3"],
    foreshadows: ["p9.3.2", "p13.2.3", "p19.6.1"],
  },

  puzzle: (
    <>
      <p>
        In his fifties, Leo Tolstoy was famous, wealthy, healthy and happily married, the author of <cite>War and Peace</cite>{" "}
        and <cite>Anna Karenina</cite>. Yet, as he wrote in <cite>A Confession</cite>, he found himself unable to answer a simple
        question: what will come of everything I do, today or tomorrow, and of my whole life? He was so troubled that he hid
        ropes and guns from himself.
      </p>
      <p>
        If even such a life can seem pointless, what would it take for a life to be meaningful? Is meaning something you
        find, something you make, or nothing at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        In Greek myth, Sisyphus is condemned by the gods to roll a stone up a hill; whenever it nears the top it rolls down,
        and he must begin again, forever. It is the image of a meaningless life. In 1970 the philosopher Richard Taylor asked
        what would have to change to give Sisyphus&rsquo;s life meaning.
      </p>
      <p>
        Below are four versions of the story. In some, his labour achieves something; in some, he loves the work. Test each
        against three theories of what makes a life meaningful.
      </p>
      <SisyphusViz />
    </>
  ),

  theory: (
    <>
      <Definition title="three theories of meaning">
        <ul>
          <li>
            <strong>Subjectivism:</strong> a life is meaningful when the person is fulfilled by, or cares deeply about, what
            they do. Taylor drew this conclusion: give Sisyphus a passion for rolling stones, and his life has all the meaning
            it needs.
          </li>
          <li>
            <strong>Objectivism:</strong> a life is meaningful when it engages with things of real value, such as knowledge,
            beauty, love or the relief of suffering, whatever the person feels about it.
          </li>
          <li>
            <strong>The hybrid view</strong> of Susan Wolf: meaning arises &ldquo;when subjective attraction meets objective
            attractiveness&rdquo;, that is, when a person actively loves something that is worth loving.
          </li>
        </ul>
      </Definition>

      <Remark title="against pure subjectivism">
        <p>
          Wolf asks us to imagine someone who is passionately fulfilled by counting blades of grass, or by watching television
          all day. If such a life seems to lack meaning, however satisfied the person is, then feelings are not enough. On the
          other side, a person who grinds through valuable work they find utterly alienating seems to miss something too. The
          hybrid view tries to explain both judgements.
        </p>
      </Remark>

      <Example title="meaning from God">
        <p>
          Many religious traditions hold that a life is meaningful by playing its part in God&rsquo;s purpose. Critics reply
          that being given a purpose by someone else is not obviously enough: a farmer&rsquo;s purpose for his chickens does not
          make their lives meaningful to them. Defenders reply that a perfect being&rsquo;s purpose is not like a farmer&rsquo;s.
          This is the question the visualisation&rsquo;s gods raise, in a different key.
        </p>
      </Example>

      <Definition title="the absurd">
        <p>
          Albert Camus, in <cite>The Myth of Sisyphus</cite> (1942), called <strong>absurd</strong> the clash between our
          demand that the world make sense and the world&rsquo;s silence. He rejected both suicide and a leap into faith as
          escapes, and recommended living on in full awareness, in revolt. His essay ends: &ldquo;One must imagine Sisyphus
          happy.&rdquo;
        </p>
      </Definition>

      <Remark title="does it matter in a million years?">
        <p>
          A common worry is that nothing we do will matter in a million years, so nothing matters now. Thomas Nagel replied
          (1971) that if nothing now matters to what happens in a million years, then equally nothing then matters to now. The
          sense of absurdity, he suggested, comes from our ability to step back and see our lives from outside, while still
          having to live them from within.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "taylor",
      rung: "check",
      prompt: <p>According to subjectivism, what would make Sisyphus&rsquo;s life meaningful?</p>,
      answer: {
        kind: "choice",
        options: [
          "Building a lasting temple, even if he hates the work.",
          "Caring about and being fulfilled by his task.",
          "Being released by the gods.",
          "Nothing could.",
        ],
        correct: [1],
      },
    },
    {
      key: "wolf",
      rung: "check",
      prompt: <p>Susan Wolf&rsquo;s hybrid view says meaning arises when&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "a person is happy.",
          "a person does something important, whatever they feel.",
          "a person actively loves something worth loving.",
          "a person obeys the gods.",
        ],
        correct: [2],
      },
    },
    {
      key: "versions",
      rung: "apply",
      prompt: <p>Of the four versions of Sisyphus in the visualisation, in how many is his life meaningful on the hybrid view?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "grass",
      rung: "apply",
      prompt: <p>The example of a person fulfilled by counting blades of grass is aimed chiefly against&hellip;</p>,
      answer: { kind: "choice", options: ["subjectivism", "objectivism", "Camus", "religious views"], correct: [0] },
    },
    {
      key: "camus",
      rung: "apply",
      prompt: <p>Camus&rsquo;s response to the absurd is to&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "end one's life.",
          "take a leap of faith.",
          "live on, aware of the absurd, in revolt against it.",
          "deny that the world is silent.",
        ],
        correct: [2],
      },
    },
    {
      key: "million",
      rung: "prove",
      prompt: (
        <p>
          Set out the argument &ldquo;Nothing we do will matter in a million years, so nothing we do matters.&rdquo; Identify
          the hidden premise, and explain Nagel&rsquo;s reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the argument in premises and conclusion.",
          "Identifies a hidden premise, such as: what does not matter in the far future does not matter now.",
          "Explains Nagel's point that the same reasoning runs in reverse.",
          "Assesses whether the argument survives.",
        ],
      },
    },
    {
      key: "which-view",
      rung: "stretch",
      prompt: (
        <p>
          Which of subjectivism, objectivism and the hybrid view gives the best account of a meaningful life? Test your choice
          against at least two examples of your own.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the three views accurately.",
          "Chooses a view and gives a reason for it.",
          "Tests it against at least two examples, including at least one that puts pressure on it.",
          "Responds to the strongest objection.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Taylor's versions of Sisyphus, and why Susan Wolf thinks a meaningful life needs both caring and something worth caring about.",

  glimpse: (
    <p>
      Every life ends. The last lesson of this course asks whether death is bad for the one who dies, and why. Camus and the
      absurd return in Phenomenology and Existentialism, the darker answers of Schopenhauer in Nineteenth-Century
      Philosophy, and objective theories of value in Moral Philosophy.
    </p>
  ),
};
