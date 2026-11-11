import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FitchBox, SubproofViz, type FitchProof } from "@/components/viz/SubproofViz";
import type { LessonContent } from "@/lib/types";

const PROOFS: FitchProof[] = [
  {
    name: "Symmetry", claim: "a = b ⊢ b = a",
    lines: [
      { s: "a = b", depth: 0, why: "premise", note: "The goal looks like the premise turned round. But no rule simply swaps the sides, so the proof must be cleverer." },
      { s: "a = a", depth: 0, why: "=I", note: "Identity introduction: a = a may be written on any line, citing nothing. Everything is identical to itself." },
      { s: "b = a", depth: 0, why: "=E 1, 2", note: "Identity elimination: since a = b, replace a by b in line 2. We may replace some occurrences and leave others. Replacing only the first a gives b = a." },
    ],
  },
  {
    name: "Transitivity", claim: "a = b, b = c ⊢ a = c",
    lines: [
      { s: "a = b", depth: 0, why: "premise", note: "" },
      { s: "b = c", depth: 0, why: "premise", note: "Read line 2 as licence to replace b by c anywhere." },
      { s: "a = c", depth: 0, why: "=E 2, 1", note: "Replace b by c in line 1. One step." },
    ],
  },
  {
    name: "Telling things apart", claim: "Fa, ¬Fb ⊢ a ≠ b",
    lines: [
      { s: "Fa", depth: 0, why: "premise", note: "a is F and b is not. Surely they are different things. The goal, a ≠ b, is a negation, so use ¬I." },
      { s: "¬Fb", depth: 0, why: "premise", note: "" },
      { s: "a = b", depth: 1, why: "assumption", assume: true, note: "Suppose they were the same." },
      { s: "Fb", depth: 1, why: "=E 3, 1", note: "Then whatever is true of a is true of b. Replace a by b in Fa." },
      { s: "¬Fb", depth: 1, why: "R 2", note: "A contradiction with the premise." },
      { s: "a ≠ b", depth: 0, why: "¬I 3–5", note: "So a ≠ b, which abbreviates ¬(a = b). Things that differ in any property are two things." },
    ],
  },
  {
    name: "At most one", claim: "∀x∀y((Fx ∧ Fy) → x = y), Fa, Fb ⊢ a = b",
    lines: [
      { s: "∀x∀y((Fx ∧ Fy) → x = y)", depth: 0, why: "premise", note: "There is at most one F." },
      { s: "Fa", depth: 0, why: "premise", note: "" },
      { s: "Fb", depth: 0, why: "premise", note: "a and b are both F, so they must be the same." },
      { s: "∀y((Fa ∧ Fy) → a = y)", depth: 0, why: "∀E 1", note: "Instantiate the outer quantifier with a." },
      { s: "(Fa ∧ Fb) → a = b", depth: 0, why: "∀E 4", note: "Then the inner one with b." },
      { s: "Fa ∧ Fb", depth: 0, why: "∧I 2, 3", note: "" },
      { s: "a = b", depth: 0, why: "→E 5, 6", note: "So a = b. 'At most one F' means exactly this: any two Fs are one." },
    ],
  },
];

