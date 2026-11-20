import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ClebschGordanViz } from "@/components/viz/ClebschGordanViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m32.5.1",
  minutes: 90,
  links: {
    revisits: ["m32.4.3", "m32.3.3", "m32.1.3"],
    foreshadows: ["m32.5.2", "m32.5.3", "p32.2.1"],
  },

  puzzle: (
    <>
      <p>
        In quantum mechanics the spin of a particle comes only in the values 0, ½, 1, 3⁄2, …, and a particle of spin j has
        exactly 2j + 1 possible states. Nothing in between ever turns up. Where does this rigid pattern come from?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose two representations of sl(2), and see their tensor product split into irreducible pieces.</p>
      <ClebschGordanViz />
    </>
  ),

  theory: (
    <>
      <Definition title="weights and the standard basis">
        <p>
          The algebra sl(2) has basis <M>{"e = \\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}"}</M>,{" "}
          <M>{"f = \\begin{pmatrix} 0 & 0 \\\\ 1 & 0 \\end{pmatrix}"}</M>,{" "}
          <M>{"h = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}"}</M>, with{" "}
          <M>{"[h, e] = 2e"}</M>, <M>{"[h, f] = -2f"}</M>, <M>{"[e, f] = h"}</M>. In a representation V, a{" "}
          <strong>weight vector</strong> of <strong>weight</strong> λ is a non-zero v with <M>{"hv = \\lambda v"}</M>.
          From the brackets, e sends a vector of weight λ to one of weight λ + 2 (or to 0), and f sends it to weight λ − 2.
        </p>
      </Definition>

      <Theorem title="the irreducible representations">
        <p>
          For each whole number n ≥ 0 there is exactly one irreducible representation V(n) of dimension n + 1, up to
          isomorphism, and there are no others. It has a basis <M>{"v_0, \\dots, v_n"}</M> with
        </p>
        <p>
          <M>{"h v_k = (n - 2k) v_k, \\quad f v_k = v_{k+1}, \\quad e v_k = k(n - k + 1) v_{k-1},"}</M>
        </p>
        <p>
          where <M>{"v_{n+1} = 0"}</M> and <M>{"v_{-1} = 0"}</M>. Its weights n, n − 2, …, −n each occur once.
        </p>
      </Theorem>

      <Remark title="why the weights are whole numbers">
        <p>
          In a finite-dimensional representation, start from a weight vector <M>{"v_0"}</M> killed by e, of weight λ. Put{" "}
          <M>{"v_k = f^k v_0"}</M>. Induction gives <M>{"e v_k = k(\\lambda - k + 1) v_{k-1}"}</M>. Finite dimension forces
          a last non-zero <M>{"v_m"}</M>, and then <M>{"0 = e v_{m+1} = (m + 1)(\\lambda - m) v_m"}</M>, so λ = m, a whole
          number. Weyl&rsquo;s theorem adds that every finite-dimensional representation is a direct sum of irreducible
          ones. The physicists&rsquo; spin j is n/2.
        </p>
      </Remark>

      <Example title="the Clebsch–Gordan rule">
        <p>
          <M>{"V(m) \\otimes V(n) \\cong V(m + n) \\oplus V(m + n - 2) \\oplus \\cdots \\oplus V(|m - n|)"}</M>. For
          instance <M>{"V(1) \\otimes V(1) \\cong V(2) \\oplus V(0)"}</M>: two spin-½ particles combine into spin 1 or
          spin 0. The <strong>Casimir element</strong> <M>{"C = ef + fe + \\tfrac12 h^2"}</M> commutes with all of sl(2)
          and acts on V(n) by the scalar n(n + 2)/2, which tells the summands apart.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "dim",
      rung: "check",
      prompt: <p>What is the dimension of the irreducible representation V(n) of sl(2)?</p>,
      answer: { kind: "choice", options: ["n + 1", "n", "2n + 1", "n²"], correct: [0] },
    },
    {
      key: "raise",
      rung: "check",
      prompt: <p>What does e do to a weight vector of weight λ, if the result is non-zero?</p>,
      answer: { kind: "choice", options: ["It gives a weight vector of weight λ + 2", "It gives a weight vector of weight λ − 2", "It multiplies it by λ", "It leaves the weight unchanged"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set m = 4 and n = 2. How many irreducible summands does V(4) ⊗ V(2) have?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "coef",
      rung: "apply",
      prompt: <p>In V(4), e v₂ = c v₁. What is c?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "cg",
      rung: "apply",
      prompt: <p>How does V(3) ⊗ V(3) decompose?</p>,
      answer: { kind: "choice", options: ["V(6) ⊕ V(4) ⊕ V(2) ⊕ V(0)", "V(6) ⊕ V(3) ⊕ V(0)", "V(9)", "V(6) ⊕ V(5) ⊕ V(4) ⊕ V(3)"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if hv = λv, then h(ev) = (λ + 2)ev.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes hev = [h, e]v + ehv, since [h, e] = he − eh.",
          "Uses [h, e] = 2e and hv = λv to get 2ev + λev.",
          "Concludes h(ev) = (λ + 2)ev.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the Casimir element ef + fe + ½h² acts on the highest weight vector of V(n) by n(n + 2)/2.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses e v₀ = 0, so fe v₀ = 0, and ef v₀ = [e, f]v₀ = h v₀ = n v₀.",
          "Adds ½h² v₀ = ½n² v₀ to get (n + ½n²) v₀ = n(n + 2)/2 · v₀.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Every representation of sl(2) is built from weight strings fixed by a highest weight. The same idea, with the
        Cartan subalgebra and the roots in place of h, e and f, classifies the representations of every semisimple algebra.
      </p>
      <p>Next, highest weight theory.</p>
    </>
  ),
};
