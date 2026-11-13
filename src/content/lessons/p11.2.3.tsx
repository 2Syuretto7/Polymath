import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ObjectCountViz } from "@/components/viz/ObjectCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.2.3",
  minutes: 80,
  links: {
    revisits: ["p11.2.1", "p11.2.2", "p11.1.2"],
    foreshadows: ["p27.5.1", "p27.5.2", "p27.3.1"],
  },

  puzzle: (
    <>
      <p>
        Three particles, two of them stuck together. How many objects are there? Three, four, or seven? Philosophers have
        defended each answer. Are they disagreeing about the world, or only about how to use the word &ldquo;object&rdquo;?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a view of when things compose a further thing, and count the objects. Notice that the views agree on every fact
        about where the simples are.
      </p>
      <ObjectCountViz />
    </>
  ),

  theory: (
    <>
      <Definition title="meta-ontology">
        <p>
          Ontology asks what exists. <strong>Meta-ontology</strong> asks what such questions mean, and how, if at all, they
          can be answered.
        </p>
      </Definition>

      <Example title="Carnap's frameworks">
        <p>
          For Carnap, to talk about numbers we first adopt a linguistic framework with number words and rules for them.
          <strong> Internal questions</strong>, such as whether there is a prime above 100, are then settled by the rules,
          often trivially. <strong>External questions</strong>, such as whether numbers really exist, apart from any framework,
          are not factual; at most they are practical questions about which framework is useful.
        </p>
      </Example>

      <Remark title="Quine's reply">
        <p>
          Quine rejected the internal and external distinction along with the analytic and synthetic distinction. Choosing an
          ontology is continuous with choosing a scientific theory, on grounds of simplicity and explanatory power. So
          existence questions are real but answered holistically, and Quine&rsquo;s criterion tells us what our best theory
          says there is.
        </p>
      </Remark>

      <Remark title="neo-Carnapian views">
        <p>
          Eli Hirsch argues that disputes like the one about composition are <strong>verbal</strong>: each side speaks a
          language in which its own claims come out true, so they talk past each other. Quantifier variance says
          &ldquo;there is&rdquo; has several equally good meanings. Defenders of hard ontology, such as Ted Sider, reply that
          some meanings carve reality at its joints better than others, so there is a fact about which count is correct.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does meta-ontology study?</p>,
      answer: {
        kind: "choice",
        options: ["Which things exist", "What existence questions mean and how they can be answered", "The history of ontology", "Only abstract objects"],
        correct: [1],
      },
    },
    {
      key: "carnap",
      rung: "check",
      prompt: <p>For Carnap, what is the status of the external question &ldquo;Do numbers really exist?&rdquo;</p>,
      answer: {
        kind: "choice",
        options: [
          "A deep factual question",
          "Not a factual question; at most a practical question about which framework to adopt",
          "Trivially true",
          "Answered by physics",
        ],
        correct: [1],
      },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>With three simples, how many objects does a mereological universalist count?</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0 },
    },
    {
      key: "quine",
      rung: "apply",
      prompt: <p>Why did Quine reject Carnap&rsquo;s distinction between internal and external questions?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because he thought all questions are external.",
          "Because, having rejected the analytic and synthetic distinction, he saw choosing an ontology as continuous with choosing a scientific theory.",
          "Because he believed in Meinongian objects.",
          "Because he thought numbers are physical.",
        ],
        correct: [1],
      },
    },
    {
      key: "verbal",
      rung: "apply",
      prompt: <p>What does it mean for Hirsch to call the composition dispute verbal?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is conducted aloud.",
          "Each side speaks a language in which its own claims are true, so they do not really disagree about the world.",
          "One side is lying.",
          "The dispute is about grammar books.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the question of how many objects there are in the three-particle world a substantive question? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States at least two rival answers.",
          "Considers the verbal dispute view or a reply such as Sider’s appeal to joint-carving.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "joints",
      rung: "stretch",
      prompt: <p>What could make one meaning of &ldquo;there is&rdquo; better than another? Is &ldquo;carving reality at its joints&rdquo; a clear idea?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the idea of joint-carving or naturalness.",
          "Asks how we could know which meaning carves best.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what meta-ontology asks, Carnap's internal and external questions, Quine's reply, and the debate between those who think disputes like the one about composition are verbal and those who think some answers carve reality at its joints.",

  glimpse: (
    <p>
      This chapter closes our first look at existence. Graduate metaphysics returns to Carnap and Quine, to verbal disputes,
      and to the special composition question in depth.
    </p>
  ),
};
