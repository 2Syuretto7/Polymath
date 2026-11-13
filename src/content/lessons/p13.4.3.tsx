import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["resultant luck", "circumstantial luck", "constitutive luck"];
const ITEMS: SortItem[] = [
  {
    text: "Two drivers drink the same amount and drive home equally carelessly. A child runs out in front of one of them, not the other.",
    cat: "resultant luck",
    why: "The two did the same thing; only the outcome differs. Yet we blame the driver who kills far more.",
  },
  {
    text: "One German citizen in the 1930s stays in Germany and supports the regime; their cousin emigrated in 1929 for work and never faced the choice.",
    cat: "circumstantial luck",
    why: "Nagel’s example. The cousin might have done just as badly, but was never tested.",
  },
  {
    text: "Someone is naturally hot-tempered, through genes and upbringing they did not choose.",
    cat: "constitutive luck",
    why: "Luck in the kind of person one is: temperament, inclinations and capacities.",
  },
  {
    text: "An assassin fires at a minister, but a bird flies into the path of the bullet.",
    cat: "resultant luck",
    why: "Attempted murder is punished less than murder, though the act and intention were the same.",
  },
  {
    text: "Gauguin leaves his family to paint in Tahiti, and succeeds in becoming a great painter.",
    cat: "resultant luck",
    why: "Williams’s example: whether Gauguin was justified seems to depend on how things turned out, which was not in his control.",
  },
  {
    text: "A bystander walks past a drowning child; another person never happens to pass such a pond.",
    cat: "circumstantial luck",
    why: "Only one faced the test of the situation.",
  },
  {
    text: "Someone is by nature generous and finds kindness easy.",
    cat: "constitutive luck",
    why: "We praise generous people, but their generosity owes much to a character they did not choose.",
  },
];

export const lesson: LessonContent = {
  id: "p13.4.3",
  minutes: 80,
  links: {
    revisits: ["p13.4.2", "p5.3.1", "p4.6.3"],
    foreshadows: ["p13.5.1", "p30.4.1", "p30.2.2"],
  },

  puzzle: (
    <>
      <p>
        Two people drive home after the same party, equally drunk and equally careless. One arrives safely. The other hits a
        child who runs into the road. We condemn the second far more, and so do they. Yet the difference between them was
        pure luck. Can luck make someone more blameworthy?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each case by the kind of luck it involves.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which kind of moral luck?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the control principle">
        <p>
          We are morally assessable only for what is under our control. Kant held that the good will is good whatever it
          achieves: if fate prevents it from accomplishing anything, it still shines like a jewel.
        </p>
      </Definition>

      <Definition title="moral luck">
        <p>
          Moral luck occurs when an agent is rightly assessed morally for something that depends on factors beyond their
          control. Thomas Nagel and Bernard Williams named it in 1976, and Nagel distinguished resultant luck, in how things
          turn out; circumstantial luck, in the situations one faces; constitutive luck, in one&rsquo;s character; and luck in
          how one&rsquo;s actions are determined by prior causes.
        </p>
      </Definition>

      <Example title="the paradox">
        <p>
          The control principle seems undeniable on reflection, yet our everyday judgements violate it constantly. If we
          apply it strictly, almost nothing remains to assess: every act has results, occurs in circumstances and flows from a
          character, all partly beyond control. Nagel concluded that the area of genuine agency seems to shrink to an
          extensionless point.
        </p>
      </Example>

      <Remark title="responses">
        <p>
          Some deny resultant luck: the two drivers are equally blameworthy, and our differing reactions track only what we can
          know or what is useful, as with the law. Others accept moral luck and reject the control principle. Williams
          described agent-regret: the driver who killed the child rightly feels something a mere spectator does not, even if
          they were not at fault.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "control",
      rung: "check",
      prompt: <p>What does the control principle say?</p>,
      answer: {
        kind: "choice",
        options: [
          "We are morally assessable only for what is under our control.",
          "We should control other people.",
          "Luck always increases blame.",
          "Only results matter morally.",
        ],
        correct: [0],
      },
    },
    {
      key: "who",
      rung: "check",
      prompt: <p>Which two philosophers introduced the problem of moral luck in 1976?</p>,
      answer: { kind: "choice", options: ["Nagel and Williams", "Moore and Ayer", "Kant and Hume", "Rawls and Scanlon"], correct: [0] },
    },
    {
      key: "attempt",
      rung: "apply",
      prompt: <p>The law punishes murder more severely than a failed attempt with the same intention. Which kind of luck does this reflect?</p>,
      answer: { kind: "choice", options: ["Constitutive luck", "Circumstantial luck", "Resultant luck", "No luck at all"], correct: [2] },
    },
    {
      key: "paradox",
      rung: "apply",
      prompt: <p>Why does moral luck seem paradoxical?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because luck does not exist.",
          "Because the control principle seems true, yet our ordinary judgements constantly let luck affect blame and praise.",
          "Because everyone is equally lucky.",
          "Because Kant denied the good will.",
        ],
        correct: [1],
      },
    },
    {
      key: "regret",
      rung: "apply",
      prompt: <p>What is Williams&rsquo;s agent-regret?</p>,
      answer: {
        kind: "choice",
        options: [
          "Regret felt by any spectator.",
          "The special regret an agent rightly feels about harm they caused, even without fault.",
          "Regret for having been unlucky in a lottery.",
          "Guilt about intentional wrongdoing only.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the unlucky drunk driver more blameworthy than the lucky one? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the control principle and the contrary everyday judgement.",
          "Considers a response, such as denying resultant luck or accepting it with agent-regret.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If constitutive luck is real, can anyone deserve praise for being kind? Consider whether character can be shaped by choices.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains constitutive luck and why it threatens praise for character.",
          "Considers a reply, such as Aristotle’s view that we shape character by repeated choices, or that praise need not require full control.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the control principle, the problem of moral luck with Nagel's kinds of luck and an example of each, and one response to the paradox.",

  glimpse: (
    <p>
      The next part turns to the structure of moral constraints, beginning with the difference between doing and allowing.
      Graduate ethics asks how to act under moral uncertainty, and how choices affect who comes to exist.
    </p>
  ),
};
