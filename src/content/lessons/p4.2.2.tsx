import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DefinitionTrialViz, type Attempt } from "@/components/viz/DefinitionTrialViz";
import type { LessonContent } from "@/lib/types";

const FLAWS = [
  "an example, not a definition",
  "the same act would be pious and impious",
  "says what happens to the pious, not what it is",
  "implies that we improve the gods",
  "leads back to an earlier attempt",
];

const ATTEMPTS: Attempt[] = [
  {
    proposal: "The pious is what I am doing now: prosecuting wrongdoers, even when the wrongdoer is my own father.",
    source: "5d–e",
    flaw: 0,
    why: "Socrates did not ask for a pious act but for the one form by which all pious acts are pious, a standard he could look to in order to judge any case.",
  },
  {
    proposal: "What is dear to the gods is pious, and what is not dear to them is impious.",
    source: "7a",
    flaw: 1,
    why: "On Euthyphro's own stories, the gods quarrel, and people quarrel about just and unjust, good and bad. So one act may be loved by some gods and hated by others, and would then be both pious and impious.",
  },
  {
    proposal: "The pious is what all the gods love, and the impious what they all hate.",
    source: "9e",
    flaw: 2,
    why: "Euthyphro agrees that the gods love the pious because it is pious, not the other way round. Then being loved by the gods is something that happens to the pious, not what makes it pious.",
  },
  {
    proposal: "Piety is the part of justice concerned with the care of the gods.",
    source: "12e",
    flaw: 3,
    why: "Care of horses or dogs aims at their good and improves them. No one thinks piety makes the gods better. Euthyphro shifts to service, like a slave's to a master, but cannot say what the gods produce with our help.",
  },
  {
    proposal: "Piety is knowledge of how to pray and sacrifice to the gods.",
    source: "14c",
    flaw: 4,
    why: "That makes piety a kind of trade. What do the gods receive? Honour and what pleases them, that is, what is dear to them. The argument has come round to the second attempt.",
  },
];

