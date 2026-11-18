import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { NatureModelsViz } from "@/components/viz/NatureModelsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p21.4.1",
  minutes: 85,
  links: {
    revisits: ["p21.1.1", "p21.2.1", "p5.4.1"],
    foreshadows: ["p21.4.2", "p21.5.1", "p21.5.2"],
  },

  puzzle: (
    <>
      <p>
        You see a small child crawling towards the edge of a well. Before any thought of reward, reputation, or the
        child&rsquo;s parents, you feel a jolt of alarm. Does that jolt show that human beings are good by nature? Or does the
        selfishness people show every day show the opposite?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare the two models of how virtue arises, and adjust the cultivation.</p>
      <NatureModelsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Mencius: nature is good">
        <p>
          Mencius (Mengzi, fourth century BCE) held that human nature (xing) is good. Against Gaozi, who compared nature to
          water that flows east or west as it is channelled, Mencius replied that water has a tendency, to flow downwards, and
          human nature tends towards goodness as water tends downwards.
        </p>
      </Definition>

      <Example title="the child at the well and the four sprouts">
        <p>
          Anyone who suddenly sees a child about to fall into a well feels alarm and compassion, not to win favour with the
          parents or praise from neighbours (2A6). Everyone has four <strong>sprouts</strong> (duan): compassion, shame,
          deference, and the sense of right and wrong. Nourished, they become humaneness, rightness, propriety and wisdom.
          Someone without them would not be human.
        </p>
      </Example>

      <Definition title="Xunzi: nature is bad">
        <p>
          Xunzi (third century BCE) wrote a chapter titled &lsquo;Human nature is bad&rsquo;. People are born with desires for
          profit and sensual pleasure, and with envy; followed, these lead to strife. Goodness is the result of{" "}
          <strong>wei</strong>, deliberate effort or artifice: the rituals and teachings created by the sages. Warped wood
          must be steamed and pressed in a frame to become straight; so too people need teachers and ritual.
        </p>
      </Definition>

      <Remark title="how deep is the disagreement?">
        <p>
          Both agree that anyone can become a sage, and that cultivation is essential. They differ on where the standards come
          from: inside us, as tendencies to be developed, or outside us, from the sages&rsquo; inventions. Later Confucian
          orthodoxy sided with Mencius, but Xunzi&rsquo;s realism about desire and institutions has many modern admirers.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "well",
      rung: "check",
      prompt: <p>What does Mencius use the child at the well to show?</p>,
      answer: { kind: "choice", options: ["That everyone has a spontaneous feeling of compassion", "That parents should watch children", "That wells are dangerous", "That people act only for reward"], correct: [0] },
    },
    {
      key: "wei",
      rung: "check",
      prompt: <p>For Xunzi, where does goodness come from?</p>,
      answer: { kind: "choice", options: ["Deliberate effort shaped by ritual and teachers", "Inborn sprouts", "Heaven’s command alone", "Natural spontaneity"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many sprouts does Mencius say every person has?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "water",
      rung: "apply",
      prompt: <p>How did Mencius answer Gaozi&rsquo;s comparison of nature to water?</p>,
      answer: { kind: "choice", options: ["Water has a tendency, downwards, as nature tends towards goodness", "Water has no direction", "Water is bad", "Nature is like fire, not water"], correct: [0] },
    },
    {
      key: "wood",
      rung: "apply",
      prompt: <p>In Xunzi&rsquo;s image, what does the press-frame for warped wood stand for?</p>,
      answer: { kind: "choice", options: ["Ritual, teachers and law", "Human desires", "Heaven", "The four sprouts"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is human nature good, bad or neither? Argue briefly, using Mencius or Xunzi.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States one thinker’s position and its key argument or image.",
          "Considers the other side, or an objection.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the child at the well show that we are good, or only that we have some good impulses? Discuss.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes having a sprout of compassion from being fully good.",
          "Considers whether Xunzi could accept the example and keep his thesis.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If the sprouts of goodness are in us, why are so many people bad? Mencius answered with a parable about a mountain,
        and a warning about a farmer who tried to help his crops grow.
      </p>
      <p>
        Next, moral cultivation: Ox Mountain, extending compassion from an ox to a kingdom, the farmer of Song, and
        Xunzi&rsquo;s programme of learning and ritual.
      </p>
    </>
  ),
};
