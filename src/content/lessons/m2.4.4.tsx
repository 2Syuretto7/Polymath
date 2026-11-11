import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ImplicitViz } from "@/components/viz/ImplicitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.4.4",
  minutes: 75,
  links: {
    revisits: ["m0.5.4", "m0.7.2"],
    foreshadows: ["m2.5.4", "m5.4.2"],
  },

  puzzle: (
    <>
      <p>
        The circle <M>{"x^2 + y^2 = 25"}</M> passes through <M>{"(3, 4)"}</M>. What is the slope of its tangent there? You
        could solve for y, take the top half <M>{"y = \\sqrt{25 - x^2}"}</M>, and differentiate.
      </p>
      <p>
        Now try the curve <M>{"x^3 + y^3 = 6xy"}</M>, which passes through <M>{"(3, 3)"}</M>. Solving for y means solving a
        cubic, and the curve is not the graph of any single function. Does it still have a slope at <M>{"(3, 3)"}</M>, and
        can you find it without ever solving for y?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Near most of its points, a curve looks like the graph of a function, even if the whole curve does not. So pretend
        that, near the point, y is some differentiable function of x, though you do not know its formula. The equation then
        holds for every x nearby, so both sides have the same derivative. Differentiate both sides, using the chain rule
        whenever y appears, and solve for <M>{"y'"}</M>.
      </p>
      <ImplicitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="implicit differentiation">
        <p>
          An equation in x and y defines y <strong>implicitly</strong> near a point if, near that point, the points of the
          curve form the graph of a function <M>{"y(x)"}</M>. To find <M>{"y'"}</M>: differentiate both sides of the equation
          with respect to x, treating y as a function of x, and solve the resulting equation for <M>{"y'"}</M>. By the chain
          rule, any expression in y picks up a factor of <M>{"y'"}</M>; for instance
        </p>
        <MD>{"\\frac{d}{dx}\\, y^2 = 2y\\, y', \\qquad \\frac{d}{dx}\\, \\sin y = \\cos y \\cdot y', \\qquad \\frac{d}{dx}\\, xy = y + x y'."}</MD>
      </Definition>

      <Example title="the circle">
        <p>Differentiating <M>{"x^2 + y^2 = 25"}</M> gives</p>
        <MD>{"2x + 2y\\, y' = 0, \\qquad \\text{so} \\qquad y' = -\\frac{x}{y} \\quad (y \\ne 0)."}</MD>
        <p>
          At <M>{"(3, 4)"}</M> the slope is <M>{"-3/4"}</M>. The explicit route agrees:{" "}
          <M>{"\\dfrac{d}{dx}\\sqrt{25 - x^2} = \\dfrac{-x}{\\sqrt{25 - x^2}}"}</M>, which is <M>{"-3/4"}</M> at{" "}
          <M>{"x = 3"}</M>. The implicit formula is better in one way: it serves the top and bottom halves of the circle at
          once, since y carries the sign.
        </p>
      </Example>

      <Example title="the folium of Descartes">
        <p>Differentiating <M>{"x^3 + y^3 = 6xy"}</M>, with the product rule on the right:</p>
        <MD>{"3x^2 + 3y^2 y' = 6y + 6x y', \\qquad \\text{so} \\qquad y' = \\frac{2y - x^2}{y^2 - 2x}."}</MD>
        <p>
          At <M>{"(3, 3)"}</M> this is <M>{"(6 - 9)/(9 - 6) = -1"}</M>, and the tangent is <M>{"x + y = 6"}</M>. We never
          needed a formula for y.
        </p>
      </Example>

      <Example title="a tilted ellipse">
        <p>
          For <M>{"x^2 + xy + y^2 = 12"}</M>: <M>{"2x + (y + xy') + 2y\\,y' = 0"}</M>, so{" "}
          <M>{"y' = -\\dfrac{2x + y}{x + 2y}"}</M>. At <M>{"(2, 2)"}</M>, which is on the curve since{" "}
          <M>{"4 + 4 + 4 = 12"}</M>, the slope is <M>{"-1"}</M>.
        </p>
      </Example>

      <Remark title="the hidden assumption">
        <p>
          The method assumes that y really is a differentiable function of x near the point. Where that fails, the formula
          says so by breaking down. On the circle at <M>{"(5, 0)"}</M>, the denominator y is 0: the tangent is vertical, and
          near that point the circle is not the graph of any function of x. Worse, the method can produce nonsense. Applied
          to <M>{"x^2 + y^2 = -1"}</M>, it gives <M>{"y' = -x/y"}</M> confidently, though the equation has no solutions at
          all. Implicit differentiation finds the slope if there is one; it does not prove that there is one.
        </p>
      </Remark>

      <Theorem title="powers with rational exponents">
        <p>
          For a rational number <M>{"r = p/q"}</M> and <M>{"x > 0"}</M>, <M>{"\\dfrac{d}{dx} x^{r} = r x^{r - 1}"}</M>.
        </p>
      </Theorem>
      <p>
        Let <M>{"y = x^{p/q}"}</M>, so that <M>{"y^q = x^p"}</M>. Assuming y is differentiable, which the next lesson
        proves, differentiate both sides: <M>{"q y^{q-1} y' = p x^{p-1}"}</M>. So
      </p>
      <MD>{"y' = \\frac{p}{q} \\cdot \\frac{x^{p-1}}{y^{q-1}} = \\frac{p}{q} \\cdot \\frac{x^{p-1}}{x^{p - p/q}} = \\frac{p}{q}\\, x^{p/q - 1}."}</MD>
      <p>
        The power rule, proved for whole numbers by the binomial theorem, now covers every rational power, such as{" "}
        <M>{"\\dfrac{d}{dx}\\sqrt[3]{x^2} = \\tfrac{2}{3} x^{-1/3}"}</M>.
      </p>

      <Remark title="when is it safe?">
        <p>
          Write the curve as <M>{"F(x, y) = 0"}</M>. The formula for <M>{"y'"}</M> always comes out as a fraction whose
          denominator is what you get by differentiating F in y alone, holding x fixed. The implicit function theorem says
          that when this denominator is not 0 at a point of the curve, and F is smooth enough, the curve near that point
          really is the graph of a differentiable function. It is one of the central theorems of Multivariable Calculus and
          Vector Analysis.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "circle",
      rung: "check",
      prompt: (
        <p>
          What is the slope of the tangent to <M>{"x^2 + y^2 = 25"}</M> at <M>{"(3, 4)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: -0.75 },
    },
    {
      key: "chain",
      rung: "check",
      prompt: (
        <p>
          If y is a function of x, what is <M>{"\\dfrac{d}{dx}\\, y^3"}</M>?
        </p>
      ),
      answer: { kind: "choice", options: ["3y²", "3y² y′", "3x²", "(y′)³"], correct: [1] },
    },
    {
      key: "hyperbola",
      rung: "apply",
      prompt: (
        <p>
          Find the slope of the curve <M>{"xy = 6"}</M> at the point <M>{"(2, 3)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: -1.5 },
    },
    {
      key: "cubic",
      rung: "apply",
      prompt: (
        <p>
          Find the slope of the curve <M>{"x^3 + y^3 = 9"}</M> at the point <M>{"(1, 2)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: -0.25 },
    },
    {
      key: "rational",
      rung: "apply",
      prompt: (
        <p>
          Differentiate <M>{"x^{2/3}"}</M> for <M>{"x > 0"}</M>.
        </p>
      ),
      answer: { kind: "expression", value: "(2/3) x^(-1/3)", variables: ["x"] },
    },
    {
      key: "radius",
      rung: "prove",
      prompt: (
        <p>
          Use implicit differentiation to show that at every point <M>{"(a, b)"}</M> of the circle{" "}
          <M>{"x^2 + y^2 = r^2"}</M> with <M>{"b \\ne 0"}</M>, the tangent is perpendicular to the radius from the origin.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Differentiates to get 2x + 2y y′ = 0, so the slope at (a, b) is −a/b.",
          "Notes that the radius to (a, b) has slope b/a (or handles a = 0 separately).",
          "Shows the product of the slopes is −1, or argues with direction vectors, so the lines are perpendicular.",
        ],
      },
    },
    {
      key: "second",
      rung: "stretch",
      prompt: (
        <p>
          On the circle <M>{"x^2 + y^2 = 25"}</M>, find <M>{"y''"}</M> in terms of y alone, by differentiating{" "}
          <M>{"y' = -x/y"}</M> again. What does the sign of your answer say about the shape of the top and bottom halves?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Differentiates −x/y with the quotient rule to get −(y − x y′)/y².",
          "Substitutes y′ = −x/y and uses x² + y² = 25 to reach y″ = −25/y³.",
          "Notes that y″ < 0 on the top half (bending down) and y″ > 0 on the bottom half (bending up).",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how you can find the slope of a curve like x³ + y³ = 6xy without solving for y, and why the chain rule is the key step.",

  glimpse: (
    <p>
      Implicit differentiation is the engine of related-rates problems in the next chapter, where several quantities tied by
      one equation all change with time. Multivariable Calculus and Vector Analysis turns the hidden assumption into a
      theorem: the implicit function theorem says exactly when an equation defines a function.
    </p>
  ),
};
