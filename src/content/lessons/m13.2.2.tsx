import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DeformLoopViz } from "@/components/viz/DeformLoopViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.2.2",
  minutes: 100,
  links: {
    revisits: ["m5.7.1", "m13.2.1", "m13.1.3"],
    foreshadows: ["m13.2.3", "m13.3.4", "m13.5.4"],
  },

  puzzle: (
    <>
      <p>
        Integrals of holomorphic functions round closed loops keep coming out as 0, unless the loop surrounds a point where the
        function misbehaves. Is this always so? And can it be proved using only that the function is complex differentiable,
        with no assumption that its derivative is continuous?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move and resize the circle. When does the integral change?</p>
      <DeformLoopViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Goursat’s theorem">
        <p>
          Let <M>{"f"}</M> be holomorphic on an open set containing a closed triangle <M>{"T"}</M> and its interior. Then{" "}
          <M>{"\\oint_{\\partial T} f \\, dz = 0"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"I = \\oint_{\\partial T} f"}</M>. Join the midpoints of the sides to cut <M>{"T"}</M> into four triangles.
          The integrals over their boundaries add up to <M>{"I"}</M>, since the inner edges cancel, so one of them, call it{" "}
          <M>{"T_1"}</M>, has <M>{"|\\oint_{\\partial T_1} f| \\ge |I|/4"}</M>. Repeating gives nested triangles{" "}
          <M>{"T_n"}</M> with <M>{"|I| \\le 4^n |\\oint_{\\partial T_n} f|"}</M>, diameters <M>{"d/2^n"}</M> and
          perimeters <M>{"p/2^n"}</M>, shrinking to a point <M>{"z_0"}</M>. Near <M>{"z_0"}</M>,
        </p>
        <MD>{"f(z) = f(z_0) + f'(z_0)(z - z_0) + \\varepsilon(z)(z - z_0), \\quad \\varepsilon(z) \\to 0."}</MD>
        <p>
          The linear part has a primitive, so it integrates to 0 round <M>{"\\partial T_n"}</M>. By the ML inequality,{" "}
          <M>{"|\\oint_{\\partial T_n} f| \\le \\varepsilon_n \\cdot (d/2^n)(p/2^n)"}</M>, where{" "}
          <M>{"\\varepsilon_n = \\sup_{T_n} |\\varepsilon| \\to 0"}</M>. Hence <M>{"|I| \\le \\varepsilon_n d p \\to 0"}</M>.
        </p>
      </Proof>

      <Theorem title="Cauchy’s theorem in a disc">
        <p>
          If <M>{"f"}</M> is holomorphic on an open disc <M>{"D"}</M> with centre <M>{"a"}</M>, then{" "}
          <M>{"F(z) = \\int_{[a, z]} f"}</M> is a primitive of <M>{"f"}</M>, so <M>{"\\oint_\\gamma f \\, dz = 0"}</M> for
          every closed curve <M>{"\\gamma"}</M> in <M>{"D"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          By Goursat on the triangle with vertices <M>{"a, z, z + h"}</M>,{" "}
          <M>{"F(z + h) - F(z) = \\int_{[z, z+h]} f"}</M>. So{" "}
          <M>{"|F(z+h) - F(z) - f(z)h| \\le |h| \\sup_{w \\in [z, z+h]} |f(w) - f(z)|"}</M>, which is{" "}
          <M>{"o(|h|)"}</M> by continuity. Thus <M>{"F'(z) = f(z)"}</M>.
        </p>
      </Proof>

      <Remark title="the general form">
        <p>
          If two closed curves in an open set <M>{"U"}</M> can be continuously deformed into each other within{" "}
          <M>{"U"}</M>, the integrals of a holomorphic <M>{"f"}</M> along them are equal. So on a simply connected{" "}
          <M>{"U"}</M>, where every loop shrinks to a point, every closed-curve integral is 0. In the visualisation the
          circle can be deformed freely until it hits i or −i.
        </p>
      </Remark>

      <Example title="Cauchy’s own proof">
        <p>
          If <M>{"f'"}</M> is continuous, Green&rsquo;s theorem gives{" "}
          <M>{"\\oint (u + iv)(dx + i\\,dy) = \\iint \\big(-(v_x + u_y) + i(u_x - v_y)\\big) \\, dA"}</M>, which vanishes by
          the Cauchy&ndash;Riemann equations. Goursat&rsquo;s achievement was to remove the continuity assumption, which
          later turns out to be automatic.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "hyp",
      rung: "check",
      prompt: <p>What does Goursat&rsquo;s theorem assume about <M>{"f"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "That f′ is continuous.",
          "Only that f is complex differentiable on an open set containing the triangle and its interior.",
          "That f is a polynomial.",
          "That f is bounded on the whole plane.",
        ],
        correct: [1],
      },
    },
    {
      key: "zero",
      rung: "check",
      prompt: <p>Compute <M>{"\\oint_{|z|=1} e^z \\cos z \\, dz"}</M>.</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0.001 },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>For which of these circles does Cauchy&rsquo;s theorem guarantee <M>{"\\oint dz/z = 0"}</M>?</p>,
      answer: { kind: "choice", options: ["|z| = 1", "|z − 3| = 1", "|z − 0.5| = 1", "|z + 0.5| = 2"], correct: [1] },
    },
    {
      key: "half",
      rung: "apply",
      prompt: <p>Use the visualisation, or a partial fraction, to find <M>{"\\oint_{|z - i| = 1} \\frac{dz}{1 + z^2}"}</M> to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 3.142, tolerance: 0.002 },
    },
    {
      key: "green",
      rung: "apply",
      prompt: <p>By Green&rsquo;s theorem, <M>{"\\oint \\bar z \\, dz = 2i \\times"}</M> area. Find the imaginary part of <M>{"\\oint \\bar z \\, dz"}</M> round a square of side 2, traversed anticlockwise.</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0.001 },
    },
    {
      key: "prim",
      rung: "prove",
      prompt: <p>Assuming Goursat&rsquo;s theorem, prove that a holomorphic function on a disc has a primitive.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines F(z) as the integral of f along the segment from the centre to z.",
          "Uses Goursat on a triangle to get F(z + h) − F(z) as the integral over [z, z + h].",
          "Bounds the difference from f(z)h by |h| times the oscillation of f, so F′(z) = f(z).",
        ],
      },
    },
    {
      key: "hole",
      rung: "stretch",
      prompt: <p>The function 1/z is holomorphic on <M>{"\\mathbb{C} \\setminus \\{0\\}"}</M>, yet its integral round the unit circle is not 0. Which hypothesis of Cauchy&rsquo;s theorem fails, and why?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the punctured plane is not a disc and not simply connected.",
          "Explains the unit circle cannot be shrunk to a point without passing through 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Goursat's subdivision argument, how it gives primitives and Cauchy's theorem on a disc, and why the integral round a loop does not change as the loop is deformed without crossing a singularity.",

  glimpse: (
    <p>
      The next lesson turns Cauchy&rsquo;s theorem into the Cauchy integral formula, from which almost everything else
      follows. Morera&rsquo;s theorem is its converse, and branches of the logarithm come from primitives of 1/z.
    </p>
  ),
};
