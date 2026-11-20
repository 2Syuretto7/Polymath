import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BrierDominanceViz } from "@/components/viz/BrierDominanceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p28.2.2",
  minutes: 90,
  links: {
    revisits: ["p28.2.1", "p10.7.1", "p10.7.3"],
    foreshadows: ["p28.2.3", "p28.4.2", "p28.3.1"],
  },

  puzzle: (
    <>
      <p>
        A forecaster says rain is 70% likely and dry weather is 50% likely. Nobody is betting against them, so no Dutch
        book will ever be made. Is there still something wrong with their credences, judged purely by how well they track
        the weather?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move your credences in A and in not-A, and compare their inaccuracy with that of the nearest coherent credences.</p>
      <BrierDominanceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="inaccuracy">
        <p>
          Accuracy-first epistemology takes closeness to the truth as the fundamental epistemic value. Represent the truth
          by 1 for a true proposition and 0 for a false one. The <strong>Brier score</strong> measures the inaccuracy of a
          credence function in a world as the sum of the squared differences between each credence and the truth value.
          Credences of 0.8 in A and 0.2 in not-A, when A is true, have inaccuracy 0.2² + 0.2² = 0.08.
        </p>
      </Definition>

      <Definition title="strictly proper scoring rules">
        <p>
          A scoring rule is <strong>strictly proper</strong> if every probability function expects itself to be less
          inaccurate than any other credence function. The Brier score and the logarithmic score are strictly proper; the
          absolute-distance score is not, since it rewards pushing credences to 0 or 1. Propriety ensures that a coherent
          agent never sees, by its own lights, an accuracy reason to change its mind without new evidence.
        </p>
      </Definition>

      <Example title="the dominance argument">
        <p>
          James Joyce argued in 1998 that incoherent credences are <strong>accuracy-dominated</strong>: some coherent
          credences are less inaccurate in every possible world. Joel Predd and colleagues proved in 2009 that, for any
          strictly proper and continuous measure, a credence function is undominated exactly when it is a probability
          function. The visualisation shows the two-proposition case: the projection onto the line of coherent credences
          is closer to both worlds.
        </p>
      </Example>

      <Remark title="beyond probabilism">
        <p>
          Hilary Greaves and David Wallace showed in 2006 that, among plans for updating on evidence, conditionalising
          maximises expected accuracy. Richard Pettigrew&rsquo;s <em>Accuracy and the Laws of Credence</em> (2016) extends the
          programme to the principal principle and to principles of indifference. Selim Berker objects that pure accuracy
          reasoning allows trade-offs: believing one falsehood could be justified if it made many other beliefs more
          accurate, which seems wrong for justification.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dom",
      rung: "check",
      prompt: <p>What does Joyce&rsquo;s argument show about incoherent credences?</p>,
      answer: { kind: "choice", options: ["Some coherent credences are more accurate in every possible world", "They always lead to betting losses", "They are inaccurate only in the actual world", "They cannot be updated by conditionalisation"], correct: [0] },
    },
    {
      key: "proper",
      rung: "check",
      prompt: <p>What makes a scoring rule strictly proper?</p>,
      answer: { kind: "choice", options: ["Every probability function expects itself to be less inaccurate than any other credence function", "It assigns zero inaccuracy to every credence", "It measures only the credence in the actual truth", "It rewards credences of 0 and 1 most"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set both credences to 0.60. What is the inaccuracy of the nearest coherent credences if A is true?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "brier",
      rung: "apply",
      prompt: <p>What is the Brier inaccuracy of credences 0.7 in A and 0.4 in not-A, when A is true?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "gw",
      rung: "apply",
      prompt: <p>What did Greaves and Wallace show?</p>,
      answer: { kind: "choice", options: ["Conditionalisation maximises expected accuracy among updating plans", "Every scoring rule is strictly proper", "Incoherent credences cannot be Dutch-booked", "Accuracy is not an epistemic value"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is accuracy the only epistemic value? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the accuracy-first view.",
          "Considers an objection or alternative value, such as Berker’s trade-offs, justification or understanding.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the accuracy argument for probabilism depend on choosing the Brier score?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the dominance result holds for every strictly proper continuous measure.",
          "Considers whether the restriction to such measures is itself justified.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Both Dutch books and accuracy arguments assume that a credence is a single sharp number. Yet with little evidence,
        insisting on 0.37 rather than 0.38 can seem like false precision.
      </p>
      <p>Next, imprecise credences.</p>
    </>
  ),
};
