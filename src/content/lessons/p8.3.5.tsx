import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "I am conscious of my own existence as determined in time.",
    kind: "premise",
    note: "Even Descartes grants this: I know that I had this thought, and then that one. It is the starting point the idealist cannot refuse.",
  },
  {
    claim: "All determination of time presupposes something permanent in perception.",
    kind: "premise",
    note: "This is the first analogy: change and succession can be determined only against something that persists.",
    objection: "Why can the permanent thing not be the self? Kant answers that the I of apperception is only a bare representation, not an intuition of anything persisting.",
  },
  {
    claim: "This permanent thing cannot be anything in me.",
    kind: "premise",
    note: "My representations are themselves all changing, so they need something permanent distinct from them, against which their changes can be ordered.",
    objection: "Perhaps the permanent could be a mere representation of something outside me, not an actual thing. Kant insists that a representation of something persisting is not itself a persisting representation.",
  },
  {
    claim: "So the perception of this permanent thing is possible only through a thing outside me, not the mere representation of one.",
    kind: "inference",
    note: "The permanent must be an object of outer sense, existing in space.",
  },
  {
    claim: "So consciousness of my own existence is at the same time immediate consciousness of the existence of other things outside me.",
    kind: "conclusion",
    note: "Inner experience is possible only through outer experience. The Cartesian order, self first and world inferred, is reversed.",
    objection: "The objects outside me are still only appearances in space, so some readers think the refutation proves less than it seems, or that it fits uneasily with transcendental idealism.",
  },
];

export const lesson: LessonContent = {
  id: "p8.3.5",
  minutes: 80,
  links: {
    revisits: ["p8.3.4", "p7.1.2", "p7.4.2"],
    foreshadows: ["p8.4.1", "p10.2.2", "p18.7.1"],
  },

  puzzle: (
    <>
      <p>
        Descartes held that I know my own mind directly, but the external world only by inference, which could fail. Berkeley
        concluded that bodies are only ideas. Kant called it a scandal to philosophy and to human reason in general that the
        existence of things outside us must be accepted merely on faith. In the second edition of the Critique, in 1787, he
        added a proof. Can my awareness of my own inner life really depend on my experience of a world outside me?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Kant&rsquo;s proof, and challenge the steps where it is most vulnerable.
      </p>
      <ArgumentStepViz steps={STEPS} title="The refutation of idealism" />
    </>
  ),

  theory: (
    <>
      <Definition title="problematic idealism">
        <p>
          Kant distinguishes <strong>dogmatic idealism</strong>, Berkeley&rsquo;s, which declares things in space to be
          impossible or imaginary, from <strong>problematic idealism</strong>, Descartes&rsquo;s, which declares the existence
          of outer things doubtful and unprovable, since only the I am is indubitable. The Aesthetic already undermines the
          first, by making space a form of intuition rather than a property of things in themselves. The refutation targets the
          second.
        </p>
      </Definition>

      <Definition title="the strategy">
        <p>
          The refutation is a transcendental argument. It accepts the sceptic&rsquo;s premise, that I am conscious of my own
          states in time, and argues that a condition of this is the existence of persisting things in space. So the
          sceptic&rsquo;s certainty about the inner already includes the outer. Inner experience is not prior to outer; it
          depends on it.
        </p>
      </Definition>

      <Example title="a clock and a train">
        <p>
          To know that I thought of the letter before I thought of the stamp, I must place the two thoughts in an order. My
          thoughts themselves do not carry dates. I fix their order by relating them to something that persists and changes
          lawfully: the sun crossing the sky, the clock on the wall, the train I was sitting in as it passed the stations.
        </p>
      </Example>

      <Remark title="influence">
        <p>
          Whether the refutation succeeds is debated: it seems at most to show that I must represent persisting things in
          space, and critics doubt whether it reaches beyond appearances. But its strategy, of showing that self-knowledge
          depends on knowledge of a public world, runs through Strawson&rsquo;s <em>Individuals</em>,
          Wittgenstein&rsquo;s attack on private language, and many later arguments against Cartesian scepticism.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "target",
      rung: "check",
      prompt: <p>Which idealism does the refutation chiefly target?</p>,
      answer: {
        kind: "choice",
        options: ["Berkeley's dogmatic idealism", "Descartes's problematic idealism", "Kant's own transcendental idealism", "Plato's theory of Forms"],
        correct: [1],
      },
    },
    {
      key: "scandal",
      rung: "check",
      prompt: <p>What did Kant call a scandal to philosophy?</p>,
      answer: {
        kind: "choice",
        options: [
          "That metaphysics makes no progress.",
          "That the existence of things outside us must be accepted merely on faith.",
          "That God cannot be proved.",
          "That philosophers disagree.",
        ],
        correct: [1],
      },
    },
    {
      key: "premise",
      rung: "apply",
      prompt: <p>Which premise does the refutation share with the Cartesian sceptic?</p>,
      answer: {
        kind: "choice",
        options: [
          "That bodies exist.",
          "That I am conscious of my own existence as determined in time.",
          "That God is no deceiver.",
          "That space is a thing in itself.",
        ],
        correct: [1],
      },
    },
    {
      key: "self",
      rung: "apply",
      prompt: <p>Why can the permanent thing not be found in me, according to Kant?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because I do not exist.",
          "Because all my representations are themselves changing, and the I of apperception is no intuition of something persisting.",
          "Because the soul is in space.",
          "Because the self is a thing in itself that we know directly.",
        ],
        correct: [1],
      },
    },
    {
      key: "analogy",
      rung: "apply",
      prompt: <p>Which earlier principle does the refutation rely on?</p>,
      answer: {
        kind: "choice",
        options: ["The first analogy, that something permanent underlies all change", "The ontological argument", "The cogito", "The second antinomy"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, summarise the refutation of idealism.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Starts from my consciousness of my existence in time, which requires something permanent.",
          "Argues the permanent cannot be in me, so it must be outside me, and concludes that inner experience depends on outer experience. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "dream",
      rung: "stretch",
      prompt: <p>Could a sceptic reply that a vivid dream of persisting objects would serve just as well? Give your view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the reply: a mere representation of permanence might be enough to order my states.",
          "Considers Kant's answer, that some outer experience must be real for imagination and dreams to be possible at all, though not every particular one is.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between problematic and dogmatic idealism, the steps of Kant's refutation of idealism, its reliance on the first analogy, and why it reverses the Cartesian order of knowledge.",

  glimpse: (
    <p>
      The next chapter, the Transcendental Dialectic, turns to reason&rsquo;s attempts to know what lies beyond experience,
      starting with the soul. The Epistemology course returns to the structure of justification, and Strawson develops the
      strategy of this argument in descriptive metaphysics.
    </p>
  ),
};
