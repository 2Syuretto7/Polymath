import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { SphereConditionalViz } from "@/components/viz/SphereConditionalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p26.3.4",
  minutes: 90,
  links: {
    revisits: ["p26.3.3", "p2.2.2", "p17.4.3"],
    foreshadows: ["p26.4.1", "p26.4.2", "p26.4.3"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;If I had struck this match, it would have lit.&rsquo; True. &lsquo;If I had struck this match and it had been
        soaked in water, it would have lit.&rsquo; False. Adding to the antecedent changed the truth value. No material
        conditional, and no strict conditional, behaves like that. What does?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Worlds are placed by how similar they are to the actual world @. Move the regions where A and C hold and find the
        closest A-worlds.
      </p>
      <SphereConditionalViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Stalnaker's semantics">
        <p>
          Robert Stalnaker, in 1968, proposed that A &gt; C, &lsquo;if A were the case, C would be&rsquo;, is true at w when C
          is true at the single A-world most similar to w, given by a selection function. If there is no A-world, it is
          vacuously true. His logic validates <strong>conditional excluded middle</strong>: (A &gt; C) ∨ (A &gt; ¬C).
        </p>
      </Definition>

      <Definition title="Lewis's spheres">
        <p>
          David Lewis, in <em>Counterfactuals</em> (1973), allowed ties and infinite approaches. Around each world lie nested{" "}
          <strong>spheres of similarity</strong>. A &gt; C is true at w if there are no A-worlds, or if some sphere contains
          an A-world and every A-world in it is a C-world. Lewis rejects conditional excluded middle: if Bizet and Verdi had
          been compatriots, would they have been French? Neither answer seems right.
        </p>
      </Definition>

      <Theorem title="non-monotonicity">
        <p>
          In both systems, these inferences fail, though each is valid for the material conditional:
        </p>
        <ul>
          <li>strengthening the antecedent: from A &gt; C infer (A ∧ B) &gt; C;</li>
          <li>transitivity: from A &gt; B and B &gt; C infer A &gt; C;</li>
          <li>contraposition: from A &gt; C infer ¬C &gt; ¬A.</li>
        </ul>
        <p>
          The match shows the first failure: the closest worlds where it is struck are dry, but the closest where it is
          struck and soaked are not.
        </p>
      </Theorem>

      <Example title="what similarity is">
        <p>
          Lewis later gave a priority ordering for similarity: first avoid big, widespread violations of law; second,
          maximise the region of perfect match of particular fact; and so on. Without such guidance, &lsquo;if Nixon had
          pressed the button, there would have been a nuclear war&rsquo; comes out false, since a world where a small
          malfunction prevented war looks more similar to ours.
        </p>
      </Example>

      <Remark title="indicative conditionals">
        <p>
          The Oswald pair shows that indicative and counterfactual conditionals differ. For indicatives, Ramsey&rsquo;s test
          suggests: add A to your beliefs and see whether C follows. Adams&rsquo; thesis says the probability of an
          indicative is the conditional probability P(C | A), but Lewis proved triviality results showing it cannot be the
          probability of any one proposition.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lewis",
      rung: "check",
      prompt: <p>On Lewis&rsquo;s semantics, when is A &gt; C true, assuming there are A-worlds?</p>,
      answer: { kind: "choice", options: ["When some sphere contains an A-world and all its A-worlds are C-worlds", "When every A-world is a C-world", "When A is false or C is true", "When the actual world is a C-world"], correct: [0] },
    },
    {
      key: "cem",
      rung: "check",
      prompt: <p>Which principle does Stalnaker accept and Lewis reject?</p>,
      answer: { kind: "choice", options: ["Conditional excluded middle", "Modus ponens", "Strengthening the antecedent", "Contraposition"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the C centre to 10, keeping its radius 18 and A as at the start. Is A &gt; C true or false?</p>,
      answer: { kind: "choice", options: ["True", "False"], correct: [0] },
    },
    {
      key: "match",
      rung: "apply",
      prompt: <p>Which inference does the soaked match show to be invalid for counterfactuals?</p>,
      answer: { kind: "choice", options: ["Strengthening the antecedent", "Modus ponens", "Conditional excluded middle", "Double negation"], correct: [0] },
    },
    {
      key: "oswald",
      rung: "apply",
      prompt: <p>What does the Oswald example show?</p>,
      answer: { kind: "choice", options: ["Indicative and counterfactual conditionals can differ in truth value", "All conditionals are material", "Counterfactuals are always false", "Kennedy was not shot"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Give a model in which A &gt; C is true but (A ∧ B) &gt; C is false, on Lewis&rsquo;s semantics.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes worlds ordered by similarity, with a closest A-world where B is false and C is true.",
          "Places the closest A ∧ B world further out, with C false there.",
          "Checks both truth values from the definition.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If Bizet and Verdi had been compatriots, would they have been French? Defend Stalnaker&rsquo;s or Lewis&rsquo;s answer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how the example bears on conditional excluded middle.",
          "Considers Stalnaker’s reply, such as indeterminacy in the selection function, or Lewis’s rejection.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Logic tells us what follows from what we believe. A theory of rational choice tells us what to do, given what we
        believe and what we want. Its foundation is a theorem about preferences over gambles.
      </p>
      <p>Next, expected utility foundations.</p>
    </>
  ),
};
