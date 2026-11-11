import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { WorkAreaViz } from "@/components/viz/WorkAreaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.10.3",
  minutes: 80,
  links: {
    revisits: ["m2.6.3", "m2.10.1"],
    foreshadows: ["m5.6.1", "m5.6.2"],
  },

  puzzle: (
    <>
      <p>
        Pushing a box 5 metres with a steady force of 20 newtons takes 100 joules of work: force times distance. But the
        force needed to stretch a spring grows as it stretches, and the pull of the Earth weakens as a rocket climbs. When
        the force changes along the way, what does &ldquo;force times distance&rdquo; even mean?
      </p>
      <p>
        And a stranger question: is there a finite amount of work that lifts a body away from the Earth for ever?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Over a short enough stretch, any reasonable force is nearly constant, so the work there is nearly force times that
        short distance. Adding the pieces gives a Riemann sum, and in the limit an integral. On a graph of force against
        position, work is the area underneath. Try the three force laws below.
      </p>
      <WorkAreaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="work done by a varying force">
        <p>
          If a force <M>{"F(x)"}</M>, acting along a line, moves a body from <M>{"x = a"}</M> to <M>{"x = b"}</M>, the work
          done is
        </p>
        <MD>{"W = \\int_a^b F(x)\\,dx."}</MD>
        <p>
          Cut <M>{"[a, b]"}</M> into pieces of width <M>{"\\Delta x"}</M>. On each piece the force is about{" "}
          <M>{"F(x_i)"}</M>, so the work there is about <M>{"F(x_i)\\,\\Delta x"}</M>. The total is a Riemann sum, and the
          definition takes its limit, exactly as volumes were built from thin slices.
        </p>
      </Definition>

      <Example title="a spring">
        <p>
          Hooke&rsquo;s law says a spring stretched a distance x beyond its natural length pulls back with force{" "}
          <M>{"kx"}</M>. To stretch it from 0 to b we must supply that force, so
        </p>
        <MD>{"W = \\int_0^b kx\\,dx = \\tfrac{1}{2}kb^2."}</MD>
        <p>
          Doubling the stretch takes four times the work. The second centimetre costs three times as much as the first,
          because the spring is already pulling harder.
        </p>
      </Example>

      <Example title="emptying a tank">
        <p>
          A cylindrical tank of radius 1 m and height 2 m is full of water, and we pump it all out over the top. Water
          weighs about 9800 newtons per cubic metre. Here the force is not the thing that varies; the distance is. A thin
          layer at depth y has volume <M>{"\\pi\\,\\Delta y"}</M>, weighs <M>{"9800\\pi\\,\\Delta y"}</M>, and must be lifted y
          metres. So
        </p>
        <MD>{"W = \\int_0^2 9800\\pi\\,y\\,dy = 19600\\pi \\approx 61\\,600 \\text{ joules}."}</MD>
        <p>The method is the same: slice, find the work for one slice, and integrate.</p>
      </Example>

      <Example title="escaping the Earth">
        <p>
          Newton&rsquo;s law of gravitation says the pull on a body falls off as the square of its distance from the
          centre of the Earth. Measure distance x in Earth radii and force in units of the body&rsquo;s weight at the
          surface, so that <M>{"F(x) = 1/x^2"}</M>. Lifting it from the surface to x = b takes
        </p>
        <MD>{"W = \\int_1^b \\frac{dx}{x^2} = 1 - \\frac{1}{b}."}</MD>
        <p>
          As b grows the work approaches 1 and never passes it. The improper integral <M>{"\\int_1^\\infty dx/x^2 = 1"}</M>{" "}
          says that lifting a body free of the Earth for ever costs the same work as lifting it one Earth radius against a
          constant pull equal to its surface weight.
        </p>
      </Example>

      <Theorem title="work and kinetic energy">
        <p>
          If F is the total force on a body of mass m moving along a line, and the body moves from a to b, its speed
          changing from <M>{"v_a"}</M> to <M>{"v_b"}</M>, then
        </p>
        <MD>{"\\int_a^b F(x)\\,dx = \\tfrac{1}{2}mv_b^2 - \\tfrac{1}{2}mv_a^2."}</MD>
      </Theorem>
      <Proof>
        <p>
          Let the position at time t be <M>{"x(t)"}</M>, with velocity <M>{"v = x'(t)"}</M>. Newton&rsquo;s second law says{" "}
          <M>{"F(x(t)) = m\\,v'(t)"}</M>. Substitute <M>{"x = x(t)"}</M>, so <M>{"dx = v\\,dt"}</M>:
        </p>
        <MD>{"\\int_a^b F(x)\\,dx = \\int_{t_a}^{t_b} m\\,v'(t)\\,v(t)\\,dt = \\left[\\tfrac{1}{2}mv(t)^2\\right]_{t_a}^{t_b},"}</MD>
        <p>by the fundamental theorem, since <M>{"\\tfrac{1}{2}mv^2"}</M> has derivative <M>{"m v v'"}</M>.</p>
      </Proof>
      <p>
        Combined with the escape integral, this gives the escape speed. A body thrown upward with kinetic energy at least
        the work <M>{"mgR"}</M> (weight times Earth radius) never falls back, so it needs{" "}
        <M>{"\\tfrac{1}{2}mv^2 \\ge mgR"}</M>, that is <M>{"v \\ge \\sqrt{2gR}"}</M>, about 11.2 km/s, if we ignore the air.
      </p>

      <Remark title="other quantities built the same way">
        <p>
          Any quantity that adds up over pieces, and is nearly a product on a small piece, becomes an integral. The mass
          of a rod whose density varies is <M>{"\\int \\rho(x)\\,dx"}</M>; its balance point, the centre of mass, is{" "}
          <M>{"\\int x\\rho(x)\\,dx \\big/ \\int \\rho(x)\\,dx"}</M>. The force of water on a dam is an integral of pressure,
          which grows with depth, times the width at each depth. The skill is always the same: find the small piece, and
          check that adding pieces is the right thing to do.
        </p>
      </Remark>

      <Remark title="when the path is not a line">
        <p>
          Here the force pointed along the line of motion. When a body moves along a curve through a force that points
          in other directions, only the part of the force along the path does work. Summing that part along the path gives
          a line integral, and for forces like gravity the answer depends only on the ends of the path, not on the route.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "const",
      rung: "check",
      prompt: <p>A constant force of 15 N pushes a box 4 m. How many joules of work are done?</p>,
      answer: { kind: "numeric", value: 60 },
    },
    {
      key: "spring",
      rung: "check",
      prompt: (
        <p>
          A spring has <M>{"k = 200"}</M> N/m. How much work, in joules, stretches it 0.1 m beyond its natural length?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "hooke",
      rung: "apply",
      prompt: (
        <p>
          A force of 10 N holds a spring stretched 0.2 m beyond its natural length. How much work, in joules, stretches it
          from its natural length to 0.3 m beyond it? (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 2.25 },
    },
    {
      key: "tank",
      rung: "apply",
      prompt: (
        <p>
          The tank in the example (radius 1 m, height 2 m) is only half full, with water 1 m deep at the bottom. How much
          work, in joules, pumps all of it out over the top? Use 9800 N per cubic metre. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 9800 * Math.PI * 1.5, tolerance: 0.001 },
    },
    {
      key: "escape",
      rung: "apply",
      prompt: (
        <p>
          In the units of the gravity example, what fraction of the work needed to escape the Earth completely is needed to
          lift a body from the surface to 3 Earth radii from the centre? (Give a decimal or a fraction.)
        </p>
      ),
      answer: { kind: "numeric", value: 2 / 3, tolerance: 0.001 },
    },
    {
      key: "ratio",
      rung: "prove",
      prompt: (
        <p>
          Show that the work needed to stretch a spring from a to b beyond its natural length is{" "}
          <M>{"\\tfrac{1}{2}k(b^2 - a^2)"}</M>, and explain why stretching it from 0.1 m to 0.2 m takes three times the work
          of stretching it from 0 to 0.1 m.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes the work as the integral of kx from a to b.",
          "Evaluates it to ½k(b² − a²).",
          "Compares ½k(0.04 − 0.01) with ½k(0.01) to get the factor 3, or explains it from the area of a trapezium against a triangle. Either explanation is fine.",
        ],
      },
    },
    {
      key: "speed",
      rung: "stretch",
      prompt: (
        <p>
          Using the escape integral and the work and kinetic energy theorem, show that the escape speed from the
          Earth&rsquo;s surface is <M>{"\\sqrt{2gR}"}</M>, and estimate it with <M>{"g = 9.8"}</M> m/s² and{" "}
          <M>{"R = 6.37 \\times 10^6"}</M> m. Why does the mass of the body not matter?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that the work against gravity from R to infinity is mg times R, since the force mgR²/r² integrates to mgR.",
          "Sets ½mv² equal to mgR and solves for v = √(2gR), about 11.2 km/s.",
          "Explains that m appears on both sides and cancels. A rough numerical estimate is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why work done by a changing force is an integral, how slicing handles a problem like emptying a tank, and why a finite amount of work can lift a body away from the Earth for ever.",

  glimpse: (
    <p>
      Multivariable Calculus and Vector Analysis computes the work done by a force along a curved path as a line integral,
      and finds that for gravity and other conservative forces the work depends only on where the path starts and ends.
      That is where potential energy comes from.
    </p>
  ),
};
