import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { OxMountainViz } from "@/components/viz/OxMountainViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p21.4.2",
  minutes: 80,
  links: {
    revisits: ["p21.4.1", "p21.1.2", "p5.4.3"],
    foreshadows: ["p21.5.1", "p21.5.2", "p21.5.3"],
  },

  puzzle: (
    <>
      <p>
        A king watches an ox being led to slaughter for a ritual. It trembles, and he cannot bear it: he orders a sheep
        used instead. Yet the same king taxes his people into hunger and sends them to war. If he can feel for an ox, why
        not for them? And how could he learn to?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Cut and graze Ox Mountain, rest it, and see what is left.</p>
      <OxMountainViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Ox Mountain">
        <p>
          Mencius (6A8) describes Ox Mountain, once covered in trees. Axes cut them down; when sprouts grew back in the night
          rain, cattle and sheep grazed them. People seeing the bare slopes suppose it never had trees, &lsquo;but how could
          that be the nature of the mountain?&rsquo; So with people: the &lsquo;night air&rsquo; restores the sprouts of
          goodness, but daily misconduct destroys them again.
        </p>
      </Definition>

      <Example title="extension: the king and the ox">
        <p>
          In 1A7 Mencius tells King Xuan of Qi that his pity for the ox shows he has what it takes to be a true king. He
          should <strong>extend</strong> (tui) that feeling: &lsquo;treat your own elders as elders, and extend it to the
          elders of others&rsquo;. Moral growth is not acquiring a new feeling but noticing the one you have and carrying it
          to relevantly similar cases.
        </p>
      </Example>

      <Definition title="the farmer of Song">
        <p>
          A farmer of Song, worried his crops grew too slowly, went out and pulled on each sprout, and came home saying he had
          helped them grow; his son ran out to find them withered (2A2). Cultivation must avoid both neglect and forcing:
          weed, water, and wait.
        </p>
      </Definition>

      <Remark title="Xunzi's programme">
        <p>
          Xunzi&rsquo;s first chapter, &lsquo;Encouraging learning&rsquo;, opens: &lsquo;Learning must never stop. Blue comes
          from the indigo plant, yet is bluer than it.&rsquo; Since nature is bad, cultivation means long study of the
          classics, practice of ritual, and the guidance of a teacher, which reshape desires rather than uncover hidden
          goodness. Scholars call these the development and the re-formation models of moral growth.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ox",
      rung: "check",
      prompt: <p>What does Ox Mountain&rsquo;s bareness show, according to Mencius?</p>,
      answer: { kind: "choice", options: ["Not its nature, but the effect of repeated cutting and grazing", "That it never had trees", "That trees are bad", "That mountains have no nature"], correct: [0] },
    },
    {
      key: "tui",
      rung: "check",
      prompt: <p>What did Mencius urge King Xuan to do with his pity for the ox?</p>,
      answer: { kind: "choice", options: ["Extend it to his people", "Suppress it", "Spare all oxen", "Forget it"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, starting from a full mountain, how many trees remain after one day of axes and grazing?</p>,
      answer: { kind: "numeric", value: 11 },
    },
    {
      key: "song",
      rung: "apply",
      prompt: <p>What is the lesson of the farmer of Song?</p>,
      answer: { kind: "choice", options: ["Cultivation must not be forced, nor neglected", "Work harder on your crops", "Never farm", "Sprouts grow best when pulled"], correct: [0] },
    },
    {
      key: "xunzi",
      rung: "apply",
      prompt: <p>For Xunzi, what does moral cultivation mainly require?</p>,
      answer: { kind: "choice", options: ["Lifelong study, ritual practice and a teacher", "Noticing one’s inborn sprouts", "Withdrawal from society", "Doing nothing"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is moral growth more like a plant growing or wood being shaped? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Mencius’s development model, using Ox Mountain, the sprouts or extension.",
          "States Xunzi’s re-formation model, using the warped wood or learning.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is Mencian extension, from pity for an ox to care for one&rsquo;s people, a good method of moral reasoning? Discuss.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains extension as carrying a felt response to relevantly similar cases.",
          "Considers a weakness, such as the difficulty of judging similarity, or a comparison with reasoning by principle.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Xunzi&rsquo;s most famous students drew a hard conclusion from his teaching: if people are selfish, a state should
        not rely on virtue at all, but on clear laws, rewards and punishments.
      </p>
      <p>
        Next, Han Feizi and the Legalists: law, technique and power, the ruler who rules by systems not character, and the
        Qin dynasty that put these ideas into practice.
      </p>
    </>
  ),
};
