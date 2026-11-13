import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["civil and political", "economic and social", "collective"];
const ITEMS: SortItem[] = [
  { text: "No one shall be subjected to torture.", cat: "civil and political", why: "A classic liberty right, protecting the person against the state (Universal Declaration, Article 5)." },
  { text: "Everyone has the right to take part in the government of their country.", cat: "civil and political", why: "A political right of participation (Article 21)." },
  { text: "Everyone has the right to education.", cat: "economic and social", why: "It requires the state to provide something, not only to refrain (Article 26)." },
  { text: "Everyone has the right to a standard of living adequate for health, including food and housing.", cat: "economic and social", why: "A subsistence right, central to debates about global poverty (Article 25)." },
  { text: "All peoples have the right of self-determination.", cat: "collective", why: "Held by peoples rather than individuals, it opens both international covenants of 1966." },
  { text: "Everyone has the right to freedom of thought, conscience and religion.", cat: "civil and political", why: "A liberty right (Article 18)." },
  { text: "Everyone has the right to just and favourable conditions of work.", cat: "economic and social", why: "A labour right (Article 23)." },
];

export const lesson: LessonContent = {
  id: "p14.6.3",
  minutes: 80,
  links: {
    revisits: ["p14.6.1", "p14.1.2", "p14.5.4"],
    foreshadows: ["p25.3.1", "p25.2.3", "p25.3.2"],
  },

  puzzle: (
    <>
      <p>
        The Universal Declaration of Human Rights of 1948 claims that every human being has certain rights, whatever their
        country, culture or religion. Hansa Mehta of India changed its first article from &ldquo;all men&rdquo; to
        &ldquo;all human beings&rdquo;. But what grounds such rights, and can one list be truly universal?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort these rights, most drawn from the Universal Declaration, by kind.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="What kind of right is this?" />
    </>
  ),

  theory: (
    <>
      <Definition title="human rights">
        <p>
          Rights held by all human beings simply as such, setting minimum standards for how anyone, and especially
          governments, may treat them. They are claimed to be universal, high priority, and owed regardless of law, though
          many are now also legal rights in international and national law.
        </p>
      </Definition>

      <Example title="orthodox and political views">
        <p>
          On the orthodox or naturalistic view, human rights are moral rights grounded in features of human beings: James
          Griffin grounds them in personhood, our capacity to choose and pursue a conception of a worthwhile life. On the
          political or practice view, of Rawls and Charles Beitz, they are defined by their role in international practice:
          they mark the limits of sovereignty, whose violation justifies international concern.
        </p>
      </Example>

      <Remark title="are socio-economic rights real rights?">
        <p>
          Maurice Cranston argued that rights to welfare are not genuine human rights, since they cannot be met everywhere and
          lack clear duty-bearers. Henry Shue replied that all rights, including liberty rights, require duties to avoid
          depriving, to protect, and to aid, and that subsistence rights are basic, since no other right can be enjoyed without
          them. Amartya Sen and Martha Nussbaum&rsquo;s capabilities approach offers another grounding.
        </p>
      </Remark>

      <Remark title="universality">
        <p>
          The Asian values debate of the 1990s asked whether human rights reflect Western individualism. Defenders, including
          Sen, point to traditions of tolerance and freedom in Asian thought, from Ashoka to Akbar, and argue that the claim of
          cultural difference is often made by governments, not peoples. Others favour an overlapping consensus: different
          traditions endorse the same rights for their own reasons.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What makes a right a human right?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is held by all human beings simply as human beings.",
          "It is granted by a particular constitution.",
          "It is held only by citizens.",
          "It is earned by good conduct.",
        ],
        correct: [0],
      },
    },
    {
      key: "griffin",
      rung: "check",
      prompt: <p>What does Griffin ground human rights in?</p>,
      answer: { kind: "choice", options: ["Personhood", "Utility", "Contracts", "Divine command"], correct: [0] },
    },
    {
      key: "political",
      rung: "apply",
      prompt: <p>On the political view of Rawls and Beitz, what are human rights?</p>,
      answer: {
        kind: "choice",
        options: [
          "Standards whose violation justifies international concern, marking limits of sovereignty.",
          "Natural properties of humans.",
          "Rights only in national law.",
          "Expressions of preference.",
        ],
        correct: [0],
      },
    },
    {
      key: "shue",
      rung: "apply",
      prompt: <p>What was Shue&rsquo;s reply to the claim that only liberty rights are genuine?</p>,
      answer: {
        kind: "choice",
        options: [
          "All rights involve duties to avoid depriving, to protect and to aid, and subsistence rights are basic to enjoying any others.",
          "Liberty rights are not real.",
          "Rights are only legal.",
          "Welfare rights need no duties.",
        ],
        correct: [0],
      },
    },
    {
      key: "mehta",
      rung: "apply",
      prompt: <p>What change did Hansa Mehta make to the Universal Declaration?</p>,
      answer: {
        kind: "choice",
        options: [
          "She changed “all men” to “all human beings” in Article 1.",
          "She added the right to vote.",
          "She removed the preamble.",
          "She wrote Article 30.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is there a human right to an adequate standard of living? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Cranston's objection or a similar one.",
          "Considers Shue's reply or the capabilities approach.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can human rights be universal if cultures disagree deeply about the good life?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the relativist or Asian values challenge.",
          "Considers a reply, such as an overlapping consensus or Sen's historical argument.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what human rights are, the orthodox and political views of their grounds, the debate over socio-economic rights between Cranston and Shue, and the question of universality.",

  glimpse: (
    <p>
      This completes the course. Applied ethics later takes up poverty, climate and future generations, where arguments from
      human rights are often used.
    </p>
  ),
};
