import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SupChaseViz } from "@/components/viz/SupChaseViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.5.2",
  minutes: 90,
  links: {
    revisits: ["m6.5.1", "m6.4.2", "m2.3.3"],
    foreshadows: ["m6.5.3", "m6.6.2", "m12.2.1"],
  },

  puzzle: (
    <>
      <p>
        In calculus you used the extreme value theorem: a continuous function on a closed interval has a maximum and a
        minimum. It sounds obvious, but each hypothesis matters. On <M>{"(0, 1)"}</M> the function <M>{"x"}</M> creeps
        towards 1 without reaching it; on <M>{"(0, 1]"}</M> the function <M>{"1/x"}</M> has no upper bound at all. What is it
        about closed bounded intervals that rescues us, and is it really about intervals?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose points whose values climb towards the supremum. Watch where the points themselves go, and whether that place
        is in the domain.
      </p>
      <SupChaseViz />
    </>
  ),

  theory: (
    <>
      <Definition title="continuity">
        <p>
          A function <M>{"f : A \\to \\mathbb{R}"}</M> is <strong>continuous at</strong> <M>{"c \\in A"}</M> if for every{" "}
          <M>{"\\varepsilon > 0"}</M> there is <M>{"\\delta > 0"}</M> with <M>{"|f(x) - f(c)| < \\varepsilon"}</M> whenever{" "}
          <M>{"x \\in A"}</M> and <M>{"|x - c| < \\delta"}</M>. Equivalently, <M>{"x_n \\to c"}</M> implies{" "}
          <M>{"f(x_n) \\to f(c)"}</M>. At an isolated point of <M>{"A"}</M> every function is continuous; at a limit point,
          continuity means <M>{"\\lim_{x \\to c} f(x) = f(c)"}</M>.
        </p>
      </Definition>

      <Theorem title="continuous images of compact sets">
        <p>
          If <M>{"f"}</M> is continuous on a compact set <M>{"K"}</M>, then <M>{"f(K)"}</M> is compact.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"y_n = f(x_n)"}</M> be a sequence in <M>{"f(K)"}</M>. Since <M>{"K"}</M> is compact, some subsequence{" "}
          <M>{"x_{n_k} \\to x \\in K"}</M>. By continuity <M>{"y_{n_k} = f(x_{n_k}) \\to f(x) \\in f(K)"}</M>. So every
          sequence in <M>{"f(K)"}</M> has a subsequence converging in <M>{"f(K)"}</M>.
        </p>
      </Proof>

      <Theorem title="the extreme value theorem">
        <p>
          A continuous function on a non-empty compact set <M>{"K"}</M> attains a maximum and a minimum: there are{" "}
          <M>{"x_0, x_1 \\in K"}</M> with <M>{"f(x_0) \\le f(x) \\le f(x_1)"}</M> for all <M>{"x \\in K"}</M>.
        </p>
      </Theorem>

      <Example title="the proof">
        <p>
          The image <M>{"f(K)"}</M> is compact, hence bounded, so <M>{"s = \\sup f(K)"}</M> exists. Choose{" "}
          <M>{"y_n \\in f(K)"}</M> with <M>{"s - 1/n < y_n \\le s"}</M>. Then <M>{"y_n \\to s"}</M>, and since{" "}
          <M>{"f(K)"}</M> is closed, <M>{"s \\in f(K)"}</M>: that is, <M>{"s = f(x_1)"}</M> for some <M>{"x_1"}</M>. The
          viz does the same thing in the domain: points <M>{"x_n"}</M> with <M>{"f(x_n) \\to s"}</M> have a subsequence
          converging to some <M>{"c \\in K"}</M>, and</p>
        <MD>{"f(c) = \\lim f(x_{n_k}) = s."}</MD>
      </Example>

      <Remark title="what does the work">
        <p>
          Nothing in the argument mentioned intervals. It used only compactness of the domain and continuity of the function.
          That is why the theorem holds for continuous functions on any compact subset of <M>{"\\mathbb{R}^n"}</M>, and on any
          compact metric space. Both hypotheses are needed: drop closedness and <M>{"x"}</M> on <M>{"(0, 1)"}</M> fails; drop
          boundedness and <M>{"x"}</M> on <M>{"[0, \\infty)"}</M> fails; drop continuity and a function with a jump can miss
          its supremum.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these continuous functions are guaranteed to attain a maximum on the given set? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["x² on [−1, 2]", "x on (0, 1)", "sin x on [0, 10]", "eˣ on [0, ∞)", "1/x on [1, 2]"],
        correct: [0, 2, 4],
      },
    },
    {
      key: "image",
      rung: "check",
      prompt: <p>What is the image of the compact interval [−1, 2] under f(x) = x²?</p>,
      answer: { kind: "choice", options: ["[1, 4]", "[0, 4]", "(0, 4)", "[−1, 4]"], correct: [1] },
    },
    {
      key: "max",
      rung: "apply",
      prompt: (
        <p>
          What is the maximum value of <M>{"f(x) = x(2 - x)"}</M> on <M>{"[0, 2]"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "jump",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"f(x) = x"}</M> for <M>{"x < 1"}</M> and <M>{"f(1) = 0"}</M>, on <M>{"[0, 1]"}</M>. Why does this not
          contradict the extreme value theorem?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "It does attain its supremum.",
          "f is not continuous at 1, so the theorem does not apply; its supremum 1 is not attained.",
          "[0, 1] is not compact.",
          "f is unbounded.",
        ],
        correct: [1],
      },
    },
    {
      key: "seqcont",
      rung: "apply",
      prompt: (
        <p>
          Which sequence shows that <M>{"f(x) = 1/x"}</M> on <M>{"(0, 1]"}</M> does not have a compact image?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "y_n = f(1/n) = n, which has no convergent subsequence",
          "y_n = f(1) = 1",
          "y_n = f(1/2) = 2",
          "There is none, since the image is compact.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that a continuous function on a compact set is bounded, using sequences. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Supposes f is unbounded and picks x_n with |f(x_n)| > n.",
          "Extracts a subsequence converging to some c in K by compactness.",
          "Uses continuity: f(x_{n_k}) → f(c), contradicting |f(x_{n_k})| > n_k → ∞.",
        ],
      },
    },
    {
      key: "dist",
      rung: "stretch",
      prompt: (
        <p>
          Let <M>{"K"}</M> be a non-empty compact set and <M>{"p"}</M> a point. Show that <M>{"K"}</M> has a point nearest to{" "}
          <M>{"p"}</M>. A sketch is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Considers the function g(x) = |x − p| on K.",
          "Notes g is continuous.",
          "Applies the extreme value theorem to get a minimum, attained at a nearest point.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the definition of continuity, why the continuous image of a compact set is compact, how this proves the extreme value theorem, and why each hypothesis is needed.",

  glimpse: (
    <p>
      The next lesson strengthens continuity to uniform continuity and shows that, on compact sets, continuity gives it for
      free. The extreme value theorem is the first step in proving the mean value theorem, and in metric spaces the same proof
      works word for word.
    </p>
  ),
};
