import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FitchBox, SubproofViz, type FitchProof } from "@/components/viz/SubproofViz";
import type { LessonContent } from "@/lib/types";

const PROOFS: FitchProof[] = [
  {
    name: "Denying the consequent", claim: "A → B, ¬B ⊢ ¬A",
    lines: [
      { s: "A → B", depth: 0, why: "premise", note: "The premises come first." },
      { s: "¬B", depth: 0, why: "premise", note: "The goal is a negation, ¬A. The plan: assume A and show that it leads to a contradiction." },
      { s: "A", depth: 1, why: "assumption", assume: true, note: "Suppose, for the sake of argument, that A." },
      { s: "B", depth: 1, why: "→E 1, 3", note: "Then B, by modus ponens." },
      { s: "¬B", depth: 1, why: "R 2", note: "But ¬B is available from outside the subproof. The subproof now contains both B and ¬B: a contradiction." },
      { s: "¬A", depth: 0, why: "¬I 3–5", note: "The assumption A led to a contradiction, so close the subproof and conclude ¬A. This pattern is modus tollens." },
    ],
  },
  {
    name: "Anything from a contradiction", claim: "A, ¬A ⊢ B",
    lines: [
      { s: "A", depth: 0, why: "premise", note: "Premises that contradict each other." },
      { s: "¬A", depth: 0, why: "premise", note: "The goal is B, a sentence that has nothing to do with A. Indirect proof: assume ¬B." },
      { s: "¬B", depth: 1, why: "assumption", assume: true, note: "Suppose ¬B." },
      { s: "A", depth: 1, why: "R 1", note: "A is available." },
      { s: "¬A", depth: 1, why: "R 2", note: "So is ¬A. The subproof contains a contradiction, though not one that ¬B caused." },
      { s: "B", depth: 0, why: "IP 3–5", note: "So B, by indirect proof. From contradictory premises, any sentence at all can be proved. This is called explosion." },
    ],
  },
  {
    name: "Excluded middle", claim: "⊢ A ∨ ¬A",
    lines: [
      { s: "¬(A ∨ ¬A)", depth: 1, why: "assumption", assume: true, note: "No premises. The goal is a disjunction, but neither A nor ¬A can be proved on its own. So try indirect proof: assume the goal is false." },
      { s: "A", depth: 2, why: "assumption", assume: true, note: "Inside, assume A, hoping for a contradiction." },
      { s: "A ∨ ¬A", depth: 2, why: "∨I 2", note: "From A, the disjunction follows." },
      { s: "¬(A ∨ ¬A)", depth: 2, why: "R 1", note: "That contradicts the outer assumption." },
      { s: "¬A", depth: 1, why: "¬I 2–4", note: "So ¬A, by ¬I." },
      { s: "A ∨ ¬A", depth: 1, why: "∨I 5", note: "But from ¬A the disjunction follows again." },
      { s: "¬(A ∨ ¬A)", depth: 1, why: "R 1", note: "And again it contradicts the assumption on line 1." },
      { s: "A ∨ ¬A", depth: 0, why: "IP 1–7", note: "So the assumption was impossible, and A ∨ ¬A is a theorem: it depends on nothing." },
    ],
  },
];

