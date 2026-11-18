import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { IndepCheckViz } from "@/components/viz/IndepCheckViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.1.3",
  minutes: 90,
  links: {
    revisits: ["m27.1.2", "m9.1.5", "m22.3.1"],
    foreshadows: ["m27.1.4", "m27.2.1", "m27.4.1"],
  },

  puzzle: (
    <>
      <p>
        Toss two fair coins. Let A be &lsquo;the first is heads&rsquo;, B &lsquo;the second is heads&rsquo; and C &lsquo;they
        agree&rsquo;. Any two of these events are independent. Yet once you know A and B, you know C for certain. What, then,
        should it mean for many events, or infinitely many random variables, to be independent?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose two or three events about two fair tosses, and test the product rule.</p>
      <IndepCheckViz />
    </>
  ),

  theory: (
    <>
      <Definition title="independent events">
        <p>
          Events <M>{"A_1, \\dots, A_n"}</M> are <strong>independent</strong> if for every subset I of the indices,{" "}
          <M>{"P\\left(\\bigcap_{i \\in I} A_i\\right) = \\prod_{i \\in I} P(A_i)"}</M>. An infinite family is independent if every
          finite subfamily is. Pairwise independence, the case |I| = 2 alone, is strictly weaker.
        </p>
      </Definition>

      <Definition title="independent σ-algebras and random variables">
        <p>
          Sub-σ-algebras <M>{"\\mathcal{F}_1, \\dots, \\mathcal{F}_n"}</M> are independent if any choice of events{" "}
          <M>{"A_i \\in \\mathcal{F}_i"}</M> is independent. Random variables are independent if the σ-algebras{" "}
          <M>{"\\sigma(X_i) = \\{X_i^{-1}(B)\\}"}</M> they generate are. Equivalently,{" "}
          <M>{"P(X_1 \\le x_1, \\dots, X_n \\le x_n) = \\prod P(X_i \\le x_i)"}</M> for all real <M>{"x_i"}</M>.
        </p>
      </Definition>

      <Theorem title="π-systems suffice">
        <p>
          If <M>{"\\mathcal{P}_1, \\dots, \\mathcal{P}_n"}</M> are π-systems (closed under finite intersection) and are
          independent, then so are the σ-algebras they generate.
        </p>
        <p>
          <strong>Proof idea.</strong> Fix events in <M>{"\\mathcal{P}_2, \\dots, \\mathcal{P}_n"}</M>. The sets A for which the
          product rule holds form a Dynkin system containing <M>{"\\mathcal{P}_1"}</M>, so by Dynkin&rsquo;s π-λ theorem they
          include <M>{"\\sigma(\\mathcal{P}_1)"}</M>. Repeat for each index. This is why checking distribution functions is
          enough: the half-lines form a π-system.
        </p>
      </Theorem>

      <Example title="joint law is the product">
        <p>
          X and Y are independent exactly when the law of (X, Y) on ℝ² is the product measure{" "}
          <M>{"\\mu_X \\otimes \\mu_Y"}</M>. By Fubini&rsquo;s theorem, if they are independent and integrable then{" "}
          <M>{"E[XY] = E[X]E[Y]"}</M>, and so their covariance is zero. The converse fails.
        </p>
      </Example>

      <Remark title="existence">
        <p>
          Given any sequence of laws <M>{"\\mu_1, \\mu_2, \\dots"}</M> on ℝ, there is a probability space carrying independent
          random variables with these laws. On [0, 1], split the binary digits of ω into infinitely many disjoint
          subsequences; each gives an independent uniform variable, and the quantile transform turns it into any law.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When are three events A, B, C independent?</p>,
      answer: { kind: "choice", options: ["When the product rule holds for every pair and for all three together", "When the product rule holds for every pair", "When they are disjoint", "When P(A ∩ B ∩ C) = P(A)P(B)P(C) only"], correct: [0] },
    },
    {
      key: "rv",
      rung: "check",
      prompt: <p>Random variables X and Y are independent when what is independent?</p>,
      answer: { kind: "choice", options: ["The σ-algebras σ(X) and σ(Y)", "Their expectations", "Their ranges", "Their variances"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose A, B and C. What is P(A ∩ B ∩ C)?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "ad",
      rung: "apply",
      prompt: <p>In the visualisation, are A and D independent?</p>,
      answer: { kind: "choice", options: ["No: P(A ∩ D) = 1/2 but P(A)P(D) = 3/8", "Yes", "Only if C occurs", "The question makes no sense"], correct: [0] },
    },
    {
      key: "cov",
      rung: "apply",
      prompt: <p>X takes values −1, 0, 1 with probability 1/3 each, and Y = X². What is Cov(X, Y)?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if A and B are independent, then so are A and the complement of B.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes A as the disjoint union of A ∩ B and A ∩ Bᶜ.",
          "Computes P(A ∩ Bᶜ) = P(A) − P(A)P(B) = P(A)(1 − P(B)).",
          "Concludes P(A ∩ Bᶜ) = P(A)P(Bᶜ).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>In the stretch example X and Y = X² are uncorrelated. Show they are not independent.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes P(X = 0, Y = 1) = 0.",
          "Notes P(X = 0)P(Y = 1) = (1/3)(2/3) = 2/9, which is not 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If you toss a coin forever, will heads appear infinitely often? Will a run of a hundred heads ever occur? Questions
        about infinitely many events are answered by two short lemmas.
      </p>
      <p>Next, the Borel–Cantelli lemmas.</p>
    </>
  ),
};
