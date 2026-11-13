import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["the general will", "the will of all"];
const ITEMS: SortItem[] = [
  {
    text: "Each citizen votes for whichever law best secures the common good of all.",
    cat: "the general will",
    why: "Rousseau’s ideal: each asks what is good for the whole people, of which they are a member.",
  },
  {
    text: "Each citizen votes for the tax rate that cuts their own bill the most.",
    cat: "the will of all",
    why: "A sum of private wills. Rousseau said the will of all looks only to private interest.",
  },
  {
    text: "A guild of merchants campaigns together for laws that shield its members from competition.",
    cat: "the will of all",
    why: "A faction. Rousseau feared partial associations most, since each forms a general will for its members but a particular will towards the state.",
  },
  {
    text: "A law applies to every citizen equally, including those who made it.",
    cat: "the general will",
    why: "The general will must be general in its object as well as its source: it makes laws for all, not decrees about particular people.",
  },
  {
    text: "A majority votes to confiscate the land of one unpopular family.",
    cat: "the will of all",
    why: "A decision about particular people, serving the interests of some against others.",
  },
  {
    text: "Citizens ask what law they could each will as members of the whole people, setting aside their own advantage.",
    cat: "the general will",
    why: "This is the question Rousseau thought each citizen should put to themselves in the assembly.",
  },
  {
    text: "A citizen votes for a road that benefits their own street and nobody else’s.",
    cat: "the will of all",
    why: "A particular interest, however natural.",
  },
];

export const lesson: LessonContent = {
  id: "p14.1.3",
  minutes: 80,
  links: {
    revisits: ["p14.1.2", "p14.1.1", "p4.3.3"],
    foreshadows: ["p14.3.2", "p14.4.2", "p26.4.4"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;Man is born free, and everywhere he is in chains.&rdquo; So begins Rousseau&rsquo;s <em>Social Contract</em>
        (1762). Rousseau wanted a form of association in which each person, while uniting with all, still obeys only
        themselves and remains as free as before. Is that possible, when laws must bind everyone, including those who voted
        against them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each case: does it express the general will, or only the will of all?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="The general will, or the will of all?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the social contract">
        <p>
          Each person gives themselves, with all their rights, wholly to the community. Since everyone gives the same, the
          conditions are equal for all, and no one has an interest in making them burdensome for others. The result is a
          collective body, the sovereign people, whose will is the general will.
        </p>
      </Definition>

      <Definition title="the general will">
        <p>
          The will of the people as a whole, aimed at the common good. It differs from the will of all, which is the sum of
          private wills aimed at private interests. Laws are legitimate when they express the general will, and in obeying them
          citizens obey themselves.
        </p>
      </Definition>

      <Example title="forced to be free">
        <p>
          Rousseau wrote that whoever refuses to obey the general will shall be compelled to do so by the whole body, which
          means nothing other than that they will be forced to be free. His thought was that the citizen&rsquo;s true will is
          the general will, and that dependence on law frees us from dependence on other people&rsquo;s whims.
        </p>
      </Example>

      <Remark title="worries">
        <p>
          Critics such as Benjamin Constant and Isaiah Berlin feared that &ldquo;forced to be free&rdquo; licenses tyranny in
          the name of the people&rsquo;s true will. Others read Rousseau as a forerunner of deliberative democracy, and the
          Marquis de Condorcet&rsquo;s jury theorem suggests why majorities aiming at the common good may find it more reliably
          than individuals.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "diff",
      rung: "check",
      prompt: <p>How does the general will differ from the will of all?</p>,
      answer: {
        kind: "choice",
        options: [
          "The general will aims at the common good; the will of all is a sum of private wills aimed at private interests.",
          "The general will is the will of the king.",
          "They are the same.",
          "The will of all is always wiser.",
        ],
        correct: [0],
      },
    },
    {
      key: "who",
      rung: "check",
      prompt: <p>Which book opens with &ldquo;Man is born free, and everywhere he is in chains&rdquo;?</p>,
      answer: { kind: "choice", options: ["Rousseau’s The Social Contract", "Hobbes’s Leviathan", "Locke’s Second Treatise", "Mill’s On Liberty"], correct: [0] },
    },
    {
      key: "faction",
      rung: "apply",
      prompt: <p>Why did Rousseau distrust factions and partial associations?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because each pursues its members’ interest, which is particular relative to the state, and so distorts the general will.",
          "Because they are too small to matter.",
          "Because they always support the king.",
          "Because they are illegal.",
        ],
        correct: [0],
      },
    },
    {
      key: "general",
      rung: "apply",
      prompt: <p>Why must laws expressing the general will be general in their object?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because they should apply to all citizens alike, not single out particular people.",
          "Because they should be vague.",
          "Because they should cover every topic.",
          "Because generals write them.",
        ],
        correct: [0],
      },
    },
    {
      key: "forced",
      rung: "apply",
      prompt: <p>What worry do critics raise about &ldquo;forced to be free&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "That it could justify coercion in the name of people’s supposed true will.",
          "That freedom is impossible.",
          "That it forbids all laws.",
          "That it requires a monarchy.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can someone who voted against a law still be obeying only themselves when they obey it? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Rousseau’s view that citizens obey the general will, which is their own will as members of the people.",
          "Considers an objection, such as the worry about forcing people to be free.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Rousseau thought the general will could be found only in small republics where citizens meet in assembly. Can a large modern democracy express a general will?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why size and representation might matter to Rousseau.",
          "Considers a modern mechanism, such as deliberation, parties or referendums.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Rousseau's social contract, the difference between the general will and the will of all, the idea of being forced to be free, and one worry about it.",

  glimpse: (
    <p>
      The next lesson asks whether we have a duty to obey the law. Republicans develop Rousseau&rsquo;s link between law and
      freedom, deliberative democrats his assembly, and social choice theory asks whether a collective will can be defined at
      all.
    </p>
  ),
};
