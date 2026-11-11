import { M, MD } from "@/components/Math";
import { Example, Remark } from "@/components/lesson/Blocks";
import { LadderViz } from "@/components/viz/LadderViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.5.4",
  minutes: 75,
  links: {
    revisits: ["m2.4.4", "m2.4.3"],
    foreshadows: ["m10.1.4", "m5.2.3"],
  },

  puzzle: (
    <>
      <p>
        A ladder 5 m long leans against a wall. Its foot is pulled away from the wall at a steady 1 m per second. The top
        slides down the wall.
      </p>
      <p>
        Does the top slide at a steady speed too? If not, does it speed up or slow down? And what happens in the last
        instant, just before the ladder lies flat?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The foot and the top are tied together: whatever the time, the foot&rsquo;s distance x and the top&rsquo;s height
        y satisfy <M>{"x^2 + y^2 = 25"}</M>. Both change with time, so their rates of change are tied together too.
        Differentiating the equation with respect to time turns a relation between quantities into a relation between
        rates.
      </p>
      <LadderViz />
    </>
  ),

  theory: (
    <>
      <Remark title="the method">
        <ol>
          <li>Draw a picture. Name every quantity that changes, as a function of time t.</li>
          <li>Write an equation that relates them and holds at every moment.</li>
          <li>Differentiate both sides with respect to t, using the chain rule.</li>
          <li>Only now substitute the values at the moment you care about, and solve for the unknown rate.</li>
        </ol>
        <p>
          The order of the last two steps matters. If you substitute first, the quantities become constants, and their
          derivatives are all 0.
        </p>
      </Remark>

      <Example title="the ladder">
        <p>From <M>{"x^2 + y^2 = 25"}</M>,</p>
        <MD>{"2x \\frac{dx}{dt} + 2y \\frac{dy}{dt} = 0, \\qquad \\text{so} \\qquad \\frac{dy}{dt} = -\\frac{x}{y}\\,\\frac{dx}{dt}."}</MD>
        <p>
          When the foot is 3 m out, the top is 4 m up, and it falls at <M>{"3/4"}</M> m per second. When the foot is 4 m
          out, the top is 3 m up, and it falls at <M>{"4/3"}</M> m per second. The top speeds up, and as y approaches 0 its
          speed grows without bound.
        </p>
      </Example>

      <Remark title="when the model breaks">
        <p>
          A real ladder&rsquo;s top cannot move infinitely fast. The calculation is correct for the model, which assumes
          that the top stays in contact with the wall. A real ladder pulled this way leaves the wall before the end. The
          absurd answer is information: it tells you where the model stops describing the world.
        </p>
      </Remark>

      <Example title="a balloon">
        <p>
          Air is pumped into a spherical balloon at 100 cubic centimetres per second. How fast is the radius growing when
          the radius is 10 cm? From <M>{"V = \\tfrac{4}{3}\\pi r^3"}</M>,
        </p>
        <MD>{"\\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt}, \\qquad \\text{so} \\qquad \\frac{dr}{dt} = \\frac{100}{4\\pi \\cdot 100} = \\frac{1}{4\\pi} \\approx 0.08 \\text{ cm per second}."}</MD>
        <p>
          The factor <M>{"4\\pi r^2"}</M> is the area of the surface. Pumping in a fixed volume spreads a thinner layer
          over a larger balloon, so the radius grows ever more slowly.
        </p>
      </Example>

      <Example title="a conical tank">
        <p>
          Water flows at rate k into a tank shaped like a cone, point down, with height H and top radius R. When the water
          is h deep, its surface has radius <M>{"r = Rh/H"}</M> by similar triangles, so its volume is{" "}
          <M>{"V = \\tfrac{1}{3}\\pi r^2 h = \\tfrac{\\pi R^2}{3H^2} h^3"}</M>. Then
        </p>
        <MD>{"k = \\frac{dV}{dt} = \\frac{\\pi R^2}{H^2} h^2 \\frac{dh}{dt}, \\qquad \\frac{dh}{dt} = \\frac{k H^2}{\\pi R^2 h^2}."}</MD>
        <p>
          Using similar triangles to remove r before differentiating leaves one rate to find. You could also keep r and
          differentiate the relation <M>{"r = Rh/H"}</M> as well; both routes give the same answer.
        </p>
      </Example>

      <Remark title="rates in a chain">
        <p>
          Every related-rates problem is the chain rule in disguise. If y depends on x and x on t, then{" "}
          <M>{"\\dfrac{dy}{dt} = \\dfrac{dy}{dx} \\cdot \\dfrac{dx}{dt}"}</M>, the car and its fuel from the chain rule
          lesson. What is new is that the relation between x and y is often given by an equation rather than a formula, so
          implicit differentiation does the work.
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
          The radius of a circle grows at 2 cm per second. How fast, in square centimetres per second, is its area growing
          when the radius is 5 cm? (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 20 * Math.PI, tolerance: 0.001 },
    },
    {
      key: "order",
      rung: "check",
      prompt: <p>In a related-rates problem, when should you substitute the values at the moment of interest?</p>,
      answer: {
        kind: "choice",
        options: [
          "Before writing the equation",
          "After writing the equation but before differentiating",
          "After differentiating",
          "It makes no difference",
        ],
        correct: [2],
      },
    },
    {
      key: "ladder",
      rung: "apply",
      prompt: (
        <p>
          A 10 m ladder leans on a wall. Its foot slides away at 2 m per second. How fast, in m per second, is the top
          sliding down when the foot is 6 m from the wall?
        </p>
      ),
      answer: { kind: "numeric", value: 1.5 },
    },
    {
      key: "balloon",
      rung: "apply",
      prompt: (
        <p>
          Air is pumped into a spherical balloon at 100 cubic centimetres per second. How fast, in cm per second, is the
          radius growing when the radius is 5 cm? (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 1 / Math.PI, tolerance: 0.001 },
    },
    {
      key: "shadow",
      rung: "apply",
      prompt: (
        <p>
          A person 1.8 m tall walks away from a lamp post 6 m tall at 1.4 m per second. How fast, in m per second, is the
          length of their shadow growing?
        </p>
      ),
      answer: { kind: "numeric", value: 0.6 },
    },
    {
      key: "cone",
      rung: "prove",
      prompt: (
        <p>
          Water flows at rate k into a cone, point down, with height H and top radius R. Show that the depth h rises at
          rate <M>{"\\dfrac{kH^2}{\\pi R^2 h^2}"}</M>, and explain in words why the depth rises more slowly as the tank
          fills.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses similar triangles to write r = Rh/H and the volume as (πR²/3H²)h³.",
          "Differentiates with respect to t and solves for dh/dt.",
          "Explains that the surface gets wider as the water rises, so the same volume makes a thinner layer.",
        ],
      },
    },
    {
      key: "ladder-limit",
      rung: "stretch",
      prompt: (
        <p>
          For the 5 m ladder with its foot pulled at 1 m per second, show that the speed of the top tends to infinity as the
          top approaches the ground. Then argue, using the fact that the top is pushed against the wall only by the wall
          itself, why a real ladder must leave the wall before this happens.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Shows −dy/dt = x/y with x → 5 and y → 0, so the speed is unbounded.",
          "Notes that the top's acceleration (or the rate of change of its velocity) would have to grow without bound.",
          "Argues, informally, that the wall can push but cannot pull, so once the motion requires a pull the top leaves the wall. Any reasonable physical argument is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to find the speed of the top of a sliding ladder, why you differentiate before substituting numbers, and what the infinite speed at the end tells you.",

  glimpse: (
    <p>
      When the relation between rates is the thing you know, and the quantities themselves are unknown, you have a
      differential equation: Ordinary Differential Equations begins with exactly such models. Multivariable Calculus and
      Vector Analysis extends the chain rule to quantities that depend on several others at once.
    </p>
  ),
};
