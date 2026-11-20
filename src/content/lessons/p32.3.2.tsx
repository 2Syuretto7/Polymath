import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TypicalityViz } from "@/components/viz/TypicalityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p32.3.2",
  minutes: 90,
  links: {
    revisits: ["p32.3.1", "p32.2.5", "p10.7.1"],
    foreshadows: ["m36.4.2", "m27.2.2", "p33.1.1"],
  },

  puzzle: (
    <>
      <p>
        Classical mechanics is deterministic: given the exact state of a gas now, its future is fixed. Yet statistical
        mechanics says that the gas will very probably spread out, and its predictions are among the best confirmed in
        science. If the outcome is already settled, what are these probabilities probabilities of, and what makes them
        right?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Increase the number of particles, and see what fraction of microstates lie near half and half.</p>
      <TypicalityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the statistical postulate">
        <p>
          Statistical mechanics assigns probabilities to microstates using the <strong>Liouville measure</strong>, the
          natural volume on phase space, conserved by Hamiltonian dynamics. The <strong>statistical postulate</strong> says
          that, given a macrostate, the probability that the microstate lies in a region is proportional to the region&rsquo;s
          volume within the macrostate. With the Past Hypothesis, this yields the second law and much else.
        </p>
      </Definition>

      <Definition title="three interpretations">
        <p>
          On the <strong>epistemic</strong> view, associated with Edwin Jaynes, the probabilities measure our ignorance of
          the exact microstate, and the uniform measure is the rational prior of maximum entropy. On the{" "}
          <strong>typicality</strong> view of Sheldon Goldstein and Joel Lebowitz, the measure is not a probability at all
          but says that the behaviour is true of almost all microstates, so is to be expected. On the{" "}
          <strong>Humean</strong> view of Barry Loewer, the Past Hypothesis, the statistical postulate and the dynamics
          together form the best systematisation of the world&rsquo;s events, which he calls the Mentaculus, and so are
          objective laws with objective chances.
        </p>
      </Definition>

      <Example title="ergodicity">
        <p>
          An older approach seeks to justify the measure by <strong>ergodicity</strong>: for an ergodic system, the time
          average of a quantity along almost every trajectory equals its average over phase space. But real systems need not
          be ergodic, as the KAM theorem shows for many near-integrable systems; the theorem says nothing about how long the
          averages take; and measurements happen in finite time, not as infinite averages.
        </p>
      </Example>

      <Remark title="chance and determinism">
        <p>
          The epistemic view must explain why our ignorance makes ice melt; the typicality view must say why atypical
          behaviour is not to be expected, without circularly calling it improbable. David Albert suggests that GRW collapse
          supplies genuine chances that underlie the statistical ones, so that the statistical postulate is not needed as a
          separate law. Whether there can be objective chance in a deterministic world remains a live question.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "post",
      rung: "check",
      prompt: <p>What does the statistical postulate say?</p>,
      answer: { kind: "choice", options: ["Given a macrostate, probability is proportional to phase space volume within it", "Every macrostate is equally likely", "Entropy always decreases", "Microstates are unobservable and so do not exist"], correct: [0] },
    },
    {
      key: "typ",
      rung: "check",
      prompt: <p>What does the typicality view claim about the measure in statistical mechanics?</p>,
      answer: { kind: "choice", options: ["It tells us what is true of almost all microstates, rather than giving a probability", "It measures degrees of belief", "It is a frequency in an infinite sequence", "It has no role"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set N = 100. What fraction of microstates have between 40 and 60 per cent of particles on the left?</p>,
      answer: { kind: "numeric", value: 0.965, tolerance: 0.01 },
    },
    {
      key: "erg",
      rung: "apply",
      prompt: <p>Which is a problem for justifying statistical mechanics by ergodicity?</p>,
      answer: { kind: "choice", options: ["Many realistic systems are not ergodic, and ergodicity says nothing about time scales", "Ergodic systems have no phase space", "Ergodicity implies entropy decreases", "Ergodicity is the same as determinism"], correct: [0] },
    },
    {
      key: "menta",
      rung: "apply",
      prompt: <p>What is Loewer&rsquo;s Mentaculus?</p>,
      answer: { kind: "choice", options: ["The Past Hypothesis, the statistical postulate and the dynamics, taken as the best system of laws", "A device for measuring entropy", "A version of Bohmian mechanics", "Jaynes’s maximum entropy rule"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Can there be objective probabilities in a deterministic world? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States an account of probability in statistical mechanics, such as the epistemic, typicality or Humean view.",
          "Considers an objection to it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If GRW collapse is real, does it explain the probabilities of statistical mechanics?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Albert’s suggestion that collapse chances underlie statistical ones.",
          "Considers a difficulty, such as whether collapses act fast enough or whether the Past Hypothesis is still needed.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The course on philosophy of physics is complete. It asked what the world must be like for physics to be true; the
        next course asks how people who disagree deeply about such questions can share a just society.
      </p>
      <p>Next, the course on advanced political and social philosophy begins with public reason.</p>
    </>
  ),
};
