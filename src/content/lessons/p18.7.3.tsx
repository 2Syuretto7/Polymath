import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ConventionGameViz } from "@/components/viz/ConventionGameViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p18.7.3",
  minutes: 80,
  links: {
    revisits: ["p18.7.2", "p11.3.2", "p18.7.1"],
    foreshadows: ["p19.1.1", "p27.5.1", "p23.2.1"],
  },

  puzzle: (
    <>
      <p>
        Nobody ever agreed to drive on the left in India, and nobody signed a contract fixing what the word
        &ldquo;dog&rdquo; means. Yet both are conventions, and both bind us. Quine doubted that language could rest on
        convention at all, since agreeing on a convention seems to need a language already. How can a convention exist
        without anyone ever having made it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each driver simply copies what has worked before. Drive a few days at a time and watch whether the island settles on
        a side, and which.
      </p>
      <ConventionGameViz />
    </>
  ),

  theory: (
    <>
      <Definition title="convention">
        <p>
          In <em>Convention</em> (1969), David Lewis answered Quine with game theory. A <strong>coordination problem</strong>{" "}
          is a situation in which everyone wants to do what the others do, and there are several ways of doing so equally
          good. A <strong>convention</strong> is a regularity in solving such a problem that everyone conforms to, expects
          others to conform to, and prefers to conform to on condition that others do, where all this is common knowledge.
          No agreement is needed: precedent and salience are enough.
        </p>
      </Definition>

      <Definition title="modal realism">
        <p>
          In <em>On the Plurality of Worlds</em> (1986), Lewis held that possible worlds are as real as ours: concrete,
          spatiotemporally isolated universes. &ldquo;Actual&rdquo; is indexical, like &ldquo;here&rdquo;: our world is
          actual only from the inside. The payoff is a reduction of modality to quantification: &ldquo;possibly p&rdquo;
          means p holds at some world, with no unexplained modal primitive left over.
        </p>
      </Definition>

      <Example title="counterparts">
        <p>
          Since worlds do not overlap, Humphrey exists only in ours. &ldquo;Humphrey could have won&rdquo; is true because
          in some world a <strong>counterpart</strong> of Humphrey, someone sufficiently similar, wins. Similarity depends on
          context, so de re modal claims are flexible in a way that Kripke&rsquo;s rigid designation is not; Kripke objected
          that Humphrey cares whether he himself could have won, not someone else.
        </p>
      </Example>

      <Remark title="Humean supervenience">
        <p>
          Lewis&rsquo;s larger project was <strong>Humean supervenience</strong>: everything in the world, including laws,
          chances and causation, supervenes on a vast mosaic of local particular facts, one little thing and then another.
          Laws are the axioms of the best system summarising the mosaic; causes are understood through counterfactuals.
          Few accept every part, but the systematic ambition, carried out in clear and patient prose, shaped analytic
          metaphysics for a generation.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "coord",
      rung: "check",
      prompt: <p>What makes a situation a coordination problem in Lewis&rsquo;s sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "Everyone wants to act as the others act, and there is more than one equally good way to do so.",
          "There is a single best action for everyone regardless of others.",
          "Each person gains only when the others lose.",
          "A ruler must decide for everyone.",
        ],
        correct: [0],
      },
    },
    {
      key: "actual",
      rung: "check",
      prompt: <p>On Lewis&rsquo;s view, what is it for a world to be actual?</p>,
      answer: {
        kind: "choice",
        options: [
          "Nothing special: ‘actual’ is indexical, like ‘here’, and picks out the world of the speaker.",
          "It is the only world that is concrete.",
          "It is the world God created.",
          "It is the world with the most things in it.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, try several new islands. Does the side that wins depend on anything other than chance and early precedent?</p>,
      answer: {
        kind: "choice",
        options: [
          "No: either side can win, which is why the result is a convention rather than a law of nature.",
          "Yes: left always wins.",
          "Yes: right always wins.",
          "No side ever wins.",
        ],
        correct: [0],
      },
    },
    {
      key: "counter",
      rung: "apply",
      prompt: <p>What makes &ldquo;Humphrey could have won&rdquo; true, for Lewis?</p>,
      answer: {
        kind: "choice",
        options: [
          "Some other world contains a counterpart of Humphrey who wins.",
          "Humphrey himself wins in another world.",
          "The sentence is analytic.",
          "Humphrey believed he could win.",
        ],
        correct: [0],
      },
    },
    {
      key: "stare",
      rung: "apply",
      prompt: <p>Lewis said the most common reply to modal realism was the &ldquo;incredulous stare&rdquo;. What kind of objection is that?</p>,
      answer: {
        kind: "choice",
        options: [
          "An appeal to common sense, which Lewis treated as a real cost to be weighed against the theory’s benefits.",
          "A proof that modal realism is inconsistent.",
          "An empirical refutation.",
          "An objection from the meaning of ‘world’.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is modal realism worth its price? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a benefit Lewis claims, such as reducing modality to quantification over worlds.",
          "States a cost, such as the incredulous stare or Kripke’s Humphrey objection.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the meaning of a word a convention in Lewis&rsquo;s sense? What would the coordination problem be?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies a coordination problem, such as speakers and hearers wanting to match signals to states of the world.",
          "Considers a difficulty, such as whether speakers have the common knowledge Lewis requires.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      That completes the analytic tradition. Next we cross to the continent, where Husserl begins phenomenology with a single
      observation: consciousness is always consciousness of something.
    </p>
  ),
};
