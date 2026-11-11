import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["substance", "quantity", "quality", "relation", "place", "time", "doing", "being affected"];
const ITEMS: SortItem[] = [
  { text: "Socrates", cat: "substance", why: "A primary substance: an individual, the subject of everything else on this list, and not itself said of or present in anything." },
  { text: "is a man", cat: "substance", why: "A secondary substance: the species of Socrates. It is said of him and tells you what he is." },
  { text: "is five feet tall", cat: "quantity", why: "Aristotle's own examples of quantity are 'four-foot' and 'five-foot'." },
  { text: "is snub-nosed", cat: "quality", why: "A quality: it says what Socrates is like, not what he is." },
  { text: "is older than Plato", cat: "relation", why: "A relative: being older is always being older than something. Aristotle's examples are double, half and larger." },
  { text: "is in the market-place", cat: "place", why: "One of Aristotle's own examples of 'where', alongside 'in the Lyceum'." },
  { text: "was there yesterday", cat: "time", why: "Aristotle's examples of 'when' are 'yesterday' and 'last year'." },
  { text: "is questioning Meno", cat: "doing", why: "An action, like Aristotle's 'cutting' and 'burning'." },
  { text: "is being refuted by Parmenides", cat: "being affected", why: "Undergoing, like Aristotle's 'being cut' and 'being burned'. Doing and being affected come in pairs." },
];

