import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["No false lemmas", "Defeasibility", "Causal theory", "Safety"];
const CASES = ["Ten coins", "Fake barns", "Hidden sheep", "Tom Grabit", "7 + 5 = 12"];
const V: CaseVerdict[][] = [
  [
    { ok: true, why: "Smith inferred his belief from the false belief that Jones will get the job, so the theory rightly denies knowledge." },
    { ok: false, why: "Henry sees a real barn in a county full of barn facades. No falsehood is involved in his reasoning, so the theory counts it as knowledge, though most people judge he is merely lucky." },
    { ok: true, why: "The belief rests on the false judgement that the animal in view is a sheep, so it is denied, provided perceptual judgements count as lemmas." },
    { ok: true, why: "You saw Tom steal the book and inferred nothing false, so the theory rightly counts it as knowledge." },
    { ok: true, why: "A proof from true premises involves no false lemma, so the theory rightly counts it as knowledge." },
  ],
  [
    { ok: true, why: "The truth that Jones will not get the job would defeat Smith's justification, so knowledge is rightly denied." },
    { ok: true, why: "The truth that the county is full of facades would defeat Henry's justification, so knowledge is rightly denied." },
    { ok: true, why: "The truth that the animal in view is a dog would defeat the justification, so knowledge is rightly denied." },
    { ok: false, why: "Tom's mother has said that he was abroad and his twin took the book. She is lying and there is no twin, but adding the true fact that she said so defeats your justification, so a simple defeasibility theory wrongly denies knowledge. Refined versions distinguish misleading defeaters." },
    { ok: true, why: "No truth would undermine a sound proof, so the theory rightly counts it as knowledge." },
  ],
  [
    { ok: true, why: "Smith's belief was caused by facts about Jones, not by his own coins, so knowledge is rightly denied." },
    { ok: false, why: "The real barn does cause Henry's belief in the normal perceptual way, so the theory wrongly counts it as knowledge." },
    { ok: true, why: "The hidden sheep plays no causal role in the belief, so knowledge is rightly denied." },
    { ok: true, why: "Tom's stealing the book caused your belief, so the theory rightly counts it as knowledge." },
    { ok: false, why: "Numbers do not cause anything, so the theory cannot count mathematical knowledge as knowledge. Goldman later gave up the causal theory for reliabilism." },
  ],
  [
    { ok: true, why: "Had Smith had nine coins, he would have believed the same thing falsely: the belief could easily have been false, so it is not safe." },
    { ok: true, why: "Henry could very easily have looked at a facade and formed a false belief in the same way, so his belief is unsafe." },
    { ok: true, why: "Had the sheep wandered off, the belief would still have been formed, falsely, so it is unsafe." },
    { ok: true, why: "Your belief, formed by seeing Tom, would not easily have been false, so it is safe and counts as knowledge." },
    { ok: true, why: "A necessary truth cannot be false, so the belief is trivially safe. Critics note this makes safety say nothing about lucky guesses in mathematics." },
  ],
];

