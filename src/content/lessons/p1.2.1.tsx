import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { MindBodyViz } from "@/components/viz/MindBodyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.2.1",
  minutes: 70,
  links: {
    revisits: ["p0.4.1", "p1.1.1"],
    foreshadows: ["p7.1.4", "p7.1.5", "p12.2.3", "p12.5.2", "p20.3.1"],
  },

  puzzle: (
    <>
      <p>
        Decide to raise your arm, and then raise it. Something mental, a decision, seems to have caused something physical, a
        movement. Now press your thumbnail hard into your palm. Something physical, pressure on skin, seems to have caused
        something mental, a sharp feeling.
      </p>
      <p>
        Your brain is a wet organ of a little under one and a half kilograms, made of cells that pass chemical and electrical signals.
        Your experience of the colour of the sky, or of the taste of tamarind, does not seem to be made of anything at all.
        How can the two be connected? Are they two things, or one?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        This is the <strong>mind-body problem</strong>. Every answer to it must deal with two sets of facts that pull in
        opposite directions. On one side, mind and brain are intimately linked: drugs, injuries and sleep change the mind by
        changing the brain. On the other, the mind seems to have features that no physical thing has: experiences feel like
        something from the inside, and thoughts are <em>about</em> things.
      </p>
      <p>
        Three classic answers are tested below against four puzzles. Watch where each one strains. A position that strains is
        not thereby refuted, but it owes us an explanation.
      </p>
      <MindBodyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="substance dualism">
        <p>
          <strong>Substance dualism</strong> holds that a person is made of two different kinds of thing: a body, which is
          physical and extended in space, and a mind, which is non-physical and thinks. René Descartes argued in his{" "}
          <cite>Meditations</cite> (1641) that he could clearly conceive of his mind existing without his body, and so the two
          must be distinct.
        </p>
      </Definition>

      <Quote source={<>Elisabeth of Bohemia, letter to Descartes, 6 May 1643, translated by Lisa Shapiro</>}>
        <p>
          So I ask you please to tell me how the soul of a human being (it being only a thinking substance) can determine the
          bodily spirits, in order to bring about voluntary actions.
        </p>
      </Quote>
      <p>
        Princess Elisabeth had found the deepest difficulty for dualism, the <strong>interaction problem</strong>. Pushing
        seems to need contact, and contact needs a surface and a place; Descartes&rsquo; mind has neither. His replies did not
        satisfy her, and many think they never have been satisfied.
      </p>

      <Definition title="physicalism and the identity theory">
        <p>
          <strong>Physicalism</strong> holds that everything that exists is physical, or depends wholly on the physical. Its
          boldest form, the <strong>identity theory</strong> of U. T. Place (1956) and J. J. C. Smart (1959), says that each
          kind of mental state is a kind of brain state, just as lightning turned out to be electrical discharge and water
          turned out to be H₂O. Interaction is then no mystery: brain states cause other brain states and movements.
        </p>
      </Definition>

      <Definition title="functionalism">
        <p>
          Hilary Putnam objected in 1967 that if pain is one particular human brain state, then an octopus or a Martian with
          different wiring could not be in pain, which seems wrong. Pain can be <strong>multiply realised</strong>.{" "}
          <strong>Functionalism</strong> answers that a mental state is defined by its role: pain is whatever state is caused
          by damage, causes distress and avoidance, and so on. Like a mousetrap, it can be built from many materials.
        </p>
      </Definition>

      <Example title="Mary the colour scientist">
        <p>
          Frank Jackson (1982) imagined Mary, a brilliant scientist who has lived all her life in a black and white room and
          has learned every physical fact about colour vision: wavelengths, retinas, neurons. One day she walks out and sees a
          red tomato. Does she learn something new? If she does, namely what it is like to see red, then not every fact is a
          physical fact, and physicalism, in both forms above, is in trouble.
        </p>
      </Example>

      <Remark title="an older dualism">
        <p>
          Dualism is not only a European idea. The Sāṃkhya school of Indian philosophy, among the oldest, divides reality into{" "}
          <em>puruṣa</em>, pure consciousness that witnesses, and <em>prakṛti</em>, the material world. Strikingly, Sāṃkhya
          counts the intellect and the thinking mind on the side of matter; only bare awareness belongs to puruṣa. Where the
          line is drawn matters as much as whether there is one.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dualism",
      rung: "check",
      prompt: <p>Which view says the mind is a non-physical thing distinct from the body?</p>,
      answer: { kind: "choice", options: ["substance dualism", "identity theory", "functionalism", "behaviourism"], correct: [0] },
    },
    {
      key: "elisabeth",
      rung: "check",
      prompt: <p>Elisabeth of Bohemia&rsquo;s question to Descartes is chiefly a problem about&hellip;</p>,
      answer: {
        kind: "choice",
        options: ["how we know other people have minds", "how a non-physical mind can cause bodily movement", "whether animals can think", "whether we are dreaming"],
        correct: [1],
      },
    },
    {
      key: "octopus",
      rung: "apply",
      prompt: <p>&ldquo;An octopus can feel pain, though its neurons are very unlike ours.&rdquo; This is an objection mainly to&hellip;</p>,
      answer: { kind: "choice", options: ["substance dualism", "the identity theory", "functionalism", "scepticism"], correct: [1] },
    },
    {
      key: "role",
      rung: "apply",
      prompt: <p>According to functionalism, what makes a state a pain?</p>,
      answer: {
        kind: "choice",
        options: ["what it is made of", "the role it plays: its typical causes and effects", "that it is non-physical", "that the person says so"],
        correct: [1],
      },
    },
    {
      key: "mary",
      rung: "apply",
      prompt: <p>If Mary does learn something new on seeing red, what would that suggest?</p>,
      answer: {
        kind: "choice",
        options: [
          "that Mary did not really know every physical fact",
          "that there are facts about experience which are not physical facts",
          "that colours do not exist",
          "that Mary was dreaming",
        ],
        correct: [1],
      },
    },
    {
      key: "interaction",
      rung: "prove",
      prompt: (
        <p>
          Set out the interaction problem as an argument in standard form, with numbered premises and a conclusion against
          substance dualism. Then say which premise a dualist could most plausibly reject, and why.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States a premise that the mind, on dualism, is non-physical and has no location or extension.",
          "States a premise linking causation of physical things to physical contact, location or energy.",
          "Draws the conclusion that a dualist mind could not cause bodily movement, or that dualism is in trouble.",
          "Picks a premise to reject and gives a reason, such as that causation may not need contact.",
        ],
      },
    },
    {
      key: "conceivability",
      rung: "stretch",
      prompt: (
        <p>
          Descartes reasoned: I can clearly conceive of my mind without my body, so they are distinct. Is conceiving that
          something is possible good evidence that it is possible? Test the reasoning against an example of your own, such as
          water without H₂O.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the conceivability argument clearly.",
          "Offers an example where something seems conceivable but may not be possible, or a reason to trust conceivability.",
          "Reaches a judgement about how much the argument shows, with a reason.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the mind-body problem is, and give the strongest point for and against one of the three positions in this lesson.",

  glimpse: (
    <p>
      If minds are hidden on the inside, how do you know anyone else has one? That is the next lesson. Descartes&rsquo;
      dualism and Elisabeth&rsquo;s objection return in Early Modern Philosophy; multiple realisability and Mary&rsquo;s room
      are central in Philosophy of Mind; and Sāṃkhya&rsquo;s puruṣa and prakṛti have their own lessons in Indian Philosophy.
    </p>
  ),
};
