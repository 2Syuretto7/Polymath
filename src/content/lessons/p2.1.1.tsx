import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentTaggerViz, type TaggerPassage } from "@/components/viz/ArgumentTaggerViz";
import type { LessonContent } from "@/lib/types";

const PASSAGES: TaggerPassage[] = [
  {
    title: "Whales",
    sentences: [
      { text: "I have been reading about whales this week.", role: "neither", why: "Background. Nothing in the passage is offered as a reason for it, and it is no reason for anything." },
      { text: "Whales breathe air with lungs.", role: "premise", why: "A reason offered for the last sentence." },
      { text: "No fish breathes air with lungs.", role: "premise", why: "A second reason; it joins with the first to support the conclusion." },
      { text: "So whales are not fish.", role: "conclusion", why: "'So' marks the conclusion." },
    ],
  },
  {
    title: "Homework",
    sentences: [
      { text: "Schools should set less homework for young children.", role: "conclusion", why: "The claim the rest is offered to support, placed first, with no indicator word." },
      { text: "Studies have found little link between homework and learning before the age of eleven.", role: "premise", why: "A reason for the first sentence." },
      { text: "Meanwhile, time spent on homework is time not spent playing, reading or sleeping.", role: "premise", why: "A second reason, about the cost of homework." },
      { text: "Is that a trade worth making?", role: "neither", why: "A question is not a statement, so it cannot be a premise as it stands, though it hints at one." },
    ],
  },
  {
    title: "The bridge",
    note: "This passage has no conclusion, so it is not an argument. It is an explanation: it tells you why something you already accept happened, rather than giving you reasons to believe it.",
    sentences: [
      { text: "The old bridge closed last month.", role: "neither", why: "Everyone already knows this; nobody is trying to persuade you of it." },
      { text: "It closed because rust had eaten through its bolts.", role: "neither", why: "'Because' here gives a cause, not a reason to believe. The bridge's closing is not in dispute." },
      { text: "The rust spread so fast because the town salts the road heavily in winter.", role: "neither", why: "Another cause, explaining the first." },
    ],
  },
];

