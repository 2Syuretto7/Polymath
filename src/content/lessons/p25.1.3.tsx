import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DeprivationViz } from "@/components/viz/DeprivationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p25.1.3",
  minutes: 90,
  links: {
    revisits: ["p25.1.2", "p1.6.4", "p4.7.1"],
    foreshadows: ["p25.2.1", "p25.3.2", "p25.4.2"],
  },

  puzzle: (
    <>
      <p>
        Epicurus argued that death is nothing to us: while we exist, death is not here, and when death is here, we do not
        exist. So it can harm us neither while we live nor once we are dead. Almost everyone feels this must be wrong. But
        where exactly does it go wrong?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        On the deprivation account, death is bad because of what it takes away. Set when someone dies, how long they would
        otherwise have lived, and how good that extra life would have been.
      </p>
      <DeprivationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Epicurean argument">
        <p>
          In the <em>Letter to Menoeceus</em>, Epicurus reasons: good and bad lie in sensation; death is the end of sensation;
          so death is neither good nor bad for the one who dies. Fear of death is therefore irrational, and removing it is the
          way to a tranquil life (ataraxia). The argument relies on two assumptions: hedonism about what is bad for us, and the
          experience requirement, that nothing can harm us unless we experience it.
        </p>
      </Definition>

      <Definition title="the deprivation account">
        <p>
          Thomas Nagel (1970) rejected the experience requirement. A person betrayed behind their back, whose life is never
          affected, is still harmed. Death harms by <strong>deprivation</strong>: it is bad for someone because their life, had
          they not died then, would have contained more good. On this view, death at 30 is usually worse than death at 90, and
          death is not bad for someone whose future held only suffering.
        </p>
      </Definition>

      <Example title="the symmetry argument">
        <p>
          Lucretius added: the endless time before we were born was nothing to us, and the time after death is its mirror
          image, so we should regard it the same way. Replies include that we could have lived longer but could not have been
          born much earlier and still been ourselves (Nagel), and that we rightly care more about future goods than past ones
          (Parfit&rsquo;s case of the patient who prefers pain in the past to pain to come).
        </p>
      </Example>

      <Definition title="the timing problem">
        <p>
          If death is bad for me, when is it bad? Not before I die, it seems, and not after, when I do not exist. Answers
          include: at all times (eternalism), at the time of death, or at no particular time, as a comparative fact about my
          whole life, like the fact that I am taller than you holds at no single moment.
        </p>
      </Definition>

      <Remark title="immortality">
        <p>
          If death is bad because it ends goods, would endless life be good? Bernard Williams, discussing a character in a
          play by Karel Čapek who has lived for 342 years, argued that an endless life would become unbearably boring once a
          person&rsquo;s central desires were exhausted. Others reply that many goods, such as friendship and music, do not
          pall.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "epi",
      rung: "check",
      prompt: <p>Which assumption does Epicurus&rsquo;s argument rely on?</p>,
      answer: { kind: "choice", options: ["Nothing can be bad for us unless we experience it", "Death is painful", "The soul is immortal", "Life is always good"], correct: [0] },
    },
    {
      key: "nagel",
      rung: "check",
      prompt: <p>On the deprivation account, why is death bad for the one who dies?</p>,
      answer: { kind: "choice", options: ["It takes away the goods their life would otherwise have contained", "It is painful", "It harms those left behind", "It is unnatural"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, take death at 30, a counterfactual life to 80, and 1 unit of good per year. How many units is the person deprived of?</p>,
      answer: { kind: "numeric", value: 50 },
    },
    {
      key: "betray",
      rung: "apply",
      prompt: <p>Nagel&rsquo;s case of a person betrayed behind their back is an objection to which assumption?</p>,
      answer: { kind: "choice", options: ["The experience requirement", "Hedonism about pleasure", "The symmetry argument", "The timing problem"], correct: [0] },
    },
    {
      key: "lucr",
      rung: "apply",
      prompt: <p>What does Lucretius&rsquo;s symmetry argument compare death to?</p>,
      answer: { kind: "choice", options: ["The time before we were born", "Sleep", "Pain", "Old age"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is death bad for the one who dies? Argue for a view, considering Epicurus and Nagel.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Epicurean argument and the deprivation account.",
          "Considers an objection, such as the symmetry argument or the timing problem.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Would you choose to live for ever, if you could stop whenever you wished? Why or why not?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with Williams’s worry about boredom or exhausted desires.",
          "Considers goods that may not pall, or the value of being able to stop.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The deprivation account says death is bad for any being with a future worth having. That includes many animals. If
        their lives and pleasures count, much of how we treat them needs justifying.
      </p>
      <p>Next, the moral status of animals.</p>
    </>
  ),
};
