import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ProhibitViz } from "@/components/viz/ProhibitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.2.1",
  minutes: 85,
  links: {
    revisits: ["p16.1.3", "p16.1.2", "p7.5.3"],
    foreshadows: ["p16.2.2", "p16.3.1", "p16.3.2"],
  },

  puzzle: (
    <>
      <p>
        Hume argued that no number of observed instances can justify a general law. Karl Popper accepted this completely, and
        drew a surprising conclusion: science never needed induction in the first place. How could science work without
        inferring laws from instances?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose an outcome and see which theories it refutes, and how much each theory risked.</p>
      <ProhibitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="falsificationism">
        <p>
          In <em>The Logic of Scientific Discovery</em> (1934, English 1959) and <em>Conjectures and Refutations</em> (1963),
          Popper argued that science proceeds by <strong>conjectures and refutations</strong>. Scientists propose bold
          hypotheses and try hard to refute them. A refutation is a valid deduction, by modus tollens, so the method uses only
          deductive logic. A theory that has survived is not thereby shown true or probable; it has merely not yet been
          refuted.
        </p>
      </Definition>

      <Definition title="content and boldness">
        <p>
          A theory&rsquo;s <strong>empirical content</strong> is the class of observations it prohibits. The more it prohibits,
          the more it says, the less probable it is, and the more falsifiable. Popper therefore preferred improbable theories:
          science aims at bold, informative conjectures, not safe ones. A theory compatible with every possible observation
          says nothing about the world.
        </p>
      </Definition>

      <Example title="ad hoc rescues">
        <p>
          A refuted theory can always be saved by changing an auxiliary assumption or reinterpreting the evidence. Popper
          allowed such changes only if they increase testable content. When Uranus wandered from its predicted orbit,
          postulating a new planet was a legitimate move, because it predicted where Neptune would be found, and it was found
          in 1846. Saying the data were somehow disturbed, with no new prediction, would be a{" "}
          <strong>conventionalist stratagem</strong>.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Critics argue that falsification is not as clean as it looks. Observation reports are themselves fallible and theory
          laden, so Popper treated their acceptance as a decision. The Duhem problem means a failed prediction refutes only a
          bundle. Historians such as Kuhn noted that scientists routinely keep theories in the face of anomalies, often
          rightly. And if survival gives no reason to expect future success, it is unclear why we should rely on corroborated
          theories when building bridges.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>On Popper&rsquo;s view, how does science proceed?</p>,
      answer: {
        kind: "choice",
        options: ["By bold conjectures and attempts to refute them", "By generalising from many instances", "By collecting data without hypotheses", "By consensus"],
        correct: [0],
      },
    },
    {
      key: "content",
      rung: "check",
      prompt: <p>For Popper, what is the empirical content of a theory?</p>,
      answer: {
        kind: "choice",
        options: ["The class of observations it prohibits", "The evidence that supports it", "Its mathematical form", "The number of scientists who accept it"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the 12 outcomes does the bold theory prohibit?</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "flex",
      rung: "apply",
      prompt: <p>Why would Popper count the flexible theory&rsquo;s survival as worthless?</p>,
      answer: {
        kind: "choice",
        options: ["It prohibits nothing, so it risked nothing", "Because it is false", "Because it is too complicated", "Because it was not tested"],
        correct: [0],
      },
    },
    {
      key: "neptune",
      rung: "apply",
      prompt: <p>Why was postulating Neptune not an illegitimate ad hoc rescue of Newton&rsquo;s theory?</p>,
      answer: {
        kind: "choice",
        options: [
          "It made a new, testable prediction, where the planet would be found, which was confirmed.",
          "Because Newton was right.",
          "Because no one objected.",
          "Because it reduced the theory’s content.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Popper&rsquo;s method really avoid induction? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why refutation by modus tollens is deductive.",
          "Considers whether relying on a well-tested theory for future predictions needs an inductive assumption.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Scientists often keep a theory despite anomalies, and are sometimes right to. Does this show falsificationism is wrong as an account of good science?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives or considers an example of a theory kept despite anomalies, such as Newton’s theory and Uranus.",
          "Considers Popper’s possible reply, such as allowing content-increasing modifications, or the difference between description and norm.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Popper's method of conjectures and refutations, why he thought it avoids induction, empirical content and the value of bold theories, and the difference between legitimate and ad hoc rescues of a theory.",

  glimpse: (
    <p>
      Next, corroboration asks what positive status a surviving theory has. Kuhn and Lakatos then examine how real science
      treats anomalies, and propose different units of appraisal.
    </p>
  ),
};
