import { Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { AntipodalViz } from "@/components/viz/AntipodalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.4.2",
  minutes: 90,
  links: {
    revisits: ["m25.4.1", "m15.4.5", "m25.3.2"],
    foreshadows: ["m25.4.3", "m25.5.3", "m25.6.2"],
  },

  puzzle: (
    <>
      <p>
        At this moment, are there two exactly opposite points on the Earth with the same temperature and the same air
        pressure? It seems like a coincidence that would need luck. In fact it is a theorem, true of any two continuous
        quantities whatever.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        On the equator, a circle, one quantity suffices. Choose a day&rsquo;s temperature and find the opposite points that
        agree.
      </p>
      <AntipodalViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Brouwer’s fixed point theorem">
        <p>
          Every continuous map <M>{"f: D^n \\to D^n"}</M> has a fixed point.
        </p>
        <p>
          <strong>Proof.</strong> If not, send x to the point where the ray from f(x) through x meets the boundary. This is a
          retraction <M>{"D^n \\to S^{n-1}"}</M>. On <M>{"\\tilde{H}_{n-1}"}</M> the identity of ℤ would factor through{" "}
          <M>{"\\tilde{H}_{n-1}(D^n) = 0"}</M>, which is impossible.
        </p>
      </Theorem>

      <Theorem title="the Borsuk–Ulam theorem">
        <p>
          For every continuous <M>{"f: S^n \\to \\mathbb{R}^n"}</M> there is a point x with <M>{"f(x) = f(-x)"}</M>.
          Equivalently, there is no continuous odd map <M>{"g: S^n \\to S^{n-1}"}</M>, one with <M>{"g(-x) = -g(x)"}</M>.
        </p>
        <p>
          <strong>Proof idea.</strong> If f(x) ≠ f(−x) for all x, then{" "}
          <M>{"g(x) = \\frac{f(x) - f(-x)}{|f(x) - f(-x)|}"}</M> is odd. The key lemma is that an odd map{" "}
          <M>{"S^n \\to S^n"}</M> has odd degree, proved by passing to ℝPⁿ and using homology with ℤ/2 coefficients. Restrict
          g to the equator <M>{"S^{n-1}"}</M>: it is odd, so has odd degree, but it extends over the upper hemisphere, a disc,
          so has degree 0. For n = 1 the argument is the intermediate value theorem, as in the visualisation.
        </p>
      </Theorem>

      <Example title="the ham sandwich theorem">
        <p>
          Any n bounded regions in ℝⁿ can be bisected simultaneously by a single hyperplane. For a sandwich of bread, ham and
          cheese in ℝ³: for each unit vector u, take the plane perpendicular to u that halves the bread, and record how much
          ham and cheese lie on the u side. This gives a map <M>{"S^2 \\to \\mathbb{R}^2"}</M>; Borsuk–Ulam gives a u where
          the values for u and −u agree, so the plane halves all three.
        </p>
      </Example>

      <Remark title="Lyusternik–Schnirelmann and necklaces">
        <p>
          If Sⁿ is covered by n + 1 closed sets, one of them contains a pair of antipodal points. The same theorem settles the
          necklace splitting problem: two thieves can divide a necklace with n kinds of jewel fairly using at most n cuts. A
          theorem about spheres has become a tool of combinatorics.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "brouwer",
      rung: "check",
      prompt: <p>What does Brouwer&rsquo;s fixed point theorem say?</p>,
      answer: { kind: "choice", options: ["Every continuous map from a disc to itself has a fixed point", "Every map of a sphere has a fixed point", "Every map of the plane has a fixed point", "Every homeomorphism has a fixed point"], correct: [0] },
    },
    {
      key: "bu",
      rung: "check",
      prompt: <p>What does the Borsuk–Ulam theorem say about f: Sⁿ → ℝⁿ?</p>,
      answer: { kind: "choice", options: ["Some pair of antipodal points has the same image", "f is constant", "f has a fixed point", "f is surjective"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, the zeros of h come in pairs θ and θ + π. What is the smallest possible number of zeros of h in [0, 2π)?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "embed",
      rung: "apply",
      prompt: <p>Why can S² not be embedded in ℝ²?</p>,
      answer: { kind: "choice", options: ["An embedding would be injective, but Borsuk–Ulam forces two antipodal points to have the same image", "S² is not compact", "ℝ² is not simply connected", "S² has no tangent vector field"], correct: [0] },
    },
    {
      key: "ham",
      rung: "apply",
      prompt: <p>How many regions in ℝ³ can always be bisected by a single plane, by the ham sandwich theorem?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the case n = 1 of Borsuk–Ulam: for continuous f: S¹ → ℝ, some x has f(x) = f(−x).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines h(x) = f(x) − f(−x) and notes h(−x) = −h(x).",
          "Notes that if h(x) ≠ 0 then h takes opposite signs at x and −x.",
          "Applies the intermediate value theorem along an arc from x to −x to find a zero.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Brouwer&rsquo;s theorem is sometimes illustrated by stirring a cup of coffee: some point ends where it began. What assumptions does that illustration quietly make?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the final position must be a continuous function of the initial one, so no splashing or tearing.",
          "Notes the coffee must stay within the same disc-like region.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Brouwer&rsquo;s theorem guarantees a fixed point, but says nothing about how many, or about spaces other than discs.
        A torus can be rotated with no fixed points at all.
      </p>
      <p>
        Next, the Lefschetz fixed point theorem: a number computed from homology that, when non-zero, forces every map in a
        homotopy class to have a fixed point.
      </p>
    </>
  ),
};
