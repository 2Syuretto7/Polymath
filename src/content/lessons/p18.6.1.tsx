import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RevisionWebViz } from "@/components/viz/RevisionWebViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p18.6.1",
  minutes: 80,
  links: {
    revisits: ["p18.4.3", "p18.4.2", "p18.4.1"],
    foreshadows: ["p18.6.2", "p18.6.3", "p18.7.1"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;All bachelors are unmarried&rdquo; seems true by meaning alone, and &ldquo;all bachelors are untidy&rdquo; true,
        if at all, because of how bachelors happen to be. The difference looks obvious, and the Vienna Circle built
        everything on it. In 1951 Quine argued that no one had ever said clearly what it is. Was he right?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>An experiment has gone against a prediction. Choose which belief to give up.</p>
      <RevisionWebViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the first dogma: analyticity">
        <p>
          A statement is <strong>analytic</strong> if true by virtue of meaning alone. Logical truths, such as &ldquo;no
          unmarried man is married&rdquo;, are unproblematic. The trouble is the second kind, which becomes a logical truth by
          putting synonyms for synonyms. Quine argued that every attempt to explain <strong>synonymy</strong>, by definition,
          by interchangeability salva veritate, or by semantic rules, already relies on analyticity or on notions equally in
          need of explanation. The circle never touches ground.
        </p>
      </Definition>

      <Definition title="the second dogma: reductionism">
        <p>
          The second dogma is that each meaningful statement is equivalent to some construction from terms that refer to
          immediate experience, or at least that each statement has its own range of confirming experiences. Against this
          Quine offered <strong>confirmation holism</strong>: &ldquo;our statements about the external world face the tribunal
          of sense experience not individually but only as a corporate body&rdquo;, a view he credited in part to Duhem.
        </p>
      </Definition>

      <Example title="the web of belief">
        <p>
          Our beliefs form a web touching experience only at the edges. A conflict with experience forces some adjustment, but
          the evidence does not dictate which. Any statement can be held true come what may, given drastic enough changes
          elsewhere, and none, not even logic, is immune from revision. So the two dogmas are one: if statements had separate
          confirming experiences, the analytic statements would be those confirmed by any experience at all.
        </p>
      </Example>

      <Remark title="consequences and replies">
        <p>
          Without the analytic-synthetic distinction, there is no sharp line between philosophy and science, nor between
          questions of language and questions of fact: Quine&rsquo;s naturalism follows. Grice and Strawson replied in 1956
          that a distinction people draw so consistently must mark something, even if it resists definition. Carnap replied
          that analyticity is relative to a chosen framework, and the debate continues.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dogmas",
      rung: "check",
      prompt: <p>Which are the two dogmas Quine attacked?</p>,
      answer: {
        kind: "choice",
        options: [
          "The analytic-synthetic distinction, and reductionism about the confirmation of individual statements.",
          "Realism and idealism.",
          "Dualism and materialism.",
          "Verificationism and falsificationism.",
        ],
        correct: [0],
      },
    },
    {
      key: "holism",
      rung: "check",
      prompt: <p>What is confirmation holism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Statements face experience as a body, not one by one.",
          "Every belief is certain.",
          "Only whole theories have meaning, and sentences have none.",
          "Experience confirms every statement equally.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which revision causes the least disruption to the rest of the web?</p>,
      answer: {
        kind: "choice",
        options: ["Treating the meter reading as a mistake", "Revising Ohm’s law", "Revising arithmetic", "Revising logic"],
        correct: [0],
      },
    },
    {
      key: "circle",
      rung: "apply",
      prompt: <p>Why did Quine reject defining analyticity through synonymy?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every account of synonymy he examined presupposed analyticity or a notion just as unclear.",
          "Synonyms do not exist in English.",
          "Dictionaries disagree.",
          "Synonymy is an empirical notion.",
        ],
        correct: [0],
      },
    },
    {
      key: "logic",
      rung: "apply",
      prompt: <p>According to Quine, could a law of logic be revised in response to experience?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes, in principle, though it would be a drastic change, and he mentions quantum mechanics as a case.",
          "No, logic is analytic.",
          "Only if it is shown to be inconsistent.",
          "Only by convention, never by experience.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Quine show that there is no analytic-synthetic distinction? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Quine’s circularity argument or his holism argument.",
          "Considers a reply, such as Grice and Strawson’s or Carnap’s.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If no belief is immune from revision, how should we explain the special certainty we feel about mathematics?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives Quine’s answer: mathematics lies at the centre of the web, so revising it would disrupt almost everything.",
          "Considers whether this explains the felt necessity or only our reluctance to revise.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, naturalised epistemology: Quine&rsquo;s proposal that the theory of knowledge become a chapter of psychology.
    </p>
  ),
};
