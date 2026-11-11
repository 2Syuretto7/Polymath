import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { CountWorldViz } from "@/components/viz/CountWorldViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p2.4.4",
  minutes: 80,
  links: {
    revisits: ["p2.4.1", "p2.3.3"],
    foreshadows: ["p15.1.2", "p15.1.3"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;The present King of France is bald.&rdquo; France has no king. Is the sentence true? Surely not. Then is it
        false? If so, its negation, &ldquo;The present King of France is not bald&rdquo;, should be true, but that seems
        just as wrong.
      </p>
      <p>
        The law of excluded middle says that one of a sentence and its negation is true. Here neither seems to be. Does
        logic break down, or have we misread the sentence?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Bertrand Russell argued that we have misread it. &ldquo;The King of France&rdquo; looks like a name, but it is not
        one. It hides a claim: that there is exactly one King of France. The sentence says three things at once: there is a
        king of France, there is at most one, and that king is bald. With no king, the first claim fails, so the whole sentence is
        false, and no thing has to be found to make it so.
      </p>
      <p>
        In the world of shapes below, &ldquo;the square&rdquo; plays the role of &ldquo;the King of France&rdquo;. Try
        worlds with no square, one square and two.
      </p>
      <CountWorldViz set="descriptions" />
    </>
  ),

  theory: (
    <>
      <Definition title="Russell's analysis">
        <p>
          A <strong>definite description</strong> is a phrase of the form &ldquo;the F&rdquo;. On Russell&rsquo;s analysis,
          &ldquo;the F is G&rdquo; means
        </p>
        <p className="mono" style={{ textAlign: "center" }}>∃x(Fx ∧ ∀y(Fy → y = x) ∧ Gx)</p>
        <p>
          There is an F, nothing else is F, and it is G. The description disappears into quantifiers and identity, and
          gets no symbol of its own.
        </p>
      </Definition>

      <Example title="two ways to deny">
        <p>&ldquo;The present King of France is not bald&rdquo; has two readings, depending on what the negation covers.</p>
        <ul>
          <li>
            <strong>Narrow scope</strong>: there is exactly one King of France, and that king is not bald.{" "}
            <span className="mono">∃x(Kx ∧ ∀y(Ky → y = x) ∧ ¬Bx)</span>. With no king, this is false.
          </li>
          <li>
            <strong>Wide scope</strong>: it is not the case that there is exactly one King of France who is bald.{" "}
            <span className="mono">¬∃x(Kx ∧ ∀y(Ky → y = x) ∧ Bx)</span>. With no king, this is true.
          </li>
        </ul>
        <p>
          The wide-scope reading is the true negation of &ldquo;the King of France is bald&rdquo;, so excluded middle is
          safe. The narrow-scope reading is not its negation at all, which is why both it and the original can be false
          together.
        </p>
      </Example>

      <Quote source={<>Bertrand Russell, &ldquo;On Denoting&rdquo;, <cite>Mind</cite> (1905)</>}>
        <p>
          By the law of excluded middle, either &ldquo;A is B&rdquo; or &ldquo;A is not B&rdquo; must be true. Hence either
          &ldquo;the present King of France is bald&rdquo; or &ldquo;the present King of France is not bald&rdquo; must be
          true. Yet if we enumerated the things that are bald, and then the things that are not bald, we should not find the
          present King of France in either list. Hegelians, who love a synthesis, will probably conclude that he wears a wig.
        </p>
      </Quote>

      <Remark title="why it mattered">
        <p>
          Before Russell, some philosophers reasoned that since &ldquo;the present King of France&rdquo; is meaningful, it
          must refer to something, which must in some sense exist or subsist. Russell&rsquo;s analysis removes the
          pressure: the phrase is meaningful because the quantifiers it hides are meaningful, and nothing need answer to it.
          The idea that the grammar of a sentence may hide its logical form, and that analysis can reveal it, shaped much of
          twentieth-century philosophy.
        </p>
      </Remark>

      <Remark title="an objection">
        <p>
          P. F. Strawson replied in 1950 that someone who says &ldquo;the King of France is bald&rdquo; does not{" "}
          <em>assert</em> that there is a king; they <em>presuppose</em> it. When the presupposition fails, the question of
          truth or falsity does not arise. On this view the sentence is neither true nor false, and excluded middle does not
          apply to it in the way Russell assumed. Whether Russell or Strawson is right is still debated, and the debate is
          a central topic of Philosophy of Language.
        </p>
      </Remark>

      <Example title="symbolising descriptions">
        <p>Domain: people. Axy: x wrote y. Wx: x is a woman. Lxy: x lives in y. g: the Gita. d: Delhi.</p>
        <ul>
          <li>
            &ldquo;The author of the Gita lives in Delhi&rdquo;: ∃x(Axg ∧ ∀y(Ayg → y = x) ∧ Lxd).
          </li>
          <li>
            &ldquo;Someone lives in Delhi with the author of the Gita&rdquo; puts one description inside a larger sentence:
            ∃x(Axg ∧ ∀y(Ayg → y = x) ∧ ∃z(z ≠ x ∧ Lzd ∧ Lxd)).
          </li>
        </ul>
        <p>
          The pattern is always the same. Find the description, replace it with &ldquo;there is exactly one F, and
          it&hellip;&rdquo;, and continue the sentence inside.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "form",
      rung: "check",
      prompt: <p>On Russell&rsquo;s analysis, &ldquo;The F is G&rdquo; is symbolised as&hellip;</p>,
      answer: {
        kind: "choice",
        options: ["Gf, with f a name for the F", "∀x(Fx → Gx)", "∃x(Fx ∧ Gx)", "∃x(Fx ∧ ∀y(Fy → y = x) ∧ Gx)"],
        correct: [3],
      },
    },
    {
      key: "none",
      rung: "check",
      prompt: <p>On Russell&rsquo;s analysis, if there is no F, the sentence &ldquo;The F is G&rdquo; is&hellip;</p>,
      answer: { kind: "choice", options: ["true", "false", "neither true nor false", "meaningless"], correct: [1] },
    },
    {
      key: "two",
      rung: "apply",
      prompt: (
        <p>
          In a world with exactly two squares, both filled, which of these are true? Choose all that apply.
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The square is filled: ∃x(Sx ∧ ∀y(Sy → y = x) ∧ Fx)",
          "Every square is filled: ∀x(Sx → Fx)",
          "It is not the case that the square is filled: ¬∃x(Sx ∧ ∀y(Sy → y = x) ∧ Fx)",
          "The square is not filled: ∃x(Sx ∧ ∀y(Sy → y = x) ∧ ¬Fx)",
        ],
        correct: [1, 2],
      },
    },
    {
      key: "scope",
      rung: "apply",
      prompt: (
        <p>
          With no King of France, which reading of &ldquo;The King of France is not bald&rdquo; is true?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["The narrow-scope reading", "The wide-scope reading", "Both", "Neither"],
        correct: [1],
      },
    },
    {
      key: "author",
      rung: "apply",
      prompt: (
        <p>
          With Axy: x wrote y, Lxy: x lives in y, g: the Gita, and d: Delhi, symbolise &ldquo;The author of the Gita does
          not live in Delhi&rdquo;, on the narrow-scope reading.
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "∃x(Axg ∧ ∀y(Ayg → y = x) ∧ ¬Lxd)",
          "¬∃x(Axg ∧ ∀y(Ayg → y = x) ∧ Lxd)",
          "∃x(Axg ∧ ¬Lxd)",
          "∀x(Axg → ¬Lxd)",
        ],
        correct: [0],
      },
    },
    {
      key: "excluded",
      rung: "prove",
      prompt: (
        <p>
          Explain, using Russell&rsquo;s analysis, how the puzzle of the bald King of France is solved without giving up
          the law of excluded middle. Symbolise both readings of the negated sentence.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Symbolises the original sentence as ∃x(Kx ∧ ∀y(Ky → y = x) ∧ Bx) and says it is false when there is no king.",
          "Symbolises the narrow and wide scope readings of the negation.",
          "Explains that the wide-scope reading is the real negation and is true, so excluded middle holds; the narrow reading is a different sentence that is also false.",
        ],
      },
    },
    {
      key: "strawson",
      rung: "stretch",
      prompt: (
        <p>
          Strawson held that &ldquo;The King of France is bald&rdquo; is neither true nor false when there is no king. Give
          one consideration in favour of Strawson&rsquo;s view and one in favour of Russell&rsquo;s, and say which you
          find more persuasive.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a consideration for Strawson, such as that answering 'false' feels wrong, or that we would say 'there is no King of France' instead.",
          "Gives a consideration for Russell, such as keeping classical logic, or cases like 'the king of France visited me today', which seem plainly false.",
          "States and defends a view; any reasoned conclusion is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Russell's analysis of “the present King of France is bald”, and how the difference between narrow and wide scope negation saves the law of excluded middle.",

  glimpse: (
    <p>
      Russell&rsquo;s theory of descriptions, and Strawson&rsquo;s reply, are studied in depth in Philosophy of Language,
      where the question of how names and descriptions connect words to the world becomes central. The next chapter of this
      course makes precise what it is for a sentence like these to be true in a world.
    </p>
  ),
};
