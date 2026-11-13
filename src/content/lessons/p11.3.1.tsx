import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ModalWorldsViz } from "@/components/viz/ModalWorldsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.3.1",
  minutes: 80,
  links: {
    revisits: ["p11.2.1", "p2.4.1", "p7.2.3"],
    foreshadows: ["p11.3.2", "p26.1.1", "p15.2.1"],
  },

  puzzle: (
    <>
      <p>
        It could have rained today, though it did not. Two plus two could not have been five. These modal claims, about what
        might have been and what must be, are everywhere in thought and science. But what makes them true? There is no
        rain to point to.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here a handful of worlds stand for ways things could have been. Change what holds in each, and see how the truth of
        &ldquo;possibly&rdquo; and &ldquo;necessarily&rdquo; claims follows.
      </p>
      <ModalWorldsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="possible worlds analysis">
        <p>
          A <strong>possible world</strong> is a complete way things could have been. Following Leibniz, and the semantics
          developed by Kripke and others:
        </p>
        <ul>
          <li>&ldquo;Possibly p&rdquo; is true if p is true at some possible world.</li>
          <li>&ldquo;Necessarily p&rdquo; is true if p is true at every possible world.</li>
          <li>p is <strong>contingent</strong> if it is true at some worlds and false at others.</li>
        </ul>
      </Definition>

      <Example title="duality">
        <p>
          &ldquo;Necessarily p&rdquo; is equivalent to &ldquo;not possibly not p&rdquo;, just as &ldquo;every&rdquo; is
          equivalent to &ldquo;not some not&rdquo;. Modal operators behave like quantifiers over worlds, which explains many
          modal inferences at once.
        </p>
      </Example>

      <Remark title="kinds of necessity">
        <p>
          Logical necessity holds in every logically possible world; physical necessity in every world with our laws of nature.
          It is physically impossible to travel faster than light, but not logically impossible. Restricting the worlds
          quantified over gives different kinds of modality.
        </p>
      </Remark>

      <Remark title="but what are worlds?">
        <p>
          The analysis is powerful, but it raises a question it does not answer. If possible worlds exist, what are they? Lewis
          says they are concrete universes like ours. Others say they are abstract objects, such as maximal consistent sets of
          propositions. Still others treat world talk as a useful fiction. The next two lessons examine these answers.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "poss",
      rung: "check",
      prompt: <p>On the possible worlds analysis, when is &ldquo;possibly p&rdquo; true?</p>,
      answer: { kind: "choice", options: ["When p is true at the actual world", "When p is true at some possible world", "When p is true at every possible world", "When p is believed"], correct: [1] },
    },
    {
      key: "cont",
      rung: "check",
      prompt: <p>What is a contingent truth?</p>,
      answer: { kind: "choice", options: ["A truth that holds at every world", "A truth that is false at some possible world", "A falsehood", "A truth about the future"], correct: [1] },
    },
    {
      key: "dual",
      rung: "apply",
      prompt: <p>Which is equivalent to &ldquo;necessarily p&rdquo;?</p>,
      answer: { kind: "choice", options: ["Possibly p", "Not possibly not p", "Not necessarily not p", "Possibly not p"], correct: [1] },
    },
    {
      key: "kind",
      rung: "apply",
      prompt: <p>Travelling faster than light is physically impossible. Which kind of possibility might it still have?</p>,
      answer: { kind: "choice", options: ["Logical possibility", "Physical possibility", "Actuality", "None"], correct: [0] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>In a model with four worlds, p is true at exactly three of them, including the actual world. Which is true?</p>,
      answer: {
        kind: "choice",
        options: ["p is necessary", "p is impossible", "p is true and contingent", "p is false"],
        correct: [2],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does talk of possible worlds explain modality, or merely restate it? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the analysis of possibility and necessity.",
          "Considers whether defining worlds as ‘ways things could have been’ makes the analysis circular.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "know",
      rung: "stretch",
      prompt: <p>How do we know that it could have rained today? We cannot visit other worlds. Suggest a source of modal knowledge.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Raises the epistemic problem for modal knowledge.",
          "Suggests a source, such as imagination, conceivability, or knowledge of laws and similarity.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the possible worlds analysis of possibility, necessity and contingency, the duality between them, how different kinds of necessity restrict the worlds, and the question of what worlds are.",

  glimpse: (
    <p>
      The next lesson meets Lewis&rsquo;s bold answer that worlds are concrete universes. Modal logic develops Kripke
      semantics formally, and philosophy of language uses worlds to understand names.
    </p>
  ),
};
