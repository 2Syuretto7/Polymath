import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["consequences", "duty", "virtue"];
const ITEMS: SortItem[] = [
  {
    text: "Visit your friend in hospital, because the visit will cheer them up more than anything else you could do this evening.",
    cat: "consequences",
    why: "The reason is the good the act produces, compared with the alternatives. This is how a utilitarian reasons.",
  },
  {
    text: "Visit your friend in hospital, because you promised you would.",
    cat: "duty",
    why: "A promise creates an obligation whatever the outcome. The reason points to a rule or a duty, as Kant or Ross would.",
  },
  {
    text: "Visit your friend in hospital, because that is what a good friend does.",
    cat: "virtue",
    why: "The reason points to a trait of character, friendship, and to what a person who has it would characteristically do.",
  },
  {
    text: "Tell the truth, because a lie, if it became a universal law, would undermine the practice of trust.",
    cat: "duty",
    why: "This is the universal law test from the categorical imperative.",
  },
  {
    text: "Tell the truth, because honest people do not deceive their friends, even when it would be easier.",
    cat: "virtue",
    why: "Honesty is offered as a trait, and the act is right because it expresses it. Hursthouse calls such guidance a v-rule: do what is honest.",
  },
  {
    text: "Give to the flood relief fund, because your money will save more lives there than anywhere else.",
    cat: "consequences",
    why: "The reason is the expected outcome, measured and compared.",
  },
  {
    text: "Give to the flood relief fund, because hoarding while others suffer would be callous and mean.",
    cat: "virtue",
    why: "The reason names vices to avoid, callousness and meanness. Virtue ethics guides by vice terms as well as virtue terms.",
  },
];

export const lesson: LessonContent = {
  id: "p5.4.1",
  minutes: 80,
  links: {
    revisits: ["p4.6.2", "p4.6.1", "p5.3.1"],
    foreshadows: ["p5.4.2", "p5.4.3", "p5.5.1"],
  },

  puzzle: (
    <>
      <p>
        In 1958 Elizabeth Anscombe told her fellow philosophers to stop doing moral philosophy until they had an adequate
        philosophy of psychology. Talk of moral obligation, she argued, made sense only against a background of divine law
        that most of them no longer believed in. Better to go back to Aristotle and ask what it is to be just, honest or
        kind. Out of that challenge grew a third great theory, beside utilitarianism and Kant. But can a theory about
        character tell you what to do?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each line gives a reason for the same kind of act. Sort the reasons by the kind of theory that would give them.
        Notice that the three theories often agree on what to do and differ on why.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Sort each reason by the theory it comes from." />
    </>
  ),

  theory: (
    <>
      <Definition title="virtue ethics">
        <p>
          <strong>Virtue ethics</strong> takes character as its central concept. Its first question is not which act is
          right but what kind of person one should be. A <strong>virtue</strong> is a stable trait of character that a
          human being needs in order to flourish, or live well: Aristotle&rsquo;s <em>eudaimonia</em>. Rosalind Hursthouse
          adds that a virtue is not just a habit of acting but a way of seeing, feeling and choosing: the honest person
          not only tells the truth but is uncomfortable with deceit and notices when candour is called for.
        </p>
      </Definition>

      <Definition title="right action">
        <p>
          Hursthouse proposes a criterion that parallels the other theories: an action is right if and only if it is what
          a virtuous agent would characteristically do in the circumstances. Where utilitarianism says &ldquo;look to the
          consequences&rdquo; and Kant &ldquo;look to the maxim&rdquo;, virtue ethics says &ldquo;look to what the
          virtuous person would do&rdquo;. And it does offer rules: every virtue term gives one, such as do what is
          honest or kind, and every vice term another, such as do not do what is cruel or cowardly. She calls these{" "}
          <strong>v-rules</strong>.
        </p>
      </Definition>

      <Example title="practical wisdom">
        <p>
          The virtues need <em>phronesis</em>, practical wisdom: the ability to see what matters in a particular situation
          and how to act on it. Honesty without it can be tactless, and kindness without it can be indulgent. Aristotle
          thought practical wisdom came from experience, which is why, he said, the young can be brilliant
          mathematicians but are rarely wise. No rulebook can replace it, because situations differ in ways no rulebook
          anticipates.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          The <strong>application objection</strong>: if I am not virtuous, how do I know what the virtuous person would
          do? Hursthouse replies that the v-rules give real guidance, and that we can ask the advice of people we admire.
          The <strong>conflict objection</strong>: honesty and kindness may point in different directions. But every
          theory faces conflicts, between duties or between goods, and practical wisdom may show that one is only
          apparent. The <strong>situationist objection</strong>, from social psychology, claims that behaviour depends
          far more on circumstances than on character, so that stable virtues may be rare. Defenders reply that virtue was
          always meant to be rare and hard won.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "central",
      rung: "check",
      prompt: <p>What is the central concept of virtue ethics?</p>,
      answer: {
        kind: "choice",
        options: ["The consequences of acts", "Duty and law", "Character, and the traits needed to live well", "Contracts between agents"],
        correct: [2],
      },
    },
    {
      key: "criterion",
      rung: "check",
      prompt: <p>On Hursthouse&rsquo;s account, when is an action right?</p>,
      answer: {
        kind: "choice",
        options: [
          "When it maximises happiness.",
          "When it is what a virtuous agent would characteristically do in the circumstances.",
          "When its maxim can be universalised.",
          "When the agent feels good about it.",
        ],
        correct: [1],
      },
    },
    {
      key: "vrule",
      rung: "apply",
      prompt: <p>Which of these is a v-rule? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Do what is generous.", "Maximise expected welfare.", "Do not do what is cruel.", "Act only on universalisable maxims."],
        correct: [0, 2],
      },
    },
    {
      key: "phronesis",
      rung: "apply",
      prompt: (
        <p>
          A student tells a grieving friend, accurately, that their late father&rsquo;s business was badly run. Which
          missing quality does virtue ethics point to?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["Honesty", "Practical wisdom, which would have shown when and how candour helps", "Courage", "Temperance"],
        correct: [1],
      },
    },
    {
      key: "situ",
      rung: "apply",
      prompt: <p>What does the situationist objection claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "That virtues conflict with one another.",
          "That behaviour depends much more on circumstances than on stable traits of character.",
          "That virtue ethics gives no rules at all.",
          "That only consequences matter.",
        ],
        correct: [1],
      },
    },
    {
      key: "apply",
      rung: "prove",
      prompt: (
        <p>
          State the application objection to virtue ethics, and give the best reply you can on its behalf. Is the reply
          enough?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the objection: someone who lacks virtue may not know what the virtuous person would do.",
          "Gives a reply, such as the guidance of v-rules, the advice of admired people, or the parallel difficulty of applying other theories.",
          "Offers a view on whether the reply works. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "anscombe",
      rung: "stretch",
      prompt: (
        <p>
          Anscombe claimed that the idea of moral obligation makes sense only if there is a lawgiver. Explain what she meant
          and say whether a secular ethics of duty can answer her.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that law-like obligation seems to need a legislator, and that she traced the concept to divine law.",
          "Considers a response, such as Kant's self-legislating reason, social contract views, or simply treating obligation as reasons of a special strength.",
          "Reaches a reasoned position. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what virtue ethics is, how Hursthouse defines right action and what v-rules are, why practical wisdom matters, and the main objections to the theory with replies.",

  glimpse: (
    <p>
      The next lesson meets the ethics of care, which also distrusts abstract rules, and the one after asks what we learn
      from admirable people. The first applied lesson shows how Hursthouse used virtue ethics on abortion.
    </p>
  ),
};
