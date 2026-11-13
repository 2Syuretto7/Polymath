import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SurfaceWordViz } from "@/components/viz/SurfaceWordViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.5.2",
  minutes: 95,
  links: {
    revisits: ["m15.5.1", "m15.1.2", "m15.4.4"],
    foreshadows: ["m15.5.3", "m16.5.1", "m28.4.4"],
  },

  puzzle: (
    <>
      <p>
        A sphere, a doughnut, a pretzel with two holes, and strange one-sided surfaces like the Klein bottle: how many
        different closed surfaces are there? Could there be some exotic surface no one has imagined, or can they all be
        listed?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a word, glue the polygon&rsquo;s edges as the letters say, and count what is left.</p>
      <SurfaceWordViz />
    </>
  ),

  theory: (
    <>
      <Definition title="surfaces and connected sums">
        <p>
          A <strong>closed surface</strong> is a compact, connected Hausdorff space locally homeomorphic to{" "}
          <M>{"\\mathbb{R}^2"}</M>. The <strong>connected sum</strong> <M>{"S_1 \\# S_2"}</M> removes a small open disc from
          each and glues the boundary circles. A surface is <strong>orientable</strong> if it contains no Möbius band.
        </p>
      </Definition>

      <Theorem title="classification of surfaces">
        <p>
          Every closed surface is homeomorphic to exactly one of: the sphere <M>{"S^2"}</M>; a connected sum of{" "}
          <M>{"g \\geq 1"}</M> tori, with word <M>{"a_1 b_1 a_1^{-1} b_1^{-1} \\cdots a_g b_g a_g^{-1} b_g^{-1}"}</M>; or a
          connected sum of <M>{"k \\geq 1"}</M> projective planes, with word <M>{"a_1 a_1 \\cdots a_k a_k"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          In outline. Every closed surface can be triangulated, a theorem of Radó, so it is a polygon with edges glued in
          pairs. Cutting and regluing changes the word without changing the surface: cancel adjacent pairs{" "}
          <M>{"aa^{-1}"}</M>, gather all corners into one vertex class, bring pairs of the form <M>{"\\ldots a \\ldots a \\ldots"}</M>{" "}
          together as <M>{"aa"}</M>, and pairs that interlock as <M>{"\\ldots a \\ldots b \\ldots a^{-1} \\ldots b^{-1}"}</M> into{" "}
          <M>{"aba^{-1}b^{-1}"}</M>. Finally a torus summand next to a projective plane converts into three projective planes.
          The surfaces in the list are distinct because their fundamental groups have different abelianisations:{" "}
          <M>{"\\mathbb{Z}^{2g}"}</M> for the orientable ones and <M>{"\\mathbb{Z}^{k-1} \\times \\mathbb{Z}/2"}</M> otherwise.
        </p>
      </Proof>

      <Example title="the Klein bottle">
        <p>
          The word <M>{"abab^{-1}"}</M> gives the Klein bottle. Cutting along a diagonal and regluing shows it is the connected
          sum of two projective planes, with word <M>{"ccdd"}</M>. It cannot sit inside <M>{"\\mathbb{R}^3"}</M> without
          crossing itself, though it does in <M>{"\\mathbb{R}^4"}</M>.
        </p>
      </Example>

      <Remark title="invariants">
        <p>
          A surface is pinned down by two numbers: orientability, and the Euler characteristic{" "}
          <M>{"\\chi = 2 - 2g"}</M> for the orientable surface of genus <M>{"g"}</M> or <M>{"2 - k"}</M> for the sum of{" "}
          <M>{"k"}</M> projective planes. In higher dimensions no such complete list is possible: every finitely presented
          group is the fundamental group of a closed 4-manifold, and there is no algorithm to tell such groups apart.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "list",
      rung: "check",
      prompt: <p>Every closed surface is homeomorphic to which of these?</p>,
      answer: {
        kind: "choice",
        options: [
          "A sphere, a connected sum of tori, or a connected sum of projective planes",
          "A sphere or a torus",
          "A polygon",
          "A connected sum of Klein bottles",
        ],
        correct: [0],
      },
    },
    {
      key: "orient",
      rung: "check",
      prompt: <p>When is a surface orientable?</p>,
      answer: { kind: "choice", options: ["When it contains no Möbius band", "When it is a sphere", "When it is compact", "When it has a boundary"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many vertices does the torus polygon have after gluing?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "chi",
      rung: "apply",
      prompt: <p>What is the Euler characteristic of the orientable surface of genus 3?</p>,
      answer: { kind: "numeric", value: -4 },
    },
    {
      key: "klein",
      rung: "apply",
      prompt: <p>The Klein bottle is the connected sum of how many projective planes?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the torus and the sphere are not homeomorphic, using fundamental groups.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes π₁ of the torus as ℤ², for example by van Kampen or as a product of circles.",
          "Notes the sphere is simply connected.",
          "Concludes, since homeomorphic spaces have isomorphic fundamental groups.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the polygon word <M>{"aa"}</M> and van Kampen to compute the fundamental group of the projective plane.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that after gluing, the boundary of the disc becomes a single circle a, traversed twice.",
          "Applies van Kampen to attach the disc along a², giving ⟨a | a²⟩.",
          "Concludes π₁ is ℤ/2. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a closed surface and a connected sum are, the classification theorem with its polygon words, the idea of the cut-and-paste proof, and how fundamental groups show the surfaces in the list are different.",

  glimpse: (
    <p>
      Next, the Euler characteristic gives a quick way to tell surfaces apart by counting. In differential geometry the
      Gauss-Bonnet theorem links it to curvature, and Riemann surfaces are classified by the same genus.
    </p>
  ),
};
