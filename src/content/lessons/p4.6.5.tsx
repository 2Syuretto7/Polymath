import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ConstitutionsViz } from "@/components/viz/ConstitutionsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.6.5",
  minutes: 80,
  links: {
    revisits: ["p4.6.1", "p4.6.4", "p4.3.3"],
    foreshadows: ["p14.1.1", "p5.3.4", "p4.7.3"],
  },

  puzzle: (
    <>
      <p>
        Social contract theorists later imagined people living alone in a state of nature and then agreeing to form a
        society. Aristotle thought the picture backwards. A human being living outside any community, he said, is either a
        beast or a god. If we are political by nature, what is a city for, who should rule it, and what makes a
        constitution good or bad?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        In <em>Politics</em> III, Aristotle classifies constitutions by two questions: how many rule, and in whose
        interest. Explore the six answers.
      </p>
      <ConstitutionsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the city exists by nature">
        <p>
          Households combine into villages, and villages into the <em>polis</em>, the city-state, the first community that
          is self-sufficient. It comes into being for the sake of life, but exists for the sake of living well. The city is
          natural, because it is the end of the earlier communities, and a human being is by nature a political animal, more
          so than bees or any herd animal: we alone have language (<em>logos</em>), which can express what is beneficial and
          harmful, and so what is just and unjust. The city is prior to the individual, as the whole body is prior to a
          hand, which cut off is a hand in name only.
        </p>
      </Definition>

      <Example title="a disturbing chapter">
        <p>
          In book I, Aristotle defends &ldquo;natural slavery&rdquo;: some people, he claims, are by nature fit only to be
          ruled, and it is just and beneficial for them to be slaves. He admits that many actual slaves are not natural
          slaves, captured in war, and that some thinkers held all slavery to be against nature. He also holds that women
          are less fit to rule than men. These views were challenged even in his time, and are rejected today; they show how
          an argument from nature can be used to defend the arrangements of one&rsquo;s own society. They are worth studying
          precisely for that reason.
        </p>
      </Example>

      <Definition title="citizens and constitutions">
        <p>
          A citizen, in the strict sense, is someone who shares in judging and in holding office. A constitution is the
          arrangement of the offices, especially the highest. The correct constitutions aim at the common good, the deviant
          ones at the rulers&rsquo; own advantage, as the table shows.
        </p>
      </Definition>

      <Remark title="the wisdom of the many">
        <p>
          Should the many rule, or the best few? Aristotle gives an argument with a long future. The many, none of whom is
          individually outstanding, may be better collectively than the few best, as a feast to which many contribute is
          better than one provided at a single person&rsquo;s expense. Each has some part of virtue and practical wisdom,
          and together they are like a single person with many feet, hands and senses. He does not think this holds of every
          multitude.
        </p>
      </Remark>

      <Remark title="the best practicable constitution">
        <p>
          The ideal city, described in books VII and VIII, needs conditions rarely available. For most cities, Aristotle
          recommends a polity, a mixture of oligarchy and democracy, resting on a large middle class. Those of middling
          property are most ready to obey reason; the very rich tend to arrogance and the very poor to resentment; and where
          the middle is large, the city is least likely to fall into faction. Many later theorists of mixed government,
          down to the framers of modern constitutions, read him.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "animal",
      rung: "check",
      prompt: <p>Why does Aristotle say human beings are more political than bees?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because they live in larger groups.",
          "Because they alone have language, which can express what is just and unjust.",
          "Because they build cities.",
          "Because they make laws by voting.",
        ],
        correct: [1],
      },
    },
    {
      key: "deviant",
      rung: "check",
      prompt: <p>What is the deviant form of rule by one?</p>,
      answer: { kind: "choice", options: ["kingship", "tyranny", "oligarchy", "democracy"], correct: [1] },
    },
    {
      key: "rich",
      rung: "apply",
      prompt: (
        <p>
          A city is ruled by a large majority of wealthy citizens, for their own advantage. Which name does Aristotle&rsquo;s
          deeper criterion give it?
        </p>
      ),
      answer: { kind: "choice", options: ["democracy", "oligarchy", "polity", "aristocracy"], correct: [1] },
    },
    {
      key: "end",
      rung: "apply",
      prompt: <p>The city comes into being for the sake of life. For the sake of what does it exist?</p>,
      answer: { kind: "choice", options: ["wealth", "living well", "defence", "trade"], correct: [1] },
    },
    {
      key: "middle",
      rung: "apply",
      prompt: <p>Why does Aristotle favour a large middle class?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because they are the most virtuous people possible.",
          "Because they are most ready to follow reason, and a city with a large middle is least prone to faction.",
          "Because they pay the most taxes.",
          "Because they are the majority in every city.",
        ],
        correct: [1],
      },
    },
    {
      key: "feast",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct the argument that the many may rule better than the few best. State one condition under which it
          works and one under which it fails.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the argument: each of the many has some part of virtue and wisdom, and combined they can surpass the few, like a feast to which many contribute.",
          "Gives a condition where it works, such as diverse and independent judgement.",
          "Gives a condition where it fails, such as a multitude that is uniformly ignorant or swayed by one demagogue. Any reasoned answer earns full credit.",
        ],
      },
    },
    {
      key: "slavery",
      rung: "stretch",
      prompt: (
        <p>
          Aristotle argues that the city is natural, and also that some people are slaves by nature. Can one accept the
          first claim and reject the second? Explain what &ldquo;by nature&rdquo; is doing in each argument, and where the
          second goes wrong.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the argument for the naturalness of the city, from human capacities such as language.",
          "Explains the natural slavery argument and identifies a flaw, for example that it assumes fixed differences in rational capacity that do not exist, or rationalises existing practice.",
          "Argues whether the two can be separated. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why Aristotle thinks the city exists by nature and humans are political animals, his six constitutions, the argument for the wisdom of the many, and why he favours a mixed constitution with a large middle class, and say what is wrong with his defence of slavery.",

  glimpse: (
    <p>
      Political Philosophy begins with Hobbes, who starts from the very state of nature that Aristotle denied.
      Contractarianism, in Introduction to Ethics, grounds morality in agreement rather than nature, and the Stoics later
      imagine a city of the whole world.
    </p>
  ),
};
