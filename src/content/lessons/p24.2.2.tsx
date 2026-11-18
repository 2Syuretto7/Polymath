import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ContourViz } from "@/components/viz/ContourViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p24.2.2",
  minutes: 90,
  links: {
    revisits: ["p24.2.1", "p24.1.3", "p7.5.1"],
    foreshadows: ["p24.2.3", "p24.3.1", "p24.4.2"],
  },

  puzzle: (
    <>
      <p>
        A rāga sung in the evening can sound full of longing. But a melody has no feelings, and the singer may be thinking
        about the tānpura&rsquo;s tuning. Whose sadness, then, is in the music? And if no one&rsquo;s, in what sense is it
        there at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        One answer says music resembles the way sad people sound and move. Change the melody&rsquo;s tempo, register,
        direction and steps, and see which human bearing it suggests.
      </p>
      <ContourViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the expression theory">
        <p>
          The <strong>expression theory</strong> says that something is art just in case it expresses the feelings of its maker,
          and that its value lies in how well it does so. It moved the centre of art from the world copied to the mind of the
          artist, and fitted the Romantic picture of the poet as one who feels more deeply than others.
        </p>
      </Definition>

      <Example title="Tolstoy">
        <p>
          In <em>What Is Art?</em> (1897), Tolstoy says art is the activity in which one person, having experienced a feeling,
          consciously hands it on to others by external signs, so that they are infected by it and experience it too. The more
          sincere the artist, the clearer the feeling and the more individual it is, the better the art. By this test he
          rejected much of the European canon, including some of his own novels, as obscure and insincere.
        </p>
      </Example>

      <Example title="Collingwood">
        <p>
          In <em>The Principles of Art</em> (1938), Collingwood distinguishes expressing an emotion from arousing one. Art
          proper is not a craft aimed at producing a planned effect in an audience; that is amusement or magic. The artist
          begins with an unclear disturbance, and comes to know what they feel only by expressing it in the work. The work
          exists first in the imagination; the audience re-creates it.
        </p>
      </Example>

      <Definition title="the objections">
        <p>
          Artists may express feelings they do not have: a composer writes a funeral march for a commission, cheerfully. And the
          sadness seems to be heard in the music, not inferred about its maker. This is why later writers moved from
          &lsquo;expresses&rsquo; to <strong>expressive of</strong>. Peter Kivy&rsquo;s contour theory says music is expressive of
          sadness because its shape resembles the voice and bearing of a sad person: slow, low, falling. Stephen Davies calls this
          appearance emotion, like the sad face of a basset hound.
        </p>
      </Definition>

      <Remark title="arousal">
        <p>
          A third view says music is sad because it tends to make listeners sad. But many listeners feel no sadness while
          recognising it, and enjoy sad music besides. Abhinavagupta&rsquo;s theory of rasa, which we will meet later, says the
          spectator savours a generalised emotion that is neither their own nor the actor&rsquo;s.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does the expression theory say makes something art?</p>,
      answer: { kind: "choice", options: ["That it expresses the feelings of its maker", "That it imitates reality", "That it is beautiful", "That a museum displays it"], correct: [0] },
    },
    {
      key: "tolstoy",
      rung: "check",
      prompt: <p>What is Tolstoy&rsquo;s test of good art?</p>,
      answer: { kind: "choice", options: ["How sincerely and clearly it infects others with the artist’s feeling", "How accurately it copies nature", "How much it sells for", "How difficult it is to make"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which mood does a fast, high, rising melody with leaps suggest?</p>,
      answer: { kind: "choice", options: ["Exuberant", "Sad", "Calm", "Agitated"], correct: [0] },
    },
    {
      key: "coll",
      rung: "apply",
      prompt: <p>On Collingwood&rsquo;s view, which of these is not art proper?</p>,
      answer: { kind: "choice", options: ["An advertising jingle written to make buyers feel cheerful", "A poem in which the poet finds out what they feel", "A painting the painter could not plan in advance", "A song worked out in the imagination"], correct: [0] },
    },
    {
      key: "march",
      rung: "apply",
      prompt: <p>A cheerful composer writes a moving funeral march. What does this show?</p>,
      answer: { kind: "choice", options: ["A work can be expressive of a feeling its maker did not have", "The march is not music", "Expression theories are proved", "The composer was secretly sad"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is music sad because of the composer&rsquo;s feelings, the listener&rsquo;s, or neither? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes at least two of expression, arousal and resemblance or contour views.",
          "Considers an objection, such as the cheerful composer or the listener who is not saddened.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can abstract painting be expressive in the way Kivy says music is? Think of colour, line and scale.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Kivy’s resemblance idea.",
          "Considers whether colour or line can resemble human bearing or expression.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Imitation and expression both look for a visible feature that all art shares. In the twentieth century, Fountain and
        Brillo Box suggested there may be none: art can look exactly like ordinary objects. What makes it art must then be
        something invisible, a relation to an institution or a theory.
      </p>
      <p>Next, institutional theories of art.</p>
    </>
  ),
};
