import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["brute luck: compensate", "option luck: do not compensate"];
const ITEMS: SortItem[] = [
  {
    text: "Born with a condition that needs costly treatment.",
    cat: "brute luck: compensate",
    why: "Nothing the person chose: a clear case of brute bad luck.",
  },
  {
    text: "Lost savings betting on a cricket match.",
    cat: "option luck: do not compensate",
    why: "A deliberate gamble whose risk was known and could have been declined.",
  },
  {
    text: "House destroyed by an earthquake no one could predict.",
    cat: "brute luck: compensate",
    why: "Unless insurance was available and declined, the loss was not chosen.",
  },
  {
    text: "Chose to work part-time to spend days painting.",
    cat: "option luck: do not compensate",
    why: "Lower income reflects a choice about how to live, which Dworkin calls ambition-sensitivity.",
  },
  {
    text: "Grew up in a village with no school.",
    cat: "brute luck: compensate",
    why: "Circumstances of birth and upbringing are paradigms of brute luck.",
  },
  {
    text: "Developed an expensive taste for rare wines after choosing to cultivate it.",
    cat: "option luck: do not compensate",
    why: "Dworkin’s example: deliberately cultivated expensive tastes do not call for extra resources. Cohen disagreed about tastes one cannot help.",
  },
  {
    text: "Injured in an accident while riding a motorcycle without a helmet.",
    cat: "option luck: do not compensate",
    why: "Strictly the injury follows a risky choice, which is why Anderson thinks the view is too harsh here: should the rider be left at the roadside?",
  },
];

export const lesson: LessonContent = {
  id: "p14.2.4",
  minutes: 80,
  links: {
    revisits: ["p14.2.2", "p13.4.3", "p1.3.3"],
    foreshadows: ["p14.3.1", "p14.5.2", "p14.6.1"],
  },

  puzzle: (
    <>
      <p>
        Two people end up poor. One was born with a disability that keeps them from most work; the other gambled away an
        inheritance. Should a just society treat them alike? Many people think not, and luck egalitarianism tries to say
        exactly why.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each disadvantage by whether a luck egalitarian would compensate it.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Brute luck or option luck?" />
    </>
  ),

  theory: (
    <>
      <Definition title="luck egalitarianism">
        <p>
          Inequalities that come from <strong>brute luck</strong>, which a person did not choose and could not reasonably have
          avoided, are unjust and call for compensation. Inequalities that come from <strong>option luck</strong>, the
          outcomes of deliberate and calculated gambles, or from people&rsquo;s own choices, are not unjust.
        </p>
      </Definition>

      <Example title="Dworkin: endowment-insensitive, ambition-sensitive">
        <p>
          Ronald Dworkin imagined shipwrecked survivors dividing an island&rsquo;s resources at an auction, each with equal
          shells to bid, until no one prefers anyone else&rsquo;s bundle: the envy test. Then a hypothetical insurance market
          against handicaps and low talent sets how much to compensate brute bad luck. Distribution should be sensitive to
          people&rsquo;s ambitions but not to their natural endowments.
        </p>
      </Example>

      <Remark title="equality of what?">
        <p>
          Dworkin favoured equality of resources. Richard Arneson argued for equal opportunity for welfare, and G. A. Cohen for
          equal access to advantage, so that people with involuntary expensive needs or tastes are also compensated. Amartya
          Sen proposed the capabilities approach: what matters is what people are able to do and to be.
        </p>
      </Remark>

      <Remark title="Anderson's critique">
        <p>
          Elizabeth Anderson, in &ldquo;What is the point of equality?&rdquo; (1999), argued that luck egalitarianism abandons
          negligent victims, such as an uninsured driver injured by their own carelessness, and insults those it helps by
          requiring them to prove their inferiority to qualify. She proposed democratic equality instead: the aim is a society
          of equals, in which no one is dominated or oppressed, and everyone has what they need to function as a citizen.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is brute luck?</p>,
      answer: {
        kind: "choice",
        options: [
          "Luck from a deliberate gamble.",
          "Good or bad fortune that was not the result of a person's choices and could not reasonably have been avoided.",
          "Luck in sport.",
          "Any bad outcome.",
        ],
        correct: [1],
      },
    },
    {
      key: "option",
      rung: "check",
      prompt: <p>Which is a case of option luck?</p>,
      answer: { kind: "choice", options: ["Losing a bet one chose to make", "Being born blind", "Being hit by a meteorite", "Being born into poverty"], correct: [0] },
    },
    {
      key: "envy",
      rung: "apply",
      prompt: <p>In Dworkin&rsquo;s island auction, when is the division equal?</p>,
      answer: {
        kind: "choice",
        options: [
          "When everyone gets the same physical goods.",
          "When no one prefers anyone else's bundle of resources to their own: the envy test.",
          "When total welfare is maximised.",
          "When the auctioneer is satisfied.",
        ],
        correct: [1],
      },
    },
    {
      key: "anderson",
      rung: "apply",
      prompt: <p>What is Anderson&rsquo;s objection about negligent victims?</p>,
      answer: {
        kind: "choice",
        options: [
          "That luck egalitarianism would leave people who caused their own misfortune without help, even when desperate.",
          "That negligent people should pay more tax.",
          "That negligence is always brute luck.",
          "That victims do not exist.",
        ],
        correct: [0],
      },
    },
    {
      key: "dem",
      rung: "apply",
      prompt: <p>What does Anderson propose instead?</p>,
      answer: {
        kind: "choice",
        options: [
          "Strict equality of income.",
          "Democratic equality: a society of equals with no domination or oppression, where all can function as citizens.",
          "A minimal state.",
          "Maximising total welfare.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Should a just society distinguish between disadvantages people chose and those they did not? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the luck egalitarian distinction and its appeal.",
          "Considers an objection, such as Anderson's negligent victims or the difficulty of separating choice from circumstance.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If our choices are shaped by upbringing and character we did not choose, is anything left of the line between brute luck and option luck?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Connects the worry to debates about free will and moral luck.",
          "Considers whether the line can be drawn by reasonable avoidability rather than ultimate responsibility.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between brute luck and option luck, Dworkin's auction and insurance scheme, the question 'equality of what?', and Anderson's objections with her alternative of democratic equality.",

  glimpse: (
    <p>
      The next chapter turns from distribution to liberty, starting with Berlin&rsquo;s two concepts. Feminist political
      philosophy and debates about global justice return to the question of what equality requires.
    </p>
  ),
};
