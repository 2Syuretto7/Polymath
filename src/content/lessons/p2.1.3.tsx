import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { FormViz } from "@/components/viz/FormViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p2.1.3",
  minutes: 65,
  links: {
    revisits: ["p0.2.3", "p0.4.2"],
    parallels: ["m1.3.2"],
    foreshadows: ["p2.2.1", "p2.4.1", "p15.1.2"],
  },

  puzzle: (
    <>
      <p>Read these two arguments side by side.</p>
      <ol>
        <li>If it is raining, the pavement is wet. It is raining. So the pavement is wet.</li>
        <li>If Tibbles is a dog, Tibbles is a mammal. Tibbles is a dog. So Tibbles is a mammal.</li>
      </ol>
      <p>
        They are about entirely different things, yet they seem to be the same argument in different clothes. And both seem
        valid for the same reason. If that is right, then validity has nothing to do with rain or cats. What, then, is it
        about?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Strip the subject matter from an argument and what is left is its <strong>form</strong>. Both arguments in the puzzle
        have the shape &ldquo;If P, then Q. P. So Q.&rdquo;, where P and Q stand for any statements at all. Whatever you put in
        for P and Q, if the premises come out true, so does the conclusion. That is why logic can study validity without
        knowing anything about rain or pets.
      </p>
      <p>
        Below are six common forms. Some are valid; some are fallacies that look valid at first sight. For each, give your
        verdict, then see why. For the invalid ones you will be shown a counterexample.
      </p>
      <FormViz />
    </>
  ),

  theory: (
    <>
      <Definition title="form and instance">
        <p>
          An <strong>argument form</strong> is a pattern of sentences built from <strong>schematic letters</strong> such as P
          and Q together with fixed words such as <em>if &hellip; then</em>, <em>and</em>, <em>or</em> and <em>not</em>. An{" "}
          <strong>instance</strong> of the form is any argument obtained by putting statements in place of the letters, the
          same statement for each occurrence of the same letter.
        </p>
      </Definition>

      <Definition title="valid form">
        <p>
          A form is <strong>valid</strong> if every one of its instances is a valid argument; that is, no instance has true
          premises and a false conclusion. Otherwise it is <strong>invalid</strong>, and a single instance with true premises
          and a false conclusion is enough to show it.
        </p>
      </Definition>

      <Example title="four forms worth knowing by name">
        <ul>
          <li>
            <strong>Modus ponens</strong>: If P, then Q. P. So Q. Valid.
          </li>
          <li>
            <strong>Modus tollens</strong>: If P, then Q. Not Q. So not P. Valid. (This is the form behind proof by
            contrapositive.)
          </li>
          <li>
            <strong>Affirming the consequent</strong>: If P, then Q. Q. So P. Invalid.
          </li>
          <li>
            <strong>Denying the antecedent</strong>: If P, then Q. Not P. So not Q. Invalid.
          </li>
        </ul>
        <p>
          In &ldquo;If P, then Q&rdquo;, P is the <strong>antecedent</strong> and Q the <strong>consequent</strong>. The two
          invalid forms are so common that they have their own names as fallacies.
        </p>
      </Example>

      <Remark title="an invalid form can have valid instances">
        <p>
          A valid form guarantees that every instance is valid. But an invalid form does not guarantee that every instance is
          invalid. &ldquo;If a shape is a square, it is a rectangle with four equal sides. This shape is a rectangle with four
          equal sides. So it is a square&rdquo; has the form of affirming the consequent, yet it is valid, because a rectangle
          with four equal sides must be a square. Its validity comes from the meanings of the words, not from its form. So to
          show that an argument is invalid, it is not enough to say its form is a fallacy; you must describe a situation in
          which its own premises are true and its conclusion false.
        </p>
      </Remark>

      <Remark title="the method of counterexample">
        <p>
          To show a form invalid, find an instance whose premises are plainly true and whose conclusion is plainly false. If
          someone argues &ldquo;If the plan were a good one, the board would approve it; the board approved it; so the plan is
          a good one&rdquo;, you can reply: by the same reasoning, &ldquo;If Tibbles were a dog, Tibbles would be a mammal;
          Tibbles is a mammal; so Tibbles is a dog.&rdquo; That is a form of argument you met in Thinking and Writing
          Philosophically, and now you can see why it works.
        </p>
      </Remark>

      <Quote source={<>Lewis Carroll, <cite>Through the Looking-Glass</cite></>}>
        <p>
          &ldquo;I see nobody on the road,&rdquo; said Alice. &ldquo;I only wish I had such eyes,&rdquo; the King remarked in
          a fretful tone. &ldquo;To be able to see Nobody! And at that distance, too!&rdquo;
        </p>
      </Quote>

      <Remark title="grammatical form is not logical form">
        <p>
          The King treats &ldquo;nobody&rdquo; as a name, like &ldquo;Alice&rdquo;. &ldquo;I see Alice on the road&rdquo; and
          &ldquo;I see nobody on the road&rdquo; look alike, but the first says something about a person while the second
          says that there is no one. Treat such words as names and absurdities follow: &ldquo;Nothing is better than lifelong
          happiness. A cheese sandwich is better than nothing. So a cheese sandwich is better than lifelong happiness.&rdquo;
          The argument looks like a chain of &ldquo;better than&rdquo; claims, but &ldquo;nothing&rdquo; is not a thing in the
          chain. Finding the real logical
          form behind the grammar is the job of the formal languages built in the rest of this course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "name",
      rung: "check",
      prompt: <p>&ldquo;If P, then Q. Not Q. So not P.&rdquo; What is this form called?</p>,
      answer: {
        kind: "choice",
        options: ["modus ponens", "modus tollens", "affirming the consequent", "denying the antecedent"],
        correct: [1],
      },
    },
    {
      key: "invalid-forms",
      rung: "check",
      prompt: <p>Which of these forms are invalid? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["modus ponens", "modus tollens", "affirming the consequent", "denying the antecedent", "disjunctive syllogism"],
        correct: [2, 3],
      },
    },
    {
      key: "identify",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;If the alarm was set, the guard would have heard it. The guard did not hear it. So the alarm was not
          set.&rdquo; Which form does this argument have?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["modus ponens", "modus tollens", "affirming the consequent", "denying the antecedent"],
        correct: [1],
      },
    },
    {
      key: "identify-2",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;If you studied, you passed. You didn&rsquo;t study. So you didn&rsquo;t pass.&rdquo; Which form does this
          argument have?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["modus ponens", "modus tollens", "affirming the consequent", "denying the antecedent"],
        correct: [3],
      },
    },
    {
      key: "disjunct",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;The keys are in the drawer or in the car. They are in the drawer. So they are not in the car.&rdquo; In the
          sense of &ldquo;or&rdquo; used in logic, is this argument form valid?
        </p>
      ),
      answer: { kind: "choice", options: ["valid", "invalid"], correct: [1] },
    },
    {
      key: "refute",
      rung: "prove",
      prompt: (
        <p>
          Someone argues: &ldquo;If a country is a democracy, it holds elections. This country holds elections. So it is a
          democracy.&rdquo; Name the form, and refute the argument by giving an instance of the same form with plainly true
          premises and a plainly false conclusion.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Names the form as affirming the consequent.",
          "Gives an instance of the form, 'If P, then Q. Q. So P.', with the same structure.",
          "The instance's premises are plainly true and its conclusion plainly false.",
          "Notes, for full marks, that the original might still fail for its own reason: a country can hold elections without being a democracy.",
        ],
      },
    },
    {
      key: "valid-instance",
      rung: "stretch",
      prompt: (
        <p>
          Give your own example of a valid argument that is an instance of an invalid form, and explain where its validity comes
          from. What does this show about the limits of judging arguments by form alone?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives an argument that is an instance of an invalid form (such as affirming the consequent).",
          "Shows it is nonetheless valid, because of the meaning of its words or a necessary connection between its parts.",
          "Concludes that an invalid form does not settle that an instance is invalid; a counterexample must fit the actual argument.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the form of an argument is, why modus ponens is valid and affirming the consequent is not, and how a counterexample shows a form is invalid.",

  glimpse: (
    <p>
      Our forms used English words such as &ldquo;if&rdquo; and &ldquo;or&rdquo;, which can be slippery. Next we replace them
      with symbols that have exact meanings, and later add symbols for &ldquo;all&rdquo; and &ldquo;some&rdquo;. In Philosophy
      of Language, Russell&rsquo;s theory of descriptions shows how far logical form can lie from grammatical form, starting
      with sentences that seem to be about things that do not exist.
    </p>
  ),
};
