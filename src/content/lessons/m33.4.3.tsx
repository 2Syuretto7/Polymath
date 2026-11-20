import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { DifferenceQuotientViz } from "@/components/viz/DifferenceQuotientViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.4.3",
  minutes: 90,
  links: {
    revisits: ["m33.4.2", "m33.3.2", "m17.5.1"],
    foreshadows: ["m33.4.4", "m33.5.1", "m33.6.2"],
  },

  puzzle: (
    <>
      <p>
        Harmonic functions are smooth, even though the Laplace equation mentions only second derivatives. A weak solution of
        Δu = 0 is a priori only in H¹. Is it secretly smooth? More generally, if f has k derivatives, how many does the
        solution of Lu = f have?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the exponent α, and watch whether the difference quotients of |x| to the power α stay bounded in L².</p>
      <DifferenceQuotientViz />
    </>
  ),

  theory: (
    <>
      <Definition title="difference quotients">
        <p>
          For h ≠ 0 and a coordinate direction <M>{"e_k"}</M>, the <strong>difference quotient</strong> is{" "}
          <M>{"D_k^h u(x) = (u(x + he_k) - u(x))/h"}</M>. On a subdomain V compactly inside U: if{" "}
          <M>{"u \\in W^{1,p}"}</M> then <M>{"\\|D^h u\\|_{L^p(V)} \\le C \\|Du\\|_{L^p(U)}"}</M>; conversely, for 1 &lt; p
          &lt; ∞, if <M>{"\\|D^h u\\|_{L^p(V)}"}</M> is bounded for small h then u has a weak derivative in{" "}
          <M>{"L^p(V)"}</M>. Difference quotients can be applied to weak solutions, where derivatives cannot.
        </p>
      </Definition>

      <Theorem title="interior H² regularity">
        <p>
          Let L be uniformly elliptic with <M>{"a^{ij} \\in C^1(U)"}</M>, <M>{"b^i, c \\in L^\\infty(U)"}</M>, and{" "}
          <M>{"f \\in L^2(U)"}</M>. If <M>{"u \\in H^1(U)"}</M> is a weak solution of Lu = f, then{" "}
          <M>{"u \\in H^2_{\\mathrm{loc}}(U)"}</M>, and for each V compactly inside U,{" "}
          <M>{"\\|u\\|_{H^2(V)} \\le C(\\|f\\|_{L^2(U)} + \\|u\\|_{L^2(U)})"}</M>. Moreover Lu = f holds almost everywhere.
          The proof takes the test function <M>{"v = -D_k^{-h}(\\zeta^2 D_k^h u)"}</M> with a cut-off ζ, and uses
          ellipticity to bound <M>{"D_k^h Du"}</M> in <M>{"L^2"}</M> uniformly in h.
        </p>
      </Theorem>

      <Theorem title="higher regularity">
        <p>
          If the coefficients are in <M>{"C^{m+1}"}</M> and f is in <M>{"H^m"}</M>, then u is in{" "}
          <M>{"H^{m+2}_{\\mathrm{loc}}"}</M>. By the Sobolev embeddings, if the coefficients and f are smooth, so is u. In
          particular a weak solution of Laplace&rsquo;s equation is a smooth harmonic function: this is Weyl&rsquo;s lemma.
          With a smooth boundary, the same holds up to the boundary for the Dirichlet problem.
        </p>
      </Theorem>

      <Example title="regularity can fail">
        <p>
          In a domain with a re-entrant corner of angle ω &gt; π, the solution of the Dirichlet problem for Δu = f with
          smooth f can behave like <M>{"r^{\\pi/\\omega} \\sin(\\pi\\theta/\\omega)"}</M> near the corner, which is not in{" "}
          <M>{"H^2"}</M>. So boundary regularity genuinely needs a smooth or convex boundary.
        </p>
      </Example>

      <Remark title="rough coefficients">
        <p>
          When the coefficients are merely bounded and measurable, difference quotients fail, and Hilbert&rsquo;s
          nineteenth problem asked whether solutions of variational problems are still smooth. De Giorgi in 1957 and Nash in
          1958 independently proved that weak solutions are Hölder continuous, a result that opened the regularity theory
          of nonlinear elliptic equations.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dq",
      rung: "check",
      prompt: <p>What is the difference quotient Dₖʰu(x)?</p>,
      answer: { kind: "choice", options: ["(u(x + heₖ) − u(x))/h", "The second derivative of u", "u(x + h) + u(x − h)", "The average of u over a ball"], correct: [0] },
    },
    {
      key: "int",
      rung: "check",
      prompt: <p>Under the hypotheses of interior regularity, with f in L², where does a weak solution lie?</p>,
      answer: { kind: "choice", options: ["In H²_loc(U)", "Only in H¹(U)", "In C∞(U) always", "In L¹ only"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set α = 1. What value do the norms of the difference quotients approach as h shrinks?</p>,
      answer: { kind: "numeric", value: 1.41, tolerance: 0.02 },
    },
    {
      key: "weyl",
      rung: "apply",
      prompt: <p>What does Weyl&rsquo;s lemma say?</p>,
      answer: { kind: "choice", options: ["A weak solution of Laplace’s equation is smooth and harmonic", "Every harmonic function is bounded", "The Laplacian has no eigenvalues", "Weak solutions are never smooth"], correct: [0] },
    },
    {
      key: "corner",
      rung: "apply",
      prompt: <p>Why can H² regularity up to the boundary fail in an L-shaped domain?</p>,
      answer: { kind: "choice", options: ["Near the re-entrant corner the solution behaves like a power of r that is not in H²", "The domain is not bounded", "The Laplacian is not elliptic there", "f cannot be smooth there"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that for u in C¹ with Du in L²(ℝ), ‖Dʰu‖ in L² is at most ‖u′‖ in L².</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes Dʰu(x) as the average of u′ over [x, x + h].",
          "Uses Cauchy-Schwarz to bound |Dʰu(x)|² by the average of |u′|² over [x, x + h].",
          "Integrates in x and uses Fubini to conclude.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is it natural that two more derivatives of u are gained from Lu = f with L second order?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that L involves all second derivatives, and ellipticity means it controls them all, as seen through the Fourier symbol.",
          "Contrasts with a degenerate operator such as the derivative in one direction only.",
          "Mentions that ellipticity is what makes the estimate work. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Regularity says how smooth solutions are. A different kind of information says where they can be large: a solution
        of an elliptic equation cannot have an interior maximum unless it is constant.
      </p>
      <p>Next, maximum principles.</p>
    </>
  ),
};
