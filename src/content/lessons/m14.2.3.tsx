import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { HammingViz } from "@/components/viz/HammingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.2.3",
  minutes: 80,
  links: {
    revisits: ["m14.2.2", "m8.1.1", "m3.4.4"],
    foreshadows: ["m14.3.1", "m14.5.1", "m14.4.1"],
  },

  puzzle: (
    <>
      <p>
        A space probe sends pictures across billions of kilometres, and cosmic noise flips some of the bits. Asking for a
        resend takes hours. Can the message be sent so that the receiver can find and fix the flipped bits alone?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Encode four bits, corrupt one bit of the codeword, and watch the syndrome locate it.</p>
      <HammingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="linear codes">
        <p>
          A <strong>linear code</strong> of length <M>{"n"}</M> and dimension <M>{"k"}</M> over <M>{"\\mathbb{F}_q"}</M> is a{" "}
          <M>{"k"}</M>-dimensional subspace <M>{"C \\subseteq \\mathbb{F}_q^n"}</M>. The <strong>Hamming distance</strong>{" "}
          <M>{"d(x, y)"}</M> is the number of places where <M>{"x"}</M> and <M>{"y"}</M> differ, and the minimum distance{" "}
          <M>{"d"}</M> of <M>{"C"}</M> is the least distance between distinct codewords, which for a linear code is the least
          number of non-zero entries in a non-zero codeword.
        </p>
      </Definition>

      <Theorem title="correcting errors">
        <p>
          A code with minimum distance <M>{"d"}</M> can correct up to <M>{"t = \\lfloor (d-1)/2 \\rfloor"}</M> errors, by
          decoding a received word to the nearest codeword.
        </p>
      </Theorem>

      <Proof>
        <p>
          If a codeword <M>{"c"}</M> is sent and at most <M>{"t"}</M> errors occur, the received <M>{"r"}</M> has{" "}
          <M>{"d(r, c) \\le t"}</M>. Any other codeword <M>{"c'"}</M> has{" "}
          <M>{"d(r, c') \\ge d(c, c') - d(r, c) \\ge d - t > t"}</M> by the triangle inequality, so <M>{"c"}</M> is the unique
          nearest codeword.
        </p>
      </Proof>

      <Example title="the Hamming code">
        <p>The Hamming <M>{"[7, 4, 3]"}</M> code over <M>{"\\mathbb{F}_2"}</M> is the null space of</p>
        <MD>{"H = \\begin{pmatrix} 0&0&0&1&1&1&1 \\\\ 0&1&1&0&0&1&1 \\\\ 1&0&1&0&1&0&1 \\end{pmatrix},"}</MD>
        <p>
          whose columns are 1 to 7 in binary. If <M>{"r = c + e_i"}</M> has one error at position <M>{"i"}</M>, the syndrome{" "}
          <M>{"Hr = He_i"}</M> is column <M>{"i"}</M>, the binary form of <M>{"i"}</M>. Since the columns are distinct and
          non-zero, no codeword has weight 1 or 2, so <M>{"d = 3"}</M> and one error can be corrected.
        </p>
      </Example>

      <Remark title="Reed-Solomon codes">
        <p>
          Over a larger field <M>{"\\mathbb{F}_q"}</M>, encode a message as a polynomial <M>{"f"}</M> of degree below{" "}
          <M>{"k"}</M> and send its values at <M>{"n"}</M> distinct points. Two distinct such polynomials agree in at most{" "}
          <M>{"k - 1"}</M> points, so <M>{"d = n - k + 1"}</M>, the best possible. These codes protect CDs, QR codes and
          deep-space transmissions, and need fields like <M>{"\\mathbb{F}_{256}"}</M>, where each element is a byte.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dist",
      rung: "check",
      prompt: <p>What is the Hamming distance between 1011010 and 1001011?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "t",
      rung: "check",
      prompt: <p>How many errors can a code with minimum distance 5 correct?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "size",
      rung: "apply",
      prompt: <p>How many codewords does the Hamming <M>{"[7, 4]"}</M> code over <M>{"\\mathbb{F}_2"}</M> have?</p>,
      answer: { kind: "numeric", value: 16, tolerance: 0 },
    },
    {
      key: "syn",
      rung: "apply",
      prompt: <p>A received word for the Hamming code has syndrome 101 in binary. Assuming one error, at which position is it?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "rs",
      rung: "apply",
      prompt: <p>A Reed-Solomon code over <M>{"\\mathbb{F}_{256}"}</M> has <M>{"n = 255"}</M> and <M>{"k = 223"}</M>. What is its minimum distance?</p>,
      answer: { kind: "numeric", value: 33, tolerance: 0 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove that a code with minimum distance <M>{"d"}</M> corrects up to <M>{"\\lfloor (d-1)/2 \\rfloor"}</M> errors.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lets t = ⌊(d − 1)/2⌋ and supposes c was sent and r received with d(r, c) ≤ t.",
          "Uses the triangle inequality to show every other codeword is at distance more than t from r.",
          "Concludes nearest-codeword decoding recovers c.",
        ],
      },
    },
    {
      key: "minw",
      rung: "stretch",
      prompt: <p>Show that for a linear code the minimum distance equals the least weight of a non-zero codeword.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes d(x, y) = wt(x − y) and that x − y is a codeword when x and y are.",
          "Concludes the two minima are over the same set of values.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a linear code and its minimum distance are, why distance d lets you correct ⌊(d − 1)/2⌋ errors, how the Hamming code's syndrome locates an error, and why Reed-Solomon codes need larger finite fields.",

  glimpse: (
    <p>
      The next chapter returns to field theory with separability and normality, preparing for Galois theory. Modules over
      rings later generalise the linear algebra of codes.
    </p>
  ),
};
