import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FactiveViz } from "@/components/viz/FactiveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p28.1.1",
  minutes: 90,
  links: {
    revisits: ["p10.1.4", "p10.1.2", "p26.3.1"],
    foreshadows: ["p28.1.2", "p28.1.3", "p28.4.1"],
  },

  puzzle: (
    <>
      <p>
        After Gettier, philosophers spent forty years looking for the extra ingredient that turns justified true belief
        into knowledge. Every proposal met a counterexample. Perhaps the search was misguided from the start. What if
        knowledge is not built from belief at all, and belief is instead to be understood through knowledge?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose an attitude, and test whether it is factive, whether it is a mental state, and whether it entails knowing.</p>
      <FactiveViz />
    </>
  ),

  theory: (
    <>
      <Definition title="factive mental states">
        <p>
          An attitude is <strong>factive</strong> if one can have it towards p only if p is true: seeing that, remembering
          that, regretting that. Timothy Williamson, in <em>Knowledge and Its Limits</em> (2000), calls such an attitude a{" "}
          <strong>factive mental state</strong> when it is also a state of mind, as believing is and proving is not.
        </p>
      </Definition>

      <Definition title="knowledge first">
        <p>
          Williamson&rsquo;s thesis: knowing is the most general factive mental state. Whatever factive mental state one is
          in towards p, one knows p. Knowledge is a mental state in its own right, not a combination of an inner belief and
          an outer fact. It has no analysis into more basic conditions; instead it is used to explain belief, evidence,
          justification and assertion.
        </p>
      </Definition>

      <Example title="the burglar">
        <p>
          A burglar who knows there is a diamond in the house will search longer and harder, when the first room is empty,
          than one who merely truly believes it, since mere true belief is more easily lost on finding misleading evidence.
          So knowledge, not just true belief, can figure in the best explanation of action. That is the mark of a mental
          state.
        </p>
      </Example>

      <Remark title="consequences and objections">
        <p>
          The program proposes that belief is the attitude that aims at knowledge, and that one should assert only what one
          knows: the <strong>knowledge norm of assertion</strong>. Critics reply that the mental should be fixed by what is
          in the head, so that a factive state cannot be purely mental; and that knowledge&rsquo;s place in explanation may
          be taken by belief that is safe or sensitive to the facts.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "fact",
      rung: "check",
      prompt: <p>What does it mean for an attitude to be factive?</p>,
      answer: { kind: "choice", options: ["One can have it towards p only if p is true", "It is about facts rather than values", "It is based on evidence", "It is held with certainty"], correct: [0] },
    },
    {
      key: "thesis",
      rung: "check",
      prompt: <p>What is Williamson&rsquo;s central thesis?</p>,
      answer: { kind: "choice", options: ["Knowing is the most general factive mental state", "Knowledge is justified true belief", "Knowledge is impossible", "Knowledge is a kind of certainty"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which attitude is factive but not a mental state?</p>,
      answer: { kind: "choice", options: ["Proves that", "Believes that", "Remembers that", "Is certain that"], correct: [0] },
    },
    {
      key: "assert",
      rung: "apply",
      prompt: <p>What does the knowledge norm of assertion say?</p>,
      answer: { kind: "choice", options: ["One should assert p only if one knows p", "One should assert whatever one believes", "One should assert only what is certain", "One should never assert falsehoods knowingly"], correct: [0] },
    },
    {
      key: "burg",
      rung: "apply",
      prompt: <p>What is the burglar example meant to show?</p>,
      answer: { kind: "choice", options: ["Knowledge can explain action better than mere true belief", "Burglars lack knowledge", "True belief is enough for action", "Knowledge requires certainty"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is knowledge a mental state? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Williamson’s view, or the view that the mental is fixed by what is in the head.",
          "Gives a consideration, such as the role of knowledge in explaining action or the factivity of knowledge.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the failure of every proposed analysis after Gettier show that knowledge cannot be analysed?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the history of failed analyses.",
          "Considers whether an inductive argument from failure is strong, or whether other concepts also lack analyses.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If knowledge is a mental state, can we always tell which mental states we are in? Descartes thought our own minds
        were transparent to us. Williamson argues that almost nothing is.
      </p>
      <p>Next, luminosity.</p>
    </>
  ),
};
