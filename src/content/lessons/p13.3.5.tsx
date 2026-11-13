import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["robust realism", "Kantian constructivism", "Humean constructivism"];
const CASES = ["the Euthyphro question", "the Darwinian dilemma", "the coherent Caligula", "moral objectivity"];
const V: CaseVerdict[][] = [
  [
    { ok: true, why: "Reasons are not made by us: we judge cruelty wrong because it is wrong. But the realist then owes an account of how we track such facts." },
    { ok: false, why: "Sharon Street: evolution shaped our evaluative attitudes for survival, not truth. Either those attitudes track mind-independent values by luck, or realists must claim selection tracked them, which is a poor explanation." },
    { ok: true, why: "Someone who coherently values torture for its own sake is simply mistaken, missing reasons that are there whether or not they care." },
    { ok: true, why: "Moral truths hold for everyone regardless of their attitudes, which is what objectivity means." },
  ],
  [
    { ok: true, why: "Wrongness is constituted by what any rational agent, reflecting on their own agency, must accept. So it is neither arbitrary nor independent of rational will." },
    { ok: true, why: "Moral truths are fixed by the standpoint of practical reason itself, so we need no lucky match between evolved attitudes and independent facts." },
    { ok: true, why: "Christine Korsgaard argues that valuing anything commits you to valuing your own humanity, and so humanity in others. Caligula is not coherent after all, though whether the argument works is disputed." },
    { ok: true, why: "Every rational agent is bound, whatever their particular desires. This is objectivity built from reason rather than found." },
  ],
  [
    { ok: true, why: "Value is conferred by the attitudes of valuing creatures; there is nothing more to it, so the dilemma’s horn about arbitrariness is accepted." },
    { ok: true, why: "Street’s own view: if values are constructed from our attitudes, evolution shaping our attitudes poses no sceptical threat." },
    { ok: false, why: "Street accepts that an ideally coherent Caligula, who values torture, has reason to torture by his own lights. Many find this too high a price." },
    { ok: false, why: "Moral truths are relative to the starting attitudes of each agent, so they may not bind everyone alike." },
  ],
];

export const lesson: LessonContent = {
  id: "p13.3.5",
  minutes: 80,
  links: {
    revisits: ["p13.3.4", "p13.1.2", "p13.1.3"],
    foreshadows: ["p30.3.2", "p30.3.3", "p30.4.2"],
  },

  puzzle: (
    <>
      <p>
        The rules of cricket are not discovered in nature, yet it is objectively true that a batter is out when caught. They
        were made, and still bind. Perhaps moral truths are like this: not found in the world like mountains, nor mere
        feelings, but built by a procedure. Which procedure, and could the result still deserve to be called objective?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test robust realism and two kinds of constructivism. Click a cell to see the verdict and the reason.</p>
      <CaseMatrixViz
        theories={THEORIES}
        cases={CASES}
        verdicts={V}
        prompt="Does the view handle the challenge well?"
        caption="Each verdict here is the subject of a live debate. Notice the trade-off: constructivism answers sceptical worries more easily, but its objectivity depends on how much rational agency alone can deliver."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="constructivism">
        <p>
          Moral truths are fixed by what would be agreed to, or endorsed, from a suitably specified practical standpoint,
          rather than by facts independent of all such standpoints. There are moral truths, as realists say, but they are
          constituted by a procedure of practical reasoning, not discovered.
        </p>
      </Definition>

      <Example title="Rawls and Scanlon">
        <p>
          John Rawls called his theory of justice Kantian constructivism: principles of justice are those that free and equal
          persons would choose behind a veil of ignorance. Scanlon&rsquo;s contractualism has the same shape: an act is wrong
          if any principle permitting it could reasonably be rejected. Both restrict the procedure to some area of morality.
        </p>
      </Example>

      <Definition title="metaethical constructivism">
        <p>
          The general view applies the idea to all normative truth. For Korsgaard, the source of normativity is reflective
          endorsement: what a rational agent must endorse on reflection, given that they act at all. For Street, a normative
          claim is true for an agent when it follows from that agent&rsquo;s own evaluative attitudes, made fully coherent.
        </p>
      </Definition>

      <Remark title="the Darwinian dilemma">
        <p>
          Street argued that natural selection has deeply shaped our evaluative attitudes. If values are independent of those
          attitudes, the match between them would be a coincidence, and realism leads to scepticism. If values depend on our
          attitudes, there is no puzzle. So, she argued, realists should become constructivists.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does constructivism say about moral truths?</p>,
      answer: {
        kind: "choice",
        options: [
          "There are none.",
          "They are constituted by what would be endorsed from a specified practical standpoint.",
          "They are non-natural facts we discover by intuition.",
          "They merely express feelings.",
        ],
        correct: [1],
      },
    },
    {
      key: "rawls",
      rung: "check",
      prompt: <p>Which philosopher called his theory of justice Kantian constructivism?</p>,
      answer: { kind: "choice", options: ["John Rawls", "J. L. Mackie", "G. E. Moore", "A. J. Ayer"], correct: [0] },
    },
    {
      key: "darwin",
      rung: "apply",
      prompt: <p>What is the point of Street&rsquo;s Darwinian dilemma?</p>,
      answer: {
        kind: "choice",
        options: [
          "Evolution proves that morality is false.",
          "If values are independent of our evolved attitudes, the match between them would be a coincidence, so realism leads to scepticism.",
          "Morality is only about survival.",
          "Animals have moral rights.",
        ],
        correct: [1],
      },
    },
    {
      key: "caligula",
      rung: "apply",
      prompt: <p>Why is the ideally coherent Caligula a problem for Humean constructivism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because he does not exist.",
          "Because if his attitudes are fully coherent, the view says he has reason to torture, which seems wrong.",
          "Because he is a realist.",
          "Because he follows Kant.",
        ],
        correct: [1],
      },
    },
    {
      key: "vs",
      rung: "apply",
      prompt: <p>How does constructivism differ from error theory?</p>,
      answer: {
        kind: "choice",
        options: [
          "Constructivism says some moral claims are true; error theory says none are.",
          "They do not differ.",
          "Error theory says moral truths are constructed.",
          "Constructivism denies that moral claims can be true or false.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a constructivist account of morality be objective? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what objectivity would require, such as binding all agents regardless of their desires.",
          "Considers Kantian and Humean constructivism, or one of them, against this standard.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the Darwinian dilemma also threaten our beliefs in mathematics? If not, what makes the moral case different?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that evolution may have shaped mathematical beliefs too, such as basic arithmetic.",
          "Considers a difference, such as that true arithmetic beliefs are useful because they are true, while moral beliefs may be useful whether or not they are true.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what constructivism says about moral truth, the difference between Kantian and Humean constructivism, and Street's Darwinian dilemma against realism.",

  glimpse: (
    <p>
      This completes the survey of metaethical views. The next part asks how moral reasons relate to motivation. Graduate
      metaethics returns to robust realism, companions in guilt and moral disagreement.
    </p>
  ),
};
