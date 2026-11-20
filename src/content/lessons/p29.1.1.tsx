import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BetaReduceViz } from "@/components/viz/BetaReduceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p29.1.1",
  minutes: 90,
  links: {
    revisits: ["p26.1.1", "p15.3.2", "p15.1.1"],
    foreshadows: ["p29.1.2", "p29.1.3", "p29.4.1"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;The square of x&rsquo; describes a number if x is fixed, and a function if x is left open. Mathematics
        usually leaves this distinction to context. Frege thought the meaning of a predicate is an incomplete,
        function-like thing. Is there a precise language in which functions are named as easily as numbers?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a term and reduce it one step at a time.</p>
      <BetaReduceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="λ-terms">
        <p>
          Alonzo Church&rsquo;s <strong>λ-calculus</strong> (1932–36) has three kinds of term: variables x; abstractions
          λx.M, the function sending x to M; and applications M N, applying M to N. So λx.x × x names the squaring function,
          and (λx.x × x) 3 is its value at 3. A variable is <strong>bound</strong> if it lies in the scope of a λ for it,
          and <strong>free</strong> otherwise.
        </p>
      </Definition>

      <Definition title="conversion">
        <p>
          <strong>β-reduction</strong> rewrites (λx.M) N to M with N substituted for the free occurrences of x.{" "}
          <strong>α-conversion</strong> renames bound variables, which changes nothing, and is needed so that substitution
          does not capture a free variable. A term with no redex left is in <strong>normal form</strong>.
        </p>
      </Definition>

      <Example title="numbers and recursion">
        <p>
          Church represented the number n as the function that applies its argument n times, λf.λx.f(…f(x)), and defined
          addition and multiplication as terms. Some terms, such as Ω = (λx.x x)(λx.x x), have no normal form. Fixed-point
          combinators such as Y let a term refer to itself, which gives recursion.
        </p>
      </Example>

      <Remark title="computation and meaning">
        <p>
          The Church–Rosser theorem says a term has at most one normal form, so the order of reduction does not affect the
          answer. Church and Turing showed that the λ-definable functions are exactly the Turing-computable ones, and Church
          proposed that these are all the effectively calculable functions. For semantics, the λ-notation gives a way to
          name the meanings of predicates, relative clauses and quantifiers, as the next lesson shows.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "beta",
      rung: "check",
      prompt: <p>What does β-reduction do?</p>,
      answer: { kind: "choice", options: ["Replaces (λx.M) N by M with N substituted for x", "Renames bound variables", "Adds a new λ", "Deletes free variables"], correct: [0] },
    },
    {
      key: "cr",
      rung: "check",
      prompt: <p>What does the Church–Rosser theorem guarantee?</p>,
      answer: { kind: "choice", options: ["A term has at most one normal form", "Every term has a normal form", "Reduction always terminates", "Every function is computable"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many β-steps does plus 1 2 take to reach normal form?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "k",
      rung: "apply",
      prompt: <p>What is the normal form of (λx.λy.x) a b?</p>,
      answer: { kind: "choice", options: ["a", "b", "λy.a", "a b"], correct: [0] },
    },
    {
      key: "free",
      rung: "apply",
      prompt: <p>In λx.x y, which variable is free?</p>,
      answer: { kind: "choice", options: ["y", "x", "Both", "Neither"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the λ-calculus capture what it is for a function to be computable? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Church–Turing thesis and the equivalence of λ-definability and Turing computability.",
          "Considers whether a mathematical definition can capture an informal notion, or what evidence supports the thesis.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why must substitution avoid capturing free variables? Use (λx.λy.x y) y as an example.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that naive substitution gives λy.y y, where the free y has become bound.",
          "Explains that this changes the meaning: the result should apply the outside y, not the bound one.",
          "Gives the correct result after renaming, such as λz.y z. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Untyped terms can be applied to anything, even themselves, which is how Ω loops for ever. Adding types restores
        order, and gives each word of a natural language a kind of meaning that fits with the others.
      </p>
      <p>Next, type theory for meaning.</p>
    </>
  ),
};
