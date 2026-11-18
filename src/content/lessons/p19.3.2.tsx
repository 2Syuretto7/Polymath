import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["essence comes first", "existence comes first"];
const ITEMS: SortItem[] = [
  { text: "A paper-knife, made to a design for a purpose.", cat: "essence comes first", why: "Sartre’s own example: the artisan conceives what it is for before it exists." },
  { text: "A human being, on Sartre’s view.", cat: "existence comes first", why: "We first exist, turn up in the world, and only then define ourselves by what we do." },
  { text: "A human being created by God to fulfil a plan.", cat: "essence comes first", why: "If God designed us, our essence would precede our existence, as the knife’s does. Sartre’s atheism is why he denies it." },
  { text: "A human nature fixed by biology that settles how we ought to live.", cat: "essence comes first", why: "This is the view Sartre rejects: no nature decides for us what to make of ourselves." },
  { text: "A coward, who on Sartre’s view made himself a coward by his acts.", cat: "existence comes first", why: "Cowardice is not a temperament one is born with but a pattern of choices, and could be otherwise." },
  { text: "A table, whose function is fixed by its maker.", cat: "essence comes first", why: "Like the knife, a manufactured thing has its what-it-is settled before it is made." },
  { text: "The student choosing between his mother and the Free French.", cat: "existence comes first", why: "No doctrine settles his choice; in choosing he makes himself, and his values." },
  { text: "Someone who says ‘I am what my circumstances made me’.", cat: "essence comes first", why: "They treat themselves as defined in advance, which Sartre would call bad faith." },
];

export const lesson: LessonContent = {
  id: "p19.3.2",
  minutes: 80,
  links: {
    revisits: ["p19.3.1", "p1.3.1", "p8.5.3"],
    foreshadows: ["p19.3.3", "p19.4.2", "p19.6.1"],
  },

  puzzle: (
    <>
      <p>
        During the occupation of France, a student came to Sartre for advice. His brother had been killed, his mother lived
        only for him, and he wanted to join the Free French in England. Christian ethics, Kantian ethics, his own feelings:
        each pointed both ways. Sartre told him: you are free, therefore choose. Is that advice, or a refusal to give any?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each case: is what it is settled before it exists, or made by its existing?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which comes first?" />
    </>
  ),

  theory: (
    <>
      <Definition title="existence precedes essence">
        <p>
          In the lecture <em>Existentialism Is a Humanism</em> (1945), Sartre states the slogan of existentialism. A
          paper-knife is made to a concept: its essence precedes its existence. If there is no God to conceive human nature,
          then for human beings existence comes first. We first exist, encounter ourselves, surge up in the world, and only
          afterwards define ourselves. Man is nothing else but what he makes of himself.
        </p>
      </Definition>

      <Definition title="condemned to be free">
        <p>
          Freedom is not a property we have but what we are. We are <strong>condemned to be free</strong>: we did not create
          ourselves, yet once thrown into the world we are responsible for everything we do. No excuses are available, not
          passions, not upbringing, not the will of God. Even not choosing is a choice.
        </p>
      </Definition>

      <Example title="anguish, abandonment, despair">
        <p>
          <strong>Anguish</strong>: in choosing for myself I choose an image of what a human being should be, and so choose
          for all, as a commander who sends men to death must. <strong>Abandonment</strong>: no God and no a priori values
          tell me what to do; even choosing an adviser is already choosing the advice. <strong>Despair</strong>: I can count
          only on what depends on my will, acting without hope that things will turn out well.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Critics asked how freedom can be absolute when people are oppressed, starving or imprisoned. In{" "}
          <em>Being and Nothingness</em> Sartre answered that freedom is always freedom in a situation: the prisoner is free
          to try to escape. He later conceded much of the objection, and Beauvoir, as the next lessons show, pressed it
          further. Others asked whether &ldquo;choosing for all&rdquo; smuggles in a Kantian universality that the rest of
          the view denies.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "slogan",
      rung: "check",
      prompt: <p>What does &ldquo;existence precedes essence&rdquo; mean for human beings?</p>,
      answer: {
        kind: "choice",
        options: [
          "We first exist, and only then define ourselves by our choices.",
          "We exist before we are born.",
          "Our essence is to exist.",
          "We have no existence.",
        ],
        correct: [0],
      },
    },
    {
      key: "condemned",
      rung: "check",
      prompt: <p>Why does Sartre say we are condemned to be free?</p>,
      answer: {
        kind: "choice",
        options: ["We did not choose to be free, yet cannot escape responsibility for what we do.", "Freedom is a punishment from God.", "Society forbids freedom.", "Freedom is an illusion."],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, why does a human being created by God fall under &ldquo;essence comes first&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: ["A divine plan would fix what we are before we exist, as an artisan fixes a knife.", "Because God exists after us.", "Because all things are created.", "Because humans are tools."],
        correct: [0],
      },
    },
    {
      key: "advice",
      rung: "apply",
      prompt: <p>Why, for Sartre, does choosing an adviser not escape the choice?</p>,
      answer: {
        kind: "choice",
        options: ["In choosing whom to ask, one already more or less chooses the advice.", "Advisers are always wrong.", "Advice is forbidden.", "Because one must follow the advice."],
        correct: [0],
      },
    },
    {
      key: "anguish",
      rung: "apply",
      prompt: <p>What is the source of anguish, in Sartre&rsquo;s lecture?</p>,
      answer: {
        kind: "choice",
        options: ["In choosing for myself I choose for all humanity, and nothing guarantees I choose rightly.", "Fear of death", "Uncertainty about the future weather", "Guilt about the past"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is human freedom as radical as Sartre claims? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Sartre’s view that we are wholly responsible, with no excuses from nature or circumstance.",
          "Considers an objection, such as oppression, determinism, or the weight of situation.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>What would you have told Sartre&rsquo;s student, and does your answer show that some values come before choice?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives advice and the reason for it.",
          "Considers whether that reason is itself chosen, or found, and what that means for Sartre’s view.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, other people: Sartre&rsquo;s analysis of the look, and why for him the original meaning of being-for-others is
      conflict.
    </p>
  ),
};
