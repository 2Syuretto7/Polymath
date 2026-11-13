import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LimsupViz } from "@/components/viz/LimsupViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.2.5",
  minutes: 80,
  links: {
    revisits: ["m6.2.4", "m6.2.3", "m6.1.2"],
    foreshadows: ["m6.3.1", "m6.8.3", "m6.4.1"],
  },

  puzzle: (
    <>
      <p>
        The root test says a series <M>{"\\sum a_k"}</M> converges if <M>{"\\sqrt[k]{|a_k|}"}</M> tends to a limit below 1.
        But what if those roots do not converge at all? Take <M>{"a_k = 2^{-k}"}</M> for even <M>{"k"}</M> and{" "}
        <M>{"3^{-k}"}</M> for odd <M>{"k"}</M>: the roots jump between <M>{"\\tfrac12"}</M> and <M>{"\\tfrac13"}</M>{" "}
        forever. The series plainly converges. A divergent sequence still has an eventual ceiling and floor. How do we name
        them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        For each starting point <M>{"N"}</M>, look at the tail from <M>{"N"}</M> on, and draw its supremum and infimum. Slide{" "}
        <M>{"N"}</M> to the right and watch the two lines close in.
      </p>
      <LimsupViz />
    </>
  ),

  theory: (
    <>
      <Definition title="limsup and liminf">
        <p>
          For a bounded sequence <M>{"(a_n)"}</M>, let <M>{"y_N = \\sup\\{a_n : n \\ge N\\}"}</M> and{" "}
          <M>{"z_N = \\inf\\{a_n : n \\ge N\\}"}</M>. As <M>{"N"}</M> grows the tail shrinks, so <M>{"y_N"}</M> decreases
          and <M>{"z_N"}</M> increases. By monotone convergence both converge, and we define
        </p>
        <MD>{"\\limsup a_n = \\lim_{N \\to \\infty} y_N, \\qquad \\liminf a_n = \\lim_{N \\to \\infty} z_N."}</MD>
        <p>
          Unlike the limit, these always exist for bounded sequences. For unbounded ones, we allow the values{" "}
          <M>{"\\pm\\infty"}</M>.
        </p>
      </Definition>

      <Theorem title="when the limit exists">
        <p>
          Always <M>{"\\liminf a_n \\le \\limsup a_n"}</M>, and <M>{"(a_n)"}</M> converges if and only if they are equal, in
          which case both equal the limit.
        </p>
      </Theorem>

      <Proof>
        <p>
          Since <M>{"z_N \\le a_n \\le y_N"}</M> for every <M>{"n \\ge N"}</M>, we have <M>{"z_N \\le y_N"}</M>, and the
          inequality passes to the limits. If the two are equal to <M>{"L"}</M>, the squeeze <M>{"z_n \\le a_n \\le y_n"}</M>{" "}
          gives <M>{"a_n \\to L"}</M>. Conversely, if <M>{"a_n \\to L"}</M>, then for <M>{"n \\ge N"}</M> every term is in{" "}
          <M>{"(L - \\varepsilon, L + \\varepsilon)"}</M>, so <M>{"y_N"}</M> and <M>{"z_N"}</M> lie in{" "}
          <M>{"[L - \\varepsilon, L + \\varepsilon]"}</M>, and both limits equal <M>{"L"}</M>.
        </p>
      </Proof>

      <Example title="three sequences">
        <p>
          For <M>{"(-1)^n(1 + 1/n)"}</M>, the limsup is 1 and the liminf is <M>{"-1"}</M>, though no term equals either. For{" "}
          <M>{"\\sin n"}</M>, they are 1 and <M>{"-1"}</M>, since the terms come arbitrarily close to both. For{" "}
          <M>{"1/n"}</M>, both are 0, and the sequence converges.
        </p>
      </Example>

      <Remark title="subsequential limits">
        <p>
          The limsup is the largest limit of any subsequence, and the liminf the smallest. This connects the definition with
          Bolzano-Weierstrass, which promises at least one subsequential limit. The limsup is what makes the root test work
          in general: <M>{"\\sum a_k"}</M> converges absolutely if <M>{"\\limsup \\sqrt[k]{|a_k|} < 1"}</M>. The same
          quantity gives the radius of convergence of a power series, in the Cauchy-Hadamard formula.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sup",
      rung: "check",
      prompt: (
        <p>
          What is <M>{"\\limsup"}</M> of <M>{"a_n = (-1)^n(1 + 1/n)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "eq",
      rung: "check",
      prompt: <p>When does a bounded sequence converge?</p>,
      answer: {
        kind: "choice",
        options: [
          "Always",
          "Exactly when its limsup equals its liminf",
          "Exactly when its limsup is positive",
          "Exactly when it is monotone",
        ],
        correct: [1],
      },
    },
    {
      key: "inf",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"a_n = 3"}</M> for even <M>{"n"}</M> and <M>{"a_n = 1/n"}</M> for odd <M>{"n"}</M>. What is its liminf?
        </p>
      ),
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "root",
      rung: "apply",
      prompt: (
        <p>
          In the puzzle, the roots <M>{"\\sqrt[k]{a_k}"}</M> alternate between <M>{"\\tfrac12"}</M> and{" "}
          <M>{"\\tfrac13"}</M>. What is their limsup?
        </p>
      ),
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "yN",
      rung: "apply",
      prompt: (
        <p>
          Why must <M>{"y_N = \\sup\\{a_n : n \\ge N\\}"}</M> be decreasing in <M>{"N"}</M>?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Because the sequence is decreasing.",
          "Because the tail from N + 1 is a subset of the tail from N, and the sup of a smaller set is no larger.",
          "Because every sequence converges.",
          "Because the terms are positive.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that if <M>{"\\liminf a_n = \\limsup a_n = L"}</M> then <M>{"a_n \\to L"}</M>. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses z_n ≤ a_n ≤ y_n, from the definitions of the tail inf and sup.",
          "Notes y_n → L and z_n → L.",
          "Concludes a_n → L by the squeeze theorem.",
        ],
      },
    },
    {
      key: "subseq",
      rung: "stretch",
      prompt: (
        <p>
          Show that some subsequence of a bounded sequence converges to its limsup. A sketch is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Lets L be the limsup and notes y_N → L.",
          "Uses that y_N is a supremum to choose, at each stage, a later term within 1/k of y_N, with increasing indices.",
          "Concludes that this subsequence is squeezed towards L.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the limsup and liminf are defined from the tails of a sequence, why they always exist for bounded sequences, how they decide convergence, and why the root test needs them.",

  glimpse: (
    <p>
      The next chapter proves the convergence tests properly, with the root test stated in terms of the limsup. The same
      idea returns in the radius of convergence of power series, and limit points of sets, studied with open and closed sets,
      are the set version of subsequential limits.
    </p>
  ),
};
