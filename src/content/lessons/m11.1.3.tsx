import { M, MD } from "@/components/Math";
import { Definition, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PrimeCountViz } from "@/components/viz/PrimeCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.1.3",
  minutes: 90,
  links: {
    revisits: ["m11.1.2", "m2.8.1", "m4.4.2"],
    foreshadows: ["m13.7.2", "m13.7.3", "m35.2.2"],
  },

  puzzle: (
    <>
      <p>
        Individual primes look random: 89 and 97 are followed by a gap of eight, while 101 and 103 sit side by side. Yet
        Gauss, aged about fifteen, noticed from tables that near <M>{"x"}</M> roughly one number in <M>{"\\ln x"}</M> is prime.
        How can a sequence be unpredictable in detail and so regular on average?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Count the primes up to x and compare the count with x / ln x and with the logarithmic integral. Slide x up to a million.</p>
      <PrimeCountViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the counting function">
        <p>
          <M>{"\\pi(x)"}</M> is the number of primes <M>{"p \\le x"}</M>. So <M>{"\\pi(10) = 4"}</M>,{" "}
          <M>{"\\pi(100) = 25"}</M>, <M>{"\\pi(1000) = 168"}</M>. The logarithmic integral is{" "}
          <M>{"\\operatorname{Li}(x) = \\int_2^x \\frac{dt}{\\ln t}"}</M>.
        </p>
      </Definition>

      <Theorem title="the prime number theorem">
        <MD>{"\\pi(x) \\sim \\frac{x}{\\ln x}, \\quad\\text{that is,}\\quad \\lim_{x \\to \\infty} \\frac{\\pi(x)}{x / \\ln x} = 1."}</MD>
        <p>
          Equivalently <M>{"\\pi(x) \\sim \\operatorname{Li}(x)"}</M>, which is the better approximation. It was proved in
          1896 by Hadamard and de la Vallée Poussin, using complex analysis.
        </p>
      </Theorem>

      <Theorem title="a Chebyshev upper bound">
        <p>
          Let <M>{"\\theta(x) = \\sum_{p \\le x} \\ln p"}</M>. Then <M>{"\\theta(2^k) < 2^k \\ln 4"}</M>, and consequently{" "}
          <M>{"\\pi(x)"}</M> is at most a constant times <M>{"x / \\ln x"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Every prime <M>{"p"}</M> with <M>{"n < p \\le 2n"}</M> divides <M>{"(2n)!"}</M> but not <M>{"(n!)^2"}</M>, so it
          divides <M>{"\\binom{2n}{n}"}</M>, which is at most <M>{"(1 + 1)^{2n} = 4^n"}</M>. Hence
        </p>
        <MD>{"\\theta(2n) - \\theta(n) \\le n \\ln 4."}</MD>
        <p>
          Add these for <M>{"n = 2^{k-1}, 2^{k-2}, \\dots, 1"}</M>: <M>{"\\theta(2^k) \\le (2^{k-1} + \\cdots + 1)\\ln 4 < 2^k \\ln 4"}</M>.
          Finally, primes between <M>{"\\sqrt x"}</M> and <M>{"x"}</M> each contribute at least <M>{"\\tfrac12 \\ln x"}</M> to{" "}
          <M>{"\\theta(x)"}</M>, so <M>{"\\pi(x) \\le \\sqrt x + 2\\theta(x)/\\ln x"}</M>, which is of order{" "}
          <M>{"x / \\ln x"}</M>.
        </p>
      </Proof>

      <Remark title="gaps">
        <p>
          Gaps between primes can be as long as you like: <M>{"n! + 2, n! + 3, \\dots, n! + n"}</M> are <M>{"n - 1"}</M>{" "}
          consecutive composites, since <M>{"k \\mid n! + k"}</M>. But not too long relative to where they start:{" "}
          <strong>Bertrand&rsquo;s postulate</strong>, proved by Chebyshev, says there is always a prime between{" "}
          <M>{"n"}</M> and <M>{"2n"}</M>. The prime number theorem says the average gap near <M>{"x"}</M> is about{" "}
          <M>{"\\ln x"}</M>.
        </p>
      </Remark>

      <Remark title="what is still open">
        <p>
          The twin prime conjecture, that infinitely many <M>{"p"}</M> have <M>{"p + 2"}</M> prime, is open; Zhang proved in
          2013 that some gap below 70 million occurs infinitely often, since reduced to 246. The Riemann hypothesis is
          equivalent to <M>{"|\\pi(x) - \\operatorname{Li}(x)|"}</M> being at most about <M>{"\\sqrt{x} \\ln x"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pnt",
      rung: "check",
      prompt: <p>What does the prime number theorem say?</p>,
      answer: {
        kind: "choice",
        options: [
          "π(x) equals x / ln x for every x.",
          "The ratio of π(x) to x / ln x tends to 1.",
          "There is a prime between n and 2n.",
          "The gaps between primes are bounded.",
        ],
        correct: [1],
      },
    },
    {
      key: "bertrand",
      rung: "check",
      prompt: <p>What does Bertrand&rsquo;s postulate say?</p>,
      answer: {
        kind: "choice",
        options: ["There are infinitely many twin primes.", "For every n ≥ 1 there is a prime p with n < p ≤ 2n.", "Every even number is a sum of two primes.", "π(x) is less than x / ln x."],
        correct: [1],
      },
    },
    {
      key: "pi100",
      rung: "apply",
      prompt: <p>What is <M>{"\\pi(50)"}</M>?</p>,
      answer: { kind: "numeric", value: 15, tolerance: 0 },
    },
    {
      key: "est",
      rung: "apply",
      prompt: <p>Compute <M>{"1000 / \\ln 1000"}</M>, to one decimal place. (The true count is 168.)</p>,
      answer: { kind: "numeric", value: 1000 / Math.log(1000), tolerance: 0.1 },
    },
    {
      key: "gap",
      rung: "apply",
      prompt: <p>What is the gap between the prime 113 and the next prime?</p>,
      answer: { kind: "numeric", value: 14, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that for every <M>{"n"}</M> there are <M>{"n"}</M> consecutive composite numbers.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers (n + 1)! + 2, (n + 1)! + 3, …, (n + 1)! + (n + 1), or an equivalent list of n numbers.",
          "Shows that k divides (n + 1)! + k for 2 ≤ k ≤ n + 1.",
          "Concludes each is composite, since it exceeds k.",
        ],
      },
    },
    {
      key: "random",
      rung: "stretch",
      prompt: <p>A heuristic says a number near <M>{"x"}</M> is prime &ldquo;with probability <M>{"1 / \\ln x"}</M>&rdquo;. In what sense is this reasonable, given that whether a number is prime is not random at all?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Links the heuristic to the prime number theorem: the density of primes near x is about 1 / ln x.",
          "Notes it treats a fixed sequence as random, which predicts averages well but can mislead, for example about even numbers or small primes.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what π(x) counts, what the prime number theorem says and why Li(x) is a good approximation, how the binomial coefficient gives Chebyshev’s upper bound, and what we know and do not know about gaps between primes.",

  glimpse: (
    <p>
      The next chapter turns to congruences. The proof of the prime number theorem comes later, through the Riemann zeta function
      and complex analysis.
    </p>
  ),
};
