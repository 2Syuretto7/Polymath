import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Any fixed methodological rule, applied strictly, would have forbidden some episode we count as great science.",
    kind: "premise",
    note: "Feyerabend’s historical claim, argued above all through Galileo.",
    objection: "Perhaps the rules were violated only in ways a better-stated rule would allow.",
  },
  {
    claim: "Galileo defended Copernicus against strong evidence, including the tower argument, by new interpretations and rhetoric, not by the rules of his day.",
    kind: "premise",
    note: "A stone dropped from a tower lands at its foot, which seemed to show the Earth does not move.",
    objection: "Galileo’s new principle of relative motion was later vindicated, so his moves can be seen as rational in hindsight.",
  },
  {
    claim: "So any rule that forbids such moves would have held back science.",
    kind: "inference",
    note: "Following the rules would have kept the stationary Earth.",
  },
  {
    claim: "The only principle that does not inhibit progress is: anything goes.",
    kind: "conclusion",
    note: "Feyerabend called this the principle of an epistemological anarchist, partly in jest.",
    objection: "From the failure of every exceptionless rule, it does not follow that there are no good rules of thumb.",
  },
];

export const lesson: LessonContent = {
  id: "p16.3.3",
  minutes: 80,
  links: {
    revisits: ["p16.3.2", "p16.3.1", "p16.1.3"],
    foreshadows: ["p16.6.1", "p16.4.3", "p16.6.4"],
  },

  puzzle: (
    <>
      <p>
        Popper, Kuhn and Lakatos all tried to state what makes science rational. Paul Feyerabend looked at the history of
        science and claimed that every such method, if followed, would have stopped some of its greatest advances. If that
        is right, is there a scientific method at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Feyerabend&rsquo;s argument and weigh the objections.</p>
      <ArgumentStepViz title="Against method" steps={STEPS} />
    </>
  ),

  theory: (
    <>
      <Definition title="epistemological anarchism">
        <p>
          In <em>Against Method</em> (1975), Paul Feyerabend argued that there is no single method that explains or should
          govern scientific success. Every rule has been broken, and broken to good effect: by ignoring evidence, by keeping
          refuted theories, by using propaganda. The only rule that survives is &ldquo;anything goes&rdquo;, which he meant
          less as a positive method than as what a rationalist is left with.
        </p>
      </Definition>

      <Example title="counterinduction">
        <p>
          Feyerabend recommended developing hypotheses that clash with well-established theories and evidence. Facts are seen
          through theories, so some evidence against an accepted view only becomes visible from a rival standpoint. Galileo
          needed the Copernican hypothesis and a new theory of motion to see that the falling stone did not tell against a
          moving Earth.
        </p>
      </Example>

      <Definition title="proliferation and pluralism">
        <p>
          Science, on this view, progresses best through <strong>proliferation</strong>: many competing theories, including
          ones that look absurd. Feyerabend extended this to society, arguing that science should not have special authority
          in a free society and that traditions such as traditional medicine deserve a hearing.
        </p>
      </Definition>

      <Remark title="assessment">
        <p>
          Critics find his historical readings selective and his political conclusions dangerous, for instance in public
          health. Defenders read him as a corrective: methodologies are rules of thumb that good scientists bend with
          judgement, and the history of science is richer than any rulebook. His challenge pushed philosophers to study
          science as it is actually done.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "anything",
      rung: "check",
      prompt: <p>What did Feyerabend mean by &ldquo;anything goes&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "That no fixed methodological rule survives the history of science",
          "That all theories are equally true",
          "That scientists should stop doing experiments",
          "That science is always rational",
        ],
        correct: [0],
      },
    },
    {
      key: "galileo",
      rung: "check",
      prompt: <p>Which case did Feyerabend use most to argue against method?</p>,
      answer: { kind: "choice", options: ["Galileo’s defence of Copernicus", "Darwin’s voyage", "The discovery of DNA", "Newton’s prism"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which step is the conclusion?</p>,
      answer: {
        kind: "choice",
        options: ["The only principle that does not inhibit progress is: anything goes", "Galileo defended Copernicus against strong evidence", "Any rule would have held back science", "Every rule has been followed"],
        correct: [0],
      },
    },
    {
      key: "tower",
      rung: "apply",
      prompt: <p>Why did the tower argument seem to show that the Earth does not move?</p>,
      answer: {
        kind: "choice",
        options: [
          "A stone dropped from a tower lands at its foot, not behind it, as it seemed it should if the Earth moved beneath it.",
          "Towers fall over on a moving Earth.",
          "Stones fall faster than the Earth turns.",
          "The tower’s shadow does not move.",
        ],
        correct: [0],
      },
    },
    {
      key: "counter",
      rung: "apply",
      prompt: <p>Why did Feyerabend recommend counterinduction?</p>,
      answer: {
        kind: "choice",
        options: [
          "Some evidence against accepted views is visible only from a rival theory.",
          "Because induction always fails.",
          "Because evidence never matters.",
          "To make science faster.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the failure of every exceptionless rule show that there is no scientific method? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Feyerabend’s argument from historical episodes.",
          "Considers a reply, such as rules of thumb applied with judgement, or a method that is defeasible.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should science have special authority in a free society, for instance in deciding what is taught in schools? What do you think?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Feyerabend’s view that science should not have privileged authority.",
          "Considers a reason for or against, such as reliability of results, or democratic control.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Feyerabend's argument against method, the Galileo and tower example, counterinduction and proliferation, and the main criticisms of epistemological anarchism.",

  glimpse: (
    <p>
      Next, the philosophy of confirmation looks at how evidence supports theories in detail, starting with the raven
      paradox. Later, the realism debate asks whether scientific success shows that theories are true.
    </p>
  ),
};
