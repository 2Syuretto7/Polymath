import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["ontic", "ontological"];
const ITEMS: SortItem[] = [
  { text: "How many people live in Delhi?", cat: "ontic", why: "A question about particular beings and their properties." },
  { text: "What is it for anything to be at all?", cat: "ontological", why: "The question of Being itself, which Heidegger thought philosophy had forgotten." },
  { text: "Neurons fire up to a few hundred times a second.", cat: "ontic", why: "A fact about certain beings, discovered by a science." },
  { text: "What kind of being does a tool have, as opposed to a stone?", cat: "ontological", why: "It asks about a way of being, not about any particular tool or stone." },
  { text: "Is this hammer too heavy for the job?", cat: "ontic", why: "A question about one being, asked within everyday life." },
  { text: "What is it to exist as someone whose own life is at stake for them?", cat: "ontological", why: "It asks after the being of Dasein, which Heidegger calls existence." },
  { text: "When was the Taj Mahal built?", cat: "ontic", why: "A historical fact about one being." },
  { text: "What is it for something to be past, present or still to come?", cat: "ontological", why: "It asks about time as a structure of being, which is where Being and Time is heading." },
];

export const lesson: LessonContent = {
  id: "p19.2.1",
  minutes: 75,
  links: {
    revisits: ["p4.4.3", "p11.2.3", "p19.1.2"],
    foreshadows: ["p19.2.2", "p19.2.4", "p19.3.2"],
  },

  puzzle: (
    <>
      <p>
        We use the word &ldquo;is&rdquo; hundreds of times a day, and understand it well enough to get by: the tea is hot,
        the train is late, there is a God or there is not. Yet ask what it means for anything to be, and the mind goes blank.
        Is that a real question at all? And if it is, where could one even begin?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each question: is it about particular beings, or about what it is to be?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Ontic or ontological?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the question of Being">
        <p>
          Martin Heidegger opened <em>Being and Time</em> (1927) with a passage from Plato&rsquo;s <em>Sophist</em>: we once
          thought we understood &ldquo;being&rdquo;, but now we are perplexed. He insisted on the{" "}
          <strong>ontological difference</strong> between Being and beings. Questions about beings are{" "}
          <strong>ontic</strong>, the business of everyday life and the sciences; questions about what it is to be are{" "}
          <strong>ontological</strong>. Being is not itself a being, not even the highest one, so it cannot be investigated as
          a thing among things.
        </p>
      </Definition>

      <Definition title="Dasein">
        <p>
          Where to begin? With the one being that already has some understanding of Being and for whom its own being is an
          issue: ourselves. Heidegger calls this being <strong>Dasein</strong>, ordinary German for existence, literally
          &ldquo;being-there&rdquo;, avoiding words such as subject, mind or consciousness that carry old theories with them.
          Dasein&rsquo;s being is <strong>existence</strong>: it is not a fixed what, but always a way of being it has to take
          up, its own possibilities. And Dasein is in each case mine.
        </p>
      </Definition>

      <Example title="existentials and categories">
        <p>
          Stones and tables are described by <strong>categories</strong>, such as substance, quantity and location. Dasein is
          described by <strong>existentials</strong>: being-in-the-world, care, being-with-others, being-towards-death. To ask
          what kind of thing a person is, as one would ask about a stone, is already to miss what is distinctive about them.
          Hence Heidegger&rsquo;s phenomenology departs from Husserl&rsquo;s: not pure consciousness after a reduction, but
          everyday existence as it is lived.
        </p>
      </Example>

      <Remark title="the man and the work">
        <p>
          Heidegger joined the Nazi party in 1933 as rector of Freiburg and never clearly repudiated it; his private
          notebooks, published from 2014, contain antisemitic passages. Philosophers continue to argue about how far his
          politics infect his thought. His influence on existentialism, hermeneutics, deconstruction and the philosophy of
          mind and technology is nonetheless enormous, and the arguments must be judged on their merits.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "diff",
      rung: "check",
      prompt: <p>What is the ontological difference?</p>,
      answer: {
        kind: "choice",
        options: ["The difference between Being and beings", "The difference between mind and body", "The difference between God and the world", "The difference between appearance and reality"],
        correct: [0],
      },
    },
    {
      key: "dasein",
      rung: "check",
      prompt: <p>Why does Heidegger begin the question of Being with Dasein?</p>,
      answer: {
        kind: "choice",
        options: [
          "Dasein already has some understanding of Being, and its own being is an issue for it.",
          "Dasein is the highest being.",
          "Dasein is the only being that exists.",
          "Dasein is easiest to measure.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the questions are ontological?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "exist",
      rung: "apply",
      prompt: <p>Which statement fits Heidegger&rsquo;s idea that Dasein&rsquo;s being is existence?</p>,
      answer: {
        kind: "choice",
        options: [
          "Who I am is a matter of the possibilities I take up, not a fixed set of properties.",
          "I am a thinking substance.",
          "I am a collection of perceptions.",
          "I am my brain.",
        ],
        correct: [0],
      },
    },
    {
      key: "word",
      rung: "apply",
      prompt: <p>Why does Heidegger avoid the word &ldquo;subject&rdquo; for the being that we are?</p>,
      answer: {
        kind: "choice",
        options: [
          "It brings with it a theory, of a mind set over against objects, that he wants to question.",
          "It is too technical.",
          "Subjects do not exist.",
          "It is a grammatical term only.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is &ldquo;What is it to be?&rdquo; a genuine question? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Heidegger’s view that we have a vague understanding of Being which can be made explicit.",
          "Considers an objection, such as Carnap’s charge that the question is meaningless, or that ‘being’ is too general to define.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>How far should a philosopher&rsquo;s politics affect how we read their philosophy?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes judging arguments on their merits from judging the person.",
          "Considers whether the politics might be expressed in, or encouraged by, the philosophy itself.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, being-in-the-world: Heidegger&rsquo;s hammer, and why we are not minds looking out at objects but already busy in
      a world.
    </p>
  ),
};
