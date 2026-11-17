import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { EquinumerosityViz } from "@/components/viz/EquinumerosityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p18.1.1",
  minutes: 80,
  links: {
    revisits: ["p17.3.1", "m1.4.1", "p11.2.2"],
    foreshadows: ["p18.1.2", "p18.1.3", "p18.2.3"],
  },

  puzzle: (
    <>
      <p>
        Why is 7 + 5 = 12 true? Not because we have checked many collections of seven and five things; no experience
        could show that it holds always and of necessity. Kant thought arithmetic rests on our intuition of time. Gottlob
        Frege thought it rests on nothing but logic. If he was right, what are numbers?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Decide whether there are as many cups as saucers without counting either.</p>
      <EquinumerosityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="logicism">
        <p>
          <strong>Logicism</strong> is the thesis that arithmetic is logic in disguise: its concepts can be defined in purely
          logical terms and its truths proved from logical laws alone. If so, arithmetic is analytic, not synthetic as Kant
          held, and we know it as we know logic. Frege argued for this in <em>The Foundations of Arithmetic</em> (1884) and
          tried to carry it out in full in <em>Basic Laws of Arithmetic</em> (1893 and 1903).
        </p>
      </Definition>

      <Example title="numbers from concepts">
        <p>
          A statement of number, Frege said, is about a concept: &ldquo;Venus has 0 moons&rdquo; says that nothing falls
          under the concept moon of Venus. Two concepts are equinumerous when their instances can be paired one to one.{" "}
          <strong>Hume&rsquo;s principle</strong> says that the number of Fs is the number of Gs exactly when F and G are
          equinumerous. Frege then defined the number of Fs as the extension of the concept equinumerous with F, defined 0
          as the number of things not identical with themselves, and the successor relation by adding one more object.
        </p>
      </Example>

      <Theorem title="Russell’s letter">
        <p>
          To handle extensions, Frege adopted <strong>Basic Law V</strong>: the extension of F equals the extension of G
          exactly when every F is a G and every G is an F. In June 1902, as the second volume was in press, Bertrand Russell
          wrote to point out that the law yields a contradiction: consider the extension of the concept being the extension
          of a concept under which it does not fall. Frege added an appendix admitting that arithmetic had been left
          tottering. Russell and Whitehead&rsquo;s <em>Principia Mathematica</em> (1910 to 1913) rebuilt the project with a
          theory of types, but needed an axiom of infinity and an axiom of reducibility that few would call laws of logic.
        </p>
      </Theorem>

      <Remark title="what survives">
        <p>
          <strong>Frege&rsquo;s theorem</strong>: in second-order logic, which quantifies over concepts as well as objects, Hume&rsquo;s principle alone yields all the axioms of
          arithmetic, and it is consistent. Neo-logicists such as Crispin Wright and Bob Hale take Hume&rsquo;s principle as
          an analytic definition and so revive a form of logicism. Critics ask whether it is really a truth of logic, given
          that it implies there are infinitely many objects. Gödel&rsquo;s incompleteness theorems add that no single
          consistent formal system of this kind proves every arithmetical truth.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "thesis",
      rung: "check",
      prompt: <p>What is logicism?</p>,
      answer: {
        kind: "choice",
        options: [
          "The thesis that arithmetic can be derived from logic together with definitions of its concepts.",
          "The thesis that logic is a branch of psychology.",
          "The thesis that arithmetic rests on intuitions of time.",
          "The thesis that numbers are marks on paper.",
        ],
        correct: [0],
      },
    },
    {
      key: "hume",
      rung: "check",
      prompt: <p>What does Hume&rsquo;s principle say?</p>,
      answer: {
        kind: "choice",
        options: [
          "The number of Fs equals the number of Gs exactly when the Fs and the Gs can be paired one to one.",
          "Every number has a successor.",
          "Two concepts with the same instances are the same concept.",
          "Causes resemble their effects.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set 6 cups and 9 saucers and pair all. How many saucers are left unpaired?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "lawv",
      rung: "apply",
      prompt: <p>Which of Frege&rsquo;s principles did Russell&rsquo;s paradox show to be inconsistent?</p>,
      answer: {
        kind: "choice",
        options: [
          "Basic Law V, about when two concepts have the same extension.",
          "Hume’s principle.",
          "The law of excluded middle.",
          "Modus ponens.",
        ],
        correct: [0],
      },
    },
    {
      key: "neo",
      rung: "apply",
      prompt: <p>Why does Frege&rsquo;s theorem give hope to neo-logicists?</p>,
      answer: {
        kind: "choice",
        options: [
          "Hume’s principle, which is consistent, suffices in second-order logic for all the axioms of arithmetic.",
          "It shows that Basic Law V is consistent after all.",
          "It proves every arithmetical truth.",
          "It shows numbers are physical objects.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Did Russell&rsquo;s paradox refute logicism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States how Basic Law V led to the contradiction and why Frege needed it.",
          "Considers a later attempt to save the project, such as Principia’s types or neo-logicism from Hume’s principle, and a doubt about it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Hume&rsquo;s principle implies that infinitely many objects exist. Can a principle with that consequence be a truth of logic?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the worry that logic should not settle how many things there are.",
          "Considers a reply, such as that numbers are abstract objects whose existence follows from a definition, or that logic is not neutral about existence anyway.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the Begriffsschrift: the formal language Frege invented to make proofs gapless, with quantifiers and the logic
      of relations that Aristotle&rsquo;s logic lacked.
    </p>
  ),
};
