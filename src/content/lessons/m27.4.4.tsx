import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PolyaUrnViz } from "@/components/viz/PolyaUrnViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.4.4",
  minutes: 90,
  links: {
    revisits: ["m27.4.3", "m22.2.4", "m27.1.4"],
    foreshadows: ["m27.5.1", "m27.5.2", "m37.4.2"],
  },

  puzzle: (
    <>
      <p>
        An urn holds one red and one blue ball. Draw one, put it back with another of the same colour, and repeat for ever.
        Early luck is self-reinforcing. Does the fraction of red balls settle down, or wander for ever? And if it settles,
        where?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Run the urn eight times, for more and more draws.</p>
      <PolyaUrnViz />
    </>
  ),

  theory: (
    <>
      <Definition title="upcrossings">
        <p>
          For a &lt; b, an <strong>upcrossing</strong> of [a, b] is a passage of the process from below a to above b. Let{" "}
          <M>{"U_n[a, b]"}</M> count the upcrossings completed by time n.
        </p>
      </Definition>

      <Theorem title="Doob's upcrossing inequality">
        <p>
          For a supermartingale X,{" "}
          <M>{"(b - a) \\, E[U_n[a, b]] \\le E[(X_n - a)^-]"}</M>. <strong>Proof idea:</strong> bet 1 from the moment X
          drops below a until it rises above b, then stop betting. Each upcrossing earns at least b − a, the final
          incomplete one loses at most <M>{"(X_n - a)^-"}</M>, and a predictable stake on a supermartingale cannot
          have positive expected gain.
        </p>
      </Theorem>

      <Theorem title="martingale convergence">
        <p>
          If X is a supermartingale with <M>{"\\sup_n E|X_n| < \\infty"}</M>, then <M>{"X_n"}</M> converges almost surely to
          an integrable limit <M>{"X_\\infty"}</M>. <strong>Proof:</strong> by monotone convergence, the total number of
          upcrossings of each rational interval [a, b] has finite mean, so is finite almost surely. If{" "}
          <M>{"\\liminf X_n < a < b < \\limsup X_n"}</M>, there would be infinitely many upcrossings. So liminf = limsup
          almost surely, and Fatou&rsquo;s lemma makes the limit integrable.
        </p>
      </Theorem>

      <Example title="Pólya's urn">
        <p>
          After n draws there are n + 2 balls. If R of them are red, the next draw adds a red with probability R/(n + 2),
          and a short computation shows the fraction <M>{"R/(n + 2)"}</M> is a martingale. It lies in [0, 1], so it
          converges almost surely. Starting from one ball of each colour, the limit is uniform on [0, 1].
        </p>
      </Example>

      <Remark title="almost sure is not L¹">
        <p>
          A nonnegative martingale converges, but not always in mean. The doubling gambler&rsquo;s fortune after a first win
          is frozen at 1, so the process converges almost surely to 1, while its mean is 0 at every time. Convergence in{" "}
          <M>{"L^1"}</M> holds exactly when the martingale is uniformly integrable, and then{" "}
          <M>{"X_n = E[X_\\infty \\mid \\mathcal{F}_n]"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hyp",
      rung: "check",
      prompt: <p>What hypothesis on a supermartingale does the convergence theorem need?</p>,
      answer: { kind: "choice", options: ["supₙ E|Xₙ| < ∞", "The increments are independent", "Xₙ is increasing", "E[Xₙ] = 0"], correct: [0] },
    },
    {
      key: "up",
      rung: "check",
      prompt: <p>Why do infinitely many upcrossings of some [a, b] matter?</p>,
      answer: { kind: "choice", options: ["Without them, liminf and limsup cannot be separated by any rational interval, so the sequence converges", "They make the process bounded", "They prove the limit is zero", "They are the definition of a stopping time"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In Pólya&rsquo;s urn starting with one ball of each colour, what is the probability that the limiting fraction of red is below 0.3?</p>,
      answer: { kind: "numeric", value: 0.3, tolerance: 0.001 },
    },
    {
      key: "mean",
      rung: "apply",
      prompt: <p>What is the expected value of the limiting fraction of red in the same urn?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "l1",
      rung: "apply",
      prompt: <p>The doubling gambler&rsquo;s fortune converges almost surely to 1, but has mean 0 at every time. What fails?</p>,
      answer: { kind: "choice", options: ["Uniform integrability, so there is no L¹ convergence", "Almost sure convergence", "The martingale property", "Adaptedness"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that in Pólya&rsquo;s urn the fraction of red balls is a martingale.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lets R be the red count among n + 2 balls and writes the next fraction as (R + 1)/(n + 3) with probability R/(n + 2), else R/(n + 3).",
          "Computes the conditional expectation: [R(R + 1) + (n + 2 − R)R] / ((n + 2)(n + 3)) = R/(n + 2).",
          "Concludes it equals the current fraction.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use martingale convergence to show that a fair ±1 random walk cannot converge, so it does not stay bounded.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the walk takes integer steps of size 1, so it cannot converge to a finite limit.",
          "Argues that if it were bounded below, stopping it on leaving a bounded-below region gives a convergent martingale, a contradiction, so it is unbounded.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A random walk with smaller and smaller steps, taken faster and faster, tends to a random continuous path. Building
        that limit properly is the start of continuous-time probability.
      </p>
      <p>Next, the construction of Brownian motion.</p>
    </>
  ),
};
