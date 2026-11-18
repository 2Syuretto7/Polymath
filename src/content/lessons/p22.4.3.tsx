import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { HarmonyViz } from "@/components/viz/HarmonyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.4.3",
  minutes: 90,
  links: {
    revisits: ["p22.4.2", "p15.3.1", "p17.4.2"],
    foreshadows: ["p22.5.3", "p22.6.1", "p22.6.4"],
  },

  puzzle: (
    <>
      <p>
        You understand &lsquo;Goldbach&rsquo;s conjecture is true&rsquo;. But what does your understanding consist in? You
        cannot check every even number, and nothing you do shows that you grasp a fact beyond all checking. If understanding
        must show up somewhere in what you can do, does the classical idea of truth, independent of proof, make sense at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the rules for ∧, ∨ and a rogue connective, and see which rules can fix a meaning.</p>
      <HarmonyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the meaning-theoretic argument">
        <p>
          Michael Dummett&rsquo;s &lsquo;The philosophical basis of intuitionistic logic&rsquo; (1973) argued for
          intuitionism without Brouwer&rsquo;s mental constructions. With the later Wittgenstein, he held that meaning is
          use: the meaning of a mathematical statement must be fully shown in how competent speakers use it. Brouwer started
          from the mind; Dummett started from language.
        </p>
      </Definition>

      <Example title="manifestation and acquisition">
        <p>
          The <strong>manifestation argument</strong>: if understanding a statement were grasping its truth conditions, and
          these could hold or fail beyond all possible recognition, then nothing a speaker does could show that grasp. The{" "}
          <strong>acquisition argument</strong>: we learned our language from observable use, so we could not have learned
          to attach to it conditions that transcend use. Either way, meaning must be given by what would justify an
          assertion, by proof conditions, as in Heyting. And with that, excluded middle loses its warrant.
        </p>
      </Example>

      <Definition title="anti-realism">
        <p>
          Dummett called the view that statements are true or false independently of our means of knowing{" "}
          <strong>realism</strong>, and argued that disputes about realism, in mathematics, about the past or about other
          minds, are at bottom disputes about which logic is correct. The <strong>anti-realist</strong> ties truth to what
          could in principle be verified, and so accepts only intuitionistic logic.
        </p>
      </Definition>

      <Example title="harmony and tonk">
        <p>
          If rules of use fix meaning, can any rules do? Arthur Prior&rsquo;s tonk (1960) says no: its introduction rule is
          that of &lsquo;or&rsquo; and its elimination rule that of &lsquo;and&rsquo;, and with it anything follows from
          anything. Dummett and Dag Prawitz required <strong>harmony</strong>: elimination must give back exactly what
          introduction demanded. The intuitionistic rules are in harmony; classical negation, they argued, is not, since
          double negation elimination draws out more than the introduction of negation put in.
        </p>
      </Example>

      <Remark title="realist replies">
        <p>
          Realists reply in several ways. Our use of statements may manifest a grasp of truth conditions after all, for
          example in how we treat a proof as discovering what was already so. The manifestation demand, pressed hard, might
          also undercut talk of the past and of other minds, which looks too high a price. And some, like Quine, deny that
          meaning is so tidily separable from belief that logic could be read off it. The debate remains open.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "basis",
      rung: "check",
      prompt: <p>From what does Dummett argue for intuitionistic logic?</p>,
      answer: { kind: "choice", options: ["From a theory of meaning: meaning is use", "From the intuition of time", "From the paradoxes of set theory", "From the physics of computation"], correct: [0] },
    },
    {
      key: "manifest",
      rung: "check",
      prompt: <p>What does the manifestation argument claim?</p>,
      answer: { kind: "choice", options: ["A grasp of recognition-transcendent truth conditions could never show up in use", "Every truth can be manifested in a picture", "Proofs must be written down", "Meaning is private"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many steps does the tonk derivation take, counting the premise?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "tonk",
      rung: "apply",
      prompt: <p>Why does tonk fail to have a coherent meaning?</p>,
      answer: { kind: "choice", options: ["Its elimination rule draws out more than its introduction rule put in", "It has no introduction rule", "It is too short", "It applies only to arithmetic"], correct: [0] },
    },
    {
      key: "real",
      rung: "apply",
      prompt: <p>On Dummett&rsquo;s account, what is the realist&rsquo;s core commitment?</p>,
      answer: { kind: "choice", options: ["Statements are true or false independently of our means of knowing", "Only physical things exist", "Mathematics is a game with symbols", "Meaning is use"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the manifestation argument succeed against the realist about mathematics? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument: understanding must be shown in use, and recognition-transcendent truth conditions cannot be.",
          "Considers a realist reply, such as that our practice already treats undecided statements as having a definite answer.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If Dummett is right about mathematics, must the same argument make us anti-realists about the past?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that many statements about the past can no longer be verified.",
          "Considers whether the argument applies equally, or whether mathematics is special.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Intuitionists asked mathematics to change its logic. Most mathematicians kept classical logic and set theory instead,
        but that raises its own question: what are sets, and why should the axioms of set theory be believed?
      </p>
      <p>
        Next, the iterative conception of set: sets formed in stages, each from those before, the cumulative hierarchy,
        and how this picture motivates the axioms of Zermelo-Fraenkel set theory and blocks Russell&rsquo;s paradox.
      </p>
    </>
  ),
};
