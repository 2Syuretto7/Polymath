import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { OrderViz } from "@/components/viz/OrderViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.1.2",
  minutes: 65,
  links: {
    revisits: ["m1.6.3", "m0.2.3"],
    foreshadows: ["m6.1.1", "m2.5.2"],
  },

  puzzle: (
    <>
      <p>
        Every school student learns that multiplying both sides of an inequality by a negative number turns it round: from{" "}
        <M>{"2 < 3"}</M> you get <M>{"-2 > -3"}</M>. Why should that be? And why is a square never negative?
      </p>
      <p>
        A harder question. The complex numbers form a field, just like the reals. Could we also put them in order, deciding for
        any two complex numbers which is smaller, in a way that respects addition and multiplication as the order on the reals
        does?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The field axioms said how to add and multiply. The second group of axioms says how numbers are arranged on a line.
        Remarkably, it is enough to say which numbers are <strong>positive</strong>, and to require that sums and products of
        positive numbers are positive. Everything else about inequalities follows.
      </p>
      <p>
        Below, a and b sit on a number line, and below them their multiples ca and cb. Move c through positive values, then 0,
        then negative values, and watch what happens to the order.
      </p>
      <OrderViz />
      <p>
        Multiplying by a positive number stretches the line, so order is kept. Multiplying by a negative number also reflects
        the line through 0, so order is reversed. Multiplying by 0 squashes everything to a single point.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="ordered field">
        <p>
          An <strong>ordered field</strong> is a field F together with a subset P, the <strong>positive</strong> elements, such
          that:
        </p>
        <ol>
          <li>(closure) if a and b are in P, so are <M>{"a + b"}</M> and <M>{"ab"}</M>;</li>
          <li>
            (trichotomy) for every a in F, exactly one of these holds: a is in P, <M>{"a = 0"}</M>, or <M>{"-a"}</M> is in P.
          </li>
        </ol>
        <p>
          We write <M>{"a < b"}</M>, or <M>{"b > a"}</M>, when <M>{"b - a"}</M> is in P, and <M>{"a \\le b"}</M> when{" "}
          <M>{"a < b"}</M> or <M>{"a = b"}</M>. So a is positive exactly when <M>{"a > 0"}</M>. Our second axiom is that{" "}
          <M>{"\\mathbb{R}"}</M> is an ordered field.
        </p>
      </Definition>

      <Theorem title="the order is total">
        <p>
          In an ordered field, <M>{"\\le"}</M> is a total order: for any a and b, exactly one of <M>{"a < b"}</M>,{" "}
          <M>{"a = b"}</M> and <M>{"a > b"}</M> holds, and if <M>{"a < b"}</M> and <M>{"b < c"}</M> then <M>{"a < c"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          Apply trichotomy to <M>{"b - a"}</M>: exactly one of <M>{"b - a \\in P"}</M>, <M>{"b - a = 0"}</M> and{" "}
          <M>{"-(b - a) = a - b \\in P"}</M> holds. For transitivity, <M>{"c - a = (c - b) + (b - a)"}</M> is a sum of two
          positive elements, so it is positive by closure.
        </p>
      </Proof>

      <Theorem title="rules for inequalities">
        <p>Suppose <M>{"a < b"}</M>. Then:</p>
        <ol>
          <li>
            <M>{"a + c < b + c"}</M> for every c;
          </li>
          <li>
            if <M>{"c > 0"}</M>, then <M>{"ac < bc"}</M>;
          </li>
          <li>
            if <M>{"c < 0"}</M>, then <M>{"ac > bc"}</M>.
          </li>
        </ol>
      </Theorem>
      <Proof>
        <p>
          For 1, <M>{"(b + c) - (a + c) = b - a"}</M>, which is positive. For 2, <M>{"bc - ac = (b - a)c"}</M> is a product of
          two positives. For 3, <M>{"-c"}</M> is positive, so <M>{"ac - bc = (b - a)(-c)"}</M> is positive, and{" "}
          <M>{"bc < ac"}</M>. (The algebra uses the sign rules from the last lesson.)
        </p>
      </Proof>

      <Theorem title="squares are not negative">
        <p>
          If <M>{"a \\ne 0"}</M>, then <M>{"a^2 > 0"}</M>. In particular <M>{"1 = 1^2 > 0"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          By trichotomy, either a is positive or <M>{"-a"}</M> is. In the first case <M>{"a^2 = a \\cdot a"}</M> is positive by
          closure. In the second, <M>{"a^2 = (-a)(-a)"}</M>, again a product of two positives.
        </p>
      </Proof>

      <Example title="the complex numbers cannot be ordered">
        <p>
          Suppose the complex numbers were an ordered field. Since <M>{"i \\ne 0"}</M>, the theorem gives{" "}
          <M>{"i^2 = -1 > 0"}</M>. But also <M>{"1 > 0"}</M>, so by trichotomy <M>{"-1"}</M> is not positive. This
          contradiction shows no ordering of <M>{"\\mathbb{C}"}</M> is possible. Finite fields cannot be ordered either: in the
          integers modulo 5,
        </p>
        <MD>{"1 + 1 + 1 + 1 + 1 = 0,"}</MD>
        <p>yet a sum of positive elements must be positive.</p>
      </Example>

      <Remark title="a common slip">
        <p>
          Squaring does not always keep order: <M>{"-3 < 2"}</M>, but <M>{"9 > 4"}</M>. It does keep order between non-negative
          numbers, as you will prove. Whenever you manipulate an inequality, ask which of the rules above justifies the step,
          and whether its condition on the sign holds.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "negative",
      rung: "check",
      prompt: (
        <p>
          If <M>{"a < b"}</M> and <M>{"c < 0"}</M>, which of these must be true?
        </p>
      ),
      answer: { kind: "choice", options: ["ac < bc", "ac > bc", "ac = bc", "none of these need hold"], correct: [1] },
    },
    {
      key: "one",
      rung: "check",
      prompt: <p>Which axiom, together with the theorem on squares, shows that 1 is positive and not negative?</p>,
      answer: { kind: "choice", options: ["closure", "trichotomy", "distributivity", "associativity"], correct: [1] },
    },
    {
      key: "solve",
      rung: "apply",
      prompt: (
        <p>
          The inequality <M>{"-3x < 12"}</M> is equivalent to <M>{"x > k"}</M>. What is k?
        </p>
      ),
      answer: { kind: "numeric", value: -4 },
    },
    {
      key: "square-slip",
      rung: "apply",
      prompt: (
        <p>
          Which pair shows that <M>{"a < b"}</M> does not imply <M>{"a^2 < b^2"}</M>?
        </p>
      ),
      answer: { kind: "choice", options: ["a = 1, b = 2", "a = −5, b = 1", "a = 0, b = 3", "a = 2, b = 7"], correct: [1] },
    },
    {
      key: "orderable",
      rung: "apply",
      prompt: <p>Which of these fields can be made into an ordered field? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["the rationals", "the real numbers", "the complex numbers", "the integers modulo 5"],
        correct: [0, 1],
      },
    },
    {
      key: "squares-order",
      rung: "prove",
      prompt: (
        <p>
          Prove that if <M>{"0 < a < b"}</M>, then <M>{"a^2 < b^2"}</M>, and also <M>{"1/b < 1/a"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes b² − a² = (b − a)(b + a) and notes both factors are positive.",
          "Concludes a² < b² by closure of the positives.",
          "Shows 1/a and 1/b are positive (for example, a · (1/a) = 1 > 0 and trichotomy).",
          "Writes 1/a − 1/b = (b − a)/(ab) and concludes it is positive.",
        ],
      },
    },
    {
      key: "am-gm",
      rung: "stretch",
      prompt: (
        <p>
          Prove that for all real a and b, <M>{"ab \\le \\tfrac{1}{4}(a + b)^2"}</M>, with equality exactly when{" "}
          <M>{"a = b"}</M>. What does this say about rectangles with a fixed perimeter?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Rewrites the difference as (a − b)²/4.",
          "Uses the theorem that squares are non-negative, with zero exactly when a = b.",
          "Interprets: among rectangles with perimeter 2(a + b), the square has the largest area.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why multiplying an inequality by a negative number reverses it, starting from the idea of the positive numbers.",

  glimpse: (
    <p>
      The order axioms will do steady work throughout this course, above all when the derivative is used to decide where a
      function rises and falls. In Real Analysis I, the reals are built from the rationals, and the order on them has to be
      constructed too.
    </p>
  ),
};
