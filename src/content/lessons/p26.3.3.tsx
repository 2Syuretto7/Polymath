import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { TenseLineViz } from "@/components/viz/TenseLineViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p26.3.3",
  minutes: 90,
  links: {
    revisits: ["p26.3.2", "p26.1.3", "p17.4.1"],
    foreshadows: ["p26.3.4", "p26.4.1", "p26.4.2"],
  },

  puzzle: (
    <>
      <p>
        Aristotle asked whether &lsquo;there will be a sea battle tomorrow&rsquo; is already true or false today. If it is
        true, the battle seems unavoidable; if false, impossible. Either way the future looks fixed. Can a logic of tense
        make room for an open future?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Click moments to change where p holds, and move &lsquo;now&rsquo; along the line.</p>
      <TenseLineViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Prior's tense logic">
        <p>
          Arthur Prior, from the 1950s, introduced four operators: <strong>F</strong>p, &lsquo;it will be that p&rsquo;;{" "}
          <strong>P</strong>p, &lsquo;it was that p&rsquo;; <strong>G</strong>p = ¬F¬p, &lsquo;it will always be that p&rsquo;;
          and <strong>H</strong>p = ¬P¬p, &lsquo;it has always been that p&rsquo;. A frame is a set of moments with an
          earlier-than relation &lt;. Fp is true at t when p is true at some t&prime; with t &lt; t&prime;, and Pp looks to
          earlier moments.
        </p>
      </Definition>

      <Theorem title="the minimal tense logic Kt">
        <p>
          Kt takes K for both G and H, with the interaction axioms p → GPp, &lsquo;what is, will always have been&rsquo;, and
          p → HFp, &lsquo;what is, has always been going to be&rsquo;. These hold on every frame, since the past operator
          looks back along the same relation that the future operator looks forward along.
        </p>
      </Theorem>

      <Example title="time's shape in the logic">
        <p>
          Properties of time correspond to formulas. Transitivity: FFp → Fp. Density, a moment between any two: Fp → FFp.
          No last moment: Gp → Fp. Linearity of the future is captured by a more complex formula ruling out branching. So
          questions about the structure of time become questions about which formulas are valid.
        </p>
      </Example>

      <Example title="branching time">
        <p>
          To keep the future open, let time branch: many possible futures share one past. On the Peircean view, Fp means
          &lsquo;on every branch, p eventually&rsquo;, so &lsquo;there will be a sea battle&rsquo; may be neither true nor
          false yet on all branches. On the Ockhamist view, truth is relative to a moment and a branch, and the future is
          fixed only relative to a branch. Łukasiewicz&rsquo;s three-valued logic was another response to the same puzzle.
        </p>
      </Example>

      <Remark title="temporal logic in computing">
        <p>
          Amir Pnueli brought temporal logic to computer science in 1977, to state properties of programs: &lsquo;the system
          will always eventually respond&rsquo; is GFp. Model checking of such formulas is now routine in verifying hardware
          and software.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "g",
      rung: "check",
      prompt: <p>How is Gp defined from F?</p>,
      answer: { kind: "choice", options: ["¬F¬p", "F¬p", "¬Fp", "FFp"], correct: [0] },
    },
    {
      key: "kt",
      rung: "check",
      prompt: <p>Which interaction axiom belongs to Kt?</p>,
      answer: { kind: "choice", options: ["p → GPp", "Fp → p", "Gp → p", "Pp → Fp"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s starting line, what is the earliest moment &lsquo;now&rsquo; at which Gp is true?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "dense",
      rung: "apply",
      prompt: <p>Which formula corresponds to density of time?</p>,
      answer: { kind: "choice", options: ["Fp → FFp", "FFp → Fp", "Gp → Fp", "p → HFp"], correct: [0] },
    },
    {
      key: "peirce",
      rung: "apply",
      prompt: <p>On the Peircean branching view, when is &lsquo;there will be a sea battle&rsquo; true now?</p>,
      answer: { kind: "choice", options: ["When every branch through now has a sea battle later", "When some branch has a sea battle", "Always", "Never"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that p → GPp is valid on every frame.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Assumes p is true at a moment t and takes any later moment t′ with t < t′.",
          "Notes t is earlier than t′ and p is true at t, so Pp is true at t′.",
          "Concludes GPp is true at t.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the truth today of &lsquo;there will be a sea battle tomorrow&rsquo; make the battle unavoidable?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the fatalist worry.",
          "Considers a response, such as branching time, Ockhamism, Łukasiewicz’s third value or denying the inference from truth to necessity.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        &lsquo;If Oswald did not shoot Kennedy, someone else did&rsquo; is true. &lsquo;If Oswald had not shot Kennedy,
        someone else would have&rsquo; is doubtful. The difference between these conditionals needs a semantics of its own.
      </p>
      <p>Next, conditional logic.</p>
    </>
  ),
};
