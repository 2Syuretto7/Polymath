import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.3.3",
  minutes: 65,
  links: {
    revisits: ["p0.2.4"],
    foreshadows: ["p0.4.2", "p0.4.4", "p1.2.1", "p7.1.5"],
  },

  puzzle: (
    <>
      <p>
        You have written an essay arguing that it is wrong to eat meat, because it causes animals to suffer when we could
        easily avoid it. A friend reads it and says: &ldquo;But by that reasoning, it would be wrong to drive a car, since
        cars kill insects that we could avoid killing by walking.&rdquo;
      </p>
      <p>
        What can you say? List every kind of response you can think of before reading on. Are some responses better than
        others, and what would it take for the friend&rsquo;s point to defeat your essay?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        There are several honest responses. You could argue that the cases differ in a way your principle already
        respects: insect deaths from driving are not the point of driving, while animal deaths are the point of a meat
        industry. You could refine the principle, to suffering of creatures capable of rich experience, or to harm we
        cause intentionally. You could accept the conclusion, and say that perhaps we should drive less. Or you could find
        that the objection is right, and change your thesis.
      </p>
      <p>
        Each of these is a <strong>reply</strong>, and an essay with a good objection and a good reply is far stronger than
        one with neither. A reader who disagrees with you is already thinking of an objection. If you state it better than
        they would and answer it, you have done their thinking and yours. If you avoid it, they stop trusting the rest.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="objection and reply">
        <p>
          An <strong>objection</strong> is a reason to think that an argument fails or that its conclusion is false. A{" "}
          <strong>reply</strong> shows why the objection does not succeed, or how the view can be changed to survive it.
        </p>
      </Definition>

      <p>There are only a few ways to object to an argument, and it helps to know which you are making:</p>
      <ol>
        <li><strong>Deny a premise.</strong> Often by a counterexample: a case where the premise is plainly false.</li>
        <li><strong>Deny validity.</strong> The premises could all be true and the conclusion false; something is missing.</li>
        <li><strong>Reject the conclusion directly.</strong> It has a consequence that is unacceptable, so something in the argument must be wrong, even if we cannot yet say what. The car objection is of this kind: it says the principle proves too much.</li>
        <li><strong>Find a rival explanation.</strong> The evidence the argument relies on is equally well explained by something else.</li>
      </ol>

      <p>And a handful of ways to reply:</p>
      <ol>
        <li><strong>Show the objection misreads the view.</strong> Only if it really does; otherwise this is a straw man in reverse.</li>
        <li><strong>Draw a distinction.</strong> Show a relevant difference between the objector&rsquo;s case and yours.</li>
        <li><strong>Refine the thesis.</strong> Concede the case and narrow the claim so it no longer applies, without making the claim trivial.</li>
        <li><strong>Bite the bullet.</strong> Accept the surprising consequence and argue that it is not as bad as it looks.</li>
        <li><strong>Turn the objection.</strong> Show that it would equally defeat the objector&rsquo;s own position.</li>
      </ol>

      <Definition title="the strongest objection">
        <p>
          Choose the objection that a well-informed, intelligent opponent would actually press, and state it in its{" "}
          <strong>steel-man</strong> form. An objection you can dismiss in one line is not worth including. If you cannot
          think of a serious objection, you have not yet understood why anyone disagrees with you.
        </p>
      </Definition>

      <Example title="Elisabeth of Bohemia and Descartes">
        <p>
          In 1643 Princess Elisabeth of Bohemia wrote to Descartes with one of the most famous objections in philosophy.
          Descartes held that the mind is a purely thinking thing with no extension, and the body a purely extended thing.
          Elisabeth asked, in substance: how can a thinking thing with no size, shape or location push a body into
          voluntary motion, when every pushing we understand involves contact between extended things?
        </p>
        <p>
          It is a model objection. It accepts Descartes&rsquo;s own premises, it identifies exactly where they strain, and
          it cannot be met by restating them. Descartes replied that the union of mind and body is a basic notion of its
          own, understood through the senses rather than through pure thought. Elisabeth answered that she found it easier
          to grant the soul matter and extension than to grant that an immaterial thing could move a body. The exchange is
          still the starting point for the mind-body problem.
        </p>
      </Example>

      <Remark title="how much to concede">
        <p>
          Students often fear that conceding anything weakens an essay. The opposite is true. A reply that admits the
          objection has force, then shows exactly how far that force reaches, reads as honest and in control. What weakens an
          essay is a reply that refines the thesis until it says nothing (&ldquo;eating meat is wrong in cases where it is
          wrong&rdquo;), or a reply that simply restates the original argument more loudly.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kind",
      rung: "check",
      prompt: (
        <p>
          &ldquo;You say all knowledge comes from experience. But we know that 7 + 5 = 12 without any experiment.&rdquo;
          What kind of objection is this?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["a counterexample to a premise", "a charge of invalidity", "a rival explanation", "a verbal dispute"],
        correct: [0],
      },
    },
    {
      key: "bullet",
      rung: "check",
      prompt: <p>Replying to the car objection with &ldquo;Then perhaps we should drive less&rdquo; is an example of&hellip;</p>,
      answer: {
        kind: "choice",
        options: ["drawing a distinction", "biting the bullet", "showing the objection misreads the view", "turning the objection"],
        correct: [1],
      },
    },
    {
      key: "proves-too-much",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;We should never trust testimony, because people sometimes lie.&rdquo; Which objection shows the argument
          proves too much?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Some people lie more than others.",
          "By the same reasoning we should never trust our own eyes, since perception sometimes errs.",
          "Testimony is a long word.",
          "Lying is morally wrong.",
        ],
        correct: [1],
      },
    },
    {
      key: "trivial",
      rung: "apply",
      prompt: <p>Select every reply that weakens an essay rather than strengthening it.</p>,
      answer: {
        kind: "choice",
        options: [
          "Refining the thesis until it is true by definition.",
          "Restating the original argument without engaging the objection.",
          "Drawing a relevant distinction between the objector's case and the essay's case.",
          "Conceding a point and showing how far it reaches.",
        ],
        correct: [0, 1],
      },
    },
    {
      key: "elisabeth",
      rung: "apply",
      prompt: <p>Why is Elisabeth&rsquo;s objection to Descartes a model objection?</p>,
      answer: {
        kind: "choice",
        options: [
          "It rejects all of Descartes's premises at once.",
          "It accepts his premises and shows exactly where they strain.",
          "It shows that Descartes was not a careful thinker.",
          "It is based on a misreading.",
        ],
        correct: [1],
      },
    },
    {
      key: "pair",
      rung: "prove",
      prompt: (
        <p>
          Take the thesis &ldquo;It is wrong to break a promise, except to prevent serious harm to someone&rdquo;. Write
          the strongest objection you can, in one paragraph, and then a reply in one paragraph. Name the kind of objection
          and the kind of reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "The objection is serious, stated as a thoughtful opponent would state it.",
          "Names the kind of objection correctly.",
          "The reply engages the objection rather than restating the thesis.",
          "Names the kind of reply correctly, and does not refine the thesis into triviality.",
        ],
      },
    },
    {
      key: "car",
      rung: "stretch",
      prompt: (
        <p>
          Write the best reply you can to the car objection from the puzzle, defending the original essay. Then write the
          best rejoinder the friend could make to your reply, and say who you think wins.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "The reply identifies a relevant difference or a principled refinement.",
          "The rejoinder engages the reply rather than repeating the original objection.",
          "The final judgement weighs both sides and gives a reason.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why a good essay raises the strongest objection to its own thesis. Use the meat and car example, and list three ways to reply.",

  glimpse: (
    <p>
      Next, revising: turning a draft with an argument, an objection and a reply into an essay. Counterexamples and
      reductio ad absurdum, the two sharpest tools for objecting, have lessons of their own in the next chapter. Elisabeth
      and Descartes return in Introduction to Philosophy with the mind-body problem, and in full in Early Modern
      Philosophy.
    </p>
  ),
};
