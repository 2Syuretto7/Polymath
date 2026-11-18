import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { AyerCriterionViz } from "@/components/viz/AyerCriterionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p18.4.3",
  minutes: 80,
  links: {
    revisits: ["p18.4.1", "p15.3.1", "p18.3.2"],
    foreshadows: ["p18.6.1", "p18.5.1", "p18.5.2"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;The Absolute enters into, but is itself incapable of, evolution and progress.&rdquo; A. J. Ayer, aged 25, chose
        this sentence from F. H. Bradley to show what he meant by nonsense. It is not false, he said; it says nothing at all,
        because no observation could count for or against it. But can a test of meaning be stated that throws out Bradley
        and keeps physics?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick any sentence and any observation, and see what Ayer&rsquo;s first criterion says.</p>
      <AyerCriterionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Language, Truth and Logic">
        <p>
          Ayer&rsquo;s book (1936) brought the Vienna Circle&rsquo;s views to English readers. A sentence is literally
          meaningful only if it is <strong>analytic</strong>, true in virtue of meaning, as logic and mathematics are, or{" "}
          <strong>empirically verifiable</strong>. Everything else, including metaphysics and theology, is literally
          meaningless, though it may express feeling.
        </p>
      </Definition>

      <Definition title="strong and weak verifiability">
        <p>
          A sentence is <strong>strongly</strong> verifiable if some finite set of observations would conclusively establish
          it. That excludes universal laws, such as &ldquo;all copper conducts electricity&rdquo;, and statements about the
          past. So Ayer adopted <strong>weak</strong> verifiability: observation must be relevant to its truth or falsity.
          His precise version said a sentence is meaningful if, with auxiliary premises, it entails an observation sentence
          that the premises alone do not entail.
        </p>
      </Definition>

      <Example title="the criterion collapses">
        <p>
          As the visualisation shows, the auxiliary &ldquo;if N then O&rdquo; makes every sentence N meaningful. Ayer&rsquo;s
          revised criterion of 1946 restricted the auxiliary premises, but Alonzo Church showed in 1949 that, given any three
          logically independent observation sentences, it still passes every sentence or its negation. Carl Hempel&rsquo;s
          survey of 1950 concluded that every proposed criterion is either too strict or too liberal.
        </p>
      </Example>

      <Remark title="ethics and the principle itself">
        <p>
          Ayer held that moral sentences state no facts: &ldquo;stealing is wrong&rdquo; expresses disapproval, a view called{" "}
          <strong>emotivism</strong>. Critics asked about the status of the verification principle itself, which is neither
          analytic nor verifiable; Ayer replied that it is a proposed definition of meaning. Quine&rsquo;s holism added a
          deeper doubt: single sentences do not face experience alone, so there may be no sentence-by-sentence test to state.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "two",
      rung: "check",
      prompt: <p>According to Ayer, which sentences are literally meaningful?</p>,
      answer: {
        kind: "choice",
        options: [
          "Those that are analytic or empirically verifiable.",
          "Those that are grammatical.",
          "Those that someone believes.",
          "Those about physical objects only.",
        ],
        correct: [0],
      },
    },
    {
      key: "emot",
      rung: "check",
      prompt: <p>What did Ayer say about &ldquo;stealing is wrong&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "It states no fact but expresses disapproval of stealing.",
          "It is analytic.",
          "It is verified by observing thefts.",
          "It is a report of the speaker’s feelings, true or false.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose &ldquo;the Nothing itself nothings&rdquo; and add the auxiliary premise. What does Ayer&rsquo;s 1936 criterion say?</p>,
      answer: {
        kind: "choice",
        options: ["It is meaningful", "It is meaningless", "It is analytic", "It is false"],
        correct: [0],
      },
    },
    {
      key: "strong",
      rung: "apply",
      prompt: <p>Why does strong verifiability rule out &ldquo;all copper conducts electricity&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "No finite set of observations conclusively establishes a claim about all copper.",
          "It is analytic.",
          "Copper cannot be observed.",
          "It is false.",
        ],
        correct: [0],
      },
    },
    {
      key: "church",
      rung: "apply",
      prompt: <p>What did Church show about Ayer&rsquo;s revised criterion of 1946?</p>,
      answer: {
        kind: "choice",
        options: [
          "Given three independent observation sentences, it counts every sentence or its negation as meaningful.",
          "It excludes all scientific laws.",
          "It is analytic.",
          "It works for every language.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a criterion of meaning be stated that excludes metaphysics but keeps science? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains a difficulty, such as strong verifiability excluding laws or weak verifiability admitting everything.",
          "Considers a possible repair or a reason to think no repair will work, such as holism.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If &ldquo;stealing is wrong&rdquo; only expresses disapproval, how can &ldquo;if stealing is wrong, then getting your brother to steal is wrong&rdquo; be used in valid reasoning?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that in the conditional the moral sentence is not used to express disapproval, yet seems to mean the same.",
          "Explains that modus ponens seems valid here, which is hard to explain if moral sentences have no truth conditions; this is the Frege-Geach problem.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the later Wittgenstein: his rejection of the Tractatus, meaning as use, language games and family resemblance.
    </p>
  ),
};
