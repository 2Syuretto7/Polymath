import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["reports a feeling", "expresses a feeling", "depends on the theory"];
const ITEMS: SortItem[] = [
  {
    text: "I disapprove of lying.",
    cat: "reports a feeling",
    why: "A statement about the speaker's own attitude. It is true or false, and it is true if the speaker really does disapprove.",
  },
  {
    text: "Lying! Boo!",
    cat: "expresses a feeling",
    why: "This vents an attitude without describing anything. It is neither true nor false, any more than a groan is.",
  },
  {
    text: "Ouch!",
    cat: "expresses a feeling",
    why: "Like a cry of pain, it shows how the speaker feels without stating that they feel it.",
  },
  {
    text: "I feel sad today.",
    cat: "reports a feeling",
    why: "A description of the speaker's state, which could be true or false.",
  },
  {
    text: "Hurrah for honesty!",
    cat: "expresses a feeling",
    why: "An expression of approval. Ayer's emotivism treats moral judgements as being like this underneath.",
  },
  {
    text: "Lying is wrong.",
    cat: "depends on the theory",
    why: "Simple subjectivism says this reports the speaker's disapproval, like the first sentence. Emotivism says it expresses disapproval, like 'Lying! Boo!'. Moral realists say it states a fact.",
  },
];

export const lesson: LessonContent = {
  id: "p5.1.2",
  minutes: 75,
  links: {
    revisits: ["p5.1.1", "p1.6.2", "p4.2.1"],
    foreshadows: ["p5.1.3", "p13.3.2", "p13.3.1"],
  },

  puzzle: (
    <>
      <p>
        Look at a wilful murder, Hume suggested, and try to find the vice in it. You will find passions, motives, actions
        and thoughts, but no fact of wickedness, until you turn to your own breast and find a feeling of disapproval there.
        If wrongness is not out in the world, perhaps &ldquo;murder is wrong&rdquo; is really about our feelings. But then,
        when two people argue about whether something is wrong, what are they arguing about?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Some sentences describe a feeling, and some give vent to it. Sort each one. Where does a moral judgement belong?
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Sort each sentence. The last one is the one that matters." />
    </>
  ),

  theory: (
    <>
      <Definition title="simple subjectivism">
        <p>
          <strong>Simple subjectivism</strong> says that a moral judgement reports the speaker&rsquo;s feelings: &ldquo;X is
          wrong&rdquo; means &ldquo;I disapprove of X&rdquo;, and &ldquo;X is good&rdquo; means &ldquo;I approve of
          X&rdquo;. Moral judgements are then true or false, but they are facts about the speaker, not about X.
        </p>
      </Definition>

      <Example title="two objections">
        <p>
          First, it makes us infallible. As long as I am honestly reporting my feelings, my moral judgements are true, so
          I could never be mistaken about right and wrong. Second, it cannot explain disagreement. If one person says
          eating meat is wrong and another says it is not, on simple subjectivism one is saying &ldquo;I disapprove of
          eating meat&rdquo; and the other &ldquo;I do not&rdquo;. Both may be telling the truth, so they do not disagree
          at all. But they obviously do.
        </p>
      </Example>

      <Definition title="emotivism">
        <p>
          <strong>Emotivism</strong>, developed by A. J. Ayer and Charles Stevenson in the 1930s and 1940s, improves on
          this. Moral language does not report attitudes, it expresses them, and it tries to influence others. &ldquo;Lying
          is wrong&rdquo; is like &ldquo;Lying! Boo!&rdquo;, or like a command not to lie. It is neither true nor false.
          Stevenson distinguished disagreement in belief, about the facts, from disagreement in attitude, where people want
          different things; moral disputes involve both. Two people who express opposed attitudes genuinely disagree, as a
          person who says &ldquo;let&rsquo;s go to the cinema&rdquo; disagrees with one who says &ldquo;no, let&rsquo;s stay
          in&rdquo;.
        </p>
      </Definition>

      <Remark title="the place of reasons">
        <p>
          Rachels presses an objection to emotivism: moral judgements need reasons in a way that expressions of feeling do
          not. If I say I like a film, I need give no reason; if I say a law is unjust, I owe you one. Emotivism treats a
          reason as anything that changes someone&rsquo;s attitude, so a lie or a threat that works would count as a good
          reason. Later philosophers, starting with Peter Geach, also asked how emotivism handles moral sentences inside
          larger ones, such as &ldquo;if lying is wrong, then getting your brother to lie is wrong&rdquo;, where nothing is
          being booed. Even so, the subjectivist insight that morality engages our feelings survives in more sophisticated
          forms of non-cognitivism.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "simple",
      rung: "check",
      prompt: <p>According to simple subjectivism, what does &ldquo;stealing is wrong&rdquo; mean?</p>,
      answer: {
        kind: "choice",
        options: ["Stealing is forbidden by God.", "I disapprove of stealing.", "Most people disapprove of stealing.", "Stealing! Boo!"],
        correct: [1],
      },
    },
    {
      key: "emotivism",
      rung: "check",
      prompt: <p>What does emotivism say about moral judgements?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are true reports of the speaker's feelings.",
          "They express attitudes and are neither true nor false.",
          "They state objective facts.",
          "They report what a culture approves.",
        ],
        correct: [1],
      },
    },
    {
      key: "meat",
      rung: "apply",
      prompt: (
        <p>
          One person says eating meat is wrong; another says it is not. On simple subjectivism, do their two statements
          contradict each other?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Yes: one of them must be false.",
          "No: each reports their own feelings, and both reports can be true.",
          "Only if they live in the same culture.",
          "Only if one of them is lying.",
        ],
        correct: [1],
      },
    },
    {
      key: "who",
      rung: "apply",
      prompt: <p>Who developed emotivism?</p>,
      answer: {
        kind: "choice",
        options: ["Hume and Kant", "Ayer and Stevenson", "Rachels and Herodotus", "Plato and Aristotle"],
        correct: [1],
      },
    },
    {
      key: "belief",
      rung: "apply",
      prompt: (
        <p>
          Two people dispute whether a new law will actually reduce crime. In Stevenson&rsquo;s terms, what kind of
          disagreement is this?
        </p>
      ),
      answer: { kind: "choice", options: ["disagreement in belief", "disagreement in attitude"], correct: [0] },
    },
    {
      key: "disagree",
      rung: "prove",
      prompt: (
        <p>
          Set out the argument from disagreement against simple subjectivism as premises and a conclusion. Then explain
          how emotivism tries to avoid it, and whether it succeeds.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States premises such as: people who make opposed moral judgements disagree; on simple subjectivism, their statements can both be true; statements that can both be true do not express a disagreement.",
          "Concludes that simple subjectivism misdescribes moral judgements.",
          "Explains that emotivism treats the disagreement as disagreement in attitude, and assesses this. Any reasonable assessment earns full credit.",
        ],
      },
    },
    {
      key: "reasons",
      rung: "stretch",
      prompt: (
        <p>
          Can emotivism make sense of the difference between a good reason for a moral view and a merely effective way of
          changing someone&rsquo;s mind? Consider a true argument and a successful bribe that both change someone&rsquo;s
          attitude.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the emotivist account of reasons as considerations that influence attitudes.",
          "Uses the example to show that this seems to make a bribe as good a reason as a sound argument, and considers an emotivist reply.",
          "Reaches a reasoned view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between simple subjectivism and emotivism, why simple subjectivism struggles with disagreement and fallibility, how emotivism answers, and the objection that moral judgements need reasons.",

  glimpse: (
    <p>
      The next lesson asks whether morality might instead depend on the commands of God. Moral Philosophy develops
      non-cognitivism further, and begins with Moore&rsquo;s argument that goodness cannot be defined.
    </p>
  ),
};
