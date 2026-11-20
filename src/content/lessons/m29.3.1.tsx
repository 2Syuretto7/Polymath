import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { MinkowskiBodyViz } from "@/components/viz/MinkowskiBodyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m29.3.1",
  minutes: 90,
  links: {
    revisits: ["m29.2.3", "m29.1.2", "m11.6.4"],
    foreshadows: ["m29.3.2", "m29.3.3", "m29.4.2"],
  },

  puzzle: (
    <>
      <p>
        Draw a large enough circle centred at the origin of the square grid, and it must contain a grid point other than
        the centre. How large is large enough, for any lattice and any shape? And what could such a statement about
        volumes have to do with prime numbers?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the lattice and the radius, and compare the disc with Minkowski&rsquo;s threshold.</p>
      <MinkowskiBodyViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Minkowski’s convex body theorem (1889)">
        <p>
          Let L be a lattice in <M>{"\\mathbb{R}^n"}</M> with covolume <M>{"\\operatorname{vol}(\\mathbb{R}^n/L)"}</M>, and C a
          convex set symmetric about 0. If <M>{"\\operatorname{vol}(C) > 2^n \\operatorname{vol}(\\mathbb{R}^n/L)"}</M>, then C
          contains a non-zero point of L. Proof: the translates of <M>{"\\tfrac12 C"}</M> by L cannot be disjoint, by
          comparing volumes in a fundamental domain, so <M>{"\\tfrac12 x - \\tfrac12 y \\in L"}</M> for some distinct x, y in
          C, and this point lies in C by symmetry and convexity.
        </p>
      </Theorem>

      <Definition title="the Minkowski embedding">
        <p>
          A number field of degree n has <M>{"r_1"}</M> real embeddings and <M>{"r_2"}</M> pairs of complex ones, with{" "}
          <M>{"n = r_1 + 2r_2"}</M>. Together they embed K in{" "}
          <M>{"\\mathbb{R}^{r_1} \\times \\mathbb{C}^{r_2} \\cong \\mathbb{R}^n"}</M>, and{" "}
          <M>{"\\mathcal{O}_K"}</M> becomes a lattice of covolume <M>{"2^{-r_2}\\sqrt{|d_K|}"}</M>. A non-zero ideal I is a
          sublattice of covolume <M>{"N(I)"}</M> times as large.
        </p>
      </Definition>

      <Theorem title="the Minkowski bound">
        <p>
          Every non-zero ideal I contains a non-zero α with{" "}
          <M>{"|N(\\alpha)| \\le M_K N(I)"}</M>, where{" "}
          <M>{"M_K = \\frac{n!}{n^n}\\left(\\frac{4}{\\pi}\\right)^{r_2}\\sqrt{|d_K|}"}</M>. The proof applies the convex body
          theorem to the region where the sum of the absolute values of the coordinates is small, and uses the inequality
          of arithmetic and geometric means.
        </p>
      </Theorem>

      <Example title="first consequences">
        <p>
          Taking I = <M>{"\\mathcal{O}_K"}</M>, an α ≠ 0 has |N(α)| ≥ 1, so{" "}
          <M>{"\\sqrt{|d_K|} \\ge \\frac{n^n}{n!}\\left(\\frac{\\pi}{4}\\right)^{n/2} > 1"}</M> for n ≥ 2. So{" "}
          <M>{"|d_K| > 1"}</M> and some prime ramifies in every K ≠ ℚ. The bound also grows with n, so only finitely many
          fields have a given discriminant.
        </p>
      </Example>

      <Remark title="classical uses">
        <p>
          The same theorem gives short proofs that every prime p ≡ 1 (mod 4) is a sum of two squares, and that every
          positive integer is a sum of four squares, by choosing a lattice of points (a, b) with a ≡ kb (mod p) and a disc
          of the right area.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cbt",
      rung: "check",
      prompt: <p>What does Minkowski&rsquo;s convex body theorem guarantee?</p>,
      answer: { kind: "choice", options: ["A symmetric convex set of volume more than 2ⁿ times the covolume contains a non-zero lattice point", "Every convex set contains a lattice point", "Every lattice has a point on the unit sphere", "Lattices have finite covolume"], correct: [0] },
    },
    {
      key: "emb",
      rung: "check",
      prompt: <p>How is a ring of integers made into a lattice?</p>,
      answer: { kind: "choice", options: ["By embedding K in real space through all its real and complex embeddings", "By taking real parts only", "By reducing modulo a prime", "By taking norms"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take s = 0 and t = 1. What is the threshold radius, to three decimal places?</p>,
      answer: { kind: "numeric", value: 1.128, tolerance: 0.002 },
    },
    {
      key: "bound",
      rung: "apply",
      prompt: <p>The Minkowski bound for an imaginary quadratic field of discriminant D is (2/π)√|D|. What is it for ℚ(√−5), to two decimal places?</p>,
      answer: { kind: "numeric", value: 2.85, tolerance: 0.01 },
    },
    {
      key: "covol",
      rung: "apply",
      prompt: <p>What is the covolume of ℤ[i] in ℂ, using the formula 2 to the −r₂ times the square root of the absolute value of the discriminant?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Minkowski&rsquo;s convex body theorem.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers ½C, whose volume exceeds the covolume of L.",
          "Argues that its translates by L cannot be pairwise disjoint, by mapping them into a fundamental domain and comparing volumes.",
          "Takes ½x − ½y in L with x ≠ y in C, and uses symmetry and convexity to show it lies in C.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Deduce from the Minkowski bound that every number field other than ℚ has a ramified prime.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the bound to the whole ring: some α ≠ 0 has 1 ≤ |N(α)| ≤ the Minkowski bound, so the bound is at least 1.",
          "Rearranges to get the square root of |discriminant| at least (nⁿ/n!)(π/4) to the n/2, which exceeds 1 for n ≥ 2.",
          "Concludes the discriminant has absolute value above 1, so some prime divides it and ramifies. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If every ideal class contains an ideal of small norm, and there are only finitely many ideals of small norm, then
        there are only finitely many classes.
      </p>
      <p>Next, finiteness of the class group.</p>
    </>
  ),
};
