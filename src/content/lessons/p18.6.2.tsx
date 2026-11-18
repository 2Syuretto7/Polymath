import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["traditional epistemology", "naturalised epistemology"];
const ITEMS: SortItem[] = [
  { text: "Justify our knowledge of the external world from sense experience alone.", cat: "traditional epistemology", why: "The doctrinal project of first philosophy, which Quine thought Hume had shown to be hopeless." },
  { text: "Translate every statement about bodies into statements about sense experience.", cat: "traditional epistemology", why: "The conceptual project, attempted in Carnap’s Aufbau, which Quine argued could not be completed." },
  { text: "Stand outside all of science to find a foundation for it.", cat: "traditional epistemology", why: "Quine denies there is any such standpoint; we are always aboard Neurath’s boat." },
  { text: "Study how a subject, given a meagre input of stimulation, produces a torrential output of theory.", cat: "naturalised epistemology", why: "Quine’s own description of the new task, an empirical study of the relation between evidence and theory." },
  { text: "Use the psychology of perception to explain how evidence bears on belief.", cat: "naturalised epistemology", why: "Epistemology becomes a chapter of psychology, free to use scientific results." },
  { text: "Ask how natural selection might have shaped our standards of similarity and induction.", cat: "naturalised epistemology", why: "Quine’s suggestion in “Natural Kinds” for why our inductions tend to succeed." },
  { text: "Accept that the theory of knowledge may rely on the science it studies.", cat: "naturalised epistemology", why: "The circularity is harmless once the dream of deducing science from experience is given up." },
];

export const lesson: LessonContent = {
  id: "p18.6.2",
  minutes: 80,
  links: {
    revisits: ["p18.6.1", "p18.4.2", "p18.4.1"],
    foreshadows: ["p18.6.3", "p18.7.1", "p27.5.1"],
  },

  puzzle: (
    <>
      <p>
        For three centuries philosophers tried to show, from the armchair, that our knowledge of the world rests on secure
        foundations. Suppose the project has failed. Should epistemology give up, or should it become something new, a
        science of how creatures like us actually come to know?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each aim by whether it belongs to traditional or to naturalised epistemology.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which kind of epistemology?" />
    </>
  ),

  theory: (
    <>
      <Definition title="two projects and their failure">
        <p>
          In &ldquo;Epistemology Naturalized&rdquo; (1969), Quine distinguished the <strong>doctrinal</strong> project of
          justifying our beliefs about the world from sense experience, and the <strong>conceptual</strong> project of
          defining the concepts of science in sensory terms. Hume had shown that the doctrinal project fails even for
          generalisations about the future: &ldquo;the Humean predicament is the human predicament&rdquo;. Carnap&rsquo;s
          Aufbau, the best attempt at the conceptual project, did not succeed either, and holism suggests none could, since
          single sentences have no sensory content of their own.
        </p>
      </Definition>

      <Definition title="epistemology naturalised">
        <p>
          If a rational reconstruction is not to be had, why not &ldquo;settle for psychology&rdquo;? Epistemology
          &ldquo;simply falls into place as a chapter of psychology and hence of natural science&rdquo;. It studies how
          stimulation of the sensory surfaces gives rise to our theory of the world, and it may use the results of the very
          science whose evidence it examines.
        </p>
      </Definition>

      <Example title="circularity accepted">
        <p>
          The traditional epistemologist would object that using science to study the basis of science is circular. Quine
          replies that the objection made sense only while we hoped to deduce science from something more secure. Once that
          hope is gone, there is no better place to stand than within our best theory, like Neurath&rsquo;s sailors.
        </p>
      </Example>

      <Remark title="the normativity objection">
        <p>
          Jaegwon Kim objected in 1988 that epistemology is normative: it asks what we ought to believe, while psychology
          describes what we do believe. Naturalised epistemology, he argued, changes the subject. Quine replied that normative
          epistemology survives as a branch of engineering, the technology of predicting experience, and later naturalists
          such as Alvin Goldman tied justification to the reliability of belief-forming processes.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "proposal",
      rung: "check",
      prompt: <p>What did Quine propose that epistemology should become?</p>,
      answer: {
        kind: "choice",
        options: [
          "A chapter of psychology and so of natural science.",
          "A branch of pure logic.",
          "An a priori foundation for science.",
          "A part of ethics.",
        ],
        correct: [0],
      },
    },
    {
      key: "hume",
      rung: "check",
      prompt: <p>What did Quine mean by &ldquo;the Humean predicament is the human predicament&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "We cannot deduce even generalisations about the future from sense experience, and we never will.",
          "Hume was a pessimist.",
          "All knowledge is impossible.",
          "Only Hume understood causation.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the aims belong to naturalised epistemology?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "circ",
      rung: "apply",
      prompt: <p>Why did Quine think it was acceptable for epistemology to use the results of science?</p>,
      answer: {
        kind: "choice",
        options: [
          "Circularity matters only if we hope to deduce science from something firmer, a hope already abandoned.",
          "Science is certain.",
          "Epistemology is not about science.",
          "Psychology is a priori.",
        ],
        correct: [0],
      },
    },
    {
      key: "kim",
      rung: "apply",
      prompt: <p>What was Kim&rsquo;s main objection to naturalised epistemology?</p>,
      answer: {
        kind: "choice",
        options: [
          "It drops the normative question of what we ought to believe, and so changes the subject.",
          "It relies too heavily on logic.",
          "Psychology is not a science.",
          "It is too sceptical.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a naturalised epistemology still say what we ought to believe? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Kim’s normativity objection.",
          "Considers a naturalist reply, such as Quine’s engineering view or reliabilism.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is it viciously circular to use perception to check whether perception is reliable?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes circularity that assumes the conclusion as a premise from reliance on a faculty in the course of checking it.",
          "Considers whether every faculty must be checked by some other, and whether this regress is avoidable.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the indeterminacy of translation: Quine&rsquo;s argument that the evidence never settles what a speaker&rsquo;s
      words mean.
    </p>
  ),
};
