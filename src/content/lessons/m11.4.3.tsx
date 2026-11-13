import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DiscreteLogViz } from "@/components/viz/DiscreteLogViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.4.3",
  minutes: 90,
  links: {
    revisits: ["m11.4.2", "m0.4.4", "m11.2.3"],
    foreshadows: ["m11.4.4", "m11.5.2", "m30.2.3"],
  },

  puzzle: (
    <>
      <p>
        Two people want to agree on a secret number, but every message they send is read by an eavesdropper. They have never
        met. It seems impossible: anything one sends, the eavesdropper also sees. Yet in 1976 Diffie and Hellman showed how,
        using a one-way function from number theory.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>The dots are the powers of a primitive root. Choose a target value and find its exponent. Is there a pattern to help?</p>
      <DiscreteLogViz />
    </>
  ),

  theory: (
    <>
      <Definition title="discrete logarithm">
        <p>
          Let <M>{"g"}</M> be a primitive root modulo a prime <M>{"p"}</M>. For each unit <M>{"a"}</M> there is a unique{" "}
          <M>{"k"}</M> with <M>{"0 \\le k < p - 1"}</M> and <M>{"g^k \\equiv a"}</M>: the <strong>discrete logarithm</strong> or{" "}
          <strong>index</strong> of <M>{"a"}</M>, written <M>{"\\operatorname{ind}_g a"}</M>.
        </p>
      </Definition>

      <Theorem title="laws of indices">
        <MD>{"\\operatorname{ind}(ab) \\equiv \\operatorname{ind} a + \\operatorname{ind} b, \\qquad \\operatorname{ind}(a^k) \\equiv k\\,\\operatorname{ind} a \\pmod{p - 1}."}</MD>
      </Theorem>

      <Proof>
        <p>
          <M>{"g^{\\operatorname{ind} a + \\operatorname{ind} b} = g^{\\operatorname{ind} a}g^{\\operatorname{ind} b} \\equiv ab \\equiv g^{\\operatorname{ind}(ab)}"}</M>,
          and <M>{"g^j \\equiv g^k"}</M> exactly when <M>{"j \\equiv k \\pmod{p - 1}"}</M>, since <M>{"g"}</M> has order{" "}
          <M>{"p - 1"}</M>. The second law follows by induction.
        </p>
      </Proof>

      <Example title="solving a power congruence">
        <p>
          Solve <M>{"x^3 \\equiv 5 \\pmod 7"}</M> with <M>{"g = 3"}</M>, whose powers are 3, 2, 6, 4, 5, 1. Then{" "}
          <M>{"\\operatorname{ind} 5 = 5"}</M>, and <M>{"3\\,\\operatorname{ind} x \\equiv 5 \\pmod 6"}</M> has no solution,
          since 3 does not divide 5 modulo 6. So 5 is not a cube modulo 7. As with logarithms, indices turn multiplication into
          addition.
        </p>
      </Example>

      <Definition title="Diffie–Hellman key exchange">
        <p>
          Publicly agree on <M>{"p"}</M> and <M>{"g"}</M>. Alice picks a secret <M>{"a"}</M> and sends{" "}
          <M>{"A = g^a"}</M>; Bob picks <M>{"b"}</M> and sends <M>{"B = g^b"}</M>. Each computes the shared key{" "}
          <M>{"B^a = A^b = g^{ab}"}</M>. With <M>{"p = 23"}</M>, <M>{"g = 5"}</M>, <M>{"a = 6"}</M>, <M>{"b = 15"}</M>:{" "}
          <M>{"A = 8"}</M>, <M>{"B = 19"}</M>, and both reach <M>{"19^6 \\equiv 8^{15} \\equiv 2"}</M>. The eavesdropper sees{" "}
          <M>{"g^a"}</M> and <M>{"g^b"}</M> but, without a discrete logarithm, cannot find <M>{"g^{ab}"}</M>.
        </p>
      </Definition>

      <Remark title="how hard is it?">
        <p>
          Trying every exponent takes about <M>{"p"}</M> steps. Shanks&rsquo;s baby-step giant-step method needs about{" "}
          <M>{"\\sqrt p"}</M>: write <M>{"k = im + j"}</M> with <M>{"m \\approx \\sqrt p"}</M>, list <M>{"g^j"}</M>, and look for a
          match with <M>{"a\\,g^{-im}"}</M>. Better methods exist, but none runs in time polynomial in the number of digits of{" "}
          <M>{"p"}</M>. Elliptic curves give groups where the problem seems harder still.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the discrete logarithm of <M>{"a"}</M> to base <M>{"g"}</M> modulo <M>{"p"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["The k with g^k ≡ a (mod p)", "The natural logarithm of a", "a divided by g", "The order of a"],
        correct: [0],
      },
    },
    {
      key: "law",
      rung: "check",
      prompt: <p>Modulo what is <M>{"\\operatorname{ind}(ab) \\equiv \\operatorname{ind} a + \\operatorname{ind} b"}</M>?</p>,
      answer: { kind: "choice", options: ["p", "p − 1", "p + 1", "2"], correct: [1] },
    },
    {
      key: "ind",
      rung: "apply",
      prompt: <p>Solve <M>{"2^x \\equiv 9 \\pmod{11}"}</M> with <M>{"0 \\le x < 10"}</M>.</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "dh",
      rung: "apply",
      prompt: <p>With <M>{"p = 23"}</M>, <M>{"g = 5"}</M>, Alice&rsquo;s secret <M>{"a = 4"}</M> and Bob&rsquo;s secret <M>{"b = 3"}</M>, what shared key do they reach?</p>,
      answer: { kind: "numeric", value: 18, tolerance: 0 },
    },
    {
      key: "seven",
      rung: "apply",
      prompt: <p>With <M>{"g = 3"}</M> modulo 7, what is <M>{"\\operatorname{ind}_3 6"}</M>?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that <M>{"\\operatorname{ind}(ab) \\equiv \\operatorname{ind} a + \\operatorname{ind} b \\pmod{p - 1}"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes a ≡ g^(ind a) and b ≡ g^(ind b), so ab ≡ g^(ind a + ind b).",
          "Notes that also ab ≡ g^(ind ab).",
          "Uses that g has order p − 1, so equal powers have exponents congruent modulo p − 1.",
        ],
      },
    },
    {
      key: "bsgs",
      rung: "stretch",
      prompt: <p>Explain why baby-step giant-step needs only about <M>{"\\sqrt p"}</M> steps, and why that is still too slow for a prime with 300 digits.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains writing k = im + j with m about √p, and matching a list of g^j against a g^(−im).",
          "Notes that √p for a 300-digit prime is about 10^150 steps, far beyond any computer.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a discrete logarithm is, the laws of indices and how they solve power congruences, how Diffie–Hellman key exchange works with a small example, and why the discrete logarithm is believed to be hard.",

  glimpse: (
    <p>
      The next lesson builds RSA, a public key system based on factoring rather than logarithms. Elliptic curve cryptography,
      much later, runs the same key exchange in a different group.
    </p>
  ),
};
