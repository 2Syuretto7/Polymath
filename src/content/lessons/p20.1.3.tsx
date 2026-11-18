import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SamsaraViz } from "@/components/viz/SamsaraViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.1.3",
  minutes: 85,
  links: {
    revisits: ["p20.1.2", "p1.3.1", "p1.3.3"],
    foreshadows: ["p20.5.1", "p20.3.3", "p20.7.4"],
  },

  puzzle: (
    <>
      <p>
        Why are some people born into comfort and others into suffering, through no choice of their own? One ancient answer
        is that they did choose, in earlier lives. Is that a satisfying answer to the problem of unequal fortune, or a
        dangerous one?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a way of living and see what happens to the cycle.</p>
      <SamsaraViz />
    </>
  ),

  theory: (
    <>
      <Definition title="karma">
        <p>
          <strong>Karma</strong> first meant ritual action. In the Upaniṣads it becomes action in general, with a law of
          consequence: &ldquo;As one acts, so one becomes. Doing good, one becomes good; doing evil, one becomes evil&rdquo;
          (Bṛhadāraṇyaka 4.4.5). Action leaves traces that ripen into future experience, in this life or the next.
        </p>
      </Definition>

      <Definition title="saṃsāra and mokṣa">
        <p>
          <strong>Saṃsāra</strong>, &ldquo;wandering&rdquo;, is the beginningless cycle of birth, death and rebirth, driven by
          karma, and ultimately by desire and ignorance. <strong>Mokṣa</strong> is release from it. For the Upaniṣads, release
          comes through knowledge of the self: one who knows &ldquo;I am brahman&rdquo; has no desires that bind, and
          &ldquo;being brahman, goes to brahman&rdquo;.
        </p>
      </Definition>

      <Example title="the Gītā’s three paths">
        <p>
          In the <em>Bhagavad Gītā</em>, Arjuna refuses to fight in a just war against his kin. Kṛṣṇa answers that action
          cannot be avoided, but bondage can: act without attachment to the fruits (<strong>karma-yoga</strong>). The Gītā
          also teaches the paths of knowledge (<strong>jñāna-yoga</strong>) and devotion (<strong>bhakti-yoga</strong>). The
          tradition later counted four goals of life: dharma, artha, kāma and mokṣa.
        </p>
      </Example>

      <Remark title="karma, freedom and fairness">
        <p>
          Philosophers have pressed hard questions. If present circumstances are fixed by past action, is there room for
          free choice? Indian thinkers usually answered that karma shapes one&rsquo;s situation, not one&rsquo;s response to
          it. Is karma a just explanation of suffering, or does it blame victims? Critics, including Ambedkar, argued it was
          used to justify caste. And what carries karma between lives, if, as Buddhists hold, there is no enduring self?
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "karma",
      rung: "check",
      prompt: <p>In the Upaniṣads, what is karma?</p>,
      answer: {
        kind: "choice",
        options: ["Action, with consequences that shape what one becomes", "Fate fixed by the stars", "A god of justice", "A ritual chant"],
        correct: [0],
      },
    },
    {
      key: "moksha",
      rung: "check",
      prompt: <p>What is mokṣa?</p>,
      answer: { kind: "choice", options: ["Release from the cycle of rebirth", "A good rebirth", "Wealth", "Ritual purity"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which way of living stops the wheel?</p>,
      answer: { kind: "choice", options: ["Knowing the self", "Acting from desire", "Acting without attachment", "None of them"], correct: [0] },
    },
    {
      key: "gita",
      rung: "apply",
      prompt: <p>What does Kṛṣṇa tell Arjuna about action?</p>,
      answer: {
        kind: "choice",
        options: ["Act without attachment to its fruits", "Never act", "Act only for reward", "Act only in rituals"],
        correct: [0],
      },
    },
    {
      key: "free",
      rung: "apply",
      prompt: <p>How did Indian thinkers usually reconcile karma with free choice?</p>,
      answer: {
        kind: "choice",
        options: ["Karma shapes one’s situation, not one’s response to it", "They denied free choice", "They denied karma", "Choice is an illusion caused by karma"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is karma a good answer to the problem of why innocent people suffer? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States how karma explains suffering through past action.",
          "Raises an objection, such as unverifiability or blaming victims, or a reply to it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could someone accept karma as a claim about this life only, without rebirth? What would remain of it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes a this-life version, such as character formed by habit.",
          "Says what is lost, such as the explanation of unequal birth.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Nearly every Indian school accepted karma, rebirth and the goal of release, yet they argued fiercely about the self,
        the world, knowledge and the authority of the Vedas. They did so by a shared method of formal debate.
      </p>
      <p>
        Next, the darśanas as a system of debate: the six orthodox schools and the heterodox ones, how a text states its
        opponent&rsquo;s view before answering it, and why Indian philosophy developed a rich theory of argument.
      </p>
    </>
  ),
};
