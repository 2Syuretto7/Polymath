import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["joy", "sadness", "desire"];
const ITEMS: SortItem[] = [
  { text: "Love: a feeling accompanied by the idea of an external cause, which we wish to be near.", cat: "joy", why: "Spinoza defines love as joy accompanied by the idea of an external cause. We love what we think increases our power." },
  { text: "Hate: a feeling accompanied by the idea of an external cause, which we wish to remove.", cat: "sadness", why: "Hate is sadness accompanied by the idea of an external cause: the thing we think diminishes our power." },
  { text: "Hope: an unsteady feeling about a future thing whose outcome we doubt, when we imagine it going well.", cat: "joy", why: "Hope is an inconstant joy. Because it depends on doubt, it always comes mixed with fear." },
  { text: "Fear: an unsteady feeling about a future thing whose outcome we doubt, when we imagine it going badly.", cat: "sadness", why: "Fear is an inconstant sadness. Spinoza says there is no hope without fear, and no fear without hope." },
  { text: "Pity: a feeling at an evil that has happened to another, whom we imagine to be like us.", cat: "sadness", why: "Pity is a sadness. Spinoza thought the person who lives by reason helps others from reason, not from pity, which is a passion." },
  { text: "Gratitude: the striving to benefit someone who has benefited us from love.", cat: "desire", why: "Gratitude is a desire, a striving to do something, arising from love." },
  { text: "Ambition: an excessive striving for the esteem of others.", cat: "desire", why: "Ambition is a desire. Like greed and lust, it is a desire that has grown beyond measure." },
];

export const lesson: LessonContent = {
  id: "p7.2.2",
  minutes: 85,
  links: {
    revisits: ["p7.2.1", "p4.7.3", "p1.3.1"],
    foreshadows: ["p7.2.4", "p11.7.4", "p9.6.3"],
  },

  puzzle: (
    <>
      <p>
        Spinoza&rsquo;s world is entirely necessary: nothing could have been otherwise, and there is no free will. Yet he
        called his book the Ethics, and its last part is titled Of Human Freedom. It ends: &ldquo;all things excellent are
        as difficult as they are rare&rdquo;. How can there be an ethics without free will, and what kind of freedom can a
        wholly determined being reach?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Spinoza reduces all the emotions to three basic ones: joy, sadness and desire. Sort these emotions, described in his
        way, by the basic emotion each is built from.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Sort each emotion by the basic affect it is built from." />
    </>
  ),

  theory: (
    <>
      <Definition title="conatus">
        <p>
          &ldquo;Each thing, as far as it can by its own power, strives to persevere in its being.&rdquo; This striving, the{" "}
          <strong>conatus</strong>, is the very essence of each thing. In us, conscious striving is{" "}
          <strong>desire</strong>. <strong>Joy</strong> is the passage to a greater power of acting, and{" "}
          <strong>sadness</strong> the passage to a lesser. Every other emotion is built from these three and the ideas of
          their causes, as the sorting above shows. Spinoza treats the emotions &ldquo;as if it were a question of lines,
          planes and bodies&rdquo;, without praise or blame.
        </p>
      </Definition>

      <Definition title="bondage and the passions">
        <p>
          When we are only a partial cause of what happens in us, our ideas of it are inadequate and we undergo{" "}
          <strong>passions</strong>, pushed about by external causes like waves driven by contrary winds. This is human
          bondage. When we are the adequate cause, understanding fully what we do, we <strong>act</strong>. Good is what we
          certainly know to be useful to us; virtue is our own power, the power to act from our nature.
        </p>
      </Definition>

      <Example title="freedom through understanding">
        <p>
          &ldquo;An emotion which is a passion ceases to be a passion as soon as we form a clear and distinct idea of
          it.&rdquo; Understanding the causes of our anger or grief turns them from something that happens to us into
          something we grasp. And the more we see that everything is necessary, the less we are troubled: nobody pities a baby
          for being unable to talk. Freedom, for Spinoza, is not being uncaused. A thing is free when it exists and acts from
          the necessity of its own nature alone. This is a form of compatibilism, close to the Stoics.
        </p>
      </Example>

      <Remark title="blessedness">
        <p>
          The highest knowledge, intuitive knowledge, sees each thing as following from God&rsquo;s nature, and brings the
          intellectual love of God, a joy that no external cause can take away. &ldquo;Blessedness is not the reward of
          virtue, but virtue itself.&rdquo; The free person thinks of nothing less than of death, and their wisdom is a
          meditation on life. Critics ask whether an ethics built on each thing seeking its own power is egoism. Spinoza replies
          that reason shows nothing is more useful to a human being than another human being who lives by reason.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "conatus",
      rung: "check",
      prompt: <p>What is the conatus?</p>,
      answer: {
        kind: "choice",
        options: [
          "The striving of each thing to persevere in its being, which is its essence.",
          "God's will to create the world.",
          "A feeling of guilt.",
          "The soul's seat in the brain.",
        ],
        correct: [0],
      },
    },
    {
      key: "joy",
      rung: "check",
      prompt: <p>How does Spinoza define joy?</p>,
      answer: {
        kind: "choice",
        options: ["The absence of pain", "The passage to a greater power of acting", "The satisfaction of a desire", "Union with God after death"],
        correct: [1],
      },
    },
    {
      key: "passion",
      rung: "apply",
      prompt: <p>How, according to Spinoza, does an emotion that is a passion stop being one?</p>,
      answer: {
        kind: "choice",
        options: [
          "By being suppressed by the will.",
          "By our forming a clear and distinct idea of it, understanding its causes.",
          "By being replaced by a stronger passion of the opposite kind.",
          "By prayer.",
        ],
        correct: [1],
      },
    },
    {
      key: "free",
      rung: "apply",
      prompt: <p>What is freedom, for Spinoza?</p>,
      answer: {
        kind: "choice",
        options: [
          "Acting without any cause.",
          "Existing and acting from the necessity of one's own nature alone.",
          "Being able to choose otherwise in the same circumstances.",
          "Doing whatever one desires.",
        ],
        correct: [1],
      },
    },
    {
      key: "death",
      rung: "apply",
      prompt: <p>What does Spinoza mean by saying that the free person thinks of nothing less than of death?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the free person is careless of danger.",
          "That a person guided by reason, not fear, attends to living well, so their wisdom is a meditation on life.",
          "That death does not exist.",
          "That the soul is immortal, so death does not matter.",
        ],
        correct: [1],
      },
    },
    {
      key: "determined",
      rung: "prove",
      prompt: <p>How can Spinoza speak of human freedom when everything is necessary? Explain his answer and say whether it convinces you.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that freedom is acting from one's own nature, through adequate ideas, rather than being uncaused.",
          "Gives a view on whether this is real freedom. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "egoism",
      rung: "stretch",
      prompt: <p>Spinoza says virtue is seeking one&rsquo;s own advantage. Is his ethics a form of egoism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why it seems egoist: the conatus and the definition of virtue as one's own power and advantage.",
          "Considers his reply that reason shows other rational people are most useful to us, so we seek their good too, and judges whether this answers the worry.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Spinoza's idea of the conatus, his account of joy, sadness and desire, the difference between passions and actions, and how he understands freedom and blessedness in a necessary world.",

  glimpse: (
    <p>
      Next comes Leibniz, who rejected Spinoza&rsquo;s single substance and his necessity, and later defended this world as
      the best possible one. The Metaphysics course returns to the question whether freedom is compatible with determinism.
    </p>
  ),
};
