import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Democracy is not merely a form of government but a mode of associated living, of conjoint communicated experience.",
    kind: "premise",
    note: "Ambedkar drew this from John Dewey, his teacher at Columbia University.",
  },
  {
    claim: "Such a society needs liberty, equality and fraternity, which form a union: to divorce one from the others defeats the purpose of democracy.",
    kind: "premise",
    note: "From his speech to the Constituent Assembly on 25 November 1949.",
  },
  {
    claim: "Caste is not a division of labour but a division of labourers, into watertight compartments graded one above the other.",
    kind: "premise",
    note: "Annihilation of Caste (1936). Endogamy maintains the divisions, and each caste looks down on those below: graded inequality.",
    objection: "Some, including Gandhi in his reply to Ambedkar, defended an idealised varna order of occupations without hierarchy. Ambedkar answered that no such order had existed without hierarchy, and that the scriptures upheld it.",
  },
  {
    claim: "So caste destroys fraternity, and graded inequality stops the oppressed from uniting, since each group has someone beneath it.",
    kind: "inference",
    note: "This makes caste unlike a simple two-class division: resentment is diffused down the ladder.",
  },
  {
    claim: "Therefore political democracy, one person one vote, cannot last unless it rests on social democracy.",
    kind: "conclusion",
    note: "‘On the 26th of January 1950, we are going to enter into a life of contradictions. In politics we will have equality and in social and economic life we will have inequality.’",
    objection: "One might reply that political equality, over time, erodes social hierarchy. Ambedkar feared the reverse: that social inequality would capture political democracy.",
  },
];

export const lesson: LessonContent = {
  id: "p14.5.4",
  minutes: 80,
  links: {
    revisits: ["p14.5.3", "p14.4.1", "p14.3.3"],
    foreshadows: ["p14.6.3", "p20.7.5", "p14.6.2"],
  },

  puzzle: (
    <>
      <p>
        On 26 January 1950, India adopted a constitution giving every adult an equal vote. The chair of its drafting committee
        warned that this equality might not survive. Why did B. R. Ambedkar think one person, one vote was not enough?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Ambedkar&rsquo;s argument and open the objections.</p>
      <ArgumentStepViz title="From caste to social democracy" steps={STEPS} />
    </>
  ),

  theory: (
    <>
      <Definition title="graded inequality">
        <p>
          Ambedkar&rsquo;s term for the structure of caste: not two classes, rulers and ruled, but a ladder of groups, each
          superior to some and inferior to others. Because nearly every group has some status to protect, those at the bottom
          find it hard to unite, and the system stabilises itself.
        </p>
      </Definition>

      <Example title="Annihilation of Caste">
        <p>
          Written in 1936 as a speech that its hosts cancelled, it argued that caste is upheld by religious sanction and
          endogamy, that it has prevented the formation of a public, and that reform requires destroying belief in the
          authority of the scriptures that sanction it. Ambedkar rejected reforming caste from within and later, in 1956,
          converted to Buddhism with hundreds of thousands of followers.
        </p>
      </Example>

      <Remark title="constitutional means">
        <p>
          As chair of the Drafting Committee, Ambedkar helped write the abolition of untouchability, prohibitions of caste
          discrimination, and reservations in legislatures, education and public employment. He urged constitutional methods
          over agitation once they were available, warned against hero-worship in politics, and insisted that fraternity was
          the principle most needed and most absent.
        </p>
      </Remark>

      <Remark title="his place in political philosophy">
        <p>
          Ambedkar anticipates themes of later Western thought: Young&rsquo;s structural injustice, republican concern with
          domination, and the relational egalitarianism of Anderson, for whom the point of equality is a society of equals.
          Scholars increasingly read him as a major democratic theorist, not only a reformer.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "graded",
      rung: "check",
      prompt: <p>What is graded inequality?</p>,
      answer: {
        kind: "choice",
        options: [
          "A ladder of groups each above some and below others, which hinders the oppressed from uniting.",
          "Progressive taxation.",
          "Grades in school.",
          "Equality by stages.",
        ],
        correct: [0],
      },
    },
    {
      key: "labourers",
      rung: "check",
      prompt: <p>Ambedkar said caste is not a division of labour but a division of what?</p>,
      answer: { kind: "choice", options: ["Labourers", "Land", "Wealth", "Time"], correct: [0] },
    },
    {
      key: "trinity",
      rung: "apply",
      prompt: <p>Why did Ambedkar say liberty, equality and fraternity must not be separated?</p>,
      answer: {
        kind: "choice",
        options: [
          "Each without the others defeats democracy: liberty without equality yields domination by the few, and neither works without fraternity.",
          "Because they are three words in one slogan.",
          "Because the French said so.",
          "Because equality is unimportant.",
        ],
        correct: [0],
      },
    },
    {
      key: "social",
      rung: "apply",
      prompt: <p>What did Ambedkar mean by a life of contradictions?</p>,
      answer: {
        kind: "choice",
        options: [
          "Political equality alongside social and economic inequality.",
          "Disagreement among political parties.",
          "Contradictions in the constitution's text.",
          "Conflicts between states.",
        ],
        correct: [0],
      },
    },
    {
      key: "dewey",
      rung: "apply",
      prompt: <p>Which philosopher shaped Ambedkar&rsquo;s idea of democracy as a mode of associated living?</p>,
      answer: { kind: "choice", options: ["John Dewey", "Thomas Hobbes", "Robert Nozick", "Plato"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can political democracy survive without social democracy? Argue briefly, using Ambedkar.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Ambedkar's argument from graded inequality and fraternity.",
          "Considers the reply that political equality can erode social hierarchy over time.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is fraternity a proper aim for a state, or only for citizens? Can law create it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains fraternity in Ambedkar's sense.",
          "Considers what law can and cannot do, such as anti-discrimination rules versus changes in attitudes.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Ambedkar's view of democracy as associated living, his analysis of caste as graded inequality, why he thought political democracy needs social democracy, and the role of fraternity.",

  glimpse: (
    <p>
      The final chapter of the course turns to global justice, nationalism and human rights. A later course on Indian
      philosophy studies Ambedkar&rsquo;s Buddhism.
    </p>
  ),
};
