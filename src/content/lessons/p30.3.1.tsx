import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { HyperstateViz } from "@/components/viz/HyperstateViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p30.3.1",
  minutes: 90,
  links: {
    revisits: ["p13.3.2", "p13.3.1", "p30.1.1"],
    foreshadows: ["p30.3.2", "p30.3.3", "p30.4.2"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;Lying is wrong. If lying is wrong, getting your little brother to lie is wrong. So getting your little
        brother to lie is wrong.&rsquo; This is plainly valid. But if &lsquo;lying is wrong&rsquo; just expresses
        disapproval of lying, what is it expressing inside the &lsquo;if&rsquo;, where the speaker need not disapprove of
        anything?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Take a stance on each premise and the conclusion, and see whether any complete plan fits.</p>
      <HyperstateViz />
    </>
  ),

  theory: (
    <>
      <Definition title="expressivism">
        <p>
          <strong>Expressivism</strong> holds that a moral sentence expresses a non-cognitive state, such as disapproval or
          a plan, rather than a belief that represents a moral fact. It descends from the emotivism of Ayer and Stevenson
          and is developed by Simon Blackburn and Allan Gibbard. Its appeal is that it explains why moral judgements
          motivate, without positing queer facts.
        </p>
      </Definition>

      <Definition title="the Frege-Geach problem">
        <p>
          Peter Geach, crediting Frege, observed in 1965 that a sentence can occur unasserted, as in the antecedent of a
          conditional, while keeping its meaning. In the argument above, &lsquo;lying is wrong&rsquo; must mean the same in
          both premises, or modus ponens would equivocate. Expressivism must give a meaning to moral sentences that works in
          embedded contexts, and explain why the argument is valid.
        </p>
      </Definition>

      <Example title="replies">
        <p>
          Blackburn&rsquo;s <strong>quasi-realism</strong> takes the conditional to express a higher-order attitude:
          disapproval of combining disapproval of lying with failure to disapprove of getting one&rsquo;s brother to lie.
          Accepting the premises and rejecting the conclusion is then a clash of attitudes. Gibbard, in{" "}
          <em>Thinking How to Live</em> (2003), models judgements as ruling out hyperplans, complete decisions for every
          circumstance, so that validity is the impossibility of a coherent state that accepts the premises and rejects the
          conclusion.
        </p>
      </Example>

      <Remark title="the negation problem">
        <p>
          Mark Schroeder, in <em>Being For</em> (2008), pressed a sharper version. &lsquo;Jon thinks murder is not
          wrong&rsquo; and &lsquo;Jon thinks not murdering is wrong&rsquo; are different, so the expressivist needs
          different attitudes for each, and also needs disagreement between thinking murder wrong and thinking it not wrong
          to be a clash in attitude, not in belief. Schroeder argued that the only workable solution makes expressivism
          mirror the structure of ordinary belief, raising the question of what has been gained.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "expr",
      rung: "check",
      prompt: <p>What does expressivism claim about moral sentences?</p>,
      answer: { kind: "choice", options: ["They express non-cognitive states such as attitudes or plans", "They describe natural facts", "They describe non-natural facts", "They are meaningless"], correct: [0] },
    },
    {
      key: "fg",
      rung: "check",
      prompt: <p>What is the Frege-Geach problem?</p>,
      answer: { kind: "choice", options: ["Explaining the meaning of moral sentences in unasserted contexts, such as conditionals, and the validity of arguments using them", "Explaining why moral claims motivate", "Explaining moral disagreement across cultures", "Explaining how we know moral facts"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, accept P1 and P2 and take no view on C. How many hyperstates are left open?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "qr",
      rung: "apply",
      prompt: <p>How does Blackburn&rsquo;s quasi-realism treat the conditional premise?</p>,
      answer: { kind: "choice", options: ["As a higher-order attitude against combining certain attitudes", "As a report of a natural fact", "As meaningless", "As an imperative"], correct: [0] },
    },
    {
      key: "neg",
      rung: "apply",
      prompt: <p>Which pair does Schroeder&rsquo;s negation problem ask the expressivist to distinguish?</p>,
      answer: { kind: "choice", options: ["Thinking murder is not wrong, and thinking not murdering is wrong", "Thinking murder is wrong, and saying so", "Believing and knowing", "Wanting and intending"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Can expressivism solve the Frege-Geach problem? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the problem using an embedded moral sentence.",
          "Considers a reply such as quasi-realism or Gibbard’s hyperplans, or an objection such as the negation problem.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If expressivism ends up mirroring the logic of belief, is it still different from realism?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how an expressivist semantics can reproduce logical structure.",
          "Considers what difference remains, such as in metaphysics or motivation.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If expressivism struggles, perhaps moral sentences state facts after all. Robust realists accept the consequence
        that there are irreducibly normative truths, and set out to defend them.
      </p>
      <p>Next, robust realism.</p>
    </>
  ),
};
