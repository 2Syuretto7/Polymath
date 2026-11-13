import { M } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DogWalkViz } from "@/components/viz/DogWalkViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.5.2",
  minutes: 85,
  links: {
    revisits: ["m13.5.1", "m13.3.2", "m13.4.3"],
    foreshadows: ["m13.5.3", "m13.6.3", "m13.6.4"],
  },

  puzzle: (
    <>
      <p>
        How many roots of <M>{"z^5 + 3z + 1"}</M> lie in the unit disc? Solving a quintic is hopeless, but on the unit
        circle one term is bigger than all the others put together. Does the biggest term decide the count?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Lengthen the leash by increasing s. When does f + g stop winding round 0 five times?</p>
      <DogWalkViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Rouché’s theorem">
        <p>
          Let <M>{"f"}</M> and <M>{"g"}</M> be holomorphic on an open set containing a closed disc, and suppose{" "}
          <M>{"|g| < |f|"}</M> on its boundary circle. Then <M>{"f"}</M> and <M>{"f + g"}</M> have the same number of zeros
          inside the disc, counted with multiplicity.
        </p>
      </Theorem>

      <Proof>
        <p>
          Neither <M>{"f"}</M> nor <M>{"f + g"}</M> vanishes on the circle, since <M>{"|f + g| \\ge |f| - |g| > 0"}</M>. Let{" "}
          <M>{"h = (f + g)/f = 1 + g/f"}</M>. On the circle <M>{"|h - 1| < 1"}</M>, so the image of the circle under{" "}
          <M>{"h"}</M> lies in the disc of radius 1 about 1 and does not wind round 0. By the argument principle the number of
          zeros minus poles of <M>{"h"}</M> inside is 0; these are the zeros of <M>{"f + g"}</M> minus the zeros of{" "}
          <M>{"f"}</M>.
        </p>
      </Proof>

      <Example title="locating the roots of a quintic">
        <p>
          On <M>{"|z| = 2"}</M>, <M>{"|z^5| = 32 > 7 \\ge |3z + 1|"}</M>, so <M>{"z^5 + 3z + 1"}</M> has five zeros in{" "}
          <M>{"|z| < 2"}</M>. On <M>{"|z| = 1"}</M>, <M>{"|3z| = 3 > 2 \\ge |z^5 + 1|"}</M>, so it has exactly one zero in the
          unit disc. Hence four zeros lie in the annulus <M>{"1 < |z| < 2"}</M>.
        </p>
      </Example>

      <Remark title="stability of zeros">
        <p>
          Rouché shows that zeros move continuously: a small perturbation of a holomorphic function keeps the same number of
          zeros near each original one. Hurwitz&rsquo;s theorem, that a uniform limit of non-vanishing holomorphic functions is
          non-vanishing or identically 0, follows the same way and is used in the proof of the Riemann mapping theorem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "two",
      rung: "check",
      prompt: <p>How many zeros does <M>{"z^5 + 3z + 1"}</M> have in <M>{"|z| < 2"}</M>?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "one",
      rung: "check",
      prompt: <p>How many zeros does <M>{"z^5 + 3z + 1"}</M> have in <M>{"|z| < 1"}</M>?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "seven",
      rung: "apply",
      prompt: <p>How many zeros does <M>{"z^7 - 5z^3 + 1"}</M> have in <M>{"|z| < 1"}</M>?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "dom",
      rung: "apply",
      prompt: <p>How many zeros does <M>{"2z^5 - 6z^2 + z + 1"}</M> have in <M>{"|z| < 1"}</M>?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "annulus",
      rung: "apply",
      prompt: <p>How many zeros does <M>{"z^4 + 6z + 3"}</M> have in the annulus <M>{"1 < |z| < 2"}</M>?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove Rouché&rsquo;s theorem from the argument principle.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows f and f + g have no zeros on the circle.",
          "Considers h = 1 + g/f and notes its image of the circle lies in the disc |w − 1| < 1, so does not wind round 0.",
          "Applies the argument principle to h to conclude the zero counts agree.",
        ],
      },
    },
    {
      key: "fta",
      rung: "stretch",
      prompt: <p>Use Rouché&rsquo;s theorem to prove that a polynomial of degree <M>{"n"}</M> has exactly <M>{"n"}</M> zeros in <M>{"\\mathbb{C}"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes f = a_n zⁿ and g the remaining terms, and shows |g| < |f| on a large enough circle.",
          "Concludes the polynomial has n zeros inside, as zⁿ does, and none outside since |p| > 0 there.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Rouché's theorem, the dog-walking picture of why it is true, and how to use it to count the zeros of a polynomial in a disc or annulus.",

  glimpse: (
    <p>
      The next lesson uses Rouché to prove the open mapping theorem. Hurwitz&rsquo;s theorem, its cousin, is a key step in the
      Riemann mapping theorem.
    </p>
  ),
};
