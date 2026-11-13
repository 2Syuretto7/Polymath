import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ResidueBoxViz } from "@/components/viz/ResidueBoxViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.4.3",
  minutes: 95,
  links: {
    revisits: ["m13.4.2", "m13.2.2", "m13.2.1"],
    foreshadows: ["m13.4.4", "m13.5.1", "m13.5.2"],
  },

  puzzle: (
    <>
      <p>
        Cauchy&rsquo;s theorem says a loop integral is 0 when there is nothing singular inside. When there are singularities
        inside, the integral is usually not 0. Could it be that each singularity contributes a fixed amount, computable from
        the function near that point alone?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the edges of the rectangle to enclose different poles. Compare the integral with the residue sum.</p>
      <ResidueBoxViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the residue">
        <p>
          If <M>{"a"}</M> is an isolated singularity of <M>{"f"}</M> with Laurent series{" "}
          <M>{"\\sum a_n (z - a)^n"}</M>, the residue of <M>{"f"}</M> at <M>{"a"}</M> is{" "}
          <M>{"\\operatorname{Res}(f, a) = a_{-1}"}</M>. Equivalently it is{" "}
          <M>{"\\frac{1}{2\\pi i}\\oint f \\, dz"}</M> round a small circle about <M>{"a"}</M>.
        </p>
      </Definition>

      <Theorem title="the residue theorem">
        <p>
          Let <M>{"\\gamma"}</M> be a simple closed curve, traversed anticlockwise, with <M>{"f"}</M> holomorphic on an open set
          containing <M>{"\\gamma"}</M> and its inside, except at finitely many points <M>{"a_1, \\dots, a_k"}</M> inside. Then
        </p>
        <MD>{"\\oint_\\gamma f(z) \\, dz = 2\\pi i \\sum_{j=1}^k \\operatorname{Res}(f, a_j)."}</MD>
      </Theorem>

      <Proof>
        <p>
          Cut the region between <M>{"\\gamma"}</M> and small circles <M>{"C_j"}</M> about the <M>{"a_j"}</M> into pieces on
          which Cauchy&rsquo;s theorem applies. The cuts are traversed in both directions and cancel, so{" "}
          <M>{"\\oint_\\gamma f = \\sum_j \\oint_{C_j} f"}</M>. On <M>{"C_j"}</M> integrate the Laurent series term by term:
          only <M>{"a_{-1}"}</M> survives, giving <M>{"2\\pi i \\operatorname{Res}(f, a_j)"}</M>.
        </p>
      </Proof>

      <Example title="computing residues">
        <p>
          At a simple pole, <M>{"\\operatorname{Res}(f, a) = \\lim_{z \\to a}(z - a)f(z)"}</M>; if{" "}
          <M>{"f = g/h"}</M> with <M>{"h(a) = 0 \\ne h'(a)"}</M>, it is <M>{"g(a)/h'(a)"}</M>. At a pole of order{" "}
          <M>{"m"}</M>,
        </p>
        <MD>{"\\operatorname{Res}(f, a) = \\frac{1}{(m-1)!}\\lim_{z \\to a} \\frac{d^{m-1}}{dz^{m-1}}\\big[(z - a)^m f(z)\\big]."}</MD>
        <p>
          For example, at 1 the function <M>{"\\frac{1}{z(z-1)(z-2i)}"}</M> has residue{" "}
          <M>{"\\frac{1}{1 \\cdot (1 - 2i)} = \\frac{1 + 2i}{5}"}</M>.
        </p>
      </Example>

      <Remark title="more general curves">
        <p>
          For any closed curve, each residue is weighted by the winding number of the curve about that point. The curve may
          wind twice round one pole and not at all round another.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "res1",
      rung: "check",
      prompt: <p>Find the real part of the residue of <M>{"\\frac{1}{z(z-1)(z-2i)}"}</M> at <M>{"z = 1"}</M>.</p>,
      answer: { kind: "numeric", value: 0.2, tolerance: 0.001 },
    },
    {
      key: "res2",
      rung: "check",
      prompt: <p>Find the residue of <M>{"e^z / z^3"}</M> at 0.</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "loop",
      rung: "apply",
      prompt: <p>Compute <M>{"\\oint_{|z|=2} \\frac{z}{z^2 + 1} \\, dz"}</M>. Give its imaginary part to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 6.283, tolerance: 0.002 },
    },
    {
      key: "quartic",
      rung: "apply",
      prompt: <p>Find the residue of <M>{"\\frac{1}{z^4 - 1}"}</M> at <M>{"z = 1"}</M>.</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>Compute <M>{"\\oint_{|z|=3} \\frac{e^z}{(z-1)(z-2)} \\, dz"}</M>. Give its imaginary part to 2 decimal places.</p>,
      answer: { kind: "numeric", value: 29.35, tolerance: 0.01 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove the residue theorem for a circle containing finitely many isolated singularities.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Reduces the integral to a sum of integrals round small circles about each singularity, using Cauchy’s theorem.",
          "Integrates the Laurent series term by term on each small circle.",
          "Notes only the 1/(z − a) term contributes, giving 2πi times the residue.",
        ],
      },
    },
    {
      key: "sum",
      rung: "stretch",
      prompt: <p>Let <M>{"p/q"}</M> be a rational function with <M>{"\\deg q \\ge \\deg p + 2"}</M>. Show that the sum of all its residues is 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Integrates round a circle of radius R enclosing every pole, so the integral is 2πi times the total.",
          "Bounds the integral by the ML inequality: |p/q| ≤ C/R² on the circle, length 2πR, so it tends to 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a residue is, how the residue theorem follows from Cauchy's theorem and Laurent series, and how to compute residues at simple and higher-order poles.",

  glimpse: (
    <p>
      The next lesson uses residues to evaluate real integrals that have no elementary antiderivative. The argument principle
      and Rouché&rsquo;s theorem apply the residue theorem to f′/f to count zeros.
    </p>
  ),
};
