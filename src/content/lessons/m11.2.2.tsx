import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CongruenceSystemViz } from "@/components/viz/CongruenceSystemViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.2.2",
  minutes: 90,
  links: {
    revisits: ["m11.2.1", "m7.6.3", "m4.4.3"],
    foreshadows: ["m11.2.3", "m11.3.1", "m11.4.4"],
  },

  puzzle: (
    <>
      <p>
        A puzzle from the Chinese mathematician Sunzi, around the fifth century: there are some things whose number is unknown.
        Counted in threes, two are left over; in fives, three; in sevens, two. How many things are there? And is the answer
        unique?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Each row marks the numbers that satisfy one congruence. Find where all the rows line up, then try moduli that share a factor.</p>
      <CongruenceSystemViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Chinese remainder theorem">
        <p>
          If <M>{"m_1, \\dots, m_k"}</M> are pairwise coprime and <M>{"M = m_1 \\cdots m_k"}</M>, then for any{" "}
          <M>{"a_1, \\dots, a_k"}</M> the system <M>{"x \\equiv a_i \\pmod{m_i}"}</M> has a solution, unique modulo{" "}
          <M>{"M"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"M_i = M / m_i"}</M>. It is coprime to <M>{"m_i"}</M>, so it has an inverse <M>{"y_i"}</M> modulo{" "}
          <M>{"m_i"}</M>. Put
        </p>
        <MD>{"x = a_1 M_1 y_1 + a_2 M_2 y_2 + \\cdots + a_k M_k y_k."}</MD>
        <p>
          Modulo <M>{"m_i"}</M> every term but the <M>{"i"}</M>th vanishes, since <M>{"m_i \\mid M_j"}</M> for{" "}
          <M>{"j \\ne i"}</M>, and the <M>{"i"}</M>th is <M>{"a_i \\cdot 1"}</M>. For uniqueness, if <M>{"x"}</M> and{" "}
          <M>{"x'"}</M> both work, each <M>{"m_i"}</M> divides <M>{"x - x'"}</M>, and coprime divisors multiply, so{" "}
          <M>{"M \\mid x - x'"}</M>.
        </p>
      </Proof>

      <Example title="Sunzi's problem">
        <p>
          Here <M>{"M = 105"}</M>, and <M>{"M_1, M_2, M_3 = 35, 21, 15"}</M>, with inverses <M>{"2, 1, 1"}</M> modulo 3, 5, 7
          (since <M>{"35 \\equiv 2"}</M>, <M>{"21 \\equiv 1"}</M>, <M>{"15 \\equiv 1"}</M>). So
        </p>
        <MD>{"x \\equiv 2 \\cdot 35 \\cdot 2 + 3 \\cdot 21 \\cdot 1 + 2 \\cdot 15 \\cdot 1 = 233 \\equiv 23 \\pmod{105}."}</MD>
      </Example>

      <Theorem title="moduli that are not coprime">
        <p>
          The pair <M>{"x \\equiv a \\pmod m"}</M>, <M>{"x \\equiv b \\pmod n"}</M> is solvable if and only if{" "}
          <M>{"\\gcd(m, n) \\mid a - b"}</M>, and then the solution is unique modulo <M>{"\\operatorname{lcm}(m, n)"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          A solution is <M>{"x = a + mt"}</M> with <M>{"mt \\equiv b - a \\pmod n"}</M>. By the last lesson this linear
          congruence in <M>{"t"}</M> is solvable exactly when <M>{"\\gcd(m, n) \\mid b - a"}</M>, and then <M>{"t"}</M> is
          determined modulo <M>{"n / \\gcd(m, n)"}</M>, so <M>{"x"}</M> is determined modulo{" "}
          <M>{"mn / \\gcd(m, n) = \\operatorname{lcm}(m, n)"}</M>.
        </p>
      </Proof>

      <Remark title="a structural view">
        <p>
          The theorem says the map <M>{"x \\mapsto (x \\bmod m, x \\bmod n)"}</M> is a ring isomorphism{" "}
          <M>{"\\mathbb{Z}/mn \\cong \\mathbb{Z}/m \\times \\mathbb{Z}/n"}</M> when <M>{"\\gcd(m, n) = 1"}</M>. Units match
          units, so <M>{"\\varphi(mn) = \\varphi(m)\\varphi(n)"}</M>. In practice it lets one compute modulo a large{" "}
          <M>{"M"}</M> by working modulo its small factors and recombining, which speeds up RSA decryption.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "count",
      rung: "check",
      prompt: <p>For pairwise coprime moduli 3, 5 and 7, how many solutions modulo 105 does a system <M>{"x \\equiv a_i \\pmod{m_i}"}</M> have?</p>,
      answer: { kind: "choice", options: ["None", "Exactly one", "Three", "It depends on the a_i"], correct: [1] },
    },
    {
      key: "none",
      rung: "check",
      prompt: <p>Which system has no solution?</p>,
      answer: {
        kind: "choice",
        options: ["x ≡ 1 (mod 4), x ≡ 3 (mod 6)", "x ≡ 1 (mod 4), x ≡ 2 (mod 6)", "x ≡ 2 (mod 3), x ≡ 1 (mod 5)", "x ≡ 0 (mod 4), x ≡ 4 (mod 6)"],
        correct: [1],
      },
    },
    {
      key: "three",
      rung: "apply",
      prompt: <p>Find the solution from 0 to 59 of <M>{"x \\equiv 1 \\pmod 3"}</M>, <M>{"x \\equiv 2 \\pmod 4"}</M>, <M>{"x \\equiv 3 \\pmod 5"}</M>.</p>,
      answer: { kind: "numeric", value: 58, tolerance: 0 },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>Find the smallest positive <M>{"x"}</M> with <M>{"x \\equiv 3 \\pmod 7"}</M> and <M>{"x \\equiv 5 \\pmod{11}"}</M>.</p>,
      answer: { kind: "numeric", value: 38, tolerance: 0 },
    },
    {
      key: "lcm",
      rung: "apply",
      prompt: <p>Find the smallest positive <M>{"x"}</M> with <M>{"x \\equiv 5 \\pmod 6"}</M> and <M>{"x \\equiv 3 \\pmod 8"}</M>.</p>,
      answer: { kind: "numeric", value: 11, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if <M>{"\\gcd(m, n) = 1"}</M>, the system <M>{"x \\equiv a \\pmod m"}</M>, <M>{"x \\equiv b \\pmod n"}</M> has a solution, and that it is unique modulo <M>{"mn"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Produces a solution, for example using Bézout mr + ns = 1 and x = bmr + ans.",
          "Checks the solution satisfies both congruences.",
          "Proves uniqueness: m and n both divide the difference of two solutions, and being coprime, so does mn.",
        ],
      },
    },
    {
      key: "phi",
      rung: "stretch",
      prompt: <p>Explain why the Chinese remainder theorem implies <M>{"\\varphi(mn) = \\varphi(m)\\varphi(n)"}</M> for coprime <M>{"m, n"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the bijection between residues modulo mn and pairs of residues modulo m and n.",
          "Notes that x is coprime to mn exactly when it is coprime to both m and n, so units correspond to pairs of units.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Chinese remainder theorem and the formula that builds the solution, Sunzi’s problem, what happens when the moduli share a factor, and why the theorem means arithmetic modulo mn splits into arithmetic modulo m and modulo n.",

  glimpse: (
    <p>
      The next lesson shows how powers behave modulo n, through Fermat&rsquo;s and Euler&rsquo;s theorems. Multiplicativity of φ
      returns with multiplicative functions, and RSA uses the theorem to decrypt quickly.
    </p>
  ),
};
