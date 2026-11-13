import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ObjectiveListViz } from "@/components/viz/ObjectiveListViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p13.2.3",
  minutes: 75,
  links: {
    revisits: ["p13.2.1", "p13.2.2", "p5.4.1"],
    foreshadows: ["p33.2.1", "p21.2.1", "p30.4.1"],
  },

  puzzle: (
    <>
      <p>
        A friend spends years absorbed in a game on their phone, contented and wanting nothing else. Another struggles to write
        a book, often frustrated, and finishes it. Could the second life be better for the person living it, even if it
        contains less pleasure and fewer satisfied wants?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Weigh five goods and see which life the weights rank highest.</p>
      <ObjectiveListViz />
    </>
  ),

  theory: (
    <>
      <Definition title="objective list theories">
        <p>
          Some things are good for a person whether or not they want them or enjoy them. Typical lists include knowledge,
          friendship, achievement, autonomy, health and pleasure. A life goes well to the extent that it contains these goods.
          Derek Parfit introduced the label in <em>Reasons and Persons</em> (1984).
        </p>
      </Definition>

      <Example title="versions">
        <p>
          John Finnis lists basic goods such as life, knowledge, play, aesthetic experience, friendship and practical
          reasonableness. Martha Nussbaum&rsquo;s capabilities list, used in development policy, includes bodily health, the
          senses and imagination, emotions, affiliation and control over one&rsquo;s environment. Perfectionists, following
          Aristotle, say the list is fixed by human nature: what it is to flourish as a human.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          <strong>Arbitrariness:</strong> what makes something belong on the list? A list with no unifying explanation seems
          ad hoc. <strong>Alienation:</strong> Peter Railton argued that what is good for someone must engage them; it would be
          intolerably alienating if something counted as good for you that you could never care about.{" "}
          <strong>Paternalism:</strong> if knowledge is good for you whether you want it or not, others may seem licensed to
          impose it.
        </p>
      </Remark>

      <Remark title="hybrid theories">
        <p>
          Hybrid views say a life goes well when a person enjoys or cares about things that are objectively good, such as taking
          pleasure in real friendship. Parfit, Robert Adams and Shelly Kagan have defended versions. They try to keep the
          subjective engagement of hedonism and desire theories, while ruling out the grass counter and the experience machine.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What do objective list theories claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Some things are good for a person whether or not they want or enjoy them.",
          "Only pleasure is good.",
          "Only satisfied desires are good.",
          "Nothing is good for anyone.",
        ],
        correct: [0],
      },
    },
    {
      key: "parfit",
      rung: "check",
      prompt: <p>Who introduced the label &ldquo;objective list theory&rdquo;?</p>,
      answer: { kind: "choice", options: ["Derek Parfit", "Jeremy Bentham", "Robert Nozick", "John Stuart Mill"], correct: [0] },
    },
    {
      key: "hedon",
      rung: "apply",
      prompt: <p>In the viz, which weights turn the objective list theory into hedonism?</p>,
      answer: {
        kind: "choice",
        options: ["Weight on pleasure only, zero on the rest", "Equal weights", "Zero on pleasure", "Weight on knowledge only"],
        correct: [0],
      },
    },
    {
      key: "alien",
      rung: "apply",
      prompt: <p>What is the alienation objection?</p>,
      answer: {
        kind: "choice",
        options: [
          "Something cannot be good for you if you could never care about it.",
          "Lists are too long.",
          "Friends can be alienating.",
          "Knowledge is harmful.",
        ],
        correct: [0],
      },
    },
    {
      key: "hybrid",
      rung: "apply",
      prompt: <p>What does a hybrid theory of wellbeing require?</p>,
      answer: {
        kind: "choice",
        options: [
          "Engagement, such as enjoyment, with things that are objectively good.",
          "Pleasure alone.",
          "Desires alone.",
          "Nothing subjective.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can knowledge be good for someone who does not care about it? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the objective list claim.",
          "Considers the alienation objection or a hybrid view.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If governments use a list of goods to decide policy, is that paternalistic? How might Nussbaum answer?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the paternalism worry.",
          "Notes Nussbaum’s focus on capabilities, the freedom to achieve functionings, rather than imposing them.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend objective list theories of wellbeing with examples of lists, the objections from arbitrariness, alienation and paternalism, and how hybrid theories try to combine objective and subjective views.",

  glimpse: (
    <p>
      The capabilities approach in political philosophy develops Nussbaum&rsquo;s list. Later lessons on care ethics and moral
      uncertainty return to how we should weigh competing goods.
    </p>
  ),
};
