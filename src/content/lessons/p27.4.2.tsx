import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FinkViz } from "@/components/viz/FinkViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p27.4.2",
  minutes: 90,
  links: {
    revisits: ["p27.4.1", "p11.4.2", "p26.3.4"],
    foreshadows: ["p27.5.1", "p27.5.2", "p28.4.2"],
  },

  puzzle: (
    <>
      <p>
        Salt sitting dry in a jar is soluble right now, though it is not dissolving. What makes that true? Perhaps only
        that it would dissolve if put in water. Or perhaps the salt has, here and now, a real power to dissolve, which
        explains why it would.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a case and compare the two columns.</p>
      <FinkViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the conditional analysis">
        <p>
          Gilbert Ryle and Nelson Goodman analysed dispositions by conditionals. The <strong>simple conditional
          analysis</strong>: x is disposed to give response M to stimulus C if and only if x would give M if it were
          subjected to C. If true, it lets a Humean treat dispositions as nothing more than patterns of counterfactuals.
        </p>
      </Definition>

      <Example title="counterexamples">
        <ul>
          <li>Finks, from C. B. Martin (1994): a device that would remove the disposition the moment the stimulus arrives, so the conditional is false though the disposition is present. A reverse fink gives the conditional without the disposition.</li>
          <li>Masks, from Mark Johnston (1992): something that blocks the manifestation, such as packing round a fragile glass.</li>
          <li>Antidotes, from Alexander Bird (1998): a poison is still poisonous though an antidote given in time would prevent death.</li>
        </ul>
        <p>
          Lewis&rsquo;s reformed analysis (1997) adds that x has an intrinsic property B that, if x were subjected to C
          and kept B long enough, would cause M. Masks and antidotes remain difficult.
        </p>
      </Example>

      <Definition title="dispositional essentialism">
        <p>
          Bird and Stephen Mumford hold that fundamental properties are <strong>powers</strong>: their identity is fixed by
          what they dispose their bearers to do. Charge just is the power to attract and repel in certain ways. Laws then
          flow from the natures of properties and are metaphysically necessary, so there is no gap between a property and
          the law it obeys.
        </p>
      </Definition>

      <Remark title="objections">
        <p>
          Critics worry about a regress: if every property is identified by what it would produce, and that by what it
          would produce, nothing is ever simply actual. Armstrong said such a world would be &lsquo;always packing, never
          travelling&rsquo;. Categoricalists hold that fundamental properties are qualities, and that dispositions
          supervene on them together with laws.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sca",
      rung: "check",
      prompt: <p>What does the simple conditional analysis of dispositions say?</p>,
      answer: { kind: "choice", options: ["x is disposed to M when C exactly when x would M if it were C", "x is disposed to M when it is currently doing M", "Dispositions are irreducible powers", "Dispositions are laws of nature"], correct: [0] },
    },
    {
      key: "fink",
      rung: "check",
      prompt: <p>What is a fink?</p>,
      answer: { kind: "choice", options: ["Something that would remove or supply a disposition at the moment of the stimulus", "A substance that dissolves in water", "A kind of law", "A disposition with no stimulus"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what goes wrong in the dead wire with a reverse fink?</p>,
      answer: { kind: "choice", options: ["The conditional is true though the wire lacks the disposition", "The conditional is false though the wire has the disposition", "Nothing: the analysis gets it right", "The wire is both live and dead"], correct: [0] },
    },
    {
      key: "mask",
      rung: "apply",
      prompt: <p>How does a mask differ from a fink?</p>,
      answer: { kind: "choice", options: ["A mask blocks the manifestation while the disposition stays; a fink removes the disposition itself", "A mask removes the disposition; a fink blocks the manifestation", "They are the same", "A mask only applies to wires"], correct: [0] },
    },
    {
      key: "de",
      rung: "apply",
      prompt: <p>What follows about laws on dispositional essentialism?</p>,
      answer: { kind: "choice", options: ["They are metaphysically necessary, flowing from the natures of properties", "They are contingent summaries of the mosaic", "There are no laws", "Laws are decided by convention"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Can dispositions be analysed in terms of conditionals? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the simple conditional analysis.",
          "Considers at least one counterexample, such as finks, masks or antidotes, and a possible repair.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could every fundamental property be a power?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the view that fundamental properties are powers.",
          "Considers the regress objection or the categoricalist alternative.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Many debates in this course ask what exists, or what is fundamental. A last chapter asks whether such questions
        are as deep as they seem.
      </p>
      <p>Next, Carnap and Quine revisited.</p>
    </>
  ),
};
