import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ReflectionExtensionViz } from "@/components/viz/ReflectionExtensionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.3.3",
  minutes: 90,
  links: {
    revisits: ["m33.3.2", "m33.3.1", "m12.5.3"],
    foreshadows: ["m33.3.4", "m33.4.1", "m33.4.2"],
  },

  puzzle: (
    <>
      <p>
        To solve Δu = f in a domain with u = g on the boundary, you need to say what u is on the boundary. But a Sobolev
        function is only defined up to sets of measure zero, and the boundary has measure zero. Changing u there changes
        nothing. Is &lsquo;the value of u on the boundary&rsquo; meaningless, or can it be rescued?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function on [0, 1] and a way of extending it to the left, and compare the derivatives at 0.</p>
      <ReflectionExtensionViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="extension">
        <p>
          Let U be bounded with C¹ boundary, 1 ≤ p ≤ ∞, and V an open set containing the closure of U. There is a bounded
          linear operator <M>{"E : W^{1,p}(U) \\to W^{1,p}(\\mathbb{R}^n)"}</M> with Eu = u on U, Eu supported in V, and{" "}
          <M>{"\\|Eu\\|_{W^{1,p}(\\mathbb{R}^n)} \\le C \\|u\\|_{W^{1,p}(U)}"}</M>. The proof flattens the boundary locally,
          extends across the flat piece by the higher-order reflection <M>{"\\bar{u}(x', x_n) = -3u(x', -x_n) + 4u(x', -x_n/2)"}</M>,
          which matches values and first derivatives, and patches with a partition of unity.
        </p>
      </Theorem>

      <Theorem title="the trace">
        <p>
          With U as above and 1 ≤ p &lt; ∞, there is a bounded linear operator{" "}
          <M>{"T : W^{1,p}(U) \\to L^p(\\partial U)"}</M> such that Tu equals the restriction of u to ∂U whenever u is
          continuous on the closure of U, and <M>{"\\|Tu\\|_{L^p(\\partial U)} \\le C \\|u\\|_{W^{1,p}(U)}"}</M>. It is
          proved for smooth u, where it follows from the fundamental theorem of calculus along lines normal to the
          boundary, and then extended by density.
        </p>
      </Theorem>

      <Definition title="zero boundary values">
        <p>
          <M>{"W_0^{1,p}(U)"}</M> is the closure of <M>{"C_c^\\infty(U)"}</M> in <M>{"W^{1,p}(U)"}</M>. For U with C¹
          boundary, it is exactly the kernel of the trace: the functions with Tu = 0. When p = 2 one writes{" "}
          <M>{"H_0^1(U)"}</M>, the natural space for the Dirichlet problem.
        </p>
      </Definition>

      <Example title="a one-dimensional picture">
        <p>
          On an interval, every <M>{"W^{1,p}"}</M> function has a continuous representative,{" "}
          <M>{"u(x) = u(a) + \\int_a^x u'"}</M>, so its trace is just its value at the end points. In higher dimensions{" "}
          <M>{"W^{1,p}"}</M> functions may be discontinuous everywhere, yet they still have well-defined traces in{" "}
          <M>{"L^p"}</M>. Not every <M>{"L^p"}</M> function on the boundary is a trace: the image of T is a fractional
          Sobolev space, <M>{"W^{1 - 1/p,\\,p}(\\partial U)"}</M> for p &gt; 1.
        </p>
      </Example>

      <Remark title="when the boundary is rough">
        <p>
          Some regularity of ∂U is needed. In a slit disc, a function can jump across the slit while having bounded
          derivatives on each side, and no extension to the whole plane can stay in <M>{"W^{1,p}"}</M>. Calderón and Stein
          showed that Lipschitz boundaries suffice for extension, which covers polygons and most domains met in
          applications.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "trace",
      rung: "check",
      prompt: <p>What does the trace operator do?</p>,
      answer: { kind: "choice", options: ["It assigns boundary values in Lᵖ(∂U) to functions in W¹˒ᵖ(U), extending restriction", "It sums the diagonal of a matrix", "It extends functions outside U", "It measures the volume of U"], correct: [0] },
    },
    {
      key: "w0",
      rung: "check",
      prompt: <p>For U with C¹ boundary, which functions form W₀¹˒ᵖ(U)?</p>,
      answer: { kind: "choice", options: ["Those with zero trace", "Those vanishing everywhere", "Those with zero derivative", "Those with compact support only"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose u(x) = 1 + 2x and even reflection. By how much does the derivative jump at 0?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "image",
      rung: "apply",
      prompt: <p>Is every Lᵖ function on ∂U the trace of some W¹˒ᵖ(U) function, for p &gt; 1?</p>,
      answer: { kind: "choice", options: ["No: traces form a smaller fractional Sobolev space", "Yes, always", "Only continuous ones fail", "Only when p = 2"], correct: [0] },
    },
    {
      key: "rough",
      rung: "apply",
      prompt: <p>Why can extension fail for a slit disc?</p>,
      answer: { kind: "choice", options: ["A function can jump across the slit, and no W¹˒ᵖ extension can bridge the jump", "The slit disc is not open", "Sobolev spaces are not defined there", "The slit has positive measure"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Check that the reflection ū(x) = −3u(−x) + 4u(−x/2), for x &lt; 0, matches u and u′ at 0 when u is C¹ on [0, 1].</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes ū(0) = −3u(0) + 4u(0) = u(0).",
          "Differentiates: ū′(x) = 3u′(−x) − 2u′(−x/2), so ū′(0) = u′(0).",
          "Concludes the glued function is C¹ across 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Prove the one-dimensional trace inequality |u(0)| ≤ C‖u‖ in W¹˒¹(0, 1) for smooth u.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes u(0) = u(x) − the integral of u′ from 0 to x, for each x in (0, 1).",
          "Integrates in x over (0, 1) to get |u(0)| ≤ ∫|u| + ∫|u′|.",
          "Concludes with C = 1. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A Sobolev function has integrable derivatives, but how integrable is the function itself? Dimension decides, through
        a single exponent.
      </p>
      <p>Next, Sobolev inequalities.</p>
    </>
  ),
};
