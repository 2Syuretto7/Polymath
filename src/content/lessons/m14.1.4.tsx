import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ConstructViz } from "@/components/viz/ConstructViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.1.4",
  minutes: 85,
  links: {
    revisits: ["m14.1.1", "m14.1.2", "m7.7.5"],
    foreshadows: ["m14.4.1", "m14.3.4", "m14.4.3"],
  },

  puzzle: (
    <>
      <p>
        The Greeks could bisect any angle with a straightedge and compass, but never found how to trisect one. For two
        thousand years people tried. In 1837 Pierre Wantzel proved it cannot be done. How can anyone prove that no
        construction, however clever, will ever work?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>First construct square roots, then test the classical problems against the degree condition.</p>
      <ConstructViz />
    </>
  ),

  theory: (
    <>
      <Definition title="constructible numbers">
        <p>
          Start with the points 0 and 1 in the plane. A straightedge draws the line through two constructed points; a compass
          draws the circle with constructed centre through a constructed point. New points are intersections. A real number
          is <strong>constructible</strong> if it is a coordinate of a constructed point.
        </p>
      </Definition>

      <Theorem title="what can be constructed">
        <p>
          The constructible numbers form a subfield of <M>{"\\mathbb{R}"}</M> closed under square roots of positive elements.
          Conversely, a real number <M>{"\\alpha"}</M> is constructible only if there is a tower
        </p>
        <p style={{ textAlign: "center" }}>
          <M>{"\\mathbb{Q} = K_0 \\subset K_1 \\subset \\cdots \\subset K_r"}</M> with <M>{"[K_{i+1} : K_i] = 2"}</M> and{" "}
          <M>{"\\alpha \\in K_r"}</M>.
        </p>
        <p>In particular, <M>{"[\\mathbb{Q}(\\alpha) : \\mathbb{Q}]"}</M> is a power of 2.</p>
      </Theorem>

      <Proof>
        <p>
          Sums, products and quotients can be built with parallel lines and similar triangles, and square roots with a
          semicircle, as in the visualisation. For the converse, suppose all points so far have coordinates in a field{" "}
          <M>{"K"}</M>. A line through two such points has an equation with coefficients in <M>{"K"}</M>, and so does a circle.
          Intersecting two lines stays in <M>{"K"}</M>; intersecting a line with a circle, or two circles, means solving a
          quadratic over <M>{"K"}</M>, so the new coordinates lie in <M>{"K"}</M> or in an extension of degree 2. By the tower
          law the degree of <M>{"\\mathbb{Q}(\\alpha)"}</M> divides <M>{"2^r"}</M>.
        </p>
      </Proof>

      <Example title="the three classical problems">
        <p>
          Doubling the cube needs <M>{"\\sqrt[3]{2}"}</M>, of degree 3. Trisecting <M>{"60^\\circ"}</M> needs{" "}
          <M>{"\\cos 20^\\circ"}</M>, a root of the irreducible <M>{"8x^3 - 6x - 1"}</M>, also degree 3. Squaring the circle
          needs <M>{"\\sqrt\\pi"}</M>, which is transcendental. None has degree a power of 2, so all three are impossible.
        </p>
      </Example>

      <Remark title="regular polygons">
        <p>
          Gauss showed at nineteen that the regular 17-gon is constructible, and the Gauss-Wantzel theorem says the regular{" "}
          <M>{"n"}</M>-gon is constructible exactly when <M>{"n"}</M> is a power of 2 times a product of distinct Fermat primes{" "}
          <M>{"2^{2^k} + 1"}</M>. The &ldquo;if&rdquo; direction needs more than degrees: it uses the Galois group of the
          cyclotomic field, studied later in the course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sqrt",
      rung: "check",
      prompt: <p>Is <M>{"\\sqrt{2 + \\sqrt3}"}</M> constructible?</p>,
      answer: { kind: "choice", options: ["Yes", "No"], correct: [0] },
    },
    {
      key: "cube",
      rung: "check",
      prompt: <p>What is the degree of <M>{"\\sqrt[3]{2}"}</M> over <M>{"\\mathbb{Q}"}</M>, the reason the cube cannot be doubled?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "trisect",
      rung: "apply",
      prompt: <p>Which angle <em>can</em> be trisected with ruler and compass?</p>,
      answer: { kind: "choice", options: ["90°", "60°", "20°", "None"], correct: [0] },
    },
    {
      key: "poly",
      rung: "apply",
      prompt: <p>Using <M>{"\\cos 3\\theta = 4\\cos^3\\theta - 3\\cos\\theta"}</M> with <M>{"\\theta = 20^\\circ"}</M>, the number <M>{"x = \\cos 20^\\circ"}</M> satisfies <M>{"8x^3 - 6x - c = 0"}</M>. What is <M>{"c"}</M>?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "gon",
      rung: "apply",
      prompt: <p>Which regular polygon is constructible?</p>,
      answer: { kind: "choice", options: ["The 15-gon", "The 7-gon", "The 9-gon", "The 11-gon"], correct: [0] },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove that the cube cannot be doubled with ruler and compass, assuming the theorem that constructible numbers have degree a power of 2.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes doubling a unit cube requires constructing ∛2.",
          "Shows x³ − 2 is irreducible over ℚ, by Eisenstein or the rational root test, so ∛2 has degree 3.",
          "Concludes 3 is not a power of 2, so ∛2 is not constructible.",
        ],
      },
    },
    {
      key: "four",
      rung: "stretch",
      prompt: <p>The number <M>{"\\sqrt[4]{2}"}</M> has degree 4, a power of 2. Is it constructible? Does degree a power of 2 always guarantee constructibility?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows ⁴√2 is constructible as the square root of the constructible √2.",
          "Notes the converse fails in general: degree a power of 2 is necessary, not sufficient, for example for some roots of quartics.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what constructible numbers are, why they form a field closed under square roots, why every constructible number has degree a power of 2, and how this settles doubling the cube, trisecting angles and squaring the circle.",

  glimpse: (
    <p>
      The next chapter studies finite fields. Galois theory later explains which polygons are constructible, and why some
      polynomial equations cannot be solved by radicals.
    </p>
  ),
};
