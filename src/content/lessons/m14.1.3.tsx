import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SplitFieldViz } from "@/components/viz/SplitFieldViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.1.3",
  minutes: 85,
  links: {
    revisits: ["m14.1.2", "m13.3.2", "m7.7.5"],
    foreshadows: ["m14.3.2", "m14.3.3", "m14.4.3"],
  },

  puzzle: (
    <>
      <p>
        The polynomial <M>{"x^3 - 2"}</M> has one real root, <M>{"\\sqrt[3]{2}"}</M>, and two complex ones. The field{" "}
        <M>{"\\mathbb{Q}(\\sqrt[3]{2})"}</M> lies inside the real numbers, so it cannot contain the complex roots. What is the
        smallest field containing all three, and how big is it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Adjoin numbers to ℚ and watch which roots the field contains.</p>
      <SplitFieldViz />
    </>
  ),

  theory: (
    <>
      <Definition title="splitting field">
        <p>
          Let <M>{"f \\in K[x]"}</M> have degree <M>{"n \\ge 1"}</M>. An extension <M>{"L/K"}</M> is a{" "}
          <strong>splitting field</strong> of <M>{"f"}</M> if <M>{"f"}</M> factors into linear factors in <M>{"L[x]"}</M>,{" "}
          <M>{"f = c(x - \\alpha_1)\\cdots(x - \\alpha_n)"}</M>, and <M>{"L = K(\\alpha_1, \\dots, \\alpha_n)"}</M>.
        </p>
      </Definition>

      <Theorem title="existence">
        <p>
          Every <M>{"f \\in K[x]"}</M> of degree <M>{"n"}</M> has a splitting field <M>{"L"}</M>, with{" "}
          <M>{"[L : K] \\le n!"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Kronecker&rsquo;s construction: let <M>{"g"}</M> be an irreducible factor of <M>{"f"}</M>. Then{" "}
          <M>{"K_1 = K[x]/(g)"}</M> is a field of degree <M>{"\\deg g \\le n"}</M> over <M>{"K"}</M> in which the class of{" "}
          <M>{"x"}</M> is a root of <M>{"f"}</M>. Over <M>{"K_1"}</M>, <M>{"f = (x - \\alpha_1) f_1"}</M> with{" "}
          <M>{"\\deg f_1 = n - 1"}</M>. By induction <M>{"f_1"}</M> has a splitting field over <M>{"K_1"}</M> of degree at most{" "}
          <M>{"(n-1)!"}</M>, and the tower law gives the bound.
        </p>
      </Proof>

      <Theorem title="uniqueness">
        <p>
          Any two splitting fields of <M>{"f"}</M> over <M>{"K"}</M> are isomorphic by an isomorphism fixing <M>{"K"}</M>. More
          generally, an isomorphism <M>{"K \\to K'"}</M> extends to an isomorphism between a splitting field of{" "}
          <M>{"f"}</M> and one of its image <M>{"f'"}</M>.
        </p>
      </Theorem>

      <Example title="x³ − 2">
        <p>
          The roots are <M>{"\\sqrt[3]{2}, \\omega\\sqrt[3]{2}, \\omega^2\\sqrt[3]{2}"}</M>, where{" "}
          <M>{"\\omega = e^{2\\pi i/3}"}</M>. The splitting field is <M>{"\\mathbb{Q}(\\sqrt[3]{2}, \\omega)"}</M>. It contains{" "}
          <M>{"\\mathbb{Q}(\\sqrt[3]{2})"}</M> of degree 3 and <M>{"\\mathbb{Q}(\\omega)"}</M> of degree 2, so its degree is
          divisible by 6, and it is at most <M>{"3 \\cdot 2"}</M>: exactly 6, the maximum <M>{"3!"}</M>.
        </p>
      </Example>

      <Remark title="algebraic closure">
        <p>
          Every field has an algebraic closure, an algebraic extension in which every polynomial splits, unique up to
          isomorphism. For <M>{"\\mathbb{Q}"}</M>, it is the field of all algebraic numbers inside <M>{"\\mathbb{C}"}</M>; that{" "}
          <M>{"\\mathbb{C}"}</M> is itself algebraically closed is the fundamental theorem of algebra. Splitting fields are the
          finite pieces from which Galois theory is built.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "deg2",
      rung: "check",
      prompt: <p>What is the degree over <M>{"\\mathbb{Q}"}</M> of the splitting field of <M>{"x^2 - 2"}</M>?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "cube",
      rung: "check",
      prompt: <p>What is the degree over <M>{"\\mathbb{Q}"}</M> of the splitting field of <M>{"x^3 - 2"}</M>?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "real",
      rung: "apply",
      prompt: <p>Why is <M>{"\\mathbb{Q}(\\sqrt[3]{2})"}</M> not the splitting field of <M>{"x^3 - 2"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "It lies inside ℝ, but two roots are not real.",
          "Its degree is too large.",
          "It does not contain ∛2.",
          "x³ − 2 is reducible.",
        ],
        correct: [0],
      },
    },
    {
      key: "four",
      rung: "apply",
      prompt: <p>What is the degree over <M>{"\\mathbb{Q}"}</M> of the splitting field of <M>{"x^4 - 2"}</M>?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "cyclo",
      rung: "apply",
      prompt: <p>What is the degree over <M>{"\\mathbb{Q}"}</M> of the splitting field of <M>{"x^3 - 1"}</M>?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "bound",
      rung: "prove",
      prompt: <p>Prove that a polynomial of degree <M>{"n"}</M> over <M>{"K"}</M> has a splitting field of degree at most <M>{"n!"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Adjoins a root of an irreducible factor using K[x]/(g), an extension of degree at most n.",
          "Factors off the linear term and applies induction to the remaining factor of degree n − 1.",
          "Combines the degrees with the tower law.",
        ],
      },
    },
    {
      key: "quad",
      rung: "stretch",
      prompt: <p>Show that the splitting field of any quadratic over <M>{"\\mathbb{Q}"}</M> is <M>{"\\mathbb{Q}(\\sqrt d)"}</M> for some rational <M>{"d"}</M>, and has degree 1 or 2.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the quadratic formula to write the roots in terms of the discriminant d.",
          "Notes both roots lie in ℚ(√d), which has degree 1 or 2 according to whether d is a rational square.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a splitting field is, how Kronecker's construction produces one of degree at most n!, why splitting fields are unique up to isomorphism, and why x³ − 2 has a splitting field of degree 6.",

  glimpse: (
    <p>
      The next lesson uses degrees to settle the ancient ruler-and-compass problems. Later, splitting fields reappear as normal
      extensions, the setting for the Galois correspondence.
    </p>
  ),
};
