import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { NearestPointViz } from "@/components/viz/NearestPointViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.2.1",
  minutes: 90,
  links: {
    revisits: ["m23.1.3", "m8.3.4", "m8.3.3"],
    foreshadows: ["m23.2.2", "m23.2.3", "m23.5.3"],
  },

  puzzle: (
    <>
      <p>
        Among all straight lines, one fits a cloud of data points best. Among all polynomials of degree 5, one is closest to
        a given function. In finite dimensions, a closest point exists because closed bounded sets are compact. In infinite
        dimensions they are not. Why, then, does a best approximation still exist?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move a point around, and find its nearest point in four different sets.</p>
      <NearestPointViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Hilbert spaces">
        <p>
          An <strong>inner product space</strong> has an inner product <M>{"\\langle x, y \\rangle"}</M>, giving the norm{" "}
          <M>{"\\|x\\| = \\sqrt{\\langle x, x \\rangle}"}</M>; a <strong>Hilbert space</strong> is one complete in this norm.
          Examples: <M>{"\\mathbb{R}^n"}</M>, <M>{"\\ell^2"}</M>, <M>{"L^2(\\mu)"}</M>. Inner product norms satisfy the{" "}
          <strong>parallelogram law</strong>
        </p>
        <MD>{"\\|x + y\\|^2 + \\|x - y\\|^2 = 2\\|x\\|^2 + 2\\|y\\|^2,"}</MD>
        <p>and by a theorem of Jordan and von Neumann, only they do.</p>
      </Definition>

      <Theorem title="the projection theorem">
        <p>
          If <M>K</M> is a non-empty closed convex subset of a Hilbert space <M>H</M>, each <M>{"x \\in H"}</M> has a unique
          nearest point <M>{"Px \\in K"}</M>, characterised by{" "}
          <M>{"\\operatorname{Re}\\langle x - Px, \\, y - Px \\rangle \\le 0"}</M> for all <M>{"y \\in K"}</M>. If <M>K</M> is
          a closed subspace <M>M</M>, then <M>{"x - Px \\perp M"}</M> and
        </p>
        <MD>{"H = M \\oplus M^\\perp."}</MD>
      </Theorem>

      <Example title="why it works">
        <p>
          Take <M>{"y_n \\in K"}</M> with <M>{"\\|x - y_n\\| \\to d = \\operatorname{dist}(x, K)"}</M>. The parallelogram law,
          applied to <M>{"x - y_n"}</M> and <M>{"x - y_m"}</M>, together with <M>{"\\tfrac12(y_n + y_m) \\in K"}</M>, gives{" "}
          <M>{"\\|y_n - y_m\\|^2 \\le 2\\|x - y_n\\|^2 + 2\\|x - y_m\\|^2 - 4d^2 \\to 0"}</M>. So the sequence is Cauchy, and
          completeness supplies the limit. Convexity replaces compactness.
        </p>
      </Example>

      <Remark title="projections and their failure elsewhere">
        <p>
          The orthogonal projection <M>P</M> onto <M>M</M> is linear, satisfies <M>{"P^2 = P"}</M>, and has norm 1 unless{" "}
          <M>{"M = \\{0\\}"}</M>. In <M>{"L^2"}</M> it gives least squares, and in probability, conditional expectation. In
          general Banach spaces nearest points may fail to exist, or to be unique: with the max norm on <M>{"\\mathbb{R}^2"}</M>,
          a point can have a whole segment of nearest points on a line.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "proj",
      rung: "check",
      prompt: <p>What does the projection theorem guarantee for a non-empty closed convex set K in a Hilbert space?</p>,
      answer: { kind: "choice", options: ["Each point has a unique nearest point in K", "K is compact", "K is a subspace", "Each point lies in K"], correct: [0] },
    },
    {
      key: "para",
      rung: "check",
      prompt: <p>Which identity characterises norms that come from an inner product?</p>,
      answer: { kind: "choice", options: ["The parallelogram law", "The triangle inequality", "Hölder's inequality", "The reverse triangle inequality"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the closed unit disc and x at distance 1.8 from 0, what is the distance from x to its nearest point?</p>,
      answer: { kind: "numeric", value: 0.8 },
    },
    {
      key: "axis",
      rung: "apply",
      prompt: <p>In ℝ², what is the distance from (3, 4) to the x-axis?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "perp",
      rung: "apply",
      prompt: <p>For a closed subspace M, how is x − Px related to M?</p>,
      answer: { kind: "choice", options: ["It is orthogonal to every vector in M", "It lies in M", "It has norm 1", "It is parallel to x"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the nearest point in a closed convex set K is unique, using the parallelogram law.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes y and z in K both at the minimal distance d from x.",
          "Applies the parallelogram law to x − y and x − z, using that the midpoint of y and z lies in K and so is at distance at least d.",
          "Concludes ‖y − z‖² ≤ 0, so y = z.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>With the max norm on ℝ², show that (0, 2) has more than one nearest point on the segment from (−1, 0) to (1, 0).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the max-norm distance from (0, 2) to (t, 0) as max(|t|, 2) = 2 for |t| ≤ 1.",
          "Concludes every point of the segment is nearest, so uniqueness fails without an inner product.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Every vector y gives a bounded linear functional, x ↦ ⟨x, y⟩. With the projection theorem in hand, one can show
        there are no others.
      </p>
      <p>
        Next, the Riesz representation theorem: a Hilbert space is its own dual, the representing vector found
        perpendicular to the kernel, adjoint operators, and a second proof of Radon-Nikodym.
      </p>
    </>
  ),
};
