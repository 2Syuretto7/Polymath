import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["computable", "not computable"];
const ITEMS: SortItem[] = [
  { text: "Deciding whether a formula of propositional logic is a tautology.", cat: "computable", why: "A truth table checks every row; there are finitely many." },
  { text: "Deciding whether an arbitrary program halts on a given input.", cat: "not computable", why: "Turing’s halting problem (1936): a diagonal argument shows no machine decides it." },
  { text: "Checking whether a given string of formulas is a correct proof in Peano arithmetic.", cat: "computable", why: "Each step is checked mechanically against the axioms and rules." },
  { text: "Listing, one after another, every theorem of Peano arithmetic.", cat: "computable", why: "Generate all strings in order and keep the correct proofs: the theorems can be listed, though not decided." },
  { text: "Deciding whether a sentence of first-order logic is valid.", cat: "not computable", why: "Church and Turing (1936) showed this; validities can be listed but not decided." },
  { text: "Deciding whether a polynomial equation with integer coefficients has a solution in whole numbers.", cat: "not computable", why: "Hilbert’s tenth problem, shown unsolvable by Matiyasevich (1970), building on Davis, Putnam and Robinson." },
  { text: "Deciding whether a sentence of arithmetic is true.", cat: "not computable", why: "Arithmetical truth cannot even be listed, by Gödel’s and Tarski’s theorems." },
  { text: "Playing chess perfectly, given unlimited time and memory.", cat: "computable", why: "Chess is a finite game, so searching the whole game tree settles it in principle." },
];

export const lesson: LessonContent = {
  id: "p17.3.3",
  minutes: 80,
  links: {
    revisits: ["p17.3.2", "p12.3.1", "p12.3.2"],
    foreshadows: ["m20.5.4", "m20.5.3", "p17.4.2"],
  },

  puzzle: (
    <>
      <p>
        There are precisely defined questions that no computer, however large or fast, can ever answer in general. If the
        mind is a kind of computer, it shares those limits. If it does not share them, it is not a computer. Can we tell which
        is the case?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each task: can some machine carry it out in general, or can none?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Computable, or not computable?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the Church–Turing thesis">
        <p>
          In 1936 Alonzo Church and Alan Turing independently proposed that every function computable by an effective
          procedure, one a clerk could follow with pencil and paper, is computable by a Turing machine. This is a thesis, not
          a theorem, since &ldquo;effective procedure&rdquo; is informal, but every precise model proposed since has computed
          exactly the same functions.
        </p>
      </Definition>

      <Example title="limits of computation">
        <p>
          Turing showed that no machine decides whether an arbitrary program halts. Church showed that validity in
          first-order logic is undecidable. Some sets, like the theorems of a formal theory, can be listed but not decided;
          others, like the true sentences of arithmetic, cannot even be listed.
        </p>
      </Example>

      <Definition title="computationalism">
        <p>
          The computational theory of mind holds that thinking is computation over mental representations. If, in addition,
          the Church–Turing thesis holds, a mind can compute only what a Turing machine can. Nothing in the limits above
          threatens this: there is no evidence that humans can solve the halting problem or decide arithmetical truth in
          general either. The limits bind us and machines alike.
        </p>
      </Definition>

      <Remark title="other challenges">
        <p>
          The serious doubts about computationalism come from elsewhere. Searle&rsquo;s Chinese room asks whether symbol
          manipulation could ever amount to understanding, a question about meaning, not about what is computable. Others ask
          whether physical processes might compute beyond Turing machines, a speculative &ldquo;hypercomputation&rdquo;, and
          whether the brain&rsquo;s analogue dynamics are best described as computation at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ct",
      rung: "check",
      prompt: <p>What does the Church–Turing thesis say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every function computable by an effective procedure is computable by a Turing machine.",
          "Every function is computable.",
          "Every mind is a Turing machine.",
          "Turing machines can solve the halting problem.",
        ],
        correct: [0],
      },
    },
    {
      key: "halt",
      rung: "check",
      prompt: <p>What did Turing show about the halting problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "No Turing machine decides, for every program and input, whether the program halts.",
          "Every program halts.",
          "Some program can decide it for all programs.",
          "It is decidable but very slow.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how is &ldquo;deciding whether a sentence of first-order logic is valid&rdquo; classified?</p>,
      answer: { kind: "choice", options: ["Not computable", "Computable"], correct: [0] },
    },
    {
      key: "list",
      rung: "apply",
      prompt: <p>Which describes the theorems of Peano arithmetic?</p>,
      answer: {
        kind: "choice",
        options: [
          "They can be listed by a machine, but no machine decides whether a given sentence is one.",
          "They can be decided by a machine.",
          "They cannot even be listed.",
          "There are only finitely many.",
        ],
        correct: [0],
      },
    },
    {
      key: "comp",
      rung: "apply",
      prompt: <p>Why do the limits of computation not, by themselves, refute computationalism about the mind?</p>,
      answer: {
        kind: "choice",
        options: [
          "There is no evidence that humans can solve these problems in general either.",
          "Humans can solve the halting problem.",
          "The limits apply only to slow computers.",
          "Computationalism says the mind is not a computer.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Do the limits of computation show anything about the limits of the human mind? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a limit, such as the halting problem, and the Church–Turing thesis.",
          "Considers whether the mind is computational, or whether humans in fact exceed these limits.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If a physical device were found that solved the halting problem, would the Church–Turing thesis be refuted?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes the thesis about effective procedures a clerk could follow from a physical thesis about what any device can compute.",
          "Considers whether such a device would count as following an effective procedure, and how we could check its answers.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Church–Turing thesis, one problem no machine can solve, and why such limits do not by themselves show that the mind is not a computer.",

  glimpse: (
    <p>
      Next, many-valued logics: what happens when sentences may be neither true nor false, or something in between, and
      why one might want that.
    </p>
  ),
};
