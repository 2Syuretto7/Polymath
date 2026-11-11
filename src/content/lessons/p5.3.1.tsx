import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MaximTestViz } from "@/components/viz/MaximTestViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p5.3.1",
  minutes: 85,
  links: {
    revisits: ["p5.2.3", "p5.1.3", "p4.6.1"],
    foreshadows: ["p5.3.2", "p8.5.1", "p13.1.2"],
  },

  puzzle: (
    <>
      <p>
        A shopkeeper always gives children the correct change, because cheating them would be bad for business if word got
        out. Another gives correct change because cheating is wrong. They do exactly the same thing. Is one of them better
        than the other? Immanuel Kant thought so, and from that thought he built an ethics in which consequences play no
        part in what makes an action right, and in which some actions, such as lying, are forbidden whatever the
        consequences.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Kant&rsquo;s test asks what would happen if everyone acted on your policy. Step through it for his own examples,
        and for one that causes trouble.
      </p>
      <MaximTestViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the good will and duty">
        <p>
          Kant&rsquo;s <em>Groundwork of the Metaphysics of Morals</em> (1785) opens with the claim that nothing can be
          called good without qualification except a good will. Intelligence, courage and even happiness can be used for
          bad ends. A good will is good in itself, even if it achieves nothing. An action has moral worth only if it is
          done from duty, not merely in accordance with duty. The prudent shopkeeper acts in accordance with duty; only the
          other acts from it.
        </p>
      </Definition>

      <Definition title="hypothetical and categorical imperatives">
        <p>
          A <strong>hypothetical imperative</strong> tells you what to do if you want something: if you want to be a
          doctor, study biology. It binds only those with the desire. A <strong>categorical imperative</strong> binds
          everyone, whatever they want. Moral requirements, Kant held, are categorical: you ought not to lie, full stop, not
          just if you want to be trusted. And they come from reason itself, so they bind every rational being.
        </p>
      </Definition>

      <Example title="the formula of universal law">
        <p>
          The first formulation of the categorical imperative is to act only on that maxim through which you can at the
          same time will that it become a universal law. A maxim is the policy behind your action. Some maxims cannot even
          be conceived as universal laws, like the lying promise: if everyone did it, promising would no longer exist. These
          give <strong>perfect duties</strong>, which allow no exceptions. Other maxims can be conceived but not willed,
          like never helping anyone, since you yourself will need help. These give <strong>imperfect duties</strong>,
          which leave room for choice about when and how.
        </p>
      </Example>

      <Remark title="absolute rules, and objections">
        <p>
          Kant held that perfect duties have no exceptions. In a late essay he considered a murderer who asks where your
          friend is hiding, and argued that you still may not lie. Most readers, including many Kantians, think this is a
          mistake. One diagnosis, pressed by Elizabeth Anscombe, is that a maxim can be described in many ways. &ldquo;Lie
          when it suits me&rdquo; cannot be universalised, but &ldquo;lie to a murderer to save a life&rdquo; perhaps can. If
          so, the test needs a principled way to choose the description, which Kant did not provide. Defenders reply that
          the relevant description is the one that captures the agent&rsquo;s actual reasons.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hyp",
      rung: "check",
      prompt: <p>&ldquo;If you want to stay healthy, exercise regularly.&rdquo; What kind of imperative is this?</p>,
      answer: { kind: "choice", options: ["hypothetical", "categorical"], correct: [0] },
    },
    {
      key: "formula",
      rung: "check",
      prompt: <p>Which of these is Kant&rsquo;s formula of universal law, in paraphrase?</p>,
      answer: {
        kind: "choice",
        options: [
          "Act so as to produce the greatest happiness.",
          "Act only on a maxim you could at the same time will to be a universal law.",
          "Do what a virtuous person would do.",
          "Do whatever your society approves.",
        ],
        correct: [1],
      },
    },
    {
      key: "shop",
      rung: "apply",
      prompt: <p>The shopkeeper who gives correct change only to protect the business acts</p>,
      answer: {
        kind: "choice",
        options: [
          "from duty, and the act has full moral worth",
          "in accordance with duty, but not from duty, so the act lacks moral worth",
          "against duty",
          "from inclination, which Kant regards as the highest motive",
        ],
        correct: [1],
      },
    },
    {
      key: "promise",
      rung: "apply",
      prompt: <p>Why does the maxim of the lying promise fail Kant&rsquo;s test?</p>,
      answer: {
        kind: "choice",
        options: [
          "It has bad consequences.",
          "Universalised, it destroys the practice of promising, so it cannot even be conceived: a contradiction in conception.",
          "It can be conceived but not willed.",
          "God forbids it.",
        ],
        correct: [1],
      },
    },
    {
      key: "help",
      rung: "apply",
      prompt: <p>What kind of duty does Kant derive from the failure of the maxim of never helping others?</p>,
      answer: {
        kind: "choice",
        options: ["a perfect duty", "an imperfect duty", "no duty at all", "a hypothetical imperative"],
        correct: [1],
      },
    },
    {
      key: "test",
      rung: "prove",
      prompt: (
        <p>
          Apply the formula of universal law, step by step, to the maxim of the lying promise. Then say whether you find
          Kant&rsquo;s reasoning convincing, and why.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the maxim and its universalised form.",
          "Explains why the universalised maxim undermines the practice of promising, so it cannot be acted on: a contradiction in conception.",
          "Gives a reasoned assessment, for example whether the argument really avoids appealing to consequences. Any thoughtful view earns full credit.",
        ],
      },
    },
    {
      key: "murderer",
      rung: "stretch",
      prompt: (
        <p>
          Kant held that you may not lie even to a murderer asking where your friend is. Can a Kantian avoid this
          conclusion? Consider how the maxim is described, and whether the humanity formula, in the next lesson, might help.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains why Kant's view seems to forbid the lie.",
          "Considers a way out, such as a more specific maxim, the murderer forfeiting the right to the truth, or a conflict of duties.",
          "Assesses whether the way out is principled. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why Kant thinks only a good will is good without qualification, the difference between acting from duty and in accordance with it, hypothetical and categorical imperatives, and how the universal law test works on the lying promise.",

  glimpse: (
    <p>
      The next lesson turns to Kant&rsquo;s second formulation: treat humanity always as an end, never merely as a means.
      The Kant course reads the <em>Groundwork</em> closely, and Moral Philosophy follows Kantian ethics today.
    </p>
  ),
};
