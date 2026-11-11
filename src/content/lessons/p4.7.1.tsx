import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["natural and necessary", "natural, not necessary", "empty"];
const ITEMS: SortItem[] = [
  {
    text: "A drink of water when you are thirsty.",
    cat: "natural and necessary",
    why: "Epicurus' own example. It removes a pain, it is easy to satisfy, and once it is satisfied the desire stops.",
  },
  {
    text: "Bread, a roof and a warm cloak.",
    cat: "natural and necessary",
    why: "Needed to keep the body free from pain and alive. Epicurus boasted that with bread and water he could rival Zeus for happiness.",
  },
  {
    text: "A few good friends to share a simple life.",
    cat: "natural and necessary",
    why: "Epicurus counts some desires as necessary for happiness itself, not just for life, and he says that of all the things wisdom provides, friendship is by far the greatest.",
  },
  {
    text: "Rich food and fine wine.",
    cat: "natural, not necessary",
    why: "Natural, since it satisfies hunger and thirst, but it only varies the pleasure. Enjoy it if it comes; do not come to need it, or you will suffer when it does not.",
  },
  {
    text: "Sexual pleasure.",
    cat: "natural, not necessary",
    why: "Natural but not needed for a painless life, and Epicurus warns that it often brings trouble. Some scholars place it elsewhere, so this one is arguable.",
  },
  {
    text: "A statue in your honour, or a crown.",
    cat: "empty",
    why: "The ancient commentary on Epicurus gives exactly this example. Such desires come from empty opinion, not from nature, and they have no natural limit.",
  },
  {
    text: "Wealth without limit.",
    cat: "empty",
    why: "Natural wealth, Epicurus says, is limited and easy to get; the wealth of empty opinion stretches on without end, so the desire for it can never be satisfied.",
  },
  {
    text: "To live for ever.",
    cat: "empty",
    why: "Understanding that death is nothing to us removes the longing for immortality, Epicurus argues, and then a finite life is complete.",
  },
];

