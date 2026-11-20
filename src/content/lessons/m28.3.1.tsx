import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PeriodLatticeViz } from "@/components/viz/PeriodLatticeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m28.3.1",
  minutes: 90,
  links: {
    revisits: ["m28.2.3", "m13.4.2", "m15.1.2"],
    foreshadows: ["m28.3.2", "m28.3.3", "m28.4.3"],
  },

  puzzle: (
    <>
      <p>
        sin z repeats itself every 2π along the real axis. Could a meromorphic function repeat itself in two independent
        directions, so that its whole graph is determined by one parallelogram? What about three directions?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose the second period τ and a radius, and count the periods in the disc.</p>
      <PeriodLatticeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="lattices and elliptic functions">
        <p>
          A <strong>lattice</strong> is <M>{"\\Lambda = \\mathbb{Z}\\omega_1 + \\mathbb{Z}\\omega_2"}</M> with{" "}
          <M>{"\\omega_1, \\omega_2"}</M> linearly independent over ℝ. An <strong>elliptic function</strong> for Λ is a
          meromorphic function on ℂ with <M>{"f(z + \\omega) = f(z)"}</M> for every ω in Λ. Rescaling and rotating, one may
          take <M>{"\\Lambda = \\mathbb{Z} + \\mathbb{Z}\\tau"}</M> with Im τ &gt; 0.
        </p>
      </Definition>

      <Theorem title="Jacobi: no more than two periods">
        <p>
          The periods of a non-constant meromorphic function form a discrete subgroup of ℂ, since otherwise f would equal
          f(a) on a set with a limit point. A discrete subgroup of ℂ is 0, <M>{"\\mathbb{Z}\\omega"}</M> or a lattice. So
          there are at most two independent periods, and a group such as ℤ + ℤ√2, dense in ℝ, is never a group of periods.
        </p>
      </Theorem>

      <Theorem title="Liouville’s theorems for elliptic functions">
        <p>Let f be elliptic for Λ and P a fundamental parallelogram whose boundary avoids the zeros and poles of f.</p>
        <ul>
          <li>If f has no poles it is constant: it is bounded on the compact closure of P, hence on ℂ.</li>
          <li>The residues of f in P sum to 0, since the integral of f round ∂P cancels in opposite pairs of sides.</li>
          <li>
            Applied to f′/f, f has as many zeros as poles in P, counted with multiplicity. This number is the{" "}
            <strong>order</strong> of f.
          </li>
          <li>The sum of the zeros minus the sum of the poles lies in Λ.</li>
        </ul>
      </Theorem>

      <Example title="the torus">
        <p>
          An elliptic function is the same thing as a meromorphic function on the quotient <M>{"\\mathbb{C}/\\Lambda"}</M>,
          obtained by gluing opposite sides of P. Topologically it is a torus, and it inherits a complex structure from ℂ.
        </p>
      </Example>

      <Remark title="order at least two">
        <p>
          A non-constant elliptic function has order at least 2: a single simple pole in P would have non-zero residue,
          contradicting the second theorem. So the simplest elliptic functions have either one double pole or two simple
          poles in each parallelogram.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "periods",
      rung: "check",
      prompt: <p>What can the set of periods of a non-constant meromorphic function be?</p>,
      answer: { kind: "choice", options: ["0, a cyclic group ℤω, or a lattice", "Any subgroup of ℂ", "Only a lattice", "A dense subgroup of ℂ"], correct: [0] },
    },
    {
      key: "holo",
      rung: "check",
      prompt: <p>Why is an elliptic function with no poles constant?</p>,
      answer: { kind: "choice", options: ["It is bounded on a compact parallelogram, hence on ℂ, and Liouville applies", "Its residues sum to zero", "It is odd", "Its periods are dense"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take τ = i and R = 3. How many lattice points lie in the disc?</p>,
      answer: { kind: "numeric", value: 29, tolerance: 0 },
    },
    {
      key: "area",
      rung: "apply",
      prompt: <p>What is the area of the fundamental parallelogram for the periods 1 and τ = 0.5 + 2i?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "order",
      rung: "apply",
      prompt: <p>What is the least possible order of a non-constant elliptic function?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the residues of an elliptic function in a fundamental parallelogram sum to zero.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Chooses a parallelogram whose boundary avoids the poles and applies the residue theorem to the integral of f round its boundary.",
          "Uses periodicity to show the integrals along opposite sides cancel, since they are traversed in opposite directions.",
          "Concludes that the integral, and so the sum of residues, is zero.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can there be no elliptic function with exactly one simple pole in each parallelogram?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a simple pole has a non-zero residue.",
          "Uses the fact that the residues in a parallelogram must sum to zero to reach a contradiction.",
          "Concludes that the order is at least 2. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The theorems say what an elliptic function must be like, but not that one exists. Weierstrass built one directly,
        by summing over the lattice.
      </p>
      <p>Next, the Weierstrass p-function.</p>
    </>
  ),
};
