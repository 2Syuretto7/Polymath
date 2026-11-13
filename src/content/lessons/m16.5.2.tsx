import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { FieldIndexViz } from "@/components/viz/FieldIndexViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m16.5.2",
  minutes: 90,
  links: {
    revisits: ["m16.5.1", "m16.4.3", "m15.4.4"],
    foreshadows: ["m31.4.1", "m26.6.2", "m17.5.1"],
  },

  puzzle: (
    <>
      <p>
        At every moment, somewhere on the Earth the horizontal wind speed is exactly zero. No meteorology is needed to know
        this: it follows from the shape of the Earth alone. How can topology force the wind to stop somewhere?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move a loop around a vector field and count how many times the arrows turn as you walk round it.</p>
      <FieldIndexViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="angle sums">
        <p>
          For a geodesic triangle with interior angles α, β, γ, the edges have <M>{"k_g = 0"}</M> and the exterior angles are
          π − α, π − β, π − γ, so the local theorem gives
        </p>
        <MD>{"\\alpha + \\beta + \\gamma = \\pi + \\iint_T K\\, dA."}</MD>
        <p>The angle sum exceeds π where K &gt; 0, falls short where K &lt; 0, and equals π in the plane.</p>
      </Theorem>

      <Example title="no geodesic digons in negative curvature">
        <p>
          Suppose K ≤ 0 and two geodesics from p meet again at q, bounding a disc-like region R with interior angles α and β.
          Gauss–Bonnet gives <M>{"\\iint_R K\\,dA + (\\pi - \\alpha) + (\\pi - \\beta) = 2\\pi"}</M>, so{" "}
          <M>{"\\iint_R K\\,dA = \\alpha + \\beta > 0"}</M>, a contradiction. On such surfaces geodesics from a point spread out
          and never refocus, in sharp contrast with the sphere.
        </p>
      </Example>

      <Definition title="index of a zero">
        <p>
          Let v be a tangent vector field with an isolated zero p. Walk once anticlockwise round a small loop about p; the
          number of full turns made by v is the <strong>index</strong> of p. A source, sink or centre has index 1, a saddle
          index −1, and the field z² index 2.
        </p>
      </Definition>

      <Theorem title="Poincaré–Hopf">
        <p>
          If a tangent vector field on a compact orientable surface S has finitely many zeros, the sum of their indices is
          χ(S). One proof applies Gauss–Bonnet to the complement of small discs round the zeros, measuring the turning of the
          field against parallel transport.
        </p>
      </Theorem>

      <Remark title="the hairy ball theorem">
        <p>
          The sphere has χ = 2 ≠ 0, so every tangent vector field on it has a zero: you cannot comb a hairy ball flat. The
          horizontal wind on the Earth is such a field, so it vanishes somewhere. The torus has χ = 0, and it does carry a
          nowhere-zero field, flowing round it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sum",
      rung: "check",
      prompt: <p>On a surface with K &lt; 0, how does the angle sum of a geodesic triangle compare with π?</p>,
      answer: { kind: "choice", options: ["It is less than π", "It is more than π", "It equals π", "It can be anything"], correct: [0] },
    },
    {
      key: "ph",
      rung: "check",
      prompt: <p>What does the Poincaré–Hopf theorem say?</p>,
      answer: {
        kind: "choice",
        options: [
          "The indices of the zeros of a vector field on S add up to χ(S).",
          "Every vector field has exactly χ(S) zeros.",
          "Every vector field on a surface has a zero.",
          "The index of every zero is 1.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose &ldquo;source and saddle&rdquo; and make the loop large enough to enclose both zeros. What is the index of the loop?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "dipole",
      rung: "apply",
      prompt: <p>In the visualisation, what is the index of the zero of the dipole field?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "sphere",
      rung: "apply",
      prompt: <p>A vector field on the sphere has exactly three zeros: two saddles and one more. What must the index of the third zero be?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that on a surface with K ≤ 0, two geodesics from a point cannot meet again so as to bound a region homeomorphic to a disc.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies local Gauss–Bonnet to the region, with k_g = 0 on the geodesic edges and exterior angles π − α and π − β.",
          "Obtains ∬K dA = α + β.",
          "Notes that α + β > 0 while ∬K dA ≤ 0, a contradiction.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the hairy ball theorem not prevent a nowhere-zero vector field on the torus? Describe one.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the torus has χ = 0, so Poincaré–Hopf allows a field with no zeros.",
          "Describes one, such as the field pointing along the circles that go round the hole.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Gauss–Bonnet gives the angle sum of a geodesic triangle, why geodesics cannot meet twice when K ≤ 0, and why the wind must stop somewhere on the Earth.",

  glimpse: (
    <p>
      This ends the course on curves and surfaces. Riemannian geometry takes these ideas into any dimension, where curvature
      becomes a tensor and Gauss–Bonnet becomes the Chern–Gauss–Bonnet theorem.
    </p>
  ),
};
