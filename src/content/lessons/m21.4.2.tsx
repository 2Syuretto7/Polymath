import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { RamseyTriangleViz } from "@/components/viz/RamseyTriangleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.4.2",
  minutes: 85,
  links: {
    revisits: ["m4.1.4", "m21.4.1", "m4.3.1"],
    foreshadows: ["m21.4.3", "m21.5.1", "m21.5.2"],
  },

  puzzle: (
    <>
      <p>
        At any party of six people, either three of them all know one another or three of them are all strangers. Try to
        arrange acquaintances among six people to avoid both, and you will fail. Why? And with five people, can you succeed?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Colour the edges of K₅ and K₆ red and blue, and look for a triangle in one colour.</p>
      <RamseyTriangleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Ramsey numbers">
        <p>
          The <strong>Ramsey number</strong> <M>{"R(s, t)"}</M> is the least <M>n</M> such that every red-blue colouring of the
          edges of <M>{"K_n"}</M> has a red <M>{"K_s"}</M> or a blue <M>{"K_t"}</M>.
        </p>
      </Definition>

      <Example title="R(3, 3) = 6">
        <p>
          Pick a vertex <M>v</M> of <M>{"K_6"}</M>. It has five edges, so by pigeonhole at least three share a colour, say red,
          going to <M>a</M>, <M>b</M>, <M>c</M>. If any edge among <M>a</M>, <M>b</M>, <M>c</M> is red, it makes a red
          triangle with <M>v</M>; if none is, <M>abc</M> is a blue triangle. The pentagon colouring of <M>{"K_5"}</M>, sides
          red and diagonals blue, shows five vertices are not enough.
        </p>
      </Example>

      <Theorem title="Ramsey's theorem (1930)">
        <p>Every <M>{"R(s, t)"}</M> is finite. Indeed</p>
        <MD>{"R(s, t) \\le R(s - 1, t) + R(s, t - 1), \\qquad R(s, t) \\le \\binom{s + t - 2}{s - 1}."}</MD>
        <p>
          For the first, take <M>{"n = R(s-1, t) + R(s, t-1)"}</M> and a vertex <M>v</M>. Its <M>{"n - 1"}</M> edges include at
          least <M>{"R(s-1, t)"}</M> red or <M>{"R(s, t-1)"}</M> blue. In the first case, the red neighbours contain a red{" "}
          <M>{"K_{s-1}"}</M>, which joins <M>v</M> to make a red <M>{"K_s"}</M>, or a blue <M>{"K_t"}</M>. The second case is
          symmetric. The binomial bound follows by induction, since binomial coefficients obey Pascal&rsquo;s rule. In
          particular <M>{"R(k, k) \\le 4^k"}</M>.
        </p>
      </Theorem>

      <Remark title="how little we know">
        <p>
          Frank Ramsey proved his theorem in 1930 as a lemma in logic, and died that year aged 26. Complete disorder is
          impossible: every large enough structure has an orderly piece. Yet exact values are rare. <M>{"R(4, 4) = 18"}</M>,
          but <M>{"R(5, 5)"}</M> is only known to lie between 43 and 46. Erdős said that if aliens demanded <M>{"R(5, 5)"}</M>{" "}
          on pain of destroying Earth, we should set every computer to work on it; if they demanded <M>{"R(6, 6)"}</M>, we
          should try to destroy the aliens. In 2023 Campos, Griffiths, Morris and Sahasrabudhe finally improved the bound{" "}
          <M>{"4^k"}</M> to <M>{"(4 - \\varepsilon)^k"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is R(s, t)?</p>,
      answer: {
        kind: "choice",
        options: ["The least n such that every red-blue colouring of the edges of Kₙ has a red Kₛ or a blue Kₜ", "The number of edges of Kₛ", "The largest clique in a graph", "The chromatic number of Kₛ,ₜ"],
        correct: [0],
      },
    },
    {
      key: "pigeon",
      rung: "check",
      prompt: <p>In the proof that R(3, 3) ≤ 6, why must a vertex have three edges of the same colour?</p>,
      answer: { kind: "choice", options: ["It has five edges and two colours, so by pigeonhole three share one", "Every vertex has degree 3", "Because the graph is planar", "Because K₆ has 15 edges"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many one-colour triangles does the starting colouring of K₅ have?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "r34",
      rung: "apply",
      prompt: <p>Use R(s, t) ≤ R(s − 1, t) + R(s, t − 1), with R(2, 4) = 4 and R(3, 3) = 6, to bound R(3, 4).</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "r2",
      rung: "apply",
      prompt: <p>What is R(2, t)? (A red K₂ is a single red edge.)</p>,
      answer: { kind: "choice", options: ["t", "2", "t + 1", "2t"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that among any six people, three are mutual acquaintances or three are mutual strangers.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Fixes one person and uses pigeonhole to find three others all acquainted with them, or all strangers to them.",
          "In the acquainted case, notes any acquaintance among the three gives a triangle with the first person.",
          "Otherwise the three are mutual strangers; and argues the other case symmetrically.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that if the edges of the infinite complete graph on ℕ are coloured red and blue, there is an infinite set all of whose edges have one colour. A sketch is enough.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Picks a vertex, keeps the infinitely many neighbours joined to it in one colour, and repeats inside that set.",
          "Notes each chosen vertex has a colour for all later ones, and infinitely many chosen vertices share a colour.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Ramsey&rsquo;s theorem gives upper bounds near <M>{"4^k"}</M>. For lower bounds, one needs colourings of large{" "}
        <M>{"K_n"}</M> with no one-colour <M>{"K_k"}</M>, and nobody knows how to build good ones. Erdős showed in 1947 that a
        random colouring works, without ever exhibiting one.
      </p>
      <p>
        Next, probabilistic lower bounds: Erdős&rsquo; bound <M>{"R(k, k) > 2^{k/2}"}</M>, the method of alterations, and why
        proving that something exists can be far easier than finding it.
      </p>
    </>
  ),
};
