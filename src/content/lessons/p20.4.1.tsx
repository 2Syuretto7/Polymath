import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["injunction (vidhi)", "prohibition (niṣedha)", "explanation (arthavāda)"];
const ITEMS: SortItem[] = [
  { text: "“One who desires heaven should perform the new and full moon sacrifices.”", cat: "injunction (vidhi)", why: "It enjoins an action for a goal: the paradigm of a Vedic sentence for Mīmāṃsā." },
  { text: "“One should offer the morning oblation into the fire.”", cat: "injunction (vidhi)", why: "An injunction prescribing a ritual act." },
  { text: "“One should not eat the flesh of the sacrificed animal before the offering.”", cat: "prohibition (niṣedha)", why: "It forbids an action; its force comes from the injunctive form with a negation." },
  { text: "“One should not harm any living being.”", cat: "prohibition (niṣedha)", why: "A general prohibition, which Mīmāṃsakas had to reconcile with injunctions to sacrifice." },
  { text: "“Vāyu is the swiftest deity.”", cat: "explanation (arthavāda)", why: "Taken literally it describes; Mīmāṃsā reads it as praising the offering to Vāyu, so supporting an injunction." },
  { text: "“The gods wept, and their tears became silver.”", cat: "explanation (arthavāda)", why: "A story whose role is to recommend or discourage, here to explain why silver is not given as a fee." },
];

export const lesson: LessonContent = {
  id: "p20.4.1",
  minutes: 85,
  links: {
    revisits: ["p20.1.4", "p20.2.1", "p0.2.4"],
    foreshadows: ["p20.4.2", "p20.5.7", "p20.7.1"],
  },

  puzzle: (
    <>
      <p>
        Most texts are believed because we trust their authors. Mīmāṃsā held that the Vedas are trustworthy precisely because
        they have no author at all: no human or god whose mistakes, lies or limited knowledge could taint them. How could a
        text have no author, and why would that make it more reliable?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort the Vedic sentences as a Mīmāṃsaka would.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Injunction, prohibition, or explanation?" />
    </>
  ),

  theory: (
    <>
      <Definition title="dharma and the Veda">
        <p>
          Jaimini&rsquo;s <em>Mīmāṃsā Sūtra</em> begins: &ldquo;Now, therefore, the inquiry into dharma.&rdquo; Dharma, duty, is
          known only through Vedic injunctions, since what one ought to do is not something perception or inference can reveal.
          Mīmāṃsā is the discipline of interpreting those injunctions; its great commentators are Śabara, Kumārila and
          Prabhākara.
        </p>
      </Definition>

      <Example title="authorless and eternal">
        <p>
          Faults in testimony come from speakers: ignorance, deceit, carelessness. A text with no author (apauruṣeya) has no
          source of fault, so its testimony is valid by default. To support this, Mīmāṃsakas argued that words, their meanings
          and the relation between them are eternal: the word &ldquo;cow&rdquo; is the same each time it is uttered, and its
          link to the universal cowness was not invented by anyone.
        </p>
      </Example>

      <Definition title="the primacy of injunction">
        <p>
          The Veda&rsquo;s purpose is to enjoin action. So its core sentences are <strong>injunctions</strong> (vidhi) and
          prohibitions; descriptive passages (<strong>arthavāda</strong>) have meaning only by praising or blaming what is
          enjoined. Kumārila analysed the injunctive verb ending as expressing a special force, bhāvanā, that impels the agent
          to act.
        </p>
      </Definition>

      <Remark title="rules of interpretation">
        <p>
          To resolve conflicts between texts, Mīmāṃsā developed principles still used in Indian law: a specific rule overrides
          a general one; nothing in a text is redundant; what is stated directly outweighs what is implied by context. The
          school also fiercely opposed Buddhist and Nyāya arguments for a creator God, since a creator would be an author of the
          Veda.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dharma",
      rung: "check",
      prompt: <p>According to Mīmāṃsā, how is dharma known?</p>,
      answer: { kind: "choice", options: ["Only through Vedic injunctions", "By perception", "By inference", "By intuition"], correct: [0] },
    },
    {
      key: "apaur",
      rung: "check",
      prompt: <p>Why does an authorless text count as reliable for Mīmāṃsā?</p>,
      answer: {
        kind: "choice",
        options: ["Faults in testimony come from authors, so a text without one has no source of fault", "Because it is old", "Because many people believe it", "Because God wrote it"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many sentences are explanations (arthavāda)?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "artha",
      rung: "apply",
      prompt: <p>How does Mīmāṃsā read &ldquo;Vāyu is the swiftest deity&rdquo;?</p>,
      answer: { kind: "choice", options: ["As praise supporting an injunction to offer to Vāyu", "As a literal fact about wind", "As a prohibition", "As meaningless"], correct: [0] },
    },
    {
      key: "rule",
      rung: "apply",
      prompt: <p>A general rule and a specific rule conflict. Which wins, by Mīmāṃsā&rsquo;s principles?</p>,
      answer: { kind: "choice", options: ["The specific rule", "The general rule", "The later one in the text", "Neither"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does having no author make a text more reliable? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Mīmāṃsā’s argument from the sources of error in testimony.",
          "Raises an objection, such as that authorlessness cannot be established, or that texts need interpreters who can err.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is it right that what we ought to do cannot be known by perception or inference? Compare with Hume&rsquo;s is-ought gap.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Connects Mīmāṃsā’s claim with the gap between facts and duties.",
          "Says whether testimony is a good way to bridge the gap, or offers another.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Mīmāṃsā focused on the ritual portion of the Veda. Vedānta, the &ldquo;later inquiry&rdquo;, turned to its knowledge
        portion, the Upaniṣads, and used Mīmāṃsā&rsquo;s own methods of interpretation to argue that their real subject is
        brahman, not ritual.
      </p>
      <p>
        Next, Śaṅkara&rsquo;s Advaita Vedānta: the claim that brahman alone is real, the world an appearance superimposed on it
        like a snake on a rope, and liberation the knowledge that one&rsquo;s self was brahman all along.
      </p>
    </>
  ),
};
