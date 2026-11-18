import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LiftViz } from "@/components/viz/LiftViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m24.4.2",
  minutes: 90,
  links: {
    revisits: ["m24.4.1", "m14.5.2", "m14.5.3"],
    foreshadows: ["m24.4.3", "m24.4.4", "m25.3.1"],
  },

  puzzle: (
    <>
      <p>
        Reduction mod 3 maps ℤ onto ℤ/3. Given any map into ℤ/3, can you always route it through ℤ instead? From ℤ it is
        easy: send 1 to any integer that reduces to the right thing. From ℤ/3 itself it is impossible. What property of the
        source makes the difference?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Try to lift a map into ℤ/n through reduction mod n, first from ℤ, then from ℤ/n.</p>
      <LiftViz />
    </>
  ),

  theory: (
    <>
      <Definition title="projective modules">
        <p>
          An <M>R</M>-module <M>P</M> is <strong>projective</strong> if for every surjection <M>{"g: B \\to C"}</M> and every{" "}
          <M>{"f: P \\to C"}</M> there is <M>{"h: P \\to B"}</M> with <M>{"g \\circ h = f"}</M>. Equivalently: every short
          exact sequence <M>{"0 \\to A \\to B \\to P \\to 0"}</M> splits; or <M>P</M> is a direct summand of a free module.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          Free modules are projective. Over a principal ideal domain, projective modules are free, so over ℤ the projectives
          are the free abelian groups, and ℤ/n is not projective. Over <M>{"R = \\mathbb{Z}/6 \\cong \\mathbb{Z}/2 \\times \\mathbb{Z}/3"}</M>,
          the summand ℤ/2 is projective but not free. Over a Dedekind domain every non-zero ideal is projective, and it is free
          exactly when it is principal: the class group measures non-free projectives.
        </p>
      </Example>

      <Definition title="injective modules">
        <p>
          Dually, <M>E</M> is <strong>injective</strong> if every map into <M>E</M> from a submodule extends to the whole
          module: for injective <M>{"A \\to B"}</M> and any <M>{"f: A \\to E"}</M> there is <M>{"h: B \\to E"}</M> extending{" "}
          <M>f</M>. Equivalently, every short exact sequence <M>{"0 \\to E \\to B \\to C \\to 0"}</M> splits.
        </p>
      </Definition>

      <Theorem title="Baer's criterion">
        <p>
          <M>E</M> is injective if maps extend from ideals: every <M>{"I \\to E"}</M>, for an ideal <M>I</M> of <M>R</M>,
          extends to <M>{"R \\to E"}</M>. Over a principal ideal domain this says <M>E</M> is <strong>divisible</strong>:
          for every <M>e</M> and non-zero <M>r</M> there is <M>x</M> with <M>{"rx = e"}</M>. So ℚ and ℚ/ℤ are injective
          abelian groups, and ℤ is not.
        </p>
      </Theorem>

      <Remark title="resolutions">
        <p>
          Every module is a quotient of a free module, so of a projective one. Taking the kernel and repeating gives a{" "}
          <strong>projective resolution</strong> <M>{"\\cdots \\to P_1 \\to P_0 \\to M \\to 0"}</M>, an exact sequence of
          projectives approximating <M>M</M>. For ℤ/n this is <M>{"0 \\to \\mathbb{Z} \\to \\mathbb{Z} \\to \\mathbb{Z}/n \\to 0"}</M>.
          Dually every module embeds in an injective one. Resolutions are the raw material of Ext and Tor.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which property defines a projective module P?</p>,
      answer: { kind: "choice", options: ["Maps from P lift through every surjection", "Maps into P extend from every submodule", "P is finite", "P has no torsion"], correct: [0] },
    },
    {
      key: "inj",
      rung: "check",
      prompt: <p>Over a principal ideal domain, which modules are injective?</p>,
      answer: { kind: "choice", options: ["The divisible ones", "The free ones", "The finite ones", "The cyclic ones"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with P = ℤ and n = 3, how many of the offered values of h(1) give a lift?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "z6",
      rung: "apply",
      prompt: <p>Over R = ℤ/6, why is ℤ/2 projective but not free?</p>,
      answer: { kind: "choice", options: ["It is a direct summand of R, but has 2 elements while free R-modules have a power of 6", "It is divisible", "It is the zero module", "Every module over ℤ/6 is free"], correct: [0] },
    },
    {
      key: "qz",
      rung: "apply",
      prompt: <p>Which of these abelian groups is injective?</p>,
      answer: { kind: "choice", options: ["ℚ/ℤ", "ℤ", "ℤ/4", "ℤ ⊕ ℤ"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a free module F is projective.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a basis of F, a surjection g: B → C and a map f: F → C.",
          "For each basis element e, chooses b in B with g(b) = f(e), using surjectivity.",
          "Defines h on the basis by e ↦ b, extends linearly by freeness, and checks g ∘ h = f on the basis, hence everywhere.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that ℤ is not an injective abelian group.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses divisibility: there is no x in ℤ with 2x = 1.",
          "Or exhibits a map that does not extend, such as the identity of 2ℤ ≅ ℤ, sending 2 to 1, which cannot extend to ℤ.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Two constructions turn modules into new modules: maps between them, and a product that turns bilinear maps into
        linear ones. Each preserves only part of exactness, and the way they fail will be measured.
      </p>
      <p>
        Next, Hom and tensor: the tensor product by its universal property, the computation of ℤ/m ⊗ ℤ/n, the tensor-hom
        adjunction, and left and right exactness.
      </p>
    </>
  ),
};
