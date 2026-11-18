import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FelicityViz } from "@/components/viz/FelicityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p18.5.3",
  minutes: 80,
  links: {
    revisits: ["p18.5.2", "p15.4.1", "p18.5.1"],
    foreshadows: ["p18.6.1", "p18.7.1", "p18.6.3"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;I do&rdquo;, said at a wedding. &ldquo;I bet you sixpence it will rain.&rdquo; &ldquo;I name this ship the
        Queen Elizabeth.&rdquo; None of these seems to describe anything, and none seems true or false. Yet philosophers had
        long assumed that the business of a sentence is to state a fact. What are these sentences doing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Make conditions fail one at a time. How does the naming go wrong?</p>
      <FelicityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="performatives">
        <p>
          In lectures published as <em>How to Do Things with Words</em> (1962), J. L. Austin contrasted{" "}
          <strong>constatives</strong>, which state and are true or false, with <strong>performatives</strong>, whose
          utterance is the doing of an act: marrying, betting, naming, promising. Performatives are not true or false but{" "}
          <strong>happy</strong> or <strong>unhappy</strong>, depending on whether the act comes off.
        </p>
      </Definition>

      <Example title="infelicities">
        <p>
          Austin listed conditions: there must be an accepted conventional procedure; the persons and circumstances must be
          appropriate; and the procedure must be executed correctly and completely. If any fails, the act{" "}
          <strong>misfires</strong> and is void. A further condition is that the participants have the required thoughts,
          feelings or intentions; if it fails, as in an insincere promise, the act is performed but is an{" "}
          <strong>abuse</strong>.
        </p>
      </Example>

      <Definition title="the general theory of speech acts">
        <p>
          Austin found no clean test separating performatives from constatives: stating is also something we do, and it can
          go wrong in similar ways. So he distinguished, in every utterance, the <strong>locutionary</strong> act of saying
          something with a certain meaning, the <strong>illocutionary</strong> act performed in saying it (warning, asking,
          promising, stating) and the <strong>perlocutionary</strong> act performed by saying it (alarming, persuading).
        </p>
      </Definition>

      <Remark title="ordinary language philosophy">
        <p>
          Austin was the leading figure of post-war Oxford philosophy, which held that careful attention to the distinctions
          drawn in ordinary speech is the first word, though not the last, in philosophy. His speech act theory was
          systematised by John Searle and shaped linguistics, the law of contracts and later work on the force of words.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "perf",
      rung: "check",
      prompt: <p>What is a performative utterance?</p>,
      answer: {
        kind: "choice",
        options: [
          "One whose utterance, in the right circumstances, is the doing of an act.",
          "Any sentence spoken aloud.",
          "A false statement.",
          "A sentence about a performance.",
        ],
        correct: [0],
      },
    },
    {
      key: "illoc",
      rung: "check",
      prompt: <p>In saying &ldquo;the ice is thin&rdquo;, a speaker warns the listener. Which act is the warning?</p>,
      answer: { kind: "choice", options: ["Illocutionary", "Locutionary", "Perlocutionary", "Constative"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, suppose only the speaker&rsquo;s intention fails. What is the verdict?</p>,
      answer: {
        kind: "choice",
        options: [
          "Abuse: the ship is named, but the act is hollow",
          "Misfire: the act is void",
          "Happy: the ship is named",
          "The sentence is false",
        ],
        correct: [0],
      },
    },
    {
      key: "stranger",
      rung: "apply",
      prompt: <p>A passer-by grabs the bottle and names the ship before the appointed person can. What kind of failure is this?</p>,
      answer: {
        kind: "choice",
        options: ["A misfire, because the person is not the appropriate one", "An abuse", "A happy performative", "A false constative"],
        correct: [0],
      },
    },
    {
      key: "perloc",
      rung: "apply",
      prompt: <p>By arguing with you, I convince you. Which act is the convincing?</p>,
      answer: { kind: "choice", options: ["Perlocutionary", "Illocutionary", "Locutionary", "Performative"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Did Austin succeed in showing that the distinction between performatives and constatives cannot be maintained? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the original distinction and Austin’s reasons for doubting it, such as statements having felicity conditions.",
          "Considers whether some version survives, for instance via explicit performative verbs or the true or false dimension.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is &ldquo;I promise to come, but I have no intention of coming&rdquo; a contradiction? Use Austin&rsquo;s categories.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the first part performs a promise whose felicity requires the intention the second part denies.",
          "Explains that the combination is not a logical contradiction but undermines itself, as an abuse announced in advance, similar to Moore’s paradox.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Quine&rsquo;s &ldquo;Two Dogmas of Empiricism&rdquo;: an attack on the analytic-synthetic distinction and on
      sentence-by-sentence verification.
    </p>
  ),
};
