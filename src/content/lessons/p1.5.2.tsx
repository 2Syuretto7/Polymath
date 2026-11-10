import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { SelectionViz } from "@/components/viz/SelectionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.5.2",
  minutes: 70,
  links: {
    revisits: ["p1.1.3", "p1.2.2"],
    foreshadows: ["p3.3.2", "p7.5.6", "p16.4.3", "p23.2.3"],
  },

  puzzle: (
    <>
      <Quote source={<>William Paley, <cite>Natural Theology</cite> (1802), chapter 1</>}>
        <p>
          In crossing a heath, suppose I pitched my foot against a stone, and were asked how the stone came to be there; I
          might possibly answer, that, for any thing I knew to the contrary, it had lain there for ever &hellip; But suppose I
          had found a watch upon the ground&hellip;
        </p>
      </Quote>
      <p>
        You would never say the watch had lain there forever. Its parts fit together for a purpose, to tell the time, and
        that tells you someone made it. Now look at an eye: lens, retina, iris and muscles, fitted together for seeing far
        more intricately than any watch. What should you conclude?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Paley concluded that the eye, like the watch, has a designer. This <strong>design argument</strong> has persuaded
        many people for centuries, and for an obvious reason: before 1859, no one had any other explanation of how such
        intricate fit between parts and purpose could arise.
      </p>
      <p>
        Darwin supplied one. Below, a string of random letters is copied again and again with small random errors, and each
        time only the copy that best fits is kept. No step is designed. Compare how long this takes with the chance of
        getting the phrase in a single random try.
      </p>
      <SelectionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the design argument as analogy">
        <ol>
          <li>Watches, houses and ships show parts fitted together for a purpose, and they are made by intelligent designers.</li>
          <li>Living things, and perhaps the universe, show parts fitted together for a purpose, very much more so.</li>
          <li>Like effects have like causes.</li>
          <li>So living things, and perhaps the universe, probably have an intelligent designer.</li>
        </ol>
        <p>This is an inductive argument by analogy, of the same shape as the argument for other minds.</p>
      </Definition>

      <Remark title="Hume's objections">
        <p>
          In his <cite>Dialogues Concerning Natural Religion</cite> (published 1779, three years after his death), David Hume
          had his character Philo press several objections, decades before Paley wrote:
        </p>
        <ul>
          <li><strong>The analogy is weak.</strong> The universe is not much like a watch; it is at least as like an animal or a plant, which grow without a designer.</li>
          <li><strong>One designer?</strong> Great works such as ships are usually made by many workers. Why not a committee of gods?</li>
          <li>
            <strong>What kind of designer?</strong> The world has flaws and much suffering. Perhaps, Philo suggests, it was
            &ldquo;only the first rude essay of some infant deity, who afterwards abandoned it&rdquo;.
          </li>
        </ul>
      </Remark>

      <Definition title="natural selection">
        <p>
          Charles Darwin&rsquo;s <cite>On the Origin of Species</cite> (1859) explained adaptation without a designer. Living
          things vary, the variations are inherited, and those that help survival and reproduction become more common.
          Repeated over immense spans of time, small steps accumulate into eyes and wings. The visualisation shows the key
          idea: <strong>cumulative</strong> selection turns an impossible single leap into a long series of likely small steps.
        </p>
      </Definition>

      <Example title="fine-tuning">
        <p>
          The design argument has a modern form that natural selection cannot answer, because it concerns the laws of physics
          themselves. Several physical constants, such as the strength of gravity relative to electromagnetism, seem to lie in
          narrow ranges that permit stars, chemistry and life. Defenders say this is best explained by design. Critics reply
          that we could only ever observe a universe that permits observers (the <strong>anthropic principle</strong>), or that
          there may be many universes with different constants, and we find ourselves in one of the rare habitable ones.
        </p>
      </Example>

      <Remark title="the inference to the best explanation">
        <p>
          Today the argument is usually put not as analogy but as inference to the best explanation, often in probabilistic
          terms: is the observed order more likely given design than given no design? This makes the argument depend on how
          we assign such probabilities, which is far from obvious when the hypothesis is a being unlike anything else.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kind",
      rung: "check",
      prompt: <p>Paley&rsquo;s watch argument is chiefly an argument from&hellip;</p>,
      answer: { kind: "choice", options: ["contingency", "analogy", "the meaning of 'God'", "evil"], correct: [1] },
    },
    {
      key: "infant",
      rung: "check",
      prompt: <p>Philo&rsquo;s remark about &ldquo;some infant deity&rdquo; makes which point?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the universe is perfect.",
          "That even if the world was designed, the evidence does not show a perfect designer.",
          "That God is young.",
          "That there is no universe.",
        ],
        correct: [1],
      },
    },
    {
      key: "cumulative",
      rung: "apply",
      prompt: <p>What does the visualisation show about cumulative selection?</p>,
      answer: {
        kind: "choice",
        options: [
          "That order needs a designer.",
          "That keeping small improvements step by step reaches results a single random try almost never would.",
          "That evolution has a fixed target.",
          "That chance alone produces order quickly.",
        ],
        correct: [1],
      },
    },
    {
      key: "darwin-limit",
      rung: "apply",
      prompt: <p>Which form of the design argument does natural selection not answer?</p>,
      answer: {
        kind: "choice",
        options: ["the argument from the eye", "the argument from fine-tuning of physical constants", "the argument from the wing", "Paley's watch"],
        correct: [1],
      },
    },
    {
      key: "anthropic",
      rung: "apply",
      prompt: <p>The anthropic principle replies to fine-tuning by pointing out that&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "the constants are not fine-tuned at all.",
          "we could only observe a universe that permits observers.",
          "God exists.",
          "life is impossible.",
        ],
        correct: [1],
      },
    },
    {
      key: "weak-analogy",
      rung: "prove",
      prompt: (
        <p>
          Set out the design argument as an argument from analogy in standard form. Then present Hume&rsquo;s weak-analogy
          objection and assess how much damage it does.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the premises comparing artefacts and natural things, and the conclusion of a designer.",
          "Explains that the strength of an analogy depends on how similar the cases are.",
          "Presents Hume's point that the universe resembles a growing thing as much as a machine.",
          "Gives a reasoned assessment.",
        ],
      },
    },
    {
      key: "fine-tuning",
      rung: "stretch",
      prompt: (
        <p>
          Does the fine-tuning of physical constants give good evidence of design? Consider the anthropic principle and the
          multiverse reply, and say whether either fully answers the argument.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the fine-tuning argument clearly.",
          "Explains the anthropic principle reply and its limits.",
          "Explains the multiverse reply and whether it is itself well supported.",
          "Reaches a reasoned conclusion.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Darwin's idea of cumulative selection answers Paley's watch, and why fine-tuning is harder to answer the same way.",

  glimpse: (
    <p>
      If the world shows the hand of a good designer, why does it contain so much suffering? That is the problem of evil, the
      next lesson. Analogy is studied in Critical Reasoning, Hume&rsquo;s <cite>Dialogues</cite> in Early Modern Philosophy,
      and fine-tuning in Philosophy of Religion, where Bayesian confirmation from Philosophy of Science becomes essential.
    </p>
  ),
};
