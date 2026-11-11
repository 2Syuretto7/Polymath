import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["voluntary", "forced", "through ignorance", "mixed"];
const ITEMS: SortItem[] = [
  {
    text: "A wind carries a ship far off its course.",
    cat: "forced",
    why: "Aristotle's example of force: the origin of the movement is outside, and the person contributes nothing.",
  },
  {
    text: "In a storm, a captain throws the cargo overboard to save the ship and crew.",
    cat: "mixed",
    why: "Aristotle's example. No one throws cargo away in the abstract, but in the circumstances a sensible person would. The act is chosen at the time, so more like voluntary, though not something anyone would choose for its own sake.",
  },
  {
    text: "A tyrant, holding your family hostage, orders you to do something shameful.",
    cat: "mixed",
    why: "Also Aristotle's example. You choose the act to save them, so it is voluntary in the moment, though under pressure. Some acts, he adds, one should die rather than do.",
  },
  {
    text: "Merope kills her son, thinking he is an enemy.",
    cat: "through ignorance",
    why: "Aristotle's example from tragedy: ignorance of a particular circumstance, who the victim is. If she regrets it, the act is involuntary.",
  },
  {
    text: "Someone reveals a secret, not knowing that it was meant to be secret.",
    cat: "through ignorance",
    why: "Aristotle mentions the playwright Aeschylus, accused of revealing the Mysteries, who said he did not know they were secret.",
  },
  {
    text: "A man in a rage hits a neighbour, then regrets it.",
    cat: "voluntary",
    why: "Aristotle insists that acts done from anger or appetite are voluntary: the origin is in the agent, and otherwise no animal or child would act voluntarily. Regret does not change that.",
  },
  {
    text: "A drunk person, not knowing what they are doing, breaks a window.",
    cat: "voluntary",
    why: "They act in ignorance, not through ignorance: the cause was their own drunkenness, which they could have avoided. Aristotle notes that Pittacus doubled the penalty for offences committed while drunk.",
  },
];

