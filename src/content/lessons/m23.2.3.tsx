import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { ParsevalEnergyViz } from "@/components/viz/ParsevalEnergyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.2.3",
  minutes: 90,
  links: {
    revisits: ["m23.2.2", "m8.3.2", "m23.2.1"],
    foreshadows: ["m23.4.1", "m23.5.2", "m23.5.3"],
  },

  puzzle: (
    <>
      <p>
        A square wave is a sum of sine waves, each a different frequency. The sines are perpendicular to each other, in the
        sense of an integral inner product. Pythagoras says the squared length of a vector is the sum of the squares of its
        perpendicular components. Does Pythagoras still hold with infinitely many components?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Add sine waves to approximate a square wave, and track the share of its energy captured.</p>
      <ParsevalEnergyViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Bessel's inequality">
        <p>
          For an <strong>orthonormal</strong> set <M>{"(e_n)"}</M>, with <M>{"\\langle e_m, e_n \\rangle = \\delta_{mn}"}</M>,
          and any <M>x</M>,
        </p>
        <MD>{"\\sum_n |\\langle x, e_n \\rangle|^2 \\le \\|x\\|^2."}</MD>
      </Theorem>

      <Definition title="orthonormal bases">
        <p>An orthonormal set is a <strong>basis</strong> if these equivalent conditions hold:</p>
        <ul>
          <li>its linear span is dense in <M>H</M>;</li>
          <li>only 0 is orthogonal to every <M>{"e_n"}</M>;</li>
          <li>
            <M>{"x = \\sum_n \\langle x, e_n \\rangle e_n"}</M> for every <M>x</M>;
          </li>
          <li>
            <strong>Parseval</strong>: <M>{"\\|x\\|^2 = \\sum_n |\\langle x, e_n \\rangle|^2"}</M>.
          </li>
        </ul>
      </Definition>

      <Example title="Fourier series and the Basel sum">
        <p>
          The functions <M>{"e^{inx}/\\sqrt{2\\pi}"}</M>, <M>{"n \\in \\mathbb{Z}"}</M>, form an orthonormal basis of{" "}
          <M>{"L^2[-\\pi, \\pi]"}</M>. For <M>{"f(x) = x"}</M>, the coefficients have{" "}
          <M>{"|\\langle f, e_n \\rangle|^2 = 2\\pi / n^2"}</M> for <M>{"n \\ne 0"}</M>, and <M>{"\\|f\\|^2 = 2\\pi^3/3"}</M>.
          Parseval gives <M>{"\\sum_{n \\ne 0} 2\\pi / n^2 = 2\\pi^3/3"}</M>, that is,
        </p>
        <MD>{"\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}."}</MD>
      </Example>

      <Remark title="every separable Hilbert space is ℓ²">
        <p>
          Gram-Schmidt turns a countable dense set into an orthonormal basis, and then{" "}
          <M>{"x \\mapsto (\\langle x, e_n \\rangle)_n"}</M> is an isometric isomorphism onto <M>{"\\ell^2"}</M>, by
          Riesz-Fischer. An orthonormal basis is not a Hamel basis: vectors are infinite sums of basis vectors, not finite
          combinations.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "bessel",
      rung: "check",
      prompt: <p>What does Bessel&rsquo;s inequality bound?</p>,
      answer: { kind: "choice", options: ["The sum of squared coefficients by ‖x‖²", "‖x‖ by the largest coefficient", "The number of basis vectors", "The dimension of H"], correct: [0] },
    },
    {
      key: "basis",
      rung: "check",
      prompt: <p>Which condition makes an orthonormal set a basis?</p>,
      answer: { kind: "choice", options: ["Its linear span is dense", "It is finite", "It is countable", "It contains x"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what share of ‖f‖² does the first term (k = 1) capture, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.811, tolerance: 0.002 },
    },
    {
      key: "odd",
      rung: "apply",
      prompt: <p>Parseval for the square wave shows the sum of 8/(π²k²) over odd k is 1. What is the sum of 1/k² over odd k?</p>,
      answer: { kind: "choice", options: ["π²/8", "π²/6", "π²/4", "1"], correct: [0] },
    },
    {
      key: "hamel",
      rung: "apply",
      prompt: <p>How does an orthonormal basis of ℓ² differ from a Hamel basis?</p>,
      answer: { kind: "choice", options: ["Vectors are infinite convergent sums of it, not finite combinations", "It is uncountable", "It is not orthogonal", "There is no difference"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Bessel&rsquo;s inequality for a finite orthonormal set e₁, …, eₙ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets y = Σ⟨x, eₖ⟩eₖ and checks x − y is orthogonal to each eₖ, hence to y.",
          "Uses Pythagoras: ‖x‖² = ‖y‖² + ‖x − y‖² ≥ ‖y‖².",
          "Computes ‖y‖² = Σ|⟨x, eₖ⟩|², giving the inequality; the infinite case follows by letting n grow.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Verify that ‖f‖² = 2π³/3 for f(x) = x on [−π, π], and that the coefficient of eⁱⁿˣ/√(2π) has squared modulus 2π/n².</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the integral of x² from −π to π as 2π³/3.",
          "Integrates x e to the −inx by parts to get 2π(−1)ⁿ i/n, and divides by √(2π), giving squared modulus 2π/n².",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Hilbert spaces have so much geometry that functionals come for free. In a general Banach space, does the dual even
        contain enough functionals to tell vectors apart?
      </p>
      <p>
        Next, the Hahn-Banach theorem: extending functionals from a subspace without increasing their norm, its proof by
        Zorn&rsquo;s lemma, and separating convex sets by hyperplanes.
      </p>
    </>
  ),
};
