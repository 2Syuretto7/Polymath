import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "There is a highest good: something we want for its own sake, and for the sake of which we want everything else.",
    kind: "premise",
    note: "Otherwise every choice would be for the sake of something further, and desire would be empty and vain, Aristotle says.",
    objection: "Even if every chain of reasons ends somewhere, why must all chains end in the same place? Different people, or the same person at different times, might have different final ends.",
  },
  {
    claim: "Nearly everyone calls this highest good eudaimonia, happiness or living well, but they disagree about what it consists in: pleasure, honour, wealth.",
    kind: "premise",
    note: "Agreement on the name is not agreement on the thing. Aristotle needs a way to settle what eudaimonia is.",
  },
  {
    claim: "For anything that has a function, such as a flute player, a sculptor or an eye, its good, its doing well, lies in its function.",
    kind: "premise",
    note: "A good flute player is one who plays the flute well. If we know what something is for, we know what doing well is, for it.",
  },
  {
    claim: "A human being has a function, and it is not mere life, which plants share, nor perception, which animals share, but an active life of the part of the soul that has reason.",
    kind: "premise",
    note: "Aristotle asks rhetorically whether the carpenter and the shoemaker have functions, while a human being has none and is by nature idle.",
    objection: "Does a human being have a function at all, as a tool or an organ does? And why should our good lie in what is distinctive of us, rather than in what we share with animals, such as pleasure?",
  },
  {
    claim: "The function of a good human being is the same activity, done well: that is, in accordance with virtue (aretê, excellence).",
    kind: "premise",
    note: "The function of a lyre player is to play the lyre; of a good one, to play it well. Excellence is what makes a thing perform its function well.",
  },
  {
    claim: "So the human good is activity of the soul in accordance with virtue, and if there are several virtues, in accordance with the best and most complete, in a complete life.",
    kind: "conclusion",
    note: "As Aristotle puts it, one swallow does not make a spring, nor does one fine day. Happiness is not a feeling but a way of being active over a whole life.",
  },
];

