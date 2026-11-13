import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RationalEnumViz } from "@/components/viz/RationalEnumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.1.3",
  minutes: 85,
  links: {
    revisits: ["m1.8.2", "m1.8.3", "m6.1.1"],
    foreshadows: ["m6.4.4", "m22.1.4", "m22.1.5"],
  },

  puzzle: (
    <>
      <p>
        Between any two real numbers there is a rational number, so the rationals are everywhere on the line. Yet in a precise
        sense there are far fewer of them than there are real numbers: all the rationals together can be covered by intervals
        whose total length is as small as you like. How can a set be dense everywhere and still be negligibly small, and what
        does that say about how many real numbers there are?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Follow the path through the grid of fractions and watch the list of rationals grow. Every positive rational appears
        somewhere in the list.
      </p>
      <RationalEnumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="countable sets">
        <p>
          A set is <strong>countable</strong> if it is finite or can be put in one-to-one correspondence with{" "}
          <M>{"\\mathbb{N}"}</M>, that is, listed as <M>{"x_1, x_2, x_3, \\ldots"}</M>. It is{" "}
          <strong>uncountable</strong> otherwise. A subset of a countable set is countable; a countable union of countable
          sets is countable, by the same diagonal sweep as in the picture.
        </p>
      </Definition>

      <Theorem title="the rationals are countable; the reals are not">
        <p>
          <M>{"\\mathbb{Q}"}</M> is countable. No interval <M>{"[a, b]"}</M> with <M>{"a < b"}</M> is countable.
        </p>
      </Theorem>

      <Proof>
        <p>
          The listing in the picture handles the positive rationals; interleave <M>{"0"}</M> and the negatives. For the
          second claim we use nested intervals, avoiding decimals. Suppose <M>{"x_1, x_2, \\ldots"}</M> listed every point of{" "}
          <M>{"I_0 = [a, b]"}</M>. Divide <M>{"I_0"}</M> into three closed thirds; at least one of them misses{" "}
          <M>{"x_1"}</M>; call it <M>{"I_1"}</M>. Divide <M>{"I_1"}</M> into thirds and choose one, <M>{"I_2"}</M>, that misses{" "}
          <M>{"x_2"}</M>, and so on. By the nested interval property there is a point <M>{"x"}</M> in every{" "}
          <M>{"I_n"}</M>. Then <M>{"x \\ne x_n"}</M> for each <M>{"n"}</M>, since <M>{"x \\in I_n"}</M> and{" "}
          <M>{"x_n \\notin I_n"}</M>. So the list misses <M>{"x"}</M>.
        </p>
      </Proof>

      <Example title="covering the rationals">
        <p>
          List the rationals in <M>{"[0, 1]"}</M> as <M>{"q_1, q_2, \\ldots"}</M>, and cover <M>{"q_n"}</M> by an interval of
          length <M>{"\\varepsilon/2^n"}</M>. The total length is at most
        </p>
        <MD>{"\\sum_{n=1}^{\\infty} \\frac{\\varepsilon}{2^n} = \\varepsilon."}</MD>
        <p>
          So the rationals have <strong>measure zero</strong>: they take up no length. Since <M>{"[0, 1]"}</M> has length 1,
          the irrationals make up all of it. The same argument shows every countable set has measure zero.
        </p>
      </Example>

      <Remark title="more and less">
        <p>
          The algebraic numbers, roots of polynomials with integer coefficients, are countable too, since there are countably
          many polynomials and each has finitely many roots. So most real numbers are transcendental, as Cantor showed in 1874,
          although at the time only a few transcendental numbers, such as <M>{"e"}</M>, were known to be so. Whether there is
          a set of size strictly between <M>{"\\mathbb{N}"}</M> and <M>{"\\mathbb{R}"}</M> is the continuum hypothesis, which
          the usual axioms of set theory can neither prove nor refute.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these sets are countable? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["The integers", "The rationals", "The interval [0, 1]", "The algebraic numbers"],
        correct: [0, 1, 3],
      },
    },
    {
      key: "cover",
      rung: "check",
      prompt: (
        <p>
          The n-th rational in a list is covered by an interval of length <M>{"0.01/2^n"}</M>. What is the largest possible
          total length of all the intervals?
        </p>
      ),
      answer: { kind: "numeric", value: 0.01 },
    },
    {
      key: "position",
      rung: "apply",
      prompt: (
        <p>
          In the diagonal listing of positive rationals, skipping fractions not in lowest terms, in which position does{" "}
          <M>{"1/4"}</M> appear? The list begins 1/1, 1/2, 2/1, 1/3, 3/1.
        </p>
      ),
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "irr",
      rung: "apply",
      prompt: <p>Why must the set of irrational numbers in <M>{"[0, 1]"}</M> be uncountable?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because irrationals have infinite decimals.",
          "Because otherwise [0, 1] would be the union of two countable sets, the rationals and the irrationals in it, and so countable.",
          "Because there are no rationals in [0, 1].",
          "Because √2 is irrational.",
        ],
        correct: [1],
      },
    },
    {
      key: "trans",
      rung: "apply",
      prompt: <p>Why are most real numbers transcendental?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because π and e are transcendental.",
          "Because the algebraic numbers are countable, while the reals are not.",
          "Because polynomials have no real roots.",
          "Because transcendental numbers are larger.",
        ],
        correct: [1],
      },
    },
    {
      key: "thirds",
      rung: "prove",
      prompt: <p>Prove that the interval <M>{"[0, 1]"}</M> is uncountable, using the nested interval property.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes a list x₁, x₂, … of all points and builds nested closed intervals Iₙ with xₙ ∉ Iₙ, for example by choosing a third of the previous interval.",
          "Uses the nested interval property to get x in every Iₙ, which differs from every xₙ, a contradiction.",
        ],
      },
    },
    {
      key: "union",
      rung: "stretch",
      prompt: (
        <p>
          Prove that a countable union of countable sets is countable. You may assume each set is listed as{" "}
          <M>{"a_{k1}, a_{k2}, \\ldots"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Arranges the elements in a grid with a_{kj} in row k and column j, and lists them diagonal by diagonal, k + j = 2, 3, 4, ….",
          "Notes each element appears after finitely many steps, and repeats can be skipped, so the union is countable.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what countable means, why the rationals are countable and the reals are not, why the rationals have measure zero, and what this says about transcendental numbers.",

  glimpse: (
    <p>
      The Cantor set, later in the course, is uncountable yet also has measure zero. Measure theory makes the idea of length
      precise and shows that some sets cannot be given a length at all.
    </p>
  ),
};
