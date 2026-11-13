import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FitnessDriftViz } from "@/components/viz/FitnessDriftViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.7.3",
  minutes: 80,
  links: {
    revisits: ["p16.7.2", "p16.7.1", "p16.2.1"],
    foreshadows: ["p12.3.1", "m27.2.1", "p27.4.1"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;Survival of the fittest&rdquo; sounds like a law of nature. But if the fittest are simply those who survive, it
        says only that the survivors survive, which is no law at all. Is the central idea of evolutionary biology an empty
        tautology?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Give one variant a small advantage, change the size of the population, and watch whether the fitter variant wins.</p>
      <FitnessDriftViz />
    </>
  ),

  theory: (
    <>
      <Definition title="fitness as a propensity">
        <p>
          The tautology objection assumes that fitness <em>is</em> actual reproductive success. Susan Mills and John Beatty
          (1979) proposed instead that fitness is a <strong>propensity</strong>: a disposition to leave a certain expected
          number of offspring in a given environment, grounded in physical traits such as speed or camouflage. Then
          &ldquo;the fitter tend to leave more offspring&rdquo; is a substantive, testable claim, and an unlucky fit organism
          can die young.
        </p>
      </Definition>

      <Example title="selection and drift">
        <p>
          <strong>Natural selection</strong> is a change in the make-up of a population caused by differences in fitness.{" "}
          <strong>Drift</strong> is change caused by chance sampling: which organisms happen to reproduce. In a small
          population drift can carry a less fit variant to fixation; roughly, drift dominates when the population size times
          the advantage is below one. Philosophers dispute whether selection and drift are distinct causes, like forces, or
          two aspects of one statistical process.
        </p>
      </Example>

      <Definition title="units of selection and function">
        <p>
          What does selection act on: genes, organisms, groups or species? Richard Dawkins argued for the gene; others defend
          multilevel selection. Biology also speaks of <strong>function</strong>: the function of the heart is to pump blood,
          not to make a thumping noise. On Larry Wright&rsquo;s and Ruth Millikan&rsquo;s <strong>etiological</strong>{" "}
          account, a trait&rsquo;s function is the effect for which it was selected in the past.
        </p>
      </Definition>

      <Remark title="does biology have laws?">
        <p>
          John Beatty argued that biological generalisations, such as Mendel&rsquo;s laws, are contingent outcomes of
          evolution and have exceptions, so biology has no laws of its own in the strict sense. Others answer that laws may
          hold ceteris paribus, or that biology explains by models and mechanisms, not laws, which links back to the debates
          on explanation and reduction.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "prop",
      rung: "check",
      prompt: <p>On the propensity interpretation, what is fitness?</p>,
      answer: {
        kind: "choice",
        options: [
          "A disposition to leave a certain expected number of offspring in an environment.",
          "The actual number of offspring an organism leaves.",
          "The strength of an organism.",
          "The age at which an organism dies.",
        ],
        correct: [0],
      },
    },
    {
      key: "drift",
      rung: "check",
      prompt: <p>What is genetic drift?</p>,
      answer: {
        kind: "choice",
        options: [
          "Change in a population caused by chance sampling of which organisms reproduce.",
          "Change caused by differences in fitness.",
          "The movement of genes between species.",
          "A mutation that improves fitness.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the population size to 10 and the advantage to 5%. Which process does the readout say dominates?</p>,
      answer: { kind: "choice", options: ["Drift", "Selection", "Mutation", "Migration"], correct: [0] },
    },
    {
      key: "ns",
      rung: "apply",
      prompt: <p>A variant has a fitness advantage of 2%. Using the rule of thumb in the lesson, what is the smallest population size at which selection begins to dominate drift?</p>,
      answer: { kind: "numeric", value: 50 },
    },
    {
      key: "func",
      rung: "apply",
      prompt: <p>On the etiological account, why is pumping blood, and not making a thumping noise, the function of the heart?</p>,
      answer: {
        kind: "choice",
        options: [
          "Hearts were selected in the past because they pumped blood, not because they thumped.",
          "Pumping blood is louder than thumping.",
          "Thumping is not an effect of the heart.",
          "Doctors define the heart that way.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is &ldquo;survival of the fittest&rdquo; a tautology? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the objection that, if fitness is actual survival, the principle says only that survivors survive.",
          "Gives a reply, such as fitness as a propensity grounded in traits, and notes the role of drift.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the gene, the organism or the group the real unit of selection, or is the question ill-posed?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes at least one view, such as Dawkins’s gene’s-eye view or multilevel selection.",
          "Considers whether different levels are alternative descriptions of the same process.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the tautology objection to survival of the fittest, fitness as a propensity, the difference between selection and drift, and the etiological account of function.",

  glimpse: (
    <p>
      This ends the first course in the philosophy of science. Later courses return to laws and supervenience in metaphysics,
      and to function in the philosophy of mind.
    </p>
  ),
};
