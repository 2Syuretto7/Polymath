import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ConstantSheafViz } from "@/components/viz/ConstantSheafViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.3.3",
  minutes: 90,
  links: {
    revisits: ["m30.3.2", "m30.3.1", "m24.1.4"],
    foreshadows: ["m30.4.1", "m30.5.2", "m30.6.1"],
  },

  puzzle: (
    <>
      <p>
        The presheaf that assigns the real numbers to every non-empty open set looks like the simplest possible sheaf. Yet on
        a space made of two separate pieces it fails to glue. What is the smallest repair, and is there a single recipe that
        repairs every presheaf?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose which intervals make up the open set, click to set a value on each piece, and compare the two counts.</p>
      <ConstantSheafViz />
    </>
  ),

  theory: (
    <>
      <Definition title="sheafification">
        <p>
          The <strong>sheafification</strong> <M>{"F^+"}</M> of a presheaf F assigns to U the functions s sending each p in
          U to a germ <M>{"s(p) \\in F_p"}</M> that are locally given by sections: every p has a neighbourhood V and a t in
          F(V) with <M>{"s(q) = t_q"}</M> for all q in V. There is a natural map <M>{"F \\to F^+"}</M>.
        </p>
      </Definition>

      <Theorem title="the universal property">
        <p>
          <M>{"F^+"}</M> is a sheaf, the map <M>{"F \\to F^+"}</M> is an isomorphism on every stalk, and every map from F
          to a sheaf G factors uniquely through <M>{"F^+"}</M>. So sheafification is left adjoint to the inclusion of sheaves
          into presheaves. If F is already a sheaf, <M>{"F \\to F^+"}</M> is an isomorphism.
        </p>
      </Theorem>

      <Example title="the constant sheaf">
        <p>
          The constant presheaf with value A has every stalk equal to A. Its sheafification, the{" "}
          <strong>constant sheaf</strong> <M>{"\\underline{A}"}</M>, assigns to U the locally constant functions U → A. If U
          has n connected components, <M>{"\\underline{A}(U) = A^n"}</M>. Its global sections on X count components: this is
          the zeroth cohomology of X.
        </p>
      </Example>

      <Remark title="cokernels and quotients">
        <p>
          The kernel of a map of sheaves, computed open set by open set, is a sheaf, but the cokernel need not be. For the
          exponential map from holomorphic functions to non-vanishing ones on <M>{"\\mathbb{C}^\\times"}</M>, the
          presheaf cokernel has a non-zero global section, the class of z, though every stalk is zero. The sheaf cokernel is
          its sheafification. Sheafification is what makes sheaves of abelian groups into an abelian category, where exact
          sequences can be measured by cohomology.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "stalk",
      rung: "check",
      prompt: <p>What does sheafification do to stalks?</p>,
      answer: { kind: "choice", options: ["It leaves them unchanged, up to isomorphism", "It makes them all zero", "It doubles them", "It replaces them by global sections"], correct: [0] },
    },
    {
      key: "adj",
      rung: "check",
      prompt: <p>Sheafification is left adjoint to what?</p>,
      answer: { kind: "choice", options: ["The inclusion of sheaves into presheaves", "The global sections functor", "The stalk at a point", "The constant presheaf"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, include I₁, I₂ and I₃ only. What is the dimension of the space of sections of the sheafification?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "h0",
      rung: "apply",
      prompt: <p>What do the global sections of the constant sheaf ℝ on X measure?</p>,
      answer: { kind: "choice", options: ["The connected components of X, one free value each", "The dimension of X", "The number of points of X", "The fundamental group of X"], correct: [0] },
    },
    {
      key: "coker",
      rung: "apply",
      prompt: <p>Which construction on sheaves needs sheafification?</p>,
      answer: { kind: "choice", options: ["The cokernel of a morphism", "The kernel of a morphism", "Restriction to an open set", "The stalk at a point"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the locally constant functions U → A form a sheaf.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes locality holds because these are functions, determined by their values.",
          "Glues compatible locally constant functions on a cover to a function on U.",
          "Checks the glued function is locally constant, since each point has a neighbourhood inside some Uᵢ where it is.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the constant presheaf have every stalk equal to A?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes every neighbourhood of p is non-empty, so has sections A, with restrictions the identity.",
          "Concludes the colimit over neighbourhoods is A.",
          "Links this to sheafification preserving stalks. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Varieties come from polynomial rings over algebraically closed fields. Grothendieck asked: what geometric space does
        every commutative ring have? The answer begins by taking all prime ideals as points.
      </p>
      <p>Next, the spectrum of a ring.</p>
    </>
  ),
};
