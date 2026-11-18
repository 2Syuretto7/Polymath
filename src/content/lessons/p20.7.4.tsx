import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SatyagrahaStepsViz } from "@/components/viz/SatyagrahaStepsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.7.4",
  minutes: 85,
  links: {
    revisits: ["p20.7.2", "p20.6.1", "p20.1.3"],
    foreshadows: ["p20.7.5", "p14.5.4", "p14.6.2"],
  },

  puzzle: (
    <>
      <p>
        An empire rules a country by force. Its subjects could answer with force, or submit. Is there a third way: to refuse
        to obey, openly, accepting the punishment, and harming no one? Could suffering willingly accepted ever move the people
        inflicting it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Follow the Salt Satyagraha of 1930 from grievance to settlement.</p>
      <SatyagrahaStepsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="truth and non-violence">
        <p>
          Mohandas Karamchand Gandhi (1869&ndash;1948) built his thought on <strong>satya</strong>, truth, and{" "}
          <strong>ahiṃsā</strong>, non-violence. In 1931 he turned &lsquo;God is Truth&rsquo; into &lsquo;Truth is God&rsquo;,
          a formula even an atheist could accept. Because each of us grasps only part of the truth, a point he linked to Jaina{" "}
          anekāntavāda, no one may impose their view by violence; ahiṃsā is the means to truth.
        </p>
      </Definition>

      <Example title="satyagraha">
        <p>
          Gandhi coined <strong>satyagraha</strong>, &lsquo;holding firmly to truth&rsquo;, in South Africa around 1906. It
          differs from passive resistance: it is active, open about its aims, never hates the opponent, and seeks to convert
          rather than coerce, through the resister&rsquo;s own willingness to suffer. A satyagrahi breaks unjust laws in public
          and accepts the penalty.
        </p>
      </Example>

      <Definition title="means, ends and swaraj">
        <p>
          In <em>Hind Swaraj</em> (1909) Gandhi wrote that the means are to the end as a seed to a tree: violent means cannot
          yield a free and peaceful society. <strong>Swaraj</strong>, self-rule, meant first ruling oneself, and he attacked
          modern industrial civilisation for multiplying wants. He read the Gītā as teaching action without attachment to
          its fruits, not as a call to war.
        </p>
      </Definition>

      <Remark title="disputes">
        <p>
          Gandhi fought untouchability but long defended varṇa as a division of duties, and opposed separate electorates for
          the depressed classes, leading to his fast and the Poona Pact of 1932 with Ambedkar. Others ask whether non-violence
          works against an enemy without a conscience, and whether his rejection of modern technology can be lived. His
          influence on Martin Luther King Jr. and on movements worldwide is beyond doubt.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "satya",
      rung: "check",
      prompt: <p>What formula did Gandhi adopt in place of &lsquo;God is Truth&rsquo;?</p>,
      answer: { kind: "choice", options: ["Truth is God", "God is Love", "Truth is relative", "There is no God"], correct: [0] },
    },
    {
      key: "sg",
      rung: "check",
      prompt: <p>How does satyagraha differ from passive resistance, for Gandhi?</p>,
      answer: { kind: "choice", options: ["It is active, open, free of hatred, and seeks to convert the opponent through self-suffering", "It allows violence in self-defence", "It works in secret", "It aims to humiliate the opponent"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, in what year did the march to Dandi take place?</p>,
      answer: { kind: "numeric", value: 1930 },
    },
    {
      key: "seed",
      rung: "apply",
      prompt: <p>In Hind Swaraj, what did Gandhi compare the means and the end to?</p>,
      answer: { kind: "choice", options: ["A seed and a tree", "A road and a city", "A key and a lock", "A cause and its excuse"], correct: [0] },
    },
    {
      key: "letter",
      rung: "apply",
      prompt: <p>Why did Gandhi write to the Viceroy before the Salt March, announcing his plans?</p>,
      answer: { kind: "choice", options: ["Satyagraha must be open and give the opponent a chance to put things right", "To ask permission to march", "To threaten violence", "To mislead the authorities"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can non-violent resistance succeed against an opponent with no conscience? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Gandhi’s view that self-suffering converts the opponent, or works through public opinion.",
          "Raises an objection, such as a totalitarian regime that hides its violence, or a reply about non-cooperation making rule impossible.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is Gandhi right that good ends cannot come from bad means? Test the claim on an example.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the seed and tree image, and Gandhi’s reasons for it.",
          "Tests it against an example, such as a war of liberation or a lie that saves a life.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Gandhi&rsquo;s sharpest critic on caste was a man born into an untouchable community, who became a lawyer, an economist
        and the chief architect of India&rsquo;s constitution, and who in the end left Hinduism altogether.
      </p>
      <p>
        Next, B. R. Ambedkar as a philosopher of religion: his test for any religion, his conversion to Buddhism in 1956, and
        his radical rereading of the Buddha&rsquo;s teaching in <em>The Buddha and His Dhamma</em>.
      </p>
    </>
  ),
};
