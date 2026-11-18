import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { IndispensabilityViz } from "@/components/viz/IndispensabilityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.6.2",
  minutes: 85,
  links: {
    revisits: ["p22.6.1", "p22.5.2", "p2.4.1"],
    foreshadows: ["p22.6.3", "p22.6.5", "p22.6.4"],
  },

  puzzle: (
    <>
      <p>
        You believe in electrons, though you have never seen one, because the best theory of the evidence says they exist.
        That same theory is written in the language of real numbers, vector spaces and differential equations, and could not
        be stated without them. If the evidence makes you believe in electrons, why does it not make you believe in numbers?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Reject each premise of the argument in turn and see who has done so, and why.</p>
      <IndispensabilityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the argument">
        <p>
          From W. V. Quine and Hilary Putnam (whose <em>Philosophy of Logic</em>, 1971, gives the clearest statement): (1) we
          ought to have ontological commitment to all and only the entities indispensable to our best scientific theories; (2)
          mathematical entities are indispensable to our best scientific theories; so (3) we ought to believe in mathematical
          entities. Commitment is read off, by Quine&rsquo;s criterion, from what the theory&rsquo;s quantifiers must range
          over.
        </p>
      </Definition>

      <Example title="the support for premise 1">
        <p>
          <strong>Naturalism</strong>: science, not philosophy, is the arbiter of what exists. <strong>Confirmational
          holism</strong>: theories face the evidence as a whole, so when a theory is confirmed, all of it is confirmed,
          including its mathematics. On this view mathematics is empirical in a remote way: in principle, it too could be
          revised in the light of experience.
        </p>
      </Example>

      <Example title="objections">
        <p>
          Penelope Maddy noted that scientists do not believe every part of a confirmed theory: they treat water as a
          continuous fluid, or space as infinitely divisible, knowing these are idealisations; and the atomic theory was
          accepted only after direct evidence, though it was indispensable long before. Elliott Sober argued that confirmation
          is contrastive: the mathematics is shared by all the rival hypotheses, so evidence that favours one over another
          gives it no support. Hartry Field rejected premise 2, as the next lesson shows.
        </p>
      </Example>

      <Remark title="the enhanced argument">
        <p>
          Alan Baker and Mark Colyvan restate the argument in terms of explanation: we should believe in entities that play
          an indispensable explanatory role. Periodical cicadas emerge every 13 or 17 years; one explanation is that prime
          periods minimise overlap with predators of other periods, and the explanation turns on primeness itself. Critics
          reply that the mathematics represents the explanation rather than doing the explaining.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "concl",
      rung: "check",
      prompt: <p>What does the indispensability argument conclude?</p>,
      answer: { kind: "choice", options: ["We ought to believe in mathematical entities", "Mathematics is a fiction", "Science is a priori", "Physics is reducible to mathematics"], correct: [0] },
    },
    {
      key: "holism",
      rung: "check",
      prompt: <p>What is confirmational holism?</p>,
      answer: { kind: "choice", options: ["The view that evidence confirms a theory as a whole, not its parts separately", "The view that only wholes exist", "The view that mathematics is a priori", "The view that theories cannot be confirmed"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which premise does Field reject?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "maddy",
      rung: "apply",
      prompt: <p>Which point did Maddy press against premise 1?</p>,
      answer: { kind: "choice", options: ["Scientists use idealisations they know are false, so not every part of a confirmed theory is believed", "Mathematics is inconsistent", "Science has no best theories", "Numbers are physical"], correct: [0] },
    },
    {
      key: "cicada",
      rung: "apply",
      prompt: <p>What is the cicada example meant to show?</p>,
      answer: { kind: "choice", options: ["That mathematics can play an explanatory role in science", "That insects can count", "That primes are physical", "That biology is mathematics"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is confirmational holism a good reason to believe in numbers? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how holism supports premise 1 of the indispensability argument.",
          "Considers an objection, such as Maddy’s idealisations or Sober’s contrastive confirmation.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If mathematics is confirmed by science, what about the parts of mathematics no science uses, such as large cardinals?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the argument supports only applied mathematics, as Quine accepted.",
          "Considers whether this is a cost, given mathematicians’ practice.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If numbers are indispensable to physics, the nominalist must either accept them or show that physics can do without
        them. Hartry Field tried the second, rewriting Newtonian gravitation without numbers.
      </p>
      <p>
        Next, fictionalism: Field&rsquo;s <em>Science Without Numbers</em>, conservativeness, mathematics as a useful
        fiction, and the objections from modality and from quantum mechanics.
      </p>
    </>
  ),
};
