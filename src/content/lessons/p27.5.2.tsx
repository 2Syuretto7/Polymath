import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { VerbalDisputeViz } from "@/components/viz/VerbalDisputeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p27.5.2",
  minutes: 90,
  links: {
    revisits: ["p27.5.1", "p27.3.1", "p27.3.2"],
    foreshadows: ["p27.5.3", "p29.3.1", "p29.4.1"],
  },

  puzzle: (
    <>
      <p>
        On a camping trip, William James found his friends in a fierce argument. A squirrel clung to a tree, and a man
        walked right round the tree, but the squirrel kept moving so the trunk stayed between them. Did the man go round
        the squirrel? Both sides were sure. James ended the quarrel in a sentence. How?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a dispute, ban its key word, and see whether any disagreement is left.</p>
      <VerbalDisputeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="verbal disputes">
        <p>
          David Chalmers (2011): a dispute over a sentence is <strong>verbal</strong> when, for some expression in it,
          the parties disagree about the sentence only because they mean different things by that expression. Otherwise
          it is <strong>substantive</strong>. Agreement on all the relevant facts, with disagreement only over how to
          describe them, is the mark of a verbal dispute.
        </p>
      </Definition>

      <Definition title="the method of elimination">
        <p>
          To test a dispute, bar the key term. Each side restates its view in other words. If the restated views are
          compatible, the dispute was verbal. If a disagreement remains, the dispute is at least partly substantive, and
          the method can be repeated on the new key term.
        </p>
      </Definition>

      <Example title="Hirsch on ontology">
        <p>
          Eli Hirsch argues that many disputes in ontology are verbal. The universalist says that a table exists wherever
          particles are arranged table-wise; the nihilist denies it. By the principle of charity, each side&rsquo;s
          sentences come out true in its own language, since each side speaks as it does in full view of the same
          particles. This is <strong>quantifier variance</strong>: &lsquo;there is&rsquo; can take several equally good
          meanings.
        </p>
      </Example>

      <Remark title="replies">
        <p>
          Theodore Sider replies that one meaning of the quantifier is privileged because it carves reality at its
          joints, so the question of which side speaks truly in that meaning is substantive. Chalmers notes that some
          terms may be bedrock and cannot be barred without loss. David Plunkett and Tim Sundell add that a verbal dispute
          need not be idle: a <strong>metalinguistic negotiation</strong> over how a word like &lsquo;planet&rsquo; or
          &lsquo;torture&rsquo; should be used can matter a great deal.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "method",
      rung: "check",
      prompt: <p>What is Chalmers&rsquo;s method of elimination?</p>,
      answer: { kind: "choice", options: ["Bar the key term and see whether a disagreement survives in other words", "Eliminate one of the parties to the dispute", "Ask a dictionary which side is right", "Remove every sentence containing a quantifier"], correct: [0] },
    },
    {
      key: "hirsch",
      rung: "check",
      prompt: <p>What does Hirsch say about the dispute between the universalist and the nihilist?</p>,
      answer: { kind: "choice", options: ["It is verbal: each side speaks truly in its own language", "The nihilist is right", "The universalist is right", "It can be settled by experiment"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which dispute leaves a substantive disagreement once its key word is banned?</p>,
      answer: { kind: "choice", options: ["Free will", "Squirrel", "Pluto", "None of them"], correct: [0] },
    },
    {
      key: "sider",
      rung: "apply",
      prompt: <p>How does Sider resist Hirsch?</p>,
      answer: { kind: "choice", options: ["One meaning of the quantifier is privileged because it carves reality at its joints", "He denies that particles exist", "He accepts that ontology is verbal", "He bans the word ‘exist’"], correct: [0] },
    },
    {
      key: "nego",
      rung: "apply",
      prompt: <p>What is a metalinguistic negotiation?</p>,
      answer: { kind: "choice", options: ["A dispute about how a word should be used, which can matter in practice", "A dispute about grammar only", "A negotiation conducted in a formal language", "An agreement to stop using a word"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is the dispute over whether a hot dog is a sandwich verbal? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies a test, such as banning the word ‘sandwich’ and restating each side.",
          "Says whether any disagreement about the facts survives.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a dispute be verbal and still worth having?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes disputes about the facts from disputes about the use of words.",
          "Considers a case, such as metalinguistic negotiation over ‘planet’ or a legal term.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If disputes over what exists are verbal, or easily settled once the words are fixed, perhaps ontology was never as
        deep as it seemed. Several philosophers have drawn exactly that conclusion.
      </p>
      <p>Next, deflationism about ontology.</p>
    </>
  ),
};
