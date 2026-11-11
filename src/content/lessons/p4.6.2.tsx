import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MeanViz } from "@/components/viz/MeanViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.6.2",
  minutes: 80,
  links: {
    revisits: ["p4.6.1", "p4.2.4", "p4.5.5"],
    foreshadows: ["p4.6.3", "p5.4.1", "p13.1.4"],
  },

  puzzle: (
    <>
      <p>
        A soldier who runs at the first sight of the enemy is a coward. One who charges alone into a hopeless fight, for no
        purpose, is not brave either, but reckless. Courage seems to lie between the two. But &ldquo;between&rdquo; how?
        Not halfway: sometimes the brave thing is to retreat, and sometimes to stand when everyone else runs. And how does
        anyone become brave in the first place: by learning a rule, or in some other way?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a virtue and slide a disposition from deficiency to excess. Each virtue lies between two vices. Notice that
        the virtue is not always at the centre of the scale.
      </p>
      <MeanViz />
    </>
  ),

  theory: (
    <>
      <Definition title="how virtue of character comes about">
        <p>
          Virtue of thought, such as wisdom, comes mostly from teaching. Virtue of character, <em>êthikê aretê</em>, comes
          from habit; the word <em>êthos</em> is related to <em>ethos</em>, habit. It is not in us by nature, since a stone
          cannot be trained to fly upwards, nor against nature: we are fitted by nature to receive it and are completed by
          habit. We become builders by building and lyre players by playing the lyre; likewise just by doing just acts,
          temperate by doing temperate acts, brave by doing brave acts. So it matters a great deal how we are brought up from
          childhood.
        </p>
      </Definition>

      <Example title="the virtuous agent">
        <p>
          A just act done by luck, or on someone&rsquo;s instructions, does not show a just person. The act must be done in
          the right way: knowing what one is doing, choosing it for its own sake, and from a firm and unchanging character.
          A sign of virtue is pleasure: the temperate person enjoys abstaining from excess, and the brave person faces danger
          without distress, or at least without pain.
        </p>
      </Example>

      <Definition title="the definition of virtue">
        <p>
          In <em>Nicomachean Ethics</em> II.6, Aristotle defines virtue of character as a state concerned with choice, lying
          in a mean relative to us, determined by reason, the way a person of practical wisdom would determine it. It is a
          mean between two vices, one of excess and one of deficiency, in both feelings and actions.
        </p>
      </Definition>

      <Example title="the mean relative to us">
        <p>
          If 10 pounds of food is too much and 2 too little, the trainer will not simply prescribe 6: that may be too little
          for Milo the wrestler and too much for a beginner. The mean in our feelings and actions is like this. To feel fear,
          confidence, desire, anger or pity at the right times, about the right things, towards the right people, for the
          right end and in the right way, is the mean and the best. Missing the mark is easy and hitting it hard, which is
          why being good is hard work.
        </p>
      </Example>

      <Remark title="limits and objections">
        <p>
          Aristotle notes that not every action or feeling has a mean. Spite, shamelessness and envy, and adultery, theft
          and murder, are bad in themselves, not by excess or deficiency: there is no right time or way to commit adultery.
          Critics complain that the doctrine of the mean gives no practical guidance, since the mean is fixed by the person
          of practical wisdom, and that some virtues, like truthfulness, hardly look like points on a scale. Defenders, such
          as J. O. Urmson, reply that the doctrine is not a method of decision but an account of what a good character is
          like: one whose feelings fit their situations.
        </p>
      </Remark>

      <Remark title="practical wisdom">
        <p>
          Book VI introduces <em>phronêsis</em>, practical wisdom: the ability to deliberate well about what is good for
          human life as a whole. It cannot be had without virtue of character, and full virtue of character cannot be had
          without it. Virtue makes the goal right; practical wisdom makes the means to it right.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "habit",
      rung: "check",
      prompt: <p>According to Aristotle, how does virtue of character arise?</p>,
      answer: {
        kind: "choice",
        options: ["By nature, from birth.", "From teaching, like geometry.", "From habit, by doing virtuous acts.", "By divine gift."],
        correct: [2],
      },
    },
    {
      key: "vices",
      rung: "check",
      prompt: <p>Generosity is the mean between which two vices?</p>,
      answer: {
        kind: "choice",
        options: ["cowardice and rashness", "stinginess and wastefulness", "boorishness and buffoonery", "self-deprecation and boastfulness"],
        correct: [1],
      },
    },
    {
      key: "milo",
      rung: "apply",
      prompt: <p>What does the example of Milo the wrestler show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That wrestlers need more virtue.",
          "That the mean is relative to us, not the arithmetic middle.",
          "That eating is a vice.",
          "That the mean is always 6.",
        ],
        correct: [1],
      },
    },
    {
      key: "nomean",
      rung: "apply",
      prompt: <p>Which of these does Aristotle say has no mean, being bad in itself? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["envy", "anger", "theft", "fear"], correct: [0, 2] },
    },
    {
      key: "pleasure",
      rung: "apply",
      prompt: (
        <p>
          Two people decline a second dessert. One does so with ease and contentment; the other with a painful struggle.
          Who, on Aristotle&rsquo;s view, is temperate?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["The first.", "The second.", "Both equally.", "Neither."],
        correct: [0],
      },
    },
    {
      key: "define",
      rung: "prove",
      prompt: (
        <p>
          State Aristotle&rsquo;s definition of virtue of character and explain each part. Then apply it to one virtue of
          your choice, describing what feeling it concerns and what the two vices are.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the definition: a state concerned with choice, in a mean relative to us, determined by reason as the practically wise person would determine it.",
          "Explains the parts, for example that it is a settled state, not a feeling or a capacity, and what 'relative to us' means.",
          "Applies it to a virtue with a sensible sphere and two vices. A clear account earns full credit.",
        ],
      },
    },
    {
      key: "guidance",
      rung: "stretch",
      prompt: (
        <p>
          &ldquo;Do what the person of practical wisdom would do&rdquo; seems unhelpful to someone who lacks practical
          wisdom and wants to know what to do. Is this a fatal objection to Aristotle&rsquo;s ethics? Consider what the
          ethics is meant to provide, and how Aristotle thinks people become good.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the objection clearly.",
          "Considers a reply, for example that ethics aims at forming character through upbringing and practice, not at supplying a decision procedure, or that exemplars can guide the learner.",
          "Reaches a reasoned verdict. Any thoughtful position earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Aristotle thinks virtue of character is acquired, his definition of virtue as a mean relative to us, the example of Milo, and why some actions have no mean.",

  glimpse: (
    <p>
      The next lesson asks when we are responsible for what we do, and how anyone can act against their own better
      judgement. Introduction to Ethics and Moral Philosophy follow the modern revival of virtue ethics.
    </p>
  ),
};
