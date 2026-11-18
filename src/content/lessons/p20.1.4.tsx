import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["āstika", "nāstika"];
const ITEMS: SortItem[] = [
  { text: "Nyāya: logic and the means of knowledge.", cat: "āstika", why: "Accepts Vedic authority as testimony; paired with Vaiśeṣika." },
  { text: "Buddhism: no-self and dependent origination.", cat: "nāstika", why: "Rejects the authority of the Vedas and the eternal self." },
  { text: "Vaiśeṣika: categories and atoms.", cat: "āstika", why: "An orthodox school of natural philosophy, paired with Nyāya." },
  { text: "Jainism: many-sidedness and non-violence.", cat: "nāstika", why: "Rejects Vedic authority, though it accepts souls, karma and liberation." },
  { text: "Sāṃkhya: spirit and matter.", cat: "āstika", why: "A dualist orthodox school, paired with Yoga." },
  { text: "Cārvāka: only perception, only this world.", cat: "nāstika", why: "Materialists who rejected the Vedas, rebirth and karma alike." },
  { text: "Yoga: the discipline of the mind.", cat: "āstika", why: "Patañjali’s school, sharing Sāṃkhya’s metaphysics and adding a supreme lord." },
  { text: "Mīmāṃsā: the interpretation of Vedic injunctions.", cat: "āstika", why: "The school most devoted to the Vedas’ ritual portion." },
  { text: "Ājīvika: everything is fixed by destiny.", cat: "nāstika", why: "A fatalist movement contemporary with the Buddha, outside Vedic authority." },
  { text: "Vedānta: the knowledge of brahman.", cat: "āstika", why: "Built on the Upaniṣads, the Brahma Sūtras and the Gītā." },
];

export const lesson: LessonContent = {
  id: "p20.1.4",
  minutes: 80,
  links: {
    revisits: ["p20.1.3", "p0.3.3", "p2.1.1"],
    foreshadows: ["p20.2.1", "p20.2.2", "p20.6.1"],
  },

  puzzle: (
    <>
      <p>
        A classical Indian philosophical text often begins not with its own view but with its opponent&rsquo;s, stated as
        strongly as possible, sometimes for pages. Only then does it reply. Why would a tradition build its texts around the
        views it rejects?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort the schools by whether they accept the authority of the Vedas.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Orthodox (āstika) or heterodox (nāstika)?" />
    </>
  ),

  theory: (
    <>
      <Definition title="darśana">
        <p>
          A <strong>darśana</strong>, from <em>dṛś</em>, to see, is a &ldquo;view&rdquo;: a school with a root text, usually
          in terse aphorisms (sūtras), and a long line of commentaries and sub-commentaries. Doxographers such as Mādhava in
          the fourteenth century arranged the schools in order, each refuting the one before.
        </p>
      </Definition>

      <Definition title="āstika and nāstika">
        <p>
          The usual classification counts six <strong>āstika</strong> schools, which accept the authority of the Vedas, in
          three pairs: Nyāya and Vaiśeṣika, Sāṃkhya and Yoga, Mīmāṃsā and Vedānta. The <strong>nāstika</strong> schools reject
          it: Buddhism, Jainism, Cārvāka and the Ājīvikas. The labels concern scripture, not God: Sāṃkhya and Mīmāṃsā are
          largely non-theistic yet orthodox.
        </p>
      </Definition>

      <Example title="the shape of a debate">
        <p>
          A text proceeds by stating the <strong>pūrvapakṣa</strong>, the prima facie view of an opponent, then its refutation,
          and finally the <strong>siddhānta</strong>, the established conclusion. The Nyāya Sūtra distinguishes honest debate
          aimed at truth (vāda), debate aimed only at victory (jalpa), and mere destructive criticism (vitaṇḍā), and catalogues
          fallacies and ways of losing an argument.
        </p>
      </Example>

      <Remark title="a culture of argument">
        <p>
          Because every school had to answer every other, Indian philosophy developed sophisticated theories of knowledge,
          inference and language. Buddhists and Naiyāyikas argued for a thousand years about the self and perception; Vedāntins
          answered Mīmāṃsakas on the meaning of scripture. The next chapter begins with the shared question all of them had to
          settle first: what are the valid means of knowledge?
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "astika",
      rung: "check",
      prompt: <p>What makes a school āstika?</p>,
      answer: {
        kind: "choice",
        options: ["Acceptance of the authority of the Vedas", "Belief in God", "Belief in atoms", "Use of logic"],
        correct: [0],
      },
    },
    {
      key: "purva",
      rung: "check",
      prompt: <p>What is the pūrvapakṣa?</p>,
      answer: {
        kind: "choice",
        options: ["The opponent’s view, stated before it is answered", "The final conclusion", "A list of the Vedas", "A prayer at the start"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many schools are āstika?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "samkhya",
      rung: "apply",
      prompt: <p>Sāṃkhya is largely non-theistic. Why is it still counted orthodox?</p>,
      answer: {
        kind: "choice",
        options: ["The classification concerns Vedic authority, not belief in God", "It secretly worships God", "It was founded by a priest", "It rejects the Vedas"],
        correct: [0],
      },
    },
    {
      key: "vada",
      rung: "apply",
      prompt: <p>Which kind of debate does the Nyāya Sūtra regard as aimed at truth?</p>,
      answer: { kind: "choice", options: ["Vāda", "Jalpa", "Vitaṇḍā", "None"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is stating your opponent&rsquo;s view at full strength before replying a good method for philosophy? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives a benefit, such as avoiding straw men or testing one’s own view.",
          "Gives a cost or limit, such as length or the risk of the framer choosing the opponent.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is it useful to classify philosophical schools by their attitude to a scripture? What does such a classification hide?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says what the classification captures, such as sources of authority.",
          "Says what it hides, such as shared doctrines across the divide or disagreements within it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Before two schools can argue about the self or the world, they must agree on what counts as evidence. Indian
        epistemology calls the sources of knowledge pramāṇas, and the schools differ over how many there are.
      </p>
      <p>
        Next, the pramāṇas: perception, inference, testimony, comparison and more, why the Cārvākas accepted only perception,
        and how the debate over the means of knowledge shaped everything that followed.
      </p>
    </>
  ),
};
