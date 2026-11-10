import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { IntervalViz } from "@/components/viz/IntervalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m1.8.4",
  minutes: 75,
  links: {
    revisits: ["m1.6.3", "m1.7.3"],
    parallels: ["p22.5.2"],
    foreshadows: ["m20.6.3", "m20.6.5", "m20.6.6"],
  },

  puzzle: (
    <>
      <p>
        The closed interval <M>{"[0, 1]"}</M> contains the open interval <M>{"(0, 1)"}</M>, plus two extra points, 0 and 1.
        Yet <M>{"[0, 1]"}</M> can be shrunk to fit inside <M>{"(0, 1)"}</M>: halve it and shift it to <M>{"[1/4, 3/4]"}</M>.
        So each fits inside the other.
      </p>
      <p>
        For finite sets, fitting inside each other means having the same size. Does the same hold for infinite sets? If so, can
        you find an actual one-to-one matching between <M>{"[0, 1]"}</M> and <M>{"(0, 1)"}</M>? Where do 0 and 1 go?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        An injection from A into B says that A is no larger than B. If there are injections both ways, A and B should be the
        same size. That this is true, for every pair of sets, is the Schröder&ndash;Bernstein theorem. It is the main tool for
        showing two infinite sets have the same size, because injections are usually far easier to find than bijections.
      </p>
      <p>
        Below are the two injections for the intervals, and then a bijection between them. Its trick is the hotel&rsquo;s: a
        countable sequence of points each moves along to make room.
      </p>
      <IntervalViz />
    </>
  ),

  theory: (
    <>
      <Definition title="comparing sizes">
        <p>
          Write <M>{"|A| = |B|"}</M> if there is a bijection <M>{"A \\to B"}</M>, and <M>{"|A| \\le |B|"}</M> if there is an
          injection <M>{"A \\to B"}</M>. Write <M>{"|A| < |B|"}</M> if <M>{"|A| \\le |B|"}</M> but not{" "}
          <M>{"|A| = |B|"}</M>. For example, <M>{"|\\mathbb{N}| < |\\mathbb{R}|"}</M>, and Cantor&rsquo;s theorem says{" "}
          <M>{"|A| < |\\mathcal{P}(A)|"}</M> for every set A.
        </p>
      </Definition>

      <Theorem title="Schröder–Bernstein">
        <p>
          If there are injections <M>{"f : A \\to B"}</M> and <M>{"g : B \\to A"}</M>, then there is a bijection{" "}
          <M>{"h : A \\to B"}</M>. In symbols, <M>{"|A| \\le |B|"}</M> and <M>{"|B| \\le |A|"}</M> imply{" "}
          <M>{"|A| = |B|"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          We may assume A and B are disjoint (otherwise label the elements of A and B with different tags). Start from any
          element and follow arrows: forwards by f from A and by g from B, and backwards by <M>{"f^{-1}"}</M> or{" "}
          <M>{"g^{-1}"}</M> as long as the current element is in the image. Because f and g are injective, each element has at
          most one way forward and at most one way back, so every element lies in exactly one <strong>chain</strong>, and the
          chains split <M>{"A \\cup B"}</M> into disjoint pieces. Going backwards, a chain either
        </p>
        <ul>
          <li>stops at an element of A not in the image of g,</li>
          <li>stops at an element of B not in the image of f, or</li>
          <li>never stops (it goes back forever, or closes into a cycle).</li>
        </ul>
        <p>
          On chains of the first and third kinds, let <M>{"h = f"}</M>: f matches the A-elements of such a chain one to one
          with its B-elements. On chains of the second kind, every A-element is in the image of g, so let{" "}
          <M>{"h = g^{-1}"}</M>, which matches them one to one with the chain&rsquo;s B-elements. Putting the chains together,
          h is a bijection from A to B.
        </p>
      </Proof>

      <Example title="the intervals">
        <p>
          With <M>{"f(x) = 1/4 + x/2"}</M> from <M>{"[0, 1]"}</M> to <M>{"(0, 1)"}</M> and g the inclusion back again, the
          theorem guarantees a bijection. The visualisation shows a simpler one, built by hand:
        </p>
        <MD>{"h(0) = \\tfrac12, \\quad h(1) = \\tfrac13, \\quad h\\left(\\tfrac1n\\right) = \\tfrac{1}{n + 2} \\ (n \\ge 2), \\quad h(x) = x \\text{ otherwise.}"}</MD>
      </Example>

      <Example title="all intervals are alike">
        <p>
          The map <M>{"x \\mapsto \\tfrac12 + \\tfrac1\\pi \\arctan x"}</M> is an injection from <M>{"\\mathbb{R}"}</M> into{" "}
          <M>{"(0, 1)"}</M>, and the inclusion goes back. So <M>{"|\\mathbb{R}| = |(0, 1)| = |[0, 1]|"}</M>: the whole line has
          exactly as many points as any small piece of it.
        </p>
      </Example>

      <Remark title="history">
        <p>
          Cantor stated the theorem but could not prove it in general. Richard Dedekind found a proof in 1887 but did not
          publish it; Felix Bernstein, then a student, proved it in 1897, and Ernst Schröder published a proof that turned out to
          be flawed. The theorem is sometimes called Cantor&ndash;Bernstein for that reason.
        </p>
      </Remark>

      <Remark title="what this does not settle">
        <p>
          Schröder&ndash;Bernstein shows that <M>{"\\le"}</M> on sizes is antisymmetric, so it behaves like a partial order.
          Is it total: for any two sets, does one inject into the other? Only with the axiom of choice. And is there a set whose
          size lies strictly between <M>{"|\\mathbb{N}|"}</M> and <M>{"|\\mathbb{R}|"}</M>? Cantor believed not, the{" "}
          <strong>continuum hypothesis</strong>; Gödel (1940) and Paul Cohen (1963) showed that the usual axioms of set theory
          can neither prove nor refute it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sb",
      rung: "check",
      prompt: <p>The Schröder&ndash;Bernstein theorem says that if there are injections from A to B and from B to A, then&hellip;</p>,
      answer: {
        kind: "choice",
        options: ["A = B.", "there is a bijection from A to B.", "A and B are countable.", "both injections are bijections."],
        correct: [1],
      },
    },
    {
      key: "h-quarter",
      rung: "check",
      prompt: <p>With the bijection h from the lesson, <M>{"h(1/4) = 1/k"}</M>. What is k?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "h-inverse",
      rung: "apply",
      prompt: <p>With the same h, which point is sent to <M>{"\\tfrac12"}</M>?</p>,
      answer: { kind: "choice", options: ["0", "1", "1/2", "1/4"], correct: [0] },
    },
    {
      key: "same-size",
      rung: "apply",
      prompt: <p>Which pairs of sets have the same size?</p>,
      answer: {
        kind: "choice",
        options: ["[0, 1] and (0, 1)", "ℝ and (0, 1)", "ℕ and ℚ", "ℕ and ℝ"],
        correct: [0, 1, 2],
      },
    },
    {
      key: "cuts",
      rung: "apply",
      prompt: <p>Which of these is an injection from <M>{"\\mathbb{R}"}</M> into <M>{"\\mathcal{P}(\\mathbb{Q})"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["x ↦ {q ∈ ℚ : q < x}", "x ↦ {⌊x⌋}", "x ↦ ℚ", "x ↦ {q ∈ ℚ : q² < 2}"],
        correct: [0],
      },
    },
    {
      key: "line",
      rung: "prove",
      prompt: (
        <p>
          Use the Schröder&ndash;Bernstein theorem to prove that <M>{"[0, 1]"}</M> and <M>{"\\mathbb{R}"}</M> have the same
          size. Check carefully that each map you use is injective and lands where it should.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives an injection [0, 1] → ℝ, such as inclusion.",
          "Gives an injection ℝ → [0, 1], such as x ↦ 1/2 + arctan(x)/π, or 1/(1 + eˣ).",
          "Checks injectivity, for instance because the map is strictly monotone, and that values lie in [0, 1].",
          "Applies Schröder–Bernstein to conclude.",
        ],
      },
    },
    {
      key: "continuum",
      rung: "stretch",
      prompt: <p>Prove that <M>{"|\\mathbb{R}| = |\\mathcal{P}(\\mathbb{N})|"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Injects 𝒫(ℕ) into ℝ, for instance by sending S to the decimal 0.d₀d₁… with dⱼ = 6 if j ∈ S and 5 otherwise.",
          "Injects ℝ into 𝒫(ℚ) by x ↦ {q ∈ ℚ : q < x}, using that between two reals lies a rational.",
          "Uses a bijection ℚ → ℕ to turn this into an injection ℝ → 𝒫(ℕ).",
          "Applies Schröder–Bernstein to conclude.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why [0, 1] and (0, 1) have the same number of points, and how two injections, one each way, are enough to prove that two sets have the same size.",

  glimpse: (
    <p>
      This completes Proof and Logic. You can now read and write proofs about sets, functions and the infinite. The ideas of
      this chapter grow into the cardinal numbers, the axiom of choice and the continuum hypothesis in Mathematical Logic and
      Set Theory, and their philosophical puzzles into large cardinals in the Philosophy of Mathematics.
    </p>
  ),
};
