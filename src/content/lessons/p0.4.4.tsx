import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.4.4",
  minutes: 60,
  links: {
    revisits: ["p0.4.1"],
    parallels: ["m1.3.3"],
    foreshadows: ["p4.1.4", "p4.2.4", "p5.1.1"],
  },

  puzzle: (
    <>
      <p>A friend announces: &ldquo;There is no such thing as objective truth. All truth is relative to the person.&rdquo;</p>
      <p>
        Take the claim seriously, and ask what it says about itself. Is <em>it</em> objectively true? If so, what follows?
        If not, why should anyone else accept it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        If &ldquo;all truth is relative&rdquo; is objectively true, then there is at least one objective truth, and the claim
        is false. If instead it is only true for your friend, it gives no one else a reason to believe it, and it no longer
        disagrees with anyone. Either way it cannot stand as an objective claim. Plato pressed a version of this point
        against Protagoras in the <cite>Theaetetus</cite>.
      </p>
      <p>
        This is <strong>reductio ad absurdum</strong>, Latin for &ldquo;reduction to absurdity&rdquo;. Assume the claim,
        reason correctly from it, and arrive at something impossible. Then the claim, or some other premise you used, must
        go. You have already seen one: Galileo&rsquo;s tied stones reduced Aristotle&rsquo;s theory to the absurd conclusion
        that one body falls both faster and slower.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="reductio ad absurdum">
        <p>
          A <strong>reductio</strong> refutes a claim <em>P</em> by showing that <em>P</em>, together with premises we
          accept, leads to a contradiction or to something clearly false. Since true premises and valid reasoning cannot
          lead to a falsehood, <em>P</em> or one of the other premises is false.
        </p>
      </Definition>

      <ol className="standard-form">
        <li>Suppose <em>P</em>.</li>
        <li>From <em>P</em> and accepted premises, derive <em>Q</em>.</li>
        <li><em>Q</em> is a contradiction, or plainly false.</li>
      </ol>
      <p className="standard-form-conclusion">So, not <em>P</em> (or one of the accepted premises is false).</p>

      <Example title="a reductio in mathematics">
        <p>
          Euclid proved that there are infinitely many primes. Suppose there were only finitely many: <em>p</em>
          <sub>1</sub>, &hellip;, <em>p</em><sub>n</sub>. Multiply them together and add 1. The result is not divisible by any
          of them, since each leaves remainder 1. But every whole number greater than 1 is divisible by some prime. So there
          is a prime not on the list, contradicting the assumption that the list was complete. In mathematics this is called{" "}
          <strong>proof by contradiction</strong>, and it is exactly the same move.
        </p>
      </Example>

      <p>Two cautions make the difference between a good reductio and a bad one.</p>
      <ul>
        <li>
          <strong>Absurd, not merely surprising.</strong> A conclusion that sounds strange is not thereby false. Science is
          full of strange truths: the Earth moves, time runs slower at speed. A reductio needs a conclusion that is
          contradictory or that we have overwhelming reason to reject.
        </li>
        <li>
          <strong>Which premise goes?</strong> A reductio shows only that the premises cannot all be true. The arguer chooses
          which to reject; an opponent may prefer to reject a different one. Make every premise explicit, so that the choice
          is visible and can be argued over.
        </li>
      </ul>

      <Example title="Zeno’s arrow">
        <p>
          Zeno of Elea argued that motion is impossible. At each instant, a flying arrow occupies a space exactly its own
          size, so at that instant it is not moving. But the flight is made up of instants. So the arrow never moves. Zeno
          meant this as a reductio of the assumptions his opponents made about space and time. Most readers instead keep
          motion and reject a premise: perhaps being at rest at every instant does not imply being at rest over a period.
          Making that precise took two thousand years and the mathematics of limits.
        </p>
      </Example>

      <Remark title="self-refutation">
        <p>
          The puzzle is a special kind of reductio: the claim undermines itself. Other examples are &ldquo;I know that I know
          nothing&rdquo; read strictly, and &ldquo;no sentence is longer than five words&rdquo;. Charging a view with
          self-refutation is powerful but often too quick. A careful relativist might restrict the claim, say to moral truth,
          so that it no longer applies to itself. Charity requires asking whether such a restriction saves the view before
          declaring victory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "shape",
      rung: "check",
      prompt: <p>A reductio ad absurdum begins by&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "assuming the claim it aims to refute.",
          "assuming the claim it aims to prove.",
          "listing examples that support the claim.",
          "attacking the person who holds the claim.",
        ],
        correct: [0],
      },
    },
    {
      key: "surprising",
      rung: "check",
      prompt: <p>Why is &ldquo;this conclusion sounds strange&rdquo; not enough to complete a reductio?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because strange-sounding things are never false.",
          "Because many strange-sounding claims are true; a reductio needs a contradiction or something we have overwhelming reason to reject.",
          "Because reductios only work in mathematics.",
          "Because conclusions cannot be strange.",
        ],
        correct: [1],
      },
    },
    {
      key: "which-premise",
      rung: "apply",
      prompt: <p>What does a successful reductio strictly show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the assumed claim is false, whatever else is true.",
          "That the assumed claim and the other premises cannot all be true together.",
          "That every premise is false.",
          "That the conclusion is true.",
        ],
        correct: [1],
      },
    },
    {
      key: "self-refuting",
      rung: "apply",
      prompt: <p>Select every claim that refutes itself.</p>,
      answer: {
        kind: "choice",
        options: [
          "No claim can be put into words.",
          "Some claims are false.",
          "Nobody should ever follow advice.",
          "All swans are white.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "zeno",
      rung: "apply",
      prompt: <p>Most readers respond to Zeno&rsquo;s arrow by&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "accepting that motion is impossible.",
          "rejecting a premise about instants and motion.",
          "arguing that arrows do not exist.",
          "accepting the conclusion only for arrows.",
        ],
        correct: [1],
      },
    },
    {
      key: "construct",
      rung: "prove",
      prompt: (
        <p>
          Give a reductio of the claim &ldquo;It is always wrong to change your mind&rdquo;. Set it out in numbered steps,
          mark the assumption, and say which conclusion is absurd and why.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Begins by assuming the claim.",
          "Derives a consequence, such as that someone who believed this claim yesterday and doubts it today must never revise any mistaken belief.",
          "Identifies a conclusion that is absurd or contradictory, with a reason.",
          "Concludes that the claim, or a named premise, must be rejected.",
        ],
      },
    },
    {
      key: "relativist-reply",
      rung: "stretch",
      prompt: (
        <p>
          Write the strongest reply a relativist could make to the self-refutation argument in the puzzle, then assess
          whether it succeeds.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States a genuine reply, such as restricting relativism to a domain like ethics or taste, or accepting that relativism is itself only relatively true.",
          "Explains how the reply avoids the self-refutation.",
          "Assesses the cost of the reply, for example whether the restricted view is still interesting or still disagrees with anyone.",
        ],
      },
    },
  ],

  teachBack:
    "Explain reductio ad absurdum to a friend using 'all truth is relative', and say why a reductio leaves a choice about which premise to give up.",

  glimpse: (
    <p>
      This completes the philosopher&rsquo;s toolkit, and Year 0 of philosophy is nearly done. Proof by contradiction, the
      same move in mathematics, returns in Foundations. Zeno&rsquo;s paradoxes and the Socratic elenchus, a reductio of an
      interlocutor&rsquo;s own beliefs, return in Ancient Greek Philosophy, and the self-refutation charge against relativism
      returns in Ethics.
    </p>
  ),
};
