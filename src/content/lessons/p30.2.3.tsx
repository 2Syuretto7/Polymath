import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RepugnantViz } from "@/components/viz/RepugnantViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p30.2.3",
  minutes: 90,
  links: {
    revisits: ["p30.2.2", "p13.1.1", "p13.2.1"],
    foreshadows: ["p30.4.1", "p30.4.2", "p30.3.2"],
  },

  puzzle: (
    <>
      <p>
        Picture ten billion people, all flourishing. Now picture an enormous population whose lives are barely worth
        living: little but muzak and potatoes, as Parfit put it. If there are enough of them, is that world better? Most
        people say no at once. Yet the arguments that it is better are hard to resist.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the size and welfare of population Z, and compare it with A under three theories.</p>
      <RepugnantViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the repugnant conclusion">
        <p>
          In <em>Reasons and Persons</em>, Parfit stated it: for any possible population of at least ten billion people, all
          with a very high quality of life, there must be some much larger imaginable population whose existence, if other
          things are equal, would be better even though its members have lives that are barely worth living. The{" "}
          <strong>total view</strong>, which ranks outcomes by the sum of welfare, implies it.
        </p>
      </Definition>

      <Example title="the mere addition paradox">
        <p>
          Start with A. Add extra people with lives worth living, who affect no one else: A+ seems no worse than A. Now
          equalise welfare at a slightly higher total: B− seems better than A+. Repeating the steps leads from A to Z,
          though each step looks acceptable. To reject Z one must reject a step, or deny that &lsquo;better than&rsquo; is
          transitive.
        </p>
      </Example>

      <Definition title="alternatives">
        <p>
          The <strong>average view</strong> avoids the conclusion but implies that adding a happy person can make things
          worse if their life is below average, and that adding people in agony to hell is good if they suffer slightly less
          than those already there. <strong>Critical-level</strong> views count only welfare above some positive level, but
          then prefer adding people in agony to adding many people with lives just below the level.
        </p>
      </Definition>

      <Remark title="impossibility">
        <p>
          Gustaf Arrhenius proved in 2000 that no ranking of populations satisfies a short list of conditions that each seem
          compelling, including avoiding the repugnant conclusion. Some philosophers, such as Torbjörn Tännsjö and Michael
          Huemer, have concluded that we should accept the repugnant conclusion and distrust our intuition about large
          numbers.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rc",
      rung: "check",
      prompt: <p>What does the repugnant conclusion say?</p>,
      answer: { kind: "choice", options: ["A huge population of lives barely worth living would be better than a smaller flourishing one", "Population growth is always bad", "Only average welfare matters", "No population is better than another"], correct: [0] },
    },
    {
      key: "total",
      rung: "check",
      prompt: <p>Which view implies the repugnant conclusion?</p>,
      answer: { kind: "choice", options: ["The total view", "The average view", "A high critical-level view", "The person-affecting view alone"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set Z to 1,500 people at welfare 1, with critical level 0. By how much does Z&rsquo;s total exceed A&rsquo;s?</p>,
      answer: { kind: "numeric", value: 500, tolerance: 0 },
    },
    {
      key: "avg",
      rung: "apply",
      prompt: <p>What is a standard objection to the average view?</p>,
      answer: { kind: "choice", options: ["It can favour adding people in agony if they suffer less than those already existing", "It implies the repugnant conclusion", "It ignores welfare altogether", "It requires maximising population"], correct: [0] },
    },
    {
      key: "mere",
      rung: "apply",
      prompt: <p>What is the first step of the mere addition paradox?</p>,
      answer: { kind: "choice", options: ["Adding people with lives worth living who affect no one else does not make things worse", "Equalising welfare makes things worse", "Reducing population makes things better", "Average welfare must never fall"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should we accept the repugnant conclusion? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the repugnant conclusion and a view that implies it.",
          "Considers an alternative such as the average or critical-level view, or the mere addition argument.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could the mere addition paradox show that &lsquo;better than&rsquo; is not transitive?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the chain of comparisons from A through A+ and B− to Z.",
          "Considers what giving up transitivity would cost, for instance in making choices.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Expressivists hold that moral claims express attitudes rather than describe facts. But moral words behave like
        descriptive ones inside logic, and that is hard to explain if they only express attitudes.
      </p>
      <p>Next, the Frege-Geach problem for expressivism.</p>
    </>
  ),
};
