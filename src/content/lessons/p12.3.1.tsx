import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MachineTableViz } from "@/components/viz/MachineTableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.3.1",
  minutes: 80,
  links: {
    revisits: ["p12.2.3", "p12.2.1", "p1.2.1"],
    foreshadows: ["p12.3.2", "p12.3.4", "p12.5.2"],
  },

  puzzle: (
    <>
      <p>
        What makes something a heart? Not what it is made of: an artificial heart of plastic and titanium is still a heart,
        because it pumps blood. Perhaps minds are like that. What makes a state a pain is not its material but what it does.
        Could this explain how octopuses, humans and robots might all feel pain?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Insert coins and follow the machine&rsquo;s states. Ask what makes S5 the state it is.</p>
      <MachineTableViz />
    </>
  ),

  theory: (
    <>
      <Definition title="functionalism">
        <p>
          <strong>Functionalism</strong> holds that a mental state is defined by its causal role: its typical causes, its
          typical effects on behaviour, and its relations to other mental states. Pain is whatever state is caused by bodily
          damage, causes distress, the desire for it to stop, and avoidance. Any system with states playing these roles has a
          mind, whatever it is made of.
        </p>
      </Definition>

      <Example title="defining states together">
        <p>
          The circularity that defeated behaviourism is harmless here. Following Ramsey and Lewis, write the whole theory
          linking beliefs, desires, perceptions and behaviour, replace each mental term by a variable, and say there exist
          states related in these ways. Then &ldquo;belief that it will rain&rdquo; is defined as the state occupying its place
          in that network. All the mental states are defined at once, in terms of inputs and outputs.
        </p>
      </Example>

      <Remark title="varieties">
        <p>
          <strong>Machine functionalism</strong> (Putnam) modelled minds on machine tables like the one above.{" "}
          <strong>Analytic functionalism</strong> (Lewis, Armstrong) takes the roles from common-sense psychology, as the
          meaning of our mental words. <strong>Psychofunctionalism</strong> (Fodor, Block) takes them from scientific
          psychology. All agree that mental kinds are multiply realisable.
        </p>
      </Remark>

      <Remark title="the inverted spectrum">
        <p>
          Could someone&rsquo;s colour experiences be systematically swapped, red for green, while every causal role stays the
          same? They would call ripe tomatoes red and stop at red lights. If that is possible, two states can play the same role
          yet feel different, and functionalism leaves out how experiences feel.
        </p>
      </Remark>

      <Remark title="absent qualia and the China brain">
        <p>
          Ned Block imagined the population of China, each person with a radio, simulating the functional organisation of a
          brain for an hour, connected to a body. The system would have states playing all the right roles. Would it feel
          pain? Many say no. Functionalism threatens to be too <em>liberal</em>, crediting minds to systems that lack them, just
          as type identity was too <em>chauvinist</em>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>On functionalism, what makes a state a pain?</p>,
      answer: {
        kind: "choice",
        options: [
          "Being C-fibre firing.",
          "Its causal role: its causes, its effects and its relations to other mental states.",
          "Being in a non-physical mind.",
          "Being expressed in behaviour.",
        ],
        correct: [1],
      },
    },
    {
      key: "heart",
      rung: "check",
      prompt: <p>Why is the artificial heart a good analogy for functionalism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because hearts are where emotions live.",
          "Because what makes something a heart is what it does, not what it is made of.",
          "Because hearts are machines.",
          "Because the heart causes thought.",
        ],
        correct: [1],
      },
    },
    {
      key: "circ",
      rung: "apply",
      prompt: <p>How does functionalism avoid the circularity objection to behaviourism?</p>,
      answer: {
        kind: "choice",
        options: [
          "It ignores other mental states.",
          "It defines all mental states together, as states related to each other and to inputs and outputs in specified ways.",
          "It denies that beliefs exist.",
          "It defines states by their physical make-up.",
        ],
        correct: [1],
      },
    },
    {
      key: "invert",
      rung: "apply",
      prompt: <p>What does the inverted spectrum, if possible, show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That colours are not real.",
          "That two states could play the same role but feel different, so functional role leaves out how experiences feel.",
          "That functionalism is chauvinist.",
          "That everyone sees the same colours.",
        ],
        correct: [1],
      },
    },
    {
      key: "china",
      rung: "apply",
      prompt: <p>What is the China brain meant to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That large populations are intelligent.",
          "That a system could have the right functional organisation without having experiences, so functionalism is too liberal.",
          "That radios can think.",
          "That brains are like countries.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Would the China brain feel pain? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes the case and the functionalist commitment.",
          "Considers both the intuition that it would not and the functionalist reply that the intuition is unreliable.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "feel",
      rung: "stretch",
      prompt: <p>Can functionalism account for beliefs better than for experiences? Why might that be?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that beliefs seem defined by their role in reasoning and action, while experiences also have a felt character.",
          "Considers what this means for functionalism as a complete theory of mind.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend functionalism with the heart and tea machine analogies, how defining all mental states together avoids behaviourism’s circularity, the main varieties, and the inverted spectrum and China brain objections.",

  glimpse: (
    <p>
      The next lesson asks how we could tell whether a machine thinks, with the Turing test. The computational theory treats the
      functional roles as computations, and the knowledge argument presses the worry about experience.
    </p>
  ),
};
