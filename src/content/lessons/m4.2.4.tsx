import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DyckPathViz } from "@/components/viz/DyckPathViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.2.4",
  minutes: 85,
  links: {
    revisits: ["m4.2.3", "m4.1.3", "m4.2.2"],
    foreshadows: ["m4.3.4", "m4.5.3", "m21.5.3"],
  },

  puzzle: (
    <>
      <p>
        How many ways can you correctly arrange 3 pairs of brackets? How many ways can you cut a hexagon into triangles
        with non-crossing diagonals? How many ways can 6 people around a round table shake hands in pairs without any arms
        crossing? The first answer is 5, the second 14, the third 5 again. The same sequence, 1, 1, 2, 5, 14, 42, 132, …,
        appears in hundreds of problems that seem to have nothing to do with each other.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A Dyck path goes up and down n times each without dipping below the axis. Step through the paths for each n and
        count them. Notice where each path first comes back down to the axis.
      </p>
      <DyckPathViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Catalan numbers">
        <p>
          The <strong>Catalan number</strong> <M>{"C_n"}</M> is the number of Dyck paths with n up-steps and n down-steps:
          equivalently, of balanced strings of n pairs of brackets. So <M>{"C_0 = 1"}</M>, <M>{"C_1 = 1"}</M>,{" "}
          <M>{"C_2 = 2"}</M>, <M>{"C_3 = 5"}</M>, <M>{"C_4 = 14"}</M>.
        </p>
      </Definition>

      <Theorem title="the recurrence">
        <MD>{"C_{n+1} = \\sum_{i=0}^{n}C_iC_{n-i}."}</MD>
      </Theorem>
      <Proof>
        <p>
          A Dyck path with n + 1 up-steps returns to the axis for the first time after 2(i + 1) steps, for some i from 0 to
          n. Up to that point it is an up-step, a Dyck path with i up-steps lifted by one level, and a down-step; after it
          comes any Dyck path with n − i up-steps. In brackets: every balanced string is (A)B with A and B balanced.
        </p>
      </Proof>

      <Theorem title="the formula">
        <MD>{"C_n = \\binom{2n}{n} - \\binom{2n}{n + 1} = \\frac{1}{n + 1}\\binom{2n}{n}."}</MD>
      </Theorem>
      <Proof>
        <p>
          There are <M>{"\\binom{2n}{n}"}</M> paths with n up and n down steps. Call one bad if it dips below the axis, and
          reflect its part after the first visit to level −1, swapping up and down steps. The result is a path with n + 1
          down-steps and n − 1 up-steps, ending at −2. Every such path must visit −1, and reflecting back recovers the bad
          path, so this is a bijection, and there are <M>{"\\binom{2n}{n + 1}"}</M> bad paths. This is André&rsquo;s{" "}
          <strong>reflection principle</strong>. The second form follows by simplifying.
        </p>
      </Proof>

      <Example title="other Catalan families">
        <p>
          A convex polygon with n + 2 sides has <M>{"C_n"}</M> triangulations: the side from vertex 1 to vertex n + 2 lies
          in one triangle, whose third vertex splits the rest into two smaller polygons, giving the same recurrence. Binary
          trees with n nodes, ways to bracket a product of n + 1 factors, and non-crossing handshakes among 2n people at a
          round table are all counted by <M>{"C_n"}</M>, and each can be put in bijection with Dyck paths.
        </p>
      </Example>

      <Remark title="the generating function">
        <p>
          The recurrence says that <M>{"C(x) = \\sum C_nx^n"}</M> satisfies <M>{"C(x) = 1 + xC(x)^2"}</M>. Solving the
          quadratic, and choosing the sign that keeps <M>{"C(0) = 1"}</M>, gives
        </p>
        <MD>{"C(x) = \\frac{1 - \\sqrt{1 - 4x}}{2x},"}</MD>
        <p>
          and expanding the square root by the binomial series gives the formula again. Since <M>{"C_n"}</M> grows like{" "}
          <M>{"4^n/(n^{3/2}\\sqrt{\\pi})"}</M>, the radius of convergence 1/4 shows up in the growth rate.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "c4",
      rung: "check",
      prompt: <p>What is <M>{"C_4"}</M>?</p>,
      answer: { kind: "numeric", value: 14 },
    },
    {
      key: "brackets",
      rung: "check",
      prompt: <p>How many balanced strings of 3 pairs of brackets are there?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "hexagon",
      rung: "apply",
      prompt: <p>In how many ways can a convex hexagon be cut into triangles by non-crossing diagonals?</p>,
      answer: { kind: "numeric", value: 14 },
    },
    {
      key: "c6",
      rung: "apply",
      prompt: <p>Use the formula to compute <M>{"C_6"}</M>.</p>,
      answer: { kind: "numeric", value: 132 },
    },
    {
      key: "bad",
      rung: "apply",
      prompt: (
        <p>
          Of the 20 paths with 3 up-steps and 3 down-steps, how many dip below the axis at some point?
        </p>
      ),
      answer: { kind: "numeric", value: 15 },
    },
    {
      key: "reflect",
      rung: "prove",
      prompt: (
        <p>
          Prove that the number of paths with n up-steps and n down-steps that dip below the axis is{" "}
          <M>{"\\binom{2n}{n + 1}"}</M>, using the reflection principle. Explain why the reflection is a bijection.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Describes reflecting the part of a bad path after its first visit to level −1.",
          "Shows the result ends at −2, so it has n + 1 down-steps and n − 1 up-steps, and that every such path visits −1.",
          "Explains that reflecting after the first visit to −1 undoes the map, so it is a bijection, and counts C(2n, n + 1). A clear argument earns full credit.",
        ],
      },
    },
    {
      key: "bijection",
      rung: "stretch",
      prompt: (
        <p>
          Describe a bijection between balanced bracket strings with n pairs and ways of fully bracketing a product of n + 1
          factors, such as ((ab)c)d. Check it for n = 3.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a rule, for example deleting the letters and closing brackets of the full bracketing, or using the (A)B decomposition matched with splitting the product at its last multiplication.",
          "Explains why the rule can be reversed.",
          "Lists the 5 bracketings of four factors and their strings. A reasonable bijection with a check earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the Catalan numbers count, how the first return to the axis gives the recurrence, how the reflection principle gives the formula, and some other problems they answer.",

  glimpse: (
    <p>
      The next chapter turns to graphs, where trees are counted again. Recursion, later in this course, analyses
      algorithms by recurrences like these, and Combinatorics extends the generating function method.
    </p>
  ),
};
