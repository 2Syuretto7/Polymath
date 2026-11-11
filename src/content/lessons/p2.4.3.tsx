import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CountWorldViz } from "@/components/viz/CountWorldViz";
import type { LessonContent } from "@/lib/types";

const rule = { fontFamily: "var(--font-mono)", fontSize: 13.5 };

export const lesson: LessonContent = {
  id: "p2.4.3",
  minutes: 75,
  links: {
    revisits: ["p2.2.1", "m1.2.4"],
    foreshadows: ["p15.1.1", "p2.6.2", "p7.3.4"],
  },

  puzzle: (
    <>
      <p>
        Try to say, with the tools so far, that there are at least two dogs. ∃xDx ∧ ∃yDy looks promising, but it is true in
        a world with a single dog: x and y can both be that dog. Nothing yet lets you say that two things are different.
      </p>
      <p>
        Or take the ancient discovery that the evening star, Hesperus, is the morning star, Phosphorus. It was a real
        discovery of astronomy, not a triviality like &ldquo;Hesperus is Hesperus&rdquo;. How should logic write it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Both problems need one special two-place predicate, <strong>identity</strong>: x = y says that x and y are one and
        the same thing. With it you can count: &ldquo;at least two&rdquo; becomes &ldquo;some x and some y, with x not
        identical to y&rdquo;. And &ldquo;Hesperus is Phosphorus&rdquo; becomes h = p: two names, one object.
      </p>
      <CountWorldViz set="identity" />
    </>
  ),

  theory: (
    <>
      <Definition title="identity">
        <p>
          The predicate = is added to the language, written between its two terms: a = b. It is true exactly when a and b
          pick out the same object. We write a ≠ b for ¬(a = b). Unlike other predicates, its meaning is fixed by logic: no
          symbolisation key can make = mean something else.
        </p>
      </Definition>

      <Remark title="identity is not similarity">
        <p>
          Two identical twins are not identical in the logician&rsquo;s sense: there are two of them. a = b means that
          there is only one thing, which has two names. It is sometimes called <em>numerical</em> identity, to separate it
          from the <em>qualitative</em> identity of things that are merely exactly alike.
        </p>
      </Remark>

      <Definition title="counting">
        <table className="table">
          <thead><tr><th>English</th><th>Symbolisation</th></tr></thead>
          <tbody>
            <tr><td>At least one F</td><td style={rule}>∃xFx</td></tr>
            <tr><td>At least two Fs</td><td style={rule}>∃x∃y(Fx ∧ Fy ∧ x ≠ y)</td></tr>
            <tr><td>At most one F</td><td style={rule}>∀x∀y((Fx ∧ Fy) → x = y)</td></tr>
            <tr><td>Exactly one F</td><td style={rule}>∃x(Fx ∧ ∀y(Fy → y = x))</td></tr>
            <tr><td>Exactly two Fs</td><td style={rule}>∃x∃y(Fx ∧ Fy ∧ x ≠ y ∧ ∀z(Fz → (z = x ∨ z = y)))</td></tr>
          </tbody>
        </table>
        <p>
          &ldquo;Exactly one&rdquo; says: there is an F, and anything that is F is that very thing. The pattern continues to
          any finite number, though the sentences grow long.
        </p>
      </Definition>

      <Example title="except, only, other">
        <p>Domain: people. Px: x passed. r: Ravi. Txy: x is taller than y.</p>
        <ul>
          <li>&ldquo;Everyone except Ravi passed&rdquo;: ∀x(x ≠ r → Px) ∧ ¬Pr.</li>
          <li>&ldquo;Only Ravi passed&rdquo;: Pr ∧ ∀x(Px → x = r).</li>
          <li>&ldquo;Ravi is taller than everyone else&rdquo;: ∀x(x ≠ r → Trx).</li>
        </ul>
        <p>
          Without the clause x ≠ r, the last sentence would require Ravi to be taller than Ravi.
        </p>
      </Example>

      <Remark title="the indiscernibility of identicals">
        <p>
          If a = b, then whatever is true of a is true of b, since they are the same thing. This principle, often called
          Leibniz&rsquo;s law, is what makes identity useful in proofs: from Fa and a = b, infer Fb. It also gives a test
          for distinctness: if a has a property that b lacks, then a ≠ b. The converse, that things alike in every respect
          must be identical, is the identity of indiscernibles, and it is far more controversial.
        </p>
      </Remark>

      <Remark title="Frege's puzzle">
        <p>
          If h = p is true, it says of one object that it is itself, just as h = h does. Yet h = p took astronomers to
          discover, and h = h can be known by anyone. Frege concluded that a name has more to it than the object it names:
          it has a <em>sense</em>, a way of presenting the object. &ldquo;The evening star&rdquo; and &ldquo;the morning
          star&rdquo; present one planet in two ways. Logic records only the object, which is why the puzzle belongs to
          philosophy of language.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "meaning",
      rung: "check",
      prompt: <p>What does a = b say?</p>,
      answer: {
        kind: "choice",
        options: [
          "a and b are exactly alike",
          "a and b are one and the same object",
          "a and b have the same name",
          "a and b are both in the domain",
        ],
        correct: [1],
      },
    },
    {
      key: "two",
      rung: "check",
      prompt: <p>Which sentence says that there are at least two dogs?</p>,
      answer: {
        kind: "choice",
        options: ["∃xDx ∧ ∃yDy", "∃x∃y(Dx ∧ Dy)", "∃x∃y(Dx ∧ Dy ∧ x ≠ y)", "∀x∀y((Dx ∧ Dy) → x = y)"],
        correct: [2],
      },
    },
    {
      key: "at-most",
      rung: "apply",
      prompt: (
        <p>
          In a world with exactly three dogs, which of these are true? Choose all that apply.
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "∃x∃y(Dx ∧ Dy ∧ x ≠ y)",
          "∀x∀y((Dx ∧ Dy) → x = y)",
          "∃x(Dx ∧ ∀y(Dy → y = x))",
          "∃x∃y∃z(Dx ∧ Dy ∧ Dz ∧ x ≠ y ∧ y ≠ z ∧ x ≠ z)",
        ],
        correct: [0, 3],
      },
    },
    {
      key: "only",
      rung: "apply",
      prompt: <p>With Px: x passed, and r: Ravi, symbolise &ldquo;Only Ravi passed.&rdquo;</p>,
      answer: {
        kind: "choice",
        options: ["Pr", "∀x(Px → x = r)", "Pr ∧ ∀x(Px → x = r)", "∀x(x = r → Px)"],
        correct: [2],
      },
    },
    {
      key: "else",
      rung: "apply",
      prompt: <p>With Txy: x is taller than y, symbolise &ldquo;Someone is taller than everyone else.&rdquo;</p>,
      answer: {
        kind: "choice",
        options: ["∃x∀y Txy", "∃x∀y(x ≠ y → Txy)", "∀y∃x(x ≠ y → Txy)", "∃x∀y(Txy → x ≠ y)"],
        correct: [1],
      },
    },
    {
      key: "exactly-two",
      rung: "prove",
      prompt: (
        <p>
          Symbolise &ldquo;There are exactly two moons of Mars&rdquo;, with Mx: x is a moon of Mars. Explain what each part
          of your sentence contributes, and why each identity clause is needed.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives ∃x∃y(Mx ∧ My ∧ x ≠ y ∧ ∀z(Mz → (z = x ∨ z = y))) or an equivalent.",
          "Explains that x ≠ y ensures at least two.",
          "Explains that the ∀z clause ensures there are no others, so at most two.",
        ],
      },
    },
    {
      key: "frege",
      rung: "stretch",
      prompt: (
        <p>
          &ldquo;Hesperus is Phosphorus&rdquo; and &ldquo;Hesperus is Hesperus&rdquo; are both symbolised as identities
          that are true of one object. Explain why this seems to leave out a difference between them, and assess one way of
          accounting for the difference, such as Frege&rsquo;s idea of sense.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that the first was an empirical discovery and the second is knowable without investigation.",
          "Explains that if names contribute only their objects, the two sentences say the same thing.",
          "Describes and evaluates an account, such as sense as a mode of presentation; any thoughtful evaluation is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why logic needs an identity sign, how to say “at least two” and “exactly one” with it, and why “Hesperus is Phosphorus” is more interesting than “Hesperus is Hesperus”.",

  glimpse: (
    <p>
      Frege&rsquo;s puzzle opens Philosophy of Language. The rules for reasoning with identity come at the end of this course,
      and what it is for a person to stay the same person over time, a question about identity of a harder kind, is taken
      up in Early Modern Philosophy.
    </p>
  ),
};
