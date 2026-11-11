import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DefinitionTrialViz, type Attempt } from "@/components/viz/DefinitionTrialViz";
import type { LessonContent } from "@/lib/types";

const FLAWS = [
  "It gives examples, not one account",
  "It leaves out what the mind grasps by itself",
  "Someone can have it by luck",
  "It is circular",
];
const ATTEMPTS: Attempt[] = [
  {
    proposal: "Knowledge is geometry, astronomy, music, and crafts such as shoemaking and carpentry.",
    source: "Theaetetus' first answer",
    flaw: 0,
    why: "As in the Euthyphro, Socrates wants the one thing that all knowledge is, not a list of kinds. To say shoemaking is knowledge of making shoes already uses the word being defined.",
  },
  {
    proposal: "Knowledge is nothing other than perception.",
    source: "Theaetetus' second answer",
    flaw: 1,
    why: "Socrates' decisive objection: we judge that colour and sound both exist, that they are two, that each is the same as itself and different from the other, but no sense organ perceives being, sameness or number. The mind grasps these by itself, and knowledge of truth needs them.",
  },
  {
    proposal: "Knowledge is true belief.",
    source: "Theaetetus' third answer",
    flaw: 2,
    why: "A skilled speaker can persuade a jury of the truth about a robbery that only an eyewitness could know. The jurors judge truly, yet they do not know: they were persuaded, not taught.",
  },
  {
    proposal: "Knowledge is true belief together with an account (logos), meaning knowledge of what distinguishes the thing from everything else.",
    source: "the last of three senses of 'account'",
    flaw: 3,
    why: "A true belief about Theaetetus must already include what distinguishes him, or it would not be about him. So the account must add knowledge of the difference, and then knowledge is defined as true belief plus knowledge of something.",
  },
];

