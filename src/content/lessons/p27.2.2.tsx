import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { WorldBookViz } from "@/components/viz/WorldBookViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p27.2.2",
  minutes: 90,
  links: {
    revisits: ["p11.3.3", "p26.2.2", "p26.1.4"],
    foreshadows: ["p27.2.3", "p27.5.1", "p27.5.3"],
  },

  puzzle: (
    <>
      <p>
        A good novel describes a way things might have been. Imagine a book so complete that it settles every question
        about a whole universe. Could such a book be a possible world, an abstract thing that exists here and now and
        merely represents? What, if anything, could it fail to capture?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the facts, and see which changes the world-book can register.</p>
      <WorldBookViz />
    </>
  ),

  theory: (
    <>
      <Definition title="ersatzism">
        <p>
          <strong>Ersatzism</strong> says possible worlds are actually existing abstract objects that represent ways things
          could be. One of them, the one that represents things as they are, is the actual world. The rest exist but are not
          actualised. This keeps the semantics of possible worlds while refusing Lewis&rsquo;s concrete worlds.
        </p>
      </Definition>

      <Definition title="three kinds">
        <ul>
          <li>
            <strong>Linguistic</strong>: a world is a maximal consistent set of sentences, a world-book, in the spirit of
            Carnap&rsquo;s state descriptions. It is maximal in that for every sentence it contains that sentence or its
            negation.
          </li>
          <li>
            <strong>Abstract states of affairs</strong>: Alvin Plantinga, in <em>The Nature of Necessity</em> (1974), took
            a world to be a maximal possible state of affairs. Robert Adams took it to be a maximal consistent set of
            propositions, a world-story.
          </li>
          <li>
            <strong>Combinatorial</strong>: David Armstrong built worlds as recombinations of actual particulars and
            universals.
          </li>
        </ul>
      </Definition>

      <Example title="Lewis's objections">
        <ul>
          <li>
            Primitive modality. &lsquo;Consistent&rsquo; and &lsquo;possible&rsquo; are modal notions. A theory that uses
            them cannot reduce modality to anything else.
          </li>
          <li>
            Descriptive poverty. Alien properties, which nothing actual has, have no name in our language, so world-books
            cannot tell apart worlds that differ only in them. Indiscernible individuals pose a similar problem.
          </li>
          <li>
            Magic. If states of affairs represent without any structure that explains how, representation is left as an
            unexplained primitive.
          </li>
        </ul>
      </Example>

      <Remark title="replies">
        <p>
          Plantinga never aimed to reduce modality; he wanted an actualist account of what possible worlds talk is about,
          and he treated possibility as basic. Against the alien-properties objection, the ersatzist may use richer
          languages, with infinitely long sentences or with things themselves serving as names of themselves, though this
          helps only with properties that are actually available. Whether primitive modality is a fatal cost or an honest
          admission is the central question.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ling",
      rung: "check",
      prompt: <p>For a linguistic ersatzist, what is a possible world?</p>,
      answer: { kind: "choice", options: ["A maximal consistent set of sentences", "A concrete universe", "A single true sentence", "A mental state"], correct: [0] },
    },
    {
      key: "prim",
      rung: "check",
      prompt: <p>What is Lewis&rsquo;s primitive-modality objection?</p>,
      answer: { kind: "choice", options: ["Ersatzism uses modal notions such as consistency, so it cannot reduce modality", "Ersatz worlds are too large", "Ersatz worlds are concrete", "Ersatzism denies that anything is possible"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with no word for s, how many distinct world-books are there?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "alien",
      rung: "apply",
      prompt: <p>Why do alien properties trouble linguistic ersatzism?</p>,
      answer: { kind: "choice", options: ["Worlds differing only in an unnamed property receive the same world-book", "Alien properties make world-books inconsistent", "Alien properties are always instantiated", "They make the language finite"], correct: [0] },
    },
    {
      key: "plant",
      rung: "apply",
      prompt: <p>Who identified possible worlds with maximal possible states of affairs?</p>,
      answer: { kind: "choice", options: ["Alvin Plantinga", "David Lewis", "Rudolf Carnap", "David Armstrong"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does ersatzism rely on primitive modality, and if so, is that a serious cost? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why notions such as consistency or possibility appear in the ersatzist’s account.",
          "Considers whether the aim is to reduce modality or only to give an actualist account of it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could a richer language, such as one with infinitely long sentences, solve the problem of alien properties?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the problem of alien properties.",
          "Considers whether more expressive power helps when no actual thing has the property to be named.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Whatever worlds are, we claim to know what is possible: that the table could have been elsewhere, that pigs
        cannot be numbers. How could we know such things?
      </p>
      <p>Next, modal epistemology.</p>
    </>
  ),
};
