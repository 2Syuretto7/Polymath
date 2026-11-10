import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.3.1",
  minutes: 60,
  links: {
    revisits: ["p0.2.2"],
    foreshadows: ["p0.3.4", "p1.6.1", "p3.1.1"],
  },

  puzzle: (
    <>
      <p>Two students answer the question &ldquo;Is it ever right to break a promise?&rdquo; Here are their openings.</p>
      <p>
        <strong>A.</strong> &ldquo;Since the dawn of civilisation, human beings have made promises. Many great thinkers,
        from the ancient Greeks to the present day, have discussed this question, and there are many different opinions.
        In this essay I will look at some of them.&rdquo;
      </p>
      <p>
        <strong>B.</strong> &ldquo;I will argue that it is sometimes right to break a promise, but only when keeping it
        would wrong someone other than the person you promised. I first set out the strongest case for treating promises
        as absolute, then show that it fails in cases of this kind, and finally answer the objection that my exception would
        swallow the rule.&rdquo;
      </p>
      <p>Which essay would you rather read, and which would you rather mark? What exactly does B do that A does not?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        After A&rsquo;s opening you know the topic and nothing else. After B&rsquo;s you know what the writer believes, why
        it is contestable, and the route the essay will take. You can check every later paragraph against that plan, and so
        can the writer.
      </p>
      <p>
        That is the difference between a report and a philosophy essay. A philosophy essay is not a survey of opinions or a
        display of reading. It is a single argument for a single claim, written so that an intelligent reader who disagrees
        can see exactly where to push back. In the last chapter you learnt to find a thesis and reconstruct an argument in
        someone else&rsquo;s text. Now you build one of your own.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="the philosophy essay">
        <p>
          A <strong>philosophy essay</strong> defends a <strong>thesis</strong>, one clear claim, with an argument, and
          shows that the argument survives the strongest objection the writer can find. Everything in it serves that
          defence.
        </p>
      </Definition>

      <Definition title="a good thesis">
        <p>A thesis worth defending is:</p>
        <ul>
          <li><strong>Contestable.</strong> A thoughtful person could deny it. &ldquo;Promises are important&rdquo; is not contestable.</li>
          <li><strong>Specific.</strong> It says exactly what is claimed, including its limits: <em>sometimes</em>, <em>only when</em>, <em>in cases of this kind</em>.</li>
          <li><strong>Defensible in the space.</strong> It can be argued properly in the words available. In 1500 words you cannot settle whether morality is objective; you can show that one argument for it fails.</li>
        </ul>
      </Definition>

      <p>A standard shape, which you can depart from once you know why:</p>
      <ol>
        <li><strong>Introduction.</strong> The question, your thesis, and a one-sentence map of the route. No throat-clearing.</li>
        <li><strong>Exposition.</strong> Explain the view or argument you are discussing, charitably and only as far as your argument needs.</li>
        <li><strong>Argument.</strong> Your reasons for the thesis, in an order the reader can follow, each step made explicit.</li>
        <li><strong>Objection.</strong> The strongest case against your argument, stated as its defenders would state it.</li>
        <li><strong>Reply.</strong> Why the objection does not defeat your thesis, or how the thesis must be refined to survive it.</li>
        <li><strong>Conclusion.</strong> What has been shown, and what has not. Nothing new.</li>
      </ol>

      <Example title="sharpening a thesis">
        <p>Suppose the question is whether we can know anything about the future.</p>
        <ul>
          <li>&ldquo;This is a very difficult question.&rdquo; Not a thesis at all.</li>
          <li>&ldquo;We can know some things about the future.&rdquo; A thesis, but which things, and why?</li>
          <li>
            &ldquo;We can know that the sun will rise tomorrow, because knowledge does not require certainty, and our
            evidence for sunrise is as strong as for anything we know about the past.&rdquo; Contestable, specific and
            arguable: a sceptic will deny the first reason, and the essay can now take that denial seriously.
          </li>
        </ul>
      </Example>

      <Remark title="who you are writing for">
        <p>
          Write for an intelligent reader who has not read the texts, is not in a hurry, and will not fill in any step you
          leave out. Your tutor knows the material, but marks you on what is on the page, not on what you might have meant.
          If a sentence would puzzle that imagined reader, it needs another sentence, or a better one.
        </p>
      </Remark>

      <Remark title="what to leave out">
        <p>
          Openings about the dawn of time. Dictionary definitions of words that are not in dispute. Biographies. Lists of
          what famous people thought, with no argument about whether they were right. Quotations that do the work you
          should be doing: quote only when the exact words matter, and then explain them. Rhetorical questions in place of
          claims. And the word &ldquo;prove&rdquo; for anything short of a proof.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "best-thesis",
      rung: "check",
      prompt: <p>Which is the best thesis for a 1500-word essay on free will?</p>,
      answer: {
        kind: "choice",
        options: [
          "Free will has puzzled philosophers for centuries.",
          "There are many views on free will, and each has strengths and weaknesses.",
          "The argument that determinism rules out moral responsibility fails, because it assumes we could only be responsible for what we could have done otherwise.",
          "Free will is real.",
        ],
        correct: [2],
      },
    },
    {
      key: "order",
      rung: "check",
      prompt: <p>In the standard shape, what comes immediately after the objection?</p>,
      answer: {
        kind: "choice",
        options: ["the conclusion", "the reply", "the exposition", "a second thesis"],
        correct: [1],
      },
    },
    {
      key: "cut",
      rung: "apply",
      prompt: (
        <p>
          An essay argues that animals have moral status. Select every sentence that should be cut or rewritten.
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The Oxford English Dictionary defines an animal as a living organism that feeds on organic matter.",
          "If the capacity to suffer is what gives humans moral status, then any creature with that capacity has it too.",
          "Ever since humans first domesticated animals, people have wondered about this question.",
          "Peter Singer is an Australian philosopher born in 1946.",
        ],
        correct: [0, 2, 3],
      },
    },
    {
      key: "contestable",
      rung: "apply",
      prompt: <p>Why is &ldquo;Lying is often wrong&rdquo; a weak thesis?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is false.",
          "Because almost no one would deny it, so there is little to argue.",
          "Because it is too long.",
          "Because it is about ethics.",
        ],
        correct: [1],
      },
    },
    {
      key: "introduction",
      rung: "prove",
      prompt: (
        <p>
          Write the introduction, at most 120 words, for an essay answering &ldquo;Should we fear death?&rdquo;. State a
          contestable thesis and a map of the essay&rsquo;s route, including the objection you will answer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States a single, contestable thesis that answers the question.",
          "The thesis is specific, with any limits made explicit.",
          "Gives a map of the route: the main argument, the objection and the reply.",
          "Contains no throat-clearing, survey of opinions or dictionary definitions.",
        ],
      },
    },
    {
      key: "outline",
      rung: "stretch",
      prompt: (
        <p>
          Choose a question you care about, such as whether it is wrong to eat meat or whether we have free will. Write a
          full outline of a 1500-word essay: thesis, the steps of your argument as numbered premises, the strongest
          objection, and your reply, with a rough word count for each part.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Has a contestable, specific thesis.",
          "Sets out the argument as numbered premises that support the thesis.",
          "Names a genuinely strong objection rather than a weak one.",
          "Gives a reply that engages the objection.",
          "Allocates words sensibly, with most of them going to argument, objection and reply.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend who writes school essays what makes a philosophy essay different. Use the two openings about promises, and say what B's reader knows after one paragraph that A's does not.",

  glimpse: (
    <p>
      Next, clarity and definitions: how to make every sentence of an essay say exactly one thing. Then objections and
      replies, the heart of the essay, and revising. You will write essays like this throughout the degree, beginning in
      Introduction to Philosophy with the question of why we should be moral. Critical Reasoning returns to the words that
      signal premises and conclusions, which also signal structure to your reader.
    </p>
  ),
};
