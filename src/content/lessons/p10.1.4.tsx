import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Decades of attempts to analyse knowledge as true belief plus further conditions have all met counterexamples.",
    kind: "premise",
    note: "The record of the Gettier industry. Williamson treats this as inductive evidence that the project is misconceived.",
    objection: "Failure so far does not prove failure forever. Many concepts resist easy analysis but still have one.",
  },
  {
    claim: "Many concepts, such as red or chair, have no analysis into simpler necessary and sufficient conditions, and are none the worse for it.",
    kind: "premise",
    note: "Analysis is not the only way to understand a concept.",
  },
  {
    claim: "Knowing is a mental state: the most general factive mental state.",
    kind: "premise",
    note: "Seeing that p, remembering that p, and realising that p all entail p and all entail knowing that p. Knowledge is what they have in common.",
    objection: "Internalists insist mental states are fixed by what is inside the head, while whether a belief is true depends on the world.",
  },
  {
    claim: "If knowing is a mental state in its own right, it need not decompose into belief, which is mental, and truth, which is not.",
    kind: "inference",
    note: "Water is not a mixture of a mental and a non-mental ingredient; nor, perhaps, is knowledge.",
  },
  {
    claim: "So we should take knowledge as basic, and explain belief, justification and evidence in terms of it.",
    kind: "conclusion",
    note: "Knowledge first: belief is roughly treating something as if one knows it; evidence is what one knows, E = K; justification is knowledge or what approximates it.",
    objection: "Critics ask how a false belief can be justified, if justification is understood through knowledge, and whether the identification E = K is too demanding.",
  },
];

export const lesson: LessonContent = {
  id: "p10.1.4",
  minutes: 80,
  links: {
    revisits: ["p10.1.3", "p10.1.1", "p4.4.1"],
    foreshadows: ["p28.1.1", "p28.1.3", "p10.6.1"],
  },

  puzzle: (
    <>
      <p>
        For centuries, philosophers assumed knowledge must be belief plus something: truth, justification, and then a fourth
        condition after Gettier. In 2000 Timothy Williamson turned this around in Knowledge and Its Limits. What if knowledge
        is the basic notion, and belief is a kind of failed or would-be knowledge?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the case for putting knowledge first, and challenge the steps that critics resist.</p>
      <ArgumentStepViz steps={STEPS} title="Knowledge first" />
    </>
  ),

  theory: (
    <>
      <Definition title="factive mental state">
        <p>
          A mental state is <strong>factive</strong> if being in it with respect to p entails that p is true. Seeing that it is
          raining, remembering that you locked the door, and knowing that 7 is prime are factive; believing and hoping are not.
          On Williamson&rsquo;s view, knowing is the most general factive mental state.
        </p>
      </Definition>

      <Definition title="E = K">
        <p>
          Your evidence is exactly what you know. So a false proposition is never part of anyone&rsquo;s evidence, and two
          people in the same inner state can have different evidence if one knows more about the world.
        </p>
      </Definition>

      <Example title="the norm of assertion">
        <p>
          Williamson argues that one should assert only what one knows. This explains why &ldquo;It is raining, but I don&rsquo;t
          know that it is raining&rdquo; sounds absurd, and why it is fair to challenge an assertion with &ldquo;How do you
          know?&rdquo;. Belief, by analogy, is governed by the same norm: one should believe only what one knows.
        </p>
      </Example>

      <Remark title="assessment">
        <p>
          The view reverses the direction of explanation in epistemology, and it has been influential. Critics argue that
          justified false beliefs, like those of a person deceived by a demon, deserve a better account than &ldquo;excusable
          failures to know&rdquo;, and that the conditions in the head cannot be irrelevant to rationality. The debate between
          internalism and externalism, taken up later, runs through these questions.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "who",
      rung: "check",
      prompt: <p>Who developed the knowledge first approach in Knowledge and Its Limits?</p>,
      answer: { kind: "choice", options: ["Edmund Gettier", "Timothy Williamson", "Alvin Goldman", "Linda Zagzebski"], correct: [1] },
    },
    {
      key: "factive",
      rung: "check",
      prompt: <p>Which of these mental states are factive? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Seeing that p", "Believing that p", "Remembering that p", "Hoping that p"],
        correct: [0, 2],
      },
    },
    {
      key: "ek",
      rung: "apply",
      prompt: <p>On the view that E = K, can a false proposition be part of your evidence?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes, if you believe it.",
          "No, since evidence is what you know, and knowledge requires truth.",
          "Only if it is justified.",
          "Only in science.",
        ],
        correct: [1],
      },
    },
    {
      key: "assert",
      rung: "apply",
      prompt: <p>Why does &ldquo;It is raining, but I don&rsquo;t know that it is raining&rdquo; sound absurd, on Williamson&rsquo;s view?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is a contradiction.",
          "Because asserting the first part represents oneself as knowing it, which the second part denies.",
          "Because nobody can know about the weather.",
          "Because it is false.",
        ],
        correct: [1],
      },
    },
    {
      key: "reverse",
      rung: "apply",
      prompt: <p>How does the knowledge first approach reverse traditional epistemology?</p>,
      answer: {
        kind: "choice",
        options: [
          "It explains belief and evidence in terms of knowledge, instead of knowledge in terms of belief and justification.",
          "It denies that knowledge exists.",
          "It says knowledge requires certainty.",
          "It replaces knowledge with probability.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the failure to analyse knowledge show that it cannot be analysed? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the inductive argument from repeated failure.",
          "Considers a reply, such as that hard analyses can still exist, or that other concepts also lack analyses.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "demon",
      rung: "stretch",
      prompt: <p>A person deceived by an evil demon has exactly your experiences, but almost all their beliefs are false. Are their beliefs as justified as yours? What does your answer suggest about knowledge first?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the intuition that the deceived person is just as justified.",
          "Explains why this is awkward if justification is understood through knowledge, and a possible reply such as excuse.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the knowledge first approach, the argument from the failure of analyses, the idea of knowledge as the most general factive mental state, the thesis that evidence is knowledge, the knowledge norm of assertion, and the main objection.",

  glimpse: (
    <p>
      The next chapter turns to how beliefs are justified, beginning with the regress problem. Later courses develop
      knowledge first epistemology, including the thesis that evidence is knowledge, and virtue epistemology.
    </p>
  ),
};
