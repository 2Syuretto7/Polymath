import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BenacerrafViz } from "@/components/viz/BenacerrafViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.6.1",
  minutes: 85,
  links: {
    revisits: ["p22.5.3", "p22.1.1", "p17.5.2"],
    foreshadows: ["p22.6.2", "p22.6.3", "p22.6.4"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;There are at least three large cities older than New York&rsquo; and &lsquo;there are at least three perfect
        numbers larger than 17&rsquo; look grammatically alike, and the first is true because of certain cities. If the
        second is true because of certain numbers, how could anyone know it? Nobody has ever bumped into a number.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test each philosophy of mathematics against two requirements, and see which one it gives up.</p>
      <BenacerrafViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the dilemma">
        <p>
          In &lsquo;Mathematical truth&rsquo; (1973), Paul Benacerraf set out two conditions. First, a theory of mathematical
          truth should be <strong>homogeneous</strong> with the semantics of the rest of language: on the best account, Tarski&rsquo;s,
          a sentence &lsquo;there are three Fs&rsquo; is true when three objects satisfy F. Second, our{" "}
          <strong>knowledge</strong> of mathematical truths must be explained by a theory of knowledge that works for other
          knowledge too. The trouble is that each condition is met by views that fail the other.
        </p>
      </Definition>

      <Example title="the epistemological horn">
        <p>
          Benacerraf assumed a <strong>causal theory of knowledge</strong>, then popular: to know that p, one must be suitably
          causally connected with the facts that make p true. Platonism takes the homogeneous semantics at face value, so
          mathematical sentences are about abstract objects outside space and time. Such objects cannot cause anything, so on
          the causal theory we could not know about them.
        </p>
      </Example>

      <Example title="the semantic horn">
        <p>
          &lsquo;Combinatorial&rsquo; views, such as formalism or conventionalism, tie truth to provability or agreement, which
          we can plainly know about. But then &lsquo;there are three perfect numbers larger than 17&rsquo; is not true for the
          same reason as the sentence about cities. The semantics loses its uniformity, and with it the evident logical form of
          mathematical language.
        </p>
      </Example>

      <Remark title="after the causal theory">
        <p>
          The causal theory of knowledge has few defenders now: it cannot account for knowledge of generalisations or of the
          future either. Hartry Field reframed the challenge without it: the platonist must <strong>explain the
          reliability</strong> of mathematicians&rsquo; beliefs, the striking match between what they believe and what is true
          in a realm they never interact with. If no explanation is even possible in principle, belief in that realm is
          undermined. This version of the problem is still widely taken to be the deepest objection to platonism.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "two",
      rung: "check",
      prompt: <p>Which two requirements does Benacerraf&rsquo;s dilemma set against each other?</p>,
      answer: { kind: "choice", options: ["A uniform semantics for mathematical and other language, and a plausible account of mathematical knowledge", "Consistency and completeness", "Proof and intuition", "Logic and set theory"], correct: [0] },
    },
    {
      key: "causal",
      rung: "check",
      prompt: <p>Why does the causal theory of knowledge cause trouble for platonism?</p>,
      answer: { kind: "choice", options: ["Abstract objects cannot stand in causal relations with knowers", "Numbers cause too many effects", "Causation is circular", "Platonists deny causation"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which view meets the semantic requirement but not the epistemological one?</p>,
      answer: { kind: "choice", options: ["Platonism", "Formalism", "Fictionalism", "None"], correct: [0] },
    },
    {
      key: "formal",
      rung: "apply",
      prompt: <p>What does formalism give up, according to Benacerraf?</p>,
      answer: { kind: "choice", options: ["A semantics for mathematical sentences uniform with the rest of language", "Any account of knowledge", "The use of proofs", "Logic"], correct: [0] },
    },
    {
      key: "field",
      rung: "apply",
      prompt: <p>How did Field restate the challenge without the causal theory?</p>,
      answer: { kind: "choice", options: ["The platonist must explain why mathematicians’ beliefs reliably match the mathematical facts", "The platonist must show numbers are physical", "The platonist must prove consistency", "The platonist must abandon set theory"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Benacerraf&rsquo;s challenge survive the rejection of the causal theory of knowledge? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the original challenge and its reliance on the causal theory.",
          "Considers Field’s reliability version, or a reply such as that mathematical truths are necessary and need no explanation of reliability.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could evolution explain why our mathematical beliefs are reliable, if numbers are abstract objects?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that evolution could select for useful beliefs about counting and quantity.",
          "Considers whether usefulness explains truth about abstract objects, or only about physical regularities.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The platonist has a powerful counter-argument. Our best scientific theories quantify over numbers, functions and
        sets. If we believe the theories, as the evidence says we should, we seem committed to what they say exists.
      </p>
      <p>
        Next, the Quine-Putnam indispensability argument: naturalism, confirmational holism, the objections of Maddy and
        Sober, and the enhanced argument from mathematical explanation.
      </p>
    </>
  ),
};
