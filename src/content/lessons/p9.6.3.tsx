import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Suppose nothing is given as real except our world of desires and passions, and we can reach no other reality than that of our drives.",
    kind: "premise",
    note: "Beyond Good and Evil, section 36. The whole argument is framed as a supposition, an experiment in thinking.",
  },
  {
    claim: "Then we may try whether this given also suffices to understand the so-called mechanical or material world.",
    kind: "inference",
    note: "Not as an illusion or representation, as for Berkeley or Schopenhauer, but as having the same rank of reality as our feelings.",
  },
  {
    claim: "Method demands that we not assume several kinds of causality until the attempt to make do with one has been pushed to its limit.",
    kind: "premise",
    note: "A principle of economy, which Nietzsche calls the morality of method.",
  },
  {
    claim: "We do believe in the causality of the will; indeed our belief in causality is our belief in it.",
    kind: "premise",
    note: "Will, Nietzsche says, can of course act only on will, not on matter.",
    objection: "Elsewhere, in Twilight of the Idols, Nietzsche says the will moves nothing and is no cause at all. So does he accept this premise?",
  },
  {
    claim: "So we must try the hypothesis that wherever effects are recognised, will acts on will, and all mechanical events, insofar as a force is active in them, are will-force.",
    kind: "inference",
    note: "Extending the one kind of causality we know from inside to everything.",
  },
  {
    claim: "The world seen from inside, defined by its intelligible character, would be will to power and nothing else.",
    kind: "conclusion",
    note: "The famous conclusion, which Nietzsche never developed into a published system.",
    objection: "Several scholars, notably Maudemarie Clark, read section 36 as deliberately conditional or even ironic, a display of how metaphysicians reason, not Nietzsche's own doctrine.",
  },
];

export const lesson: LessonContent = {
  id: "p9.6.3",
  minutes: 80,
  links: {
    revisits: ["p9.6.2", "p9.3.1", "p9.3.2"],
    foreshadows: ["p9.6.4", "p9.6.5", "p34.3.2"],
  },

  puzzle: (
    <>
      <p>
        Schopenhauer said the inner nature of everything is a blind will to live, and concluded that life is suffering to be
        denied. Darwinians spoke of a struggle for existence. Nietzsche thought both had misread life. Living things, he said,
        do not chiefly seek to survive: they seek to grow, to expand, to discharge their strength. Is that a psychology, a
        metaphysics, or a provocation?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through the one place where Nietzsche argues in print that the world is will to power, and challenge the steps
        that readers dispute.
      </p>
      <ArgumentStepViz steps={STEPS} title="Beyond Good and Evil, section 36" />
    </>
  ),

  theory: (
    <>
      <Definition title="will to power">
        <p>
          &ldquo;A living thing seeks above all to discharge its strength; life itself is will to power; self-preservation is
          only one of the indirect and most frequent results.&rdquo; (Beyond Good and Evil 13.) Power here is not mainly
          domination of others but growth, overcoming of resistance, the feeling that power increases.
        </p>
      </Definition>

      <Example title="power in the psychology of morality">
        <p>
          The will to power explains much in the Genealogy: the nobles express it directly; the slaves, unable to, express it
          through ressentiment and revaluation; the ascetic priest gains power by giving suffering a meaning, and even
          self-denial is a way to feel power over oneself. The concept lets Nietzsche read moralities as strategies of life.
        </p>
      </Example>

      <Example title="against Schopenhauer and Darwin">
        <p>
          For Schopenhauer the will is one, blind and the source of suffering, so wisdom is resignation. Nietzsche keeps the
          will but makes it plural, a struggle of drives, and turns its verdict around: the expansion of power is to be
          affirmed. Against Darwin he holds that the struggle for mere existence is the exception; where there is struggle, it
          is a struggle for power.
        </p>
      </Example>

      <Remark title="the book that Nietzsche did not write">
        <p>
          A volume called The Will to Power appeared after Nietzsche&rsquo;s collapse, compiled from his notebooks by his
          sister Elisabeth F&ouml;rster-Nietzsche, who arranged and sometimes altered the notes and later courted the Nazis.
          Heidegger treated the notebooks as Nietzsche&rsquo;s real philosophy; most scholars now give priority to the published
          works, where the will to power is above all a psychological hypothesis.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "seek",
      rung: "check",
      prompt: <p>According to Nietzsche, what does a living thing seek above all?</p>,
      answer: {
        kind: "choice",
        options: ["To preserve itself", "To discharge its strength", "To avoid pain", "To be happy"],
        correct: [1],
      },
    },
    {
      key: "book",
      rung: "check",
      prompt: <p>Who compiled the posthumous volume The Will to Power?</p>,
      answer: {
        kind: "choice",
        options: ["Nietzsche himself", "His sister Elisabeth Förster-Nietzsche", "Heidegger", "Schopenhauer"],
        correct: [1],
      },
    },
    {
      key: "schop",
      rung: "apply",
      prompt: <p>How does Nietzsche&rsquo;s will to power differ from Schopenhauer&rsquo;s will to live?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is to be denied rather than affirmed.",
          "It aims at growth and is to be affirmed, not at mere survival to be renounced.",
          "It belongs only to humans.",
          "There is no difference.",
        ],
        correct: [1],
      },
    },
    {
      key: "priest",
      rung: "apply",
      prompt: <p>How can self-denial express a will to power?</p>,
      answer: {
        kind: "choice",
        options: [
          "It cannot; they are opposites.",
          "Mastering oneself and giving suffering a meaning are ways of feeling power.",
          "Only by accident.",
          "Because it makes one rich.",
        ],
        correct: [1],
      },
    },
    {
      key: "frame",
      rung: "apply",
      prompt: <p>Why do some scholars doubt that section 36 states Nietzsche&rsquo;s own metaphysics?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is written in French.",
          "Because it is framed as a supposition, and relies on a causality of the will he elsewhere denies.",
          "Because it mentions Darwin.",
          "Because it was added by his sister.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the will to power a good explanation of human behaviour? Argue briefly, with an example.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the hypothesis in its psychological form.",
          "Tests it on an example, such as altruism, asceticism or curiosity, and considers a rival explanation.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "unfalsifiable",
      rung: "stretch",
      prompt: <p>If both domination and self-denial count as will to power, can any behaviour count against the hypothesis?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the worry that the hypothesis may explain everything and so nothing.",
          "Considers a reply, such as that it is an interpretive framework rather than a testable law.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Nietzsche's idea of the will to power, how it differs from Schopenhauer's will and from Darwin's struggle for existence, how it explains moralities, the argument of Beyond Good and Evil section 36, and the story of the posthumous book.",

  glimpse: (
    <p>
      The next lesson examines eternal recurrence, Nietzsche&rsquo;s test of whether one can affirm life wholly. Then comes
      the &Uuml;bermensch, and later Foucault&rsquo;s analysis of power.
    </p>
  ),
};
