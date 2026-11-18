import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["CH has a definite truth value", "CH may lack one"];
const ITEMS: SortItem[] = [
  { text: "Cantor spent years trying to prove that every infinite set of reals is countable or of the size of the continuum.", cat: "CH has a definite truth value", why: "He treated CH as an open question with an answer, which he expected to be ‘true’." },
  { text: "Gödel, 1947: CH is very likely false, and new axioms will show it.", cat: "CH has a definite truth value", why: "Gödel’s realism: the concept of set determines an answer, even if ZFC does not." },
  { text: "Woodin, around 2000: arguments from Ω-logic suggest the continuum is ℵ₂.", cat: "CH has a definite truth value", why: "A programme aimed at settling CH, here against it." },
  { text: "Woodin’s later Ultimate L programme: if V is Ultimate L, CH is true.", cat: "CH has a definite truth value", why: "Still the search for the one right answer, now pointing the other way." },
  { text: "Feferman: CH is an inherently vague statement, not a definite mathematical problem.", cat: "CH may lack one", why: "If the concept of an arbitrary subset of ℕ is not sharp, CH may have no fact of the matter." },
  { text: "Hamkins: there are many set-theoretic universes, CH holds in some and fails in others, and that is the whole truth.", cat: "CH may lack one", why: "The multiverse view: CH is settled by knowing how it behaves across universes, not by one answer." },
  { text: "Skolem: set-theoretic notions such as ‘uncountable’ are relative to a model.", cat: "CH may lack one", why: "Skolem’s relativism leaves no absolute question for CH to answer." },
];

export const lesson: LessonContent = {
  id: "p22.5.3",
  minutes: 85,
  links: {
    revisits: ["p22.5.2", "m20.6.6", "p22.4.3"],
    foreshadows: ["p22.6.1", "p22.6.3", "p22.6.4"],
  },

  puzzle: (
    <>
      <p>
        Hilbert put the continuum hypothesis first on his list of problems in 1900. By 1963 it was proved that ZFC can neither
        prove nor refute it. Was Hilbert&rsquo;s first problem solved, or shown to be no problem at all? Or is it still
        open, waiting for the right axioms?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort these views: does each treat CH as having a definite answer?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Definite or not?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the situation">
        <p>
          The continuum hypothesis says there is no set of reals strictly between the natural numbers and the reals in size.
          Gödel (1938) showed ZFC cannot refute it, and Cohen (1963) that ZFC cannot prove it. Cohen&rsquo;s method, forcing,
          shows that ZFC is consistent with the continuum being almost any uncountable cardinal of uncountable cofinality. And
          as the last lesson showed, no known large cardinal axiom decides it.
        </p>
      </Definition>

      <Example title="realism: there is an answer">
        <p>
          For Gödel, sets exist independently of us, and we perceive something of them, as we perceive physical objects.
          ZFC is an incomplete description; CH has a truth value we have not yet found. He thought CH false, since it has
          &lsquo;implausible&rsquo; consequences about small sets of reals. Woodin&rsquo;s work is the most sustained attempt to
          find an answer: first arguments against CH, later the Ultimate L programme, which, if it succeeds, would favour CH.
        </p>
      </Example>

      <Example title="not definite">
        <p>
          Solomon Feferman argued that CH is not a definite mathematical problem: the notion of an arbitrary subset of the
          natural numbers, on which it depends, is not sharp enough to fix an answer. On this view, independence from ZFC is
          not ignorance but a sign of vagueness in the concept itself.
        </p>
      </Example>

      <Definition title="the multiverse">
        <p>
          Joel David Hamkins (2012) argues that there are many set-theoretic universes, each as real as the others, related by
          forcing. In some CH holds, in others it fails, and we can move between them at will. On the multiverse view CH has
          been answered as fully as it can be: we know exactly how it behaves.
        </p>
      </Definition>

      <Remark title="what is at stake">
        <p>
          The debate is a test for theories of mathematical truth. A realist must say what could make CH true and how we could
          know it. A pluralist must explain why the analogous move is not available for arithmetic, where we are confident
          every statement has a truth value. The question set by Hilbert has become a question about what mathematics is.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "indep",
      rung: "check",
      prompt: <p>Who showed that ZFC cannot prove CH?</p>,
      answer: { kind: "choice", options: ["Cohen, using forcing, in 1963", "Gödel, using the constructible universe, in 1938", "Cantor, in 1878", "Hilbert, in 1900"], correct: [0] },
    },
    {
      key: "godel",
      rung: "check",
      prompt: <p>What did Gödel think about CH?</p>,
      answer: { kind: "choice", options: ["It has a truth value, and is very likely false", "It is meaningless", "It is true by definition", "It is a matter of convention"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the seven views treat CH as having a definite truth value?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "fef",
      rung: "apply",
      prompt: <p>Why did Feferman think CH is not definite?</p>,
      answer: { kind: "choice", options: ["The notion of an arbitrary subset of the natural numbers is not sharp enough", "Because it has been proved", "Because the reals do not exist", "Because ZFC is inconsistent"], correct: [0] },
    },
    {
      key: "multi",
      rung: "apply",
      prompt: <p>On Hamkins&rsquo;s multiverse view, in what sense is CH answered?</p>,
      answer: { kind: "choice", options: ["We know how it holds in some universes and fails in others", "It is true in every universe", "It is false in every universe", "It will be decided by a new axiom"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the independence of CH from ZFC show that CH has no truth value? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes independence from a theory and lack of a truth value, for example via Gödel’s incompleteness.",
          "Considers a view on the other side, such as Feferman’s or Hamkins’s.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>A pluralist about CH may still think every statement of arithmetic is true or false. Is that position stable?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that arithmetic, too, has statements independent of its axioms.",
          "Considers what might make arithmetic more determinate than set theory, such as the sharpness of the concept of natural number.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Realists about sets owe an account of how we could know about objects outside space and time. Paul Benacerraf put the
        challenge sharply: the best semantics for mathematics seems to require abstract objects, and the best theory of
        knowledge seems to forbid our knowing them.
      </p>
      <p>
        Next, Benacerraf&rsquo;s dilemma: the causal theory of knowledge, its problems, and why it still haunts every
        platonist answer.
      </p>
    </>
  ),
};
