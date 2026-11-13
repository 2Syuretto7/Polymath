import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "We are immediately conscious of the moral law, as soon as we draw up maxims for ourselves.",
    kind: "premise",
    note: "Kant calls this consciousness a fact of reason. It is not derived from anything prior, such as an awareness of freedom.",
    objection: "Critics ask whether a fact of reason is an argument at all, or an appeal to intuition that the sceptic about morality need not share.",
  },
  {
    claim: "The moral law commands us unconditionally, whatever our inclinations.",
    kind: "premise",
    note: "The gallows example: a prince threatens a man with death unless he bears false witness against an honourable person. The man may not know what he would do, but he knows that he could refuse.",
  },
  {
    claim: "Ought implies can: if I ought to do something, I can do it.",
    kind: "premise",
    note: "The command would be empty if obeying it were impossible.",
  },
  {
    claim: "So I can act on the moral law against all my inclinations, even the love of life.",
    kind: "inference",
    note: "My will is not simply the product of my strongest desires.",
    objection: "A determinist may reply that I only feel I could refuse; the feeling of ability is no proof of it.",
  },
  {
    claim: "So I am free: the moral law is the ground by which I know my freedom.",
    kind: "conclusion",
    note: "Freedom is the ratio essendi of the moral law, the condition of its existence; the moral law is the ratio cognoscendi of freedom, the way we come to know it.",
    objection: "This gives practical, not theoretical, knowledge of freedom. Freedom is not proved as a fact about nature, which remains determined.",
  },
];

export const lesson: LessonContent = {
  id: "p8.5.3",
  minutes: 85,
  links: {
    revisits: ["p8.5.2", "p8.4.2", "p8.5.1"],
    foreshadows: ["p8.5.4", "p11.7.3", "p13.3.4"],
  },

  puzzle: (
    <>
      <p>
        The first Critique showed that freedom is not impossible, but could not show that it is real. The Groundwork tried to
        derive the moral law from freedom, and Kant was not satisfied. In the <em>Critique of Practical Reason</em>, 1788, he
        reversed the order: we do not know that we are free and then infer the moral law; we know the moral law and infer
        that we are free. Can a command tell us something about what we are?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Kant&rsquo;s argument from the moral law to freedom, and challenge the steps critics have questioned.
      </p>
      <ArgumentStepViz steps={STEPS} title="From the moral law to freedom" />
    </>
  ),

  theory: (
    <>
      <Definition title="the fact of reason">
        <p>
          Kant calls our consciousness of the moral law a <strong>fact of reason</strong>: it forces itself on us, and it
          cannot be reasoned out from anything prior. It is not an empirical fact, but the fact that pure reason is practical,
          that reason alone can determine the will. From it, freedom is known, not as an object of theoretical knowledge, but
          as a necessary condition of acting under the moral law.
        </p>
      </Definition>

      <Definition title="respect">
        <p>
          The one feeling the moral law produces a priori is <strong>respect</strong>. It humbles our self-conceit, our claim
          that our inclinations should rule, and at the same time it lifts us, since the law is our own. Respect is not the
          reason for acting morally, but the way the law, as an incentive, is felt by a sensible being. Kant writes that two
          things fill the mind with ever new admiration: the starry heavens above me and the moral law within me.
        </p>
      </Definition>

      <Example title="the gallows">
        <p>
          A person who claims they cannot resist a desire would certainly resist it if a gallows were set up outside the house,
          to hang them immediately afterwards. So love of life can outweigh desire. But ask them whether, threatened with death
          unless they bear false witness against an honest person, they could refuse. They may not dare to say what they would
          do, but they must admit that they could. They judge that they can do something because they are aware that they ought
          to, and so recognise a freedom that would otherwise have remained unknown to them.
        </p>
      </Example>

      <Remark title="the primacy of practical reason">
        <p>
          Kant holds that practical reason has primacy over speculative reason: where speculative reason can neither affirm nor
          deny, as with freedom, God and immortality, practical reason may assume what morality requires. Critics from Hegel to
          Bernard Williams have doubted that a fact of reason can carry so much weight. Contemporary libertarians about free
          will rarely follow Kant&rsquo;s route, but the thought that moral responsibility presupposes some kind of freedom
          remains central to the debate.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "fact",
      rung: "check",
      prompt: <p>What does Kant call our consciousness of the moral law?</p>,
      answer: { kind: "choice", options: ["An idea of reason", "A fact of reason", "A sensation", "A category"], correct: [1] },
    },
    {
      key: "feeling",
      rung: "check",
      prompt: <p>Which feeling does the moral law produce a priori?</p>,
      answer: { kind: "choice", options: ["Fear", "Love", "Respect", "Pleasure"], correct: [2] },
    },
    {
      key: "order",
      rung: "apply",
      prompt: <p>In the second Critique, how does Kant relate freedom and the moral law?</p>,
      answer: {
        kind: "choice",
        options: [
          "We prove freedom theoretically, then derive the moral law.",
          "We know the moral law first, and it is the ground by which we know our freedom.",
          "Freedom and morality are unrelated.",
          "The moral law is learnt from experience.",
        ],
        correct: [1],
      },
    },
    {
      key: "gallows",
      rung: "apply",
      prompt: <p>What does the gallows example show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That fear of death always wins.",
          "That a person recognises they could refuse to bear false witness even under threat of death, because they ought to.",
          "That lying is sometimes right.",
          "That punishment deters crime.",
        ],
        correct: [1],
      },
    },
    {
      key: "primacy",
      rung: "apply",
      prompt: <p>What does the primacy of practical reason allow?</p>,
      answer: {
        kind: "choice",
        options: [
          "Practical reason to overrule logic.",
          "Practical reason to assume, for the sake of morality, what speculative reason can neither prove nor disprove.",
          "Speculative reason to prove God.",
          "Ignoring morality when it is inconvenient.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, explain how the principle that ought implies can figures in Kant&rsquo;s argument for freedom.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says the moral law commands us unconditionally, even against our strongest inclinations.",
          "Says that since ought implies can, we can act on it against inclination, so our will is free. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "sceptic",
      rung: "stretch",
      prompt: <p>Does the fact of reason answer someone who doubts that there is any moral law? Give your view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Kant takes consciousness of the moral law as given, not derived.",
          "Considers whether this begs the question against a moral sceptic, or whether Kant aims only to articulate ordinary moral consciousness.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kant's idea of a fact of reason, how the moral law and the principle that ought implies can reveal our freedom, the role of respect, and the primacy of practical reason.",

  glimpse: (
    <p>
      The next lesson completes Kant&rsquo;s practical philosophy with the highest good and the postulates of God and
      immortality. The Metaphysics course examines libertarian theories of free will, and the Moral Philosophy course asks
      whether moral facts are real.
    </p>
  ),
};
