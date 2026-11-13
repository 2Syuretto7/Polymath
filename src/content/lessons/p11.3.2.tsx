import { Definition, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { CounterpartViz } from "@/components/viz/CounterpartViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.3.2",
  minutes: 85,
  links: {
    revisits: ["p11.3.1", "p11.2.1", "p11.1.2"],
    foreshadows: ["p11.3.3", "p27.2.1", "p27.2.3"],
  },

  puzzle: (
    <>
      <p>
        David Lewis claimed that there really are talking donkeys, unicorns and worlds where you became an astronaut. They
        exist just as fully as we do, only not here. Most people meet this with an incredulous stare. Why would a careful
        philosopher believe it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        On Lewis&rsquo;s view, you exist in one world only, and what you could have done is settled by your counterparts
        elsewhere. Move the similarity threshold and see which modal claims about Humphrey come out true.
      </p>
      <CounterpartViz />
    </>
  ),

  theory: (
    <>
      <Definition title="modal realism">
        <p>
          <strong>Modal realism</strong> holds that there are infinitely many possible worlds, each a concrete, spatiotemporally
          unified universe, causally isolated from the others. Our world is one of them. &ldquo;Actual&rdquo; is an{" "}
          <strong>indexical</strong>, like &ldquo;here&rdquo;: each world is actual from its own point of view.
        </p>
      </Definition>

      <ArgumentStepViz
        title="Lewis's argument from utility"
        steps={[
          { claim: "Possible worlds analyses explain modality, counterfactuals, properties and propositions.", kind: "premise", note: "A ‘paradise for philosophers’: properties as sets of possible individuals, propositions as sets of worlds." },
          { claim: "The best analyses take worlds literally, and reduce modality to something non-modal.", kind: "premise", note: "Abstract worlds, Lewis argues, must be defined using modal notions such as consistency.", objection: "Perhaps a modal primitive is an acceptable price." },
          { claim: "We should accept the ontology of our best theory, as we do in mathematics.", kind: "premise", note: "A Quinean cost–benefit argument.", objection: "Theoretical benefits may not justify belief in a vast ontology of concrete universes." },
          { claim: "So we should believe in concrete possible worlds.", kind: "conclusion", note: "The price is high, Lewis grants, but worth paying." },
        ]}
      />

      <Remark title="counterpart theory">
        <p>
          Individuals are <strong>world-bound</strong>: each exists in one world only. &ldquo;Humphrey could have won&rdquo; is
          true because some counterpart of Humphrey, someone in another world sufficiently like him, wins. Similarity is
          vague and depends on context, which Lewis took to explain why modal judgements shift with context.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          The <strong>incredulous stare</strong>: the view is simply unbelievable. The <strong>Humphrey objection</strong>{" "}
          (Kripke): Humphrey cares whether he himself could have won, not whether someone else does. The epistemic problem: if
          worlds are causally isolated, how do we know what they contain? Lewis answers that modal knowledge, like mathematical
          knowledge, needs no causal contact, and that the counterpart of Humphrey is the right thing for &ldquo;he could have
          won&rdquo; to be about.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What are possible worlds according to Lewis?</p>,
      answer: {
        kind: "choice",
        options: ["Sets of sentences", "Concrete universes like ours, causally isolated from each other", "Ideas in God’s mind", "Useful fictions"],
        correct: [1],
      },
    },
    {
      key: "actual",
      rung: "check",
      prompt: <p>What does Lewis mean by calling &ldquo;actual&rdquo; indexical?</p>,
      answer: {
        kind: "choice",
        options: [
          "Like ‘here’, it picks out the world of whoever uses it",
          "It names our world alone, rigidly",
          "It means ‘most real’",
          "It is meaningless",
        ],
        correct: [0],
      },
    },
    {
      key: "cp",
      rung: "apply",
      prompt: <p>On counterpart theory, what makes &ldquo;Humphrey could have won&rdquo; true?</p>,
      answer: {
        kind: "choice",
        options: [
          "Humphrey himself wins in another world",
          "A counterpart of Humphrey in some world wins",
          "Humphrey believes he could have won",
          "Nothing: it is false",
        ],
        correct: [1],
      },
    },
    {
      key: "kripke",
      rung: "apply",
      prompt: <p>What is Kripke&rsquo;s Humphrey objection?</p>,
      answer: {
        kind: "choice",
        options: [
          "Humphrey could not have won.",
          "Humphrey cares whether he himself could have won, not whether someone else in another world does.",
          "Counterparts are not similar enough.",
          "There is only one world.",
        ],
        correct: [1],
      },
    },
    {
      key: "reduce",
      rung: "apply",
      prompt: <p>Why does Lewis reject abstract worlds such as consistent sets of sentences?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because they are too small.",
          "Because defining them needs a modal notion such as consistency, so modality is not reduced.",
          "Because sentences do not exist.",
          "Because they are concrete.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the incredulous stare a good objection to modal realism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the view and its theoretical benefits.",
          "Considers whether conflict with common sense counts as evidence against a theory.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "egg",
      rung: "stretch",
      prompt: <p>Could you have been a poached egg? How would a counterpart theorist answer, and does context matter?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that the answer turns on whether any egg is similar enough to count as your counterpart.",
          "Notes that the similarity standard may shift with context.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Lewis's modal realism, the indexical view of actuality, his argument from theoretical utility, counterpart theory, and the incredulous stare and Humphrey objections.",

  glimpse: (
    <p>
      The next lesson considers actualism, which keeps worlds but makes them actually existing abstract things. Graduate
      metaphysics returns to Lewis&rsquo;s realism and to how we come to know what is possible.
    </p>
  ),
};
