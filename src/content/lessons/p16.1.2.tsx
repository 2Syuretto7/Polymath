import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { HypoDeductViz } from "@/components/viz/HypoDeductViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.1.2",
  minutes: 80,
  links: {
    revisits: ["p16.1.1", "m1.1.4", "p7.5.3"],
    foreshadows: ["p16.2.1", "p16.4.1", "p16.4.3"],
  },

  puzzle: (
    <>
      <p>
        In a Vienna hospital in the 1840s, many more mothers died of childbed fever in the ward run by doctors than in the ward
        run by midwives. Ignaz Semmelweis guessed a cause. He could not see it directly. How can a guess about something
        unseen be tested, and what follows when the test comes out as predicted?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Mark each prediction as observed or not, and see what the logic allows you to conclude.</p>
      <HypoDeductViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the hypothetico-deductive method">
        <p>
          On the <strong>hypothetico-deductive</strong> account, science proceeds by proposing a hypothesis H, deducing from H,
          together with auxiliary assumptions A, an observable prediction O, and checking whether O occurs. If O fails, the
          hypothesis, or one of the auxiliaries, is false. If O occurs, H is <strong>confirmed</strong>. How the hypothesis was
          thought of, the context of discovery, is not part of its justification.
        </p>
      </Definition>

      <Example title="the asymmetry">
        <p>
          From &ldquo;if H and A then O&rdquo; and &ldquo;not O&rdquo;, it follows by modus tollens that not both H and A are
          true. But from &ldquo;if H then O&rdquo; and &ldquo;O&rdquo;, concluding H is affirming the consequent, a fallacy: a
          false hypothesis can have true consequences. Semmelweis&rsquo;s earlier rivals, such as overcrowding, also predicted
          some of the data. So passing tests supports a hypothesis without proving it.
        </p>
      </Example>

      <Definition title="the Duhem problem">
        <p>
          Pierre Duhem pointed out that hypotheses meet experience only together with auxiliaries: assumptions about
          instruments, procedures and background theory. A failed prediction shows that something in the bundle is false, not
          which part. Quine later generalised this into confirmation holism.
        </p>
      </Definition>

      <Remark title="problems for the account">
        <p>
          Hempel showed that simple rules of confirmation lead to the raven paradox, and that any hypothesis can be made to
          entail observed data by tacking on irrelevant conjuncts. Bayesians reply that confirmation is an increase in
          probability, which lets passing a risky test count for more than passing an easy one. Popper replied that we should
          stop talking of confirmation altogether and speak only of surviving attempts at refutation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>On the hypothetico-deductive account, how is a hypothesis tested?</p>,
      answer: {
        kind: "choice",
        options: [
          "By deducing observable predictions from it, with auxiliaries, and checking them",
          "By checking how it was first thought of",
          "By counting how many scientists believe it",
          "By deducing it from observations",
        ],
        correct: [0],
      },
    },
    {
      key: "fallacy",
      rung: "check",
      prompt: <p>Which inference is the fallacy of affirming the consequent?</p>,
      answer: {
        kind: "choice",
        options: ["If H then O; O; so H", "If H then O; not O; so not H", "If H then O; H; so O", "H or O; not O; so H"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, mark one prediction as not observed and switch off the auxiliaries. What follows about the hypothesis?</p>,
      answer: {
        kind: "choice",
        options: ["Nothing definite: the failure could lie elsewhere", "The hypothesis is proved", "The hypothesis is refuted", "All other predictions fail"],
        correct: [0],
      },
    },
    {
      key: "duhem",
      rung: "apply",
      prompt: <p>Semmelweis&rsquo;s hand-washing reduced deaths, but suppose in one month it had not. Which is a reasonable auxiliary to suspect?</p>,
      answer: {
        kind: "choice",
        options: ["That the washing had actually been done thoroughly", "That arithmetic is reliable", "That Vienna exists", "That mothers are human"],
        correct: [0],
      },
    },
    {
      key: "discovery",
      rung: "apply",
      prompt: <p>Semmelweis got his idea when a colleague died after a cut from a scalpel used in an autopsy. On the hypothetico-deductive view, how does this bear on whether the hypothesis is justified?</p>,
      answer: {
        kind: "choice",
        options: [
          "It does not: that belongs to discovery, and justification comes from testing.",
          "It proves the hypothesis.",
          "It refutes the hypothesis.",
          "It makes the hypothesis unscientific.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does a successful prediction give any reason to believe a hypothesis, given that inferring the hypothesis is affirming the consequent? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why the success does not entail the hypothesis.",
          "Considers a way it might still support it, such as making the hypothesis more probable, or the prediction being risky.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If any failed prediction can be blamed on an auxiliary, can a hypothesis ever be refuted? What do you think?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Duhem problem: a failure refutes only the bundle of hypothesis and auxiliaries.",
          "Considers what could make blaming the hypothesis reasonable, such as independent tests of the auxiliaries or repeated failures.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the hypothetico-deductive method with Semmelweis as an example, the asymmetry between refutation by modus tollens and confirmation, the role of auxiliary hypotheses and the Duhem problem.",

  glimpse: (
    <p>
      Next comes the demarcation problem: what separates science from pseudoscience. Popper&rsquo;s falsificationism, the
      raven paradox and Bayesian confirmation each take up a problem raised here.
    </p>
  ),
};
