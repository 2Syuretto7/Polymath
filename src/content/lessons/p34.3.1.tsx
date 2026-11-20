import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ValueDifferenceViz } from "@/components/viz/ValueDifferenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p34.3.1",
  minutes: 90,
  links: {
    revisits: ["p34.2.2", "p34.1.2", "p11.1.1"],
    foreshadows: ["p34.3.2", "p34.3.3", "p34.3.4"],
  },

  puzzle: (
    <>
      <p>
        What does the word &ldquo;green&rdquo; mean? You might point to grass. But a language with only three colour words
        draws its boundaries differently from one with seven, so the same patch of grass falls under words that mean
        different things. Perhaps a word&rsquo;s meaning is not something it has on its own, but a position in a system.
        What would follow if that were true of everything we say?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a colour vocabulary and a hue, and see what the word for it means.</p>
      <ValueDifferenceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Saussure’s linguistics">
        <p>
          Ferdinand de Saussure&rsquo;s <em>Course in General Linguistics</em> (1916), compiled from his students&rsquo;
          notes, treats a language as a system of <strong>signs</strong>, each uniting a signifier, a sound-image, with a
          signified, a concept. The bond between them is <strong>arbitrary</strong>: nothing in the sound &ldquo;tree&rdquo;
          fits it to trees. Saussure distinguishes <em>langue</em>, the shared system, from <em>parole</em>, individual
          speech, and studies the system at a moment (synchronically) rather than its history (diachronically).
        </p>
      </Definition>

      <Definition title="value and difference">
        <p>
          Since signs are arbitrary, what fixes them is their <strong>value</strong>: their place in the system, defined
          by their differences from other signs. &ldquo;In language there are only differences without positive
          terms.&rdquo; Relations are of two kinds: <strong>syntagmatic</strong>, the combinations of signs in a sequence,
          and <strong>paradigmatic</strong>, the signs that could replace one another at a point. Roman Jakobson extended
          the idea to phonology, analysing sounds into binary distinctive features.
        </p>
      </Definition>

      <Example title="beyond language">
        <p>
          Claude Lévi-Strauss applied the method to anthropology, analysing kinship systems and myths as arrangements of
          binary oppositions, such as raw and cooked or nature and culture, whose structure is shared across cultures.
          Roland Barthes read advertisements and wrestling as sign systems with second-order meanings, or myths. Jacques
          Lacan held that the unconscious is structured like a language, and Louis Althusser read Marx structurally,
          as a theory of social formations rather than of human subjects.
        </p>
      </Example>

      <Remark title="the decentred subject">
        <p>
          Structuralism shifted attention from the conscious subject, central to phenomenology and existentialism, to the
          impersonal systems through which subjects speak and act. Critics, including Sartre, charged it with ignoring
          history and freedom. Post-structuralists accepted that meaning arises from difference, but denied that any
          system is closed, stable or centred, and so turned structuralism against itself.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "arb",
      rung: "check",
      prompt: <p>What did Saussure mean by the arbitrariness of the sign?</p>,
      answer: { kind: "choice", options: ["Nothing in the signifier naturally fits it to the signified", "Words have no meaning", "Speakers choose meanings at will", "Signs change every day"], correct: [0] },
    },
    {
      key: "langue",
      rung: "check",
      prompt: <p>What is the difference between langue and parole?</p>,
      answer: { kind: "choice", options: ["Langue is the shared system; parole is individual acts of speech", "Langue is spoken; parole is written", "Langue is French; parole is English", "There is no difference"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the hue to 60 and choose 3 terms. What is it called?</p>,
      answer: { kind: "choice", options: ["blue", "green", "teal", "red"], correct: [0] },
    },
    {
      key: "value",
      rung: "apply",
      prompt: <p>What fixes the value of a sign, on Saussure&rsquo;s view?</p>,
      answer: { kind: "choice", options: ["Its differences from the other signs in the system", "The object it names", "The speaker’s intention", "Its history"], correct: [0] },
    },
    {
      key: "lvs",
      rung: "apply",
      prompt: <p>How did Lévi-Strauss extend structuralism?</p>,
      answer: { kind: "choice", options: ["By analysing myths and kinship as systems of binary oppositions", "By studying the history of words", "By rejecting all systems", "By studying individual psychology alone"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is the meaning of a word fixed by its relations to other words? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Saussure’s view of value and difference.",
          "Considers an objection, such as the role of reference to the world.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If structures speak through us, what is left of individual freedom?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the structuralist decentring of the subject.",
          "Considers an objection, such as Sartre’s.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If meaning is fixed by systems of difference, so perhaps are the categories by which societies sort the normal from
        the abnormal. One historian of systems of thought asked how knowledge and power produce each other.
      </p>
      <p>Next, Foucault on power and knowledge.</p>
    </>
  ),
};
