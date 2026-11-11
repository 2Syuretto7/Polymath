import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { HalvingViz } from "@/components/viz/HalvingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.1.5",
  minutes: 65,
  links: {
    revisits: ["p4.1.3", "p1.3.1"],
    foreshadows: ["p4.7.1", "p7.3.2"],
  },

  puzzle: (
    <>
      <p>
        Parmenides argued that what is cannot come from what is not, and that there can be no empty space. Zeno argued
        that dividing things without end leads to absurdity. Yet the world plainly contains many things that move and
        change.
      </p>
      <p>
        In the fifth century BCE, Leucippus and his student Democritus of Abdera proposed a way to keep almost everything
        Parmenides said and still have a world of change. Their idea turned out, two thousand years later, to be
        astonishingly close to the truth. What was it, and how did they argue for it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Cut a stick in half, then cut each half, and so on. Can this go on for ever? If it could be carried out completely,
        the final pieces would either have some size or none. Either answer seems to lead to absurdity. Halve the stick
        below and think about the end of the process.
      </p>
      <HalvingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="atoms and void">
        <p>
          The atomists held that reality consists of two things: <strong>atoms</strong> (from the Greek for
          &ldquo;uncuttable&rdquo;) and <strong>void</strong>, empty space. Atoms are too small to see, infinitely many,
          and differ only in shape, size, arrangement and position. Each is solid, unchanging and indivisible, like
          Parmenides&rsquo; one being, but there are many of them, separated by void. All change is atoms moving through
          the void, combining and separating.
        </p>
      </Definition>

      <Remark title="the answer to Parmenides">
        <p>
          Parmenides denied that what is not can be. The atomists boldly said that it can: the void is &ldquo;what is
          not&rdquo;, and it is just as real as the atoms. With void allowed, there can be many beings and motion between
          them. Meanwhile nothing comes from nothing: atoms are never created or destroyed, only rearranged. Coming to be
          is atoms coming together; passing away is their dispersal.
        </p>
      </Remark>

      <Example title="the argument from division">
        <p>
          Aristotle reports an argument of roughly this form. Suppose a body were divisible through and through, and the
          division were carried out everywhere. What would remain? Not bodies with size, since those could be divided
          further. So either nothing, or points without size. But a body cannot be made of nothing, nor of sizeless
          points, since putting together things of no size never yields something with size. So division must stop at
          bodies that cannot be divided: atoms.
        </p>
        <p>
          The mathematics of the last lesson suggests a reply: a line can be made of points without size, if there are
          uncountably many, as Real Analysis I will explain. But this answer took more than two thousand years to find.
        </p>
      </Example>

      <Definition title="convention and reality">
        <p>
          Democritus is reported, in a fragment preserved by Sextus Empiricus, to have said that sweet, bitter, hot, cold
          and colour exist by convention, and in reality there are only atoms and void. Tastes and colours are how
          arrangements of atoms affect us, not features of the atoms themselves. This is an early form of the distinction
          between primary qualities (shape, size, motion), which things really have, and secondary qualities (colour,
          taste), which depend on perceivers.
        </p>
      </Definition>

      <Remark title="necessity, and a worry about knowledge">
        <p>
          On this picture, everything happens by the collisions of atoms, with no purpose behind it. Leucippus is reported
          to have said that nothing happens at random, but everything for a reason and by necessity, an early statement
          of determinism. Democritus also saw a problem in his own theory: if the senses only report convention, and all
          our evidence comes from the senses, how can reason know that there are atoms? A fragment has the senses reply
          to the mind that it takes its evidence from them, and that in throwing them down it throws itself down.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "two",
      rung: "check",
      prompt: <p>According to the atomists, what does reality consist of?</p>,
      answer: { kind: "choice", options: ["Water", "Atoms and void", "The boundless", "One unchanging being"], correct: [1] },
    },
    {
      key: "differ",
      rung: "check",
      prompt: <p>In which respects do atoms differ from one another, on the atomist view? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["shape", "colour", "size", "taste"], correct: [0, 2] },
    },
    {
      key: "parmenides",
      rung: "apply",
      prompt: <p>Which of Parmenides&rsquo; claims did the atomists reject?</p>,
      answer: {
        kind: "choice",
        options: [
          "Nothing comes from nothing.",
          "What is not cannot be; there is no void.",
          "What truly is does not change in itself.",
          "Reason can correct the senses.",
        ],
        correct: [1],
      },
    },
    {
      key: "convention",
      rung: "apply",
      prompt: <p>On Democritus&rsquo; view, why does honey taste sweet?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because its atoms are sweet.",
          "Because of how the shapes and arrangement of its atoms affect us.",
          "Because the gods made it so.",
          "Because sweetness is a kind of void.",
        ],
        correct: [1],
      },
    },
    {
      key: "division",
      rung: "apply",
      prompt: <p>In the argument from division, why can a body not be made of parts with no size?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because such parts would be too heavy.",
          "Because putting together things of no size seems never to give something with size.",
          "Because the void forbids it.",
          "Because atoms are coloured.",
        ],
        correct: [1],
      },
    },
    {
      key: "argument",
      rung: "prove",
      prompt: (
        <p>
          Set out the atomists&rsquo; argument from division as a dilemma, and explain how its conclusion answers the
          worry raised by Zeno.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the dilemma: if a body were divided through and through, the remaining parts would have size or none.",
          "Shows each horn is absurd: parts with size could be divided further; sizeless parts cannot add up to a body.",
          "Concludes that division stops at indivisible atoms, which blocks paradoxes that depend on dividing without end. A clear outline is enough.",
        ],
      },
    },
    {
      key: "senses",
      rung: "stretch",
      prompt: (
        <p>
          Democritus says that colours and tastes are only by convention, yet all our evidence for atoms comes through the
          senses. Is his theory self-undermining? Defend an answer, perhaps with reference to how modern science handles
          the same problem.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the worry clearly: if the senses do not show reality as it is, they cannot support a theory of what reality is.",
          "Offers a response, for example that the senses can be unreliable about some qualities while still giving evidence about structure, or that theory and observation correct each other.",
          "Reaches a reasoned verdict. Any thoughtful position is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the atomist theory of atoms and void, how it answers Parmenides, the argument from division, and Democritus's distinction between convention and reality.",

  glimpse: (
    <p>
      Epicurus revived atomism a century later as the basis of a philosophy of life, adding a famous swerve to make room
      for freedom. Early Modern Philosophy returns to the distinction between primary and secondary qualities with Locke,
      when atomism had become the new science.
    </p>
  ),
};
