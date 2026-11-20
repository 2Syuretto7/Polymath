import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { BarcanDomainViz } from "@/components/viz/BarcanDomainViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p26.2.1",
  minutes: 90,
  links: {
    revisits: ["p26.1.4", "p2.4.1", "p17.2.1"],
    foreshadows: ["p26.2.2", "p26.3.4", "p26.4.2"],
  },

  puzzle: (
    <>
      <p>
        There could have been a person who does not in fact exist: a sibling you never had, say. Does it follow that there
        is someone who could have been that person? If so, there is something that does not exist. If not, the obvious
        rules for combining &lsquo;possibly&rsquo; with &lsquo;there is&rsquo; must fail somewhere.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Two worlds, each with its own domain. Choose who exists where and who is F, and test the Barcan formula and its
        converse at w.
      </p>
      <BarcanDomainViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Barcan formulas">
        <p>
          Ruth Barcan Marcus, in 1946, gave the first formal systems of quantified modal logic. In them the{" "}
          <strong>Barcan formula</strong> (BF), ◇∃xFx → ∃x◇Fx, equivalently ∀x□Fx → □∀xFx, is a theorem. Its{" "}
          <strong>converse</strong> (CBF) is ∃x◇Fx → ◇∃xFx, equivalently □∀xFx → ∀x□Fx.
        </p>
      </Definition>

      <Theorem title="semantics with domains">
        <p>
          Give each world w a domain D(w), and let the quantifiers at w range over D(w). Then, on a frame:
        </p>
        <ul>
          <li>BF is valid exactly when domains do not grow: if wRv then D(v) ⊆ D(w);</li>
          <li>CBF is valid exactly when domains do not shrink: if wRv then D(w) ⊆ D(v).</li>
        </ul>
        <p>
          With one constant domain for all worlds, both are valid. In Kripke&rsquo;s varying domain semantics of 1963, neither
          is.
        </p>
      </Theorem>

      <Example title="proofs of the formulas">
        <p>
          Combine classical quantifier rules with S5 and BF becomes provable, as Prior noticed. Combine them with K, and CBF
          becomes provable: from ∀xFx → Fy, necessitation and the K axiom give □∀xFx → □Fy, and generalising on y gives □∀xFx
          → ∀x□Fx. Kripke showed that the step relies on treating free variables as always denoting, and that free logic
          blocks it.
        </p>
      </Example>

      <Example title="what each formula says">
        <p>
          BF says that whatever could have existed already exists: if there could have been a unicorn, something is a
          possible unicorn. CBF says that whatever exists necessarily exists, in the sense that it is something in every
          accessible world: no one could have failed to be.
        </p>
      </Example>

      <Remark title="a choice, not a mistake">
        <p>
          The formulas are not errors in logic. Whether to accept them depends on metaphysics: on whether the range of
          &lsquo;everything&rsquo; could have been different. That question divides actualists from possibilists, and
          necessitists from contingentists.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "bf",
      rung: "check",
      prompt: <p>Which is the Barcan formula?</p>,
      answer: { kind: "choice", options: ["◇∃xFx → ∃x◇Fx", "∃x◇Fx → ◇∃xFx", "□Fx → Fx", "∃x□Fx → □∃xFx"], correct: [0] },
    },
    {
      key: "who",
      rung: "check",
      prompt: <p>Who first set out formal quantified modal logic with this formula, in 1946?</p>,
      answer: { kind: "choice", options: ["Ruth Barcan Marcus", "Saul Kripke", "C. I. Lewis", "Arthur Prior"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s starting setting, is the Barcan formula true or false at w?</p>,
      answer: { kind: "choice", options: ["False, because c exists and is F at v but does not exist at w", "True", "False, because a is not F anywhere", "It has no truth value"], correct: [0] },
    },
    {
      key: "frame",
      rung: "apply",
      prompt: <p>The converse Barcan formula is valid on frames where domains do what along R?</p>,
      answer: { kind: "choice", options: ["Never shrink", "Never grow", "Stay constant only", "Change at random"], correct: [0] },
    },
    {
      key: "const",
      rung: "apply",
      prompt: <p>With a single constant domain for every world, which formulas are valid?</p>,
      answer: { kind: "choice", options: ["Both BF and CBF", "BF only", "CBF only", "Neither"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the Barcan formula fails on some frame with growing domains.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Builds two worlds w and v with wRv and D(w) ⊊ D(v), for example D(w) = {a} and D(v) = {a, b}.",
          "Makes F true of b only, at v, so ◇∃xFx is true at w.",
          "Shows ∃x◇Fx is false at w, since a is not F anywhere.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>&lsquo;There could have been something that does not actually exist.&rsquo; Which formula does this threaten, and should we give the formula up?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Connects the claim to the Barcan formula, or to its converse.",
          "Considers the cost of each option, for example merely possible objects versus varying domains.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If domains vary, a thing can have properties at worlds where it does not exist, or it cannot. Either way, we must
        say what possible worlds and merely possible things are.
      </p>
      <p>Next, varying domains and actualism.</p>
    </>
  ),
};
