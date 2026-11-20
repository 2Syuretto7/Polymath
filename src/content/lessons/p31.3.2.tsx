import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ChariotViz } from "@/components/viz/ChariotViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p31.3.2",
  minutes: 90,
  links: {
    revisits: ["p31.3.1", "p12.1.1", "p12.5.5"],
    foreshadows: ["p31.4.1", "p31.4.2", "p32.2.3"],
  },

  puzzle: (
    <>
      <p>
        Every cell in your body is replaced over time, your memories fade and change, and your character at sixty is not your
        character at six. Yet you say that one person lived through all of it. What is that person, over and above the body,
        the memories and the moods? Two traditions, two thousand years apart, answered: nothing.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Try each candidate for the chariot, and see which one survives Nāgasena&rsquo;s questions.</p>
      <ChariotViz />
    </>
  ),

  theory: (
    <>
      <Definition title="anattā">
        <p>
          The Buddhist doctrine of <strong>anattā</strong>, or no-self, denies that there is a permanent, unified owner of
          experience. A person is analysed into five <strong>aggregates</strong>: bodily form, feeling, perception, mental
          formations and consciousness. Each is impermanent and none is under our full control, so none is a self, and there is
          nothing besides them. Clinging to a self that is not there is, on this teaching, a root of suffering.
        </p>
      </Definition>

      <Example title="Nāgasena’s chariot">
        <p>
          In the <em>Milindapañha</em>, King Milinda asks the monk Nāgasena his name. Nāgasena replies that
          &lsquo;Nāgasena&rsquo; is only a designation. The chariot is not the pole, the axle or the wheels, nor their heap, nor
          anything else; it is a name used in dependence on the parts. Later Buddhist thought distinguished{" "}
          <strong>conventional truth</strong>, on which there are chariots and persons, from <strong>ultimate truth</strong>, on
          which there are only momentary events in causal series.
        </p>
      </Example>

      <Definition title="the bundle theory">
        <p>
          David Hume reported in the <em>Treatise</em> that whenever he entered most intimately into what he called himself, he
          stumbled on some particular perception, of heat or cold, love or hatred, and never caught himself without one. He
          concluded that a mind is a <strong>bundle</strong> of perceptions, united by resemblance and causation, and that our
          belief in a simple, enduring self is a fiction of the imagination.
        </p>
      </Definition>

      <Remark title="Parfit and the replies">
        <p>
          Derek Parfit&rsquo;s <strong>reductionism</strong> holds that personal identity consists in nothing more than
          physical and psychological continuity, and that in cases of fission identity is not what matters. Parfit noted the
          kinship with the Buddha. Critics reply that experience has a minimal self built in: Dan Zahavi argues that every
          experience is given as mine, a first-person character no bundle explains away. Others ask who is liberated, on the
          Buddhist view, if there is no one there.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "aggr",
      rung: "check",
      prompt: <p>On the Buddhist analysis, what is a person made of?</p>,
      answer: { kind: "choice", options: ["Five aggregates, none of which is a self", "An immortal soul and a body", "A single unchanging consciousness", "Nothing at all"], correct: [0] },
    },
    {
      key: "hume",
      rung: "check",
      prompt: <p>What did Hume find when he looked inward for his self?</p>,
      answer: { kind: "choice", options: ["Only particular perceptions, never a self apart from them", "A simple, enduring self", "His brain", "Nothing whatever"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which candidate for the chariot survives Nāgasena&rsquo;s questions?</p>,
      answer: { kind: "choice", options: ["A conventional designation for the parts so arranged", "One of the parts", "All the parts heaped together", "Something besides the parts"], correct: [0] },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>What is the distinction between conventional and ultimate truth used for?</p>,
      answer: { kind: "choice", options: ["To allow talk of persons while denying they exist at the most basic level", "To separate true from false sentences", "To distinguish science from religion", "To rank texts by authority"], correct: [0] },
    },
    {
      key: "parfit",
      rung: "apply",
      prompt: <p>On Parfit&rsquo;s reductionism, what does personal identity consist in?</p>,
      answer: { kind: "choice", options: ["Physical and psychological continuity, and nothing further", "A further fact about a soul", "Memory alone, with nothing else", "Legal recognition"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does Hume&rsquo;s failure to find a self by introspection show that there is none? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Hume’s observation and the bundle conclusion.",
          "Considers an objection, such as that the self is the subject that looks, not an object to be found.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If there is no self, does it make sense to fear your own death?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the no-self or reductionist view.",
          "Considers what, if anything, would be lost at death on that view.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If a self can be a pattern rather than a thing, the question of which systems have minds becomes harder to settle by
        looking for a soul. The most pressing test case today is a machine that talks fluently.
      </p>
      <p>Next, language models and understanding.</p>
    </>
  ),
};
