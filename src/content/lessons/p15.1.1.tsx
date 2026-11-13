import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SubstitutionViz } from "@/components/viz/SubstitutionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p15.1.1",
  minutes: 80,
  links: {
    revisits: ["p2.4.3", "p2.6.2", "p12.2.2"],
    foreshadows: ["p15.1.2", "p15.2.1", "p15.3.2"],
  },

  puzzle: (
    <>
      <p>
        The ancients called a bright star in the evening Hesperus and one in the morning Phosphorus. Both are the planet
        Venus. So &ldquo;Hesperus is Hesperus&rdquo; and &ldquo;Hesperus is Phosphorus&rdquo; are about the same object and
        say it is identical with itself. Yet the first is trivial and the second was an astronomical discovery. How can that
        be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Substitute co-referring names into different sentences and watch what changes.</p>
      <SubstitutionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="sense and reference">
        <p>
          In &ldquo;On Sense and Reference&rdquo; (1892), Gottlob Frege distinguished the <strong>reference</strong>{" "}
          (Bedeutung) of an expression, the thing it stands for, from its <strong>sense</strong> (Sinn), the mode of
          presentation of that thing. &ldquo;Hesperus&rdquo; and &ldquo;Phosphorus&rdquo; have the same reference but different
          senses. Sense determines reference, and is what a competent speaker grasps.
        </p>
      </Definition>

      <Example title="sentences">
        <p>
          Frege extended the distinction to whole sentences. The sense of a declarative sentence is a thought, which can be
          shared and is objective, not a private idea. Its reference is its truth value, the True or the False. This explains
          why substituting co-referring parts preserves truth value: the reference of the whole depends only on the references
          of the parts.
        </p>
      </Example>

      <Remark title="indirect contexts">
        <p>
          In &ldquo;Meera believes that Hesperus appears in the evening&rdquo;, substituting &ldquo;Phosphorus&rdquo; may turn a
          truth into a falsehood. Frege&rsquo;s solution: inside a that-clause after verbs like believe, an expression refers
          to its customary sense. So the substitution changes the reference of the clause, and the principle of
          compositionality is saved.
        </p>
      </Remark>

      <Remark title="empty names and objections">
        <p>
          &ldquo;Odysseus&rdquo; has a sense but perhaps no reference, so sentences about him express thoughts but, Frege held,
          lack a truth value. Critics ask what exactly a sense is: if it is given by a description, different speakers may
          associate different descriptions with one name. Russell, Kripke and others developed rival theories, studied in the
          next lessons.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ref",
      rung: "check",
      prompt: <p>What is the reference of &ldquo;Phosphorus&rdquo;?</p>,
      answer: { kind: "choice", options: ["The planet Venus", "The morning", "The word itself", "A sense"], correct: [0] },
    },
    {
      key: "sense",
      rung: "check",
      prompt: <p>What is a sense, for Frege?</p>,
      answer: {
        kind: "choice",
        options: ["A mode of presentation of the reference", "A private mental image", "A truth value", "A physical object"],
        correct: [0],
      },
    },
    {
      key: "sentref",
      rung: "apply",
      prompt: <p>What, for Frege, is the reference of a declarative sentence?</p>,
      answer: { kind: "choice", options: ["Its truth value", "The thought it expresses", "The speaker", "The fact it describes"], correct: [0] },
    },
    {
      key: "indirect",
      rung: "apply",
      prompt: <p>Why can substituting &ldquo;Phosphorus&rdquo; for &ldquo;Hesperus&rdquo; change the truth value of a belief report?</p>,
      answer: {
        kind: "choice",
        options: [
          "Inside a belief clause, names refer to their senses, which differ.",
          "Because Venus changed.",
          "Because the believer is lying.",
          "It cannot change it.",
        ],
        correct: [0],
      },
    },
    {
      key: "empty",
      rung: "apply",
      prompt: <p>On Frege&rsquo;s view, what about &ldquo;Odysseus was set ashore at Ithaca&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "It expresses a thought but has no truth value, since Odysseus has no reference.",
          "It is false.",
          "It is meaningless.",
          "It is true.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Why can&rsquo;t the meaning of a name be just its reference? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Presents Frege's puzzle about informative identity statements.",
          "Uses sense to explain the difference in cognitive value, or the failure of substitution in belief reports.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Two people associate different descriptions with &ldquo;Aristotle&rdquo;. Do they mean different things by the name?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the worry that senses given by descriptions vary between speakers.",
          "Considers a reply, such as shared public senses or a non-descriptive account.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Frege's puzzle about identity statements, his distinction between sense and reference, why the reference of a sentence is its truth value, and how he explains substitution failures in belief reports.",

  glimpse: (
    <p>
      The next lesson presents Russell&rsquo;s theory of descriptions, a rival way of solving Frege&rsquo;s puzzles. Kripke
      later challenges the idea that names have descriptive senses at all.
    </p>
  ),
};
