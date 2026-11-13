import { Definition, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["abstract", "concrete"];
const ITEMS: SortItem[] = [
  { text: "the number 7", cat: "abstract", why: "Not in space or time, and causes nothing: the standard example of an abstract object." },
  { text: "the Taj Mahal", cat: "concrete", why: "A located, causally active physical object." },
  { text: "Premchand’s novel Godaan, the work itself", cat: "abstract", why: "The work is a type: it survives the loss of any copy. Some say it was created, which complicates the picture." },
  { text: "your copy of Godaan", cat: "concrete", why: "A token: this particular book, on your shelf, which can be burnt." },
  { text: "the set whose only member is Delhi", cat: "abstract", why: "Sets are usually counted as abstract even when their members are concrete." },
  { text: "the game of chess", cat: "abstract", why: "A type or system of rules, not any particular board or match." },
  { text: "a particular game played in Chennai yesterday", cat: "concrete", why: "An event in space and time." },
  { text: "the equator", cat: "abstract", why: "Located, yet not made of anything and causally inert: a borderline case that shows the distinction is hard to draw." },
];

export const lesson: LessonContent = {
  id: "p11.2.2",
  minutes: 80,
  links: {
    revisits: ["p11.2.1", "p4.3.4", "p11.1.1"],
    foreshadows: ["p11.2.3", "p22.6.2", "p22.6.3"],
  },

  puzzle: (
    <>
      <p>
        Mathematics tells us there are infinitely many primes. If that is true, there are numbers. But where are they? They
        are not in space, they do not change, and nothing bumps into them. How could we ever know about such things, and
        should we believe in them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each item as abstract or concrete. Some are harder than they look.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Abstract or concrete?" />
    </>
  ),

  theory: (
    <>
      <Definition title="abstract objects">
        <p>
          An <strong>abstract object</strong> is, on the usual rough account, one that is not in space or time and does not
          cause anything: numbers, sets, propositions, perhaps types such as novels and games.{" "}
          <strong>Platonism</strong> says there are such objects; <strong>nominalism</strong> in this sense says there are
          none.
        </p>
      </Definition>

      <ArgumentStepViz
        title="The indispensability argument"
        steps={[
          { claim: "We ought to believe in all the entities indispensable to our best scientific theories.", kind: "premise", note: "Quine’s naturalism: science is our best guide to what there is.", objection: "Perhaps only the parts of science that do causal work earn belief." },
          { claim: "Mathematical objects are indispensable to our best scientific theories.", kind: "premise", note: "Physics quantifies over numbers, functions and spaces.", objection: "Hartry Field tried to rewrite Newtonian gravitation without numbers." },
          { claim: "So we ought to believe in mathematical objects.", kind: "conclusion", note: "Due to Quine and Putnam." },
        ]}
      />

      <Remark title="Benacerraf's challenge">
        <p>
          Our best theory of knowledge seems to require some causal or reliable link between knowers and what they know. But
          abstract objects cause nothing. So how could our mathematical beliefs track them? Platonists answer that mathematical
          knowledge rests on proof and on its success in science, not on contact.
        </p>
      </Remark>

      <Remark title="nominalist strategies">
        <p>
          Fictionalists say mathematics is a useful story: &ldquo;there are infinitely many primes&rdquo; is true only in the
          story, as &ldquo;Sherlock Holmes lives on Baker Street&rdquo; is. Others paraphrase mathematics in terms of
          possibility or structure. Each must explain why a false story is so useful.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which feature is usually taken to mark an object as abstract?</p>,
      answer: {
        kind: "choice",
        options: ["Being small", "Being outside space and time and causally inert", "Being imagined", "Being made of energy"],
        correct: [1],
      },
    },
    {
      key: "plat",
      rung: "check",
      prompt: <p>What does platonism about mathematics say?</p>,
      answer: { kind: "choice", options: ["Numbers are ideas in minds", "Mathematical objects exist, and are abstract", "Mathematics is false", "Numbers are marks on paper"], correct: [1] },
    },
    {
      key: "indisp",
      rung: "apply",
      prompt: <p>Which premise did Hartry Field&rsquo;s rewriting of Newtonian gravitation attack?</p>,
      answer: {
        kind: "choice",
        options: [
          "That we should believe in what our best theories need",
          "That mathematical objects are indispensable to science",
          "That Newton was right",
          "That numbers are abstract",
        ],
        correct: [1],
      },
    },
    {
      key: "benac",
      rung: "apply",
      prompt: <p>What is Benacerraf&rsquo;s challenge to platonism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Numbers are too large to know about.",
          "If knowledge needs a causal or reliable link to its objects, it is unclear how we could know about causally inert abstract objects.",
          "Mathematics contains contradictions.",
          "Abstract objects are physical.",
        ],
        correct: [1],
      },
    },
    {
      key: "fict",
      rung: "apply",
      prompt: <p>For a fictionalist, what is the status of &ldquo;there are infinitely many primes&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "Literally true",
          "True in the story of mathematics, though not literally true",
          "Meaningless",
          "Known by perception",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the indispensability argument show that numbers exist? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument.",
          "Considers an objection to one premise.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "novel",
      rung: "stretch",
      prompt: <p>Premchand seems to have created Godaan. Can an abstract object be created? What does this suggest about the abstract–concrete distinction?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the tension between creation and being outside time and causation.",
          "Considers an option, such as the work being discovered, or being an abstract artefact.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what abstract objects are, the indispensability argument for believing in numbers, Benacerraf's epistemological challenge, and the fictionalist alternative.",

  glimpse: (
    <p>
      The next lesson steps back to ask whether such existence questions are deep, or a matter of choosing a language.
      Philosophy of mathematics returns to the indispensability argument and fictionalism in depth.
    </p>
  ),
};
