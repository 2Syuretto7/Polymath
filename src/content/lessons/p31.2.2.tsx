import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CommonFactorViz } from "@/components/viz/CommonFactorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p31.2.2",
  minutes: 90,
  links: {
    revisits: ["p31.2.1", "p12.6.2", "p12.7.2"],
    foreshadows: ["p31.3.1", "p31.4.1", "p35.1.2"],
  },

  puzzle: (
    <>
      <p>
        Imagine a hallucination so perfect that, from the inside, you could not tell it from seeing the lemon on your table.
        Does it follow that seeing the lemon and hallucinating it are, at bottom, the same kind of experience, differing only
        in what is out there? Or could two experiences be indistinguishable to you and still be fundamentally different?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Switch between the two theories, and see what each says is present in seeing, illusion and hallucination.</p>
      <CommonFactorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the argument from hallucination">
        <p>
          A hallucination can be subjectively indistinguishable from a perception. The argument concludes that the two share
          a common kind of experience, and since in hallucination there is no object, that kind cannot essentially involve
          the object either. What we are directly aware of, even in perception, is then something inner: sense data, or a
          representation that could have been misleading.
        </p>
      </Definition>

      <Definition title="disjunctivism">
        <p>
          <strong>Disjunctivism</strong>, developed by J. M. Hinton, Paul Snowdon, John McDowell and M. G. F. Martin, denies
          the step to a common kind. An experience as of a lemon is either a genuine perception of a lemon, in which the
          lemon itself is a constituent, or a mere appearance; there is no fundamental kind the two share. On naive realist
          versions, perceiving consists in standing in a conscious relation of acquaintance to the object and its features.
        </p>
      </Definition>

      <Example title="what the hallucination has in common">
        <p>
          Martin&rsquo;s negative disjunctivism says that the only positive thing to say about a perfect hallucination is that
          it is indiscriminable by reflection from a perception of the corresponding kind. Its character is borrowed, as it
          were, from the perception it mimics. Disjunctivism in epistemology, defended by McDowell and Duncan Pritchard, adds
          that in good cases one&rsquo;s reasons for belief include the fact seen, not merely how things seem.
        </p>
      </Example>

      <Remark title="the screening-off objection">
        <p>
          A hallucination can be produced by stimulating the brain in exactly the way the lemon does. If the same proximate
          brain state is present in both cases, it seems to explain everything the experience explains, screening off any
          contribution from the lemon itself. Disjunctivists reply that what explains behaviour need not exhaust what an
          experience is, and that the good case is explanatorily prior: hallucinations are understood as failed perceptions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What does disjunctivism deny?</p>,
      answer: { kind: "choice", options: ["That perception and a matching hallucination share a fundamental kind of experience", "That hallucinations occur", "That perception involves objects", "That experiences have any character"], correct: [0] },
    },
    {
      key: "arg",
      rung: "check",
      prompt: <p>What does the argument from hallucination start from?</p>,
      answer: { kind: "choice", options: ["That a hallucination can be subjectively indistinguishable from a perception", "That hallucinations are rare", "That perception is always accurate", "That the brain cannot be stimulated"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, under disjunctivism, which case is not counted as the same fundamental experience as seeing the lemon, though it is indiscriminable from it?</p>,
      answer: { kind: "choice", options: ["Hallucinating a lemon", "Seeing a lemon", "None of them", "All of them"], correct: [0] },
    },
    {
      key: "neg",
      rung: "apply",
      prompt: <p>What does Martin&rsquo;s negative disjunctivism say about a perfect hallucination?</p>,
      answer: { kind: "choice", options: ["Its only positive character is being indiscriminable by reflection from a perception", "It is a perception of a sense datum", "It is a perception of the brain", "It has no character at all and cannot be noticed"], correct: [0] },
    },
    {
      key: "screen",
      rung: "apply",
      prompt: <p>What is the screening-off objection?</p>,
      answer: { kind: "choice", options: ["The same brain state in both cases seems to explain everything, leaving no role for the object", "Hallucinations screen off the lemon from view", "Perception is never caused by objects", "Brains cannot be stimulated artificially"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the possibility of perfect hallucination show that perception and hallucination are the same kind of experience? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument from hallucination fairly.",
          "Considers the disjunctivist reply, or the screening-off objection.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If you cannot tell from the inside whether you are perceiving or hallucinating, can your perceptual reasons ever include the fact itself?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with epistemological disjunctivism.",
          "Considers the worry from indiscriminability.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        So far the question has been how the mind meets the world. Turn it inwards: the sense of being a self, with a body
        and a point of view, may itself be a model the brain builds, and can be fooled.
      </p>
      <p>Next, self-models.</p>
    </>
  ),
};
