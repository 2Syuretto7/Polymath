import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { GoodsteinViz } from "@/components/viz/GoodsteinViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.3.2",
  minutes: 85,
  links: {
    revisits: ["p22.3.1", "p17.3.1", "m20.4.3"],
    foreshadows: ["p22.4.1", "p22.5.2", "p22.5.3"],
  },

  puzzle: (
    <>
      <p>
        Hilbert wanted to prove, by the safest possible methods, that mathematics is consistent. Gödel showed that a
        consistent system cannot even prove its own consistency. Is that the end of the story, or can the programme be
        rescued by changing what counts as safe, or how much we ask for?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Run a Goodstein sequence, and watch the values rise while the ordinals fall.</p>
      <GoodsteinViz />
    </>
  ),

  theory: (
    <>
      <Definition title="why the original programme fails">
        <p>
          By the second incompleteness theorem, a consistent, effectively axiomatised theory containing enough arithmetic
          cannot prove its own consistency. Finitary reasoning, on any reasonable account, can be formalised within Peano
          arithmetic; Tait identifies it with primitive recursive arithmetic. So finitary methods cannot prove the
          consistency of arithmetic, let alone of set theory. Von Neumann saw this in November 1930, before Gödel published
          the second theorem.
        </p>
      </Definition>

      <Example title="Gentzen's proof">
        <p>
          In 1936 Gerhard Gentzen proved the consistency of Peano arithmetic using finitary methods plus one more principle:
          transfinite induction up to the ordinal ε₀, for a simple, primitive recursive ordering. Each proof is assigned an
          ordinal below ε₀, and a procedure turns any proof of a contradiction into one with a smaller ordinal, forever, which
          is impossible. Is the extra principle more secure than arithmetic itself? Opinions differ, but Gentzen showed
          exactly what it takes.
        </p>
      </Example>

      <Definition title="partial realisations">
        <p>
          <strong>Reverse mathematics</strong>, developed by Harvey Friedman and Stephen Simpson, asks which axioms are needed
          for which theorems. Much ordinary analysis can be proved in a weak system, WKL₀, and Friedman showed that WKL₀
          proves no more real, finitary statements of a certain kind than primitive recursive arithmetic. Simpson calls this a
          partial realisation of Hilbert&rsquo;s programme: a large part of ideal mathematics is conservative over finitism.
        </p>
      </Definition>

      <Remark title="Gödel's own view">
        <p>
          Gödel drew platonist conclusions: the axioms of set theory &lsquo;force themselves upon us as being true&rsquo;, by a
          kind of perception of mathematical objects, and undecided questions such as the continuum hypothesis have
          answers that new axioms might settle. Incompleteness shows that no fixed formal system captures all of mathematical
          truth, not that truth is beyond us.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "second",
      rung: "check",
      prompt: <p>Which result undermines the original form of Hilbert&rsquo;s programme?</p>,
      answer: { kind: "choice", options: ["The second incompleteness theorem", "The completeness theorem", "Russell’s paradox", "The Löwenheim-Skolem theorem"], correct: [0] },
    },
    {
      key: "gentzen",
      rung: "check",
      prompt: <p>What did Gentzen add to finitary methods to prove the consistency of arithmetic?</p>,
      answer: { kind: "choice", options: ["Transfinite induction up to ε₀", "The axiom of choice", "The continuum hypothesis", "Basic Law V"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, starting at 3, how many steps does the sequence take to reach 0?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "goodstein",
      rung: "apply",
      prompt: <p>What is the status of Goodstein&rsquo;s theorem, that every Goodstein sequence reaches 0?</p>,
      answer: { kind: "choice", options: ["True, but not provable in Peano arithmetic", "False", "Provable in primitive recursive arithmetic", "Undecided"], correct: [0] },
    },
    {
      key: "reverse",
      rung: "apply",
      prompt: <p>Why is reverse mathematics called a partial realisation of Hilbert&rsquo;s programme?</p>,
      answer: { kind: "choice", options: ["Much ordinary mathematics lives in a system conservative over finitary arithmetic for real statements", "It proves ZFC consistent", "It abolishes infinity", "It refutes Gödel’s theorems"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Did Gödel&rsquo;s theorems refute Hilbert&rsquo;s programme, or only one version of it? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why finitary methods cannot prove the consistency of arithmetic, given the second theorem.",
          "Considers a modified programme, such as Gentzen’s or reverse mathematics.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Gentzen proved arithmetic consistent using induction up to ε₀, which arithmetic cannot prove. Does that make his proof useless as a justification?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the worry: the principle used is in one sense stronger than what it justifies.",
          "Considers a reply, such as that the principle is of a different, more intuitive kind, or that the proof is informative regardless.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Hilbert&rsquo;s great opponent was L. E. J. Brouwer, who rejected the law of excluded middle for infinite
        collections and rebuilt mathematics on mental constructions in time.
      </p>
      <p>
        Next, Brouwer&rsquo;s intuitionism: mathematics as the activity of the creating subject, choice sequences, the
        rejection of excluded middle, and the continuity of all functions on the reals.
      </p>
    </>
  ),
};
