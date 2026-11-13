import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { BWHalvingViz } from "@/components/viz/BWHalvingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.2.3",
  minutes: 85,
  links: {
    revisits: ["m6.2.2", "m6.1.2", "m6.1.3"],
    foreshadows: ["m6.2.4", "m6.4.2", "m12.1.4"],
  },

  puzzle: (
    <>
      <p>
        The sequence <M>{"\\sin 1, \\sin 2, \\sin 3, \\ldots"}</M> never settles down: because <M>{"\\pi"}</M> is irrational,
        the terms wander all over <M>{"[-1, 1]"}</M> forever. Yet infinitely many points are crammed into an interval of
        length 2. Must some of them pile up somewhere? Can we always pick out an infinite run of terms that does converge,
        even when the sequence as a whole is chaos?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Cut the interval in half and keep a half that still holds infinitely many terms. Do it again and again, choosing
        one term from each new half, later in the sequence than the last.
      </p>
      <BWHalvingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="subsequences">
        <p>
          A <strong>subsequence</strong> of <M>{"(a_n)"}</M> is a sequence <M>{"(a_{n_k})"}</M> where{" "}
          <M>{"n_1 < n_2 < n_3 < \\cdots"}</M>. It keeps infinitely many terms, in their original order. If{" "}
          <M>{"a_n \\to a"}</M>, every subsequence also tends to <M>{"a"}</M>, since <M>{"n_k \\ge k"}</M>. So two
          subsequences with different limits prove that a sequence diverges.
        </p>
      </Definition>

      <Theorem title="Bolzano-Weierstrass">
        <p>Every bounded sequence of real numbers has a convergent subsequence.</p>
      </Theorem>

      <Proof>
        <p>
          Suppose every <M>{"a_n"}</M> lies in <M>{"I_1 = [-M, M]"}</M>. Halve <M>{"I_1"}</M>. At least one half contains{" "}
          <M>{"a_n"}</M> for infinitely many <M>{"n"}</M>; call it <M>{"I_2"}</M>. Continue, getting nested closed intervals{" "}
          <M>{"I_1 \\supseteq I_2 \\supseteq \\cdots"}</M> with lengths <M>{"2M / 2^{k-1}"}</M>, each containing infinitely
          many terms. Choose <M>{"n_1 < n_2 < \\cdots"}</M> with <M>{"a_{n_k} \\in I_k"}</M>, which is possible because
          infinitely many indices are available at each stage. By the nested interval property there is a point{" "}
          <M>{"x"}</M> in every <M>{"I_k"}</M>, and
        </p>
        <MD>{"|a_{n_k} - x| \\le \\frac{2M}{2^{k-1}} \\to 0."}</MD>
      </Proof>

      <Example title="a second proof">
        <p>
          Call <M>{"a_m"}</M> a <em>peak</em> if <M>{"a_m \\ge a_n"}</M> for every <M>{"n > m"}</M>. If there are
          infinitely many peaks, they form a decreasing subsequence. If there are finitely many, start after the last one:
          each term is not a peak, so some later term is larger, and we can build an increasing subsequence. Either way
          every sequence has a monotone subsequence, and if the sequence is bounded, monotone convergence finishes the job.
        </p>
      </Example>

      <Remark title="why it matters">
        <p>
          Bolzano-Weierstrass is the engine of many existence proofs. To show a continuous function on{" "}
          <M>{"[a, b]"}</M> attains its maximum, take points where it gets close to its supremum and extract a convergent
          subsequence. The theorem fails in <M>{"\\mathbb{Q}"}</M>, and for unbounded sequences such as{" "}
          <M>{"a_n = n"}</M>. Its general form is the idea of compactness: closed bounded sets are exactly the ones in which
          every sequence has a subsequence converging inside the set.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sub",
      rung: "check",
      prompt: (
        <p>
          The sequence <M>{"a_n = (-1)^n"}</M> has a subsequence <M>{"a_2, a_4, a_6, \\ldots"}</M>. What is its limit?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which sequences are guaranteed to have a convergent subsequence? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["a_n = sin n", "a_n = n", "a_n = (−1)ⁿ n / (n + 1)", "a_n = n(−1)ⁿ"],
        correct: [0, 2],
      },
    },
    {
      key: "length",
      rung: "apply",
      prompt: (
        <p>
          In the halving proof the first interval is <M>{"[-1, 1]"}</M>. What is the length of <M>{"I_5"}</M>, after four
          halvings?
        </p>
      ),
      answer: { kind: "numeric", value: 0.125, tolerance: 0.0001 },
    },
    {
      key: "diverge",
      rung: "apply",
      prompt: (
        <p>
          How do the subsequences show that <M>{"a_n = (-1)^n (1 + 1/n)"}</M> diverges?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The even terms tend to 1 and the odd terms to −1, and a convergent sequence cannot have subsequences with different limits.",
          "The sequence is unbounded.",
          "The sequence is not monotone, and only monotone sequences converge.",
          "The terms are never zero.",
        ],
        correct: [0],
      },
    },
    {
      key: "peaks",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"a_n = 1/n"}</M>, which terms are peaks, in the sense of the second proof?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["Every term", "Only the first term", "No term", "Only the even terms"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that if <M>{"a_n \\to a"}</M> then every subsequence <M>{"a_{n_k}"}</M> tends to <M>{"a"}</M>. A few lines
          will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Given ε, takes N with |a_n − a| < ε for n ≥ N.",
          "Notes n_k ≥ k, by induction from the strictly increasing indices.",
          "Concludes |a_{n_k} − a| < ε for k ≥ N.",
        ],
      },
    },
    {
      key: "max",
      rung: "stretch",
      prompt: (
        <p>
          Sketch how Bolzano-Weierstrass proves that a continuous function on <M>{"[a, b]"}</M> attains its supremum,
          assuming the function is bounded.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Chooses points x_n with f(x_n) → sup f.",
          "Extracts a convergent subsequence x_{n_k} → c, with c in [a, b] because the interval is closed.",
          "Uses continuity: f(c) = lim f(x_{n_k}) = sup f.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a subsequence is, what the Bolzano-Weierstrass theorem says, how the halving proof finds a convergent subsequence, and why the theorem needs boundedness and completeness.",

  glimpse: (
    <p>
      The next lesson asks how to tell a sequence converges without knowing its limit, and Bolzano-Weierstrass is the key
      step in proving that Cauchy sequences converge. Later in the course the theorem grows into the Heine-Borel theorem,
      and in metric spaces it becomes the definition of sequential compactness.
    </p>
  ),
};
