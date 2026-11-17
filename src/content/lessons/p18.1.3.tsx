import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["object", "first-level concept", "second-level concept"];
const ITEMS: SortItem[] = [
  { text: "Venus", cat: "object", why: "A proper name. It is complete and stands for an object." },
  { text: "… is a planet", cat: "first-level concept", why: "It has a gap for an object, and yields a truth value when the gap is filled." },
  { text: "the number 4", cat: "object", why: "For Frege numbers are objects, named by singular terms such as this one." },
  { text: "… orbits the Sun", cat: "first-level concept", why: "Its gap is filled by a name of an object." },
  { text: "there is at least one …", cat: "second-level concept", why: "Its gap takes a first-level concept: existence is a property of concepts, not of objects." },
  { text: "every … is mortal", cat: "second-level concept", why: "A quantifier phrase. It says something about a concept, namely that everything falling under it is mortal." },
  { text: "the True", cat: "object", why: "Frege took truth values to be objects, the references of sentences." },
  { text: "the concept horse", cat: "object", why: "It begins with a definite article and so is a proper name; by Frege’s test it names an object, which is the paradox." },
  { text: "… has exactly eight instances", cat: "second-level concept", why: "A statement of number says something about a concept, here how many things fall under it." },
];

export const lesson: LessonContent = {
  id: "p18.1.3",
  minutes: 80,
  links: {
    revisits: ["p18.1.2", "p15.1.1", "p11.1.1"],
    foreshadows: ["p18.2.2", "p18.3.1", "p18.3.2"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;The concept horse is a concept&rdquo; sounds trivially true. Yet Frege was driven to say that it is false: the
        concept horse, he wrote, is not a concept. How could a careful logician end up asserting something that sounds so
        absurd, and was he wrong to?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each expression by what, for Frege, it stands for.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="What does it stand for?" />
    </>
  ),

  theory: (
    <>
      <Definition title="concepts as functions">
        <p>
          In &ldquo;Function and Concept&rdquo; (1891), Frege generalised the mathematical idea of a function. The expression
          &ldquo;… is a planet&rdquo; stands for a function that takes an object as argument and gives a truth value, the
          True or the False, as value. A <strong>concept</strong> is a function whose value is always a truth value. An{" "}
          <strong>object</strong> is anything that is not a function: people, planets, numbers, truth values and extensions.
        </p>
      </Definition>

      <Example title="saturated and unsaturated">
        <p>
          A name such as &ldquo;Venus&rdquo; is complete, or <strong>saturated</strong>. A concept word has a gap and is{" "}
          <strong>unsaturated</strong>; it needs an argument to make a whole. That is why a sentence holds together and is
          not just a list of names. Concepts come in levels: first-level concepts take objects; second-level concepts take
          first-level concepts. &ldquo;There is at least one …&rdquo; is second-level, so existence, like number, is a
          property of concepts: &ldquo;there are eight planets&rdquo; says something about the concept planet.
        </p>
      </Example>

      <Definition title="the concept horse">
        <p>
          Benno Kerry objected that &ldquo;the concept horse&rdquo; names a concept and yet behaves as an object. In
          &ldquo;On Concept and Object&rdquo; (1892), Frege replied that an expression with the definite article is a proper
          name and so stands for an object. Hence &ldquo;the concept horse is not a concept&rdquo;. He admitted the awkwardness
          as a fault of language, which forces him, when he wants to talk about a concept, to use a name of an object that
          represents it.
        </p>
      </Definition>

      <Remark title="afterwards">
        <p>
          The paradox suggests that the distinction cannot be stated without violating it. Wittgenstein&rsquo;s{" "}
          <em>Tractatus</em> would conclude that such logical categories show themselves and cannot be said. Others, such as
          Michael Dummett, read Frege&rsquo;s point as a remark about grammar, and some recent work tries to state the
          distinction with higher-order quantifiers instead of names.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "concept",
      rung: "check",
      prompt: <p>What is a concept, for Frege?</p>,
      answer: {
        kind: "choice",
        options: [
          "A function whose value for every argument is a truth value.",
          "An idea in someone’s mind.",
          "A set of objects.",
          "The sense of a proper name.",
        ],
        correct: [0],
      },
    },
    {
      key: "exist",
      rung: "check",
      prompt: <p>On Frege&rsquo;s view, what kind of property is existence?</p>,
      answer: {
        kind: "choice",
        options: ["A second-level concept, a property of concepts", "A first-level concept, a property of objects", "An object", "Not a property of anything"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, where does &ldquo;the concept horse&rdquo; belong?</p>,
      answer: { kind: "choice", options: ["object", "first-level concept", "second-level concept", "nowhere"], correct: [0] },
    },
    {
      key: "number",
      rung: "apply",
      prompt: <p>According to Frege, what is &ldquo;there are eight planets&rdquo; about?</p>,
      answer: {
        kind: "choice",
        options: ["The concept planet", "Each planet in turn", "The Sun", "The number 8 alone"],
        correct: [0],
      },
    },
    {
      key: "unsat",
      rung: "apply",
      prompt: <p>Why, for Frege, is a sentence more than a list of names?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because a concept word is unsaturated and needs an object to complete it, which holds the parts together.",
          "Because sentences contain verbs and names do not.",
          "Because sentences have senses and names do not.",
          "Because every sentence names the True.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the paradox of the concept horse show that Frege&rsquo;s distinction between concept and object is mistaken? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the distinction and how the paradox arises from treating “the concept horse” as a proper name.",
          "Considers a response, such as Frege’s own appeal to a fault of language or the Tractatus view that the distinction can only be shown.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Kant said that existence is not a real predicate. Is Frege&rsquo;s view, that existence is a property of concepts, the same claim?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Frege’s view that to say Fs exist is to say the concept F has an instance.",
          "Compares it with Kant’s claim and notes a similarity or difference, for example over the ontological argument.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Russell and Moore&rsquo;s revolt against the idealism that dominated British philosophy around 1900.
    </p>
  ),
};
