import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "What is not cannot be thought of or spoken of.",
    kind: "premise",
    note: "To think is to think of something. A thought of nothing is no thought at all.",
    objection: "We seem to think and speak of things that do not exist all the time: unicorns, the present king of France, the meeting that was cancelled. Perhaps thinking of X does not require that X exists.",
  },
  {
    claim: "So only what is can be thought of or spoken of.",
    kind: "inference",
    note: "The contrapositive of the first premise, restated.",
  },
  {
    claim: "If something came to be, it came from what is not.",
    kind: "premise",
    note: "Before it came to be, it was not. So its origin was not-being.",
    objection: "A tree comes from a seed, which already is. Coming to be may be one thing becoming another, not something from nothing.",
  },
  {
    claim: "Nothing can come from what is not.",
    kind: "premise",
    note: "Not-being cannot be thought, let alone act as a source. And why would something arise at one time rather than another?",
  },
  {
    claim: "So nothing comes to be or passes away.",
    kind: "inference",
    note: "From the last two steps. And change is a kind of coming to be: a thing becoming what it was not.",
  },
  {
    claim: "What is is one, whole, unchanging and without gaps.",
    kind: "conclusion",
    note: "Gaps would be not-being inside being. Division into many would need something between the parts that is not. So there is only one undivided reality, and the changing many we seem to see are appearance.",
    objection: "The argument may trade on an ambiguity in 'is': 'is' can mean 'exists' or link a thing to a property ('is red'). 'The cup is not red' does not say the cup does not exist. If Parmenides ran these together, the argument equivocates.",
  },
];

