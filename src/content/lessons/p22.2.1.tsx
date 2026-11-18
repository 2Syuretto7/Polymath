import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EquinumerousViz } from "@/components/viz/EquinumerousViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.2.1",
  minutes: 85,
  links: {
    revisits: ["p22.1.4", "p22.1.3", "m1.7.2"],
    foreshadows: ["p22.2.2", "p22.2.3", "p22.6.1"],
  },

  puzzle: (
    <>
      <p>
        Point at a pack of cards and ask: how many? One pack, or fifty-two cards, or four suits. The pile itself does not
        settle it. So what is a number a property of, if not of the pile? And if numbers are not physical, and not in our
        heads, what are they?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Lay knives by plates, and decide whether there are as many without counting.</p>
      <EquinumerousViz />
    </>
  ),

  theory: (
    <>
      <Definition title="logicism">
        <p>
          Gottlob Frege (1848&ndash;1925) held that arithmetic is <strong>analytic</strong>: its truths follow from general
          logical laws and definitions alone. For Frege, analyticity concerns how a truth is ultimately justified, not
          whether a predicate is contained in a subject, as for Kant. To show it, he built a new logic in the{" "}
          <em>Begriffsschrift</em> (1879), argued philosophically in the <em>Foundations of Arithmetic</em> (1884), and tried
          to derive arithmetic formally in the <em>Basic Laws</em> (1893 and 1903).
        </p>
      </Definition>

      <Example title="against the rivals">
        <p>
          Against Mill: arithmetic does not depend on pebbles. Against Kant: we know facts about very large numbers, such as
          135664 + 37863 = 173527, with no intuition of so many things. Against psychologism: numbers are not ideas, or there
          would be as many twos as minds, and arithmetic would be part of psychology. Against formalism: arithmetic is about
          something, not marks on paper, which is why it can be applied.
        </p>
      </Example>

      <Definition title="numbers belong to concepts">
        <p>
          The <em>Foundations</em> lays down the <strong>context principle</strong>: never ask for the meaning of a word in
          isolation, but only in the context of a sentence. Applied to number words, it shows that a statement of number
          says something about a <strong>concept</strong>. &lsquo;The King&rsquo;s carriage is drawn by four horses&rsquo;
          assigns 4 to the concept <em>horse that draws the King&rsquo;s carriage</em>. The pack is 1 under the concept{" "}
          <em>pack</em> and 52 under <em>card</em>.
        </p>
      </Definition>

      <Remark title="Hume's principle and Julius Caesar">
        <p>
          Frege first tries to define number through <strong>Hume&rsquo;s principle</strong>: the number of Fs equals the
          number of Gs exactly when the Fs and Gs can be paired one to one. But this fixes only when two numbers are the
          same; it cannot tell us whether Julius Caesar is a number. So Frege defines the number of Fs as the extension of the
          concept <em>equinumerous with F</em>. Then 0 is the number of things not identical with themselves, 1 the number of
          things identical with 0, and each number is followed by the next.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "logicism",
      rung: "check",
      prompt: <p>What is Frege&rsquo;s logicism?</p>,
      answer: { kind: "choice", options: ["Arithmetic follows from logic and definitions alone", "Arithmetic is learned by induction", "Arithmetic rests on intuition of time", "Arithmetic is a game with symbols"], correct: [0] },
    },
    {
      key: "concept",
      rung: "check",
      prompt: <p>According to Frege, what does a statement of number say something about?</p>,
      answer: { kind: "choice", options: ["A concept", "A physical pile", "An idea in the mind", "A set of marks"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with 7 plates and 4 knives, how many plates are left without a knife?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "caesar",
      rung: "apply",
      prompt: <p>What is the Julius Caesar problem?</p>,
      answer: { kind: "choice", options: ["Hume’s principle cannot settle whether Caesar is a number", "Caesar could not count", "Numbers are Roman inventions", "Numbers change over time"], correct: [0] },
    },
    {
      key: "zero",
      rung: "apply",
      prompt: <p>How does Frege define 0?</p>,
      answer: { kind: "choice", options: ["The number belonging to the concept ‘not identical with itself’", "The number of pebbles in an empty hand", "The smallest idea", "A primitive sign"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Frege right that statements of number are about concepts, not objects? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Frege’s argument, such as the pack that is 1 pack and 52 cards.",
          "Considers a reply, such as that the number belongs to an aggregate under a way of dividing it, or that sets do the same job.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Frege says no intuition shows us that 135664 + 37863 = 173527. Is that a good objection to Kant?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Kant appealed to intuition, such as fingers, for small sums.",
          "Considers a Kantian reply, such as that intuition grounds the rules of calculation, not each sum.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Frege&rsquo;s definition used extensions of concepts, governed by his Basic Law V. In June 1902, as the second volume
        of the <em>Basic Laws</em> was in press, a letter arrived from Bertrand Russell.
      </p>
      <p>
        Next, Russell&rsquo;s paradox: the set of all sets that are not members of themselves, why it wrecked Basic Law V,
        its kinship with Cantor&rsquo;s diagonal argument, and the ways out.
      </p>
    </>
  ),
};
