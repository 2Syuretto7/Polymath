import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Grant, for the sake of argument, that the foetus is a person from conception, with a right to life.",
    kind: "premise",
    note: "Thomson concedes her opponents' strongest premise, to see whether their conclusion follows even then.",
  },
  {
    claim: "You wake up back to back with a famous violinist, whose kidneys have failed. Music lovers have plugged the violinist's circulation into yours. Unplugging will kill the violinist; in nine months they will recover.",
    kind: "premise",
    note: "The thought experiment isolates one question: does a person's right to life give them a right to the use of another person's body?",
    objection: "Pregnancy is not like being kidnapped. In most cases the pregnant person took part in the act that led to it.",
  },
  {
    claim: "Most people judge that you are not morally required to stay plugged in, though it would be very kind to do so.",
    kind: "premise",
    note: "Staying would be a great act of generosity, a supererogatory act, as a Good Samaritan's would be. But it is not owed.",
    objection: "Perhaps you are required. Some think the duty not to kill outweighs a nine-month burden.",
  },
  {
    claim: "So the right to life is not a right to whatever one needs to live; it is, at least, a right not to be killed unjustly.",
    kind: "inference",
    note: "Unplugging is not unjust killing, Thomson argues, because the violinist had no right to the use of your kidneys.",
    objection: "Critics distinguish killing from letting die: unplugging lets the violinist die, but an abortion may directly kill.",
  },
  {
    claim: "Therefore, even if the foetus is a person, abortion is at least sometimes permissible: certainly in cases like rape, and perhaps more widely.",
    kind: "conclusion",
    note: "Thomson herself held that the conclusion is limited. She did not claim that every abortion is permissible, and thought some late abortions for trivial reasons would be indecent.",
  },
];

