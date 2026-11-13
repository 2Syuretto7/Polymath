import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RigidWorldsViz } from "@/components/viz/RigidWorldsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p15.2.1",
  minutes: 80,
  links: {
    revisits: ["p15.1.2", "p11.3.1", "p15.1.1"],
    foreshadows: ["p15.2.2", "p15.2.3", "p29.2.1"],
  },

  puzzle: (
    <>
      <p>
        Suppose &ldquo;Aristotle&rdquo; means &ldquo;the teacher of Alexander the Great&rdquo;. Then &ldquo;Aristotle taught
        Alexander&rdquo; would be as trivial as &ldquo;the teacher of Alexander taught Alexander&rdquo;. But Aristotle might have
        stayed in Athens and never met Alexander. So how can the name mean the description?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a name or a description and see what it picks out in each possible situation.</p>
      <RigidWorldsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="rigid designators">
        <p>
          In lectures given in 1970 and published as <em>Naming and Necessity</em>, Saul Kripke called an expression a{" "}
          <strong>rigid designator</strong> if it picks out the same object in every possible world where that object exists.
          Proper names are rigid. Most descriptions are not: &ldquo;the teacher of Alexander&rdquo; picks out whoever taught
          Alexander in each world.
        </p>
      </Definition>

      <Example title="three arguments against descriptivism">
        <p>
          The <strong>modal argument</strong>: if a name meant a description, sentences like &ldquo;Aristotle taught
          Alexander&rdquo; would be necessary, but they are contingent. The <strong>epistemic argument</strong>: suppose all
          most people associate with &ldquo;Gödel&rdquo; is &ldquo;the man who proved the incompleteness of arithmetic&rdquo;,
          and in fact an unknown man called Schmidt proved it and Gödel stole the work. Then on descriptivism
          &ldquo;Gödel&rdquo; would refer to Schmidt, but it plainly refers to Gödel. The <strong>semantic argument</strong>:
          many speakers know nothing unique about Feynman beyond &ldquo;a physicist&rdquo;, yet they still refer to Feynman.
        </p>
      </Example>

      <Remark title="necessary identity">
        <p>
          If &ldquo;Hesperus&rdquo; and &ldquo;Phosphorus&rdquo; are both rigid and refer to the same planet, then
          &ldquo;Hesperus is Phosphorus&rdquo; is true in every world where Venus exists: it is necessary. Yet it was discovered by
          observation. So Kripke separated necessity, a matter of metaphysics, from a priori knowledge, a matter of epistemology:
          there are necessary truths known only a posteriori.
        </p>
      </Remark>

      <Remark title="replies">
        <p>
          Searle&rsquo;s cluster theory says a name refers to whatever satisfies enough of a cluster of descriptions, which helps
          with Feynman but not with Gödel. Others propose rigidified descriptions, such as &ldquo;the actual teacher of
          Alexander&rdquo;, which picks out the man who taught Alexander in this world even when talking about other worlds.
          Whether that rescues descriptivism remains debated.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a rigid designator?</p>,
      answer: {
        kind: "choice",
        options: [
          "An expression that picks out the same object in every possible world where that object exists.",
          "An expression that can never be empty.",
          "A description with only one word.",
          "A name whose meaning cannot change over time.",
        ],
        correct: [0],
      },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these is rigid, according to Kripke?</p>,
      answer: {
        kind: "choice",
        options: ["“Aristotle”", "“the teacher of Alexander”", "“the author of the Metaphysics”", "“the tallest philosopher”"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, who does &ldquo;the teacher of Alexander&rdquo; pick out in the world where Aristotle becomes a doctor?</p>,
      answer: { kind: "choice", options: ["Theophrastus", "Aristotle", "Xenocrates", "Nobody"], correct: [0] },
    },
    {
      key: "godel",
      rung: "apply",
      prompt: <p>What does the Gödel and Schmidt case show?</p>,
      answer: {
        kind: "choice",
        options: [
          "A name can refer to someone even if the description speakers associate with it fits someone else.",
          "Gödel did not prove incompleteness.",
          "Names are abbreviated descriptions.",
          "Reference requires knowing a unique description.",
        ],
        correct: [0],
      },
    },
    {
      key: "hesp",
      rung: "apply",
      prompt: <p>For Kripke, what is the status of &ldquo;Hesperus is Phosphorus&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: ["Necessary but known a posteriori", "Contingent and known a priori", "Necessary and known a priori", "Contingent and known a posteriori"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the modal argument refute the view that names are abbreviated descriptions? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the modal argument, using rigidity.",
          "Considers a reply, such as rigidified descriptions or wide-scope readings.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If names are rigid, what explains the informativeness of &ldquo;Hesperus is Phosphorus&rdquo;, which troubled Frege?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Frege’s puzzle and why rigidity seems to make the two names say the same thing.",
          "Considers an answer, such as how the reference was fixed, or different ways of believing the same proposition.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a rigid designator is, Kripke's modal, epistemic and semantic arguments against descriptivism, and why identities between names are necessary but can be known only a posteriori.",

  glimpse: (
    <p>
      The next lesson asks what does fix the reference of a name, if not a description: Kripke&rsquo;s picture of a causal
      chain. Natural kind terms like &ldquo;water&rdquo; turn out to be rigid too, and later lessons examine the necessary a
      posteriori.
    </p>
  ),
};
