import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { JuryTheoremViz } from "@/components/viz/JuryTheoremViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p14.4.3",
  minutes: 80,
  links: {
    revisits: ["p14.4.2", "p14.4.1", "p3.4.1"],
    foreshadows: ["p14.5.4", "p14.6.1", "p26.4.4"],
  },

  puzzle: (
    <>
      <p>
        At a village fair in 1906, Francis Galton found that the average of about eight hundred guesses of an ox&rsquo;s weight
        was within one per cent of the truth, better than almost every individual guess. Could a crowd of ordinary voters be
        wiser than any expert? If so, democracy might be justified by the quality of its answers.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Vary the voters&rsquo; competence, their independence and their number, and see how often the majority is right.</p>
      <JuryTheoremViz />
    </>
  ),

  theory: (
    <>
      <Definition title="epistemic democracy">
        <p>
          The view that democratic procedures are justified, at least partly, because they tend to track the truth or the
          common good: they reach correct answers to political questions more reliably than the alternatives.
        </p>
      </Definition>

      <Example title="Condorcet's jury theorem">
        <p>
          Suppose a question has a right answer, each voter is right with the same probability <em>p</em> greater than one
          half, and voters judge independently. Then the probability that the majority is right increases with the number of
          voters and tends to 1. If <em>p</em> is below one half, the majority tends to be wrong with certainty.
        </p>
      </Example>

      <Remark title="diversity trumps ability">
        <p>
          Hélène Landemore, building on work by Lu Hong and Scott Page, argues that a randomly chosen group of diverse
          problem-solvers can outperform a group of the individually best, because diverse perspectives search more of the
          space of possible solutions. On this view inclusive democracy is wiser than rule by a few experts.
        </p>
      </Remark>

      <Remark title="limits">
        <p>
          The theorem&rsquo;s assumptions are strong. Votes are not independent when people follow the same leaders, media or
          parties; the visualisation shows how correlation caps the gain. Some questions may have no right answer apart from
          the procedure. And if systematic biases push voters below one half, as Brennan and Bryan Caplan argue about economic
          questions, large numbers make things worse, not better.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does epistemic democracy claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "That democratic procedures tend to reach correct answers.",
          "That democracy is about knowledge of history.",
          "That only experts should vote.",
          "That truth is whatever the majority says.",
        ],
        correct: [0],
      },
    },
    {
      key: "cond",
      rung: "check",
      prompt: <p>In Condorcet&rsquo;s theorem, what happens as the number of independent voters grows, if each is right with probability 0.6?</p>,
      answer: {
        kind: "choice",
        options: ["The majority is right with probability tending to 1", "Nothing changes", "The majority tends to be wrong", "It stays at 0.6"],
        correct: [0],
      },
    },
    {
      key: "below",
      rung: "apply",
      prompt: <p>What if each independent voter is right with probability 0.45?</p>,
      answer: {
        kind: "choice",
        options: ["The majority tends to be wrong with certainty", "The majority tends to be right", "It stays at 0.45", "It approaches 0.5"],
        correct: [0],
      },
    },
    {
      key: "three",
      rung: "apply",
      prompt: <p>Three independent voters are each right with probability 0.6. What is the probability that the majority is right?</p>,
      answer: { kind: "numeric", value: 0.648, tolerance: 0.002 },
    },
    {
      key: "indep",
      rung: "apply",
      prompt: <p>In the visualisation, why does following a leader limit the majority&rsquo;s accuracy?</p>,
      answer: {
        kind: "choice",
        options: [
          "Votes become correlated, so they no longer add independent information.",
          "Leaders are always wrong.",
          "Fewer people vote.",
          "It does not limit it.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Condorcet&rsquo;s jury theorem justify democracy? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the theorem and its assumptions.",
          "Considers whether the assumptions hold in real elections, such as independence or competence above one half.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Are there political questions with right answers that a majority could get wrong? Or is the right answer simply what fair procedures produce?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes procedure-independent standards of correctness from pure proceduralism.",
          "Considers an example on each side.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend epistemic democracy, Condorcet's jury theorem and its assumptions, the argument that diversity trumps ability, and why correlation and bias limit the case.",

  glimpse: (
    <p>
      The next chapter turns to critics of liberal democracy, beginning with Marx. Later, social choice theory examines how
      individual judgements can be aggregated at all.
    </p>
  ),
};
