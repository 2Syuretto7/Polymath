import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TruthFunctionViz } from "@/components/viz/TruthFunctionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p18.2.2",
  minutes: 80,
  links: {
    revisits: ["p18.2.1", "p15.1.2", "p2.2.2"],
    foreshadows: ["p18.3.1", "p18.3.2", "p18.4.1"],
  },

  puzzle: (
    <>
      <p>
        A chemist explains water by its atoms. Could a philosopher explain the world in the same way, by finding the
        simplest facts out of which every other fact is built? And if so, what would a language look like whose structure
        matched that of the facts exactly?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Fix the atomic facts and watch the truth of every complex proposition follow.</p>
      <TruthFunctionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="atoms and molecules">
        <p>
          In lectures of 1918, &ldquo;The Philosophy of Logical Atomism&rdquo;, Russell held that the world consists of{" "}
          <strong>atomic facts</strong>: a simple particular having a quality, or several standing in a relation. Atomic
          propositions assert them. <strong>Molecular propositions</strong> are built with connectives such as not, and, or,
          and their truth is a function of the truth of their atomic parts, so they need no molecular facts of their own.
          The ideas grew from conversations with his student Ludwig Wittgenstein.
        </p>
      </Definition>

      <Example title="analysis and acquaintance">
        <p>
          Ordinary sentences hide their form. Russell&rsquo;s theory of descriptions showed that &ldquo;the present King of
          France is bald&rdquo; is really a general proposition about whatever uniquely is King of France. Analysis continues
          until only names of things we are directly acquainted with remain. Since we can be wrong about whether Socrates
          exists, &ldquo;Socrates&rdquo; is a disguised description; the only <strong>logically proper names</strong> are
          words such as &ldquo;this&rdquo;, applied to a present sense datum.
        </p>
      </Example>

      <Definition title="the hard cases">
        <p>
          Russell found that not everything fits. Negative facts: what makes &ldquo;this is not red&rdquo; true, if not a
          fact that this is not red? General facts: no list of atomic facts implies &ldquo;all men are mortal&rdquo; unless
          we add that these are all the men there are. Beliefs: &ldquo;Othello believes that Desdemona loves Cassio&rdquo; is
          not a truth function of &ldquo;Desdemona loves Cassio&rdquo;. He accepted negative and general facts, to the
          disquiet of his audience.
        </p>
      </Definition>

      <Remark title="legacy">
        <p>
          Logical atomism shaped the <em>Tractatus</em> and the logical positivists. Its assumptions, that there are simple
          objects, that atomic facts are independent of one another, and that ordinary language has a hidden logical form,
          were later rejected, most influentially by Wittgenstein himself.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "atomic",
      rung: "check",
      prompt: <p>What is an atomic fact, for Russell?</p>,
      answer: {
        kind: "choice",
        options: [
          "A simple particular having a quality, or particulars standing in a relation.",
          "A fact about atoms in physics.",
          "Any true sentence.",
          "A fact that cannot be known.",
        ],
        correct: [0],
      },
    },
    {
      key: "molecular",
      rung: "check",
      prompt: <p>What determines the truth of a molecular proposition such as &ldquo;p or q&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: ["The truth values of its atomic parts", "A molecular fact", "The beliefs of the speaker", "Nothing; it has no truth value"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, suppose p obtains and q and r do not. How many of the molecular propositions are true?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "names",
      rung: "apply",
      prompt: <p>Why did Russell deny that &ldquo;Socrates&rdquo; is a logically proper name?</p>,
      answer: {
        kind: "choice",
        options: [
          "We are not acquainted with Socrates, and could be wrong that he existed, so the name abbreviates a description.",
          "Because Socrates is dead.",
          "Because proper names have no meaning at all.",
          "Because Greek names cannot be analysed.",
        ],
        correct: [0],
      },
    },
    {
      key: "general",
      rung: "apply",
      prompt: <p>Why did Russell think he needed general facts?</p>,
      answer: {
        kind: "choice",
        options: [
          "No set of atomic facts implies that all men are mortal unless it is also a fact that those are all the men.",
          "Because there are no atomic facts.",
          "Because general propositions are always false.",
          "Because the theory of descriptions requires them.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Should we accept negative facts, such as the fact that this is not red? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why negative truths seem to need something in the world to make them true.",
          "Considers an alternative, such as incompatibility with a positive fact, or totality facts, and a problem with it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Logical atomism assumes that analysis must end in simples. Must it? What if every fact could be analysed further?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the atomist reason for simples, for example that meaning must be fixed somewhere.",
          "Considers the possibility of endless analysis and what that would mean for language and the world.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the theory of types: Russell&rsquo;s answer to his own paradox, and the hierarchy it imposes on logic.
    </p>
  ),
};
