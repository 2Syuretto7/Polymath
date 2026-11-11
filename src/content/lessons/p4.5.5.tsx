import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ActualityViz } from "@/components/viz/ActualityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.5.5",
  minutes: 80,
  links: {
    revisits: ["p4.5.4", "p4.1.3", "p4.4.1"],
    foreshadows: ["p4.6.1", "p6.4.3", "p4.7.5"],
  },

  puzzle: (
    <>
      <p>
        Parmenides argued that nothing can come to be: it would have to come either from what is, which already is, or
        from what is not, which is nothing. Yet acorns become oaks and children learn to read. A sleeping builder is still
        a builder, though not building. A blind person and a sleeping person both see nothing, yet only one of them can
        see. What exactly is the difference, and how does it answer Parmenides?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Aristotle&rsquo;s answer is that there are two ways to be something: potentially and actually. Step through three
        of his examples. At every stage the thing is actually something and potentially something more.
      </p>
      <ActualityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="potentiality and actuality">
        <p>
          A <strong>potentiality</strong> (<em>dunamis</em>) is a capacity: to change something else, to be changed, or to
          become something. An <strong>actuality</strong> (<em>energeia</em>, and also <em>entelecheia</em>, &ldquo;being at
          the end&rdquo;) is its being at work or fulfilled. Aristotle says actuality cannot be defined without circularity;
          it is grasped by analogy: as the one building is to the one who can build, as the waking is to the sleeping, as
          seeing is to having the eyes shut, as the shaped statue is to the bronze.
        </p>
      </Definition>

      <Example title="against the Megarians">
        <p>
          The Megarians held that something has a capacity only when it is exercising it. Aristotle objects in{" "}
          <em>Metaphysics</em> Theta 3. Then a builder who stopped building would no longer be a builder, and would have to
          relearn the craft each time they began. Nothing would be hot or sweet when not perceived, which is Protagoras&rsquo;
          view again. And someone sitting could never stand, since they would lack the capacity to stand. Such views, he
          says, abolish change and coming to be altogether.
        </p>
      </Example>

      <Definition title="change and activity">
        <p>
          In <em>Physics</em> III.1, change (<em>kinesis</em>) is defined as the actuality of what is potentially, as such:
          the building going on is the actuality of the bricks insofar as they can become a house. Change is incomplete: it
          aims at an end beyond itself and stops when it gets there. Theta 6 contrasts it with complete{" "}
          <strong>activity</strong>, which contains its end in itself, and gives a test: at the same moment one sees and has
          seen, understands and has understood, lives well and has lived well; but one does not at the same moment learn and
          have learned, or build and have built.
        </p>
      </Definition>

      <Remark title="actuality is prior">
        <p>
          Theta 8 argues that actuality is prior to potentiality. It is prior in definition, since a capacity is defined by
          what it is a capacity for. It is prior in time, in a sense: though this acorn exists before this oak, an actual oak
          produced the acorn, as an actual man begets a man. And it is prior in substance, since the potential is for the
          sake of the actual: animals do not see in order to have sight, but have sight in order to see.
        </p>
      </Remark>

      <Remark title="the soul and the first mover">
        <p>
          In <em>De Anima</em> II.1, Aristotle defines the soul as the first actuality of a natural body that has life
          potentially: what the body has even when asleep, as the grammarian has knowledge when not using it. So soul and
          body are one, as the wax and its shape are one. At the top of the cosmos, in <em>Metaphysics</em> Lambda, stands a
          first mover that is pure actuality with no potentiality at all, eternally thinking, the end towards which the
          heavens move.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "terms",
      rung: "check",
      prompt: <p>Which Greek word does Aristotle use for potentiality or capacity?</p>,
      answer: { kind: "choice", options: ["energeia", "dunamis", "eidos", "logos"], correct: [1] },
    },
    {
      key: "megara",
      rung: "check",
      prompt: <p>What did the Megarians claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "That a thing has a capacity only when it is exercising it.",
          "That everything is in flux.",
          "That actuality is prior to potentiality.",
          "That the soul is the form of the body.",
        ],
        correct: [0],
      },
    },
    {
      key: "tense",
      rung: "apply",
      prompt: <p>By the test in Theta 6, which of these are complete activities rather than changes? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["seeing", "learning a language", "understanding", "walking to Thebes"], correct: [0, 2] },
    },
    {
      key: "stage",
      rung: "apply",
      prompt: <p>A grammarian is asleep. In Aristotle&rsquo;s terms, their knowledge of grammar is in which state?</p>,
      answer: {
        kind: "choice",
        options: ["first potentiality", "first actuality", "second actuality", "no state at all"],
        correct: [1],
      },
    },
    {
      key: "prior",
      rung: "apply",
      prompt: <p>&ldquo;Animals do not see in order to have sight; they have sight in order to see.&rdquo; Which priority of actuality does this illustrate?</p>,
      answer: { kind: "choice", options: ["in definition", "in time", "in substance, as the end", "in place"], correct: [2] },
    },
    {
      key: "parmenides",
      rung: "prove",
      prompt: (
        <p>
          Set out Parmenides&rsquo; argument against coming to be as a dilemma, then show how the distinction between
          potential and actual being lets Aristotle escape it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the dilemma: what comes to be comes from what is, which already is, or from what is not, which is nothing.",
          "Explains that a thing comes to be from what is potentially it, which is something, but not yet actually it.",
          "Uses an example, such as the bronze becoming a statue or the acorn an oak. A clear account earns full credit.",
        ],
      },
    },
    {
      key: "soul",
      rung: "stretch",
      prompt: (
        <p>
          Aristotle says that asking whether soul and body are one is like asking whether the wax and its shape are one.
          Explain how the vocabulary of potentiality and actuality supports this, and compare it with the view of the soul
          in the <em>Phaedo</em>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the soul as the first actuality of a body potentially alive, as a form is of its matter.",
          "Draws the consequence that the soul is not a separate thing that could leave the body, at least for most of its functions.",
          "Contrasts this with the Phaedo's soul as a separate, immortal thing akin to the Forms. Any reasoned comparison earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the distinction between potentiality and actuality, how it answers Parmenides, Aristotle's objection to the Megarians, the difference between change and activity, and why actuality is prior.",

  glimpse: (
    <p>
      Aristotle&rsquo;s ethics, next, makes happiness an activity of the soul in accordance with virtue. Aquinas builds his
      account of the soul on Aristotle&rsquo;s, and Plotinus places the One beyond even pure actuality.
    </p>
  ),
};
