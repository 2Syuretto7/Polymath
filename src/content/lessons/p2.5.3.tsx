import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TreeViz, type Tree } from "@/components/viz/TreeViz";
import type { LessonContent } from "@/lib/types";

const rule = { fontFamily: "var(--font-mono)", fontSize: 13.5 };

const TREES: Tree[] = [
  {
    name: "Socrates",
    claim: "∀x(Fx → Gx), Fa ∴ Ga",
    root: {
      at: 0,
      lines: [{ t: "∀x(Fx → Gx)" }, { t: "Fa" }, { t: "¬Ga" }, { t: "Fa → Ga", at: 1, tick: 2 }],
      kids: [{ at: 2, lines: [{ t: "¬Fa" }], close: 3 }, { at: 2, lines: [{ t: "Ga" }], close: 3 }],
    },
    notes: [
      "List the premises and the negation of the conclusion, as before.",
      "A universal sentence is true of everything, so it is true of a. Write the instance Fa → Ga. The universal is not ticked: it may be needed again for other names.",
      "Decompose the conditional, as in sentential logic: ¬Fa or Ga.",
      "The left branch has Fa and ¬Fa; the right has Ga and ¬Ga. Both close.",
    ],
    verdict: "Every branch closes. Valid.",
  },
  {
    name: "A new name",
    claim: "∀x(Fx → Gx), ∃xFx ∴ ∃xGx",
    root: {
      at: 0,
      lines: [
        { t: "∀x(Fx → Gx)" }, { t: "∃xFx", tick: 1 }, { t: "¬∃xGx", tick: 2 },
        { t: "Fa", at: 1 }, { t: "∀x¬Gx", at: 2 }, { t: "¬Ga", at: 3 }, { t: "Fa → Ga", at: 3, tick: 4 },
      ],
      kids: [{ at: 4, lines: [{ t: "¬Fa" }], close: 5 }, { at: 4, lines: [{ t: "Ga" }], close: 5 }],
    },
    notes: [
      "Premises, and the negated conclusion.",
      "Something is F. Give it a name that is new to the branch, a, and write Fa. The existential is ticked: it has done its work.",
      "¬∃xGx says that nothing is G, which is ∀x¬Gx. Tick the negation and write the universal.",
      "Now use both universals on the name a: ¬Ga, and Fa → Ga.",
      "Decompose the conditional.",
      "Both branches close.",
    ],
    verdict: "Every branch closes. Valid.",
  },
  {
    name: "Two existentials",
    claim: "∃xFx, ∃xGx ∴ ∃x(Fx ∧ Gx)",
    root: {
      at: 0,
      lines: [
        { t: "∃xFx", tick: 1 }, { t: "∃xGx", tick: 2 }, { t: "¬∃x(Fx ∧ Gx)", tick: 3 },
        { t: "Fa", at: 1 }, { t: "Gb", at: 2 }, { t: "∀x¬(Fx ∧ Gx)", at: 3 },
        { t: "¬(Fa ∧ Ga)", at: 4, tick: 5 }, { t: "¬(Fb ∧ Gb)", at: 4, tick: 6 },
      ],
      kids: [
        { at: 5, lines: [{ t: "¬Fa" }], close: 6 },
        { at: 5, lines: [{ t: "¬Ga" }], kids: [{ at: 6, lines: [{ t: "¬Fb" }], open: 7 }, { at: 6, lines: [{ t: "¬Gb" }], close: 7 }] },
      ],
    },
    notes: [
      "Premises, and the negated conclusion.",
      "Something is F: call it a.",
      "Something is G. The name must be new, so call it b, not a. We have no right to assume the G is the F.",
      "Rewrite the negated existential as a universal.",
      "Apply the universal to every name on the branch: a and b.",
      "Decompose ¬(Fa ∧ Ga). The left branch closes against Fa.",
      "Decompose ¬(Fb ∧ Gb) on the open branch. The right branch closes against Gb.",
      "Everything is decomposed, and the universal has been applied to every name. One branch is open and complete.",
    ],
    verdict: "Read the counterexample off the open branch. Domain {a, b}; F is true of a only (Fa, ¬Fb); G of b only (Gb, ¬Ga). Both premises are true, the conclusion false. Invalid.",
  },
  {
    name: "A tree that never ends",
    claim: "∀x∃y Rxy ∴ ∃x Rxx",
    root: {
      at: 0,
      lines: [
        { t: "∀x∃y Rxy" }, { t: "¬∃x Rxx", tick: 1 }, { t: "∀x¬Rxx", at: 1 },
        { t: "∃y Ray", at: 2, tick: 3 }, { t: "¬Raa", at: 2 }, { t: "Rab", at: 3 },
        { t: "∃y Rby", at: 4, tick: 5 }, { t: "¬Rbb", at: 4 }, { t: "Rbc", at: 5 },
      ],
    },
    notes: [
      "Premise, and the negated conclusion.",
      "Rewrite the negated existential: ∀x¬Rxx.",
      "There are no names on the branch yet, and the domain is never empty, so introduce one, a, and apply both universals to it.",
      "∃y Ray: a bears R to something. Its name must be new: b.",
      "But b is a new name, so both universals must be applied to it too.",
      "And ∃y Rby brings a new name, c, which brings new instances, and so on for ever.",
    ],
    verdict: "This tree never finishes, and never closes. Its infinite branch describes an infinite counterexample: a, b, c, … with each bearing R to the next. A little thought finds a smaller one, which the rules alone would never reach: domain {a, b} with R = {(a, b), (b, a)}. The argument is invalid.",
  },
];

