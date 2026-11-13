import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { StringModesViz } from "@/components/viz/StringModesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.2.1",
  minutes: 90,
  links: {
    revisits: ["m17.1.1", "m10.3.4", "m17.1.2"],
    foreshadows: ["m17.2.2", "m17.4.1", "m17.4.3"],
  },

  puzzle: (
    <>
      <p>
        Pluck a guitar string near the bridge and it sounds bright and thin; pluck it in the middle and it sounds round and
        mellow. The note is the same. What is different about the way the string moves?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pluck the string at different points, add modes one at a time, and let time run.</p>
      <StringModesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="deriving the wave equation">
        <p>
          A string with tension T and density ρ per unit length makes small transverse displacements u(x, t). The net vertical
          force on a short piece [x, x + Δx] is approximately <M>{"T(u_x(x + \\Delta x) - u_x(x))"}</M>, and Newton&rsquo;s
          second law gives <M>{"\\rho\\,\\Delta x\\, u_{tt} \\approx T\\, u_{xx}\\,\\Delta x"}</M>. Letting Δx → 0,
        </p>
        <MD>{"u_{tt} = c^2 u_{xx}, \\qquad c = \\sqrt{T/\\rho}."}</MD>
      </Definition>

      <Theorem title="standing waves">
        <p>
          With fixed ends u(0, t) = u(L, t) = 0, seeking solutions u = X(x)T(t) leads to <M>{"X'' = -\\lambda X"}</M> with
          X(0) = X(L) = 0, which forces <M>{"X = \\sin(n\\pi x/L)"}</M>. Each <strong>normal mode</strong>
        </p>
        <MD>{"\\sin\\frac{n\\pi x}{L}\\left(a_n\\cos\\frac{n\\pi c t}{L} + b_n \\sin\\frac{n\\pi c t}{L}\\right)"}</MD>
        <p>
          vibrates with frequency nc/2L. By superposition the general solution is a sum of modes, with coefficients fixed by
          the initial position and velocity.
        </p>
      </Theorem>

      <Example title="the plucked string">
        <p>
          A string of length 1 plucked to height 1 at x = p and released from rest has{" "}
          <M>{"a_n = \\dfrac{2\\sin(n\\pi p)}{n^2\\pi^2 p(1-p)}"}</M>. The fundamental, n = 1, sets the pitch; the overtones
          set the timbre. Plucking at the middle kills every even mode, which has a node there, and the sound is mellow;
          plucking near the end excites many high modes, and the sound is bright.
        </p>
      </Example>

      <Remark title="harmonics and music">
        <p>
          The frequencies nc/2L are whole multiples of the fundamental, which is why a string&rsquo;s overtones blend into a
          single musical note. Pythagoras&rsquo;s discovery that strings with lengths in ratio 2 : 1 or 3 : 2 sound
          harmonious is explained by the shared modes.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "c",
      rung: "check",
      prompt: <p>For a string with tension T and density ρ, what is the wave speed c?</p>,
      answer: { kind: "choice", options: ["√(T/ρ)", "T/ρ", "√(ρ/T)", "Tρ"], correct: [0] },
    },
    {
      key: "freq",
      rung: "check",
      prompt: <p>What is the frequency of the n-th mode of a string of length L with fixed ends?</p>,
      answer: { kind: "choice", options: ["nc/2L", "nc/L", "c/2nL", "2nL/c"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, pluck the string at 0.50. What is a₂?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0.001 },
    },
    {
      key: "speed",
      rung: "apply",
      prompt: <p>A string has tension 100 N and density 0.01 kg/m. What is the wave speed in m/s?</p>,
      answer: { kind: "numeric", value: 100 },
    },
    {
      key: "pitch",
      rung: "apply",
      prompt: <p>That string has length 0.5 m. What is its fundamental frequency in hertz?</p>,
      answer: { kind: "numeric", value: 100 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that <M>{"u = \\sin(n\\pi x/L)\\cos(n\\pi c t/L)"}</M> solves the wave equation with fixed ends at x = 0 and x = L.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes u_tt = −(nπc/L)² u.",
          "Computes uₓₓ = −(nπ/L)² u, so u_tt = c² uₓₓ.",
          "Checks u(0, t) = 0 and u(L, t) = 0, since sin 0 = sin nπ = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Where would you pluck a string so that the third mode is silent? Is there more than one place?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the third mode is silent when sin(3πp) = 0.",
          "Finds p = 1/3 or p = 2/3 for a string of length 1.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the wave equation comes from Newton’s law for a string, what the normal modes of a string with fixed ends are, and why plucking position changes the sound but not the pitch.",

  glimpse: (
    <p>
      Next, d&rsquo;Alembert&rsquo;s formula, which solves the wave equation on the whole line in one stroke and shows that
      signals travel at exactly speed c.
    </p>
  ),
};
