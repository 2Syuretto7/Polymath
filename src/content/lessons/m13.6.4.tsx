import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RiemannStepsViz } from "@/components/viz/RiemannStepsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.6.4",
  minutes: 90,
  links: {
    revisits: ["m13.6.3", "m13.6.2", "m12.1.4"],
    foreshadows: ["m13.7.1", "m17.5.1", "m28.4.4"],
  },

  puzzle: (
    <>
      <p>
        Draw any blob in the plane without holes: the outline of India, say, or a jagged star. Is there a holomorphic
        bijection from the blob onto the round unit disc? It seems far too much to hope for, since holomorphic maps are so
        rigid.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a region and apply the maps one at a time until it becomes the disc.</p>
      <RiemannStepsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="conformally equivalent">
        <p>
          Two open sets are <strong>conformally equivalent</strong> if there is a holomorphic bijection between them. Its
          inverse is then holomorphic too, by the open mapping theorem and the inverse function theorem. A connected open set{" "}
          <M>{"U"}</M> is <strong>simply connected</strong> if every closed curve in <M>{"U"}</M> can be shrunk to a point
          within <M>{"U"}</M>.
        </p>
      </Definition>

      <Theorem title="the Riemann mapping theorem">
        <p>
          Let <M>{"U \\ne \\mathbb{C}"}</M> be a non-empty, simply connected open set and <M>{"z_0 \\in U"}</M>. There is a
          unique conformal bijection <M>{"F"}</M> from <M>{"U"}</M> onto the unit disc with <M>{"F(z_0) = 0"}</M> and{" "}
          <M>{"F'(z_0) > 0"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Uniqueness: if <M>{"F"}</M> and <M>{"G"}</M> both work, <M>{"G \\circ F^{-1}"}</M> is an automorphism of the disc
          fixing 0 with positive derivative, so by the Schwarz lemma it is the identity.
        </p>
        <p>
          Existence, in outline. Consider the family of one-to-one holomorphic maps <M>{"f: U \\to \\mathbb{D}"}</M> with{" "}
          <M>{"f(z_0) = 0"}</M>. It is non-empty: since <M>{"U \\ne \\mathbb{C}"}</M> and <M>{"U"}</M> is simply connected, a
          square root of <M>{"z - p"}</M> for some <M>{"p \\notin U"}</M> exists on <M>{"U"}</M> and, after a Möbius map, gives
          such an <M>{"f"}</M>. The family is uniformly bounded, so by Montel&rsquo;s theorem, a compactness theorem, there is
          an <M>{"F"}</M> maximising <M>{"|f'(z_0)|"}</M>. If <M>{"F"}</M> missed a point of the disc, composing with disc
          automorphisms and a square root would produce a member with larger derivative at <M>{"z_0"}</M>. So <M>{"F"}</M> is
          onto.
        </p>
      </Proof>

      <Example title="why the whole plane is excluded">
        <p>
          A holomorphic map from <M>{"\\mathbb{C}"}</M> into the disc is bounded and entire, so by Liouville it is constant.
          So the plane is simply connected but not equivalent to the disc. Simple connectivity is also needed: an annulus has
          a loop that cannot shrink, and conformal bijections keep that property.
        </p>
      </Example>

      <Remark title="formulas and boundaries">
        <p>
          The theorem gives existence, not a formula. For polygons the Schwarz-Christoffel formula gives the map as an
          integral, and numerical methods compute others. Carathéodory showed that when the boundary of <M>{"U"}</M> is a
          simple closed curve, the map extends to a homeomorphism of the closures. The theorem is the start of uniformisation,
          which classifies all simply connected Riemann surfaces as the sphere, the plane or the disc.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "plane",
      rung: "check",
      prompt: <p>Which of these regions is <em>not</em> conformally equivalent to the unit disc?</p>,
      answer: {
        kind: "choice",
        options: ["The upper half-plane", "The strip 0 < Im z < 1", "The whole plane ℂ", "The interior of a square"],
        correct: [2],
      },
    },
    {
      key: "unique",
      rung: "check",
      prompt: <p>Which result gives the uniqueness part of the theorem?</p>,
      answer: { kind: "choice", options: ["The Schwarz lemma", "The residue theorem", "Rouché's theorem", "Taylor's theorem"], correct: [0] },
    },
    {
      key: "quad",
      rung: "apply",
      prompt: <p>The first quadrant goes onto the disc by <M>{"z^2"}</M> followed by the Cayley map <M>{"(w - i)/(w + i)"}</M>. Where does <M>{"1 + i"}</M> go? Give the real number.</p>,
      answer: { kind: "numeric", value: 0.3333, tolerance: 0.001 },
    },
    {
      key: "annulus",
      rung: "apply",
      prompt: <p>Why is the annulus <M>{"1 < |z| < 2"}</M> not conformally equivalent to the disc?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is unbounded.",
          "It is not simply connected, and conformal bijections preserve simple connectivity.",
          "It is not open.",
          "Its area is too large.",
        ],
        correct: [1],
      },
    },
    {
      key: "strip",
      rung: "apply",
      prompt: <p>The strip <M>{"0 < \\operatorname{Im} z < \\pi"}</M> goes onto the disc by <M>{"e^z"}</M> then the Cayley map. Which point of the strip goes to 0?</p>,
      answer: { kind: "choice", options: ["0", "iπ/2", "iπ", "1"], correct: [1] },
    },
    {
      key: "plane2",
      rung: "prove",
      prompt: <p>Prove that there is no conformal bijection from <M>{"\\mathbb{C}"}</M> onto the unit disc.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes such a map f exists, so f is entire.",
          "Notes |f| < 1, so f is bounded and constant by Liouville's theorem.",
          "Concludes a constant map is not a bijection, a contradiction.",
        ],
      },
    },
    {
      key: "half",
      rung: "stretch",
      prompt: <p>Find a conformal bijection from the upper half of the unit disc onto the unit disc, as a composite of maps from this part of the course.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses a Möbius map such as (1 + z)/(1 − z) to send the half-disc to the first quadrant.",
          "Squares to reach the upper half-plane, then applies the Cayley map.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the Riemann mapping theorem says, why the whole plane and the annulus are excluded, how uniqueness follows from the Schwarz lemma, and how explicit maps send a strip or a quadrant onto the disc.",

  glimpse: (
    <p>
      The last part of the course uses these tools on special functions: the Gamma function, the zeta function, and an
      outline of the prime number theorem. Later, the uniformisation theorem extends this lesson to Riemann surfaces.
    </p>
  ),
};
