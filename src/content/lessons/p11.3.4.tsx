import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["essential", "accidental"];
const ITEMS: SortItem[] = [
  { text: "Water is H₂O.", cat: "essential", why: "Kripke and Putnam: being H₂O is what water is, so it is necessary, though discovered by experiment." },
  { text: "Gold has atomic number 79.", cat: "essential", why: "A natural kind’s underlying structure is widely taken to be essential to it." },
  { text: "Gold is valuable.", cat: "accidental", why: "Gold could have been common and cheap; its value depends on us." },
  { text: "The number 9 is odd.", cat: "essential", why: "No possible situation has 9 even." },
  { text: "Gandhi was a lawyer.", cat: "accidental", why: "He could have chosen another profession." },
  { text: "Gandhi was human.", cat: "essential", why: "On kind essentialism, nothing that was not human could have been Gandhi." },
  { text: "Gandhi was born to Karamchand and Putlibai.", cat: "essential", why: "Kripke’s essentiality of origin: a person could not have come from a different sperm and egg. Many dispute this." },
  { text: "This table is in the dining room.", cat: "accidental", why: "It could be moved without ceasing to exist." },
];

export const lesson: LessonContent = {
  id: "p11.3.4",
  minutes: 80,
  links: {
    revisits: ["p11.3.1", "p11.3.2", "p4.5.3"],
    foreshadows: ["p15.2.1", "p29.2.1", "p11.5.2"],
  },

  puzzle: (
    <>
      <p>
        Gandhi could have been an engineer. Could he have been a tree? Could he have been born to different parents, in a
        different century? Some of a thing&rsquo;s properties seem optional, others seem to make it what it is. Is that
        distinction real, or does it depend on how we describe the thing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each property as essential to its bearer or accidental. Some sortings are contested.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Essential or accidental?" />
    </>
  ),

  theory: (
    <>
      <Definition title="essential and accidental properties">
        <p>
          A property is <strong>essential</strong> to a thing if the thing could not exist without it: it has the property in
          every possible world where it exists. Otherwise it is <strong>accidental</strong>. <strong>Essentialism</strong>{" "}
          says some things have some properties essentially, independently of how they are described.
        </p>
      </Definition>

      <ArgumentStepViz
        title="Quine's mathematical cyclist"
        steps={[
          { claim: "Mathematicians are necessarily rational, but not necessarily two-legged.", kind: "premise", note: "So it seems, describing someone as a mathematician." },
          { claim: "Cyclists are necessarily two-legged, but not necessarily rational.", kind: "premise", note: "So it seems, describing someone as a cyclist." },
          { claim: "Consider someone who is both a mathematician and a cyclist.", kind: "premise", note: "One person, two descriptions." },
          { claim: "So whether they are necessarily rational depends on how we describe them.", kind: "conclusion", note: "Quine: de re necessity makes no sense apart from a description.", objection: "Essentialists distinguish ‘necessarily, all mathematicians are rational’ (de dicto) from ‘this person is necessarily rational’ (de re), and the second is simply false." },
        ]}
      />

      <Example title="Kripke's revival">
        <p>
          Kripke argued that names are <strong>rigid designators</strong>, picking out the same thing in every world. Then
          &ldquo;Hesperus is Phosphorus&rdquo;, if true, is necessary, though discovered empirically. Likewise &ldquo;water is
          H₂O&rdquo;: a necessary truth known a posteriori. Essences can be discovered by science.
        </p>
      </Example>

      <Remark title="modal and real definition">
        <p>
          Kit Fine argued that the modal account is too coarse. Socrates necessarily belongs to the set whose only member is
          Socrates, but it is no part of what Socrates is to belong to a set. Fine proposed that essence is prior to necessity:
          an essence is a real definition, saying what a thing is, and necessity flows from it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a property essential to a thing, on the modal account?</p>,
      answer: { kind: "choice", options: ["When the thing has it now", "When the thing has it in every world where it exists", "When everyone believes it", "When it is the most important property"], correct: [1] },
    },
    {
      key: "acc",
      rung: "check",
      prompt: <p>Which property is most plausibly accidental to the Taj Mahal?</p>,
      answer: { kind: "choice", options: ["Being a building", "Being visited by many tourists", "Being made of the material it is made of", "Being self-identical"], correct: [1] },
    },
    {
      key: "quine",
      rung: "apply",
      prompt: <p>What does Quine&rsquo;s mathematical cyclist aim to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That cyclists are irrational",
          "That whether a thing has a property necessarily seems to depend on how we describe it",
          "That mathematics is necessary",
          "That essences are physical",
        ],
        correct: [1],
      },
    },
    {
      key: "rigid",
      rung: "apply",
      prompt: <p>Why does Kripke think &ldquo;Hesperus is Phosphorus&rdquo; is necessary?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is known a priori",
          "Because both names rigidly designate the same object, so they co-refer in every world",
          "Because astronomers agree",
          "Because it is a definition",
        ],
        correct: [1],
      },
    },
    {
      key: "fine",
      rung: "apply",
      prompt: <p>What does Fine&rsquo;s example of Socrates and his singleton set show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That sets do not exist",
          "That a property can be necessary to a thing without being part of its essence",
          "That Socrates is a set",
          "That essence is accidental",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Could you have had different biological parents? Argue briefly, with reference to the essentiality of origin.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Kripke’s essentiality of origin.",
          "Considers a reason for or against it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "aposteriori",
      rung: "stretch",
      prompt: <p>How can something be necessary yet known only through experiment, like &ldquo;water is H₂O&rdquo;?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes metaphysical necessity from a priori knowability.",
          "Explains Kripke’s view, or raises a doubt about it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between essential and accidental properties, Quine's mathematical cyclist and the de re and de dicto reply, Kripke's necessary a posteriori truths, and Fine's objection to the modal account of essence.",

  glimpse: (
    <p>
      Next, Metaphysics turns to causation. Philosophy of language studies Kripke on naming, graduate work examines the
      necessary a posteriori, and the problem of material constitution tests essentialist intuitions.
    </p>
  ),
};
