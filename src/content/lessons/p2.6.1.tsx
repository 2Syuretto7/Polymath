import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FitchBox, SubproofViz, type FitchProof } from "@/components/viz/SubproofViz";
import type { LessonContent } from "@/lib/types";

const PROOFS: FitchProof[] = [
  {
    name: "Socrates", claim: "∀x(Hx → Mx), Hs ⊢ Ms",
    lines: [
      { s: "∀x(Hx → Mx)", depth: 0, why: "premise", note: "All humans are mortal." },
      { s: "Hs", depth: 0, why: "premise", note: "Socrates is human. The goal, Ms, is about Socrates, so the universal premise should be brought down to him." },
      { s: "Hs → Ms", depth: 0, why: "∀E 1", note: "Universal elimination: what holds of everything holds of s. Replace x by s throughout." },
      { s: "Ms", depth: 0, why: "→E 3, 2", note: "Now it is sentential logic: modus ponens." },
    ],
  },
  {
    name: "Arbitrary objects", claim: "∀x(Fx → Gx), ∀xFx ⊢ ∀xGx",
    lines: [
      { s: "∀x(Fx → Gx)", depth: 0, why: "premise", note: "The goal is universal, ∀xGx. The plan: prove Ga for a name a about which we assume nothing at all." },
      { s: "∀xFx", depth: 0, why: "premise", note: "" },
      { s: "Fa → Ga", depth: 0, why: "∀E 1", note: "Instantiate both premises with a name, a, that appears nowhere in the premises." },
      { s: "Fa", depth: 0, why: "∀E 2", note: "" },
      { s: "Ga", depth: 0, why: "→E 3, 4", note: "So Ga. Nothing in the reasoning depended on which object a is." },
      { s: "∀xGx", depth: 0, why: "∀I 5", note: "Universal introduction. It is allowed because a occurs in no premise and no open assumption: a was arbitrary, so the same steps would work for any object." },
    ],
  },
  {
    name: "Something follows", claim: "∀x(Fx → Gx), ∃xFx ⊢ ∃xGx",
    lines: [
      { s: "∀x(Fx → Gx)", depth: 0, why: "premise", note: "" },
      { s: "∃xFx", depth: 0, why: "premise", note: "Something is F, but we are not told what. To use this, name it provisionally, in a subproof." },
      { s: "Fa", depth: 1, why: "assumption", assume: true, note: "Assume Fa, where a is a new name, standing for 'the F thing, whichever it is'." },
      { s: "Fa → Ga", depth: 1, why: "∀E 1", note: "" },
      { s: "Ga", depth: 1, why: "→E 4, 3", note: "" },
      { s: "∃xGx", depth: 1, why: "∃I 5", note: "Existential introduction: Ga, so something is G. This conclusion no longer mentions a." },
      { s: "∃xGx", depth: 0, why: "∃E 2, 3–6", note: "Existential elimination. Whatever the F thing is, ∃xGx follows; and ∃xGx says nothing about a. So it may be brought out of the subproof." },
    ],
  },
  {
    name: "A safe shift", claim: "∃x∀y Rxy ⊢ ∀y∃x Rxy",
    lines: [
      { s: "∃x∀y Rxy", depth: 0, why: "premise", note: "Someone loves everyone. Goal: everyone is loved by someone." },
      { s: "∀y Ray", depth: 1, why: "assumption", assume: true, note: "Use the existential: call the universal lover a, in a subproof." },
      { s: "Rab", depth: 1, why: "∀E 2", note: "a loves everyone, so a loves b, where b is a new name, standing for an arbitrary object." },
      { s: "∃x Rxb", depth: 1, why: "∃I 3", note: "So someone loves b." },
      { s: "∀y∃x Rxy", depth: 1, why: "∀I 4", note: "b occurs in no premise and no open assumption (line 2 mentions only a), so b was arbitrary." },
      { s: "∀y∃x Rxy", depth: 0, why: "∃E 1, 2–5", note: "The conclusion does not mention a, so it leaves the subproof. Done." },
    ],
  },
];

