import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { TangentGrowthViz } from "@/components/viz/TangentGrowthViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.5.2",
  minutes: 90,
  links: {
    revisits: ["m36.5.1", "m36.1.4", "m36.3.1"],
    foreshadows: ["m36.5.3", "m36.3.3", "m36.4.2"],
  },

  puzzle: (
    <>
      <p>
        Lorenz found in 1961 that rounding one input of his weather model to three decimals changed the forecast completely
        within weeks. Small errors in a chaotic system grow, but how fast? Is there one number that measures it, the same
        for almost every starting point?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a map and a starting point, and watch the average stretching rate along the orbit settle down.</p>
      <TangentGrowthViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Lyapunov exponent of a map of an interval">
        <p>
          For a differentiable map f, the chain rule gives{" "}
          <M>{"(f^n)'(x) = \\prod_{k=0}^{n-1} f'(f^k x)"}</M>. The <strong>Lyapunov exponent</strong> at x is{" "}
          <M>{"\\lambda(x) = \\lim_n \\tfrac1n \\log|(f^n)'(x)| = \\lim_n \\tfrac1n \\sum_{k<n} \\log|f'(f^k x)|"}</M>, when the
          limit exists. Two orbits starting δ apart separate roughly like <M>{"\\delta e^{n\\lambda}"}</M> while they stay
          close.
        </p>
      </Definition>

      <Theorem title="the exponent of an ergodic measure">
        <p>
          If μ is an ergodic invariant measure and log|f′| is integrable, Birkhoff&rsquo;s theorem gives{" "}
          <M>{"\\lambda(x) = \\int \\log|f'|\\,d\\mu"}</M> for μ-almost every x. For the logistic map at r = 4 with its
          invariant density <M>{"1/(\\pi\\sqrt{x(1-x)})"}</M>, this integral is log 2.
        </p>
      </Theorem>

      <Theorem title="Oseledets’ multiplicative ergodic theorem (1968)">
        <p>
          Let f be a diffeomorphism of a compact manifold of dimension d with an ergodic measure μ. There are numbers{" "}
          <M>{"\\lambda_1 > \\cdots > \\lambda_k"}</M> and, at almost every x, a splitting of the tangent space{" "}
          <M>{"E_1(x) \\oplus \\cdots \\oplus E_k(x)"}</M>, preserved by Df, such that every non-zero v in{" "}
          <M>{"E_i(x)"}</M> satisfies <M>{"\\tfrac1n \\log|Df^n_x v| \\to \\lambda_i"}</M>.
        </p>
      </Theorem>

      <Theorem title="Ruelle’s inequality and Pesin’s formula">
        <p>
          For a C¹ map and invariant μ, <M>{"h_\\mu(f) \\le \\sum_{\\lambda_i > 0} \\lambda_i \\dim E_i"}</M>. Pesin
          showed equality holds for smooth measures of C² diffeomorphisms. Information is produced exactly by the directions
          that stretch.
        </p>
      </Theorem>

      <Example title="periodic orbits and linear maps">
        <p>
          On a periodic orbit of period p, the exponent is <M>{"\\tfrac1p \\log|(f^p)'(x)|"}</M>. At r = 3.2 the logistic map
          has an attracting 2-cycle with <M>{"(f^2)' = 0.16"}</M>, so λ = ½ log 0.16 ≈ −0.916. The cat map{" "}
          <M>{"(x, y) \\mapsto (2x + y, x + y)"}</M> on the torus has exponents{" "}
          <M>{"\\pm\\log\\tfrac{3+\\sqrt5}{2}"}</M> everywhere, the logarithms of its eigenvalues.
        </p>
      </Example>

      <Remark title="numerical caution">
        <p>
          Computed orbits are not true orbits, yet their averages usually give the right exponent. The shadowing lemma for
          hyperbolic systems explains why: each computed orbit stays close to some genuine one.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pos",
      rung: "check",
      prompt: <p>What does a positive Lyapunov exponent indicate?</p>,
      answer: { kind: "choice", options: ["Nearby orbits separate exponentially fast", "Every orbit is periodic", "The map preserves length", "Orbits converge to a fixed point"], correct: [0] },
    },
    {
      key: "ruelle",
      rung: "check",
      prompt: <p>What does Ruelle&rsquo;s inequality relate?</p>,
      answer: { kind: "choice", options: ["Entropy and the sum of the positive Lyapunov exponents", "Entropy and the number of fixed points", "The exponents and the dimension of the manifold only", "Mixing and recurrence"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the logistic map with r = 3.2. What average do you read after 2000 steps, to two decimal places?</p>,
      answer: { kind: "numeric", value: -0.92, tolerance: 0.01 },
    },
    {
      key: "dbl",
      rung: "apply",
      prompt: <p>What is the Lyapunov exponent of the doubling map x ↦ 2x mod 1, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.693, tolerance: 0.001 },
    },
    {
      key: "cat",
      rung: "apply",
      prompt: <p>What is the positive Lyapunov exponent of the cat map (x, y) ↦ (2x + y, x + y), to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.962, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that on a periodic orbit {"{x₁, x₂}"} of period 2 the Lyapunov exponent is ½ log |f′(x₁) f′(x₂)|.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes (fⁿ)′(x₁) as a product of derivatives along the orbit by the chain rule.",
          "Notes the factors alternate between f′(x₁) and f′(x₂), so for n = 2m the product is (f′(x₁) f′(x₂))ᵐ.",
          "Divides the logarithm by n and lets n → ∞ to get ½ log |f′(x₁) f′(x₂)|.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>How can a map have a positive Lyapunov exponent while all its orbits stay in a bounded interval?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the exponent measures stretching of infinitesimal displacements, not of distances between far points.",
          "Explains that the map also folds, as the logistic map does at ½, so stretched intervals are bent back into the interval.",
          "Connects stretching and folding with chaos. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Sensitive dependence, dense periodic orbits, positive entropy, positive exponents: each has been called the
        definition of chaos. How are they related, and which implies which?
      </p>
      <p>Next, chaos made precise.</p>
    </>
  ),
};
