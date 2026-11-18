import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["bringing-forth", "challenging-forth"];
const ITEMS: SortItem[] = [
  { text: "An old wooden bridge spans the Rhine, letting the river be a river.", cat: "bringing-forth", why: "Heidegger’s own contrast: the bridge is built into the river without turning it into a supply." },
  { text: "A hydroelectric plant sets the Rhine to deliver water pressure.", cat: "challenging-forth", why: "The river now shows up as a power supplier, standing reserve for the grid." },
  { text: "A silversmith shapes a chalice for the altar.", cat: "bringing-forth", why: "Heidegger’s example of the four causes working together to let something come forth." },
  { text: "The forest is managed as a stock of timber for paper.", cat: "challenging-forth", why: "Trees appear only as resource, ordered to be on call." },
  { text: "A farmer sows grain and entrusts it to the forces of growth.", cat: "bringing-forth", why: "The older way of farming tends what grows rather than setting upon it." },
  { text: "Coal is mined and stockpiled, on call to release its energy.", cat: "challenging-forth", why: "Nature is challenged to yield energy that can be stored and switched about." },
  { text: "Employees are tracked as human resources to be optimised.", cat: "challenging-forth", why: "Enframing reaches human beings too: they show up as stock." },
  { text: "A poem lets the evening appear as it is.", cat: "bringing-forth", why: "Poiēsis in the widest sense; Heidegger thought art might hold a saving power." },
];

export const lesson: LessonContent = {
  id: "p19.2.5",
  minutes: 75,
  links: {
    revisits: ["p19.2.2", "p4.5.4", "p19.2.4"],
    foreshadows: ["p19.3.1", "p19.5.2", "p34.1.1"],
  },

  puzzle: (
    <>
      <p>
        We think of technology as tools: neutral means that we use well or badly. But look at an airport, a data centre or a
        dam, and ask what the world looks like from inside them. Everything, the river, the forest, even people, seems to
        show up as a resource waiting to be used. Is that just how we use technology, or is technology a way the world
        shows itself?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each example: does it let something come forth, or challenge it to deliver?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Bringing-forth or challenging-forth?" />
    </>
  ),

  theory: (
    <>
      <Definition title="technology as revealing">
        <p>
          In &ldquo;The Question Concerning Technology&rdquo; (1954), Heidegger grants that the instrumental definition, means
          to an end, is correct, but says it is not true in the deepest sense. Following Aristotle&rsquo;s four causes, he
          interprets making as <strong>bringing-forth</strong> (poiēsis): a way of revealing, of letting something come into
          the open. Technology, too, is a mode of revealing.
        </p>
      </Definition>

      <Definition title="enframing and standing reserve">
        <p>
          Modern technology reveals by <strong>challenging-forth</strong>: it sets upon nature, demanding that it supply
          energy that can be extracted, stored and distributed. What is revealed this way is{" "}
          <strong>standing reserve</strong> (Bestand), stock on call for further ordering. The essence of modern technology is{" "}
          <strong>enframing</strong> (Gestell), the gathering that sets us upon ordering everything as standing reserve. It is
          not itself anything technological, and not something we simply choose.
        </p>
      </Definition>

      <Example title="the Rhine">
        <p>
          The old bridge joined bank to bank and left the river as it was. The power plant is not built into the river; the
          river is built into the power plant, and becomes a water-pressure supplier. Even the Rhine as a landscape becomes an
          object on call for the tourist industry.
        </p>
      </Example>

      <Remark title="the danger and the saving power">
        <p>
          The danger is that enframing becomes the only way anything is revealed, so that human beings too appear as stock,
          and lose sight of the fact that they are the ones to whom things are revealed at all. Quoting Hölderlin, Heidegger
          writes that where danger is, the saving power also grows: reflection on technology&rsquo;s essence, and the arts as
          another kind of revealing, might let us relate to technology freely. Critics found this either profound or evasive,
          and noted his silence about the industrial horrors of his own time.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "instr",
      rung: "check",
      prompt: <p>What does Heidegger say about the instrumental definition of technology?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is correct but does not reach technology’s essence.",
          "It is simply false.",
          "It is the whole truth.",
          "It applies only to ancient technology.",
        ],
        correct: [0],
      },
    },
    {
      key: "reserve",
      rung: "check",
      prompt: <p>What is standing reserve?</p>,
      answer: {
        kind: "choice",
        options: ["What is revealed as stock on call for further ordering", "A military reserve", "Untouched wilderness", "The savings of a nation"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many examples are challenging-forth?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "causes",
      rung: "apply",
      prompt: <p>Which earlier idea does Heidegger use to interpret making as bringing-forth?</p>,
      answer: { kind: "choice", options: ["Aristotle’s four causes", "Plato’s Forms", "Descartes’s cogito", "Kant’s categories"], correct: [0] },
    },
    {
      key: "people",
      rung: "apply",
      prompt: <p>Which is the danger Heidegger sees in enframing?</p>,
      answer: {
        kind: "choice",
        options: [
          "That everything, including human beings, comes to show up only as resource",
          "That machines will rebel",
          "That technology will stop progressing",
          "That energy will run out",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is technology a neutral tool? Argue briefly, with or against Heidegger.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Heidegger’s view that technology is a way of revealing that shapes how everything shows up.",
          "Considers the instrumental view, that what matters is only how technology is used.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does a smartphone challenge-forth its user? Use Heidegger&rsquo;s terms.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies standing reserve, for example to attention or data as a resource on call.",
          "Considers ways the device might also bring-forth, or be used freely.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Sartre: consciousness as nothingness, and the everyday ways we try to escape our own freedom.
    </p>
  ),
};
