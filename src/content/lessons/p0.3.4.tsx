import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.3.4",
  minutes: 55,
  links: {
    revisits: ["p0.3.1"],
    parallels: ["m1.3.6"],
    foreshadows: ["p0.4.1"],
  },

  puzzle: (
    <>
      <p>Here is a paragraph from a first draft.</p>
      <p>
        &ldquo;It could perhaps be argued that, in a certain sense, our moral obligations to future generations may be
        somewhat weaker than those we have to people who are currently alive, although of course this is a very complex
        issue and many different factors would need to be taken into consideration, such as, for example, uncertainty
        about the future and also the question of whether people who do not yet exist can have rights.&rdquo;
      </p>
      <p>
        What does the writer claim? How many claims are there? Try rewriting it in half the words, saying more.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Strip the hedges (&ldquo;it could perhaps be argued&rdquo;, &ldquo;in a certain sense&rdquo;,
        &ldquo;somewhat&rdquo;, &ldquo;of course&rdquo;) and the filler (&ldquo;a very complex issue&rdquo;,
        &ldquo;many different factors&rdquo;), and three things remain: a claim and two possible reasons for it. A revision
        might read:
      </p>
      <p>
        &ldquo;Our obligations to future people are weaker than our obligations to people alive now. I consider two reasons
        for thinking so: we know less about what future people will need, and people who do not yet exist may have no
        rights.&rdquo;
      </p>
      <p>
        Seventy-three words became forty-one, and the reader now knows what the writer thinks and what comes next. The revision
        also exposes what the draft hid: the writer must now actually argue for the claim, and say which reason does the
        work. That is the real purpose of revising. It is not polishing; it is finding out whether you have an argument.
      </p>
    </>
  ),

  theory: (
    <>
      <Quote source={<>Blaise Pascal, <cite>Provincial Letters</cite>, Letter 16 (1657), in translation</>}>
        <p>I have made this letter longer only because I have not had the time to make it shorter.</p>
      </Quote>

      <Definition title="revising and editing">
        <p>
          <strong>Revising</strong> changes what an essay says and how it is organised: the thesis, the order of the
          argument, which objection is answered. <strong>Editing</strong> changes how individual sentences say it. Revise
          first. There is no point perfecting a sentence in a paragraph you are about to cut.
        </p>
      </Definition>

      <p>A revision procedure, from large to small:</p>
      <ol>
        <li>
          <strong>Re-read the question.</strong> Does your thesis answer it, the whole of it, and only it?
        </li>
        <li>
          <strong>Reverse outline.</strong> Write one sentence summarising each paragraph of the draft. Read the list. Does
          it form an argument for the thesis, in an order that makes sense? Any paragraph whose summary does not serve the
          thesis is cut or moved.
        </li>
        <li>
          <strong>Rewrite the introduction last.</strong> Drafting is how you discover what you think, so the thesis you
          end with may not be the one you started with. Make the introduction promise what the essay delivers.
        </li>
        <li>
          <strong>Test the objection.</strong> Is it the strongest available? Does the reply engage it?
        </li>
        <li>
          <strong>Edit sentences.</strong> Cut hedges and filler; one claim per sentence; key terms kept constant; active
          verbs; signposts (&ldquo;The second reason is&hellip;&rdquo;, &ldquo;An objection is&hellip;&rdquo;).
        </li>
        <li>
          <strong>Read it aloud.</strong> Where you stumble, the reader will too.
        </li>
      </ol>

      <Example title="hedging, honestly">
        <p>
          Cutting hedges does not mean overclaiming. &ldquo;This argument may possibly have some weaknesses&rdquo; is
          empty; &ldquo;This argument fails if premise 2 is false, and premise 2 is doubtful&rdquo; is precise. Keep a
          qualification when it marks a real limit of what you have shown, and state that limit exactly. Uncertainty
          belongs in the content of a claim, not smeared across every sentence.
        </p>
      </Example>

      <Remark title="distance and readers">
        <p>
          Writers cannot see their own gaps, because they silently supply the missing steps. Two remedies help. Leave time
          between drafting and revising, a day if you can, so that you read as a stranger would. And give the draft to a real
          reader, asking them not whether it is good but what they think its thesis is and where they got lost. If their
          summary differs from yours, the essay, not the reader, needs to change.
        </p>
      </Remark>

      <Remark title="the same discipline in mathematics">
        <p>
          A first proof is usually a record of how the writer found it, with dead ends and steps in the wrong order. A
          finished proof is rewritten for the reader: the key idea first, each step justified, nothing that does not serve
          the conclusion. The course on proofs in Foundations treats writing proofs well as a skill in its own right, and the
          advice is almost the same as this lesson&rsquo;s.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "order",
      rung: "check",
      prompt: <p>Which should you do first when improving a draft?</p>,
      answer: {
        kind: "choice",
        options: ["correct the spelling", "polish the sentences", "check that the structure argues for the thesis", "add more quotations"],
        correct: [2],
      },
    },
    {
      key: "reverse-outline",
      rung: "check",
      prompt: <p>A reverse outline is made by&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "writing the conclusion before the introduction.",
          "summarising each paragraph of the draft in one sentence and checking the list forms an argument.",
          "reading the essay from the last sentence to the first.",
          "listing the objections in reverse order of strength.",
        ],
        correct: [1],
      },
    },
    {
      key: "hedges",
      rung: "apply",
      prompt: <p>Select every qualification that should be kept.</p>,
      answer: {
        kind: "choice",
        options: [
          "It could perhaps be argued that",
          "unless the promise was made under duress",
          "in a certain sense",
          "at least in cases where no one else is harmed",
        ],
        correct: [1, 3],
      },
    },
    {
      key: "intro-last",
      rung: "apply",
      prompt: <p>Why is it often wise to rewrite the introduction last?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because introductions are less important than conclusions.",
          "Because the thesis often changes while drafting, and the introduction must promise what the essay delivers.",
          "Because markers read the introduction last.",
          "Because the introduction should summarise every paragraph.",
        ],
        correct: [1],
      },
    },
    {
      key: "rewrite",
      rung: "prove",
      prompt: (
        <p>
          Rewrite the draft paragraph from the puzzle as a paragraph of at most 80 words that states the claim, gives the
          stronger of the two reasons as an argument, and signposts what comes next.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the claim plainly, without empty hedges.",
          "Chooses one reason and develops it as an argument rather than merely naming it.",
          "Keeps any qualification that marks a real limit, stated precisely.",
          "Includes a signpost to the next step, such as the second reason or an objection.",
          "Stays within the word limit.",
        ],
      },
    },
    {
      key: "own-draft",
      rung: "stretch",
      prompt: (
        <p>
          Take the introduction or outline you wrote for the philosophy essay lesson. Make a reverse outline of it, describe
          the two most important changes it reveals, and give the revised version.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a one-sentence summary per paragraph or section.",
          "Identifies two structural changes, not just sentence-level edits.",
          "Explains why each change makes the argument clearer or stronger.",
          "Provides a revised version that implements the changes.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between revising and editing, and why cutting hedges is not the same as overclaiming. Use the paragraph about future generations.",

  glimpse: (
    <p>
      This completes writing philosophy, and with it the skills of reading and writing that the rest of the degree assumes.
      Next comes the philosopher&rsquo;s toolkit, starting with thought experiments: imagined cases built to test a claim.
      Writing proofs well, in Foundations, is the mathematical twin of this lesson.
    </p>
  ),
};
