import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MiracleBaseRateViz } from "@/components/viz/MiracleBaseRateViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.6.1",
  minutes: 85,
  links: {
    revisits: ["p3.3.3", "p16.4.3", "p16.2.2"],
    foreshadows: ["p16.6.2", "p16.6.3", "p16.6.4"],
  },

  puzzle: (
    <>
      <p>
        Quantum electrodynamics predicts the magnetic moment of the electron correctly to about ten significant figures.
        Nobody can see electrons, and the theory talks about things no one will ever observe. If the theory were false, would
        that kind of success not be a miracle? Or is &ldquo;it would be a miracle otherwise&rdquo; a weaker argument than it
        sounds?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change how common true theories are among the candidates, and see what success tells you.</p>
      <MiracleBaseRateViz />
    </>
  ),

  theory: (
    <>
      <Definition title="scientific realism">
        <p>
          <strong>Scientific realism</strong> holds that our best, mature scientific theories are approximately true, including
          what they say about unobservable things such as electrons, genes and fields. It has three parts: a metaphysical claim
          that the world exists independently of our minds, a semantic claim that theories are to be read literally, and an
          epistemic claim that we have good reason to believe them.
        </p>
      </Definition>

      <Example title="the no-miracles argument">
        <p>
          Hilary Putnam wrote in 1975 that realism &ldquo;is the only philosophy that does not make the success of science a
          miracle&rdquo;. The argument is an inference to the best explanation: our theories make novel, precise predictions
          that come true; the best explanation of this is that they are approximately true and their terms refer; so we should
          believe they are approximately true.
        </p>
      </Example>

      <Definition title="the base rate objection">
        <p>
          P. D. Magnus and Craig Callender argued in 2004 that the argument commits the <strong>base rate fallacy</strong>.
          Even if false theories rarely succeed, the probability that a successful theory is true depends also on how common
          true theories are among those we consider. If true theories are rare enough, most successful theories could be
          false. And we have no independent way to estimate that base rate.
        </p>
      </Definition>

      <Example title="other objections">
        <p>
          Bas van Fraassen offered a Darwinian alternative: theories that fail are discarded, so the survivors are successful
          whether or not they are true, just as mice that survive are those that flee cats, not those that understand them.
          Others object that the argument uses inference to the best explanation, the very method the anti-realist doubts, to
          defend the results of that method.
        </p>
      </Example>

      <Remark title="what comes next">
        <p>
          The strongest challenge comes from the history of science: many past theories were successful and yet, by our
          lights, false. This is the pessimistic induction, and responses to it lead to more selective forms of realism.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "realism",
      rung: "check",
      prompt: <p>What does scientific realism claim about our best theories?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are approximately true, including about unobservable things.",
          "They are useful tools that are neither true nor false.",
          "They are true only about what we can observe.",
          "They will all eventually be refuted.",
        ],
        correct: [0],
      },
    },
    {
      key: "nma",
      rung: "check",
      prompt: <p>What kind of inference is the no-miracles argument?</p>,
      answer: { kind: "choice", options: ["An inference to the best explanation", "A deduction from axioms", "An enumerative induction", "A reductio ad absurdum of realism"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>Suppose 10% of candidate theories are true, a true theory succeeds with probability 0.95 and a false one with probability 0.05. What is the probability that a successful theory is true? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.68, tolerance: 0.01 },
    },
    {
      key: "base",
      rung: "apply",
      prompt: <p>In the visualisation, lower the share of true theories to 0.01, keeping the other values. What happens to the probability that a successful theory is true?</p>,
      answer: {
        kind: "choice",
        options: ["It falls well below one half", "It stays near 0.95", "It rises", "It becomes exactly zero"],
        correct: [0],
      },
    },
    {
      key: "vanf",
      rung: "apply",
      prompt: <p>What is van Fraassen&rsquo;s Darwinian explanation of the success of science?</p>,
      answer: {
        kind: "choice",
        options: [
          "Unsuccessful theories are weeded out, so the survivors are successful whether or not they are true.",
          "Scientists evolved to discover the truth.",
          "Theories mutate until they are true.",
          "Success is a miracle.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the success of science give good reason to believe in unobservable entities? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the no-miracles argument.",
          "Considers an objection, such as the base rate fallacy, the Darwinian alternative or circularity.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could a realist estimate the base rate of true theories without already assuming realism? How?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recognises that estimating the base rate seems to require knowing which past theories were true.",
          "Considers a possible route, such as focusing on particular theories and their specific evidence instead.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend scientific realism, Putnam's no-miracles argument as an inference to the best explanation, the base rate objection, and van Fraassen's Darwinian explanation of success.",

  glimpse: (
    <p>
      Next, the pessimistic induction from the history of science: ether, caloric and phlogiston were successful too.
    </p>
  ),
};
