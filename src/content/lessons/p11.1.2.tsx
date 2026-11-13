import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CoextensionViz } from "@/components/viz/CoextensionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.1.2",
  minutes: 80,
  links: {
    revisits: ["p11.1.1", "p6.5.2", "p4.4.2"],
    foreshadows: ["p11.1.3", "p11.3.2", "p27.1.2"],
  },

  puzzle: (
    <>
      <p>
        Ockham advised that entities should not be multiplied beyond necessity. Universals are strange entities, wholly
        present in many places at once. Can we explain how things are alike using only particular things, and nothing that
        repeats?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        One nominalist proposal is that a property is just the class of things that have it. Test it on two pairs of
        properties, first with actual things only, then with possible things as well.
      </p>
      <CoextensionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="nominalism">
        <p>
          <strong>Nominalism</strong> about universals says everything that exists is particular. Nominalists differ over how
          to account for things being alike.
        </p>
      </Definition>

      <Example title="four nominalisms">
        <ul>
          <li>
            <strong>Ostrich nominalism</strong> (Devitt): that a is red is a basic fact, needing no further explanation in
            terms of anything a has.
          </li>
          <li><strong>Predicate nominalism</strong>: a is red because the predicate &ldquo;red&rdquo; applies to it.</li>
          <li><strong>Class nominalism</strong>: being red is being a member of the class of red things.</li>
          <li>
            <strong>Resemblance nominalism</strong> (Rodriguez-Pereyra): a is red because it resembles the paradigm red
            things.
          </li>
        </ul>
      </Example>

      <Remark title="the coextension problem">
        <p>
          Two properties could be had by exactly the same things, like having a heart and having kidneys in the standard
          example, and then class nominalism must call them one property. David Lewis replies that classes should include
          merely possible things, which do separate such properties. But necessarily coextensive properties, like being
          triangular and being trilateral, remain a problem, if they are indeed distinct.
        </p>
      </Remark>

      <Remark title="problems for resemblance">
        <p>
          Russell argued that resemblance nominalism cannot do without one universal: resemblance itself. If every
          resemblance is a further particular, they all resemble each other, and a regress begins. Goodman&rsquo;s{" "}
          <strong>imperfect community</strong> poses another problem. A red round thing, a round heavy thing and a heavy red
          thing each resemble the other two, yet nothing is common to all three. So mutual resemblance cannot define a
          property.
        </p>
      </Remark>

      <Remark title="the price of economy">
        <p>
          Nominalism gains a smaller ontology, but each version pays in other coin: brute facts, dependence on language,
          merely possible objects, or primitive resemblance. Whether the trade is worth it depends on how much we value economy
          against explanation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does nominalism about universals deny?</p>,
      answer: {
        kind: "choice",
        options: ["That there are particulars", "That anything is repeatable, a single entity had by many things", "That things are alike", "That names refer"],
        correct: [1],
      },
    },
    {
      key: "class",
      rung: "check",
      prompt: <p>For a class nominalist, what is the property of being red?</p>,
      answer: { kind: "choice", options: ["The word ‘red’", "The class of red things", "A universal wholly present in each red thing", "Each red thing’s own redness"], correct: [1] },
    },
    {
      key: "coext",
      rung: "apply",
      prompt: <p>Suppose every creature with a heart has kidneys, and conversely. Why is this a problem for class nominalism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because hearts are not particulars.",
          "Because the two classes are the same, so the theory must count the two different properties as one.",
          "Because it shows universals exist in creatures.",
          "Because classes cannot contain animals.",
        ],
        correct: [1],
      },
    },
    {
      key: "russell",
      rung: "apply",
      prompt: <p>What was Russell&rsquo;s objection to resemblance nominalism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Resemblance is vague.",
          "Treating each resemblance as a particular starts a regress, so resemblance itself looks like a universal.",
          "Nothing resembles anything.",
          "Resemblance is a psychological notion.",
        ],
        correct: [1],
      },
    },
    {
      key: "imperfect",
      rung: "apply",
      prompt: <p>A is red and round, B is round and heavy, C is heavy and red. What does this example show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That every pair of things shares a universal.",
          "That things can each resemble one another while sharing no single property, so mutual resemblance does not define a property.",
          "That heavy things are never red.",
          "That class nominalism is true.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is ontological economy a good reason to prefer nominalism to realism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Ockham’s razor and how nominalism is more economical.",
          "Weighs economy against what nominalism must take as primitive or explain away.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "ostrich",
      rung: "stretch",
      prompt: <p>The ostrich nominalist says &ldquo;a is red&rdquo; needs no further explanation. Is this a respectable position, or a refusal to answer?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the ostrich view.",
          "Considers whether every theory must stop somewhere with something primitive.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what nominalism denies, four versions of it, the coextension problem for class nominalism with Lewis's reply, and Russell's and Goodman's problems for resemblance nominalism.",

  glimpse: (
    <p>
      The next lesson considers tropes, a middle way that keeps properties but makes them particular. Lewis&rsquo;s modal
      realism, which supplies the possible objects used here, returns later, as does the question of what is fundamental.
    </p>
  ),
};
