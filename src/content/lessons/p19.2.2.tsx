import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ReferentialWholeViz } from "@/components/viz/ReferentialWholeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p19.2.2",
  minutes: 80,
  links: {
    revisits: ["p19.2.1", "p7.1.4", "p19.1.1"],
    foreshadows: ["p19.2.3", "p19.2.5", "p19.5.1"],
  },

  puzzle: (
    <>
      <p>
        Descartes began with a mind certain of its own ideas and then struggled to prove there was a world outside it.
        Kant called it a scandal that no proof had been found. Heidegger replied that the scandal is that such proofs are
        expected and attempted again and again. What starting point could make the question of the external world simply
        not arise?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a situation in the workshop and see what shows up, and what stays hidden.</p>
      <ReferentialWholeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="being-in-the-world">
        <p>
          Dasein&rsquo;s basic state is <strong>being-in-the-world</strong>, hyphenated because it is one phenomenon, not a
          subject plus a world plus a relation between them. &ldquo;In&rdquo; here is not the way water is in a glass; it is
          the way one is in love or in business: dwelling, being familiar with, being involved. We do not first exist as
          minds and then reach a world; we are always already out there, busy with things.
        </p>
      </Definition>

      <Definition title="ready-to-hand and present-at-hand">
        <p>
          What we deal with first are not bare objects but <strong>equipment</strong>, things for doing something. In use,
          equipment is <strong>ready-to-hand</strong> (zuhanden): the hammer withdraws, and our attention goes to the work.
          Every item belongs to a referential whole of in-order-to&rsquo;s, ending in a for-the-sake-of-which, a way of being
          that Dasein is pressing into. When we stare at a thing, detached from use, as a lump with mass and shape, it is{" "}
          <strong>present-at-hand</strong> (vorhanden). That is the attitude of theory, and Heidegger&rsquo;s claim is that it
          is derived, not basic.
        </p>
      </Definition>

      <Example title="breakdown">
        <p>
          The world as a whole comes to light when something goes wrong. A damaged tool becomes{" "}
          <strong>conspicuous</strong>, a missing one <strong>obtrusive</strong>, something in the way{" "}
          <strong>obstinate</strong>. In each case the tool turns towards the merely present-at-hand, and at the same moment
          the network of references it belonged to becomes visible. Worldhood is not a collection of objects but this whole
          of significance.
        </p>
      </Example>

      <Remark title="against Descartes, and an afterlife">
        <p>
          Descartes took extended substance, the present-at-hand, as the being of the world, and so had to rebuild
          everything else, value and use included, on top of it. Heidegger reverses the order. Hubert Dreyfus later turned
          the point against classical artificial intelligence: coping with a world, he argued, is not following rules over
          represented facts. Being-in-the-world is also always <strong>being-with</strong> others, whose tools, roads and
          standards are everywhere in the workshop.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ready",
      rung: "check",
      prompt: <p>What is it for equipment to be ready-to-hand?</p>,
      answer: {
        kind: "choice",
        options: [
          "To be in smooth use, withdrawing from attention into the work",
          "To be available for purchase",
          "To be examined as a physical object",
          "To be broken",
        ],
        correct: [0],
      },
    },
    {
      key: "in",
      rung: "check",
      prompt: <p>In &ldquo;being-in-the-world&rdquo;, what does &ldquo;in&rdquo; mean?</p>,
      answer: {
        kind: "choice",
        options: ["Dwelling and being involved, as in ‘in love’", "Spatial containment, as water in a glass", "Logical membership, as in a set", "Being inside a mind"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what does Heidegger call the way a missing tool shows up?</p>,
      answer: { kind: "choice", options: ["Obtrusiveness", "Conspicuousness", "Obstinacy", "Readiness-to-hand"], correct: [0] },
    },
    {
      key: "present",
      rung: "apply",
      prompt: <p>Which is a case of encountering a hammer as present-at-hand?</p>,
      answer: {
        kind: "choice",
        options: [
          "Weighing it on a scale to record its mass",
          "Driving in a nail without thinking about it",
          "Reaching for it while concentrating on the shelf",
          "Handing it to a friend who needs it",
        ],
        correct: [0],
      },
    },
    {
      key: "scandal",
      rung: "apply",
      prompt: <p>Why, for Heidegger, is the demand for a proof of the external world misguided?</p>,
      answer: {
        kind: "choice",
        options: [
          "It presupposes a worldless subject, whereas Dasein is already in the world.",
          "Because the world does not exist.",
          "Because Kant already gave the proof.",
          "Because proofs are impossible in philosophy.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the ready-to-hand more basic than the present-at-hand? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Heidegger’s claim that practical involvement comes first and detached observation is derived from it.",
          "Considers an objection, such as that tools are physical objects first, with uses added.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Dreyfus argued that a computer following rules over facts could never cope with a world as we do. Do today&rsquo;s learning systems answer his challenge?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Dreyfus’s point that coping is skilled, contextual and not rule-following over represented facts.",
          "Considers whether learned, non-symbolic systems escape the objection or face it in a new form.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the moods that disclose the world as a whole: anxiety, the anonymous &ldquo;they&rdquo;, and what it would be to
      own one&rsquo;s existence.
    </p>
  ),
};
