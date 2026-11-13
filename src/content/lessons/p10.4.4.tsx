import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Here is one hand.",
    kind: "premise",
    note: "Moore, lecturing in 1939, held up his right hand as he said it. He claimed to know this premise for certain.",
    objection: "The sceptic: you have not shown that you know it. If you might be dreaming, you do not know that this is a hand.",
  },
  {
    claim: "And here is another.",
    kind: "premise",
    note: "Raising the left hand. Moore insisted it would be absurd to say he did not know this.",
  },
  {
    claim: "So at least two external objects exist.",
    kind: "conclusion",
    note: "Moore said this is a rigorous proof: the premises are known, they differ from the conclusion, and the conclusion follows.",
    objection: "Begging the question: anyone who doubts the conclusion already doubts the premises, so the proof cannot persuade them.",
  },
  {
    claim: "I am more certain that I have hands than I am of any premise in a sceptical argument.",
    kind: "premise",
    note: "Premises such as closure, or that I cannot know I am not dreaming, are clever but less certain than plain facts.",
    objection: "Certainty is a feeling. Being more confident of something does not make it better justified.",
  },
  {
    claim: "So it is more reasonable to reject a sceptical premise than to give up knowing I have hands.",
    kind: "conclusion",
    note: "When a valid argument has a conclusion we are sure is false, at least one premise must go. Moore picks the sceptic's.",
  },
];

export const lesson: LessonContent = {
  id: "p10.4.4",
  minutes: 75,
  links: {
    revisits: ["p10.4.2", "p7.6.1", "p10.4.3"],
    foreshadows: ["p10.5.1", "p18.2.1", "p18.5.1"],
  },

  puzzle: (
    <>
      <p>
        A philosopher presents a long, clever argument that you do not know you have hands. You cannot find the flaw. Should
        you accept the conclusion? Or is it more reasonable to be sure there is a flaw somewhere, simply because you are more
        certain of your hands than of any step in the argument?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through G. E. Moore&rsquo;s proof of an external world and his comparison of certainties.</p>
      <ArgumentStepViz steps={STEPS} title="Moore's proof and the comparison of certainty" />
    </>
  ),

  theory: (
    <>
      <Definition title="common sense">
        <p>
          In &ldquo;A Defence of Common Sense&rdquo; (1925), Moore listed truisms he knew with certainty: that he has a body,
          that it has existed for years, that other people exist and have had similar experiences. Philosophical theories that
          deny them are false, however hard it may be to say where they go wrong.
        </p>
      </Definition>

      <Example title="the Moorean shift">
        <p>
          The sceptic argues: if I know I have hands, I know I am not a brain in a vat; I do not know that; so I do not know I
          have hands. Moore runs the same conditional the other way: I know I have hands; so I know I am not a brain in a vat.
          Both arguments are valid. The question is which premise is more credible.
        </p>
      </Example>

      <Remark title="question begging and dogmatism">
        <p>
          The proof cannot convince a sceptic, since it assumes what they doubt. Moore&rsquo;s defenders reply that it was
          never meant to: a proof can be good, and give knowledge, without persuading everyone. James Pryor&rsquo;s dogmatism
          supports this: a perceptual experience as of a hand gives immediate justification for believing there is a hand,
          without first needing to rule out sceptical scenarios.
        </p>
      </Remark>

      <Remark title="Wittgenstein's response">
        <p>
          In his last notes, published as <em>On Certainty</em>, Wittgenstein argued that &ldquo;I know I have a hand&rdquo; is
          an odd thing to say outside special circumstances. Such propositions are &ldquo;hinges&rdquo;: they are not known
          by evidence but form the framework within which doubting and knowing make sense. Thomas Reid had earlier argued in a
          similar spirit that the principles of common sense are the starting points of all reasoning.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "proof",
      rung: "check",
      prompt: <p>What did Moore&rsquo;s &ldquo;proof of an external world&rdquo; conclude?</p>,
      answer: {
        kind: "choice",
        options: ["That God exists", "That at least two external objects exist", "That he was dreaming", "That knowledge is impossible"],
        correct: [1],
      },
    },
    {
      key: "shift",
      rung: "check",
      prompt: <p>The Moorean response to a sceptical argument is to:</p>,
      answer: {
        kind: "choice",
        options: [
          "Accept the conclusion.",
          "Reject a premise because one is more certain the conclusion is false.",
          "Deny that the argument is valid.",
          "Refuse to discuss it.",
        ],
        correct: [1],
      },
    },
    {
      key: "beg",
      rung: "apply",
      prompt: <p>Why is Moore&rsquo;s proof often said to beg the question?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it has too many premises.",
          "Because anyone who doubts the conclusion already doubts that Moore knows his premises.",
          "Because its conclusion is false.",
          "Because hands are not external objects.",
        ],
        correct: [1],
      },
    },
    {
      key: "dog",
      rung: "apply",
      prompt: <p>What does Pryor&rsquo;s dogmatism claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "That we should never doubt anything.",
          "That an experience as of a hand gives immediate justification for believing there is a hand, without first ruling out sceptical scenarios.",
          "That all beliefs are certain.",
          "That only scientists have knowledge.",
        ],
        correct: [1],
      },
    },
    {
      key: "hinge",
      rung: "apply",
      prompt: <p>For Wittgenstein, what is a hinge proposition?</p>,
      answer: {
        kind: "choice",
        options: [
          "A proposition known by careful evidence.",
          "A proposition that is not itself known by evidence but forms the framework in which doubt and knowledge make sense.",
          "A false proposition.",
          "A proposition about doors.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Moore entitled to reject the sceptic&rsquo;s premise because he is more certain he has hands? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the comparison of certainty and how it applies to the sceptical argument.",
          "Considers an objection, such as that certainty is psychological or that the move begs the question.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "zeno",
      rung: "stretch",
      prompt: <p>Zeno argued that motion is impossible. Is it reasonable to reject his conclusion before finding the flaw in his argument? Compare with Moore.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the parallel: a valid-seeming argument against something we are very sure of.",
          "Considers whether rejecting the conclusion first is reasonable, perhaps noting that the flaw was later found.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Moore's proof of an external world, his defence of common sense, the Moorean shift against sceptical arguments, the charge of begging the question and the dogmatist reply, and Wittgenstein's idea of hinge propositions.",

  glimpse: (
    <p>
      The next chapter turns to the sources of knowledge, beginning with perception. Moore&rsquo;s revolt against idealism and
      Wittgenstein&rsquo;s later philosophy return in the history of analytic philosophy.
    </p>
  ),
};
