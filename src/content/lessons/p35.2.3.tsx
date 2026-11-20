import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RevisionStrategyViz } from "@/components/viz/RevisionStrategyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p35.2.3",
  minutes: 90,
  links: {
    revisits: ["p35.2.2", "p0.3.4", "p0.4.3"],
    foreshadows: ["p35.3.1", "p35.2.1", "p35.1.3"],
  },

  puzzle: (
    <>
      <p>
        A referee raises an objection you cannot fully answer. You could ignore it and hope, abandon your thesis, or
        something in between. Philosophers who make lasting contributions rarely win every exchange; they learn which
        ground to hold and which to give up. How do you revise so that the paper ends up stronger rather than merely
        more cautious?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a strategy for answering the objection, and see how much of the claim survives.</p>
      <RevisionStrategyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="four responses">
        <p>
          To <strong>rebut</strong> is to deny a premise of the objection, with an argument. To <strong>refine</strong> is
          to draw a distinction that keeps the heart of the thesis while showing that the objection targets a version you
          do not need. To <strong>concede part</strong> is to restrict the thesis to the cases the objection does not
          touch. To <strong>bite the bullet</strong> is to accept the objection&rsquo;s consequence and argue that it is
          not as bad as it seems. Each response trades some strength of claim for safety.
        </p>
      </Definition>

      <Definition title="the response letter">
        <p>
          When resubmitting to a journal, authors write a <strong>response letter</strong> that quotes each comment and
          says what was changed and where, or why no change was made. Writing one for yourself is valuable even without a
          journal: it forces you to take every comment seriously and to keep track of what the revision has done.
        </p>
      </Definition>

      <Example title="revising with Parton">
        <p>
          After drafting a reply to an objection, paste the objection and your reply into the Ask Parton panel and ask
          whether the reply really meets the objection or only changes the subject. If Parton presses a further worry,
          decide whether it calls for rebuttal, refinement or concession. Keep the exchange short: one objection at a time.
        </p>
      </Example>

      <Remark title="when to change the thesis">
        <p>
          A revised thesis is not a defeat. Many celebrated papers began as stronger claims that were narrowed under
          criticism, and the narrowed claim is often more interesting because it is more precise. What matters is that
          the final paper says plainly what it claims, what it concedes and why the remainder still matters.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rebut",
      rung: "check",
      prompt: <p>What does it mean to rebut an objection?</p>,
      answer: { kind: "choice", options: ["To deny one of its premises, with an argument", "To ignore it", "To accept it fully", "To change the topic"], correct: [0] },
    },
    {
      key: "letter",
      rung: "check",
      prompt: <p>What is a response letter?</p>,
      answer: { kind: "choice", options: ["A list of each referee comment with what was changed, or why not", "A complaint to the editor", "A new paper on a different topic", "A thank-you card"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose &ldquo;concede part&rdquo;. What percentage of the strength of the claim is kept?</p>,
      answer: { kind: "numeric", value: 50, tolerance: 0 },
    },
    {
      key: "refine",
      rung: "apply",
      prompt: <p>Which response draws a distinction so that the objection targets a version of the thesis you do not need?</p>,
      answer: { kind: "choice", options: ["Refining", "Biting the bullet", "Ignoring", "Withdrawing"], correct: [0] },
    },
    {
      key: "narrow",
      rung: "apply",
      prompt: <p>Your revised thesis is narrower than the original. How should the paper present this?</p>,
      answer: { kind: "choice", options: ["State plainly what is claimed, what is conceded, and why the rest still matters", "Hide the change", "Keep the original title and claim", "Apologise at length"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Take the objection you wrote in the last lesson. Say in a sentence or two which response you would choose, and how your thesis changes.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Chooses a response, such as rebutting, refining or conceding part.",
          "States how the thesis changes, or why it need not.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is it ever right to keep a thesis you cannot fully defend?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers the value of bold claims against the duty to defend them.",
          "Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Reading, mapping, choosing a question, drafting, refereeing and revising: these are the stages of every piece of
        research. The thesis puts them together at full length.
      </p>
      <p>Next, the thesis.</p>
    </>
  ),
};
