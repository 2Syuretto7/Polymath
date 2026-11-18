import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CountingQuantViz } from "@/components/viz/CountingQuantViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.6.3",
  minutes: 85,
  links: {
    revisits: ["p22.6.2", "p22.3.2", "p2.4.3"],
    foreshadows: ["p22.6.4", "p22.6.5", "p17.5.2"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;Sherlock Holmes lives at 221B Baker Street&rsquo; is false, since there was no Holmes, yet it is correct to
        say within the stories. Could &lsquo;there is a prime between 10 and 12&rsquo; be like that: correct within the story
        of arithmetic, but literally false because there are no numbers? If so, why would such a story be so useful in
        physics?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Say &lsquo;there are exactly n apples&rsquo; without mentioning numbers, and watch the cost grow.</p>
      <CountingQuantViz />
    </>
  ),

  theory: (
    <>
      <Definition title="fictionalism">
        <p>
          <strong>Mathematical fictionalism</strong> accepts the face-value semantics of mathematics, so &lsquo;there is a
          prime between 10 and 12&rsquo; asserts that a number exists, but denies that any numbers exist. So such sentences
          are false, though true &lsquo;according to the story&rsquo; of standard mathematics. It meets both of
          Benacerraf&rsquo;s conditions, at the price of denying mathematical truth.
        </p>
      </Definition>

      <Example title="science without numbers">
        <p>
          To answer the indispensability argument, Hartry Field, in <em>Science Without Numbers</em> (1980), reformulated
          Newtonian gravitational theory without quantifying over numbers. Its objects are space-time points and regions; its
          predicates are comparative, such as betweenness and congruence, and comparisons of gravitational potential. As
          Hilbert did for geometry, Field proved a representation theorem: any model of the nominalistic theory can be
          coordinatised by real numbers, so the usual numerical physics follows.
        </p>
      </Example>

      <Definition title="conservativeness">
        <p>
          Why use mathematics at all? Field&rsquo;s answer: mathematics is <strong>conservative</strong>. Adding it to a
          nominalistic theory yields no new nominalistic conclusions, so it never takes us from truths about the physical
          world to falsehoods about it. It is not true, but it is safe, and it shortens reasoning enormously, as the
          visualisation shows for counting. The theme echoes Hilbert&rsquo;s hope that ideal mathematics is conservative over
          real mathematics.
        </p>
      </Definition>

      <Remark title="objections">
        <p>
          Field&rsquo;s space-time points are themselves abstract-seeming, and his theory needs second-order logic or a modal
          notion of consistency for conservativeness, which looks mathematical. Shapiro showed that with first-order logic
          conservativeness and the representation theorem pull apart. And no one has done for quantum mechanics, whose state
          spaces are infinite-dimensional, what Field did for Newton. Other fictionalists, such as Mary Leng and Stephen
          Yablo, give up on nominalising physics and argue instead that indispensable mathematics need not be believed.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does mathematical fictionalism say about &lsquo;there is a prime between 10 and 12&rsquo;?</p>,
      answer: { kind: "choice", options: ["It is literally false, since there are no numbers, but true according to the story of mathematics", "It is literally true", "It is meaningless", "It is true by convention"], correct: [0] },
    },
    {
      key: "cons",
      rung: "check",
      prompt: <p>What does it mean for mathematics to be conservative over a nominalistic theory?</p>,
      answer: { kind: "choice", options: ["Adding it yields no new nominalistic conclusions", "It is old-fashioned", "It proves everything the theory proves and more about the physical world", "It cannot be applied"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many variables does the nominalistic sentence for &lsquo;exactly 3 apples&rsquo; use?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "field",
      rung: "apply",
      prompt: <p>Which premise of the indispensability argument does Field reject?</p>,
      answer: { kind: "choice", options: ["That mathematics is indispensable to science", "That we should believe our best theories", "That science is the arbiter of what exists", "That numbers are abstract"], correct: [0] },
    },
    {
      key: "quantum",
      rung: "apply",
      prompt: <p>Which objection presses on the scope of Field&rsquo;s programme?</p>,
      answer: { kind: "choice", options: ["No one has nominalised quantum mechanics as Field did Newtonian gravitation", "Newton was wrong about gravity", "Fiction is always false", "Space-time has no points"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>If mathematics is conservative but false, does its usefulness in science need any further explanation? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Field’s answer: mathematics is a safe shortcut, as conservativeness guarantees.",
          "Considers whether this explains why mathematics is so efficient and fruitful, not just safe, or whether conservativeness itself is mathematical.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is &lsquo;2 + 2 = 4&rsquo; really false? What would a fictionalist say to someone who finds that absurd?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the fictionalist position on the sentence.",
          "Gives a response, such as that what is obviously right is the logical truth that two things and two more make four, which needs no numbers.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Benacerraf posed another puzzle in 1965: the number 2 can be identified with different sets in different set
        theories, and nothing in arithmetic decides which. Perhaps numbers are not objects at all, only positions in a
        structure.
      </p>
      <p>
        Next, structuralism: &lsquo;What numbers could not be&rsquo;, ante rem and in re structuralism, modal
        structuralism, and the identity of indiscernible positions.
      </p>
    </>
  ),
};
