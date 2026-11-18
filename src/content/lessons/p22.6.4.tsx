import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { NumeralSetsViz } from "@/components/viz/NumeralSetsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.6.4",
  minutes: 85,
  links: {
    revisits: ["p22.6.3", "p22.6.1", "p22.2.1"],
    foreshadows: ["p22.6.5", "p16.6.4", "p34.3.1"],
  },

  puzzle: (
    <>
      <p>
        Ernie and Johnny are raised as set theorists. Ernie was taught that 3 is {"{"}0, 1, 2{"}"}; Johnny that 3 is{" "}
        {"{"}2{"}"}. They agree on every theorem of arithmetic, but Ernie says 1 is a member of 3 and Johnny denies it. Who is
        right? If neither can be, what does that tell us about what the number 3 is?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare two ways of building the numbers from sets.</p>
      <NumeralSetsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="what numbers could not be">
        <p>
          Paul Benacerraf&rsquo;s 1965 paper tells the story of Ernie and Johnny. Any progression of sets would serve as the
          numbers, and there are infinitely many. If the number 3 were some particular set, there would have to be a reason
          to pick one progression; there is none. So, Benacerraf concluded, numbers are not sets, and indeed not objects at
          all: &lsquo;arithmetic is the science that elaborates the abstract structure that all progressions have in common
          merely in virtue of being progressions&rsquo;.
        </p>
      </Definition>

      <Example title="ante rem structuralism">
        <p>
          Stewart Shapiro and Michael Resnik hold that structures exist in their own right, prior to any systems that
          exemplify them. The natural number structure is an abstract pattern, and 3 is a position in it, with no properties
          beyond its relations to other positions. Mathematical objects are &lsquo;places in structures&rsquo;. This is a
          platonism about structures, and inherits Benacerraf&rsquo;s epistemological worry, though Shapiro argues that
          patterns can be known by abstraction from finite examples.
        </p>
      </Example>

      <Example title="eliminative and modal structuralism">
        <p>
          In re structuralists deny that there are structures over and above systems: a statement of arithmetic is a
          generalisation, true if it holds in every progression. If there might be no progressions, all such statements are
          vacuously true. Geoffrey Hellman&rsquo;s modal structuralism answers by talking of what would hold in any{" "}
          <em>possible</em> progression, trading objects for modality.
        </p>
      </Example>

      <Remark title="the problem of indiscernibles">
        <p>
          If a position has only structural properties, positions related by a symmetry cannot be told apart. In the complex
          numbers, conjugation swaps i and −i, so nothing structural distinguishes them; in a graph with two vertices and no
          edges, the vertices are structurally identical. Are they then one object? Keränen and Burgess pressed this; most
          structuralists reply that identity can be primitive rather than defined by properties.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "bena",
      rung: "check",
      prompt: <p>What did Benacerraf conclude from the many set-theoretic versions of the numbers?</p>,
      answer: { kind: "choice", options: ["Numbers are not sets, and arithmetic studies the structure all progressions share", "Zermelo’s version is correct", "Von Neumann’s version is correct", "Arithmetic is inconsistent"], correct: [0] },
    },
    {
      key: "anterem",
      rung: "check",
      prompt: <p>What does ante rem structuralism say mathematical objects are?</p>,
      answer: { kind: "choice", options: ["Positions in abstract structures that exist in their own right", "Physical marks", "Sets of a particular kind", "Mental constructions"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many elements does 3 have as a von Neumann ordinal?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "zer",
      rung: "apply",
      prompt: <p>In Zermelo&rsquo;s version, is 1 a member of 3?</p>,
      answer: { kind: "choice", options: ["No: Zermelo’s 3 is the set whose only member is 2", "Yes", "Only if 2 is a member of 3", "The question is undefined"], correct: [0] },
    },
    {
      key: "indisc",
      rung: "apply",
      prompt: <p>Which example poses the problem of indiscernibles for structuralism?</p>,
      answer: { kind: "choice", options: ["i and −i in the complex numbers, swapped by conjugation", "0 and 1 in the natural numbers", "The empty set", "Two different proofs of one theorem"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Benacerraf&rsquo;s argument show that numbers are not objects? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument: many progressions serve equally well, and nothing picks one.",
          "Considers a reply, such as that numbers are objects but not sets, or that the choice is a harmless convention.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If i and −i have exactly the same structural properties, are they two objects or one?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why conjugation makes i and −i structurally indiscernible.",
          "Considers an answer, such as taking identity as primitive, or revising structuralism.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Mathematicians often prize one proof over another that is equally correct, because it shows why the theorem holds. If
        some proofs explain and others merely verify, what is the difference, and can mathematics explain facts about the
        physical world?
      </p>
      <p>
        Next, explanation in mathematics: explanatory and non-explanatory proofs, Steiner&rsquo;s characterising properties,
        Lange on symmetry and unity, and the link to the indispensability debate.
      </p>
    </>
  ),
};
