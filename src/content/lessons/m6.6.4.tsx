import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { TakagiViz } from "@/components/viz/TakagiViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.6.4",
  minutes: 85,
  links: {
    revisits: ["m6.6.1", "m6.5.3", "m6.4.4"],
    foreshadows: ["m6.8.2", "m12.3.3", "m6.8.4"],
  },

  puzzle: (
    <>
      <p>
        For most of the nineteenth century, mathematicians assumed that a continuous function must be differentiable at most
        points, failing perhaps at a few corners. André-Marie Ampère even published a proof. In 1872 Karl Weierstrass
        presented a continuous function differentiable nowhere at all. Charles Hermite wrote that he turned away with fear
        and horror from this lamentable plague. What could such a function look like?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Add ever finer zigzags, each half the height of the last, and zoom in on a point. Look for a place where the graph
        straightens out.
      </p>
      <TakagiViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Takagi's function">
        <p>
          Let <M>{"s(x)"}</M> be the distance from <M>{"x"}</M> to the nearest integer, a zigzag of slope{" "}
          <M>{"\\pm 1"}</M>. Takagi&rsquo;s function, found in 1903 and simpler than Weierstrass&rsquo;s, is
        </p>
        <MD>{"T(x) = \\sum_{k=0}^{\\infty} \\frac{s(2^k x)}{2^k}."}</MD>
        <p>
          The <M>{"k"}</M>-th term is a zigzag with teeth of width <M>{"2^{-k}"}</M> and height <M>{"2^{-k-1}"}</M>, still
          with slopes <M>{"\\pm 1"}</M>.
        </p>
      </Definition>

      <Theorem title="continuous everywhere, differentiable nowhere">
        <p><M>{"T"}</M> is continuous on <M>{"\\mathbb{R}"}</M> and differentiable at no point.</p>
      </Theorem>

      <Proof>
        <p>
          Continuity: each term is continuous and bounded by <M>{"2^{-k-1}"}</M>, and{" "}
          <M>{"\\sum 2^{-k-1}"}</M> converges, so by the Weierstrass M-test the series converges uniformly, and a uniform
          limit of continuous functions is continuous.
        </p>
        <p>
          Nowhere differentiable: fix <M>{"x"}</M>. For each <M>{"n"}</M>, take the dyadic interval{" "}
          <M>{"[u_n, v_n] = [j/2^n, (j+1)/2^n]"}</M> containing <M>{"x"}</M>. On it, the terms with <M>{"k < n"}</M> are
          linear, with slopes <M>{"\\pm 1"}</M>; the terms with <M>{"k \\ge n"}</M> vanish at both ends. So
        </p>
        <MD>{"\\frac{T(v_n) - T(u_n)}{v_n - u_n} = \\sum_{k=0}^{n-1} \\pm 1,"}</MD>
        <p>
          an integer with the same parity as <M>{"n"}</M>. Consecutive values differ by exactly 1, so they cannot converge.
          But if <M>{"T'(x)"}</M> existed, these quotients, over intervals shrinking to <M>{"x"}</M> and containing it, would
          have to converge to <M>{"T'(x)"}</M>.
        </p>
      </Proof>

      <Example title="Weierstrass's original">
        <p>
          Weierstrass used <M>{"W(x) = \\sum a^k \\cos(b^k \\pi x)"}</M> with <M>{"0 < a < 1"}</M>, <M>{"b"}</M> an odd integer, and{" "}
          <M>{"ab > 1 + 3\\pi/2"}</M>. The idea is the same: the amplitudes shrink geometrically, which makes the sum
          continuous, but the frequencies grow faster, so the slopes of the terms grow without bound. G. H. Hardy later showed{" "}
          <M>{"ab \\ge 1"}</M> suffices.
        </p>
      </Example>

      <Remark title="typical, not pathological">
        <p>
          Such functions are not rare curiosities. Using the Baire category theorem, Stefan Banach showed in 1931 that, in
          the space of continuous functions on <M>{"[0, 1]"}</M>, the nowhere-differentiable ones form a residual set: in a
          precise sense, most continuous functions are of this kind. The paths of Brownian motion are almost surely nowhere
          differentiable, and fractal curves such as coastlines behave the same way. Smoothness is the exception.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "s",
      rung: "check",
      prompt: (
        <p>
          What is <M>{"s(2.3)"}</M>, the distance from 2.3 to the nearest integer?
        </p>
      ),
      answer: { kind: "numeric", value: 0.3, tolerance: 0.0001 },
    },
    {
      key: "cont",
      rung: "check",
      prompt: <p>Which result shows that Takagi&rsquo;s function is continuous?</p>,
      answer: {
        kind: "choice",
        options: [
          "The mean value theorem",
          "The Weierstrass M-test, giving uniform convergence of continuous terms",
          "Rolle's theorem",
          "Taylor's theorem",
        ],
        correct: [1],
      },
    },
    {
      key: "tz",
      rung: "apply",
      prompt: (
        <p>
          Compute <M>{"T(1/2)"}</M>. Only the first term is non-zero.
        </p>
      ),
      answer: { kind: "numeric", value: 0.5, tolerance: 0.0001 },
    },
    {
      key: "t14",
      rung: "apply",
      prompt: (
        <p>
          Compute <M>{"T(1/4) = s(1/4) + s(1/2)/2 + s(1)/4 + \\cdots"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 0.5, tolerance: 0.0001 },
    },
    {
      key: "parity",
      rung: "apply",
      prompt: <p>Why do the dyadic difference quotients of T fail to converge?</p>,
      answer: {
        kind: "choice",
        options: [
          "They grow without bound.",
          "The n-th one is an integer with the parity of n, so consecutive ones differ by 1.",
          "They are all zero.",
          "T is not continuous.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Explain why, on the dyadic interval <M>{"[j/2^n, (j+1)/2^n]"}</M>, the terms <M>{"s(2^k x)/2^k"}</M> with{" "}
          <M>{"k \\ge n"}</M> vanish at both endpoints. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes 2^k · j/2^n = 2^(k−n) j is an integer when k ≥ n.",
          "Notes the same for (j + 1)/2^n.",
          "Concludes s is 0 at an integer, so the terms vanish at both ends.",
        ],
      },
    },
    {
      key: "where",
      rung: "stretch",
      prompt: (
        <p>
          A continuous function is a uniform limit of differentiable functions, such as the partial sums of <M>{"T"}</M>. Why
          does this not force the limit to be differentiable?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes uniform convergence of functions does not control their derivatives.",
          "Points to the partial sums: their slopes stay of size up to n while the functions converge.",
          "Mentions that uniform convergence of the derivatives would be needed. Any clear explanation earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Takagi's function is built from zigzags, why it is continuous, why its dyadic difference quotients cannot converge, and why such functions are typical rather than rare.",

  glimpse: (
    <p>
      The next chapter turns to integration, starting with Darboux sums. The puzzle of when limits of functions keep their
      properties returns in the chapter on uniform convergence, and the Baire category theorem, in metric spaces, shows why
      nowhere-differentiable functions are the rule.
    </p>
  ),
};
