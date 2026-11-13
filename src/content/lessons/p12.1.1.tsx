import { Definition, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["substance dualism", "property dualism", "physicalism"];
const ITEMS: SortItem[] = [
  { text: "The mind is a thinking thing that could exist without any body.", cat: "substance dualism", why: "Descartes: mind and body are two substances, each able to exist without the other." },
  { text: "There is only one kind of stuff, the brain, but its experiential properties are not physical properties.", cat: "property dualism", why: "One substance with two kinds of property." },
  { text: "Pain is nothing over and above a physical state of the nervous system.", cat: "physicalism", why: "Everything mental is physical, or fixed by the physical." },
  { text: "A complete physics would leave something out: what it is like to see red.", cat: "property dualism", why: "Phenomenal properties are extra to the physical facts, though they need not belong to a separate substance." },
  { text: "After the body dies, the self that thought and felt can continue to exist.", cat: "substance dualism", why: "Only a separate mental substance could survive the death of the body." },
  { text: "Once every physical fact about the universe is fixed, every mental fact is fixed too.", cat: "physicalism", why: "This is the supervenience of the mental on the physical, the minimal physicalist claim." },
];

export const lesson: LessonContent = {
  id: "p12.1.1",
  minutes: 80,
  links: {
    revisits: ["p1.2.1", "p7.1.4", "p11.3.1"],
    foreshadows: ["p12.1.2", "p12.2.2", "p12.5.3"],
  },

  puzzle: (
    <>
      <p>
        A neuroscientist can tell you which neurons fire when you taste mango. But the taste itself, the experience, does not
        seem to be anywhere in the description of the neurons. Is the mind something over and above the brain: a separate
        thing, or at least a separate kind of property?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each claim by the view of mind it expresses.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which view of the mind does each claim express?" />
    </>
  ),

  theory: (
    <>
      <Definition title="substance dualism">
        <p>
          <strong>Substance dualism</strong> holds that there are two kinds of substance: physical things, extended in space,
          and minds, which think but are not extended. A person is, or has, a mind joined to a body. Descartes is the classic
          source; today Richard Swinburne defends a version.
        </p>
      </Definition>

      <ArgumentStepViz
        title="Descartes's argument from conceivability"
        steps={[
          { claim: "I can clearly and distinctly conceive of my mind existing without my body.", kind: "premise", note: "I can doubt that I have a body, but not that I think." },
          { claim: "Whatever I can clearly and distinctly conceive is possible.", kind: "premise", note: "God could make it so, Descartes says; today, conceivability is taken as a guide to possibility.", objection: "We may conceive of things that are impossible, as someone could conceive of water not being H₂O before chemistry." },
          { claim: "So it is possible for my mind to exist without my body.", kind: "inference", note: "From conceivability to possibility." },
          { claim: "If A could exist without B, A is not identical to B.", kind: "premise", note: "Identity is necessary: nothing could exist without itself." },
          { claim: "So my mind is not my body.", kind: "conclusion", note: "The mind is a distinct thing." },
        ]}
      />

      <Remark title="the divisibility argument">
        <p>
          Descartes also argued that the body is divisible, since a hand can be cut off, but the mind is not: I cannot find
          half a thought or a part of myself. By Leibniz&rsquo;s law the two differ. Critics point to split-brain patients, in
          whom the mind seems to divide.
        </p>
      </Remark>

      <Definition title="property dualism">
        <p>
          <strong>Property dualism</strong> accepts that there is only one kind of substance, the physical, but holds that
          some of its properties, especially conscious ones, are not physical properties and are not fixed by them. David
          Chalmers defends a &ldquo;naturalistic dualism&rdquo; in which laws of nature link brain states to experiences, as
          basic as the laws of physics.
        </p>
      </Definition>

      <Remark title="why dualism attracts and repels">
        <p>
          Dualism respects the sense that experience is not captured by physical description, and leaves room for survival of
          death. Its great cost is causal: how could something non-physical make a difference to the brain? That is the
          subject of the next lesson.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sub",
      rung: "check",
      prompt: <p>What does substance dualism claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "There is only matter.",
          "There are two kinds of substance, minds and physical things.",
          "Minds are properties of brains.",
          "The mind is a computer program.",
        ],
        correct: [1],
      },
    },
    {
      key: "prop",
      rung: "check",
      prompt: <p>What does property dualism add to physicalism about substances?</p>,
      answer: {
        kind: "choice",
        options: [
          "A second kind of substance.",
          "Non-physical properties, such as conscious ones, of physical things.",
          "God.",
          "Nothing.",
        ],
        correct: [1],
      },
    },
    {
      key: "conc",
      rung: "apply",
      prompt: <p>Which premise of the conceivability argument is most often challenged?</p>,
      answer: {
        kind: "choice",
        options: [
          "That I can conceive of my mind without my body.",
          "That what is conceivable is possible.",
          "That identity is necessary.",
          "None; the argument is accepted.",
        ],
        correct: [1],
      },
    },
    {
      key: "water",
      rung: "apply",
      prompt: <p>How does the example of water and H₂O bear on the conceivability argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "It shows water is not H₂O.",
          "It shows something can seem conceivable though it is impossible, so conceivability may be a poor guide to possibility.",
          "It shows minds are wet.",
          "It shows chemistry is dualist.",
        ],
        correct: [1],
      },
    },
    {
      key: "div",
      rung: "apply",
      prompt: <p>What do split-brain cases suggest about Descartes&rsquo;s divisibility argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the mind may be divisible after all, undermining the premise that it is not.",
          "That the body is indivisible.",
          "That dualism is proved.",
          "Nothing at all.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the conceivability argument show that the mind is distinct from the body? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument’s main steps.",
          "Evaluates the step from conceivability to possibility, or another premise.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "which",
      rung: "stretch",
      prompt: <p>If you had to be a dualist, would you prefer substance or property dualism? Why?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Compares what each view explains and what it costs.",
          "Considers at least one objection to the chosen view.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend substance dualism and property dualism, Descartes’s conceivability argument and the worry about moving from conceivability to possibility, the divisibility argument, and why dualism remains attractive.",

  glimpse: (
    <p>
      The next lesson faces dualism&rsquo;s hardest problem: how mind and body could interact. Later lessons look at identity
      theory, and at zombies, a modern conceivability argument for property dualism.
    </p>
  ),
};
