import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TestimonyViz } from "@/components/viz/TestimonyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p10.5.2",
  minutes: 80,
  links: {
    revisits: ["p10.5.1", "p7.6.1", "p10.3.2"],
    foreshadows: ["p10.6.3", "p10.6.2", "p23.4.4"],
  },

  puzzle: (
    <>
      <p>
        You know your date of birth, that the Earth orbits the Sun, and that Antarctica exists, yet you have checked none of
        these for yourself. Almost everything you know came from someone telling you. Is believing what you are told a
        legitimate source of knowledge in its own right, or only as good as your reasons for trusting the teller?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Change the reliability of each person, the length of the chain and the number of independent witnesses, and compare
        the two probabilities.
      </p>
      <TestimonyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="reductionism">
        <p>
          Testimony justifies only when the hearer has independent, non-testimonial reasons to think the speaker reliable,
          such as past experience of the speaker or of testimony in general. Hume held a version of this: our trust in
          testimony rests on observing that reports usually match the facts.
        </p>
      </Definition>

      <Definition title="anti-reductionism">
        <p>
          Testimony is a basic source of justification, like perception and memory: a hearer is entitled to accept what they
          are told unless they have reasons for doubt. Thomas Reid spoke of a principle of credulity in us, matched by a
          principle of veracity in speakers.
        </p>
      </Definition>

      <Example title="the problem for global reductionism">
        <p>
          Can one person check enough reports to confirm that testimony in general is reliable? Most of what we could use to
          check, such as maps, encyclopaedias and the reports of experts, is itself testimony. And small children learn from
          testimony long before they could assess anyone&rsquo;s reliability, yet they seem to come to know things.
        </p>
      </Example>

      <Remark title="experts and transmission">
        <p>
          Jennifer Lackey argued that testimony can generate knowledge, not merely pass it on: a teacher who privately doubts
          evolution can still teach it reliably and give students knowledge the teacher lacks. And in a world of specialists, much
          rational belief rests on trusting experts we cannot assess, which raises questions about whom to trust and about
          whose testimony is unfairly discounted.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "red",
      rung: "check",
      prompt: <p>What does reductionism about testimony claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Testimony is never a source of knowledge.",
          "Testimony justifies only when the hearer has independent reasons to think the speaker reliable.",
          "Testimony is always reliable.",
          "Testimony is a basic source, like perception.",
        ],
        correct: [1],
      },
    },
    {
      key: "reid",
      rung: "check",
      prompt: <p>Which philosopher is associated with the principles of credulity and veracity?</p>,
      answer: { kind: "choice", options: ["Hume", "Reid", "Descartes", "Berkeley"], correct: [1] },
    },
    {
      key: "child",
      rung: "apply",
      prompt: <p>Why is the case of young children a problem for reductionism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Children never believe what they are told.",
          "Children seem to gain knowledge from testimony before they could have independent reasons to trust their teachers.",
          "Children are always unreliable.",
          "Children cannot speak.",
        ],
        correct: [1],
      },
    },
    {
      key: "chain",
      rung: "apply",
      prompt: <p>A report passes through a chain of people, each passing it on correctly with probability 0.9. What happens as the chain grows long?</p>,
      answer: {
        kind: "choice",
        options: [
          "The report becomes certain.",
          "The probability that the report is correct falls towards one half.",
          "The probability stays at 0.9.",
          "The report becomes certainly false.",
        ],
        correct: [1],
      },
    },
    {
      key: "witness",
      rung: "apply",
      prompt: <p>Why does agreement among several witnesses support a claim strongly?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because majorities are always right.",
          "Because, if they are independent, their agreement is unlikely unless the claim is true.",
          "Because witnesses never lie.",
          "It does not support it at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is testimony a basic source of justification? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States reductionism and anti-reductionism.",
          "Weighs a consideration, such as the problem of checking testimony or the risk of gullibility.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "forward",
      rung: "stretch",
      prompt: <p>A message has been forwarded many times on a messaging app, and five friends have sent it to you. How much should that raise your confidence that it is true?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the friends are probably not independent witnesses but links in the same chain.",
          "Connects to the degradation of long chains.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend reductionism and anti-reductionism about testimony with Hume and Reid, the problem of checking testimony without relying on more testimony, why chains of testimony degrade while independent witnesses reinforce, and Lackey's idea that testimony can generate knowledge.",

  glimpse: (
    <p>
      The next lesson examines memory, which preserves what we learn. Later lessons ask how to respond when experts disagree,
      and how prejudice can wrongly discount a speaker&rsquo;s word.
    </p>
  ),
};
