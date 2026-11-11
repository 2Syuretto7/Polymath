import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { ValidityGridViz } from "@/components/viz/ValidityGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p2.1.2",
  minutes: 60,
  links: {
    revisits: ["p0.4.2", "p0.4.4"],
    parallels: ["m1.3.1"],
    foreshadows: ["p2.2.3", "p17.1.1"],
  },

  puzzle: (
    <>
      <p>Here are two arguments.</p>
      <ol>
        <li>All cats are fish. All fish have gills. So all cats have gills.</li>
        <li>All cats are mammals. All dogs are mammals. So no cat is a dog.</li>
      </ol>
      <p>
        The first is built entirely from falsehoods. The second is built entirely from truths. Yet a logician will tell you
        that the first is the better argument, in an important sense, and the second is a bad one. What could they mean?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        There are two separate ways an argument can fail. Its premises can be false, or its premises, even if true, can fail
        to support its conclusion. Logic studies the second kind of failure. An argument whose premises fully support its
        conclusion is called <strong>valid</strong>: if the premises were true, the conclusion would have to be true too.
      </p>
      <p>
        Validity is about the link, not about the parts. To see this, sort arguments by whether their premises are all true
        and whether their conclusion is true. Every box can be filled, for invalid arguments. For valid arguments, one box must
        stay empty. Click each box.
      </p>
      <ValidityGridViz />
    </>
  ),

  theory: (
    <>
      <Definition title="validity">
        <p>
          An argument is <strong>valid</strong> if it is impossible for all its premises to be true and its conclusion false.
          Equivalently: in every possible situation in which the premises are all true, the conclusion is true as well.
          Otherwise it is <strong>invalid</strong>.
        </p>
      </Definition>

      <Definition title="soundness">
        <p>
          An argument is <strong>sound</strong> if it is valid and its premises are all, in fact, true. The conclusion of a
          sound argument must be true.
        </p>
      </Definition>

      <Remark title="truth and validity are independent">
        <p>
          Statements are true or false; arguments are valid or invalid. It makes no sense to call a statement valid or an
          argument true. The grid shows that knowing the truth values of the parts tells you almost nothing about validity.
          The one exception is the empty box: if you find an argument with true premises and a false conclusion, it is
          certainly invalid.
        </p>
      </Remark>

      <Definition title="counterexample">
        <p>
          A <strong>counterexample</strong> to an argument is a possible situation in which its premises are all true and its
          conclusion false. An argument is valid exactly when it has no counterexample. The situation need not be actual:
          &ldquo;All birds can fly, so penguins can fly&rdquo; is invalid even though, as it happens, the premise is false. Just
          imagine a world in which all birds fly and penguins are not birds.
        </p>
      </Definition>

      <Example title="testing by counterexample">
        <p>
          &ldquo;Some students are musicians. Some musicians are poor. So some students are poor.&rdquo; To show this invalid,
          describe a situation: every student is a rich violinist, and the only poor musicians are some drummers who are not
          students. Both premises hold and the conclusion fails. No such situation exists for &ldquo;All students are
          musicians. All musicians are poor. So all students are poor.&rdquo; Try to imagine one, and see why you cannot.
        </p>
      </Example>

      <Remark title="two odd consequences">
        <p>
          The definition has two consequences that surprise most people. First, an argument whose premises cannot all be true
          together, such as &ldquo;It is raining. It is not raining. So the moon is made of cheese&rdquo;, is valid: there is
          no situation with all premises true, so certainly none with the conclusion false as well. Second, an argument whose
          conclusion cannot be false, such as &ldquo;Grass is green. So every triangle has three sides&rdquo;, is valid too.
          Neither argument is any use, and neither is sound. We will see later in the course why logicians accept these
          consequences rather than change the definition.
        </p>
      </Remark>

      <Quote source={<>Lewis Carroll, <cite>Through the Looking-Glass</cite></>}>
        <p>
          &ldquo;Contrariwise,&rdquo; continued Tweedledee, &ldquo;if it was so, it might be; and if it were so, it would be;
          but as it isn&rsquo;t, it ain&rsquo;t. That&rsquo;s logic.&rdquo;
        </p>
      </Quote>

      <Remark title="valid and inductively strong">
        <p>
          &ldquo;Every swan I have seen is white, so the next swan I see will be white&rdquo; is invalid: it has a
          counterexample. Yet it is not worthless. It is <strong>inductively strong</strong>: its premises make the conclusion
          probable, without guaranteeing it. This course studies validity, which is called deductive validity when the
          contrast matters. Inductive strength belongs to Critical Reasoning and Inductive Logic.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>An argument is valid when&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "its premises and conclusion are all true",
          "it is impossible for its premises to be true and its conclusion false",
          "its conclusion is true",
          "most people would accept it",
        ],
        correct: [1],
      },
    },
    {
      key: "empty-box",
      rung: "check",
      prompt: <p>Which combination is impossible for a valid argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "true premises, true conclusion",
          "true premises, false conclusion",
          "a false premise, true conclusion",
          "a false premise, false conclusion",
        ],
        correct: [1],
      },
    },
    {
      key: "classify",
      rung: "apply",
      prompt: <p>&ldquo;All cats are fish. All fish have gills. So all cats have gills.&rdquo; This argument is&hellip;</p>,
      answer: {
        kind: "choice",
        options: ["valid and sound", "valid but not sound", "invalid but sound", "invalid and not sound"],
        correct: [1],
      },
    },
    {
      key: "sound-true",
      rung: "apply",
      prompt: <p>Which of these must be true? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "Every sound argument has a true conclusion.",
          "Every valid argument has a true conclusion.",
          "Every argument with a true conclusion is valid.",
          "Every sound argument is valid.",
        ],
        correct: [0, 3],
      },
    },
    {
      key: "odd",
      rung: "apply",
      prompt: <p>&ldquo;Today is Monday and today is not Monday. So Delhi is in Brazil.&rdquo; By the definition, this argument is&hellip;</p>,
      answer: { kind: "choice", options: ["valid", "invalid"], correct: [0] },
    },
    {
      key: "counter",
      rung: "prove",
      prompt: (
        <p>
          Show that this argument is invalid by describing a counterexample: &ldquo;If the economy grows, unemployment falls.
          Unemployment has fallen. So the economy has grown.&rdquo; Then explain why your situation is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Describes a possible situation where growth would reduce unemployment, unemployment has fallen for another reason (for example, many people retiring), and the economy has not grown.",
          "Checks that both premises are true and the conclusion false in that situation.",
          "Explains that one such situation shows the truth of the premises does not guarantee the conclusion.",
        ],
      },
    },
    {
      key: "why-define",
      rung: "stretch",
      prompt: (
        <p>
          Someone proposes changing the definition so that an argument with inconsistent premises counts as invalid. Describe
          one advantage and one cost of the change. Which definition would you keep?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies an advantage, such as avoiding the strange result that anything follows from a contradiction.",
          "Identifies a cost, such as losing the simple definition, or making reductio ad absurdum and proof by contradiction harder to justify.",
          "Reaches a reasoned verdict, open to either side.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between a valid argument and a sound one, and why a valid argument can have a false conclusion.",

  glimpse: (
    <p>
      For now, validity is judged by imagining situations. Later in this course, truth tables will replace imagination with a
      mechanical test for one kind of argument. Logic II: Metalogic and Beyond then asks whether proof methods are sound,
      proving only valid arguments, which is the same word used in a related sense.
    </p>
  ),
};
