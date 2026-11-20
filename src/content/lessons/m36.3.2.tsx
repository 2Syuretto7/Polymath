import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { StableManifoldViz } from "@/components/viz/StableManifoldViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.3.2",
  minutes: 90,
  links: {
    revisits: ["m36.3.1", "m36.1.2", "m6.2.4"],
    foreshadows: ["m36.3.3", "m36.5.2", "m36.5.3"],
  },

  puzzle: (
    <>
      <p>
        At a saddle, the linear map has one line of points that converge to the fixed point. The real map is not linear.
        Do points converging to the saddle still form a curve, and if so, what does it look like far away?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Start just above, on or below the stable manifold, and follow the orbit.</p>
      <StableManifoldViz />
    </>
  ),

  theory: (
    <>
      <Definition title="stable and unstable sets">
        <p>
          For a fixed point p of a homeomorphism f, the <strong>stable set</strong> is{" "}
          <M>{"W^s(p) = \\{x : f^n(x) \\to p \\text{ as } n \\to \\infty\\}"}</M> and the <strong>unstable set</strong>{" "}
          <M>{"W^u(p)"}</M> is the stable set of <M>{"f^{-1}"}</M>. The local versions only count points whose orbits stay
          within a small distance of p.
        </p>
      </Definition>

      <Theorem title="the stable manifold theorem (Hadamard, Perron)">
        <p>
          Let p be a hyperbolic fixed point of a <M>{"C^k"}</M> diffeomorphism, with splitting{" "}
          <M>{"E^s \\oplus E^u"}</M>. The local stable manifold is a <M>{"C^k"}</M> embedded disc through p, tangent to{" "}
          <M>{"E^s"}</M> and of the same dimension, and likewise for the unstable one. Nearby points off it leave at an
          exponential rate.
        </p>
      </Theorem>

      <Remark title="global manifolds">
        <p>
          The global stable manifold is the union of the preimages <M>{"f^{-n}(W^s_{\\mathrm{loc}})"}</M>. It is an injectively
          immersed copy of <M>{"\\mathbb{R}^{\\dim E^s}"}</M>, but it can wind back and accumulate on itself.
        </p>
      </Remark>

      <Example title="homoclinic tangles">
        <p>
          A point lying on both <M>{"W^s(p)"}</M> and <M>{"W^u(p)"}</M>, other than p, is <strong>homoclinic</strong>.
          Poincaré found such points in the three-body problem and was startled by the tangle they force. Smale and
          Birkhoff showed that a transverse homoclinic point implies a horseshoe, and so a shift on two symbols, near it:
          chaos follows from one intersection.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the stable set of a fixed point p?</p>,
      answer: { kind: "choice", options: ["The points whose forward orbits converge to p", "The points fixed by f", "The points whose orbits stay bounded", "The eigenvectors of Df(p)"], correct: [0] },
    },
    {
      key: "tan",
      rung: "check",
      prompt: <p>The local stable manifold at a hyperbolic fixed point is tangent to what?</p>,
      answer: { kind: "choice", options: ["The stable subspace Eˢ of the derivative", "The unstable subspace", "Every eigenvector", "Nothing in particular"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with ε = 0, what is the x-coordinate after 5 iterates?</p>,
      answer: { kind: "numeric", value: 0.03125, tolerance: 0.0001 },
    },
    {
      key: "img",
      rung: "apply",
      prompt: <p>For f(x, y) = (x/2, 2y − 7x²/4), what is the y-coordinate of f(0.5, 0.25)?</p>,
      answer: { kind: "numeric", value: 0.0625, tolerance: 0.0001 },
    },
    {
      key: "dim",
      rung: "apply",
      prompt: <p>A fixed point in ℝ³ has derivative with eigenvalues 3, 0.5 and 0.2. What is the dimension of its stable manifold?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For f(x, y) = (x/2, 2y − 7x²/4), show that the parabola y = x² is invariant and that its points converge to 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes f(x, x²) = (x/2, 2x² − 7x²/4) = (x/2, x²/4).",
          "Notes that x²/4 = (x/2)², so the image lies on the parabola.",
          "Iterates to get (x/2ⁿ, x²/4ⁿ) → (0, 0).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>For the same map, show that points off the parabola do not converge to 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets d = y − x² and computes d after one step: 2y − 7x²/4 − x²/4 = 2(y − x²) = 2d.",
          "Concludes that d doubles each step, so it grows if d ≠ 0.",
          "Deduces that the orbit cannot converge to 0, where d would tend to 0. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Hyperbolic points and their manifolds survive small changes to the map. When does the whole phase portrait
        survive?
      </p>
      <p>Next, structural stability.</p>
    </>
  ),
};
