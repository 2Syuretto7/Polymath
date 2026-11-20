import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CurveSectionsViz } from "@/components/viz/CurveSectionsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.6.3",
  minutes: 90,
  links: {
    revisits: ["m30.6.2", "m30.5.3", "m30.2.1"],
    foreshadows: ["m38.5.1", "m39.4.3", "m33.1.1"],
  },

  puzzle: (
    <>
      <p>
        On an elliptic curve, is there a rational function with a single pole, of order one, at a chosen point? With a double
        pole? With a triple pole? The answers are no, yes and yes, and from the last two one can write down the curve&rsquo;s
        Weierstrass equation. What theorem decides such questions on any curve?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a genus and a degree, and see what Riemann-Roch says about the dimension ℓ(D).</p>
      <CurveSectionsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="genus and the canonical divisor">
        <p>
          Let X be a smooth projective curve over an algebraically closed field. Its <strong>genus</strong> is{" "}
          <M>{"g = \\dim H^1(X, \\mathcal{O}_X)"}</M>. The sheaf of differentials <M>{"\\Omega_X"}</M> is a line bundle; a
          divisor K with <M>{"\\mathcal{O}(K) \\cong \\Omega_X"}</M> is a <strong>canonical divisor</strong>. Write{" "}
          <M>{"\\ell(D) = \\dim H^0(X, \\mathcal{O}(D))"}</M>.
        </p>
      </Definition>

      <Theorem title="Riemann-Roch and Serre duality">
        <p>
          Serre duality gives <M>{"H^1(\\mathcal{O}(D)) \\cong H^0(\\mathcal{O}(K - D))^\\ast"}</M>. Combined with{" "}
          <M>{"\\chi(\\mathcal{O}(D)) = \\deg D + 1 - g"}</M>, proved by adding points one at a time, this gives{" "}
          <M>{"\\ell(D) - \\ell(K - D) = \\deg D - g + 1"}</M>. Taking D = K shows <M>{"\\deg K = 2g - 2"}</M> and{" "}
          <M>{"\\ell(K) = g"}</M>.
        </p>
      </Theorem>

      <Example title="consequences">
        <p>
          If deg D &gt; 2g − 2 then ℓ(D) = deg D − g + 1. In genus 0, a point P has ℓ(P) = 2, so X ≅ ℙ¹. In genus 1,
          ℓ(2P) = 2 and ℓ(3P) = 3 give functions x and y with poles of orders 2 and 3 at P; the seven functions 1, x, y, x²,
          xy, x³, y² lie in the six-dimensional space of sections of O(6P), and the resulting relation is a Weierstrass
          equation. A smooth plane curve of degree d has genus (d − 1)(d − 2)/2.
        </p>
      </Example>

      <Remark title="generalisations">
        <p>
          Riemann proved the inequality and his student Roch the full formula in the 1860s, for Riemann surfaces. Hirzebruch
          extended it to all compact complex manifolds in 1954, and Grothendieck to proper morphisms in 1957, an origin of
          K-theory. Clifford&rsquo;s theorem bounds ℓ(D) by deg D / 2 + 1 in the special range.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rr",
      rung: "check",
      prompt: <p>What does the Riemann-Roch theorem say for a divisor D on a curve of genus g?</p>,
      answer: { kind: "choice", options: ["ℓ(D) − ℓ(K − D) = deg D − g + 1", "ℓ(D) = deg D for every D", "ℓ(D) = g always", "ℓ(D) + ℓ(K − D) = g"], correct: [0] },
    },
    {
      key: "degk",
      rung: "check",
      prompt: <p>What is the degree of a canonical divisor on a curve of genus g?</p>,
      answer: { kind: "choice", options: ["2g − 2", "g", "g − 1", "2g"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with g = 2 and degree 5, what is ℓ(D)?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "ell",
      rung: "apply",
      prompt: <p>On an elliptic curve, what is ℓ(3P) for a point P?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "quint",
      rung: "apply",
      prompt: <p>What is the genus of a smooth plane curve of degree 5?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use Riemann-Roch to show that a smooth projective curve of genus 0 is isomorphic to ℙ¹.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes ℓ(P) − ℓ(K − P) = 1 − 0 + 1 = 2, with ℓ(K − P) = 0 since deg(K − P) = −3.",
          "Takes a non-constant f in L(P), with a single simple pole at P.",
          "Notes f gives a morphism to ℙ¹ of degree 1, which is an isomorphism.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>On an elliptic curve, explain why there is no rational function with a single simple pole.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes ℓ(P) = 1 − 1 + 1 + ℓ(K − P) = 1, with K = 0 of degree 0 and K − P of negative degree.",
          "Notes the constants already give ℓ(P) ≥ 1, so L(P) is just the constants.",
          "Concludes no function has a single simple pole. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The course on algebraic geometry is complete. Its methods, sheaves, cohomology and duality, reappear in analysis,
        where differential equations are studied through spaces of functions and their dual estimates.
      </p>
      <p>Next, the course on graduate PDE begins with transport, Laplace, heat and wave equations in full.</p>
    </>
  ),
};
