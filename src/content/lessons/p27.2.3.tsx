import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TwoDMatrixViz } from "@/components/viz/TwoDMatrixViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p27.2.3",
  minutes: 90,
  links: {
    revisits: ["p27.2.2", "p11.3.4", "p26.1.2"],
    foreshadows: ["p27.4.2", "p27.5.1", "p27.5.2"],
  },

  puzzle: (
    <>
      <p>
        You know that this table could have stood a metre to the left. You know that you could not have been a prime
        number. You have never visited another possible world, and you cannot run an experiment on what might have been.
        So how do you know these things?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Switch between sentences and between the worlds taken as actual, and compare the row with the diagonal.</p>
      <TwoDMatrixViz />
    </>
  ),

  theory: (
    <>
      <Definition title="conceivability as a guide">
        <p>
          Hume held that whatever we clearly conceive is possible. Stephen Yablo made this precise: p is conceivable for
          someone if they can imagine a world they take to verify p. The proposal is that conceivability gives defeasible
          evidence of possibility, much as perception gives evidence of how things are.
        </p>
      </Definition>

      <Definition title="Kripke's challenge">
        <p>
          Kripke argued that some necessary truths are known only a posteriori: water is H₂O, Hesperus is Phosphorus. Yet
          it seems conceivable that water is not H₂O. Kripke&rsquo;s diagnosis is that we are really conceiving of a
          situation in which some other watery stuff, qualitatively like water, is not H₂O. That situation is possible,
          but it is not a situation in which water is not H₂O.
        </p>
      </Definition>

      <Definition title="two-dimensionalism">
        <p>
          David Chalmers distinguishes two intensions of a sentence. The <strong>primary</strong> intension evaluates it at
          worlds considered as actual, and the <strong>secondary</strong> intension at worlds considered as counterfactual,
          with the actual world fixed. &lsquo;Water is H₂O&rsquo; has a contingent primary intension, which is why its
          falsity is conceivable, and a necessary secondary intension. Chalmers holds that ideal conceivability entails
          primary possibility.
        </p>
      </Definition>

      <Example title="other routes">
        <ul>
          <li>Timothy Williamson grounds modal knowledge in ordinary counterfactual reasoning: p is possible unless, had p been true, a contradiction would have followed.</li>
          <li>Essentialists such as E. J. Lowe and Bob Hale trace it to knowledge of essences: knowing what a thing is, we know what it could not lack.</li>
          <li>For Lewis, the principle of recombination tells us which worlds there are, and modal knowledge is as a priori as mathematics.</li>
        </ul>
      </Example>

      <Remark title="why it matters">
        <p>
          Much of philosophy argues from what is conceivable. Chalmers&rsquo;s zombie argument says a physical duplicate
          of us without consciousness is conceivable, hence possible, so physicalism is false. Whether the step from
          conceivable to possible is sound decides the argument.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kripke",
      rung: "check",
      prompt: <p>Which of these did Kripke offer as a necessary truth known a posteriori?</p>,
      answer: { kind: "choice", options: ["Water is H₂O", "2 + 2 = 4", "All bachelors are unmarried", "Something exists"], correct: [0] },
    },
    {
      key: "will",
      rung: "check",
      prompt: <p>What is the basis of modal knowledge on Williamson&rsquo;s view?</p>,
      answer: { kind: "choice", options: ["Ordinary counterfactual reasoning", "Perception of other worlds", "Divine revelation", "Statistical inference"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how is &lsquo;water is the watery stuff&rsquo; classified, with Earth actual?</p>,
      answer: { kind: "choice", options: ["A priori but contingent", "Necessary but not a priori", "Both necessary and a priori", "Neither"], correct: [0] },
    },
    {
      key: "diag",
      rung: "apply",
      prompt: <p>On Kripke&rsquo;s diagnosis, what do we really conceive when we seem to conceive that water is not H₂O?</p>,
      answer: { kind: "choice", options: ["A situation where some other stuff, qualitatively like water, is not H₂O", "A world where H₂O is not H₂O", "Nothing at all", "A contradiction"], correct: [0] },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>For a two-dimensionalist, what explains why &lsquo;water is not H₂O&rsquo; seems conceivable?</p>,
      answer: { kind: "choice", options: ["Its primary intension is true at some world considered as actual", "Its secondary intension is true at every world", "It is a priori", "It contains no names"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is conceivability a good guide to possibility? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the proposal that conceivability is evidence of possibility.",
          "Considers a challenge such as Kripke’s a posteriori necessities, and a response such as Kripke’s diagnosis or two-dimensionalism.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the conceivability of zombies show that consciousness is not physical?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the zombie argument from conceivability to possibility to the falsity of physicalism.",
          "Considers where it might fail, such as an a posteriori necessity linking the physical and the mental.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        From what could be, metaphysics turns to what there is in the actual world, starting with ordinary objects.
        When some particles are arranged chair-wise, is there also a chair?
      </p>
      <p>Next, the special composition question.</p>
    </>
  ),
};
