import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { AggregatesViz } from "@/components/viz/AggregatesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.5.2",
  minutes: 90,
  links: {
    revisits: ["p20.5.1", "p20.1.2", "p20.4.2"],
    foreshadows: ["p20.5.3", "p20.5.4", "p20.5.5"],
  },

  puzzle: (
    <>
      <p>
        Look for yourself. You find a body, sensations, thoughts, moods, an ongoing awareness. Do you ever find, in addition,
        the one who has them? Hume said that when he entered most intimately into what he called himself, he always stumbled
        on some particular perception, never on a self. Two thousand years earlier, the Buddha had made the same search.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick an aggregate and put it to the Buddha&rsquo;s three questions.</p>
      <AggregatesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="anattā">
        <p>
          <strong>Anattā</strong> (Sanskrit anātman), not-self, is the teaching that there is no permanent, unchanging,
          independent self: no ātman of the kind the Upaniṣads identify with brahman. What we call a person is a stream of five
          aggregates (khandha): form, feeling, perception, formations and consciousness, each changing moment by moment.
        </p>
      </Definition>

      <Example title="two arguments">
        <p>
          The <strong>argument from impermanence</strong>: a self would be permanent and a source of lasting satisfaction, but
          each aggregate is impermanent and so unsatisfying; there is nothing besides them; so there is no self. The{" "}
          <strong>argument from lack of control</strong>: if form were the self, we could say &ldquo;let my body be thus, let
          it not be thus&rdquo;, and it would obey. It does not, and the same goes for the other four.
        </p>
      </Example>

      <Definition title="the chariot">
        <p>
          In the <em>Questions of King Milinda</em>, the monk Nāgasena asks the king whether his chariot is the pole, the axle,
          the wheels or the frame, or something besides them. None of these, the king admits. Yet &ldquo;chariot&rdquo; is a
          perfectly good name for the parts arranged in dependence on one another. So too &ldquo;Nāgasena&rdquo; is a
          convenient designation for the aggregates; in the ultimate sense, no person is found.
        </p>
      </Definition>

      <Remark title="responsibility and rebirth">
        <p>
          If there is no self, who is reborn, and who reaps the fruit of an action? The Buddhist answer is continuity without
          identity: a flame lit from another flame is neither the same nor different. Causal links between earlier and later
          stages are enough for karma and memory. A minority school, the Pudgalavādins, held that a person is neither the same
          as nor different from the aggregates, and was criticised for reintroducing a self. Derek Parfit, in 1984, defended a
          similar reductionism and found it consoling.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "anatta",
      rung: "check",
      prompt: <p>What does the teaching of anattā deny?</p>,
      answer: { kind: "choice", options: ["That there is a permanent, independent self", "That experiences occur", "That actions have consequences", "That people exist in any sense"], correct: [0] },
    },
    {
      key: "five",
      rung: "check",
      prompt: <p>Which of these is not one of the five aggregates?</p>,
      answer: { kind: "choice", options: ["Soul", "Feeling", "Perception", "Consciousness"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the answer to the first question for every aggregate?</p>,
      answer: { kind: "choice", options: ["It is impermanent", "It is permanent", "It is the self", "It is unknowable"], correct: [0] },
    },
    {
      key: "chariot",
      rung: "apply",
      prompt: <p>What does Nāgasena conclude from the chariot?</p>,
      answer: {
        kind: "choice",
        options: ["A name can apply conventionally to parts in relation, with no further thing besides them", "Chariots do not exist in any sense", "The chariot is its wheels", "The self is a hidden part"],
        correct: [0],
      },
    },
    {
      key: "control",
      rung: "apply",
      prompt: <p>Which argument says that if the body were the self, it would do as we wish?</p>,
      answer: { kind: "choice", options: ["The argument from lack of control", "The argument from impermanence", "The chariot", "The flame"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the argument from impermanence show there is no self? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument, including the premise that nothing exists besides the aggregates.",
          "Considers an objection, such as that a self might be an unobservable subject, or need not be permanent.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If there is no self, is it rational to care about your own future more than a stranger&rsquo;s?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers that special concern seems to rest on a persisting self.",
          "Considers a reply, such as that causal continuity still gives reasons, or that Buddhist ethics welcomes the widening of concern.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If there is no self, how do the aggregates hang together, and how does suffering keep reproducing itself? The Buddha
        answered with a principle: when this is, that comes to be; when this ceases, that ceases.
      </p>
      <p>
        Next, dependent origination: the general principle of conditionality, the twelve links from ignorance to ageing and
        death, and the middle way between eternalism and annihilationism.
      </p>
    </>
  ),
};
