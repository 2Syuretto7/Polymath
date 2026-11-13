import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { DoubleSumViz } from "@/components/viz/DoubleSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m5.5.1",
  minutes: 80,
  links: {
    revisits: ["m2.6.1", "m2.6.2", "m2.10.1"],
    foreshadows: ["m5.5.2", "m12.5.1", "m6.7.1"],
  },

  puzzle: (
    <>
      <p>
        A thin metal plate is denser in some places than in others: its density at the point <M>{"(x, y)"}</M> is{" "}
        <M>{"\\rho(x, y)"}</M> grams per square centimetre. How much does it weigh? For a wire, you would cut it into short
        pieces, multiply each length by its density, and add, which is an ordinary integral. A plate has to be cut into
        small squares instead. What does adding over a region of the plane mean, and when does it give a definite answer?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Cut the unit square into <M>{"n^2"}</M> small squares, take one value of <M>{"f(x, y) = x^2 + y"}</M> on each,
        multiply by the area of the square, and add. Increase <M>{"n"}</M>, and try both kinds of sample point.
      </p>
      <DoubleSumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the double integral over a rectangle">
        <p>
          Let <M>{"f"}</M> be bounded on a rectangle <M>{"R = [a, b] \\times [c, d]"}</M>. Divide <M>{"R"}</M> into small
          rectangles <M>{"R_{ij}"}</M> of area <M>{"\\Delta A_{ij}"}</M>, choose a sample point{" "}
          <M>{"(x_{ij}^*, y_{ij}^*)"}</M> in each, and form the <strong>Riemann sum</strong>
        </p>
        <MD>{"\\sum_{i, j} f(x_{ij}^*, y_{ij}^*)\\, \\Delta A_{ij}."}</MD>
        <p>
          If these sums approach a single number as the largest rectangle shrinks to zero, whatever the sample points,
          then <M>{"f"}</M> is <strong>integrable</strong> on <M>{"R"}</M> and that number is the{" "}
          <strong>double integral</strong> <M>{"\\iint_R f\\, dA"}</M>. Every continuous function on <M>{"R"}</M> is
          integrable.
        </p>
      </Definition>

      <Definition title="general regions">
        <p>
          For a bounded region <M>{"D"}</M>, enclose it in a rectangle <M>{"R"}</M> and set <M>{"f = 0"}</M> outside{" "}
          <M>{"D"}</M>. Then <M>{"\\iint_D f\\, dA = \\iint_R f\\, dA"}</M>, when this exists. It does exist for continuous{" "}
          <M>{"f"}</M> when the boundary of <M>{"D"}</M> is made of finitely many graphs of continuous functions, which covers
          every region in this course. The area of <M>{"D"}</M> is <M>{"\\iint_D 1\\, dA"}</M>.
        </p>
      </Definition>

      <Theorem title="properties">
        <p>
          Double integrals are linear, <M>{"\\iint (\\alpha f + \\beta g) = \\alpha \\iint f + \\beta \\iint g"}</M>; they
          respect order, so <M>{"f \\le g"}</M> gives <M>{"\\iint f \\le \\iint g"}</M>; and they add over regions that
          overlap only along their boundaries. The <strong>average value</strong> of <M>{"f"}</M> on <M>{"D"}</M> is{" "}
          <M>{"\\frac{1}{\\text{area}(D)} \\iint_D f\\, dA"}</M>.
        </p>
      </Theorem>

      <Example title="what a double integral measures">
        <p>
          If <M>{"f \\ge 0"}</M>, then <M>{"\\iint_D f\\, dA"}</M> is the volume of the solid under the surface{" "}
          <M>{"z = f(x, y)"}</M> and above <M>{"D"}</M>: each term of a Riemann sum is the volume of a thin box. If{" "}
          <M>{"\\rho"}</M> is a density, <M>{"\\iint_D \\rho\\, dA"}</M> is a mass. Symmetry can save work: if{" "}
          <M>{"D"}</M> is symmetric under <M>{"x \\mapsto -x"}</M> and <M>{"f(-x, y) = -f(x, y)"}</M>, the integral is{" "}
          <M>{"0"}</M>, because the Riemann sums cancel in pairs. So the integral of <M>{"x^3 + 2"}</M> over the unit disc is{" "}
          <M>{"2\\pi"}</M>, twice its area.
        </p>
      </Example>

      <Definition title="triple integrals">
        <p>
          The same construction over a box in <M>{"\\mathbb{R}^3"}</M>, cut into small boxes of volume{" "}
          <M>{"\\Delta V"}</M>, defines <M>{"\\iiint_E f\\, dV"}</M>. The volume of a solid <M>{"E"}</M> is{" "}
          <M>{"\\iiint_E 1\\, dV"}</M>, its mass is <M>{"\\iiint_E \\rho\\, dV"}</M>, and its centre of mass has{" "}
          <M>{"x"}</M>-coordinate <M>{"\\frac{1}{m}\\iiint_E x \\rho\\, dV"}</M>.
        </p>
      </Definition>

      <Remark title="computing them">
        <p>
          Riemann sums define the integral but are a poor way to find its exact value. The next lesson shows that a double
          integral can be computed as two ordinary integrals, one inside the other, so that the whole of single-variable
          calculus becomes available.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "const",
      rung: "check",
      prompt: <p>Find <M>{"\\iint_R 5\\, dA"}</M> where <M>{"R = [0, 2] \\times [0, 3]"}</M>.</p>,
      answer: { kind: "numeric", value: 30 },
    },
    {
      key: "sum",
      rung: "check",
      prompt: (
        <p>
          Cut the unit square into 4 equal squares and use their lower-left corners as sample points. What is the Riemann
          sum for <M>{"f(x, y) = x + y"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "odd",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\iint_D (x^3 + 2)\\, dA"}</M> where <M>{"D"}</M> is the disc <M>{"x^2 + y^2 \\le 1"}</M>. Give a
          decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 2 * Math.PI, tolerance: 0.01 },
    },
    {
      key: "avg",
      rung: "apply",
      prompt: (
        <p>
          The integral of a temperature function over the rectangle <M>{"[0, 2] \\times [0, 1]"}</M> is <M>{"6"}</M>. What
          is the average temperature on the rectangle?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "ball",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"B"}</M> be the solid unit ball and <M>{"D"}</M> the unit disc in the plane. Which of these equal the
          volume of <M>{"B"}</M>? Choose all that apply.
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["∭ over B of 1 dV", "∬ over D of 1 dA", "∬ over D of 2√(1 − x² − y²) dA", "∭ over B of (x² + y² + z²) dV"],
        correct: [0, 2],
      },
    },
    {
      key: "symmetry",
      rung: "prove",
      prompt: (
        <p>
          Suppose <M>{"D"}</M> is symmetric under <M>{"(x, y) \\mapsto (-x, y)"}</M> and{" "}
          <M>{"f(-x, y) = -f(x, y)"}</M>, with <M>{"f"}</M> integrable. Prove that <M>{"\\iint_D f\\, dA = 0"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses partitions symmetric about the y-axis with mirrored sample points, so the terms of each Riemann sum cancel in pairs (terms on the axis are zero).",
          "Concludes that these sums are all 0, so their limit, the integral, is 0.",
        ],
      },
    },
    {
      key: "product",
      rung: "stretch",
      prompt: (
        <p>
          Show that for <M>{"f(x, y) = g(x)h(y)"}</M> on <M>{"[a, b] \\times [c, d]"}</M>, with <M>{"g"}</M> and{" "}
          <M>{"h"}</M> continuous, a Riemann sum over a grid is a product of two one-variable Riemann sums, and deduce that
          the double integral equals <M>{"\\int_a^b g \\cdot \\int_c^d h"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes the grid sum Σᵢ Σⱼ g(xᵢ)h(yⱼ)ΔxΔy as (Σᵢ g(xᵢ)Δx)(Σⱼ h(yⱼ)Δy).",
          "Takes limits: each factor tends to the one-variable integral, so the product does too.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the double integral is defined by Riemann sums, what it measures, its basic properties, and how triple integrals extend the idea.",

  glimpse: (
    <p>
      The next lesson proves Fubini&rsquo;s theorem, which computes a double integral by integrating one variable at a time.
      Later, analysis courses ask exactly which functions are integrable, and measure theory rebuilds the integral on new
      foundations.
    </p>
  ),
};
