import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { WorldViz } from "@/components/viz/WorldViz";
import type { LessonContent } from "@/lib/types";

const rule = { fontFamily: "var(--font-mono)", fontSize: 13.5 };

export const lesson: LessonContent = {
  id: "p2.4.1",
  minutes: 80,
  links: {
    revisits: ["m1.2.1", "p2.2.1"],
    parallels: ["m1.2.2"],
    foreshadows: ["p2.5.1", "p4.5.2", "m20.2.1"],
  },

  puzzle: (
    <>
      <p>
        All humans are mortal. Socrates is human. So Socrates is mortal. Nothing could be more obviously valid.
      </p>
      <p>
        Now symbolise it in sentential logic. The three sentences share no connectives, so they become three unrelated
        letters: P, Q, therefore R. A truth table finds a row with P and Q true and R false, and calls the argument invalid.
        Sentential logic cannot see why this argument works. Where is its validity hiding?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The validity lives inside the sentences: the same property, being human, appears in the first two, and the same
        individual in the last two. To see it, logic must split sentences into <strong>names</strong> for individuals,
        such as Socrates, and <strong>predicates</strong> for properties, such as &ldquo;is human&rdquo;. Then it needs a
        way to say &ldquo;all&rdquo; and &ldquo;some&rdquo;: the <strong>quantifiers</strong>.
      </p>
      <p>Below is a small world of shapes. Change it, and watch which sentences are true in it.</p>
      <WorldViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the language of predicate logic">
        <ul>
          <li><strong>Names</strong> a, b, c, &hellip; each pick out one object.</li>
          <li>
            <strong>Predicates</strong> F, G, H, &hellip; stand for properties, or, with more places, relations. Fa says that a
            has the property F.
          </li>
          <li><strong>Variables</strong> x, y, z, &hellip; are placeholders, like pronouns.</li>
          <li>
            The <strong>quantifiers</strong>: ∀x, &ldquo;for every x&rdquo;, and ∃x, &ldquo;there is at least one x such
            that&rdquo;.
          </li>
          <li>The connectives of sentential logic, as before.</li>
        </ul>
        <p>
          A <strong>symbolisation key</strong> fixes a <strong>domain</strong>, the things the quantifiers range over, and
          says what each name and predicate means.
        </p>
      </Definition>

      <Example title="Socrates again">
        <p>
          Domain: people. Hx: x is human. Mx: x is mortal. s: Socrates. The argument becomes
        </p>
        <p className="mono" style={{ textAlign: "center" }}>∀x(Hx → Mx), Hs ∴ Ms</p>
        <p>
          The first premise says that each thing in the domain, if it is human, is mortal. In particular this holds of
          Socrates: Hs → Ms. Together with Hs, that gives Ms. The validity is now visible in the symbols.
        </p>
      </Example>

      <Definition title="the four basic forms">
        <table className="table">
          <thead><tr><th>English</th><th>Symbolisation</th></tr></thead>
          <tbody>
            <tr><td>All F are G.</td><td style={rule}>∀x(Fx → Gx)</td></tr>
            <tr><td>Some F are G.</td><td style={rule}>∃x(Fx ∧ Gx)</td></tr>
            <tr><td>No F are G.</td><td style={rule}>∀x(Fx → ¬Gx), or ¬∃x(Fx ∧ Gx)</td></tr>
            <tr><td>Some F are not G.</td><td style={rule}>∃x(Fx ∧ ¬Gx)</td></tr>
          </tbody>
        </table>
      </Definition>

      <Remark title="the two traps">
        <p>
          The universal quantifier goes with →, and the existential with ∧. Getting this wrong is the most common error in
          symbolisation. ∀x(Fx ∧ Gx) says that everything is both F and G: far too strong for &ldquo;all F are G&rdquo;.
          And ∃x(Fx → Gx) says that something is either not F or is G: in a world with a single thing that is not F, it is
          true, whatever the Fs are like. The visualisation shows both.
        </p>
      </Remark>

      <Remark title="when there are no Fs">
        <p>
          If nothing in the domain is F, then ∀x(Fx → Gx) is true, since every conditional Fx → Gx has a false
          antecedent. So &ldquo;all unicorns in this room are green&rdquo; comes out true. Aristotle&rsquo;s logic
          assumed that &ldquo;all F are G&rdquo; implies &ldquo;some F are G&rdquo;; modern logic does not, and the
          difference is exactly the case where there are no Fs. If you mean to say that there are Fs, say it separately:
          ∃xFx ∧ ∀x(Fx → Gx).
        </p>
      </Remark>

      <Example title="harder English">
        <ul>
          <li>
            &ldquo;Only members may vote&rdquo; says that every voter is a member: ∀x(Vx → Mx). It does not say that every
            member may vote.
          </li>
          <li>&ldquo;Not every student passed&rdquo;: ¬∀x(Sx → Px), which is equivalent to ∃x(Sx ∧ ¬Px).</li>
          <li>&ldquo;Every student who revises passes&rdquo;: ∀x((Sx ∧ Rx) → Px).</li>
          <li>
            &ldquo;If anyone cheats, everyone loses&rdquo;: ∃xCx → ∀xLx. Here &ldquo;anyone&rdquo; means &ldquo;someone&rdquo;,
            because it sits inside the antecedent.
          </li>
        </ul>
      </Example>

      <Remark title="where the quantifier came from">
        <p>
          The quantifier, with its variables, was introduced by Gottlob Frege in his <cite>Begriffsschrift</cite> of 1879,
          and independently by C. S. Peirce soon after. It ended two thousand years in which Aristotle&rsquo;s syllogisms
          were the whole of logic, and made it possible to write down the reasoning of mathematics in full.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "every",
      rung: "check",
      prompt: <p>With Dx: x is a dog, and Bx: x barks, symbolise &ldquo;Every dog barks.&rdquo;</p>,
      answer: { kind: "choice", options: ["∀x(Dx → Bx)", "∀x(Dx ∧ Bx)", "∃x(Dx ∧ Bx)", "∃x(Dx → Bx)"], correct: [0] },
    },
    {
      key: "some",
      rung: "check",
      prompt: <p>With the same key, symbolise &ldquo;Some dog barks.&rdquo;</p>,
      answer: { kind: "choice", options: ["∀x(Dx → Bx)", "∀x(Dx ∧ Bx)", "∃x(Dx ∧ Bx)", "∃x(Dx → Bx)"], correct: [2] },
    },
    {
      key: "no",
      rung: "apply",
      prompt: <p>With Cx: x is a cat, and Sx: x swims, which of these say &ldquo;No cat swims&rdquo;? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["∀x(Cx → ¬Sx)", "¬∃x(Cx ∧ Sx)", "∃x(Cx ∧ ¬Sx)", "¬∀x(Cx → Sx)"], correct: [0, 1] },
    },
    {
      key: "only",
      rung: "apply",
      prompt: <p>With Mx: x is a member, and Vx: x may vote, symbolise &ldquo;Only members may vote.&rdquo;</p>,
      answer: { kind: "choice", options: ["∀x(Mx → Vx)", "∀x(Vx → Mx)", "∃x(Vx ∧ Mx)", "∀x(Mx ∧ Vx)"], correct: [1] },
    },
    {
      key: "empty",
      rung: "apply",
      prompt: (
        <p>
          In a world of shapes that contains no squares (and at least one shape), which of these are true? Sx: x is a square;
          Fx: x is filled. Choose all that apply.
        </p>
      ),
      answer: { kind: "choice", options: ["∀x(Sx → Fx)", "∃x(Sx ∧ Fx)", "¬∃xSx", "∀x(Sx → ¬Fx)"], correct: [0, 2, 3] },
    },
    {
      key: "socrates",
      rung: "prove",
      prompt: (
        <p>
          Symbolise the argument &ldquo;All philosophers are curious. Some logicians are not curious. So some logicians are
          not philosophers.&rdquo; Give your symbolisation key, and explain informally why the argument is valid.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a key, for example Px: x is a philosopher, Cx: x is curious, Lx: x is a logician.",
          "Symbolises the argument as ∀x(Px → Cx), ∃x(Lx ∧ ¬Cx) ∴ ∃x(Lx ∧ ¬Px).",
          "Explains that the logician who is not curious cannot be a philosopher, since all philosophers are curious, so that logician witnesses the conclusion.",
        ],
      },
    },
    {
      key: "aristotle",
      rung: "stretch",
      prompt: (
        <p>
          Aristotle held that &ldquo;All F are G&rdquo; implies &ldquo;Some F are G&rdquo;. Does ∀x(Fx → Gx) entail
          ∃x(Fx ∧ Gx)? Describe a world that settles the question. Then give a symbolisation of &ldquo;All F are
          G&rdquo; on which Aristotle&rsquo;s inference is valid, and say which reading of the English you find more
          natural.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Says no: in a world with no Fs, ∀x(Fx → Gx) is true and ∃x(Fx ∧ Gx) is false.",
          "Offers ∃xFx ∧ ∀x(Fx → Gx) (or similar) as the reading on which the inference is valid.",
          "Gives a reasoned view of which reading fits ordinary English better; any view supported by an example is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why the argument about Socrates needs predicate logic, how to symbolise “all F are G” and “some F are G”, and why the first uses → and the second ∧.",

  glimpse: (
    <p>
      Next come sentences with several quantifiers, where order matters. Ancient Greek Philosophy studies Aristotle&rsquo;s
      syllogistic, the logic that the quantifier replaced, and Mathematical Logic and Set Theory makes the language you
      have just met into a precise mathematical object.
    </p>
  ),
};
