import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { BezoutCountViz } from "@/components/viz/BezoutCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m30.2.2",
  minutes: 90,
  links: {
    revisits: ["m30.2.1", "m30.1.2", "m24.2.4"],
    foreshadows: ["m30.2.3", "m30.6.1", "m30.6.3"],
  },

  puzzle: (
    <>
      <p>
        A line can meet a parabola in two points, one point or none. A vertical line meets it in only one point however you
        move it. Two circles meet in at most two points, though two conics can meet in four. Is there any number here that
        does not change?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a pair of curves, move one, and keep a full count of where they meet.</p>
      <BezoutCountViz />
    </>
  ),

  theory: (
    <>
      <Definition title="intersection multiplicity">
        <p>
          For plane curves f = 0 and g = 0 with no common component, the <strong>intersection multiplicity</strong> at a point
          P is <M>{"I_P(f, g) = \\dim_k \\mathcal{O}_P / (f, g)"}</M>, the dimension of the local ring at P modulo f and g.
          It is 1 exactly when the curves are smooth at P with different tangents, at least 2 at a tangency, and at least the
          product of the multiplicities of P on the two curves.
        </p>
      </Definition>

      <Theorem title="Bézout’s theorem">
        <p>
          Over an algebraically closed field, two projective plane curves of degrees d and e with no common component meet in
          exactly de points, counted with intersection multiplicity: <M>{"\\sum_P I_P(F, G) = de"}</M>.
        </p>
      </Theorem>

      <Example title="where the missing points go">
        <p>
          The horizontal line y = c meets y = x² in two points when c &gt; 0, one double point when c = 0, and two complex
          points when c &lt; 0. A vertical line x = c meets the parabola once in the affine plane; the second point is{" "}
          <M>{"[0 : 1 : 0]"}</M> at infinity, where the parabola touches the line at infinity. Two circles always pass
          through the circular points <M>{"[1 : \\pm i : 0]"}</M>, which is why they share at most two affine points rather
          than four.
        </p>
      </Example>

      <Remark title="consequences">
        <p>
          Any two projective plane curves meet. Five points in general position lie on exactly one conic, and Bézout shows two
          distinct conics cannot share five points. Pascal&rsquo;s theorem on hexagons inscribed in a conic, and the
          Cayley-Bacharach theorem on cubics through eight points, follow from Bézout counting. In cohomology the theorem
          reads: the class of a curve of degree d in the projective plane is d times the class of a line.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "count",
      rung: "check",
      prompt: <p>Two projective plane curves of degrees 3 and 4 with no common component meet in how many points, counted properly?</p>,
      answer: { kind: "numeric", value: 12, tolerance: 0 },
    },
    {
      key: "need",
      rung: "check",
      prompt: <p>Which of these is not needed to get exactly de points?</p>,
      answer: { kind: "choice", options: ["Working over the real numbers", "Counting points at infinity", "Counting complex points", "Counting tangencies with multiplicity"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the parabola and a vertical line. How many intersection points lie at infinity?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "tangent",
      rung: "apply",
      prompt: <p>What is the intersection multiplicity of y = x² and y = 0 at the origin?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "circles",
      rung: "apply",
      prompt: <p>Two circles meet in at most how many points of the affine plane?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Bézout&rsquo;s theorem when one curve is a line not contained in the other curve.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Parametrises the line as [s : t] ↦ (linear forms in s, t).",
          "Substitutes into F to get a non-zero homogeneous polynomial of degree d in s and t.",
          "Factors it over the algebraically closed field into d linear factors, the roots counted with multiplicity giving the intersection points.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use Bézout&rsquo;s theorem to show that two distinct irreducible conics share at most four points.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes distinct irreducible conics have no common component.",
          "Applies Bézout with d = e = 2 to get at most 4 points, each counted at least once.",
          "Concludes. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A line meets a cubic in three points. So two rational points of a cubic determine a third, and that simple fact turns
        the points of a cubic curve into a group.
      </p>
      <p>Next, elliptic curves and the group law.</p>
    </>
  ),
};
