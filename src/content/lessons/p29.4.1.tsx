import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DisquotationViz } from "@/components/viz/DisquotationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p29.4.1",
  minutes: 90,
  links: {
    revisits: ["p17.5.2", "p15.3.2", "p29.3.3"],
    foreshadows: ["p29.4.2", "p30.1.1", "p31.1.1"],
  },

  puzzle: (
    <>
      <p>
        &lsquo;It is true that snow is white&rsquo; seems to say nothing more than &lsquo;snow is white&rsquo;. If adding
        &lsquo;it is true that&rsquo; changes nothing, why do we have the word at all? And if truth is so thin, what were
        philosophers arguing about when they debated correspondence and coherence?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set which facts hold, and compare &lsquo;everything Asha said is true&rsquo; with the claims she made.</p>
      <DisquotationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="redundancy and disquotation">
        <p>
          Frank Ramsey suggested that &lsquo;it is true that p&rsquo; means just p, so the truth predicate is redundant.
          Quine refined this into disquotationalism: &lsquo;&ldquo;snow is white&rdquo; is true&rsquo; is equivalent to
          &lsquo;snow is white&rsquo;, and the truth predicate is a device for removing quotation marks.
        </p>
      </Definition>

      <Definition title="minimalism">
        <p>
          Paul Horwich&rsquo;s minimalism says that our whole grasp of truth consists in accepting the instances of the
          equivalence schema: the proposition that p is true if and only if p. There is no further nature of truth to
          discover, as there is a further nature of water.
        </p>
      </Definition>

      <Example title="what truth is for">
        <p>
          If truth adds nothing, why have it? Because it lets us generalise. We cannot list everything Asha said, or every
          theorem of arithmetic, but we can say &lsquo;everything Asha said is true&rsquo;. This does the work of an infinite
          or unknown conjunction, as the visualisation shows. Quine called the move semantic ascent.
        </p>
      </Example>

      <Remark title="against substantial theories">
        <p>
          Correspondence theories say truth is agreement with facts; coherence theories say it is membership in a coherent
          system; pragmatists tie it to what works in inquiry. The deflationist replies that each of these tries to explain
          a property that needs no explanation beyond the equivalence schema.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Minimalism has trouble proving generalisations, such as that every sentence of the form p or not p is true, since
          each instance of the schema covers only one sentence. The conservativeness argument of Stewart Shapiro and Jeffrey
          Ketland notes that adding a compositional truth theory to Peano arithmetic proves its consistency, so truth seems
          to add content after all. And the liar paradox shows the unrestricted schema is inconsistent, so the deflationist
          must restrict it without a principled theory of what truth is.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "claim",
      rung: "check",
      prompt: <p>What does deflationism claim about truth?</p>,
      answer: { kind: "choice", options: ["The truth predicate has no substantial nature beyond the equivalence schema", "Truth is correspondence to facts", "Truth is what works in inquiry", "Truth is membership in a coherent system"], correct: [0] },
    },
    {
      key: "use",
      rung: "check",
      prompt: <p>According to deflationists, what is the truth predicate useful for?</p>,
      answer: { kind: "choice", options: ["Generalising over sentences we cannot list", "Describing a relation between words and the world", "Measuring the probability of a belief", "Avoiding the liar paradox"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, make every fact hold except &lsquo;The train is late&rsquo;. Is everything Asha said true?</p>,
      answer: { kind: "choice", options: ["No, because she said the train is late", "Yes, because three of the four facts hold", "Yes, because she did not mention chess", "It cannot be determined"], correct: [0] },
    },
    {
      key: "horwich",
      rung: "apply",
      prompt: <p>What is Horwich&rsquo;s version of deflationism called?</p>,
      answer: { kind: "choice", options: ["Minimalism", "Disquotationalism", "The redundancy theory", "The prosentential theory"], correct: [0] },
    },
    {
      key: "cons",
      rung: "apply",
      prompt: <p>What does the conservativeness argument against deflationism point to?</p>,
      answer: { kind: "choice", options: ["A compositional truth theory added to arithmetic proves the consistency of arithmetic", "Truth cannot be defined in any language", "Every truth theory is inconsistent", "Arithmetic is incomplete"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is truth a substantial property? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the deflationist view and the role of the equivalence or disquotation schema.",
          "Considers a substantial theory or an objection, such as conservativeness or the generalisation problem.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a deflationist explain why true beliefs tend to help us succeed?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the apparent explanatory role of truth in success.",
          "Considers a deflationary reply, such as explaining each case instance by instance.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Every theory of truth must face the liar. Each solution seems to invite a new liar sentence built from its own
        vocabulary, and the paradox returns stronger.
      </p>
      <p>Next, revenge paradoxes.</p>
    </>
  ),
};
