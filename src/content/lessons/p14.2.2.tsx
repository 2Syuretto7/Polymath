import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DifferenceCurveViz } from "@/components/viz/DifferenceCurveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p14.2.2",
  minutes: 80,
  links: {
    revisits: ["p14.2.1", "p5.2.1", "p13.1.1"],
    foreshadows: ["p14.2.3", "p14.2.4", "p14.5.1"],
  },

  puzzle: (
    <>
      <p>
        Suppose doctors are paid more than shop assistants, and as a result more talented people train as doctors, and
        everyone, shop assistants included, gets better health care. Is that inequality unjust? Rawls&rsquo;s answer is: not if
        it makes the least advantaged better off than they would otherwise be.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Slide along the curve of possible distributions and find the one the difference principle selects.</p>
      <DifferenceCurveViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the difference principle">
        <p>
          Social and economic inequalities are just only if they work to the greatest benefit of the least advantaged members
          of society. The least advantaged are identified by their share of primary goods: rights, liberties, opportunities,
          income and wealth, and the social bases of self-respect.
        </p>
      </Definition>

      <Example title="between equality and efficiency">
        <p>
          The principle permits inequality, unlike strict equality, when incentives make everyone better off. But unlike
          utilitarianism, it never trades the position of the worst off for gains to others, however large. In the curve,
          strict equality sits at the left end, utilitarianism at the right end, and the difference principle at the peak.
        </p>
      </Example>

      <Remark title="democratic equality">
        <p>
          Rawls rejected what he called natural liberty, where careers are open to talents but natural and social luck shape
          outcomes. Even fair equality of opportunity leaves the distribution of natural talents to luck. The difference
          principle treats that distribution as a common asset, whose benefits are to be shared.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          G. A. Cohen argued that the incentive argument fails if the talented could choose to work hard without extra pay: in
          a society whose members accepted the principle in daily life, the inequalities would not be needed. Others object that
          the principle ignores responsibility, treating the idle and the industrious poor alike, and Nozick objected that it
          treats talents as if they were not their owners&rsquo; own.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When does the difference principle allow inequalities?</p>,
      answer: {
        kind: "choice",
        options: [
          "Only when they work to the greatest benefit of the least advantaged.",
          "Whenever they increase total wealth.",
          "Never.",
          "Whenever the talented earn them.",
        ],
        correct: [0],
      },
    },
    {
      key: "primary",
      rung: "check",
      prompt: <p>Which of these is a Rawlsian primary good?</p>,
      answer: { kind: "choice", options: ["Income and wealth", "Happiness", "Fame", "A particular religion"], correct: [0] },
    },
    {
      key: "peak",
      rung: "apply",
      prompt: <p>In the visualisation, what happens to the least advantaged beyond the peak?</p>,
      answer: {
        kind: "choice",
        options: [
          "Their income falls while total income keeps rising.",
          "Their income keeps rising.",
          "Everyone becomes equal.",
          "Nothing changes.",
        ],
        correct: [0],
      },
    },
    {
      key: "util",
      rung: "apply",
      prompt: <p>How does the difference principle differ from utilitarianism?</p>,
      answer: {
        kind: "choice",
        options: [
          "It never sacrifices the worst off for larger gains to others, whereas utilitarianism may.",
          "It counts only the welfare of the rich.",
          "They always agree.",
          "It ignores income.",
        ],
        correct: [0],
      },
    },
    {
      key: "cohen",
      rung: "apply",
      prompt: <p>What is Cohen&rsquo;s objection to the incentive argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "If the talented accepted the principle, they would work hard without extra pay, so the inequality would not be necessary.",
          "That incentives never work.",
          "That the least advantaged do not exist.",
          "That talents are unimportant.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is it unjust for some people to earn far more than others if the worst off gain from it? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the difference principle and the incentive argument for inequality.",
          "Considers an objection, such as Cohen’s or one about responsibility.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should the difference principle apply between countries as well as within them? Rawls himself said no.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the global extension and Rawls’s reason for resisting it, such as the role of a shared basic structure.",
          "Considers an argument for extending it, such as the arbitrariness of birthplace.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference principle, how it sits between strict equality and utilitarianism, why Rawls treated natural talents as a common asset, and Cohen's objection to incentives.",

  glimpse: (
    <p>
      The next lesson presents Nozick&rsquo;s entitlement theory, which rejects patterned principles like this one. Luck
      egalitarians add responsibility, and Marxist critics question whether incentives are needed at all.
    </p>
  ),
};
