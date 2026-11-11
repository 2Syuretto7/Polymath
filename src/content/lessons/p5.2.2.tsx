import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["justice", "rights", "backward-looking reasons", "too demanding"];
const ITEMS: SortItem[] = [
  {
    text: "A sheriff could stop deadly riots by framing an innocent drifter for a crime, since the crowd will calm down once someone is hanged.",
    cat: "justice",
    why: "H. J. McCloskey's example. The utilitarian sum may favour framing; justice forbids punishing the innocent.",
  },
  {
    text: "Someone secretly films a neighbour undressing. The neighbour never finds out, and the films give pleasure to the viewers.",
    cat: "rights",
    why: "Rachels' example of a peeping Tom. No one is made unhappy, yet the neighbour's right to privacy has been violated.",
  },
  {
    text: "You promised to help a friend move house. On the day, you could do slightly more good by volunteering elsewhere instead.",
    cat: "backward-looking reasons",
    why: "Utilitarianism looks only forward, to consequences. But the fact that you promised, in the past, seems to be a reason in itself.",
  },
  {
    text: "Instead of buying a new phone, you could give the money to a charity that saves lives.",
    cat: "too demanding",
    why: "If every purchase must produce the most good, almost any spending on yourself is wrong. Utilitarianism seems to leave no room for a life of one's own.",
  },
  {
    text: "Doctors could test a risky drug on patients without asking them, because the results would save many future lives.",
    cat: "rights",
    why: "The patients' right to consent stands in the way, even when the overall benefit is large.",
  },
  {
    text: "You owe money to a wealthy lender, but it would do more good given to someone in need.",
    cat: "backward-looking reasons",
    why: "A debt is a past commitment. Its claim on you does not seem to depend on what will do most good now.",
  },
  {
    text: "You spend your evenings with your own children rather than volunteering for strangers who need help more.",
    cat: "too demanding",
    why: "Impartiality seems to clash with the special concern we owe family and friends. This could also be filed as an objection from personal relationships.",
  },
];

