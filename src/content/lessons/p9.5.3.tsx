import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "The only proof that a thing is visible is that people actually see it; the only proof that a thing is desirable is that people actually desire it.",
    kind: "premise",
    note: "Mill admits that questions of ultimate ends cannot be proved in the ordinary sense. He offers considerations that may move the intellect.",
    objection: "G. E. Moore: visible means able to be seen, but desirable means worth desiring. What people do desire does not settle what they ought to desire.",
  },
  {
    claim: "Each person, so far as they believe it attainable, desires their own happiness.",
    kind: "premise",
    note: "A psychological claim that Mill takes to be obvious.",
  },
  {
    claim: "So each person's happiness is a good to that person.",
    kind: "inference",
    note: "From the first premise: what is desired is evidence of what is desirable.",
  },
  {
    claim: "So the general happiness is a good to the aggregate of all persons.",
    kind: "inference",
    note: "In a letter Mill explained that he meant only this: A's happiness is a good, B's is a good, and so the sum of them is a good.",
    objection: "Critics see a fallacy of composition. And even read Mill's way, it shows the general happiness is good, not that each person ought to pursue it.",
  },
  {
    claim: "People also desire virtue, money and fame for their own sakes, but these have become parts of their happiness.",
    kind: "premise",
    note: "What began as a means comes to be desired as an ingredient of the end, as a miser loves money itself.",
    objection: "If anything desired for itself counts as part of happiness, the claim that only happiness is desired becomes true by definition.",
  },
  {
    claim: "So happiness is the only thing desirable as an end, and the promotion of it is the test of all conduct.",
    kind: "conclusion",
    note: "The principle of utility, defended as well as Mill thinks a first principle can be.",
  },
];

export const lesson: LessonContent = {
  id: "p9.5.3",
  minutes: 85,
  links: {
    revisits: ["p9.5.2", "p5.2.1", "p5.2.2"],
    foreshadows: ["p9.5.4", "p13.1.1", "p13.2.1"],
  },

  puzzle: (
    <>
      <p>
        Bentham said that, quantity of pleasure being equal, pushpin is as good as poetry. Critics called utilitarianism a
        doctrine worthy only of swine. Mill, raised as Bentham&rsquo;s heir, suffered a breakdown at twenty and found his way
        out through Wordsworth&rsquo;s poetry. His Utilitarianism of 1861 tries to keep the principle and answer the
        critics. Can a hedonist say that some pleasures are better than others?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Mill&rsquo;s famous proof of the principle of utility, and challenge the steps that critics attack.</p>
      <ArgumentStepViz steps={STEPS} title="Mill's proof of the principle of utility" />
    </>
  ),

  theory: (
    <>
      <Definition title="the greatest happiness principle">
        <p>
          Actions are right in proportion as they tend to promote happiness, wrong as they tend to produce the reverse.
          Happiness means pleasure and the absence of pain. The standard is not the agent&rsquo;s own happiness but that of
          everyone affected, each counted equally.
        </p>
      </Definition>

      <Definition title="higher and lower pleasures">
        <p>
          Pleasures differ in quality as well as quantity. Of two pleasures, the higher is the one preferred by nearly all who
          have competent experience of both. Such judges prefer the pleasures of the intellect, feeling, imagination and
          moral sentiment. &ldquo;It is better to be a human being dissatisfied than a pig satisfied; better to be Socrates
          dissatisfied than a fool satisfied.&rdquo;
        </p>
      </Definition>

      <Example title="no time to calculate">
        <p>
          Objection: there is no time before acting to calculate the effects on general happiness. Mill replies that mankind
          has been learning the tendencies of actions through all of history. Rules such as &ldquo;do not lie&rdquo; are
          secondary principles that carry this experience, as sailors use the Nautical Almanac rather than calculating it at
          sea. We appeal directly to utility only when secondary principles conflict.
        </p>
      </Example>

      <Example title="justice">
        <p>
          The strongest objection is that justice seems independent of utility. Mill argues that the sentiment of justice is
          the natural desire to retaliate, moralised by social sympathy, and that justice names the most important class of
          social utilities: the rules protecting security, which everyone needs and which we feel entitled to demand.
        </p>
      </Example>

      <Remark title="the cost of refinement">
        <p>
          Critics ask whether quality of pleasure is still pleasure. If one pleasure is better than a larger amount of
          another, something other than pleasure seems to be making the difference, and Mill drifts towards a view on which
          dignity or the development of one&rsquo;s faculties also matters. Whether his secondary principles make him an
          early rule utilitarian is still debated.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "quality",
      rung: "check",
      prompt: <p>What is Mill&rsquo;s main departure from Bentham?</p>,
      answer: {
        kind: "choice",
        options: [
          "He rejects the principle of utility.",
          "He holds that pleasures differ in quality as well as quantity.",
          "He counts only his own happiness.",
          "He denies that pain is bad.",
        ],
        correct: [1],
      },
    },
    {
      key: "judges",
      rung: "check",
      prompt: <p>How does Mill decide which of two pleasures is higher?</p>,
      answer: {
        kind: "choice",
        options: [
          "By measuring their intensity.",
          "By the preference of nearly all who have competent experience of both.",
          "By a vote of the whole population.",
          "By what the law permits.",
        ],
        correct: [1],
      },
    },
    {
      key: "moore",
      rung: "apply",
      prompt: <p>What is Moore&rsquo;s objection to the first step of the proof?</p>,
      answer: {
        kind: "choice",
        options: [
          "That nobody desires happiness.",
          "That desirable means worth desiring, not able to be desired, so the analogy with visible fails.",
          "That visibility cannot be proved.",
          "That Mill confuses pleasure with pain.",
        ],
        correct: [1],
      },
    },
    {
      key: "almanac",
      rung: "apply",
      prompt: <p>What role do secondary principles such as &ldquo;do not lie&rdquo; play for Mill?</p>,
      answer: {
        kind: "choice",
        options: [
          "They override utility whenever they apply.",
          "They store humanity's experience of what promotes happiness, so we need not calculate every time.",
          "They are divine commands.",
          "They apply only to politicians.",
        ],
        correct: [1],
      },
    },
    {
      key: "socrates",
      rung: "apply",
      prompt: <p>Which claim does Mill accept?</p>,
      answer: {
        kind: "choice",
        options: [
          "Pushpin is as good as poetry.",
          "It is better to be Socrates dissatisfied than a fool satisfied.",
          "A pig's satisfaction is the highest good.",
          "Only the quantity of pleasure matters.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can Mill hold both that pleasure is the only good and that some pleasures are higher in quality? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the tension: if quality outweighs quantity, something besides pleasure seems to make the difference.",
          "Considers a defence, such as that quality is a feature of the pleasure itself.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "judges2",
      rung: "stretch",
      prompt: <p>Suppose most people who have tried both prefer watching football to reading poetry. Does Mill&rsquo;s test then rank football higher?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the competent judges test as stated.",
          "Considers whether Mill would question whether those judges are competent, or would accept the result.",
          "Discusses what this shows about the test. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Mill's greatest happiness principle, his distinction between higher and lower pleasures, his proof of utility and Moore's objection, his reply about secondary principles, and his account of justice.",

  glimpse: (
    <p>
      The next lesson turns to Henry Sidgwick, who tested utilitarianism against egoism and common-sense morality with new
      rigour. Modern ethics develops consequentialism further and asks again what makes a life go well.
    </p>
  ),
};