export const lesson: LessonContent = {
  id: "p4.6.3",
  minutes: 80,
  links: {
    revisits: ["p4.6.2", "p4.2.4", "p4.3.3"],
    foreshadows: ["p4.6.4", "p11.7.1", "p13.4.3"],
  },

  puzzle: (
    <>
      <p>
        You know that another biscuit is a bad idea. You decide not to have one. A minute later you are eating it. How is
        this possible? Socrates thought it was not: no one does wrong knowingly, and what looks like weakness of will is
        really ignorance. Yet it seems to happen to everyone, every day. And when it happens, is the act yours, something
        you can be praised or blamed for?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Book III of the <em>Nicomachean Ethics</em> sorts actions by whether they are voluntary, since praise and blame go
        only to voluntary ones. Sort these cases, most of them Aristotle&rsquo;s own.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="What kind of action is each?" />
    </>
  ),

  theory: (
    <>
      <Definition title="voluntary and involuntary">
        <p>
          An act is <strong>involuntary</strong> if it is done by force or through ignorance. It is forced when its origin
          is outside the agent, who contributes nothing. It is through ignorance when the agent does not know some
          particular: who they are acting on, what they are doing, with what, or to what result. Otherwise, when the origin
          is in the agent, who knows the particulars, it is <strong>voluntary</strong>. Ignorance of what is good in general
          is no excuse: that is the ignorance of the bad person, and it is blamed.
        </p>
      </Definition>

      <Definition title="decision">
        <p>
          <em>Prohairesis</em>, decision or choice, is narrower than the voluntary. Children and animals act voluntarily,
          but do not decide. A decision is a deliberated desire for something in our power. We deliberate not about ends but
          about what contributes to them, as a doctor does not deliberate whether to heal but how.
        </p>
      </Definition>

      <Example title="responsible for our characters">
        <p>
          Someone might say: a bad person cannot help seeing things as they do. Aristotle replies that we are, in a way,
          responsible for our characters, since they come from our repeated actions. A person who becomes unjust by cheating
          or self-indulgent by drinking did so voluntarily, though now they cannot stop at will, as someone who throws a
          stone cannot call it back.
        </p>
      </Example>

      <Definition title="akrasia">
        <p>
          <em>Akrasia</em>, lack of self-control or weakness of will, is acting against one&rsquo;s own better judgement
          because of desire or anger. The akratic person knows the act is bad, does it, and regrets it. The self-indulgent
          person does the same act but by choice, believing it fine, and does not regret it: worse, and harder to cure. The
          self-controlled person, <em>enkratês</em>, feels the bad desires but overcomes them; the temperate person does not
          have them.
        </p>
      </Definition>

      <Remark title="Aristotle's solution">
        <p>
          In book VII, Aristotle takes Socrates&rsquo; view seriously, and says what happens fits it in a way. One can have
          knowledge without using it, as someone asleep, mad or drunk has it. The akratic person reasons like this: sweet
          things should not be tasted, but everything sweet is pleasant, and this is sweet; and desire, which is present,
          seizes on the second line of reasoning. The knowledge of the particular, that this one should not be tasted, is
          not active, or is held only as a drunk person recites verses of Empedocles. So it is not knowledge in the full
          sense that is overcome. Interpreters still argue whether this concedes too much to Socrates.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "force",
      rung: "check",
      prompt: <p>When is an act forced, according to Aristotle?</p>,
      answer: {
        kind: "choice",
        options: [
          "When it is done under pressure.",
          "When its origin is outside the agent, who contributes nothing.",
          "When it is regretted.",
          "When it is done in anger.",
        ],
        correct: [1],
      },
    },
    {
      key: "akratic",
      rung: "check",
      prompt: <p>Which describes the akratic person?</p>,
      answer: {
        kind: "choice",
        options: [
          "Knows the act is bad, does it anyway from desire, and regrets it.",
          "Chooses the bad act, believing it fine.",
          "Feels bad desires but overcomes them.",
          "Has no bad desires.",
        ],
        correct: [0],
      },
    },
    {
      key: "excuse",
      rung: "apply",
      prompt: <p>Which ignorance makes an act involuntary?</p>,
      answer: {
        kind: "choice",
        options: [
          "Not knowing that cruelty is wrong.",
          "Not knowing that the gun was loaded, having been told it was empty.",
          "Not knowing the law, having never bothered to learn it.",
          "Not knowing what one did while drunk.",
        ],
        correct: [1],
      },
    },
    {
      key: "kinds",
      rung: "apply",
      prompt: (
        <p>
          A wants a third drink, believes it would be fine, and has it. B wants it, knows it is a bad idea, and has it
          anyway. C wants it, knows it is a bad idea, and declines with difficulty. Which is the self-indulgent person?
        </p>
      ),
      answer: { kind: "choice", options: ["A", "B", "C"], correct: [0] },
    },
    {
      key: "delib",
      rung: "apply",
      prompt: <p>According to Aristotle, what do we deliberate about?</p>,
      answer: {
        kind: "choice",
        options: [
          "Ends, such as whether to be healthy.",
          "What contributes to our ends, and is in our power.",
          "Eternal truths, such as mathematics.",
          "Things that happen by chance.",
        ],
        correct: [1],
      },
    },
    {
      key: "socrates",
      rung: "prove",
      prompt: (
        <p>
          Set out Socrates&rsquo; argument that no one acts against what they know to be best. Then explain how
          Aristotle&rsquo;s distinction between having and using knowledge lets him accept that akrasia happens.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the Socratic view: everyone pursues what they think best, so wrongdoing comes from ignorance.",
          "Explains Aristotle's distinction, perhaps with the sleeping, drunk or mad person, and the practical syllogism.",
          "Shows how akrasia becomes possible: the knowledge of the particular is not active when desire acts. A clear account earns full credit.",
        ],
      },
    },
    {
      key: "character",
      rung: "stretch",
      prompt: (
        <p>
          Aristotle says we are responsible for our characters because they come from our own actions. But those early
          actions were shaped by an upbringing we did not choose. Does this undermine his view of responsibility? Consider
          how much of a person&rsquo;s character must be up to them for praise and blame to be fair.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States Aristotle's view and the objection from upbringing, or from moral luck.",
          "Considers a reply, such as partial responsibility, or that adults can still reflect and change.",
          "Reaches a reasoned conclusion. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Aristotle's account of voluntary action, force and ignorance, what a decision is, why we are responsible for our characters, and how he explains acting against one's better judgement.",

  glimpse: (
    <p>
      Metaphysics asks whether free will is compatible with determinism, and Moral Philosophy asks how far luck can affect
      what we are responsible for.
    </p>
  ),
};
