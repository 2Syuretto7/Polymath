import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["internal reason", "external reason only"];
const ITEMS: SortItem[] = [
  {
    text: "Asha, who wants to stay healthy, has a reason to exercise.",
    cat: "internal reason",
    why: "Sound deliberation from her own wish for health leads to exercising.",
  },
  {
    text: "Owen, from a military family, hates everything about soldiering, yet has a reason to join the army.",
    cat: "external reason only",
    why: "Williams’s example from Henry James. Nothing in Owen’s motivations leads to joining, so on the internalist view he has no such reason, whatever his family says.",
  },
  {
    text: "A man who cares nothing for his wife still has a reason to treat her better.",
    cat: "external reason only",
    why: "Williams’s own case. We can call him cruel or selfish, Williams said, but saying he has a reason requires a route from his motivations.",
  },
  {
    text: "Ravi wants gin, and the glass in front of him holds petrol. He has a reason not to drink from it.",
    cat: "internal reason",
    why: "Williams allows deliberation with true beliefs: if Ravi knew the facts, his own desires would lead him not to drink. So the reason is internal.",
  },
  {
    text: "Meera, who loves Carnatic music, has a reason to go to tonight’s concert.",
    cat: "internal reason",
    why: "The route runs from her love of the music to going.",
  },
  {
    text: "Everyone has a reason not to torture, whatever they happen to care about.",
    cat: "external reason only",
    why: "A reason claimed to hold independent of anyone’s motivations is external. Many moral philosophers think morality needs reasons like this.",
  },
  {
    text: "Someone who cares about their friends has a reason to keep a promise to one of them.",
    cat: "internal reason",
    why: "Their concern for the friend gives a deliberative route to keeping the promise.",
  },
];

export const lesson: LessonContent = {
  id: "p13.4.1",
  minutes: 80,
  links: {
    revisits: ["p7.5.5", "p13.3.2", "p4.6.3"],
    foreshadows: ["p13.4.2", "p30.1.1", "p30.1.2"],
  },

  puzzle: (
    <>
      <p>
        You tell a stranger that they have a reason to stop shouting at the waiter. They reply that they do not care how the
        waiter feels and have no wish to be polite. Do they still have a reason, or only a reason by your lights? The answer
        decides whether moral reasons can bind people who do not care about them.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Sort each claim the way Bernard Williams would: is there a route to it from the person&rsquo;s own motivations, or would
        it have to be a reason that holds regardless?
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Internal reason, or external only?" />
    </>
  ),

  theory: (
    <>
      <Definition title="internalism about reasons">
        <p>
          Williams: a person A has a reason to do something only if there is a sound deliberative route from A&rsquo;s
          subjective motivational set, their desires, commitments, loyalties and projects, to doing it. Deliberation may correct
          false beliefs and find new means or new specifications of ends, but it must start from what A already cares about.
        </p>
      </Definition>

      <Definition title="externalism about reasons">
        <p>
          Some reasons apply to a person regardless of their motivational set. Derek Parfit and T. M. Scanlon defend this: the
          fact that an act would cause agony is a reason not to do it, for anyone, whether or not they care.
        </p>
      </Definition>

      <Example title="Williams’s argument">
        <p>
          Reasons must be able to explain actions: if A does something for a reason, the reason is part of why A acts. But a
          consideration can only move A by connecting with something in A&rsquo;s motivational set. A purported external reason
          could explain A&rsquo;s acting only if A came to believe it, and coming to believe it moves A only if A was already
          disposed to be moved, in which case the reason was internal after all.
        </p>
      </Example>

      <Remark title="the stakes">
        <p>
          If Williams is right, a thoroughly selfish person may have no reason to be moral, though we can still criticise
          them. Kantians reply that the route can start from rational agency itself, which every agent shares, so internalism
          need not make moral reasons depend on contingent desires.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>According to Williams&rsquo;s internalism, when does someone have a reason to act?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whenever the act is morally required.",
          "Only if there is a sound deliberative route from their own motivations to the act.",
          "Only if they already want to do exactly that act.",
          "Never.",
        ],
        correct: [1],
      },
    },
    {
      key: "ext",
      rung: "check",
      prompt: <p>Which philosopher defends external reasons?</p>,
      answer: { kind: "choice", options: ["Derek Parfit", "Bernard Williams", "David Hume", "A. J. Ayer"], correct: [0] },
    },
    {
      key: "gin",
      rung: "apply",
      prompt: <p>Ravi wants gin, but the glass holds petrol. On Williams&rsquo;s view, does Ravi have a reason to drink from it?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes, because he wants to.",
          "No, because deliberation with true beliefs would not lead from his desires to drinking petrol.",
          "Yes, because all desires give reasons.",
          "No, because he has no desires at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "explain",
      rung: "apply",
      prompt: <p>Which premise drives Williams&rsquo;s argument against external reasons?</p>,
      answer: {
        kind: "choice",
        options: [
          "Reasons must be able to explain action, and only considerations connected with one’s motivations can move one.",
          "Moral claims are all false.",
          "Desires are always irrational.",
          "Reasons are non-natural properties.",
        ],
        correct: [0],
      },
    },
    {
      key: "kant",
      rung: "apply",
      prompt: <p>How might a Kantian accept internalism and still say moral reasons bind everyone?</p>,
      answer: {
        kind: "choice",
        options: [
          "By saying everyone has the same desires.",
          "By arguing that the deliberative route can start from rational agency itself, which all agents share.",
          "By denying that reasons explain actions.",
          "By becoming an error theorist.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does a selfish person who cares nothing for others have a reason to help them? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the internalist and externalist answers.",
          "Considers an argument on each side, such as Williams’s explanation argument or the reason-giving force of others’ pain.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If Owen has no reason to join the army, can his family still criticise him? What would they be criticising?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Separates having a reason from other kinds of criticism, such as failing a family tradition or lacking a virtue.",
          "Considers whether such criticism has force without a reason.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between internal and external reasons, Williams's argument for internalism with one of his examples, and why it matters for whether everyone has reason to be moral.",

  glimpse: (
    <p>
      The next lesson asks what motivates action: must every action spring from a desire, as Hume held? Graduate metaethics
      returns to reasons as the basic normative notion and to the requirements of rationality.
    </p>
  ),
};
