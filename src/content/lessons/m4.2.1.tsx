import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { InclExclViz } from "@/components/viz/InclExclViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.2.1",
  minutes: 80,
  links: {
    revisits: ["m4.1.1", "m4.1.3", "m1.8.1"],
    foreshadows: ["m4.2.2", "m11.3.1", "m9.1.2"],
  },

  puzzle: (
    <>
      <p>
        At a wedding, n guests leave their umbrellas at the door, and at the end of the evening the umbrellas are handed
        back completely at random. What is the chance that nobody gets their own umbrella back? With more guests there are
        more ways for someone to be lucky, but also more ways for everyone to be unlucky. Remarkably, the answer hardly
        depends on n at all: for 10 guests or 10,000 it is about 37%, very close to 1/e.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Three overlapping sets. Step through the formula and watch how many times each region has been counted. Adding all
        three sets overcounts; subtracting the overlaps overcorrects; one more step makes every region count once.
      </p>
      <InclExclViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="inclusion–exclusion">
        <p>For finite sets <M>{"A_1, \\dots, A_n"}</M>,</p>
        <MD>{"\\Big|\\bigcup_{i} A_i\\Big| = \\sum_i |A_i| - \\sum_{i<j}|A_i \\cap A_j| + \\sum_{i<j<k}|A_i \\cap A_j \\cap A_k| - \\dots + (-1)^{n+1}|A_1 \\cap \\dots \\cap A_n|."}</MD>
      </Theorem>
      <Proof>
        <p>
          Take an element that lies in exactly m ≥ 1 of the sets. It is counted once in each intersection of k of those m
          sets, so the right side counts it
        </p>
        <MD>{"\\binom{m}{1} - \\binom{m}{2} + \\binom{m}{3} - \\dots = 1 - (1 - 1)^m = 1"}</MD>
        <p>times, by the binomial theorem. Elements in none of the sets are counted zero times on both sides.</p>
      </Proof>
      <p>
        Often we want the complement: the number of elements of a set U with none of the properties is{" "}
        <M>{"|U| - |A_1 \\cup \\dots \\cup A_n|"}</M>. The method works when the intersections are easy to count, typically
        because they depend only on how many sets are intersected.
      </p>

      <Example title="derangements">
        <p>
          A <strong>derangement</strong> is a permutation with no fixed point. Let <M>{"A_i"}</M> be the permutations of{" "}
          <M>{"\\{1, \\dots, n\\}"}</M> fixing i. Any k of these intersect in <M>{"(n - k)!"}</M> permutations, and there
          are <M>{"\\binom{n}{k}"}</M> ways to choose the k, so the number of derangements is
        </p>
        <MD>{"D_n = \\sum_{k=0}^{n}(-1)^k\\binom{n}{k}(n - k)! = n!\\sum_{k=0}^{n}\\frac{(-1)^k}{k!}."}</MD>
        <p>
          The sum is the start of the series for <M>{"e^{-1}"}</M>, so <M>{"D_n/n! \\to 1/e \\approx 0.368"}</M>, and the
          convergence is so fast that <M>{"D_n"}</M> is the nearest integer to <M>{"n!/e"}</M>. So{" "}
          <M>{"D_1, D_2, \\dots = 0, 1, 2, 9, 44, 265"}</M>.
        </p>
      </Example>

      <Example title="onto functions">
        <p>
          The functions from a k-set onto an n-set are the functions that miss no element of the target. Let{" "}
          <M>{"A_i"}</M> be the functions that miss i; then
        </p>
        <MD>{"\\#\\text{onto} = \\sum_{i=0}^{n}(-1)^i\\binom{n}{i}(n - i)^k."}</MD>
        <p>From a 4-set onto a 3-set: <M>{"81 - 3 \\cdot 16 + 3 \\cdot 1 - 0 = 36"}</M>.</p>
      </Example>

      <Remark title="Euler&rsquo;s function">
        <p>
          The numbers from 1 to n that share no prime factor with n are those divisible by none of its primes{" "}
          <M>{"p_1, \\dots, p_r"}</M>. Inclusion–exclusion gives{" "}
          <M>{"\\varphi(n) = n(1 - 1/p_1)\\cdots(1 - 1/p_r)"}</M>; for example{" "}
          <M>{"\\varphi(60) = 60 \\cdot \\tfrac12 \\cdot \\tfrac23 \\cdot \\tfrac45 = 16"}</M>. Number Theory studies this
          function in depth.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "three",
      rung: "check",
      prompt: (
        <p>
          |A| = 20, |B| = 15, |C| = 10, each pairwise intersection has sizes 5, 4 and 3, and |A ∩ B ∩ C| = 2. What is
          |A ∪ B ∪ C|?
        </p>
      ),
      answer: { kind: "numeric", value: 35 },
    },
    {
      key: "d3",
      rung: "check",
      prompt: <p>How many derangements of 3 objects are there?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "div235",
      rung: "apply",
      prompt: <p>How many of the integers from 1 to 100 are divisible by 2, 3 or 5?</p>,
      answer: { kind: "numeric", value: 74 },
    },
    {
      key: "onto",
      rung: "apply",
      prompt: <p>How many functions are there from a 5-element set onto a 3-element set?</p>,
      answer: { kind: "numeric", value: 150 },
    },
    {
      key: "letters",
      rung: "apply",
      prompt: (
        <p>
          Four letters are put into four addressed envelopes at random. In how many of the 24 ways does every letter go
          into a wrong envelope?
        </p>
      ),
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: (
        <p>
          Prove the inclusion–exclusion formula by showing that an element lying in exactly m of the sets is counted
          exactly once by the right side.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Observes that the element is counted C(m, k) times in the k-fold intersection terms, with sign (−1)^(k+1).",
          "Evaluates the alternating sum as 1 − (1 − 1)^m = 1 using the binomial theorem.",
          "Notes that elements in no set contribute nothing. A clear argument earns full credit.",
        ],
      },
    },
    {
      key: "phi",
      rung: "stretch",
      prompt: (
        <p>
          Use inclusion–exclusion to prove that <M>{"\\varphi(n) = n\\prod_{p \\mid n}(1 - 1/p)"}</M>, where the product is
          over the distinct primes dividing n. Check the formula for n = 60 by another method.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Lets Aᵢ be the multiples of pᵢ up to n, with |Aᵢ ∩ Aⱼ ∩ …| equal to n divided by the product of the primes.",
          "Writes the alternating sum and recognises it as the expanded product n(1 − 1/p₁)⋯(1 − 1/pᵣ).",
          "Checks φ(60) = 16, for example by listing or by multiplicativity. A sound argument earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the inclusion–exclusion formula and why each element ends up counted once, how it counts derangements and why the proportion tends to 1/e, and how it counts onto functions.",

  glimpse: (
    <p>
      The next lesson counts by finding a rule that links each case to smaller ones. Number Theory develops Euler&rsquo;s
      function, and Probability uses inclusion–exclusion for the chance that at least one event happens.
    </p>
  ),
};
