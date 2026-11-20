import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BigramViz } from "@/components/viz/BigramViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p31.4.1",
  minutes: 90,
  links: {
    revisits: ["p12.3.3", "p12.3.2", "p12.6.3"],
    foreshadows: ["p31.4.2", "p34.3.1", "p35.1.2"],
  },

  puzzle: (
    <>
      <p>
        A large language model can explain a joke, summarise a contract and correct a proof. It was trained only to predict
        the next word in a vast body of text, and it has never seen, touched or tasted anything. Does it understand what it
        says, or does it merely produce what someone who understood would say?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a word, and see what a tiny model trained by counting predicts will come next.</p>
      <BigramViz />
    </>
  ),

  theory: (
    <>
      <Definition title="language models">
        <p>
          A <strong>language model</strong> assigns probabilities to the next token given the tokens before it. Modern models
          are neural networks with billions of parameters, trained on enormous corpora to minimise prediction error, and then
          tuned with human feedback to follow instructions. Nothing in the training objective mentions meaning, truth or the
          world; whatever such a model knows, it learned because it helped predict text.
        </p>
      </Definition>

      <Example title="the octopus">
        <p>
          Emily Bender and Alexander Koller imagine a hyper-intelligent octopus tapping an undersea cable between two
          islanders. It learns to predict their messages perfectly and starts to reply. When one islander asks how to fend off
          a bear with sticks, the octopus is lost: it has learned the form of language but never connected it to what the words
          are about. They conclude that a system trained on form alone cannot learn <strong>meaning</strong>, which relates
          form to the world and to communicative intent. The argument echoes Searle&rsquo;s Chinese room and the{" "}
          <strong>symbol grounding problem</strong>.
        </p>
      </Example>

      <Definition title="world models">
        <p>
          Opponents point to evidence that prediction forces models to build internal structure. A model trained only on move
          sequences of the board game Othello was found to represent the state of the board in its activations, and
          intervening on that representation changed its predicted moves. If a model tracks the situation a text describes,
          perhaps its states have content in the sense that naturalised theories of content require.
        </p>
      </Definition>

      <Remark title="where the debate stands">
        <p>
          Functionalists say that if a system plays the right inferential role, understanding is present whatever it is made
          of. Inferentialists add that much of meaning lies in the relations among words, which text does contain. Sceptics
          reply that a role defined over words alone still floats free of the world, and note that fluent models also state
          falsehoods with confidence. A middle view treats understanding as coming in degrees, with language models
          understanding some things and not others.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lm",
      rung: "check",
      prompt: <p>What is a language model trained to do?</p>,
      answer: { kind: "choice", options: ["Predict the next token from the previous tokens", "Look up facts in a database", "Translate only between two languages", "Recognise images"], correct: [0] },
    },
    {
      key: "octo",
      rung: "check",
      prompt: <p>What does the octopus thought experiment of Bender and Koller aim to show?</p>,
      answer: { kind: "choice", options: ["That learning the form of language alone cannot yield meaning", "That octopuses are intelligent", "That language models are conscious", "That translation is impossible"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, after &lsquo;the&rsquo;, what percentage does the model give to &lsquo;cat&rsquo;?</p>,
      answer: { kind: "numeric", value: 33, tolerance: 1 },
    },
    {
      key: "othello",
      rung: "apply",
      prompt: <p>What did the Othello experiment suggest?</p>,
      answer: { kind: "choice", options: ["A model trained only on moves came to represent the state of the board", "Models cannot learn games", "Othello is solved", "Language models see images of boards"], correct: [0] },
    },
    {
      key: "ground",
      rung: "apply",
      prompt: <p>What is the symbol grounding problem?</p>,
      answer: { kind: "choice", options: ["How symbols manipulated by a system get connected to what they are about", "How to store symbols efficiently", "Why symbols must be written on paper", "How to choose symbols for logic"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Can a system trained only on text understand language? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument from form and meaning, such as the octopus or the Chinese room.",
          "Considers a reply, such as evidence of world models or a functionalist view of understanding.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Would giving a language model a camera and a robot body settle whether it understands?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with grounding through perception and action.",
          "Considers whether the Chinese room objection survives embodiment, as in the robot reply.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Whether or not such systems understand, people already form attachments to them and ask how they should be treated.
        If an artificial agent could suffer, or had interests of its own, what would we owe it?
      </p>
      <p>Next, the moral status of artificial agents.</p>
    </>
  ),
};