export const lesson: LessonContent = {
  id: "p5.5.1",
  minutes: 85,
  links: {
    revisits: ["p5.4.1", "p5.3.3", "p5.4.2"],
    foreshadows: ["p25.1.1", "p5.5.2", "p5.5.3"],
  },

  puzzle: (
    <>
      <p>
        Few moral questions divide people so deeply, or so publicly, as abortion. Thoughtful people of good will reach
        opposite conclusions, and often each side finds the other&rsquo;s view barely intelligible. Philosophy cannot make
        the disagreement disappear. What it can do is find exactly where the disagreement lies, separate strong arguments
        from weak ones, and show that some arguments do not need the premise everyone assumes they need.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Judith Jarvis Thomson&rsquo;s famous argument of 1971, and challenge the steps you doubt. Notice which
        premise she grants her opponents.
      </p>
      <ArgumentStepViz steps={STEPS} title="Thomson&rsquo;s violinist" />
    </>
  ),

  theory: (
    <>
      <Definition title="the standard argument and the personhood question">
        <p>
          A common argument against abortion runs: it is wrong to kill an innocent person; the foetus is an innocent
          person; so abortion is wrong. Much debate has focused on the second premise. When does a human organism become a{" "}
          <strong>person</strong>, a being with full moral status? Answers include conception, the point after which
          twinning is no longer possible, the beginning of brain activity, sentience, viability outside the womb, and birth.
          Mary Anne Warren proposed that personhood requires capacities such as consciousness, reasoning and
          self-awareness, and argued that a foetus has none of them; critics replied that by her criteria newborns would not
          be persons either.
        </p>
      </Definition>

      <Example title="a future like ours">
        <p>
          Don Marquis argued against abortion without relying on personhood. What makes it wrong to kill you or me, he
          said, is that it deprives us of our future: all the experiences, projects and enjoyments we would have had. A
          typical foetus has a future like ours, so killing it is seriously wrong for the same reason. The argument also
          explains why killing is wrong in cases that trouble other views, such as killing someone in a temporary coma.
          Critics ask whether a being that has no mental life yet can be deprived of a future in the relevant sense, and
          whether the argument would make contraception wrong too; Marquis replies that before conception there is no
          individual who loses anything.
        </p>
      </Example>

      <Definition title="beyond rights">
        <p>
          Rosalind Hursthouse argued that the debate&rsquo;s focus on rights and the status of the foetus misses much that
          matters. Even where an act is within one&rsquo;s rights, a virtue ethicist can ask whether doing it in particular
          circumstances would be callous, light-minded or self-centred, or instead responsible and serious. Her approach
          takes seriously the facts of pregnancy, parenthood and the value of family life, and treats many decisions as
          tragic rather than simply right or wrong. Many care ethicists likewise stress the relationship between the
          pregnant person and the foetus, and the conditions in which the choice is made.
        </p>
      </Definition>

      <Remark title="intermediate views">
        <p>
          Many philosophers hold <strong>gradualist</strong> views: the moral status of the foetus increases through
          pregnancy, so that early abortions require less justification than late ones. Such views fit the intuitions of
          many people, and the structure of many legal systems, but they must explain why status should grow gradually and
          what the stages track. Whatever view one takes, the question of what the law should permit is a further one,
          since a society can disagree about morality and still need a common law.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "grant",
      rung: "check",
      prompt: <p>Which premise does Thomson grant her opponents for the sake of argument?</p>,
      answer: {
        kind: "choice",
        options: ["That abortion is always wrong.", "That the foetus is a person from conception.", "That the violinist has no rights.", "That killing is never wrong."],
        correct: [1],
      },
    },
    {
      key: "marquis",
      rung: "check",
      prompt: <p>According to Marquis, what makes killing wrong?</p>,
      answer: {
        kind: "choice",
        options: ["It causes pain.", "It deprives the victim of a valuable future.", "It breaks the law.", "It violates the victim's autonomy only."],
        correct: [1],
      },
    },
    {
      key: "warren",
      rung: "apply",
      prompt: <p>What is the most common objection to Warren&rsquo;s criteria for personhood?</p>,
      answer: {
        kind: "choice",
        options: [
          "They would make many animals persons.",
          "They would seem to imply that newborns are not persons either.",
          "They depend on religious belief.",
          "They cannot be stated clearly.",
        ],
        correct: [1],
      },
    },
    {
      key: "point",
      rung: "apply",
      prompt: <p>What is the main point of Thomson&rsquo;s violinist case?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the foetus is not a person.",
          "That a right to life need not include a right to use another person's body.",
          "That killing is never permitted.",
          "That music lovers are dangerous.",
        ],
        correct: [1],
      },
    },
    {
      key: "hurst",
      rung: "apply",
      prompt: <p>Which question would Hursthouse add to the debate about abortion?</p>,
      answer: {
        kind: "choice",
        options: [
          "Does the foetus have a right to life?",
          "In these circumstances, would acting this way be callous or light-minded, or responsible and serious?",
          "What maximises total happiness?",
          "What does the law permit?",
        ],
        correct: [1],
      },
    },
    {
      key: "reply",
      rung: "prove",
      prompt: (
        <p>
          Set out the strongest objection to Thomson&rsquo;s argument that you know, and say how Thomson, or a defender,
          might reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States a clear objection, such as the responsibility objection or the distinction between killing and letting die.",
          "Gives a plausible reply, such as Thomson's people-seeds case or her account of unjust killing.",
          "Weighs the exchange fairly. Any reasonable answer, whatever its conclusion, earns full credit.",
        ],
      },
    },
    {
      key: "future",
      rung: "stretch",
      prompt: (
        <p>
          Does Marquis&rsquo;s argument show too much, for example that contraception is wrong, or too little? Explain the
          worry and assess Marquis&rsquo;s reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the worry that sperm and egg also have a potential future like ours.",
          "Explains Marquis's reply that before conception there is no single individual who loses the future.",
          "Assesses the reply in a reasoned way. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the standard argument about abortion and the question of personhood, Thomson's violinist argument, Marquis's future-like-ours argument, Hursthouse's virtue ethical approach, and gradualist views, fairly to each side.",

  glimpse: (
    <p>
      The next lesson asks about the moral status of animals. The Applied Ethics course returns to abortion in more depth.
    </p>
  ),
};
