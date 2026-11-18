import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PremiseRejectViz, type Premise } from "@/components/viz/PremiseRejectViz";
import type { LessonContent } from "@/lib/types";

const PREMISES: Premise[] = [
  { text: "It is wrong to kill an innocent person.", who: "Thomson rejects this as stated", why: "Judith Jarvis Thomson grants, for argument’s sake, that the fetus is a person. The right to life is not a right to use another’s body. Unplugging yourself from a famous violinist who needs your kidneys for nine months is not unjust killing, though it may be kind to stay." },
  { text: "From conception, the fetus is an innocent person.", who: "Warren, Tooley and Singer reject this", why: "Mary Anne Warren lists marks of personhood: consciousness, reasoning, self-motivated activity, communication and self-awareness. An early fetus has none. Being biologically human is not the same as being a person in the moral sense." },
  { text: "Abortion kills the fetus.", who: "Few reject this", why: "Some argue that early abortion, like Thomson’s unplugging, is ending support rather than killing. But the death of the fetus is a foreseen result, and most writers accept that abortion kills." },
];

export const lesson: LessonContent = {
  id: "p25.1.1",
  minutes: 90,
  links: {
    revisits: ["p13.5.1", "p5.3.3", "p7.3.4"],
    foreshadows: ["p25.1.2", "p25.1.3", "p25.2.1"],
  },

  puzzle: (
    <>
      <p>
        Few moral questions divide people as sharply as abortion, and the argument often stalls at one question: is the fetus
        a person? Philosophers have tried two ways forward. One is to answer that question properly. The other, more
        surprising, is to show that the answer may not settle the matter.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here is the standard argument against abortion. It is valid. Reject each premise to see who rejects it, and why.
      </p>
      <PremiseRejectViz
        premises={PREMISES}
        conclusion="abortion is wrong."
        intro="Since the argument is valid, anyone who denies the conclusion must deny a premise. The debate is about which."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="the personhood question">
        <p>
          Conservatives argue that a human being exists from conception, and that a human being is a person with a right to life.
          Liberals such as Mary Anne Warren (1973) and Michael Tooley (1972) distinguish being human in the biological sense
          from being a person, a being with a mental life of a certain kind. On their view an early fetus is not a person.
          Critics reply that Warren&rsquo;s criteria also exclude newborn infants, and Tooley accepts that consequence.
        </p>
      </Definition>

      <Example title="Thomson's violinist">
        <p>
          Judith Jarvis Thomson (1971) asks you to imagine waking up connected to a famous unconscious violinist, whose kidneys
          will fail unless they use yours for nine months. Must you stay plugged in? Most say no. Thomson concludes that even if
          the fetus is a person, its right to life does not give it a right to use another&rsquo;s body. Her argument is
          strongest for pregnancy from rape; for other cases Thomson uses analogies about responsibility, such as burglars and
          people-seeds drifting through window screens.
        </p>
      </Example>

      <Definition title="Marquis: a future like ours">
        <p>
          Don Marquis (1989) avoids the personhood question. Killing an adult is wrong, Marquis argues, mainly because it deprives
          the victim of a valuable future: experiences, projects and relationships. A typical fetus has such a future. So
          abortion is seriously wrong, for the same reason that killing us is. Critics ask whether a being with no
          psychological connection to that future is really deprived of it, which is a question of personal identity.
        </p>
      </Definition>

      <Remark title="the moral and the legal">
        <p>
          Whether abortion is morally permissible differs from whether it should be legal. In India the Medical Termination of
          Pregnancy Act (1971, amended 2021) permits abortion up to 20 weeks on a doctor&rsquo;s opinion, and up to 24 weeks for
          certain categories, with later limits in cases of serious fetal abnormality. Some people who think abortion is often
          wrong still oppose criminalising it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "thomson",
      rung: "check",
      prompt: <p>What does Thomson&rsquo;s violinist case aim to show?</p>,
      answer: { kind: "choice", options: ["Even if the fetus is a person, its right to life may not include a right to use another’s body", "The fetus is not a person", "Abortion is always wrong", "Violinists have special rights"], correct: [0] },
    },
    {
      key: "marquis",
      rung: "check",
      prompt: <p>According to Marquis, what mainly makes killing wrong?</p>,
      answer: { kind: "choice", options: ["It deprives the victim of a valuable future", "It causes pain", "It breaks the law", "It harms the killer’s character"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, who rejects the premise that the fetus is a person from conception?</p>,
      answer: { kind: "choice", options: ["Warren, Tooley and Singer", "Thomson", "Marquis", "No one"], correct: [0] },
    },
    {
      key: "infant",
      rung: "apply",
      prompt: <p>What is a standard objection to Warren&rsquo;s criteria of personhood?</p>,
      answer: { kind: "choice", options: ["They seem to exclude newborn infants as well", "They include fetuses", "They depend on religion", "They ignore pain"], correct: [0] },
    },
    {
      key: "contra",
      rung: "apply",
      prompt: <p>Marquis&rsquo;s argument seems to imply something about contraception. Why, according to him, does it not?</p>,
      answer: { kind: "choice", options: ["Before conception there is no individual who is deprived of a future", "Contraception is also seriously wrong", "Sperm have no future", "Contraception is legal"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does Thomson&rsquo;s violinist argument succeed for pregnancies not caused by rape? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Thomson’s conclusion, and why the rape case is the clearest.",
          "Considers the role of responsibility, for example voluntary intercourse with known risks, or Thomson’s people-seeds.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should a person who believes abortion is usually wrong support making it illegal? What considerations bear on this?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes moral permissibility from legal permission.",
          "Considers reasons such as reasonable disagreement, enforcement, or harms of unsafe abortion.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Abortion concerns the start of a life; euthanasia concerns its end. Again a distinction does much of the work: between
        killing and letting die, and between doing what a patient asks and deciding for them.
      </p>
      <p>Next, euthanasia.</p>
    </>
  ),
};
