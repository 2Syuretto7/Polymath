import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PendulumViz } from "@/components/viz/PendulumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p9.3.2",
  minutes: 85,
  links: {
    revisits: ["p9.3.1", "p4.7.1", "p7.5.6"],
    foreshadows: ["p9.6.4", "p9.6.3", "p19.2.3"],
  },

  puzzle: (
    <>
      <p>
        Leibniz said this is the best of all possible worlds. Schopenhauer replied that it is the worst: if it were even a
        little worse, it could not continue to exist at all. Compare the pleasure of an animal eating another with the pain
        of the one being eaten, he suggests. Is this a mood dressed up as philosophy, or does pessimism follow from the
        nature of desire?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Live through a few cycles of desire, then try the three ways out that Schopenhauer offers.
      </p>
      <PendulumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the argument from desire">
        <p>
          If the inner nature of everything is will, and will is endless striving, then life is essentially want. Want is
          lack, and lack is suffering. Satisfaction is merely negative, the removal of a pain, and it is quickly followed
          either by a new desire or by boredom. Pain is positive and felt; happiness is only its temporary absence. So
          suffering is not an accident of life but its substance.
        </p>
      </Definition>

      <Definition title="the routes to release">
        <p>
          <strong>Aesthetic contemplation</strong> lifts us for a moment out of desire, as we become pure will-less
          subjects contemplating the Platonic Ideas; music, a direct copy of the will itself, has a special place.{" "}
          <strong>Compassion</strong>, seeing through the illusion of separate individuals, recognises one&rsquo;s own nature
          in every sufferer, and is the basis of morality. Finally, the <strong>denial of the will</strong>, seen in saints
          and ascetics of every tradition, turns the will against itself and brings a lasting peace.
        </p>
      </Definition>

      <Example title="suicide is not denial">
        <p>
          Schopenhauer insists that suicide is not the denial of the will but an affirmation of it: the suicide wills life,
          and is only dissatisfied with the conditions offered. It destroys an individual appearance while leaving the will
          untouched. True denial is a change in the will itself, which ceases to want.
        </p>
      </Example>

      <Remark title="responses">
        <p>
          Nietzsche was converted to philosophy by reading Schopenhauer and spent his career trying to answer him, aiming at
          an affirmation of life even with its suffering, as in the thought of eternal recurrence. Others object that the
          argument assumes all pleasure is relief from pain, ignoring pleasures like discovery or friendship that need no
          prior lack. Contemporary philosophers, such as David Benatar, have revived pessimistic arguments in new forms.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pend",
      rung: "check",
      prompt: <p>Between which two states does life swing, according to Schopenhauer?</p>,
      answer: { kind: "choice", options: ["Pleasure and virtue", "Pain and boredom", "Love and hate", "Reason and passion"], correct: [1] },
    },
    {
      key: "negative",
      rung: "check",
      prompt: <p>What is satisfaction, on Schopenhauer&rsquo;s view?</p>,
      answer: {
        kind: "choice",
        options: ["A lasting good", "Merely the removal of a pain, and so negative", "The goal of the will", "Illusory"],
        correct: [1],
      },
    },
    {
      key: "music",
      rung: "apply",
      prompt: <p>Why does music have a special place among the arts for Schopenhauer?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is the most popular.",
          "Because it is a direct copy of the will itself, not of the Ideas.",
          "Because it is mathematical.",
          "Because it requires no performers.",
        ],
        correct: [1],
      },
    },
    {
      key: "comp",
      rung: "apply",
      prompt: <p>Why is compassion the basis of morality, for Schopenhauer?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because God commands it.",
          "Because it sees through individuality and recognises the same will suffering in another.",
          "Because it maximises pleasure.",
          "Because it follows from the categorical imperative.",
        ],
        correct: [1],
      },
    },
    {
      key: "suicide",
      rung: "apply",
      prompt: <p>Why does Schopenhauer say that suicide is not a denial of the will?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is forbidden.",
          "Because it wills life and only rejects its conditions, destroying an appearance while the will remains.",
          "Because it is cowardly.",
          "Because the will is immortal in each person.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is every pleasure merely relief from a pain? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Schopenhauer's view that satisfaction is negative, the removal of want.",
          "Considers a counterexample, such as an unexpected pleasant smell or the joy of discovery.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "nietzsche",
      rung: "stretch",
      prompt: <p>Is it possible to accept Schopenhauer&rsquo;s picture of suffering and still affirm life, as Nietzsche tried to?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes Schopenhauer's conclusion that life is not worth affirming.",
          "Describes an attempt at affirmation, such as Nietzsche's, that accepts suffering as part of life.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why Schopenhauer thought suffering is the substance of life, the pendulum of pain and boredom, the three routes to release through art, compassion and denial of the will, and why he did not count suicide as a release.",

  glimpse: (
    <p>
      The next chapter turns to Kierkegaard, for whom despair is the gateway to selfhood. Nietzsche&rsquo;s will to power and
      eternal recurrence answer Schopenhauer directly, and the existentialists return to anxiety and the meaning of life.
    </p>
  ),
};
