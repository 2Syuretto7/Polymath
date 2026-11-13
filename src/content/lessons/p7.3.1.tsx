import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["sensation", "reflection", "both"];
const ITEMS: SortItem[] = [
  { text: "The idea of yellow", cat: "sensation", why: "Colours come into the mind through the senses, from external objects." },
  { text: "The idea of solidity, felt when you press your hand on a table", cat: "sensation", why: "Locke says we get solidity from touch, from the resistance bodies offer." },
  { text: "The idea of thinking", cat: "reflection", why: "We get it by noticing the operations of our own minds, which Locke calls reflection, a kind of internal sense." },
  { text: "The idea of willing, or choosing", cat: "reflection", why: "Willing is an operation of the mind, observed by reflection." },
  { text: "The idea of doubting", cat: "reflection", why: "Doubt is another operation of the mind that we notice in ourselves." },
  { text: "The idea of pleasure", cat: "both", why: "Locke says pleasure and pain accompany both our sensations and our thoughts, so they come by both ways." },
  { text: "The idea of unity, of being one thing", cat: "both", why: "Every object and every idea we consider presents itself as one, so unity comes from both sensation and reflection." },
];

export const lesson: LessonContent = {
  id: "p7.3.1",
  minutes: 80,
  links: {
    revisits: ["p4.3.1", "p7.1.3", "p7.2.3"],
    foreshadows: ["p7.3.2", "p7.5.1", "p8.1.2"],
  },

  puzzle: (
    <>
      <p>
        Plato thought that learning is remembering what the soul knew before birth. Descartes thought the idea of God was
        stamped on our minds by its maker. In 1690 John Locke, a physician and political exile, opened his Essay Concerning
        Human Understanding by attacking all such views: the mind at birth is like white paper, void of all characters. If
        nothing is written there to begin with, where do all our ideas, of colours, numbers, God and ourselves, come from?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Locke says every idea comes from one of two sources: <em>sensation</em>, the senses acting on external things, or{" "}
        <em>reflection</em>, the mind noticing its own operations. Some come from both. Sort these ideas by their source.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Sort each idea by where Locke thinks it comes from." />
    </>
  ),

  theory: (
    <>
      <Definition title="innate ideas and principles">
        <p>
          An idea or principle is <strong>innate</strong> if the mind has it from birth, not from experience. Locke&rsquo;s
          targets were the claims that certain principles are innate, both speculative, such as &ldquo;whatever is, is&rdquo;
          and &ldquo;it is impossible for the same thing to be and not to be&rdquo;, and practical, moral rules; and that
          certain ideas, such as God, are innate.
        </p>
      </Definition>

      <Example title="the argument from universal consent">
        <p>
          The usual argument for innate principles is that everyone agrees to them. Locke replies, first, that even if they
          did, universal agreement could be explained in other ways. Second, they do not: young children, and many adults,
          have not the least thought of &ldquo;whatever is, is&rdquo;. If a principle were imprinted on the mind, the mind
          would be aware of it, for &ldquo;to imprint anything on the mind without the mind&rsquo;s perceiving it seems hardly
          intelligible&rdquo;. Moral rules vary between peoples, and whole nations have lacked any idea of God.
        </p>
      </Example>

      <Definition title="the empiricist alternative">
        <p>
          The mind is a <strong>white paper</strong>, often called a blank slate. All its materials come from experience,
          by sensation or reflection, as simple ideas, such as yellow, cold or thinking, which the mind cannot make for itself.
          It then compounds, compares and abstracts these into complex ideas, such as a horse, a triangle or infinity. Locke
          promised to trace every idea, however abstract, back to these origins.
        </p>
      </Definition>

      <Remark title="replies">
        <p>
          The defender of innate ideas can say they are present as dispositions, which experience triggers rather than
          supplies. Leibniz answered Locke in his New Essays: the mind is not a blank slate but a block of marble veined so
          that it will more readily take one shape than another. And Locke&rsquo;s critics ask how reflection could yield
          necessary truths, which no number of experiences shows to be necessary. Debates about innateness continue in
          linguistics and psychology, for example over whether children are born with a capacity for grammar.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "paper",
      rung: "check",
      prompt: <p>What does Locke compare the mind at birth to?</p>,
      answer: { kind: "choice", options: ["A block of veined marble", "White paper, void of all characters", "A mirror", "A library"], correct: [1] },
    },
    {
      key: "sources",
      rung: "check",
      prompt: <p>What are Locke&rsquo;s two sources of ideas?</p>,
      answer: { kind: "choice", options: ["Reason and faith", "Sensation and reflection", "Memory and imagination", "God and nature"], correct: [1] },
    },
    {
      key: "consent",
      rung: "apply",
      prompt: <p>How does Locke reply to the argument from universal consent?</p>,
      answer: {
        kind: "choice",
        options: [
          "He accepts it.",
          "Universal agreement would not prove innateness, and in any case children and many adults do not assent to the supposed principles.",
          "He says only philosophers count.",
          "He says principles are innate but ideas are not.",
        ],
        correct: [1],
      },
    },
    {
      key: "marble",
      rung: "apply",
      prompt: <p>What does Leibniz&rsquo;s image of veined marble suggest?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the mind is hard and unchangeable.",
          "That innate knowledge may exist as a disposition, which experience brings out, as the veins in marble favour one shape.",
          "That ideas are made of stone.",
          "That the mind is blank.",
        ],
        correct: [1],
      },
    },
    {
      key: "complex",
      rung: "apply",
      prompt: <p>On Locke&rsquo;s account, how do we get the idea of a unicorn, which nobody has seen?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is innate.",
          "The mind combines simple ideas from experience, such as horse and horn, into a complex idea.",
          "By reflection alone.",
          "We cannot have it.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Set out one of Locke&rsquo;s arguments against innate principles and give the best reply on behalf of the innatist.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States an argument, such as the failure of universal consent, or the claim that an imprinted principle would be perceived.",
          "Gives a reply, such as innate ideas being dispositions or capacities, and says whether it works.",
        ],
      },
    },
    {
      key: "necessary",
      rung: "stretch",
      prompt: <p>Can an empiricist account for our knowledge that 7 + 5 = 12 holds necessarily, everywhere and always? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the challenge: experience shows what is the case, not what must be the case.",
          "Considers an empiricist answer, such as truths about relations between our own ideas, and judges it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what innate ideas are, Locke's arguments against them, his account of sensation, reflection, and simple and complex ideas, and Leibniz's reply.",

  glimpse: (
    <p>
      The next lesson asks how far our ideas resemble the things that cause them, through Locke&rsquo;s distinction between
      primary and secondary qualities. Hume will sharpen the empiricist programme, and Kant will ask how necessary truths can
      be known at all.
    </p>
  ),
};
