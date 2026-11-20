import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DiscourseClaimViz } from "@/components/viz/DiscourseClaimViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p33.3.2",
  minutes: 90,
  links: {
    revisits: ["p33.3.1", "p14.4.2", "p5.3.1"],
    foreshadows: ["p33.3.3", "p34.2.2", "p34.2.1"],
  },

  puzzle: (
    <>
      <p>
        When you ask a colleague to close the window, they can refuse in three quite different ways. They can say the
        window is already shut, that you have no business telling them what to do, or that you do not really want it closed
        at all. What do these three replies reveal about what you were doing when you spoke, and could the answer ground
        morality and law?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose an utterance, then challenge each of the claims it raises.</p>
      <DiscourseClaimViz />
    </>
  ),

  theory: (
    <>
      <Definition title="communicative action">
        <p>
          In <em>The Theory of Communicative Action</em> (1981), Jürgen Habermas distinguishes{" "}
          <strong>strategic action</strong>, which aims at success by influencing others through threats, rewards or
          manipulation, from <strong>communicative action</strong>, which coordinates action through reaching understanding.
          Every speech act oriented to understanding raises three <strong>validity claims</strong>: to the truth of what is
          said, to the normative rightness of saying it, and to the sincerity of the speaker. A hearer may accept or reject
          each, and the speaker implicitly undertakes to back them with reasons.
        </p>
      </Definition>

      <Definition title="discourse ethics">
        <p>
          When a claim is challenged, participants can move into <strong>discourse</strong>, where only the force of the
          better argument should count. Habermas and Karl-Otto Apel argue that such argument presupposes an{" "}
          <strong>ideal speech situation</strong>: no one competent is excluded, all may question any assertion, and no
          coercion is exercised. From these presuppositions comes the principle (D): only those norms are valid that could
          meet with the agreement of all affected as participants in a practical discourse. Its moral version (U) requires
          that everyone could accept the foreseeable consequences of general compliance.
        </p>
      </Definition>

      <Example title="a dialogical Kant">
        <p>
          Kant&rsquo;s categorical imperative asks each person to test a maxim alone, by asking whether they could will it as
          a universal law. Discourse ethics makes the test public: what each can will privately is replaced by what all could
          agree to in real argument. This is meant to avoid the moral philosopher&rsquo;s monologue standing in for the
          perspectives of others, and it ties validity to a procedure rather than to a list of substantive values.
        </p>
      </Example>

      <Remark title="law, democracy and critics">
        <p>
          In <em>Between Facts and Norms</em> (1992), Habermas argues that law is legitimate when those subject to it could
          see themselves as its authors through democratic deliberation, and that private and public autonomy are
          co-original. Critics doubt that the ideal speech situation is more than a fiction: feminist critics such as Seyla
          Benhabib and Iris Marion Young argue that norms of rational argument can exclude other forms of speech, and
          agonists such as Chantal Mouffe hold that political conflict cannot be argued away.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "claims",
      rung: "check",
      prompt: <p>Which three validity claims does every speech act aimed at understanding raise, on Habermas&rsquo;s view?</p>,
      answer: { kind: "choice", options: ["Truth, normative rightness and sincerity", "Beauty, utility and truth", "Coherence, simplicity and power", "Authority, tradition and consent"], correct: [0] },
    },
    {
      key: "strat",
      rung: "check",
      prompt: <p>How does strategic action differ from communicative action?</p>,
      answer: { kind: "choice", options: ["It seeks success by influencing others, rather than coordinating through mutual understanding", "It uses no language", "It is always immoral", "It aims at truth alone"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, challenge the sincerity claim. How is it redeemed?</p>,
      answer: { kind: "choice", options: ["By the consistency of the speaker’s later conduct, not by argument", "In theoretical discourse", "In practical discourse", "By a vote"], correct: [0] },
    },
    {
      key: "d",
      rung: "apply",
      prompt: <p>What does principle (D) of discourse ethics say?</p>,
      answer: { kind: "choice", options: ["Valid norms are those that could meet with the agreement of all affected in practical discourse", "Valid norms are those the majority prefers", "Valid norms are those that maximise happiness", "Valid norms are those that tradition supports"], correct: [0] },
    },
    {
      key: "kant",
      rung: "apply",
      prompt: <p>How does discourse ethics transform Kant&rsquo;s categorical imperative?</p>,
      answer: { kind: "choice", options: ["It replaces the solitary test of a maxim with what all affected could agree to in argument", "It rejects universality", "It makes morality depend on feelings", "It keeps the test entirely private"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Can the presuppositions of argument ground moral norms? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the idea that argument presupposes inclusion, equality and freedom from coercion.",
          "Considers an objection, such as the gap between ideal conditions and real ones.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the ideal of rational argument exclude some voices from public life?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with a critic such as Young, Benhabib or Mouffe.",
          "Considers a reply on Habermas’s behalf.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Promises, money, laws and marriages exist only because people talk and act as though they do. Yet they are as
        real as rivers. What kind of existence do social facts have?
      </p>
      <p>Next, social ontology.</p>
    </>
  ),
};
