import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { AdumbrationViz } from "@/components/viz/AdumbrationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p19.1.1",
  minutes: 75,
  links: {
    revisits: ["p12.6.1", "p7.1.2", "p8.1.3"],
    foreshadows: ["p19.1.2", "p19.2.2", "p19.5.1"],
  },

  puzzle: (
    <>
      <p>
        Look at a die on the table. You see three faces at most, never six. Yet you do not see three coloured squares; you
        see a die, and you would be astonished to walk round it and find nothing behind. What exactly do you see, and how
        does the rest of the die get into your experience?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Walk round the die and look at it from above and below. Watch which faces are given and which are only meant.</p>
      <AdumbrationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="intentionality">
        <p>
          Franz Brentano, in <em>Psychology from an Empirical Standpoint</em> (1874), proposed that what marks the mental is{" "}
          <strong>intentionality</strong>: every mental act is directed at something. In perceiving something is perceived,
          in loving something is loved, in judging something is affirmed or denied. This directedness, or{" "}
          <em>aboutness</em>, has nothing to do with intending in the sense of planning; it is the act&rsquo;s being of or
          about an object.
        </p>
      </Definition>

      <Definition title="act, content and object">
        <p>
          Edmund Husserl, Brentano&rsquo;s student, made intentionality the theme of a new discipline,{" "}
          <strong>phenomenology</strong>, in the <em>Logical Investigations</em> (1900–01) and <em>Ideas I</em> (1913). He
          separated the act (perceiving, remembering, imagining), the object meant, and the sense through which it is meant.
          In <em>Ideas I</em> the act side is the <strong>noesis</strong> and the object as meant is the{" "}
          <strong>noema</strong>. The same object can be meant through different noemata: Napoleon as &ldquo;the victor at
          Jena&rdquo; and as &ldquo;the vanquished at Waterloo&rdquo;.
        </p>
      </Definition>

      <Example title="profiles and horizons">
        <p>
          A physical thing is always given in <strong>adumbrations</strong> (Abschattungen), one-sided profiles. The unseen
          sides are not inferred, as a conclusion from evidence; they are co-intended, emptily, as part of the sense of the
          perception. Each perception carries a <strong>horizon</strong> of further possible experiences. Walking round the
          die <strong>fulfils</strong> some empty intentions, and might disappoint them, if the back were missing. Knowledge,
          for Husserl, is fulfilment: meaning something emptily and then having it given in person.
        </p>
      </Example>

      <Remark title="why it matters">
        <p>
          Intentionality is a description, not yet a theory: it does not say how a brain manages to be about anything, which
          is the problem of mental content met earlier. Husserl&rsquo;s wager was that careful description of how things are
          given must come before any such explanation, since every explanation is itself something given to consciousness.
          Heidegger, Sartre and Merleau-Ponty all start here, and all transform it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "brentano",
      rung: "check",
      prompt: <p>What is Brentano&rsquo;s thesis about intentionality?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every mental act is directed at an object, and this directedness marks the mental.",
          "Every mental act is deliberate.",
          "Only perception is about objects.",
          "Mental acts are brain states.",
        ],
        correct: [0],
      },
    },
    {
      key: "adumb",
      rung: "check",
      prompt: <p>What is an adumbration, in Husserl&rsquo;s sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "A one-sided profile through which a physical thing is given",
          "A shadow cast by an object",
          "A mistaken perception",
          "An inference to an unseen cause",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the largest number of faces given in a single profile?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "noema",
      rung: "apply",
      prompt: <p>Which pair differs in noema but not in object?</p>,
      answer: {
        kind: "choice",
        options: [
          "Thinking of the victor at Jena, and thinking of the vanquished at Waterloo",
          "Seeing a die, and seeing a coin",
          "Remembering Paris, and remembering Delhi",
          "Imagining a unicorn, and imagining a dragon",
        ],
        correct: [0],
      },
    },
    {
      key: "fulfil",
      rung: "apply",
      prompt: <p>Which is a case of an empty intention being fulfilled?</p>,
      answer: {
        kind: "choice",
        options: [
          "Expecting the six on the back of the die, then turning it and seeing six pips",
          "Forgetting where you left the die",
          "Imagining a die with seven faces",
          "Reading that dice have six faces",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Are all mental states intentional? Argue briefly, considering a case such as a pain or a mood.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Brentano’s thesis that every mental state is directed at something.",
          "Considers a hard case, such as undirected anxiety or a pain, with a reason on each side.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>You can think of a golden mountain, though none exists. What, then, is your thought directed at?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recognises the problem of intentional objects that do not exist.",
          "Considers an answer, such as Meinong’s non-existent objects, Husserl’s noema, or Russell’s theory of descriptions.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the epoché: Husserl&rsquo;s method of suspending belief in the world&rsquo;s existence, not to doubt it, but to
      see how it is given.
    </p>
  ),
};
