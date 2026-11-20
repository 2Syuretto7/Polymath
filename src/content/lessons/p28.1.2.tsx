import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { LuminosityViz } from "@/components/viz/LuminosityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p28.1.2",
  minutes: 90,
  links: {
    revisits: ["p28.1.1", "p10.3.1", "p26.3.1"],
    foreshadows: ["p28.1.3", "p28.3.2", "p29.3.3"],
  },

  puzzle: (
    <>
      <p>
        Surely you can always tell whether you feel cold. Your own sensations are the one thing you cannot be wrong about.
        Now imagine a morning in which you warm up so slowly that no two neighbouring moments feel different. Can you
        still always tell, at every moment, whether you feel cold?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the morning, applying the two principles at each moment, and see where they lead.</p>
      <LuminosityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="luminous conditions">
        <p>
          A condition C is <strong>luminous</strong> if, in every case where C obtains, one is in a position to know that C
          obtains. The Cartesian tradition holds that one&rsquo;s own present mental states, such as feeling cold or
          seeming to see red, are luminous. Many internalist theories of justification rely on this.
        </p>
      </Definition>

      <Definition title="margin for error">
        <p>
          Knowledge requires <strong>safety</strong>: one knows p only if one could not easily have falsely believed p. If
          one moment is almost indistinguishable from the next, and one&rsquo;s confidence changes only slightly, then
          knowing C at one moment requires that C still obtains at the next. This is a{" "}
          <strong>margin for error</strong> principle.
        </p>
      </Definition>

      <Example title="the anti-luminosity argument">
        <p>
          Williamson&rsquo;s argument runs through moments t₀, t₁, …, tₙ from dawn to noon. At dawn one feels cold, at noon
          warm. If feeling cold were luminous, then at t₀ one could know one feels cold; margin for error gives cold at t₁;
          luminosity gives knowledge at t₁; and so on, until one feels cold at noon. That is false, so feeling cold is not
          luminous. The argument generalises to almost every condition: we are, in Williamson&rsquo;s phrase, cognitively
          homeless.
        </p>
      </Example>

      <Remark title="KK and replies">
        <p>
          The same form of argument refutes the <strong>KK principle</strong>, that if one knows p one knows that one knows
          p, which corresponds to axiom 4 of epistemic logic. Critics such as Selim Berker and Brian Weatherson question the
          margin for error premise: confidence might change sharply at some moment even if feelings change smoothly, or
          safety might be understood so that it does not apply here.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lum",
      rung: "check",
      prompt: <p>When is a condition luminous?</p>,
      answer: { kind: "choice", options: ["Whenever it obtains, one is in a position to know that it obtains", "When it is about light", "When it is known with certainty by everyone", "When it never obtains"], correct: [0] },
    },
    {
      key: "margin",
      rung: "check",
      prompt: <p>What does the margin for error principle say in the cold example?</p>,
      answer: { kind: "choice", options: ["If one knows one feels cold at a moment, one feels cold at the next, almost identical moment", "One always feels cold at dawn", "One can be wrong about everything", "Knowledge requires certainty"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at which moment does the argument first contradict how one actually feels?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "kk",
      rung: "apply",
      prompt: <p>What does the KK principle say?</p>,
      answer: { kind: "choice", options: ["If one knows p, one knows that one knows p", "If one knows p, p is true", "Everyone knows what everyone knows", "If p is true, one knows p"], correct: [0] },
    },
    {
      key: "ax",
      rung: "apply",
      prompt: <p>Which axiom of modal logic corresponds to the KK principle?</p>,
      answer: { kind: "choice", options: ["4: □p → □□p", "T: □p → p", "K: □(p → q) → (□p → □q)", "5: ◇p → □◇p"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is feeling cold a luminous condition? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the anti-luminosity argument or the Cartesian view fairly.",
          "Assesses a premise, such as margin for error or luminosity itself.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If almost no conditions are luminous, what follows for theories on which justification depends only on what one can tell from the inside?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why internalism seems to need luminous conditions.",
          "Considers whether internalism can survive, for example by weakening the requirement.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If knowledge comes first, it should explain other epistemic notions. The most important is evidence: what we have
        to go on when we believe. Williamson&rsquo;s answer is short and startling.
      </p>
      <p>Next, evidence as knowledge.</p>
    </>
  ),
};
