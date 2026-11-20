import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CyclicCharacterViz } from "@/components/viz/CyclicCharacterViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m34.5.1",
  minutes: 90,
  links: {
    revisits: ["m34.4.3", "m7.5.3", "m7.1.4"],
    foreshadows: ["m34.5.2", "m35.3.1", "m35.3.2"],
  },

  puzzle: (
    <>
      <p>
        Fourier series break a function on the circle into pure frequencies. A function on a clock with n hours, or on the
        corners of a cube, has only finitely many values. What are the pure frequencies there, and does the theory survive
        with every integral replaced by a finite sum?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose n and two characters of ℤ/n, and compare their values and their inner product.</p>
      <CyclicCharacterViz />
    </>
  ),

  theory: (
    <>
      <Definition title="characters and the dual group">
        <p>
          A <strong>character</strong> of a finite abelian group G is a homomorphism{" "}
          <M>{"\\chi : G \\to \\mathbb{T} = \\{z \\in \\mathbb{C} : |z| = 1\\}"}</M>. Characters multiply pointwise and form
          the <strong>dual group</strong> <M>{"\\widehat G"}</M>. For ℤ/n they are{" "}
          <M>{"\\chi_a(j) = e^{2\\pi i a j / n}"}</M>, one for each a, so <M>{"\\widehat{\\mathbb{Z}/n} \\cong \\mathbb{Z}/n"}</M>.
          By the structure theorem, <M>{"\\widehat G \\cong G"}</M> for every finite abelian G.
        </p>
      </Definition>

      <Theorem title="orthogonality">
        <p>
          With <M>{"\\langle f, g \\rangle = \\frac{1}{|G|}\\sum_{x \\in G} f(x)\\overline{g(x)}"}</M>, distinct characters
          are orthogonal and each has norm 1. Since there are |G| of them, they form an orthonormal basis of all functions
          on G.
        </p>
      </Theorem>

      <Definition title="the Fourier transform">
        <p>
          <M>{"\\hat f(\\chi) = \\langle f, \\chi \\rangle"}</M>, with inversion{" "}
          <M>{"f = \\sum_{\\chi} \\hat f(\\chi)\\chi"}</M> and Plancherel{" "}
          <M>{"\\frac{1}{|G|}\\sum |f(x)|^2 = \\sum |\\hat f(\\chi)|^2"}</M>. Convolution becomes multiplication, just as on
          the circle.
        </p>
      </Definition>

      <Example title="the discrete Fourier transform">
        <p>
          On ℤ/n this is the DFT, the workhorse of signal processing. Computed directly it costs about n² operations;
          Cooley and Tukey&rsquo;s fast Fourier transform (1965) uses the factorisation of n to do it in about n log n.
        </p>
      </Example>

      <Remark title="Pontryagin duality">
        <p>
          The circle, the line and finite groups are all cases of one theory: every locally compact abelian group G has a
          dual <M>{"\\widehat G"}</M> of characters, and the dual of the dual is G. The dual of the circle is ℤ, which is why
          functions on the circle have Fourier series indexed by integers.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "orth",
      rung: "check",
      prompt: <p>What is the inner product of two distinct characters of a finite abelian group?</p>,
      answer: { kind: "choice", options: ["0", "1", "|G|", "−1"], correct: [0] },
    },
    {
      key: "count",
      rung: "check",
      prompt: <p>How many characters does a finite abelian group G have?</p>,
      answer: { kind: "choice", options: ["|G|", "1", "|G|²", "It depends on more than the order"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set n = 12 and a = 8. What is the order of χₐ?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "prod",
      rung: "apply",
      prompt: <p>How many characters does ℤ/2 × ℤ/3 have?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "sum",
      rung: "apply",
      prompt: <p>What is the sum of χ(x) over all x in G, for a nontrivial character χ?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if χ is a nontrivial character of a finite abelian group G, then the sum of χ(x) over G is 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Chooses y with χ(y) ≠ 1.",
          "Notes that x ↦ x + y permutes G, so S = Σ χ(x + y) = χ(y) S.",
          "Concludes (1 − χ(y)) S = 0, so S = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that every character of ℤ/n is one of the χₐ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that χ is determined by χ(1), since χ(j) = χ(1)ʲ.",
          "Uses n · 1 = 0 to get χ(1)ⁿ = 1, so χ(1) = exp(2πia/n) for some a.",
          "Concludes χ = χₐ. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Orthogonality lets one pick out a single residue class mod q as a combination of characters. Dirichlet used exactly
        this to count primes in each class.
      </p>
      <p>Next, Dirichlet&rsquo;s theorem on primes in progressions.</p>
    </>
  ),
};
