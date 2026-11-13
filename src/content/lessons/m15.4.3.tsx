import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CircleLiftViz } from "@/components/viz/CircleLiftViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.4.3",
  minutes: 90,
  links: {
    revisits: ["m15.4.2", "m15.1.4", "m13.5.4"],
    foreshadows: ["m15.4.4", "m25.2.1", "m25.2.2"],
  },

  puzzle: (
    <>
      <p>
        Wrap the real line round the circle like an endless spring, sending <M>{"s"}</M> to{" "}
        <M>{"(\\cos 2\\pi s, \\sin 2\\pi s)"}</M>. Walk round the circle, and someone standing on the line can follow you,
        always directly above your position. When you return to where you started, are they back where they started too?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a path on the circle and follow its lift along the line.</p>
      <CircleLiftViz />
    </>
  ),

  theory: (
    <>
      <Definition title="covering maps">
        <p>
          A continuous surjection <M>{"p : \\tilde{X} \\to X"}</M> is a <strong>covering map</strong> if every point of{" "}
          <M>{"X"}</M> has an open neighbourhood <M>{"U"}</M> that is <strong>evenly covered</strong>:{" "}
          <M>{"p^{-1}(U)"}</M> is a disjoint union of open sets, each mapped homeomorphically onto <M>{"U"}</M> by{" "}
          <M>{"p"}</M>. These open sets are the sheets over <M>{"U"}</M>.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          The map <M>{"\\mathbb{R} \\to S^1"}</M>, <M>{"s \\mapsto e^{2\\pi i s}"}</M>, is a covering with a sheet over each arc
          for every integer shift. The map <M>{"z \\mapsto z^n"}</M> on the unit circle is an <M>{"n"}</M>-sheeted covering of
          the circle by itself. The exponential map <M>{"\\mathbb{C} \\to \\mathbb{C} \\setminus \\{0\\}"}</M> is a covering,
          and its local inverses are the branches of the logarithm.
        </p>
      </Example>

      <Theorem title="path lifting">
        <p>
          Let <M>{"p : \\tilde{X} \\to X"}</M> be a covering, <M>{"\\gamma"}</M> a path in <M>{"X"}</M> starting at{" "}
          <M>{"x_0"}</M>, and <M>{"\\tilde{x}_0"}</M> a point over <M>{"x_0"}</M>. There is a unique path{" "}
          <M>{"\\tilde{\\gamma}"}</M> in <M>{"\\tilde{X}"}</M> starting at <M>{"\\tilde{x}_0"}</M> with{" "}
          <M>{"p \\circ \\tilde{\\gamma} = \\gamma"}</M>. Homotopies of paths with fixed ends lift in the same way, so the end
          point of the lift depends only on the homotopy class of <M>{"\\gamma"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Cover <M>{"X"}</M> by evenly covered sets and pull them back by <M>{"\\gamma"}</M>. By compactness of{" "}
          <M>{"[0, 1]"}</M>, the Lebesgue number lemma gives <M>{"0 = s_0 < s_1 < \\cdots < s_n = 1"}</M> with each{" "}
          <M>{"\\gamma([s_{k-1}, s_k])"}</M> in one evenly covered set. On each piece, choose the sheet containing the lift
          so far and compose with the inverse of <M>{"p"}</M> on that sheet. Uniqueness: the set where two lifts agree is
          open, since <M>{"p"}</M> is injective on each sheet, and the set where they differ is open too, since there they lie
          in different, disjoint sheets. By connectedness the lifts agree on all of <M>{"[0, 1]"}</M>. The same argument on the square lifts homotopies.
        </p>
      </Proof>

      <Remark title="the fibre and the group">
        <p>
          Lifting loops at <M>{"x_0"}</M> and recording where the lift ends gives an action of{" "}
          <M>{"\\pi_1(X, x_0)"}</M> on the fibre <M>{"p^{-1}(x_0)"}</M>. When <M>{"\\tilde{X}"}</M> is simply connected, this
          puts the group in bijection with the fibre. For the circle the fibre is <M>{"\\mathbb{Z}"}</M>, and that is how we
          will compute <M>{"\\pi_1(S^1)"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for an open set <M>{"U"}</M> to be evenly covered by <M>{"p"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its preimage is a disjoint union of open sets, each mapped homeomorphically onto U.",
          "Its preimage is a single open set.",
          "Its preimage is empty.",
          "It is covered by finitely many open sets.",
        ],
        correct: [0],
      },
    },
    {
      key: "unique",
      rung: "check",
      prompt: <p>Given a starting point over <M>{"x_0"}</M>, how many lifts does a path from <M>{"x_0"}</M> have?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at which integer does the lift of &ldquo;once backwards&rdquo; end?</p>,
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "zn",
      rung: "apply",
      prompt: <p>How many sheets does the covering <M>{"z \\mapsto z^3"}</M> of the circle by itself have?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "notcover",
      rung: "apply",
      prompt: <p>Why is <M>{"z \\mapsto z^2"}</M> from <M>{"\\mathbb{C}"}</M> to <M>{"\\mathbb{C}"}</M> not a covering map?</p>,
      answer: {
        kind: "choice",
        options: [
          "No neighbourhood of 0 is evenly covered: 0 has one preimage, nearby points have two.",
          "It is not continuous.",
          "It is not surjective.",
          "ℂ is not connected.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if two lifts of the same path start at the same point, they agree everywhere, assuming <M>{"\\tilde{X}"}</M> is Hausdorff.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers the set of times where the two lifts agree, which contains 0.",
          "Shows it is open using a sheet containing the common value, on which p is injective, and closed using Hausdorffness.",
          "Concludes by connectedness of [0, 1] that it is everything.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the end point of the lift of a loop at <M>{"x_0"}</M> depends only on the loop&rsquo;s homotopy class.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lifts a homotopy between two loops, with ends fixed, to the covering space.",
          "Notes the right edge of the lifted square lies over x₀, so it is a path in the discrete fibre, hence constant.",
          "Concludes the two lifts end at the same point. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a covering map is, with the line over the circle and z ↦ zⁿ as examples, how the path lifting property works and why lifts are unique, and how lifting loops gives an action of the fundamental group on the fibre.",

  glimpse: (
    <p>
      Next, lifting through the line computes the fundamental group of the circle as the integers. Later, the whole theory of
      covering spaces becomes a Galois correspondence between covers and subgroups of the fundamental group.
    </p>
  ),
};
