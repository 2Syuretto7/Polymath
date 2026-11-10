import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { SurvivalViz } from "@/components/viz/SurvivalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.4.3",
  minutes: 70,
  links: {
    revisits: ["p0.4.1", "p1.4.1"],
    foreshadows: ["p20.5.2", "p25.1.3", "p30.2.1", "p31.3.2"],
  },

  puzzle: (
    <>
      <p>
        You can travel to Mars in fifteen minutes. You step into a booth on Earth; a scanner records the exact state of every
        cell in your body and brain, destroying them as it does so; the information is sent by radio; and on Mars a machine
        builds an exact copy from new matter. The person who steps out on Mars has your memories, your plans, your character,
        and remembers stepping into the booth a moment ago.
      </p>
      <p>Would you use it? Would you be travelling, or dying while someone very like you is born on Mars?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        Your answer depends on which theory of personal identity you hold. On the psychological theory the person on Mars is
        you: everything psychological continues. On the bodily theory it is not: your body was destroyed. In ordinary life the
        two theories never disagree, because mind and body go together. The cases below, from Derek Parfit&rsquo;s{" "}
        <cite>Reasons and Persons</cite> (1984), pull them apart.
      </p>
      <p>Look especially at the last case, in which you divide into two people.</p>
      <SurvivalViz />
    </>
  ),

  theory: (
    <>
      <Example title="fission">
        <p>
          Suppose your brain&rsquo;s two hemispheres could each sustain your psychology, and each is transplanted into a new
          body. Two people wake up, each psychologically continuous with you. Which is you? Not both, since they are two
          people and you are one, and they will go on to live different lives. Not just one, since each has exactly the same
          claim. Not neither, it seems, since if only one hemisphere had been transplanted you would have survived; how can a
          double success be a failure?
        </p>
      </Example>

      <Definition title="identity is not what matters">
        <p>
          Parfit&rsquo;s answer was to change the question. Perhaps in fission there is no fact about which person is you, and
          perhaps this does not matter. What we care about in caring about survival, he argued, is{" "}
          <strong>Relation R</strong>: psychological connectedness and continuity, however caused. In fission, Relation R
          holds between you and each of the two people. You get everything that matters in survival, twice over; you merely
          do not get identity.
        </p>
      </Definition>

      <Quote source={<>Derek Parfit, <cite>Reasons and Persons</cite> (1984), chapter 13</>}>
        <p>
          My life seemed like a glass tunnel, through which I was moving faster every year, and at the end of which there was
          darkness. When I changed my view, the walls of my glass tunnel disappeared. I now live in the open air.
        </p>
      </Quote>
      <p>
        Parfit found this view consoling. If identity is not what matters, then death, the end of identity, may matter less
        than it seemed, and the boundary between my future and other people&rsquo;s futures may matter less too. He drew
        conclusions for ethics: for example, about whether it is fair to make a young person bear burdens for the sake of the
        older person they will become.
      </p>

      <Remark title="an ancient echo">
        <p>
          Parfit himself noted that his view resembles the Buddha&rsquo;s teaching of <em>anattā</em>, no-self: that there is
          no enduring self beyond a stream of physical and mental events, and that seeing this clearly lessens attachment and
          the fear of death. In an appendix to <cite>Reasons and Persons</cite> he quotes Buddhist texts that, in his words,
          state his view.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Many find Parfit&rsquo;s conclusion impossible to accept. Surely it matters enormously whether the person in pain
          tomorrow will be <em>me</em>. Bernard Williams argued that if you were told that tomorrow someone would be tortured,
          after your memories had been replaced, you should still fear it, which suggests that bodily continuity matters
          after all. And the teletransporter remains disturbing to most people: few would step into it, whatever their theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "teleport-psych",
      rung: "check",
      prompt: <p>On the psychological theory, is the person on Mars you?</p>,
      answer: { kind: "choice", options: ["Yes", "No"], correct: [0] },
    },
    {
      key: "teleport-body",
      rung: "check",
      prompt: <p>On the bodily theory, is the person on Mars you?</p>,
      answer: { kind: "choice", options: ["Yes", "No"], correct: [1] },
    },
    {
      key: "fission-why",
      rung: "apply",
      prompt: <p>Why can you not be identical with both people after fission?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because neither has your memories.",
          "Because they are two different people, and one thing cannot be identical with two different things.",
          "Because brains cannot be divided.",
          "Because the bodies are new.",
        ],
        correct: [1],
      },
    },
    {
      key: "relation-r",
      rung: "apply",
      prompt: <p>What is Parfit&rsquo;s Relation R?</p>,
      answer: {
        kind: "choice",
        options: [
          "Having the same body.",
          "Psychological connectedness and continuity, however caused.",
          "Being a human animal.",
          "Numerical identity.",
        ],
        correct: [1],
      },
    },
    {
      key: "branch",
      rung: "apply",
      prompt: <p>The branch-line case causes trouble mainly for which theory?</p>,
      answer: {
        kind: "choice",
        options: [
          "the bodily theory",
          "the psychological theory, since the person on Mars is as psychologically continuous with you as the person on Earth",
          "animalism",
          "none",
        ],
        correct: [1],
      },
    },
    {
      key: "matters",
      rung: "prove",
      prompt: (
        <p>
          Set out Parfit&rsquo;s argument from fission to the conclusion that identity is not what matters in survival, in
          standard form. Then say which premise you would most want to question.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Includes a premise that in fission you are not identical with either resulting person (or that there is no fact which).",
          "Includes a premise that fission is about as good as ordinary survival, since everything that matters continues.",
          "Concludes that identity is not what matters in survival.",
          "Identifies a premise to question and gives a reason.",
        ],
      },
    },
    {
      key: "booth",
      rung: "stretch",
      prompt: (
        <p>
          Would you step into the teletransporter? Give your answer and defend it using the theories of this chapter. Then
          say whether your answer would change if the original were not destroyed.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a clear answer about using the teletransporter.",
          "Connects the answer to a theory of personal identity or to Parfit's view about what matters.",
          "Considers the branch-line case, where the original survives.",
          "Explains whether and why the answer changes.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why the case of a person dividing into two led Parfit to say that identity is not what matters.",

  glimpse: (
    <p>
      This completes the chapter on personal identity. Next comes the philosophy of God: arguments for and against the
      existence of a being on which everything else depends. Parfit&rsquo;s views return in the graduate course on ethics, the
      badness of death in Applied Ethics, and no-self views in Indian Philosophy and the graduate course on mind.
    </p>
  ),
};
