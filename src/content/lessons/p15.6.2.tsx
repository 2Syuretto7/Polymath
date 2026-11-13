import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { QuusViz } from "@/components/viz/QuusViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p15.6.2",
  minutes: 85,
  links: {
    revisits: ["p15.6.1", "p15.2.1", "p1.1.3"],
    foreshadows: ["p15.6.3", "p18.7.2", "p27.4.2"],
  },

  puzzle: (
    <>
      <p>
        You have never added numbers as large as 68 and 57. Asked &ldquo;what is 68 plus 57?&rdquo;, you say 125. A sceptic
        suggests that by &ldquo;plus&rdquo; you have always meant a different function, which agrees with addition on every sum
        you have done but gives 5 here. What fact about you shows that the sceptic is wrong?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the bound and the new sum, and compare plus and quus on your past sums and on the new one.</p>
      <QuusViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the sceptical challenge">
        <p>
          In <em>Wittgenstein on Rules and Private Language</em> (1982), Saul Kripke defines <strong>quus</strong>: x quus y
          is x + y if both are below 57, and 5 otherwise. All your past uses of &ldquo;plus&rdquo; fit quus as well as plus.
          The sceptic asks for a fact about you that makes it the case that you meant plus, and that it also{" "}
          <em>justifies</em> answering 125. Meaning is normative: it tells you what you ought to say.
        </p>
      </Definition>

      <Example title="candidate facts">
        <p>
          Kripke considers and rejects several. A past instruction to yourself, such as counting marbles, uses words like
          &ldquo;count&rdquo; that face the same challenge. A <strong>dispositional</strong> account says you meant plus
          because you are disposed to answer 125; but dispositions are finite, since for huge numbers you would die or err,
          and they describe what you would say, not what you ought to say. An inner feeling or image could fit either function
          too. A primitive, irreducible state of meaning seems mysterious.
        </p>
      </Example>

      <Definition title="the sceptical solution">
        <p>
          Kripke concludes that there is no fact that constitutes meaning plus, and offers a{" "}
          <strong>sceptical solution</strong>, modelled on Hume&rsquo;s treatment of causation. We should look not for truth
          conditions of &ldquo;Jones means plus&rdquo; but for its assertibility conditions and its role in our lives. We say
          someone means plus when their answers agree with ours often enough; a community keeps checks, and someone who answers
          5 is judged not to have mastered addition. So meaning, on this view, cannot be attributed to an individual considered
          in isolation.
        </p>
      </Definition>

      <Remark title="replies">
        <p>
          Many find the conclusion too strong. Some argue that dispositions, suitably idealised, are enough. Others, such as
          David Lewis, appeal to natural properties: addition is a more natural function than quaddition, so it is the better
          candidate for what we mean. Still others, like McDowell, reject Kripke&rsquo;s reading of Wittgenstein, holding that
          the demand for a fact that justifies at each step is the mistake. The debate is sometimes called the Kripkenstein
          problem.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "quus",
      rung: "check",
      prompt: <p>What is quus?</p>,
      answer: {
        kind: "choice",
        options: [
          "A function that agrees with addition on numbers below 57 and gives 5 otherwise",
          "A misspelling of plus",
          "Addition modulo 57",
          "A function that always gives 5",
        ],
        correct: [0],
      },
    },
    {
      key: "norm",
      rung: "check",
      prompt: <p>Why does Kripke say a dispositional account cannot capture meaning?</p>,
      answer: {
        kind: "choice",
        options: [
          "Dispositions are finite and describe what we would say, not what we ought to say.",
          "Dispositions do not exist.",
          "We have no dispositions about numbers.",
          "Dispositions are always correct.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>With the bound at 57, what is 68 quus 57?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "past",
      rung: "apply",
      prompt: <p>Why can&rsquo;t your past answers settle that you meant plus?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every past answer is also what quus gives, since all past sums were below the bound.",
          "You may have made mistakes in the past.",
          "Your past answers were forgotten.",
          "Quus gives the same answer as plus everywhere.",
        ],
        correct: [0],
      },
    },
    {
      key: "solution",
      rung: "apply",
      prompt: <p>What is distinctive about Kripke&rsquo;s sceptical solution?</p>,
      answer: {
        kind: "choice",
        options: [
          "It accepts there is no meaning fact and explains meaning talk by assertibility conditions within a community.",
          "It finds the hidden mental fact that settles meaning.",
          "It says all words are meaningless and should be abandoned.",
          "It proves that quus is the correct function.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does an appeal to dispositions answer Kripke&rsquo;s sceptic? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the dispositional reply, that meaning plus is being disposed to give sums.",
          "Considers at least one of Kripke’s objections, finitude or normativity, and a possible response.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Lewis suggests addition is more natural than quaddition, so we mean plus. Is this a good reply to the sceptic?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the appeal to naturalness as making plus the better candidate for what we mean.",
          "Considers an objection, such as whether naturalness explains the normativity of meaning or is just assumed.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kripke's quus example, why past use, instructions, dispositions and inner states seem not to fix that we mean plus, the normativity of meaning, and Kripke's sceptical solution.",

  glimpse: (
    <p>
      Next, the private language argument draws on these ideas to ask whether a word could get its meaning from one
      person&rsquo;s inner sensations alone. Dispositions and natural properties return in metaphysics.
    </p>
  ),
};
