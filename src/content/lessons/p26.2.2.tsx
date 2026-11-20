import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["Possibilism", "Actualism", "Necessitism"];
const ITEMS: SortItem[] = [
  { text: "There are talking donkeys; they are just not in our world.", cat: "Possibilism", why: "David Lewis’s modal realism: other possible worlds are as concrete as ours, and ‘actual’ means only ‘in this world’." },
  { text: "Some things that there are do not actually exist.", cat: "Possibilism", why: "The possibilist quantifier ranges over merely possible objects as well as actual ones." },
  { text: "Everything that there is actually exists.", cat: "Actualism", why: "The actualist thesis, defended by Alvin Plantinga, Robert Adams and Arthur Prior." },
  { text: "Possible worlds are abstract states of affairs, which exist actually; only one of them obtains.", cat: "Actualism", why: "Plantinga and Adams make worlds actual abstract objects, so that talk of worlds needs no merely possible things." },
  { text: "An object can have no properties at a world where it does not exist.", cat: "Actualism", why: "Serious actualism: Socrates is not snub-nosed, or even non-existent in the ordinary sense, at a world without him." },
  { text: "Necessarily, everything is necessarily something.", cat: "Necessitism", why: "Timothy Williamson’s necessitism, which validates both Barcan formulas with a constant domain." },
  { text: "The child you could have had is something: a merely possible object that could have been a concrete person but is not.", cat: "Necessitism", why: "For Williamson, such things exist in the widest sense but are not concrete." },
];

export const lesson: LessonContent = {
  id: "p26.2.2",
  minutes: 90,
  links: {
    revisits: ["p26.2.1", "p2.4.4", "p0.4.1"],
    foreshadows: ["p26.3.1", "p26.3.4", "p26.4.1"],
  },

  puzzle: (
    <>
      <p>
        Wittgenstein might never have existed. In a world without Wittgenstein, what makes it true there that Wittgenstein
        does not exist, if there is no Wittgenstein there to lack existence? And when we quantify over possible worlds, are
        we committed to merely possible things?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort these claims among three views of what there is.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which view?" />
    </>
  ),

  theory: (
    <>
      <Definition title="actualism and possibilism">
        <p>
          <strong>Actualism</strong> holds that everything there is actually exists. <strong>Possibilism</strong> denies this:
          there are merely possible things. David Lewis&rsquo;s modal realism is the boldest possibilism, with concrete
          worlds spread out like our own. Actualists must give an account of possible worlds and of claims like &lsquo;there
          could have been a person who does not exist&rsquo; without merely possible things.
        </p>
      </Definition>

      <Definition title="varying domains">
        <p>
          Kripke&rsquo;s varying domain semantics suits actualism: each world has its own domain, and the quantifier at a
          world ranges over what exists there. But the semantics itself quantifies over the union of all the domains, which
          includes things that do not actually exist. So actualists cannot simply read the model theory at face value.
        </p>
      </Definition>

      <Example title="serious actualism">
        <p>
          Plantinga&rsquo;s <strong>serious actualism</strong> says objects have no properties at worlds where they do not
          exist. Then &lsquo;Socrates does not exist&rsquo; is true at a world because the proposition is true there, not
          because Socrates has the property of non-existence there. Arthur Prior went further: in a world without Socrates,
          even propositions about Socrates do not exist.
        </p>
      </Example>

      <Example title="necessitism and contingentism">
        <p>
          Timothy Williamson recasts the debate. <strong>Necessitism</strong> says necessarily everything is necessarily
          something; <strong>contingentism</strong> denies it. Necessitism gives the simplest quantified modal logic, with
          both Barcan formulas and a constant domain, at the cost of holding that your possible children are something,
          though nothing concrete.
        </p>
      </Example>

      <Remark title="logic and metaphysics">
        <p>
          The choice between constant and varying domains looked like a technical matter. It turns out to encode a deep
          question about whether what there is could have been different.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "act",
      rung: "check",
      prompt: <p>What does actualism hold?</p>,
      answer: { kind: "choice", options: ["Everything there is actually exists", "Only the present exists", "Possible worlds are concrete", "Nothing exists necessarily"], correct: [0] },
    },
    {
      key: "lewis",
      rung: "check",
      prompt: <p>What is distinctive of Lewis&rsquo;s modal realism?</p>,
      answer: { kind: "choice", options: ["Other possible worlds are concrete, just like ours", "Possible worlds are sets of sentences", "There is only one possible world", "Worlds are mental constructions"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, where does &lsquo;Necessarily, everything is necessarily something&rsquo; belong?</p>,
      answer: { kind: "choice", options: ["Necessitism", "Actualism", "Possibilism", "None of them"], correct: [0] },
    },
    {
      key: "serious",
      rung: "apply",
      prompt: <p>According to serious actualism, does Socrates have the property of being snub-nosed at a world where Socrates does not exist?</p>,
      answer: { kind: "choice", options: ["No: objects have no properties where they do not exist", "Yes, if Socrates is actually snub-nosed", "Only in S5", "Only if the domain is constant"], correct: [0] },
    },
    {
      key: "williamson",
      rung: "apply",
      prompt: <p>Which logic does Williamson&rsquo;s necessitism favour?</p>,
      answer: { kind: "choice", options: ["A constant domain logic with both Barcan formulas", "A logic with no quantifiers", "Varying domains without either formula", "Free logic without identity"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Can an actualist accept that there could have been something that does not actually exist? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States actualism and why the claim seems to threaten it.",
          "Considers a strategy, such as abstract possible worlds, serious actualism, necessitism or rejecting the Barcan formula.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is it a problem for actualists that Kripke&rsquo;s varying domain semantics quantifies over all possible objects?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why the semantics seems to quantify over non-actual things.",
          "Considers a reply, such as treating the models as mathematical tools or reinterpreting the domains.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Possible worlds need not be ways reality could have been. They can be ways things could be, for all someone
        knows. Read □ as &lsquo;Asha knows that&rsquo;, and the same semantics becomes a logic of knowledge.
      </p>
      <p>Next, epistemic logic.</p>
    </>
  ),
};
