import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FriendshipViz } from "@/components/viz/FriendshipViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.6.4",
  minutes: 70,
  links: {
    revisits: ["p4.6.1", "p4.6.2", "p4.6.3"],
    foreshadows: ["p4.6.5", "p5.4.2", "p4.7.1"],
  },

  puzzle: (
    <>
      <p>
        Two of the ten books of the <em>Nicomachean Ethics</em> are about friendship, more than about any single virtue.
        No one, Aristotle says, would choose to live without friends, even if they had every other good. Yet a perfectly
        good person seems self-sufficient. Why would someone who already has everything need friends? And is a friend
        someone you love for what they do for you, or for who they are?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Aristotle sorts friendships by what the friends love in each other. Choose a change in circumstances and see which
        kinds of friendship survive it.
      </p>
      <FriendshipViz />
    </>
  ),

  theory: (
    <>
      <Definition title="philia">
        <p>
          The Greek <em>philia</em> covers more than our &ldquo;friendship&rdquo;: the bond between parents and children,
          spouses, fellow citizens, business partners. It requires goodwill that is mutual and recognised by both: you
          cannot be friends with wine, and you cannot be friends with someone who does not know you wish them well.
        </p>
      </Definition>

      <Definition title="three kinds">
        <ul>
          <li>
            <strong>Friendship for utility</strong>: each loves the other for the good they get from them. Common among the
            old, and in business. It ends when the advantage ends.
          </li>
          <li>
            <strong>Friendship for pleasure</strong>: each loves the other for the pleasure of their company. Common among
            the young, whose pleasures change fast.
          </li>
          <li>
            <strong>Friendship of character</strong>: between good people alike in virtue, who wish each other well for each
            other&rsquo;s own sake. It is complete and lasting, since virtue lasts, and it is also useful and pleasant. It
            is rare and takes time: people cannot know each other until they have eaten the proverbial salt together.
          </li>
        </ul>
      </Definition>

      <Example title="another self">
        <p>
          A good person relates to a friend as to themselves, for the friend is another self. Aristotle derives the marks of
          friendship from a good person&rsquo;s relation to themselves: wishing and doing good for the other&rsquo;s sake,
          wishing them to live, spending time with them, sharing their joys and sorrows.
        </p>
      </Example>

      <Remark title="good and bad self-love">
        <p>
          Should one love oneself most? Ordinary people call self-lovers those who grab the largest share of money, honours
          and bodily pleasures, and they are rightly blamed. But someone who always strove to do just and noble things, and
          to take the largest share of the noble, would be a self-lover in a better sense, loving the best part of
          themselves, their reason. The good person should be a self-lover in this sense, even giving up money and honour,
          or their life, for their friends.
        </p>
      </Remark>

      <Remark title="why the happy person needs friends">
        <p>
          In book IX, Aristotle gives several answers. It would be strange to give the happy person every good but the
          greatest external one. Humans are social by nature. We can observe our neighbours&rsquo; actions better than our
          own, and a good friend&rsquo;s good actions are pleasant to the good person as their own are. And being active is
          easier with others than alone. A happy life is lived among friends, not as a solitary.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "three",
      rung: "check",
      prompt: <p>Which are Aristotle&rsquo;s three kinds of friendship? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["for utility", "for pleasure", "of character", "of kinship"], correct: [0, 1, 2] },
    },
    {
      key: "wine",
      rung: "check",
      prompt: <p>Why can you not be friends with wine?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because wine is unpleasant.",
          "Because friendship needs goodwill that is mutual and recognised, and wine cannot return it.",
          "Because wine is useful.",
          "Because wine is not virtuous.",
        ],
        correct: [1],
      },
    },
    {
      key: "business",
      rung: "apply",
      prompt: <p>Two traders deal fairly with each other for years, but lose touch when one retires. Which kind of friendship was it, most likely?</p>,
      answer: { kind: "choice", options: ["for utility", "for pleasure", "of character"], correct: [0] },
    },
    {
      key: "rare",
      rung: "apply",
      prompt: <p>Why is friendship of character rare, according to Aristotle?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because good people are few, and such friendships take time and familiarity.",
          "Because it is unpleasant.",
          "Because it is useless.",
          "Because it is forbidden by law.",
        ],
        correct: [0],
      },
    },
    {
      key: "selflove",
      rung: "apply",
      prompt: <p>Which person is a self-lover in Aristotle&rsquo;s good sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "One who grabs the largest share of money and honours.",
          "One who strives to do the finest actions, even at a cost to themselves.",
          "One who avoids other people.",
          "One who loves pleasure most.",
        ],
        correct: [1],
      },
    },
    {
      key: "need",
      rung: "prove",
      prompt: (
        <p>
          Set out the puzzle about why a self-sufficient happy person would need friends, and reconstruct one of
          Aristotle&rsquo;s answers in numbered steps.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the puzzle: the happy person lacks nothing, and friends seem needed only to supply lacks.",
          "Reconstructs an answer, such as the argument from observing a friend's good actions, or from humans being social by nature.",
          "Presents the steps clearly. Any accurate reconstruction earns full credit.",
        ],
      },
    },
    {
      key: "unequal",
      rung: "stretch",
      prompt: (
        <p>
          Aristotle thinks the best friendships are between equals in virtue. Can a parent and a young child, or a teacher
          and a student, be friends of character? Consider what Aristotle says the friends love in each other.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States Aristotle's view that complete friendship requires similarity in virtue.",
          "Considers the unequal case, noting that Aristotle discusses friendships between unequals in which love is proportioned to worth.",
          "Reaches a reasoned verdict, perhaps that such relations can grow into friendship of character. Any thoughtful position earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Aristotle means by philia, the three kinds of friendship and why only one is complete, the idea of a friend as another self, and why even a happy person needs friends.",

  glimpse: (
    <p>
      The next lesson moves from friends to the city, which Aristotle thinks friendship holds together. The ethics of care,
      in Introduction to Ethics, also starts from relationships, and Epicurus, among the Hellenistic schools, makes
      friendship central to the happy life.
    </p>
  ),
};
