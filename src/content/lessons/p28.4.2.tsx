import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EpistemicTradeoffViz } from "@/components/viz/EpistemicTradeoffViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p28.4.2",
  minutes: 90,
  links: {
    revisits: ["p28.4.1", "p28.2.2", "p10.6.1"],
    foreshadows: ["p29.1.1", "p30.1.1", "p35.1.1"],
  },

  puzzle: (
    <>
      <p>
        A scientist is told that a funding body will give a large grant only to those who believe in a certain god. With
        the grant they would learn many truths about the world. If the aim of belief is truth, should they believe?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose how many truths the grant would buy, and compare the total inaccuracy of the two policies.</p>
      <EpistemicTradeoffViz />
    </>
  ),

  theory: (
    <>
      <Definition title="epistemic consequentialism">
        <p>
          <strong>Epistemic consequentialism</strong> evaluates beliefs, credences or methods by how well they promote
          epistemic value, usually true belief and the avoidance of error. Alvin Goldman&rsquo;s <strong>veritism</strong>{" "}
          (1999) takes true belief as the fundamental value, and process reliabilism can be read as a rule consequentialism
          about belief-forming methods.
        </p>
      </Definition>

      <Example title="trade-offs">
        <p>
          Roderick Firth (1981) described the grant case. Selim Berker (2013) argued that consequentialist views in
          epistemology wrongly permit such trade-offs: they allow a belief to be justified because of what it causes,
          whereas justification seems to depend on the relation between a belief and its own evidence. Hilary Greaves (2013)
          gave further cases in which maximising expected accuracy recommends strange credences.
        </p>
      </Example>

      <Remark title="replies">
        <p>
          Some replies restrict the view: evaluate each credence state at a time, not choices that bring about later
          beliefs, so that accuracy-first epistemology assesses states and not acts. Others accept a split: a belief can be
          epistemically good as an act, by promoting truth, while unjustified as a response to evidence. Kristoffer
          Ahlstrom-Vij and Jeffrey Dunn have defended consequentialism by building in such distinctions.
        </p>
      </Remark>

      <Remark title="a look back">
        <p>
          The course began with knowledge as a mental state and ends with the question of what epistemic norms are for.
          Accuracy arguments, disagreement and higher-order evidence all ask how belief should answer to truth, to evidence
          and to other believers.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does epistemic consequentialism say?</p>,
      answer: { kind: "choice", options: ["Beliefs or methods are right as they promote epistemic value, such as true belief", "Belief is a matter of choice only", "Consequences of belief never matter", "Only practical consequences matter for belief"], correct: [0] },
    },
    {
      key: "berker",
      rung: "check",
      prompt: <p>What is Berker&rsquo;s objection?</p>,
      answer: { kind: "choice", options: ["It permits trade-offs, justifying a belief because of the truths it leads to", "It ignores true belief", "It makes justification depend on evidence", "It cannot handle credences"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with credence 0.90 after the grant, what is the smallest k for which believing the falsehood is more accurate overall?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "hon",
      rung: "apply",
      prompt: <p>Under the honest policy, with k = 8 questions at credence 0.5, what is the total inaccuracy?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "ver",
      rung: "apply",
      prompt: <p>What is veritism?</p>,
      answer: { kind: "choice", options: ["The view that true belief is the fundamental epistemic value", "The view that knowledge is unanalysable", "The view that all beliefs are true", "The view that truth is relative"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is the right belief the one that best promotes true belief? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States epistemic consequentialism fairly.",
          "Considers the trade-off objection or a reply to it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does accuracy-first epistemology face the trade-off objection?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how accuracy-first epistemology evaluates credences.",
          "Considers whether evaluating states rather than acts avoids trade-offs.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Much of epistemology turns on what sentences such as &lsquo;she knows&rsquo; mean. The tools for making meaning
        precise come from logic: functions, types and quantifiers.
      </p>
      <p>Next, the course on graduate philosophy of language and logic begins with the lambda calculus.</p>
    </>
  ),
};
