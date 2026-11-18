import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { AbsurdViz } from "@/components/viz/AbsurdViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p19.6.1",
  minutes: 80,
  links: {
    revisits: ["p19.5.2", "p9.4.2", "p1.6.3"],
    foreshadows: ["p19.6.2", "p20.1.3", "p20.5.1"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;There is but one truly serious philosophical problem, and that is suicide.&rdquo; So begins Albert
        Camus&rsquo;s <em>The Myth of Sisyphus</em> (1942). If life has no meaning given from outside, is it worth living?
        And if it is, how should one live it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Remove one side at a time and see what happens to the absurd.</p>
      <AbsurdViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the absurd">
        <p>
          The <strong>absurd</strong> is born of a confrontation: the human need for clarity, unity and meaning, and the
          &ldquo;unreasonable silence of the world&rdquo;. One day the stage sets collapse: getting up, tram, office, meal,
          sleep, and the question &ldquo;why?&rdquo; arises. The world is not absurd in itself, nor are we; the absurd is the
          relation between us.
        </p>
      </Definition>

      <Example title="two escapes, both refused">
        <p>
          <strong>Physical suicide</strong> ends the absurd by ending one of its terms, the person. Camus calls it a kind of
          acceptance, a confession that life is too much. <strong>Philosophical suicide</strong> ends it by abandoning the
          other term: a leap of faith, as in Kierkegaard or Jaspers, that declares the world meaningful after all. Camus
          regards both as evasions. The honest course is to keep the absurd alive by keeping both terms in view.
        </p>
      </Example>

      <Definition title="living the absurd">
        <p>
          From the absurd, Camus draws three consequences: <strong>revolt</strong>, a constant refusal to accept the absurd
          or to be crushed by it; <strong>freedom</strong>, since without a promised eternity one is freed from the rules it
          imposed; and <strong>passion</strong>, living as much and as fully as possible. Quantity of experience matters
          more than quality measured by an outside scale.
        </p>
      </Definition>

      <Remark title="Sisyphus">
        <p>
          The gods condemned Sisyphus to roll a rock up a mountain, only for it to roll down again, forever. Camus dwells on
          the moment Sisyphus walks back down. He knows the whole extent of his condition, and this lucidity is his victory.
          &ldquo;There is no fate that cannot be surmounted by scorn.&rdquo; The book ends: &ldquo;The struggle itself
          toward the heights is enough to fill a man&rsquo;s heart. One must imagine Sisyphus happy.&rdquo;
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "absurd",
      rung: "check",
      prompt: <p>Where does Camus locate the absurd?</p>,
      answer: {
        kind: "choice",
        options: ["In the confrontation between the human demand for meaning and the silent world", "In the world alone", "In the human mind alone", "In God"],
        correct: [0],
      },
    },
    {
      key: "philsuicide",
      rung: "check",
      prompt: <p>What does Camus call philosophical suicide?</p>,
      answer: {
        kind: "choice",
        options: ["A leap that declares the world meaningful after all, abandoning lucidity", "Giving up philosophy", "Ending one’s life for a philosophical reason", "Refusing to argue"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what happens to the absurd when only the world remains?</p>,
      answer: { kind: "choice", options: ["It disappears", "It grows", "It moves into the world", "Nothing changes"], correct: [0] },
    },
    {
      key: "three",
      rung: "apply",
      prompt: <p>Which is not one of the three consequences Camus draws from the absurd?</p>,
      answer: { kind: "choice", options: ["Hope", "Revolt", "Freedom", "Passion"], correct: [0] },
    },
    {
      key: "sis",
      rung: "apply",
      prompt: <p>Why does Camus focus on Sisyphus walking back down the mountain?</p>,
      answer: {
        kind: "choice",
        options: ["It is the moment of consciousness, when he sees his whole condition and scorns it", "It is when he rests", "It is when the gods forgive him", "It is when he escapes"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can one really imagine Sisyphus happy? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Camus’s view that lucidity and scorn make the struggle itself enough.",
          "Considers an objection, such as that this redescribes misery, or replies to one.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is Camus right that believing in a meaning beyond this life is an evasion?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States why Camus thinks the leap gives up lucidity.",
          "Considers a reply, such as that faith can be lucid, or that his own refusal is also a choice.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        <em>The Myth of Sisyphus</em> is about one person facing the absurd alone. During and after the war Camus asked a
        harder question: if nothing has meaning, is murder permitted too? In <em>The Rebel</em> (1951) he argued that revolt,
        properly understood, contains its own limits.
      </p>
      <p>
        Next, revolt: &ldquo;I rebel, therefore we exist&rdquo;, and Camus&rsquo;s critique of revolutions that kill in the
        name of history, which ended his friendship with Sartre.
      </p>
    </>
  ),
};