export const lesson: LessonContent = {
  id: "p10.1.3",
  minutes: 85,
  links: {
    revisits: ["p10.1.2", "p10.1.1", "p0.4.2"],
    foreshadows: ["p10.1.4", "p10.3.1", "p10.4.2"],
  },

  puzzle: (
    <>
      <p>
        After Gettier, it seemed that a fourth condition would fix the analysis: justified true belief plus something. For
        twenty years epistemologists proposed conditions and others found counterexamples, a period often called the
        Gettier industry. Can any fourth condition succeed?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test four leading responses against five cases. Click a cell to see each verdict and the reason for it.</p>
      <CaseMatrixViz theories={THEORIES} cases={CASES} verdicts={V} prompt="Does each theory give the right verdict in each case?" />
    </>
  ),

  theory: (
    <>
      <Definition title="no false lemmas">
        <p>
          Knowledge is justified true belief not inferred from any falsehood (Michael Clark, 1963). It handles Gettier&rsquo;s
          own cases, which run through false beliefs, but fails on cases without inference, such as fake barns.
        </p>
      </Definition>

      <Definition title="defeasibility">
        <p>
          Knowledge is justified true belief whose justification would not be defeated by any truth (Keith Lehrer and Thomas
          Paxson, Peter Klein). The difficulty is misleading defeaters, true facts that would undermine the justification only
          by suggesting a falsehood, as in the Tom Grabit case.
        </p>
      </Definition>

      <Example title="fake barn country">
        <p>
          Henry drives through a county where the locals have put up many barn facades. He looks at the one real barn and
          believes: that is a barn. His belief is true and justified, and caused by a barn, yet most judge it lucky. The case,
          due to Carl Ginet and published by Alvin Goldman in 1976, shows that luck can come from the environment, not just the
          reasoning.
        </p>
      </Example>

      <Definition title="safety and sensitivity">
        <p>
          Sensitivity (Robert Nozick): if p were false, S would not believe p. Safety (Ernest Sosa, Timothy Williamson, Duncan
          Pritchard): S could not easily have believed p falsely, in the same way. Both try to capture the idea that knowledge
          excludes luck, by looking at nearby possibilities rather than the actual reasoning.
        </p>
      </Definition>

      <Remark title="is the project doomed?">
        <p>
          Linda Zagzebski argued in 1994 that Gettier cases are inescapable for any analysis on which justification does not
          guarantee truth: take a justified false belief, then add luck to make it true. If she is right, either justification
          must entail truth, or knowledge cannot be analysed as true belief plus extra conditions at all. That second option is
          the subject of the next lesson.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "nfl",
      rung: "check",
      prompt: <p>What does the no false lemmas response add to justified true belief?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the belief is not inferred from any falsehood.",
          "That the belief is caused by the fact.",
          "That no truth would defeat the justification.",
          "That the subject is certain.",
        ],
        correct: [0],
      },
    },
    {
      key: "barn",
      rung: "check",
      prompt: <p>Which response is the fake barn case designed to challenge?</p>,
      answer: {
        kind: "choice",
        options: ["No false lemmas, since no inference from falsehood is involved", "Safety", "Scepticism", "Defeasibility only"],
        correct: [0],
      },
    },
    {
      key: "safe",
      rung: "apply",
      prompt: <p>What does it mean for a belief to be safe?</p>,
      answer: {
        kind: "choice",
        options: [
          "It could not easily have been false, given how it was formed.",
          "It is held with certainty.",
          "It is shared by experts.",
          "It is about something harmless.",
        ],
        correct: [0],
      },
    },
    {
      key: "causal",
      rung: "apply",
      prompt: <p>Why does the causal theory struggle with mathematical knowledge?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because mathematical beliefs are false.",
          "Because numbers do not cause beliefs.",
          "Because mathematicians are unreliable.",
          "Because proofs involve false lemmas.",
        ],
        correct: [1],
      },
    },
    {
      key: "zag",
      rung: "apply",
      prompt: <p>What is Zagzebski&rsquo;s recipe for a Gettier case against any analysis where justification does not guarantee truth?</p>,
      answer: {
        kind: "choice",
        options: [
          "Remove the subject's belief.",
          "Take a justified false belief, then add a stroke of luck that makes it true.",
          "Make the subject certain.",
          "Use only mathematical examples.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Which response to Gettier do you find most promising? Argue briefly, considering one case that challenges it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a response clearly.",
          "Considers a case that challenges it and a possible reply.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "zag2",
      rung: "stretch",
      prompt: <p>If Zagzebski is right, what options remain for the theory of knowledge?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes one option: require justification that guarantees truth, at the risk of scepticism.",
          "Notes another: give up analysing knowledge in terms of belief plus conditions, as in knowledge first.",
          "Weighs them. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the main responses to Gettier, no false lemmas, defeasibility, the causal theory and safety, the cases that challenge each, and Zagzebski's argument that such cases are inescapable.",

  glimpse: (
    <p>
      The next lesson considers the radical alternative that knowledge cannot be analysed at all. Reliabilism and the closure
      principle, studied later, grow from the same debate.
    </p>
  ),
};
