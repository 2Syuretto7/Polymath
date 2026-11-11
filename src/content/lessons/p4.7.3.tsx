import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["good", "bad", "preferred indifferent", "dispreferred indifferent"];
const ITEMS: SortItem[] = [
  {
    text: "Wisdom.",
    cat: "good",
    why: "A virtue, and the Stoics held that virtue, which is a kind of knowledge, is the only good. It cannot be used badly.",
  },
  {
    text: "Justice.",
    cat: "good",
    why: "Another virtue. For the Stoics the virtues are inseparable: whoever has one has them all.",
  },
  {
    text: "Cowardice.",
    cat: "bad",
    why: "A vice, and vice is the only bad. It is a fault in one's own reason, which is the one thing fully in our power.",
  },
  {
    text: "Health.",
    cat: "preferred indifferent",
    why: "Natural to pursue, and it has value, so we rightly select it. But it is not good: it can be used badly, and a life can be happy without it.",
  },
  {
    text: "Wealth.",
    cat: "preferred indifferent",
    why: "The same. A wise person will prefer wealth to poverty, other things being equal, but their happiness does not depend on it.",
  },
  {
    text: "A good reputation.",
    cat: "preferred indifferent",
    why: "Preferred, but not up to us: it lies in other people's opinions. Epictetus lists it among the things we should not tie our happiness to.",
  },
  {
    text: "Illness.",
    cat: "dispreferred indifferent",
    why: "Contrary to nature, so we rightly avoid it. But it is not bad: the sick person can still act well, and that is all that matters for happiness.",
  },
  {
    text: "Death.",
    cat: "dispreferred indifferent",
    why: "Epictetus says death is not terrible; what is terrible is the judgement that death is terrible.",
  },
  {
    text: "Being furious at an insult.",
    cat: "bad",
    why: "Anger is a passion, and for the Stoics passions are false judgements: here, that you have suffered a real harm. Such a judgement is a fault of reason, so it is bad.",
  },
];

