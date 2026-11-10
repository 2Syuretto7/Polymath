import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { OtherMindsViz } from "@/components/viz/OtherMindsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.2.2",
  minutes: 65,
  links: {
    revisits: ["p0.4.2", "p1.1.3"],
    foreshadows: ["p3.3.2", "p3.3.3", "p12.2.1", "p15.6.3", "p25.2.1"],
  },

  puzzle: (
    <>
      <p>
        Your friend stubs a toe, winces and hops about. You are sure your friend is in pain. But all you observed was a face
        and a body moving. The pain itself, if there is any, is something only your friend can feel.
      </p>
      <p>
        Could your friend be a perfect actor with nothing going on inside? Could everyone? You cannot step into another mind
        to check. So how do you know that anyone besides you has a mind at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        This is the <strong>problem of other minds</strong>. It is not a worry that people are secretly robots; nobody
        seriously believes that. It is a question about <em>justification</em>: what entitles you to a belief you hold with
        complete confidence, given that the thing it is about is hidden from you in principle?
      </p>
      <p>
        The oldest answer is an argument from analogy: others are like me, and I have a mind, so they probably do too. Test
        that reasoning below on beings that are less and less like you. Notice where your confidence fades, and notice the
        last case, where the analogy points two ways.
      </p>
      <OtherMindsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the argument from analogy">
        <p>
          In my own case I observe that certain bodily conditions and behaviour go with certain feelings. Other people have
          bodies like mine and behave as I do. So, probably, they have feelings like mine. This is an inductive argument by
          analogy, and its classic statement is John Stuart Mill&rsquo;s.
        </p>
      </Definition>

      <Quote source={<>John Stuart Mill, <cite>An Examination of Sir William Hamilton&rsquo;s Philosophy</cite> (1865), chapter XII</>}>
        <p>
          I conclude that other human beings have feelings like me, because, first, they have bodies like me, which I know,
          in my own case, to be the antecedent condition of feelings; and because, secondly, they exhibit the acts, and other
          outward signs, which in my own case I know by experience to be caused by feelings.
        </p>
      </Quote>

      <Remark title="the single case">
        <p>
          The standard objection: an inductive generalisation is only as good as its sample, and here the sample has one
          member. Imagine concluding that every box of sweets contains toffees because you once opened one box and found
          toffees. Worse, you can never check the conclusion, since no one can ever open another person&rsquo;s box. Yet our
          confidence that others have minds is about as high as any confidence we have.
        </p>
      </Remark>

      <Definition title="inference to the best explanation">
        <p>
          A better answer, many think, treats other minds as a hypothesis that explains what we observe. Why does your friend
          wince, swear, limp and ask for ice? The simplest and most powerful explanation is that your friend feels pain. On
          this view you reason about other minds as a scientist reasons about atoms: you never see them, but they explain
          everything you do see better than any rival.
        </p>
      </Definition>

      <Example title="the beetle in the box">
        <Quote source={<>Ludwig Wittgenstein, <cite>Philosophical Investigations</cite> (1953), §293, translated by G. E. M. Anscombe</>}>
          <p>
            Suppose everyone had a box with something in it: we call it a &lsquo;beetle&rsquo;. No one can look into anyone
            else&rsquo;s box, and everyone says he knows what a beetle is only by looking at his beetle.
          </p>
        </Quote>
        <p>
          Wittgenstein&rsquo;s point is that if &ldquo;pain&rdquo; named a private object in each box, the object would drop
          out of the conversation entirely: the word would work the same whatever was in the boxes, or if they were empty. He
          concluded that the problem has been set up wrongly. We learn words like &ldquo;pain&rdquo; from shared, public
          situations, so the meaning of the word cannot be locked inside one mind.
        </p>
      </Example>

      <Remark title="why it matters now">
        <p>
          The problem stopped being merely academic. How we treat animals turns on which of them can suffer, and the
          evidence is behaviour and anatomy, exactly the analogy you tested above. And machines now produce fluent reports of
          feelings, the very evidence that settles the question for a friend. The next lesson asks what, if anything, such
          reports show.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "problem",
      rung: "check",
      prompt: <p>The problem of other minds is mainly a question of&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "whether minds are physical",
          "how we are justified in believing others have minds",
          "whether we have free will",
          "how memory works",
        ],
        correct: [1],
      },
    },
    {
      key: "analogy",
      rung: "check",
      prompt: <p>What kind of argument is the argument from analogy?</p>,
      answer: { kind: "choice", options: ["deductive", "inductive", "a reductio ad absurdum", "circular"], correct: [1] },
    },
    {
      key: "single-case",
      rung: "apply",
      prompt: <p>What is the standard objection to the argument from analogy?</p>,
      answer: {
        kind: "choice",
        options: [
          "Other people do not behave like us.",
          "It generalises from a single case that can never be checked.",
          "It assumes physicalism.",
          "It is deductively invalid, so worthless.",
        ],
        correct: [1],
      },
    },
    {
      key: "ibe",
      rung: "apply",
      prompt: <p>On the inference to the best explanation view, belief in other minds is most like&hellip;</p>,
      answer: {
        kind: "choice",
        options: ["belief in a mathematical theorem", "a scientist's belief in atoms", "a lucky guess", "a dream"],
        correct: [1],
      },
    },
    {
      key: "beetle",
      rung: "apply",
      prompt: <p>What is the beetle in the box meant to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "that other people probably have beetles",
          "that if 'pain' named a purely private object, that object would play no part in the word's meaning",
          "that beetles feel pain",
          "that we can look inside other minds",
        ],
        correct: [1],
      },
    },
    {
      key: "evaluate",
      rung: "prove",
      prompt: (
        <p>
          Set out the argument from analogy in standard form, then state the single-case objection and assess whether it is
          decisive. You may draw on the octopus or the robot vacuum from the visualisation.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the premises: in my case, behaviour and body go with feelings; others share that behaviour and body.",
          "States the inductive conclusion that others probably have feelings.",
          "Explains the single-case objection clearly.",
          "Gives a reasoned view on whether the objection is decisive, perhaps by comparing with inference to the best explanation.",
        ],
      },
    },
    {
      key: "animals",
      rung: "stretch",
      prompt: (
        <p>
          Which feature in the visualisation do you think matters most for deciding whether a creature can feel pain, and
          why? Use your answer to say what you believe about the honeybee.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Picks a feature and gives a reason why it should bear on pain.",
          "Considers at least one case where that feature gives a doubtful verdict.",
          "Applies the view to the honeybee and reaches a tentative conclusion.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how you know they have a mind, and why the obvious answer, 'you behave like me', is philosophically shakier than it sounds.",

  glimpse: (
    <p>
      If behaviour is our evidence for minds in others, then a machine that behaves exactly like a thinker might deserve the
      same verdict. That is the question of the next lesson. Analogy and inference to the best explanation are studied in
      Critical Reasoning; behaviourism and the private language argument return in Philosophy of Mind and Philosophy of
      Language; and the moral status of animals has its own lesson in Applied Ethics.
    </p>
  ),
};
