import { M, MD } from "@/components/Math";
import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { PollMarginViz } from "@/components/viz/PollMarginViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m9.7.3",
  minutes: 85,
  links: {
    revisits: ["m9.7.2", "m9.7.1", "m9.4.2"],
    foreshadows: ["m18.1.2", "m18.4.1", "m9.8.4"],
  },

  puzzle: (
    <>
      <p>
        A national poll asks about 1,500 people out of hundreds of millions of voters and reports a margin of error of about 3
        points. How can so few people tell us so much? And why is the margin almost the same whether the country has ten
        million voters or a billion?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Run many polls of the same size, and watch how often their intervals catch the true proportion.</p>
      <PollMarginViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the margin of error of a proportion">
        <p>
          If <M>{"\\hat p"}</M> is the proportion of yes answers in a random sample of <M>{"n"}</M>, then{" "}
          <M>{"E(\\hat p) = p"}</M> and <M>{"\\operatorname{SD}(\\hat p) = \\sqrt{p(1-p)/n}"}</M>. By the central limit theorem,
          with probability about 95%,
        </p>
        <MD>{"|\\hat p - p| \\le 1.96\\sqrt{\\frac{p(1-p)}{n}} \\le \\frac{0.98}{\\sqrt n}."}</MD>
        <p>So <M>{"\\hat p \\pm 1.96\\sqrt{\\hat p(1-\\hat p)/n}"}</M> is an approximate 95% confidence interval for <M>{"p"}</M>.</p>
      </Theorem>

      <Example title="the size of the population does not matter">
        <p>
          The formula involves <M>{"n"}</M> but not the population size, provided the sample is a small fraction of it. With{" "}
          <M>{"n = 1{,}500"}</M>, the margin is at most <M>{"0.98/\\sqrt{1500} \\approx 0.025"}</M>, about 2.5 points, for a
          city or a country. Halving it needs four times as many people.
        </p>
      </Example>

      <Example title="quality control">
        <p>
          A machine fills packets with mean 500 g and standard deviation 4 g. The mean weight of a sample of 16 packets has
          standard deviation 1 g, so a sample mean below 498 g, two standard deviations low, happens by chance only about 2.3%
          of the time; seeing one is a signal to check the machine.
        </p>
      </Example>

      <Remark title="what the margin leaves out">
        <p>
          The margin of error measures only random sampling error. It ignores bias from who is reached, who refuses to answer,
          and how questions are worded, which are often larger. A 95% interval is a statement about the method: about 95% of
          intervals made this way contain <M>{"p"}</M>, not that this particular interval has a 95% chance of doing so.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sd",
      rung: "check",
      prompt: <p>In a random sample of 100 from a population where p = 0.5, what is the standard deviation of the sample proportion?</p>,
      answer: { kind: "numeric", value: 0.05, tolerance: 0.0005 },
    },
    {
      key: "quad",
      rung: "check",
      prompt: <p>To halve a poll&rsquo;s margin of error, the sample size must be multiplied by:</p>,
      answer: { kind: "choice", options: ["2", "4", "√2", "It depends on the population size"], correct: [1] },
    },
    {
      key: "moe",
      rung: "apply",
      prompt: <p>A poll of 900 people finds 40% support. What is the 95% margin of error, in percentage points, to one decimal place?</p>,
      answer: { kind: "numeric", value: 3.2, tolerance: 0.1 },
    },
    {
      key: "n",
      rung: "apply",
      prompt: <p>Using the bound 0.98/√n, how many people are needed for a margin of error of at most 2 points?</p>,
      answer: { kind: "numeric", value: 2401, tolerance: 1 },
    },
    {
      key: "qc",
      rung: "apply",
      prompt: <p>Packets have mean 500 g and standard deviation 4 g. What is the standard deviation of the mean of 64 packets, in grams?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that p(1 − p) ≤ 1/4 for 0 ≤ p ≤ 1, and deduce that the 95% margin of error is at most 0.98/√n.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows p(1 − p) ≤ 1/4, for example by writing 1/4 − p(1 − p) = (p − 1/2)².",
          "Concludes √(p(1 − p)/n) ≤ 1/(2√n).",
          "Multiplies by 1.96 to get 0.98/√n.",
        ],
      },
    },
    {
      key: "bias",
      rung: "stretch",
      prompt: <p>An online poll of 50,000 readers of a newspaper website has a tiny margin of error. Should you trust it more than a random telephone poll of 1,500? Explain.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the margin of error assumes random sampling.",
          "Explains self-selection bias in the online poll, which more people does not fix.",
          "Reaches a sensible conclusion. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the central limit theorem gives a poll's margin of error, why the population size hardly matters, how many people are needed for a given margin, a quality control example, and what the margin of error leaves out.",

  glimpse: (
    <p>
      The last chapter of the course studies Markov chains, where draws are no longer independent. Statistics builds on these
      ideas with sampling distributions and hypothesis tests.
    </p>
  ),
};
