import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { AntinomyViz } from "@/components/viz/AntinomyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p8.4.2",
  minutes: 85,
  links: {
    revisits: ["p8.4.1", "p8.2.1", "p7.6.2"],
    foreshadows: ["p8.4.3", "p8.5.2", "p11.7.1"],
  },

  puzzle: (
    <>
      <p>
        Did the world have a beginning? Clarke, for Newton, said yes; others said it must be eternal. Is matter made of
        indivisible atoms, or divisible without end? Are we free, or is everything determined? On each question, Kant found,
        reason can construct a seemingly rigorous proof of either answer. He said that the antinomies, more than anything else,
        woke him from his dogmatic slumber. If reason proves a contradiction, what has gone wrong?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Read the thesis and antithesis of each antinomy, with their proofs. Decide which you find more convincing, then see
        Kant&rsquo;s resolution.
      </p>
      <AntinomyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="antinomy">
        <p>
          An <strong>antinomy</strong> is a conflict between two propositions, a thesis and an antithesis, each of which seems
          provable by reason. Kant finds four, arising when reason seeks the unconditioned totality of a series of conditions
          in the world: in time and space, in division, in causation, and in dependence of existence.
        </p>
      </Definition>

      <Definition title="the resolution">
        <p>
          Both sides assume that the world is a thing in itself, given as a complete whole. Transcendental idealism denies
          this. In the first two, <strong>mathematical</strong>, antinomies both sides are false, because the world of
          appearances is neither finite nor infinite as a whole; it is given only in an indefinite regress. In the last two,{" "}
          <strong>dynamical</strong>, antinomies both sides may be true, because the thesis may hold of things in themselves
          and the antithesis of appearances.
        </p>
      </Definition>

      <Example title="freedom and nature">
        <p>
          The third antinomy is the one Kant cares about most. Every action, as an event in time, follows from prior events by
          natural law. But the same agent may also be considered as a thing in itself, outside time, with an intelligible
          character whose causality is freedom. Kant claims only that this is not contradictory. Whether we are in fact free is
          left to practical philosophy, where the moral law, he argues, gives us reason to believe it.
        </p>
      </Example>

      <Remark title="indirect proof of idealism">
        <p>
          Kant offers the antinomies as an indirect proof of transcendental idealism: if the world were a thing in itself, one
          side of each antinomy would have to be true, but both are refuted, so the world is not a thing in itself. Critics
          question whether the proofs are as sound as Kant claims. Cantor&rsquo;s theory of infinite sets, for instance,
          undermines the thesis argument of the first antinomy. The third antinomy shaped the modern debate between
          compatibilists and incompatibilists about free will.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is an antinomy, for Kant?</p>,
      answer: {
        kind: "choice",
        options: [
          "A law against reason.",
          "A conflict between a thesis and an antithesis, each seemingly provable by reason.",
          "A category.",
          "A proof of God's existence.",
        ],
        correct: [1],
      },
    },
    {
      key: "kinds",
      rung: "check",
      prompt: <p>Which antinomies are mathematical? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["The first, on time and space", "The second, on division", "The third, on freedom", "The fourth, on a necessary being"], correct: [0, 1] },
    },
    {
      key: "math",
      rung: "apply",
      prompt: <p>How does Kant resolve the mathematical antinomies?</p>,
      answer: {
        kind: "choice",
        options: [
          "The thesis is true and the antithesis false.",
          "Both sides are false, because the world of appearances is not given as a complete whole.",
          "Both sides are true.",
          "The question is left open.",
        ],
        correct: [1],
      },
    },
    {
      key: "dyn",
      rung: "apply",
      prompt: <p>How does Kant resolve the third antinomy?</p>,
      answer: {
        kind: "choice",
        options: [
          "Freedom is an illusion.",
          "Natural law has exceptions.",
          "Both may be true: natural causality holds of appearances, and freedom may hold of the agent as a thing in itself.",
          "Freedom is proved by experience.",
        ],
        correct: [2],
      },
    },
    {
      key: "indirect",
      rung: "apply",
      prompt: <p>Why does Kant think the antinomies support transcendental idealism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because they show that space is a thing in itself.",
          "Because if the world were a thing in itself, one side of each antinomy would be true, yet both are refuted.",
          "Because Hume believed in them.",
          "Because they are about God.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, give the proof of the thesis or the antithesis of the first antinomy, and say what you think of it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States one proof, such as that an infinite past cannot have been completed, or that a beginning in empty time would have no reason.",
          "Offers a reasoned assessment. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "free",
      rung: "stretch",
      prompt: <p>Is Kant&rsquo;s reconciliation of freedom and natural necessity convincing? Give your view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes the two standpoints: actions as appearances under natural law, the agent as a thing in itself with free causality.",
          "Raises a difficulty, such as how a timeless choice relates to particular actions, or whether this is freedom worth having.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what an antinomy is, the four antinomies of pure reason, how Kant resolves the mathematical and the dynamical ones differently, and why he took them as evidence for transcendental idealism.",

  glimpse: (
    <p>
      The next lesson examines reason&rsquo;s third idea, God, and Kant&rsquo;s criticism of the proofs of God&rsquo;s
      existence. Freedom returns in the practical philosophy as the condition of morality, and the Metaphysics course takes up
      the modern debate over free will.
    </p>
  ),
};
