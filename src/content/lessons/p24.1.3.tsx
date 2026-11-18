import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["The agreeable", "The beautiful", "The good"];
const ITEMS: SortItem[] = [
  { text: "This mango is delicious.", cat: "The agreeable", why: "A pleasure of sensation, tied to my desire. I do not demand that you share it." },
  { text: "I like warm rooms better than cold ones.", cat: "The agreeable", why: "Kant: about the agreeable, each has their own taste, and it would be foolish to dispute." },
  { text: "This rāga, sung like this, is beautiful.", cat: "The beautiful", why: "Disinterested pleasure in the form of the thing, claimed to be valid for everyone, though no concept proves it." },
  { text: "The pattern of this border is beautiful, though it represents nothing.", cat: "The beautiful", why: "Kant’s ‘free beauty’: foliage on wallpaper, birds, music without words. Purposiveness without any definite purpose." },
  { text: "That sunset over the Arabian Sea is beautiful.", cat: "The beautiful", why: "A judgement of natural beauty, which Kant thought the purest case." },
  { text: "Keeping your promise was the right thing to do.", cat: "The good", why: "Pleasure in the good is mediated by a concept of what the thing ought to be, and involves an interest in its existence." },
  { text: "This is a well-made knife: it cuts cleanly.", cat: "The good", why: "Good for a purpose: judged by the concept of what a knife is for, not by taste." },
];

export const lesson: LessonContent = {
  id: "p24.1.3",
  minutes: 90,
  links: {
    revisits: ["p24.1.2", "p8.6.1", "p8.6.2"],
    foreshadows: ["p24.2.2", "p24.2.3", "p24.4.1"],
  },

  puzzle: (
    <>
      <p>
        If you say a rāga is beautiful and I disagree, we argue. If you say a mango is delicious and I do not like mangoes,
        we shrug. Both are feelings of pleasure. Why does the first claim everyone&rsquo;s agreement and the second does not?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Kant distinguishes three kinds of liking. Sort these judgements among them.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="The agreeable, the beautiful or the good?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the four moments">
        <p>
          In the <em>Critique of the Power of Judgement</em> (1790), Kant analyses the judgement &lsquo;this is
          beautiful&rsquo; under four headings. (1) <strong>Quality</strong>: the pleasure is disinterested, independent of any
          desire for the object&rsquo;s existence. (2) <strong>Quantity</strong>: it claims universal validity, yet without a
          concept, so no rule can prove it. (3) <strong>Relation</strong>: the object shows purposiveness without a purpose,
          seeming designed for our faculties though no purpose is represented. (4) <strong>Modality</strong>: it claims
          necessary assent, grounded in a common sense (sensus communis).
        </p>
      </Definition>

      <Definition title="the free play">
        <p>
          The source of the pleasure is the free play of imagination and understanding. In cognition, the understanding
          applies a concept to what imagination presents. In the experience of beauty, they harmonise without any concept being
          applied, as if the object were made for our knowing in general. Since everyone who can know has these faculties,
          everyone should feel the same pleasure: this is the deduction of the claim to universality.
        </p>
      </Definition>

      <Example title="Kant and Hume">
        <p>
          Kant agrees with Hume that a judgement of taste rests on feeling, not on proof. But where Hume grounds agreement in
          the empirical verdict of true judges, Kant grounds it a priori in the structure of cognition. On Kant&rsquo;s view,
          we do not discover that people agree; we demand that they should, and speak of beauty &lsquo;as if it were a property
          of things&rsquo;.
        </p>
      </Example>

      <Remark title="free and dependent beauty">
        <p>
          Kant distinguished free beauty, as in flowers or patterned borders, from dependent beauty, as in a beautiful house or
          person, judged against a concept of what the thing should be. Critics say this makes pure taste too narrow, leaving
          most art, which represents things and expresses meanings, outside it. Others find in Kant&rsquo;s account of genius
          and aesthetic ideas the resources for a richer theory of art.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dis",
      rung: "check",
      prompt: <p>What does Kant mean by calling the pleasure in the beautiful disinterested?</p>,
      answer: { kind: "choice", options: ["It does not depend on any desire for the object’s existence", "It is boring", "It is felt only by experts", "It is not a pleasure at all"], correct: [0] },
    },
    {
      key: "univ",
      rung: "check",
      prompt: <p>In what sense is a judgement of taste universal?</p>,
      answer: { kind: "choice", options: ["It claims everyone’s agreement, though no concept or rule can prove it", "It follows from a rule everyone accepts", "Everyone in fact agrees", "It applies to all objects"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, where does &lsquo;I like warm rooms better than cold ones&rsquo; belong?</p>,
      answer: { kind: "choice", options: ["The agreeable", "The beautiful", "The good", "None of them"], correct: [0] },
    },
    {
      key: "purp",
      rung: "apply",
      prompt: <p>What is purposiveness without a purpose?</p>,
      answer: { kind: "choice", options: ["The object seems designed to suit our faculties, though no definite purpose is represented", "The object is useful", "The object has no form", "The artist had no intention"], correct: [0] },
    },
    {
      key: "hume",
      rung: "apply",
      prompt: <p>How does Kant&rsquo;s ground for agreement in taste differ from Hume&rsquo;s?</p>,
      answer: { kind: "choice", options: ["Kant grounds it a priori in the faculties of cognition; Hume in the empirical verdict of true judges", "Kant thinks taste is a matter of proof", "Hume thinks beauty is in objects", "They agree entirely"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is Kant right that a judgement of beauty claims everyone&rsquo;s agreement, while a judgement of the agreeable does not? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Kant’s contrast between the beautiful and the agreeable.",
          "Considers an example or objection, such as disputes about food or deep disagreement about art.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Kant thought free beauty, such as abstract patterns, is the purest case. Does that fit how you experience a novel or a film?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes novels and films represent and mean things, which Kant’s pure taste sets aside.",
          "Considers whether their beauty is dependent beauty, or calls for aesthetic ideas instead.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Plato, Hume and Kant asked what beauty is and how we judge it. A different question asks what art is: whether it
        must imitate, express, or simply be accepted as art by the right people.
      </p>
      <p>Next, theories of art, starting with the oldest: art as imitation.</p>
    </>
  ),
};
