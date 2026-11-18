import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaneViz } from "@/components/viz/CaneViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p19.5.1",
  minutes: 85,
  links: {
    revisits: ["p19.2.2", "p7.1.4", "p12.7.1"],
    foreshadows: ["p19.5.2", "p31.1.1", "p19.6.1"],
  },

  puzzle: (
    <>
      <p>
        Close your eyes and touch your nose. You did not look for your hand, calculate its position and steer it. You simply
        knew where it was. What kind of knowledge is that? It is not a belief you could state, and it is not a sensation of
        anything in particular.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A blind person learns to use a cane. Slide the weeks of practice and watch where the touch is felt.
      </p>
      <CaneViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the lived body">
        <p>
          In <em>Phenomenology of Perception</em> (1945), Maurice Merleau-Ponty argues that both of the traditional pictures
          of the body miss it. For empiricism the body is a machine that receives stimuli; for intellectualism, a thing that a
          mind represents and steers. Merleau-Ponty describes the <strong>lived body</strong>: not an object I have, but the
          point of view through which I have objects at all.
        </p>
      </Definition>

      <Definition title="the body schema and the “I can”">
        <p>
          I know where my limbs are through a <strong>body schema</strong>, a practical, pre-reflective grasp of my body as a
          system of possible actions. Consciousness is in the first place not &ldquo;I think that&rdquo; but{" "}
          <strong>&ldquo;I can&rdquo;</strong>. The world shows up as reachable, climbable, graspable, in terms of what my body
          can do.
        </p>
      </Definition>

      <Example title="habit and the phantom limb">
        <p>
          A typist knows where the keys are in their fingers, not as a list of positions. The blind person&rsquo;s cane
          becomes part of the body schema, so that they feel the ground at its tip. Conversely, a person with a phantom limb
          still reaches with an arm that is gone: the body schema keeps the old practical field open. Neither physiology alone
          nor psychology alone explains this; it belongs to the body as lived.
        </p>
      </Example>

      <Remark title="Schneider">
        <p>
          Merleau-Ponty draws heavily on Schneider, a soldier with brain damage studied by Gelb and Goldstein. Schneider could
          perform familiar concrete actions, such as taking a match and lighting a lamp, but could not point to his nose on
          request or move his arm when asked. Merleau-Ponty reads this as damage to the capacity to project a field of possible
          action, the &ldquo;intentional arc&rdquo;, rather than to sensation or to thought. The case remains a reference
          point for enactive and embodied cognitive science.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lived",
      rung: "check",
      prompt: <p>What is the lived body?</p>,
      answer: {
        kind: "choice",
        options: ["The body as the point of view through which I have a world, not an object I observe", "The body as studied in anatomy", "The soul", "The body after death"],
        correct: [0],
      },
    },
    {
      key: "ican",
      rung: "check",
      prompt: <p>Merleau-Ponty says consciousness is originally not &ldquo;I think that&rdquo; but…</p>,
      answer: { kind: "choice", options: ["“I can”", "“I am”", "“I doubt”", "“I must”"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, after enough practice, where is the touch felt?</p>,
      answer: { kind: "choice", options: ["At the tip of the cane", "In the palm", "In the elbow", "Nowhere"], correct: [0] },
    },
    {
      key: "phantom",
      rung: "apply",
      prompt: <p>How does Merleau-Ponty explain the phantom limb?</p>,
      answer: {
        kind: "choice",
        options: ["The body schema keeps open a field of action that included the lost limb", "Nerves in the stump fire at random", "The person is pretending", "It is a false belief about anatomy"],
        correct: [0],
      },
    },
    {
      key: "schneider",
      rung: "apply",
      prompt: <p>What could Schneider not do?</p>,
      answer: {
        kind: "choice",
        options: ["Perform abstract movements on request, such as pointing to his nose", "Light a lamp", "Feel anything", "Speak at all"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the example of habit show that some knowledge is in the body rather than in the mind? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes a case such as typing or the cane, where skill does not consist in stated beliefs.",
          "Considers a reply, such as that the knowledge is stored in the brain, or why that misses the point.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If a cane can become part of the body schema, could a smartphone? What would follow?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Compares the phone with the cane, for example in whether one attends through it rather than to it.",
          "Draws a consequence, such as for where the self ends or for what losing the device is like.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If the body is our way of having a world, then perception cannot be the arrival of raw sensations which a mind then
        interprets. Merleau-Ponty argues that the very idea of a pure sensation is a theorist&rsquo;s construction: what we
        actually perceive is always a figure on a ground, already meaningful, and often indeterminate.
      </p>
      <p>
        Next, the primacy of perception: why perception is the soil from which science and reflection grow, and not a
        confused first draft of them.
      </p>
    </>
  ),
};
