import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["maximising consequentialism", "the fair share view", "an agent-centred prerogative"];
const CASES = ["the child in the pond", "others fail to give", "a costly life project", "giving a tenth of income"];
const V: CaseVerdict[][] = [
  [
    { ok: true, why: "Wade in: ruining your clothes is trivial against a child’s life. The verdict everyone accepts." },
    { ok: false, why: "You must make up for everyone else’s shortfall, giving until further giving would do more harm to you than good to others. Many find this unfair." },
    { ok: false, why: "Becoming a musician rather than a high earner who donates would be wrong if the donations do more good. Bernard Williams called this an attack on integrity." },
    { ok: false, why: "Far too little, if more would do more good: a tenth is merely a start." },
  ],
  [
    { ok: false, why: "Liam Murphy’s principle asks only what you would give if everyone did their part. If you alone pass the pond, your fair share of saving one child is one child, so this works; but with several children and other bystanders who do nothing, it says you may let some drown, which is hard to accept." },
    { ok: true, why: "You are required to do only your fair share, not to make up for others who shirk." },
    { ok: true, why: "If everyone gave their share, the demands on each would be modest, leaving room for a costly project." },
    { ok: true, why: "Plausibly close to a fair share of what would be needed if all the well-off gave." },
  ],
  [
    { ok: true, why: "The prerogative lets you weigh your own interests more heavily, but not so heavily that a ruined suit outweighs a child." },
    { ok: true, why: "You may give less than maximising would require, whatever others do." },
    { ok: true, why: "Samuel Scheffler: agents may give their own projects extra weight, so a costly life project can be permitted." },
    { ok: true, why: "A substantial but bounded sacrifice fits the prerogative, though it does not say exactly where the line falls." },
  ],
];

export const lesson: LessonContent = {
  id: "p13.5.4",
  minutes: 80,
  links: {
    revisits: ["p13.5.1", "p5.5.3", "p13.1.1"],
    foreshadows: ["p30.4.1", "p30.2.3", "p30.1.1"],
  },

  puzzle: (
    <>
      <p>
        If you walked past a child drowning in a shallow pond, you would wade in, even at the cost of ruining expensive clothes.
        Peter Singer argued that the money spent on such clothes could save a distant child&rsquo;s life, so we are in the same
        position every day. If he is right, morality asks for almost everything we have. Can a correct morality be that
        demanding?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test three views of beneficence against four cases. Click a cell to see the verdict and the reason.</p>
      <CaseMatrixViz
        theories={THEORIES}
        cases={CASES}
        verdicts={V}
        prompt="Does the view give a plausible verdict?"
        caption="Notice the pattern: maximising gets the pond right and the rest troubling; the moderate views ease the burden but must say exactly where the limit falls."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="the demandingness objection">
        <p>
          A moral theory is open to objection if it requires sacrifices so great that ordinary decent people could not or
          would not make them. Maximising consequentialism faces it most directly, since there is almost always something more
          one could do to improve the world.
        </p>
      </Definition>

      <Example title="Singer’s argument">
        <p>
          Suffering and death from lack of food, shelter and medicine are bad. If it is in our power to prevent something bad
          without sacrificing anything of comparable moral importance, we ought to do it. Distance and the number of others
          who could also help make no moral difference. So we ought to give much more than we do.
        </p>
      </Example>

      <Remark title="replies">
        <p>
          Some bite the bullet: morality is demanding, and our reluctance shows only our selfishness. Murphy limits duties to
          a fair share. Scheffler gives agents a prerogative to weigh their own projects more heavily. Others question whether
          the objection begs the question, since a theory&rsquo;s demands may simply be what morality requires.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the demandingness objection?</p>,
      answer: {
        kind: "choice",
        options: [
          "That a moral theory requires sacrifices too great for ordinary decent people to be obliged to make.",
          "That morality demands nothing.",
          "That people should demand more of others.",
          "That only governments have duties.",
        ],
        correct: [0],
      },
    },
    {
      key: "singer",
      rung: "check",
      prompt: <p>What does Singer say about distance?</p>,
      answer: {
        kind: "choice",
        options: [
          "It makes no moral difference to the duty to help.",
          "It removes the duty to help.",
          "It doubles the duty to help.",
          "It matters only for children.",
        ],
        correct: [0],
      },
    },
    {
      key: "fair",
      rung: "apply",
      prompt: <p>On Murphy&rsquo;s fair share view, if others fail to give, must you give more to make up the shortfall?</p>,
      answer: {
        kind: "choice",
        options: ["Yes, as much as is needed", "No, only your fair share", "Only if you are rich", "Only if you are related to them"],
        correct: [1],
      },
    },
    {
      key: "integrity",
      rung: "apply",
      prompt: <p>What did Williams mean by calling maximising consequentialism an attack on integrity?</p>,
      answer: {
        kind: "choice",
        options: [
          "That it requires one to abandon one’s deepest projects whenever doing more good requires it.",
          "That consequentialists are dishonest.",
          "That it forbids promises.",
          "That it requires lying.",
        ],
        correct: [0],
      },
    },
    {
      key: "prerog",
      rung: "apply",
      prompt: <p>What does Scheffler&rsquo;s agent-centred prerogative allow?</p>,
      answer: {
        kind: "choice",
        options: [
          "Giving one’s own interests and projects extra weight, so one need not always maximise the good.",
          "Ignoring others entirely.",
          "Harming others for one’s own benefit.",
          "Only acting on rules.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is it a good objection to a moral theory that it is very demanding? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the objection and an example of the demands, such as Singer’s argument.",
          "Considers a reply, such as biting the bullet, a fair share or a prerogative.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>With several children drowning and other bystanders doing nothing, the fair share view seems to let you stop after saving one. Is that a fatal problem for it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why the fair share view gives this verdict.",
          "Considers whether rescue cases differ from giving to charity, or whether the view can be amended.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Singer's drowning child argument, the demandingness objection to maximising consequentialism, and two moderate responses: Murphy's fair share and Scheffler's prerogative.",

  glimpse: (
    <p>
      This completes Moral Philosophy. Graduate ethics takes up acting under moral uncertainty, the ethics of populations and
      reasons as the basic notion of ethics.
    </p>
  ),
};
