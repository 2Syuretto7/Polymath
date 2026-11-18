import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { XingMingViz } from "@/components/viz/XingMingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p21.5.1",
  minutes: 80,
  links: {
    revisits: ["p21.4.2", "p21.1.3", "p5.3.4"],
    foreshadows: ["p21.5.2", "p21.5.3", "p14.1.1"],
  },

  puzzle: (
    <>
      <p>
        Confucians say a state is well ordered when its ruler is virtuous and the people follow his example. But sage
        rulers like Yao and Shun appear perhaps once in a thousand generations; most rulers are ordinary. If you were
        designing a state, would you build it to depend on the goodness of whoever happens to rule it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>A minister makes a promise. Judge the result as Han Feizi&rsquo;s ruler would, then as a Confucian would.</p>
      <XingMingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Han Feizi and the Legalists">
        <p>
          Han Fei (about 280&ndash;233 BCE) was a prince of the small state of Han. Sima Qian reports that he studied with
          Xunzi alongside Li Si, and that he stammered but wrote brilliantly. The King of Qin admired his essays; when Han
          Fei came to Qin, Li Si had him imprisoned, and he took poison. The <em>Han Feizi</em> gathers the ideas later
          called <strong>Legalist</strong> (fajia), the &lsquo;school of standards&rsquo;.
        </p>
      </Definition>

      <Definition title="law, technique and position">
        <p>
          Han Fei combined three earlier strands. <strong>Fa</strong>, law or standards, from Shang Yang: clear, public,
          impartial rules with fixed rewards and punishments. <strong>Shu</strong>, technique, from Shen Buhai: the
          ruler&rsquo;s methods for controlling officials while hiding his own likes and plans. <strong>Shi</strong>,
          position or power, from Shen Dao: authority comes from the throne, not from personal virtue, so an average ruler
          can govern well if he holds it firmly.
        </p>
      </Definition>

      <Example title="the two handles">
        <p>
          The ruler governs with two handles, punishment and reward; let a minister take hold of them and the ruler loses his
          state. He uses them by matching <strong>xing</strong>, performance, to <strong>ming</strong>, the name or claim. A
          minister who promises much and achieves little is punished, and so is one who promises little and achieves much,
          for the mismatch is the greater harm. When the Marquis of Han fell asleep drunk, the keeper of the hat covered him
          with a robe; on waking he punished the keeper of the robe for neglect, and the keeper of the hat for overstepping
          his office.
        </p>
      </Example>

      <Remark title="against the past, and the Qin">
        <p>
          In &lsquo;The Five Vermin&rsquo;, Han Fei mocks a farmer of Song who saw a hare break its neck on a tree stump and
          then waited by the stump for another: so are those who govern by the ways of the former kings. Times change, and
          Confucian scholars, with their appeals to antiquity and benevolence, are vermin of the state. Qin, governed on
          these lines, unified China in 221 BCE, burned books in 213 BCE, and collapsed in 206 BCE. Later dynasties professed
          Confucianism while keeping Legalist administration, &lsquo;Confucian outside, Legalist inside&rsquo;.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "three",
      rung: "check",
      prompt: <p>Which three ideas did Han Feizi combine?</p>,
      answer: { kind: "choice", options: ["Law, technique and position", "Humaneness, ritual and rightness", "Dao, de and wuwei", "Impartial care, heaven and fate"], correct: [0] },
    },
    {
      key: "handles",
      rung: "check",
      prompt: <p>What are the ruler&rsquo;s two handles?</p>,
      answer: { kind: "choice", options: ["Punishment and reward", "Law and ritual", "Wealth and arms", "Virtue and example"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, the minister promised 10 fields and delivered 14. What does Han Feizi&rsquo;s ruler do?</p>,
      answer: { kind: "choice", options: ["Punishes the minister, because deed and claim do not match", "Rewards the minister generously", "Promotes the minister", "Ignores the result"], correct: [0] },
    },
    {
      key: "hat",
      rung: "apply",
      prompt: <p>Why was the keeper of the hat punished?</p>,
      answer: { kind: "choice", options: ["He did another officer’s job, overstepping his own office", "He let the ruler catch cold", "He lost the hat", "He spoke against the ruler"], correct: [0] },
    },
    {
      key: "stump",
      rung: "apply",
      prompt: <p>What is the point of the farmer waiting by the tree stump?</p>,
      answer: { kind: "choice", options: ["Governing by the methods of former kings ignores changed times", "Patience brings reward", "Farmers should hunt", "Luck is the basis of good government"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Should a state rely on laws and incentives rather than on the virtue of its rulers? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Han Feizi’s case: virtue is rare and can be faked, while clear rules and incentives work with ordinary rulers and people.",
          "Considers a reply, such as Confucius’s warning that people governed by punishments avoid them but have no sense of shame, or that the Qin collapsed quickly.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Han Fei studied with Xunzi. Compare their views of human nature. Can a Legalist state make people good, or only obedient?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes both see people as self-interested by nature.",
          "Contrasts Xunzi’s hope of reshaping desires through ritual and learning with Han Fei’s reliance on reward and punishment.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        After the Han dynasty, Buddhism and Daoism dominated Chinese intellectual life for centuries. Confucians answered
        them only in the Song, with a metaphysics of their own.
      </p>
      <p>
        Next, Zhu Xi and Neo-Confucianism: principle and vital stuff, the Supreme Ultimate in every thing, the
        investigation of things, and the Four Books that shaped Chinese examinations for six hundred years.
      </p>
    </>
  ),
};
