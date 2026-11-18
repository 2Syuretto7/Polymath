import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { JacobianRankViz } from "@/components/viz/JacobianRankViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m24.5.1",
  minutes: 90,
  links: {
    revisits: ["m24.2.4", "m24.3.2", "m14.1.2"],
    foreshadows: ["m24.5.2", "m30.1.1", "m30.1.2"],
  },

  puzzle: (
    <>
      <p>
        π and e are both transcendental over ℚ. Is π + e? Nobody knows. But we do know that π and e cannot both be
        algebraic over ℚ(π + e, πe), since they are roots of t² − (π + e)t + πe. Counting how many independent
        transcendental quantities a field needs should behave like counting dimensions. Does it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose elements of k(x, y) and test them for algebraic independence.</p>
      <JacobianRankViz />
    </>
  ),

  theory: (
    <>
      <Definition title="algebraic independence">
        <p>
          Let <M>{"K/k"}</M> be a field extension. Elements <M>{"t_1, \\ldots, t_n"}</M> of <M>K</M> are{" "}
          <strong>algebraically independent</strong> over <M>k</M> if no non-zero polynomial <M>{"f \\in k[T_1, \\ldots, T_n]"}</M>{" "}
          has <M>{"f(t_1, \\ldots, t_n) = 0"}</M>; then <M>{"k(t_1, \\ldots, t_n)"}</M> is a field of rational functions. A{" "}
          <strong>transcendence basis</strong> is an algebraically independent set <M>S</M> with <M>K</M> algebraic over{" "}
          <M>{"k(S)"}</M>.
        </p>
      </Definition>

      <Theorem title="existence and invariance">
        <p>
          Every extension has a transcendence basis, by Zorn&rsquo;s lemma, and any two have the same cardinality, the{" "}
          <strong>transcendence degree</strong> <M>{"\\operatorname{trdeg}_k K"}</M>. The proof is the Steinitz exchange lemma,
          exactly as for bases of vector spaces: if <M>K</M> is algebraic over <M>{"k(S)"}</M> and <M>T</M> is independent,
          elements of <M>T</M> can be swapped in for elements of <M>S</M> one at a time, so <M>{"|T| \\le |S|"}</M>.
          Transcendence degree is additive in towers.
        </p>
      </Theorem>

      <Example title="examples">
        <p>
          <M>{"\\operatorname{trdeg}_k k(x_1, \\ldots, x_n) = n"}</M>. Over ℚ, ℂ has transcendence degree the continuum, which
          is why ℂ has wild automorphisms, any permutation of a transcendence basis extending to one. Lindemann&rsquo;s theorem
          says that π is transcendental; whether π and e are algebraically independent is open, though Nesterenko proved in
          1996 that π and e to the power π are.
        </p>
      </Example>

      <Theorem title="dimension of varieties">
        <p>
          If <M>A</M> is a finitely generated <M>k</M>-algebra that is a domain, its Krull dimension equals the transcendence
          degree of its fraction field over <M>k</M>. Noether normalisation gives the proof: <M>A</M> is integral over a
          polynomial ring <M>{"k[y_1, \\ldots, y_d]"}</M>, which has both invariants equal to <M>d</M>, and integral extensions
          preserve both. So the dimension of an irreducible variety is the number of independent rational functions on it.
        </p>
      </Theorem>

      <Remark title="the Jacobian test">
        <p>
          In characteristic 0, polynomials <M>{"f_1, \\ldots, f_r"}</M> in <M>{"x_1, \\ldots, x_n"}</M> are algebraically
          independent exactly when their Jacobian matrix has rank <M>r</M>. In characteristic <M>p</M> this fails: <M>{"x^p"}</M>{" "}
          is independent but has derivative 0.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a transcendence basis of K over k?</p>,
      answer: { kind: "choice", options: ["An algebraically independent set over which K is algebraic", "A basis of K as a vector space over k", "A set of transcendental numbers", "A set generating K as a ring"], correct: [0] },
    },
    {
      key: "inv",
      rung: "check",
      prompt: <p>Which lemma shows that all transcendence bases have the same size?</p>,
      answer: { kind: "choice", options: ["The Steinitz exchange lemma", "Zorn’s lemma", "Gauss’s lemma", "Nakayama’s lemma"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many elements does every transcendence basis of k(x, y) over k have?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "dep",
      rung: "apply",
      prompt: <p>Which polynomial relation shows that x, y and xy are algebraically dependent over k?</p>,
      answer: { kind: "choice", options: ["T₁T₂ − T₃ = 0", "T₁ + T₂ + T₃ = 0", "T₁² − T₂ = 0", "There is none"], correct: [0] },
    },
    {
      key: "dim",
      rung: "apply",
      prompt: <p>What is the Krull dimension of k[x, y, z]/(xy − z²), given that xy − z² is irreducible?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that x² and xy form a transcendence basis of k(x, y) over k.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows k(x, y) is algebraic over L = k(x², xy): x is a root of t² − x², and then y = xy/x lies in L(x).",
          "Concludes that the transcendence degree of k(x, y) over L is 0, so L has transcendence degree 2 over k.",
          "Deduces that x² and xy, two elements generating a field of transcendence degree 2, are algebraically independent, hence a basis.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does ℂ have automorphisms other than the identity and complex conjugation?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that ℂ has an infinite transcendence basis over ℚ, and is algebraic over the field it generates.",
          "Explains that any permutation of the basis gives an automorphism of the purely transcendental field, which extends to ℂ since ℂ is algebraically closed (using Zorn’s lemma).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The algebraic closure of a field is an infinite extension, often with an enormous Galois group. Finite Galois theory
        does not apply directly, but the group carries a natural topology, and with it the correspondence survives.
      </p>
      <p>
        Next, infinite Galois theory: the Krull topology, profinite groups, the profinite integers as the Galois group of a
        finite field&rsquo;s closure, and the fundamental theorem for closed subgroups.
      </p>
    </>
  ),
};
