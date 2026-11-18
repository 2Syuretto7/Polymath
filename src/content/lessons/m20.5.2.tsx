import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { MuSearchViz } from "@/components/viz/MuSearchViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m20.5.2",
  minutes: 85,
  links: {
    revisits: ["m20.5.1", "m20.4.2", "m1.5.4"],
    foreshadows: ["m20.5.3", "m20.5.4", "m20.6.4"],
  },

  puzzle: (
    <>
      <p>
        Addition can be defined from successor by recursion, multiplication from addition, exponentiation from
        multiplication. Does every computable function arise this way, by recursions that are guaranteed to stop? Or does
        computation need searches that might not?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a function defined by search and move x. Watch whether the search stops.</p>
      <MuSearchViz />
    </>
  ),

  theory: (
    <>
      <Definition title="primitive recursive functions">
        <p>
          The <strong>basic functions</strong> are zero, successor <M>{"S(x) = x + 1"}</M> and the projections. The primitive
          recursive functions are the smallest class containing them and closed under composition and{" "}
          <strong>primitive recursion</strong>: from g and h, define f by <M>{"f(\\vec x, 0) = g(\\vec x)"}</M> and{" "}
          <M>{"f(\\vec x, y + 1) = h(\\vec x, y, f(\\vec x, y))"}</M>.
        </p>
      </Definition>

      <Example title="addition and beyond">
        <p>
          Addition: <M>{"x + 0 = x"}</M> and <M>{"x + (y+1) = S(x + y)"}</M>. Multiplication and exponentiation follow, as do
          the predecessor, truncated subtraction, &ldquo;is prime&rdquo; and the n-th prime. Every primitive recursive
          function is total, since each recursion runs down to 0. But not every total computable function is primitive
          recursive: the Ackermann function grows faster than every one of them, and diagonalising over a listing of them gives
          another example.
        </p>
      </Example>

      <Definition title="minimisation and the recursive functions">
        <p>
          The <strong>μ-operator</strong> sends g to f with <M>{"f(\\vec x) = \\mu y\\,[g(\\vec x, y) = 0]"}</M>: the least y
          such that g is 0 at y and defined at every smaller value, and undefined if there is none. The{" "}
          <strong>partial recursive functions</strong> are the closure of the basic functions under composition, primitive
          recursion and minimisation. Those that are total are the <strong>recursive</strong> functions.
        </p>
      </Definition>

      <Theorem title="equivalence">
        <p>
          A partial function is partial recursive if and only if it is computable by a Turing machine. One direction builds
          machines for the basic functions and the closure operations. The other codes configurations as numbers: one step is
          primitive recursive, and μ searches for the first step at which the machine halts. This normal form, due to Kleene,
          shows that one use of μ suffices.
        </p>
      </Theorem>

      <Remark title="why partiality is forced">
        <p>
          Any effective listing of total functions can be diagonalised: f(n) = the n-th function at n, plus one, is computable
          but not on the list. So no effective formalism captures exactly the total computable functions. Allowing partial
          functions removes the diagonal escape, at the price that some computations never halt.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "prim",
      rung: "check",
      prompt: <p>Why is every primitive recursive function total?</p>,
      answer: {
        kind: "choice",
        options: ["Each recursion counts down to 0 in a fixed number of steps", "Because it uses μ", "Because it is finite", "Because it is defined only on 0"],
        correct: [0],
      },
    },
    {
      key: "ack",
      rung: "check",
      prompt: <p>Which is a total computable function that is not primitive recursive?</p>,
      answer: { kind: "choice", options: ["The Ackermann function", "Addition", "Exponentiation", "The n-th prime"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the integer square root of 10?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "half",
      rung: "apply",
      prompt: <p>For &ldquo;half, if even&rdquo; with x = 7, what happens?</p>,
      answer: { kind: "choice", options: ["The search never halts, so the value is undefined", "The value is 3", "The value is 4", "The value is 0"], correct: [0] },
    },
    {
      key: "mult",
      rung: "apply",
      prompt: <p>Multiplication is defined by x · 0 = 0 and x · (y + 1) = …?</p>,
      answer: { kind: "choice", options: ["x · y + x", "x · y + 1", "(x + 1) · y", "x + y"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the predecessor function, with pred(0) = 0, is primitive recursive.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets pred(0) = 0, using the zero function.",
          "Sets pred(y + 1) = y, which is h(y, pred(y)) = y, a projection.",
          "Concludes pred arises from basic functions by primitive recursion.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can&rsquo;t a programming language in which every program halts compute every total computable function?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that its programs can be effectively listed and run.",
          "Diagonalises: one plus the n-th program on n is total and computable but not in the language.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Partial functions are forced on us: some searches never end. Could a cleverer program at least tell in advance which
        computations end and which do not? That would be a halting tester, and with it the search could be made safe.
      </p>
      <p>
        Next, the halting problem: Turing&rsquo;s proof that no machine decides whether an arbitrary machine halts, by the
        same diagonal argument Cantor used for the reals, and its consequence that validity in first-order logic is
        undecidable.
      </p>
    </>
  ),
};
