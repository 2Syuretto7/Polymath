import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PrimeSplitViz } from "@/components/viz/PrimeSplitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m29.2.2",
  minutes: 90,
  links: {
    revisits: ["m29.2.1", "m11.5.2", "m11.5.4"],
    foreshadows: ["m29.2.3", "m29.5.1", "m29.5.3"],
  },

  puzzle: (
    <>
      <p>
        In ℤ[i], 5 = (2 + i)(2 − i) and 13 = (3 + 2i)(3 − 2i), but 3 and 7 stay prime, and 2 = −i(1 + i)². What decides
        the fate of each prime, and is the same rule at work in other fields?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a quadratic field, and see how each prime below 200 behaves.</p>
      <PrimeSplitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="ramification and residue degrees">
        <p>
          For a prime p and a number field K of degree n, factor <M>{"p\\mathcal{O}_K = P_1^{e_1}\\cdots P_g^{e_g}"}</M>.
          The <M>{"e_i"}</M> are the <strong>ramification indices</strong>, and the{" "}
          <strong>residue degrees</strong> <M>{"f_i"}</M> are given by <M>{"N(P_i) = p^{f_i}"}</M>. Taking norms of both
          sides gives <M>{"\\sum_i e_i f_i = n"}</M>.
        </p>
      </Definition>

      <Theorem title="Dedekind-Kummer">
        <p>
          Suppose <M>{"\\mathcal{O}_K = \\mathbb{Z}[\\alpha]"}</M> with α of minimal polynomial F, and{" "}
          <M>{"F \\equiv g_1^{e_1}\\cdots g_g^{e_g} \\pmod p"}</M> with the <M>{"g_i"}</M> distinct irreducibles. Then{" "}
          <M>{"p\\mathcal{O}_K = \\prod_i (p, g_i(\\alpha))^{e_i}"}</M>, and <M>{"f_i = \\deg g_i"}</M>. The same holds for
          any α when p does not divide the index of ℤ[α].
        </p>
      </Theorem>

      <Theorem title="quadratic fields">
        <p>
          In ℚ(√d) with discriminant D, a prime p ramifies if p divides D; otherwise it splits into two distinct primes if
          D is a non-zero square modulo p (for odd p, if the Legendre symbol (d/p) is 1), and stays prime if not. For p = 2
          not dividing D, it splits when d ≡ 1 (mod 8) and stays prime when d ≡ 5 (mod 8).
        </p>
      </Theorem>

      <Example title="sums of two squares">
        <p>
          In ℤ[i], an odd prime splits exactly when −1 is a square mod p, that is p ≡ 1 (mod 4). Since ℤ[i] is a principal
          ideal domain, a prime ideal above p is (a + bi), and its norm gives <M>{"p = a^2 + b^2"}</M>. This is
          Fermat&rsquo;s theorem, recovered from a splitting law.
        </p>
      </Example>

      <Remark title="laws and densities">
        <p>
          Quadratic reciprocity says that the splitting of q in <M>{"\\mathbb{Q}(\\sqrt{\\pm p})"}</M> depends only on q
          modulo p, a congruence condition. The Chebotarev density theorem says that in a quadratic field half of all primes
          split and half stay inert, in the sense of density. Class field theory describes which fields have splitting
          laws given by congruences.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "efn",
      rung: "check",
      prompt: <p>With ramification indices eᵢ and residue degrees fᵢ, what is the sum of eᵢfᵢ over the primes above p?</p>,
      answer: { kind: "choice", options: ["The degree n of the field", "p", "1", "The discriminant"], correct: [0] },
    },
    {
      key: "gauss",
      rung: "check",
      prompt: <p>Which odd primes split in ℤ[i]?</p>,
      answer: { kind: "choice", options: ["Those congruent to 1 mod 4", "Those congruent to 3 mod 4", "All odd primes", "None"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose d = −1. How many primes below 100 split?</p>,
      answer: { kind: "numeric", value: 11, tolerance: 0 },
    },
    {
      key: "three",
      rung: "apply",
      prompt: <p>How does 3 behave in ℚ(√−5)?</p>,
      answer: { kind: "choice", options: ["It splits into two distinct prime ideals", "It stays prime", "It ramifies", "It is a unit"], correct: [0] },
    },
    {
      key: "ram",
      rung: "apply",
      prompt: <p>How many primes ramify in ℚ(√−5)?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Using the splitting of primes in ℤ[i], show that a prime p ≡ 1 (mod 4) is a sum of two squares.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that −1 is a square mod p, so x² + 1 factors mod p and p splits as a product of two prime ideals.",
          "Uses that ℤ[i] is a principal ideal domain to write one of them as (a + bi).",
          "Takes norms: the ideal has norm p, so p = a² + b².",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can a prime never split into three prime ideals in a quadratic field?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that the sum of eᵢfᵢ equals the degree, 2.",
          "Notes each eᵢfᵢ is at least 1, so there are at most two primes.",
          "Lists the possibilities: split, inert or ramified. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A few primes behave unlike the rest: they divide the discriminant and appear squared. These ramified primes record
        where a field is &lsquo;branched&rsquo; over ℚ.
      </p>
      <p>Next, ramification.</p>
    </>
  ),
};
