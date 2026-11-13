import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MaximTestViz } from "@/components/viz/MaximTestViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p8.5.1",
  minutes: 85,
  links: {
    revisits: ["p5.3.1", "p8.4.2", "p7.5.5"],
    foreshadows: ["p8.5.2", "p13.1.2", "p13.3.5"],
  },

  puzzle: (
    <>
      <p>
        Two shopkeepers give correct change to children. One does it because honesty is good for business; the other because
        it is right. Their actions are the same, and both are praiseworthy in a way. But only one, Kant says, has moral worth.
        His <em>Groundwork of the Metaphysics of Morals</em>, in 1785, set out to find the supreme principle of morality from
        reason alone, without appeal to happiness, feeling or human nature. Can reason by itself tell us what to do?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Put four maxims through Kant&rsquo;s test, one stage at a time.
      </p>
      <MaximTestViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the good will and duty">
        <p>
          Nothing is good without qualification except a <strong>good will</strong>. Intelligence, courage and even happiness
          can be put to bad use. A good will is good not for what it achieves but in itself. It shows itself in acting{" "}
          <strong>from duty</strong>, not merely in accordance with duty: the honest shopkeeper who acts from self-interest
          does the right thing, but their action has no moral worth. An action from duty has its worth in its{" "}
          <strong>maxim</strong>, the principle on which it is done, not in its consequences.
        </p>
      </Definition>

      <Definition title="the categorical imperative">
        <p>
          A <strong>hypothetical imperative</strong> says what to do if you want something: if you want to be trusted, be
          honest. A <strong>categorical imperative</strong> commands unconditionally. Kant gives it in several formulas. The
          formula of universal law: act only on that maxim through which you can at the same time will that it become a
          universal law. The formula of humanity: act so that you treat humanity, in your own person or another&rsquo;s, always
          at the same time as an end, never merely as a means. The formula of autonomy and the kingdom of ends follow.
        </p>
      </Definition>

      <Example title="the four examples">
        <p>
          Kant&rsquo;s examples sort duties into perfect and imperfect, to oneself and to others. A lying promise cannot even be
          conceived as universal law: it would destroy the practice of promising it depends on, so there is a perfect duty
          never to make one. Neglecting one&rsquo;s talents, or refusing all help to others, can be conceived as universal but
          not willed by a rational being, so there are imperfect duties to develop one&rsquo;s talents and to help others,
          which leave latitude in how to fulfil them. By the formula of humanity, the lying promiser uses the lender merely as
          a means.
        </p>
      </Example>

      <Remark title="questions">
        <p>
          Critics ask whether the universal law test gives the right answers: Hegel called it an empty formalism, and some
          plainly wrong maxims seem to pass when described cleverly. Others doubt that acting from duty alone has more worth
          than acting from love. Kant&rsquo;s defenders, from Rawls and Korsgaard to O&rsquo;Neill, have developed his ideas
          into constructivist ethics, and the formula of humanity underlies much modern talk of human dignity.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "good",
      rung: "check",
      prompt: <p>What does Kant say is good without qualification?</p>,
      answer: { kind: "choice", options: ["Happiness", "Intelligence", "A good will", "Courage"], correct: [2] },
    },
    {
      key: "cat",
      rung: "check",
      prompt: <p>Which of these is a categorical imperative?</p>,
      answer: {
        kind: "choice",
        options: [
          "If you want to stay healthy, exercise.",
          "Do not make lying promises.",
          "If you want friends, be kind.",
          "If you want to pass, study.",
        ],
        correct: [1],
      },
    },
    {
      key: "shop",
      rung: "apply",
      prompt: <p>Why does the honesty of the shopkeeper who is honest only for profit lack moral worth, on Kant&rsquo;s view?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because honesty is wrong.",
          "Because the shopkeeper acts in accordance with duty but not from duty.",
          "Because the shop makes a profit.",
          "Because the consequences are bad.",
        ],
        correct: [1],
      },
    },
    {
      key: "promise",
      rung: "apply",
      prompt: <p>Why does the maxim of the lying promise fail the universal law test?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because lying makes people unhappy.",
          "Because if everyone made lying promises, no one would believe promises, so the maxim could not even work as a universal law.",
          "Because the law forbids it.",
          "Because God forbids it.",
        ],
        correct: [1],
      },
    },
    {
      key: "imperfect",
      rung: "apply",
      prompt: <p>What kind of duty does the failure to will universal non-help generate?</p>,
      answer: {
        kind: "choice",
        options: ["A perfect duty to oneself", "An imperfect duty to others, of beneficence", "No duty at all", "A legal duty"],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, explain the difference between hypothetical and categorical imperatives, and why morality needs the second.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says hypothetical imperatives depend on a desired end, while categorical ones command unconditionally.",
          "Says moral requirements bind whatever one wants, so they must be categorical. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "formal",
      rung: "stretch",
      prompt: <p>Hegel called the categorical imperative an empty formalism. Is the objection fair? Give your view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the objection: the test checks only consistency, so it cannot by itself say which maxims are good, and maxims can be gerrymandered.",
          "Considers a reply, such as the contradiction in the will, the formula of humanity, or careful description of maxims.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kant's idea of the good will and acting from duty, the difference between hypothetical and categorical imperatives, the formulas of universal law and of humanity, and how they handle the lying promise and the duty to help.",

  glimpse: (
    <p>
      The next lesson explains the idea of autonomy, the will giving the moral law to itself, and why morality presupposes
      freedom. The Moral Philosophy course follows contemporary Kantian ethics and constructivism.
    </p>
  ),
};
