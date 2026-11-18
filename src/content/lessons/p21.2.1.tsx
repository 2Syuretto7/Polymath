import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["precedent of the sage-kings", "what people have seen and heard", "benefit to the people"];
const ITEMS: SortItem[] = [
  { text: "The ancient sage-kings Yu and Tang cared for all the people alike; so impartial care can be practised.", cat: "precedent of the sage-kings", why: "The first standard: does the doctrine accord with the deeds of the sage-kings of old?" },
  { text: "Under Tang and Wu the world was in order; under Jie and Zhou the same people fell into chaos. So order depends on effort, not on fate.", cat: "precedent of the sage-kings", why: "Mozi argues against fatalism from history: the same people, different rulers, different outcomes." },
  { text: "Many people in many places have seen and heard ghosts and spirits; so ghosts exist.", cat: "what people have seen and heard", why: "The second standard: the evidence of the eyes and ears of the common people." },
  { text: "No one has ever seen the shape of fate or heard its sound; so there is no fate.", cat: "what people have seen and heard", why: "The same standard, used negatively against the fatalists." },
  { text: "Lavish funerals and long mourning waste wealth and leave fields untilled.", cat: "benefit to the people", why: "The third standard: does the practice benefit the state and the people? Mozi argued these customs impoverish both." },
  { text: "Offensive war destroys harvests, kills the people and gains less than it costs.", cat: "benefit to the people", why: "Mozi’s case against aggressive war turns on costs and benefits to the people." },
];

export const lesson: LessonContent = {
  id: "p21.2.1",
  minutes: 80,
  links: {
    revisits: ["p21.1.1", "p5.2.1", "p21.1.3"],
    foreshadows: ["p21.2.2", "p21.4.1", "p21.5.1"],
  },

  puzzle: (
    <>
      <p>
        A thief loves his own family, so he steals from other families. A lord loves his own state, so he attacks other
        states. Suppose every harm in the world comes from caring for one&rsquo;s own more than others. Is the cure to care
        for everyone equally, and is that even possible?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort Mohist arguments by the standard of judgement each relies on.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which of the three standards?" />
    </>
  ),

  theory: (
    <>
      <Definition title="Mozi and the Mohists">
        <p>
          Mozi (Mo Di, fifth century BCE), possibly of artisan background, founded the first organised school to rival the
          Confucians. The Mohists were a disciplined community, famous as experts in defending cities against attack. Their
          core doctrines, recorded in the <em>Mozi</em>, include impartial care, opposition to offensive war, frugality, and
          rejection of fatalism, elaborate funerals and music.
        </p>
      </Definition>

      <Example title="impartial care (jian ai)">
        <p>
          Mozi traced disorder to partiality (bie): people benefit their own families and states at others&rsquo; expense.
          The remedy is <strong>jian ai</strong>, impartial or inclusive care: regard others&rsquo; families as your own family
          and others&rsquo; states as your own state. Then who would steal or attack? He answered the charge that this is
          impractical by noting that the sage-kings practised it, and that anyone choosing a guardian for their family would
          choose an impartial person.
        </p>
      </Example>

      <Definition title="the three standards">
        <p>
          Mozi tested every doctrine by three standards (fa or biao): its basis in the deeds of the sage-kings, its source in
          what ordinary people have seen and heard, and its use, whether applying it benefits the state and the people. The
          last makes Mohism one of the earliest consequentialist ethics, judging by benefit (li) to all.
        </p>
      </Definition>

      <Remark title="Mencius's objection">
        <p>
          Mencius condemned impartial care as &lsquo;having no father&rsquo;: it denies the special bond to one&rsquo;s own
          parents, which Confucians took as the root of virtue. The Mohists replied that caring for others&rsquo; parents is
          the best way to have one&rsquo;s own parents cared for. The debate between graded love and impartial care anticipates
          modern disputes between partialist ethics and utilitarianism.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "jian",
      rung: "check",
      prompt: <p>What does jian ai, impartial care, ask?</p>,
      answer: { kind: "choice", options: ["Regard others’ families and states as your own", "Love your own family most", "Care only for the ruler", "Withdraw from society"], correct: [0] },
    },
    {
      key: "source",
      rung: "check",
      prompt: <p>Where did Mozi locate the source of disorder in the world?</p>,
      answer: { kind: "choice", options: ["In partiality: favouring one’s own over others", "In lack of ritual", "In ignorance of the dao", "In fate"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many arguments rely on benefit to the people?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "fate",
      rung: "apply",
      prompt: <p>How did Mozi argue against fatalism?</p>,
      answer: { kind: "choice", options: ["The same people were orderly under good rulers and disorderly under bad ones", "By quoting the Analects", "By appeal to the dao", "He accepted fatalism"], correct: [0] },
    },
    {
      key: "mencius",
      rung: "apply",
      prompt: <p>What was Mencius&rsquo;s main objection to impartial care?</p>,
      answer: { kind: "choice", options: ["It denies the special duties owed to one’s own parents", "It is too selfish", "It ignores the gods", "It forbids war in self-defence"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is impartial care a good ideal, or does morality require special concern for those close to us? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Mozi’s argument from the harms of partiality.",
          "States the Confucian or another objection from special relationships.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Compare Mozi with Bentham or Mill. Is Mohism a form of utilitarianism?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a likeness, such as judging by benefit to all, impartially counted.",
          "Notes a difference, such as Mozi’s benefit being order, wealth and population rather than pleasure, or his use of Heaven’s will.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Mohists argued constantly, with Confucians and with each other, and they came to study argument itself: how names fix
        on things, and when an inference that looks valid fails.
      </p>
      <p>
        Next, the Later Mohist canons: disputation (bian), kinds of names, parallel inference, and the puzzle of why
        &lsquo;robbers are people&rsquo; does not make &lsquo;killing robbers&rsquo; &lsquo;killing people&rsquo;.
      </p>
    </>
  ),
};
