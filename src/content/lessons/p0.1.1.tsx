import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { QuestionSorter } from "@/components/viz/QuestionSorter";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.1.1",
  minutes: 50,
  links: {
    foreshadows: ["p0.1.2", "p4.2.2", "p10.1.1", "p20.2.1"],
  },

  puzzle: (
    <>
      <p>
        A friend asks you: <em>is a virus alive?</em> Suppose you could learn every fact biologists will ever know about
        viruses: their chemistry, how they copy themselves, how they evolve.
      </p>
      <p>Would that settle the question? Decide before reading on, and notice why you decided as you did.</p>
    </>
  ),

  intuition: (
    <>
      <p>
        Many people say no. A virus copies itself and evolves, as living things do; it has no metabolism and cannot
        reproduce without a host, unlike them. Once all those facts are in, what remains is a question about the idea of
        life itself: which features make something alive, and why those?
      </p>
      <p>
        That is a clue to what philosophy is. Some questions are answered by <strong>looking</strong>: count the moons,
        run the trial. Some are about <strong>what our ideas mean</strong> and where their edges lie. Some are about{" "}
        <strong>what we ought to do</strong> or value. Philosophy lives mostly in the second and third kinds, and in the
        places where all three tangle together.
      </p>
      <QuestionSorter />
    </>
  ),

  theory: (
    <>
      <Definition title="three kinds of question">
        <ul>
          <li>An <strong>empirical</strong> question is settled, in principle, by observation and experiment.</li>
          <li>
            A <strong>conceptual</strong> question asks what something is, or what a concept requires, and is not
            settled by further observation alone.
          </li>
          <li>A <strong>normative</strong> question asks what ought to be done, believed or valued.</li>
        </ul>
      </Definition>

      <p>
        Real questions are often mixed. &ldquo;Is a virus alive?&rdquo; needs biological facts <em>and</em> a decision
        about the concept of life. A good first move in any hard question is to separate its strands and ask which
        strand is actually in dispute.
      </p>

      <p>
        <strong>Philosophy</strong>, as we will use the word, is the careful, reasoned study of questions that remain
        open after the facts are in: questions about what exists, what we can know, how we should live, and how to
        reason well. Its main tool is the <em>argument</em>: a set of claims, the premises, offered as reasons for
        another claim, the conclusion.
      </p>

      <p>The questions fall into families, each of which has a course of its own later in Polymath.</p>
      <table className="table">
        <thead>
          <tr><th>Branch</th><th>Central question</th><th>Example</th></tr>
        </thead>
        <tbody>
          <tr><td>Metaphysics</td><td>What exists, and what is it like?</td><td>Is time real, or only change?</td></tr>
          <tr><td>Epistemology</td><td>What can we know, and how?</td><td>Can you know you are not dreaming?</td></tr>
          <tr><td>Ethics</td><td>How should we live and act?</td><td>Is lying ever right?</td></tr>
          <tr><td>Logic</td><td>What makes reasoning good?</td><td>When does a conclusion really follow?</td></tr>
          <tr><td>Political philosophy</td><td>What makes power legitimate?</td><td>Why obey a law you think unjust?</td></tr>
          <tr><td>Aesthetics</td><td>What are beauty and art?</td><td>Is taste merely personal?</td></tr>
        </tbody>
      </table>

      <Example title="Socrates' question">
        <p>
          In Athens, around 400 BCE, Socrates walked about asking people questions of the form &ldquo;What is courage?&rdquo;,
          &ldquo;What is justice?&rdquo;, &ldquo;What is piety?&rdquo;. People answered with examples: a soldier who holds
          his ground is courageous. Socrates pointed out that an example is not a definition. It does not tell you what all
          courageous acts have in common. The exchange usually ended with everyone, Socrates included, admitting they did
          not know. That admission was the beginning of philosophy, not its failure.
        </p>
      </Example>

      <Remark title="another tradition">
        <p>
          In classical India the schools of philosophy were called <em>darśanas</em>, &ldquo;ways of seeing&rdquo;.
          Each began by asking what the <em>pramāṇas</em>, the reliable sources of knowledge, are: perception, inference,
          testimony, or more. The same question drives Western epistemology. You will meet both in their own courses.
        </p>
      </Remark>

      <p>If many philosophical questions stay open, why study them? Bertrand Russell answered in 1912:</p>
      <Quote source={<>Bertrand Russell, <cite>The Problems of Philosophy</cite>, chapter 15</>}>
        <p>
          Philosophy is to be studied, not for the sake of any definite answers to its questions, since no definite answers
          can, as a rule, be known to be true, but rather for the sake of the questions themselves; because these questions
          enlarge our conception of what is possible, enrich our intellectual imagination and diminish the dogmatic
          assurance which closes the mind against speculation.
        </p>
      </Quote>
      <p>
        Notice that Russell&rsquo;s claim is itself philosophical: a normative claim about what makes a study worthwhile.
        You are allowed to disagree with it, if you can say why.
      </p>
    </>
  ),

  practice: [
    {
      key: "normative",
      rung: "check",
      prompt: <p>Which question is mainly <strong>normative</strong>?</p>,
      answer: {
        kind: "choice",
        options: [
          "How many people in India speak Tamil?",
          "Should wealthy countries accept more refugees?",
          "What is a language, as opposed to a dialect?",
          "Did the printing press increase literacy?",
        ],
        correct: [1],
      },
    },
    {
      key: "branch",
      rung: "check",
      prompt: <p>Which branch of philosophy asks what we can know and how?</p>,
      answer: { kind: "choice", options: ["Metaphysics", "Epistemology", "Ethics", "Aesthetics"], correct: [1] },
    },
    {
      key: "virus",
      rung: "apply",
      prompt: <p>Which best describes the question &ldquo;Is a virus alive?&rdquo;</p>,
      answer: {
        kind: "choice",
        options: [
          "Purely empirical: better experiments will settle it.",
          "Purely a matter of taste: there is nothing to reason about.",
          "Mixed: it needs biological facts and a reasoned decision about what life requires.",
          "Normative: it asks how we ought to treat viruses.",
        ],
        correct: [2],
      },
    },
    {
      key: "data-settles",
      rung: "apply",
      prompt: <p>Select every question that more data alone could, in principle, settle.</p>,
      answer: {
        kind: "choice",
        options: [
          "How many species of beetle live in the Western Ghats?",
          "Does this drug reduce the risk of stroke?",
          "Is it fair to tax inheritances heavily?",
          "What is time?",
        ],
        correct: [0, 1],
      },
    },
    {
      key: "example-not-definition",
      rung: "apply",
      prompt: (
        <p>
          Asked &ldquo;What is courage?&rdquo;, someone answers &ldquo;Running into a burning house to save a child.&rdquo;
          What is Socrates&rsquo; main complaint?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The example is false: that act is reckless, not courageous.",
          "An example does not say what all courageous acts have in common.",
          "Courage cannot be discussed without first defining fear.",
          "The answer is empirical, so it is not philosophy.",
        ],
        correct: [1],
      },
    },
    {
      key: "your-question",
      rung: "prove",
      prompt: (
        <p>
          Choose a question you genuinely care about. Say which kind it is, or which strands it mixes, and argue in a short
          paragraph why more data alone would or would not settle it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States a real question clearly.",
          "Classifies it, separating strands if it is mixed.",
          "Gives a reason, not just an assertion, for whether data would settle it.",
          "Considers what someone who disagrees might say.",
        ],
      },
    },
    {
      key: "russell",
      rung: "stretch",
      prompt: <p>State Russell&rsquo;s claim about the value of philosophy in your own words, then give one objection to it.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Restates the claim accurately: the value lies in the questions, not definite answers.",
          "Offers a genuine objection rather than a restatement.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend who has never studied philosophy what makes a question philosophical, using one example of your own.",

  glimpse: (
    <p>
      Next you will ask how philosophy and science divide the work, and where they overlap. Socrates&rsquo; &ldquo;What is
      X?&rdquo; questions return in full in the <em>Euthyphro</em>, the question of how we know returns in Epistemology,
      and the pramāṇas return in Indian Philosophy.
    </p>
  ),
};
