import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { TypeCountViz } from "@/components/viz/TypeCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.3.1",
  minutes: 90,
  links: {
    revisits: ["m38.1.2", "m20.3.3", "m38.2.1"],
    foreshadows: ["m38.3.2", "m38.3.3", "m38.5.2"],
  },

  puzzle: (
    <>
      <p>
        In (ℚ, &lt;), consider the formulas x &gt; q for every rational q &lt; √2 and x &lt; q for every rational q &gt; √2.
        Any finitely many of them are satisfied by some rational, yet no rational satisfies them all. They describe an
        element that ℚ lacks. How many such descriptions are there, and where do the missing elements live?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the number of parameters, and step through the complete types of a single element over them.</p>
      <TypeCountViz />
    </>
  ),

  theory: (
    <>
      <Definition title="types">
        <p>
          Let M be a structure and A ⊆ M. An <strong>n-type over A</strong> is a set p of formulas in variables{" "}
          <M>{"x_1, \\ldots, x_n"}</M> with parameters from A such that <M>{"p \\cup \\mathrm{Th}(M_A)"}</M> is satisfiable;
          equivalently, every finite subset of p is satisfied by some tuple of M. It is <strong>complete</strong> if for
          every such formula φ it contains φ or ¬φ. The complete types form the set <M>{"S_n(A)"}</M>. A type is{" "}
          <strong>realised</strong> in M if some tuple satisfies every formula in it, and <strong>omitted</strong> otherwise.
          The type of a tuple b over A, <M>{"\\mathrm{tp}(b/A)"}</M>, is the set of formulas it satisfies.
        </p>
      </Definition>

      <Theorem title="realising types">
        <p>
          Every type over A ⊆ M is realised in some elementary extension of M. Add a constant for each element of M and a new
          constant c; the elementary diagram of M together with p(c) is finitely satisfiable in M, so by compactness it has
          a model, which is an elementary extension of M containing a realisation of p.
        </p>
      </Theorem>

      <Example title="types in dense orders and in arithmetic">
        <p>
          In (ℚ, &lt;), by quantifier elimination a complete 1-type over a finite set <M>{"a_1 < \\cdots < a_n"}</M> is
          determined by the position of x relative to the parameters, so there are 2n + 1 of them, all realised. Over all of
          ℚ there are uncountably many: one for each rational, one for each irrational cut, and types just above or below
          each rational and at the two ends. In (ℕ, +, ·), the type {"{"}x &gt; 0, x &gt; 1, x &gt; 2, …{"}"} is omitted
          in ℕ and realised by any non-standard element.
        </p>
      </Example>

      <Theorem title="the Stone space">
        <p>
          <M>{"S_n(A)"}</M> carries a topology with basic open sets <M>{"[\\varphi] = \\{p : \\varphi \\in p\\}"}</M>. It is
          compact, by the compactness theorem, and totally disconnected, since each basic open set is also closed. A type is{" "}
          <strong>isolated</strong> if some single formula in it implies all the others; isolated types are realised in
          every model containing A.
        </p>
      </Theorem>

      <Remark title="counting types">
        <p>
          The number of types measures how complicated a theory is. A complete countable theory is called ω-stable if it has
          only countably many types over every countable set; the theory of algebraically closed fields is an example.
          Morley used such counts to prove that a countable theory categorical in one uncountable cardinal is categorical in
          all of them, a result that founded modern stability theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "real",
      rung: "check",
      prompt: <p>What does it mean for a type p to be realised in M?</p>,
      answer: { kind: "choice", options: ["Some tuple of M satisfies every formula in p", "Every finite subset of p is satisfiable", "p contains φ or ¬φ for every φ", "p is a single formula"], correct: [0] },
    },
    {
      key: "why",
      rung: "check",
      prompt: <p>Which theorem guarantees that every type is realised in some elementary extension?</p>,
      answer: { kind: "choice", options: ["The compactness theorem", "Gödel’s incompleteness theorem", "The Löwenheim-Skolem theorem downwards", "Quantifier elimination"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set n = 3. How many complete 1-types are there over the three parameters?</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0 },
    },
    {
      key: "omit",
      rung: "apply",
      prompt: <p>In (ℕ, &lt;), is the type {"{"}x &gt; 0, x &gt; 1, x &gt; 2, …{"}"} realised?</p>,
      answer: { kind: "choice", options: ["No, but it is realised in a proper elementary extension", "Yes, by 0", "Yes, by every number", "No, and it is not consistent"], correct: [0] },
    },
    {
      key: "iso",
      rung: "apply",
      prompt: <p>What is an isolated type?</p>,
      answer: { kind: "choice", options: ["A type with a single formula in it that implies all the others", "A type realised by exactly one element", "A type with no formulas", "A type omitted in every model"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that every type p(x) over A ⊆ M is realised in some elementary extension of M.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Adds constants for the elements of M and a new constant c, and considers the elementary diagram of M together with p(c).",
          "Notes that each finite subset is satisfiable in M, interpreting c by an element satisfying the finitely many formulas of p involved.",
          "Applies compactness, and notes that a model of the elementary diagram is an elementary extension of M containing a realisation of p.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why are there exactly 2n + 1 complete 1-types over n parameters in (ℚ, &lt;)?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses quantifier elimination for dense linear orders: a type is fixed by the atomic formulas x < a, x = a and x > a for the parameters a.",
          "Notes that x can equal one of the n parameters or lie in one of the n + 1 gaps.",
          "Notes each case is consistent and realised in ℚ by density. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Compactness makes it easy to realise a type. Keeping a type out of a model is harder, and in a countable language it
        can be done exactly when the type is not isolated.
      </p>
      <p>Next, omitting types.</p>
    </>
  ),
};