export const lesson: LessonContent = {
  id: "p2.5.3",
  minutes: 85,
  links: {
    revisits: ["p2.2.4", "p2.5.1"],
    foreshadows: ["p17.2.1", "m20.5.3"],
  },

  puzzle: (
    <>
      <p>
        Truth trees for sentential logic were mechanical and always finished: each rule replaced a sentence by shorter
        ones. To handle quantifiers, a tree must reason about objects, saying &ldquo;something is F; call it a&rdquo;. But
        a sentence like &ldquo;everything bears R to something&rdquo; seems to demand a new object for each object you
        have.
      </p>
      <p>Can a tree still search for a counterexample when the counterexample might have to be infinite?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        A predicate tree is still a search for a world in which the premises are true and the conclusion false. A branch
        now builds that world out of names. An existential sentence adds a fresh object, with a fresh name. A universal
        sentence must hold of every object, so it is applied to every name on the branch, now and whenever a new name
        appears. Step through the trees below; the last one shows what can go wrong.
      </p>
      <TreeViz trees={TREES} />
    </>
  ),

  theory: (
    <>
      <Definition title="the quantifier rules">
        <p>All the sentential rules carry over unchanged. Four more deal with the quantifiers.</p>
        <table className="table">
          <thead>
            <tr><th>Sentence</th><th>Add</th><th>Conditions</th></tr>
          </thead>
          <tbody>
            <tr><td style={rule}>∃xφ</td><td style={rule}>φ(a)</td><td>a is a name new to the branch; tick ∃xφ</td></tr>
            <tr><td style={rule}>∀xφ</td><td style={rule}>φ(a)</td><td>for every name a on the branch (a new one if there are none); never tick</td></tr>
            <tr><td style={rule}>¬∃xφ</td><td style={rule}>∀x¬φ</td><td>tick</td></tr>
            <tr><td style={rule}>¬∀xφ</td><td style={rule}>∃x¬φ</td><td>tick</td></tr>
          </tbody>
        </table>
        <p>Here φ(a) is the result of putting a for every free occurrence of x in φ.</p>
      </Definition>

      <Remark title="why the existential needs a new name">
        <p>
          ∃xFx tells us that something is F, but not which thing. If a is already on the branch, writing Fa would add a
          claim the premises never made: that the F thing is a. The second premise in &ldquo;two existentials&rdquo; shows
          the danger. Writing Ga instead of Gb would close the tree, and &ldquo;prove&rdquo; an invalid argument valid.
        </p>
      </Remark>

      <Remark title="why the universal is never ticked">
        <p>
          A ticked sentence has been used up. A universal sentence is never used up: whenever a new name enters the branch,
          the universal says something new about it. A branch is complete only when every universal on it has been applied
          to every name on it.
        </p>
      </Remark>

      <Definition title="reading off a counterexample">
        <p>
          Given a complete open branch, take the domain to be the names on it, one object for each. Make an atomic
          sentence true if it appears on the branch, and false otherwise. Every sentence on the branch is then true, so the
          premises are true and the negated conclusion is true: a counterexample.
        </p>
      </Definition>

      <Example title="a tree that closes without branching">
        <p>
          ¬∀xFx ∴ ∃x¬Fx. Start with ¬∀xFx and ¬∃x¬Fx. The first becomes ∃x¬Fx, and a new name gives ¬Fa. The second
          becomes ∀x¬¬Fx, which applied to a gives ¬¬Fa, then Fa. The branch contains Fa and ¬Fa, and closes. So ¬∀xFx
          entails ∃x¬Fx, and the reverse is just as quick.
        </p>
      </Example>

      <Remark title="infinite trees and undecidability">
        <p>
          The last tree in the visualisation goes on for ever. That is not a defect of this particular set of rules: Church
          and Turing showed that no method can decide validity in predicate logic in a finite number of steps. What trees
          do guarantee is this. If an argument is valid, every branch eventually closes, so the tree finishes and says so.
          If it is invalid, either some branch finishes open, or the tree runs for ever, and at no stage can you be sure
          which is happening. A procedure that answers &ldquo;yes&rdquo; whenever the answer is yes, but may never answer
          when it is no, is called a semi-decision procedure.
        </p>
      </Remark>

      <Remark title="soundness and completeness">
        <p>
          Two facts make trees trustworthy. If a tree closes, the argument is valid (soundness). If the argument is valid,
          a tree in which every rule is applied fairly, sooner or later, will close (completeness). Both are proved in
          Logic II: Metalogic and Beyond. The proof of completeness is, in effect, the reading-off method above, made to
          work for infinite branches.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "exists",
      rung: "check",
      prompt: <p>On a branch that already contains the names a and b, the rule for ∃xFx lets you add&hellip;</p>,
      answer: { kind: "choice", options: ["Fa", "Fb", "Fc, for a new name c", "Fa and Fb"], correct: [2] },
    },
    {
      key: "forall",
      rung: "check",
      prompt: <p>On a branch that contains the names a and b, which instances of ∀xGx must be added before the branch is complete?</p>,
      answer: { kind: "choice", options: ["Ga only", "Ga and Gb", "Gc, for a new name c", "None: universals are ticked at once"], correct: [1] },
    },
    {
      key: "neg",
      rung: "apply",
      prompt: <p>What does the tree rule for ¬∀x(Fx → Gx) add to the branch?</p>,
      answer: { kind: "choice", options: ["∀x¬(Fx → Gx)", "∃x¬(Fx → Gx)", "¬(Fa → Ga), for any name a", "∃x(Fx → ¬Gx)"], correct: [1] },
    },
    {
      key: "names",
      rung: "apply",
      prompt: (
        <p>
          A tree for ∃xFx, ∃xGx, ∃xHx ∴ ∃x(Fx ∧ Gx ∧ Hx) has an open branch. How many objects are in the domain of the
          counterexample read off it?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of these arguments have trees in which every branch closes? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["∀xFx ∴ Fa", "∃xFx ∴ Fa", "∀x(Fx ∧ Gx) ∴ ∀xGx", "∃x¬Fx ∴ ¬∀xFx"],
        correct: [0, 2, 3],
      },
    },
    {
      key: "tree",
      rung: "prove",
      prompt: (
        <p>
          Use a tree to test ∀x(Fx ∨ Gx) ∴ ∀xFx ∨ ∀xGx. If it is invalid, read a counterexample off an open branch and
          check it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Starts with the premise and the negated conclusion, and decomposes the negated disjunction into ¬∀xFx and ¬∀xGx.",
          "Turns these into existentials and gives them two different new names, such as ¬Fa and ¬Gb.",
          "Applies the universal to both names, branches, and finds an open branch such as Ga, Fb.",
          "Reads off a counterexample like domain {a, b}, F true of b only, G true of a only, and checks it. Small slips in bookkeeping are fine if the idea is right.",
        ],
      },
    },
    {
      key: "endless",
      rung: "stretch",
      prompt: (
        <p>
          Explain why a tree for an invalid argument may never finish, using ∀x∃y Rxy as an example. Then explain why this
          means trees cannot be used, on their own, to decide whether an argument is valid, even though every valid
          argument has a closed tree.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that each existential instance needs a new name, and each new name triggers the universal again, so the branch can grow without end.",
          "Explains that while a tree is still growing, we cannot tell whether it will close later or grow for ever.",
          "Connects this to the idea that validity is semi-decidable: a closed tree confirms validity, but there is no guaranteed signal of invalidity.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how truth trees handle ∃ and ∀, why an existential needs a brand new name, and why some trees never finish.",

  glimpse: (
    <p>
      The next chapter turns from searching for counterexamples to building proofs, with natural deduction rules for the
      quantifiers. Logic II: Metalogic and Beyond proves that trees are sound and complete. Mathematical Logic and Set
      Theory proves the undecidability of validity, by connecting it with the halting problem for Turing machines.
    </p>
  ),
};
