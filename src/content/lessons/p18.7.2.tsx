import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["necessary, a priori", "necessary, a posteriori", "contingent, a priori", "contingent, a posteriori"];
const ITEMS: SortItem[] = [
  { text: "2 + 2 = 4", cat: "necessary, a priori", why: "True in every possible world, and knowable without experience." },
  { text: "Hesperus is Phosphorus.", cat: "necessary, a posteriori", why: "Both names rigidly designate Venus, so the identity holds in every world; but it took astronomy to discover it." },
  { text: "Water is H₂O.", cat: "necessary, a posteriori", why: "If water is H₂O, nothing that is not H₂O could be water; the chemistry was an empirical discovery." },
  { text: "This table is not made of ice.", cat: "necessary, a posteriori", why: "Kripke argues that a table’s origin and material are essential to it, though we learn them by looking." },
  { text: "Stick S is one metre long at time t₀.", cat: "contingent, a priori", why: "Whoever fixes the reference of ‘one metre’ by stick S knows this without measuring, yet S could have been longer." },
  { text: "Nixon won the 1968 election.", cat: "contingent, a posteriori", why: "He might have lost, and we know he won only by experience." },
  { text: "Gold has atomic number 79.", cat: "necessary, a posteriori", why: "A natural kind term rigidly picks out a kind; its underlying nature is essential, but discovered empirically." },
  { text: "Aristotle taught Alexander.", cat: "contingent, a posteriori", why: "‘Aristotle’ names the same man in every world, and in some of them he never taught Alexander." },
];

export const lesson: LessonContent = {
  id: "p18.7.2",
  minutes: 80,
  links: {
    revisits: ["p18.7.1", "p15.2.1", "p11.3.4"],
    foreshadows: ["p18.7.3", "p27.5.1", "p23.2.1"],
  },

  puzzle: (
    <>
      <p>
        Ancient astronomers did not know that the evening star and the morning star are the same planet. Discovering it took
        observation. Yet once discovered, could it have turned out otherwise? Could Venus have failed to be Venus? If not,
        here is a necessary truth that had to be learned from experience. Was that not supposed to be impossible?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each sentence by its modal status and by how it is known.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which kind of truth is it?" />
    </>
  ),

  theory: (
    <>
      <Definition title="three distinctions pulled apart">
        <p>
          In lectures given in 1970 and published as <em>Naming and Necessity</em>, Saul Kripke insisted that three
          distinctions often run together are different: <strong>necessary</strong> and contingent is metaphysical, about
          how things could have been; <strong>a priori</strong> and a posteriori is epistemological, about how we know; and{" "}
          <strong>analytic</strong> and synthetic is semantic, about truth in virtue of meaning. There is no reason in advance
          to think they coincide.
        </p>
      </Definition>

      <Definition title="rigid designation">
        <p>
          A <strong>rigid designator</strong> picks out the same object in every possible world in which that object exists.
          Proper names are rigid: &ldquo;Aristotle&rdquo; names the same man in worlds where he never taught Alexander.
          Definite descriptions such as &ldquo;the teacher of Alexander&rdquo; usually are not. So names cannot be
          abbreviated descriptions, against Frege and Russell. Reference is fixed instead by an initial baptism and a causal
          chain of communication.
        </p>
      </Definition>

      <Example title="necessary a posteriori and contingent a priori">
        <p>
          If a and b are rigid and a = b is true, it is true in every world: identity statements between names are
          necessary, though they may be learned by experience. With natural kind terms, &ldquo;water is H₂O&rdquo; is
          necessary and a posteriori. Conversely, someone who fixes the reference of &ldquo;one metre&rdquo; by a particular
          stick knows a priori that the stick is one metre long, though it could have been longer.
        </p>
      </Example>

      <Remark title="essentialism revived">
        <p>
          Kripke defended the intelligibility of <strong>essential</strong> properties, against Quine&rsquo;s scepticism
          about de re modality: a thing&rsquo;s origin, and the stuff it is made of, may be essential to it. Together with
          possible-world semantics for modal logic, which Kripke had developed as a teenager, this made modal metaphysics
          respectable again, and set much of the agenda for the following decades.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rigid",
      rung: "check",
      prompt: <p>What is a rigid designator?</p>,
      answer: {
        kind: "choice",
        options: [
          "An expression that picks out the same object in every possible world where it exists.",
          "A name that cannot be changed.",
          "A definite description.",
          "A word with only one meaning.",
        ],
        correct: [0],
      },
    },
    {
      key: "three",
      rung: "check",
      prompt: <p>Which distinction is epistemological, according to Kripke?</p>,
      answer: { kind: "choice", options: ["A priori and a posteriori", "Necessary and contingent", "Analytic and synthetic", "Rigid and non-rigid"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the sentences are necessary but a posteriori?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "metre",
      rung: "apply",
      prompt: <p>Why is &ldquo;stick S is one metre long&rdquo; contingent, for the person who fixed the metre by S?</p>,
      answer: {
        kind: "choice",
        options: [
          "‘One metre’ rigidly names a length, and S could have had a different length.",
          "S might be lost.",
          "The metre is defined by light, not by sticks.",
          "It is analytic.",
        ],
        correct: [0],
      },
    },
    {
      key: "desc",
      rung: "apply",
      prompt: <p>Why did Kripke reject the view that &ldquo;Aristotle&rdquo; means &ldquo;the teacher of Alexander&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "Aristotle might not have taught Alexander, yet the name would still refer to him.",
          "Aristotle did not teach Alexander.",
          "Descriptions cannot refer.",
          "Names have no meaning.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is &ldquo;water is H₂O&rdquo; really necessary? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Kripke’s argument from the rigidity of natural kind terms.",
          "Considers an objection, such as Putnam’s Twin Earth variants or doubts about whether ‘water’ is rigid.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If it is necessary that Hesperus is Phosphorus, what were the ancients ignorant of before the discovery?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that they did not lack knowledge of a contingent fact about Venus itself.",
          "Considers Kripke’s answer, that they could have been in an epistemically identical situation in which the two heavenly bodies were distinct.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, David Lewis: modal realism, counterparts, convention and the attempt to build a whole metaphysics on a Humean
      mosaic.
    </p>
  ),
};
