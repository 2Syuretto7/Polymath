import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FitchBox } from "@/components/viz/SubproofViz";
import { ShortcutViz } from "@/components/viz/ShortcutViz";
import type { LessonContent } from "@/lib/types";

const rule = { fontFamily: "var(--font-mono)", fontSize: 13.5 };

export const lesson: LessonContent = {
  id: "p2.3.4",
  minutes: 75,
  links: {
    revisits: ["m1.1.3", "p2.2.3"],
    foreshadows: ["p2.6.3", "p17.2.1"],
  },

  puzzle: (
    <>
      <p>
        Every time a proof needs modus tollens, you must build the same little subproof: assume the antecedent, derive the
        consequent, reiterate its negation, close by ¬I. Proofs grow long, and the same patterns appear in them again and
        again.
      </p>
      <p>
        A mathematician in this position proves a lemma once and cites it ever after. Can a proof system do the same? And if
        it adds new rules, how can we be sure it has not changed which arguments can be proved?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A <strong>derived rule</strong> is a shortcut that stands for a fixed piece of proof. Because that piece of proof
        works for any sentences at all, every use of the shortcut could be expanded back into basic steps. The shortcut
        saves lines; it never proves anything the basic rules could not. Below, compare each proof done the long way with
        the same proof using derived rules.
      </p>
      <ShortcutViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the last basic rule (↔I)">
        <p>
          If there is a subproof from φ to ψ and a subproof from ψ to φ, you may write φ ↔ ψ, citing both. With ↔I, the
          list of basic rules is finished: ∧I, ∧E, ∨I, ∨E, DS, →I, →E, ↔I, ↔E, ¬I, IP, DN, and R.
        </p>
      </Definition>

      <Definition title="derived rule">
        <p>
          A <strong>derived rule</strong> is a rule whose every use can be replaced by steps that use the basic rules only.
          To show that a rule is derived, give a proof of its pattern using sentence variables φ, ψ, χ: since the proof never
          depends on what those sentences are, it works for every instance.
        </p>
      </Definition>

      <Definition title="some derived rules">
        <p>We write φ ⊣⊢ ψ when each can be proved from the other. Such rules may be used in either direction.</p>
        <table className="table">
          <thead><tr><th>Rule</th><th>From</th><th>Infer</th></tr></thead>
          <tbody>
            <tr><td>MT (modus tollens)</td><td style={rule}>φ → ψ, ¬ψ</td><td style={rule}>¬φ</td></tr>
            <tr><td>HS (hypothetical syllogism)</td><td style={rule}>φ → ψ, ψ → χ</td><td style={rule}>φ → χ</td></tr>
            <tr><td>DNI (double negation introduction)</td><td style={rule}>φ</td><td style={rule}>¬¬φ</td></tr>
            <tr><td>DeM (De Morgan)</td><td style={rule}>¬(φ ∨ ψ)</td><td style={rule}>¬φ ∧ ¬ψ, and back</td></tr>
            <tr><td>DeM (De Morgan)</td><td style={rule}>¬(φ ∧ ψ)</td><td style={rule}>¬φ ∨ ¬ψ, and back</td></tr>
            <tr><td>LEM (excluded middle)</td><td style={rule}>nothing</td><td style={rule}>φ ∨ ¬φ</td></tr>
          </tbody>
        </table>
      </Definition>

      <Example title="deriving HS">
        <p>Here is the pattern of HS, proved with basic rules. Replace φ, ψ and χ by any sentences and it is still a proof.</p>
        <FitchBox
          lines={[
            { s: "φ → ψ", depth: 0, why: "premise" },
            { s: "ψ → χ", depth: 0, why: "premise" },
            { s: "φ", depth: 1, why: "assumption", assume: true },
            { s: "ψ", depth: 1, why: "→E 1, 3" },
            { s: "χ", depth: 1, why: "→E 2, 4" },
            { s: "φ → χ", depth: 0, why: "→I 3–5" },
          ]}
        />
      </Example>

      <Example title="the harder De Morgan law">
        <p>
          The direction ¬(φ ∧ ψ) ⊢ ¬φ ∨ ¬ψ needs indirect proof three times. The idea: suppose the disjunction fails; then
          neither ¬φ nor ¬ψ can hold, so both φ and ψ do, contradicting the premise.
        </p>
        <FitchBox
          lines={[
            { s: "¬(φ ∧ ψ)", depth: 0, why: "premise" },
            { s: "¬(¬φ ∨ ¬ψ)", depth: 1, why: "assumption", assume: true },
            { s: "¬φ", depth: 2, why: "assumption", assume: true },
            { s: "¬φ ∨ ¬ψ", depth: 2, why: "∨I 3" },
            { s: "¬(¬φ ∨ ¬ψ)", depth: 2, why: "R 2" },
            { s: "φ", depth: 1, why: "IP 3–5" },
            { s: "¬ψ", depth: 2, why: "assumption", assume: true },
            { s: "¬φ ∨ ¬ψ", depth: 2, why: "∨I 7" },
            { s: "¬(¬φ ∨ ¬ψ)", depth: 2, why: "R 2" },
            { s: "ψ", depth: 1, why: "IP 7–9" },
            { s: "φ ∧ ψ", depth: 1, why: "∧I 6, 10" },
            { s: "¬(φ ∧ ψ)", depth: 1, why: "R 1" },
            { s: "¬φ ∨ ¬ψ", depth: 0, why: "IP 2–12" },
          ]}
        />
        <p>Thirteen lines, done once. From now on, DeM does it in one.</p>
      </Example>

      <Remark title="why derived rules add no power">
        <p>
          Take any proof that uses derived rules. Each use cites some available lines and produces a new one. Replace it by
          the basic derivation of that rule, with the cited lines in place of the premises, renumbering as you go. The
          derivation&rsquo;s own subproofs open and close inside it, so nothing outside is disturbed. Repeat until no derived
          rule is left. The result is a proof of the same conclusion from the same premises, using basic rules only. So the
          derived rules change how long proofs are, not what can be proved.
        </p>
      </Remark>

      <Remark title="why not make them all basic?">
        <p>
          We could. But a short list of basic rules is easier to study: to show the system is sound, each basic rule must be
          checked against the truth tables, and the fewer there are, the less to check. The basic rules also have a pattern,
          noticed by Gentzen: each connective has a rule that introduces it and a rule that eliminates it. The derived rules
          break that symmetry for the sake of speed, which is a fair trade once the system itself is understood.
        </p>
      </Remark>

      <Remark title="rules and equivalences">
        <p>
          Each ⊣⊢ rule matches a logical equivalence from Proof and Logic, checked there by truth tables: De Morgan&rsquo;s
          laws, double negation. Here they are proved instead. As always, the rules apply to whole lines only: DeM turns
          ¬(A ∨ B) into ¬A ∧ ¬B, but it does not touch ¬(A ∨ B) when it sits inside a larger sentence such as ¬(A ∨ B) → C.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mt",
      rung: "check",
      prompt: <p>From A → B and ¬B, which derived rule gives ¬A in one step?</p>,
      answer: { kind: "choice", options: ["HS", "MT", "DeM", "DNI"], correct: [1] },
    },
    {
      key: "power",
      rung: "check",
      prompt: <p>Adding derived rules to the system lets you prove&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "more arguments than before",
          "exactly the same arguments as before, usually in fewer lines",
          "only theorems, not arguments with premises",
          "some arguments that the truth tables say are invalid",
        ],
        correct: [1],
      },
    },
    {
      key: "dem",
      rung: "apply",
      prompt: <p>What does DeM give in one step from ¬(P ∧ Q)?</p>,
      answer: { kind: "choice", options: ["¬P ∧ ¬Q", "¬P ∨ ¬Q", "P ∨ Q", "¬P → Q"], correct: [1] },
    },
    {
      key: "count",
      rung: "apply",
      prompt: (
        <p>
          From the premises P → Q, Q → R and ¬R, how many lines must be added after the three premises to reach ¬P, using
          derived rules as freely as you like?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "misuse",
      rung: "apply",
      prompt: <p>Which of these is not a correct use of a rule?</p>,
      answer: {
        kind: "choice",
        options: [
          "From ¬¬(A ∨ B), infer A ∨ B by DN",
          "From A → ¬B and ¬¬B, infer ¬A by MT",
          "From ¬(A ∨ B) → C, infer (¬A ∧ ¬B) → C by DeM",
          "From A, infer ¬¬A by DNI",
        ],
        correct: [2],
      },
    },
    {
      key: "derive-mt",
      rung: "prove",
      prompt: (
        <p>
          Show that MT is a derived rule: prove φ → ψ, ¬ψ ⊢ ¬φ using basic rules only, and say why your proof justifies MT
          for every choice of sentences.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Assumes φ, gets ψ by →E, reiterates ¬ψ.",
          "Closes the subproof and writes ¬φ by ¬I.",
          "Explains that the proof uses only the shapes of φ and ψ, so it works whatever sentences they stand for.",
        ],
      },
    },
    {
      key: "dem-back",
      rung: "stretch",
      prompt: (
        <p>
          Prove ¬φ ∧ ¬ψ ⊢ ¬(φ ∨ ψ) with basic rules only. (Hint: assume φ ∨ ψ and use ∨E inside the ¬I subproof, aiming at
          a contradiction in each case.) Then explain how a proof that used this direction of DeM could be rewritten without
          it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gets ¬φ and ¬ψ by ∧E.",
          "Assumes φ ∨ ψ and reaches a contradiction from each disjunct, for example by deriving the same sentence in each case by explosion and closing with ∨E, or by another valid route.",
          "Concludes ¬(φ ∨ ψ) by ¬I.",
          "Explains that each use of the rule can be replaced by a copy of this proof with the actual sentences substituted.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a derived rule is, how you show that a rule is derived, and why adding derived rules does not let you prove anything new.",

  glimpse: (
    <p>
      The argument that derived rules add no power is a small piece of metalogic: reasoning about proofs, not with them.
      Logic II: Metalogic and Beyond does much more of it, proving that this proof system is sound and complete. The
      strategies for finding proofs return, with quantifiers, at the end of this course.
    </p>
  ),
};