export const lesson: LessonContent = {
  id: "p4.2.2",
  minutes: 70,
  links: {
    revisits: ["p0.4.2", "p0.1.4"],
    foreshadows: ["p5.1.3", "p4.3.4"],
  },

  puzzle: (
    <>
      <p>
        In 399 BCE, outside the office of the magistrate who handled religious cases in Athens, Socrates meets Euthyphro.
        Socrates is there because he has been charged with impiety. Euthyphro is there to charge his own father with murder:
        a labourer killed a slave, the father tied the labourer up and left him in a ditch while asking what to do, and the
        labourer died of hunger and cold. Prosecuting one&rsquo;s father was shocking. Euthyphro is sure it is the pious
        thing to do.
      </p>
      <p>
        Socrates, about to be tried for impiety, asks him a simple question. What is piety?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Plato&rsquo;s <em>Euthyphro</em> is a short dialogue made of five attempts at an answer, each examined and found
        wanting. Read each attempt and diagnose its failure before you see Socrates&rsquo; objection. The numbers are the
        standard page references to Plato&rsquo;s text.
      </p>
      <DefinitionTrialViz attempts={ATTEMPTS} flaws={FLAWS} term="piety" />
    </>
  ),

  theory: (
    <>
      <Definition title="what Socrates is asking for">
        <p>
          Socrates wants the single <em>form</em> or character (<em>eidos</em>, <em>idea</em>) that all pious acts share
          and that makes them pious, so that he can use it as a standard, a pattern to look to in deciding whether any act
          is pious. A list of examples will not do. This demand for a definition that states the essence of a thing, not
          just its instances, is characteristic of Plato&rsquo;s Socrates.
        </p>
      </Definition>

      <Example title="the Euthyphro dilemma">
        <p>Faced with the third attempt, Socrates asks:</p>
        <p style={{ paddingLeft: 24 }}>
          Is the pious loved by the gods because it is pious, or is it pious because it is loved by the gods?
        </p>
        <p>
          He gives analogies: something is carried because someone carries it; it is not that someone carries it because
          it is a carried thing. Being loved is like being carried: a thing is loved because someone loves it. Euthyphro
          agrees that the gods love the pious <em>because</em> it is pious. But then &ldquo;pious&rdquo; and &ldquo;loved by
          all the gods&rdquo; cannot mean the same thing. If they did, we could substitute one for the other, and the
          pious would be loved because it is loved, which explains nothing. So being god-loved is at most a feature that
          the pious happens to have, not its nature.
        </p>
      </Example>

      <Remark title="the modern dilemma">
        <p>
          The question has been reshaped for monotheism: is an action right because God commands it, or does God command it
          because it is right? Both answers carry a cost.
        </p>
        <ul>
          <li>
            <strong>Right because commanded.</strong> Then if God had commanded cruelty, cruelty would have been right, and
            calling God good seems to say only that God approves of God&rsquo;s own commands.
          </li>
          <li>
            <strong>Commanded because right.</strong> Then rightness is a standard independent of God, which God recognises
            rather than creates, and we might come to know it without knowing God&rsquo;s will.
          </li>
        </ul>
        <p>
          Defenders of divine command theory have replied, for instance, that God&rsquo;s commands flow from God&rsquo;s
          necessarily good nature, so neither horn applies. Introduction to Ethics examines these replies.
        </p>
      </Remark>

      <Remark title="the irony">
        <p>
          The dialogue ends with Euthyphro hurrying away, and Socrates lamenting that he has not learned what piety is,
          which would have helped him at his trial. The setting matters. Euthyphro, confident that he knows what the gods
          want, is prosecuting his father; Socrates, who admits he does not know, is about to be condemned for impiety by
          a city that is equally confident.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "case",
      rung: "check",
      prompt: <p>Why is Euthyphro at the magistrate&rsquo;s office?</p>,
      answer: {
        kind: "choice",
        options: [
          "He has been charged with impiety.",
          "He is prosecuting his own father for murder.",
          "He is defending Socrates.",
          "He is a priest making a sacrifice.",
        ],
        correct: [1],
      },
    },
    {
      key: "dilemma",
      rung: "check",
      prompt: <p>Which question is the Euthyphro dilemma?</p>,
      answer: {
        kind: "choice",
        options: [
          "Do the gods exist, or not?",
          "Is the pious loved by the gods because it is pious, or pious because it is loved?",
          "Should one prosecute a parent, or not?",
          "Is piety a part of justice, or the whole of it?",
        ],
        correct: [1],
      },
    },
    {
      key: "quarrel",
      rung: "apply",
      prompt: <p>Why does the second attempt, &ldquo;what is dear to the gods is pious&rdquo;, fail?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the gods love nothing.",
          "Because the gods disagree, so one act could be both loved and hated, and so both pious and impious.",
          "Because it gives an example instead of a definition.",
          "Because it is too long.",
        ],
        correct: [1],
      },
    },
    {
      key: "carry",
      rung: "apply",
      prompt: <p>Which pair best matches Socrates&rsquo; point about being loved?</p>,
      answer: {
        kind: "choice",
        options: [
          "A thing is seen because someone sees it; it is not that someone sees it because it is a seen thing.",
          "A thing is heavy because it is carried.",
          "A thing is pious because it is old.",
          "A thing is carried because it is light.",
        ],
        correct: [0],
      },
    },
    {
      key: "horn",
      rung: "apply",
      prompt: (
        <p>
          In the modern dilemma, which horn implies that there is a standard of rightness that does not depend on
          God&rsquo;s will?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["Right because God commands it.", "God commands it because it is right.", "Neither horn.", "Both horns."],
        correct: [1],
      },
    },
    {
      key: "reconstruct",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct in numbered steps Socrates&rsquo; argument that the pious is not the same as what all the gods love.
          Mark the premise Euthyphro agrees to, and explain why substitution leads to a problem.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Includes the agreed premise that the gods love the pious because it is pious.",
          "Includes the premise that what the gods love is god-loved because they love it.",
          "Shows that if pious and god-loved were the same, substitution would give that the pious is loved because it is loved, or that the god-loved is loved because it is god-loved, which is circular or contradicts the agreed order. A clear outline earns full credit.",
        ],
      },
    },
    {
      key: "respond",
      rung: "stretch",
      prompt: (
        <p>
          A defender of divine command theory says: actions are right because God commands them, but God could not command
          cruelty, because God is essentially good. Does this escape the dilemma? Consider what &ldquo;good&rdquo; must
          mean in the reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains how the reply aims to avoid arbitrariness.",
          "Asks what makes God's nature good: if goodness is defined by God's nature, there may be a new circle; if not, an independent standard returns.",
          "Reaches a reasoned verdict. Any thoughtful position earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Socrates asks Euthyphro, how each attempted definition fails, what the Euthyphro dilemma is, and why it still matters for theories that ground morality in God's will.",

  glimpse: (
    <p>
      Socrates&rsquo; demand for the one form that all pious things share grows into Plato&rsquo;s theory of Forms. The
      modern version of the dilemma is the central objection to divine command theory, met again in Introduction to Ethics
      and in Philosophy of Religion.
    </p>
  ),
};