export const lesson: LessonContent = {
  id: "p4.4.1",
  minutes: 80,
  links: {
    revisits: ["p4.3.1", "p4.2.1", "p4.3.5"],
    foreshadows: ["p10.1.1", "p10.1.2", "p10.5.1"],
  },

  puzzle: (
    <>
      <p>
        You believe the train leaves at 9.40, and it does. Your friend also believes it leaves at 9.40, because they misread
        the timetable for a different train. You both have a true belief. Only one of you, it seems, knows. What is the
        difference?
      </p>
      <p>
        Plato&rsquo;s <em>Theaetetus</em> is the first sustained attempt to answer the question &ldquo;What is
        knowledge?&rdquo;. It tries three answers, refutes each, and ends without a fourth. The question it leaves is still
        open.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The young mathematician Theaetetus, who resembles Socrates in looks, offers definitions one after another. For
        each, decide what Socrates finds wrong with it.
      </p>
      <DefinitionTrialViz attempts={ATTEMPTS} flaws={FLAWS} term="knowledge" />
    </>
  ),

  theory: (
    <>
      <Definition title="the setting and the midwife">
        <p>
          The dialogue is set shortly before Socrates&rsquo; trial; at the end he leaves to answer the indictment. Socrates
          compares himself to a midwife, like his mother: he is barren of wisdom himself, but helps others deliver their
          ideas, and tests whether each one is a real child or a &ldquo;wind-egg&rdquo;. Unlike the middle dialogues, the
          {" "}<em>Theaetetus</em> never appeals to the Forms in its answers, which is one reason it is placed among the
          late works.
        </p>
      </Definition>

      <Example title="knowledge is perception">
        <p>
          Socrates first strengthens Theaetetus&rsquo; answer by linking it to two earlier views: Protagoras&rsquo; claim
          that man is the measure of all things, so that what appears to each is true for that person, and a Heraclitean
          theory that everything is always changing. If perception is infallible, it seems to be knowledge.
        </p>
        <p>
          He then attacks all three. Against Protagoras: if every belief is true for whoever holds it, then the belief of
          Protagoras&rsquo; opponents that he is wrong is true as well, and no one is wiser than anyone else, not even
          Protagoras. Against extreme flux: if everything changes in every way, no word can be applied to anything, not
          even &ldquo;seeing&rdquo;. Finally, as in the visualisation, perception cannot reach being, sameness and
          difference, which are needed for any truth.
        </p>
      </Example>

      <Example title="false belief: the wax tablet and the aviary">
        <p>
          Before testing true belief, Socrates asks how false belief is possible at all: it seems one must either know a
          thing or not, and either way cannot mistake it for another. Two models follow. In the <strong>wax
          tablet</strong>, memory is a block of wax that takes impressions; error is fitting a present perception to the
          wrong impression, as when you see someone at a distance and take them for a friend. But this cannot explain
          mistakes in pure thought, such as thinking 7 + 5 = 11. In the <strong>aviary</strong>, knowledge is like birds in
          a cage: you possess them all, but when you reach in you can catch the wrong one. Yet then someone would
          mistake one piece of knowledge for another, which seems absurd.
        </p>
      </Example>

      <Definition title="true belief with an account">
        <p>
          Theaetetus recalls hearing that knowledge is true belief together with an <strong>account</strong>{" "}
          (<em>logos</em>). Socrates connects it with a &ldquo;dream&rdquo; theory: complexes such as syllables can be
          known by listing their elements, but the elements, the letters, have no account and so cannot be known. He
          rejects the asymmetry: if the letters are unknowable, the syllable made of them can hardly be known. Then he tests
          three senses of <em>account</em>: putting a belief into words, which everyone can do; listing the elements,
          which someone can do correctly by luck without understanding, like a child who spells a syllable right in one
          word and wrong in another; and giving the distinguishing mark, which is circular.
        </p>
      </Definition>

      <Remark title="an ending without an answer">
        <p>
          The dialogue ends in perplexity. Socrates says Theaetetus is now better off: if he conceives again, his ideas
          will be better, and if not, he will be gentler with others, not thinking he knows what he does not. Some readers
          think the moral is that knowledge requires the Forms, deliberately left out; others that Plato is honestly
          working on a problem he could not solve. Either way, &ldquo;true belief with an account&rdquo; is the ancestor
          of the twentieth-century analysis of knowledge as justified true belief.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "first",
      rung: "check",
      prompt: <p>What is Theaetetus&rsquo; first serious definition of knowledge?</p>,
      answer: {
        kind: "choice",
        options: ["Knowledge is perception.", "Knowledge is true belief.", "Knowledge is recollection.", "Knowledge is virtue."],
        correct: [0],
      },
    },
    {
      key: "midwife",
      rung: "check",
      prompt: <p>Why does Socrates compare himself to a midwife?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because he teaches people what to believe.",
          "Because he has no wisdom of his own to give, but helps others bring out their ideas and tests them.",
          "Because his father was a doctor.",
          "Because he believes the soul is reborn.",
        ],
        correct: [1],
      },
    },
    {
      key: "jury",
      rung: "apply",
      prompt: <p>What does the case of the persuaded jury show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That juries are always wrong.",
          "That true belief is not sufficient for knowledge.",
          "That perception is not knowledge.",
          "That knowledge is impossible.",
        ],
        correct: [1],
      },
    },
    {
      key: "common",
      rung: "apply",
      prompt: (
        <p>
          Which of these, according to Socrates, does the mind grasp by itself rather than through any one sense? Choose
          all that apply.
        </p>
      ),
      answer: { kind: "choice", options: ["being", "redness", "sameness and difference", "sweetness"], correct: [0, 2] },
    },
    {
      key: "wax",
      rung: "apply",
      prompt: <p>Which mistake can the wax tablet model not explain?</p>,
      answer: {
        kind: "choice",
        options: [
          "Taking a stranger in the distance for a friend.",
          "Thinking that 7 + 5 = 11.",
          "Mishearing a name.",
          "Misremembering a face.",
        ],
        correct: [1],
      },
    },
    {
      key: "protag",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct the self-refutation argument against Protagoras in numbered steps. Is the objection fair, given
          that Protagoras says beliefs are true <em>for</em> the person who holds them?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the measure doctrine and that most people believe Protagoras is wrong.",
          "Derives that, by his own doctrine, their belief is true, so his doctrine is false, or at least false for them.",
          "Discusses whether the relativising qualifier 'for them' blocks the argument. Any reasoned verdict earns full credit.",
        ],
      },
    },
    {
      key: "gettier",
      rung: "stretch",
      prompt: (
        <p>
          The train example in the puzzle is a true belief reached by bad reasoning. Construct a case of a true belief
          that has a good account, a reasonable justification, but is still true only by luck. What would Plato need to
          add to &ldquo;true belief with an account&rdquo; to rule it out?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a case where a belief is well justified and true, but the justification and the truth come apart, such as a stopped clock that happens to show the right time.",
          "Explains why the case seems not to be knowledge.",
          "Suggests a condition to add, such as that the account must explain why the belief is true, or a link to the Meno's 'working out the reason'. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the three definitions of knowledge tried in the Theaetetus, the main objection to each, the puzzles about false belief, and why the dialogue ends without an answer.",

  glimpse: (
    <p>
      Epistemology begins with the analysis of knowledge as justified true belief, and with Gettier&rsquo;s cases, which
      do for that analysis what the jury did for true belief. The lesson on perception asks again what the senses alone can
      give us.
    </p>
  ),
};
