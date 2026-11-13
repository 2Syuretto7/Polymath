import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ConfirmMeasureViz } from "@/components/viz/ConfirmMeasureViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.4.3",
  minutes: 85,
  links: {
    revisits: ["m9.1.4", "p3.4.3", "p16.4.1"],
    foreshadows: ["p16.5.1", "p16.6.1", "p28.2.1"],
  },

  puzzle: (
    <>
      <p>
        Einstein&rsquo;s general relativity explained the odd motion of Mercury&rsquo;s perihelion, known for sixty years. It
        was rightly hailed as strong evidence for the theory. But the observation was already certain before the theory was
        proposed. If evidence confirms a theory by making it more probable, how can something we already knew confirm
        anything?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set a prior and two likelihoods, and watch the posterior and three measures of confirmation.</p>
      <ConfirmMeasureViz />
    </>
  ),

  theory: (
    <>
      <Definition title="confirmation as raising probability">
        <p>
          Bayesian confirmation theory treats degrees of belief as probabilities and updates them by conditionalisation: on
          learning E, the new probability of H is P(H | E) = P(E | H) P(H) / P(E). Then E <strong>confirms</strong> H when
          P(H | E) &gt; P(H), <strong>disconfirms</strong> it when P(H | E) &lt; P(H), and is <strong>irrelevant</strong>{" "}
          when the two are equal. Equivalently, E confirms H exactly when P(E | H) &gt; P(E | not H).
        </p>
      </Definition>

      <Example title="what the account explains">
        <p>
          If H entails E, then P(E | H) = 1, so observing E confirms H unless E was certain anyway. The less probable E was
          beforehand, the bigger the boost: this vindicates the value of risky, surprising predictions that Popper prized. And
          the raven paradox is softened: the white shoe confirms, but by a negligible amount.
        </p>
      </Example>

      <Definition title="measures of confirmation">
        <p>
          How much does E confirm H? The <strong>difference measure</strong> is P(H | E) − P(H), the{" "}
          <strong>log ratio measure</strong> is log [P(H | E) / P(H)], and the <strong>log likelihood ratio</strong> is
          log [P(E | H) / P(E | not H)]. All three agree on whether E confirms H, but they rank pieces of evidence
          differently, so claims about which evidence confirms &ldquo;more&rdquo; depend on the measure.
        </p>
      </Definition>

      <Remark title="problems">
        <p>
          Clark Glymour&rsquo;s <strong>problem of old evidence</strong> (1980): if P(E) = 1 already, then P(H | E) = P(H)
          and E cannot confirm, contrary to the Mercury case. One reply asks what our credence in E would be without our
          knowing it; another says what is learnt is that H entails E. A second worry is the <strong>problem of the
          priors</strong>: Bayesianism says how to update but not where to start, which is where grue reappears.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>On the Bayesian account, when does E confirm H?</p>,
      answer: { kind: "choice", options: ["When P(H | E) > P(H)", "When P(E) = 1", "When E entails H", "When P(H) > 0.5"], correct: [0] },
    },
    {
      key: "old",
      rung: "check",
      prompt: <p>What is the problem of old evidence?</p>,
      answer: {
        kind: "choice",
        options: [
          "Evidence already known has probability 1, so conditionalising on it cannot raise any hypothesis’s probability.",
          "Old observations are usually wrong.",
          "Old theories cannot be confirmed by new evidence.",
          "Evidence loses value as it ages.",
        ],
        correct: [0],
      },
    },
    {
      key: "post",
      rung: "apply",
      prompt: <p>P(H) = 0.2, P(E | H) = 0.9 and P(E | not H) = 0.1. What is P(H | E)? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.69, tolerance: 0.01 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose &ldquo;old evidence&rdquo;. What is the difference measure?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0.001 },
    },
    {
      key: "risky",
      rung: "apply",
      prompt: <p>H entails E. Which observation of E confirms H most, by the difference measure?</p>,
      answer: {
        kind: "choice",
        options: ["One that was very improbable before", "One that was almost certain before", "One that was certain before", "It makes no difference"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Show that if H entails E and 0 &lt; P(E) &lt; 1 and P(H) &gt; 0, then E confirms H.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that H entails E, so P(E | H) = 1.",
          "Applies Bayes’ theorem to get P(H | E) = P(H) / P(E).",
          "Concludes P(H | E) > P(H) since P(E) < 1, which is a complete argument.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the problem of old evidence fatal to Bayesian confirmation theory? Say why or why not.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the problem using the case of Mercury’s perihelion or a similar one.",
          "Considers a reply, such as counterfactual credences or learning that H entails E.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Bayesian confirmation: E confirms H when it raises H's probability, why surprising predictions confirm more, the different measures of degree, and the problems of old evidence and of the priors.",

  glimpse: (
    <p>
      Next, the philosophy of explanation, starting from Hempel&rsquo;s deductive-nomological model. Bayesian norms are
      developed in depth later in formal epistemology.
    </p>
  ),
};
