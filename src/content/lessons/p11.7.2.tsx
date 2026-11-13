import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FrankfurtViz } from "@/components/viz/FrankfurtViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.7.2",
  minutes: 80,
  links: {
    revisits: ["p1.3.3", "p11.7.1", "p1.3.2"],
    foreshadows: ["p11.7.3", "p11.7.4", "p13.4.3"],
  },

  puzzle: (
    <>
      <p>
        It seems obvious that you are to blame for something only if you could have done otherwise. The consequence argument
        threatens the ability to do otherwise. But suppose someone was ready to force your hand and never had to. You acted
        entirely on your own, yet could not have acted differently. Are you to blame?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Set up Black&rsquo;s device and Jones&rsquo;s inclination, and compare two tests of responsibility. Then change how
        the warning twitch is linked to Jones&rsquo;s choice.
      </p>
      <FrankfurtViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the principle of alternate possibilities">
        <p>
          <strong>PAP</strong>: a person is morally responsible for what they have done only if they could have done
          otherwise. Many arguments for incompatibilism run through PAP: determinism rules out alternatives, and so rules out
          responsibility.
        </p>
      </Definition>

      <Example title="Frankfurt's case (1969)">
        <p>
          Black wants Jones to do A and can control Jones&rsquo;s brain. He waits to see what Jones will do, ready to intervene
          if Jones shows signs of choosing otherwise. Jones does A for his own reasons, and Black does nothing. Jones could not
          have done otherwise, yet Black played no part in what Jones did. Frankfurt concluded that Jones is responsible and
          PAP is false: what matters is the actual sequence that led to the act, not the alternatives.
        </p>
      </Example>

      <Remark title="the flicker of freedom">
        <p>
          The defender of PAP points to the twitch. Jones could at least have begun to choose otherwise, and shown the sign.
          Perhaps that flicker is enough of an alternative. Fischer replies that the flicker is too thin to ground
          responsibility: an involuntary twitch is not something one is blamed or praised for.
        </p>
      </Remark>

      <Remark title="the Widerker–Kane dilemma">
        <p>
          Is the twitch connected to Jones&rsquo;s choice deterministically? If so, the case assumes determinism, and a
          libertarian will not grant that Jones is responsible: the case begs the question. If not, the twitch does not settle
          the choice, so Jones could still have chosen otherwise after it, and he has an alternative after all. Later cases by
          Mele and Robb, and Pereboom&rsquo;s cases, try to remove the prior sign or to leave only alternatives too weak to
          matter.
        </p>
      </Remark>

      <Remark title="semicompatibilism">
        <p>
          Fischer separates <strong>regulative control</strong>, the ability to do otherwise, from <strong>guidance
          control</strong>, acting from one&rsquo;s own reasons-responsive mechanism. If Frankfurt is right, responsibility
          needs only guidance control. Then even if the consequence argument shows determinism removes alternatives,
          responsibility can survive: this is semicompatibilism.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pap",
      rung: "check",
      prompt: <p>What does the principle of alternate possibilities say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every event has alternative causes.",
          "A person is morally responsible only if they could have done otherwise.",
          "There are many possible worlds.",
          "Responsibility requires determinism.",
        ],
        correct: [1],
      },
    },
    {
      key: "aim",
      rung: "check",
      prompt: <p>What are Frankfurt cases meant to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That determinism is true.",
          "That someone can be responsible though they could not have done otherwise.",
          "That no one is ever responsible.",
          "That brain devices are dangerous.",
        ],
        correct: [1],
      },
    },
    {
      key: "inter",
      rung: "apply",
      prompt: <p>In the case where Black must intervene because Jones shows the twitch, is Jones responsible for voting for A?</p>,
      answer: { kind: "choice", options: ["Yes, fully", "No: the device chose for him", "Only if determinism is true", "Only by PAP"], correct: [1] },
    },
    {
      key: "flicker",
      rung: "apply",
      prompt: <p>What is the flicker of freedom reply?</p>,
      answer: {
        kind: "choice",
        options: [
          "Jones could have shown the sign of choosing otherwise, and that alternative may be enough for PAP.",
          "Black is responsible instead of Jones.",
          "The device might fail.",
          "Jones is not really free.",
        ],
        correct: [0],
      },
    },
    {
      key: "dilemma",
      rung: "apply",
      prompt: <p>The Widerker–Kane dilemma says that if the twitch does not determine the choice, then:</p>,
      answer: {
        kind: "choice",
        options: [
          "Black can always intervene in time.",
          "Jones could still have chosen otherwise after the twitch, so he has an alternative.",
          "Jones is not responsible.",
          "Determinism must be true.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Do Frankfurt cases refute the principle of alternate possibilities? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States PAP and the structure of a Frankfurt case.",
          "Considers a reply, such as the flicker of freedom or the Widerker–Kane dilemma.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "semi",
      rung: "stretch",
      prompt: <p>If Frankfurt is right, does it matter whether the consequence argument is sound?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that the consequence argument targets the ability to do otherwise, and Frankfurt separates this from responsibility.",
          "Considers whether free will might still matter for something beyond responsibility.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the principle of alternate possibilities, how Frankfurt’s case of Black and Jones is meant to refute it, the flicker of freedom and Widerker–Kane replies, and Fischer’s semicompatibilism.",

  glimpse: (
    <p>
      The next lessons look at the incompatibilist options: libertarianism, which defends undetermined free choice, and hard
      incompatibilism, which gives up free will. Ethics later asks how luck bears on responsibility.
    </p>
  ),
};
