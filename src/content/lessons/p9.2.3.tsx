import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ModesViz } from "@/components/viz/ModesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p9.2.3",
  minutes: 85,
  links: {
    revisits: ["p9.2.2", "p9.1.4", "p9.1.5"],
    foreshadows: ["p9.2.4", "p14.5.1", "p14.5.2"],
  },

  puzzle: (
    <>
      <p>
        Why did feudalism give way to capitalism? A historian might cite kings, wars, ideas and accidents. Marx proposed a
        single guiding thread: &ldquo;It is not the consciousness of men that determines their being, but, on the
        contrary, their social being that determines their consciousness.&rdquo; If he is right, the deepest explanation of
        laws, religions and philosophies lies in how people produce their means of life. Is that a discovery or a dogma?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Marx&rsquo;s sequence of modes of production. For each, see the economic base, the superstructure
        resting on it, and the tension that drives change.
      </p>
      <ModesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="forces and relations of production">
        <p>
          The <strong>forces of production</strong> are the means and skills with which people produce: tools, machines,
          land, knowledge, labour-power. The <strong>relations of production</strong> are the relations of ownership and
          control among people in production, such as lord and serf or capitalist and wage-labourer. Together they form the
          economic <strong>base</strong>, on which rises a legal and political <strong>superstructure</strong> with its
          forms of consciousness.
        </p>
      </Definition>

      <Definition title="the dynamic">
        <p>
          In the 1859 preface to <em>A Contribution to the Critique of Political Economy</em>, Marx sketches the theory. The
          forces of production tend to develop. At a certain stage they conflict with the existing relations, which turn from
          forms of development into fetters. Then begins an epoch of social revolution, and new, higher relations appear
          once their material conditions have matured. History is the history of class struggles, as the{" "}
          <em>Communist Manifesto</em> of 1848 declares.
        </p>
      </Definition>

      <Example title="ideology">
        <p>
          &ldquo;The ideas of the ruling class are in every epoch the ruling ideas.&rdquo; Ideas that present the interests of
          a class as universal, such as the claim that the wage contract is a free exchange between equals, are called{" "}
          <strong>ideology</strong>. On Marx&rsquo;s view, they are not simply lies but reflect how society really appears
          from within.
        </p>
      </Example>

      <Remark title="interpretations and objections">
        <p>
          G. A. Cohen defended the theory as a functional explanation: relations exist because they suit the development of
          the forces. Critics object that the base cannot even be described without legal ideas such as ownership, which
          belong to the superstructure; that ideas, religion and politics drive history too, as Weber argued about the
          Protestant ethic; and that the predicted revolutions came in the wrong countries. Engels himself insisted that the
          economy is decisive only &ldquo;in the last instance&rdquo;.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "base",
      rung: "check",
      prompt: <p>What does the economic base consist of, according to Marx?</p>,
      answer: {
        kind: "choice",
        options: [
          "Law and politics",
          "The forces and relations of production",
          "Religion and philosophy",
          "The state",
        ],
        correct: [1],
      },
    },
    {
      key: "quote",
      rung: "check",
      prompt: <p>Complete Marx&rsquo;s claim: it is not consciousness that determines being, but &hellip;</p>,
      answer: {
        kind: "choice",
        options: ["God that determines being", "social being that determines consciousness", "reason that determines history", "nature that determines culture"],
        correct: [1],
      },
    },
    {
      key: "fetter",
      rung: "apply",
      prompt: <p>When does an epoch of social revolution begin, on Marx&rsquo;s theory?</p>,
      answer: {
        kind: "choice",
        options: [
          "When a great leader appears.",
          "When the relations of production become fetters on the developing forces of production.",
          "When ideas change.",
          "At random.",
        ],
        correct: [1],
      },
    },
    {
      key: "ideology",
      rung: "apply",
      prompt: <p>Which of these best fits Marx&rsquo;s idea of ideology?</p>,
      answer: {
        kind: "choice",
        options: [
          "Any political opinion.",
          "Ideas that present the interests of a ruling class as universal and natural.",
          "Scientific theories.",
          "Religious faith only.",
        ],
        correct: [1],
      },
    },
    {
      key: "weber",
      rung: "apply",
      prompt: <p>What was Max Weber&rsquo;s challenge to historical materialism?</p>,
      answer: {
        kind: "choice",
        options: [
          "That economics does not exist.",
          "That religious ideas, such as the Protestant ethic, helped shape the rise of capitalism.",
          "That history has no direction.",
          "That Marx was too idealist.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the economic base determine the superstructure? Argue briefly, with an example.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the base-superstructure thesis.",
          "Gives an example for or against, such as law tracking property relations, or religion shaping economic life.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "hegel",
      rung: "stretch",
      prompt: <p>Marx said he found Hegel&rsquo;s dialectic standing on its head and set it on its feet. What did he mean, and was he right?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that for Hegel spirit or thought drives history, while for Marx material production does.",
          "Notes what Marx kept from Hegel, such as development through contradiction.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the forces and relations of production, base and superstructure, how Marx thought history moves from one mode of production to another, what ideology is, and the main objections.",

  glimpse: (
    <p>
      The next lesson turns to Capital, where Marx analyses how profit arises from labour under capitalism. Political
      philosophy later weighs Marxist critiques, and feminist philosophers ask what the theory leaves out about reproduction
      and the household.
    </p>
  ),
};
