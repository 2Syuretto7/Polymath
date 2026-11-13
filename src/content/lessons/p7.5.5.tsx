import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["is", "ought"];
const ITEMS: SortItem[] = [
  { text: "Lying usually damages trust.", cat: "is", why: "A claim about how things are, which observation could confirm or refute." },
  { text: "You should not lie.", cat: "ought", why: "A claim about what one should do. No observation of lies settles it on its own." },
  { text: "Most people disapprove of cruelty to animals.", cat: "is", why: "A fact about people's attitudes. It is about disapproval, but it is not itself a judgement that cruelty is wrong." },
  { text: "Cruelty to animals is wrong.", cat: "ought", why: "A moral judgement. Hume would say it expresses a sentiment of disapproval." },
  { text: "The law requires drivers to stop at red lights.", cat: "is", why: "A fact about what the law says. Whether one ought to obey the law is a further question." },
  { text: "Parents ought to look after their children.", cat: "ought", why: "A normative claim. It may be supported by facts about children's needs, but it does not follow from them alone." },
  { text: "This medicine will relieve the pain.", cat: "is", why: "A causal claim about matters of fact." },
];

export const lesson: LessonContent = {
  id: "p7.5.5",
  minutes: 75,
  links: {
    revisits: ["p7.5.1", "p5.3.1", "p7.5.2"],
    foreshadows: ["p13.3.1", "p13.4.2", "p7.5.6"],
  },

  puzzle: (
    <>
      <p>
        In every system of morality he had read, Hume noticed, the author proceeds for some time in the ordinary way of
        reasoning, about God or human nature, with propositions joined by is and is not. Then, imperceptibly, the author
        starts joining them with ought and ought not. The change is of the last consequence, Hume wrote, and a reason should
        be given for it, since it seems altogether inconceivable how this new relation can be a deduction from others
        entirely different. Can you ever get an ought from an is?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Sort each claim: does it describe how things are, or say how they ought to be?
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Sort each claim as an is or an ought." />
    </>
  ),

  theory: (
    <>
      <Definition title="the is-ought gap">
        <p>
          The <strong>is-ought gap</strong>, often called Hume&rsquo;s law, is the claim that no set of purely descriptive
          premises entails a normative conclusion. An argument from facts alone to a moral conclusion needs a further premise
          containing an ought. &ldquo;Lying damages trust, so you should not lie&rdquo; is valid only with an added premise
          such as &ldquo;you should not damage trust&rdquo;.
        </p>
      </Definition>

      <Definition title="reason and the passions">
        <p>
          Hume backs this with a theory of motivation. Reason alone discovers truth and falsehood, relations of ideas and
          matters of fact. It can never by itself move us to act: only a passion, a desire or aversion, can do that.
          &ldquo;Reason is, and ought only to be, the slave of the passions.&rdquo; Since moral judgements do move us to act,
          they cannot be the work of reason alone.
        </p>
      </Definition>

      <Example title="sentiment">
        <p>
          Take any action allowed to be vicious, such as wilful murder, and examine it in all lights. You will find only
          certain passions, motives, volitions and thoughts. The vice entirely escapes you until you turn your reflection
          into your own breast and find a sentiment of disapprobation. Morality, for Hume, is more properly felt than judged
          of. Our sentiments are shaped by <strong>sympathy</strong>, the capacity to share others&rsquo; feelings, and are
          corrected by taking a general point of view.
        </p>
      </Example>

      <Remark title="its legacy">
        <p>
          The gap became a cornerstone of metaethics. G. E. Moore&rsquo;s open question argument made a related point about
          defining good in natural terms. Expressivists built on Hume&rsquo;s sentimentalism, and the Humean theory of
          motivation is still debated. Critics such as John Searle tried to derive an ought from an is: she said &ldquo;I
          promise&rdquo;, so she promised, so she ought to keep it. Defenders reply that the institution of promising already
          smuggles in a normative premise. Some scholars think Hume meant only that the step needs explaining, not that it is
          impossible.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "gap",
      rung: "check",
      prompt: <p>What does the is-ought gap claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "That moral claims are always false.",
          "That purely descriptive premises do not by themselves entail a normative conclusion.",
          "That facts are moral.",
          "That nobody ought to do anything.",
        ],
        correct: [1],
      },
    },
    {
      key: "slave",
      rung: "check",
      prompt: <p>What role does Hume give reason in action?</p>,
      answer: {
        kind: "choice",
        options: [
          "Reason alone moves us to act.",
          "Reason discovers facts and relations, but only passions can move us; reason is the slave of the passions.",
          "Reason controls all passions.",
          "Reason has no role at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "fix",
      rung: "apply",
      prompt: (
        <p>
          The argument &ldquo;Smoking harms health, so you ought not to smoke&rdquo; is invalid as it stands. Which premise
          would make it valid?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Smoking is common.",
          "You ought not to do what harms your health.",
          "Doctors say smoking harms health.",
          "Health is a fact.",
        ],
        correct: [1],
      },
    },
    {
      key: "murder",
      rung: "apply",
      prompt: <p>Where does Hume say the vice of a murder is found?</p>,
      answer: {
        kind: "choice",
        options: [
          "In the act itself, as a matter of fact.",
          "In the sentiment of disapproval that arises in us when we consider it.",
          "In the law.",
          "In God's will.",
        ],
        correct: [1],
      },
    },
    {
      key: "searle",
      rung: "apply",
      prompt: <p>How do defenders of the gap reply to Searle&rsquo;s promising argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "That promises do not exist.",
          "That the institution of promising already contains a normative rule, so an ought premise is smuggled in.",
          "That promises are never kept.",
          "That Searle was not speaking English.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Can an ought be derived from an is? State Hume&rsquo;s point, and assess one attempt to bridge the gap.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the gap: descriptive premises alone do not entail a normative conclusion.",
          "Describes an attempt, such as Searle's promising argument, or natural law, or thick concepts like cruel.",
          "Assesses it. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "thick",
      rung: "stretch",
      prompt: (
        <p>
          Words like &ldquo;cruel&rdquo; or &ldquo;generous&rdquo; seem both to describe and to evaluate. Do such thick
          concepts close the gap between is and ought?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that thick concepts combine descriptive content with evaluation.",
          "Considers whether the evaluation can be separated from the description, as Hume's defenders might argue.",
          "Reaches a reasoned position. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Hume's observation about is and ought, why he thought reason alone cannot motivate, his view that morality rests on sentiment, and one attempt to bridge the gap.",

  glimpse: (
    <p>
      The next lesson reads Hume&rsquo;s Dialogues on natural religion, where his scepticism meets the argument from design.
      The Metaethics course takes up Moore&rsquo;s open question argument and the Humean theory of motivation in depth.
    </p>
  ),
};
