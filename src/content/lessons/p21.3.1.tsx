import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EmptinessUseViz } from "@/components/viz/EmptinessUseViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p21.3.1",
  minutes: 80,
  links: {
    revisits: ["p21.1.1", "p21.2.2", "p0.2.1"],
    foreshadows: ["p21.3.2", "p21.5.1", "p21.5.2"],
  },

  puzzle: (
    <>
      <p>
        Water is the softest of things, yet over time it wears away stone. The valley is low and empty, yet everything flows
        into it. What if strength, success and good government came not from striving and adding, but from yielding,
        emptying and doing less?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Fill in the empty spaces of a wheel, a pot and a room, and see what becomes of their use.</p>
      <EmptinessUseViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the text">
        <p>
          The <em>Daodejing</em>, &lsquo;the classic of the way and its power&rsquo;, is traditionally ascribed to Laozi, an
          older contemporary of Confucius about whom almost nothing is known. Most scholars see it as compiled over time; the
          earliest manuscripts, bamboo slips from Guodian, date from around 300 BCE. Its eighty-one short chapters are
          poetic, paradoxical and open to many readings.
        </p>
      </Definition>

      <Example title="the dao that cannot be named">
        <p>
          It opens: &ldquo;The dao that can be spoken of is not the constant dao; the name that can be named is not the
          constant name.&rdquo; <strong>Dao</strong>, the way, is the source and pattern of all things, prior to the
          distinctions of language. Naming divides: beautiful from ugly, long from short. Such opposites depend on each other,
          and &lsquo;reversal is the movement of the dao&rsquo; (40): what goes to an extreme turns back.
        </p>
      </Example>

      <Definition title="wuwei">
        <p>
          The sage practises <strong>wuwei</strong>, non-action or effortless action: acting without forcing, like water,
          which benefits all things without contending (8). The ideal ruler governs lightly, so that the people say &lsquo;it
          happened of itself&rsquo; (ziran). &ldquo;Govern a large state as you would cook a small fish&rdquo; (60): without
          stirring too much.
        </p>
      </Definition>

      <Remark title="against Confucian virtue">
        <p>
          &ldquo;When the great dao is abandoned, there are humaneness and rightness&rdquo; (18). For the Daodejing, the
          Confucian virtues are symptoms of a lost spontaneity, and preaching them makes things worse. Readers have found in
          the text a mystical metaphysics, a political strategy, and a practical ethics of simplicity and restraint.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "open",
      rung: "check",
      prompt: <p>How does the Daodejing begin?</p>,
      answer: { kind: "choice", options: ["The dao that can be spoken of is not the constant dao", "Love others", "Correct the names", "Care for all impartially"], correct: [0] },
    },
    {
      key: "wuwei",
      rung: "check",
      prompt: <p>What is wuwei?</p>,
      answer: { kind: "choice", options: ["Non-action or effortless action, acting without forcing", "Doing nothing at all, ever", "Strict ritual practice", "Military strategy"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many spokes share the hub of the wheel?</p>,
      answer: { kind: "numeric", value: 30 },
    },
    {
      key: "empty",
      rung: "apply",
      prompt: <p>According to chapter 11, where does the use of a vessel lie?</p>,
      answer: { kind: "choice", options: ["In its empty space", "In the clay", "In its decoration", "In its maker"], correct: [0] },
    },
    {
      key: "virtue",
      rung: "apply",
      prompt: <p>How does the Daodejing view Confucian humaneness and rightness?</p>,
      answer: { kind: "choice", options: ["As signs that the great dao has been abandoned", "As the highest goods", "As the dao itself", "As useful rituals"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a government do better by doing less? Argue briefly, using the Daodejing.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Daodejing’s view of wuwei and light government, using an image such as the small fish.",
          "Raises an objection or a limit, such as problems that need active government.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If the dao cannot be named, how can a book about it be written? Discuss.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the opening claim about the unnameable dao.",
          "Considers a reply, such as that the text points rather than describes, or uses paradox deliberately.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The Daodejing speaks mostly to rulers. The other great Daoist classic speaks to anyone, with stories of butchers,
        cicadas and a philosopher who dreamt he was a butterfly.
      </p>
      <p>
        Next, the Zhuangzi: the equality of perspectives, the butterfly dream, the skill of Cook Ding, and a cheerful
        scepticism about every fixed standpoint.
      </p>
    </>
  ),
};
