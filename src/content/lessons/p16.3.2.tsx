import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ProgrammeViz } from "@/components/viz/ProgrammeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.3.2",
  minutes: 80,
  links: {
    revisits: ["p16.3.1", "p16.2.1", "p16.1.2"],
    foreshadows: ["p16.3.3", "p16.4.3", "p16.6.1"],
  },

  puzzle: (
    <>
      <p>
        Newton&rsquo;s theory faced anomalies from the start, and its defenders kept it, adding hypotheses to explain them away.
        Sometimes this led to triumphs, like the discovery of Neptune, and sometimes to dead ends, like the planet Vulcan.
        Popper says hold theories open to refutation; Kuhn says scientists hold on regardless. Is there a rational way to
        tell good persistence from bad?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose which modifications Newton&rsquo;s programme makes, and see how the programme is judged.</p>
      <ProgrammeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="research programmes">
        <p>
          Imre Lakatos, in &ldquo;Falsification and the Methodology of Scientific Research Programmes&rdquo; (1970), took the
          unit of appraisal to be a <strong>research programme</strong>: a series of theories sharing a{" "}
          <strong>hard core</strong>, made irrefutable by methodological decision, surrounded by a{" "}
          <strong>protective belt</strong> of auxiliary hypotheses that absorb anomalies. The negative heuristic forbids
          aiming refutations at the core; the positive heuristic says how to develop the belt.
        </p>
      </Definition>

      <Definition title="progressive and degenerating">
        <p>
          A programme is <strong>theoretically progressive</strong> if each new theory predicts some novel fact, and{" "}
          <strong>empirically progressive</strong> if some of these predictions are borne out. It is{" "}
          <strong>degenerating</strong> if its changes only accommodate known facts after the event. Scientists should, in
          time, prefer progressive programmes to degenerating rivals.
        </p>
      </Definition>

      <Example title="Newton and the planets">
        <p>
          Adams and Le Verrier met the anomaly in Uranus&rsquo;s orbit by postulating a new planet and predicting its position,
          and Neptune was found in 1846: a progressive shift. Le Verrier&rsquo;s similar move for Mercury, the planet Vulcan,
          was never confirmed; Mercury&rsquo;s motion was finally explained by general relativity, a rival programme with a
          new core.
        </p>
      </Example>

      <Remark title="instant rationality">
        <p>
          Lakatos held that there is no instant rationality: a degenerating programme may recover, as the atomic theory did,
          so it is not irrational to keep working on it, provided one is honest about its record. Feyerabend replied that
          without a deadline the methodology forbids nothing, so it is &ldquo;anything goes&rdquo; in disguise. Others ask
          what makes a fact novel: unknown before, or simply not used in building the theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "unit",
      rung: "check",
      prompt: <p>For Lakatos, what is the unit of scientific appraisal?</p>,
      answer: { kind: "choice", options: ["A research programme", "A single hypothesis", "A paradigm", "An experiment"], correct: [0] },
    },
    {
      key: "core",
      rung: "check",
      prompt: <p>What is the role of the protective belt?</p>,
      answer: {
        kind: "choice",
        options: [
          "Auxiliary hypotheses that are modified to absorb anomalies, protecting the hard core",
          "A list of forbidden experiments",
          "The programme’s funding",
          "The rival programmes",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, select only the Vulcan modification. How is the programme judged?</p>,
      answer: { kind: "choice", options: ["Degenerating", "Progressive", "Refuted", "Unchanged"], correct: [0] },
    },
    {
      key: "neptune",
      rung: "apply",
      prompt: <p>Why was postulating Neptune a progressive shift?</p>,
      answer: {
        kind: "choice",
        options: [
          "It predicted a novel fact, the planet’s position, which was confirmed.",
          "Because it saved the hard core.",
          "Because astronomers liked it.",
          "Because it made no prediction.",
        ],
        correct: [0],
      },
    },
    {
      key: "kuhnpopper",
      rung: "apply",
      prompt: <p>How does Lakatos combine Popper and Kuhn?</p>,
      answer: {
        kind: "choice",
        options: [
          "Like Kuhn he allows tenacity about a core, like Popper he judges by risky, novel predictions.",
          "He accepts Kuhn’s view entirely.",
          "He accepts Popper’s view entirely.",
          "He rejects both and says anything goes.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is it rational to keep working on a degenerating programme? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains what makes a programme degenerating.",
          "Considers Lakatos’s point that programmes can recover, and Feyerabend’s worry that this removes any constraint.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should a fact count as novel if it was already known but not used in building the theory, like Mercury&rsquo;s perihelion for general relativity? What do you think?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes temporal novelty, unknown before, from use novelty, not used in construction.",
          "Considers what each implies for the Mercury case.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Lakatos's research programmes with hard core and protective belt, the difference between progressive and degenerating programmes, the Neptune and Vulcan examples, and the problem of when to give up a programme.",

  glimpse: (
    <p>
      Next, Feyerabend argues that every proposed methodology would have blocked some great advance. Bayesian confirmation
      offers yet another way to say why novel predictions matter.
    </p>
  ),
};
