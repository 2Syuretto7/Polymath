import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SumProductViz } from "@/components/viz/SumProductViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.1.1",
  minutes: 75,
  links: {
    revisits: ["m0.8.4", "m1.8.1", "m1.7.2"],
    foreshadows: ["m4.1.2", "m4.2.1", "m9.1.2"],
  },

  puzzle: (
    <>
      <p>
        A website demands a password of six characters, each a lower-case letter or a digit, with at least one digit. How
        many passwords are allowed? Counting them one by one is hopeless: there are more than a billion. But two simple
        rules, and one trick of counting what you do not want, settle it in a line. Discrete mathematics begins with
        learning to count without listing.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choosing one thing from A <em>and</em> one from B makes a grid of pairs. Choosing one thing from A <em>or</em> B
        makes a single list, as long as nothing is counted twice. Change the sizes and the overlap.
      </p>
      <SumProductViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the sum and product rules">
        <p>
          <strong>Sum rule.</strong> If A and B are disjoint finite sets, <M>{"|A \\cup B| = |A| + |B|"}</M>.
        </p>
        <p>
          <strong>Product rule.</strong> <M>{"|A \\times B| = |A| \\cdot |B|"}</M>. More generally, if a choice is made in
          k stages, and stage i can always be done in <M>{"n_i"}</M> ways whatever happened before, then there are{" "}
          <M>{"n_1n_2\\cdots n_k"}</M> outcomes.
        </p>
      </Theorem>
      <Proof>
        <p>
          The sum rule is the definition of counting applied to a list of A followed by a list of B. For the product rule,
          <M>{"A \\times B"}</M> is the disjoint union of the sets <M>{"\\{a\\} \\times B"}</M> for a in A, each of size
          |B|, so the sum rule gives |A| copies of |B|. The k-stage version follows by induction on k.
        </p>
      </Proof>
      <p>
        The number of choices at each stage must not depend on earlier choices, though the choices themselves may. For
        three-digit numbers with distinct digits, the first digit has 9 options (not 0), the second 9 (not the first, but
        now 0 is allowed), and the third 8, so there are <M>{"9 \\cdot 9 \\cdot 8 = 648"}</M>.
      </p>

      <Example title="functions and subsets">
        <p>
          A function from a k-element set to an n-element set chooses an image for each of the k elements, so there are{" "}
          <M>{"n^k"}</M> of them. If the function must be injective, the choices fall by one each time:{" "}
          <M>{"n(n - 1)\\cdots(n - k + 1)"}</M>. A subset S of <M>{"\\{1, \\dots, n\\}"}</M> is the same as a string of n
          zeros and ones, with a 1 in place i when i is in S, so there are <M>{"2^n"}</M> subsets.
        </p>
      </Example>

      <Definition title="bijection and complement">
        <p>
          Two finite sets have the same size exactly when there is a bijection between them. So a hard count can often be
          replaced by an easy one, as subsets were replaced by binary strings. And it is often easier to count what you do
          not want: if <M>{"A \\subseteq U"}</M>, then <M>{"|A| = |U| - |U \\setminus A|"}</M>.
        </p>
      </Definition>

      <Example title="the password">
        <p>
          There are <M>{"36^6"}</M> strings of six letters and digits, and <M>{"26^6"}</M> of them have no digit. So the
          number of allowed passwords is
        </p>
        <MD>{"36^6 - 26^6 = 2\\,176\\,782\\,336 - 308\\,915\\,776 = 1\\,867\\,866\\,560."}</MD>
      </Example>

      <Remark title="when sets overlap">
        <p>
          If A and B overlap, adding |A| and |B| counts the elements of <M>{"A \\cap B"}</M> twice, so{" "}
          <M>{"|A \\cup B| = |A| + |B| - |A \\cap B|"}</M>. The numbers from 1 to 100 divisible by 2 or by 3 number{" "}
          <M>{"50 + 33 - 16 = 67"}</M>. The next chapter extends this to any number of sets, the principle of
          inclusion–exclusion.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "functions",
      rung: "check",
      prompt: <p>How many functions are there from a 3-element set to a 4-element set?</p>,
      answer: { kind: "numeric", value: 64 },
    },
    {
      key: "subsets",
      rung: "check",
      prompt: <p>How many subsets does a 5-element set have, including the empty set and the whole set?</p>,
      answer: { kind: "numeric", value: 32 },
    },
    {
      key: "plates",
      rung: "apply",
      prompt: <p>How many four-letter strings, using the 26 capital letters, have no letter repeated?</p>,
      answer: { kind: "numeric", value: 358800 },
    },
    {
      key: "pin",
      rung: "apply",
      prompt: <p>How many four-digit PINs, from 0000 to 9999, contain at least one 7?</p>,
      answer: { kind: "numeric", value: 3439 },
    },
    {
      key: "div",
      rung: "apply",
      prompt: <p>How many of the integers from 1 to 100 are divisible by 2 or by 5?</p>,
      answer: { kind: "numeric", value: 60 },
    },
    {
      key: "power",
      rung: "prove",
      prompt: (
        <p>
          Prove that an n-element set has <M>{"2^n"}</M> subsets in two ways: by a bijection with binary strings, and by
          induction on n.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Defines the map from subsets to strings of length n and explains why it is a bijection, then counts the strings by the product rule.",
          "For induction, splits the subsets of {1, …, n + 1} into those that contain n + 1 and those that do not, each in bijection with the subsets of {1, …, n}.",
          "Presents both arguments clearly. Small gaps in the induction do not matter if the idea is right.",
        ],
      },
    },
    {
      key: "chains",
      rung: "stretch",
      prompt: (
        <p>
          How many ordered pairs (A, B) of subsets of <M>{"\\{1, \\dots, n\\}"}</M> satisfy{" "}
          <M>{"A \\subseteq B"}</M>? Find a formula and prove it with the product rule.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that each element is in exactly one of three places: in A, in B but not A, or outside B.",
          "Concludes by the product rule that there are 3ⁿ pairs.",
          "Checks a small case, such as n = 1 giving 3. A correct formula with a sound reason earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the sum and product rules, why the product rule needs the number of choices at each stage to be fixed, how bijections and complements make counting easier, and how to count the passwords in the puzzle.",

  glimpse: (
    <p>
      The next lesson uses these rules to count arrangements and selections, with and without repetition. Probability uses
      counting to find the chance of equally likely outcomes.
    </p>
  ),
};
