import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { GrueViz } from "@/components/viz/GrueViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.1.3",
  minutes: 70,
  links: {
    revisits: ["p0.1.2", "p1.1.1"],
    foreshadows: ["p3.3.1", "p7.5.3", "p16.4.2", "p20.6.3"],
  },

  puzzle: (
    <>
      <p>
        You are completely confident the sun will rise tomorrow. Why? Because it always has. But why should the past be a
        guide to the future?
      </p>
      <Quote source={<>Bertrand Russell, <cite>The Problems of Philosophy</cite> (1912), chapter VI</>}>
        <p>
          The man who has fed the chicken every day throughout its life at last wrings its neck instead, showing that more
          refined views as to the uniformity of nature would have been useful to the chicken.
        </p>
      </Quote>
      <p>The chicken had excellent evidence. What makes your evidence better than the chicken&rsquo;s?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        Nearly everything you believe about the world beyond this moment rests on <strong>induction</strong>: reasoning from
        what has been observed to what has not. Bread nourished you before, so it will again; fire burned before, so it will
        again. The question is not whether we do this, which we cannot help, but whether it can be <em>justified</em>.
      </p>
      <p>
        David Hume argued that it cannot, at least not by argument. A deductive argument cannot show the future will be like
        the past, because there is no contradiction in its not being. And an inductive argument for induction (&ldquo;it has
        always worked before&rdquo;) assumes what it sets out to prove. In 1955 Nelson Goodman found a second, stranger problem:
        even granting induction, which predictions does the evidence support? Try it below.
      </p>
      <GrueViz />
    </>
  ),

  theory: (
    <>
      <Definition title="deduction and induction">
        <p>
          A <strong>deductive</strong> argument aims to make its conclusion certain given its premises: if the premises are
          true, the conclusion must be. An <strong>inductive</strong> argument aims only to make its conclusion probable, and
          typically goes from observed cases to unobserved ones: every observed swan is white, so the next swan will be white,
          or so all swans are white.
        </p>
      </Definition>

      <Quote source={<>David Hume, <cite>An Enquiry Concerning Human Understanding</cite> (1748), section IV</>}>
        <p>
          That the sun will not rise to-morrow is no less intelligible a proposition, and implies no more contradiction than
          the affirmation, that it will rise.
        </p>
      </Quote>

      <Example title="Hume’s dilemma">
        <p>
          Every inductive inference assumes that unobserved cases resemble observed ones, a principle of the uniformity of
          nature. How could that principle be justified?
        </p>
        <ul>
          <li>Not by deduction: its denial involves no contradiction, as the quotation says.</li>
          <li>Not by induction: arguing that nature has been uniform so far, and so will stay uniform, uses the principle to support itself, which is circular.</li>
        </ul>
        <p>
          Hume concluded that our reliance on induction is a matter of <em>custom</em> or habit, a fact about human nature, not
          the outcome of reasoning.
        </p>
      </Example>

      <Definition title="the new riddle of induction">
        <p>
          Nelson Goodman, in <cite>Fact, Fiction, and Forecast</cite> (1955), defined an object to be <em>grue</em> if it is
          examined before a certain future time and is green, or is not so examined and is blue. Every emerald examined so far
          is green, and therefore also grue. The same evidence equally supports &ldquo;all emeralds are green&rdquo; and
          &ldquo;all emeralds are grue&rdquo;, which make opposite predictions about emeralds first examined later. Even if
          induction is fine, something must decide which predicates are fit for it, and it is hard to say what without
          circularity.
        </p>
      </Definition>

      <Example title="some responses">
        <ul>
          <li>
            <strong>Popper.</strong> Karl Popper accepted Hume&rsquo;s argument and claimed science does not need induction:
            it proposes bold conjectures and tries to falsify them. Critics reply that choosing which unrefuted theory to rely
            on brings induction back.
          </li>
          <li>
            <strong>Pragmatic vindication.</strong> Hans Reichenbach argued that if any method of prediction works, induction
            will; so it is the best bet, even if it cannot be shown to succeed.
          </li>
          <li>
            <strong>Dissolution.</strong> P. F. Strawson argued that asking whether induction is reasonable is like asking
            whether the law is legal: forming beliefs inductively is part of what we mean by &ldquo;reasonable&rdquo;.
          </li>
        </ul>
      </Example>

      <Remark title="the Cārvāka challenge">
        <p>
          A version of the problem was pressed in ancient India by the Cārvāka, or Lokāyata, materialists. Nyāya logicians
          held that inference (<em>anumāna</em>) is a source of knowledge, resting on an invariable connection,{" "}
          <em>vyāpti</em>, such as that between smoke and fire. The Cārvākas asked how the connection is known. Not by
          perception, which covers only the cases observed, past and present, never all cases; and not by inference, which would
          be circular. Later Nyāya philosophers developed detailed replies, much as Western philosophers have to Hume.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kind",
      rung: "check",
      prompt: <p>&ldquo;Every metal I have heated has expanded, so this metal will expand when heated.&rdquo; What kind of argument is this?</p>,
      answer: { kind: "choice", options: ["deductive", "inductive", "circular", "invalid deductive"], correct: [1] },
    },
    {
      key: "hume-horns",
      rung: "check",
      prompt: <p>Why, according to Hume, can the uniformity of nature not be established by an inductive argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because inductive arguments are always invalid.",
          "Because such an argument would assume the very principle it is meant to support.",
          "Because nature is not uniform.",
          "Because we have too few observations.",
        ],
        correct: [1],
      },
    },
    {
      key: "deduction",
      rung: "apply",
      prompt: <p>Why can the uniformity of nature not be proved deductively from past observations, according to Hume?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its denial involves no contradiction.",
          "Deductive arguments cannot have premises about the past.",
          "It is false.",
          "Deduction requires mathematics.",
        ],
        correct: [0],
      },
    },
    {
      key: "grue",
      rung: "apply",
      prompt: <p>An emerald is first examined after the grue cut-off time and turns out green. Is it grue?</p>,
      answer: { kind: "choice", options: ["yes", "no", "it depends on its colour before"], correct: [1] },
    },
    {
      key: "responses",
      rung: "apply",
      prompt: <p>Which thinker held that science proceeds by attempted falsification rather than induction?</p>,
      answer: { kind: "choice", options: ["Hume", "Popper", "Reichenbach", "Strawson"], correct: [1] },
    },
    {
      key: "chicken",
      rung: "prove",
      prompt: (
        <p>
          Is your belief that the sun will rise tomorrow better grounded than the chicken&rsquo;s belief that it will be fed?
          Argue for an answer that takes Hume&rsquo;s dilemma seriously.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States Hume's dilemma accurately.",
          "Identifies a relevant difference between the cases, such as an understood mechanism, a wider body of evidence, or none.",
          "Considers whether appealing to that difference is itself inductive.",
          "Reaches a clear verdict.",
        ],
      },
    },
    {
      key: "grue-reply",
      rung: "stretch",
      prompt: (
        <p>
          A natural reply to Goodman: &ldquo;grue&rdquo; mentions a time, and &ldquo;green&rdquo; does not. Goodman answered that
          if we start from grue and bleen (blue if examined before the time, otherwise green), then &ldquo;green&rdquo; is the
          predicate that mentions a time. Explain his answer and say whether you find it convincing.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that green can be defined from grue and bleen using the time.",
          "Draws the moral that 'mentions a time' depends on the starting vocabulary.",
          "Evaluates whether some other feature, such as role in laws or natural kinds, could still privilege green.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Hume's argument that induction cannot be justified by deduction or by induction, using the sun rising tomorrow as the example.",

  glimpse: (
    <p>
      This completes the chapter on knowledge. Next comes the mind, beginning with how the mental relates to the physical.
      Critical Reasoning studies good and bad inductive arguments in practice. Hume is read in full in Early Modern
      Philosophy, the grue problem returns in Philosophy of Science, and Indian Philosophy examines the Cārvāka challenge and
      the Nyāya replies.
    </p>
  ),
};
