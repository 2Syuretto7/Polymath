import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "There is something that exists.",
    kind: "premise",
    note: "Avicenna starts from almost nothing: not motion, not design, just that something exists at all.",
  },
  {
    claim: "Anything that exists is either necessary in itself or possible in itself.",
    kind: "premise",
    note: "A thing possible in itself is one whose essence does not include existence: considered in itself, it might or might not exist. A necessary existent is one that cannot fail to exist.",
  },
  {
    claim: "A thing possible in itself exists only if something other than itself causes it to exist.",
    kind: "premise",
    note: "Its essence is neutral between existing and not existing, so something must tip the balance. This is where the distinction between essence and existence does its work.",
    objection: "Why must the balance be tipped by something? Could a contingent thing simply exist, with no explanation?",
  },
  {
    claim: "Take all the possible things that exist, the whole collection. The collection, too, is possible in itself, so it needs a cause outside it.",
    kind: "inference",
    note: "The collection depends on its members, each of which is possible, so it cannot be necessary in itself. A cause outside the collection of possible things cannot itself be merely possible.",
    objection: "Does a collection need a cause beyond the causes of its members? Hume later argued that explaining each member explains the whole.",
  },
  {
    claim: "So there exists something necessary in itself, the Necessary Existent.",
    kind: "conclusion",
    note: "Avicenna then argues that it must be one, simple, without parts, and the source of all else: the God of the philosophers. Unlike many cosmological arguments, it does not need to rule out an infinite past.",
  },
];

export const lesson: LessonContent = {
  id: "p6.2.2",
  minutes: 85,
  links: {
    revisits: ["p6.2.1", "p4.5.3", "p1.5.1"],
    foreshadows: ["p6.4.2", "p7.1.2", "p23.2.2"],
  },

  puzzle: (
    <>
      <p>
        Ibn Sina, known in Latin as Avicenna, was born near Bukhara in 980. By eighteen, he tells us, he had mastered every
        science; he read Aristotle&rsquo;s Metaphysics forty times without understanding it, until a small book by al-Farabi
        unlocked it. He became a physician whose Canon of Medicine was taught in Europe for five hundred years. He asked a
        question that sounds simple. You can understand fully what a phoenix is, and still not know whether any phoenix
        exists. So is existence part of what a thing is, or something added to it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Avicenna&rsquo;s argument for a necessary existent, which grows from his distinction between what a
        thing is and the fact that it is. Challenge the steps you doubt.
      </p>
      <ArgumentStepViz steps={STEPS} title="The proof of the truthful" />
    </>
  ),

  theory: (
    <>
      <Definition title="essence and existence">
        <p>
          The <strong>essence</strong> of a thing is what it is: for a triangle, a plane figure with three sides; for a
          human, a rational animal. Avicenna noticed that, for anything except God, existence is not part of the essence.
          We can grasp what a triangle is without knowing whether any triangle exists. Existence therefore comes to such
          things from outside their essence, as something given. Things whose essence does not include existence are{" "}
          <strong>possible in themselves</strong>; they exist only through a cause.
        </p>
      </Definition>

      <Definition title="the necessary existent">
        <p>
          A being whose essence just is its existence would be <strong>necessary in itself</strong>: it could not fail to
          exist, and would need no cause. Avicenna argues that there must be exactly one such being, on which everything
          else depends. Because the argument rests on dependence rather than on a chain stretching back in time, it works
          even if the world has always existed, which Avicenna, following Aristotle, believed.
        </p>
      </Definition>

      <Example title="the flying man">
        <p>
          Imagine a person created all at once, fully grown, floating in empty air, eyes covered, limbs spread so that they
          touch nothing, not even each other. They sense nothing at all. Would they know that they exist? Avicenna says
          yes: they would affirm their own existence without affirming any body or limb. What they are aware of is
          therefore not the body. He took this to show that the soul is distinct from the body, and that we are always
          aware of ourselves.
        </p>
      </Example>

      <Remark title="influence">
        <p>
          The distinction between essence and existence passed into Latin philosophy and became central for Aquinas, whose
          third way echoes Avicenna&rsquo;s argument. The flying man anticipates Descartes&rsquo;s cogito by six centuries,
          and invites the same objection: being able to think of myself without my body does not show that I could exist
          without it. Critics such as Averroes also asked whether existence can really be added to an essence, since an
          essence that does not exist seems to be nothing to add to.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "essence",
      rung: "check",
      prompt: <p>What does Avicenna mean by the essence of a thing?</p>,
      answer: {
        kind: "choice",
        options: ["The fact that it exists", "What it is", "Its matter", "Its location"],
        correct: [1],
      },
    },
    {
      key: "necessary",
      rung: "check",
      prompt: <p>What is distinctive about a being necessary in itself?</p>,
      answer: {
        kind: "choice",
        options: [
          "It was the first thing in time.",
          "Its essence includes its existence, so it cannot fail to exist and needs no cause.",
          "It is the largest thing.",
          "It is caused by everything else.",
        ],
        correct: [1],
      },
    },
    {
      key: "phoenix",
      rung: "apply",
      prompt: <p>Why does the example of the phoenix support the distinction between essence and existence?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because phoenixes exist.",
          "Because we can understand what a phoenix is without knowing whether one exists.",
          "Because phoenixes are necessary beings.",
          "Because the phoenix has no essence.",
        ],
        correct: [1],
      },
    },
    {
      key: "eternal",
      rung: "apply",
      prompt: <p>Why does Avicenna&rsquo;s argument still work if the world has always existed?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it assumes the world began.",
          "Because it rests on present dependence for existence, not on a chain of causes going back in time.",
          "Because it does not mention causes.",
          "Because infinite chains are impossible.",
        ],
        correct: [1],
      },
    },
    {
      key: "flying",
      rung: "apply",
      prompt: <p>What does Avicenna take the flying man to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That flight is possible for humans.",
          "That the soul, aware of itself without any body, is distinct from the body.",
          "That the senses are reliable.",
          "That we cannot know we exist.",
        ],
        correct: [1],
      },
    },
    {
      key: "objection",
      rung: "prove",
      prompt: (
        <p>
          Does the flying man show that the soul is distinct from the body? Give the strongest objection and say whether
          Avicenna can answer it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States an objection, such as that being aware of oneself without being aware of a body does not show that one is not a body.",
          "Considers whether Avicenna can reply, and reaches a reasoned view.",
        ],
      },
    },
    {
      key: "collection",
      rung: "stretch",
      prompt: (
        <p>
          Avicenna says the collection of all possible things needs a cause outside it. Hume objected that once each
          member of a collection is explained, the collection is explained. Who is right?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains Avicenna's step: the collection is made of dependent things, so it is itself dependent and needs a cause.",
          "Explains Hume's reply and reaches a reasoned verdict, perhaps noting that with infinitely many members each explained by another, the question why there is anything at all may remain.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Avicenna's distinction between essence and existence, his argument for a necessary existent, and the flying man thought experiment.",

  glimpse: (
    <p>
      The next lesson meets al-Ghazali, who attacked the philosophers, Avicenna above all, and denied that fire burns
      cotton by any necessity.
    </p>
  ),
};