export const lesson: LessonContent = {
  id: "p4.6.1",
  minutes: 80,
  links: {
    revisits: ["p4.5.4", "p4.5.5", "p4.3.3"],
    foreshadows: ["p4.6.2", "p5.4.1", "p13.2.3"],
  },

  puzzle: (
    <>
      <p>
        Why are you reading this? To learn philosophy. Why learn philosophy? Perhaps to think more clearly. Why think more
        clearly? At some point the chain of reasons must stop at something you want simply for its own sake. Is there one
        such thing for everyone, and if so, what is it? Most people would say: to be happy. But a thief and a saint might
        both say that, and mean very different lives.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Book I of the <em>Nicomachean Ethics</em> argues from the idea of a function to an account of the human good. It
        is one of the most discussed arguments in ethics. Step through it and look at the objections.
      </p>
      <ArgumentStepViz steps={STEPS} title="The function argument, Nicomachean Ethics I.7 (a reconstruction)" />
    </>
  ),

  theory: (
    <>
      <Definition title="eudaimonia">
        <p>
          <em>Eudaimonia</em> is usually translated &ldquo;happiness&rdquo;, but it is closer to &ldquo;living well&rdquo;
          or &ldquo;flourishing&rdquo;. It is not a mood: it is assessed over a whole life, and one can be wrong about
          whether one has it. Aristotle sets two tests for the highest good. It must be <strong>complete</strong>, chosen
          always for itself and never for something else; and <strong>self-sufficient</strong>, making life choiceworthy
          and lacking in nothing on its own. Eudaimonia passes both. Honour, pleasure and virtue we choose partly for their
          own sake, but also for the sake of happiness; nobody chooses happiness for the sake of them.
        </p>
      </Definition>

      <Example title="three lives">
        <p>
          Aristotle surveys the lives people actually lead. The life of pleasure is fit for cattle. The political life aims
          at honour, but honour depends on those who give it, and people seek it to be assured of their own goodness, so
          virtue looks more like the aim; yet one could have virtue while asleep all one&rsquo;s life, or while suffering
          terrible misfortune. The life of money-making is a means, not an end. The third, the life of contemplation, he
          postpones to the end of the work.
        </p>
      </Example>

      <Remark title="external goods and fortune">
        <p>
          Happiness is activity, but it needs equipment. It is hard to do fine things without friends, wealth or political
          power, and people who are very ugly, low-born, solitary or childless, or whose children are bad or have died, are
          hardly happy. King Priam of Troy lived well, but no one calls a man happy who met an end like his. Solon said to call no
          one happy until they are dead; Aristotle replies that a virtuous person will never become wretched, since they
          will bear misfortune well, though great disasters can take away their blessedness.
        </p>
      </Remark>

      <Remark title="the contemplative life">
        <p>
          In book X, Aristotle argues that the highest happiness is the activity of the best thing in us, the intellect, and
          its activity is contemplation: the most continuous, most pleasant, most self-sufficient, and loved for its own
          sake. It is a life more than human, in which we live by something divine in us. The life of practical virtue is
          happy in a secondary way. How the two accounts fit together, whether happiness is contemplation alone or a life
          containing many goods, is a central dispute among interpreters.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "eud",
      rung: "check",
      prompt: <p>Which is the closest rendering of <em>eudaimonia</em>?</p>,
      answer: {
        kind: "choice",
        options: ["a pleasant mood", "living well or flourishing, over a whole life", "wealth", "honour"],
        correct: [1],
      },
    },
    {
      key: "tests",
      rung: "check",
      prompt: <p>Which two tests must the highest good pass, according to Aristotle? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["It is complete.", "It is pleasant.", "It is self-sufficient.", "It is honoured."], correct: [0, 2] },
    },
    {
      key: "function",
      rung: "apply",
      prompt: <p>Why does Aristotle say the human function is not perception?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because perception is unreliable.",
          "Because animals share it, and the function should be distinctive of human beings.",
          "Because perception is passive.",
          "Because Plato said so.",
        ],
        correct: [1],
      },
    },
    {
      key: "honour",
      rung: "apply",
      prompt: <p>What is one of Aristotle&rsquo;s reasons for rejecting honour as the highest good?</p>,
      answer: {
        kind: "choice",
        options: [
          "It depends more on those who give it than on the one who receives it.",
          "It is too pleasant.",
          "Animals have it too.",
          "It cannot be lost.",
        ],
        correct: [0],
      },
    },
    {
      key: "swallow",
      rung: "apply",
      prompt: <p>What point does &ldquo;one swallow does not make a spring&rdquo; make?</p>,
      answer: {
        kind: "choice",
        options: [
          "That happiness needs good weather.",
          "That happiness is a matter of a complete life, not a moment or a day.",
          "That animals cannot be happy.",
          "That virtue is rare.",
        ],
        correct: [1],
      },
    },
    {
      key: "reconstruct",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct the function argument in numbered steps, and identify the step you find weakest. Explain the
          objection, and say how Aristotle might reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives the main steps: highest good; good lies in function; human function is rational activity; doing it well is doing it with virtue.",
          "Identifies a weak step, such as the claim that humans have a function, or that our good lies in what is distinctive of us.",
          "Offers a plausible reply on Aristotle's behalf. Any reasoned discussion earns full credit.",
        ],
      },
    },
    {
      key: "machine",
      rung: "stretch",
      prompt: (
        <p>
          Robert Nozick asked whether you would plug into an &ldquo;experience machine&rdquo; that gives you any pleasant
          experiences you like for the rest of your life. How would Aristotle answer, and does his answer show that pleasure
          is not the highest good?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that for Aristotle happiness is activity, not experience, and requires actually exercising virtue among others.",
          "Connects this to his rejection of the life of pleasure, or to the role of external goods and friends.",
          "Assesses whether the reply is convincing. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Aristotle means by eudaimonia, the tests for the highest good, the function argument and its conclusion, and why happiness needs a complete life and some external goods.",

  glimpse: (
    <p>
      The next lesson asks what virtue of character is. Introduction to Ethics revisits Aristotle as virtue ethics, and
      Moral Philosophy compares his view with other accounts of well-being.
    </p>
  ),
};
