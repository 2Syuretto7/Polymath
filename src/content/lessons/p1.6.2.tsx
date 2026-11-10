import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TrolleyViz } from "@/components/viz/TrolleyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.6.2",
  minutes: 70,
  links: {
    revisits: ["p0.4.1", "p0.4.2"],
    foreshadows: ["p5.2.1", "p5.3.1", "p5.4.1", "p13.1.1"],
  },

  puzzle: (
    <>
      <p>
        A runaway tram is heading for five people tied to the track. You can pull a lever to send it onto a side track, where
        one person is tied. Should you pull it?
      </p>
      <p>
        Now you are on a footbridge over the track, beside a large stranger. If you push him off, his body will stop the tram.
        He will die and the five will live. Should you push? Most people say yes to the lever and no to the push. But in both
        cases one dies and five live. What is the difference?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        These cases come from Philippa Foot (1967) and Judith Jarvis Thomson (1976 and 1985). They are thought experiments
        designed to test moral theories, just as a physicist tests a theory against awkward cases. A theory of right and wrong
        should explain our firmest judgements, or give us good reason to give them up.
      </p>
      <p>
        Below are three cases and three theories. For each case, see what each theory says, and whether it agrees with what
        most people think.
      </p>
      <TrolleyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="consequentialism">
        <p>
          An act is right if and only if it brings about the best consequences of any act available. The best-known form is
          the <strong>utilitarianism</strong> of Jeremy Bentham and John Stuart Mill, in which the best consequences are those
          with the greatest total happiness. Only outcomes matter; how they come about matters only through its effects.
        </p>
      </Definition>

      <Definition title="Kantian ethics">
        <p>
          Immanuel Kant held that some acts are wrong whatever their consequences. One form of his supreme principle, the{" "}
          <strong>categorical imperative</strong> (1785), says: act so that you treat humanity, whether in yourself or in
          another, always as an end and never merely as a means. Persons are not tools, to be used up for the sake of totals.
        </p>
      </Definition>

      <Definition title="virtue ethics">
        <p>
          Following Aristotle&rsquo;s <cite>Nicomachean Ethics</cite>, virtue ethics asks first not &ldquo;which act is
          right?&rdquo; but &ldquo;what kind of person should I be?&rdquo;. A right act is what a virtuous person, honest,
          brave, just, kind and practically wise, would characteristically do in the circumstances.
        </p>
      </Definition>

      <Example title="the doctrine of double effect">
        <p>
          Foot discussed an old principle, going back to Thomas Aquinas: it can be permissible to bring about a harm as a
          foreseen side effect of a good act when it would be wrong to bring about the same harm as a means. Turning the tram,
          the death of the one is a side effect: if he could somehow escape, so much the better. Pushing the stranger, his
          death, or at least his body in the way, is the very means by which the five are saved.
        </p>
      </Example>

      <Remark title="how cases test theories">
        <p>
          The surgeon case is a counterexample to the simplest consequentialism, which seems to recommend the killing.
          Consequentialists reply in two ways: by counting more consequences, such as the terror of a world in which hospitals
          are dangerous, or by &ldquo;biting the bullet&rdquo; and saying our intuition is wrong. The other theories face
          awkward cases of their own: Kant held that one may not lie even to a murderer asking where your friend is hiding, and
          virtue ethics is often said to give too little guidance in hard cases.
        </p>
      </Remark>

      <Remark title="intuitions as evidence">
        <p>
          Should cases decide between theories at all? Some psychologists argue that our reluctance to push is a gut reaction
          to physical violence, and tells us little about right and wrong. Others reply that every ethical theory rests on
          some judgements, and the method of adjusting principles and cases against each other until they fit, which John
          Rawls called <strong>reflective equilibrium</strong>, is the best we have.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which-theory",
      rung: "check",
      prompt: <p>&ldquo;Never treat a person merely as a means&rdquo; is a principle of&hellip;</p>,
      answer: { kind: "choice", options: ["utilitarianism", "Kantian ethics", "ethical egoism", "virtue ethics"], correct: [1] },
    },
    {
      key: "virtue-q",
      rung: "check",
      prompt: <p>Which question does virtue ethics ask first?</p>,
      answer: {
        kind: "choice",
        options: [
          "Which act produces the most happiness?",
          "What kind of person should I be?",
          "Which rule could everyone follow?",
          "What does the law say?",
        ],
        correct: [1],
      },
    },
    {
      key: "same-numbers",
      rung: "apply",
      prompt: <p>Why does the simplest consequentialism give the same verdict in the switch and footbridge cases?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because both involve trams.",
          "Because in both cases one dies and five live, and only outcomes count.",
          "Because in both cases you touch the victim.",
          "Because both are imaginary.",
        ],
        correct: [1],
      },
    },
    {
      key: "double-effect",
      rung: "apply",
      prompt: <p>According to the doctrine of double effect, in which case is the one person&rsquo;s death used as a means?</p>,
      answer: { kind: "choice", options: ["the switch", "the footbridge", "both", "neither"], correct: [1] },
    },
    {
      key: "bite",
      rung: "apply",
      prompt: <p>A consequentialist who says &ldquo;our intuition about the surgeon is simply mistaken&rdquo; is&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "biting the bullet.",
          "using the doctrine of double effect.",
          "giving up consequentialism.",
          "appealing to virtue.",
        ],
        correct: [0],
      },
    },
    {
      key: "surgeon",
      rung: "prove",
      prompt: (
        <p>
          Explain why the surgeon case looks like a counterexample to act-consequentialism. Then give the best consequentialist
          reply you can, and assess it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States act-consequentialism and why it seems to permit the killing.",
          "Notes the strength of the opposing judgement.",
          "Presents a reply, such as the wider consequences of such practices, or biting the bullet.",
          "Assesses whether the reply succeeds.",
        ],
      },
    },
    {
      key: "difference",
      rung: "stretch",
      prompt: (
        <p>
          Many people would pull the lever but not push the stranger. Is there a morally relevant difference between the two
          cases, or is our reaction to the footbridge a mistake? Defend your answer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Describes both cases accurately.",
          "Considers a proposed difference, such as means versus side effect, or using a person.",
          "Considers the view that the reaction is an unreliable gut response.",
          "Reaches a reasoned conclusion.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the switch and footbridge cases, and how consequentialism, Kantian ethics and virtue ethics each deal with them.",

  glimpse: (
    <p>
      Ethics asks how to live well with others; the next lesson asks whether life as a whole has a point. Each of the three
      theories gets a full chapter in Introduction to Ethics, and the trolley cases return in Moral Philosophy, where
      consequentialism is refined to meet them.
    </p>
  ),
};
