import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { VolumeSliceViz } from "@/components/viz/VolumeSliceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.10.1",
  minutes: 85,
  links: {
    revisits: ["m0.5.5", "m2.6.1"],
    foreshadows: ["m5.5.1", "m22.1.2"],
  },

  puzzle: (
    <>
      <p>
        The volume of a cone is a third of the cylinder around it. School books state it; few prove it. Archimedes found
        that a ball fills exactly two thirds of the cylinder that encloses it, and was so pleased that he asked for the
        figure to be carved on his tomb.
      </p>
      <p>
        Where do these thirds come from? Integrals measure areas, which are two-dimensional. Can they measure volume too?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Slice a solid like a loaf of bread. If each slice at position x has area <M>{"A(x)"}</M> and thickness{" "}
        <M>{"\\Delta x"}</M>, its volume is about <M>{"A(x)\\,\\Delta x"}</M>. Add the slices and let them thin: the volume is{" "}
        <M>{"\\int A(x)\\,dx"}</M>. For a solid made by spinning a curve, each slice is a disc. Watch the discs approach the
        solid below.
      </p>
      <VolumeSliceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="volume by slicing">
        <p>
          If a solid lies between <M>{"x = a"}</M> and <M>{"x = b"}</M>, and its cross-section by the plane at x has area{" "}
          <M>{"A(x)"}</M>, with A continuous, its volume is
        </p>
        <MD>{"V = \\int_a^b A(x)\\,dx."}</MD>
      </Definition>
      <p>
        For a solid with a curved surface this is a definition rather than a theorem, chosen because it agrees with the
        volume of a box, adds correctly when solids are put together, and is squeezed between the volumes of stacks of
        cylinders just as an area is squeezed by rectangles.
      </p>

      <Theorem title="solids of revolution">
        <p>
          Rotating the region under <M>{"y = f(x) \\ge 0"}</M>, for <M>{"a \\le x \\le b"}</M>, about the x-axis gives a
          solid with discs of radius <M>{"f(x)"}</M> as its cross-sections:
        </p>
        <MD>{"V = \\pi \\int_a^b f(x)^2\\,dx."}</MD>
        <p>
          If the region lies between two curves <M>{"g \\le f"}</M>, each cross-section is a washer, and{" "}
          <M>{"V = \\pi\\int_a^b (f^2 - g^2)\\,dx"}</M>.
        </p>
      </Theorem>

      <Example title="the cone and the ball">
        <ul>
          <li>
            A cone of radius r and height h comes from rotating <M>{"y = rx/h"}</M> on <M>{"[0, h]"}</M>:{" "}
            <M>{"V = \\pi\\int_0^h \\frac{r^2 x^2}{h^2}\\,dx = \\tfrac{1}{3}\\pi r^2 h"}</M>. The third comes from{" "}
            <M>{"\\int_0^h x^2\\,dx = h^3/3"}</M>.
          </li>
          <li>
            A ball of radius r comes from rotating <M>{"y = \\sqrt{r^2 - x^2}"}</M> on <M>{"[-r, r]"}</M>:{" "}
            <M>{"V = \\pi\\int_{-r}^r (r^2 - x^2)\\,dx = \\pi\\left(2r^3 - \\tfrac{2}{3}r^3\\right) = \\tfrac{4}{3}\\pi r^3"}</M>.
            The enclosing cylinder has volume <M>{"\\pi r^2 \\cdot 2r = 2\\pi r^3"}</M>, and the ratio is Archimedes&rsquo;
            two thirds.
          </li>
        </ul>
      </Example>

      <Example title="a solid that is not round">
        <p>
          A pyramid with a square base of side s and height h has, at height y from the apex, a square cross-section of
          side <M>{"sy/h"}</M>. So <M>{"V = \\int_0^h s^2y^2/h^2\\,dy = \\tfrac{1}{3}s^2 h"}</M>: again a third of the
          enclosing box, for the same reason.
        </p>
      </Example>

      <Remark title="Cavalieri's principle">
        <p>
          Two solids whose cross-sections at every height have equal areas have equal volumes: the integrals are the same.
          Bonaventura Cavalieri stated this in 1635, before calculus, and the Chinese mathematicians Zu Chongzhi and his son
          Zu Gengzhi had used it in the fifth century to find the volume of the ball. Push a stack of coins sideways and its
          volume does not change.
        </p>
      </Remark>

      <Remark title="shells">
        <p>
          Rotating about the y-axis instead, a thin vertical strip at x sweeps out a cylindrical shell of radius x, height{" "}
          <M>{"f(x)"}</M> and thickness <M>{"\\Delta x"}</M>, with volume about <M>{"2\\pi x f(x)\\,\\Delta x"}</M>. So{" "}
          <M>{"V = 2\\pi\\int_a^b x f(x)\\,dx"}</M>, which is often easier than slicing the other way.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cyl",
      rung: "check",
      prompt: (
        <p>
          Rotating <M>{"y = 2"}</M> on <M>{"[0, 3]"}</M> about the x-axis gives a cylinder. What is its volume, as a multiple
          of π? (Give the multiple.)
        </p>
      ),
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Rotating y = f(x) about the x-axis, the cross-section at x is a disc of area&hellip;</p>,
      answer: { kind: "choice", options: ["π f(x)²", "2π f(x)", "f(x)²", "π x²"], correct: [0] },
    },
    {
      key: "sqrt",
      rung: "apply",
      prompt: (
        <p>
          Find the volume obtained by rotating <M>{"y = \\sqrt{x}"}</M> on <M>{"[0, 2]"}</M> about the x-axis, as a multiple
          of π. (Give the multiple.)
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "x2",
      rung: "apply",
      prompt: (
        <p>
          Find the volume obtained by rotating <M>{"y = x^2"}</M> on <M>{"[0, 1]"}</M> about the x-axis, as a multiple of π.
          (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.2 },
    },
    {
      key: "shell",
      rung: "apply",
      prompt: (
        <p>
          Using shells, find the volume obtained by rotating the region under <M>{"y = x"}</M> on <M>{"[0, 1]"}</M> about
          the y-axis, as a multiple of π. (Give a decimal or a fraction.)
        </p>
      ),
      answer: { kind: "numeric", value: 2 / 3, tolerance: 0.001 },
    },
    {
      key: "cap",
      rung: "prove",
      prompt: (
        <p>
          Show that a cap of height h cut from a ball of radius r has volume <M>{"\\pi h^2(r - h/3)"}</M>, and check that
          h = 2r gives the whole ball.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Sets up V = π ∫ from r − h to r of (r² − x²) dx, or an equivalent integral.",
          "Evaluates it and simplifies to π h²(r − h/3).",
          "Substitutes h = 2r to get (4/3)π r³.",
        ],
      },
    },
    {
      key: "torus",
      rung: "stretch",
      prompt: (
        <p>
          A torus (a doughnut) is made by rotating the disc <M>{"(x - R)^2 + y^2 \\le r^2"}</M>, with <M>{"R > r"}</M>, about
          the y-axis. Use shells to show its volume is <M>{"2\\pi^2 R r^2"}</M>. Interpret this as the area of the disc times
          the distance its centre travels.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes V = 2π ∫ from R − r to R + r of x · 2√(r² − (x − R)²) dx.",
          "Substitutes u = x − R, splits into a part that vanishes by symmetry and R times the area of a half-disc integral, and gets 2π²Rr².",
          "Notes that πr² × 2πR is the same, which is Pappus's theorem. A sketch with the key steps is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how slicing a solid turns its volume into an integral, and where the one third in the volume of a cone comes from.",

  glimpse: (
    <p>
      Multivariable Calculus and Vector Analysis finds volumes with double and triple integrals, which do not need the
      slices to be simple shapes. Measure and Integration asks what volume can mean for the strangest sets, and finds,
      through the Banach-Tarski paradox, that some sets cannot be given a volume at all.
    </p>
  ),
};
