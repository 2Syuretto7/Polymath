import { Definition, Remark } from "@/components/lesson/Blocks";
import { FourCaseViz } from "@/components/viz/FourCaseViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.7.4",
  minutes: 80,
  links: {
    revisits: ["p11.7.3", "p11.7.2", "p1.3.3"],
    foreshadows: ["p13.4.3", "p13.1.1", "p12.1.1"],
  },

  puzzle: (
    <>
      <p>
        Suppose a team of scientists secretly shaped every step of someone&rsquo;s reasoning, so that they committed a murder.
        Most of us would not blame them. But how is an ordinary person, shaped by genes, upbringing and the laws of nature,
        any different? And if no one deserves blame, what happens to punishment, gratitude and love?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Judge Plum in each of Derk Pereboom&rsquo;s four cases. If your verdict changes, the argument asks where and why.</p>
      <FourCaseViz />
    </>
  ),

  theory: (
    <>
      <Definition title="hard incompatibilism">
        <p>
          Pereboom&rsquo;s <strong>hard incompatibilism</strong> holds that the free will needed for basic desert moral
          responsibility, the kind that makes someone deserve blame or praise just because of what they did, is incompatible
          with determinism, and also with the kind of indeterminism that physics may allow. So we probably lack it, whether
          determinism is true or not.
        </p>
      </Definition>

      <Remark title="the four-case argument">
        <p>
          In case 1 Plum is manipulated moment to moment, and intuitively he is not responsible, even though he meets the usual
          compatibilist conditions: he reasons, responds to reasons and acts on desires he endorses. Each later case removes
          one feature that seems irrelevant. If no step restores responsibility, then in case 4, ordinary determinism, Plum is
          not responsible either. Compatibilists reply either by taking a hard line on case 1, or by finding a relevant
          difference, such as the presence of other agents who intend the outcome.
        </p>
      </Remark>

      <Remark title="against libertarianism">
        <p>
          Event-causal libertarianism, Pereboom argues, adds only chance, which gives no more control than determinism. Agent
          causation would work if it existed, but it fits badly with what we know about the brain. So hard incompatibilism
          concludes that basic desert responsibility is probably an illusion.
        </p>
      </Remark>

      <Definition title="life without basic desert">
        <p>
          Pereboom argues that this loss is smaller than it seems. Forward-looking blame, aimed at protection, reform and
          reconciliation, survives. Criminal justice could follow a <strong>quarantine model</strong>: we may detain a
          dangerous person as we quarantine a carrier of disease, without thinking they deserve it, and so only as much as
          safety needs. Love and gratitude need not depend on desert; anger and retribution should give way.
        </p>
      </Definition>

      <Remark title="optimism and pessimism">
        <p>
          P. F. Strawson argued that our reactive attitudes, such as resentment and gratitude, are too deep to be abandoned
          because of a theory. Hard incompatibilists reply that we already moderate resentment when we learn about someone&rsquo;s
          circumstances, and that a world with less retribution might be better. Saul Smilansky defends a middle view: some
          illusion of free will may be useful.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does hard incompatibilism claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Determinism is true and we are free.",
          "The free will needed for basic desert responsibility is incompatible with both determinism and the relevant indeterminism, so we probably lack it.",
          "Only some people have free will.",
          "Free will requires agent causation, which we have.",
        ],
        correct: [1],
      },
    },
    {
      key: "desert",
      rung: "check",
      prompt: <p>What is basic desert responsibility?</p>,
      answer: {
        kind: "choice",
        options: [
          "Being blamed because it will deter others.",
          "Deserving blame or praise just because of what one did, apart from good consequences.",
          "Legal liability for damages.",
          "Being the cause of an event.",
        ],
        correct: [1],
      },
    },
    {
      key: "case1",
      rung: "apply",
      prompt: <p>What feature of case 1 makes it hard for compatibilists?</p>,
      answer: {
        kind: "choice",
        options: [
          "Plum is insane.",
          "Plum meets the usual compatibilist conditions, yet seems not responsible.",
          "Plum’s action is undetermined.",
          "Plum does not kill anyone.",
        ],
        correct: [1],
      },
    },
    {
      key: "hardline",
      rung: "apply",
      prompt: <p>What is the hard-line reply to the four-case argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "Plum is responsible even in case 1.",
          "Plum is not responsible in any case.",
          "The cases are impossible.",
          "Plum is responsible only in case 2.",
        ],
        correct: [0],
      },
    },
    {
      key: "quar",
      rung: "apply",
      prompt: <p>On the quarantine model, why may a dangerous offender be detained?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because they deserve to suffer.",
          "To protect others, as we may quarantine a carrier of disease, and only as much as safety requires.",
          "To satisfy the victims’ anger.",
          "Because they chose freely.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is there a relevant difference between Pereboom&rsquo;s case 1 and case 4? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the structure of the four-case argument.",
          "Proposes or evaluates a difference, such as the presence of manipulating agents, or argues that there is none.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "live",
      rung: "stretch",
      prompt: <p>Could we live without resentment and retributive blame? Would it be better?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers what would be lost and what kept, such as forward-looking blame, love and gratitude.",
          "Weighs Strawson’s worry that reactive attitudes cannot be given up.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend hard incompatibilism and basic desert responsibility, Pereboom’s four-case argument and the replies to it, why he rejects libertarianism too, and the quarantine model of how life and justice could go on without desert.",

  glimpse: (
    <p>
      This completes the course in metaphysics. Moral philosophy later returns to luck and responsibility, and philosophy of mind
      begins with what the mind is.
    </p>
  ),
};
