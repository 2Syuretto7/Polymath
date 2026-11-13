import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["tenacity", "authority", "a priori", "science"];
const ITEMS: SortItem[] = [
  {
    text: "I refuse to read anything that might shake my opinion.",
    cat: "tenacity",
    why: "Holding on to a belief by shutting out whatever might disturb it. It fails once we notice that others think differently.",
  },
  {
    text: "The state decides what everyone shall believe, and punishes dissent.",
    cat: "authority",
    why: "Belief fixed by an institution. It has been very effective historically, but cannot regulate every opinion.",
  },
  {
    text: "We adopt the system that seems most agreeable to reason, in harmony with our natural tastes.",
    cat: "a priori",
    why: "Belief fixed by what seems reasonable. Peirce says this makes inquiry like the development of taste, a matter of fashion.",
  },
  {
    text: "We test beliefs against real things, whose effects on us do not depend on what anyone thinks of them.",
    cat: "science",
    why: "The only method with an external check, so the only one that can show us we were wrong.",
  },
  {
    text: "My grandfather always said so, and I will stick with it whatever anyone says.",
    cat: "tenacity",
    why: "The source is family, but what keeps the belief is the refusal to consider alternatives.",
  },
  {
    text: "The council’s creed is taught in every school, and other books are removed from the libraries.",
    cat: "authority",
    why: "Institutional control over what can be believed.",
  },
  {
    text: "We keep revising the hypothesis whenever new experiments go against it.",
    cat: "science",
    why: "Self-correction through experience is what distinguishes the method of science.",
  },
];

export const lesson: LessonContent = {
  id: "p9.7.1",
  minutes: 85,
  links: {
    revisits: ["p9.5.1", "p7.1.1", "p8.3.1"],
    foreshadows: ["p9.7.2", "p16.1.2", "p10.2.3"],
  },

  puzzle: (
    <>
      <p>
        Charles Sanders Peirce was a chemist, a surveyor, a logician who anticipated quantifiers, and the founder of
        pragmatism, yet he died in poverty without a permanent post. Descartes had begun philosophy by doubting everything.
        Peirce replied: &ldquo;Let us not pretend to doubt in philosophy what we do not doubt in our hearts.&rdquo; If not from
        universal doubt, where does inquiry begin?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each case by the method of fixing belief that it uses, following Peirce&rsquo;s essay of 1877.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which method of fixing belief is at work?" />
    </>
  ),

  theory: (
    <>
      <Definition title="doubt and belief">
        <p>
          In The Fixation of Belief (1877), belief is a habit that guides action, and doubt an uneasy state that we struggle to
          leave. Inquiry is that struggle, and its only aim is the settlement of opinion. Real doubt needs a real reason; paper
          doubt of the Cartesian kind starts nothing.
        </p>
      </Definition>

      <Definition title="the pragmatic maxim">
        <p>
          In How to Make Our Ideas Clear (1878): &ldquo;Consider what effects, that might conceivably have practical bearings,
          we conceive the object of our conception to have. Then, our conception of these effects is the whole of our
          conception of the object.&rdquo; To call a thing hard means that many other substances will not scratch it. Two
          doctrines with the same practical consequences are one doctrine.
        </p>
      </Definition>

      <Example title="truth as the end of inquiry">
        <p>
          &ldquo;The opinion which is fated to be ultimately agreed to by all who investigate is what we mean by the truth, and
          the object represented in this opinion is the real.&rdquo; Truth is defined through the community of inquirers in the
          long run, not through a correspondence that we could never check.
        </p>
      </Example>

      <Example title="abduction and fallibilism">
        <p>
          Besides deduction and induction, Peirce named a third form of inference, <strong>abduction</strong>: reasoning to a
          hypothesis that would explain a surprising fact. Every belief is open to revision; this is his{" "}
          <strong>fallibilism</strong>. His rule for philosophy: do not block the way of inquiry.
        </p>
      </Example>

      <Remark title="pragmatism and its heirs">
        <p>
          Peirce disliked how William James popularised pragmatism and renamed his own view pragmaticism, a word &ldquo;ugly
          enough to be safe from kidnappers&rdquo;. Questions remain: will inquiry really converge, and what of truths about
          the past that no evidence will ever reach? His logic, semiotics and account of abduction influenced the philosophy of
          science far beyond pragmatism.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "methods",
      rung: "check",
      prompt: <p>Which are Peirce&rsquo;s four methods of fixing belief? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Tenacity", "Authority", "The a priori method", "Science", "Revelation"],
        correct: [0, 1, 2, 3],
      },
    },
    {
      key: "belief",
      rung: "check",
      prompt: <p>What is belief, according to Peirce?</p>,
      answer: {
        kind: "choice",
        options: ["A private mental image", "A habit that guides action", "A certainty beyond doubt", "A feeling of pleasure"],
        correct: [1],
      },
    },
    {
      key: "hard",
      rung: "apply",
      prompt: <p>Applying the pragmatic maxim, what does it mean to call a diamond hard?</p>,
      answer: {
        kind: "choice",
        options: [
          "That it has an inner essence of hardness.",
          "That many other substances will not scratch it, and similar practical effects.",
          "That people believe it is hard.",
          "Nothing at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "abd",
      rung: "apply",
      prompt: <p>The lawn is wet this morning; if it rained overnight, that would be expected; so perhaps it rained. Which form of inference is this?</p>,
      answer: { kind: "choice", options: ["Deduction", "Induction", "Abduction", "Tenacity"], correct: [2] },
    },
    {
      key: "truth",
      rung: "apply",
      prompt: <p>How does Peirce characterise truth?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whatever I find useful to believe.",
          "The opinion that all who investigate are fated ultimately to agree on.",
          "What the authorities declare.",
          "Correspondence to things in themselves that we can never check.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Peirce right that we should not pretend to doubt what we do not doubt in our hearts? Argue briefly, with Descartes in mind.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Peirce's objection to Cartesian doubt.",
          "Considers what Descartes's method of doubt achieves, or might achieve.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "past",
      rung: "stretch",
      prompt: <p>Suppose all evidence of what Julius Caesar ate on his last morning is lost forever. Is there still a truth about it, on Peirce&rsquo;s account?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why the case is a problem for defining truth as the end of inquiry.",
          "Considers a reply, such as appeal to what inquiry would reach if pursued indefinitely.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Peirce's account of doubt and belief, his four methods of fixing belief, the pragmatic maxim, truth as the end of inquiry, abduction and fallibilism.",

  glimpse: (
    <p>
      The next lesson turns to William James, who made pragmatism famous and applied it to religion. The philosophy of science
      develops the hypothetico-deductive method, and epistemology weighs coherence against foundations.
    </p>
  ),
};
