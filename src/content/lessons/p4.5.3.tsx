import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Substance is the ultimate subject: what other things are said of, while it is not itself said of anything else.",
    kind: "premise",
    note: "This is the test from the Categories, where it picked out individuals such as Socrates.",
  },
  {
    claim: "Take a body and strip away, in thought, everything said of it: its affections, what it does, what it can do, and then its length, breadth and depth.",
    kind: "premise",
    note: "Qualities and actions are said of the body. Even its dimensions are quantities, not substance.",
    objection: "Is stripping away in thought a reliable guide to what exists? Something may be impossible to think away and still not be a subject in the required sense.",
  },
  {
    claim: "What remains is only what all these were bounded by and said of: matter, which in itself is not a particular thing, nor a quantity, nor anything else.",
    kind: "inference",
    note: "Aristotle's ultimate matter has no characteristics of its own: all of them were removed as being said of it.",
  },
  {
    claim: "So, if being the ultimate subject is the test, matter turns out to be substance.",
    kind: "conclusion",
    note: "The subject criterion, pushed to its limit, picks out the wrong thing.",
  },
  {
    claim: "But this is impossible, since being separable and being a 'this' seem to belong above all to substance. So form, and the compound of form and matter, are more substance than matter is.",
    kind: "inference",
    note: "Aristotle does not reject the subject criterion, but adds two more: substance must be able to exist on its own, and must be a definite something. Bare matter is neither.",
    objection: "If form is more substance than the compound, and forms are shared by many individuals, is Aristotle sliding back towards the Platonic view that the universal is primary?",
  },
];

