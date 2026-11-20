import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ValuativeCriterionViz } from "@/components/viz/ValuativeCriterionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.5.1",
  minutes: 90,
  links: {
    revisits: ["m30.4.4", "m30.4.2", "m30.1.2"],
    foreshadows: ["m30.5.2", "m30.5.3", "m30.6.3"],
  },

  puzzle: (
    <>
      <p>
        The Zariski topology is almost never Hausdorff, and every variety is quasi-compact, so the usual notions of
        Hausdorff and compact are useless. Yet the line with two origins is clearly pathological, and the projective line
        clearly closed up in a way the affine line is not. What are the right algebraic notions?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a target, and see in how many ways a map from the line without 0 extends across 0.</p>
      <ValuativeCriterionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="separated morphisms">
        <p>
          A morphism X → S is <strong>separated</strong> if the diagonal <M>{"X \\to X \\times_S X"}</M> is a closed
          immersion. For topological spaces, Hausdorff means the diagonal is closed in the product; using the scheme-theoretic
          product instead of the product of spaces makes the definition work. Affine schemes are separated, and so are
          projective ones.
        </p>
      </Definition>

      <Definition title="proper morphisms">
        <p>
          A morphism is <strong>universally closed</strong> if every base change of it is a closed map, and{" "}
          <strong>proper</strong> if it is separated, of finite type and universally closed. Projective space over any ring
          is proper, and so is every closed subscheme of it.
        </p>
      </Definition>

      <Theorem title="the valuative criteria">
        <p>
          Let X → S be of finite type with S noetherian, R a discrete valuation ring with fraction field K. Then X is
          separated over S if and only if every morphism Spec K → X, compatible with a given Spec R → S, extends to Spec R
          in at most one way, and proper if and only if it extends in exactly one way. Spec R is a small disc and Spec K
          the disc without its centre.
        </p>
      </Theorem>

      <Example title="the affine line is not proper">
        <p>
          Over a field, base change of <M>{"\\mathbb{A}^1 \\to \\operatorname{Spec} k"}</M> along{" "}
          <M>{"\\mathbb{A}^1 \\to \\operatorname{Spec} k"}</M> gives the projection <M>{"\\mathbb{A}^2 \\to \\mathbb{A}^1"}</M>,
          which sends the closed hyperbola xy = 1 onto the line minus the origin, a set that is not closed. In the valuative
          picture, the map t ↦ 1/t has no limit at t = 0.
        </p>
      </Example>

      <Remark title="compactness recovered">
        <p>
          Over ℂ, a variety is separated exactly when its analytic topology is Hausdorff, and proper exactly when it is
          compact. Chow&rsquo;s lemma relates proper varieties to projective ones, and Serre&rsquo;s GAGA shows that on
          projective varieties analytic and algebraic geometry agree.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sep",
      rung: "check",
      prompt: <p>When is a morphism X → S separated?</p>,
      answer: { kind: "choice", options: ["When the diagonal X → X ×ₛ X is a closed immersion", "When X is Hausdorff in the Zariski topology", "When X is affine", "When the fibres are finite"], correct: [0] },
    },
    {
      key: "prop",
      rung: "check",
      prompt: <p>What does it take for a morphism to be proper?</p>,
      answer: { kind: "choice", options: ["Separated, of finite type and universally closed", "Closed and surjective", "Affine and finite", "Smooth and separated"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, in how many ways does the map extend across 0 into the line with two origins?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which of these is proper over a field k?</p>,
      answer: { kind: "choice", options: ["The projective line", "The affine line", "The affine line minus a point", "The line with two origins"], correct: [0] },
    },
    {
      key: "hyp",
      rung: "apply",
      prompt: <p>Why is the affine line not proper over k?</p>,
      answer: { kind: "choice", options: ["Projecting the hyperbola xy = 1 to one axis has image the line minus the origin, which is not closed", "It is not separated", "It is not of finite type", "It has no closed points"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Over an algebraically closed field k, show that the projection of V(xy − 1) ⊂ 𝔸² to the y-axis is not closed.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows the image is the set of y ≠ 0, since x = 1/y works for such y and no x works for y = 0.",
          "Notes proper closed subsets of 𝔸¹ are finite.",
          "Concludes the image, being infinite and not everything, is not closed.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that every affine scheme Spec A is separated over Spec ℤ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies the diagonal with Spec of the multiplication map A ⊗ A → A.",
          "Notes this ring map is surjective.",
          "Concludes the diagonal is a closed immersion. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        On a scheme, the right analogue of a vector bundle is a sheaf of modules that is locally given by a module over each
        affine piece. These sheaves carry most of the information geometry needs.
      </p>
      <p>Next, quasi-coherent sheaves.</p>
    </>
  ),
};
