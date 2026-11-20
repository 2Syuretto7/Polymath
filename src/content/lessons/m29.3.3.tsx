import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { UnitLogViz } from "@/components/viz/UnitLogViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m29.3.3",
  minutes: 90,
  links: {
    revisits: ["m29.3.2", "m29.3.1", "m11.6.3"],
    foreshadows: ["m29.4.1", "m29.5.1", "m29.5.3"],
  },

  puzzle: (
    <>
      <p>
        The units of ℤ are just ±1, and those of ℤ[i] are ±1 and ±i. But in ℤ[√2], (1 + √2)(−1 + √2) = 1, so 1 + √2 is a
        unit, and so are all its powers. How many units does a ring of integers have, and what structure do they form?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a real quadratic field, and see its units as a lattice on a line.</p>
      <UnitLogViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the logarithmic embedding">
        <p>
          Let K have <M>{"r_1"}</M> real embeddings and <M>{"r_2"}</M> pairs of complex ones. Send a unit u to{" "}
          <M>{"\\lambda(u) = (\\log|\\sigma_1(u)|, \\dots, \\log|\\sigma_{r_1+r_2}(u)|)"}</M>, taking one embedding from each
          complex pair and doubling its coordinate. Since <M>{"|N(u)| = 1"}</M>, the image lies in the hyperplane where the
          coordinates sum to 0, and λ is a homomorphism from multiplication to addition.
        </p>
      </Definition>

      <Theorem title="Dirichlet’s unit theorem (1846)">
        <p>
          The unit group is finitely generated, of rank <M>{"r = r_1 + r_2 - 1"}</M>:{" "}
          <M>{"\\mathcal{O}_K^\\times \\cong \\mu_K \\times \\mathbb{Z}^{r}"}</M>, where <M>{"\\mu_K"}</M> is the finite group
          of roots of unity in K. The kernel of λ is <M>{"\\mu_K"}</M>, its image is a discrete subgroup of the hyperplane,
          and Minkowski&rsquo;s theorem shows the image is a full lattice in it.
        </p>
      </Theorem>

      <Definition title="fundamental units and the regulator">
        <p>
          Generators <M>{"\\varepsilon_1, \\dots, \\varepsilon_r"}</M> of the free part are <strong>fundamental units</strong>.
          The covolume of the unit lattice, suitably normalised, is the <strong>regulator</strong>{" "}
          <M>{"R_K"}</M>. For a real quadratic field it is <M>{"\\log\\varepsilon"}</M>, for the fundamental unit ε &gt; 1.
        </p>
      </Definition>

      <Example title="ranks">
        <ul>
          <li>Imaginary quadratic fields: r₁ = 0, r₂ = 1, rank 0. The units are roots of unity: 4 for ℚ(i), 6 for ℚ(√−3), else 2.</li>
          <li>Real quadratic fields: rank 1. ℚ(√2) has ε = 1 + √2; ℚ(√7) has ε = 8 + 3√7.</li>
          <li>ℚ(∛2): r₁ = 1, r₂ = 1, rank 1, with fundamental unit ∛2 − 1.</li>
        </ul>
      </Example>

      <Remark title="Pell’s equation">
        <p>
          The units of <M>{"\\mathbb{Z}[\\sqrt d]"}</M> of norm 1 are the solutions of Pell&rsquo;s equation{" "}
          <M>{"x^2 - dy^2 = 1"}</M>, so Dirichlet&rsquo;s theorem explains why all solutions are powers of one. The
          smallest solution can be enormous: for d = 61 it is x = 1766319049, y = 226153980, found by Bhaskara II in the
          twelfth century with the chakravala method.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rank",
      rung: "check",
      prompt: <p>What is the rank of the unit group of a number field with r₁ real embeddings and r₂ pairs of complex embeddings?</p>,
      answer: { kind: "choice", options: ["r₁ + r₂ − 1", "r₁ + 2r₂", "r₁", "0"], correct: [0] },
    },
    {
      key: "imag",
      rung: "check",
      prompt: <p>What are the units of an imaginary quadratic field?</p>,
      answer: { kind: "choice", options: ["Only roots of unity, finitely many", "Infinitely many", "Only 1", "All elements of norm 1 in ℚ"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose d = 7. What is the regulator, to two decimal places?</p>,
      answer: { kind: "numeric", value: 2.77, tolerance: 0.01 },
    },
    {
      key: "cubic",
      rung: "apply",
      prompt: <p>A field of degree 4 has no real embeddings. What is the rank of its unit group?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "roots",
      rung: "apply",
      prompt: <p>How many roots of unity does ℚ(√−3) contain?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the kernel of the logarithmic embedding on the units is finite.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that u in the kernel has |σ(u)| = 1 for every embedding σ.",
          "Uses that the coefficients of the characteristic polynomial of u are integers bounded in terms of n, so there are finitely many such polynomials.",
          "Concludes that only finitely many u qualify, so the kernel is a finite group, hence consists of roots of unity.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why do the units of a real quadratic field lie on the line x + y = 0 in the logarithmic embedding?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the norm of a unit is ±1, the product of its two conjugates.",
          "Takes logarithms of absolute values: log|σ₁(u)| + log|σ₂(u)| = 0.",
          "Links this to the hyperplane in the general theorem. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        So far numbers have been studied through the real and complex embeddings. Each prime gives another way to measure
        size, in which high powers of p are small, and another completion of ℚ.
      </p>
      <p>Next, p-adic numbers.</p>
    </>
  ),
};
