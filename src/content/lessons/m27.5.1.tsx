import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LevyRefineViz } from "@/components/viz/LevyRefineViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.5.1",
  minutes: 90,
  links: {
    revisits: ["m27.4.4", "m9.5.4", "m27.1.4"],
    foreshadows: ["m27.5.2", "m27.5.3", "m37.1.1"],
  },

  puzzle: (
    <>
      <p>
        A random walk with steps ±1/√n every 1/n seconds has, at time 1, a law close to the standard normal. As n grows,
        the walks look more and more alike in shape: jagged, continuous-looking, with no preferred scale. Is there a single
        random continuous path that all of them approach, and can we actually build it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Build a path on [0, 1] by adding random midpoints, level by level.</p>
      <LevyRefineViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Brownian motion">
        <p>
          A <strong>standard Brownian motion</strong> is a process <M>{"(B_t)_{t \\ge 0}"}</M> with
        </p>
        <ul>
          <li><M>{"B_0 = 0"}</M>;</li>
          <li>independent increments: for <M>{"t_0 < t_1 < \\cdots < t_k"}</M>, the increments <M>{"B_{t_j} - B_{t_{j-1}}"}</M> are independent;</li>
          <li><M>{"B_t - B_s"}</M> is normal with mean 0 and variance t − s;</li>
          <li>almost surely, <M>{"t \\mapsto B_t"}</M> is continuous.</li>
        </ul>
        <p>
          Equivalently, B is a continuous Gaussian process with mean 0 and covariance{" "}
          <M>{"E[B_s B_t] = \\min(s, t)"}</M>.
        </p>
      </Definition>

      <Theorem title="existence (Lévy's construction)">
        <p>
          Brownian motion exists. On [0, 1], set <M>{"B_0 = 0"}</M> and <M>{"B_1 \\sim N(0, 1)"}</M>. At level k, for each
          dyadic midpoint m of an interval [a, b] of length <M>{"2^{-(k-1)}"}</M>, set{" "}
          <M>{"B_m = \\tfrac{1}{2}(B_a + B_b) + Z_m"}</M> with <M>{"Z_m \\sim N(0, 2^{-(k+1)})"}</M> independent. This gives
          the right joint law at dyadic times, since the conditional law of a Brownian bridge at its midpoint is exactly this.
          The level-k corrections are bounded by <M>{"c \\sqrt{k \\, 2^{-k}}"}</M> for all large k, almost surely, by a
          Gaussian tail bound and Borel–Cantelli; this bound is summable, so the piecewise linear paths converge uniformly to
          a continuous limit.
        </p>
      </Theorem>

      <Example title="scaling and symmetry">
        <p>
          If B is Brownian motion, so are <M>{"-B_t"}</M>, <M>{"c^{-1/2} B_{ct}"}</M> for c &gt; 0,{" "}
          <M>{"B_{s+t} - B_s"}</M> for fixed s, and <M>{"t B_{1/t}"}</M> (with value 0 at t = 0). Each claim reduces to
          checking the covariance and continuity.
        </p>
      </Example>

      <Remark title="Donsker's theorem">
        <p>
          The rescaled random walk <M>{"n^{-1/2} S_{\\lfloor nt \\rfloor}"}</M>, with any mean-zero, variance-one steps,
          converges in distribution, as a random continuous function, to Brownian motion. This is the central limit theorem
          for whole paths, and it explains why Brownian motion appears in physics, finance and statistics alike.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cov",
      rung: "check",
      prompt: <p>What is the covariance E[BₛBₜ] for standard Brownian motion?</p>,
      answer: { kind: "choice", options: ["min(s, t)", "st", "|t − s|", "max(s, t)"], correct: [0] },
    },
    {
      key: "var",
      rung: "check",
      prompt: <p>What is the variance of B₇ − B₃?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the variance of the new midpoints at level 3? Give four decimal places.</p>,
      answer: { kind: "numeric", value: 0.0625, tolerance: 0.0001 },
    },
    {
      key: "scale",
      rung: "apply",
      prompt: <p>If B is Brownian motion, for which constant a is aB₄ₜ again a Brownian motion?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "cond",
      rung: "apply",
      prompt: <p>Given B₀ = 0 and B₁ = 2, what is the conditional mean of B at time 1/2?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that Xₜ = B(ct)/√c is a Brownian motion, for c &gt; 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes X is a continuous centred Gaussian process with X₀ = 0.",
          "Computes E[XₛXₜ] = c⁻¹ min(cs, ct) = min(s, t).",
          "Concludes X has the law of Brownian motion.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can we not simply take independent N(0, t) variables Bₜ for every t and call the result Brownian motion?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that independent values at every time give the wrong covariance: increments over short intervals would not be small.",
          "Notes that such a process could not be continuous; continuity needs a construction such as Lévy’s or Kolmogorov’s criterion.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The path we built is continuous. It is also extremely rough: nowhere differentiable, of infinite length on every
        interval, yet with a precise quadratic variation.
      </p>
      <p>Next, path properties.</p>
    </>
  ),
};
