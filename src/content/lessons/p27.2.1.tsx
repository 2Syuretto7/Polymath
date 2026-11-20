import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RecombineViz } from "@/components/viz/RecombineViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p27.2.1",
  minutes: 90,
  links: {
    revisits: ["p11.3.2", "p26.1.1", "p26.3.4"],
    foreshadows: ["p27.2.2", "p27.2.3", "p27.4.1"],
  },

  puzzle: (
    <>
      <p>
        David Lewis held that there really are talking donkeys, just not in our world, and that they are as concrete as
        the donkeys in a field nearby. Most people meet this with what Lewis called an &lsquo;incredulous stare&rsquo;. Is
        a stare an argument? If not, what would refute him?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Fill the regions with duplicates of possible things, then split them into two islands.</p>
      <RecombineViz />
    </>
  ),

  theory: (
    <>
      <Definition title="modal realism">
        <p>
          In <em>On the Plurality of Worlds</em> (1986), Lewis held that a possible world is a concrete, maximal sum of
          spatiotemporally related things. Worlds do not overlap and are causally isolated from one another.
          &lsquo;Actual&rsquo; is indexical, like &lsquo;here&rsquo;: the actual world is simply the one we are in. An
          individual exists in only one world, and &lsquo;Humphrey could have won&rsquo; is true because a counterpart of
          Humphrey, someone in another world relevantly like him, wins.
        </p>
      </Definition>

      <Definition title="the case for it">
        <p>
          Lewis argued from theoretical utility. With worlds, modality reduces to quantification: necessary means true at
          all worlds. Propositions become sets of worlds, properties become sets of possible individuals, and
          counterfactuals get a semantics by similarity. Just as mathematicians accept sets for what they let us do,
          philosophers should accept worlds, a &lsquo;paradise for philosophers&rsquo;. A principle of{" "}
          <strong>recombination</strong> says which worlds there are: duplicates of any possible things can be arranged in
          any pattern, size and shape permitting.
        </p>
      </Definition>

      <Example title="objections and replies">
        <ul>
          <li>
            The incredulous stare. Lewis granted that his view clashes with common opinion, and counted that as a real
            cost, but not a refutation.
          </li>
          <li>
            The Humphrey objection, from Kripke: Humphrey cares whether he could have won, not whether someone else in
            another world wins. Lewis replied that, on his analysis, the counterpart&rsquo;s winning just is what makes it
            true that Humphrey could have won.
          </li>
          <li>
            Knowledge. Other worlds are causally isolated, so how could we know about them? Lewis replied that modal
            knowledge, like mathematical knowledge, is not causal.
          </li>
          <li>
            Ethics. If every possibility is realised somewhere, why prevent harm? Lewis replied that our concern is with
            what happens in our world, and our actions change only that.
          </li>
          <li>
            Island universes. It seems possible for one world to contain two disconnected spacetimes, but Lewis must
            count them as two worlds.
          </li>
        </ul>
      </Example>

      <Remark title="a paradox of recombination">
        <p>
          Peter Forrest and David Armstrong (1984) argued that unrestricted recombination is inconsistent. Put duplicates
          of all worlds side by side: recombination says the result is a world, yet it is larger than every world,
          including itself. Lewis accepted the restriction &lsquo;size and shape permitting&rsquo;, at the cost of not
          saying in advance how large a world may be.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "act",
      rung: "check",
      prompt: <p>According to Lewis, what makes our world the actual one?</p>,
      answer: { kind: "choice", options: ["Nothing special: ‘actual’ is indexical and picks out the world we are in", "It is the only concrete world", "It is the best possible world", "It was created first"], correct: [0] },
    },
    {
      key: "world",
      rung: "check",
      prompt: <p>What is a possible world for Lewis?</p>,
      answer: { kind: "choice", options: ["A concrete, maximal sum of spatiotemporally related things", "A maximal consistent set of sentences", "A mental image", "A region of our own universe"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with three regions, how many arrangements does recombination yield?</p>,
      answer: { kind: "numeric", value: 64, tolerance: 0 },
    },
    {
      key: "hum",
      rung: "apply",
      prompt: <p>What is the Humphrey objection?</p>,
      answer: { kind: "choice", options: ["Humphrey cares about whether he could have won, not about whether a counterpart in another world wins", "Humphrey did in fact win", "Counterparts must be identical in every respect", "Possible worlds cannot contain people"], correct: [0] },
    },
    {
      key: "know",
      rung: "apply",
      prompt: <p>How did Lewis answer the worry that we cannot know about causally isolated worlds?</p>,
      answer: { kind: "choice", options: ["Modal knowledge, like mathematical knowledge, does not need causal contact", "We observe other worlds through telescopes", "We do not know anything about them", "Other worlds are not really isolated"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is the theoretical utility of possible worlds a good reason to believe that they exist as concrete things? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Lewis’s argument from utility fairly.",
          "Considers at least one objection, such as the incredulous stare, the Humphrey objection, knowledge or the availability of ersatz worlds.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can modal realism make sense of island universes, one world containing two disconnected spacetimes?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why Lewis’s definition of a world rules out island universes.",
          "Considers a response, such as accepting the cost or revising what unifies a world.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Many philosophers want the benefits of possible worlds without believing in talking donkeys. Perhaps worlds are
        abstract things that exist in our world and merely represent how things might have been.
      </p>
      <p>Next, ersatz worlds.</p>
    </>
  ),
};
