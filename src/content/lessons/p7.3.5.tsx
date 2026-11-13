import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "God gave the earth and its fruits to humankind in common.",
    kind: "premise",
    note: "Locke starts from scripture and from reason: everyone has a right to preserve themselves, and so to the things nature provides.",
    objection: "A secular reader may drop the theology. Locke's later steps can be read as resting on the right to self-preservation alone.",
  },
  {
    claim: "Every person has a property in their own person, and so in the labour of their body and the work of their hands.",
    kind: "premise",
    note: "This is self-ownership. Nobody else has a right to you, or to what you do with your hands.",
  },
  {
    claim: "Whatever a person removes from the state of nature and mixes their labour with becomes their property.",
    kind: "inference",
    note: "The acorns you gather are yours, Locke says, from the moment of gathering: no one's consent was needed, or everyone would have starved waiting for it.",
    objection: "Robert Nozick asked: if I pour my can of tomato juice into the sea, do I own the sea, or have I simply lost my juice?",
  },
  {
    claim: "Provided enough and as good is left in common for others, and nothing is taken only to spoil.",
    kind: "premise",
    note: "These are the two Lockean provisos. Taking a drink from a river harms nobody; hoarding fruit that rots wastes what God gave to all.",
    objection: "Once land is scarce, enough and as good is never left. Does the argument then justify no new appropriation at all?",
  },
  {
    claim: "So private property can arise without anyone's consent, and government exists chiefly to protect it.",
    kind: "conclusion",
    note: "By property Locke often means life, liberty and estate together. Money, by tacit consent, lets people store value without spoiling, and so allows great inequality.",
    objection: "Critics from Rousseau to Marx argue that the theory justifies the possessions of those who came first, and that labour more often enriches the owner than the labourer.",
  },
];

export const lesson: LessonContent = {
  id: "p7.3.5",
  minutes: 80,
  links: {
    revisits: ["p7.3.4", "p5.3.3", "p5.3.4"],
    foreshadows: ["p14.1.2", "p14.2.3", "p14.1.1"],
  },

  puzzle: (
    <>
      <p>
        In 1689, the year after England replaced one king with another, Locke published two treatises of government. The
        first demolished the claim that kings rule by a right inherited from Adam. The second asked what could make political
        power legitimate if not divine appointment. His answer, that governments exist by the consent of the governed to
        protect natural rights, and may be resisted when they betray that trust, found its way almost word for word into the
        American Declaration of Independence. But where do those rights come from, and what counts as consent?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Locke&rsquo;s argument that property can arise before any government or agreement. Challenge the steps
        where you have doubts.
      </p>
      <ArgumentStepViz steps={STEPS} title="Locke's labour theory of property" />
    </>
  ),

  theory: (
    <>
      <Definition title="the state of nature">
        <p>
          The <strong>state of nature</strong> is the condition of people with no common authority over them. For Locke, unlike
          Hobbes, it is not a war of all against all. It is governed by the <strong>law of nature</strong>, which reason
          teaches: being all equal and independent, no one ought to harm another in their life, health, liberty or
          possessions. Its defect is that everyone must judge and enforce that law in their own case, and people are partial
          judges of their own disputes.
        </p>
      </Definition>

      <Definition title="consent and government">
        <p>
          People leave the state of nature by agreeing to form a political society, which sets up a legislature with known
          laws, impartial judges and the power to enforce them. Such a government has only the power people had to give: to
          protect life, liberty and estate. Since few have ever signed anything, Locke appeals to <strong>tacit
          consent</strong>: anyone who enjoys property under a government, or even travels on its highways, consents to obey
          its laws while they do so.
        </p>
      </Definition>

      <Example title="the right of revolution">
        <p>
          When a government acts against the trust placed in it, by seizing people&rsquo;s property or ruling by arbitrary will,
          it puts itself into a state of war with the people, and power returns to them. Locke insists this is not a licence
          for rebellion over small mistakes: people bear many wrongs before they rise. Resistance is justified only by a long
          train of abuses showing a design to tyranny.
        </p>
      </Example>

      <Remark title="questions">
        <p>
          Hume mocked tacit consent: a poor peasant who cannot afford to emigrate no more consents to the state than a sailor
          carried aboard while asleep consents to the captain by staying on deck. Locke&rsquo;s views on toleration were
          generous for his age, but excluded atheists and Catholics. And the man who argued that all are born free invested
          in the slave trade and helped draft a constitution for Carolina that allowed slavery. Whether his principles condemn
          his practice, as most readers now think, is part of their lasting interest.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "nature",
      rung: "check",
      prompt: <p>How does Locke&rsquo;s state of nature differ from Hobbes&rsquo;s?</p>,
      answer: {
        kind: "choice",
        options: [
          "For Locke there is no law at all in the state of nature.",
          "For Locke it is governed by a law of nature known by reason, though it lacks impartial judges; for Hobbes it is a war of all against all.",
          "There is no difference.",
          "For Locke the state of nature has a king.",
        ],
        correct: [1],
      },
    },
    {
      key: "provisos",
      rung: "check",
      prompt: <p>Which conditions limit appropriation by labour, according to Locke? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "Enough and as good must be left for others.",
          "Nothing may be taken only to spoil.",
          "Everyone must consent first.",
          "The king must grant permission.",
        ],
        correct: [0, 1],
      },
    },
    {
      key: "tacit",
      rung: "apply",
      prompt: <p>According to Locke, how does someone who never signed anything consent to their government?</p>,
      answer: {
        kind: "choice",
        options: [
          "They do not, so they need not obey.",
          "Tacitly, by enjoying property or protection under it, even by travelling on its highways.",
          "By being born.",
          "By paying no taxes.",
        ],
        correct: [1],
      },
    },
    {
      key: "hume",
      rung: "apply",
      prompt: <p>What is the point of Hume&rsquo;s example of the sailor carried aboard while asleep?</p>,
      answer: {
        kind: "choice",
        options: [
          "That sailors are free.",
          "That staying where one has no real option of leaving is not genuine consent.",
          "That ships need captains.",
          "That consent is always tacit.",
        ],
        correct: [1],
      },
    },
    {
      key: "revolt",
      rung: "apply",
      prompt: <p>When does Locke think resistance to a government is justified?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whenever a law is unpopular.",
          "When a long train of abuses shows a design to tyranny, betraying the trust for which government exists.",
          "Never.",
          "Whenever the majority wishes.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Does mixing your labour with something make it yours? Give Locke&rsquo;s reason and one objection, and say which
          you find stronger.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States Locke's reason: we own our labour, and by mixing it with unowned things we extend that ownership to them.",
          "Gives an objection, such as Nozick's tomato juice, or the failure of the enough-and-as-good proviso under scarcity.",
          "States which is stronger. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "consent",
      rung: "stretch",
      prompt: (
        <p>
          Can a modern state claim the consent of its citizens? Use Locke&rsquo;s idea of tacit consent and Hume&rsquo;s
          objection.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains tacit consent and how it would apply to modern citizens.",
          "Applies Hume's objection about the lack of a real option of leaving.",
          "Reaches a reasoned view, perhaps with an alternative basis such as fair play or hypothetical consent. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Locke's state of nature and law of nature, his labour theory of property and its provisos, his account of consent and tacit consent, and when he thought revolution justified.",

  glimpse: (
    <p>
      The next chapter turns to Berkeley, who will question the material world that Locke took for granted. The Political
      Philosophy course returns to Locke on consent and property beside Hobbes, and Nozick builds a modern theory of
      entitlement on Lockean foundations.
    </p>
  ),
};
