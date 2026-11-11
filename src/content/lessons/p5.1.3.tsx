import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Either right actions are right because God commands them, or God commands them because they are right.",
    kind: "premise",
    note: "This is the modern form of the question Socrates puts to Euthyphro: is the pious loved by the gods because it is pious, or pious because it is loved?",
    objection: "Some defenders say the dilemma is false: there is a third option, that God's commands flow from God's own nature, which is essentially good. Others reply that this only moves the question to whether God's nature is good by some independent standard.",
  },
  {
    claim: "If right actions are right only because God commands them, then God's commands are arbitrary: had God commanded cruelty, cruelty would have been right.",
    kind: "premise",
    note: "On this horn there is nothing that makes cruelty wrong apart from the command. And saying that God is good becomes empty: it means only that God does what God commands.",
    objection: "A defender may reply that God would never command cruelty. But if this is because cruelty is wrong, we have moved to the other horn.",
  },
  {
    claim: "If God commands right actions because they are right, then there is a standard of right and wrong independent of God's will.",
    kind: "premise",
    note: "God, being wise, knows this standard and tells us about it. But then God is a reliable guide to morality, not its source.",
  },
  {
    claim: "So either morality is arbitrary, or it does not depend on God's commands.",
    kind: "conclusion",
    note: "Neither result is what the divine command theorist wanted. Many religious thinkers, including Aquinas, accept the second horn and hold that morality rests on reason and human nature.",
  },
];

export const lesson: LessonContent = {
  id: "p5.1.3",
  minutes: 80,
  links: {
    revisits: ["p5.1.2", "p4.2.2", "p1.5.3"],
    foreshadows: ["p5.1.4", "p6.4.4", "p13.3.4"],
  },

  puzzle: (
    <>
      <p>
        Many people believe that without God there could be no right and wrong; Dostoevsky has a character in{" "}
        <em>The Brothers Karamazov</em> suggest that if there is no God, everything is permitted. If morality comes from
        God, it would be objective, not a matter of opinion or custom, and it would carry the greatest possible authority.
        But a question Plato asked over two thousand years ago still stands in the way. Does God command what is right
        because it is right, or is it right because God commands it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the Euthyphro dilemma, and look at the objections at each step.</p>
      <ArgumentStepViz steps={STEPS} title="The Euthyphro dilemma" />
    </>
  ),

  theory: (
    <>
      <Definition title="divine command theory">
        <p>
          The <strong>divine command theory</strong> says that an action is morally required because God commands it,
          wrong because God forbids it, and permissible because God neither commands nor forbids it. Its attractions are
          clear: it makes morality objective, it explains why we should be moral, since God commands it and will judge us,
          and it fits the religious practice of many traditions.
        </p>
      </Definition>

      <Example title="the two horns">
        <p>
          On the first horn, right is whatever God commands, and so morality is arbitrary: there is no reason behind the
          commands, and if God had commanded cruelty, cruelty would be right. On the second, God commands what is right
          because it is right, so there must be a standard of right and wrong that holds independently of God&rsquo;s will.
          God may know it perfectly and tell us about it, but did not make it. Either way, the divine command theory in
          its simple form fails.
        </p>
      </Example>

      <Definition title="a modified theory">
        <p>
          Robert Adams proposed a modified divine command theory: wrongness is being contrary to the commands of a loving
          God. A loving God would not command cruelty for its own sake, so the arbitrariness worry is met. Critics ask
          whether God&rsquo;s being loving is good by a standard independent of God, which would bring back the second horn,
          and what would follow if God were not loving.
        </p>
      </Definition>

      <Remark title="other difficulties, and natural law">
        <p>
          Even a believer faces practical problems: which scriptures record God&rsquo;s commands, how they should be
          interpreted, and what to say to people of other faiths or none who reach the same moral conclusions. Many
          religious thinkers have preferred the theory of natural law, developed by Aquinas, on which God created a world
          with a rational order, and moral truths can be known by reason from our nature. On that view, religious and
          non-religious people face the same moral questions, and answer them with the same tools.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "theory",
      rung: "check",
      prompt: <p>What does the divine command theory say?</p>,
      answer: {
        kind: "choice",
        options: [
          "An action is right because God commands it.",
          "God commands only what reason already shows to be right.",
          "There is no God, so nothing is right or wrong.",
          "Each religion has its own morality, all equally valid.",
        ],
        correct: [0],
      },
    },
    {
      key: "source",
      rung: "check",
      prompt: <p>In which dialogue does Plato first raise the dilemma?</p>,
      answer: { kind: "choice", options: ["the Republic", "the Euthyphro", "the Meno", "the Symposium"], correct: [1] },
    },
    {
      key: "horn1",
      rung: "apply",
      prompt: <p>If actions are right only because God commands them, which problem arises?</p>,
      answer: {
        kind: "choice",
        options: [
          "Morality becomes arbitrary: any command would make its object right.",
          "God becomes unnecessary to morality.",
          "Nobody could know what God commands.",
          "Moral truths become relative to cultures.",
        ],
        correct: [0],
      },
    },
    {
      key: "horn2",
      rung: "apply",
      prompt: <p>If God commands actions because they are right, what follows?</p>,
      answer: {
        kind: "choice",
        options: [
          "Morality depends on God's will.",
          "There is a standard of right and wrong independent of God's will.",
          "God could command cruelty.",
          "Nothing is right or wrong.",
        ],
        correct: [1],
      },
    },
    {
      key: "adams",
      rung: "apply",
      prompt: <p>How does Robert Adams modify the theory?</p>,
      answer: {
        kind: "choice",
        options: [
          "He identifies wrongness with being contrary to the commands of a loving God.",
          "He says morality depends on culture.",
          "He drops God from morality entirely.",
          "He says only religious people can be moral.",
        ],
        correct: [0],
      },
    },
    {
      key: "dilemma",
      rung: "prove",
      prompt: (
        <p>
          Set out the Euthyphro dilemma as an argument against the divine command theory. Then present one reply on behalf
          of the theory and assess whether it escapes the dilemma.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the two horns and what follows from each: arbitrariness, or a standard independent of God.",
          "Presents a reply, such as Adams' loving God, or grounding commands in God's essentially good nature.",
          "Assesses whether the reply avoids both horns. Any reasoned assessment earns full credit.",
        ],
      },
    },
    {
      key: "believer",
      rung: "stretch",
      prompt: (
        <p>
          Can a religious believer consistently hold that morality is independent of God&rsquo;s will? Consider what role
          God could still play in the moral life, and how natural law theory answers this question.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Recognises that accepting the second horn is open to believers, with examples such as Aquinas.",
          "Suggests roles God might still play, such as creating beings with a nature, revealing moral truths, or giving motivation.",
          "Reaches a reasoned view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the divine command theory says and why it is attractive, the two horns of the Euthyphro dilemma, Adams' modified theory, and why many religious thinkers prefer natural law.",

  glimpse: (
    <p>
      The next lesson considers a theory on which morality rests on nothing but self-interest. Medieval Philosophy studies
      natural law in Aquinas, and Moral Philosophy asks what it would take for there to be moral facts.
    </p>
  ),
};
