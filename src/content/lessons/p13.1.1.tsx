import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { GivingViz } from "@/components/viz/GivingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p13.1.1",
  minutes: 80,
  links: {
    revisits: ["p5.2.1", "p5.2.3", "p9.5.3"],
    foreshadows: ["p13.1.2", "p13.5.4", "p25.3.1"],
  },

  puzzle: (
    <>
      <p>
        Peter Singer asked: if you would wade into a pond to save a drowning child, ruining your clothes, why not give the
        cost of those clothes to save a child far away? Following that thought, consequentialism seems to ask you to give
        until you are almost as poor as those you help. Can a theory that demands so much be right?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move the amount you give and compare the maximising and satisficing answers.</p>
      <GivingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="consequentialism">
        <p>
          The rightness of an act depends only on its consequences. Classical utilitarianism adds that the good is welfare,
          that it is summed impartially, and that the right act <strong>maximises</strong> it. Contemporary consequentialists
          vary each of these parts.
        </p>
      </Definition>

      <Example title="refinements">
        <p>
          <strong>Satisficing</strong> consequentialism (Michael Slote) requires outcomes that are good enough, not the best.{" "}
          <strong>Scalar</strong> consequentialism (Alastair Norcross) drops right and wrong as all or nothing, and says only
          that acts are better or worse. <strong>Rule</strong> consequentialism (Brad Hooker) judges acts by rules whose
          general acceptance would be best. <strong>Prioritarianism</strong> gives extra weight to benefits for the worse off.
        </p>
      </Example>

      <Remark title="sophisticated consequentialism">
        <p>
          Peter Railton (1984) distinguished the criterion of rightness from the decision procedure. Consequentialism can say
          that the best outcomes come from people who love their friends and keep promises without calculating. A
          sophisticated consequentialist acts from these commitments, and would revise them only if they stopped doing good.
          This answers the objection that consequentialists cannot have real friendships.
        </p>
      </Remark>

      <Remark title="objections that remain">
        <p>
          Besides demandingness, critics press the separateness of persons: summing welfare treats one person&rsquo;s loss as
          made up by another&rsquo;s gain, as Rawls objected. And consequentialism seems to allow harming one to benefit many,
          as in the transplant case, unless agent-relative constraints are added, at which point some ask whether the theory
          is still consequentialist.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the core claim of consequentialism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Rightness depends only on consequences.",
          "Rightness depends on intentions.",
          "Rightness depends on rules given by God.",
          "There is no right or wrong.",
        ],
        correct: [0],
      },
    },
    {
      key: "sat",
      rung: "check",
      prompt: <p>What does satisficing consequentialism require?</p>,
      answer: { kind: "choice", options: ["The best outcome", "A good enough outcome", "No outcome", "Following rules"], correct: [1] },
    },
    {
      key: "opt",
      rung: "apply",
      prompt: <p>In the viz, how much of your 100 units does maximising consequentialism ask you to give?</p>,
      answer: { kind: "numeric", value: 90, tolerance: 1 },
    },
    {
      key: "railton",
      rung: "apply",
      prompt: <p>What distinction did Railton draw?</p>,
      answer: {
        kind: "choice",
        options: [
          "Between acts and rules.",
          "Between the criterion of rightness and the decision procedure.",
          "Between pleasure and happiness.",
          "Between duty and virtue.",
        ],
        correct: [1],
      },
    },
    {
      key: "prior",
      rung: "apply",
      prompt: <p>Which view gives extra weight to benefits for the worse off?</p>,
      answer: { kind: "choice", options: ["Prioritarianism", "Egoism", "Scalar consequentialism", "Rule consequentialism"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the demandingness of consequentialism an objection to it? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States why maximising consequentialism is demanding.",
          "Considers a reply, such as satisficing, or biting the bullet as Singer does.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a consequentialist be a good friend? Use Railton&rsquo;s distinction.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the worry about calculating friendship.",
          "Applies the distinction between criterion and decision procedure.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what consequentialism claims, the demandingness objection with Singer's pond, the satisficing, scalar, rule and prioritarian refinements, and Railton's sophisticated consequentialism.",

  glimpse: (
    <p>
      The next lessons develop rival theories: contemporary Kantian ethics, Scanlon&rsquo;s contractualism and virtue ethics.
      Demandingness returns in its own lesson, and in the ethics of global poverty.
    </p>
  ),
};
