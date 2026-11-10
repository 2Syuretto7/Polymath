import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.3.2",
  minutes: 60,
  links: {
    revisits: ["p0.1.4"],
    foreshadows: ["p0.4.3", "p3.1.3", "p3.2.2", "p1.1.2"],
  },

  puzzle: (
    <>
      <p>
        William James tells of a camping trip on which his friends fell into a fierce argument. A squirrel clings to one
        side of a tree trunk; a man stands on the other side. The man walks all the way round the tree, but the squirrel
        moves round the trunk just as fast, always keeping the tree between them.
      </p>
      <Quote source={<>William James, <cite>Pragmatism</cite> (1907), Lecture 2</>}>
        <p>Does the man go round the squirrel or not?</p>
      </Quote>
      <p>
        The campers had argued until they were exhausted, and were evenly split. Which side are you on? Before you answer,
        ask what the disagreement is really about.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        James&rsquo;s answer was that both sides were right, in different senses of &ldquo;go round&rdquo;. If it means
        passing from north of the squirrel to east, south and west of it, the man goes round. If it means being first in
        front of it, then to its side, then behind it, he does not, because the squirrel always faces him. Once the senses
        are separated, there is nothing left to dispute. Every fact about the man, the tree and the squirrel was agreed all
        along.
      </p>
      <p>
        A great deal of bad philosophy, and a great deal of bad argument everywhere, is a squirrel dispute: two people
        using one word in two ways and believing they disagree. Clarity is not a matter of style. It is what lets a reader
        tell a real disagreement from a verbal one, and an argument that works from one that only seems to.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="ambiguity and vagueness">
        <ul>
          <li>
            A word is <strong>ambiguous</strong> when it has two or more distinct meanings: &ldquo;bank&rdquo;,
            &ldquo;go round&rdquo;, or &ldquo;free&rdquo; (free of charge, or free to choose). A sentence can be ambiguous
            in its structure too: &ldquo;every student read a book&rdquo; (one book, or one each?).
          </li>
          <li>
            A word is <strong>vague</strong> when it has one meaning with no sharp boundary: &ldquo;tall&rdquo;,
            &ldquo;bald&rdquo;, &ldquo;heap&rdquo;. There are clear cases, clear non-cases, and borderline cases in between.
          </li>
        </ul>
        <p>Ambiguity is cured by separating the senses. Vagueness usually cannot be cured, only managed.</p>
      </Definition>

      <Definition title="kinds of definition">
        <ul>
          <li>A <strong>lexical</strong> definition reports how a word is actually used. It can be right or wrong.</li>
          <li>
            A <strong>stipulative</strong> definition announces how <em>you</em> will use a word in this essay. It cannot
            be wrong, but it can be unhelpful, and it must be followed consistently.
          </li>
          <li>
            A <strong>precising</strong> definition sharpens a vague word for a purpose, within its ordinary range:
            &ldquo;By a <em>large</em> donation I mean more than a tenth of one&rsquo;s income.&rdquo;
          </li>
        </ul>
        <p>
          A definition by <strong>necessary and sufficient conditions</strong>, the kind you tested on the chair, says: X
          is F exactly when X meets these conditions. Philosophers prize it, but it is not the only honest way to fix
          meaning; clear examples and contrasts often do as well.
        </p>
      </Definition>

      <Definition title="verbal dispute">
        <p>
          A dispute is <strong>verbal</strong> when the parties agree on every relevant fact and differ only in how they use
          a word. It ends when the senses are separated. A dispute is <strong>substantive</strong> when it survives that
          separation: each side, stating its view in words both accept, still contradicts the other.
        </p>
      </Definition>

      <Example title="is a virus alive?">
        <p>
          A biologist says viruses are alive because they reproduce and evolve. Another says they are not, because they
          have no metabolism of their own. Do they disagree about viruses? Ask whether either would change their mind about
          any fact. If both agree that viruses reproduce, evolve and lack metabolism, the disagreement is about the word
          &ldquo;alive&rdquo;. That can still matter, for instance in deciding what a theory of life should explain, but it
          is a different question and should be argued as one.
        </p>
      </Example>

      <p>Habits that make an essay clear:</p>
      <ul>
        <li><strong>Define the key terms</strong> that are in dispute, once, early, and then keep to your definitions.</li>
        <li><strong>Never vary a key term for elegance.</strong> If &ldquo;knowledge&rdquo; becomes &ldquo;understanding&rdquo; and then &ldquo;awareness&rdquo;, your reader will assume you mean three things.</li>
        <li><strong>One claim per sentence</strong> where the claims matter. Long sentences hide where the argument turns.</li>
        <li><strong>Prefer the concrete example</strong> to the abstract restatement. An example shows which sense you mean.</li>
        <li><strong>Say it plainly.</strong> If an idea can only be stated in jargon, you may not yet understand it.</li>
      </ul>

      <Remark title="equivocation">
        <p>
          The worst consequence of ambiguity is an argument that shifts between senses midway. &ldquo;The end of a thing is
          its perfection. Death is the end of life. So death is the perfection of life.&rdquo; Each premise is plausible in
          one sense of &ldquo;end&rdquo; (goal, then termination), and the argument only seems to work because one word
          covers both. This is called <strong>equivocation</strong>, and a habit of defining your terms is the best
          protection against committing it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ambig-vague",
      rung: "check",
      prompt: <p>&ldquo;Tall&rdquo;, as in &ldquo;a tall person&rdquo;, is a standard example of a word that is&hellip;</p>,
      answer: { kind: "choice", options: ["ambiguous", "vague", "stipulative", "self-contradictory"], correct: [1] },
    },
    {
      key: "stipulative",
      rung: "check",
      prompt: <p>&ldquo;In this essay, by <em>art</em> I shall mean any object made mainly to be looked at.&rdquo; This is a&hellip;</p>,
      answer: { kind: "choice", options: ["lexical definition", "stipulative definition", "verbal dispute", "equivocation"], correct: [1] },
    },
    {
      key: "equivocation",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;Nothing is better than lasting happiness. A cheese sandwich is better than nothing. So a cheese sandwich is
          better than lasting happiness.&rdquo; Which word is used in two senses?
        </p>
      ),
      answer: { kind: "choice", options: ["better", "nothing", "happiness", "sandwich"], correct: [1] },
    },
    {
      key: "verbal",
      rung: "apply",
      prompt: <p>Select every dispute that is most likely merely verbal.</p>,
      answer: {
        kind: "choice",
        options: [
          "Two people agree on every fact about Pluto's size and orbit, but disagree whether it is a planet.",
          "Two people disagree whether eating meat is morally wrong.",
          "Two friends agree on the man's path round the squirrel, but disagree whether he went round it.",
          "Two historians disagree about the year in which a battle was fought.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "vary-terms",
      rung: "apply",
      prompt: <p>Why should an essay not switch between &ldquo;knowledge&rdquo;, &ldquo;understanding&rdquo; and &ldquo;awareness&rdquo; for variety?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the words are too long.",
          "Because the reader will reasonably assume three different things are meant, and the argument may equivocate.",
          "Because philosophy essays should use as few words as possible.",
          "Because these words have no definitions.",
        ],
        correct: [1],
      },
    },
    {
      key: "dissolve",
      rung: "prove",
      prompt: (
        <p>
          Two people argue whether a person who gives away money to feel good about themselves is &ldquo;selfish&rdquo;.
          Separate two senses of &ldquo;selfish&rdquo;, say how each settles the question, and say whether any substantive
          disagreement remains.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes two senses, such as acting from any desire of one's own versus putting oneself ahead of others at their expense.",
          "Applies each sense to the case and reaches a verdict for each.",
          "Notes that the parties may agree on all the facts about the giver's motives.",
          "Identifies what, if anything, remains genuinely disputed, such as whether self-interested motives lower moral worth.",
        ],
      },
    },
    {
      key: "precise",
      rung: "stretch",
      prompt: (
        <p>
          Take the claim &ldquo;Social media makes people unhappy&rdquo;. Rewrite it as three different precise claims,
          each using precising definitions, so that each could be tested or argued for separately. Say which you find most
          plausible and why.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives three distinct precise claims, not rewordings of one.",
          "Each makes 'social media', 'makes' or 'unhappy' more precise, for example by specifying use, cause or measure.",
          "Explains how each could be tested or argued.",
          "Gives a reasoned preference among them.",
        ],
      },
    },
  ],

  teachBack:
    "Tell the squirrel story to a friend and explain what it shows about arguments. Then give an example from your own life of a disagreement that turned out to be about a word.",

  glimpse: (
    <p>
      Next, objections and replies. Drawing distinctions returns as a method in its own right in the next chapter, and
      Critical Reasoning treats definitions, ambiguity and the fallacies of ambiguity in detail. In Introduction to
      Philosophy, the question of what &ldquo;knowledge&rdquo; means turns out to be anything but verbal.
    </p>
  ),
};
