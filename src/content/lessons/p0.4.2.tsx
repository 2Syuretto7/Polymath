import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.4.2",
  minutes: 60,
  links: {
    revisits: ["p0.1.4", "p0.3.3"],
    foreshadows: ["p1.1.2", "p4.2.2", "p10.1.2", "p16.3.2"],
  },

  puzzle: (
    <>
      <p>
        For over two thousand years, many philosophers held something like this: to <em>know</em> something is to believe
        it, for it to be true, and for you to be justified in believing it.
      </p>
      <p>
        Consider this case. You look at the clock in the hall. It says three o&rsquo;clock, and you believe it is three. The
        clock has always been reliable, so your belief is justified. And it <em>is</em> three o&rsquo;clock. But the clock
        stopped exactly twelve hours ago. Do you know that it is three?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Most people say no: you got lucky. Yet your belief was true and justified. If that is right, then being a justified
        true belief is not enough for knowledge, and the old account is false. One case was enough to refute it.
      </p>
      <p>
        In 1963 Edmund Gettier published a three-page paper with two cases of this kind, and the account that had seemed
        secure was overturned almost overnight. (The stopped-clock case is older; Bertrand Russell used it.) A single
        well-chosen <strong>counterexample</strong> is the most powerful move in philosophy, because a general claim
        promises that there are no exceptions, and one exception breaks the promise.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="counterexample">
        <p>
          A <strong>counterexample</strong> to a general claim is a case, actual or possible, in which the claim is false.
          For &ldquo;all F are G&rdquo;, it is something that is F but not G. For a proposed definition, &ldquo;X is F
          exactly when X is G&rdquo;, it is a case that is F but not G (the definition is too narrow) or G but not F (too
          broad).
        </p>
      </Definition>

      <p>
        Many philosophical claims are about what is <em>possible</em> or <em>necessary</em>: &ldquo;knowledge must be
        justified true belief&rdquo;, &ldquo;nothing can be red and green all over&rdquo;. For such claims a merely possible
        case is enough, which is why counterexamples are so often thought experiments.
      </p>

      <Example title="Socrates and Euthyphro">
        <p>
          In Plato&rsquo;s <cite>Euthyphro</cite>, Euthyphro proposes that the pious is what the gods love. Socrates points
          out that the gods quarrel: some love what others hate. So one action would be both pious and impious, which is
          absurd. Euthyphro revises: the pious is what <em>all</em> the gods love. Socrates then asks his famous question:
          do the gods love it because it is pious, or is it pious because they love it? The pattern, claim, counterexample,
          revision, is the method you met with Socrates and the chair.
        </p>
      </Example>

      <p>When you meet a counterexample to your own claim, there are only a few honest responses:</p>
      <ol>
        <li><strong>Accept it</strong> and give up the claim.</li>
        <li><strong>Revise</strong> the claim so the case no longer refutes it, as Euthyphro did. Then test the revision.</li>
        <li><strong>Dispute the case</strong>: argue that, properly described, it is not a counterexample after all.</li>
        <li><strong>Dispute the intuition</strong>: argue that our verdict on the case is mistaken.</li>
      </ol>

      <Remark title="when revision becomes evasion">
        <p>
          The philosopher of mathematics Imre Lakatos described how, faced with a counterexample, people sometimes declare
          the case a &ldquo;monster&rdquo; that does not really count, redefining their terms to exclude it. Sometimes that
          is right, since the case may really be irrelevant. But if every revision is designed only to exclude the last
          counterexample, with no independent reason behind it, the claim survives by saying less and less. A good revision
          explains <em>why</em> the case was a counterexample, and so predicts which further cases will be.
        </p>
      </Remark>

      <Remark title="finding counterexamples">
        <p>
          Look at the edges. Test a claim on extreme cases, borderline cases, cases where its usual causes are present but
          the usual effect is not, and cases where one condition is met by luck. Gettier cases all work by the same recipe:
          a belief that is justified, but true only by coincidence. Once you see the recipe, you can build your own.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what-refutes",
      rung: "check",
      prompt: <p>Which would be a counterexample to &ldquo;All swans are white&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: ["a white swan", "a black swan", "a white goose", "a black goose"],
        correct: [1],
      },
    },
    {
      key: "broad-narrow",
      rung: "check",
      prompt: (
        <p>
          &ldquo;A bird is an animal that flies.&rdquo; A penguin is a bird that does not fly. Is the definition too broad or
          too narrow?
        </p>
      ),
      answer: { kind: "choice", options: ["too broad", "too narrow", "neither"], correct: [1] },
    },
    {
      key: "broad",
      rung: "apply",
      prompt: <p>Which case shows that &ldquo;A bird is an animal that flies&rdquo; is also too broad?</p>,
      answer: { kind: "choice", options: ["an ostrich", "a bat", "an eagle", "a fish"], correct: [1] },
    },
    {
      key: "gettier-recipe",
      rung: "apply",
      prompt: <p>What do Gettier cases have in common?</p>,
      answer: {
        kind: "choice",
        options: [
          "The belief is false but justified.",
          "The belief is true and justified, but true only by luck.",
          "The belief is true but has no justification.",
          "The person does not believe the proposition.",
        ],
        correct: [1],
      },
    },
    {
      key: "responses",
      rung: "apply",
      prompt: (
        <p>
          Faced with the stopped clock, someone says: &ldquo;Then knowledge is justified true belief that is not based on
          a false assumption.&rdquo; Which response is this?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["accepting the counterexample and giving up", "revising the claim", "disputing the case", "disputing the intuition"],
        correct: [1],
      },
    },
    {
      key: "make-one",
      rung: "prove",
      prompt: (
        <p>
          Construct your own Gettier-style case: a belief that is true and justified, but true only by luck. Explain why it
          is a counterexample to the claim that knowledge is justified true belief.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Describes a belief that is justified by good evidence.",
          "Makes the belief true, but for a reason unconnected with the evidence.",
          "States that intuitively the person does not know.",
          "Explains that the case has all three conditions without knowledge, so they are not sufficient.",
        ],
      },
    },
    {
      key: "revise",
      rung: "stretch",
      prompt: (
        <p>
          Propose a revision of &ldquo;knowledge is justified true belief&rdquo; that handles the stopped clock, then try to
          find a counterexample to your own revision. Say what you learn.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Proposes a specific revised account.",
          "Shows how it handles the stopped clock.",
          "Offers a genuine attempt at a counterexample to the revision.",
          "Reflects on what the exercise shows, such as how hard the problem is.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why one counterexample can refute a theory that thousands of examples support. Use the stopped clock.",

  glimpse: (
    <p>
      Next, drawing distinctions: the tool for disarming a counterexample, or a whole argument, by noticing that a word is
      doing two jobs. The Gettier problem returns in Introduction to Philosophy and in full in Epistemology. Euthyphro
      returns in Ancient Greek Philosophy, and Lakatos&rsquo;s account of how theories meet counterexamples in Philosophy of
      Science.
    </p>
  ),
};
