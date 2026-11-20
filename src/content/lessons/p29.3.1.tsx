import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ColourSoritesViz } from "@/components/viz/ColourSoritesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p29.3.1",
  minutes: 90,
  links: {
    revisits: ["p29.2.2", "p17.4.1", "p15.3.2"],
    foreshadows: ["p29.3.2", "p29.3.3", "p29.4.2"],
  },

  puzzle: (
    <>
      <p>
        One grain of rice is not a heap. Adding a single grain to something that is not a heap never makes a heap. So ten
        thousand grains are not a heap. Each step seems compelling and the conclusion is plainly false. The puzzle is over
        two thousand years old, and philosophers still disagree about which step fails.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move along the strip of colours, and try to find a patch that is red while its neighbour is not.</p>
      <ColourSoritesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the sorites paradox">
        <p>
          Attributed to Eubulides of Miletus, the paradox takes a base premise, such as &lsquo;one grain is not a
          heap&rsquo;, and a <strong>tolerance</strong> premise, &lsquo;if n grains are not a heap, then n + 1 grains are not
          a heap&rsquo;. Repeated modus ponens, or mathematical induction, yields an absurd conclusion. Equivalently, the
          tolerance premise denies that there is any sharp boundary: no n such that n grains are not a heap but n + 1 are.
        </p>
      </Definition>

      <Definition title="marks of vagueness">
        <p>
          Vague predicates such as &lsquo;heap&rsquo;, &lsquo;tall&rsquo;, &lsquo;bald&rsquo; and &lsquo;red&rsquo; have
          borderline cases, where competent speakers hesitate and no amount of further information settles the question.
          They seem to lack sharp boundaries, and they show higher-order vagueness: the boundary between clear cases and
          borderline cases is itself blurred.
        </p>
      </Definition>

      <Example title="observational predicates">
        <p>
          Crispin Wright argued that for predicates applied by eye, such as &lsquo;red&rsquo;, tolerance seems built into
          their meaning: if two patches look exactly alike, it would be absurd to call one red and not the other. Yet a
          series of pairwise indiscriminable patches can run from red to yellow, as in the visualisation.
        </p>
      </Example>

      <Remark title="the options">
        <p>
          One may deny the tolerance premise and accept a sharp but unknown boundary (epistemicism); keep classical logic but
          give up bivalence (supervaluationism); allow degrees of truth, so that each conditional is nearly but not quite
          true (degree theory); hold that the boundary shifts with what we attend to (contextualism, as in Diana
          Raffman&rsquo;s work); or, with Peter Unger, conclude that there are no heaps at all (nihilism).
        </p>
      </Remark>

      <Example title="legal sharpening">
        <p>
          The law often replaces a vague notion with a sharp one, such as adulthood at 18 years. This solves a practical
          problem by stipulation, but the stipulated line is admittedly arbitrary, which is exactly what the sorites says no
          line can avoid.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "border",
      rung: "check",
      prompt: <p>What is a borderline case of a vague predicate?</p>,
      answer: { kind: "choice", options: ["A case where competent speakers hesitate and no further information settles whether it applies", "A case where the predicate clearly applies", "A case we lack the information to decide, which more data would settle", "A case where the predicate is ambiguous between two meanings"], correct: [0] },
    },
    {
      key: "tol",
      rung: "check",
      prompt: <p>Which premise of the sorites is the tolerance principle?</p>,
      answer: { kind: "choice", options: ["If n grains are not a heap, then n + 1 grains are not a heap", "One grain is not a heap", "Ten thousand grains are a heap", "Every heap has a definite number of grains"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many tolerance steps join the first patch to the last?</p>,
      answer: { kind: "numeric", value: 40, tolerance: 0 },
    },
    {
      key: "unger",
      rung: "apply",
      prompt: <p>What does Unger&rsquo;s nihilist response to the sorites conclude?</p>,
      answer: { kind: "choice", options: ["There are no heaps", "There is a sharp but unknown boundary", "Truth comes in degrees", "Classical logic must be abandoned"], correct: [0] },
    },
    {
      key: "degree",
      rung: "apply",
      prompt: <p>In a degree theory, modus ponens guarantees only that the degree of B is at least the degree of A plus the degree of &lsquo;if A then B&rsquo; minus 1. Starting from degree 1, with 40 conditionals each of degree 0.99, what lower bound is guaranteed for the conclusion?</p>,
      answer: { kind: "numeric", value: 0.6, tolerance: 0.01 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Which premise of the sorites should we reject, if any? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the paradox with its base and tolerance premises.",
          "Considers at least one response, such as epistemicism, supervaluationism, degrees of truth, contextualism or nihilism.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is vagueness a feature of the world, or only of our language and thought?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes vagueness in words or concepts from vagueness in objects, such as a mountain with no sharp edge.",
          "Considers an argument on either side, such as Evans’s argument against vague identity.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        One response keeps every law of classical logic while denying that every sentence is true or false. Its central
        idea is to consider all the ways a vague word could be made precise.
      </p>
      <p>Next, supervaluationism.</p>
    </>
  ),
};
