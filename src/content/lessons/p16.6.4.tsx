import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FresnelCarryViz } from "@/components/viz/FresnelCarryViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.6.4",
  minutes: 85,
  links: {
    revisits: ["p16.6.2", "p16.6.3", "p16.3.1"],
    foreshadows: ["p16.7.1", "p16.7.2", "p22.6.4"],
  },

  puzzle: (
    <>
      <p>
        Fresnel believed light was a vibration in an elastic solid filling space. He was wrong: there is no such solid. Yet
        his equations for how much light a glass surface reflects are still taught, unchanged, and still correct. If the
        theory was false, what exactly did Fresnel get right?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the angle and the glass, and switch between three theories of what the numbers mean.</p>
      <FresnelCarryViz />
    </>
  ),

  theory: (
    <>
      <Definition title="structural realism">
        <p>
          John Worrall, in &ldquo;Structural Realism: The Best of Both Worlds?&rdquo; (1989), argued that the right lesson of
          theory change is that the mathematical <strong>structure</strong> of successful theories is retained, while their
          claims about the <strong>nature</strong> of what has that structure are not. We should be realists about the
          structure. This respects the no-miracles intuition, since the structure is what does the predictive work, and the
          pessimistic induction, since it is the natures that keep being replaced.
        </p>
      </Definition>

      <Example title="Fresnel to Maxwell">
        <p>
          Fresnel&rsquo;s equations relate the amplitudes of reflected and refracted light. In Maxwell&rsquo;s theory the very
          same equations hold, now relating electric field strengths. Poincar&eacute; had already noted, in 1905, that the
          equations express real relations, and that &ldquo;these relations are as true as ever&rdquo;, whatever we name the
          things related.
        </p>
      </Example>

      <Definition title="two versions">
        <p>
          <strong>Epistemic structural realism</strong> says all we can know is structure: the nature of the relata is hidden
          from us. <strong>Ontic structural realism</strong>, defended by James Ladyman and Steven French, says there is
          nothing more to know: the world is structure, and objects are nodes in it. Physics, they argue, supports this, since
          quantum particles of the same kind lack individuality.
        </p>
      </Definition>

      <Remark title="objections">
        <p>
          Can structure and nature really be separated? A structure needs things to be structured, and Newman&rsquo;s
          objection (1928) showed that if all we know is that some relations with a given abstract structure exist, our
          knowledge is almost trivial: any collection of the right size has such relations. Others note that some
          mathematical structures change too, as when Newtonian mechanics became relativistic, though the old equations survive
          as limiting cases.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does structural realism recommend believing?</p>,
      answer: {
        kind: "choice",
        options: [
          "The mathematical structure of our best theories, but not their claims about the nature of things",
          "Everything our best theories say",
          "Only what is observable",
          "Nothing about the world",
        ],
        correct: [0],
      },
    },
    {
      key: "who",
      rung: "check",
      prompt: <p>Who revived structural realism in 1989 using the example of Fresnel and Maxwell?</p>,
      answer: { kind: "choice", options: ["John Worrall", "Bas van Fraassen", "Larry Laudan", "Thomas Kuhn"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with refractive index 1.5, at what angle of incidence does the parallel reflection vanish? Give the nearest whole degree.</p>,
      answer: { kind: "numeric", value: 56, tolerance: 1 },
    },
    {
      key: "ontic",
      rung: "apply",
      prompt: <p>What distinguishes ontic from epistemic structural realism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Ontic says there is nothing beyond structure to know; epistemic says natures exist but are unknowable.",
          "Ontic is anti-realist.",
          "Epistemic believes in the ether.",
          "They differ only in name.",
        ],
        correct: [0],
      },
    },
    {
      key: "newman",
      rung: "apply",
      prompt: <p>What does Newman&rsquo;s objection claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Knowing only that relations with some abstract structure exist is almost trivial, since any collection of the right size has them.",
          "Structure always changes in revolutions.",
          "Fresnel’s equations are false.",
          "Mathematics is not about the world.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does structural realism give us the best of both worlds? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how it answers both the no-miracles argument and the pessimistic induction, with an example.",
          "Considers an objection, such as whether structure and nature can be separated, or Newman’s objection.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Newtonian gravity was replaced by general relativity. Was any structure retained? Discuss.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that Newton’s laws are recovered from relativity as a limit at low speeds and weak fields.",
          "Considers whether retention as a limiting case counts as structure surviving, given that the spacetime picture changed.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend structural realism, the example of Fresnel's equations surviving into Maxwell's theory, the difference between epistemic and ontic versions, and Newman's objection.",

  glimpse: (
    <p>
      Next, laws of nature: are they mere regularities, relations between universals, or something else?
    </p>
  ),
};
