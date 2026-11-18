import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["lifeworld", "scientific idealisation"];
const ITEMS: SortItem[] = [
  { text: "The sun rises over the hills each morning.", cat: "lifeworld", why: "This is how the day is lived and spoken of, before any astronomy." },
  { text: "The Earth turns once every 23 hours 56 minutes relative to the stars.", cat: "scientific idealisation", why: "A measured, mathematised fact, reached by abstracting from how mornings are experienced." },
  { text: "This cup of chai is too hot to drink.", cat: "lifeworld", why: "Warmth as felt and as mattering to what I am doing." },
  { text: "A perfectly straight line has length but no width.", cat: "scientific idealisation", why: "A limit-shape no one has seen, which Husserl traced back to the practice of making edges straighter." },
  { text: "This plank is straight enough for the shelf.", cat: "lifeworld", why: "Straightness as it matters in practice, good enough for a purpose." },
  { text: "The sky’s colour is light of wavelength about 470 nanometres.", cat: "scientific idealisation", why: "A colour replaced by a quantity, which is Galileo’s move as Husserl tells it." },
  { text: "Water is wet and quenches thirst.", cat: "lifeworld", why: "Water as encountered and used." },
  { text: "Temperature is mean molecular kinetic energy.", cat: "scientific idealisation", why: "A theoretical identification that sits on top of felt hot and cold." },
];

export const lesson: LessonContent = {
  id: "p19.1.3",
  minutes: 75,
  links: {
    revisits: ["p19.1.2", "p0.1.2", "p4.3.4"],
    foreshadows: ["p19.2.2", "p19.2.5", "p19.5.1"],
  },

  puzzle: (
    <>
      <p>
        Physics tells you that the chair you sit on is mostly empty space and that its colour is a wavelength. Yet the
        physicist checks her instruments by looking at solid dials with coloured needles, and meets her colleagues in rooms
        full of chairs. Which world is the real one, and which comes first?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each statement: does it belong to the lifeworld, or to science&rsquo;s idealised picture of it?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Lifeworld or idealisation?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the lifeworld">
        <p>
          In <em>The Crisis of European Sciences and Transcendental Phenomenology</em> (1936), written as Nazism drove him
          from academic life, Husserl introduced the <strong>lifeworld</strong> (Lebenswelt): the world as we live in it,
          perceive it and act in it, always already given, shared with others, and taken for granted. It is the ground on which
          every science is built, and the place where its results must finally be checked and used.
        </p>
      </Definition>

      <Example title="Galileo’s mathematisation of nature">
        <p>
          Husserl&rsquo;s story: Galileo inherited geometry, whose ideal shapes had grown out of practical arts such as
          surveying, and treated nature itself as a mathematical manifold. Secondary qualities such as colour and warmth were
          to be indirectly mathematised through primary ones. The method succeeded brilliantly, but it threw a{" "}
          <strong>garb of ideas</strong> over the lifeworld, and we came to take the garb for true being. Galileo was, in
          Husserl&rsquo;s phrase, at once a discovering and a concealing genius.
        </p>
      </Example>

      <Definition title="the crisis">
        <p>
          The crisis is not that the sciences fail at their tasks; it is that they have lost their meaning for life. Having
          forgotten their origin in the lifeworld, they cannot say why they matter, and reason itself, Husserl feared, was
          being abandoned to irrationalism. The remedy was not less science but a recovery of its sense, through
          phenomenology of the lifeworld.
        </p>
      </Definition>

      <Remark title="afterlife">
        <p>
          The lifeworld became one of phenomenology&rsquo;s most influential ideas. Heidegger&rsquo;s being-in-the-world,
          Merleau-Ponty&rsquo;s primacy of perception, Habermas&rsquo;s social theory and parts of the philosophy of science
          all draw on it. Critics ask whether there is a single pre-scientific lifeworld at all, given how deeply science and
          technology now shape everyday experience.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lw",
      rung: "check",
      prompt: <p>What is the lifeworld?</p>,
      answer: {
        kind: "choice",
        options: [
          "The world as lived, perceived and shared, taken for granted before any science",
          "The world of living things studied by biology",
          "A possible world",
          "The world after the epoché",
        ],
        correct: [0],
      },
    },
    {
      key: "crisis",
      rung: "check",
      prompt: <p>What, for Husserl, is the crisis of the European sciences?</p>,
      answer: {
        kind: "choice",
        options: [
          "The sciences have lost their meaning for human life, having forgotten their origin in the lifeworld.",
          "The sciences make too many errors.",
          "The sciences are underfunded.",
          "Physics contradicts biology.",
        ],
        correct: [0],
      },
    },
    {
      key: "galileo",
      rung: "apply",
      prompt: <p>Why did Husserl call Galileo &ldquo;at once a discovering and a concealing genius&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "He discovered the mathematical method of physics, but concealed the lifeworld it rests on.",
          "He hid his discoveries from the Church.",
          "He discovered moons and concealed sunspots.",
          "He was both an astronomer and a painter.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the statements belong to the lifeworld?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "line",
      rung: "apply",
      prompt: <p>Where, on Husserl&rsquo;s account, does the idea of a perfectly straight line come from?</p>,
      answer: {
        kind: "choice",
        options: [
          "From practices of making things straighter and straighter, idealised to a limit",
          "From innate ideas",
          "From observing perfectly straight objects",
          "From the definition of a word",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the lifeworld more fundamental than the world described by physics? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Husserl’s claim that science is founded on, and checked in, the lifeworld.",
          "Considers the opposing view, that physics describes what really exists and the lifeworld is appearance.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does a smartphone belong to the lifeworld? What does your answer say about the line between lifeworld and science?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that science-made things become familiar and taken for granted in everyday life.",
          "Considers whether the lifeworld is fixed or historically changing.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Husserl&rsquo;s most famous student, Heidegger, who asked a question he thought phenomenology had forgotten: what
      is it to be, and what kind of being are we?
    </p>
  ),
};