export const lesson: LessonContent = {
  id: "p4.1.3",
  minutes: 70,
  links: {
    revisits: ["p0.4.4", "p3.2.2"],
    foreshadows: ["p4.4.3", "p11.2.1"],
  },

  puzzle: (
    <>
      <p>
        The Milesians and Heraclitus assumed that things change: air thickens into water, rivers flow. Around 480 BCE,
        Parmenides of Elea, in southern Italy, argued that this is impossible. Nothing comes into being, nothing passes
        away, nothing moves, and there is not even a plurality of things. Reality is one and unchanging.
      </p>
      <p>
        This seems absurd. But he did not simply assert it; he argued for it, from premises that look hard to deny. If
        the conclusion is false, which premise is wrong?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Parmenides wrote in verse: a goddess shows a young man two roads, the way of &ldquo;it is&rdquo; and the way of
        &ldquo;it is not&rdquo;, and tells him the second cannot be travelled, because what is not cannot be known or
        declared. Everything else follows from taking that seriously. Walk through a reconstruction of the argument, and
        challenge the steps that look weakest.
      </p>
      <ArgumentStepViz steps={STEPS} title="A reconstruction of Parmenides' argument (one of several in the literature)" />
    </>
  ),

  theory: (
    <>
      <Definition title="the two parts of the poem">
        <p>
          About 160 lines of the poem survive. The <strong>Way of Truth</strong> argues that what is is ungenerated,
          imperishable, whole, unique, unmoving and complete. The <strong>Way of Opinion</strong> then gives an account of
          the world as it appears to mortals, a cosmology of light and night, while warning that it is not to be trusted.
          Why Parmenides included the second part, if the first is true, is still debated.
        </p>
      </Definition>

      <Remark title="reason against the senses">
        <p>
          Parmenides tells us to judge by reason, not by the eye, the ear or the tongue. This is the first clear
          statement in Western philosophy that argument can overrule experience. If a valid argument from undeniable
          premises contradicts what we see, then what we see must be appearance. Few philosophers have accepted his
          conclusion, but almost all have had to reckon with the method.
        </p>
      </Remark>

      <Example title="nothing from nothing">
        <p>
          One step of the argument has had a long life. &ldquo;Nothing comes from nothing&rdquo; became a principle of
          Greek natural philosophy, and later of physics, in the form of conservation laws: the total of some quantity
          stays fixed, and apparent creation is really rearrangement. The atomists, at the end of this chapter, accepted
          it and still found room for change.
        </p>
      </Example>

      <Remark title="where the argument may go wrong">
        <ul>
          <li>
            <strong>Thinking of what is not.</strong> Perhaps we can think of things that do not exist, so the first
            premise is false. Explaining how is harder than it looks, and Philosophy of Language is still working on it.
          </li>
          <li>
            <strong>Two senses of &ldquo;is&rdquo;.</strong> Parmenides may run together &ldquo;is&rdquo; meaning
            &ldquo;exists&rdquo; and &ldquo;is&rdquo; linking a subject to a property. Plato, in the <em>Sophist</em>,
            argues that &ldquo;is not&rdquo; can mean &ldquo;is different from&rdquo;, which is no threat to existence.
            If so, the argument equivocates, the fallacy of ambiguity met in Critical Reasoning.
          </li>
          <li>
            <strong>Change without creation.</strong> Perhaps change is the rearrangement of what already exists, not the
            emergence of something from nothing.
          </li>
        </ul>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "conclusion",
      rung: "check",
      prompt: <p>Which of these is a conclusion of Parmenides&rsquo; Way of Truth?</p>,
      answer: {
        kind: "choice",
        options: ["Everything is made of water.", "What is is one and unchanging.", "Everything flows.", "The world is made of atoms and void."],
        correct: [1],
      },
    },
    {
      key: "senses",
      rung: "check",
      prompt: <p>When reason and the senses conflict, what does Parmenides recommend?</p>,
      answer: {
        kind: "choice",
        options: ["Trust the senses.", "Trust reason.", "Suspend judgement entirely.", "Ask the gods."],
        correct: [1],
      },
    },
    {
      key: "nothing",
      rung: "apply",
      prompt: <p>Which modern idea descends from the principle that nothing comes from nothing?</p>,
      answer: {
        kind: "choice",
        options: ["Conservation laws in physics.", "The theory of evolution.", "Democracy.", "The germ theory of disease."],
        correct: [0],
      },
    },
    {
      key: "is",
      rung: "apply",
      prompt: <p>Which sentence uses &ldquo;is not&rdquo; without denying that anything exists?</p>,
      answer: {
        kind: "choice",
        options: ["Unicorns are not.", "The cup is not red.", "There is no king of France.", "Nothing is."],
        correct: [1],
      },
    },
    {
      key: "plurality",
      rung: "apply",
      prompt: <p>Why, on Parmenides&rsquo; reasoning, can there not be many things?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the gods made only one thing.",
          "Because separating one thing from another would need something between them that is not.",
          "Because counting is impossible.",
          "Because the senses show only one thing.",
        ],
        correct: [1],
      },
    },
    {
      key: "reconstruct",
      rung: "prove",
      prompt: (
        <p>
          Set out Parmenides&rsquo; argument that nothing comes to be in standard form, in no more than five steps. Then
          identify the premise you find weakest and explain why.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives premises such as: if something came to be, it came from what is not; nothing comes from what is not (or what is not cannot be thought).",
          "Draws the conclusion that nothing comes to be, in a valid form.",
          "Identifies and discusses a weak premise, for instance by distinguishing coming-to-be from nothing and one thing becoming another. Any reasoned choice is fine.",
        ],
      },
    },
    {
      key: "unicorn",
      rung: "stretch",
      prompt: (
        <p>
          &ldquo;I am thinking of a unicorn. Unicorns do not exist. So I am thinking of something that does not
          exist.&rdquo; Does this refute Parmenides&rsquo; first premise? Consider how a defender of Parmenides might
          reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains why the example seems to refute the premise.",
          "Gives a possible reply, for example that one is really thinking of an idea or image, which does exist, or that the thought has no object at all.",
          "Weighs the exchange and reaches a view. Any thoughtful answer is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Parmenides' argument that nothing comes to be or changes, why he thought reason should overrule the senses, and the best ways to resist the argument.",

  glimpse: (
    <p>
      The next lesson meets Zeno, who defended Parmenides by showing that motion and plurality lead to paradox. Plato
      returns to &ldquo;what is not&rdquo; in the <em>Sophist</em>. Metaphysics asks, with Quine, what we commit ourselves
      to when we say that something exists, and how we can deny that something exists without referring to it.
    </p>
  ),
};
