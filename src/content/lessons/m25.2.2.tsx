import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CoverWordViz } from "@/components/viz/CoverWordViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.2.2",
  minutes: 95,
  links: {
    revisits: ["m25.2.1", "m15.4.3", "m7.4.2"],
    foreshadows: ["m25.2.3", "m25.3.1", "m25.6.2"],
  },

  puzzle: (
    <>
      <p>
        The figure eight has two loops, a and b. Its connected covers with three sheets are little graphs: three vertices,
        each with one a-edge and one b-edge coming in and going out. How many genuinely different such covers are there, and
        what single piece of algebra tells them apart?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each cover of the figure eight is a graph whose edges are labelled a and b. Build a word in a and b, lift it from
        sheet 0, and see whether it closes up. The words that close up form the subgroup belonging to the cover.
      </p>
      <CoverWordViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the subgroup of a cover">
        <p>
          A connected cover <M>{"p: (\\tilde{X}, \\tilde{x}_0) \\to (X, x_0)"}</M> determines the subgroup{" "}
          <M>{"H = p_*(\\pi_1(\\tilde{X}, \\tilde{x}_0))"}</M> of <M>{"\\pi_1(X, x_0)"}</M>: the loops whose lifts from{" "}
          <M>{"\\tilde{x}_0"}</M> close up. Changing the base point over <M>{"x_0"}</M> replaces <M>H</M> by a conjugate{" "}
          <M>{"gHg^{-1}"}</M>, where <M>g</M> is the image of a path between the two base points.
        </p>
      </Definition>

      <Definition title="the universal cover">
        <p>
          A <strong>universal cover</strong> is a simply connected cover. Its subgroup is trivial, so by the lifting criterion
          it covers every other connected cover, which explains the name. The universal cover of the circle is ℝ; of the
          torus, the plane; of the figure eight, the infinite 4-valent tree; of ℝP², the sphere.
        </p>
      </Definition>

      <Theorem title="existence">
        <p>
          A path-connected, locally path-connected space <M>X</M> has a universal cover exactly when it is{" "}
          <strong>semilocally simply connected</strong>: every point has a neighbourhood <M>U</M> in which every loop is
          null-homotopic in <M>X</M>. The construction takes <M>{"\\tilde{X}"}</M> to be the set of homotopy classes of paths
          from <M>{"x_0"}</M>, with <M>p</M> sending a path to its end point.
        </p>
      </Theorem>

      <Theorem title="the classification">
        <p>
          Let <M>X</M> be path-connected, locally path-connected and semilocally simply connected. Then sending a cover to
          its subgroup gives a bijection
        </p>
        <p>
          <M>{"\\{\\text{connected covers of } X\\}/\\text{isomorphism} \;\\longleftrightarrow\; \\{\\text{subgroups of } \\pi_1(X)\\}/\\text{conjugacy},"}</M>
        </p>
        <p>
          and with base points, a bijection with subgroups themselves. The number of sheets is the index of the subgroup.
          The correspondence reverses inclusion: a larger subgroup gives a smaller cover, sitting below.
        </p>
        <p>
          <strong>Proof idea.</strong> Injectivity is the lifting criterion applied both ways: equal subgroups give maps each
          way, whose composites lift the identity and so are the identity. For surjectivity, given <M>H</M>, take the
          universal cover and identify two paths when they end at the same point and differ by a loop in <M>H</M>.
        </p>
      </Theorem>

      <Example title="covers of the figure eight">
        <p>
          A connected n-sheeted cover is the same as a pair of permutations of n sheets, one for a and one for b, generating a
          transitive group, up to relabelling. With two sheets there are three covers, matching the three subgroups of index 2
          in the free group on a and b. In the visualisation, the cover with a = (0 1) and b = (1 2) has a subgroup containing
          a², b and ab²a⁻¹, but not a.
        </p>
      </Example>

      <Remark title="the Galois analogy">
        <p>
          This is the same shape as the fundamental theorem of Galois theory: field extensions inside a fixed closure match
          subgroups of the Galois group, reversing inclusion. In both, a universal object (the universal cover, the separable
          closure) carries a group action, and intermediate objects are its quotients.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "univ",
      rung: "check",
      prompt: <p>Which subgroup of π₁(X) corresponds to the universal cover?</p>,
      answer: { kind: "choice", options: ["The trivial subgroup", "The whole group", "The commutator subgroup", "The centre"], correct: [0] },
    },
    {
      key: "base",
      rung: "check",
      prompt: <p>What happens to the subgroup of a cover when the base point is moved to another point of the same fibre?</p>,
      answer: { kind: "choice", options: ["It is replaced by a conjugate subgroup", "It stays exactly the same", "It becomes trivial", "It becomes the whole group"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the cover where a and b both rotate three sheets. What is the index of its subgroup?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "circle",
      rung: "apply",
      prompt: <p>The fundamental group of the circle is ℤ. Which connected covers does the classification give?</p>,
      answer: { kind: "choice", options: ["ℝ for the trivial subgroup, and the n-fold cover z ↦ zⁿ for nℤ", "Only ℝ", "Only the circle itself", "One cover for every real number"], correct: [0] },
    },
    {
      key: "rp2",
      rung: "apply",
      prompt: <p>π₁(ℝP²) has order 2. How many connected covers does ℝP² have, up to isomorphism?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that two connected covers of X with the same subgroup (at chosen base points) are isomorphic.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the lifting criterion to get a based map from each cover to the other.",
          "Notes each composite is a lift of p fixing the base point, as is the identity.",
          "Concludes by uniqueness of lifts that the composites are identities, so the covers are isomorphic.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why should a space with a point where tinier and tinier loops cannot be shrunk, like the Hawaiian earring, fail to have a universal cover?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a universal cover would make every small enough loop lift to a loop in an evenly covered sheet.",
          "Observes such loops would then be null-homotopic, which the small circles of the earring are not.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The classification turns every question about covers into a question about subgroups. In particular, the free group
        on two letters has subgroups of every finite index, and subgroups that are free on any number of generators, which
        topology proves in a few lines.
      </p>
      <p>
        Next, the symmetries of a cover: deck transformations, normal covers, and how the fundamental group acts on the
        universal cover.
      </p>
    </>
  ),
};
