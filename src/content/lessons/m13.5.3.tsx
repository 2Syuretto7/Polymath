import { M } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { OpenMapViz } from "@/components/viz/OpenMapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.5.3",
  minutes: 85,
  links: {
    revisits: ["m13.5.2", "m13.3.3", "m13.1.3"],
    foreshadows: ["m13.6.1", "m13.6.3", "m13.6.4"],
  },

  puzzle: (
    <>
      <p>
        The real function <M>{"x^2"}</M> sends the open interval <M>{"(-1, 1)"}</M> to <M>{"[0, 1)"}</M>, which is not open:
        the value 0 sits at the edge of the image. Can a holomorphic function ever squash an open set onto something with an
        edge like that?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Send a small disc about 0 through each function and see what its image looks like near f(0).</p>
      <OpenMapViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the identity theorem">
        <p>
          If <M>{"f"}</M> is holomorphic on a connected open set and not identically 0, its zeros are isolated: each has a
          punctured neighbourhood with no other zeros, and each has a finite order. So two holomorphic functions that agree on
          a set with a limit point in the domain agree everywhere.
        </p>
      </Theorem>

      <Theorem title="the open mapping theorem">
        <p>
          A non-constant holomorphic function on a connected open set maps open sets to open sets.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"w_0 = f(z_0)"}</M>. By the identity theorem <M>{"f - w_0"}</M> has an isolated zero of some order{" "}
          <M>{"k \\ge 1"}</M> at <M>{"z_0"}</M>, so there is a small circle about <M>{"z_0"}</M> on which{" "}
          <M>{"|f - w_0| \\ge \\delta > 0"}</M>. For <M>{"|w - w_0| < \\delta"}</M>, write{" "}
          <M>{"f - w = (f - w_0) + (w_0 - w)"}</M>. On the circle the constant <M>{"w_0 - w"}</M> is smaller than{" "}
          <M>{"f - w_0"}</M>, so by Rouché <M>{"f - w"}</M> has <M>{"k"}</M> zeros inside. Thus every{" "}
          <M>{"w"}</M> within <M>{"\\delta"}</M> of <M>{"w_0"}</M> is a value of <M>{"f"}</M> near <M>{"z_0"}</M>.
        </p>
      </Proof>

      <Example title="consequences">
        <p>
          The maximum modulus principle follows at once: if <M>{"|f(z_0)|"}</M> were a local maximum, the open image near{" "}
          <M>{"f(z_0)"}</M> would contain points of larger modulus. A holomorphic function with values in a line, or of
          constant modulus, must be constant. And if <M>{"f'(z_0) \\ne 0"}</M>, then <M>{"k = 1"}</M>, so{" "}
          <M>{"f"}</M> is one-to-one near <M>{"z_0"}</M> with a holomorphic inverse.
        </p>
      </Example>

      <Remark title="local form">
        <p>
          Near a point where <M>{"f - w_0"}</M> has a zero of order <M>{"k"}</M>, one can change coordinates so that{" "}
          <M>{"f"}</M> becomes <M>{"w_0 + \\zeta^k"}</M>. Every holomorphic map looks locally like a power map: a{" "}
          <M>{"k"}</M>-fold cover, with angles at <M>{"z_0"}</M> multiplied by <M>{"k"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "re",
      rung: "check",
      prompt: <p>The function <M>{"\\operatorname{Re} z"}</M> maps the open unit disc onto <M>{"(-1, 1)"}</M>, a segment that is not open in the plane. What does this show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That Re z is not holomorphic.",
          "That the open mapping theorem is false.",
          "That the disc is not open.",
          "Nothing.",
        ],
        correct: [0],
      },
    },
    {
      key: "cube",
      rung: "check",
      prompt: <p>For <M>{"f(z) = z^3"}</M>, how many preimages near 0 does a small nonzero <M>{"w"}</M> have?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "order",
      rung: "apply",
      prompt: <p>What is the order of the zero of <M>{"\\cos z - 1"}</M> at 0?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "real",
      rung: "apply",
      prompt: <p>Can a non-constant holomorphic function on the unit disc take only real values?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes, for example Re z.",
          "No: its image would be open, but no nonempty open set lies inside the real line.",
          "Only if it is a polynomial.",
          "Only near the boundary.",
        ],
        correct: [1],
      },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: <p>The function <M>{"f(z) = 2z + z^2"}</M> has a holomorphic inverse near 0. What is the derivative of that inverse at 0?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "max",
      rung: "prove",
      prompt: <p>Deduce the maximum modulus principle from the open mapping theorem.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Assumes f is non-constant and |f| has a local maximum at z₀.",
          "Notes the image of a small disc about z₀ is an open set containing f(z₀).",
          "Observes that this open set contains points of larger modulus than f(z₀), a contradiction.",
        ],
      },
    },
    {
      key: "const",
      rung: "stretch",
      prompt: <p>Show that a holomorphic function on a connected open set whose modulus is constant must itself be constant.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the image lies on a circle |w| = c, which contains no open set.",
          "Concludes by the open mapping theorem that f is constant.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the identity theorem, the open mapping theorem and its proof from Rouché, and how it gives the maximum modulus principle and local invertibility where f′ is not zero.",

  glimpse: (
    <p>
      The next part studies conformal maps, which by this lesson are the holomorphic functions with non-vanishing
      derivative. The Schwarz lemma and the Riemann mapping theorem build on open mapping and maximum modulus.
    </p>
  ),
};