export const lesson: LessonContent = {
  id: "p2.6.1",
  minutes: 85,
  links: {
    revisits: ["p2.3.2", "p2.4.2"],
    foreshadows: ["p2.6.3", "m20.2.3", "p7.4.1"],
  },

  puzzle: (
    <>
      <p>
        A geometry teacher draws one triangle on the board, proves that its angles add up to two right angles, and
        concludes that this holds for every triangle. One example, and a conclusion about all of them. Why is that
        legitimate here, when &ldquo;this swan is white, so all swans are white&rdquo; is not?
      </p>
      <p>
        And when a premise says only that something is F, how can a proof talk about it, without pretending to know which
        thing it is?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The teacher&rsquo;s triangle is <strong>arbitrary</strong>: the proof used nothing about it except that it is a
        triangle. Natural deduction captures this with a condition on names. If you prove Ga, and a is a name about which
        nothing special was assumed, then you have in effect proved it of everything. Similarly, to use &ldquo;something is
        F&rdquo;, give the thing a temporary name in a subproof, and only take out conclusions that do not mention it. Step
        through the proofs below.
      </p>
      <SubproofViz proofs={PROOFS} />
    </>
  ),

  theory: (
    <>
      <p>
        We write φ(a) for the result of replacing every free occurrence of x in φ by the name a. The four rules extend the
        system of chapter 3.
      </p>

      <Definition title="the easy pair">
        <ul>
          <li>
            <strong>∀E</strong> (universal elimination): from ∀xφ, infer φ(a), for any name a. What holds of everything holds
            of a.
          </li>
          <li>
            <strong>∃I</strong> (existential introduction): from φ(a), infer ∃xφ, where φ comes from φ(a) by replacing a,
            in some or all of its occurrences, by x. From Raa you may infer ∃x Rxa, ∃x Rax or ∃x Rxx.
          </li>
        </ul>
      </Definition>

      <Definition title="the careful pair">
        <ul>
          <li>
            <strong>∀I</strong> (universal introduction): from φ(a), infer ∀xφ, provided a occurs in no premise, in no
            undischarged assumption, and not in ∀xφ itself.
          </li>
          <li>
            <strong>∃E</strong> (existential elimination): given ∃xφ, and a subproof that assumes φ(a) and ends with ψ,
            infer ψ, provided a is new: it occurs in no premise, no earlier undischarged assumption, not in ∃xφ, and not in
            ψ.
          </li>
        </ul>
      </Definition>

      <Remark title="what the conditions do">
        <p>
          The conditions are the whole content of these rules. The condition on ∀I says that a was arbitrary: if a
          occurred in a premise such as Fa, then a would be a special object, and proving Ga about it would show nothing
          about everything. The condition on ∃E says that the name stands for an unknown object: if it were already in use,
          we would be assuming that the F thing is that very object.
        </p>
      </Remark>

      <Example title="a blocked fallacy">
        <p>
          The quantifier shift ∀y∃x Rxy ∴ ∃x∀y Rxy is invalid: everyone has a mother, but no one is the mother of
          everyone. Here is an attempt to prove it, and where it breaks.
        </p>
        <FitchBox
          lines={[
            { s: "∀y∃x Rxy", depth: 0, why: "premise" },
            { s: "∃x Rxa", depth: 0, why: "∀E 1" },
            { s: "Rba", depth: 1, why: "assumption", assume: true },
            { s: "∀y Rby", depth: 1, why: "∀I 3: not allowed", hot: true },
          ]}
        />
        <p>
          Line 4 generalises on a, but a occurs in the open assumption on line 3. The object b was chosen to suit a, so
          what is true of b and a need not be true of b and everything. The rules refuse the step, as they must.
        </p>
      </Example>

      <Example title="negations of quantifiers">
        <p>
          The equivalence of ¬∃xFx and ∀x¬Fx can now be proved. In one direction, from ¬∃xFx: assume Fa, get ∃xFx by ∃I,
          which contradicts the premise, so ¬Fa by ¬I. Since a occurs in no premise or open assumption, ∀I gives ∀x¬Fx. In
          the other, from ∀x¬Fx: assume ∃xFx, aiming for a contradiction, and open an ∃E subproof assuming Fa. ∀E gives
          ¬Fa. The contradiction mentions a, so it cannot leave the subproof as it stands; but from Fa and ¬Fa any sentence
          follows, by explosion, and in particular ¬∃xFx, which does not mention a. ∃E brings ¬∃xFx out of the subproof,
          where it contradicts the assumption ∃xFx, and ¬I gives ¬∃xFx.
        </p>
      </Example>

      <Remark title="the arbitrary object">
        <p>
          Philosophers have long been puzzled by arbitrary objects. Is there a triangle that is no triangle in particular,
          neither scalene nor isosceles? George Berkeley argued against such abstract ideas, and said that a proof about
          one particular triangle is general because it never uses its particular features. The rule ∀I agrees with
          Berkeley: there is no arbitrary object, only a name that the proof treats without favour.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "elim",
      rung: "check",
      prompt: <p>Which of these follow from ∀x(Fx → Gx) by one application of ∀E? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Fa → Ga", "Fb → Gb", "Fa → Gb", "∃x(Fx → Gx)"], correct: [0, 1] },
    },
    {
      key: "intro",
      rung: "check",
      prompt: <p>Which of these follow from Raa by one application of ∃I? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["∃x Rxa", "∃x Rax", "∃x Rxx", "∃x∃y Rxy"], correct: [0, 1, 2] },
    },
    {
      key: "bad",
      rung: "apply",
      prompt: (
        <p>
          A proof has the premise Fa and, a few lines later, the line Ga. Why may it not infer ∀xGx from Ga by ∀I?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Because a occurs in a premise, so a is not arbitrary",
          "Because ∀I needs a subproof",
          "Because Ga contains no quantifier",
          "It may: ∀I always applies",
        ],
        correct: [0],
      },
    },
    {
      key: "exists-elim",
      rung: "apply",
      prompt: (
        <p>
          In a proof with premise ∃xFx and an earlier line Gb, which name may the ∃E subproof assume Fx of?
        </p>
      ),
      answer: { kind: "choice", options: ["b", "a new name, such as c", "any name at all", "x itself"], correct: [1] },
    },
    {
      key: "lines",
      rung: "apply",
      prompt: (
        <p>
          The proof of ∀x(Fx ∧ Gx) ⊢ ∀xFx uses ∀E, then ∧E, then ∀I, with no other lines. Counting the premise, how many
          lines does it have?
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove ∃x(Fx ∧ Gx) ⊢ ∃xFx ∧ ∃xGx, giving the justification for every line.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Opens an ∃E subproof assuming Fa ∧ Ga for a new name a.",
          "Uses ∧E twice and ∃I twice to reach ∃xFx and ∃xGx, then ∧I.",
          "Closes the subproof by ∃E, noting that the conclusion does not mention a. Any correct layout is fine.",
        ],
      },
    },
    {
      key: "why",
      rung: "stretch",
      prompt: (
        <p>
          Suppose ∀I had no restriction at all. Show how it could be used to prove the invalid argument Fa ⊢ ∀xFx, and give
          a counterexample to that argument. Then explain, in your own words, how the restriction connects with the
          geometry teacher&rsquo;s triangle.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Shows the one-step proof: from the premise Fa, infer ∀xFx by unrestricted ∀I.",
          "Gives a counterexample, such as domain {a, b} with F true of a only.",
          "Explains that a proof about one object generalises only if nothing special about that object was used, which is what the condition on names ensures.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the four quantifier rules of natural deduction, and why universal introduction and existential elimination need conditions on names.",

  glimpse: (
    <p>
      The next lessons add rules for identity and gather strategies for finding proofs. Logic II: Metalogic and Beyond
      proves that these rules are complete: every valid argument of predicate logic has a proof. Mathematical Logic and
      Set Theory sets out a deductive system for first-order logic with full precision, and Early Modern Philosophy
      returns to Berkeley&rsquo;s attack on abstract ideas.
    </p>
  ),
};
