import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PearlWaterViz } from "@/components/viz/PearlWaterViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p21.5.2",
  minutes: 85,
  links: {
    revisits: ["p21.4.1", "p21.4.2", "p21.3.1"],
    foreshadows: ["p21.5.3", "p13.3.4", "p22.1.1"],
  },

  puzzle: (
    <>
      <p>
        Mencius said human nature is good; Xunzi said it is bad. If Mencius is right, where does evil come from? If Xunzi is
        right, where does the impulse to reform come from? Could both be partly right, if &lsquo;nature&rsquo; means two
        different things?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Four people hold the same pearl in water of different clarity. Help each investigate things.</p>
      <PearlWaterViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Neo-Confucianism">
        <p>
          For centuries after the Han, Buddhism and Daoism offered Chinese thinkers a metaphysics that Confucianism seemed to
          lack. In the Song dynasty, Zhou Dunyi, Zhang Zai, and the brothers Cheng Hao and Cheng Yi built a Confucian answer,
          and <strong>Zhu Xi</strong> (1130&ndash;1200) synthesised it. He grouped the <em>Analects</em>, the{" "}
          <em>Mencius</em>, the <em>Great Learning</em> and the <em>Doctrine of the Mean</em> as the Four Books, with his
          commentaries; from 1313 to 1905 they were the basis of the civil service examinations.
        </p>
      </Definition>

      <Definition title="principle and vital stuff">
        <p>
          Every thing is made of <strong>qi</strong>, vital stuff or energy, and has <strong>li</strong>, principle or
          pattern, which makes it the kind of thing it is and sets how it ought to be. The sum of all principle is the{" "}
          <strong>Supreme Ultimate</strong> (taiji), and each thing contains the whole of it, as one moon is reflected
          whole in ten thousand streams.
        </p>
      </Definition>

      <Example title="nature and evil">
        <p>
          Following Cheng Yi, Zhu Xi says human nature is principle, and principle is wholly good: Mencius was right. But each
          person&rsquo;s principle is housed in qi of some clarity or turbidity. Nature is like a pearl, qi like water:
          in clear water the pearl shines, in muddy water it is hidden. Evil comes from turbid qi and the selfish desires it
          breeds, which explains the facts Xunzi saw without denying that nature is good.
        </p>
      </Example>

      <Remark title="the investigation of things">
        <p>
          The <em>Great Learning</em> begins self-cultivation with &lsquo;the investigation of things&rsquo; (gewu) and
          &lsquo;the extension of knowledge&rsquo;. For Zhu Xi this means studying the principle in things, in the classics,
          history, human affairs and nature, one after another, with reverent attention (jing). After long effort, he wrote,
          one day there comes a sudden breakthrough, and everything is seen to connect. In order, knowledge comes first; in
          weight, action matters more.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "liqi",
      rung: "check",
      prompt: <p>What two aspects does every thing have, for Zhu Xi?</p>,
      answer: { kind: "choice", options: ["Principle (li) and vital stuff (qi)", "Yin and yang only", "Form and emptiness", "Name and reality"], correct: [0] },
    },
    {
      key: "evil",
      rung: "check",
      prompt: <p>Where does evil come from, according to Zhu Xi?</p>,
      answer: { kind: "choice", options: ["Turbid qi obscuring a nature that is good", "A bad human nature", "Heaven’s punishment", "Ritual"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what differs between the sage and the dull person?</p>,
      answer: { kind: "choice", options: ["Only the clarity of the water; the pearl is the same", "The size of the pearl", "Whether there is a pearl at all", "The shape of the vessel"], correct: [0] },
    },
    {
      key: "moon",
      rung: "apply",
      prompt: <p>What does the image of one moon reflected in ten thousand streams illustrate?</p>,
      answer: { kind: "choice", options: ["Each thing contains the whole Supreme Ultimate", "Things are illusions", "There are many principles in competition", "Water is the first element"], correct: [0] },
    },
    {
      key: "books",
      rung: "apply",
      prompt: <p>Which of these is not one of Zhu Xi&rsquo;s Four Books?</p>,
      answer: { kind: "choice", options: ["The Daodejing", "The Analects", "The Mencius", "The Great Learning"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Zhu Xi&rsquo;s theory of principle and vital stuff successfully reconcile Mencius and Xunzi? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how nature as principle is good while turbid qi explains bad conduct.",
          "Considers an objection, such as that this just relocates the problem to qi, or that Xunzi meant something different by nature.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Zhu Xi held that principle is in every thing, even a blade of grass. Could studying natural things make someone morally better?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that for Zhu Xi the same principle orders nature and morality, so understanding one illuminates the other.",
          "Considers the doubt that knowing facts about nature does not change character.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Zhu Xi&rsquo;s method sent students outward, to things and books. A young official who took it literally sat before
        a clump of bamboo for seven days, and fell ill.
      </p>
      <p>
        Next, Wang Yangming: the mind is principle, the unity of knowing and acting, innate knowing, and the challenge he
        posed to Zhu Xi&rsquo;s orthodoxy.
      </p>
    </>
  ),
};
