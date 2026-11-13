import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SpeechActViz } from "@/components/viz/SpeechActViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p15.4.2",
  minutes: 75,
  links: {
    revisits: ["p15.4.1", "p15.3.3", "p15.3.2"],
    foreshadows: ["p15.4.3", "p33.3.3", "p18.5.3"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;Can you pass the salt?&rdquo; is, on its face, a question about your abilities. Nobody answers &ldquo;yes&rdquo;
        and leaves the salt where it is. Austin showed that utterances are acts; John Searle set out to say precisely what makes
        an utterance count as a promise, a request or a statement, and how one act can be done by means of another.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a speech act, make one of its conditions fail, and see what goes wrong.</p>
      <SpeechActViz />
    </>
  ),

  theory: (
    <>
      <Definition title="constitutive rules">
        <p>
          In <em>Speech Acts</em> (1969), Searle distinguished <strong>regulative</strong> rules, which govern activities that
          exist independently, like rules of etiquette, from <strong>constitutive</strong> rules, which create the activity
          itself, like the rules of chess. Their form is &ldquo;X counts as Y in context C&rdquo;. Speaking a language is
          performing acts according to constitutive rules: uttering certain words counts as making a promise.
        </p>
      </Definition>

      <Example title="the conditions for promising">
        <p>
          Searle analysed a promise by four kinds of condition. The <strong>propositional content</strong> must be a future act
          of the speaker. The <strong>preparatory</strong> conditions require that the hearer would prefer the act done and that
          it would not happen anyway. The <strong>sincerity</strong> condition is that the speaker intends to do it. The{" "}
          <strong>essential</strong> condition is that the utterance counts as undertaking an obligation to do it.
        </p>
      </Example>

      <Definition title="five kinds of illocutionary act">
        <p>
          Searle later classified illocutionary acts by their point. <strong>Assertives</strong> commit the speaker to the truth
          of something; <strong>directives</strong> try to get the hearer to act; <strong>commissives</strong> commit the speaker
          to act; <strong>expressives</strong> express a feeling about something, as in thanking; and{" "}
          <strong>declarations</strong> change the world by saying so, as in naming or firing.
        </p>
      </Definition>

      <Remark title="indirect speech acts">
        <p>
          In an <strong>indirect speech act</strong>, one illocution is performed by means of another. &ldquo;Can you pass the
          salt?&rdquo; asks about a preparatory condition of requesting, the hearer&rsquo;s ability, and so serves as a polite
          request. Searle explained this through the shared knowledge of the conditions, together with the kind of reasoning
          Grice described.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "constitutive",
      rung: "check",
      prompt: <p>What is a constitutive rule?</p>,
      answer: {
        kind: "choice",
        options: [
          "A rule that creates the activity it governs, of the form “X counts as Y in context C”.",
          "A rule of politeness.",
          "A law of nature.",
          "A rule of grammar about word order.",
        ],
        correct: [0],
      },
    },
    {
      key: "essential",
      rung: "check",
      prompt: <p>What is the essential condition of a promise?</p>,
      answer: {
        kind: "choice",
        options: ["That the utterance counts as undertaking an obligation", "That the speaker intends to keep it", "That the hearer wants it", "That it is about the future"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, make the sincerity condition of the promise fail. What results?</p>,
      answer: {
        kind: "choice",
        options: ["A promise, but an insincere one", "No promise at all", "A threat", "A request"],
        correct: [0],
      },
    },
    {
      key: "kind",
      rung: "apply",
      prompt: <p>&ldquo;I hereby declare the meeting open&rdquo;, said by the chair, belongs to which of Searle&rsquo;s classes?</p>,
      answer: { kind: "choice", options: ["Declarations", "Assertives", "Expressives", "Commissives"], correct: [0] },
    },
    {
      key: "salt",
      rung: "apply",
      prompt: <p>Why does &ldquo;Can you pass the salt?&rdquo; work as a request?</p>,
      answer: {
        kind: "choice",
        options: [
          "It asks about a preparatory condition of requesting, the hearer’s ability, which both know is satisfied.",
          "It is literally a request.",
          "Questions are always requests.",
          "Salt is always wanted.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is an insincere promise still a promise? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Searle’s conditions and the role of the sincerity condition.",
          "Considers a reason on each side, such as that the speaker is still bound, or that the act is defective.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Searle argued that from &ldquo;Jones said &lsquo;I promise to pay you ₹500&rsquo;&rdquo; one can derive &ldquo;Jones ought to pay ₹500&rdquo;. Does this get an ought from an is?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets out the steps of the derivation through the constitutive rule of promising.",
          "Considers the objection that accepting the institution already involves an evaluative commitment.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Searle's distinction between constitutive and regulative rules, his four conditions on promising, his five kinds of illocutionary act, and how indirect speech acts work.",

  glimpse: (
    <p>
      The next lesson presents Grice&rsquo;s account of how speakers mean more than they say. Searle went on to apply speech act
      theory to intentionality and to social reality, and later lessons return to Austin and ordinary language philosophy.
    </p>
  ),
};
