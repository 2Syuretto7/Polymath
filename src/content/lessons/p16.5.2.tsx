import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { InterventionViz } from "@/components/viz/InterventionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.5.2",
  minutes: 80,
  links: {
    revisits: ["p16.5.1", "p16.4.3", "p16.1.2"],
    foreshadows: ["p16.5.3", "p16.7.1", "p16.7.2"],
  },

  puzzle: (
    <>
      <p>
        A falling barometer predicts a storm as well as the drop in air pressure does. Both are reliable signs. Yet only one
        of them is why the storm comes. If not by predictive power, how do we tell the factor that explains from the factor
        that merely goes along with it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare what you learn by seeing the barometer fall with what happens if you push its needle down yourself.</p>
      <InterventionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the causal view">
        <p>
          The counterexamples to the DN model suggest a simple diagnosis: to explain an event is to describe its causes. The
          height of the flagpole causes the shadow, not the reverse; the air pressure causes the storm, the barometer does
          not; the hex causes nothing. David Lewis put it briefly: to explain an event is to provide some information about
          its causal history.
        </p>
      </Definition>

      <Example title="Salmon’s causal-mechanical account">
        <p>
          Wesley Salmon, in <em>Scientific Explanation and the Causal Structure of the World</em> (1984), distinguished{" "}
          <strong>causal processes</strong>, which can carry a mark forward, from <strong>pseudo-processes</strong>, which
          cannot. A moving ball is a causal process: scratch it and the scratch travels with it. A spot of light sweeping
          across a wall is not: colouring the spot at one place does not change it further on. Explanation traces the causal
          processes and interactions that produced the event.
        </p>
      </Example>

      <Definition title="Woodward’s interventionism">
        <p>
          James Woodward, in <em>Making Things Happen</em> (2003), proposed that X is a cause of Y when an{" "}
          <strong>intervention</strong> on X, a change in X that is not itself produced by the other causes of Y, would change
          Y. An explanation tells us how Y would have been different had X been different: it answers{" "}
          <strong>what-if-things-had-been-different questions</strong>. Pushing the barometer&rsquo;s needle does nothing to
          the storm; changing the pressure would.
        </p>
      </Definition>

      <Example title="the old cases again">
        <p>
          Shortening the flagpole would shorten the shadow, but painting a shorter shadow would not shorten the pole, so the
          asymmetry is recovered. Removing the hex would not stop the salt dissolving, so the hex is irrelevant. And the
          syphilis explains the paresis because without it paresis would not have occurred, even though with it paresis was
          unlikely.
        </p>
      </Example>

      <Remark title="limits">
        <p>
          Some explanations seem not to be causal: why a soap film takes a certain shape, why no one can walk across all of
          K&ouml;nigsberg&rsquo;s bridges exactly once, or explanations from symmetry and conservation laws in physics. These
          cases motivate other accounts, including unification.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lewis",
      rung: "check",
      prompt: <p>On Lewis&rsquo;s view, what is it to explain an event?</p>,
      answer: {
        kind: "choice",
        options: ["To give some information about its causal history", "To deduce it from a law", "To show it was very probable", "To fit it into a unified theory"],
        correct: [0],
      },
    },
    {
      key: "mark",
      rung: "check",
      prompt: <p>For Salmon, what distinguishes a causal process from a pseudo-process?</p>,
      answer: {
        kind: "choice",
        options: ["A causal process can transmit a mark", "A causal process is faster than light", "A pseudo-process is never observed", "A causal process obeys a strict law"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the probability of a storm after you push the needle down? Give three decimal places.</p>,
      answer: { kind: "numeric", value: 0.31, tolerance: 0.001 },
    },
    {
      key: "spot",
      rung: "apply",
      prompt: <p>A lighthouse beam sweeps a spot of light across distant clouds faster than light travels. Why does this not break relativity, on Salmon&rsquo;s view?</p>,
      answer: {
        kind: "choice",
        options: [
          "The moving spot is a pseudo-process and carries no mark or signal.",
          "The spot is not really moving.",
          "Light from lighthouses is slower.",
          "Relativity does not apply to clouds.",
        ],
        correct: [0],
      },
    },
    {
      key: "flag",
      rung: "apply",
      prompt: <p>How does interventionism handle the flagpole?</p>,
      answer: {
        kind: "choice",
        options: [
          "Intervening on the height changes the shadow, but intervening on the shadow does not change the height.",
          "The flagpole’s height cannot be measured.",
          "It accepts that the shadow explains the height.",
          "It says neither explains the other.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is all scientific explanation causal? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the causal view and how it handles a counterexample to the DN model.",
          "Considers a possible non-causal explanation, such as one from mathematics, symmetry or a conservation law.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can an omission, such as a gardener&rsquo;s failure to water the plants, be a cause that explains? How would an interventionist answer?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that an omission is not a process and so fits Salmon’s account poorly.",
          "Explains that an intervention making the gardener water the plants would have changed the outcome.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why causal accounts of explanation arose from the problems of the DN model, Salmon's causal processes and mark transmission, Woodward's interventions and what-if questions, and how they handle the flagpole and the barometer.",

  glimpse: (
    <p>
      Next, the unificationist account of Friedman and Kitcher, on which to explain is to reduce the number of independent
      facts we must accept.
    </p>
  ),
};
