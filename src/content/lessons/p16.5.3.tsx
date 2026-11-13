import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { UnifyPatternViz } from "@/components/viz/UnifyPatternViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.5.3",
  minutes: 80,
  links: {
    revisits: ["p16.5.1", "p16.5.2", "p16.3.2"],
    foreshadows: ["p16.6.1", "p16.7.2", "p22.6.5"],
  },

  puzzle: (
    <>
      <p>
        Before Newton, the fall of a stone, the swing of a pendulum, the orbits of the planets and the tides were separate
        puzzles, each with its own rule. After Newton, one law of gravitation and three laws of motion accounted for them all.
        We feel that Newton explained these things, and not merely described them. Is that feeling about causes, or about
        something else: doing more with less?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose which argument patterns to accept, and see how many phenomena they derive.</p>
      <UnifyPatternViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Friedman’s proposal">
        <p>
          Michael Friedman, in &ldquo;Explanation and Scientific Understanding&rdquo; (1974), argued that science increases
          our understanding by reducing the number of independent phenomena we have to accept as brute. The kinetic theory of
          gases explains the gas laws because it derives them, along with much else, from a few assumptions about molecules.
        </p>
      </Definition>

      <Example title="Kitcher’s argument patterns">
        <p>
          Philip Kitcher, in &ldquo;Explanatory Unification and the Causal Structure of the World&rdquo; (1989), worked out
          the idea with <strong>argument patterns</strong>: schematic arguments with blanks to fill in, plus instructions for
          filling them. Darwin&rsquo;s theory gives one pattern, natural selection acting on heritable variation, that
          derives facts about countless species. The <strong>explanatory store</strong> is the set of patterns that best
          balances deriving many conclusions against using few patterns.
        </p>
      </Example>

      <Definition title="stringency">
        <p>
          A pattern too loose to rule anything out, such as &ldquo;things are as God wills&rdquo; or &ldquo;everything is as
          it is&rdquo;, would derive every fact with one pattern. Kitcher therefore required patterns to be{" "}
          <strong>stringent</strong>: their blanks must be filled in restricted, non-trivial ways.
        </p>
      </Definition>

      <Example title="asymmetry again">
        <p>
          Unificationists explain the flagpole asymmetry without causes. We have one pattern deriving the heights of objects
          from how they were made; deriving heights from shadows would need an extra pattern that covers only objects that
          happen to cast shadows. The best store therefore contains the pattern from heights to shadows, not the reverse.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Critics doubt that counting patterns is well defined, and argue that some unifications explain nothing, such as a
          single statistical regularity covering unrelated phenomena. Others hold that unification and causation are
          complementary: causal accounts suit particular events, and unification suits why the laws themselves hold.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "friedman",
      rung: "check",
      prompt: <p>According to Friedman, how does science increase understanding?</p>,
      answer: {
        kind: "choice",
        options: ["By reducing the number of independent phenomena we must accept", "By finding the causes of each event separately", "By making more accurate predictions", "By observing more cases"],
        correct: [0],
      },
    },
    {
      key: "store",
      rung: "check",
      prompt: <p>What is Kitcher&rsquo;s explanatory store?</p>,
      answer: {
        kind: "choice",
        options: [
          "The set of argument patterns that derives the most conclusions from the fewest, stringent patterns",
          "The set of all true sentences",
          "The causal history of an event",
          "The laws of physics alone",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, accept only Newton&rsquo;s gravitation and laws of motion. How many phenomena are derived per pattern?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "stringent",
      rung: "apply",
      prompt: <p>Why does &ldquo;everything is as it is&rdquo; not count as a great unification?</p>,
      answer: {
        kind: "choice",
        options: ["It is not stringent: it would fit any facts at all", "It is false", "It uses too many patterns", "It is causal"],
        correct: [0],
      },
    },
    {
      key: "darwin",
      rung: "apply",
      prompt: <p>Which is the best example of unification?</p>,
      answer: {
        kind: "choice",
        options: [
          "Natural selection accounting for adaptations across very many species",
          "A list of the heights of every mountain",
          "A separate rule for each planet’s orbit",
          "A barometer predicting storms",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is unification what makes an explanation good, or a by-product of finding causes? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the unificationist account, with an example such as Newton or Darwin.",
          "Compares it with causal accounts, for instance on the flagpole or on explaining laws.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a proof in mathematics explain by unifying? Think of a theorem that explains many separate results at once.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an example, such as a general theorem of which several earlier results are special cases.",
          "Discusses whether the general result explains the special ones, or only implies them.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the unificationist view of explanation, Friedman's reduction of independent phenomena, Kitcher's argument patterns and stringency, and how unification compares with causal accounts.",

  glimpse: (
    <p>
      Next, scientific realism: does the success of our best theories show that they are approximately true, or would that
      be a miracle argument with a hidden premise?
    </p>
  ),
};
