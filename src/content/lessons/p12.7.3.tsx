import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { AIIndicatorViz } from "@/components/viz/AIIndicatorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.7.3",
  minutes: 80,
  links: {
    revisits: ["p12.3.2", "p12.3.3", "p12.5.4"],
    foreshadows: ["p17.3.3", "p25.4.1", "p31.4.2"],
  },

  puzzle: (
    <>
      <p>
        Chatbots now pass casual versions of the Turing test, write poems about their feelings and say they are afraid of
        being switched off. Their makers say they are text predictors. Do they think? Could they feel? How would anyone tell?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a system and a theory of consciousness, and see what that theory says to look for.</p>
      <AIIndicatorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="two questions">
        <p>
          It helps to separate whether a system has <strong>cognition</strong>, such as beliefs, reasoning and understanding,
          from whether it has <strong>consciousness</strong>, such that there is something it is like to be it. A system might
          have the first without the second. Each question then depends on the theories of mind studied in this course.
        </p>
      </Definition>

      <Example title="the theories applied">
        <p>
          A functionalist says the right functional organisation suffices, whatever the material, so the question is whether
          a system has it. Searle&rsquo;s Chinese room and biological naturalism say syntax is never enough for meaning or
          experience, so no program has a mind by running alone. On theories of content, a language model&rsquo;s states may
          have only <strong>derived</strong> content, borrowed from the humans who wrote its training text, or may gain
          content through causal links to the world when connected to tools and sensors.
        </p>
      </Example>

      <Remark title="the indicator approach">
        <p>
          A 2023 report by Patrick Butlin, Robert Long and colleagues took leading scientific theories of consciousness, such
          as global workspace, recurrent processing and higher-order theories, and turned each into indicator properties that
          can be checked in an architecture. They concluded that no current system was a strong candidate, but that there were
          no obvious technical barriers to building one that satisfied the indicators.
        </p>
      </Remark>

      <Remark title="behaviour is weak evidence here">
        <p>
          Language models are trained on human text, including human descriptions of experience, so their saying they feel is
          what we would expect whether or not they do. This is the gaming problem: tests that work for animals, which were not
          trained to imitate us, are unreliable for such systems. Since wrongly denying and wrongly granting moral status both
          have costs, some philosophers recommend precaution under uncertainty.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "two",
      rung: "check",
      prompt: <p>Which two questions should be separated when asking whether an AI has a mind?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whether it has cognition, and whether it is conscious.",
          "Whether it is fast, and whether it is large.",
          "Whether it is legal, and whether it is useful.",
          "Whether it is digital, and whether it is analogue.",
        ],
        correct: [0],
      },
    },
    {
      key: "func",
      rung: "check",
      prompt: <p>What would a functionalist say decides whether an AI has mental states?</p>,
      answer: {
        kind: "choice",
        options: ["Whether it is made of neurons", "Whether it has the right functional organisation", "Whether it says it does", "Whether it is alive"],
        correct: [1],
      },
    },
    {
      key: "searle",
      rung: "apply",
      prompt: <p>What would Searle say about a chatbot that seems to understand?</p>,
      answer: {
        kind: "choice",
        options: [
          "It understands, since it passes the Turing test.",
          "Running a program, however good, is syntax and does not suffice for understanding.",
          "It understands only Chinese.",
          "It is conscious but does not understand.",
        ],
        correct: [1],
      },
    },
    {
      key: "gaming",
      rung: "apply",
      prompt: <p>Why is a chatbot&rsquo;s report that it feels sad weak evidence of feeling?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is trained on human descriptions of feelings, so it would say this either way.",
          "Because sadness is impossible.",
          "Because reports are always false.",
          "Because it is written in text.",
        ],
        correct: [0],
      },
    },
    {
      key: "indicator",
      rung: "apply",
      prompt: <p>What does the indicator approach do?</p>,
      answer: {
        kind: "choice",
        options: [
          "Asks the system whether it is conscious.",
          "Derives properties from scientific theories of consciousness and checks a system’s architecture for them.",
          "Measures the system’s speed.",
          "Counts the parameters.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Could a future AI system be conscious? Argue briefly, using one theory from this course.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Picks a theory, such as functionalism, biological naturalism or a higher-order theory.",
          "Applies it to a concrete kind of system.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If we cannot tell whether a system can suffer, how should we treat it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recognises the costs of both kinds of error.",
          "Considers precaution or proportionate caution.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between asking whether an AI thinks and whether it is conscious, what functionalism and Searle would say, the indicator approach, and why a chatbot's reports are weak evidence.",

  glimpse: (
    <p>
      This completes the course on the philosophy of mind. Later courses take up computability and the mind, the ethics of
      artificial intelligence, and the moral status of artificial agents.
    </p>
  ),
};
