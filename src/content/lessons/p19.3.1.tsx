import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["denies transcendence", "denies facticity", "holds both together"];
const ITEMS: SortItem[] = [
  { text: "I am a waiter, and that is all I am.", cat: "denies transcendence", why: "It treats being a waiter as a fixed nature, the way an inkwell is an inkwell." },
  { text: "I can’t help it; that is just my temperament.", cat: "denies transcendence", why: "It presents a character as a thing that determines action, hiding the freedom to take it up or not." },
  { text: "That was not really me who did those things.", cat: "denies facticity", why: "It disowns the past, which is part of one’s facticity, by appealing to a pure freedom from it." },
  { text: "Nothing about me is settled; tomorrow I could be anyone.", cat: "denies facticity", why: "It ignores the body, the past and the situation one cannot simply wish away." },
  { text: "I did it, and I can act differently next time.", cat: "holds both together", why: "It owns the past fact and the open future at once." },
  { text: "I was born here, and I am choosing what to make of that.", cat: "holds both together", why: "Facticity acknowledged as the situation in which freedom acts." },
  { text: "Admit it: you are a coward, just as a table is a table.", cat: "denies transcendence", why: "Sartre’s champion of sincerity, who demands that another person be a thing, is himself in bad faith." },
  { text: "My upbringing has no hold on me at all.", cat: "denies facticity", why: "It pretends that one’s transcendence floats free of the situation it is in." },
];

export const lesson: LessonContent = {
  id: "p19.3.1",
  minutes: 80,
  links: {
    revisits: ["p19.2.3", "p7.1.2", "p9.4.3"],
    foreshadows: ["p19.3.2", "p19.3.3", "p19.4.2"],
  },

  puzzle: (
    <>
      <p>
        To lie, you must know the truth and hide it. To lie to yourself, you must both know the truth and hide it from the
        very person who knows it. That seems impossible. Yet people do seem to deceive themselves every day. How?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each self-description by what it denies, if anything.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="What does it deny?" />
    </>
  ),

  theory: (
    <>
      <Definition title="being-in-itself and being-for-itself">
        <p>
          In <em>Being and Nothingness</em> (1943), Jean-Paul Sartre distinguishes <strong>being-in-itself</strong>, the
          solid, self-identical being of things, from <strong>being-for-itself</strong>, consciousness. Consciousness is not
          a thing: it is always aware of itself non-reflectively, always at a distance from what it is, always going beyond
          the given towards possibilities. Sartre says it is what it is not and is not what it is. Through it,{" "}
          <strong>nothingness</strong> comes into the world.
        </p>
      </Definition>

      <Definition title="facticity and transcendence">
        <p>
          Every human being is both. <strong>Facticity</strong> is what is given: body, past, place, the situation.{" "}
          <strong>Transcendence</strong> is the freedom to surpass it, to give it a meaning by projecting into the future.
          Neither can be reduced to the other, and both must be held together.
        </p>
      </Definition>

      <Example title="bad faith">
        <p>
          <strong>Bad faith</strong> (mauvaise foi) is lying to oneself about this double structure, exploiting the gap
          between the two. Sartre&rsquo;s café waiter moves a little too precisely, a little too eagerly, playing at being a
          waiter as though he could coincide with the role as an inkwell coincides with being an inkwell. A woman on a date
          leaves her hand in her companion&rsquo;s, treating it as a mere thing, so as to postpone a decision. Self-deception
          is possible because consciousness is not a thing with fixed contents: it can hold a belief in the half-hearted,
          evasive way that belief always allows.
        </p>
      </Example>

      <Remark title="sincerity and authenticity">
        <p>
          Sincerity, which demands that one be what one is, turns out to be bad faith too, for no one simply is what they
          are. Sartre promised an ethics of authenticity, a self-recovery of being that had been corrupted, but never
          completed it. Freud&rsquo;s alternative, that the deception is the work of an unconscious, Sartre rejected: the
          censor that hides the truth must know what it hides.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "foritself",
      rung: "check",
      prompt: <p>What is being-for-itself, in Sartre&rsquo;s terms?</p>,
      answer: {
        kind: "choice",
        options: ["Consciousness, which is never simply what it is", "The being of things", "God", "Society"],
        correct: [0],
      },
    },
    {
      key: "bf",
      rung: "check",
      prompt: <p>What is bad faith?</p>,
      answer: {
        kind: "choice",
        options: [
          "Lying to oneself by denying either one’s facticity or one’s transcendence",
          "Lying to other people",
          "Breaking a promise",
          "Losing religious faith",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many statements deny transcendence?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "waiter",
      rung: "apply",
      prompt: <p>What is the waiter&rsquo;s bad faith?</p>,
      answer: {
        kind: "choice",
        options: [
          "He plays at being a waiter as if he could be one the way a thing is what it is.",
          "He dislikes his job.",
          "He gives customers the wrong change.",
          "He pretends not to be a waiter.",
        ],
        correct: [0],
      },
    },
    {
      key: "freud",
      rung: "apply",
      prompt: <p>Why does Sartre reject the Freudian explanation of self-deception?</p>,
      answer: {
        kind: "choice",
        options: [
          "The censor that represses must know what it represses, so the paradox returns.",
          "Freud was not a philosopher.",
          "Sartre denied that anyone deceives themselves.",
          "The unconscious is too simple.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is self-deception really possible? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the paradox: the deceiver must know what the deceived does not.",
          "Considers a solution, such as Sartre’s evasive belief, divided minds, or motivated bias without intention.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If no one simply is what they are, is it bad faith to say &ldquo;I am honest&rdquo;?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Sartre’s point that claiming to be a trait as a thing has a property denies transcendence.",
          "Considers a reading of such claims as commitments or summaries of conduct rather than fixed natures.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Sartre&rsquo;s radical freedom: existence precedes essence, we are condemned to be free, and every choice we make, he claims, is a choice of what a human being should be.
    </p>
  ),
};
