import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["beautiful", "agreeable", "good"];
const ITEMS: SortItem[] = [
  { text: "This rose is beautiful.", cat: "beautiful", why: "A singular judgement on the rose's form, made without a concept of what it should be, yet claiming everyone's agreement." },
  { text: "Canary wine is pleasant.", cat: "agreeable", why: "Kant's own example. Here we happily say 'pleasant to me', and do not quarrel with someone who disagrees." },
  { text: "This medicine is good for you.", cat: "good", why: "Good as useful: we judge it by a concept of its purpose, and our pleasure depends on its existence and effects." },
  { text: "This free pattern of foliage on the wallpaper is beautiful.", cat: "beautiful", why: "Kant's free beauty: it means nothing and serves no concept, yet pleases in mere reflection on its form." },
  { text: "I love the warmth of this room.", cat: "agreeable", why: "A pleasure of the senses, tied to my state and to the existence of the warmth." },
  { text: "Keeping your promise is good.", cat: "good", why: "Morally good: judged through the concept of duty, and it carries an interest of reason in the action being done." },
  { text: "That melody is lovely, and anyone who hears it rightly should agree.", cat: "beautiful", why: "The demand for agreement without proof is the mark of a judgement of taste." },
  { text: "This curry is delicious.", cat: "agreeable", why: "Taste of the tongue, not taste in Kant's sense. If you dislike it, I will not say you are wrong." },
];

export const lesson: LessonContent = {
  id: "p8.6.1",
  minutes: 85,
  links: {
    revisits: ["p8.3.3", "p8.3.1", "p8.5.4"],
    foreshadows: ["p8.6.2", "p24.1.2", "p24.4.1"],
  },

  puzzle: (
    <>
      <p>
        If I say a dish is delicious and you disagree, we shrug: tastes differ. If I say a piece of music is beautiful and you
        find it ugly, I think one of us has missed something. Yet I cannot prove my judgement, as I could prove a theorem.
        In the <em>Critique of the Power of Judgement</em> of 1790, Kant asked how a judgement can be grounded in a feeling of
        pleasure and still claim everyone&rsquo;s agreement.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Kant distinguishes three kinds of liking: for the beautiful, for the agreeable and for the good. Sort each judgement.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Is each judgement about the beautiful, the agreeable or the good?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the four moments">
        <p>
          Kant analyses the judgement of taste under the headings of his categories. In <strong>quality</strong>, it is{" "}
          <strong>disinterested</strong>: the pleasure does not depend on any desire for the object&rsquo;s existence. In{" "}
          <strong>quantity</strong>, it claims <strong>universal</strong> agreement, but without a concept. In{" "}
          <strong>relation</strong>, the object shows <strong>purposiveness without a purpose</strong>: its form seems
          designed for our faculties, though we assign it no end. In <strong>modality</strong>, it claims{" "}
          <strong>necessity</strong>: everyone ought to agree.
        </p>
      </Definition>

      <Definition title="the free play of the faculties">
        <p>
          In knowledge, the understanding brings intuitions under a concept. In aesthetic judgement, the imagination and the
          understanding fall into a harmony without any concept fixing the result: a <strong>free play</strong>. The pleasure
          is the feeling of this harmony. Since everyone has the same cognitive faculties, we may presuppose a{" "}
          <strong>common sense</strong>, <em>sensus communis</em>, and so demand that others share the feeling.
        </p>
      </Definition>

      <Example title="free and dependent beauty">
        <p>
          A flower, a bird or a pattern of foliage is a <strong>free beauty</strong>: it is judged without any concept of
          what it ought to be. A church, a horse or a human being is judged as a thing of a certain kind, so its beauty is{" "}
          <strong>dependent</strong>, adhering to a concept of purpose. Only free beauty gives a pure judgement of taste.
        </p>
      </Example>

      <Remark title="the antinomy of taste">
        <p>
          Taste seems both not to rest on concepts, or we could dispute it with proofs, and to rest on concepts, or we could
          not even quarrel about it. Kant resolves this by saying it rests on an indeterminate concept, the supersensible
          ground of nature and of our faculties. Beauty, he adds, is the symbol of morality: in both, we feel ourselves
          free and demand agreement from all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "disint",
      rung: "check",
      prompt: <p>What does Kant mean by calling the judgement of taste disinterested?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the judge finds the object boring.",
          "That the pleasure does not depend on any desire for the object's existence.",
          "That the judgement is made by a neutral third party.",
          "That the object has no purpose.",
        ],
        correct: [1],
      },
    },
    {
      key: "phrase",
      rung: "check",
      prompt: <p>Which phrase does Kant use for the third moment of the judgement of taste?</p>,
      answer: {
        kind: "choice",
        options: ["The categorical imperative", "Purposiveness without a purpose", "The synthetic a priori", "The kingdom of ends"],
        correct: [1],
      },
    },
    {
      key: "church",
      rung: "apply",
      prompt: <p>Judging a building beautiful as a church, by how well it suits a church, is an example of what?</p>,
      answer: { kind: "choice", options: ["Free beauty", "Dependent beauty", "The agreeable", "The sublime"], correct: [1] },
    },
    {
      key: "proof",
      rung: "apply",
      prompt: <p>Why, for Kant, can no one be argued into finding something beautiful?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because beauty is entirely subjective and anything goes.",
          "Because the judgement rests on no determinate concept or rule from which a proof could start.",
          "Because people are stubborn.",
          "Because beauty is a property of the object that only experts can see.",
        ],
        correct: [1],
      },
    },
    {
      key: "ground",
      rung: "apply",
      prompt: <p>What entitles us to demand others&rsquo; agreement in a judgement of taste?</p>,
      answer: {
        kind: "choice",
        options: [
          "A majority vote.",
          "The shared cognitive faculties whose free play the pleasure expresses, a common sense we may presuppose in everyone.",
          "The authority of critics.",
          "A rule stating which objects are beautiful.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Kant right that calling something beautiful claims everyone&rsquo;s agreement? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Kant's view that judgements of beauty, unlike judgements of the agreeable, speak with a universal voice.",
          "Gives a reason for or against, such as how we argue about art, or how widely tastes differ.",
          "Reaches a view. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "hume",
      rung: "stretch",
      prompt: (
        <p>
          Hume grounded the standard of taste in the joint verdict of ideal critics. How does Kant&rsquo;s account differ,
          and which do you find more convincing?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes Hume's standard is empirical, found in the agreement of qualified judges over time.",
          "Notes Kant's claim is a priori, resting on the free play of faculties shared by all, so each judge speaks for everyone.",
          "Weighs them and reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Kant distinguishes the beautiful from the agreeable and the good, the four moments of the judgement of taste, the free play of imagination and understanding, and the difference between free and dependent beauty.",

  glimpse: (
    <p>
      The next lesson turns to the sublime, where the pleasure comes from the failure of imagination before something vast
      or overwhelming. The Aesthetics course compares Kant with Hume on the standard of taste, and asks how aesthetic value
      relates to moral value.
    </p>
  ),
};