export const lesson: LessonContent = {
  id: "p2.6.2",
  minutes: 75,
  links: {
    revisits: ["p2.4.3", "p2.3.4"],
    foreshadows: ["p15.1.1", "p7.6.2"],
  },

  puzzle: (
    <>
      <p>
        Identity has a special status: its meaning is fixed by logic, not by an interpretation. So there should be rules
        for it, as there are for ∧ and ∀. What are they?
      </p>
      <p>
        Two facts seem to capture everything. Everything is identical to itself. And if a and b are identical, anything
        true of a is true of b. Can symmetry, transitivity and all the rest be squeezed out of just these two?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        If a = b, then a and b are one thing with two names, so swapping one name for the other cannot turn a truth into a
        falsehood. That is the elimination rule. The introduction rule is the bare fact that everything is itself. Step
        through the proofs below: symmetry needs a small trick, and the third proof turns the rule round to show that two
        things are different.
      </p>
      <SubproofViz proofs={PROOFS} />
    </>
  ),

  theory: (
    <>
      <Definition title="the identity rules">
        <ul>
          <li>
            <strong>=I</strong> (identity introduction): for any name a, write a = a. It cites no earlier lines and depends
            on nothing.
          </li>
          <li>
            <strong>=E</strong> (identity elimination): from a = b and a sentence φ containing a, infer the result of
            replacing some or all occurrences of a in φ by b. Also, from a = b and φ containing b, replace some or all
            occurrences of b by a.
          </li>
        </ul>
      </Definition>

      <Remark title="where the rules come from">
        <p>
          =E is often called <strong>Leibniz&rsquo;s law</strong>, or the indiscernibility of identicals: if a is b, there
          is no difference between them to be found. It is plainly valid, because there is only one object to have or lack
          the property. Its converse, the <strong>identity of indiscernibles</strong>, says that things exactly alike in
          every property are identical. Leibniz held that too, but it is not a rule of logic. Max Black imagined a universe
          containing nothing but two qualitatively identical iron spheres, and asked what property could tell them apart.
        </p>
      </Remark>

      <Example title="theorems of identity">
        <p>With the quantifier rules, the basic laws of identity become theorems.</p>
        <FitchBox
          lines={[
            { s: "a = a", depth: 0, why: "=I" },
            { s: "∀x x = x", depth: 0, why: "∀I 1" },
          ]}
        />
        <p>
          ∀I is allowed, since there are no premises and no assumptions, so a is arbitrary. In the same way, symmetry and
          transitivity in their universal forms, ∀x∀y(x = y → y = x) and ∀x∀y∀z((x = y ∧ y = z) → x = z), follow from the
          proofs above with →I and ∀I.
        </p>
      </Example>

      <Example title="the only one">
        <p>
          From &ldquo;Ravi is the tallest person in the class&rdquo; and &ldquo;Meera is the tallest person in the
          class&rdquo;, it follows that Ravi is Meera. Symbolised with a uniqueness clause, as in the lessons on identity and descriptions,
          this is the &ldquo;at most one&rdquo; proof above, and it is how arguments involving definite descriptions are
          proved.
        </p>
      </Example>

      <Remark title="where =E seems to fail">
        <p>
          Hesperus is Phosphorus. Ancient astronomers believed that Hesperus appears in the evening. Did they therefore
          believe that Phosphorus appears in the evening? It seems not: they did not know the two were the same. In
          contexts of belief, swapping coreferring names can change truth value. Our formal language has no way to say
          &ldquo;believes that&rdquo;, so =E is safe there, but the puzzle is real, and Frege&rsquo;s answer to it, the
          distinction between sense and reference, began modern philosophy of language.
        </p>
      </Remark>

      <Remark title="identity in trees">
        <p>
          Truth trees handle identity with matching rules: a branch closes if it contains a ≠ a, and if a branch contains a
          = b and a sentence with a, the result of replacing a by b may be added. A counterexample read off an open branch
          must then treat names linked by = as naming one object.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "intro",
      rung: "check",
      prompt: <p>Which of these may be written on any line of a proof by =I alone? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["a = a", "b = b", "a = b", "∀x x = x"], correct: [0, 1] },
    },
    {
      key: "elim",
      rung: "check",
      prompt: <p>From c = d and Rcc, which of these follow by one application of =E? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Rdd", "Rcd", "Rdc", "Rcc ∧ Rdd"], correct: [0, 1, 2] },
    },
    {
      key: "lines",
      rung: "apply",
      prompt: <p>A proof of a = b, Fa ⊢ Fb uses the two premises and one application of =E. How many lines does it have?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "law",
      rung: "apply",
      prompt: <p>Which of these principles is a rule of logic in this system?</p>,
      answer: {
        kind: "choice",
        options: [
          "If a = b, then whatever is true of a is true of b",
          "If whatever is true of a is true of b, then a = b",
          "If a and b look exactly alike, then a = b",
          "If a and b have different names, then a ≠ b",
        ],
        correct: [0],
      },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of these arguments are valid? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["a = b, Gb ⊢ Ga", "Fa, Fb ⊢ a = b", "Rab, ¬Rbb ⊢ a ≠ b", "a = b, b ≠ c ⊢ a ≠ c"],
        correct: [0, 2, 3],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove ∀x(x = a → Fx) ⊢ Fa, giving the justification for every line.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses ∀E to get a = a → Fa.",
          "Uses =I to write a = a.",
          "Concludes Fa by →E. A four-line proof is enough.",
        ],
      },
    },
    {
      key: "exactly",
      rung: "stretch",
      prompt: (
        <p>
          Prove ∃x(Fx ∧ ∀y(Fy → y = x)), Fa ⊢ ∀y(Fy → y = a): if there is exactly one F, and a is F, then every F is a.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Opens an ∃E subproof assuming Fb ∧ ∀y(Fy → y = b) for a new name b.",
          "Gets a = b from Fa, and then, for an arbitrary c with Fc, gets c = b, and so c = a using symmetry and transitivity (or =E).",
          "Closes with →I and ∀I on c, then ∃E, checking the conditions on names. Any sound arrangement of these steps is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the two rules for identity, how symmetry of identity can be proved from them, and why the identity of indiscernibles is not a rule of logic.",

  glimpse: (
    <p>
      The last lesson of the course gathers strategies for finding proofs. Philosophy of Language takes up Frege&rsquo;s
      puzzle about identity and belief. Early Modern Philosophy examines Leibniz&rsquo;s defence of the identity of
      indiscernibles, which he used to argue that space cannot be absolute.
    </p>
  ),
};
