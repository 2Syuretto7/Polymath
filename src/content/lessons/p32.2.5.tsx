import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { GRWRateViz } from "@/components/viz/GRWRateViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p32.2.5",
  minutes: 90,
  links: {
    revisits: ["p32.2.1", "p32.2.4", "p16.6.3"],
    foreshadows: ["p32.3.1", "p32.3.2", "p32.1.2"],
  },

  puzzle: (
    <>
      <p>
        Textbooks say the wave function collapses when a measurement is made, but never say what a measurement is. Suppose
        instead that collapse is a physical process that happens to every particle now and then, at random. Could a rate
        rare enough never to have been noticed for an electron still make a cat definitely alive or dead within a moment?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change how many particles are in superposition, and see how long a collapse takes to arrive.</p>
      <GRWRateViz />
    </>
  ),

  theory: (
    <>
      <Definition title="spontaneous localisation">
        <p>
          Giancarlo Ghirardi, Alberto Rimini and Tullio Weber proposed in 1986 that the Schrödinger equation is not the whole
          story. In the <strong>GRW theory</strong> each particle, at random times with a rate of about once in 10¹⁶ seconds,
          suffers a <strong>hit</strong>: the wave function is multiplied by a narrow Gaussian about 10⁻⁷ metres wide and
          renormalised. The centre of the hit is chosen at random, with probabilities given by the Born rule. Between hits
          the Schrödinger equation holds.
        </p>
      </Definition>

      <Definition title="amplification">
        <p>
          For a single particle, hits are so rare that interference experiments are undisturbed. But a superposition of a
          pointer in two positions entangles some 10²³ particles; a hit on any one of them localises the whole pointer,
          because its position is correlated with all the others. Collapse comes at a rate proportional to the number of
          particles, within a fraction of a microsecond. Measurement needs no special definition: it is just amplification
          to a macroscopic scale.
        </p>
      </Definition>

      <Example title="variants and tests">
        <p>
          Philip Pearle&rsquo;s continuous spontaneous localisation replaces discrete hits with a continuous process, and Roger
          Penrose and Lajos Diósi have proposed that collapse is tied to gravity. Unlike Bohm and Everett, these theories
          make different predictions from standard quantum mechanics: collapse slightly heats matter and causes faint
          radiation. Experiments with cold atoms, gravitational wave detectors and underground germanium detectors have
          narrowed the allowed parameters, and some proposals have been ruled out.
        </p>
      </Example>

      <Remark title="what the theory is about">
        <p>
          A hit leaves a Gaussian with tails that never vanish, so the pointer is never exactly in one place; this is the{" "}
          <strong>tails problem</strong>. Some reply that small tails are enough for definiteness. Others, such as Valia
          Allori, Goldstein, Tumulka and Zanghì, argue that GRW needs a <strong>primitive ontology</strong> in spacetime:
          either a mass density spread like |ψ|², or flashes at the centres of the hits. Tumulka showed that the flash version
          can be made relativistic, without a preferred frame.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>How does the GRW theory differ from standard quantum mechanics?</p>,
      answer: { kind: "choice", options: ["It adds random spontaneous collapses to the Schrödinger evolution", "It adds particle positions", "It denies that the wave function exists", "It makes no change to the dynamics"], correct: [0] },
    },
    {
      key: "amp",
      rung: "check",
      prompt: <p>Why do macroscopic superpositions collapse quickly in GRW, though single particles rarely do?</p>,
      answer: { kind: "choice", options: ["A hit on any one of many entangled particles localises them all", "Large objects have a higher rate per particle", "Observers cause the collapse", "Gravity forbids superposition"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set N = 10¹⁶. What is the mean time to a collapse, in seconds?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.01 },
    },
    {
      key: "tails",
      rung: "apply",
      prompt: <p>What is the tails problem?</p>,
      answer: { kind: "choice", options: ["After a hit the wave function still has non-zero tails, so the object is never exactly in one place", "Collapse happens too often", "Hits violate energy conservation exactly", "The theory cannot treat cats"], correct: [0] },
    },
    {
      key: "test",
      rung: "apply",
      prompt: <p>What distinguishes collapse theories from Bohmian mechanics and many worlds?</p>,
      answer: { kind: "choice", options: ["They predict small deviations from standard quantum mechanics that experiments can test", "They have no wave function", "They are deterministic", "They deny that measurements have outcomes"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should we prefer a collapse theory to Bohmian mechanics or many worlds because it can be tested? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States how collapse theories differ in their predictions.",
          "Considers a cost, such as ad hoc parameters, energy non-conservation or the tails problem.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the tails problem undermine GRW&rsquo;s claim to give definite outcomes?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the tails problem.",
          "Considers a reply, such as a primitive ontology of flashes or mass density.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The laws of mechanics, classical or quantum, run equally well forwards and backwards. Yet eggs break and do not
        unbreak, and we remember the past and not the future.
      </p>
      <p>Next, the arrow of time.</p>
    </>
  ),
};
