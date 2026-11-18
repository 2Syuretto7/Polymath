import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { WeakDriftViz } from "@/components/viz/WeakDriftViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.4.1",
  minutes: 90,
  links: {
    revisits: ["m23.3.2", "m23.2.2", "m23.3.1"],
    foreshadows: ["m23.4.2", "m23.4.3", "m23.5.2"],
  },

  puzzle: (
    <>
      <p>
        The unit vectors e₁, e₂, e₃, … of ℓ² are all at distance √2 from one another, so no subsequence converges. Yet in
        some sense they &lsquo;fade away&rsquo;: any fixed measurement you make of them tends to 0. Is there a useful notion
        of convergence that captures this fading?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Slide the spike eₙ along, and measure it against a fixed vector y.</p>
      <WeakDriftViz />
    </>
  ),

  theory: (
    <>
      <Definition title="weak and weak-star convergence">
        <p>
          In a normed space <M>X</M>, <M>{"x_n"}</M> converges <strong>weakly</strong> to <M>x</M>, written{" "}
          <M>{"x_n \\rightharpoonup x"}</M>, if <M>{"\\varphi(x_n) \\to \\varphi(x)"}</M> for every{" "}
          <M>{"\\varphi \\in X^*"}</M>. In the dual, <M>{"\\varphi_n"}</M> converges <strong>weak-star</strong> to{" "}
          <M>{"\\varphi"}</M> if <M>{"\\varphi_n(x) \\to \\varphi(x)"}</M> for every <M>{"x \\in X"}</M>: pointwise
          convergence of functionals.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          In <M>{"\\ell^2"}</M>, by Riesz every functional is <M>{"\\langle \\cdot, y \\rangle"}</M>, and{" "}
          <M>{"\\langle e_n, y \\rangle = y_n \\to 0"}</M>, so <M>{"e_n \\rightharpoonup 0"}</M> while{" "}
          <M>{"\\|e_n\\| = 1"}</M>. In <M>{"L^2[0, \\pi]"}</M>, <M>{"\\sin(nt) \\rightharpoonup 0"}</M> by the Riemann-Lebesgue
          lemma. In <M>{"C[0, 1]^*"}</M>, the point evaluations <M>{"\\delta_{1/n}"}</M> converge weak-star to{" "}
          <M>{"\\delta_0"}</M>, yet <M>{"\\|\\delta_{1/n} - \\delta_0\\| = 2"}</M>.
        </p>
      </Example>

      <Theorem title="basic facts">
        <p>
          Norm convergence implies weak convergence. Weak limits are unique, since <M>{"X^*"}</M> separates points by
          Hahn-Banach. Weakly convergent sequences are bounded, by uniform boundedness applied to their images in{" "}
          <M>{"X^{**}"}</M>, and the norm can only drop in the limit:
        </p>
        <MD>{"\\|x\\| \\le \\liminf_{n} \\|x_n\\| \\quad \\text{when } x_n \\rightharpoonup x."}</MD>
      </Theorem>

      <Remark title="when weak is strong">
        <p>
          In a Hilbert space, <M>{"x_n \\rightharpoonup x"}</M> together with <M>{"\\|x_n\\| \\to \\|x\\|"}</M> gives{" "}
          <M>{"x_n \\to x"}</M> in norm. In finite dimensions weak and norm convergence agree. And Schur showed that in{" "}
          <M>{"\\ell^1"}</M>, surprisingly, weakly convergent sequences converge in norm, though the topologies differ.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for xₙ to converge weakly to x?</p>,
      answer: { kind: "choice", options: ["φ(xₙ) → φ(x) for every bounded linear functional φ", "‖xₙ − x‖ → 0", "xₙ is bounded", "Every subsequence converges in norm"], correct: [0] },
    },
    {
      key: "star",
      rung: "check",
      prompt: <p>What is weak-star convergence of functionals φₙ to φ?</p>,
      answer: { kind: "choice", options: ["φₙ(x) → φ(x) for every x in X", "‖φₙ − φ‖ → 0", "φₙ has bounded norm", "φₙ(x) → 0 for every x"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with y = (1/k) and n = 5, what is ⟨eₙ, y⟩?</p>,
      answer: { kind: "numeric", value: 0.2 },
    },
    {
      key: "dist",
      rung: "apply",
      prompt: <p>What is the distance between e₃ and e₇ in ℓ²? Give a decimal.</p>,
      answer: { kind: "numeric", value: 1.4142, tolerance: 0.001 },
    },
    {
      key: "bdd",
      rung: "apply",
      prompt: <p>Which theorem shows that weakly convergent sequences are bounded?</p>,
      answer: { kind: "choice", options: ["The uniform boundedness principle", "The open mapping theorem", "The projection theorem", "Bessel’s inequality"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>In a Hilbert space, prove that if xₙ converges weakly to x and ‖xₙ‖ → ‖x‖, then xₙ → x in norm.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands ‖xₙ − x‖² = ‖xₙ‖² − 2 Re⟨xₙ, x⟩ + ‖x‖².",
          "Uses weak convergence with the functional ⟨·, x⟩ to get ⟨xₙ, x⟩ → ‖x‖².",
          "Concludes the expression tends to ‖x‖² − 2‖x‖² + ‖x‖² = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that if xₙ converges weakly to x, then ‖x‖ ≤ liminf ‖xₙ‖.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Chooses, by Hahn-Banach, φ with ‖φ‖ = 1 and φ(x) = ‖x‖.",
          "Writes ‖x‖ = φ(x) = lim φ(xₙ) and bounds |φ(xₙ)| ≤ ‖xₙ‖.",
          "Concludes ‖x‖ ≤ liminf ‖xₙ‖. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The closed unit ball of an infinite-dimensional space is never compact in norm. In the weak-star topology on a dual
        space, it always is.
      </p>
      <p>
        Next, the Banach-Alaoglu theorem: the closed unit ball of a dual space is weak-star compact, the Tychonoff argument
        behind it, and the sequential version that extracts convergent subsequences in separable spaces.
      </p>
    </>
  ),
};
