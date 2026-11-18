import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { KripkeModelViz } from "@/components/viz/KripkeModelViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p26.1.1",
  minutes: 90,
  links: {
    revisits: ["p17.4.2", "p2.5.1", "p17.1.2"],
    foreshadows: ["p26.1.2", "p26.1.3", "p26.3.1"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;Necessarily, 2 + 2 = 4&rsquo; is true; &lsquo;necessarily, Delhi is the capital of India&rsquo; is not, though
        Delhi is. So &lsquo;necessarily&rsquo; is not truth-functional: the truth of &lsquo;necessarily p&rsquo; is not fixed by
        the truth of p. How, then, can it have a precise semantics?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here are three possible worlds. Choose which worlds can see which, and where p is true. Then read off &lsquo;necessarily
        p&rsquo; and &lsquo;possibly p&rsquo; at each.
      </p>
      <KripkeModelViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Kripke frames and models">
        <p>
          A <strong>frame</strong> is a pair (W, R): a non-empty set W of worlds and an <strong>accessibility relation</strong>{" "}
          R on W. A <strong>model</strong> adds a valuation V saying which sentence letters are true at which worlds. Truth is
          relative to a world: the truth-functional connectives work world by world, and
        </p>
        <ul>
          <li>□φ is true at w when φ is true at every v with wRv;</li>
          <li>◇φ is true at w when φ is true at some v with wRv.</li>
        </ul>
        <p>So ◇φ is equivalent to ¬□¬φ, just as &lsquo;some&rsquo; is to &lsquo;not every not&rsquo;.</p>
      </Definition>

      <Definition title="validity">
        <p>
          A formula is <strong>valid in a model</strong> if true at every world of it, and <strong>valid on a frame</strong>{" "}
          if valid in every model built on that frame, whatever the valuation. Validity on a frame depends only on the
          shape of R.
        </p>
      </Definition>

      <Theorem title="the K axiom">
        <p>
          On every frame, □(p → q) → (□p → □q) is valid, and if φ is valid, so is □φ.
        </p>
        <p>
          <strong>Proof.</strong> Suppose □(p → q) and □p are true at w. For every v that w sees, p → q and p are true at v,
          so q is. Hence □q is true at w. If φ is true at every world, then it is true at every world w sees, so □φ is true
          at w.
        </p>
      </Theorem>

      <Example title="frame conditions">
        <p>
          The formula □p → p, &lsquo;what is necessary is true&rsquo;, can fail: if w does not see itself, p can be false at
          w and true everywhere w sees. It is valid on exactly the reflexive frames. Different readings of □ want different
          frames: for knowledge, reflexivity is right, since what is known is true; for obligation, it is wrong, since what
          ought to happen often does not.
        </p>
      </Example>

      <Remark title="history">
        <p>
          C. I. Lewis began work on strict implication in 1912, and Lewis and Langford&rsquo;s <em>Symbolic Logic</em> (1932)
          set out the systems S1 to S5 axiomatically, with no semantics to choose between them. Saul Kripke, from 1959, and others such as Stig Kanger and Jaakko Hintikka, gave the possible-worlds
          semantics, which turned Leibniz&rsquo;s talk of possible worlds into mathematics. Kripke&rsquo;s semantics for
          intuitionistic logic uses the same idea.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "box",
      rung: "check",
      prompt: <p>When is □φ true at a world w?</p>,
      answer: { kind: "choice", options: ["When φ is true at every world accessible from w", "When φ is true at some world accessible from w", "When φ is true at w", "When φ is true at every world in W"], correct: [0] },
    },
    {
      key: "dual",
      rung: "check",
      prompt: <p>Which formula is equivalent to ◇φ?</p>,
      answer: { kind: "choice", options: ["¬□¬φ", "□¬φ", "¬□φ", "□φ → φ"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisationIn the visualisation, remove every arrow out of w₃. Is □p true or false at w₃?rsquo;s starting model, w₃ has no arrows out of it. Is □p true or false at w₃?</p>,
      answer: { kind: "choice", options: ["True, because w₃ sees no world where p fails", "False, because p is false at w₃", "False, because w₃ sees no world where p holds", "Neither"], correct: [0] },
    },
    {
      key: "t",
      rung: "apply",
      prompt: <p>On which frames is □p → p valid?</p>,
      answer: { kind: "choice", options: ["Reflexive frames", "Symmetric frames", "Transitive frames", "All frames"], correct: [0] },
    },
    {
      key: "cnt",
      rung: "apply",
      prompt: <p>W = {"{w, v}"}, the only arrow is w → v, and p is true only at v. At w, which is true?</p>,
      answer: { kind: "choice", options: ["□p and ◇p are both true", "□p is true and ◇p is false", "□p is false and ◇p is true", "Both are false"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that □p → p is valid on every reflexive frame, and give a frame and valuation where it fails.</p>,
      answer: {
        kind: "written",
        rubric: [
          "If R is reflexive and □p is true at w, then since wRw, p is true at w.",
          "Gives a frame where some w does not see itself, for example one world with no arrows, or w seeing only v.",
          "Chooses a valuation making p false at w but true at every world w sees, so □p is true and p false at w.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that □p → □□p is valid on every transitive frame.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Assumes □p at w and takes any v with wRv and u with vRu.",
          "Uses transitivity to get wRu, so p is true at u; hence □p at v, and □□p at w.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Each condition on R makes some formula valid: reflexivity gives □p → p, transitivity gives □p → □□p. Adding such
        formulas as axioms to K gives a ladder of logics, with S5 at the top.
      </p>
      <p>Next, the systems K to S5.</p>
    </>
  ),
};
