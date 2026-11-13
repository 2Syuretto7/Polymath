import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ExtendedCriteriaViz } from "@/components/viz/ExtendedCriteriaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.7.1",
  minutes: 75,
  links: {
    revisits: ["p12.6.2", "p12.3.1", "p10.3.1"],
    foreshadows: ["p12.7.2", "p19.2.5", "p31.3.1"],
  },

  puzzle: (
    <>
      <p>
        You no longer remember phone numbers; your phone does. When you check it for a friend&rsquo;s number, are you using a
        tool, like a calculator, or remembering, with part of your memory outside your skull?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a resource and check it against Clark and Chalmers&rsquo;s conditions.</p>
      <ExtendedCriteriaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the extended mind thesis">
        <p>
          Andy Clark and David Chalmers (1998) argued that cognitive processes, and even beliefs, can extend beyond the brain
          into the body and environment. Their <strong>parity principle</strong>: if a part of the world functions as a process
          which, were it done in the head, we would not hesitate to call cognitive, then that part of the world is part of the
          cognitive process.
        </p>
      </Definition>

      <Example title="Otto and Inga">
        <p>
          Inga hears of an exhibition at the Museum of Modern Art, recalls that it is on 53rd Street, and walks there. Otto has
          Alzheimer&rsquo;s disease and writes everything in a notebook he always carries. He hears of the exhibition, looks up
          the address, and walks there. Clark and Chalmers argue that the notebook plays the role of Inga&rsquo;s memory, so
          Otto believed the museum was on 53rd Street before he looked.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Fred Adams and Ken Aizawa objected that this confuses <strong>coupling</strong> with{" "}
          <strong>constitution</strong>: a process that is causally coupled to cognition is not thereby part of it. They also
          argued that cognition requires non-derived content, which marks in a notebook lack. Others worry about{" "}
          <strong>cognitive bloat</strong>: without strict conditions, everything on the internet would count as your belief.
          Defenders reply that the conditions block bloat, and that what matters is functional role, not location.
        </p>
      </Remark>

      <Remark title="active externalism">
        <p>
          Twin Earth externalism said content depends on distant features of the environment that play no role in what the
          thinker does now. Clark and Chalmers call their view <strong>active externalism</strong>: the external parts are
          active in driving present behaviour, just as neurons are.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "thesis",
      rung: "check",
      prompt: <p>What does the extended mind thesis claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Minds can be uploaded to computers.",
          "Cognitive processes and beliefs can extend beyond the brain into the environment.",
          "Everyone shares one mind.",
          "The mind is outside the body.",
        ],
        correct: [1],
      },
    },
    {
      key: "otto",
      rung: "check",
      prompt: <p>In the example, what plays the role of Otto&rsquo;s memory?</p>,
      answer: { kind: "choice", options: ["His wife", "A notebook he always carries", "The museum", "A computer"], correct: [1] },
    },
    {
      key: "parity",
      rung: "apply",
      prompt: <p>What does the parity principle ask us to ignore when deciding what is cognitive?</p>,
      answer: {
        kind: "choice",
        options: ["Location, inside or outside the head", "Function", "Reliability", "Content"],
        correct: [0],
      },
    },
    {
      key: "coupling",
      rung: "apply",
      prompt: <p>What is the coupling–constitution fallacy, according to Adams and Aizawa?</p>,
      answer: {
        kind: "choice",
        options: [
          "Inferring that something is part of cognition from the fact that it is causally connected to cognition.",
          "Confusing two people.",
          "Thinking that notebooks can be lost.",
          "Assuming the brain is a computer.",
        ],
        correct: [0],
      },
    },
    {
      key: "bloat",
      rung: "apply",
      prompt: <p>Why does a search engine fail Clark and Chalmers&rsquo;s conditions?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is not reliable.",
          "Its results are not automatically trusted or previously endorsed by the user.",
          "It is too fast.",
          "It is made of silicon.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Did Otto believe the museum was on 53rd Street before he opened his notebook? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the parity principle and the Otto case.",
          "Considers an objection, such as coupling versus constitution or perceptual access.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If someone steals Otto&rsquo;s notebook, have they harmed his mind? Does the answer change how you see your phone?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers whether the theft is like an assault on memory.",
          "Connects this to everyday reliance on phones.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the extended mind thesis, the parity principle, the story of Otto and Inga, the conditions for extension, and the objections from coupling and cognitive bloat.",

  glimpse: (
    <p>
      The next lesson considers enactivism, which ties the mind even more closely to the living body and its activity. Later
      lessons on technology and on self-models return to where the self ends.
    </p>
  ),
};
