import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["believe", "suspend judgement", "disbelieve"];
const ITEMS: SortItem[] = [
  {
    text: "You see rain falling outside the window: is it raining?",
    cat: "believe",
    why: "Clear perceptual evidence, with no reason to doubt it, supports believing.",
  },
  {
    text: "A fair coin is about to be tossed: will it land heads?",
    cat: "suspend judgement",
    why: "The evidence is exactly balanced, so neither belief nor disbelief fits it.",
  },
  {
    text: "Your well-tested calculator says 17 × 23 = 381: is that right?",
    cat: "disbelieve",
    why: "You know 17 × 23 is 391, and that calculators occasionally misread keys, so the evidence tells against it.",
  },
  {
    text: "A stranger online says a cure for ageing was found yesterday: was it?",
    cat: "disbelieve",
    why: "Such a claim from an unknown source, against everything else you know, is far more likely false than true.",
  },
  {
    text: "Is the number of stars in the galaxy even?",
    cat: "suspend judgement",
    why: "You have no evidence either way.",
  },
  {
    text: "Your trusted friend says they are in Pune today: are they?",
    cat: "believe",
    why: "Reliable testimony with no defeaters is good evidence.",
  },
  {
    text: "Believing you will win the race would help you run faster: will you win?",
    cat: "suspend judgement",
    why: "The benefit of a belief is not evidence for it. If your evidence is balanced, suspending judgement fits it, however useful belief would be.",
  },
];

export const lesson: LessonContent = {
  id: "p10.3.2",
  minutes: 80,
  links: {
    revisits: ["p10.3.1", "p9.7.2", "p10.1.1"],
    foreshadows: ["p10.3.3", "p28.1.3", "p28.4.1"],
  },

  puzzle: (
    <>
      <p>
        W. K. Clifford told of a shipowner who sent an old ship to sea, having talked himself out of his doubts about its
        soundness. It sank. Clifford said the owner was guilty even had the ship come home safely, because he had no right to
        his belief. Is a belief justified just when it fits your evidence, no more and no less?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>For each question, decide which attitude your evidence supports.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which attitude fits the evidence?" />
    </>
  ),

  theory: (
    <>
      <Definition title="evidentialism">
        <p>
          Earl Conee and Richard Feldman (1985): believing, disbelieving or suspending judgement about p is justified for a
          person at a time if and only if that attitude <strong>fits the evidence</strong> the person has at that time.
          Evidence includes experiences, memories and other beliefs: all internal states, so evidentialism is a form of
          internalism.
        </p>
      </Definition>

      <Definition title="propositional and doxastic justification">
        <p>
          A person has <strong>propositional</strong> justification for p when their evidence supports p. Their belief is{" "}
          <strong>doxastically</strong> justified when they also believe p on the basis of that evidence. A detective whose
          evidence points to the butler, but who blames the butler from prejudice, has the first without the second.
        </p>
      </Definition>

      <Example title="against reliabilism">
        <p>
          Evidentialists handle Norman the clairvoyant easily: he has no evidence for his belief, so it is unjustified however
          reliable his power. And justification depends on what one has to go on, not on facts about reliability that may be
          hidden.
        </p>
      </Example>

      <Remark title="practical reasons for belief">
        <p>
          William James replied to Clifford that where evidence cannot settle a live, momentous and forced question, we may
          let our passions decide. Pascal offered a practical reason to believe in God. Evidentialists answer that such
          considerations may be reasons to try to get a belief, but not reasons that justify the belief itself.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          What exactly is evidence, and what is it for evidence to fit an attitude? People often forget the evidence for what
          they still rightly believe, such as where they learnt that Canberra is the capital of Australia. And the view seems
          to make justification too easy for those who have gathered little evidence, or avoided it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>According to evidentialism, when is a doxastic attitude justified?</p>,
      answer: {
        kind: "choice",
        options: [
          "When it is produced by a reliable process.",
          "When it fits the evidence the person has at the time.",
          "When it is useful to hold.",
          "When it is widely shared.",
        ],
        correct: [1],
      },
    },
    {
      key: "three",
      rung: "check",
      prompt: <p>Which attitudes can evidentialism assess?</p>,
      answer: { kind: "choice", options: ["Believing", "Disbelieving", "Suspending judgement", "Hoping"], correct: [0, 1, 2] },
    },
    {
      key: "dox",
      rung: "apply",
      prompt: <p>A detective&rsquo;s evidence points to the butler, but they accuse him out of prejudice. Which kind of justification do they have?</p>,
      answer: {
        kind: "choice",
        options: ["Both propositional and doxastic", "Propositional but not doxastic", "Doxastic but not propositional", "Neither"],
        correct: [1],
      },
    },
    {
      key: "norman",
      rung: "apply",
      prompt: <p>What does evidentialism say about Norman the clairvoyant?</p>,
      answer: {
        kind: "choice",
        options: [
          "His belief is justified because it is reliable.",
          "His belief is unjustified because he has no evidence for it.",
          "His belief is justified because it is true.",
          "Evidentialism cannot assess it.",
        ],
        correct: [1],
      },
    },
    {
      key: "pascal",
      rung: "apply",
      prompt: <p>How does an evidentialist treat a practical reason, such as that believing something would make you happier?</p>,
      answer: {
        kind: "choice",
        options: [
          "As strong evidence for the belief.",
          "As possibly a reason to try to acquire the belief, but not as something that justifies it.",
          "As making the belief true.",
          "As irrelevant to all decisions.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Was Clifford&rsquo;s shipowner blameworthy even if the ship had arrived safely? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Clifford's claim that belief must answer to evidence.",
          "Considers a reply, such as James's or the view that outcomes matter.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "forget",
      rung: "stretch",
      prompt: <p>You rightly believe Canberra is the capital of Australia but cannot remember how you learnt it. What is your evidence now, and is your belief justified?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why forgotten evidence is a problem for evidentialism.",
          "Considers a reply, such as the evidence of seeming to remember.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend evidentialism, the three attitudes it assesses, propositional and doxastic justification, how it handles Norman the clairvoyant, Clifford's shipowner and James's reply, and the problem of forgotten evidence.",

  glimpse: (
    <p>
      The next lesson brings both views together in the new evil demon problem. Graduate epistemology asks whether one&rsquo;s
      evidence is simply what one knows, and whether practical stakes can affect what one is justified in believing.
    </p>
  ),
};
