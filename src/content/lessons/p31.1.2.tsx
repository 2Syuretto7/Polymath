import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ToyPhiViz } from "@/components/viz/ToyPhiViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p31.1.2",
  minutes: 90,
  links: {
    revisits: ["p31.1.1", "p12.5.3", "p12.4.2"],
    foreshadows: ["p31.1.3", "p31.4.1", "p31.4.2"],
  },

  puzzle: (
    <>
      <p>
        A digital camera sensor has millions of photodiodes, each responding to light, yet nobody thinks the camera sees.
        The sensor can record more distinct images than you could ever tell apart, and you do see. If the difference is not
        the number of parts or the amount of information, what is it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a wiring for four units, and find the weakest way to cut the system in two.</p>
      <ToyPhiViz />
    </>
  ),

  theory: (
    <>
      <Definition title="integrated information theory">
        <p>
          Giulio Tononi&rsquo;s <strong>integrated information theory</strong> (IIT), first proposed in 2004, starts from
          axioms said to be true of every experience: it exists intrinsically, is structured, specific, unified and definite.
          It then asks what a physical system must be like to match them. Its answer: consciousness is{" "}
          <strong>integrated information</strong>, the extent to which a system&rsquo;s causal structure is irreducible to
          that of its parts, measured by a quantity Φ (phi).
        </p>
      </Definition>

      <Definition title="Φ and the weakest cut">
        <p>
          Roughly, Φ compares how much the whole system&rsquo;s current state constrains its past and future states with how
          much its parts do separately, across the partition that makes the least difference. A system that can be cut
          without loss, such as two independent halves or a purely feedforward pipeline, has Φ = 0. The conscious entity is
          the subsystem with maximal Φ, and the quality of the experience is the shape of its cause-effect structure.
        </p>
      </Definition>

      <Example title="predictions">
        <p>
          IIT explains why the cerebellum, with more neurons than the cortex but a largely modular, parallel structure,
          seems to contribute little to consciousness, and why consciousness fades in dreamless sleep and generalised seizures,
          when cortical activity becomes uniform. The perturbational complexity index, which measures how richly the cortex
          responds to a magnetic pulse, was inspired by IIT and is used to assess patients with disorders of consciousness.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Scott Aaronson showed that simple, regular networks such as large grids of logic gates can have enormous Φ, so IIT
          implies they are highly conscious; Tononi accepted the consequence. IIT also implies that a perfect digital
          simulation of a brain on ordinary hardware would not be conscious, since its causal structure differs, and that
          some degree of consciousness is widespread. In 2023 more than a hundred researchers signed a letter calling IIT
          pseudoscience, prompting a sharp debate about what counts as a testable theory of consciousness.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>According to IIT, what is consciousness?</p>,
      answer: { kind: "choice", options: ["Integrated information: causal structure irreducible to that of the parts", "Global broadcast of information", "Any processing of information", "Higher-order thought about one’s states"], correct: [0] },
    },
    {
      key: "ff",
      rung: "check",
      prompt: <p>What value of Φ does IIT assign to a purely feedforward system?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what toy integration score does the one-way ring receive?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "cereb",
      rung: "apply",
      prompt: <p>How does IIT explain the cerebellum&rsquo;s apparent small role in consciousness?</p>,
      answer: { kind: "choice", options: ["Its structure is largely modular and parallel, so integration is low", "It has too few neurons", "It is not made of neurons", "It only works during sleep"], correct: [0] },
    },
    {
      key: "sim",
      rung: "apply",
      prompt: <p>What does IIT say about a perfect simulation of a brain on a conventional computer?</p>,
      answer: { kind: "choice", options: ["It need not be conscious, since its physical causal structure differs", "It must be conscious, since it computes the same function", "It is conscious only if it passes the Turing test", "IIT says nothing about computers"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is it a decisive objection to IIT that it attributes high consciousness to simple grids of logic gates? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the objection fairly.",
          "Considers a reply, such as biting the bullet or questioning intuitions about consciousness.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Global workspace theory and IIT disagree about whether a simulated brain is conscious. Which is more plausible, and why?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the workspace theory is functional and IIT is about physical causal structure.",
          "Weighs at least one consideration on each side.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Both theories so far treat the brain as receiving input and responding to it. A third view turns this round: the
        brain is constantly guessing what its input will be, and what reaches it from the world is mostly news of its errors.
      </p>
      <p>Next, predictive processing.</p>
    </>
  ),
};
