import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { GodelDecodeViz } from "@/components/viz/GodelDecodeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.4.1",
  minutes: 80,
  links: {
    revisits: ["m20.1.1", "m20.2.3", "m20.3.2"],
    foreshadows: ["m20.4.2", "m20.4.3", "m20.5.2"],
  },

  puzzle: (
    <>
      <p>
        Arithmetic talks about numbers: sums, products, primes. Proofs are strings of symbols. How could a sentence about
        numbers say anything about proofs, let alone about itself?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a number, or type one. The visualisation factors it and checks whether it codes a string of symbols.
      </p>
      <GodelDecodeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Gödel numbering">
        <p>
          Give each symbol of the language of arithmetic a positive code. A string <M>{"s_1 s_2 \\ldots s_k"}</M> gets the
          number <M>{"2^{\\#s_1} 3^{\\#s_2} \\cdots p_k^{\\#s_k}"}</M>, where <M>{"p_k"}</M> is the k-th prime. A sequence of
          strings, such as a proof, is coded the same way from the codes of its members. Write ⌜φ⌝ for the code of φ. By
          unique factorisation, different strings get different numbers, and the string can be recovered from its number.
        </p>
      </Definition>

      <Theorem title="syntax is primitive recursive">
        <p>
          The following relations on numbers are primitive recursive: n codes a term; n codes a formula; n codes a sentence;
          n codes an axiom of Peano arithmetic; n codes a derivation whose last line is coded by k. Each is decided by
          factoring and checking finitely many conditions, with bounded loops.
        </p>
      </Theorem>

      <Example title="the proof predicate">
        <p>
          Let Prf(n, k) say that n codes a derivation of the formula coded by k. It is primitive recursive, because checking
          a derivation is mechanical: every line is an axiom or follows from earlier lines by a rule. The provability
          predicate is then Prov(k) ⇔ ∃n Prf(n, k). The quantifier is unbounded: to search for a proof you may never stop.
        </p>
      </Example>

      <Remark title="why it matters">
        <p>
          Gödel&rsquo;s 1931 paper spends most of its length on this coding. Once it is in place, a statement about
          provability is literally a statement about numbers, and so a sentence of arithmetic can be about the provability
          of sentences of arithmetic, including itself. The particular coding does not matter; any reasonable effective
          coding works.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "why",
      rung: "check",
      prompt: <p>Why can a string be recovered from its Gödel number?</p>,
      answer: {
        kind: "choice",
        options: ["By unique prime factorisation", "Because numbers are finite", "Because every number codes a string", "By induction on formulas"],
        correct: [0],
      },
    },
    {
      key: "prov",
      rung: "check",
      prompt: <p>Which is not primitive recursive in general, because it involves an unbounded search?</p>,
      answer: { kind: "choice", options: ["Prov(k): some n codes a proof of k", "Prf(n, k)", "n codes a formula", "n codes an axiom"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>Using the visualisation&rsquo;s symbol codes, what is the code of the one-symbol string 0?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "s0",
      rung: "apply",
      prompt: <p>With the same codes (0 is 1, S is 2), what is the code of S0?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "gap",
      rung: "apply",
      prompt: <p>Why is 10 not the code of any string?</p>,
      answer: {
        kind: "choice",
        options: ["10 = 2 · 5 skips the prime 3, so the sequence has a gap", "10 is even", "10 has too many digits", "10 is prime"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Explain why &ldquo;n codes a derivation of the formula coded by k&rdquo; is decidable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Decodes n into a finite sequence of formula codes by factoring.",
          "Checks each line is an axiom or follows from earlier lines by a rule, each a finite mechanical check.",
          "Checks the last line is coded by k, and concludes the whole check terminates.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does it matter which coding is used? What property must a coding have for Gödel&rsquo;s argument?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the specific numbers are arbitrary.",
          "Says the coding must be effective, so that syntactic operations become computable functions of codes.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Coding turns syntax into arithmetic, but a theory must still be able to prove facts about these codes. The weak
        theory Q, with a handful of axioms about successor, addition and multiplication, already proves every true instance
        of a computable relation, and refutes every false one.
      </p>
      <p>
        Next, representability: what it means for a theory to capture a relation, and why every computable relation is
        captured by Q. It is the bridge from coding to incompleteness.
      </p>
    </>
  ),
};
