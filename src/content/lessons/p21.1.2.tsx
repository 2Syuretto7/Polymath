import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { JunziChoiceViz } from "@/components/viz/JunziChoiceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p21.1.2",
  minutes: 80,
  links: {
    revisits: ["p21.1.1", "p5.4.3", "p5.4.1"],
    foreshadows: ["p21.1.3", "p21.4.2", "p21.5.2"],
  },

  puzzle: (
    <>
      <p>
        In Confucius&rsquo;s day, &lsquo;junzi&rsquo; meant &lsquo;son of a lord&rsquo;: a nobleman. Confucius used the word
        for anyone of noble character, whatever their birth. What would it take to make nobility a matter of character
        rather than family, and could anyone become noble in that sense?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>For each situation, choose how the junzi would respond.</p>
      <JunziChoiceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the junzi">
        <p>
          The <strong>junzi</strong>, often translated &lsquo;gentleman&rsquo; or &lsquo;exemplary person&rsquo;, is the
          Analects&rsquo; ideal of character. The junzi cares for what is right (<strong>yi</strong>) rather than profit, is
          harmonious without conforming, looks for faults in himself, and is at ease without arrogance. The opposite is the{" "}
          <strong>xiaoren</strong>, the small or petty person.
        </p>
      </Definition>

      <Example title="learning and self-cultivation">
        <p>
          Confucius described his own life as a progress: at fifteen he set his heart on learning, at thirty he took his stand,
          at forty he had no doubts, and at seventy he could follow his heart&rsquo;s desires without overstepping what was
          right (2.4). Becoming a junzi takes study of the classics, practice of li and constant reflection: &ldquo;Each day I
          examine myself on three points&rdquo; (1.4, said by Zengzi).
        </p>
      </Example>

      <Definition title="virtue as power">
        <p>
          The junzi rules, where he rules, by <strong>de</strong>, virtue or moral power, rather than by force or punishment:
          &ldquo;The virtue of the junzi is like the wind; the virtue of the small people is like the grass. When the wind
          blows over the grass, it must bend&rdquo; (12.19). Example, not coercion, is the means of good government.
        </p>
      </Definition>

      <Remark title="questions">
        <p>
          The ideal opened moral nobility to anyone willing to learn, and Confucius took students regardless of wealth. Yet
          the junzi of the Analects is male, and the text has little to say about women&rsquo;s cultivation. Modern Confucians
          argue the ideal can be extended; critics ask how much of it depends on the hierarchies it grew from.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "who",
      rung: "check",
      prompt: <p>What did Confucius make the word &lsquo;junzi&rsquo; mean?</p>,
      answer: { kind: "choice", options: ["A person of noble character, whatever their birth", "A nobleman by birth", "A ruler", "A scholar who passed examinations"], correct: [0] },
    },
    {
      key: "xiaoren",
      rung: "check",
      prompt: <p>Who is the xiaoren?</p>,
      answer: { kind: "choice", options: ["The petty person, who cares for profit rather than what is right", "A child", "A peasant", "A disciple"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what does the junzi do when a project fails?</p>,
      answer: { kind: "choice", options: ["Looks for the fault in himself", "Looks for someone else to blame", "Abandons the project", "Asks the ruler for help"], correct: [0] },
    },
    {
      key: "wind",
      rung: "apply",
      prompt: <p>In the image of the wind and the grass, how does the junzi influence others?</p>,
      answer: { kind: "choice", options: ["By the moral power of example", "By force", "By punishments", "By rewards"], correct: [0] },
    },
    {
      key: "harm",
      rung: "apply",
      prompt: <p>What does it mean that the junzi is harmonious but does not conform?</p>,
      answer: { kind: "choice", options: ["He works well with others while keeping his own judgement", "He agrees with everyone", "He avoids all disagreement", "He refuses to cooperate"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can good government rest on the example of virtuous rulers rather than on laws and punishments? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Confucian view of de, using the wind and the grass or a similar point.",
          "Raises an objection, such as that rulers may lack virtue, or that laws protect against them.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Compare the junzi with Aristotle&rsquo;s virtuous person. What is alike, and what differs?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a likeness, such as character formed by practice and judgement rather than rules.",
          "Notes a difference, such as the role of ritual, family or the aim of the good life.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        When a disciple asked what Confucius would do first if given charge of a state, the answer surprised him: not taxes,
        not armies, but words.
      </p>
      <p>
        Next, the rectification of names: why Confucius thought social order begins with names that fit their roles, the
        chain of consequences when they do not, and how later thinkers turned the idea into a theory of language and law.
      </p>
    </>
  ),
};
