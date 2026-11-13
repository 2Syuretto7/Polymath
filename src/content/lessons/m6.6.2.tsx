import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CauchyMVTViz } from "@/components/viz/CauchyMVTViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.6.2",
  minutes: 90,
  links: {
    revisits: ["m6.6.1", "m6.5.2", "m2.5.1"],
    foreshadows: ["m6.6.3", "m6.7.3", "m12.4.1"],
  },

  puzzle: (
    <>
      <p>
        A function whose derivative is zero everywhere must be constant. Every calculus student believes this, but the
        derivative is a limit at a single point, and constancy is a statement about every pair of points. How do we pass from
        infinitely many local facts to one global one? The answer is a theorem so central that most of the rest of
        differential calculus follows from it.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A curve is traced by the point <M>{"(g(t), f(t))"}</M>. Move the endpoints <M>{"a"}</M> and <M>{"b"}</M>, and look
        for the places where the tangent runs parallel to the chord.
      </p>
      <CauchyMVTViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Rolle's theorem">
        <p>
          If <M>{"f"}</M> is continuous on <M>{"[a, b]"}</M>, differentiable on <M>{"(a, b)"}</M>, and{" "}
          <M>{"f(a) = f(b)"}</M>, then <M>{"f'(c) = 0"}</M> for some <M>{"c \\in (a, b)"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          By the extreme value theorem, <M>{"f"}</M> attains a maximum and a minimum on <M>{"[a, b]"}</M>. If both occur at
          the endpoints, <M>{"f"}</M> is constant and any <M>{"c"}</M> works. Otherwise one occurs at an interior point{" "}
          <M>{"c"}</M>. At an interior maximum, the difference quotient <M>{"(f(x) - f(c))/(x - c)"}</M> is{" "}
          <M>{"\\le 0"}</M> for <M>{"x > c"}</M> and <M>{"\\ge 0"}</M> for <M>{"x < c"}</M>, so its limit is 0.
        </p>
      </Proof>

      <Theorem title="the mean value theorems">
        <p>
          <strong>Mean value theorem.</strong> If <M>{"f"}</M> is continuous on <M>{"[a, b]"}</M> and differentiable on{" "}
          <M>{"(a, b)"}</M>, then for some <M>{"c \\in (a, b)"}</M>,
        </p>
        <MD>{"f'(c) = \\frac{f(b) - f(a)}{b - a}."}</MD>
        <p>
          <strong>Cauchy&rsquo;s mean value theorem.</strong> If <M>{"f"}</M> and <M>{"g"}</M> are both such functions, then
          for some <M>{"c \\in (a, b)"}</M>,
        </p>
        <MD>{"(f(b) - f(a))\\,g'(c) = (g(b) - g(a))\\,f'(c)."}</MD>
      </Theorem>

      <Proof>
        <p>
          Apply Rolle to <M>{"h(x) = (f(b) - f(a))(g(x) - g(a)) - (g(b) - g(a))(f(x) - f(a))"}</M>, which is 0 at both ends.
          Then <M>{"h'(c) = 0"}</M> is Cauchy&rsquo;s equation. Taking <M>{"g(x) = x"}</M> gives the ordinary mean value
          theorem.
        </p>
      </Proof>

      <Example title="consequences">
        <p>
          If <M>{"f' = 0"}</M> on an interval, then for any <M>{"x < y"}</M> in it,{" "}
          <M>{"f(y) - f(x) = f'(c)(y - x) = 0"}</M>, so <M>{"f"}</M> is constant. In the same way, <M>{"f' > 0"}</M> means{" "}
          <M>{"f"}</M> is strictly increasing, and <M>{"|f'| \\le L"}</M> means <M>{"f"}</M> is Lipschitz with constant{" "}
          <M>{"L"}</M>. Two functions with the same derivative differ by a constant, which is the uniqueness half of the
          fundamental theorem of calculus.
        </p>
      </Example>

      <Remark title="L'Hôpital's rule">
        <p>
          Cauchy&rsquo;s version proves L&rsquo;Hôpital&rsquo;s rule. If <M>{"f(a) = g(a) = 0"}</M>, then for{" "}
          <M>{"x"}</M> near <M>{"a"}</M> there is <M>{"c"}</M> between them with{" "}
          <M>{"\\frac{f(x)}{g(x)} = \\frac{f'(c)}{g'(c)}"}</M>. As <M>{"x \\to a"}</M>, also <M>{"c \\to a"}</M>, so if{" "}
          <M>{"f'/g'"}</M> has a limit, so does <M>{"f/g"}</M>, with the same value. Note that the hypotheses matter: the
          ordinary mean value theorem applied separately to <M>{"f"}</M> and <M>{"g"}</M> would give two different points.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mvt",
      rung: "check",
      prompt: (
        <p>
          For <M>{"f(x) = x^2"}</M> on <M>{"[1, 3]"}</M>, at what <M>{"c"}</M> does the mean value theorem hold?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "rolle",
      rung: "check",
      prompt: <p>Which hypothesis of Rolle&rsquo;s theorem fails for |x| on [−1, 1]?</p>,
      answer: {
        kind: "choice",
        options: ["Continuity on [−1, 1]", "Differentiability on (−1, 1)", "f(−1) = f(1)", "None; the theorem applies"],
        correct: [1],
      },
    },
    {
      key: "lip",
      rung: "apply",
      prompt: (
        <p>
          If <M>{"|f'(x)| \\le 3"}</M> for all <M>{"x"}</M> and <M>{"f(0) = 1"}</M>, what is the largest possible value of{" "}
          <M>{"f(2)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "hop",
      rung: "apply",
      prompt: (
        <p>
          Use L&rsquo;Hôpital&rsquo;s rule to find <M>{"\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 0.5, tolerance: 0.0001 },
    },
    {
      key: "roots",
      rung: "apply",
      prompt: (
        <p>
          A differentiable function has <M>{"f'(x) \\ne 0"}</M> for all <M>{"x"}</M>. At most how many real roots can it have?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that if <M>{"f' > 0"}</M> on an interval, then <M>{"f"}</M> is strictly increasing there. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes x < y in the interval.",
          "Applies the mean value theorem: f(y) − f(x) = f′(c)(y − x) for some c between them.",
          "Concludes f(y) − f(x) > 0 since both factors are positive.",
        ],
      },
    },
    {
      key: "sin",
      rung: "stretch",
      prompt: (
        <p>
          Use the mean value theorem to prove that <M>{"|\\sin x - \\sin y| \\le |x - y|"}</M> for all real{" "}
          <M>{"x, y"}</M>, and deduce that sine is uniformly continuous.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Applies the mean value theorem: sin x − sin y = cos(c)(x − y).",
          "Uses |cos c| ≤ 1 to get the inequality.",
          "Notes this is a Lipschitz condition, so δ = ε works and sine is uniformly continuous.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Rolle's theorem follows from the extreme value theorem, how the mean value theorem and Cauchy's version follow from Rolle, and why they prove that zero derivative means constant and give L'Hôpital's rule.",

  glimpse: (
    <p>
      The next lesson extends the mean value theorem to higher derivatives, giving Taylor&rsquo;s theorem with an explicit
      remainder. The mean value theorem is also the key step in proving the fundamental theorem of calculus, and in several
      variables it becomes an inequality rather than an equation.
    </p>
  ),
};
