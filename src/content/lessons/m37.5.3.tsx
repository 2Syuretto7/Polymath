import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { DeltaHedgeViz } from "@/components/viz/DeltaHedgeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m37.5.3",
  minutes: 90,
  links: {
    revisits: ["m37.5.2", "m37.4.1", "m37.4.2"],
    foreshadows: ["m33.5.1", "m33.5.3", "m36.4.2"],
  },

  puzzle: (
    <>
      <p>
        A share costs ₹100. A contract pays, in one year, however much the share price then exceeds ₹100, or nothing. One
        analyst expects the share to grow 20% a year, another expects 2%. Surely they should disagree about what the
        contract is worth today. Yet in the standard model they must agree. Why?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sell the contract at its model price, hedge it by trading the share, and see how well the hedge pays the debt.</p>
      <DeltaHedgeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Black–Scholes model">
        <p>
          A bank account grows at rate r, and a share price follows{" "}
          <M>{"dS_t = \\mu S_t\\, dt + \\sigma S_t\\, dB_t"}</M>. A trading strategy holding{" "}
          <M>{"\\Delta_t"}</M> shares is <strong>self-financing</strong> if its value changes only through price moves:{" "}
          <M>{"dV_t = \\Delta_t\\, dS_t + r(V_t - \\Delta_t S_t)\\, dt"}</M>. An <strong>arbitrage</strong> is a
          self-financing strategy that starts at 0, never loses, and sometimes gains.
        </p>
      </Definition>

      <Theorem title="risk-neutral pricing">
        <p>
          Let Q be the measure, given by Girsanov&rsquo;s theorem, under which the discounted price{" "}
          <M>{"e^{-rt} S_t"}</M> is a martingale; under Q the drift μ is replaced by r. By martingale representation every
          payoff X at time T can be replicated, and the only price free of arbitrage is{" "}
          <M>{"V_0 = e^{-rT}\\, \\mathbb E_Q[X]"}</M>.
        </p>
      </Theorem>

      <Theorem title="the Black–Scholes formula">
        <p>
          For the call paying <M>{"(S_T - K)^+"}</M>,{" "}
          <M>{"C = S_0 N(d_1) - K e^{-rT} N(d_2)"}</M>, where N is the standard normal distribution function,{" "}
          <M>{"d_1 = \\dfrac{\\ln(S_0/K) + (r + \\sigma^2/2)T}{\\sigma\\sqrt T}"}</M> and{" "}
          <M>{"d_2 = d_1 - \\sigma\\sqrt T"}</M>. The hedge holds <M>{"N(d_1)"}</M> shares. Equivalently, by
          Feynman–Kac, the price <M>{"V(t, s)"}</M> solves{" "}
          <M>{"\\partial_t V + \\tfrac12 \\sigma^2 s^2 \\partial_{ss} V + r s\\, \\partial_s V - rV = 0"}</M>.
        </p>
      </Theorem>

      <Example title="a worked price">
        <p>
          With <M>{"S_0 = K = 100"}</M>, r = 5%, σ = 20% and T = 1 year: d₁ = 0.35, d₂ = 0.15, and C ≈ 10.45. Put–call
          parity, <M>{"C - P = S_0 - K e^{-rT}"}</M>, then prices the matching put at about 5.57.
        </p>
      </Example>

      <Remark title="what the model leaves out">
        <p>
          Real prices jump, volatility changes, and trading costs money, so hedging is never perfect and markets are not
          complete. Prices quoted in the market imply different σ for different strikes, the volatility smile. An American
          option, which may be exercised early, is an optimal stopping problem under Q.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mu",
      rung: "check",
      prompt: <p>Which quantity does not appear in the Black–Scholes formula?</p>,
      answer: { kind: "choice", options: ["The expected growth rate μ of the share", "The volatility σ", "The interest rate r", "The strike K"], correct: [0] },
    },
    {
      key: "q",
      rung: "check",
      prompt: <p>What characterises the risk-neutral measure Q?</p>,
      answer: { kind: "choice", options: ["Under Q the discounted share price is a martingale", "Under Q the share price is constant", "Under Q investors avoid all risk", "Q is the measure of real-world frequencies"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with σ = 0.20 and K = 100, what is the Black–Scholes price, to two decimal places?</p>,
      answer: { kind: "numeric", value: 10.45, tolerance: 0.01 },
    },
    {
      key: "trades",
      rung: "apply",
      prompt: <p>In the visualisation, what happens to the spread of hedging errors as the number of trades grows?</p>,
      answer: { kind: "choice", options: ["It shrinks towards 0", "It grows without limit", "It stays the same", "It depends only on the 12% growth rate"], correct: [0] },
    },
    {
      key: "put",
      rung: "apply",
      prompt: <p>A call with S₀ = K = 100, r = 5% and T = 1 is priced at 10.45. Use put–call parity to price the put, to two decimal places.</p>,
      answer: { kind: "numeric", value: 5.57, tolerance: 0.02 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if C − P were greater than S₀ − K exp(−rT), there would be an arbitrage.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sells the call, buys the put and the share, and borrows K exp(−rT), with money left over today.",
          "Notes that at time T the position holds S(T) + (K − S(T))⁺ − (S(T) − K)⁺ − K = 0 in every case.",
          "Concludes this is a riskless profit, so the inequality cannot hold without arbitrage.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain in your own words why the analysts in the puzzle must agree on the price despite different growth forecasts.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says the contract can be replicated by trading the share and the bank account.",
          "Says the cost of replication depends on volatility, not on the drift, so any other price allows arbitrage.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Stochastic calculus followed single random paths and averaged over them. Ergodic theory asks when following one
        path for long enough tells you the average over all of them.
      </p>
      <p>Next, the course on dynamical systems and ergodic theory begins with rotations.</p>
    </>
  ),
};
