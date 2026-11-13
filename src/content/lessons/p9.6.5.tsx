import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["the last man", "the Übermensch"];
const ITEMS: SortItem[] = [
  {
    text: "“We have invented happiness,” they say, and they blink.",
    cat: "the last man",
    why: "Zarathustra’s portrait of the most contemptible: comfort mistaken for fulfilment.",
  },
  {
    text: "Everyone wants the same, everyone is the same; whoever feels different goes voluntarily into the madhouse.",
    cat: "the last man",
    why: "Total conformity, with no need for force. Distinction itself is suspect.",
  },
  {
    text: "Creates new values instead of inheriting them.",
    cat: "the Übermensch",
    why: "After the death of God, values must be created. The Übermensch is the one who can do so.",
  },
  {
    text: "One still works, for work is a form of entertainment, but one takes care that it does not exhaust.",
    cat: "the last man",
    why: "Nothing is risked, nothing strained. Even work is made harmless.",
  },
  {
    text: "Treats the human being as a rope over an abyss, something to be overcome.",
    cat: "the Übermensch",
    why: "Humanity is a bridge, not a goal. What is great in us is that we are a transition.",
  },
  {
    text: "Says yes to life as a whole, its suffering included, and could will its eternal return.",
    cat: "the Übermensch",
    why: "The affirmation tested by eternal recurrence is the mark of the higher type.",
  },
  {
    text: "A little poison now and then for pleasant dreams, and much poison at the end for a pleasant death.",
    cat: "the last man",
    why: "Pain is managed away by small comforts. Nothing great is either suffered or achieved.",
  },
];

export const lesson: LessonContent = {
  id: "p9.6.5",
  minutes: 80,
  links: {
    revisits: ["p9.6.4", "p9.6.2", "p9.4.1"],
    foreshadows: ["p19.6.1", "p19.6.2", "p13.1.4"],
  },

  puzzle: (
    <>
      <p>
        In Thus Spoke Zarathustra (1883 to 1885), the prophet comes down from his mountain and tells the crowd in the
        marketplace: &ldquo;I teach you the &Uuml;bermensch. The human being is something that shall be overcome.&rdquo; The
        crowd laughs. When he describes the last man instead, they cry: give us this last man! What is Nietzsche asking of us,
        and why did the crowd prefer the alternative?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each description by whether it belongs to the last man or to the &Uuml;bermensch.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="The last man or the Übermensch?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the death of God">
        <p>
          &ldquo;God is dead. God remains dead. And we have killed him.&rdquo; (The Gay Science 125.) Nietzsche means that belief
          in the Christian God has become unbelievable in modern Europe, and that the morality and meaning resting on it will
          collapse in its wake, though most people have not yet noticed. The danger is nihilism: the highest values devalue
          themselves.
        </p>
      </Definition>

      <Definition title="the Übermensch">
        <p>
          The &Uuml;bermensch, overman or superman, is Zarathustra&rsquo;s answer to nihilism: a human type who creates values,
          affirms the earth instead of a world beyond, and could will the eternal recurrence of their life. It is an ideal to
          strive towards, not a biological species and not a ruler of others.
        </p>
      </Definition>

      <Example title="the last man">
        <p>
          The opposite ideal is the last man, who wants comfort, safety and sameness, and has made himself small. Nietzsche
          feared that modern democracy and the morality of compassion were leading towards him. The crowd&rsquo;s cheer for the
          last man is the point of the scene.
        </p>
      </Example>

      <Example title="self-overcoming">
        <p>
          Nietzsche&rsquo;s positive ideal is often put as &ldquo;become who you are&rdquo;: giving style to one&rsquo;s
          character by organising one&rsquo;s many drives into a whole, as an artist shapes material. Goethe, not a conqueror,
          was his model of a human being who had created himself.
        </p>
      </Example>

      <Remark title="misuse and assessment">
        <p>
          The word &Uuml;bermensch was later taken up by racist and Nazi writers, a use made easier by Elisabeth
          F&ouml;rster-Nietzsche&rsquo;s editing, though Nietzsche scorned nationalism and antisemitism. A fairer question is
          whether his ideal is elitist: he held that the flourishing of a few higher types matters more than the welfare of the
          many, a view most moral philosophers reject. Existentialists kept his demand that we create our own values.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dead",
      rung: "check",
      prompt: <p>What does Nietzsche mean by &ldquo;God is dead&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "That God once existed and then died.",
          "That belief in God has become unbelievable, with consequences for morality not yet faced.",
          "That religion should be banned.",
          "That God never cared for humanity.",
        ],
        correct: [1],
      },
    },
    {
      key: "last",
      rung: "check",
      prompt: <p>What does the last man want?</p>,
      answer: {
        kind: "choice",
        options: ["Danger and greatness", "Comfort, safety and sameness", "To create new values", "To rule others"],
        correct: [1],
      },
    },
    {
      key: "nihil",
      rung: "apply",
      prompt: <p>Why does the death of God threaten nihilism, in Nietzsche&rsquo;s view?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because atheists are immoral.",
          "Because the values that rested on belief in God lose their ground, and nothing yet replaces them.",
          "Because science proves life meaningless.",
          "Because God punishes unbelief.",
        ],
        correct: [1],
      },
    },
    {
      key: "what",
      rung: "apply",
      prompt: <p>Which best describes the Übermensch?</p>,
      answer: {
        kind: "choice",
        options: [
          "A future biological species.",
          "A political leader who rules the weak.",
          "An ideal type who creates values and affirms earthly life.",
          "A saint who denies the world.",
        ],
        correct: [2],
      },
    },
    {
      key: "goethe",
      rung: "apply",
      prompt: <p>What does Nietzsche mean by giving style to one&rsquo;s character?</p>,
      answer: {
        kind: "choice",
        options: [
          "Dressing elegantly.",
          "Organising one's drives and traits into a coherent whole, as an artist shapes material.",
          "Following fashion.",
          "Suppressing every desire.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the life of the last man really contemptible, or is comfort and safety a reasonable goal? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Nietzsche's complaint against the last man.",
          "Considers the case for comfort and safety, such as the value of reducing suffering.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "elite",
      rung: "stretch",
      prompt: <p>Can Nietzsche&rsquo;s ideal of self-creation be separated from his view that the few matter more than the many?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the ideal of self-creation and the elitist claim.",
          "Considers whether self-creation could be open to everyone, as existentialists later suggested.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the death of God and the threat of nihilism, Zarathustra's contrast between the Übermensch and the last man, the ideal of giving style to one's character, and the misuse and assessment of the idea.",

  glimpse: (
    <p>
      The next chapter crosses the Atlantic to the American pragmatists, beginning with Peirce. Camus later asks how to live
      without appeal to God, and contemporary virtue ethics returns to the question of flourishing.
    </p>
  ),
};
