import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["serious man", "nihilist", "adventurer", "genuinely free"];
const ITEMS: SortItem[] = [
  { text: "An official who obeys every order because the Party is always right.", cat: "serious man", why: "He hands his freedom to an absolute value outside himself and will sacrifice people to it." },
  { text: "Someone who devotes their life to a cause and treats its critics as traitors.", cat: "serious man", why: "The cause has become an idol that excuses anything done in its name." },
  { text: "Someone who, finding no value given in the world, decides that nothing matters at all.", cat: "nihilist", why: "A disappointed serious man: since values are not ready-made, he concludes there are none." },
  { text: "Someone who mocks every commitment as naive and refuses to care.", cat: "nihilist", why: "Refusing all projects is itself a flight from freedom." },
  { text: "A conqueror who loves the thrill of action and is indifferent to whom it crushes.", cat: "adventurer", why: "He enjoys his own freedom but uses others as mere instruments." },
  { text: "A charming opportunist who joins any side that promises excitement.", cat: "adventurer", why: "Free in his projects, but careless of the freedom of those he uses." },
  { text: "A teacher whose aim is that pupils should come to think for themselves.", cat: "genuinely free", why: "Willing one’s own freedom by willing and widening the freedom of others." },
  { text: "Someone who fights oppression while questioning the means their own side uses.", cat: "genuinely free", why: "Beauvoir’s ideal: committed action that stays aware of its ambiguity and its cost." },
];

export const lesson: LessonContent = {
  id: "p19.4.2",
  minutes: 85,
  links: {
    revisits: ["p19.4.1", "p19.3.2", "p8.5.3"],
    foreshadows: ["p19.6.1", "p19.6.2", "p19.5.2"],
  },

  puzzle: (
    <>
      <p>
        If there is no God and no human nature, and values are not written into things, then it can look as if everything is
        permitted. Existentialism was often accused of exactly this. Can a philosophy of radical freedom still say that some
        uses of freedom are wrong?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each person into one of Beauvoir&rsquo;s attitudes.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which attitude is this?" />
    </>
  ),

  theory: (
    <>
      <Definition title="ambiguity">
        <p>
          In <em>The Ethics of Ambiguity</em> (1947), Simone de Beauvoir starts from the human condition as{" "}
          <strong>ambiguous</strong>: we are free consciousness and also things in the world, subjects and objects for others,
          individuals and members of a collective, mortal beings who live towards a future. Traditional ethics tried to escape
          this ambiguity by appealing to a fixed nature or a God. Beauvoir says we must assume it.
        </p>
      </Definition>

      <Definition title="willing freedom">
        <p>
          Freedom is not given as a value; it is the source of all values. The genuinely moral act is to{" "}
          <strong>will oneself free</strong>: to take up one&rsquo;s freedom as a project rather than flee it. And because my
          projects need a world shared with others, and their freedom is what gives my acts a future, to will myself free is
          also to will others free. &ldquo;To will oneself free is also to will others free.&rdquo;
        </p>
      </Definition>

      <Example title="attitudes that flee freedom">
        <p>
          The <strong>sub-man</strong> avoids projects altogether. The <strong>serious man</strong> subordinates his freedom
          to a value he treats as absolute, the nation, the Party, the cause, and will sacrifice people to it. The{" "}
          <strong>nihilist</strong> is a disappointed serious man who concludes nothing has value. The{" "}
          <strong>adventurer</strong> loves action for its own sake and uses others as instruments. Each fails in a
          different way to will freedom, his own or others&rsquo;.
        </p>
      </Example>

      <Remark title="ends and means">
        <p>
          Beauvoir was writing after the war, with resistance and revolution in view. She does not offer a rule that tells us
          when violence is justified. She insists that every action against oppression involves real costs to real people,
          that no future paradise cancels them, and that a politics which forgets this becomes the seriousness it opposed.
          The ethics is a demand for lucidity, not a formula.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "amb",
      rung: "check",
      prompt: <p>What does Beauvoir mean by the ambiguity of the human condition?</p>,
      answer: {
        kind: "choice",
        options: ["We are at once free subjects and things in the world, individuals and members of a collective", "Words have several meanings", "We cannot know anything", "We are partly animal and partly divine"],
        correct: [0],
      },
    },
    {
      key: "others",
      rung: "check",
      prompt: <p>According to Beauvoir, what does willing oneself free require?</p>,
      answer: {
        kind: "choice",
        options: ["Willing the freedom of others too", "Ignoring others", "Obeying a fixed moral law", "Withdrawing from politics"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which attitude is a disappointed serious man?</p>,
      answer: { kind: "choice", options: ["The nihilist", "The adventurer", "The genuinely free person", "The serious man"], correct: [0] },
    },
    {
      key: "serious",
      rung: "apply",
      prompt: <p>What is wrong with the serious man, on Beauvoir&rsquo;s view?</p>,
      answer: {
        kind: "choice",
        options: ["He treats a value as absolute and given, and sacrifices people to it, fleeing his own freedom", "He works too hard", "He has no values at all", "He thinks about death"],
        correct: [0],
      },
    },
    {
      key: "rule",
      rung: "apply",
      prompt: <p>Does Beauvoir give a rule for when violence against oppression is justified?</p>,
      answer: {
        kind: "choice",
        options: ["No: she demands lucidity about the real costs, not a formula", "Yes: whenever the end is good", "Yes: never", "Yes: whenever the majority agrees"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Beauvoir succeed in showing that my freedom requires willing the freedom of others? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States her argument, for instance that my projects need others whose freedom gives them a future.",
          "Raises an objection, such as that a tyrant seems free, or replies to one.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is an ethics with no formula, only a demand for lucidity, enough to guide action?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says what such an ethics offers, such as ruling out the attitudes that flee freedom.",
          "Says what it may lack, such as guidance in hard cases, or argues that formulas fail there anyway.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Beauvoir and Sartre treated consciousness as the free subject at the centre of a situation. Maurice Merleau-Ponty, their
        colleague at <em>Les Temps modernes</em>, thought this left out the body: not the body as an object studied by
        physiology, but the body through which we have a world at all.
      </p>
      <p>
        Next, his account of embodiment: the body schema, habit, the phantom limb, and why the freedom of the existentialists
        is always the freedom of an incarnate being.
      </p>
    </>
  ),
};
