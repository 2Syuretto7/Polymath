import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { LoveLadderViz } from "@/components/viz/LoveLadderViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p24.1.1",
  minutes: 85,
  links: {
    revisits: ["p4.3.4", "p4.3.5", "p4.7.5"],
    foreshadows: ["p24.1.2", "p24.2.1", "p24.4.1"],
  },

  puzzle: (
    <>
      <p>
        A face, a melody, a proof and a just law can all be called beautiful. Is that one word for four unrelated things, or
        do they share something? And if they share it, could that shared beauty itself be more beautiful than any of them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Climb Diotima&rsquo;s ladder from the love of one beautiful body to the vision of Beauty itself.</p>
      <LoveLadderViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Hippias Major">
        <p>
          In the early dialogue <em>Hippias Major</em>, Socrates asks Hippias what the beautiful (to kalon) is. Hippias offers
          examples, a beautiful maiden, gold, a good life, and Socrates rejects each: a maiden is ugly compared with a goddess,
          and gold is not beautiful in a statue&rsquo;s eyes if ivory suits it better. He wants what makes all beautiful
          things beautiful. Definitions in terms of the appropriate, the useful and the pleasant to sight and hearing all fail,
          and the dialogue ends: &lsquo;beautiful things are difficult&rsquo;.
        </p>
      </Definition>

      <Definition title="the Symposium">
        <p>
          In the <em>Symposium</em>, Diotima teaches that love (eros) is desire for the good to be one&rsquo;s own forever,
          and so a desire to give birth in beauty, in body or in soul. Its proper path ascends from one beautiful body to the
          Form of Beauty: eternal, unchanging, unmixed, beautiful in every respect and to every observer. Here, she says, if
          anywhere, life is worth living for a human being.
        </p>
      </Definition>

      <Example title="beauty and the Forms">
        <p>
          Beauty has a special place among the Forms. In the <em>Phaedrus</em>, Plato says that of all the Forms, beauty alone
          shines clearly through its earthly likenesses to the sense of sight, which is why it stirs love and recollection.
          Beauty draws the soul upwards. This makes the experience of beauty a beginning of philosophy, not a distraction from
          it.
        </p>
      </Example>

      <Remark title="Plato against the poets">
        <p>
          The same Plato, in <em>Republic</em> X, banishes most poets from the ideal city. Art imitates appearances, which
          imitate Forms, so it is &lsquo;third from the truth&rsquo;, and it feeds the emotions that reason should govern. The
          tension between beauty as a path to truth and art as a copy of a copy runs through later aesthetics. Plotinus
          reconciled them: the artist imitates not appearances but the Forms themselves.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hippias",
      rung: "check",
      prompt: <p>How does the Hippias Major end?</p>,
      answer: { kind: "choice", options: ["Without a definition: ‘beautiful things are difficult’", "With a definition of beauty as the useful", "With Hippias convincing Socrates", "With the Form of Beauty described"], correct: [0] },
    },
    {
      key: "form",
      rung: "check",
      prompt: <p>How does Diotima describe Beauty itself?</p>,
      answer: { kind: "choice", options: ["Eternal, unchanging, and beautiful in every respect to every observer", "A beautiful body", "The pleasure of sight and hearing", "Whatever the observer likes"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which rung comes directly after the love of all beautiful bodies?</p>,
      answer: { kind: "choice", options: ["Beautiful souls", "Practices and laws", "Kinds of knowledge", "Beauty itself"], correct: [0] },
    },
    {
      key: "third",
      rung: "apply",
      prompt: <p>Why does Plato call art &lsquo;third from the truth&rsquo; in Republic X?</p>,
      answer: { kind: "choice", options: ["It imitates appearances, which themselves imitate the Forms", "It is the third oldest human activity", "It takes three artists to make", "It is the third part of the soul"], correct: [0] },
    },
    {
      key: "phaedrus",
      rung: "apply",
      prompt: <p>What is special about beauty among the Forms, according to the Phaedrus?</p>,
      answer: { kind: "choice", options: ["It alone shines clearly through its likenesses to sight", "It is the only Form", "It cannot be seen at all", "It is the lowest Form"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is there one thing that all beautiful things share? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Plato’s view that one Form makes all beautiful things beautiful.",
          "Considers an objection, such as the variety of beautiful things or family resemblance.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Mathematicians often call a proof beautiful. Is that the same beauty as a face or a sunset, or only a metaphor?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers what makes a proof beautiful, such as simplicity, surprise or insight.",
          "Compares this with sensory beauty, perhaps using Plato’s ladder.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        For Plato, beauty is an objective feature of reality, most fully present in a Form. Early modern philosophers turned
        to the subject: to the pleasure we feel, and the question of whether anyone&rsquo;s pleasure is better than
        anyone else&rsquo;s.
      </p>
      <p>Next, Hume&rsquo;s standard of taste.</p>
    </>
  ),
};
