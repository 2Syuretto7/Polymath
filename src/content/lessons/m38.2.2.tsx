import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { OMinimalViz } from "@/components/viz/OMinimalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.2.2",
  minutes: 90,
  links: {
    revisits: ["m38.2.1", "m38.1.1", "m20.2.2"],
    foreshadows: ["m38.2.3", "m38.3.1", "m38.5.1"],
  },

  puzzle: (
    <>
      <p>
        Using only addition, multiplication and the order on ℝ, with any real parameters you like, can you write a formula
        that defines the set of integers? With the sine function added, sin x = 0 does it at once, up to a factor of π. Why
        does the real field alone seem unable to produce such wild sets?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a formula, and see what subset of the line it defines and how many pieces it has.</p>
      <OMinimalViz />
    </>
  ),

  theory: (
    <>
      <Definition title="o-minimal structures">
        <p>
          Let M be a structure expanding a dense linear order without endpoints. M is <strong>o-minimal</strong> if every
          subset of M definable with parameters is a finite union of points and open intervals, possibly unbounded. These are
          exactly the sets already definable from the order alone, so o-minimality says that the extra structure adds no new
          subsets of the line, though it adds many new subsets of <M>{"M^n"}</M>.
        </p>
      </Definition>

      <Theorem title="the real field is o-minimal">
        <p>
          By Tarski&rsquo;s quantifier elimination, a definable subset of ℝ in (ℝ, &lt;, +, ·) is a Boolean combination of
          sets <M>{"\\{x : p(x) > 0\\}"}</M> and <M>{"\\{x : p(x) = 0\\}"}</M> for polynomials p. A non-zero polynomial has
          finitely many roots and constant sign between them, so each such set is a finite union of points and intervals,
          and so is any Boolean combination. Wilkie proved in 1996 that the real exponential field is also o-minimal.
        </p>
      </Theorem>

      <Example title="what o-minimality forbids">
        <p>
          In (ℝ, &lt;, +, ·, sin), the set <M>{"\\{x : \\sin x = 0\\} = \\pi\\mathbb{Z}"}</M> has infinitely many isolated
          points, so the structure is not o-minimal; indeed it defines ℤ and with it all of arithmetic. In an o-minimal
          expansion of the real field, ℤ is never definable. Restricting sine to a bounded interval such as [0, π] is
          harmless: van den Dries showed that the real field with all restricted analytic functions is o-minimal.
        </p>
      </Example>

      <Theorem title="tameness in higher dimensions">
        <p>
          Knight, Pillay and Steinhorn proved that o-minimality passes to every structure elementarily equivalent to M. In an
          o-minimal structure every definable function of one variable is piecewise continuous and monotone, and every
          definable subset of <M>{"M^n"}</M> is a finite union of <strong>cells</strong>, simple pieces built up as graphs
          and bands between continuous definable functions. Definable sets therefore have a well-behaved dimension and
          finitely many connected components.
        </p>
      </Theorem>

      <Remark title="tame topology">
        <p>
          Grothendieck called for a &lsquo;tame topology&rsquo; free of pathological examples, and o-minimal structures
          supply one. The Pila-Wilkie theorem bounds the number of rational points of bounded height on the transcendental
          part of a definable set, and has been used to prove cases of the André-Oort conjecture in arithmetic geometry.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is an ordered structure o-minimal?</p>,
      answer: { kind: "choice", options: ["Every definable subset of the line is a finite union of points and open intervals", "Every definable set is finite", "It has quantifier elimination", "It has no definable functions"], correct: [0] },
    },
    {
      key: "sin",
      rung: "check",
      prompt: <p>Which of these structures is not o-minimal?</p>,
      answer: { kind: "choice", options: ["(ℝ, <, +, ·, sin)", "(ℝ, <, +, ·)", "(ℚ, <)", "(ℝ, <, +, ·, exp)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose x³ − x &gt; 0. How many open intervals make up the set it defines?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "pieces",
      rung: "apply",
      prompt: <p>Write the set of reals with x²(x − 1) ≥ 0 as a union of disjoint points and open intervals. How many pieces are there?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "integers",
      rung: "apply",
      prompt: <p>Can ℤ be a definable subset of ℝ in an o-minimal expansion of the real field?</p>,
      answer: { kind: "choice", options: ["No: it is an infinite set of isolated points", "Yes, always", "Only if exp is added", "Only with integer parameters"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that for a non-zero real polynomial p, the set of x with p(x) &gt; 0 is a finite union of open intervals.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that p has finitely many real roots, which cut the line into finitely many open intervals.",
          "Uses the intermediate value theorem to see that p has constant sign on each of these intervals.",
          "Concludes that the set is the union of the intervals where p is positive.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does sin x = 0 show that adding sine to the real field breaks o-minimality, and why might sine restricted to [0, π] not?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the zero set πℤ is infinite and discrete, so is not a finite union of points and intervals.",
          "Notes that on [0, π] sine has only finitely many zeros and oscillates only finitely often.",
          "Mentions that restricted analytic functions give an o-minimal structure. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The real field is tame because its definable sets in one variable are simple. The complex field is tamer still: its
        definable subsets of the line are finite or cofinite.
      </p>
      <p>Next, algebraically closed fields.</p>
    </>
  ),
};
