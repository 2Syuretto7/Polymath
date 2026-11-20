import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { InfinitesimalViz } from "@/components/viz/InfinitesimalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.5.2",
  minutes: 90,
  links: {
    revisits: ["m38.1.3", "m38.3.3", "m20.3.3"],
    foreshadows: ["m33.4.1", "m38.1.2", "m38.3.1"],
  },

  puzzle: (
    <>
      <p>
        Leibniz computed derivatives with infinitely small quantities dx, dividing by them as if they were non-zero and
        then discarding them as if they were zero. Berkeley mocked them as &lsquo;the ghosts of departed quantities&rsquo;,
        and the nineteenth century replaced them with ε and δ. Could there be an ordered field that really contains
        infinitesimals and still behaves exactly like ℝ?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function and a point, and see the difference quotient as a hyperreal, term by term.</p>
      <InfinitesimalViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the hyperreals">
        <p>
          Fix a non-principal ultrafilter U on ℕ. The <strong>hyperreals</strong> <M>{"{}^*\\mathbb{R}"}</M> are sequences
          of reals, with two identified when they agree on a set in U, and operations and order defined termwise &lsquo;on
          a set in U&rsquo;. Each real r is the constant sequence. The sequence (1, 1/2, 1/3, …) is positive but less than
          every positive real: an <strong>infinitesimal</strong>. Its reciprocal (1, 2, 3, …) is larger than every real.
        </p>
      </Definition>

      <Theorem title="the transfer principle">
        <p>
          By Łoś&rsquo;s theorem, <M>{"{}^*\\mathbb{R}"}</M> is an elementary extension of ℝ in a language with a symbol
          for every real function and relation. So a first-order statement about ℝ in this language holds in ℝ exactly when
          its starred version holds in <M>{"{}^*\\mathbb{R}"}</M>. For instance, <M>{"{}^*\\mathbb{R}"}</M> is an ordered
          field, and <M>{"{}^*\\sin^2 x + {}^*\\cos^2 x = 1"}</M> for every hyperreal x.
        </p>
      </Theorem>

      <Definition title="standard part">
        <p>
          A hyperreal x is <strong>finite</strong> if |x| &lt; n for some natural number n. Every finite hyperreal is
          infinitely close to exactly one real, its <strong>standard part</strong> st(x), by completeness of ℝ. Then f is
          continuous at a real a exactly when <M>{"{}^*f(a + \\varepsilon) \\approx f(a)"}</M> for every infinitesimal ε,
          and <M>{"f'(a) = \\mathrm{st}\\big(({}^*f(a + \\varepsilon) - f(a))/\\varepsilon\\big)"}</M> for any non-zero
          infinitesimal ε, when the derivative exists.
        </p>
      </Definition>

      <Example title="a derivative">
        <p>
          For f(x) = x² at a, <M>{"((a + \\varepsilon)^2 - a^2)/\\varepsilon = 2a + \\varepsilon"}</M>, whose standard part is
          2a. The algebra is Leibniz&rsquo;s; the standard part makes &lsquo;discarding ε&rsquo; a precise operation.
        </p>
      </Example>

      <Remark title="what non-standard analysis offers">
        <p>
          Abraham Robinson founded non-standard analysis in 1961. It proves nothing about ℝ that cannot be proved by
          standard means, since it is a conservative extension, but proofs are often shorter and closer to intuition.
          Bernstein and Robinson used it in 1966 to solve a case of the invariant subspace problem, and it has been applied
          in probability, mathematical economics and combinatorics, where ultraproducts help with limits of large finite
          structures.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "infin",
      rung: "check",
      prompt: <p>What is a positive infinitesimal?</p>,
      answer: { kind: "choice", options: ["A positive hyperreal smaller than every positive real", "The real number 0", "A very small real number", "A negative hyperreal"], correct: [0] },
    },
    {
      key: "transfer",
      rung: "check",
      prompt: <p>What does the transfer principle say?</p>,
      answer: { kind: "choice", options: ["A first-order statement holds in ℝ exactly when its starred version holds in the hyperreals", "Every hyperreal is real", "Every statement about hyperreals is true in ℝ", "Infinitesimals can be transferred to ℚ"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose f(x) = x³ and x = 2. What is the standard part of the difference quotient?</p>,
      answer: { kind: "numeric", value: 12, tolerance: 0 },
    },
    {
      key: "st",
      rung: "apply",
      prompt: <p>What is the standard part of 3 + 5ε, for ε a non-zero infinitesimal?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "arch",
      rung: "apply",
      prompt: <p>The hyperreals are not Archimedean, yet transfer preserves first-order truths. Why is there no contradiction?</p>,
      answer: { kind: "choice", options: ["The Archimedean property quantifies over ℕ as a set, which is not first-order in this sense; starred ℕ contains infinite numbers", "The hyperreals are Archimedean after all", "Transfer applies only to equations", "ℝ is not Archimedean"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that (1, 1/2, 1/3, …) is an infinitesimal in the ultrapower, using that U is non-principal.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes it is positive, since every term is positive and ℕ is in U.",
          "For a positive real r, notes that 1/n < r for all but finitely many n.",
          "Uses that a non-principal ultrafilter contains every cofinite set to conclude the sequence is below r.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Using infinitesimals, show that the derivative of sin at 0 is 1, given that sin x/x tends to 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the difference quotient as ⁎sin(ε)/ε for a non-zero infinitesimal ε.",
          "Uses transfer of the limit statement to see that ⁎sin(ε)/ε is infinitely close to 1.",
          "Takes the standard part to get 1. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The course on model theory and computability is complete. It studied what can be defined and what can be computed;
        the remaining mathematics course asks which equations can be solved, and in what sense.
      </p>
      <p>Next, the course on graduate PDE continues with weak solutions.</p>
    </>
  ),
};
