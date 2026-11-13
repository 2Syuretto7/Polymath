import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import { UniversalsViz } from "@/components/viz/UniversalsViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["realism", "class nominalism", "resemblance nominalism", "trope theory"];
const CASES = ["explains likeness", "separates coextensive properties", "nothing in two places at once", "particular causes", "no resemblance regress"];
const V: CaseVerdict[][] = [
  [
    { ok: true, why: "Alike things literally share one universal." },
    { ok: true, why: "Having a heart and having kidneys are different universals, even if the same things have them." },
    { ok: false, why: "Redness is wholly present in every red thing at once." },
    { ok: false, why: "The universal mass is the same in every massive thing, so it is unclear how this tomato’s mass in particular bends the scale." },
    { ok: true, why: "Exact likeness is identity of universals, not a further resemblance relation." },
  ],
  [
    { ok: true, why: "Alike things belong to the same class, though it is unclear why that class is special." },
    { ok: false, why: "If the same things have both properties, the classes coincide, unless possible things are counted." },
    { ok: true, why: "Only particulars and classes of them exist." },
    { ok: false, why: "Classes are abstract, and a class does not push or pull anything." },
    { ok: true, why: "No resemblance is invoked at all." },
  ],
  [
    { ok: true, why: "Alike things resemble one another." },
    { ok: false, why: "Coextensive properties are had by the very same resembling things." },
    { ok: true, why: "Only particulars exist." },
    { ok: false, why: "Whole objects resemble, so there is no particular property to do the causing." },
    { ok: false, why: "If resemblances are particulars, they resemble one another, and so on." },
  ],
  [
    { ok: true, why: "Alike things have exactly resembling tropes." },
    { ok: true, why: "A heart-having trope and a kidney-having trope are different tropes, even in the same creatures." },
    { ok: true, why: "Each trope is in one place only." },
    { ok: true, why: "This tomato’s own mass trope bends the scale." },
    { ok: false, why: "Tropes still need exact resemblance, and Russell’s regress threatens again, though some say resemblance is internal and so no extra entity." },
  ],
];

export const lesson: LessonContent = {
  id: "p11.1.3",
  minutes: 80,
  links: {
    revisits: ["p11.1.1", "p11.1.2", "p4.5.1"],
    foreshadows: ["p11.2.1", "p12.1.1", "p27.1.2"],
  },

  puzzle: (
    <>
      <p>
        When you see the redness of this particular tomato, are you seeing something shared with every red thing, or something
        that belongs to this tomato alone and will be destroyed when it is eaten? Perhaps properties are real, but as particular
        as the things that have them.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The view opens on trope theory. Compare it with realism: count how many entities each posits for the same red things.
      </p>
      <UniversalsViz initial="trope theory" />
    </>
  ),

  theory: (
    <>
      <Definition title="tropes">
        <p>
          A <strong>trope</strong> is a particular property: this tomato&rsquo;s redness, that ball&rsquo;s roundness. Two
          tropes can resemble each other exactly and still be two, as two identical coins are two coins. D. C. Williams called
          tropes &ldquo;the alphabet of being&rdquo;.
        </p>
      </Definition>

      <Example title="building with tropes">
        <p>
          A property, such as redness in general, is a class of exactly resembling tropes. An ordinary object, on the bundle
          theory, is a bundle of tropes that are <strong>compresent</strong>, in the same place: the tomato is its redness, its
          roundness, its mass and so on, bound together. Some trope theorists instead keep a substratum that bears the tropes.
        </p>
      </Example>

      <Remark title="attractions">
        <p>
          Tropes seem to be what we perceive and what causes things: it is this tomato&rsquo;s mass, not mass in general, that
          bends the scale. Each trope is in one place, so nothing is wholly in two places at once. And two properties that the
          same objects have are still different tropes.
        </p>
      </Remark>

      <CaseMatrixViz
        theories={THEORIES}
        cases={CASES}
        verdicts={V}
        prompt="Click a cell to see how each theory fares on each test."
        caption="No theory passes every test. The realist pays with multiple location, the nominalists with coextension or regress, and the trope theorist still needs primitive resemblance."
      />

      <Remark title="problems">
        <p>
          The <strong>swapping problem</strong>: if this tomato&rsquo;s redness and that ball&rsquo;s redness exactly resemble,
          could they have swapped places, making a different world that looks exactly the same? Many find this a distinction
          without a difference. And tropes still need exact resemblance among themselves, which revives Russell&rsquo;s regress,
          unless resemblance is treated as following automatically from the tropes&rsquo; natures.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a trope?</p>,
      answer: {
        kind: "choice",
        options: ["A figure of speech", "A particular property, such as this tomato’s redness", "A universal shared by many things", "A class of objects"],
        correct: [1],
      },
    },
    {
      key: "count",
      rung: "check",
      prompt: <p>Five red things exist. How many rednesses does trope theory posit?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "property",
      rung: "apply",
      prompt: <p>On trope theory, what is the property of redness in general?</p>,
      answer: {
        kind: "choice",
        options: ["A universal", "The class of exactly resembling red tropes", "The word ‘red’", "The biggest red trope"],
        correct: [1],
      },
    },
    {
      key: "bundle",
      rung: "apply",
      prompt: <p>On the bundle theory, what is an ordinary object?</p>,
      answer: {
        kind: "choice",
        options: ["A bare substratum", "A bundle of compresent tropes", "A class of universals", "A collection of words"],
        correct: [1],
      },
    },
    {
      key: "cause",
      rung: "apply",
      prompt: <p>Why is causation often counted in favour of tropes?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because tropes are abstract and outside time.",
          "Because a particular property, this tomato’s mass, seems to be what does the causing.",
          "Because tropes can be in many places at once.",
          "Because tropes are classes.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is trope theory better than realism about universals? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States an advantage of tropes, such as single location or particular causes.",
          "States a cost, such as primitive exact resemblance or the swapping problem.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "swap",
      rung: "stretch",
      prompt: <p>Could this tomato&rsquo;s redness and that ball&rsquo;s exactly resembling redness have swapped places? If so, is that a real difference?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the swapping problem.",
          "Considers whether the swapped world differs in any detectable or meaningful way.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what tropes are, how trope theory builds properties and objects from them, why tropes look good for causation and location, and the swapping and resemblance problems.",

  glimpse: (
    <p>
      The next chapter asks a prior question: how do we tell what a theory says exists? Philosophy of mind asks whether mental
      properties are tropes of their own, and graduate metaphysics asks which properties are fundamental.
    </p>
  ),
};
