import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.2.1",
  minutes: 55,
  links: {
    foreshadows: ["p1.1.1", "p7.1.1", "p14.3.1"],
  },

  puzzle: (
    <>
      <p>Read this sentence once, at your normal speed. It opens René Descartes&rsquo; <em>Meditations</em> (1641).</p>
      <Quote source={<>René Descartes, <cite>Meditations on First Philosophy</cite>, Meditation I, translated by E. S. Haldane and G. R. T. Ross</>}>
        <p>
          It is now some years since I detected how many were the false beliefs that I had from my earliest youth admitted
          as true, and how doubtful was everything I had since constructed on this basis; and from that time I was convinced
          that I must once for all seriously undertake to rid myself of all the opinions which I had formerly accepted, and
          commence to build anew from the foundation, if I wanted to establish any firm and permanent structure in the
          sciences.
        </p>
      </Quote>
      <p>
        Now, without looking back: what exactly does Descartes plan to do, and why? Is he going to throw away only his
        false beliefs, or all of them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Many readers say &ldquo;he wants to get rid of his false beliefs&rdquo;. Look again. He plans to rid himself of{" "}
        <em>all</em> the opinions he had formerly accepted, true and false alike, and rebuild from the foundation. That is a
        far stranger and bolder project, and the whole of the <em>Meditations</em> depends on it. The reason is in the
        image: if the foundations are unsound, you cannot fix the building by replacing a few bricks; you have to start
        again.
      </p>
      <p>
        One sentence, read quickly, gave the wrong idea of the book. Philosophy is written with unusual compression: a
        single word (&ldquo;all&rdquo;, &ldquo;only&rdquo;, &ldquo;necessarily&rdquo;, &ldquo;if&rdquo;) can carry the
        argument. Reading philosophy well means reading slowly, more than once, with a pencil, and stopping whenever you
        could not explain a sentence to someone else.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="three readings">
        <ol>
          <li>
            <strong>Survey.</strong> Read the whole text quickly, or skim its headings, first and last paragraphs. Aim: what
            is it about, and roughly what does it claim? Do not stop for difficulties.
          </li>
          <li>
            <strong>Close reading.</strong> Read slowly, sentence by sentence. Aim: understand exactly what is said. Mark the
            main claim, the reasons, the key terms and every sentence you cannot yet paraphrase.
          </li>
          <li>
            <strong>Critical reading.</strong> Only now ask: is it true? Are the reasons good? What would an opponent say?
            Criticism before understanding is criticism of something the author did not say.
          </li>
        </ol>
      </Definition>

      <Definition title="paraphrase">
        <p>
          To <strong>paraphrase</strong> a sentence is to restate its content in your own words, keeping its meaning and
          its strength. A good paraphrase is neither stronger nor weaker than the original: &ldquo;some&rdquo; must not
          become &ldquo;all&rdquo;, and &ldquo;probably&rdquo; must not become &ldquo;certainly&rdquo;. If you cannot
          paraphrase a sentence, you have not yet understood it, and you have found the place to slow down.
        </p>
      </Definition>

      <p>What to mark in the margin as you read closely:</p>
      <ul>
        <li><strong>Key terms.</strong> Words used in a special or technical sense. Note how the author defines them, or whether they do at all.</li>
        <li><strong>Signposts.</strong> Words that show the structure: <em>therefore, so, hence</em> (a conclusion is coming); <em>because, since, for</em> (a reason is coming); <em>but, however</em> (a turn or objection); <em>for example</em> (an illustration, not a reason).</li>
        <li><strong>Strength words.</strong> <em>All, some, only, must, may, necessarily, probably.</em> These decide what it would take to refute a claim.</li>
        <li><strong>The author&rsquo;s voice.</strong> Philosophers often state a view in order to reject it. &ldquo;It may be said that&hellip;&rdquo; usually introduces a view that is not the author&rsquo;s.</li>
        <li><strong>Questions.</strong> Anything you do not understand or doubt. Write it down; you will often find the answer two pages later.</li>
      </ul>

      <Example title="reading Mill slowly">
        <p>Here is a famous sentence from John Stuart Mill&rsquo;s <em>On Liberty</em> (1859), chapter 2:</p>
        <Quote source={<>J. S. Mill, <cite>On Liberty</cite>, chapter 2</>}>
          <p>
            If all mankind minus one, were of one opinion, and only one person were of the contrary opinion, mankind would be
            no more justified in silencing that one person, than he, if he had the power, would be justified in silencing
            mankind.
          </p>
        </Quote>
        <p>
          <em>Paraphrase:</em> even if everyone but one person agreed, the majority would have no better right to silence
          that person than that person would have to silence everyone else. <em>Strength:</em> Mill does not say the
          dissenter is right, nor that the majority is wrong. He says only that numbers alone give no right to silence. That
          narrower claim is much harder to refute, and noticing its exact strength is the first step to judging it.
        </p>
      </Example>

      <Remark title="how fast?">
        <p>
          A page of a novel may take a minute. A page of Kant may take an hour, and that is not a sign of slow wits. The
          philosopher Mortimer Adler, in <em>How to Read a Book</em>, distinguished reading for information from reading
          for understanding: the second means reading something at first beyond you, and working until it is not.
          Philosophy is almost always the second kind.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "descartes",
      rung: "check",
      prompt: <p>In the opening sentence of the <em>Meditations</em>, what does Descartes resolve to do?</p>,
      answer: {
        kind: "choice",
        options: [
          "Find and correct his false beliefs one by one.",
          "Rid himself of all his former opinions and rebuild from the foundations.",
          "Show that all his former beliefs were false.",
          "Abandon the sciences altogether.",
        ],
        correct: [1],
      },
    },
    {
      key: "order",
      rung: "check",
      prompt: <p>Which reading should come last?</p>,
      answer: { kind: "choice", options: ["Survey", "Close reading", "Critical reading"], correct: [2] },
    },
    {
      key: "signpost",
      rung: "apply",
      prompt: <p>Select every word or phrase that usually signals that a <strong>reason</strong> is coming.</p>,
      answer: { kind: "choice", options: ["because", "therefore", "since", "for example", "for (as in 'for it is clear that')"], correct: [0, 2, 4] },
    },
    {
      key: "paraphrase",
      rung: "apply",
      prompt: (
        <p>
          Which is the most faithful paraphrase of Mill&rsquo;s sentence about silencing one dissenter?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The lone dissenter is probably right.",
          "Majorities are usually wrong.",
          "Being in the majority gives no more right to silence someone than being a minority of one gives to silence the majority.",
          "Nobody should ever be silenced under any circumstances.",
        ],
        correct: [2],
      },
    },
    {
      key: "voice",
      rung: "apply",
      prompt: (
        <p>
          An essay contains the sentence &ldquo;It may be objected that free speech allows lies to spread.&rdquo; What is
          the most likely role of this sentence?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "It states the author's thesis.",
          "It introduces an objection the author will go on to answer.",
          "It gives an example supporting the thesis.",
          "It defines a key term.",
        ],
        correct: [1],
      },
    },
    {
      key: "close-read",
      rung: "prove",
      prompt: (
        <p>
          Paraphrase Descartes&rsquo; opening sentence in two or three sentences of your own. Then name the one word you
          think matters most to its meaning, and explain what the sentence would mean without it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "The paraphrase keeps the plan to discard all former opinions, not only false ones.",
          "The paraphrase keeps the reason: the foundations were doubtful, so what was built on them is doubtful.",
          "Names a specific word (such as 'all' or 'foundation') and explains how the meaning changes without it.",
        ],
      },
    },
    {
      key: "strength",
      rung: "stretch",
      prompt: (
        <p>
          Find a sentence in any serious text you are reading this week, philosophical or not, whose meaning turns on a
          strength word (all, some, only, must, may, probably). Quote it, paraphrase it, and write a weaker and a stronger
          version. Which version would be easiest to refute, and why?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Quotes a real sentence and identifies the strength word.",
          "Gives an accurate paraphrase.",
          "Gives clearly weaker and stronger versions.",
          "Explains which is easiest to refute: stronger claims need only one counterexample.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend who reads quickly why philosophy has to be read slowly. Use the Descartes sentence to show how one word can change everything.",

  glimpse: (
    <p>
      Next you will learn to find the thesis of a text: the one claim everything else serves. Descartes&rsquo; project of
      doubting everything returns as the dream argument in Introduction to Philosophy and in full in Early Modern
      Philosophy, and Mill&rsquo;s defence of free speech returns in Political Philosophy.
    </p>
  ),
};
