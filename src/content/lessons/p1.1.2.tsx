import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { GettierViz } from "@/components/viz/GettierViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.1.2",
  minutes: 70,
  links: {
    revisits: ["p0.4.2", "p0.3.2"],
    foreshadows: ["p4.4.1", "p10.1.2", "p10.1.3", "p20.5.7"],
  },

  puzzle: (
    <>
      <p>
        You glance at the station clock: it says 2:15, and you believe it is 2:15. You have every reason to trust it; it has
        always been accurate. And it is in fact 2:15. But the clock stopped exactly twelve hours ago, and you happened to look
        at the one moment when a stopped clock is right.
      </p>
      <p>
        Your belief was true, and you had good reason for it. Did you <em>know</em> it was 2:15? If not, what was missing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Most people say you did not know: you were lucky. That matters, because for over two thousand years a simple answer
        to &ldquo;what is knowledge?&rdquo; seemed close to right: knowledge is <strong>true belief</strong>, held for{" "}
        <strong>good reasons</strong>. Belief, because you cannot know what you do not believe; truth, because you cannot know
        what is false; reasons, because a lucky guess is not knowledge.
      </p>
      <p>
        The stopped clock has all three and still is not knowledge. Cases like it are called Gettier cases, after a
        three-page paper of 1963. Test each proposed analysis against the cases below, as Socrates tested definitions.
      </p>
      <GettierViz />
    </>
  ),

  theory: (
    <>
      <Definition title="three kinds of knowing">
        <p>
          We know people and places (<strong>acquaintance</strong>), we know how to ride a bicycle (<strong>know-how</strong>),
          and we know <em>that</em> Delhi is the capital (<strong>propositional knowledge</strong>). Epistemology, the theory
          of knowledge, concentrates on the last, knowledge that something is the case.
        </p>
      </Definition>

      <Definition title="the justified true belief analysis">
        <p>A person S knows that P if and only if</p>
        <ol>
          <li>P is true,</li>
          <li>S believes that P, and</li>
          <li>S is justified in believing that P.</li>
        </ol>
        <p>
          Each condition is meant to be necessary, and the three together sufficient. A version appears in Plato&rsquo;s{" "}
          <cite>Theaetetus</cite>, where knowledge is suggested to be true belief &ldquo;with an account&rdquo;, though Plato
          himself finds problems with it.
        </p>
      </Definition>

      <Example title="Gettier’s counterexample">
        <p>
          In &ldquo;Is Justified True Belief Knowledge?&rdquo; (1963), Edmund Gettier described Smith, who has strong evidence
          that Jones will get a job and that Jones has ten coins in his pocket. Smith infers: the man who will get the job has
          ten coins in his pocket. Unknown to Smith, he himself gets the job, and he also happens to have ten coins. His belief
          is true and justified, yet he does not know it. The analysis states sufficient conditions, so a single case like this
          refutes it.
        </p>
      </Example>

      <Remark title="an older discovery">
        <p>
          Gettier was not the first. The Buddhist philosopher Dharmottara, in eighth-century India, described a traveller who
          sees a shimmering mirage, takes it for water, and on reaching the spot finds water hidden under a rock. In the
          twelfth century Śrīharṣa offered similar cases, such as inferring fire from what is really dust that looks like smoke,
          on a hill where there happens to be a fire. Indian epistemologists debated what makes a cognition a true source of
          knowledge, a <em>pramāṇa</em>, centuries before the question was asked this way in Europe.
        </p>
      </Remark>

      <Example title="repairs and their troubles">
        <ul>
          <li>
            <strong>No false lemmas.</strong> Smith reasons from a falsehood, that Jones will get the job. Perhaps knowledge
            is justified true belief not inferred from anything false. But in Alvin Goldman&rsquo;s fake barn county (1976),
            Henry sees a real barn among many facades. He infers nothing false, yet seems not to know.
          </li>
          <li>
            <strong>Safety.</strong> Perhaps a known belief must be one that could not easily have been false. Henry&rsquo;s
            belief could easily have been false: most barns nearby are fakes. This handles all the cases above, but faces
            counterexamples of its own.
          </li>
          <li>
            <strong>Knowledge first.</strong> Timothy Williamson (2000) suggests that knowledge cannot be analysed into simpler
            parts at all, and should instead be used to explain belief and justification.
          </li>
        </ul>
      </Example>
    </>
  ),

  practice: [
    {
      key: "kinds",
      rung: "check",
      prompt: <p>&ldquo;Priya knows how to play the sitar.&rdquo; What kind of knowledge is this?</p>,
      answer: { kind: "choice", options: ["acquaintance", "know-how", "propositional knowledge", "justified true belief"], correct: [1] },
    },
    {
      key: "conditions",
      rung: "check",
      prompt: <p>On the JTB analysis, a lucky guess that turns out true fails which condition?</p>,
      answer: { kind: "choice", options: ["truth", "belief", "justification", "none of them"], correct: [2] },
    },
    {
      key: "sufficient",
      rung: "apply",
      prompt: <p>A Gettier case shows that justified true belief is&hellip;</p>,
      answer: { kind: "choice", options: ["not necessary for knowledge", "not sufficient for knowledge", "never knowledge", "the same as knowledge"], correct: [1] },
    },
    {
      key: "false-lemma",
      rung: "apply",
      prompt: <p>In the stopped clock case, what false belief does the person rely on?</p>,
      answer: {
        kind: "choice",
        options: ["that it is 2:15", "that the clock is working", "that clocks exist", "none at all"],
        correct: [1],
      },
    },
    {
      key: "barns",
      rung: "apply",
      prompt: <p>Why does the fake barn case trouble the &ldquo;no false lemmas&rdquo; repair?</p>,
      answer: {
        kind: "choice",
        options: [
          "Henry's belief is false.",
          "Henry relies on no false belief, yet seems not to know.",
          "Henry has no justification.",
          "Henry does not believe there is a barn.",
        ],
        correct: [1],
      },
    },
    {
      key: "own-case",
      rung: "prove",
      prompt: (
        <p>
          Invent your own Gettier case, set somewhere familiar to you. Then show that it satisfies all three conditions of the
          JTB analysis, and explain why the person nonetheless lacks knowledge.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Describes a case in which someone believes something true.",
          "Shows the belief is well justified by ordinary standards.",
          "Shows the belief is true only by luck, disconnected from the justification.",
          "Explains why most people would say the person does not know.",
        ],
      },
    },
    {
      key: "necessary",
      rung: "stretch",
      prompt: (
        <p>
          Gettier cases attack sufficiency. Is belief even necessary for knowledge? Consider a nervous student who answers an
          exam question correctly from good study but feels sure she is guessing. Does she know the answer? Argue a position.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains what it would mean for belief not to be necessary for knowledge.",
          "Considers whether the student believes the answer despite her lack of confidence.",
          "Reaches a verdict and defends it against one objection.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the justified true belief analysis of knowledge and how a Gettier case such as the stopped clock refutes it.",

  glimpse: (
    <p>
      Next, the problem of induction, which asks whether our reasons for believing anything about the future are good reasons
      at all. Plato&rsquo;s <cite>Theaetetus</cite> is read in Ancient Greek Philosophy. Epistemology opens with the Gettier
      problem and the many responses to it, and Indian Philosophy studies the Buddhist theory of knowledge of Dignāga and
      Dharmakīrti, the tradition Dharmottara belonged to.
    </p>
  ),
};
