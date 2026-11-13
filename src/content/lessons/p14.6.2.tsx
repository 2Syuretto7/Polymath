import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Nations are real communities: people who share a public culture, a history and a sense of belonging together, and who want political self-determination.",
    kind: "premise",
    note: "David Miller’s definition. Benedict Anderson called nations ‘imagined communities’: members will never meet most others, yet feel a bond.",
    objection: "Ernest Gellner and others argue nations were created by modern states and industrial economies, often by suppressing local identities, so their reality is the product of policy.",
  },
  {
    claim: "Membership in such a community is part of many people’s identity, and ethical relationships to fellow members are valuable, like those to family.",
    kind: "premise",
    note: "This is the communitarian strand of liberal nationalism.",
  },
  {
    claim: "So members may give special weight to the interests of compatriots, and nations have a claim to self-government.",
    kind: "inference",
    note: "Partiality is limited by basic human rights owed to everyone.",
    objection: "Cosmopolitans reply that special concern for co-nationals is arbitrary, like favouring one’s own race, and should not shape distributive justice.",
  },
  {
    claim: "Moreover, shared national identity supports the trust and solidarity that democracy and a welfare state need.",
    kind: "premise",
    note: "People accept redistribution and outvoting more readily from those they regard as their own.",
    objection: "Critics fear that national identity excludes minorities and immigrants. Civic nationalists answer that the shared identity can be political rather than ethnic.",
  },
  {
    claim: "Therefore a liberal state may legitimately foster a national identity and grant priority to its members, within the limits of human rights.",
    kind: "conclusion",
    note: "This is liberal nationalism, defended by Miller, Yael Tamir and Will Kymlicka in different forms.",
  },
];

export const lesson: LessonContent = {
  id: "p14.6.2",
  minutes: 80,
  links: {
    revisits: ["p14.6.1", "p14.3.3", "p14.5.4"],
    foreshadows: ["p14.6.3", "p25.3.1", "p14.4.2"],
  },

  puzzle: (
    <>
      <p>
        Nationalism inspired the freedom struggles of India and many colonies, and also some of the worst wars and
        persecutions of the last two centuries. Is loyalty to one&rsquo;s nation a virtue, a prejudice, or something in
        between?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the argument for liberal nationalism and open the objections.</p>
      <ArgumentStepViz title="Liberal nationalism" steps={STEPS} />
    </>
  ),

  theory: (
    <>
      <Definition title="nation and state">
        <p>
          A state is a political institution with authority over a territory. A nation is a community of people bound by
          shared identity, which may or may not have its own state. Nationalism holds that nations matter morally, and often
          that each should govern itself.
        </p>
      </Definition>

      <Example title="civic and ethnic">
        <p>
          Ethnic nationalism ties membership to descent, language or religion. Civic nationalism ties it to shared political
          values and institutions, open in principle to anyone who joins. The distinction is contested: even civic identities
          carry a particular language and history.
        </p>
      </Example>

      <Remark title="Tagore's critique">
        <p>
          In his lectures on Nationalism (1917), Rabindranath Tagore argued that the nation, as the organised self-interest of
          a people, turns human beings into machinery for power and commerce, and warned India against copying the
          nationalism of the West even as it sought freedom from it. Gandhi&rsquo;s nationalism, by contrast, was explicitly
          tied to universal moral ideals.
        </p>
      </Remark>

      <Remark title="self-determination and secession">
        <p>
          If nations have a right to self-determination, may every national group secede? Most theorists limit the right:
          remedial theories, such as Allen Buchanan&rsquo;s, allow secession only in response to grave injustice, while
          national self-determination theories allow more, subject to protecting minorities in the new state.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How does a nation differ from a state?</p>,
      answer: {
        kind: "choice",
        options: [
          "A nation is a community of shared identity; a state is a political institution with authority over a territory.",
          "They are the same.",
          "A nation is smaller than a city.",
          "A state has no territory.",
        ],
        correct: [0],
      },
    },
    {
      key: "imagined",
      rung: "check",
      prompt: <p>Who described nations as imagined communities?</p>,
      answer: { kind: "choice", options: ["Benedict Anderson", "John Rawls", "Robert Nozick", "Plato"], correct: [0] },
    },
    {
      key: "civic",
      rung: "apply",
      prompt: <p>Which is a feature of civic nationalism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Membership based on shared political values and institutions, open to newcomers.",
          "Membership by descent.",
          "A single official religion.",
          "Rejection of all states.",
        ],
        correct: [0],
      },
    },
    {
      key: "trust",
      rung: "apply",
      prompt: <p>What instrumental argument do liberal nationalists give for national identity?</p>,
      answer: {
        kind: "choice",
        options: [
          "It supports the trust and solidarity needed for democracy and redistribution.",
          "It increases military power.",
          "It makes borders unnecessary.",
          "It ends disagreement.",
        ],
        correct: [0],
      },
    },
    {
      key: "tagore",
      rung: "apply",
      prompt: <p>What did Tagore criticise in his lectures on Nationalism?</p>,
      answer: {
        kind: "choice",
        options: [
          "The nation as organised self-interest that turns people into machinery for power and commerce.",
          "Indian independence.",
          "Poetry.",
          "All forms of community.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>May a state give priority to the interests of its own nationals? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the liberal nationalist case, from identity or from solidarity.",
          "Considers the cosmopolitan objection or the worry about exclusion.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does a national group have a right to secede from a state that treats it justly?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes remedial and national self-determination theories.",
          "Considers the interests of minorities within the seceding group, or stability.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between nations and states, civic and ethnic nationalism, the argument for liberal nationalism and its objections, and Tagore's critique.",

  glimpse: (
    <p>
      The last lesson of the course asks what human rights are and whether they are universal. Applied ethics later returns
      to obligations across borders.
    </p>
  ),
};