export const lesson: LessonContent = {
  id: "p2.3.3",
  minutes: 75,
  links: {
    revisits: ["p0.4.4", "p2.2.4"],
    parallels: ["m1.3.3"],
    foreshadows: ["p17.4.2", "p4.2.4"],
  },

  puzzle: (
    <>
      <p>
        If the bridge is open, the lorry will come. The lorry has not come. So the bridge is not open. This argument is
        valid, as a truth table shows. Yet with every rule met so far, you cannot prove it: no rule ends in a negation unless
        a negation was already there to take apart.
      </p>
      <p>
        And there is worse. A ∨ ¬A is true in every valuation, but no rule so far can prove it from nothing. What is
        missing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        What is missing is the oldest move in argument: suppose the opposite, and show that it leads to absurdity. If
        assuming A lets you derive a contradiction, A cannot be true, so ¬A. If assuming ¬A leads to a contradiction, then
        A. Both are subproofs, like conditional proof, but what they discharge is an assumption that has been shown
        impossible.
      </p>
      <SubproofViz proofs={PROOFS} />
    </>
  ),

  theory: (
    <>
      <Definition title="contradiction">
        <p>
          A subproof <strong>contains a contradiction</strong> if it contains, as lines of its own (reiterated if need be),
          some sentence ψ and its negation ¬ψ.
        </p>
      </Definition>

      <Definition title="negation introduction (¬I)">
        <p>
          If a subproof begins with the assumption φ and contains a contradiction, then after it ends you may write ¬φ,
          citing the subproof.
        </p>
      </Definition>

      <Definition title="indirect proof (IP)">
        <p>
          If a subproof begins with the assumption ¬φ and contains a contradiction, then after it ends you may write φ,
          citing the subproof.
        </p>
      </Definition>

      <Remark title="two kinds of reductio">
        <p>
          The two rules look alike but are not equally innocent. ¬I says: whatever leads to absurdity is false. IP says: if
          the denial of φ leads to absurdity, then φ is true. IP adds nothing new to a system that already has DN, since
          from the same subproof ¬I gives ¬¬φ, and DN gives φ. But both IP and DN rest on the idea that every sentence is
          either true or false, so that refuting ¬φ establishes φ. Some mathematicians, the intuitionists, reject this:
          for them, refuting the denial of a claim is not the same as proving the claim. They accept ¬I but not IP, and
          they do not accept A ∨ ¬A as a law.
        </p>
      </Remark>

      <Example title="the bridge">
        <p>
          The puzzle&rsquo;s argument is the first proof in the visualisation, with A: the bridge is open, and B: the lorry
          will come. Its form, φ → ψ and ¬ψ, therefore ¬φ, is <strong>modus tollens</strong>. The next lesson makes it a
          rule of its own.
        </p>
      </Example>

      <Example title="explosion">
        <p>
          The second proof shows that contradictory premises entail everything. This matches the truth tables: an argument
          whose premises can never all be true has no valuation with true premises and a false conclusion, so it is valid.
          It is a reason to take inconsistency seriously. A set of beliefs that contains a contradiction does not merely
          contain one false belief; by the rules of logic, it supports every claim whatever.
        </p>
      </Example>

      <Example title="a negated conjunction">
        <p>Negations of compound sentences are usually proved by ¬I. Here is ¬A ⊢ ¬(A ∧ B):</p>
        <FitchBox
          lines={[
            { s: "¬A", depth: 0, why: "premise" },
            { s: "A ∧ B", depth: 1, why: "assumption", assume: true },
            { s: "A", depth: 1, why: "∧E 2" },
            { s: "¬A", depth: 1, why: "R 1" },
            { s: "¬(A ∧ B)", depth: 0, why: "¬I 2–4" },
          ]}
        />
      </Example>

      <Remark title="the system is now complete">
        <p>
          With the rules of the last three lessons, and one more for introducing biconditionals that the next lesson
          supplies, every argument of sentential logic that is valid by the truth tables can be proved, and, by soundness,
          nothing else can. The truth tables and the proofs now agree exactly. Proving this
          completeness theorem is a central task of Logic II: Metalogic and Beyond.
        </p>
      </Remark>

      <Remark title="strategy">
        <p>
          When the goal is a negation ¬φ, assume φ and aim for a contradiction. When the goal is anything else and no direct
          plan works, assume its negation and aim for a contradiction: IP is the rule of last resort, and it always applies.
          The contradiction to aim for is usually a premise and its negation, so look for a premise that the assumption lets
          you contradict.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "assume",
      rung: "check",
      prompt: <p>To prove ¬P by ¬I, what should the subproof assume?</p>,
      answer: { kind: "choice", options: ["P", "¬P", "¬¬P", "P ∨ ¬P"], correct: [0] },
    },
    {
      key: "pair",
      rung: "check",
      prompt: <p>Which of these pairs is a contradiction, in the sense used by ¬I and IP?</p>,
      answer: {
        kind: "choice",
        options: ["A ∨ B and ¬A ∨ ¬B", "A → B and ¬A → ¬B", "A ∧ B and ¬(A ∧ B)", "A and ¬¬A"],
        correct: [2],
      },
    },
    {
      key: "target",
      rung: "apply",
      prompt: (
        <p>
          From the premises ¬(A ∧ B) and A, you want ¬B by ¬I. After assuming B, which contradiction should you aim for?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["A and ¬A", "A ∧ B and ¬(A ∧ B)", "B and ¬B", "A ∨ B and ¬(A ∨ B)"],
        correct: [1],
      },
    },
    {
      key: "dn",
      rung: "apply",
      prompt: <p>Without using DN, how could you prove A from the premise ¬¬A?</p>,
      answer: {
        kind: "choice",
        options: ["¬I, assuming A", "IP, assuming ¬A", "→I, assuming ¬¬A", "∨E, assuming A"],
        correct: [1],
      },
    },
    {
      key: "explosion",
      rung: "apply",
      prompt: <p>Which of these conclusions can be proved from the premises P and ¬P? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Q", "¬Q", "P ∧ ¬P", "Q ∧ ¬Q"], correct: [0, 1, 2, 3] },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Give a proof, with every line justified, of A → ¬B ⊢ ¬(A ∧ B).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Assumes A ∧ B to open a subproof.",
          "Gets A and B by ∧E, then ¬B by →E.",
          "Has both B and ¬B in the subproof.",
          "Closes the subproof and writes ¬(A ∧ B) by ¬I, citing it.",
        ],
      },
    },
    {
      key: "intuition",
      rung: "stretch",
      prompt: (
        <p>
          Prove ⊢ ¬(A ∧ ¬A) using ¬I alone, and recall the proof of ⊢ A ∨ ¬A, which used IP. Why might someone who doubts
          that every statement is either true or false accept the first theorem but not the second?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Assumes A ∧ ¬A, gets A and ¬A by ∧E, and concludes ¬(A ∧ ¬A) by ¬I.",
          "Notes that the proof of A ∨ ¬A needs IP (or DN), which concludes a sentence from the refutation of its denial.",
          "Explains, in their own words, that refuting a contradiction does not require that every statement be true or false, while asserting A ∨ ¬A seems to.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how proof by contradiction works in natural deduction, the difference between ¬I and indirect proof, and why contradictory premises let you prove anything.",

  glimpse: (
    <p>
      In Logic II: Metalogic and Beyond, intuitionistic logic drops indirect proof and studies what is left, and it turns out
      to describe constructive mathematics exactly. Ancient Greek Philosophy shows reductio at work in Socrates&rsquo;s
      method of questioning, which leads a confident speaker, step by step, to contradict themselves.
    </p>
  ),
};
