import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SectionalTiltViz } from "@/components/viz/SectionalTiltViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.3.2",
  minutes: 90,
  links: {
    revisits: ["m31.3.1", "m16.3.2", "m8.4.2"],
    foreshadows: ["m31.4.1", "m31.5.2", "m31.5.3"],
  },

  puzzle: (
    <>
      <p>
        A cylinder S² × R, a sphere times a line, curves in some directions and not in others. The curvature tensor
        records all of this in many components. Is there a single number for each direction, or each plane, that says how
        curved the space is there, and do these numbers determine the whole tensor?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Tilt a 2-plane in a three-dimensional tangent space and read off its curvature.</p>
      <SectionalTiltViz />
    </>
  ),

  theory: (
    <>
      <Definition title="sectional curvature">
        <p>
          For a 2-plane σ in <M>{"T_pM"}</M> spanned by v and w,{" "}
          <M>{"K(\\sigma) = \\dfrac{\\mathrm{Rm}(v, w, w, v)}{|v|^2 |w|^2 - \\langle v, w \\rangle^2}"}</M>. It does not
          depend on the basis chosen, and it equals the Gaussian curvature at p of the surface swept out by geodesics
          tangent to σ.
        </p>
      </Definition>

      <Theorem title="sectional curvature determines Rm">
        <p>
          If two curvature tensors at p have the same sectional curvature on every plane, they are equal. The symmetries of
          Rm let one recover Rm(X, Y, Z, W) by polarisation. In particular, K constant on all planes at every point forces{" "}
          <M>{"R(X, Y)Z = K(\\langle Y, Z \\rangle X - \\langle X, Z \\rangle Y)"}</M>.
        </p>
      </Theorem>

      <Definition title="Ricci and scalar curvature">
        <p>
          The <strong>Ricci tensor</strong> is the trace <M>{"\\mathrm{Ric}(Y, Z) = \\operatorname{tr}(X \\mapsto R(X, Y)Z)"}</M>,
          a symmetric 2-tensor. For a unit vector v completed to an orthonormal basis <M>{"v, e_2, \\dots, e_n"}</M>,{" "}
          <M>{"\\mathrm{Ric}(v, v) = \\sum_{j \\ge 2} K(v, e_j)"}</M>. The <strong>scalar curvature</strong> is the trace{" "}
          <M>{"S = \\sum_i \\mathrm{Ric}(e_i, e_i) = \\sum_{i \\ne j} K(e_i, e_j)"}</M>.
        </p>
      </Definition>

      <Example title="model spaces">
        <p>
          The unit n-sphere has K = 1 on every plane, <M>{"\\mathrm{Ric} = (n - 1)g"}</M> and S = n(n − 1). For a surface,
          Ric = Kg and S = 2K, so all three notions reduce to Gauss&rsquo;s curvature. For S² × R, the plane tangent to the
          sphere has K = 1, planes containing the R direction have K = 0, and S = 2.
        </p>
      </Example>

      <Remark title="Einstein metrics">
        <p>
          A metric is <strong>Einstein</strong> if Ric = λg for a constant λ. Ricci curvature is symmetric, so at each point
          it has an orthonormal eigenbasis by the spectral theorem; Einstein means all eigenvalues are equal everywhere.
          Einstein&rsquo;s vacuum field equations ask a Lorentzian metric to be Ricci-flat.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "scal",
      rung: "check",
      prompt: <p>What is the scalar curvature of the unit n-sphere?</p>,
      answer: { kind: "choice", options: ["n(n − 1)", "n", "1", "n²"], correct: [0] },
    },
    {
      key: "det",
      rung: "check",
      prompt: <p>Does knowing the sectional curvature of every plane at p determine the full curvature tensor at p?</p>,
      answer: { kind: "choice", options: ["Yes", "No, only the Ricci tensor", "No, only the scalar curvature", "Only in dimension 2"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose S² × R and set the tilt to 60°. What is K(σ)?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.005 },
    },
    {
      key: "s4",
      rung: "apply",
      prompt: <p>What is the scalar curvature of the unit 4-sphere?</p>,
      answer: { kind: "numeric", value: 12, tolerance: 0 },
    },
    {
      key: "h2r",
      rung: "apply",
      prompt: <p>On H² × R, what is Ric(v, v) for a unit vector v tangent to the H² factor?</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that for an orthonormal basis e₁, …, eₙ, Ric(e₁, e₁) is the sum of K(e₁, eⱼ) over j ≠ 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the trace in the orthonormal basis: Ric(e₁, e₁) = Σᵢ ⟨R(eᵢ, e₁)e₁, eᵢ⟩.",
          "Notes the i = 1 term vanishes because R(e₁, e₁) = 0.",
          "Identifies each remaining term as Rm(eᵢ, e₁, e₁, eᵢ) = K(eᵢ, e₁), which is K(e₁, eᵢ).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is S² × R an Einstein manifold? Explain.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes Ric = 0 on the R direction and Ric = 1 on unit vectors tangent to S².",
          "Concludes the eigenvalues differ, so Ric is not a constant multiple of g: not Einstein.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Curvature tells nearby geodesics how to spread apart or close in. The tool for measuring that is a vector field
        along a geodesic that solves a second-order equation involving R.
      </p>
      <p>Next, Jacobi fields.</p>
    </>
  ),
};