export const lesson: LessonContent = {
  id: "p4.7.1",
  minutes: 80,
  links: {
    revisits: ["p4.1.5", "p4.6.1", "p1.6.4"],
    foreshadows: ["p4.7.3", "p13.2.1", "p25.1.3"],
  },

  puzzle: (
    <>
      <p>
        Epicurus taught that pleasure is the goal of life. His enemies spread the word that his school was a place of
        feasting and excess. Yet he lived on bread and water, with cheese as a treat, in a garden outside Athens, and he
        died, in great pain, writing to a friend that he was happy. How can a philosophy of pleasure lead to so plain a
        life? And can anyone really believe, as he did, that death is nothing to us?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Epicurus sorted desires into three kinds. Sort each one, and notice which desires have a natural limit and which go
        on for ever.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Sort each desire. Which ones could ever be fully satisfied?" />
    </>
  ),

  theory: (
    <>
      <Definition title="atoms, void and the swerve">
        <p>
          Epicurus (341 to 270 BCE) took over the atomism of Democritus: everything is atoms moving in the void, and even
          the soul is a body of fine atoms that scatters at death. The gods exist, but live in untroubled bliss and take no
          interest in us. He added one thing: atoms sometimes swerve a tiny amount, at no fixed time or place. The Roman
          poet Lucretius, whose poem <em>On the Nature of Things</em> is our fullest source, says the swerve breaks the
          chain of fate and makes room for free will. All knowledge rests on the senses, which Epicurus held are never
          false; error comes from the judgements we add to them.
        </p>
      </Definition>

      <Definition title="pleasure as the absence of pain">
        <p>
          Pleasure is the beginning and end of the blessed life, Epicurus writes in his <em>Letter to Menoeceus</em>. But
          the pleasure he means is not the pleasure of the party. He distinguishes moving, or kinetic, pleasures, like
          drinking when thirsty, from static ones, the settled state of being satisfied. The highest pleasure is static:{" "}
          <em>aponia</em>, the absence of pain in the body, and <em>ataraxia</em>, freedom from disturbance in the mind.
          Once pain is removed, pleasure cannot increase, only vary. So the wise person chooses carefully: sometimes
          passing up a pleasure that brings greater pain, sometimes accepting a pain that brings greater pleasure.
        </p>
      </Definition>

      <Example title="the fourfold remedy">
        <p>
          Later Epicureans, such as Philodemus, summed up the teaching as a medicine in four parts: god is nothing to fear;
          death is nothing to worry about; the good is easy to get; and what is terrible is easy to endure, since severe
          pain is brief and long pain is mild. The aim of philosophy is to cure the soul, as medicine cures the body.
        </p>
      </Example>

      <Example title="death is nothing to us">
        <p>
          Every good and bad lies in sensation, Epicurus argues, and death is the end of sensation. So while we exist,
          death is not present, and when death is present, we no longer exist; it touches neither the living nor the dead.
          Lucretius adds the symmetry argument: think of the endless time before you were born. It did not trouble you.
          The time after your death is a mirror held up to it, so why fear that?
        </p>
      </Example>

      <Remark title="the garden, and objections">
        <p>
          The school met in the Garden, which admitted women and slaves. Epicurus advised living unnoticed, staying out of
          politics, and he treated justice as an agreement neither to harm nor to be harmed, kept because the fear of being
          caught spoils the peace of the unjust. Cicero objected that this pleasure is not what anyone means by the word,
          and that a theory of pleasure cannot explain heroic self-sacrifice. In the twentieth century Thomas Nagel argued
          that death can harm us by depriving us of goods we would otherwise have had, even if we never feel the loss.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "highest",
      rung: "check",
      prompt: <p>What, for Epicurus, is the highest pleasure?</p>,
      answer: {
        kind: "choice",
        options: [
          "The most intense bodily sensation available.",
          "Freedom from pain in the body and from disturbance in the mind.",
          "Honour and reputation.",
          "Knowledge of the gods.",
        ],
        correct: [1],
      },
    },
    {
      key: "swerve",
      rung: "check",
      prompt: <p>What did Epicurus add to the atomism of Democritus?</p>,
      answer: {
        kind: "choice",
        options: ["The void.", "An unpredictable swerve of the atoms.", "Atoms of infinite size.", "A divine creator."],
        correct: [1],
      },
    },
    {
      key: "wine",
      rung: "apply",
      prompt: <p>In Epicurus&rsquo; classification, what kind of desire is the desire for expensive wine?</p>,
      answer: { kind: "choice", options: ["natural and necessary", "natural but not necessary", "empty"], correct: [1] },
    },
    {
      key: "symmetry",
      rung: "apply",
      prompt: <p>Lucretius compares the time after our death with which other time?</p>,
      answer: {
        kind: "choice",
        options: ["The time we spend asleep.", "The time before we were born.", "The lifetimes of the gods.", "Old age."],
        correct: [1],
      },
    },
    {
      key: "dentist",
      rung: "apply",
      prompt: (
        <p>
          A follower of Epicurus chooses a painful treatment at the dentist. Is this consistent with taking pleasure as the
          goal?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "No: a hedonist should always avoid pain.",
          "Yes: Epicurus says we sometimes accept a pain because it brings a greater pleasure or spares a greater pain.",
          "Only if they enjoy the treatment.",
          "Only if the gods approve.",
        ],
        correct: [1],
      },
    },
    {
      key: "death",
      rung: "prove",
      prompt: (
        <p>
          Set out Epicurus&rsquo; argument that death is nothing to us as a series of premises and a conclusion. Then
          choose one premise and say whether you accept it, and why.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States premises such as: all good and bad lie in sensation; death is the end of sensation; so death is neither good nor bad for the one who dies.",
          "Draws the conclusion that fearing death is irrational, possibly mentioning that death affects neither the living nor the dead.",
          "Assesses one premise, for example with the deprivation account or with the question of whether a harm must be felt. Any thoughtful view earns full credit.",
        ],
      },
    },
    {
      key: "limit",
      rung: "stretch",
      prompt: (
        <p>
          Epicurus says that once pain is gone, pleasure can only vary, not increase. Is that plausible? Consider whether a
          painless but dull afternoon is as good as a painless afternoon with a friend you love, and how an Epicurean might
          reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the claim that the absence of pain is the limit of pleasure.",
          "Raises the worry that some painless states seem better than others, and gives an Epicurean reply, such as that the extra goods are variations or bring security and freedom from fear.",
          "Reaches a reasoned view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Epicurus meant by pleasure, how he sorted desires into three kinds, his argument that death is nothing to us, and one objection to his view.",

  glimpse: (
    <p>
      The next lessons turn to the Stoics, the Epicureans&rsquo; great rivals, who held that virtue, not pleasure, is the
      only good. Moral Philosophy returns to hedonism, and Applied Ethics to the question of whether death is bad.
    </p>
  ),
};
