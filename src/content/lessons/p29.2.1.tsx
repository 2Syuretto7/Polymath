import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { APosterioriViz } from "@/components/viz/APosterioriViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p29.2.1",
  minutes: 90,
  links: {
    revisits: ["p15.2.1", "p15.2.3", "p26.1.1"],
    foreshadows: ["p29.2.2", "p29.3.3", "p29.4.1"],
  },

  puzzle: (
    <>
      <p>
        Babylonian astronomers learned by patient observation that the evening star and the morning star are the same
        planet. It was a discovery, and could not have been worked out from an armchair. Yet once Hesperus is Phosphorus,
        could it have been otherwise? Kripke answered no: some truths are necessary and still known only by experience.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a statement, and see in which possible worlds it is true and how it is known.</p>
      <APosterioriViz />
    </>
  ),

  theory: (
    <>
      <Definition title="three distinctions">
        <p>
          A truth is <strong>necessary</strong> if it could not have been false, a metaphysical notion. It is{" "}
          <strong>a priori</strong> if it can be known without empirical evidence, an epistemological notion. It is{" "}
          <strong>analytic</strong> if true in virtue of meaning, a semantic notion. Kant and the logical empiricists
          tended to take the three as lining up. Kripke, in <em>Naming and Necessity</em> (1970), argued that they come
          apart.
        </p>
      </Definition>

      <Definition title="rigid designators">
        <p>
          An expression is a <strong>rigid designator</strong> if it picks out the same object in every possible world in
          which that object exists. Proper names are rigid: &lsquo;Hesperus&rsquo; refers to Venus even when we describe a
          world where Venus never shines in the evening. Descriptions such as &lsquo;the brightest body in the evening
          sky&rsquo; are typically not rigid.
        </p>
      </Definition>

      <Example title="the necessary a posteriori">
        <p>
          If a and b are the same object, then necessarily they are, since nothing could have failed to be itself. With
          rigid names this makes &lsquo;Hesperus is Phosphorus&rsquo; necessary. But it was learned by observation, so it
          is a posteriori. Kripke extended this to natural kinds: &lsquo;water is H₂O&rsquo; and &lsquo;heat is molecular
          motion&rsquo; are necessary truths discovered by science.
        </p>
      </Example>

      <Example title="the contingent a priori">
        <p>
          Suppose someone fixes the reference of &lsquo;one metre&rsquo; as the length of stick S at a certain time. They
          know without measuring that S is one metre long then. Yet S could have been longer, and &lsquo;one metre&rsquo;
          rigidly names the length S actually has, so the statement is contingent. Leverrier&rsquo;s naming of Neptune
          before anyone saw it is a similar case.
        </p>
      </Example>

      <Remark title="an illusion of contingency">
        <p>
          It seems water could have turned out to be XYZ. Kripke replied that what we imagine is a situation qualitatively
          like ours in which some other stuff fills the lakes, a world where &lsquo;the watery stuff&rsquo; is not H₂O.
          Separating these two ways of evaluating a sentence is the starting point of two-dimensional semantics.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rigid",
      rung: "check",
      prompt: <p>What is a rigid designator?</p>,
      answer: { kind: "choice", options: ["An expression that picks out the same object in every possible world where it exists", "An expression that can never change its meaning", "A description that applies to exactly one object", "A name that has no sense"], correct: [0] },
    },
    {
      key: "metre",
      rung: "check",
      prompt: <p>Which example did Kripke use for the contingent a priori?</p>,
      answer: { kind: "choice", options: ["The standard metre stick", "Hesperus and Phosphorus", "Water and H₂O", "Heat and molecular motion"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, in how many of the five worlds is the statement about the brightest bodies true?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "heat",
      rung: "apply",
      prompt: <p>How would Kripke classify &lsquo;heat is molecular motion&rsquo;?</p>,
      answer: { kind: "choice", options: ["Necessary and a posteriori", "Contingent and a priori", "Necessary and a priori", "Contingent and a posteriori"], correct: [0] },
    },
    {
      key: "epi",
      rung: "apply",
      prompt: <p>Which of the three distinctions is about how a truth can be known?</p>,
      answer: { kind: "choice", options: ["A priori and a posteriori", "Necessary and contingent", "Analytic and synthetic", "Rigid and non-rigid"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is &lsquo;water is H₂O&rsquo; a necessary truth? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Kripke’s view that natural kind terms are rigid, so the identity holds in every world.",
          "Considers an objection, such as the apparent conceivability of water being XYZ, or impurities in actual water.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can the person who fixed the metre by stick S know a priori that S is one metre long?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with Kripke’s claim that the statement is a priori but contingent.",
          "Considers an objection, such as that what is known is only a truth about the word, not about the length.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Kripke&rsquo;s cases suggest that a sentence can be evaluated in two ways: by asking how the world might have been,
        and by asking how the world might turn out to be. Giving each sentence two intensions makes this precise.
      </p>
      <p>Next, two-dimensional semantics.</p>
    </>
  ),
};
