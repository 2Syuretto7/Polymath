import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { MajorityCycleViz } from "@/components/viz/MajorityCycleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p26.4.4",
  minutes: 90,
  links: {
    revisits: ["p26.4.3", "p26.4.1", "m1.6.3"],
    foreshadows: ["p30.4.2", "p28.3.1", "p30.2.3"],
  },

  puzzle: (
    <>
      <p>
        Three friends choose a restaurant. Asha ranks Andhra over Bengali over Chinese; Bilal ranks Bengali over Chinese
        over Andhra; Chen ranks Chinese over Andhra over Bengali. Put each pair to a vote. Andhra beats Bengali two to one,
        Bengali beats Chinese two to one, and Chinese beats Andhra two to one. Every individual is consistent. What does
        the group want?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set the three voters&rsquo; rankings and see whether majority preference is transitive.</p>
      <MajorityCycleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="social welfare functions">
        <p>
          A <strong>social welfare function</strong> takes a profile, one complete transitive ranking of the options for
          each voter, and returns a complete transitive ranking for the group. The Marquis de Condorcet showed in 1785 that
          pairwise majority voting is not one: it can produce cycles.
        </p>
      </Definition>

      <Definition title="Arrow's conditions">
        <ul>
          <li><strong>Unrestricted domain:</strong> every profile of rankings is allowed.</li>
          <li><strong>Weak Pareto:</strong> if every voter prefers x to y, so does the group.</li>
          <li><strong>Independence of irrelevant alternatives:</strong> the group ranking of x and y depends only on how each voter ranks x against y.</li>
          <li><strong>Non-dictatorship:</strong> no single voter whose strict preferences always become the group&rsquo;s.</li>
        </ul>
      </Definition>

      <Theorem title="Arrow's impossibility theorem">
        <p>
          Kenneth Arrow proved in 1951 that with at least three options and finitely many voters, no social welfare
          function satisfies all four conditions. <strong>Proof idea:</strong> call a group decisive for x over y if it
          gets its way whenever all its members prefer x to y. Pareto makes the whole electorate decisive. Using
          independence and well-chosen profiles, a decisive group can always be shrunk by splitting it in two, until a
          single voter is decisive for every pair: a dictator.
        </p>
      </Theorem>

      <Example title="the Borda count">
        <p>
          Give 2 points for a first place, 1 for second and 0 for third, and rank options by total. Borda always yields a
          transitive ranking and satisfies Pareto, so it must break independence: adding or moving a third option can flip
          the group ranking of two others.
        </p>
      </Example>

      <Remark title="what follows">
        <p>
          Responses include restricting the domain (Duncan Black showed that if preferences are single-peaked on a line,
          majority voting is transitive), allowing interpersonal comparisons of utility, as Amartya Sen urged, or accepting
          that collective choice cannot be as rational as individual choice. Philosophers have also used Arrow&rsquo;s
          framework to aggregate criteria, such as theoretical virtues in theory choice, or moral reasons.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond",
      rung: "check",
      prompt: <p>What did Condorcet show about pairwise majority voting?</p>,
      answer: { kind: "choice", options: ["It can produce a cycle even when every voter is transitive", "It always picks the best option", "It is dictatorial", "It violates Pareto"], correct: [0] },
    },
    {
      key: "iia",
      rung: "check",
      prompt: <p>What does independence of irrelevant alternatives require?</p>,
      answer: { kind: "choice", options: ["The group ranking of x and y depends only on voters’ rankings of x against y", "No option is irrelevant", "Voters vote independently", "The group ranking ignores ties"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set voter 3 to B &gt; C &gt; A, keeping the starting rankings for voters 1 and 2. Which option is the Condorcet winner?</p>,
      answer: { kind: "choice", options: ["B", "A", "C", "There is none"], correct: [0] },
    },
    {
      key: "borda",
      rung: "apply",
      prompt: <p>With the puzzle&rsquo;s three rankings, what Borda score does each restaurant get?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "peak",
      rung: "apply",
      prompt: <p>Which restriction on preferences guarantees that majority voting is transitive (with an odd number of voters)?</p>,
      answer: { kind: "choice", options: ["Single-peakedness on a line", "Unrestricted domain", "Strict preferences", "Equal numbers of voters for each first choice"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Which of Arrow&rsquo;s conditions would you give up, and why?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Names a condition and says what giving it up allows, such as Borda without independence, or majority voting on a restricted domain.",
          "Considers a cost of giving it up.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does Arrow&rsquo;s theorem show that democracy is incoherent?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes what the theorem proves about ranking procedures from broader claims about democracy.",
          "Considers a response, such as restricted domains, richer information, or Riker’s sceptical reading.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Modal logic gave precise tools for necessity, knowledge, time, obligation and choice. Metaphysics asks a deeper
        question about the world those tools describe: what depends on what, and what is fundamental?
      </p>
      <p>Next, the course on graduate metaphysics begins with grounding.</p>
    </>
  ),
};
