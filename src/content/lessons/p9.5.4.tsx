import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["egoism", "intuitionism", "utilitarianism"];
const ITEMS: SortItem[] = [
  {
    text: "Do whatever brings me the greatest happiness over my whole life.",
    cat: "egoism",
    why: "The ultimate end is the agent’s own greatest happiness.",
  },
  {
    text: "Never break a promise, whatever the consequences.",
    cat: "intuitionism",
    why: "A rule taken to be binding in itself, known directly, without appeal to results.",
  },
  {
    text: "Act so as to produce the greatest happiness of all, counted impartially.",
    cat: "utilitarianism",
    why: "The ultimate end is universal happiness, with everyone counted equally.",
  },
  {
    text: "Tell the truth, because truthfulness is plainly required of us.",
    cat: "intuitionism",
    why: "The duty is seen as self-evident, not derived from happiness.",
  },
  {
    text: "Help a stranger only if it pays me in the long run.",
    cat: "egoism",
    why: "Others’ good counts only as a means to the agent’s own.",
  },
  {
    text: "Keep promises, because a practice of keeping them makes everyone better off.",
    cat: "utilitarianism",
    why: "The rule is justified by its effect on general happiness, as Sidgwick thought most common-sense rules are.",
  },
  {
    text: "A stranger’s good matters as much as my neighbour’s, from the point of view of the universe.",
    cat: "utilitarianism",
    why: "Sidgwick’s axiom of rational benevolence, the intuitive basis he found for utilitarianism.",
  },
];

export const lesson: LessonContent = {
  id: "p9.5.4",
  minutes: 85,
  links: {
    revisits: ["p9.5.3", "p5.1.4", "p8.5.1"],
    foreshadows: ["p13.1.1", "p13.3.4", "p13.5.4"],
  },

  puzzle: (
    <>
      <p>
        Henry Sidgwick resigned his Cambridge fellowship in 1869 because he could no longer sincerely affirm the doctrines of
        the Church of England. Five years later he published The Methods of Ethics, which Rawls called the most philosophically
        profound of the classical utilitarian works. It ends in something close to despair: reason, Sidgwick found, seems to
        speak with two voices. What are they?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each maxim by the method of ethics it expresses.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which method of ethics does each maxim belong to?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the methods of ethics">
        <p>
          A method of ethics is a rational procedure for deciding what one ought to do. Sidgwick finds three in ordinary
          thought: <strong>egoism</strong>, which aims at one&rsquo;s own greatest happiness; <strong>intuitionism</strong>,
          which follows rules of duty seen to be binding in themselves; and <strong>utilitarianism</strong>, which aims at the
          greatest happiness of all. He examines each with the patience of a scientist, not an advocate.
        </p>
      </Definition>

      <Example title="testing common-sense morality">
        <p>
          Sidgwick asks whether the rules of common sense, such as veracity, justice and fidelity to promises, are
          self-evident. Pressed for precision, they turn out to have exceptions, vague limits and conflicts that common sense
          itself resolves by looking at consequences. He concludes that common-sense morality is largely &ldquo;unconscious
          utilitarianism&rdquo;.
        </p>
      </Example>

      <Definition title="the philosophical intuitions">
        <p>
          What does survive scrutiny are a few abstract axioms. Justice: similar cases must be treated similarly. Prudence: a
          nearer good is not to be preferred to a greater later one merely because it is nearer. Rational benevolence: the good
          of any one individual is of no more importance, from the point of view of the universe, than the good of any other.
          The last gives utilitarianism a foundation in intuition.
        </p>
      </Definition>

      <Remark title="the dualism of practical reason">
        <p>
          Yet egoism also seems rational: the distinction between persons is real, and it seems reasonable for me to care
          specially about my own life. When my good and the general good conflict, reason gives no verdict. Sidgwick saw that
          only a moral order ensuring that duty and self-interest coincide, such as a God, could remove the conflict, and he
          could not find grounds to believe in one. He called this the profoundest problem of ethics.
        </p>
      </Remark>

      <Remark title="esoteric morality and influence">
        <p>
          Sidgwick also argued that a utilitarian might rightly keep some of its conclusions from the public, a view later
          mocked as government house utilitarianism. His careful method shaped Moore, Rawls and Parfit, and Peter Singer and
          Katarzyna de Lazari-Radek have defended his view that rational benevolence is a self-evident truth.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "three",
      rung: "check",
      prompt: <p>Which are Sidgwick&rsquo;s three methods of ethics? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Egoism", "Intuitionism", "Utilitarianism", "Virtue ethics"], correct: [0, 1, 2] },
    },
    {
      key: "benevolence",
      rung: "check",
      prompt: <p>What does the axiom of rational benevolence say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Always be kind to those around you.",
          "The good of one individual is no more important, from the point of view of the universe, than that of any other.",
          "Never harm the innocent.",
          "Benevolence is a virtue to be cultivated.",
        ],
        correct: [1],
      },
    },
    {
      key: "unconscious",
      rung: "apply",
      prompt: <p>What does Sidgwick mean by calling common-sense morality &ldquo;unconscious utilitarianism&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "That ordinary people are secretly selfish.",
          "That its rules, examined closely, are best explained and corrected by their effects on general happiness.",
          "That nobody thinks about ethics.",
          "That intuition is unreliable in every case.",
        ],
        correct: [1],
      },
    },
    {
      key: "prudence",
      rung: "apply",
      prompt: <p>Someone chooses a small pleasure today over a much greater one next year, only because today is sooner. Which axiom do they break?</p>,
      answer: { kind: "choice", options: ["Justice", "Prudence", "Rational benevolence", "None"], correct: [1] },
    },
    {
      key: "dualism",
      rung: "apply",
      prompt: <p>What is the dualism of practical reason?</p>,
      answer: {
        kind: "choice",
        options: [
          "The conflict between reason and emotion.",
          "The fact that both egoism and utilitarianism seem rational, yet can give conflicting verdicts.",
          "The division of the soul into two parts.",
          "The difference between theory and practice.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is it rational to give your own good more weight than a stranger&rsquo;s? Argue briefly, with Sidgwick in mind.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the egoist case, such as the separateness of persons.",
          "States the case from rational benevolence or the point of view of the universe.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "esoteric",
      rung: "stretch",
      prompt: <p>Sidgwick thought a utilitarian might keep some moral conclusions secret from the public. Is there anything wrong with such an esoteric morality?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why a utilitarian might favour secrecy, such as rules working better if believed absolute.",
          "Raises an objection, such as a publicity condition on moral principles or disrespect for others.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Sidgwick's three methods of ethics, his test of common-sense morality, the self-evident axioms he accepts, and the dualism of practical reason.",

  glimpse: (
    <p>
      The next chapter turns to Nietzsche, who attacked the morality that Mill and Sidgwick tried to systematise. Modern
      ethics refines consequentialism, debates moral realism, and asks how demanding morality may be.
    </p>
  ),
};
