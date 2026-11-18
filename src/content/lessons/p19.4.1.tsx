import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["immanence", "transcendence"];
const ITEMS: SortItem[] = [
  { text: "Cleaning the same floor every day, only for the dust to return.", cat: "immanence", why: "Beauvoir’s image of housework: repetition that maintains life without opening a future." },
  { text: "Writing a book that others will argue with.", cat: "transcendence", why: "A project that goes beyond the given and adds something to the world." },
  { text: "Being admired as an ornament for someone else’s life.", cat: "immanence", why: "To be valued as a thing, an object for another, is to be held in immanence." },
  { text: "Starting a business and seeing it through.", cat: "transcendence", why: "A free project that reaches into the future." },
  { text: "Waiting at home for one’s life to be decided by a husband’s career.", cat: "immanence", why: "One’s situation is defined by another’s projects rather than one’s own." },
  { text: "Training for and choosing a profession.", cat: "transcendence", why: "Beauvoir thought economic independence the first condition of women’s freedom." },
  { text: "Repeating routines whose only aim is to keep things as they are.", cat: "immanence", why: "Immanence in the strict sense: life turned back on itself." },
  { text: "Organising with others to change one’s situation.", cat: "transcendence", why: "Collective action that transforms a shared situation." },
];

export const lesson: LessonContent = {
  id: "p19.4.1",
  minutes: 85,
  links: {
    revisits: ["p19.3.3", "p9.1.3", "p19.3.2"],
    foreshadows: ["p19.4.2", "p19.5.1", "p19.6.2"],
  },

  puzzle: (
    <>
      <p>
        A man never begins a book by saying &ldquo;I am a man&rdquo;. Simone de Beauvoir noticed that she could not begin
        hers without saying &ldquo;I am a woman&rdquo;. Why is one sex treated as the neutral, standard case of being
        human, and the other as a special case needing explanation?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each activity or situation by whether it holds a person in immanence or opens transcendence.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Immanence or transcendence?" />
    </>
  ),

  theory: (
    <>
      <Definition title="woman as the Other">
        <p>
          In <em>The Second Sex</em> (1949), Simone de Beauvoir argues that humanity is defined as male: man is the Subject,
          the Absolute, and woman is defined relative to him, as the <strong>Other</strong>. Every consciousness tends to set
          itself up as essential and others as inessential, as in Hegel&rsquo;s struggle; but where most such relations are
          reciprocal, here the reciprocity has been refused, and women have, for historical reasons, often been unable to
          claim it.
        </p>
      </Definition>

      <Definition title="one is not born, but becomes, a woman">
        <p>
          The most famous sentence of the book opens its second volume. No biological, psychological or economic destiny
          determines the figure that the human female presents in society; it is civilisation as a whole that produces it.
          Biology is real, but it is a situation, not a fate: its meaning depends on the projects and society in which it is
          lived.
        </p>
      </Definition>

      <Example title="immanence and transcendence">
        <p>
          Beauvoir takes Sartre&rsquo;s categories into history. <strong>Transcendence</strong> is the free project that
          reaches beyond the given; <strong>immanence</strong> is stagnation in the given, repetition without a future.
          Women have been confined to immanence: housework, maintenance of life, being an object of desire and admiration.
          This is not their nature but their situation, and the myths of femininity, from the eternal feminine to the
          mysterious woman, serve to justify it.
        </p>
      </Example>

      <Remark title="situation and freedom">
        <p>
          Against Sartre&rsquo;s early view, Beauvoir insists that a situation can so limit freedom that transcendence becomes
          practically impossible: a harem woman cannot simply choose otherwise. Liberation therefore requires changes in
          economic and social conditions, not only individual resolve. Later feminists debated her relation to biology, her
          universalism and her treatment of motherhood, but nearly all start from her question.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "other",
      rung: "check",
      prompt: <p>What does Beauvoir mean by calling woman the Other?</p>,
      answer: {
        kind: "choice",
        options: ["Woman is defined relative to man, who is taken as the standard human subject.", "Women are foreigners.", "Women are a different species.", "Women are more spiritual than men."],
        correct: [0],
      },
    },
    {
      key: "become",
      rung: "check",
      prompt: <p>What does &ldquo;one is not born, but rather becomes, a woman&rdquo; deny?</p>,
      answer: {
        kind: "choice",
        options: ["That a biological, psychological or economic destiny fixes what being a woman means", "That there are biological differences", "That women exist", "That children are born"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many items are immanence?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "recip",
      rung: "apply",
      prompt: <p>How does the relation between the sexes differ, for Beauvoir, from most relations of Self and Other?</p>,
      answer: {
        kind: "choice",
        options: ["It has not been reciprocal: one side has refused to be seen as the Other in turn.", "It is always peaceful.", "It is purely biological.", "It has no history."],
        correct: [0],
      },
    },
    {
      key: "sartre",
      rung: "apply",
      prompt: <p>Where does Beauvoir depart from Sartre&rsquo;s early view of freedom?</p>,
      answer: {
        kind: "choice",
        options: ["She holds that situations can so limit freedom that transcendence becomes practically impossible.", "She denies that anyone is free.", "She thinks freedom is a gift of God.", "She thinks only men are free by nature."],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Beauvoir right that what it is to be a woman is made, not given? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Beauvoir’s claim that biology is a situation whose meaning society makes.",
          "Considers an objection, such as the role of embodiment or biology, or a reply to it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Choose a group other than women. Does Beauvoir&rsquo;s analysis of the Other apply to it, and where does it fit less well?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the idea of a group defined as Other relative to a standard Subject.",
          "Notes a difference, such as Beauvoir’s point that women, unlike many groups, are dispersed among men and lack a separate history.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Beauvoir&rsquo;s ethics: why, if we are free and ambiguous beings, willing one&rsquo;s own freedom requires
      willing the freedom of others.
    </p>
  ),
};
