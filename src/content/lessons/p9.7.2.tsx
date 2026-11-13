import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Some choices between hypotheses are genuine options: live, forced and momentous.",
    kind: "premise",
    note: "Live: both seem possible to you. Forced: there is no third way, and not choosing is itself a choice. Momentous: the chance is unique and the stakes are high.",
  },
  {
    claim: "Our passional nature not only lawfully may, but must, decide a genuine option that cannot by its nature be decided on intellectual grounds.",
    kind: "premise",
    note: "James's thesis in The Will to Believe (1896). To say: leave it open, is itself a passional decision, with the same risk of losing the truth.",
    objection: "W. K. Clifford: it is wrong always, everywhere, and for anyone, to believe anything upon insufficient evidence.",
  },
  {
    claim: "There are two commandments for a knower: believe truth, and shun error. They are not the same, and they can pull apart.",
    kind: "premise",
    note: "Clifford ranks avoiding error above everything. James says this is one emotional preference among others, not a dictate of reason.",
  },
  {
    claim: "In some cases a fact cannot come at all unless a preliminary faith exists in its coming.",
    kind: "premise",
    note: "Friendship, trust within a team, a climber's leap across a crevasse: belief helps make itself true.",
  },
  {
    claim: "The religious hypothesis, for many people, is a genuine option that evidence cannot settle.",
    kind: "inference",
    note: "It is momentous, since we gain or lose a vital good, and forced, since scepticism loses that good as surely as disbelief does.",
    objection: "Is it really forced? One can act on the hypothesis without believing it, or keep inquiring. And the argument would license many conflicting faiths.",
  },
  {
    claim: "So we have the right to believe at our own risk any hypothesis live enough to tempt our will.",
    kind: "conclusion",
    note: "A defence of the right to believe, not a proof that God exists.",
    objection: "Critics said the essay should have been called The Will to Make-Believe.",
  },
];

export const lesson: LessonContent = {
  id: "p9.7.2",
  minutes: 85,
  links: {
    revisits: ["p9.7.1", "p9.4.2", "p1.1.2"],
    foreshadows: ["p9.7.3", "p23.4.1", "p29.4.1"],
  },

  puzzle: (
    <>
      <p>
        William James trained as a doctor, founded American psychology, and wrote philosophy in a style so vivid that his
        brother Henry was said to write novels like psychology while William wrote psychology like novels. In 1896 he defended
        something that seems to violate the ethics of belief: that it can be right to believe without sufficient evidence.
        Can it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the argument of The Will to Believe, and challenge the steps that critics dispute.</p>
      <ArgumentStepViz steps={STEPS} title="The will to believe" />
    </>
  ),

  theory: (
    <>
      <Definition title="the pragmatic theory of truth">
        <p>
          &ldquo;True ideas are those that we can assimilate, validate, corroborate and verify.&rdquo; (Pragmatism, 1907.) Truth
          happens to an idea: it becomes true, is made true by events. &ldquo;The true is only the expedient in the way of our
          thinking, just as the right is only the expedient in the way of our behaving&rdquo;, expedient in the long run and on
          the whole.
        </p>
      </Definition>

      <Example title="the squirrel">
        <p>
          A squirrel clings to a tree trunk; a man circles the tree, but the squirrel keeps moving to stay opposite him. Does
          the man go round the squirrel? James says: it depends on what you practically mean by going round, north, east, south
          and west of it, or in front, beside and behind it. Once that is settled there is nothing left to dispute. The
          pragmatic method dissolves verbal disputes by asking what difference each answer would make.
        </p>
      </Example>

      <Example title="radical empiricism and the stream of consciousness">
        <p>
          In The Principles of Psychology (1890), consciousness is a continuous stream, not a chain of separate ideas.
          Relations, such as the feeling of and or but, are experienced as directly as things. Later James held that
          experience is neither mental nor physical in itself, a view he called radical empiricism.
        </p>
      </Example>

      <Remark title="truth and usefulness">
        <p>
          Critics, Russell and Moore among them, objected that a belief can be useful and false, or true and useless, and that
          on James&rsquo;s view &ldquo;it is true that other people exist&rdquo; would mean &ldquo;it is useful to believe that
          other people exist&rdquo;. James replied that he did not mean momentary convenience. Whether his theory can avoid
          collapsing truth into satisfaction is still debated.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "genuine",
      rung: "check",
      prompt: <p>What makes an option genuine for James? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Live", "Forced", "Momentous", "Trivial"], correct: [0, 1, 2] },
    },
    {
      key: "clifford",
      rung: "check",
      prompt: <p>Whose view does James oppose in The Will to Believe?</p>,
      answer: {
        kind: "choice",
        options: [
          "Clifford's: it is always wrong to believe on insufficient evidence.",
          "Kierkegaard's: faith is a leap.",
          "Peirce's: belief is a habit.",
          "Hegel's: the real is rational.",
        ],
        correct: [0],
      },
    },
    {
      key: "squirrel",
      rung: "apply",
      prompt: <p>What does the squirrel example illustrate?</p>,
      answer: {
        kind: "choice",
        options: [
          "That animals have minds.",
          "That a dispute can dissolve once we ask what practical difference each answer makes.",
          "That motion is relative.",
          "That truth is subjective.",
        ],
        correct: [1],
      },
    },
    {
      key: "faith",
      rung: "apply",
      prompt: <p>Which is James&rsquo;s example of a fact that depends on prior belief in it?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the sun will rise tomorrow.",
          "That someone will come to like you, which may depend on your trusting that they will.",
          "That water boils at 100 degrees.",
          "That 2 + 2 = 4.",
        ],
        correct: [1],
      },
    },
    {
      key: "forced",
      rung: "apply",
      prompt: <p>&ldquo;Either accept this truth or go without it.&rdquo; Why does James call such an option forced?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because someone compels you.",
          "Because there is no third alternative: suspending judgement also leaves you without it.",
          "Because the evidence is overwhelming.",
          "Because it is trivial.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Clifford right that it is always wrong to believe on insufficient evidence? Argue briefly, with James in mind.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Clifford's principle and its motivation.",
          "Considers James's response, such as self-fulfilling beliefs or the two commandments.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "useful",
      rung: "stretch",
      prompt: <p>Can a belief be useful but false? What would this show about James&rsquo;s theory of truth?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an example of a useful falsehood, such as a comforting illusion.",
          "Considers James's reply that truth concerns long-run, overall expedience.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend James's argument in The Will to Believe and Clifford's opposing view, the pragmatic method and the squirrel example, his pragmatic theory of truth, and the main objection to it.",

  glimpse: (
    <p>
      The next lesson turns to John Dewey, who extended pragmatism to education and democracy. Philosophy of religion
      compares the will to believe with Pascal&rsquo;s wager, and theories of truth weigh pragmatism against deflationism.
    </p>
  ),
};