export const lesson: LessonContent = {
  id: "p5.2.2",
  minutes: 80,
  links: {
    revisits: ["p5.2.1", "p1.6.2", "p0.3.3"],
    foreshadows: ["p5.2.3", "p5.3.3", "p5.5.3"],
  },

  puzzle: (
    <>
      <p>
        Utilitarianism sounds hard to argue with: who could be against making people happier? Yet philosophers have built
        case after case in which doing what produces the most happiness seems plainly wrong: framing the innocent, breaking
        promises, spying unseen. Are these cases refutations of the theory, or only of our intuitions? And how is one to
        tell?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each case is a challenge to utilitarianism. Sort them by the kind of objection they raise. Some fit more than one
        category.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Sort each case by the objection it raises." />
    </>
  ),

  theory: (
    <>
      <Definition title="is happiness all that matters?">
        <p>
          Classical utilitarianism is hedonistic: only pleasure and the absence of pain are good in themselves. Robert
          Nozick asked us to imagine an experience machine that could give you any experiences you wanted, for life,
          while you floated in a tank. If pleasure were all that mattered, plugging in would be ideal; yet most people would
          refuse, because they want to actually do things and be a certain kind of person, not just have the experiences.
          Many modern utilitarians reply by measuring wellbeing as the satisfaction of preferences, or by a list of goods,
          rather than by pleasure alone.
        </p>
      </Definition>

      <Example title="justice, rights and the past">
        <p>
          Whether an act is right, for a utilitarian, depends only on its consequences. So if framing an innocent person
          would have the best consequences, it would be right; if secretly violating someone&rsquo;s privacy harms no one,
          it is not wrong; and the fact that you made a promise matters only for its effects. Critics take these as
          counterexamples: justice, rights and the obligations created by past actions are moral reasons in their own right.
        </p>
      </Example>

      <Example title="demands and integrity">
        <p>
          Utilitarianism requires us to count everyone equally, including ourselves and our families. It seems to demand
          that we give away nearly everything, and to forbid special care for our own children. Bernard Williams added the
          objection from integrity: utilitarianism treats a person as a channel for producing the best outcome, ignoring the
          projects and commitments that make their life their own. It makes us equally responsible for what others do as a
          result of our choices as for what we do ourselves.
        </p>
      </Example>

      <Remark title="three replies">
        <p>
          Defenders have three main strategies. First, deny the consequences: in the real world the framing would come out,
          the spy would be found, broken promises would erode trust, so utilitarianism does not recommend these acts. Second,
          revise the theory, judging rules instead of single acts, which is the topic of the next lesson. Third, bite the
          bullet: J. J. C. Smart argued that our intuitions are partly the residue of upbringing and prejudice, and that
          where they conflict with the principle of utility, it is the intuitions that should give way.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "machine",
      rung: "check",
      prompt: <p>Nozick&rsquo;s experience machine is aimed chiefly at which part of classical utilitarianism?</p>,
      answer: {
        kind: "choice",
        options: ["its impartiality", "its hedonism, the view that only pleasure matters", "its focus on consequences", "its view of animals"],
        correct: [1],
      },
    },
    {
      key: "sheriff",
      rung: "check",
      prompt: <p>The case of the sheriff who frames an innocent person to stop a riot is an objection from</p>,
      answer: { kind: "choice", options: ["justice", "demandingness", "hedonism", "integrity"], correct: [0] },
    },
    {
      key: "reply",
      rung: "apply",
      prompt: (
        <p>
          A utilitarian replies to the sheriff case: in reality the truth would come out, and trust in the law would
          collapse. Which strategy is this?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Denying that the act really would have the best consequences.",
          "Switching to rule utilitarianism.",
          "Biting the bullet.",
          "Abandoning utilitarianism.",
        ],
        correct: [0],
      },
    },
    {
      key: "backward",
      rung: "apply",
      prompt: <p>Which of these is a backward-looking reason?</p>,
      answer: {
        kind: "choice",
        options: [
          "Doing this will make many people happy.",
          "I promised I would do it.",
          "Doing this will prevent suffering.",
          "Doing this will set a good example.",
        ],
        correct: [1],
      },
    },
    {
      key: "smart",
      rung: "apply",
      prompt: <p>What is the bullet-biting reply, as Smart defended it?</p>,
      answer: {
        kind: "choice",
        options: [
          "Our intuitions are reliable, so utilitarianism must be false.",
          "Where intuitions conflict with the principle of utility, the intuitions should give way.",
          "Utilitarianism only applies to governments.",
          "Rules matter more than consequences.",
        ],
        correct: [1],
      },
    },
    {
      key: "experience",
      rung: "prove",
      prompt: (
        <p>
          Set out the experience machine argument against hedonism as premises and a conclusion. Then give one reply a
          hedonist could make, and assess it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States premises such as: if pleasure were the only good, a life in the machine would be at least as good as any; but most people would rightly refuse the machine.",
          "Concludes that something besides pleasure matters to how well a life goes.",
          "Gives a reply, such as status quo bias, distrust of the machine, or that people's refusal is a mistake, and assesses it. Any reasoned answer earns full credit.",
        ],
      },
    },
    {
      key: "bullet",
      rung: "stretch",
      prompt: (
        <p>
          When a theory conflicts with a strong intuition about a case, should we give up the theory or the intuition? Use
          one of the cases above, and consider what could make an intuition more or less trustworthy.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Describes the conflict in a specific case.",
          "Considers what makes intuitions trustworthy or not, such as bias, upbringing, wide agreement, or stability under reflection, possibly mentioning reflective equilibrium.",
          "Reaches a reasoned position. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the main objections to utilitarianism, from the experience machine, justice, rights, backward-looking reasons, demandingness and integrity, and the three ways utilitarians reply.",

  glimpse: (
    <p>
      The next lesson considers rule utilitarianism, the most important revision of the theory. The chapter on Kant takes
      up rights, and the last chapter of this course asks how much we owe to the world&rsquo;s poor.
    </p>
  ),
};
