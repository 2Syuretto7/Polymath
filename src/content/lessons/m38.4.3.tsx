import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { FiniteInjuryViz } from "@/components/viz/FiniteInjuryViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.4.3",
  minutes: 90,
  links: {
    revisits: ["m38.4.1", "m38.4.2", "m20.5.3"],
    foreshadows: ["m38.5.1", "m38.5.2", "m38.4.1"],
  },

  puzzle: (
    <>
      <p>
        Every natural undecidable c.e. set mathematicians found, from the halting problem to the word problem for groups,
        turned out to be Turing equivalent to K. Is there a c.e. set strictly between the computable sets and K? To build
        one, you must satisfy infinitely many requirements that pull against each other. How can a construction keep its
        promises when later promises keep breaking earlier ones?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move through the stages of a run, and watch requirements act and injure those of lower priority.</p>
      <FiniteInjuryViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Post’s problem">
        <p>
          In 1944 Emil Post asked whether there is a c.e. set A with <M>{"\\emptyset <_T A <_T \\emptyset'"}</M>. He
          constructed simple sets and other examples, but none could be shown to have intermediate degree by his methods.
        </p>
      </Definition>

      <Theorem title="Friedberg-Muchnik">
        <p>
          In 1956 and 1957, Richard Friedberg and Albert Muchnik independently built c.e. sets A and B with{" "}
          <M>{"A \\not\\le_T B"}</M> and <M>{"B \\not\\le_T A"}</M>. Neither can be computable, and neither can compute K,
          since K computes every c.e. set; so both have intermediate degree, and Post&rsquo;s problem is solved.
        </p>
      </Theorem>

      <Example title="requirements and priority">
        <p>
          The construction enumerates A and B in stages, meeting the requirements{" "}
          <M>{"R_{2e}: A \\neq \\Phi_e^B"}</M> and <M>{"R_{2e+1}: B \\neq \\Phi_e^A"}</M>. To meet <M>{"R_{2e}"}</M>, pick a
          fresh witness x; wait until <M>{"\\Phi_e^B(x) = 0"}</M>; then put x into A and restrain B below the use of that
          computation, so it is preserved. A higher-priority requirement may later need to add a number to B below the
          restraint, <strong>injuring</strong> <M>{"R_{2e}"}</M>, which picks a new witness and starts again. Since each
          requirement acts only finitely often once those above it have finished, <M>{"R_i"}</M> is injured at most{" "}
          <M>{"2^i - 1"}</M> times, and every requirement is eventually met: this is a <strong>finite injury</strong>{" "}
          argument.
        </p>
      </Example>

      <Theorem title="the structure of the c.e. degrees">
        <p>
          Priority arguments revealed a rich structure. Sacks proved that the c.e. degrees are dense: between any two
          strictly ordered c.e. degrees lies a third. There are minimal pairs, whose only common lower bound is 0. Infinite
          injury arguments, in which a requirement can be injured infinitely often yet still be met, were needed for these
          results.
        </p>
      </Theorem>

      <Remark title="natural degrees">
        <p>
          The intermediate sets built by priority are artificial. It remains an open informal question whether any
          &lsquo;natural&rsquo; c.e. problem has intermediate degree; every one met in practice is computable or complete.
          Martin&rsquo;s conjecture makes a precise version of this claim for degree-invariant functions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "post",
      rung: "check",
      prompt: <p>What did Post&rsquo;s problem ask?</p>,
      answer: { kind: "choice", options: ["Whether there is a c.e. set strictly between the computable sets and K in Turing degree", "Whether K is decidable", "Whether every set is c.e.", "Whether the jump is strictly harder"], correct: [0] },
    },
    {
      key: "fm",
      rung: "check",
      prompt: <p>What did Friedberg and Muchnik construct?</p>,
      answer: { kind: "choice", options: ["Two c.e. sets, neither Turing reducible to the other", "A decidable set equivalent to K", "A non-c.e. set below K", "A Turing machine that solves the halting problem"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the largest number of injuries R₃ can ever suffer?</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0 },
    },
    {
      key: "why",
      rung: "apply",
      prompt: <p>Why must each of the Friedberg-Muchnik sets be strictly below K?</p>,
      answer: { kind: "choice", options: ["If one computed K, it would compute the other, since K computes every c.e. set", "Because both are finite", "Because K is computable", "Because they are not c.e."], correct: [0] },
    },
    {
      key: "dense",
      rung: "apply",
      prompt: <p>What does Sacks&rsquo;s density theorem say?</p>,
      answer: { kind: "choice", options: ["Between any two strictly ordered c.e. degrees there is a third", "Every degree is c.e.", "The c.e. degrees are linearly ordered", "There are only countably many degrees"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if R₀ never acts after some stage, and R₁ acts at most once after each action of R₀, then R₁ acts only finitely often.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that R₀ acts only finitely often, say m times.",
          "Notes that R₁ can be injured only when R₀ acts, so at most m times, and acts at most once between injuries.",
          "Concludes that R₁ acts at most m + 1 times.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does a requirement restrain lower-priority requirements from changing the other set below the use?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the diagonalising computation Φₑᴮ(x) = 0 depends only on B below its use.",
          "Explains that keeping B unchanged there preserves the computation, so A(x) = 1 differs from it forever.",
          "Notes that only higher-priority requirements may break the restraint. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Model theory can also prove theorems in other parts of mathematics. One striking example says that every injective
        polynomial map from ℂⁿ to itself is surjective.
      </p>
      <p>Next, the Ax-Grothendieck theorem.</p>
    </>
  ),
};
