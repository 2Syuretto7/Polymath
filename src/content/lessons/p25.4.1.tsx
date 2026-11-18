import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FairnessTradeViz } from "@/components/viz/FairnessTradeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p25.4.1",
  minutes: 90,
  links: {
    revisits: ["p25.3.2", "p13.4.3", "p5.3.2"],
    foreshadows: ["p25.4.2", "p25.4.3", "p30.4.1"],
  },

  puzzle: (
    <>
      <p>
        A court uses software to score defendants by their risk of reoffending. Journalists find that among people who did
        not reoffend, one group was flagged as high risk far more often. The makers reply that a given score means the same
        risk in every group. Both claims are true. Is the software fair?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Two invented groups are scored by the same calibrated tool. Move the threshold and watch the error rates.
      </p>
      <FairnessTradeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="algorithmic fairness">
        <p>
          In 2016, ProPublica reported that, among defendants who did not reoffend, the COMPAS risk tool had flagged Black defendants as high risk at nearly
          twice the rate of white defendants. Its makers showed the scores were <strong>calibrated</strong>: equal scores meant
          equal rates of reoffending. Alexandra Chouldechova, and independently Jon Kleinberg, Sendhil Mullainathan and Manish
          Raghavan, proved that when base rates differ, these fairness criteria cannot all hold together. So choosing a
          measure of fairness is a moral choice, not a technical one.
        </p>
      </Definition>

      <Definition title="the responsibility gap">
        <p>
          Andreas Matthias argued that systems which learn and act in ways their makers cannot predict create a{" "}
          <strong>responsibility gap</strong>: when they cause harm, no one seems fully to blame. Robert Sparrow pressed this
          against autonomous weapons. If a machine selects and kills a target in error, the programmer could not foresee it,
          the commander did not choose it, and the machine cannot be punished.
        </p>
      </Definition>

      <Example title="opacity and explanation">
        <p>
          Many models are opaque: even their designers cannot say why a given output was produced. If a loan or a parole
          decision affects someone, many hold that they are owed reasons they can understand and contest. Europe&rsquo;s data
          protection law includes rights about automated decisions, though how far it gives a &lsquo;right to an
          explanation&rsquo; is disputed.
        </p>
      </Example>

      <Example title="alignment and moral status">
        <p>
          Stuart Russell argues that a powerful system given a fixed objective will pursue it in ways we did not intend, so
          machines should be built to be uncertain about what we want and to defer to us. A further question is whether an
          AI could itself be a moral patient. If it could suffer or have interests, the views of moral status met with animals
          would apply to it too.
        </p>
      </Example>

      <Remark title="old questions in new forms">
        <p>
          Most questions about AI are familiar ones: fairness between groups, moral luck and blame, treating people as ends,
          and who counts morally. What is new is scale, speed, and the difficulty of seeing inside the decision.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "calib",
      rung: "check",
      prompt: <p>What does it mean for a risk score to be calibrated across groups?</p>,
      answer: { kind: "choice", options: ["A given score carries the same actual risk in every group", "Every group has the same average score", "Every group has the same false positive rate", "The score ignores group membership"], correct: [0] },
    },
    {
      key: "gap",
      rung: "check",
      prompt: <p>What is the responsibility gap?</p>,
      answer: { kind: "choice", options: ["Harm caused by a learning system for which no one seems fully to blame", "The time between a crime and its trial", "The gap between rich and poor countries in technology", "A gap in a neural network"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with one threshold at 6, which group has the higher false positive rate?</p>,
      answer: { kind: "choice", options: ["Group A, which has the higher base rate", "Group B", "They are equal", "Neither has false positives"], correct: [0] },
    },
    {
      key: "imp",
      rung: "apply",
      prompt: <p>What does the impossibility result of Chouldechova and Kleinberg and colleagues show?</p>,
      answer: { kind: "choice", options: ["With different base rates, calibration and equal error rates cannot all hold for an imperfect predictor", "Algorithms are always biased against minorities", "Fairness can always be achieved with more data", "Risk scores are never calibrated"], correct: [0] },
    },
    {
      key: "russell",
      rung: "apply",
      prompt: <p>What does Stuart Russell propose to make powerful AI safe?</p>,
      answer: { kind: "choice", options: ["Machines uncertain about human preferences, which defer to us", "Machines with fixed, precise objectives", "Banning all AI research", "Giving machines legal personhood"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Was the risk tool in the puzzle unfair? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes calibration from equal error rates.",
          "Considers why the base rates differ, or what each kind of error costs the people affected.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should we ever let a machine make a decision that no human can explain?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Weighs accuracy against the value of explanation or contestability.",
          "Considers a case, such as medicine, credit or criminal justice.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Medicine can now edit genes, sharpen attention with drugs and may one day slow ageing. If we can make people healthier
        than normal, or smarter, should we?
      </p>
      <p>Next, bioethics and enhancement.</p>
    </>
  ),
};
