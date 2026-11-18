import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { NeckerViz } from "@/components/viz/NeckerViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p19.5.2",
  minutes: 85,
  links: {
    revisits: ["p19.5.1", "p19.1.1", "p12.5.1"],
    foreshadows: ["p19.6.1", "p31.1.1", "p34.1.1"],
  },

  puzzle: (
    <>
      <p>
        Look at a drawing of a cube until it flips. Nothing on the paper changed, and nothing reaching your eye changed. Yet
        what you see is different. If perception were just receiving sensations, what could have changed?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Switch between the ways of seeing the same twelve lines.</p>
      <NeckerViz />
    </>
  ),

  theory: (
    <>
      <Definition title="against sensations plus judgement">
        <p>
          Classical theories built perception out of elementary <strong>sensations</strong>, points of colour, pressure, tone,
          which are then associated (empiricism) or interpreted by a judgement (intellectualism). Merleau-Ponty argues that no
          one ever perceives a pure sensation. The simplest perceptual given is already a <strong>figure on a ground</strong>,
          a whole whose parts get their sense from it, as Gestalt psychology showed.
        </p>
      </Definition>

      <Definition title="the primacy of perception">
        <p>
          Perception is not a confused version of scientific knowledge. It is the original contact with the world on which
          science, reflection and language all depend. The scientist&rsquo;s world of particles and wavelengths is an
          abstraction from the perceived world, and makes sense only against it. Merleau-Ponty defended this thesis in a 1946
          lecture with that title.
        </p>
      </Definition>

      <Example title="indeterminacy">
        <p>
          In the Müller-Lyer illusion the two lines are neither seen as equal nor seen as unequal: they belong to different
          contexts and are not compared at all. The edge of the visual field has no sharp boundary. Perception includes the
          indeterminate as a positive feature, which a theory of point sensations, each with a definite quality, cannot
          capture.
        </p>
      </Example>

      <Remark title="the perceptual faith">
        <p>
          Merleau-Ponty speaks of a <strong>perceptual faith</strong>: before any theory, we are already in the world and
          trust it. Philosophy should not try to replace this with a certainty built from scratch, as Descartes did, but to
          describe it and understand its structure. His late, unfinished work, <em>The Visible and the Invisible</em>, pushed
          this towards an ontology of the &ldquo;flesh&rdquo;, in which perceiver and perceived belong to a single fabric.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sens",
      rung: "check",
      prompt: <p>What view of perception does Merleau-Ponty reject?</p>,
      answer: {
        kind: "choice",
        options: ["That it is built from elementary sensations plus association or judgement", "That we perceive things at all", "That perception involves the body", "That perception is meaningful"],
        correct: [0],
      },
    },
    {
      key: "primacy",
      rung: "check",
      prompt: <p>What does the primacy of perception claim?</p>,
      answer: {
        kind: "choice",
        options: ["Perception is the original contact with the world on which science and reflection depend", "Perception is always correct", "Science is useless", "Only perception is real"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what changes on the page between the two ways of seeing the cube?</p>,
      answer: { kind: "choice", options: ["Nothing: only the organisation of what is seen changes", "The lines move", "One square is erased", "The colours change"], correct: [0] },
    },
    {
      key: "fig",
      rung: "apply",
      prompt: <p>What is the simplest perceptual given, for Merleau-Ponty?</p>,
      answer: { kind: "choice", options: ["A figure on a ground", "A single point of colour", "A judgement", "A word"], correct: [0] },
    },
    {
      key: "indet",
      rung: "apply",
      prompt: <p>How does Merleau-Ponty describe the lines of the Müller-Lyer illusion?</p>,
      answer: {
        kind: "choice",
        options: ["As neither seen as equal nor as unequal, since they are not compared", "As clearly unequal", "As clearly equal", "As invisible"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the Necker cube show that perception is not sensation plus judgement? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the stimulus is constant while the experience changes.",
          "Considers the reply that a changed judgement explains the change, and whether the flip feels like a judgement.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the world of physics an abstraction from the perceived world, or is the perceived world an appearance of the world of physics?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Merleau-Ponty’s view that science depends on the perceived world for its sense.",
          "States a rival view, such as scientific realism, and what it says about perception.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Merleau-Ponty found meaning already in perception, before any reflection. Albert Camus, writing at the same time, was
        struck by the opposite: the silence of the world in answer to our demand for meaning. That clash between human longing
        and an indifferent world he called the absurd.
      </p>
      <p>
        Next, <em>The Myth of Sisyphus</em>: whether the absurd makes life not worth living, and why Camus concludes that one
        must imagine Sisyphus happy.
      </p>
    </>
  ),
};