export const lesson: LessonContent = {
  id: "p2.1.1",
  minutes: 55,
  links: {
    revisits: ["p0.2.3", "p0.2.2"],
    foreshadows: ["p3.1.1", "p2.2.1"],
  },

  puzzle: (
    <>
      <p>Compare these two short passages.</p>
      <ol>
        <li>&ldquo;The streets are wet, so it must have rained.&rdquo;</li>
        <li>&ldquo;The streets are wet because it rained.&rdquo;</li>
      </ol>
      <p>
        They mention the same two facts, and each links them with a small word. Yet they do quite different jobs. One tries to
        convince you of something; the other assumes you already believe it. Which is which, and how can you tell?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Logic is the study of good reasoning, and the unit of reasoning is the <strong>argument</strong>. In everyday speech an
        argument is a quarrel. In logic it is something calmer: some claims offered as reasons for another claim. The claims
        offered as reasons are the premises; the claim they are meant to support is the conclusion.
      </p>
      <p>
        You met this idea in Thinking and Writing Philosophically. In this course we make it exact, so that we can later say
        precisely when an argument is good. First, practise picking arguments out. Tag each sentence, then check. The third
        passage contains a surprise.
      </p>
      <ArgumentTaggerViz passages={PASSAGES} />
    </>
  ),

  theory: (
    <>
      <Definition title="statement">
        <p>
          A <strong>statement</strong> is a sentence that is either true or false. &ldquo;Whales are fish&rdquo; is a
          statement (a false one). &ldquo;Is it raining?&rdquo;, &ldquo;Shut the door!&rdquo; and &ldquo;Hello&rdquo; are not:
          it makes no sense to call them true or false.
        </p>
      </Definition>

      <Definition title="argument">
        <p>
          An <strong>argument</strong> is a collection of statements, one of which, the <strong>conclusion</strong>, is
          claimed to follow from the others, the <strong>premises</strong>. An argument may have any number of premises,
          including one; it has exactly one conclusion.
        </p>
        <p>
          To display an argument in <strong>standard form</strong>, list the premises, draw a line, and write the conclusion
          beneath:
        </p>
        <ol>
          <li>Whales breathe air with lungs.</li>
          <li>No fish breathes air with lungs.</li>
        </ol>
        <p style={{ borderTop: "1px solid var(--border-strong)", paddingTop: 6, paddingLeft: 24 }}>So whales are not fish.</p>
      </Definition>

      <Remark title="indicator words">
        <p>
          Some words tend to mark a conclusion: <em>so</em>, <em>therefore</em>, <em>hence</em>, <em>thus</em>,{" "}
          <em>it follows that</em>, <em>which shows that</em>. Others tend to mark a premise: <em>since</em>,{" "}
          <em>because</em>, <em>for</em>, <em>given that</em>, <em>after all</em>. These are clues, not rules. Many arguments
          use none of them, and as the bridge passage shows, &ldquo;because&rdquo; can mark a cause rather than a reason. The
          reliable test is to ask of each sentence: is this offered to make me believe something else, or is it what I am meant
          to come to believe?
        </p>
      </Remark>

      <Definition title="argument and explanation">
        <p>
          An <strong>explanation</strong> also links statements, but its aim is different. An argument tries to show{" "}
          <em>that</em> something is true, starting from premises that are more secure than the conclusion. An explanation
          tries to show <em>why</em> something is true, taking for granted that it is. In the puzzle, the first passage argues
          from the wet streets to the rain. The second takes the wet streets as given and explains them by the rain.
        </p>
      </Definition>

      <Example title="a hidden conclusion">
        <p>
          &ldquo;Anyone who cared about the environment would cycle to work. And you drive every day.&rdquo; The conclusion,
          that you do not care about the environment, is never stated. Real arguments often leave a premise or the conclusion
          unsaid, and part of reconstructing them is to supply it. Whether the argument is any good is a separate question,
          and the subject of the next lesson.
        </p>
      </Example>

      <Remark title="what logic does not do">
        <p>
          Logic does not tell you whether the premises are true. Whether whales breathe with lungs is a matter for biology. What
          logic studies is the link between premises and conclusion: whether, if the premises were true, the conclusion would
          have to be true as well.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "statement",
      rung: "check",
      prompt: <p>Which of these is a statement? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Paris is the capital of Spain.", "Please close the window.", "Every even number above 2 is the sum of two primes.", "Why do whales sing?"],
        correct: [0, 2],
      },
    },
    {
      key: "conclusions",
      rung: "check",
      prompt: <p>How many conclusions does a single argument have?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "find-conclusion",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;Since the museum is free on Sundays, and we have no money left, we should go on Sunday. Besides, the cafe there
          is good.&rdquo; What is the conclusion?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["The museum is free on Sundays.", "We have no money left.", "We should go on Sunday.", "The cafe there is good."],
        correct: [2],
      },
    },
    {
      key: "explanation",
      rung: "apply",
      prompt: <p>Which of these is an explanation rather than an argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "The lights are on, so someone must be home.",
          "The milk went sour because it was left out of the fridge.",
          "Since every square is a rectangle, this square is a rectangle.",
          "You should apologise, because you broke their vase.",
        ],
        correct: [1],
      },
    },
    {
      key: "unstated",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;Nobody under eighteen may vote in this election, and Meera is sixteen.&rdquo; What is the unstated conclusion?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["Meera may vote.", "Meera may not vote in this election.", "Meera will be eighteen in two years.", "There is no conclusion."],
        correct: [1],
      },
    },
    {
      key: "reconstruct",
      rung: "prove",
      prompt: (
        <p>
          Put this argument into standard form, supplying any unstated premise it needs: &ldquo;You can&rsquo;t blame Sam for
          missing the meeting. Nobody told Sam it had been moved.&rdquo;
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies the conclusion: Sam cannot be blamed for missing the meeting.",
          "Lists the stated premise: nobody told Sam the meeting had been moved.",
          "Supplies a reasonable unstated premise, such as: a person cannot be blamed for missing a meeting whose new time they had no way of knowing.",
          "Sets these out with premises first and the conclusion last.",
        ],
      },
    },
    {
      key: "both",
      rung: "stretch",
      prompt: (
        <p>
          Can the same passage be read as an argument by one listener and as an explanation by another? Construct an example,
          and say what fact about the listener decides which it is.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a passage of the form 'Q because P' or 'P, so Q' that could serve either purpose.",
          "Explains that for a listener who already accepts Q, it explains Q; for one who doubts Q, it argues for Q.",
          "Concludes that whether a passage is an argument depends on its purpose in context, not only on its words.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what an argument is in logic, how to find its premises and conclusion, and how an argument differs from an explanation.",

  glimpse: (
    <p>
      Critical Reasoning and Inductive Logic takes argument-spotting much further, with long real-world texts and diagrams of
      how premises support one another. In this course the next step is to say when an argument is good, and then to replace
      ordinary English sentences with a precise symbolic language.
    </p>
  ),
};
