import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RSAViz } from "@/components/viz/RSAViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.4.4",
  minutes: 90,
  links: {
    revisits: ["m11.2.3", "m11.2.2", "m11.2.1"],
    foreshadows: ["m11.5.1", "m11.6.5", "m30.2.3"],
  },

  puzzle: (
    <>
      <p>
        A shop wants anyone in the world to be able to send it a secret, such as a card number, without ever having met. So
        the method of locking must be public. Can a lock be public while the key stays private? With RSA, published in 1977,
        the lock is a pair of numbers, and opening it requires factorising one of them.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose two primes, a public exponent and a message. Encrypt with the public key and decrypt with the private one.</p>
      <RSAViz />
    </>
  ),

  theory: (
    <>
      <Definition title="RSA">
        <p>
          The receiver chooses large primes <M>{"p \\ne q"}</M>, sets <M>{"n = pq"}</M> and <M>{"\\varphi(n) = (p - 1)(q - 1)"}</M>,
          picks <M>{"e"}</M> coprime to <M>{"\\varphi(n)"}</M>, and computes <M>{"d \\equiv e^{-1} \\pmod{\\varphi(n)}"}</M> by
          Euclid&rsquo;s algorithm. The <strong>public key</strong> is <M>{"(n, e)"}</M>; the <strong>private key</strong> is{" "}
          <M>{"d"}</M>. A message <M>{"0 \\le m < n"}</M> is sent as <M>{"c = m^e \\bmod n"}</M> and read as{" "}
          <M>{"c^d \\bmod n"}</M>.
        </p>
      </Definition>

      <Theorem title="decryption works">
        <p>For every <M>{"m"}</M>, <M>{"(m^e)^d \\equiv m \\pmod n"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          Write <M>{"ed = 1 + k\\varphi(n)"}</M>. By the Chinese remainder theorem it is enough to show{" "}
          <M>{"m^{ed} \\equiv m"}</M> modulo <M>{"p"}</M> and modulo <M>{"q"}</M>. Modulo <M>{"p"}</M>: if{" "}
          <M>{"p \\mid m"}</M>, both sides are 0. Otherwise Fermat gives <M>{"m^{p-1} \\equiv 1"}</M>, so
        </p>
        <MD>{"m^{ed} = m \\cdot \\bigl(m^{p-1}\\bigr)^{k(q-1)} \\equiv m \\pmod p."}</MD>
        <p>The same holds modulo <M>{"q"}</M>, so <M>{"m^{ed} \\equiv m \\pmod n"}</M>.</p>
      </Proof>

      <Example title="a small key">
        <p>
          <M>{"p = 17"}</M>, <M>{"q = 23"}</M>: <M>{"n = 391"}</M>, <M>{"\\varphi(n) = 352"}</M>. Take <M>{"e = 3"}</M>; then{" "}
          <M>{"d = 235"}</M>, since <M>{"3 \\cdot 235 = 705 = 2 \\cdot 352 + 1"}</M>. The message 42 becomes{" "}
          <M>{"42^3 \\bmod 391 = 189"}</M>, and <M>{"189^{235} \\bmod 391 = 42"}</M>, computed by repeated squaring.
        </p>
      </Example>

      <Remark title="why it is secure">
        <p>
          Anyone who can factor <M>{"n"}</M> can compute <M>{"\\varphi(n)"}</M> and then <M>{"d"}</M>. Conversely, knowing{" "}
          <M>{"\\varphi(n)"}</M> reveals <M>{"p"}</M> and <M>{"q"}</M> as the roots of{" "}
          <M>{"x^2 - (n - \\varphi(n) + 1)x + n"}</M>. So recovering the key is as hard as factoring, and no known classical
          method factors a well-chosen 2048-bit <M>{"n"}</M>. Shor&rsquo;s algorithm would do it on a large quantum computer.
        </p>
      </Remark>

      <Remark title="signatures">
        <p>
          Run backwards, RSA signs: the owner of <M>{"d"}</M> publishes <M>{"s = m^d \\bmod n"}</M>, and anyone can check that{" "}
          <M>{"s^e \\equiv m"}</M>. Only the holder of the private key could have produced <M>{"s"}</M>. In practice messages
          are padded and hashed first, as textbook RSA has weaknesses.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "public",
      rung: "check",
      prompt: <p>In RSA, what is made public?</p>,
      answer: { kind: "choice", options: ["p and q", "n and e", "d", "φ(n)"], correct: [1] },
    },
    {
      key: "secure",
      rung: "check",
      prompt: <p>Why is it believed hard to find <M>{"d"}</M> from the public key?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because e is secret.",
          "Because finding d needs φ(n), which needs the factors of n, and factoring large n is hard.",
          "Because d is random.",
          "Because modular powers cannot be computed.",
        ],
        correct: [1],
      },
    },
    {
      key: "d",
      rung: "apply",
      prompt: <p>With <M>{"n = 33 = 3 \\cdot 11"}</M> and <M>{"e = 3"}</M>, find the private exponent <M>{"d"}</M>, as the least positive value.</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0 },
    },
    {
      key: "enc",
      rung: "apply",
      prompt: <p>With <M>{"n = 33"}</M> and <M>{"e = 3"}</M>, encrypt the message 4.</p>,
      answer: { kind: "numeric", value: 31, tolerance: 0 },
    },
    {
      key: "phi",
      rung: "apply",
      prompt: <p>Someone tells you <M>{"n = 77"}</M> and <M>{"\\varphi(n) = 60"}</M>. What is the larger prime factor of <M>{"n"}</M>?</p>,
      answer: { kind: "numeric", value: 11, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that RSA decryption recovers <M>{"m"}</M> when <M>{"\\gcd(m, n) = 1"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes ed = 1 + kφ(n).",
          "Applies Euler’s theorem m^φ(n) ≡ 1 (mod n).",
          "Concludes m^(ed) = m · (m^φ(n))^k ≡ m (mod n).",
        ],
      },
    },
    {
      key: "same",
      rung: "stretch",
      prompt: <p>Why is knowing <M>{"\\varphi(n)"}</M> as good as knowing the factors of <M>{"n = pq"}</M>?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that p + q = n − φ(n) + 1 and pq = n.",
          "Concludes p and q are the roots of a quadratic with known coefficients.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how RSA keys are made, how encryption and decryption work, why decryption recovers the message using Fermat and the Chinese remainder theorem, why security rests on factoring, and how signatures work.",

  glimpse: (
    <p>
      The next chapter turns to squares modulo p and quadratic reciprocity. Continued fractions later give an attack on RSA when d
      is too small, and elliptic curves provide another public key system.
    </p>
  ),
};
