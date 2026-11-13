import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DNCaseViz } from "@/components/viz/DNCaseViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.5.1",
  minutes: 80,
  links: {
    revisits: ["p16.1.2", "p3.3.3", "p16.4.3"],
    foreshadows: ["p16.5.2", "p16.5.3", "p22.6.5"],
  },

  puzzle: (
    <>
      <p>
        From the length of a flagpole&rsquo;s shadow and the angle of the sun, you can work out the height of the pole. From
        the height and the angle, you can work out the length of the shadow. Both are valid deductions from the same laws of
        optics. Yet the height explains the shadow, and the shadow does not explain the height. What does explaining add to
        deducing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Look at each case: does it fit the model, and is it really an explanation?</p>
      <DNCaseViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the deductive-nomological model">
        <p>
          Carl Hempel and Paul Oppenheim, in &ldquo;Studies in the Logic of Explanation&rdquo; (1948), proposed that a
          scientific explanation is an argument. Its premises, the <strong>explanans</strong>, include at least one law of
          nature and statements of particular conditions; its conclusion, the <strong>explanandum</strong>, describes what is
          explained. The argument must be deductively valid, the premises true, and the law essential to the derivation. The
          name records the two ingredients: deduction, and laws (Greek <em>nomos</em>).
        </p>
      </Definition>

      <Example title="explanation and prediction">
        <p>
          On this view explanation and prediction have the same structure. The difference is only in timing: if we derive the
          event before it happens, we predict it; if after, we explain it. Hempel added an inductive-statistical model for
          laws that confer only high probability, such as recovering from an infection after taking penicillin.
        </p>
      </Example>

      <Definition title="the counterexamples">
        <p>
          <strong>Asymmetry</strong>: the flagpole&rsquo;s height can be derived from its shadow, yet the shadow does not
          explain the height. <strong>Common causes</strong>: a falling barometer reliably precedes storms but does not
          explain them. <strong>Irrelevance</strong>: Wesley Salmon&rsquo;s man who takes his wife&rsquo;s birth control
          pills and does not get pregnant satisfies a true exceptionless law, yet the pills explain nothing; Henry Kyburg&rsquo;s hexed salt, which dissolves in water, is similar. Each shows that
          fitting the model is not sufficient for explanation.
        </p>
      </Definition>

      <Example title="is it necessary?">
        <p>
          Michael Scriven&rsquo;s paresis case runs the other way. Only a minority of people with untreated latent syphilis
          develop paresis, but everyone who develops it had syphilis, and the syphilis seems to explain it. Here there is no
          law making the outcome certain or even probable, yet there is an explanation.
        </p>
      </Example>

      <Remark title="what was missing">
        <p>
          The flagpole, barometer and pill cases all go wrong over causation or relevance, which the model, written in the
          language of logic, cannot see. This led to causal accounts of explanation, and to unificationist accounts on which
          to explain is to fit facts into a small number of argument patterns.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>On the DN model, what must the explanans contain?</p>,
      answer: {
        kind: "choice",
        options: ["At least one law of nature and statements of particular conditions", "Only observation reports", "A description of a cause", "A probability greater than one half"],
        correct: [0],
      },
    },
    {
      key: "pred",
      rung: "check",
      prompt: <p>According to Hempel, how does explanation relate to prediction?</p>,
      answer: {
        kind: "choice",
        options: ["They have the same logical structure and differ only in timing", "Prediction needs laws but explanation does not", "They are unrelated", "Explanation is always less certain"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which case fits the DN model but is not intuitively an explanation because of a common cause?</p>,
      answer: { kind: "choice", options: ["barometer", "eclipse", "paresis", "hexed salt"], correct: [0] },
    },
    {
      key: "flag",
      rung: "apply",
      prompt: <p>The sun is at an elevation whose tangent is 4/3, and the shadow is 15 m. How tall is the flagpole, in metres?</p>,
      answer: { kind: "numeric", value: 20 },
    },
    {
      key: "scriven",
      rung: "apply",
      prompt: <p>What does the paresis case suggest about the DN model?</p>,
      answer: {
        kind: "choice",
        options: [
          "Fitting the model is not necessary for explanation.",
          "Fitting the model is not sufficient for explanation.",
          "Medical explanations are impossible.",
          "Syphilis does not cause paresis.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the flagpole case refute the DN model? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets out the case: a valid derivation from laws runs both from height to shadow and from shadow to height.",
          "Notes that only one direction explains, and identifies what the model misses, such as causal direction.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Mathematical proofs explain some theorems but not others. Could a deductive model of explanation work better in mathematics than in science?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that every proof is a valid deduction, yet some proofs seem to explain why a theorem holds and others merely show that it does.",
          "Considers what makes the difference, such as generality, unification, or revealing a mechanism.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Hempel and Oppenheim's deductive-nomological model, the symmetry of explanation and prediction, and the counterexamples of the flagpole, the barometer, the birth control pills and paresis.",

  glimpse: (
    <p>
      Next, causal accounts of explanation, which treat the flagpole and barometer by asking what produces what, and then the
      unificationist account.
    </p>
  ),
};
