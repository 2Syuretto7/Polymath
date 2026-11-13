import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.5.3",
  minutes: 80,
  links: {
    revisits: ["p12.5.2", "p11.3.1", "p12.4.3"],
    foreshadows: ["p12.5.4", "p12.5.5", "p15.2.1"],
  },

  puzzle: (
    <>
      <p>
        Imagine a being molecule for molecule identical to you, which talks, laughs and writes poetry exactly as you do, but
        inside is dark: there is nothing it is like to be it. Philosophers call this a zombie. If you can coherently imagine
        one, what follows about consciousness?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the zombie argument. At each premise, ask whether you would accept it.</p>
      <ArgumentStepViz
        title="the conceivability argument"
        steps={[
          { claim: "A zombie world, physically identical to ours but with no consciousness, is conceivable.", kind: "premise", note: "No contradiction seems to follow from describing it.", objection: "Type-B physicalists say it only seems conceivable; Dennett says we cannot really imagine all the physical facts." },
          { claim: "If a zombie world is conceivable, it is metaphysically possible.", kind: "premise", note: "Ideal conceivability is taken as a guide to possibility.", objection: "Water without H₂O seems conceivable but is impossible. Kripke’s a posteriori necessities break the link." },
          { claim: "So a zombie world is metaphysically possible.", kind: "inference", note: "From the first two premises." },
          { claim: "If a zombie world is possible, consciousness is not fixed by the physical facts.", kind: "premise", note: "Physicalism requires that physical duplicates are duplicates in every respect." },
          { claim: "So physicalism is false.", kind: "conclusion", note: "From the last two steps." },
        ]}
      />
    </>
  ),

  theory: (
    <>
      <Definition title="the hard problem">
        <p>
          David Chalmers (1995) separated the <strong>easy problems</strong> of consciousness, explaining functions such as
          discrimination, attention, report and the control of behaviour, from the <strong>hard problem</strong>: why any of
          this processing is accompanied by experience at all. Easy problems are hard in practice but are solved by finding a
          mechanism. Once every function is explained, the hard problem seems to remain.
        </p>
      </Definition>

      <Example title="zombies and supervenience">
        <p>
          Physicalism says the mental supervenes on the physical with metaphysical necessity: no two possible worlds differ
          mentally without differing physically. A zombie world would be exactly such a pair. So the argument targets
          supervenience directly, and Chalmers concluded in favour of property dualism.
        </p>
      </Example>

      <Remark title="replies">
        <p>
          <strong>Type-A physicalists</strong>, such as Dennett, deny that zombies are really conceivable: once the functions
          are explained, nothing is left over. <strong>Type-B physicalists</strong> grant conceivability but deny possibility.
          Pain may be identical to a brain state, as water is H₂O, though we cannot know this a priori. They then owe an
          explanation of why the identity seems contingent, which the phenomenal concept strategy tries to give.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "zombie",
      rung: "check",
      prompt: <p>What is a philosophical zombie?</p>,
      answer: {
        kind: "choice",
        options: [
          "A person with brain damage.",
          "A physical duplicate of a conscious being that has no conscious experience.",
          "A robot that behaves oddly.",
          "A being with a soul but no body.",
        ],
        correct: [1],
      },
    },
    {
      key: "hard",
      rung: "check",
      prompt: <p>Which is an example of the hard problem rather than an easy problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "How the brain integrates information from the eyes and ears.",
          "How we report our mental states.",
          "Why seeing red feels like anything at all.",
          "How attention is controlled.",
        ],
        correct: [2],
      },
    },
    {
      key: "target",
      rung: "apply",
      prompt: <p>Which physicalist thesis does a possible zombie world contradict?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the mental supervenes on the physical with metaphysical necessity.",
          "That the brain is made of cells.",
          "That behaviour is caused by the brain.",
          "That consciousness evolved.",
        ],
        correct: [0],
      },
    },
    {
      key: "typeb",
      rung: "apply",
      prompt: <p>Which premise does a type-B physicalist reject?</p>,
      answer: {
        kind: "choice",
        options: [
          "That zombies are conceivable.",
          "That conceivability implies metaphysical possibility.",
          "That physicalism requires supervenience.",
          "None of them.",
        ],
        correct: [1],
      },
    },
    {
      key: "water",
      rung: "apply",
      prompt: <p>Why is water and H₂O a useful example for the physicalist?</p>,
      answer: {
        kind: "choice",
        options: [
          "It shows that some necessary identities can seem contingent before they are discovered.",
          "It shows water is conscious.",
          "It shows that chemistry is not physical.",
          "It shows conceivability always implies possibility.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Are zombies conceivable, and if so, does that make them possible? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the zombie argument.",
          "Considers the type-A or type-B reply.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Your zombie twin says &ldquo;I am conscious&rdquo; for exactly the same physical reasons that you do. Does this undermine your confidence that you are not a zombie?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the parallel with the self-knowledge objection to epiphenomenalism.",
          "Considers whether direct acquaintance with experience answers it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between the easy and hard problems of consciousness, the zombie argument step by step, and how type-A and type-B physicalists reply.",

  glimpse: (
    <p>
      The next lessons consider two responses: higher-order theories, which try to explain consciousness as a kind of
      awareness of one&rsquo;s own states, and illusionism, which denies there is a hard problem at all. Kripke&rsquo;s work on
      naming lies behind the debate about conceivability.
    </p>
  ),
};
