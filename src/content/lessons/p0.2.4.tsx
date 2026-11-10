import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.2.4",
  minutes: 55,
  links: {
    revisits: ["p0.1.3"],
    foreshadows: ["p0.3.3", "p4.1.2", "p4.2.1", "p7.5.5", "p15.3.2"],
  },

  puzzle: (
    <>
      <p>In 1739 David Hume wrote:</p>
      <Quote source={<>David Hume, <cite>A Treatise of Human Nature</cite>, Book 2, Part 3, Section 3</>}>
        <p>
          Reason is, and ought only to be the slave of the passions, and can never pretend to any other office than to serve
          and obey them.
        </p>
      </Quote>
      <p>
        Read literally, this sounds like advice to follow your feelings and ignore reason. Hume was one of the most careful
        reasoners who ever lived. Could he really mean that? If not, what might he mean?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        When a careful thinker seems to say something absurd, the likeliest explanation is that we have misunderstood
        them. Read in context, Hume&rsquo;s point is about <em>motivation</em>. Reason can tell you what is true and how to
        get what you want: that the bus leaves at nine, that running will catch it. But reason alone never makes you{" "}
        <em>want</em> anything. Only a desire (a &ldquo;passion&rdquo;, in Hume&rsquo;s vocabulary) can set you moving, and
        reason serves it by finding the means. That is a serious and much-debated thesis, not an invitation to be
        irrational.
      </p>
      <p>
        Choosing the reading that makes an author most reasonable, while staying faithful to the words, is called the{" "}
        <strong>principle of charity</strong>. It is not kindness for its own sake. It is the only way to learn whether a
        view is right, because refuting a view no one holds teaches you nothing.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="the principle of charity">
        <p>
          When a text can be read in more than one way, prefer the reading on which it is most reasonable: its claims most
          plausible, its arguments strongest and its parts most consistent with each other, <em>provided</em> the reading
          fits the words and the context.
        </p>
      </Definition>

      <Definition title="straw man and steel man">
        <ul>
          <li>
            A <strong>straw man</strong> is a weakened version of a view, attacked in place of the real one. Defeating it is
            easy and proves nothing.
          </li>
          <li>
            A <strong>steel man</strong> is the strongest version of a view you can honestly construct. If your objection
            defeats the steel man, it defeats the view.
          </li>
        </ul>
      </Definition>

      <p>Charity has limits, and they matter as much as the principle.</p>
      <ul>
        <li>
          <strong>Fit.</strong> A charitable reading must still be a reading of <em>this</em> text. If you have to ignore
          what the author plainly wrote, you are writing your own view and attaching their name to it.
        </li>
        <li>
          <strong>Context.</strong> Read a passage against the rest of the work, the author&rsquo;s vocabulary (a
          &ldquo;passion&rdquo;, for Hume, is any desire or emotion) and the questions of their time.
        </li>
        <li>
          <strong>Honest disagreement.</strong> After the most charitable reading, the view may still be wrong. Charity
          is where criticism starts, not where it stops.
        </li>
      </ul>

      <Example title="Protagoras">
        <p>
          The sophist Protagoras is reported (by Plato, in the <em>Theaetetus</em>) to have said that &ldquo;man is the
          measure of all things&rdquo;. An uncharitable reading: whatever anyone believes is true, so no one is ever wrong,
          which refutes itself at once, since many people believe Protagoras is wrong. A more charitable reading: how things{" "}
          <em>appear</em> depends on the perceiver; the wind is cold to the one who shivers and mild to the one who does not,
          and there is no further fact about its &ldquo;real&rdquo; temperature that is felt by no one. This reading may
          still be false, but it is worth refuting.
        </p>
      </Example>

      <Example title="Heraclitus">
        <p>
          &ldquo;You cannot step into the same river twice&rdquo;, as Plato reports Heraclitus. Literally false, surely: you
          can bathe in the Ganges on two mornings. A charitable reading notices the wordplay and the point: a river just{" "}
          <em>is</em> a pattern of ever-new water, so its staying the same depends on its constantly changing. The saying is
          a compressed claim about how things can persist through change, one of the oldest problems in metaphysics.
        </p>
      </Example>

      <Remark title="charity in conversation">
        <p>
          The same principle applies to the people you argue with. Before replying, restate their view in a form they
          would accept: &ldquo;So your point is that&hellip;?&rdquo; If they say &ldquo;Yes, exactly&rdquo;, you have earned
          the right to disagree. The philosopher Daniel Dennett suggested going further: before criticising, say what you have
          learned from the view and where you agree. Arguments conducted this way change minds; arguments with straw men
          only harden them.
        </p>
      </Remark>

      <Remark title="why charity is required, not optional">
        <p>
          In twentieth-century philosophy of language, Donald Davidson argued that some charity is unavoidable: to interpret
          anyone&rsquo;s words at all, you must assume that most of what they believe is true and most of what they infer is
          reasonable, or you could not work out what their words mean. On this view, charity is not generosity but a
          condition of understanding.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "strawman",
      rung: "check",
      prompt: (
        <p>
          A: &ldquo;We should spend more on public transport.&rdquo; B: &ldquo;So you want to ban cars and force everyone onto
          buses? That&rsquo;s absurd.&rdquo; What has B done?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["Steel-manned A's view", "Attacked a straw man", "Found a counterexample", "Pointed out a hidden premise"],
        correct: [1],
      },
    },
    {
      key: "hume",
      rung: "check",
      prompt: <p>On the charitable reading, what is Hume&rsquo;s claim about reason?</p>,
      answer: {
        kind: "choice",
        options: [
          "We should ignore reason and follow our feelings.",
          "Reason alone cannot motivate action; it serves desires by finding means and facts.",
          "Reason is always mistaken.",
          "Feelings are a kind of reasoning.",
        ],
        correct: [1],
      },
    },
    {
      key: "limits",
      rung: "apply",
      prompt: <p>Select every statement that respects the limits of charity.</p>,
      answer: {
        kind: "choice",
        options: [
          "A charitable reading must fit what the author actually wrote.",
          "If the most charitable reading is false, we may say so.",
          "We should read every author as agreeing with us.",
          "Context, such as the author's vocabulary, can make one reading more plausible than another.",
        ],
        correct: [0, 1, 3],
      },
    },
    {
      key: "protagoras",
      rung: "apply",
      prompt: <p>Why is the reading &ldquo;whatever anyone believes is true&rdquo; an uncharitable reading of Protagoras?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is too complicated.",
          "Because it refutes itself immediately, which suggests a careful thinker meant something else.",
          "Because Protagoras was a sophist, so he cannot be taken seriously.",
          "Because no one in ancient Greece believed anything was true.",
        ],
        correct: [1],
      },
    },
    {
      key: "restate",
      rung: "apply",
      prompt: (
        <p>
          Your friend says: &ldquo;Exams are pointless.&rdquo; Which response best applies the principle of charity before
          disagreeing?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "So you think nobody should ever be tested on anything?",
          "That's just your opinion.",
          "Do you mean that exams measure performance on one day rather than real understanding?",
          "Exams have existed for centuries, so they can't be pointless.",
        ],
        correct: [2],
      },
    },
    {
      key: "steelman",
      rung: "prove",
      prompt: (
        <p>
          Choose a view you strongly disagree with. Write the strongest honest version of it in a short paragraph, one its
          defenders would accept, then state the best objection you can make to <em>that</em> version.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies a view the writer disagrees with.",
          "The reconstruction is genuinely strong and would be recognised by its defenders, not a caricature.",
          "Gives reasons for the view, not just a statement of it.",
          "Offers an objection that engages the strong version.",
        ],
      },
    },
    {
      key: "two-readings",
      rung: "stretch",
      prompt: (
        <p>
          &ldquo;God is dead&rdquo; (Nietzsche) is often read as a simple statement of atheism. Without looking anything up,
          suggest a more interesting reading the words could bear, and say what in the phrasing supports it. Then say what you
          would need to check in the text to decide between the readings.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Offers a reading that differs from simple atheism, such as a claim about the loss of a shared foundation for values.",
          "Points to the phrasing (for instance, that only something once alive can die) as evidence.",
          "Names concrete textual checks, such as context, surrounding passages or other works.",
        ],
      },
    },
  ],

  teachBack:
    "Explain the principle of charity to a friend who thinks it means 'being nice to people you disagree with'. Say why it actually makes your criticism stronger.",

  glimpse: (
    <p>
      This completes reading philosophy. Next you will write it, starting with the shape of a philosophy essay. Charity
      returns when you answer objections to your own view. Heraclitus and the sophists return in Ancient Greek Philosophy,
      Hume on reason and the passions returns with is and ought in Early Modern Philosophy, and Davidson&rsquo;s argument
      returns in Philosophy of Language.
    </p>
  ),
};
