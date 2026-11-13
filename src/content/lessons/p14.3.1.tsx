import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { LibertyCasesViz } from "@/components/viz/LibertyCasesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p14.3.1",
  minutes: 80,
  links: {
    revisits: ["p9.5.2", "p14.1.3", "p14.2.3"],
    foreshadows: ["p14.3.2", "p14.3.3", "p19.3.2"],
  },

  puzzle: (
    <>
      <p>
        No law stops a person who is addicted to gambling from walking past the betting shop, yet in another sense they are
        not free to. A poor family may legally travel anywhere, but cannot afford the fare. Are these people free? The
        answer depends on what freedom is, and Isaiah Berlin argued that there are two quite different ideas at work.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>For each case, predict whether it reduces your liberty on each of the two concepts.</p>
      <LibertyCasesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="negative liberty">
        <p>
          Freedom from interference: the area within which a person can act unobstructed by others. You lack negative liberty
          to the extent that other people deliberately prevent you from doing what you could otherwise do. Hobbes, Bentham and
          Mill worked with this idea; the question it answers is &ldquo;how far does government interfere with me?&rdquo;
        </p>
      </Definition>

      <Definition title="positive liberty">
        <p>
          Freedom as self-mastery: being one&rsquo;s own master, directing one&rsquo;s life by one&rsquo;s own reasons and
          purposes. Collectively, it is self-government, as in Rousseau&rsquo;s general will. The question it answers is
          &ldquo;who governs me?&rdquo;
        </p>
      </Definition>

      <Example title="Berlin's warning">
        <p>
          In &ldquo;Two Concepts of Liberty&rdquo; (1958), Berlin argued that positive liberty is easily perverted. Once the
          self is divided into a higher, rational self and a lower, empirical one, others can claim to know what my real self
          wants, and coerce me in its name while saying they are setting me free. He saw this pattern in the totalitarian
          regimes of his century and preferred a pluralist politics guarding a sphere of negative liberty.
        </p>
      </Example>

      <Remark title="one concept or two?">
        <p>
          Gerald MacCallum argued that every claim about freedom has one form: an agent is free from some constraint to do or
          become something. The two concepts differ over what counts as an agent, a constraint and a goal. Charles Taylor
          argued that negative liberty, as mere opportunity, ignores that freedom also requires the capacity to exercise
          it, so it cannot avoid some positive elements.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "neg",
      rung: "check",
      prompt: <p>What is negative liberty?</p>,
      answer: {
        kind: "choice",
        options: [
          "Freedom from interference by others.",
          "Freedom to do bad things.",
          "Self-mastery.",
          "Having a vote.",
        ],
        correct: [0],
      },
    },
    {
      key: "pos",
      rung: "check",
      prompt: <p>Which question does positive liberty answer, on Berlin&rsquo;s account?</p>,
      answer: { kind: "choice", options: ["Who governs me?", "How far am I interfered with?", "How rich am I?", "How happy am I?"], correct: [0] },
    },
    {
      key: "addict",
      rung: "apply",
      prompt: <p>On which concept is a person with an addiction clearly unfree?</p>,
      answer: {
        kind: "choice",
        options: ["Negative liberty only", "Positive liberty, since they are not master of themselves", "Both equally", "Neither"],
        correct: [1],
      },
    },
    {
      key: "warning",
      rung: "apply",
      prompt: <p>What danger did Berlin see in positive liberty?</p>,
      answer: {
        kind: "choice",
        options: [
          "That it leads to anarchy.",
          "That by dividing the self into a real and an empirical self, it lets others coerce people in the name of their true freedom.",
          "That it is too individualistic.",
          "That it ignores voting.",
        ],
        correct: [1],
      },
    },
    {
      key: "mac",
      rung: "apply",
      prompt: <p>What is MacCallum&rsquo;s triadic analysis of freedom?</p>,
      answer: {
        kind: "choice",
        options: [
          "Freedom is liberty, equality and fraternity.",
          "An agent is free from some constraint to do or become something.",
          "Freedom has three kinds: political, economic and inner.",
          "Freedom requires three votes.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is a very poor person who faces no legal barriers to travel free to travel? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the negative concept, perhaps with Cohen's point that money removes interference.",
          "Applies the positive or capability-based concept.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a state ever force someone to be free, as Rousseau said? Use Berlin&rsquo;s warning in your answer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Rousseau's idea and how it relies on positive liberty.",
          "Considers Berlin's warning or a defence, such as laws against self-enslavement.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Berlin's distinction between negative and positive liberty, cases where they come apart, Berlin's warning about positive liberty, and MacCallum's claim that there is only one concept.",

  glimpse: (
    <p>
      The next lesson presents republican freedom as non-domination, a third idea suggested by the kindly ruler case.
      Communitarians then question the self that liberal freedom assumes, and existentialists take up radical freedom.
    </p>
  ),
};
