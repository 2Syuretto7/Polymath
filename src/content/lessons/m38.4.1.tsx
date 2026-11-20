import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { OracleUseViz } from "@/components/viz/OracleUseViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.4.1",
  minutes: 90,
  links: {
    revisits: ["m20.5.3", "m20.5.1", "m20.5.2"],
    foreshadows: ["m38.4.2", "m38.4.3", "m20.4.3"],
  },

  puzzle: (
    <>
      <p>
        The halting problem is undecidable. But suppose a sealed box could answer any question of the form &lsquo;does
        machine e halt on input x?&rsquo;. Which other problems could you then solve? Could you decide whether a machine
        halts on every input? Is there a problem so hard that even this box does not help?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Flip bits of the oracle and change the input, and see which part of the oracle the computation uses.</p>
      <OracleUseViz />
    </>
  ),

  theory: (
    <>
      <Definition title="oracle machines and Turing reducibility">
        <p>
          An <strong>oracle machine</strong> is a Turing machine with an extra instruction that asks whether a number lies
          in a fixed set A, the <strong>oracle</strong>. Write <M>{"\\Phi_e^A"}</M> for the e-th oracle machine run with A.
          A set B is <strong>Turing reducible</strong> to A, written <M>{"B \\le_T A"}</M>, if some <M>{"\\Phi_e^A"}</M>{" "}
          computes the characteristic function of B. This is a preorder; A and B are{" "}
          <strong>Turing equivalent</strong> if each is reducible to the other, and the equivalence classes are the{" "}
          <strong>Turing degrees</strong>.
        </p>
      </Definition>

      <Theorem title="the use principle">
        <p>
          If <M>{"\\Phi_e^A(x)"}</M> halts, it has asked only finitely many questions, all below some number u, the{" "}
          <strong>use</strong>. Any oracle B agreeing with A below u gives the same computation. This is why oracle
          computations can be approximated: a construction need only protect finitely much of an oracle at a time.
        </p>
      </Theorem>

      <Definition title="the jump">
        <p>
          The <strong>jump</strong> of A is <M>{"A' = \\{e : \\Phi_e^A(e) \\text{ halts}\\}"}</M>, the halting problem
          relative to A. By the same diagonal argument as for the halting problem, <M>{"A <_T A'"}</M>: the jump is
          strictly harder. Starting from the empty set, <M>{"\\emptyset' \\equiv_T K"}</M>, and iterating gives{" "}
          <M>{"\\emptyset'' , \\emptyset''' , \\ldots"}</M>, an infinite ascending sequence of degrees.
        </p>
      </Definition>

      <Example title="reductions">
        <p>
          The complement of K is Turing reducible to K with one query, though it is not c.e. The set{" "}
          <M>{"\\mathrm{Tot} = \\{e : \\varphi_e \\text{ is total}\\}"}</M> is not reducible to K but is reducible to{" "}
          <M>{"\\emptyset''"}</M>: with ∅′ as an oracle, the question &lsquo;is there an x on which e diverges?&rsquo; is a
          halting question about a machine that searches for such an x, using ∅′ to test each candidate.
        </p>
      </Example>

      <Remark title="many-one reducibility">
        <p>
          A stricter notion, <M>{"B \\le_m A"}</M>, asks for a computable f with x ∈ B exactly when f(x) ∈ A: a single query,
          whose answer must be returned unchanged. The complement of K is Turing but not many-one reducible to K, since
          everything many-one reducible to a c.e. set is c.e. Turing reducibility is the coarser and more natural measure of
          relative difficulty.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for B to be Turing reducible to A?</p>,
      answer: { kind: "choice", options: ["Some oracle machine with oracle A computes the characteristic function of B", "B is a subset of A", "B is c.e. and A is not", "There is a bijection between A and B"], correct: [0] },
    },
    {
      key: "jump",
      rung: "check",
      prompt: <p>How does the jump A′ compare with A?</p>,
      answer: { kind: "choice", options: ["A is strictly below A′ in Turing degree", "They are always Turing equivalent", "A′ is computable", "A′ is below A"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set n = 3. How many bits of the oracle does the computation query?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "comp",
      rung: "apply",
      prompt: <p>Is the complement of K Turing reducible to K?</p>,
      answer: { kind: "choice", options: ["Yes: ask whether e is in K and answer the opposite", "No, since it is not c.e.", "Only with infinitely many queries", "Only many-one reducible"], correct: [0] },
    },
    {
      key: "mone",
      rung: "apply",
      prompt: <p>Why is the complement of K not many-one reducible to K?</p>,
      answer: { kind: "choice", options: ["Anything many-one reducible to a c.e. set is c.e., and the complement of K is not", "K is decidable", "Many-one reductions do not exist", "The complement of K is finite"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that Turing reducibility is transitive: if C is Turing reducible to B and B to A, then C is Turing reducible to A.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes oracle machines computing C from B and B from A.",
          "Builds a machine with oracle A that runs the first, and answers each question about B by running the second.",
          "Notes the combined machine halts on every input, since each simulated query halts, so it computes C from A.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is A′ not Turing reducible to A?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes A′ is computed by an oracle machine with oracle A, and builds a machine Φₑᴬ that halts on e exactly when e is not in A′.",
          "Runs it on its own index to get a contradiction, as in the halting problem.",
          "Concludes that A′ is strictly above A, noting that A is reducible to A′ easily. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The jumps of the empty set measure how many unbounded quantifiers a definition needs. Counting quantifiers sorts the
        definable sets of numbers into a hierarchy.
      </p>
      <p>Next, the arithmetical hierarchy.</p>
    </>
  ),
};
