import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DilationViz } from "@/components/viz/DilationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p28.2.3",
  minutes: 90,
  links: {
    revisits: ["p28.2.2", "p28.2.1", "p10.7.2"],
    foreshadows: ["p28.3.1", "p28.4.1", "p28.4.2"],
  },

  puzzle: (
    <>
      <p>
        An urn holds 100 balls, some black and some white, in an unknown proportion. How confident should you be that the
        next ball drawn is black? Saying exactly 0.5 treats total ignorance like knowing the urn is half black. Is a single
        number the right answer at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose the spread of credence in p, then learn that the coin landed heads if and only if p.</p>
      <DilationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="credal sets">
        <p>
          On the imprecise view, a state of opinion is represented by a <strong>credal set</strong>: a set of probability
          functions, each a way of filling in what the evidence leaves open. Your credence in A is then the interval from
          its lowest to its highest probability among the members. Isaac Levi and Peter Walley developed the view; James
          Joyce argued in 2010 that sharp credences sometimes go beyond the evidence.
        </p>
      </Definition>

      <Definition title="updating and deciding">
        <p>
          A credal set updates by conditionalising each member. For decisions, one rule says an option is permissible if
          some member ranks it best; another, maximin, chooses the option with the best worst-case expectation. The lower
          probability of A and the upper probability of not-A always sum to 1.
        </p>
      </Definition>

      <Example title="dilation">
        <p>
          Teddy Seidenfeld and Larry Wasserman described <strong>dilation</strong> in 1993: learning something can make
          every member&rsquo;s credence change so that the set&rsquo;s spread for a proposition widens, whatever is learnt.
          Roger White pressed the case in the visualisation in 2010: you know a coin is fair, yet after learning &lsquo;heads
          if and only if p&rsquo; your credence in heads is as imprecise as your credence in p.
        </p>
      </Example>

      <Remark title="Elga’s sequential bets">
        <p>
          Adam Elga argued in 2010 that imprecise agents can be led to reject two bets, offered one after the other, which
          together guarantee a gain. Each bet alone is permissible to decline under a liberal rule, so nothing stops the
          agent declining both. Defenders reply with decision rules that look at sequences of choices as a whole, or accept
          the cost as the price of honesty about the evidence.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "credal",
      rung: "check",
      prompt: <p>How does the imprecise view represent a state of opinion?</p>,
      answer: { kind: "choice", options: ["By a set of probability functions", "By a single probability function", "By a list of full beliefs", "By a single interval with no probabilities"], correct: [0] },
    },
    {
      key: "dilation",
      rung: "check",
      prompt: <p>What is dilation?</p>,
      answer: { kind: "choice", options: ["Learning that makes a credence less precise, whatever is learnt", "Learning that makes every credence sharp", "Updating by Jeffrey conditionalisation", "Ignoring new evidence"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, keep the default credence in p from 0.20 to 0.90 and learn. What is the highest credence in heads?</p>,
      answer: { kind: "numeric", value: 0.9, tolerance: 0.001 },
    },
    {
      key: "lower",
      rung: "apply",
      prompt: <p>If your credence in A is the interval from 0.3 to 0.6, what is your lower probability for not-A?</p>,
      answer: { kind: "numeric", value: 0.4, tolerance: 0.001 },
    },
    {
      key: "elga",
      rung: "apply",
      prompt: <p>What is Elga&rsquo;s objection to imprecise credences?</p>,
      answer: { kind: "choice", options: ["They permit rejecting a pair of bets that together guarantee a gain", "They cannot be updated at all", "They are always Dutch-booked by a single bet", "They require credence 1 in every truth"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should rational credences ever be imprecise? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains what imprecise credences are.",
          "Considers a reason for or against them, such as matching the evidence, dilation or Elga’s bets.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is dilation a reason to reject imprecise credences?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes a dilation case.",
          "Weighs whether losing precision on learning is irrational or appropriate.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        So far the evidence has belonged to one agent. Yet some of the strongest evidence we get is that others, as careful
        as ourselves, have reached a different view.
      </p>
      <p>Next, peer disagreement revisited.</p>
    </>
  ),
};
