import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Philosophy must be a system, derived from a single first principle.",
    kind: "premise",
    note: "Reinhold and Fichte thought Kant had the right results but had never shown how the forms of intuition, the categories and the moral law hang together.",
    objection: "Why must there be just one principle? Kant was content to find several faculties, each with its own a priori form.",
  },
  {
    claim: "The thing in itself cannot be that principle.",
    kind: "premise",
    note: "Jacobi's complaint: without the thing in itself you cannot enter Kant's system, and with it you cannot stay, since it would be a cause of sensations outside experience, where causality has no use.",
    objection: "A Kantian reply: the thing in itself is a limiting concept, not a cause we claim to know.",
  },
  {
    claim: "The I posits itself: in being conscious of itself, it makes itself what it is.",
    kind: "premise",
    note: "Fichte calls this a fact-act, a deed that is at the same time its own result. We grasp it, he says, by an intellectual intuition of our own activity.",
    objection: "Schelling and Hegel: a self that posits itself already presupposes something deeper, in which subject and object are not yet divided.",
  },
  {
    claim: "The I posits a not-I opposed to it, and finds itself limited.",
    kind: "inference",
    note: "Consciousness needs an object. The I meets a check, which it does not create at will, and which gives it something to work against.",
    objection: "Is the not-I then just the I's own product? Critics charged Fichte with a solipsism in which the world is a dream of the self.",
  },
  {
    claim: "So the world is the field in which the I strives, without end, to be free.",
    kind: "conclusion",
    note: "The practical I is primary. In Fichte's phrase, the world is the material of our duty made sensible.",
    objection: "Schelling: this makes nature a mere obstacle. Nature has a life of its own; it is visible spirit, and spirit invisible nature.",
  },
];

export const lesson: LessonContent = {
  id: "p9.1.1",
  minutes: 85,
  links: {
    revisits: ["p8.3.2", "p8.1.3", "p8.6.3"],
    foreshadows: ["p9.1.2", "p9.1.4", "p19.3.2"],
  },

  puzzle: (
    <>
      <p>
        Kant left philosophy with three Critiques, a list of categories and an unknowable thing in itself. Within a decade
        his young admirers declared the work unfinished. Fichte claimed to have completed it from a single starting point,
        the self-activity of the I; in 1799 Kant publicly disowned him. Schelling, younger still, turned the same ideas
        towards nature and art. What were they trying to fix, and did they fix it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Fichte&rsquo;s argument, and challenge each step to hear the objections.</p>
      <ArgumentStepViz steps={STEPS} title="Fichte's path from the I to the world" />
    </>
  ),

  theory: (
    <>
      <Definition title="Fichte's Wissenschaftslehre">
        <p>
          Fichte&rsquo;s &ldquo;doctrine of science&rdquo;, first published in 1794, begins from the I&rsquo;s act of
          positing itself, and derives from it the opposition of I and not-I and then the categories, space, time and the
          moral law. Theoretical reason explains how the I is limited by a world; practical reason explains why: an I can be
          free only by acting on something that resists it. Hence the primacy of the practical, and the picture of the self
          as endless striving.
        </p>
      </Definition>

      <Definition title="Schelling's philosophy of nature and of identity">
        <p>
          Schelling argued that nature is not merely the I&rsquo;s obstacle but an unconscious, self-organising productivity
          that rises, through matter, life and organisms, to consciousness. Transcendental philosophy runs from the self to
          nature, philosophy of nature from nature to the self, and both rest on an absolute in which subject and object are
          identical. In the <em>System of Transcendental Idealism</em> of 1800, art is where this identity is shown, as
          conscious and unconscious activity unite in the work of genius.
        </p>
      </Definition>

      <Example title="the night in which all cows are black">
        <p>
          In the preface to the <em>Phenomenology of Spirit</em> of 1807, Hegel, once Schelling&rsquo;s friend and
          collaborator, mocked an absolute in which all differences simply vanish, as the night in which all cows are black.
          The absolute, Hegel insisted, must be grasped not only as substance but equally as subject: as a process that
          produces its differences and comes to know itself through them.
        </p>
      </Example>

      <Remark title="legacy">
        <p>
          Fichte&rsquo;s active, self-making self echoes through Hegel, through Marx&rsquo;s idea of labour, and through the
          existentialists. His <em>Addresses to the German Nation</em> also gave him a darker political legacy. Schelling&rsquo;s
          philosophy of nature fed Romantic science and poetry, and his late lectures, attended by Kierkegaard, Engels and
          Bakunin, attacked Hegel for confusing the concept of existence with existence itself.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "first",
      rung: "check",
      prompt: <p>What is Fichte&rsquo;s first principle?</p>,
      answer: {
        kind: "choice",
        options: ["The thing in itself causes sensations.", "The I posits itself.", "God is the cause of all things.", "Nature is mechanism."],
        correct: [1],
      },
    },
    {
      key: "schelling",
      rung: "check",
      prompt: <p>Which slogan belongs to Schelling&rsquo;s philosophy of nature?</p>,
      answer: {
        kind: "choice",
        options: [
          "Nature is visible spirit, and spirit invisible nature.",
          "Existence precedes essence.",
          "The real is the rational.",
          "God is dead.",
        ],
        correct: [0],
      },
    },
    {
      key: "jacobi",
      rung: "apply",
      prompt: <p>What was Jacobi&rsquo;s complaint about the thing in itself?</p>,
      answer: {
        kind: "choice",
        options: [
          "That Kant had proved it exists.",
          "That without it you cannot enter Kant's system, and with it you cannot stay, since it uses causality beyond experience.",
          "That it is identical with God.",
          "That it is a kind of space.",
        ],
        correct: [1],
      },
    },
    {
      key: "practical",
      rung: "apply",
      prompt: <p>Why does Fichte make the practical I primary?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because theory is useless.",
          "Because the I can be free only by acting on a world that resists it, so the not-I exists for the sake of the I's striving.",
          "Because the senses are unreliable.",
          "Because God commands it.",
        ],
        correct: [1],
      },
    },
    {
      key: "cows",
      rung: "apply",
      prompt: <p>What is Hegel&rsquo;s jibe about the night in which all cows are black aimed at?</p>,
      answer: {
        kind: "choice",
        options: [
          "Kant's categories.",
          "An absolute in which all differences simply vanish, as he took Schelling's to be.",
          "Fichte's politics.",
          "Hume's scepticism.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Fichte&rsquo;s idealism a kind of solipsism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the worry: if the not-I is posited by the I, the world may seem a product of one mind.",
          "Considers a reply, such as that the I is not an individual person, or that the check is not created at will.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "betray",
      rung: "stretch",
      prompt: <p>Did Fichte and Schelling complete Kant&rsquo;s project or abandon it? Discuss.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes what they kept, such as the active role of the mind and the priority of freedom.",
          "Notes what they dropped, such as the thing in itself and the limits on knowledge of the absolute.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why Kant's successors thought his system unfinished, how Fichte tried to derive everything from the self-positing I, how Schelling answered with a philosophy of nature and identity, and what Hegel objected to.",

  glimpse: (
    <p>
      The next lesson follows Hegel&rsquo;s <em>Phenomenology of Spirit</em>, which traces consciousness through its shapes
      from sense-certainty to self-consciousness. Hegel&rsquo;s dialectic and logic come later in the chapter, and the
      existentialists return to the theme of a self that makes itself.
    </p>
  ),
};
