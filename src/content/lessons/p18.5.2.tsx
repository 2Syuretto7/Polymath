import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { UniversityTourViz } from "@/components/viz/UniversityTourViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p18.5.2",
  minutes: 80,
  links: {
    revisits: ["p18.5.1", "p18.4.3", "p18.3.2"],
    foreshadows: ["p18.5.3", "p18.6.1", "p18.7.1"],
  },

  puzzle: (
    <>
      <p>
        A visitor is shown the colleges, libraries, laboratories and offices of Oxford, then asks: &ldquo;But where is the
        University?&rdquo; The question is not ignorant of any fact. Something has gone wrong with the kind of question it
        is. Could the familiar question &ldquo;where is the mind, and how does it move the body?&rdquo; be the same sort of
        mistake?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Show the visitor every place, then let them ask their question.</p>
      <UniversityTourViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the official doctrine">
        <p>
          In <em>The Concept of Mind</em> (1949), Gilbert Ryle attacked what he called the official doctrine, derived from
          Descartes: each person is a body, in public space, and a mind, a private non-spatial theatre known by
          introspection, with mysterious causal links between the two. He called it, &ldquo;with deliberate
          abusiveness&rdquo;, the dogma of the <strong>ghost in the machine</strong>.
        </p>
      </Definition>

      <Definition title="category mistakes">
        <p>
          A <strong>category mistake</strong> presents facts of one logical type as if they belonged to another. The visitor
          treats the University as another building. A child watching a division march past asks when the division will come,
          having seen the battalions and batteries. &ldquo;She came home in a flood of tears and a sedan chair&rdquo; joins
          expressions of different types as if they were alike. Ryle held that the dualist treats mental concepts as names of
          inner events parallel to bodily ones.
        </p>
      </Definition>

      <Example title="dispositions and knowing how">
        <p>
          On Ryle&rsquo;s positive view, many mental words describe <strong>dispositions</strong> and the manner of public
          behaviour: to be vain is to be prone to boast and to seek praise, as to be brittle is to be liable to break. He also
          distinguished <strong>knowing how</strong> from <strong>knowing that</strong>: intelligent action is not the
          execution of inner theorising, on pain of a regress, since applying a theory intelligently would itself need prior
          theorising.
        </p>
      </Example>

      <Remark title="assessment">
        <p>
          Ryle was often read as a behaviourist, though he disliked the label. Critics replied that occurrent thoughts and
          sensations, such as a sudden pain or a silent calculation, are not dispositions, and that dispositions need
          categorical bases, which identity theorists located in the brain. His method of &ldquo;logical geography&rdquo;,
          charting how concepts actually work, was central to Oxford ordinary language philosophy.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ghost",
      rung: "check",
      prompt: <p>What did Ryle mean by &ldquo;the ghost in the machine&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "The Cartesian picture of a private, non-physical mind housed in and steering a body.",
          "A computer program.",
          "The unconscious mind.",
          "The soul after death.",
        ],
        correct: [0],
      },
    },
    {
      key: "cm",
      rung: "check",
      prompt: <p>What is a category mistake?</p>,
      answer: {
        kind: "choice",
        options: [
          "Treating something of one logical type as if it belonged to another.",
          "A false empirical claim.",
          "A logical contradiction.",
          "A mistake in arithmetic.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many places must the visitor see before every building has been visited?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of these is a category mistake in Ryle&rsquo;s sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "Having watched the bowlers, batters and fielders, asking which player provides the team spirit.",
          "Asking which batter scored the most runs.",
          "Asking how long the match lasted.",
          "Asking where the match was played.",
        ],
        correct: [0],
      },
    },
    {
      key: "regress",
      rung: "apply",
      prompt: <p>Why did Ryle think knowing how cannot be reduced to knowing that?</p>,
      answer: {
        kind: "choice",
        options: [
          "Applying a piece of knowledge-that intelligently would itself require knowing how, so a regress threatens.",
          "Knowing how is always unconscious.",
          "Only animals know how.",
          "Knowing that is impossible.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Cartesian dualism a category mistake, as Ryle claims? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Ryle’s charge, using the University example or another of his examples.",
          "Considers an objection, such as that occurrent experiences like pains are not dispositions.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If vanity is a disposition to boast, as brittleness is a disposition to break, what makes a disposition true of someone at a time when it is not being shown?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that dispositions seem to need a present ground, a categorical basis, even when unmanifested.",
          "Considers Ryle’s view that a dispositional statement is a kind of inference licence, not a report of an inner state, or the identity theorist’s appeal to the brain.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, J. L. Austin: performative utterances, the ways they can go wrong, and the theory of speech acts.
    </p>
  ),
};
