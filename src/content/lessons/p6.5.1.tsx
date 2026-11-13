import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "A person can be certain that God is a being while doubting whether God is finite or infinite, created or uncreated.",
    kind: "premise",
    note: "Scotus points to the history of philosophy: thinkers agreed that the first principle exists, yet disagreed about whether it was fire, water, or something infinite.",
    objection: "Were the early philosophers really thinking of God, or of something else they happened to call the first principle?",
  },
  {
    claim: "A concept one is certain of is different from concepts one is doubtful about.",
    kind: "premise",
    note: "If one concept were the same as another, one could not be certain of the first and doubtful of the second at the same time.",
  },
  {
    claim: "So the concept of being is distinct from the concepts of finite being and infinite being.",
    kind: "inference",
    note: "The certain concept, being, is neither of the doubtful ones, so it is common to both.",
  },
  {
    claim: "Therefore being is said univocally, in exactly the same sense, of God and of creatures.",
    kind: "conclusion",
    note: "God and a stone are not alike in the way they are, but the concept of being, the bare thought of something rather than nothing, applies to both in the same sense.",
    objection: "Aquinas held that being is said of God and creatures only by analogy. Does univocity threaten the vast difference between God and the world?",
  },
  {
    claim: "Without univocity, we could have no natural knowledge of God at all.",
    kind: "conclusion",
    note: "All our concepts come from creatures. If none applied to God in the same sense, no argument from creatures to God could avoid equivocation.",
  },
];

export const lesson: LessonContent = {
  id: "p6.5.1",
  minutes: 80,
  links: {
    revisits: ["p6.4.2", "p6.3.2", "p6.2.5"],
    foreshadows: ["p6.5.2", "p6.5.3", "p7.2.3"],
  },

  puzzle: (
    <>
      <p>
        John Duns Scotus, a Franciscan from Scotland who died in 1308 aged about forty-two, was so subtle that he was called
        the Subtle Doctor. Two centuries later, humanists mocked his followers as &ldquo;Dunsmen&rdquo;, which is where the
        word dunce comes from. He asked two questions that sound simple. When we say that God exists and that a stone
        exists, do we mean the same thing by exists? And what makes this stone this one, rather than another stone exactly
        like it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Scotus&rsquo;s argument that being is univocal, and challenge the steps you doubt.</p>
      <ArgumentStepViz steps={STEPS} title="The univocity of being" />
    </>
  ),

  theory: (
    <>
      <Definition title="univocity">
        <p>
          A term is <strong>univocal</strong> when it is used in the same sense in different applications,{" "}
          <strong>equivocal</strong> when in unrelated senses, as bank for a riverbank and a money bank, and{" "}
          <strong>analogical</strong> when in related but different senses. Aquinas held that words such as good and being
          apply to God and creatures by analogy. Scotus argued that at least the concept of being must be univocal, or our
          reasoning from creatures to God would rest on a pun.
        </p>
      </Definition>

      <Definition title="haecceity">
        <p>
          What makes an individual the individual it is? Not its matter, Scotus argued, since matter is itself in need of
          individuation, and not its qualities, since two things could share all of them. He posited a positive principle,
          later called <strong>haecceity</strong>, from the Latin <em>haec</em>, this: the thisness of a thing. Each
          individual has a common nature, such as humanity, contracted by its own haecceity to be this human. The two are
          not separate things, but are distinguished by what Scotus called a <strong>formal distinction</strong>, less than
          real and more than merely in our thought.
        </p>
      </Definition>

      <Example title="two identical spheres">
        <p>
          Imagine two iron spheres, exactly alike in size, shape, colour and composition. What makes them two? A natural
          answer is that they are in different places. But Scotus held that place, like every quality, is something the
          individual has, not what makes it this individual. So each must have its own haecceity. Leibniz would later deny
          that two things can be exactly alike, and the debate about individuation continues today.
        </p>
      </Example>

      <Remark title="the will">
        <p>
          Scotus also gave a new place to the will. Against those who thought the will always follows the judgement of
          the intellect, he held that the will is free to choose even against what the intellect presents as best, and
          that God&rsquo;s will, though never irrational, is not bound by any necessity beyond the law of non-contradiction
          and the love of God. Some historians see this emphasis on will and on individuals as a step towards the modern
          world.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "univ",
      rung: "check",
      prompt: <p>What does it mean for a term to be univocal?</p>,
      answer: {
        kind: "choice",
        options: [
          "It has unrelated meanings.",
          "It is used in the same sense in different applications.",
          "It has related but different meanings.",
          "It has no meaning.",
        ],
        correct: [1],
      },
    },
    {
      key: "haec",
      rung: "check",
      prompt: <p>What is a haecceity?</p>,
      answer: {
        kind: "choice",
        options: [
          "A universal shared by many things.",
          "The thisness that makes an individual this individual.",
          "The matter of a thing.",
          "A kind of syllogism.",
        ],
        correct: [1],
      },
    },
    {
      key: "aquinas",
      rung: "apply",
      prompt: <p>How did Aquinas&rsquo;s view of language about God differ from Scotus&rsquo;s?</p>,
      answer: {
        kind: "choice",
        options: [
          "Aquinas held that being is said of God and creatures by analogy; Scotus, that the concept of being is univocal.",
          "Aquinas held that it is univocal; Scotus, that it is equivocal.",
          "Both held it is equivocal.",
          "Neither discussed it.",
        ],
        correct: [0],
      },
    },
    {
      key: "bank",
      rung: "apply",
      prompt: <p>The word bank, used for a riverbank and for a place that keeps money, is an example of which kind of term?</p>,
      answer: {
        kind: "choice",
        options: ["Univocal", "Equivocal", "Analogical", "Formal"],
        correct: [1],
      },
    },
    {
      key: "spheres",
      rung: "apply",
      prompt: <p>Why did Scotus reject the view that two exactly similar spheres are made two by their places?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because places do not exist.",
          "Because place is something an individual has, not what makes it this individual.",
          "Because the spheres are in the same place.",
          "Because only God individuates.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Scotus&rsquo;s argument from certainty and doubt a good argument for univocity? Explain and assess it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets out the argument: being certain that God is a being while doubting whether finite or infinite shows the concept of being is distinct from both.",
          "Assesses it, for example by asking whether certainty and doubt track concepts or only words, and reaches a view.",
        ],
      },
    },
    {
      key: "indiscernible",
      rung: "stretch",
      prompt: (
        <p>
          Could there be two things exactly alike in every quality and relation? Consider Scotus&rsquo;s haecceity and
          Leibniz&rsquo;s denial, and argue for an answer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains both positions: haecceity allows qualitatively identical individuals; the identity of indiscernibles rules them out.",
          "Argues for a view, perhaps using a thought experiment such as two spheres alone in a universe.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Scotus's argument that being is univocal, how it differs from Aquinas's doctrine of analogy, and his idea of haecceity as what makes an individual this individual.",

  glimpse: (
    <p>
      The next lesson meets William of Ockham, who rejected Scotus&rsquo;s common natures, and his razor. Leibniz&rsquo;s
      rival principle comes in the early modern course.
    </p>
  ),
};
