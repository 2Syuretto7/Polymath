import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CatMapViz } from "@/components/viz/CatMapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.2.1",
  minutes: 90,
  links: {
    revisits: ["m36.1.4", "m36.1.1", "m22.1.2"],
    foreshadows: ["m36.2.2", "m36.4.1", "m36.4.2"],
  },

  puzzle: (
    <>
      <p>
        Open a partition between two halves of a box, one full of gas and one empty. The gas spreads out. In 1896 Ernst
        Zermelo pointed out that, by a theorem of Poincaré, the molecules must eventually return almost exactly to where
        they started, crowding back into one half. Was the second law of thermodynamics refuted?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Scramble a picture with a map that preserves area, and keep going.</p>
      <CatMapViz />
    </>
  ),

  theory: (
    <>
      <Definition title="recurrent points">
        <p>
          For a continuous map T of a metric space X, a point x is <strong>recurrent</strong> if its orbit returns
          arbitrarily close to x: for every ε &gt; 0 there is n ≥ 1 with <M>{"d(T^n x, x) < \\varepsilon"}</M>. Periodic
          points are recurrent; so is every point under an irrational rotation.
        </p>
      </Definition>

      <Theorem title="Birkhoff's recurrence theorem">
        <p>
          Every continuous map of a compact metric space has a recurrent point. Indeed, by Zorn&rsquo;s lemma there is a
          minimal closed invariant set, and every point of it is recurrent.
        </p>
      </Theorem>

      <Theorem title="Poincaré's recurrence theorem">
        <p>
          Let T preserve a finite measure μ, and let A be measurable. Then almost every point of A returns to A, and indeed
          returns infinitely often. Proof: let B be the set of points of A that never return. The sets{" "}
          <M>{"B, T^{-1}B, T^{-2}B, \\dots"}</M> are pairwise disjoint and all have measure μ(B). Their total measure is at
          most μ(X) &lt; ∞, so μ(B) = 0.
        </p>
      </Theorem>

      <Example title="the cat map">
        <p>
          The map <M>{"(x, y) \\mapsto (2x + y, x + y) \\bmod 1"}</M> of the torus preserves area, so recurrence applies.
          Restricted to the grid of points with denominator N, it permutes finitely many points and so returns every one
          of them exactly.
        </p>
      </Example>

      <Remark title="how long to wait">
        <p>
          Kac&rsquo;s lemma: for an ergodic T with μ(X) = 1, the mean return time to A, averaged over A, is 1/μ(A). For a
          litre of gas, the set where all the molecules are in one half has measure about <M>{"2^{-10^{22}}"}</M>, so the
          expected wait dwarfs the age of the universe. Recurrence and the second law are both right on their own scales.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rec",
      rung: "check",
      prompt: <p>What does it mean for a point to be recurrent?</p>,
      answer: { kind: "choice", options: ["Its orbit returns arbitrarily close to it", "It is a fixed point", "Its orbit is dense", "Its orbit leaves every compact set"], correct: [0] },
    },
    {
      key: "hyp",
      rung: "check",
      prompt: <p>Which hypothesis of Poincaré&rsquo;s theorem fails for the translation x ↦ x + 1 on the real line?</p>,
      answer: { kind: "choice", options: ["The measure of the whole space is finite", "The map preserves measure", "The map is measurable", "The map is invertible"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with N = 37, after how many steps does every cell return?</p>,
      answer: { kind: "numeric", value: 38, tolerance: 0 },
    },
    {
      key: "kac",
      rung: "apply",
      prompt: <p>For an ergodic map preserving a probability measure, what is the mean return time to a set of measure 0.05?</p>,
      answer: { kind: "numeric", value: 20, tolerance: 0 },
    },
    {
      key: "perm",
      rung: "apply",
      prompt: <p>Why does the cat map on an N × N grid return every point exactly?</p>,
      answer: { kind: "choice", options: ["It permutes a finite set, and some power of a permutation is the identity", "It is an isometry", "It has no periodic points", "It is not invertible"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Poincaré&rsquo;s recurrence theorem: if T preserves a finite measure, almost every point of A returns to A at least once.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lets B be the set of points of A that never return to A, and shows B is measurable.",
          "Shows the preimages of B under T, T², … are pairwise disjoint, each of measure μ(B).",
          "Concludes from finiteness of μ(X) that μ(B) = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Deduce from the theorem that almost every point of A returns to A infinitely often.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the theorem to the map Tᵏ, which also preserves μ, for each k.",
          "Notes that a point returning only finitely often would, after its last return, never return, and takes a countable union of null sets.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Birkhoff found recurrent points inside minimal sets, where no orbit can escape and every orbit is dense. These are
        the indivisible pieces of a dynamical system.
      </p>
      <p>Next, minimality.</p>
    </>
  ),
};
