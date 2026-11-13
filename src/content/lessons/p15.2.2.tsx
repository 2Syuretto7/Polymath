import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "A name is introduced at an initial baptism, by pointing at the object or by a description that fixes which object is meant.",
    kind: "premise",
    note: "Le Verrier introduced “Neptune” for whatever planet was disturbing the orbit of Uranus, before anyone had seen it. The description fixed the reference; it did not give the meaning.",
    objection: "The qua problem: someone pointing at a horse and saying “Shergar” could be naming the horse, its species, or its coat. Something in the baptiser’s mind seems needed to settle which, so descriptions creep back in.",
  },
  {
    claim: "Later speakers pick up the name from earlier ones, intending to use it to refer to whatever those speakers referred to.",
    kind: "premise",
    note: "The intention is minimal: to use the word as the person you learnt it from did. No identifying knowledge of the object is needed.",
  },
  {
    claim: "So reference is passed along a causal and historical chain of communication, link by link, back to the baptism.",
    kind: "inference",
    note: "This is why a speaker who knows of Feynman only that he was a physicist still refers to Feynman: they stand at the end of a chain that leads to him.",
    objection: "Gareth Evans’s Madagascar case: the name once belonged to part of the African mainland, and Marco Polo, misunderstanding his sources, applied it to the island. The chain leads to the mainland, yet the name now refers to the island. So chains can change their reference.",
  },
  {
    claim: "What a name refers to is fixed by its history in a community, not by descriptions in each speaker’s head.",
    kind: "conclusion",
    note: "Kripke offered this as a picture rather than a theory. Hybrid views add that the body of information speakers attach to a name can, over time, become its dominant source and redirect the chain.",
  },
];

export const lesson: LessonContent = {
  id: "p15.2.2",
  minutes: 75,
  links: {
    revisits: ["p15.2.1", "p15.1.2", "p2.4.3"],
    foreshadows: ["p15.2.3", "p15.5.1", "p29.2.1"],
  },

  puzzle: (
    <>
      <p>
        You have probably heard the name of Cicero, but you may not know a single thing true of him that distinguishes him from
        every other Roman orator. Still, when you say &ldquo;Cicero was bald&rdquo;, you say something about Cicero and nobody
        else. If not through a description in your head, how does your word reach him?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the causal picture of naming, and open the objections.</p>
      <ArgumentStepViz title="How a name reaches its bearer" steps={STEPS} />
    </>
  ),

  theory: (
    <>
      <Definition title="the causal theory of reference">
        <p>
          A use of a proper name refers to an object because it stands at the end of a chain of communication that leads back
          to the object&rsquo;s naming. Each link is a speaker who acquired the name from an earlier one and intends to keep
          its reference. Kripke sketched this picture in <em>Naming and Necessity</em>; Keith Donnellan proposed a similar
          historical explanation.
        </p>
      </Definition>

      <Example title="reference fixing and meaning">
        <p>
          Kripke separated fixing the reference of a name from giving its meaning. &ldquo;One metre&rdquo; was once fixed as
          the length of a certain bar in Paris, but &ldquo;one metre&rdquo; does not mean &ldquo;the length of that bar&rdquo;:
          the bar could have been longer, and then it would not have been one metre long. A description can start a chain
          without becoming part of what the name means, which is why the name stays rigid.
        </p>
      </Example>

      <Remark title="problems and repairs">
        <p>
          The Madagascar case shows that reference can shift along a chain, so the theory needs some role for what speakers
          now associate with a name. The qua problem shows that a baptism needs some conceptual content to pick out the right
          thing. Michael Devitt and others developed causal-descriptive hybrids in reply. Empty names, like &ldquo;Vulcan&rdquo;,
          the planet once thought to lie inside Mercury&rsquo;s orbit, have chains that lead to no object at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>On the causal theory, what makes a use of a name refer to its bearer?</p>,
      answer: {
        kind: "choice",
        options: [
          "A chain of communication that leads back to the naming of the bearer.",
          "A description the speaker associates with the name.",
          "The speaker seeing the bearer.",
          "A dictionary entry.",
        ],
        correct: [0],
      },
    },
    {
      key: "intent",
      rung: "check",
      prompt: <p>What must a later speaker intend, on Kripke&rsquo;s picture?</p>,
      answer: {
        kind: "choice",
        options: [
          "To use the name with the same reference as the person they learnt it from.",
          "To describe the bearer accurately.",
          "To have met the bearer.",
          "To use the name in a new way.",
        ],
        correct: [0],
      },
    },
    {
      key: "metre",
      rung: "apply",
      prompt: <p>What does the example of the standard metre show?</p>,
      answer: {
        kind: "choice",
        options: [
          "A description can fix the reference of a term without giving its meaning.",
          "Lengths are relative.",
          "Names have no reference.",
          "Every description is rigid.",
        ],
        correct: [0],
      },
    },
    {
      key: "madagascar",
      rung: "apply",
      prompt: <p>Why is the Madagascar case a problem for the simple causal theory?</p>,
      answer: {
        kind: "choice",
        options: [
          "The chain leads back to part of the mainland, yet the name now refers to the island.",
          "Madagascar has no name.",
          "Marco Polo never existed.",
          "Islands cannot be named.",
        ],
        correct: [0],
      },
    },
    {
      key: "qua",
      rung: "apply",
      prompt: <p>What is the qua problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "Pointing at something at a baptism does not by itself settle which thing, or which kind of thing, is being named.",
          "Names can be spelt in different ways.",
          "Some names refer to more than one person.",
          "Baptisms are religious ceremonies.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the causal theory a better account of names than descriptivism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States both theories.",
          "Uses a case on at least one side, such as Feynman or Gödel for the causal theory, or Madagascar for description.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "vulcan",
      rung: "stretch",
      prompt: <p>The name &ldquo;Vulcan&rdquo; was introduced for a planet inside Mercury&rsquo;s orbit, which does not exist. What should a causal theorist say about &ldquo;Vulcan does not exist&rdquo;?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that the chain for “Vulcan” leads back to a failed baptism, with no object.",
          "Considers what this means for the sentence’s truth or content, perhaps comparing Russell’s treatment of empty descriptions.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the causal picture of how a name refers, the difference between fixing reference and giving meaning, Evans's Madagascar case, and the qua problem.",

  glimpse: (
    <p>
      The next lesson extends the picture to words for natural kinds, like &ldquo;water&rdquo; and &ldquo;gold&rdquo;. Indexicals
      raise their own questions of how context fixes reference, and later lessons look again at the necessary a posteriori.
    </p>
  ),
};
