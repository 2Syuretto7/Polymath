import { Definition, Remark } from "@/components/lesson/Blocks";
import { ExclusionViz } from "@/components/viz/ExclusionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.4.1",
  minutes: 80,
  links: {
    revisits: ["p12.1.2", "p12.2.3", "p11.4.2"],
    foreshadows: ["p12.4.2", "p12.4.3", "p27.1.1"],
  },

  puzzle: (
    <>
      <p>
        Most philosophers of mind became non-reductive physicalists: mental states are realised in the brain but are not
        identical to brain states. Then Jaegwon Kim asked a hard question. If your brain state is enough to raise your arm,
        what work is left for your decision? It seems your mind is pushed out of the causal story, even with no soul in sight.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Five claims that each seem true. Reject one at a time and see which position you end up in.</p>
      <ExclusionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="non-reductive physicalism">
        <p>
          Everything is physical, and mental properties supervene on physical ones; but mental properties are not identical to
          physical properties, because they are multiply realisable. Psychology is an autonomous science with real causal
          kinds.
        </p>
      </Definition>

      <Definition title="the exclusion argument">
        <p>
          Suppose a mental event M causes a physical event P*. M is realised by a physical event P. By closure, P* has a
          sufficient physical cause, and P is the natural candidate. If M is distinct from P, then P* has two sufficient
          causes. By exclusion, unless this is genuine overdetermination, one of them must go, and closure says the physical
          one stays. So M causes nothing, unless M is identical to P.
        </p>
      </Definition>

      <Remark title="Kim's conclusion">
        <p>
          Kim concluded that non-reductive physicalism collapses: either reduce the mental to the physical, keeping mental
          causation, or accept that the mental is epiphenomenal. He opted for functional reduction where possible, and admitted
          that conscious qualities might resist it.
        </p>
      </Remark>

      <Remark title="replies">
        <p>
          The <strong>generalisation</strong> worry: if the argument works, it seems to show that chemical, biological and
          economic properties are causally idle too, since all are realised physically. Most find that absurd, which suggests a
          premise is wrong. <strong>Proportionality</strong> replies (Stephen Yablo, Christian List and Peter Menzies) say the
          best cause is the one at the right level of detail: what made the pigeon peck was that the target was red, not that
          it was a particular shade of scarlet. On this view the mental property may be the cause, and the fine-grained
          physical one is not.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "nrp",
      rung: "check",
      prompt: <p>What does non-reductive physicalism claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Minds are non-physical substances.",
          "Everything is physical, but mental properties are not identical to physical properties.",
          "Mental properties are physical properties.",
          "Nothing is physical.",
        ],
        correct: [1],
      },
    },
    {
      key: "excl",
      rung: "check",
      prompt: <p>What does the exclusion principle say?</p>,
      answer: {
        kind: "choice",
        options: [
          "No effect has more than one sufficient cause, unless it is genuinely overdetermined.",
          "Mental events exclude physical ones.",
          "Every event has a cause.",
          "Causes exclude their effects.",
        ],
        correct: [0],
      },
    },
    {
      key: "kim",
      rung: "apply",
      prompt: <p>According to Kim, which options remain for the physicalist?</p>,
      answer: {
        kind: "choice",
        options: [
          "Dualism or idealism.",
          "Reduce the mental to the physical, or accept that it is causally idle.",
          "Overdetermination or behaviourism.",
          "Nothing; physicalism is false.",
        ],
        correct: [1],
      },
    },
    {
      key: "general",
      rung: "apply",
      prompt: <p>What is the generalisation objection to Kim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Kim generalises too quickly from one person.",
          "The argument would make biological, chemical and economic properties causally idle too, which is absurd.",
          "The argument applies only to pain.",
          "Generalisations have no causes.",
        ],
        correct: [1],
      },
    },
    {
      key: "prop",
      rung: "apply",
      prompt: <p>In Yablo&rsquo;s pigeon example, why is &ldquo;red&rdquo; a better cause of pecking than &ldquo;scarlet&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because pigeons cannot see scarlet.",
          "Because the pigeon would have pecked at any red target, so red is proportional to the effect.",
          "Because scarlet is not a colour.",
          "Because red is physical.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Which premise of the exclusion argument should the non-reductive physicalist reject? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument’s premises.",
          "Chooses a premise and gives a reason, such as proportionality or the generalisation worry, or argues none should go.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "levels",
      rung: "stretch",
      prompt: <p>Can there be causes at more than one level, such as a hurricane causing damage and also the motions of molecules causing it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers whether higher-level and lower-level causes compete.",
          "Relates the answer to the exclusion argument.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend non-reductive physicalism, Kim’s exclusion argument and its premises, Kim’s choice between reduction and epiphenomenalism, the generalisation objection, and the proportionality reply.",

  glimpse: (
    <p>
      The next lesson examines supervenience, the relation non-reductive physicalists rely on. Then epiphenomenalism, one horn of
      Kim&rsquo;s dilemma, gets its own hearing, and metaphysics later studies grounding.
    </p>
  ),
};
