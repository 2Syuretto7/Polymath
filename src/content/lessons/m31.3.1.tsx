import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LoopRotationViz } from "@/components/viz/LoopRotationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m31.3.1",
  minutes: 90,
  links: {
    revisits: ["m31.1.2", "m31.1.3", "m16.4.2"],
    foreshadows: ["m31.3.2", "m31.4.1", "p32.1.3"],
  },

  puzzle: (
    <>
      <p>
        Walk from the North Pole down to the equator, a quarter of the way round the equator, and back up, always carrying
        a spear without turning it. You return with the spear turned through a right angle. On a flat field it would come
        back unchanged. Gauss measured this for surfaces with one number. In higher dimensions, what object records how a
        space is curved?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Carry a vector round a geodesic circle and compare the rotation on return with the area enclosed.</p>
      <LoopRotationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the curvature endomorphism">
        <p>
          For a Riemannian manifold with Levi-Civita connection ∇, set{" "}
          <M>{"R(X, Y)Z = \\nabla_X \\nabla_Y Z - \\nabla_Y \\nabla_X Z - \\nabla_{[X, Y]} Z"}</M>. It measures the failure
          of second covariant derivatives to commute. The <strong>curvature tensor</strong> is{" "}
          <M>{"\\mathrm{Rm}(X, Y, Z, W) = \\langle R(X, Y)Z, W \\rangle"}</M>.
        </p>
      </Definition>

      <Theorem title="R is a tensor">
        <p>
          R(X, Y)Z is linear over smooth functions in each of X, Y and Z, so its value at p depends only on the vectors at
          p. For example, expanding gives <M>{"R(fX, Y)Z = f R(X, Y)Z"}</M>: the derivatives of f produced by{" "}
          <M>{"\\nabla_Y(f \\nabla_X Z)"}</M> and by <M>{"[fX, Y] = f[X, Y] - (Yf)X"}</M> cancel.
        </p>
      </Theorem>

      <Theorem title="symmetries">
        <ul>
          <li><M>{"\\mathrm{Rm}(X, Y, Z, W) = -\\mathrm{Rm}(Y, X, Z, W) = -\\mathrm{Rm}(X, Y, W, Z)"}</M>.</li>
          <li>Pair symmetry: <M>{"\\mathrm{Rm}(X, Y, Z, W) = \\mathrm{Rm}(Z, W, X, Y)"}</M>.</li>
          <li>First Bianchi identity: <M>{"R(X, Y)Z + R(Y, Z)X + R(Z, X)Y = 0"}</M>.</li>
        </ul>
        <p>
          These cut the number of independent components in dimension n to <M>{"n^2(n^2 - 1)/12"}</M>: 1 for a surface,
          6 in dimension 3, 20 in dimension 4.
        </p>
      </Theorem>

      <Example title="constant curvature">
        <p>
          The round sphere, Euclidean space and hyperbolic space satisfy{" "}
          <M>{"R(X, Y)Z = K(\\langle Y, Z \\rangle X - \\langle X, Z \\rangle Y)"}</M> with K = 1, 0, −1. In Euclidean space
          the coordinate fields are parallel, so every term in the definition vanishes.
        </p>
      </Example>

      <Theorem title="flatness">
        <p>
          R vanishes identically if and only if every point has a neighbourhood isometric to an open subset of Euclidean
          space. Curvature is exactly the local obstruction to flatness, and the vector carried round a small loop spanned
          by X and Y turns, to leading order, by R(X, Y) times the enclosed area.
        </p>
      </Theorem>

      <Remark title="intrinsic">
        <p>
          R is built from the metric alone. For a surface in R³ it reduces to Gauss&rsquo;s curvature, so this is the
          Theorema Egregium again, now for spaces with no surrounding space at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What does R(X, Y)Z measure?</p>,
      answer: { kind: "choice", options: ["The failure of second covariant derivatives to commute", "The length of a curve", "The torsion of the connection", "The volume of a ball"], correct: [0] },
    },
    {
      key: "count",
      rung: "check",
      prompt: <p>How many independent components does the curvature tensor have in dimension 4?</p>,
      answer: { kind: "numeric", value: 20, tolerance: 0 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the sphere and r = 1. By how many degrees has the vector turned on return, to the nearest degree?</p>,
      answer: { kind: "numeric", value: 165.5, tolerance: 1 },
    },
    {
      key: "flat",
      rung: "apply",
      prompt: <p>Why is R = 0 for the Euclidean metric?</p>,
      answer: { kind: "choice", options: ["The coordinate fields are parallel and commute, so every term vanishes", "Because Euclidean space is compact", "Because R is always zero", "Because the metric is not smooth"], correct: [0] },
    },
    {
      key: "ratio",
      rung: "apply",
      prompt: <p>On the hyperbolic plane, the rotation on return divided by the enclosed area is always what number?</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that R(fX, Y)Z = f R(X, Y)Z for a smooth function f.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that differentiating in the direction fX is f times differentiating in the direction X, and that the product rule gives an extra term (Yf) times the derivative of Z along X.",
          "Uses [fX, Y] = f[X, Y] − (Yf)X, so the bracket term contributes the same extra term with the opposite sign.",
          "Collects terms and sees the (Yf) terms cancel.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>With R(X, Y)Z = K(⟨Y, Z⟩X − ⟨X, Z⟩Y), compute ⟨R(X, Y)Y, X⟩ for orthonormal X and Y.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Substitutes Z = Y to get R(X, Y)Y = K(X − ⟨X, Y⟩Y) = KX.",
          "Takes the inner product with X to get K.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The full tensor holds a lot of information. Feeding it two directions gives one number for each tangent plane;
        averaging over planes gives coarser but more usable measures.
      </p>
      <p>Next, sectional, Ricci and scalar curvature.</p>
    </>
  ),
};
