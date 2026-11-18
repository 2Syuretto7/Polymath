import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RussellMatrixViz } from "@/components/viz/RussellMatrixViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.2.2",
  minutes: 85,
  links: {
    revisits: ["p22.2.1", "m1.8.3", "p17.4.4"],
    foreshadows: ["p22.2.3", "p22.5.1", "p22.3.1"],
  },

  puzzle: (
    <>
      <p>
        Some collections seem to contain themselves: the collection of all things with more than ten members has more than
        ten members. Most do not: the collection of teaspoons is not a teaspoon. Now collect every collection that does not
        contain itself. Does that collection contain itself?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Build Russell&rsquo;s set from a table of memberships, then ask about it.</p>
      <RussellMatrixViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Basic Law V">
        <p>
          Frege&rsquo;s fifth basic law says that the extension of concept F is the extension of concept G exactly when
          every object falling under F falls under G and conversely. Together with his rule that every concept has an
          extension, it amounts to <strong>naive comprehension</strong>: every condition defines a set.
        </p>
      </Definition>

      <Example title="the paradox">
        <p>
          Take the condition &lsquo;x is not a member of itself&rsquo;, and let R be its extension. If R is a member of R,
          then R satisfies the condition, so it is not. If R is not a member of R, it satisfies the condition, so it is. So R
          is a member of itself exactly when it is not: a contradiction, derived in Frege&rsquo;s system. The argument is
          Cantor&rsquo;s diagonal argument, run against the totality of all sets.
        </p>
      </Example>

      <Definition title="Frege's reply">
        <p>
          Russell wrote on 16 June 1902. Frege answered at once that &lsquo;arithmetic totters&rsquo;. In an appendix to the
          second volume (1903) he wrote that hardly anything worse can befall a scientific writer than to have a foundation
          of his building shaken after the work is finished. He proposed a weakened Basic Law V; that too was later shown
          inconsistent with there being more than one object, and he eventually abandoned logicism.
        </p>
      </Definition>

      <Remark title="ways out">
        <p>
          Russell restricted sets by <strong>types</strong>: a set may contain only things of lower type, so &lsquo;x is a
          member of x&rsquo; is ill-formed. Zermelo (1908) allowed new sets only as subsets of given ones, by separation,
          later justified by the iterative picture of sets built in stages. Quine&rsquo;s New Foundations limits comprehension
          by the syntax of the condition. And some, such as Graham Priest, keep naive comprehension and accept that R is
          both a member of itself and not, in a paraconsistent logic where this does not entail everything.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "r",
      rung: "check",
      prompt: <p>What is Russell&rsquo;s set R?</p>,
      answer: { kind: "choice", options: ["The set of all sets that are not members of themselves", "The set of all sets", "The empty set", "The set of all members of themselves"], correct: [0] },
    },
    {
      key: "law",
      rung: "check",
      prompt: <p>Which principle of Frege&rsquo;s system did the paradox show to be inconsistent?</p>,
      answer: { kind: "choice", options: ["Basic Law V", "Hume’s principle", "The context principle", "Modus ponens"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, where does R&rsquo;s row differ from the row of each set x?</p>,
      answer: { kind: "choice", options: ["At the column for x itself, on the diagonal", "In the first column", "Nowhere", "In every column"], correct: [0] },
    },
    {
      key: "cantor",
      rung: "apply",
      prompt: <p>Which earlier argument has the same structure as Russell&rsquo;s paradox?</p>,
      answer: { kind: "choice", options: ["Cantor’s diagonal argument", "Euclid’s proof of infinitely many primes", "Zeno’s dichotomy", "The Meno’s doubling of the square"], correct: [0] },
    },
    {
      key: "zermelo",
      rung: "apply",
      prompt: <p>How does Zermelo&rsquo;s separation axiom block the paradox?</p>,
      answer: { kind: "choice", options: ["It only forms subsets of a set already given, so no universal set of all sets is available", "It bans the empty set", "It makes every set a member of itself", "It removes negation from logic"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove, using logic alone, that there is no set y whose members are exactly the sets that are not members of themselves.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes such a y exists, so for every x, x ∈ y exactly when x ∉ x.",
          "Instantiates x as y itself, to get y ∈ y exactly when y ∉ y.",
          "Notes this is contradictory either way, so no such y exists.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Which response to Russell&rsquo;s paradox seems best to you: types, the iterative conception, or accepting the contradiction?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes at least two of the responses accurately.",
          "Weighs a cost of each, such as the complexity of types, the loss of a universal set, or giving up classical logic.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Was Frege&rsquo;s project doomed, or only its one faulty law? A century later, philosophers noticed that
        Hume&rsquo;s principle alone, without Basic Law V, is consistent and still yields arithmetic.
      </p>
      <p>
        Next, neo-logicism: Frege&rsquo;s theorem, Wright and Hale&rsquo;s abstraction principles, the bad company objection,
        and whether Hume&rsquo;s principle can count as analytic.
      </p>
    </>
  ),
};
