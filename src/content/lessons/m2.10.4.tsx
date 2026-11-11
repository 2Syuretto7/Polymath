import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { DensityAreaViz } from "@/components/viz/DensityAreaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.10.4",
  minutes: 80,
  links: {
    revisits: ["m2.7.4", "m2.10.1"],
    foreshadows: ["m9.3.1", "m9.3.2", "m9.7.2"],
  },

  puzzle: (
    <>
      <p>
        A bus will come at some moment in the next ten minutes, every moment equally likely. What is the chance it comes
        at exactly 3 minutes, not 3.0001 or 2.9999? There are infinitely many moments, so the chance of any one of them
        must be 0.
      </p>
      <p>
        Yet the bus does come, at some moment. Adding up zeros cannot give 1. How can probability be spread over a
        continuum at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Instead of giving each point a probability, give each interval one, and let it come from area. Draw a curve that
        is never negative and encloses total area 1. The chance of landing between a and b is the area under the curve
        there. A single point has no width, so no area, and probability 0, while every interval of positive width can have
        a positive share. Move the ends below.
      </p>
      <DensityAreaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="probability density">
        <p>
          A <strong>probability density</strong> is a function f with <M>{"f(x) \\ge 0"}</M> for all x and
        </p>
        <MD>{"\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1."}</MD>
        <p>
          A random quantity X has density f if, for every <M>{"a \\le b"}</M>,
        </p>
        <MD>{"P(a \\le X \\le b) = \\int_a^b f(x)\\,dx."}</MD>
      </Definition>
      <p>
        Taking <M>{"a = b"}</M> gives <M>{"P(X = a) = 0"}</M>, which settles the puzzle: individual outcomes have
        probability 0, and only intervals carry weight. It also means that{" "}
        <M>{"P(a \\le X \\le b)"}</M> and <M>{"P(a < X < b)"}</M> are equal. The value <M>{"f(x)"}</M> is not itself a
        probability, and can exceed 1. It is probability per unit length: for small h,{" "}
        <M>{"P(x \\le X \\le x + h) \\approx f(x)\\,h"}</M>.
      </p>

      <Example title="uniform">
        <p>
          The bus has density <M>{"f(x) = 1/10"}</M> on <M>{"[0, 10]"}</M> and 0 elsewhere. The chance it comes in the
          first three minutes is <M>{"\\int_0^3 \\tfrac{1}{10}\\,dx = 0.3"}</M>, the fraction of the window that three
          minutes occupies.
        </p>
      </Example>

      <Example title="exponential">
        <p>
          The density <M>{"f(x) = \\lambda e^{-\\lambda x}"}</M> for <M>{"x \\ge 0"}</M>, and 0 for <M>{"x < 0"}</M>,
          models waiting times, such as the time until a radioactive atom decays. Its total area is an improper integral:
        </p>
        <MD>{"\\int_0^\\infty \\lambda e^{-\\lambda x}\\,dx = \\lim_{T \\to \\infty}\\left[-e^{-\\lambda x}\\right]_0^T = 1."}</MD>
        <p>
          The chance of waiting longer than t is <M>{"\\int_t^\\infty \\lambda e^{-\\lambda x}\\,dx = e^{-\\lambda t}"}</M>.
        </p>
      </Example>

      <Definition title="mean">
        <p>The <strong>mean</strong>, or expected value, of X with density f is</p>
        <MD>{"E[X] = \\int_{-\\infty}^{\\infty} x f(x)\\,dx,"}</MD>
        <p>
          when the integral converges absolutely. It is the balance point of the region under the curve, the same formula
          as the centre of mass of a rod with density f.
        </p>
      </Definition>

      <Example title="the mean waiting time">
        <p>For the exponential density, integration by parts gives</p>
        <MD>{"\\int_0^\\infty x\\,\\lambda e^{-\\lambda x}\\,dx = \\left[-x e^{-\\lambda x}\\right]_0^\\infty + \\int_0^\\infty e^{-\\lambda x}\\,dx = 0 + \\frac{1}{\\lambda}."}</MD>
        <p>
          The boundary term vanishes because <M>{"x e^{-\\lambda x} \\to 0"}</M>. So the rate <M>{"\\lambda"}</M> and the
          mean waiting time <M>{"1/\\lambda"}</M> are reciprocals.
        </p>
      </Example>

      <Theorem title="the distribution function">
        <p>
          Let <M>{"F(x) = P(X \\le x) = \\int_{-\\infty}^x f(t)\\,dt"}</M>. Then F rises from 0 to 1, and wherever f is
          continuous, <M>{"F'(x) = f(x)"}</M>.
        </p>
      </Theorem>
      <p>
        This is the fundamental theorem of calculus once more. It says the density is the rate at which probability
        accumulates, and that <M>{"P(a \\le X \\le b) = F(b) - F(a)"}</M>.
      </p>

      <Example title="the normal density">
        <p>The bell curve is</p>
        <MD>{"f(x) = \\frac{1}{\\sqrt{2\\pi}}\\,e^{-x^2/2}."}</MD>
        <p>
          The function <M>{"e^{-x^2/2}"}</M> has no elementary antiderivative, so neither the total area nor{" "}
          <M>{"P(-1 \\le X \\le 1) \\approx 0.6827"}</M> can be found by the methods of this course; such values are
          computed numerically. That the total area is exactly 1, which is to say{" "}
          <M>{"\\int_{-\\infty}^\\infty e^{-x^2/2}\\,dx = \\sqrt{2\\pi}"}</M>, has a beautiful proof that squares the
          integral and turns it into a volume over the plane, computed in polar coordinates.
        </p>
      </Example>

      <Remark title="history">
        <p>
          Abraham de Moivre found the normal curve in 1733 as an approximation to the probabilities of counting heads in
          many coin tosses. Laplace and Gauss later made it central to the theory of errors in measurement, and it is now
          known that sums of many small independent effects tend to follow it, whatever their own distribution.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "const",
      rung: "check",
      prompt: (
        <p>
          A density is equal to a constant c on <M>{"[0, 5]"}</M> and 0 elsewhere. What is c? (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.2 },
    },
    {
      key: "uniform",
      rung: "check",
      prompt: (
        <p>
          X is uniform on <M>{"[0, 10]"}</M>. What is <M>{"P(2 \\le X \\le 5)"}</M>? (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.3 },
    },
    {
      key: "kx",
      rung: "apply",
      prompt: (
        <p>
          For which k is <M>{"f(x) = kx"}</M> on <M>{"[0, 2]"}</M>, and 0 elsewhere, a probability density? (Give a
          decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "wait",
      rung: "apply",
      prompt: (
        <p>
          A waiting time has the exponential density with rate 1. What is the probability of waiting longer than 2? (Give
          a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: Math.exp(-2), tolerance: 0.001 },
    },
    {
      key: "mean",
      rung: "apply",
      prompt: (
        <p>
          X has density <M>{"f(x) = 2x"}</M> on <M>{"[0, 1]"}</M>, and 0 elsewhere. What is its mean? (Give a decimal or
          a fraction.)
        </p>
      ),
      answer: { kind: "numeric", value: 2 / 3, tolerance: 0.001 },
    },
    {
      key: "expo",
      rung: "prove",
      prompt: (
        <p>
          Show that <M>{"\\lambda e^{-\\lambda x}"}</M> on <M>{"[0, \\infty)"}</M> has total area 1 and mean{" "}
          <M>{"1/\\lambda"}</M>, taking care with the improper integrals.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes the total area as a limit as T → ∞ of an integral from 0 to T, and gets 1 − e^(−λT) → 1.",
          "Uses integration by parts for the mean, with u = x and dv = λe^(−λx) dx.",
          "Notes that the boundary term x e^(−λx) tends to 0 and reaches 1/λ. A brief justification of the limit is enough.",
        ],
      },
    },
    {
      key: "memory",
      rung: "stretch",
      prompt: (
        <p>
          A light bulb&rsquo;s lifetime X has the exponential density with rate <M>{"\\lambda"}</M>. Show that, given it
          has already lasted s hours, the chance it lasts t more is the same as for a new bulb:{" "}
          <M>{"P(X > s + t \\mid X > s) = P(X > t)"}</M>. What does this say about whether the bulb &ldquo;wears out&rdquo;?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses P(X > u) = e^(−λu), found by integrating the density from u to infinity.",
          "Writes the conditional probability as P(X > s + t)/P(X > s) = e^(−λ(s+t))/e^(−λs) = e^(−λt).",
          "Explains that the bulb does not age: its past gives no information about its future. Any sensible interpretation is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how a density turns probability into area, why a single exact value has probability 0, and how improper integrals and integration by parts give the total area and mean of the exponential density.",

  glimpse: (
    <p>
      Probability builds the whole theory of densities, including the uniform, normal and exponential families, and proves
      the central limit theorem, which explains why the bell curve appears whenever many small independent effects add up.
      Multivariable Calculus and Vector Analysis computes the area under the bell curve exactly, using polar coordinates.
    </p>
  ),
};