export const lesson: LessonContent = {
  id: "p4.7.3",
  minutes: 85,
  links: {
    revisits: ["p4.7.2", "p4.6.2", "p4.2.3"],
    foreshadows: ["p4.7.4", "p5.4.1", "p1.3.1"],
  },

  puzzle: (
    <>
      <p>
        Epictetus was born a slave. His master, the story goes, once twisted his leg; Epictetus calmly warned that it would
        break, and when it did, said only that he had told him so. He went on to teach that nothing outside our own minds
        can harm us. The emperor Marcus Aurelius, who had everything Epictetus lacked, read him eagerly. Is it true that
        illness, poverty and even death are not bad? And if so, why do the Stoics still say we should prefer health to
        illness?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The Stoics drew a sharp line between what is good and what is merely valuable. Sort each item. Which of them could
        you lose and still be happy?
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Sort each item. Only one kind of thing is good." />
    </>
  ),

  theory: (
    <>
      <Definition title="living in agreement with nature">
        <p>
          The Stoic goal is to live in agreement with nature. Since nature is ordered by reason, and our own nature is
          rational, this means living according to reason. It starts with <em>oikeiôsis</em>, appropriation: every animal
          from birth is attached to itself and its own preservation. As a human grows, reason develops, and the person
          comes to value order and consistency in action more than the things it was first drawn to. The circle of concern
          widens, Hierocles said, from oneself to family, city and finally the whole human race.
        </p>
      </Definition>

      <Definition title="the good and the indifferent">
        <p>
          Only virtue is good and only vice is bad. Everything else, health, wealth, beauty, reputation, life itself, is
          indifferent, because it can be used well or badly and makes no difference to happiness. But indifferents are not
          worthless. Some are preferred, being in accordance with nature, and others dispreferred. The wise person selects
          the preferred ones and acts appropriately. What matters is the selecting, not the getting.
        </p>
      </Definition>

      <Example title="the archer">
        <p>
          Cicero, in <em>On Ends</em>, gives the Stoic image of an archer. The archer does everything possible to hit the
          target, but their real aim is to shoot well; whether the arrow hits depends on the wind. In the same way, the good
          person aims at health and safety for themselves and others, but their goal is to act well, and that is fully in
          their power.
        </p>
      </Example>

      <Example title="what is up to us">
        <p>
          Epictetus&rsquo; <em>Handbook</em> opens by dividing things into two kinds. Up to us are our judgements, our
          impulses, our desires and aversions: in a word, our own doings. Not up to us are our body, our property, our
          reputation and our office. Trouble begins when we treat the second kind as if it were the first. People are
          disturbed, he says, not by things but by their judgements about things.
        </p>
      </Example>

      <Definition title="the passions">
        <p>
          A passion, such as fear, grief, anger or craving, is not a blind force but a judgement, and a false one: that
          something indifferent is truly good or bad. Chrysippus counted four main kinds: appetite and fear about the future,
          pleasure and distress about the present. The sage is free of them, a state called <em>apatheia</em>. This is not
          coldness. The sage has good feelings, <em>eupatheiai</em>: rational wish, caution and joy.
        </p>
      </Definition>

      <Remark title="paradoxes and objections">
        <p>
          The Stoics accepted startling conclusions: only the sage is free, rich and happy, and all faults are equally
          faults, as someone drowning a hand&rsquo;s breadth below the surface drowns as surely as someone fathoms deep. A
          true sage is rarer than the phoenix; the rest of us are making progress. Critics, from Plutarch to the present, ask
          whether the view leaves room for grief at a friend&rsquo;s death, and whether a theory that calls torture
          indifferent can be right. Epictetus would have us sympathise with a grieving person in word, even groan with
          them, but not groan inwardly.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "good",
      rung: "check",
      prompt: <p>According to the Stoics, what is the only good?</p>,
      answer: { kind: "choice", options: ["pleasure", "health", "virtue", "honour"], correct: [2] },
    },
    {
      key: "upto",
      rung: "check",
      prompt: <p>Which of these does Epictetus count as up to us? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["our judgements", "our body", "our desires and aversions", "our reputation"],
        correct: [0, 2],
      },
    },
    {
      key: "wealth",
      rung: "apply",
      prompt: <p>How would a Stoic classify wealth?</p>,
      answer: {
        kind: "choice",
        options: ["good", "bad", "a preferred indifferent", "a dispreferred indifferent"],
        correct: [2],
      },
    },
    {
      key: "archer",
      rung: "apply",
      prompt: <p>In the Stoic image of the archer, what is the archer&rsquo;s real goal?</p>,
      answer: {
        kind: "choice",
        options: [
          "To hit the target, whatever it takes.",
          "To do everything in their power to shoot well.",
          "To avoid shooting at all.",
          "To win the admiration of onlookers.",
        ],
        correct: [1],
      },
    },
    {
      key: "insult",
      rung: "apply",
      prompt: (
        <p>Someone is insulted in public and is furious for days. Where would Epictetus say the harm lies?</p>
      ),
      answer: {
        kind: "choice",
        options: [
          "In the insult itself.",
          "In the person who insulted them.",
          "In their own judgement that they have been harmed.",
          "In the people who overheard it.",
        ],
        correct: [2],
      },
    },
    {
      key: "onlygood",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct the Stoic argument that health and wealth are not good, using the idea that they can be used well or
          badly. Then say whether the argument works.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States a premise such as: what is good benefits its possessor in every case, or cannot be used badly.",
          "Notes that health and wealth can be used badly and so do not always benefit, while virtue always does, and concludes that only virtue is good.",
          "Assesses the argument, for example by asking whether 'good' must mean 'unconditionally good'. Any reasoned verdict earns full credit.",
        ],
      },
    },
    {
      key: "grief",
      rung: "stretch",
      prompt: (
        <p>
          On the Stoic view, grief at a friend&rsquo;s death is a false judgement. Is this plausible? Consider what the
          Stoics allow instead of grief, and whether something of value would be lost in a life without it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains why grief counts as a false judgement for the Stoics, since the friend's life was a preferred indifferent, not a good.",
          "Considers what the Stoics allow, such as good feelings or the first movements that even the sage feels, and an objection, such as that grief expresses love.",
          "Reaches a reasoned view. Any thoughtful position earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Stoic goal of living in agreement with nature, the difference between the good and the preferred indifferents, Epictetus' division of what is up to us, and why the Stoics called the passions false judgements.",

  glimpse: (
    <p>
      The next lesson meets the sceptics, who answered both Stoics and Epicureans by suspending judgement altogether.
      Introduction to Ethics returns to virtue ethics, and Introduction to Philosophy to the question of fate and freedom.
    </p>
  ),
};
