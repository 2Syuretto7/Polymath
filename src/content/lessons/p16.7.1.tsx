import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["law", "accident"];
const ITEMS: SortItem[] = [
  { text: "All spheres of uranium-235 are less than a mile in diameter.", cat: "law", why: "A sphere that large would exceed the critical mass and explode; physics rules it out." },
  { text: "All spheres of gold are less than a mile in diameter.", cat: "accident", why: "True, as it happens, but nothing in physics prevents such a sphere; there just is not that much gold in one place." },
  { text: "Nothing accelerates from below to beyond the speed of light.", cat: "law", why: "A consequence of relativity: it supports counterfactuals such as ‘if this probe were pushed harder, it still would not pass light speed’." },
  { text: "Every coin in my pocket today is made of silver.", cat: "accident", why: "It would not follow that a copper coin, if put in my pocket, would turn to silver." },
  { text: "Copper conducts electricity.", cat: "law", why: "It supports ‘if this wire were copper, it would conduct’, and it is explained by the electron structure of the metal." },
  { text: "Everyone at this table is wearing blue.", cat: "accident", why: "A local coincidence that supports no counterfactuals and explains nothing." },
  { text: "Unsupported objects near the Earth’s surface fall.", cat: "law", why: "It follows from gravitation and supports predictions about cases never observed." },
  { text: "All the people in this village are under two metres tall.", cat: "accident", why: "True of this village by chance; a taller visitor would not shrink." },
];

export const lesson: LessonContent = {
  id: "p16.7.1",
  minutes: 80,
  links: {
    revisits: ["p16.5.1", "p7.5.2", "p16.4.2"],
    foreshadows: ["p16.7.2", "p27.4.1", "p27.4.2"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;No sphere of gold is a mile wide&rdquo; and &ldquo;no sphere of uranium-235 is a mile wide&rdquo; are both
        true universal generalisations, and they have exactly the same logical form. Yet one is a law of nature and the other
        a cosmic accident. What does the difference consist in?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each true generalisation: a law of nature, or an accidental truth?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Law of nature, or accidental generalisation?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the marks of lawhood">
        <p>
          Laws <strong>support counterfactuals</strong>: if this were a sphere of uranium-235, it would be less than a mile
          wide. They <strong>explain</strong> their instances, which is why the DN model required them. And they are{" "}
          <strong>confirmed by their instances</strong> in a way accidents are not. The question is what laws are, such that
          they have these features.
        </p>
      </Definition>

      <Example title="the regularity view and the best system">
        <p>
          Humeans hold that the world is a mosaic of particular facts and laws are regularities in it. A plain regularity view
          cannot separate gold from uranium. David Lewis, following Mill and Ramsey, proposed the{" "}
          <strong>best system account</strong>: the laws are the generalisations that appear in the deductive system of all
          truths that best balances <strong>simplicity</strong> and <strong>strength</strong>. The uranium generalisation
          follows from simple, strong physics; the gold one would have to be added by hand.
        </p>
      </Example>

      <Definition title="governing laws">
        <p>
          David Armstrong, Fred Dretske and Michael Tooley proposed that laws are relations of{" "}
          <strong>necessitation</strong> between universals: being F necessitates being G, written N(F, G). The regularity is
          a consequence of the law, not the law itself, which explains why laws support counterfactuals. Others, such as
          Alexander Bird, ground laws in <strong>dispositional essences</strong>: it is the nature of charge to repel like
          charge.
        </p>
      </Definition>

      <Remark title="the trade-offs">
        <p>
          The best system account keeps the world free of mysterious necessity, but makes laws depend on our standards of
          simplicity and seems unable to explain why the regularities hold. Governing views explain this, but critics such as
          van Fraassen and Lewis asked how a relation between universals could <em>make</em> anything happen: naming it
          &ldquo;necessitation&rdquo; does not explain it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "marks",
      rung: "check",
      prompt: <p>Which feature distinguishes laws from accidental generalisations?</p>,
      answer: { kind: "choice", options: ["Laws support counterfactuals", "Laws are universally quantified", "Laws are true", "Laws mention only observable things"], correct: [0] },
    },
    {
      key: "bsa",
      rung: "check",
      prompt: <p>On the best system account, what makes a generalisation a law?</p>,
      answer: {
        kind: "choice",
        options: [
          "It belongs to the true deductive system that best balances simplicity and strength.",
          "It expresses a necessitation relation between universals.",
          "It has been confirmed many times.",
          "It is about fundamental particles.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how is &ldquo;every coin in my pocket today is made of silver&rdquo; classified?</p>,
      answer: { kind: "choice", options: ["Accident", "Law", "Neither true nor false", "A definition"], correct: [0] },
    },
    {
      key: "dta",
      rung: "apply",
      prompt: <p>According to Dretske, Tooley and Armstrong, what is the relation between a law and the corresponding regularity?</p>,
      answer: {
        kind: "choice",
        options: [
          "The law, a necessitation between universals, explains the regularity.",
          "The law is identical to the regularity.",
          "The regularity explains the law.",
          "They are unrelated.",
        ],
        correct: [0],
      },
    },
    {
      key: "cf",
      rung: "apply",
      prompt: <p>Which counterfactual is supported by a law?</p>,
      answer: {
        kind: "choice",
        options: [
          "If this wire were made of copper, it would conduct electricity.",
          "If this copper coin were in my pocket, it would be silver.",
          "If this visitor came to the village, they would be under two metres tall.",
          "If I sat at this table, I would be wearing blue.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Are laws of nature merely regularities, or do they govern what happens? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a regularity view, such as the best system account, and how it separates laws from accidents.",
          "States a governing view, such as necessitation between universals, and a problem for one of the two.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Biology has generalisations such as Mendel&rsquo;s laws, which have exceptions. Are they laws of nature?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the exceptions, such as linked genes, and that the generalisations depend on contingent evolutionary history.",
          "Considers whether laws must be exceptionless or may hold ceteris paribus.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between laws and accidental generalisations, the best system account of Mill, Ramsey and Lewis, and the view that laws are necessitation relations between universals.",

  glimpse: (
    <p>
      Next, reduction: when can one science, with its laws, be derived from another, as thermodynamics from mechanics?
    </p>
  ),
};
