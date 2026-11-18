import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CumulativeViz } from "@/components/viz/CumulativeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.5.1",
  minutes: 85,
  links: {
    revisits: ["p22.4.3", "m20.6.1", "p22.2.2"],
    foreshadows: ["p22.5.2", "p22.5.3", "p22.6.4"],
  },

  puzzle: (
    <>
      <p>
        Frege assumed that every condition defines a set, and Russell&rsquo;s paradox wrecked his system. Zermelo then wrote
        down axioms that avoid the paradox. But a list of axioms chosen because they avoid contradiction looks like a patch.
        Is there a picture of what sets are, from which the axioms follow and the paradox never arises?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Build sets in stages, each from those already formed, and watch the stages grow.</p>
      <CumulativeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the iterative conception">
        <p>
          Sets are formed in <strong>stages</strong>. At stage 0 there are no sets; at each later stage, every collection of
          sets formed at earlier stages is formed as a set; and the stages go on through the transfinite ordinals, with no last
          one. Every set is formed at some stage. The result is the <strong>cumulative hierarchy</strong>, the stages V₀, V₁,
          V₂, …, V<sub>ω</sub>, …, whose union is the universe V. Zermelo described it in 1930; George Boolos made it the
          standard account in &lsquo;The iterative conception of set&rsquo; (1971).
        </p>
      </Definition>

      <Example title="how the paradox is blocked">
        <p>
          A set is formed only after all of its members, so no set is a member of itself. Then Russell&rsquo;s set of all
          non-self-membered sets would be the set of all sets. It could be formed only at a stage after every stage, and there
          is none. Naive comprehension is replaced by <strong>separation</strong>: from a set already formed, one may carve out
          the members satisfying a condition, since they were all formed earlier.
        </p>
      </Example>

      <Example title="which axioms it justifies">
        <p>
          Boolos showed that a simple &lsquo;stage theory&rsquo; yields extensionality, separation, pairing, union, power set,
          foundation, and, given stages enough, infinity. It does not obviously yield <strong>replacement</strong>, which says
          that the image of a set under a definable operation is a set: why should the stages go on that far? Boolos concluded
          that ZF rests on more than one idea, and replacement is often defended by reflection or by its consequences instead.
        </p>
      </Example>

      <Remark title="rivals and doubts">
        <p>
          The rival &lsquo;limitation of size&rsquo; conception, from Cantor and von Neumann, says that a collection is a set
          unless it is as large as the universe; it justifies replacement but not power set. Some doubt that talk of stages and
          formation, a temporal metaphor, can be taken literally: nobody forms sets. Others reply that the metaphor only encodes
          a well-founded order of dependence, which is what matters.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "stages",
      rung: "check",
      prompt: <p>On the iterative conception, what is formed at each stage?</p>,
      answer: { kind: "choice", options: ["Every collection of sets formed at earlier stages", "Every collection definable by a condition", "Only finite sets", "Only the empty set"], correct: [0] },
    },
    {
      key: "russell",
      rung: "check",
      prompt: <p>Why is there no Russell set on the iterative conception?</p>,
      answer: { kind: "choice", options: ["It would have to be formed after every stage, and there is no such stage", "Because it is empty", "Because it contains itself", "Because separation forbids all conditions"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many sets are in V₄?</p>,
      answer: { kind: "numeric", value: 16 },
    },
    {
      key: "replace",
      rung: "apply",
      prompt: <p>Which axiom of ZF did Boolos find the iterative conception does not obviously justify?</p>,
      answer: { kind: "choice", options: ["Replacement", "Extensionality", "Power set", "Union"], correct: [0] },
    },
    {
      key: "size",
      rung: "apply",
      prompt: <p>The limitation of size conception justifies replacement. Which axiom does it fail to justify?</p>,
      answer: { kind: "choice", options: ["Power set", "Pairing", "Separation", "Replacement"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the iterative conception show that the axioms of set theory are true, or only that they are coherent? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how the conception yields most axioms and blocks the paradox.",
          "Considers whether a coherent picture is enough for truth, for example in light of the doubt about replacement or the metaphor of formation.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Nobody literally forms sets. Can the iterative conception do without its talk of stages and formation?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the temporal metaphor in the conception.",
          "Considers a reading without it, such as a well-founded order of dependence, or a modal reading.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The iterative picture says the stages go on and on, but not how far. Axioms asserting that they reach astonishingly
        high, large cardinals, decide questions that ZFC leaves open. Should we believe them?
      </p>
      <p>
        Next, new axioms: Gödel&rsquo;s programme, intrinsic and extrinsic justification, reflection, the large cardinal
        hierarchy, and Penelope Maddy&rsquo;s naturalism.
      </p>
    </>
  ),
};
