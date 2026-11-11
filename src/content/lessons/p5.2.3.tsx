import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ActRuleViz } from "@/components/viz/ActRuleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p5.2.3",
  minutes: 80,
  links: {
    revisits: ["p5.2.2", "p5.2.1", "p5.1.4"],
    foreshadows: ["p5.3.1", "p5.3.4", "p13.1.1"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;What if everyone did that?&rdquo; Parents ask it of children who drop litter, and it seems a good question.
        One wrapper does no harm; a town where everyone drops wrappers is filthy. Perhaps morality is not about the
        consequences of each act, but about the consequences of everyone following a rule. Would that save utilitarianism
        from its counterexamples? Or would it turn out, on inspection, to be the same theory in disguise?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a case and compare what act utilitarianism and rule utilitarianism say about it. Watch for the case where
        the two come back together.
      </p>
      <ActRuleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="act and rule utilitarianism">
        <p>
          <strong>Act utilitarianism</strong>: an act is right if and only if no alternative act would produce more
          wellbeing. <strong>Rule utilitarianism</strong>: an act is right if and only if it is permitted by the set of rules
          whose general acceptance would produce the most wellbeing. The rule utilitarian evaluates rules by their
          consequences, and acts by the rules.
        </p>
      </Definition>

      <Example title="why it helps">
        <p>
          Rules against punishing the innocent, against breaking promises and against violating privacy have very good
          consequences when generally accepted: people can trust the courts, rely on one another and live without fear of
          being watched. So rule utilitarianism forbids framing the innocent, even in the rare case where a single framing
          would do more good. It seems to give the verdicts of common-sense morality while keeping the utilitarian idea
          that morality exists to make lives go well.
        </p>
      </Example>

      <Definition title="Hooker&rsquo;s version">
        <p>
          Brad Hooker, in <em>Ideal Code, Real World</em> (2000), defends the most developed version. The right rules are
          those whose internalisation by the overwhelming majority of each new generation would have the best expected
          consequences, counting the costs of teaching them. Since rules that are too complex or too demanding are costly to
          teach, the ideal code will be fairly simple, with rules like do not harm the innocent, keep your promises, tell
          the truth, and help those in need, plus a rule to prevent disaster.
        </p>
      </Definition>

      <Remark title="two objections">
        <p>
          The first is collapse. If a rule can be improved by adding an exception for any case where breaking it has better
          results, the ideal rule becomes: do what has the best consequences, and rule utilitarianism says the same as act
          utilitarianism. Defenders reply that such rules are too complex to teach, which is why Hooker counts the cost of
          internalisation. The second is incoherence. If the reason for following rules is to produce good results, why
          follow a rule when, in this case, you can see that breaking it would produce better results? Smart called this
          rule worship. R. M. Hare proposed a two-level view instead: in everyday life we should follow simple, firmly held
          rules, but when we can think critically and calmly, the act-utilitarian question is the one that justifies the
          rules.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How does rule utilitarianism judge whether an act is right?</p>,
      answer: {
        kind: "choice",
        options: [
          "By the consequences of that act alone.",
          "By whether it is permitted by the rules whose general acceptance would have the best consequences.",
          "By whether God commands it.",
          "By whether the agent's motives are good.",
        ],
        correct: [1],
      },
    },
    {
      key: "attract",
      rung: "check",
      prompt: <p>What is the main attraction of rule utilitarianism over act utilitarianism?</p>,
      answer: {
        kind: "choice",
        options: [
          "It ignores consequences.",
          "It seems to give verdicts closer to common-sense morality, for example on punishing the innocent.",
          "It is simpler to apply.",
          "It makes morality relative to culture.",
        ],
        correct: [1],
      },
    },
    {
      key: "promise",
      rung: "apply",
      prompt: (
        <p>
          In the deathbed promise case, which theory says you should keep the promise to give the money to the rich nephew?
        </p>
      ),
      answer: { kind: "choice", options: ["act utilitarianism", "rule utilitarianism", "both", "neither"], correct: [1] },
    },
    {
      key: "collapse",
      rung: "apply",
      prompt: <p>What is the collapse objection to rule utilitarianism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Rules always collapse in practice.",
          "Once rules are given every useful exception, they recommend exactly what act utilitarianism does.",
          "Rule utilitarianism collapses into egoism.",
          "Nobody can remember the rules.",
        ],
        correct: [1],
      },
    },
    {
      key: "hare",
      rung: "apply",
      prompt: <p>On Hare&rsquo;s two-level view, when should we reason as act utilitarians?</p>,
      answer: {
        kind: "choice",
        options: [
          "Always, in every decision.",
          "Never.",
          "When we can think critically and calmly, for example in deciding which rules to live by.",
          "Only when the law is silent.",
        ],
        correct: [2],
      },
    },
    {
      key: "worship",
      rung: "prove",
      prompt: (
        <p>
          Set out Smart&rsquo;s rule worship objection to rule utilitarianism as an argument. Then give the best reply you
          can on behalf of the rule utilitarian, and assess it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the argument: the rule utilitarian values rules only for their consequences; in some case breaking the rule has better consequences; so insisting on the rule there is irrational.",
          "Gives a reply, such as Hooker's view that rule utilitarianism is not founded on maximising but on impartial justification, or that agents cannot reliably tell when to break rules.",
          "Assesses the reply. Any reasoned assessment earns full credit.",
        ],
      },
    },
    {
      key: "everyone",
      rung: "stretch",
      prompt: (
        <p>
          &ldquo;What if everyone did that?&rdquo; seems a good test for littering, but a bad one for, say, becoming a
          doctor: if everyone did that, there would be no farmers. How should a rule utilitarian formulate the test so that
          it gives sensible answers?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains why the simple test gives the wrong answer for becoming a doctor.",
          "Suggests a better formulation, for example evaluating general acceptance of rules rather than everyone doing the same act, or describing acts at the right level of generality.",
          "Considers whether the refined test brings back the collapse problem. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between act and rule utilitarianism, why rule utilitarianism seems to handle the counterexamples better, Hooker's version, and the objections from collapse and rule worship, with Hare's two-level view.",

  glimpse: (
    <p>
      The next chapter turns to Kant, for whom the test is not what would happen if everyone followed a rule, but whether
      everyone could will it. Contractarianism and modern consequentialism return to these questions.
    </p>
  ),
};
