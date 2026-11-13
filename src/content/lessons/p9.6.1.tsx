import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "The true world is attainable for the wise, the pious, the virtuous; they live in it, they are it.",
    kind: "premise",
    note: "The oldest form of the idea, Plato's: the philosopher has access to the Forms. Nietzsche calls it a paraphrase of the sentence: I, Plato, am the truth.",
  },
  {
    claim: "The true world is unattainable for now, but promised to the sage, the pious, the virtuous, to the sinner who repents.",
    kind: "inference",
    note: "Christianity: the true world moves to the afterlife. The idea becomes more subtle and more elusive.",
  },
  {
    claim: "The true world is unattainable, unprovable, cannot be promised, but the very thought of it is a consolation, an obligation, an imperative.",
    kind: "inference",
    note: "Kant: the thing in itself cannot be known, but it still grounds morality. The old sun, seen through mist and scepticism.",
    objection: "A Kantian: the noumenal is a limiting concept, not a hidden world, so this stage caricatures the critical philosophy.",
  },
  {
    claim: "The true world: unattainable? At any rate unattained, and so unknown, and so neither consoling nor obligating.",
    kind: "inference",
    note: "Positivism: if it cannot be known, what could it oblige us to do? The cockcrow of reason.",
  },
  {
    claim: "The true world is an idea good for nothing, not even obligating, a refuted idea: let us abolish it.",
    kind: "inference",
    note: "The free spirits: bright day, breakfast, the return of good sense and cheerfulness.",
  },
  {
    claim: "We have abolished the true world: what world is left? The apparent one, perhaps? But no: with the true world we have also abolished the apparent one.",
    kind: "conclusion",
    note: "Noon, the moment of the shortest shadow. Without a true world to contrast it with, appearance is no longer mere appearance. It is simply the world as seen from within life.",
    objection: "If there is no truth apart from perspectives, is this history itself just one more perspective? Critics press the charge of self-refutation.",
  },
];

export const lesson: LessonContent = {
  id: "p9.6.1",
  minutes: 85,
  links: {
    revisits: ["p9.3.1", "p8.1.3", "p9.4.3"],
    foreshadows: ["p9.6.2", "p34.3.2", "p29.4.1"],
  },

  puzzle: (
    <>
      <p>
        Friedrich Nietzsche was a professor of classical philology at twenty-four and retired with broken health at thirty-four.
        In the ten years of wandering that followed he wrote books that question the value of truth itself. If, as he wrote,
        there are no facts, only interpretations, is that sentence a fact or an interpretation?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Nietzsche&rsquo;s short history of an error, from Twilight of the Idols (1888), and challenge the stages
        that critics question.
      </p>
      <ArgumentStepViz steps={STEPS} title="How the true world finally became a fable" />
    </>
  ),

  theory: (
    <>
      <Definition title="perspectivism">
        <p>
          &ldquo;There is only a perspective seeing, only a perspective knowing; and the more affects we allow to speak about
          one thing, the more eyes, different eyes, we can use to observe one thing, the more complete will our concept of this
          thing, our objectivity, be.&rdquo; (On the Genealogy of Morals III 12.) Knowledge is always from a point of view
          shaped by needs and drives; there is no view from nowhere.
        </p>
      </Definition>

      <Example title="truth as metaphor">
        <p>
          In an early unpublished essay, On Truth and Lies in a Nonmoral Sense (1873), Nietzsche calls truth &ldquo;a mobile army
          of metaphors, metonyms and anthropomorphisms&rdquo;: illusions we have forgotten are illusions. Concepts arise by
          equating unequal things, as the word leaf covers countless leaves that are never quite the same.
        </p>
      </Example>

      <Definition title="the value of truth">
        <p>
          Beyond Good and Evil opens by asking not whether our beliefs are true but why we want truth at all: why not untruth,
          uncertainty, even ignorance? The will to truth, Nietzsche suggests, is itself a moral commitment inherited from
          Christianity, and it needs to be questioned like any other value.
        </p>
      </Definition>

      <Remark title="self-refutation and its answers">
        <p>
          If all truth is perspectival, is perspectivism true from every perspective? Readers answer differently. Maudemarie
          Clark argues that the mature Nietzsche denies only a metaphysical truth that would be independent of every possible
          knower, while keeping ordinary and scientific truth. Others read him as a pragmatist about truth, or as a sceptic. On
          most readings the more perspectives, the more objective, so perspectivism is not the view that every view is as good
          as any other.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "quote",
      rung: "check",
      prompt: <p>Which statement best expresses Nietzsche&rsquo;s perspectivism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every opinion is as good as every other.",
          "All knowing is from some perspective, and more perspectives give a more complete view.",
          "Only scientific perspectives count.",
          "The world in itself can be known by pure reason.",
        ],
        correct: [1],
      },
    },
    {
      key: "stage",
      rung: "check",
      prompt: <p>In the fable, which stage corresponds to Kant?</p>,
      answer: {
        kind: "choice",
        options: [
          "The true world is attainable for the wise.",
          "The true world is promised to the repentant sinner.",
          "The true world is unattainable but the thought of it is an obligation.",
          "The true world is abolished.",
        ],
        correct: [2],
      },
    },
    {
      key: "leaf",
      rung: "apply",
      prompt: <p>What does Nietzsche&rsquo;s example of the word leaf illustrate?</p>,
      answer: {
        kind: "choice",
        options: [
          "That botany is impossible.",
          "That concepts arise by treating unequal things as equal.",
          "That words have fixed essences.",
          "That leaves are illusions.",
        ],
        correct: [1],
      },
    },
    {
      key: "apparent",
      rung: "apply",
      prompt: <p>Why does abolishing the true world also abolish the apparent one?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because nothing exists at all.",
          "Because appearance was defined only by contrast with a truer world, so the contrast lapses.",
          "Because we cannot perceive anything.",
          "Because Zarathustra forbids it.",
        ],
        correct: [1],
      },
    },
    {
      key: "will",
      rung: "apply",
      prompt: <p>What question does Beyond Good and Evil raise at its start?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whether God exists.",
          "Why we value truth at all, rather than untruth.",
          "How to define goodness.",
          "Whether the external world is real.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does perspectivism refute itself? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the self-refutation charge.",
          "Considers a reply, such as Clark's reading or that perspectivism need not claim to be true from nowhere.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "eyes",
      rung: "stretch",
      prompt: <p>Nietzsche says more eyes give a more objective concept. Does this fit with the claim that there are no facts, only interpretations?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the tension: objectivity seems to need something to be more or less accurate about.",
          "Offers a reconciliation or argues that the views conflict.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Nietzsche's perspectivism, his history of how the true world became a fable, his early view of truth as metaphor, his question about the value of truth, and the self-refutation objection with a reply.",

  glimpse: (
    <p>
      The next lesson applies Nietzsche&rsquo;s method to morality itself in the Genealogy. Foucault later turned genealogy on
      institutions of power and knowledge, and contemporary debates over truth ask how much of it is deflationary.
    </p>
  ),
};
