import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { WilsonPairViz } from "@/components/viz/WilsonPairViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.2.4",
  minutes: 80,
  links: {
    revisits: ["m11.2.3", "m11.2.1", "m7.2.1"],
    foreshadows: ["m11.5.1", "m11.5.2", "m11.6.4"],
  },

  puzzle: (
    <>
      <p>
        Compute <M>{"(p - 1)! \\bmod p"}</M> for small primes: <M>{"1! = 1 \\equiv -1 \\pmod 2"}</M>,{" "}
        <M>{"2! = 2 \\equiv -1 \\pmod 3"}</M>, <M>{"4! = 24 \\equiv -1 \\pmod 5"}</M>, <M>{"6! = 720 \\equiv -1 \\pmod 7"}</M>.
        Always <M>{"-1"}</M>. Why? And what happens when the modulus is not prime?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Each chord joins a number to its inverse. Step through primes and composites and watch the product.</p>
      <WilsonPairViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Wilson's theorem">
        <p>An integer <M>{"n > 1"}</M> is prime if and only if <M>{"(n - 1)! \\equiv -1 \\pmod n"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"p"}</M> be prime. Each of <M>{"1, \\dots, p - 1"}</M> has an inverse modulo <M>{"p"}</M>. An element is
          its own inverse when <M>{"a^2 \\equiv 1"}</M>, that is <M>{"p \\mid (a - 1)(a + 1)"}</M>, and by Euclid&rsquo;s
          lemma <M>{"a \\equiv \\pm 1"}</M>. So <M>{"2, 3, \\dots, p - 2"}</M> split into pairs <M>{"\\{a, a^{-1}\\}"}</M>{" "}
          with product 1, and
        </p>
        <MD>{"(p - 1)! \\equiv 1 \\cdot 1 \\cdots 1 \\cdot (p - 1) \\equiv -1 \\pmod p."}</MD>
        <p>
          Conversely, if <M>{"n"}</M> is composite with a divisor <M>{"d"}</M>, <M>{"1 < d < n"}</M>, then{" "}
          <M>{"d \\mid (n - 1)!"}</M>. If also <M>{"(n - 1)! \\equiv -1 \\pmod n"}</M>, then <M>{"d"}</M> divides{" "}
          <M>{"(n - 1)! + 1"}</M>, so <M>{"d \\mid 1"}</M>, which is impossible.
        </p>
      </Proof>

      <Example title="a square root of −1">
        <p>
          Pair <M>{"k"}</M> with <M>{"p - k \\equiv -k"}</M> in <M>{"(p - 1)!"}</M>: with <M>{"h = (p - 1)/2"}</M>,
        </p>
        <MD>{"-1 \\equiv (p - 1)! \\equiv (-1)^h (h!)^2 \\pmod p."}</MD>
        <p>
          If <M>{"p \\equiv 1 \\pmod 4"}</M>, <M>{"h"}</M> is even, so <M>{"(h!)^2 \\equiv -1"}</M>: the number{" "}
          <M>{"h!"}</M> is a square root of <M>{"-1"}</M> modulo <M>{"p"}</M>. For <M>{"p = 13"}</M>,{" "}
          <M>{"6! = 720 \\equiv 5"}</M>, and <M>{"5^2 = 25 \\equiv -1 \\pmod{13}"}</M>.
        </p>
      </Example>

      <Remark title="a perfect test, useless in practice">
        <p>
          Wilson&rsquo;s theorem characterises primes exactly, unlike Fermat&rsquo;s. But computing{" "}
          <M>{"(n - 1)! \\bmod n"}</M> takes about <M>{"n"}</M> multiplications, far slower than trial division up to{" "}
          <M>{"\\sqrt n"}</M>. Its value is theoretical: it gives square roots of <M>{"-1"}</M>, which lead to Fermat&rsquo;s
          theorem that primes <M>{"p \\equiv 1 \\pmod 4"}</M> are sums of two squares.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does Wilson&rsquo;s theorem say about a prime <M>{"p"}</M>?</p>,
      answer: { kind: "choice", options: ["(p − 1)! ≡ 1 (mod p)", "(p − 1)! ≡ −1 (mod p)", "p! ≡ 0 (mod p) only for primes", "(p − 1)! ≡ p (mod p²)"], correct: [1] },
    },
    {
      key: "self",
      rung: "check",
      prompt: <p>Modulo a prime <M>{"p"}</M>, which residues are their own inverses?</p>,
      answer: { kind: "choice", options: ["Only 1", "1 and p − 1", "All of them", "None"], correct: [1] },
    },
    {
      key: "ten",
      rung: "apply",
      prompt: <p>What is <M>{"11! \\bmod 13"}</M>?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "four",
      rung: "apply",
      prompt: <p>What is <M>{"3! \\bmod 4"}</M>?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "root",
      rung: "apply",
      prompt: <p>Compute <M>{"8! \\bmod 17"}</M>. Its square is <M>{"-1"}</M> modulo 17.</p>,
      answer: { kind: "numeric", value: 13, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if <M>{"n > 1"}</M> is composite, then <M>{"(n - 1)! \\not\\equiv -1 \\pmod n"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a divisor d of n with 1 < d < n and notes d divides (n − 1)!.",
          "Supposes (n − 1)! ≡ −1 (mod n) and deduces d divides (n − 1)! + 1.",
          "Concludes d divides 1, a contradiction.",
        ],
      },
    },
    {
      key: "useless",
      rung: "stretch",
      prompt: <p>Wilson&rsquo;s theorem gives an exact test for primality. Why is it not used to test large numbers?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the cost: computing (n − 1)! modulo n needs about n multiplications.",
          "Compares with faster methods, such as trial division up to √n or Fermat-style tests with repeated squaring.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Wilson’s theorem, why the numbers 2 to p − 2 pair off with their inverses, why only 1 and p − 1 are their own inverses, the converse for composites, and how the theorem gives a square root of −1 when p is 1 mod 4.",

  glimpse: (
    <p>
      Square roots modulo p are the subject of the chapter on quadratic residues. Fermat&rsquo;s two-squares theorem, which uses
      the square root of −1 found here, comes with sums of squares.
    </p>
  ),
};