export const lesson: LessonContent = {
  id: "p4.5.1",
  minutes: 75,
  links: {
    revisits: ["p4.4.3", "p4.3.4", "p4.4.2"],
    foreshadows: ["p4.5.3", "p6.3.2", "p11.1.1"],
  },

  puzzle: (
    <>
      <p>
        Socrates is a man, he is snub-nosed, he is in the market-place, and he is older than Plato. Each sentence uses
        &ldquo;is&rdquo;, but surely not in the same way. Being a man is what Socrates <em>is</em>; being snub-nosed is
        what he is like; being in the market-place is where he happens to be. If you were to sort everything that can be
        said about a thing into its most general kinds, how many kinds would you need?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Aristotle&rsquo;s answer, in the short work called the <em>Categories</em>, is a list of ten. Sort what is said
        here about Socrates into eight of them. The two left out, being in a position and having, are illustrated by
        &ldquo;is sitting&rdquo; and &ldquo;has shoes on&rdquo;.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which category does each item belong to?" />
    </>
  ),

  theory: (
    <>
      <Definition title="said of and present in">
        <p>
          The <em>Categories</em> begins with two relations a thing can have to a subject. Something is{" "}
          <strong>said of</strong> a subject when it tells you what the subject is: &ldquo;man&rdquo; is said of Socrates.
          Something is <strong>present in</strong> a subject when it is in it, not as a part, and cannot exist apart from
          it: this particular whiteness is present in a body. Combining the two gives four kinds of being:
        </p>
        <ul>
          <li>said of a subject, but not in one: <em>man</em>, a species;</li>
          <li>in a subject, but not said of one: <em>this particular white</em>, or <em>this bit of grammatical knowledge</em>;</li>
          <li>both said of and in a subject: <em>knowledge</em>, which is in the soul and said of grammar;</li>
          <li>neither said of nor in a subject: <em>this man</em>, <em>this horse</em>.</li>
        </ul>
      </Definition>

      <Definition title="the ten categories">
        <p>
          Every expression not combined with others signifies one of: <strong>substance</strong> (man, horse),{" "}
          <strong>quantity</strong> (four-foot), <strong>quality</strong> (white, grammatical), <strong>relation</strong>{" "}
          (double, larger), <strong>where</strong> (in the Lyceum), <strong>when</strong> (yesterday),{" "}
          <strong>being in a position</strong> (is lying), <strong>having</strong> (has shoes on),{" "}
          <strong>doing</strong> (cutting) and <strong>being affected</strong> (being cut). None of these, on its own, is
          true or false; truth comes only with combination, as in &ldquo;man runs&rdquo;.
        </p>
      </Definition>

      <Example title="primary and secondary substance">
        <p>
          The individual, this man or this horse, is <strong>primary substance</strong>, the fourth kind in the list
          above. Its species and genus, man and animal, are <strong>secondary substances</strong>. Everything else is
          either said of primary substances or present in them, so that if the primary substances did not exist, nothing
          else could. Of the secondary substances, the species is more truly substance than the genus, because it is
          closer to the individual and tells you more about what it is.
        </p>
      </Example>

      <Remark title="marks of substance">
        <ul>
          <li>Substance has no contrary: there is nothing opposite to a man, though there is to white or to hot.</li>
          <li>Substance does not come in degrees: one man is not more a man than another.</li>
          <li>
            Most distinctive: a substance, remaining one and the same, can receive contraries. Socrates is pale and later
            tanned, hot and later cold, good and later bad. A colour cannot be both pale and dark.
          </li>
        </ul>
      </Remark>

      <Remark title="against Plato, and later readings">
        <p>
          The <em>Categories</em> reverses the Platonic order. For Plato, the Form Man is most real and individual men
          depend on it. For Aristotle here, individuals are primary, and the species exists only as said of them. Whether
          the list of ten is a classification of words, of concepts or of things, and how Aristotle arrived at it, has been
          debated since antiquity. Kant later complained that Aristotle had simply gathered his categories as he came upon
          them, without a principle.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "count",
      rung: "check",
      prompt: <p>How many categories does Aristotle list in the <em>Categories</em>?</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "primary",
      rung: "check",
      prompt: <p>Which of these is a primary substance?</p>,
      answer: { kind: "choice", options: ["animal", "this horse", "whiteness", "man"], correct: [1] },
    },
    {
      key: "square",
      rung: "apply",
      prompt: <p>Which describes a particular patch of white on a wall?</p>,
      answer: {
        kind: "choice",
        options: [
          "Said of a subject, not in a subject.",
          "In a subject, not said of a subject.",
          "Both said of and in a subject.",
          "Neither said of nor in a subject.",
        ],
        correct: [1],
      },
    },
    {
      key: "contraries",
      rung: "apply",
      prompt: <p>Which feature does Aristotle call most distinctive of substance?</p>,
      answer: {
        kind: "choice",
        options: [
          "It has a contrary.",
          "It comes in degrees.",
          "While remaining one and the same, it can receive contraries.",
          "It is invisible.",
        ],
        correct: [2],
      },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Classify &ldquo;has armour on&rdquo;.</p>,
      answer: { kind: "choice", options: ["quality", "having", "being in a position", "doing"], correct: [1] },
    },
    {
      key: "dependence",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct Aristotle&rsquo;s argument that if primary substances did not exist, nothing else could. Use the
          said-of and present-in relations, and say whether you find it convincing for species such as &ldquo;man&rdquo;.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States that everything other than primary substances is either said of them or present in them.",
          "Concludes that without primary substances there would be nothing for other things to be said of or present in.",
          "Evaluates the claim for species, for instance asking whether a species with no members could still exist. Any reasoned view earns full credit.",
        ],
      },
    },
    {
      key: "plato",
      rung: "stretch",
      prompt: (
        <p>
          The <em>Categories</em> makes individuals primary; Plato made Forms primary. Which view better explains why
          Socrates can be pale at one time and tanned at another while remaining Socrates? Consider how each would explain
          the change.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the Aristotelian account: a single substance persists and receives contrary qualities.",
          "Explains a Platonic account, such as Socrates participating first in one Form and then in another.",
          "Compares them and reaches a verdict. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the distinction between being said of and being present in a subject, the ten categories with an example of each, the difference between primary and secondary substance, and how this reverses Plato's view.",

  glimpse: (
    <p>
      The <em>Metaphysics</em>, two lessons on, returns to substance and asks what makes a substance what it is.
      Medieval philosophers inherited the <em>Categories</em> through Boethius and built the problem of universals on it.
    </p>
  ),
};
