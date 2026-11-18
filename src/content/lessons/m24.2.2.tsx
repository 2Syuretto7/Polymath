import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { LocalFractionsViz } from "@/components/viz/LocalFractionsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m24.2.2",
  minutes: 85,
  links: {
    revisits: ["m24.2.1", "m24.1.2", "m7.6.4"],
    foreshadows: ["m24.2.3", "m24.3.3", "m24.4.3"],
  },

  puzzle: (
    <>
      <p>
        From ℤ we build ℚ by allowing division by every non-zero integer. What if we allow division only by odd numbers? The
        fractions a/b with b odd form a ring. Which of its elements have inverses, and what has happened to the prime 3, or
        to the prime 2?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Click fractions a/b to see whether they lie in ℤ localised at p, and whether they are units.</p>
      <LocalFractionsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="localisation">
        <p>
          Let <M>S</M> be a multiplicative subset of a commutative ring <M>R</M>, containing 1. The ring{" "}
          <M>{"S^{-1}R"}</M> consists of fractions <M>{"r/s"}</M>, with
        </p>
        <MD>{"\\frac{r}{s} = \\frac{r'}{s'} \\iff t(rs' - r's) = 0 \\text{ for some } t \\in S,"}</MD>
        <p>
          added and multiplied as usual. The extra <M>t</M> is needed when <M>R</M> has zero divisors. For a prime{" "}
          <M>P</M>, take <M>{"S = R \\setminus P"}</M> to get the <strong>localisation at P</strong>, written{" "}
          <M>{"R_P"}</M>.
        </p>
      </Definition>

      <Theorem title="universal property">
        <p>
          The map <M>{"R \\to S^{-1}R"}</M>, <M>{"r \\mapsto r/1"}</M>, sends every element of <M>S</M> to a unit, and any
          ring homomorphism <M>{"R \\to T"}</M> doing this factors through it uniquely. The field of fractions of a domain is
          the case <M>{"S = R \\setminus \\{0\\}"}</M>.
        </p>
      </Theorem>

      <Example title="local rings">
        <p>
          <M>{"\\mathbb{Z}_{(p)}"}</M>, the fractions with denominator prime to <M>p</M>, has exactly one maximal ideal,{" "}
          <M>{"p\\mathbb{Z}_{(p)}"}</M>: every element outside it is a unit. In general <M>{"R_P"}</M> is a{" "}
          <strong>local ring</strong>, with unique maximal ideal <M>{"PR_P"}</M>, and the prime ideals of <M>{"S^{-1}R"}</M>{" "}
          correspond to the primes of <M>R</M> not meeting <M>S</M>. Localising at <M>P</M> keeps only the primes inside{" "}
          <M>P</M>: it zooms in on a point.
        </p>
      </Example>

      <Remark title="local to global">
        <p>
          Many properties are local: a module is zero exactly when all its localisations at maximal ideals are zero, and a
          map is injective or surjective exactly when it is so after every such localisation. In geometry,{" "}
          <M>{"\\mathbb{C}[x]_{(x - a)}"}</M> is the ring of rational functions defined near a.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does localising R at a multiplicative set S do?</p>,
      answer: { kind: "choice", options: ["Makes every element of S invertible, as universally as possible", "Removes S from R", "Quotients R by S", "Adjoins a square root of each element of S"], correct: [0] },
    },
    {
      key: "local",
      rung: "check",
      prompt: <p>What is special about a local ring?</p>,
      answer: { kind: "choice", options: ["It has exactly one maximal ideal", "It is a field", "It has no prime ideals", "It is finite"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, localising at 2, is 3/5 a unit of ℤ₍₂₎?</p>,
      answer: { kind: "choice", options: ["Yes, with inverse 5/3", "No, it is in the maximal ideal", "No, it is not in ℤ₍₂₎", "Only if 5 is even"], correct: [0] },
    },
    {
      key: "ideal",
      rung: "apply",
      prompt: <p>Which element lies in the maximal ideal of ℤ₍₃₎?</p>,
      answer: { kind: "choice", options: ["6/5", "5/6", "2/7", "1"], correct: [0] },
    },
    {
      key: "frac",
      rung: "apply",
      prompt: <p>Which localisation of ℤ is ℚ?</p>,
      answer: { kind: "choice", options: ["At the multiplicative set of non-zero integers", "At the prime (2)", "At the set {1}", "At the even numbers"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that ℤ₍ₚ₎ is a local ring with maximal ideal pℤ₍ₚ₎.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes an element in lowest terms a/b with p not dividing b.",
          "Shows that if p does not divide a, then b/a is in ℤ₍ₚ₎, so a/b is a unit.",
          "Concludes the non-units are exactly the a/b with p dividing a, which form the ideal pℤ₍ₚ₎; a ring whose non-units form an ideal is local.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does the definition of equality of fractions need the extra factor t when R has zero divisors?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that without t the relation may fail to be transitive.",
          "Gives or describes an example, such as R = ℤ/6 with S = {1, 2, 4}, where 3/1 must equal 0/1 because 2 · 3 = 0.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Hilbert showed in 1890 that every system of polynomial equations, however infinite, is equivalent to a finite one.
        The key property of the polynomial ring has his name.
      </p>
      <p>
        Next, Noetherian rings and the Hilbert basis theorem: the ascending chain condition, finite generation of ideals,
        and why polynomial rings over Noetherian rings are Noetherian.
      </p>
    </>
  ),
};
