import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SubstitutionViz } from "@/components/viz/SubstitutionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.6.4",
  minutes: 85,
  links: {
    revisits: ["m2.4.3", "m2.6.1"],
    foreshadows: ["m2.7.2", "m5.5.3"],
  },

  puzzle: (
    <>
      <p>
        The fundamental theorem turns integration into a search for antiderivatives. Some are easy to spot. But what
        function has derivative <M>{"2x\\cos(x^2)"}</M>? Or <M>{"\\dfrac{2x}{1 + x^2}"}</M>?
      </p>
      <p>
        Every differentiation rule, read backwards, should give an integration rule. The chain rule is the one that
        builds the most complicated derivatives. What does it look like in reverse?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The chain rule says that <M>{"\\sin(x^2)"}</M> has derivative <M>{"\\cos(x^2) \\cdot 2x"}</M>. So{" "}
        <M>{"2x\\cos(x^2)"}</M> is a derivative in disguise: an outer function evaluated at <M>{"u = x^2"}</M>, times the
        derivative of the inside. Substitution removes the disguise. Geometrically, changing variable from x to u stretches
        the axis, and the factor <M>{"u'(x)"}</M> is exactly the stretch. Move the strip below and compare the areas.
      </p>
      <SubstitutionViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="substitution">
        <p>
          Let g have a continuous derivative on <M>{"[a, b]"}</M>, and let f be continuous on the range of g. Then
        </p>
        <MD>{"\\int_a^b f(g(x))\\,g'(x)\\,dx = \\int_{g(a)}^{g(b)} f(u)\\,du."}</MD>
        <p>For indefinite integrals: if F is an antiderivative of f, then <M>{"\\int f(g(x))\\,g'(x)\\,dx = F(g(x)) + C"}</M>.</p>
      </Theorem>
      <Proof>
        <p>
          Let F be an antiderivative of f. By the chain rule, <M>{"(F \\circ g)' = f(g(x))\\,g'(x)"}</M>, so{" "}
          <M>{"F \\circ g"}</M> is an antiderivative of the left integrand. By the fundamental theorem, both sides equal{" "}
          <M>{"F(g(b)) - F(g(a))"}</M>.
        </p>
      </Proof>

      <Remark title="the bookkeeping">
        <p>
          Leibniz&rsquo;s notation makes the method almost automatic. Put <M>{"u = g(x)"}</M>; then{" "}
          <M>{"\\frac{du}{dx} = g'(x)"}</M>, which we write as <M>{"du = g'(x)\\,dx"}</M>. Replace every x in the integral by
          an expression in u, replace <M>{"g'(x)\\,dx"}</M> by du, and change the limits from a and b to{" "}
          <M>{"g(a)"}</M> and <M>{"g(b)"}</M>. The theorem is what makes this manipulation of differentials legitimate.
        </p>
      </Remark>

      <Example title="three substitutions">
        <ul>
          <li>
            <M>{"\\int_0^{\\sqrt{\\pi}} 2x\\cos(x^2)\\,dx"}</M>: put <M>{"u = x^2"}</M>, <M>{"du = 2x\\,dx"}</M>; the limits
            become 0 and π. The integral is <M>{"\\int_0^\\pi \\cos u\\,du = \\sin \\pi - \\sin 0 = 0"}</M>.
          </li>
          <li>
            <M>{"\\int \\frac{2x}{1 + x^2}\\,dx"}</M>: put <M>{"u = 1 + x^2"}</M>. This is{" "}
            <M>{"\\int \\frac{du}{u} = \\ln u + C = \\ln(1 + x^2) + C"}</M>.
          </li>
          <li>
            <M>{"\\int_0^{1} x\\sqrt{1 - x^2}\\,dx"}</M>: put <M>{"u = 1 - x^2"}</M>, <M>{"du = -2x\\,dx"}</M>, so{" "}
            <M>{"x\\,dx = -\\tfrac{1}{2}du"}</M>, and the limits become 1 and 0. The integral is{" "}
            <M>{"-\\tfrac{1}{2}\\int_1^0 \\sqrt{u}\\,du = \\tfrac{1}{2}\\int_0^1 \\sqrt{u}\\,du = \\tfrac{1}{3}"}</M>.
          </li>
        </ul>
      </Example>

      <Example title="a missing factor">
        <p>
          A constant factor can be repaired; a variable one cannot. In <M>{"\\int \\cos(3x)\\,dx"}</M>, put{" "}
          <M>{"u = 3x"}</M>, so <M>{"dx = \\tfrac{1}{3}du"}</M> and the answer is <M>{"\\tfrac{1}{3}\\sin(3x) + C"}</M>.
          But in <M>{"\\int \\cos(x^2)\\,dx"}</M> the factor 2x is absent, and no substitution helps: this integral has no
          formula in terms of the familiar functions at all.
        </p>
      </Example>

      <Example title="a substitution running the other way">
        <p>
          Sometimes it helps to write x in terms of a new variable. For the area of a quarter of the unit circle,{" "}
          <M>{"\\int_0^1 \\sqrt{1 - x^2}\\,dx"}</M>, put <M>{"x = \\sin \\theta"}</M>, so{" "}
          <M>{"dx = \\cos\\theta\\,d\\theta"}</M> and <M>{"\\sqrt{1 - x^2} = \\cos\\theta"}</M> for θ between 0 and{" "}
          <M>{"\\pi/2"}</M>. The integral becomes <M>{"\\int_0^{\\pi/2} \\cos^2\\theta\\,d\\theta"}</M>, which the next
          chapter shows is <M>{"\\pi/4"}</M>, as it must be.
        </p>
      </Example>

      <Remark title="symmetry">
        <p>
          Substituting <M>{"u = -x"}</M> shows that if f is odd, <M>{"\\int_{-a}^{a} f = 0"}</M>, and if f is even,{" "}
          <M>{"\\int_{-a}^{a} f = 2\\int_0^a f"}</M>. So <M>{"\\int_{-1}^{1} x^3 \\cos x\\,dx = 0"}</M> without any
          calculation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "spot",
      rung: "check",
      prompt: (
        <p>
          To find <M>{"\\int 3x^2 (x^3 + 1)^5\\,dx"}</M>, which substitution should you make?
        </p>
      ),
      answer: { kind: "choice", options: ["u = x³ + 1", "u = 3x²", "u = (x³ + 1)⁵", "u = x²"], correct: [0] },
    },
    {
      key: "limits",
      rung: "check",
      prompt: (
        <p>
          In <M>{"\\int_1^2 2x\\,e^{x^2}\\,dx"}</M>, put <M>{"u = x^2"}</M>. What is the new upper limit?
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "power",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_0^1 3x^2 (x^3 + 1)^2\\,dx"}</M>. (Give a decimal or a fraction.)
        </p>
      ),
      answer: { kind: "numeric", value: 7 / 3, tolerance: 0.001 },
    },
    {
      key: "anti",
      rung: "apply",
      prompt: (
        <p>
          Find the antiderivative F of <M>{"x\\cos(x^2)"}</M> with <M>{"F(0) = 0"}</M>.
        </p>
      ),
      answer: { kind: "expression", value: "sin(x^2)/2", variables: ["x"] },
    },
    {
      key: "log",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_0^{\\pi/3} \\tan x\\,dx"}</M>, writing <M>{"\\tan x = \\sin x / \\cos x"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: Math.log(2), tolerance: 0.001 },
    },
    {
      key: "odd",
      rung: "prove",
      prompt: (
        <p>
          Prove that if f is continuous and odd on <M>{"[-a, a]"}</M>, then <M>{"\\int_{-a}^{a} f(x)\\,dx = 0"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Splits the integral at 0, into the integral from −a to 0 and the integral from 0 to a.",
          "Substitutes u = −x in the first piece and uses f(−u) = −f(u) to show it equals minus the integral of f from 0 to a.",
          "Concludes that the two pieces cancel.",
        ],
      },
    },
    {
      key: "circle",
      rung: "stretch",
      prompt: (
        <p>
          Use the substitution <M>{"x = r\\sin\\theta"}</M> to show that <M>{"\\int_{-r}^{r} \\sqrt{r^2 - x^2}\\,dx"}</M>{" "}
          equals <M>{"\\tfrac{1}{2}\\pi r^2"}</M>, the area of a half-disc. You may use{" "}
          <M>{"\\int_{-\\pi/2}^{\\pi/2} \\cos^2\\theta\\,d\\theta = \\pi/2"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Substitutes x = r sin θ, with dx = r cos θ dθ, and changes the limits to −π/2 and π/2.",
          "Notes that √(r² − x²) = r cos θ because cos θ ≥ 0 on that interval.",
          "Reduces the integral to r² times the integral of cos² θ, and gets πr²/2.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how substitution is the chain rule run backwards, and why the factor g′(x) must be present for it to work.",

  glimpse: (
    <p>
      The next chapter builds a toolkit on this idea, including trigonometric substitutions. In Multivariable Calculus
      and Vector Analysis, substitution becomes the change of variables formula for multiple integrals, where the
      stretching factor g′(x) becomes the determinant of a matrix of derivatives, the Jacobian.
    </p>
  ),
};
