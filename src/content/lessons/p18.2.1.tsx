import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["British idealism", "Moore and Russell"];
const ITEMS: SortItem[] = [
  { text: "Reality is a single whole, and separate things are mere appearances.", cat: "British idealism", why: "Bradley’s monism: only the Absolute is fully real." },
  { text: "Every relation is grounded in the natures of the things related.", cat: "British idealism", why: "The doctrine of internal relations, which Russell attacked." },
  { text: "To be is to be perceived.", cat: "British idealism", why: "Esse est percipi, the principle Moore set out to refute in 1903." },
  { text: "There are many independent things, and relations between them are real.", cat: "Moore and Russell", why: "Russell’s pluralism and his defence of external relations." },
  { text: "In awareness of blue, the awareness and the blue are distinct.", cat: "Moore and Russell", why: "Moore’s distinction between the act of consciousness and its object." },
  { text: "Here is one hand, and here is another; so external things exist.", cat: "Moore and Russell", why: "Moore’s proof of an external world, from 1939." },
  { text: "Time is unreal, since it involves contradictions.", cat: "British idealism", why: "A thesis of McTaggart and Bradley, both idealists." },
  { text: "‘A is larger than B’ cannot be reduced to a property of A and a property of B.", cat: "Moore and Russell", why: "Russell’s argument that asymmetric relations are irreducible." },
];

export const lesson: LessonContent = {
  id: "p18.2.1",
  minutes: 80,
  links: {
    revisits: ["p18.1.3", "p1.1.1", "p11.1.1"],
    foreshadows: ["p18.2.2", "p18.5.1", "p18.3.1"],
  },

  puzzle: (
    <>
      <p>
        Around 1900 the leading philosophers in Britain held that time is unreal, that separate objects are illusions, and
        that reality is one spiritual whole. Two young Cambridge philosophers, G. E. Moore and Bertrand Russell, had been
        taught all this, and rejected it. What made them think the plain view of the world was right after all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each claim by who held it, the British idealists or Moore and Russell.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Who held it?" />
    </>
  ),

  theory: (
    <>
      <Definition title="British idealism">
        <p>
          F. H. Bradley&rsquo;s <em>Appearance and Reality</em> (1893) argued that relations are incoherent: if a relation
          relates two things, something must relate the relation to each of them, and so on without end. So plurality and
          relations are mere appearance, and only the Absolute, a single all-inclusive experience, is real. A key premise was
          the doctrine of <strong>internal relations</strong>: every relation is grounded in the natures of its terms, so
          that each thing is what it is only through its relations to everything else.
        </p>
      </Definition>

      <Example title="Moore’s refutation">
        <p>
          In &ldquo;The Refutation of Idealism&rdquo; (1903), Moore attacked the principle that to be is to be perceived. In
          every sensation, he argued, there is the act of awareness, which is the same in a sensation of blue and of green,
          and its object, which differs. The object is distinct from the awareness of it, so nothing in the nature of
          experience shows that its objects exist only in being experienced. Later, in &ldquo;A Defence of Common
          Sense&rdquo; (1925) and &ldquo;Proof of an External World&rdquo; (1939), Moore held that he knew more certainly
          that he had hands than any premise of a sceptical or idealist argument.
        </p>
      </Example>

      <Definition title="Russell on relations">
        <p>
          Russell argued that asymmetric relations, such as greater than or before, cannot be reduced to properties of their
          terms. Saying that A has magnitude a and B magnitude b does not yet say which is greater; that needs a relation
          between a and b. So relations are real and <strong>external</strong>: they do not follow from the natures of their
          terms. Without them there could be no series, no order and no mathematics, and the new logic of relations made
          them precise.
        </p>
      </Definition>

      <Remark title="significance">
        <p>
          The revolt set the style of analytic philosophy: taking common sense and science seriously, breaking problems into
          precise parts, and using logic as the tool of analysis. Critics say Moore assumed what idealists denied, and
          historians now read Bradley more sympathetically than his opponents did.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "internal",
      rung: "check",
      prompt: <p>What does the doctrine of internal relations say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every relation is grounded in the natures of the things it relates.",
          "Relations exist only inside the mind.",
          "No two things are ever related.",
          "Relations are more real than things.",
        ],
        correct: [0],
      },
    },
    {
      key: "moore",
      rung: "check",
      prompt: <p>What distinction did Moore use against the principle that to be is to be perceived?</p>,
      answer: {
        kind: "choice",
        options: ["Between the act of awareness and its object", "Between sense and reference", "Between analytic and synthetic", "Between primary and secondary qualities"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, to whom does &ldquo;Time is unreal, since it involves contradictions&rdquo; belong?</p>,
      answer: { kind: "choice", options: ["British idealism", "Moore and Russell"], correct: [0] },
    },
    {
      key: "asym",
      rung: "apply",
      prompt: <p>Why did Russell think asymmetric relations refute the doctrine of internal relations?</p>,
      answer: {
        kind: "choice",
        options: [
          "Giving each term a property, such as a magnitude, still leaves open which is greater, so a relation remains.",
          "Because asymmetric relations are contradictory.",
          "Because only symmetric relations exist.",
          "Because relations cannot be expressed in logic.",
        ],
        correct: [0],
      },
    },
    {
      key: "hands",
      rung: "apply",
      prompt: <p>What is the structure of Moore&rsquo;s reply to the sceptic in &ldquo;Proof of an External World&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "He is more certain that he has hands than of any premise used to argue that he cannot know it.",
          "He proves the existence of God first.",
          "He grants that he cannot know he has hands.",
          "He argues that the senses never deceive.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Moore&rsquo;s appeal to common sense a good answer to idealism or scepticism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Moore’s strategy of trusting common-sense certainties over philosophical premises.",
          "Considers an objection, such as that it begs the question against the idealist or sceptic.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Bradley argued that if a relation needs something to relate it to its terms, a regress follows. Does Russell&rsquo;s view of external relations escape this regress?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Bradley’s regress argument.",
          "Considers a reply, such as that relations relate directly without further relations, and whether that is satisfying.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, logical atomism: Russell&rsquo;s picture of a world of simple facts and a logically perfect language to
      describe it.
    </p>
  ),
};
