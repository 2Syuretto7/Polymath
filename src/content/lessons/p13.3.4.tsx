import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["non-naturalist realism", "naturalist realism", "expressivism", "error theory"];
const CASES = ["persistent disagreement", "moral progress", "queerness", "moral explanation"];
const V: CaseVerdict[][] = [
  [
    { ok: true, why: "Disagreement is no proof that there is no fact, as with hard questions in mathematics. But the realist must explain why reasoning has not converged." },
    { ok: true, why: "Abolishing slavery was progress because people came to see a moral truth more accurately. The view takes progress at face value." },
    { ok: false, why: "This is where the view pays: it accepts facts that are not natural and that give reasons by themselves. Russ Shafer-Landau and Derek Parfit accept the cost." },
    { ok: false, why: "Non-natural facts do not cause anything, so they cannot explain why we hold the moral beliefs we do. Gilbert Harman and Sharon Street press this point." },
  ],
  [
    { ok: true, why: "Disagreement can come from differing non-moral beliefs, bias or self-interest, as in other empirical subjects." },
    { ok: true, why: "Progress is like scientific progress: learning more about what in fact promotes human well-being." },
    { ok: true, why: "Moral facts are natural facts, so nothing is queer. The Cornell realists, such as Richard Boyd and Nicholas Sturgeon, identify goodness with a natural property, as water is H₂O." },
    { ok: true, why: "Sturgeon: Hitler’s depravity explains his actions, so moral facts earn their place in our best explanations, just as physical facts do." },
  ],
  [
    { ok: true, why: "Disagreement is disagreement in attitude, which is exactly what one would expect if moral claims express attitudes." },
    { ok: false, why: "Progress is harder: if moral judgements express attitudes, changing them seems to be mere change. Quasi-realists try to earn talk of improvement." },
    { ok: true, why: "No moral facts are needed, so there is nothing queer to explain." },
    { ok: true, why: "Moral beliefs are explained by our attitudes and their origins, with no moral facts needed." },
  ],
  [
    { ok: true, why: "Disagreement is unsurprising if everyone is chasing facts that do not exist." },
    { ok: false, why: "Strictly, no moral claim is true, so there is no moral progress, only change. Many find this hard to accept." },
    { ok: true, why: "The view is built on the queerness argument: there are no queer facts." },
    { ok: true, why: "Moral beliefs are explained by social and evolutionary forces, not by moral facts." },
  ],
];

export const lesson: LessonContent = {
  id: "p13.3.4",
  minutes: 80,
  links: {
    revisits: ["p13.3.3", "p13.3.1", "p11.1.1"],
    foreshadows: ["p13.3.5", "p30.3.2", "p16.6.1"],
  },

  puzzle: (
    <>
      <p>
        Most people, asked whether gratuitous cruelty would still be wrong if everyone approved of it, say yes. That answer
        sounds like realism: there are moral facts that do not depend on what anyone thinks. Is common sense right here, and
        if so, what kind of facts could these be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare four metaethical views on four tests. Click a cell to see the verdict and the reason.</p>
      <CaseMatrixViz
        theories={THEORIES}
        cases={CASES}
        verdicts={V}
        prompt="Does the view handle the test well?"
        caption="These verdicts are disputed; each view has subtle defenders who reply to the costs marked here. Ask which cost you would rather pay."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="moral realism">
        <p>
          There are moral facts; moral judgements are beliefs that are true when they match those facts; and some are true.
          The facts hold independently of what anyone believes or wants about them.
        </p>
      </Definition>

      <Example title="two kinds of realism">
        <p>
          Non-naturalists, following Moore, hold that moral properties are not natural properties and are known in part a
          priori. Naturalists, such as the Cornell realists, hold that moral properties are natural properties, discovered by
          ordinary methods of reflection and inquiry, though perhaps not definable in natural terms, as the open question
          argument suggests.
        </p>
      </Example>

      <Remark title="Harman’s challenge">
        <p>
          A physicist sees a vapour trail and infers a proton, because the proton best explains the observation. Seeing
          youths set fire to a cat, you judge it wrong. Gilbert Harman argued that your judgement is explained by your
          upbringing and psychology, with no need to assume that the act is really wrong. If moral facts explain nothing, why
          believe in them?
        </p>
      </Remark>

      <Remark title="the case for realism">
        <p>
          Realists answer that moral facts do figure in good explanations, that the same worry would threaten epistemic and
          mathematical facts, and that our firm conviction that cruelty is wrong is itself evidence. On this view the burden
          lies on whoever denies what seems obvious.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does moral realism hold?</p>,
      answer: {
        kind: "choice",
        options: [
          "Moral claims express attitudes.",
          "There are moral facts, independent of what anyone thinks, and some moral claims are true.",
          "All moral claims are false.",
          "Morality is whatever a culture accepts.",
        ],
        correct: [1],
      },
    },
    {
      key: "cornell",
      rung: "check",
      prompt: <p>What do Cornell realists say about moral properties?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are non-natural and indefinable.",
          "They are natural properties, discoverable by ordinary inquiry.",
          "They do not exist.",
          "They are attitudes.",
        ],
        correct: [1],
      },
    },
    {
      key: "harman",
      rung: "apply",
      prompt: <p>What is Harman&rsquo;s challenge to moral realism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Moral words cannot appear in conditionals.",
          "Moral facts seem unnecessary to explain our moral observations, unlike physical facts in science.",
          "Moral claims are all false.",
          "People disagree about morality.",
        ],
        correct: [1],
      },
    },
    {
      key: "hitler",
      rung: "apply",
      prompt: <p>How does Sturgeon reply to Harman?</p>,
      answer: {
        kind: "choice",
        options: [
          "By denying that Hitler existed.",
          "By arguing that moral facts, such as Hitler’s depravity, do figure in good explanations of events.",
          "By becoming an error theorist.",
          "By saying that explanation does not matter.",
        ],
        correct: [1],
      },
    },
    {
      key: "progress",
      rung: "apply",
      prompt: <p>Which view most easily explains the claim that abolishing slavery was moral progress, not mere change?</p>,
      answer: {
        kind: "choice",
        options: ["Error theory", "Moral realism", "Emotivism without quasi-realism", "None of them"],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does persistent moral disagreement count against moral realism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States why disagreement might seem to tell against moral facts.",
          "Considers a realist reply, such as disagreement in other subjects or non-moral sources of disagreement.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should a realist be a naturalist or a non-naturalist? Weigh the open question argument against the queerness worry.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what each kind of realism holds.",
          "Weighs at least one cost on each side.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what moral realism says, the difference between naturalist and non-naturalist realism, and Harman's challenge from explanation with a realist reply.",

  glimpse: (
    <p>
      The next lesson considers constructivism, which grounds moral truth in what rational agents would agree to. Graduate
      metaethics returns to robust realism, and the philosophy of science asks the parallel question about scientific realism.
    </p>
  ),
};
