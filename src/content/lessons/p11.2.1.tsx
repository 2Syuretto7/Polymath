import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CommitmentViz } from "@/components/viz/CommitmentViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.2.1",
  minutes: 80,
  links: {
    revisits: ["p11.1.2", "p2.4.4", "p2.6.1"],
    foreshadows: ["p11.2.2", "p15.1.2", "p27.5.1"],
  },

  puzzle: (
    <>
      <p>
        We say there is a hole in the dosa, there is a chance of rain, and there are prime numbers greater than 100. Do we
        thereby believe in holes, chances and numbers? We need some test of what a theory really says exists, or ontological
        disputes will never be settled.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a sentence, see what it seems to commit us to when written in logical form, and try paraphrasing it. Which
        commitments survive?
      </p>
      <CommitmentViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Quine's criterion">
        <p>
          &ldquo;To be is to be the value of a bound variable.&rdquo; A theory is <strong>ontologically committed</strong> to
          the things that its bound variables must range over for the theory to be true, once it is written in first-order
          logic. Names and predicates carry no commitment of their own.
        </p>
      </Definition>

      <Example title="Plato's beard">
        <p>
          In &ldquo;On What There Is&rdquo;, Quine&rsquo;s philosopher McX argues that Pegasus must be something, or what
          would we be denying when we say Pegasus does not exist? Quine, following Russell&rsquo;s theory of descriptions,
          replaces the name with a predicate: &ldquo;nothing pegasises&rdquo;. No bound variable needs to take Pegasus as a
          value, so the puzzle, which Quine called Plato&rsquo;s beard, is shaved away.
        </p>
      </Example>

      <Remark title="paraphrase">
        <p>
          The criterion says what a theory commits us to; paraphrase shows when an apparent commitment is not real. We are
          committed to what our best regimented theory cannot avoid quantifying over. Quine reluctantly accepted numbers and
          sets, because science seems to need quantification over them.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Some deny that first-order logic is the right test: second-order quantifiers, as in the critics sentence, may not
          commit us to classes at all. Others worry about which paraphrase counts: if &ldquo;the dosa is perforated&rdquo;
          avoids holes, why not paraphrase away tables in terms of particles arranged table-wise? And neo-Meinongians reject
          the link between quantifying and existing altogether.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "crit",
      rung: "check",
      prompt: <p>According to Quine, what is a theory committed to?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whatever its names refer to",
          "Whatever its bound variables must range over for it to be true",
          "Whatever its predicates express",
          "Whatever its believers imagine",
        ],
        correct: [1],
      },
    },
    {
      key: "beard",
      rung: "check",
      prompt: <p>What is &ldquo;Plato&rsquo;s beard&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "The puzzle that saying something does not exist seems to require it to be something",
          "Plato’s theory of Forms",
          "A form of circular argument",
          "The problem of universals",
        ],
        correct: [0],
      },
    },
    {
      key: "hole",
      rung: "apply",
      prompt: <p>&ldquo;There is a hole in this dosa&rdquo; is paraphrased as &ldquo;This dosa is perforated&rdquo;. What does this show?</p>,
      answer: {
        kind: "choice",
        options: [
          "Holes certainly do not exist.",
          "We need not count holes among what we are committed to, since an equivalent sentence does not quantify over them.",
          "Dosas do not exist.",
          "Paraphrase always increases commitments.",
        ],
        correct: [1],
      },
    },
    {
      key: "numbers",
      rung: "apply",
      prompt: <p>Why did Quine accept that we are committed to numbers?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because numbers can be seen.",
          "Because our best scientific theories quantify over them and no adequate paraphrase avoids this.",
          "Because Plato said so.",
          "Because numbers are names.",
        ],
        correct: [1],
      },
    },
    {
      key: "gk",
      rung: "apply",
      prompt: <p>Why is &ldquo;Some critics admire only one another&rdquo; important for Quine&rsquo;s criterion?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is false.",
          "It cannot be written in first-order logic over critics alone, so it seems to commit us to classes.",
          "It is about admiration, which is mental.",
          "It contains a name.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Quine&rsquo;s criterion a good test of what a theory says exists? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the criterion and the role of paraphrase.",
          "Considers an objection, such as the choice of logic or the latitude in paraphrase.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "tables",
      rung: "stretch",
      prompt: <p>If paraphrase can remove holes, can it remove tables, by speaking only of particles arranged table-wise? Where, if anywhere, should paraphrase stop?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the paraphrase strategy seems to generalise.",
          "Considers a principle for stopping, or accepts the eliminativist conclusion.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Quine's criterion of ontological commitment, how Russell's theory of descriptions removes Plato's beard, how paraphrase can remove apparent commitments, and one objection to the criterion.",

  glimpse: (
    <p>
      The next lesson asks whether we are committed to abstract objects such as numbers. Philosophy of language studies
      Russell&rsquo;s theory of descriptions in depth, and graduate metaphysics revisits Quine&rsquo;s debate with Carnap.
    </p>
  ),
};
