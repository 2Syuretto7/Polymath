import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { ShipViz } from "@/components/viz/ShipViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.4.1",
  minutes: 65,
  links: {
    revisits: ["p0.4.3", "p1.2.1"],
    foreshadows: ["p4.1.2", "p11.5.1", "p11.5.2", "p20.5.2"],
  },

  puzzle: (
    <>
      <p>
        Find a photograph of yourself at the age of three. That child was a fraction of your size, made largely of different
        matter, unable to read, with beliefs, tastes and memories almost entirely unlike yours. You remember nothing of what
        the child did that day.
      </p>
      <p>And yet you say, without hesitation, &ldquo;that is me&rdquo;. What makes it true? What, exactly, has stayed the same?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        Two senses of &ldquo;the same&rdquo; are tangled here. You are not <em>exactly alike</em> the child; almost every
        property has changed. But you claim to be <em>one and the same person</em>: not a similar person, but the very
        individual, continuing through time. The question is what that continuing consists in.
      </p>
      <p>
        The oldest version of the puzzle is about a ship. The Athenians preserved the ship of the hero Theseus, replacing its
        planks one by one as they rotted. Replace them yourself below; then gather up the old planks and build a second ship.
      </p>
      <ShipViz />
    </>
  ),

  theory: (
    <>
      <Definition title="qualitative and numerical identity">
        <p>
          Two things are <strong>qualitatively identical</strong> when they are exactly alike, as two new coins from the same
          mint may be. A thing is <strong>numerically identical</strong> with something when they are one and the same thing,
          as the evening star is the morning star (both are Venus). Numerical identity allows great change: you are
          numerically identical with the child in the photograph though not qualitatively identical.
        </p>
      </Definition>

      <Definition title="the persistence question">
        <p>
          The <strong>persistence question</strong> for persons asks: under what conditions is a person at one time
          numerically identical with a person at another time? Answers are called <strong>criteria</strong> of personal
          identity. The next lesson examines the two main families: that what matters is continuity of mind, or continuity of
          body.
        </p>
      </Definition>

      <Example title="two ships">
        <p>
          Plutarch, in his <cite>Life of Theseus</cite>, reports that the ship became a standing example among
          philosophers for the question of things that grow, some saying it remained the same and others that it did not. Thomas Hobbes, in{" "}
          <cite>De Corpore</cite> (1655), added the twist you tried above: if someone kept the old planks and reassembled them,
          there would be two ships, and each would have a claim. Gradual continuity points to one; the original material points
          to the other.
        </p>
      </Example>

      <Quote source={<>Heraclitus, as reported by Plato in the <cite>Cratylus</cite></>}>
        <p>You could not step twice into the same river.</p>
      </Quote>
      <p>
        If everything is always changing, is anything ever the same from one moment to the next? Heraclitus&rsquo;s saying
        poses the question for everything, rivers and persons alike.
      </p>

      <Remark title="the chariot">
        <p>
          In the <cite>Milindapañha</cite>, an early Buddhist text, King Milinda asks the monk Nāgasena who he is. Nāgasena asks
          in return what a chariot is: is it the pole, the axle, the wheels, the frame? None of these alone, and nothing over
          and above them. &ldquo;Chariot&rdquo; is a convenient name for the parts in their arrangement, and so, Nāgasena says,
          is &ldquo;Nāgasena&rdquo;. On this view there is no further self beyond the changing body and mind; asking which
          ship, or which person, is &ldquo;really&rdquo; the original may be asking about something that is not there.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kinds",
      rung: "check",
      prompt: <p>Two identical twins are&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "numerically identical but not qualitatively identical",
          "nearly qualitatively identical but not numerically identical",
          "both numerically and qualitatively identical",
          "neither in any respect",
        ],
        correct: [1],
      },
    },
    {
      key: "venus",
      rung: "check",
      prompt: <p>&ldquo;The evening star is the morning star&rdquo; is a statement of&hellip;</p>,
      answer: { kind: "choice", options: ["numerical identity", "qualitative similarity", "a contradiction", "a definition"], correct: [0] },
    },
    {
      key: "question",
      rung: "apply",
      prompt: <p>Which question is the persistence question for persons?</p>,
      answer: {
        kind: "choice",
        options: [
          "What makes someone a person rather than an animal?",
          "Under what conditions is a person at one time the same person as someone at another time?",
          "How many people are there?",
          "What makes a person good?",
        ],
        correct: [1],
      },
    },
    {
      key: "hobbes",
      rung: "apply",
      prompt: <p>What does Hobbes&rsquo;s twist add to the ship of Theseus?</p>,
      answer: {
        kind: "choice",
        options: [
          "It shows the ship sinks.",
          "It produces a second ship made of the original planks, so two ships have a claim to be the original.",
          "It shows that ships cannot change.",
          "It proves the gradually repaired ship is a different ship.",
        ],
        correct: [1],
      },
    },
    {
      key: "chariot",
      rung: "apply",
      prompt: <p>What is Nāgasena&rsquo;s chariot meant to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That chariots do not exist in any sense.",
          "That a name like 'chariot' or 'Nāgasena' refers to parts in an arrangement, with no further thing beyond them.",
          "That a person is the same as a chariot.",
          "That the wheels are the true chariot.",
        ],
        correct: [1],
      },
    },
    {
      key: "which-ship",
      rung: "prove",
      prompt: (
        <p>
          Which ship is the ship of Theseus: the gradually repaired one, or the one rebuilt from the original planks? Argue for
          an answer, and reply to the strongest objection.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes a clear position, which may include that there is no fact of the matter.",
          "Gives a reason based on a criterion, such as continuity of form and location, or sameness of material.",
          "States the strongest objection to that position.",
          "Replies to the objection.",
        ],
      },
    },
    {
      key: "photograph",
      rung: "stretch",
      prompt: (
        <p>
          You share very little with the child in the photograph. List what does connect you to that child, and say which of
          these connections you think makes you the same person.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies several connections, such as a continuous living body, a chain of memories, gradual psychological change, or the same brain.",
          "Distinguishes connections that hold directly from those that hold only through a chain of intermediate stages.",
          "Chooses one or more as the basis of identity and gives a reason.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between being exactly alike and being one and the same, using a photograph of yourself as a child.",

  glimpse: (
    <p>
      The next lesson examines the two leading answers to the persistence question: memory and body. Heraclitus has his own
      lesson in Ancient Greek Philosophy, puzzles of persistence and constitution return in Metaphysics, and the Buddhist
      doctrine of no-self is studied in Indian Philosophy.
    </p>
  ),
};
