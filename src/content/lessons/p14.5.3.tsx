import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SchellingViz } from "@/components/viz/SchellingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p14.5.3",
  minutes: 80,
  links: {
    revisits: ["p14.5.2", "p14.5.1", "p14.2.1"],
    foreshadows: ["p14.5.4", "p14.6.3", "p14.6.1"],
  },

  puzzle: (
    <>
      <p>
        Suppose no one in a city wants segregation, and every law is colour-blind. Could the city still end up deeply
        divided by race, with very different schools, jobs and life chances? If so, is that an injustice, and whose?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set how many like neighbours each resident wants, and let the unhappy move.</p>
      <SchellingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="critical race theory">
        <p>
          A movement that began in American legal scholarship in the 1970s and 1980s, with Derrick Bell, Kimberlé Crenshaw,
          Richard Delgado, Mari Matsuda and others. Its central claims are that racism is ordinary and built into
          institutions, not only a matter of individual prejudice; that formally neutral, colour-blind rules can preserve racial
          hierarchy; and that race is a social construction with real effects.
        </p>
      </Definition>

      <Example title="interest convergence">
        <p>
          Derrick Bell argued that gains for Black Americans, such as the school desegregation ruling of 1954, came when they
          converged with the interests of white elites, for instance America&rsquo;s image during the Cold War, and stalled
          when they did not. He concluded that legal rights alone would not secure racial justice.
        </p>
      </Example>

      <Remark title="structural injustice and the racial contract">
        <p>
          Charles Mills, in The Racial Contract (1997), argued that the social contract tradition presupposed a racial
          contract excluding non-whites from full personhood, and that ideal theory, which imagines a just society, can hide
          such histories. Iris Marion Young described structural injustice: harm produced by many people following accepted
          rules, for which all participants share a forward-looking responsibility, even if none is to blame.
        </p>
      </Remark>

      <Remark title="debates">
        <p>
          Critics argue that colour-blind principles are the right ideal even if not yet achieved, and that some critical race
          scholarship is sceptical of objectivity and individual rights in ways that undermine liberal protections. Defenders
          reply that remedies such as affirmative action are needed to undo structures that colour-blind rules leave in place,
          and that the movement extends, rather than rejects, the demand for equal treatment.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "claim",
      rung: "check",
      prompt: <p>Which is a central claim of critical race theory?</p>,
      answer: {
        kind: "choice",
        options: [
          "Racism can be built into institutions and formally neutral rules, not only individual prejudice.",
          "Race is a biological category.",
          "Law is always neutral.",
          "Racism ended with civil rights legislation.",
        ],
        correct: [0],
      },
    },
    {
      key: "bell",
      rung: "check",
      prompt: <p>What is Bell&rsquo;s interest convergence thesis?</p>,
      answer: {
        kind: "choice",
        options: [
          "Gains in racial justice come when they converge with the interests of dominant groups.",
          "All groups have the same interests.",
          "Interest rates affect race relations.",
          "Courts always protect minorities.",
        ],
        correct: [0],
      },
    },
    {
      key: "schelling",
      rung: "apply",
      prompt: <p>What does Schelling&rsquo;s model show?</p>,
      answer: {
        kind: "choice",
        options: [
          "Mild individual preferences can produce strong segregation that no one intended.",
          "Everyone wants segregation.",
          "Segregation cannot arise without laws.",
          "Cities always integrate over time.",
        ],
        correct: [0],
      },
    },
    {
      key: "mills",
      rung: "apply",
      prompt: <p>What is Mills&rsquo;s racial contract?</p>,
      answer: {
        kind: "choice",
        options: [
          "An implicit agreement, presupposed by the social contract tradition, that excluded non-whites from full personhood.",
          "A legal contract about housing.",
          "Rawls's original position.",
          "A treaty between nations.",
        ],
        correct: [0],
      },
    },
    {
      key: "young",
      rung: "apply",
      prompt: <p>On Young&rsquo;s account, who is responsible for structural injustice?</p>,
      answer: {
        kind: "choice",
        options: [
          "Everyone who participates in the processes that produce it, in a forward-looking sense.",
          "No one at all.",
          "Only those who intended harm.",
          "Only the government.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a society be unjust to a racial group if no law and no individual intends to disadvantage it? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the idea of structural or institutional racism, perhaps with the Schelling model.",
          "Considers the objection that injustice requires an agent or intention.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is colour-blindness the right ideal for law, or must law take race into account to undo past injustice?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the colour-blind ideal and its appeal.",
          "Considers the argument that neutral rules preserve existing hierarchies, and possible remedies.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the central claims of critical race theory, Bell's interest convergence thesis, Mills's racial contract and Young's structural injustice, and the debate over colour-blindness.",

  glimpse: (
    <p>
      The next lesson turns to Ambedkar, who analysed caste as a structure of graded inequality and asked what democracy
      requires. Human rights debates take up these questions again.
    </p>
  ),
};
