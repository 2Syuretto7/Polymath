import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SobolevExponentViz } from "@/components/viz/SobolevExponentViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.3.4",
  minutes: 90,
  links: {
    revisits: ["m33.3.3", "m33.3.1", "m22.5.1"],
    foreshadows: ["m33.4.1", "m33.4.3", "m33.6.1"],
  },

  puzzle: (
    <>
      <p>
        In one dimension, a function with integrable derivative is continuous. In the plane, log log(1/|x|) has
        square-integrable gradient near 0 and is unbounded. In three dimensions, |x|⁻¹ᐟ⁴ has square-integrable gradient
        too. Knowing the derivatives lie in Lᵖ, how much do you know about the function, and why does the dimension matter
        so much?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the dimension and p, and see which exponent the Sobolev inequality allows.</p>
      <SobolevExponentViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Sobolev conjugate">
        <p>
          For 1 ≤ p &lt; n, the <strong>Sobolev conjugate</strong> of p is <M>{"p^* = \\dfrac{np}{n - p}"}</M>, so that{" "}
          <M>{"\\tfrac{1}{p^*} = \\tfrac{1}{p} - \\tfrac{1}{n}"}</M>. It is the only exponent q for which an inequality{" "}
          <M>{"\\|u\\|_{L^q} \\le C \\|Du\\|_{L^p}"}</M> on all of ℝⁿ can survive rescaling <M>{"u(x) \\mapsto u(\\lambda x)"}</M>.
        </p>
      </Definition>

      <Theorem title="Gagliardo-Nirenberg-Sobolev">
        <p>
          For 1 ≤ p &lt; n there is a constant C, depending only on n and p, with{" "}
          <M>{"\\|u\\|_{L^{p^*}(\\mathbb{R}^n)} \\le C \\|Du\\|_{L^p(\\mathbb{R}^n)}"}</M> for all{" "}
          <M>{"u \\in C_c^1(\\mathbb{R}^n)"}</M>. The case p = 1 is proved by bounding |u| by the integral of |Du| along each
          coordinate line and combining the n bounds with the generalised Hölder inequality; the general case follows by
          applying it to a power of |u|. For a bounded C¹ domain, the extension theorem gives{" "}
          <M>{"\\|u\\|_{L^{q}(U)} \\le C \\|u\\|_{W^{1,p}(U)}"}</M> for all q ≤ p*.
        </p>
      </Theorem>

      <Theorem title="Morrey’s inequality">
        <p>
          For n &lt; p ≤ ∞, every u in <M>{"W^{1,p}(\\mathbb{R}^n)"}</M> has a Hölder continuous representative, with{" "}
          <M>{"|u(x) - u(y)| \\le C |x - y|^{1 - n/p} \\|Du\\|_{L^p}"}</M>. So when p exceeds the dimension, Sobolev
          functions are continuous. In the borderline case p = n, u lies in <M>{"L^q_{\\mathrm{loc}}"}</M> for every finite
          q, but need not be bounded.
        </p>
      </Theorem>

      <Example title="higher derivatives">
        <p>
          Iterating, <M>{"W^{k,p}(U) \\subset L^q(U)"}</M> with <M>{"\\tfrac{1}{q} = \\tfrac{1}{p} - \\tfrac{k}{n}"}</M> when
          kp &lt; n, and if kp &gt; n then u has continuous derivatives up to order <M>{"k - \\lfloor n/p \\rfloor - 1"}</M>.
          For example, <M>{"H^2"}</M> functions in three dimensions are continuous, since 2 · 2 &gt; 3.
        </p>
      </Example>

      <Remark title="compactness">
        <p>
          The Rellich-Kondrachov theorem adds that on a bounded C¹ domain the inclusion of <M>{"W^{1,p}"}</M> into{" "}
          <M>{"L^q"}</M> is compact for q &lt; p*: bounded sequences have subsequences converging in <M>{"L^q"}</M>. This is
          the source of compactness for the direct method in the calculus of variations and for the Fredholm theory of
          elliptic operators. At q = p* compactness fails, through concentration, and the study of what happens there leads
          to the Yamabe problem and to concentration compactness.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "conj",
      rung: "check",
      prompt: <p>What is the Sobolev conjugate p* of p, for p &lt; n?</p>,
      answer: { kind: "choice", options: ["np/(n − p)", "np/(n + p)", "p/(p − 1)", "n − p"], correct: [0] },
    },
    {
      key: "morrey",
      rung: "check",
      prompt: <p>What does Morrey&rsquo;s inequality say for p &gt; n?</p>,
      answer: { kind: "choice", options: ["W¹˒ᵖ functions have Hölder continuous representatives", "W¹˒ᵖ functions are smooth", "W¹˒ᵖ functions are unbounded", "W¹˒ᵖ is a Hilbert space"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set n = 3 and p = 2. What is p*?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "plane",
      rung: "apply",
      prompt: <p>In the plane, n = 2, what is p* for p = 1?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "h2",
      rung: "apply",
      prompt: <p>Are H² functions on a bounded smooth domain in ℝ³ continuous?</p>,
      answer: { kind: "choice", options: ["Yes, since kp = 4 exceeds n = 3", "No, never", "Only if they vanish on the boundary", "Only in dimension 1"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use the scaling u(x) ↦ u(λx) to show that ‖u‖ in Lq ≤ C‖Du‖ in Lᵖ on ℝⁿ can only hold for all u when q = p*.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes that the Lq norm of u(λx) is λ to the power −n/q times that of u.",
          "Computes that the Lᵖ norm of its gradient is λ to the power 1 − n/p times that of Du.",
          "Lets λ tend to 0 or ∞ to see the inequality fails unless −n/q = 1 − n/p, which gives q = p*.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>For which a does u = |x|⁻ᵃ on the unit ball of ℝ³ lie in Lᵖ* with p = 2, and how does that compare with the condition for u to be in W¹˒²?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes that u lies in L⁶ of the ball when 6a < 3, that is a < 1/2.",
          "Recalls that u lies in W¹˒² when a < (n − p)/p = 1/2.",
          "Observes that the conditions match, as the Sobolev inequality predicts. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        With Sobolev spaces in hand, an equation can be solved by asking for less: not a twice differentiable function, but
        one that satisfies the equation when tested against every smooth function.
      </p>
      <p>Next, weak solutions.</p>
    </>
  ),
};
