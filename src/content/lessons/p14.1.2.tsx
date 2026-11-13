import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Every person has a property in their own person: nobody has a right to it but themselves.",
    kind: "premise",
    note: "Self-ownership. You are not anyone’s slave.",
  },
  {
    claim: "So the labour of their body and the work of their hands are properly their own.",
    kind: "inference",
    note: "If you own yourself, you own what you do with yourself.",
  },
  {
    claim: "Whatever someone removes from the common state of nature, they have mixed their labour with.",
    kind: "premise",
    note: "Gathering acorns or tilling a field joins something of yours to something unowned.",
    objection: "Robert Nozick: if I pour my can of tomato juice into the sea, do I own the sea, or have I foolishly lost my juice? Why does mixing gain the thing rather than lose the labour?",
  },
  {
    claim: "Provided enough and as good is left in common for others, and nothing is left to spoil.",
    kind: "premise",
    note: "The Lockean proviso and the spoilage limit. In a world of plenty, taking does not harm anyone.",
    objection: "Once land is scarce, the proviso can no longer be met. Locke argued that money and enclosure make everyone better off anyway, but critics doubt whether that is enough.",
  },
  {
    claim: "So by labouring on unowned things, a person makes them their property, without needing anyone’s consent.",
    kind: "conclusion",
    note: "Property is prior to government, which exists to protect it. This is why Locke held that a government that seizes property without consent breaks its trust.",
  },
];

export const lesson: LessonContent = {
  id: "p14.1.2",
  minutes: 80,
  links: {
    revisits: ["p7.3.5", "p14.1.1", "p5.3.3"],
    foreshadows: ["p14.1.4", "p14.2.3", "p14.6.1"],
  },

  puzzle: (
    <>
      <p>
        Before anyone owned anything, the earth belonged to everyone in common. Today almost every patch of land has an owner.
        How did something that belonged to all of us come to belong to some of us, and did anyone ask the rest?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Locke&rsquo;s labour argument, and challenge the steps you doubt.</p>
      <ArgumentStepViz title="Locke on property" steps={STEPS} />
    </>
  ),

  theory: (
    <>
      <Definition title="Locke’s state of nature">
        <p>
          Unlike Hobbes, John Locke held that the state of nature has a law: reason teaches that, all being equal and
          independent, no one ought to harm another in their life, health, liberty or possessions. Everyone may punish
          breaches. The trouble is that people judge their own cases, so the state of nature is inconvenient and slides into
          war.
        </p>
      </Definition>

      <Definition title="consent">
        <p>
          Political power is legitimate only with the consent of the governed. People leave the state of nature by agreeing to
          form a community that will judge and enforce the law impartially. A government that violates the trust, by taking
          life, liberty or property arbitrarily, may be resisted.
        </p>
      </Definition>

      <Example title="tacit consent">
        <p>
          Few people ever explicitly agree to their government. Locke said that whoever enjoys any part of a government&rsquo;s
          territory, even travelling freely on its highway, gives tacit consent. David Hume replied that a poor peasant who
          knows no foreign language and lives from day to day can no more be said to consent by staying than a sailor carried
          on board while asleep consents by not leaping into the ocean.
        </p>
      </Example>

      <Remark title="legacy and criticism">
        <p>
          Locke&rsquo;s ideas of natural rights, consent and resistance shaped the American Declaration of Independence. His
          property theory was also used to justify the seizure of land from Indigenous peoples in America, whose use of the
          land was said not to count as labour. That use shows how much rides on what counts as mixing one&rsquo;s labour.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "law",
      rung: "check",
      prompt: <p>How does Locke&rsquo;s state of nature differ from Hobbes&rsquo;s?</p>,
      answer: {
        kind: "choice",
        options: [
          "Locke’s has a law of nature, known by reason, forbidding harm to others’ life, health, liberty and possessions.",
          "Locke’s has a sovereign.",
          "Locke’s has no people.",
          "They are the same.",
        ],
        correct: [0],
      },
    },
    {
      key: "proviso",
      rung: "check",
      prompt: <p>What is the Lockean proviso?</p>,
      answer: {
        kind: "choice",
        options: [
          "That property must be registered.",
          "That one may appropriate only if enough and as good is left in common for others.",
          "That only kings may own land.",
          "That labour must be paid.",
        ],
        correct: [1],
      },
    },
    {
      key: "juice",
      rung: "apply",
      prompt: <p>What point does Nozick&rsquo;s tomato juice example make?</p>,
      answer: {
        kind: "choice",
        options: [
          "That mixing something you own with something unowned might lose what you own, rather than gain the unowned thing.",
          "That tomatoes cannot be property.",
          "That the sea belongs to everyone.",
          "That labour has no value.",
        ],
        correct: [0],
      },
    },
    {
      key: "tacit",
      rung: "apply",
      prompt: <p>What is Hume&rsquo;s objection to tacit consent?</p>,
      answer: {
        kind: "choice",
        options: [
          "That staying in a country is not real consent when leaving is practically impossible.",
          "That consent must be written down.",
          "That governments never need consent.",
          "That only sailors can consent.",
        ],
        correct: [0],
      },
    },
    {
      key: "resist",
      rung: "apply",
      prompt: <p>According to Locke, when may people resist their government?</p>,
      answer: {
        kind: "choice",
        options: [
          "Never.",
          "When it breaks its trust by taking life, liberty or property arbitrarily.",
          "Whenever they dislike a law.",
          "Only when a foreign power invades.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does mixing your labour with something unowned make it yours? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Locke’s labour argument and the proviso.",
          "Raises an objection, such as the tomato juice or the scarcity of land.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can the Lockean proviso be satisfied today, when almost all land is owned? What would follow if it cannot?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why scarcity threatens the proviso.",
          "Considers a reply, such as Locke’s claim that everyone is better off, or a duty to compensate.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Locke's state of nature, his labour theory of property with the proviso, the role of consent and the right of resistance, and Hume's objection to tacit consent.",

  glimpse: (
    <p>
      The next lesson turns to Rousseau, who blamed private property for inequality. Nozick&rsquo;s entitlement theory
      revives Locke&rsquo;s account, and global justice asks who owns the earth&rsquo;s resources.
    </p>
  ),
};
