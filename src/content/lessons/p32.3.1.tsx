import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EhrenfestUrnViz } from "@/components/viz/EhrenfestUrnViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p32.3.1",
  minutes: 90,
  links: {
    revisits: ["p32.1.2", "p32.2.5", "p16.7.1"],
    foreshadows: ["p32.3.2", "p32.1.4", "p16.5.2"],
  },

  puzzle: (
    <>
      <p>
        Film a cup of coffee cooling, or an egg dropping and breaking, and play it backwards: you know at once something is
        wrong. Yet every collision between molecules in the film obeys laws that run equally well in either direction. Where
        does the difference between past and future come from, if not from the laws?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Run the urn model forwards and backwards, and change the number of particles.</p>
      <EhrenfestUrnViz />
    </>
  ),

  theory: (
    <>
      <Definition title="time-reversal invariance">
        <p>
          A theory is <strong>time-reversal invariant</strong> if, whenever a history is allowed, so is the history obtained
          by running it backwards, with velocities reversed. Newtonian mechanics, electromagnetism and the Schrödinger
          equation all have this property, with suitable reversal of some quantities. The weak interaction violates it
          slightly, but far too slightly to explain cooling coffee.
        </p>
      </Definition>

      <Definition title="Boltzmann’s explanation">
        <p>
          The second law of thermodynamics says that entropy does not decrease. Ludwig Boltzmann identified the entropy of a
          macrostate with the logarithm of the volume of phase space it occupies. Low entropy macrostates occupy a tiny
          fraction of the space, so from a low entropy state almost every microstate evolves towards higher entropy. The
          second law becomes a statement of overwhelming probability.
        </p>
      </Definition>

      <Example title="reversibility and the past">
        <p>
          Josef Loschmidt objected that for every microstate on its way up in entropy there is a reversed one on its way
          down. The deeper problem is that Boltzmann&rsquo;s reasoning is itself time-symmetric: applied to a half-melted ice
          cube, it predicts that the ice will melt, but also that it was more melted a minute ago. To get the past right,
          David Albert proposes the <strong>Past Hypothesis</strong>: the universe began in a state of very low entropy.
          Conditioning on that, as well as on the present, makes the past lower in entropy than the present.
        </p>
      </Example>

      <Remark title="other arrows">
        <p>
          We remember the past and not the future, cause effects that follow their causes, and see radiation spread out from
          sources rather than converge on them. Albert and Barry Loewer argue that all these arrows derive from the Past
          Hypothesis. Huw Price urges a view from nowhen, warning against assuming in physics the asymmetries we are trying
          to explain. Others ask whether the Past Hypothesis itself needs an explanation, perhaps from cosmology, and note
          that a universe in equilibrium would more often produce lone fluctuating observers, &lsquo;Boltzmann
          brains&rsquo;, than a whole low entropy cosmos.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "trs",
      rung: "check",
      prompt: <p>What does it mean for a theory to be time-reversal invariant?</p>,
      answer: { kind: "choice", options: ["The time reverse of any allowed history is also allowed", "Time does not exist in it", "Entropy always increases", "It predicts the past but not the future"], correct: [0] },
    },
    {
      key: "ph",
      rung: "check",
      prompt: <p>What is the Past Hypothesis?</p>,
      answer: { kind: "choice", options: ["The universe began in a state of very low entropy", "The past is fixed and the future open", "Entropy was higher in the past", "Only the past is real"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set N = 10. In equilibrium, all the particles are on the left about once in how many observations?</p>,
      answer: { kind: "numeric", value: 1024, tolerance: 0 },
    },
    {
      key: "losch",
      rung: "apply",
      prompt: <p>What was Loschmidt&rsquo;s reversibility objection?</p>,
      answer: { kind: "choice", options: ["Time-symmetric laws cannot by themselves yield an asymmetric law of entropy increase", "Molecules cannot collide", "Entropy cannot be measured", "Boltzmann ignored gravity"], correct: [0] },
    },
    {
      key: "brains",
      rung: "apply",
      prompt: <p>Why do Boltzmann brains pose a problem?</p>,
      answer: { kind: "choice", options: ["Small fluctuations producing lone observers would be far more probable than a whole low entropy universe", "Brains violate thermodynamics", "Boltzmann denied that brains exist", "They show entropy decreases"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the Past Hypothesis explain the arrow of time, or does it merely relocate the puzzle? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Past Hypothesis and how it yields entropy increase towards the future.",
          "Considers whether a special initial state itself needs explaining.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why do we remember the past but not the future?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Connects records or memory to the thermodynamic asymmetry.",
          "Considers an alternative, or the worry of circularity.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Boltzmann&rsquo;s explanation rests on probability, but the underlying classical laws are deterministic. What could
        such probabilities be?
      </p>
      <p>Next, probability in statistical mechanics.</p>
    </>
  ),
};
