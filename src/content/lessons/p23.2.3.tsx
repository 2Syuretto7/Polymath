import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FineTuneViz } from "@/components/viz/FineTuneViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p23.2.3",
  minutes: 90,
  links: {
    revisits: ["p23.2.2", "p1.5.2", "p10.7.2"],
    foreshadows: ["p23.3.1", "p23.4.1", "p23.4.3"],
  },

  puzzle: (
    <>
      <p>
        If the cosmological constant were slightly larger, the universe would have flown apart before any stars formed;
        slightly smaller, and it would have collapsed. Physicists report many such knife edges. Is that evidence of a
        designer, or of many universes, or of nothing at all, since we could only ever find ourselves in a universe that
        allows us?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Treat fine-tuning as evidence and update by Bayes&rsquo; theorem. Set your prior for design, how unlikely
        life-permitting constants are by chance, and how many universes there are, and watch the posterior.
      </p>
      <FineTuneViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the evidence">
        <p>
          The standard model and cosmology contain about two dozen constants not fixed by theory: masses, coupling strengths,
          the cosmological constant. For several, physicists estimate that only a narrow range permits stable atoms, stars or
          chemistry. The cosmological constant is the most extreme case, often quoted as tuned to about one part in 10¹²⁰.
          These estimates are disputed in detail, but the general claim is widely accepted among physicists.
        </p>
      </Definition>

      <Definition title="the likelihood argument">
        <p>
          Robin Collins and others use the <strong>likelihood principle</strong>: evidence E favours hypothesis H₁ over H₂ if E
          is more probable given H₁ than given H₂. Life-permitting constants are not very improbable if a designer wanted
          life, but are extremely improbable by chance. So fine-tuning favours design over a single chance universe, and
          strongly. This claims only comparative support, not proof.
        </p>
      </Definition>

      <Example title="the multiverse reply">
        <p>
          If there are vast numbers of universes with varying constants, as some versions of inflation and string theory
          suggest, then some will permit life, and observers will find themselves only in those. This is an{" "}
          <strong>observation selection effect</strong>: our evidence is filtered by the condition that we exist to observe it.
          With enough universes, the probability that some universe is life-permitting approaches one.
        </p>
      </Example>

      <Remark title="the inverse gambler’s fallacy">
        <p>
          Ian Hacking and Roger White objected that the multiverse does not explain why <em>this</em> universe is
          life-permitting. Seeing a double six, it is a fallacy to infer that the dice have been rolled many times before. On
          this view, the evidence is &lsquo;this universe permits life&rsquo;, whose probability does not rise with the number
          of other universes. Defenders of the multiverse reply that &lsquo;this&rsquo; universe just means the one containing
          us, so the selection effect does apply.
        </p>
      </Remark>

      <Remark title="the normalisability problem">
        <p>
          Timothy McGrew, Lydia McGrew and Eric Vestrup argued that if a constant could take any value on an infinite range,
          there is no uniform probability distribution over it, so &lsquo;the chance of landing in a narrow range&rsquo; has
          no defined value. Responses include restricting attention to ranges where current physics holds, or using
          non-uniform priors; critics answer that these choices are arbitrary.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lik",
      rung: "check",
      prompt: <p>What does the likelihood principle say?</p>,
      answer: { kind: "choice", options: ["E favours H₁ over H₂ if E is more probable given H₁ than given H₂", "The most likely hypothesis is true", "Prior probabilities never matter", "Improbable events never happen"], correct: [0] },
    },
    {
      key: "sel",
      rung: "check",
      prompt: <p>What is an observation selection effect?</p>,
      answer: { kind: "choice", options: ["Our evidence is filtered by the condition that we exist to observe it", "Observers choose which experiments to run", "Physicists select favourable constants", "God selects which universe to create"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with prior 0.5, chance 10⁻¹ and a single universe, what is the posterior for design?</p>,
      answer: { kind: "numeric", value: 0.8333, tolerance: 0.01 },
    },
    {
      key: "multi",
      rung: "apply",
      prompt: <p>In the visualisation, what happens to the posterior for design as the number of universes grows very large?</p>,
      answer: { kind: "choice", options: ["It falls, even a little below the prior, since some life-permitting universe becomes almost certain on chance", "It rises to 1", "It falls to 0", "It does not change"], correct: [0] },
    },
    {
      key: "gambler",
      rung: "apply",
      prompt: <p>Which is an instance of the inverse gambler’s fallacy?</p>,
      answer: { kind: "choice", options: ["Seeing a double six and inferring the dice have been rolled many times before", "Expecting tails after five heads", "Betting on a horse because it won before", "Ignoring a base rate"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the multiverse hypothesis answer the fine-tuning argument? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how many universes plus a selection effect make life-permitting constants unsurprising.",
          "Considers an objection, such as the inverse gambler’s fallacy or whether the multiverse itself needs fine-tuning.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The likelihood of fine-tuning given design depends on what a designer would want. Can we say how probable life is on the design hypothesis?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the argument needs the probability of life given design to be not too small.",
          "Considers whether we can know a designer’s aims, perhaps relating this to the problem of evil.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Each of the arguments so far offers some reason to believe. Against them all stands one fact that many find decisive:
        the world contains a great deal of suffering, much of it seemingly pointless.
      </p>
      <p>
        Next, the problem of evil, starting with the logical problem: whether God and evil are consistent at all.
      </p>
    </>
  ),
};