export const lesson: LessonContent = {
  id: "p4.5.3",
  minutes: 85,
  links: {
    revisits: ["p4.5.1", "p4.4.2", "p4.1.5"],
    foreshadows: ["p4.5.4", "p6.2.2", "p11.3.4"],
  },

  puzzle: (
    <>
      <p>
        In the <em>Categories</em>, Socrates was a primary substance, full stop. But Socrates is made of flesh and bones,
        which are made of earth and water, which are made of something more basic still. And he has a nature, being human,
        that makes him what he is. Which of these is the substance: the matter, the nature, or the whole made of both? The
        question &ldquo;what is being?&rdquo;, Aristotle says, has always been asked and always been a puzzle; it comes down
        to &ldquo;what is substance?&rdquo;.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Book Zeta of the <em>Metaphysics</em> is one of the hardest texts in philosophy. Its third chapter tests the idea
        that substance is whatever lies underneath everything else, and finds that the idea, on its own, leads somewhere
        strange. Step through the argument and look at the objections.
      </p>
      <ArgumentStepViz steps={STEPS} title="Metaphysics Zeta 3: stripping away (a reconstruction)" />
    </>
  ),

  theory: (
    <>
      <Definition title="being said in many ways">
        <p>
          &ldquo;Being&rdquo; is said in many ways, one for each category, but all are related to one primary way, as
          everything &ldquo;healthy&rdquo; is so called by relation to health: a healthy diet produces it, a healthy
          complexion signals it. The primary way is substance; a quality is a being because it is a quality{" "}
          <em>of a substance</em>. So the study of being as being is chiefly the study of substance.
        </p>
      </Definition>

      <Definition title="four candidates">
        <p>
          Zeta 3 lists four things that are said to be the substance of something: its <strong>essence</strong>, the{" "}
          <strong>universal</strong>, the <strong>genus</strong>, and the <strong>subject</strong>. The subject is then
          divided three ways: matter, form, and the compound of the two. A bronze statue is the compound; the bronze is its
          matter; the shape is its form.
        </p>
      </Definition>

      <Example title="essence">
        <p>
          The essence of a thing, literally &ldquo;the what it was to be&rdquo; it, is what is said of it in its own right,
          and is given by its definition. Being musical is not part of what it is to be you; being a human, perhaps, is.
          Aristotle argues that, for primary things, a thing and its essence are one and the same: otherwise the essence
          would need its own essence, and a regress would begin, as with the third man.
        </p>
      </Example>

      <Example title="no universal is substance">
        <p>
          Zeta 13 turns against Plato. The substance of a thing is peculiar to it, while a universal is common to many. And
          substance is not said of a subject, while a universal always is. So no universal is a substance, and the Forms,
          if they are separate universals, cannot be the substances of things.
        </p>
      </Example>

      <Remark title="substance as cause">
        <p>
          Zeta 17 makes a fresh start. To ask what something is, is to ask why some matter is a thing of a certain kind: why
          are these bricks and stones a house? Because the form of a house is present in them. The form is the cause of
          the matter&rsquo;s being something definite, and that cause is the substance. A syllable is not just its letters,
          which can survive its destruction, but the letters arranged in a certain way.
        </p>
      </Remark>

      <Remark title="a contested result">
        <p>
          Zeta seems to conclude that form is substance in the primary sense. But Zeta 13 said no universal is substance,
          and form seems to be shared, since Socrates and Callias have the same form. Interpreters divide: some say each
          individual has its own particular form; others that forms are universals of a special kind; others that Zeta is a
          record of unresolved inquiry. Aristotle&rsquo;s view of essence returns in modern debates about whether things
          have their natures necessarily.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "primary",
      rung: "check",
      prompt: <p>According to Aristotle, which way of being is primary, so that the others depend on it?</p>,
      answer: { kind: "choice", options: ["quality", "substance", "relation", "place"], correct: [1] },
    },
    {
      key: "candidates",
      rung: "check",
      prompt: <p>Which are among the four candidates for substance listed in Zeta 3? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["essence", "the universal", "number", "the subject"], correct: [0, 1, 3] },
    },
    {
      key: "statue",
      rung: "apply",
      prompt: <p>In a bronze statue of Hermes, what is the form?</p>,
      answer: {
        kind: "choice",
        options: ["The bronze.", "The shape of Hermes.", "The sculptor.", "The god Hermes himself."],
        correct: [1],
      },
    },
    {
      key: "strip",
      rung: "apply",
      prompt: <p>Why does Aristotle reject the conclusion that matter is substance?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because matter is visible.",
          "Because substance must be separable and a 'this', and bare matter is neither.",
          "Because matter is a universal.",
          "Because matter is a quality.",
        ],
        correct: [1],
      },
    },
    {
      key: "house",
      rung: "apply",
      prompt: <p>In Zeta 17, what answers the question why these bricks and stones are a house?</p>,
      answer: {
        kind: "choice",
        options: ["Their weight.", "The form of a house present in them.", "The builder's wages.", "The number of bricks."],
        correct: [1],
      },
    },
    {
      key: "universal",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct the argument of Zeta 13 that no universal is substance. Then state the tension it creates with the
          claim that form is primary substance.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives at least one argument: substance is peculiar to its owner while the universal is common; or substance is not said of a subject while a universal is.",
          "Concludes that no universal is substance, and connects this to the criticism of Plato's Forms.",
          "States the tension: if forms are shared by members of a species, they look like universals. Any reasonable statement earns full credit.",
        ],
      },
    },
    {
      key: "particular",
      rung: "stretch",
      prompt: (
        <p>
          Some interpreters think Socrates and Callias each have their own form, numerically distinct though exactly alike.
          What would this view gain, and what would it cost? Use the Zeta 17 idea of form as the cause of being.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the gain: it reconciles 'form is substance' with 'no universal is substance'.",
          "Identifies a cost, such as the difficulty of explaining what makes two exactly similar forms two, or a conflict with definitions being of universals.",
          "Uses the causal idea, for instance that what makes this matter Socrates must be something of Socrates. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why Aristotle says the question of being is the question of substance, the four candidates for substance, why the stripping argument leads to matter and why he rejects that, and his idea of form as the cause of a thing's being.",

  glimpse: (
    <p>
      The next lesson sets form and matter within the four causes. Avicenna, in Medieval Philosophy, distinguishes essence
      from existence, and Metaphysics revisits essentialism with modern tools.
    </p>
  ),
};
