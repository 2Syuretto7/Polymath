import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ReflectionViz } from "@/components/viz/ReflectionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m37.1.2",
  minutes: 90,
  links: {
    revisits: ["m37.1.1", "m27.5.2", "m9.3.2"],
    foreshadows: ["m37.1.3", "m37.4.1", "m37.5.2"],
  },

  puzzle: (
    <>
      <p>
        A barrier option pays out only if a share price, modelled by Brownian motion, climbs above a level a at some
        time before expiry. The chance that the price ends above a is a normal tail. The chance it ever gets there must be
        larger. By exactly how much?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Reflect a path after it first reaches a, and compare the simulated chance of reaching a with the formula.</p>
      <ReflectionViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the reflection principle">
        <p>
          Let <M>{"T_a = \\inf\\{t : B_t = a\\}"}</M> for a &gt; 0. The process equal to B up to <M>{"T_a"}</M> and to{" "}
          <M>{"2a - B_t"}</M> afterwards is again a Brownian motion. <strong>Proof:</strong> by the strong Markov property{" "}
          <M>{"W_t = B_{T_a + t} - a"}</M> is a Brownian motion independent of <M>{"\\mathcal{F}_{T_a}"}</M>, and so is −W;
          gluing either onto the path up to <M>{"T_a"}</M> gives the same law.
        </p>
      </Theorem>

      <Theorem title="the law of the maximum">
        <p>
          With <M>{"S_t = \\max_{s \\le t} B_s"}</M>, for a &gt; 0,{" "}
          <M>{"P(S_t \\ge a) = 2P(B_t \\ge a) = P(|B_t| \\ge a)"}</M>. So <M>{"S_t"}</M> has the same law as{" "}
          <M>{"|B_t|"}</M>. <strong>Proof:</strong>{" "}
          <M>{"P(S_t \\ge a, B_t < a) = P(S_t \\ge a, B_t > a)"}</M> by reflection, and the second event is just{" "}
          <M>{"\\{B_t > a\\}"}</M>.
        </p>
      </Theorem>

      <Example title="hitting times">
        <p>
          <M>{"P(T_a \\le t) = P(S_t \\ge a) = 2(1 - \\Phi(a / \\sqrt{t}))"}</M>. Differentiating gives the density{" "}
          <M>{"\\dfrac{a}{\\sqrt{2\\pi t^3}} e^{-a^2/(2t)}"}</M>. It decays like <M>{"t^{-3/2}"}</M>, so{" "}
          <M>{"T_a"}</M> is finite almost surely but has infinite mean: the continuous version of the puzzle in optional
          stopping.
        </p>
      </Example>

      <Theorem title="joint law">
        <p>
          The same argument gives, for a &gt; 0 and b ≤ a,{" "}
          <M>{"P(S_t \\ge a, B_t \\le b) = P(B_t \\ge 2a - b)"}</M>, the joint law of the maximum and the endpoint. Lévy
          showed further that <M>{"S - B"}</M> has the same law, as a process, as <M>{"|B|"}</M>.
        </p>
      </Theorem>

      <Remark title="why the strong form">
        <p>
          The reflection happens at a random time. With only the simple Markov property at fixed times, the argument would
          not go through. Here the stopping time is the first visit to a, exactly the kind of time the strong Markov
          property covers.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "law",
      rung: "check",
      prompt: <p>Which random variable has the same law as the running maximum Sₜ?</p>,
      answer: { kind: "choice", options: ["|Bₜ|", "Bₜ", "2Bₜ", "Bₜ²"], correct: [0] },
    },
    {
      key: "mean",
      rung: "check",
      prompt: <p>Is the hitting time Tₐ of a level a &gt; 0 integrable?</p>,
      answer: { kind: "choice", options: ["No: it is finite almost surely but E[Tₐ] = ∞", "Yes, E[Tₐ] = a²", "Yes, E[Tₐ] = a", "It is infinite with positive probability"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with a = 1, what is 2P(B₁ ≥ 1)? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.317, tolerance: 0.002 },
    },
    {
      key: "four",
      rung: "apply",
      prompt: <p>What is P(max of B over [0, 4] ≥ 2)? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.317, tolerance: 0.002 },
    },
    {
      key: "joint",
      rung: "apply",
      prompt: <p>With a = 1, t = 1 and b = 0, P(S₁ ≥ 1, B₁ ≤ 0) equals P(B₁ ≥ c) for which c?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Derive P(Sₜ ≥ a) = 2P(Bₜ ≥ a) from the reflection principle.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Splits {Sₜ ≥ a} by whether Bₜ ≥ a or Bₜ < a, noting P(Bₜ = a) = 0.",
          "Uses reflection after Tₐ to show P(Sₜ ≥ a, Bₜ < a) = P(Sₜ ≥ a, Bₜ > a).",
          "Notes {Bₜ > a} is contained in {Sₜ ≥ a}, so the total is 2P(Bₜ > a).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the density of Tₐ to explain why E[Tₐ] is infinite.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the density behaves like a/√(2π) · t to the power −3/2 for large t.",
          "So t times the density behaves like t to the power −1/2, which is not integrable at infinity.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Brownian motion is rough, but its roughness is perfectly regular: the sum of squared increments is exactly time.
        That fact will be the engine of stochastic calculus.
      </p>
      <p>Next, quadratic variation.</p>
    </>
  ),
};
