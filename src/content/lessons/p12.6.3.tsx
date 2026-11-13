import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["crude causal theory", "asymmetric dependence", "teleosemantics"];
const CASES = ["a fly passes", "a black pellet is flicked past", "Swampman"];
const V: CaseVerdict[][] = [
  [
    { ok: true, why: "Flies cause the frog’s fly-detector to fire, so it represents flies." },
    { ok: false, why: "Pellets cause it to fire too, so it represents fly-or-pellet, and the frog makes no mistake. This is the disjunction problem: misrepresentation becomes impossible." },
    { ok: true, why: "Swampman’s states have causes, so a causal theory can give them content." },
  ],
  [
    { ok: true, why: "Flies cause firings, and that law does not depend on any other." },
    { ok: true, why: "Pellets cause firings only because flies do, not the other way round, so the content is fly and the pellet firing is an error." },
    { ok: true, why: "The dependence between laws holds now, whatever Swampman’s history." },
  ],
  [
    { ok: true, why: "The detector was selected because it fired at flies, which fed frogs. Its function is to indicate flies." },
    { ok: true, why: "The detector is doing what it was selected for badly, so the pellet is misrepresented as a fly. Some argue the content is small dark moving thing, which makes this no error." },
    { ok: false, why: "A molecule-for-molecule duplicate of a person, formed by chance in a swamp, has no history of selection, so its states have no content on this view. Many find that hard to accept." },
  ],
];

export const lesson: LessonContent = {
  id: "p12.6.3",
  minutes: 80,
  links: {
    revisits: ["p12.6.1", "p12.6.2", "p12.3.4"],
    foreshadows: ["p12.7.1", "p17.3.3", "p15.1.1"],
  },

  puzzle: (
    <>
      <p>
        A frog snaps at a fly, and also at a small black pellet flicked past it. A state in its brain was about a fly, or so
        we say. What, in purely natural terms, makes it about flies, and what makes snapping at the pellet a mistake?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test three naturalistic theories of content against the frog and against Swampman.</p>
      <CaseMatrixViz
        theories={THEORIES}
        cases={CASES}
        verdicts={V}
        prompt="Does the theory give a plausible verdict?"
        caption="Every theory has to allow misrepresentation, since thoughts can be false. Ask whether you agree with each verdict."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="naturalising content">
        <p>
          To <strong>naturalise</strong> content is to say, in non-semantic and non-mental terms, what makes a state represent
          what it does. The aim is to fit intentionality into the natural world, as physicalism requires.
        </p>
      </Definition>

      <Example title="causal and informational theories">
        <p>
          A state represents what reliably causes it, as smoke indicates fire and tree rings indicate age. Fred Dretske
          developed this as information. The <strong>disjunction problem</strong> is that whatever causes a state is
          thereby represented, so a frog&rsquo;s detector set off by a pellet represents fly-or-pellet and there is no error.
          Jerry Fodor&rsquo;s <strong>asymmetric dependence</strong> theory says the content is fly because pellets would not
          cause the state if flies did not, but not conversely.
        </p>
      </Example>

      <Example title="teleosemantics">
        <p>
          Ruth Millikan and David Papineau appeal to biological function. A state represents what it has the function of
          indicating, and functions come from a history of selection: the detector exists because firing at flies fed the
          frog&rsquo;s ancestors. Misrepresentation is malfunction, as a heart can fail to pump. The view faces Donald
          Davidson&rsquo;s Swampman, an exact duplicate of a person formed by lightning in a swamp, who seems to think but has
          no history.
        </p>
      </Example>

      <Remark title="indeterminacy">
        <p>
          A further worry is that the frog&rsquo;s history may not settle whether the content is fly, frog food, or small dark
          moving thing, since in the frog&rsquo;s environment these coincided. Different theories answer differently, and some
          philosophers conclude that the content of simple states is partly indeterminate.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "aim",
      rung: "check",
      prompt: <p>What is the aim of naturalising content?</p>,
      answer: {
        kind: "choice",
        options: [
          "To show that content does not exist.",
          "To explain what makes a state represent something, in non-semantic, non-mental terms.",
          "To translate thoughts into English.",
          "To prove dualism.",
        ],
        correct: [1],
      },
    },
    {
      key: "disj",
      rung: "check",
      prompt: <p>What is the disjunction problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "That crude causal theories make every cause part of the content, leaving no room for error.",
          "That beliefs can be disjunctive.",
          "That frogs cannot think.",
          "That there are two kinds of content.",
        ],
        correct: [0],
      },
    },
    {
      key: "tele",
      rung: "apply",
      prompt: <p>On teleosemantics, what makes the frog&rsquo;s state about flies?</p>,
      answer: {
        kind: "choice",
        options: [
          "Flies cause it most often today.",
          "Its function, from a history of selection, is to indicate flies.",
          "The frog says so.",
          "It resembles a fly.",
        ],
        correct: [1],
      },
    },
    {
      key: "asym",
      rung: "apply",
      prompt: <p>According to Fodor, why is the content fly and not pellet?</p>,
      answer: {
        kind: "choice",
        options: [
          "Pellets would not cause the state unless flies did, but flies would cause it even if pellets did not.",
          "Pellets are rare.",
          "Flies are alive.",
          "The frog prefers flies.",
        ],
        correct: [0],
      },
    },
    {
      key: "swamp",
      rung: "apply",
      prompt: <p>Why is Swampman a problem for teleosemantics?</p>,
      answer: {
        kind: "choice",
        options: [
          "Swampman behaves differently from a person.",
          "Swampman has no history of selection, so the theory denies his states any content.",
          "Swampman is not physical.",
          "Swampman lives in a swamp.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Swampman have thoughts? Argue briefly, with reference to teleosemantics.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the teleosemantic view and the Swampman case.",
          "Considers biting the bullet or giving up history.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could the states of a large language model have content on any of these theories?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies at least one theory, such as causal links to the world or training as a kind of selection.",
          "Notes a difficulty, such as derived content from human text.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what naturalising content means, the disjunction problem for causal theories, Fodor's asymmetric dependence, teleosemantics, and the Swampman objection.",

  glimpse: (
    <p>
      The next unit asks whether the mind extends beyond the head. Later, the theory of computation asks what follows if
      minds are machines, and philosophy of language asks the same questions about the meanings of words.
    </p>
  ),
};
