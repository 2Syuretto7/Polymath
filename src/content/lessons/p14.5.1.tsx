import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SurplusValueViz } from "@/components/viz/SurplusValueViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p14.5.1",
  minutes: 80,
  links: {
    revisits: ["p9.2.2", "p14.2.3", "p14.1.2"],
    foreshadows: ["p14.5.2", "p14.5.4", "p14.6.1"],
  },

  puzzle: (
    <>
      <p>
        A worker freely signs a contract and is paid the going wage. No one forces or deceives them. Can such an exchange still
        be exploitation? Marx said yes, and that liberal rights to property and contract hide the injustice.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the working day, productivity and the wage, and see how the day divides.</p>
      <SurplusValueViz />
    </>
  ),

  theory: (
    <>
      <Definition title="exploitation">
        <p>
          On Marx&rsquo;s labour theory of value, the value of a commodity is the socially necessary labour time to produce
          it. Labour power is sold at the value of the worker&rsquo;s means of subsistence, but in a working day it creates
          more value than that. The difference, <strong>surplus value</strong>, is taken by the owner of the means of
          production. Exploitation is this extraction of unpaid surplus labour.
        </p>
      </Definition>

      <Example title="historical materialism">
        <p>
          In the preface to A Contribution to the Critique of Political Economy (1859), Marx sketched how the forces of
          production, technology and skills, shape the relations of production, who owns and controls what. These form the
          economic base, on which law, politics and ideas rest as a superstructure. When relations fetter the growth of the
          forces, an era of social revolution begins.
        </p>
      </Example>

      <Remark title="critique of rights and ideology">
        <p>
          In On the Jewish Question (1843), Marx argued that the rights of man are the rights of egoistic individuals separated
          from community, and that political emancipation through equal citizenship leaves economic domination intact.
          Ideology is the set of ideas that make a class society look natural and fair: &ldquo;the ideas of the ruling class
          are in every epoch the ruling ideas.&rdquo;
        </p>
      </Remark>

      <Remark title="later debates">
        <p>
          Did Marx condemn capitalism as unjust, or only describe it? Allen Wood argued he did not, since justice was itself an
          ideological notion; others, such as Norman Geras, said he did, implicitly. Analytical Marxists, including G. A. Cohen,
          John Roemer and Jon Elster, restated his ideas without the labour theory of value: Roemer defined exploitation by
          unequal ownership of productive assets.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sv",
      rung: "check",
      prompt: <p>What is surplus value?</p>,
      answer: {
        kind: "choice",
        options: [
          "The value workers create beyond the value of their wages, kept by owners.",
          "Extra goods left unsold.",
          "Government revenue.",
          "Savings by workers.",
        ],
        correct: [0],
      },
    },
    {
      key: "base",
      rung: "check",
      prompt: <p>In historical materialism, what is the economic base?</p>,
      answer: {
        kind: "choice",
        options: ["The forces and relations of production", "Law and politics", "Religion and art", "The constitution"],
        correct: [0],
      },
    },
    {
      key: "rate",
      rung: "apply",
      prompt: <p>A worker&rsquo;s wage equals the value produced in 4 hours of a 10-hour day. What is the rate of surplus value s/v?</p>,
      answer: { kind: "numeric", value: 1.5, tolerance: 0.001 },
    },
    {
      key: "relative",
      rung: "apply",
      prompt: <p>How does raising productivity increase surplus value without lengthening the day?</p>,
      answer: {
        kind: "choice",
        options: [
          "It shortens the necessary labour time needed to reproduce the wage.",
          "It raises the wage.",
          "It shortens the day.",
          "It does not.",
        ],
        correct: [0],
      },
    },
    {
      key: "rights",
      rung: "apply",
      prompt: <p>What was Marx&rsquo;s criticism of the rights of man in On the Jewish Question?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are the rights of egoistic individuals separated from community, and leave economic domination intact.",
          "There are too few of them.",
          "They apply only to Jews.",
          "They are divinely given.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a freely agreed wage contract be exploitative? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Marx's account of exploitation through surplus value, or a modern version such as Roemer's.",
          "Considers the reply that voluntary exchange cannot be unjust, perhaps with Nozick.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If the labour theory of value is false, is anything left of Marx&rsquo;s critique of capitalism?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the dependence of the classical account of exploitation on the labour theory.",
          "Considers what survives, such as unequal ownership, domination at work, or alienation.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Marx's account of exploitation through surplus value, historical materialism and the base and superstructure, his critique of rights and ideology, and how analytical Marxists restated these ideas.",

  glimpse: (
    <p>
      The next lesson presents feminist political philosophy, which extends the critique of hidden domination to the family.
      Ambedkar and debates on global justice also connect economic structure to political equality.
    </p>
  ),
};
