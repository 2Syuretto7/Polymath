import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PerspectiveTableViz } from "@/components/viz/PerspectiveTableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p21.3.2",
  minutes: 80,
  links: {
    revisits: ["p21.3.1", "p21.2.2", "p0.4.1"],
    foreshadows: ["p21.4.2", "p21.5.2", "p21.5.3"],
  },

  puzzle: (
    <>
      <p>
        Last night you dreamt you were a butterfly, flitting about, happy, with no idea you were a person. Then you woke,
        and there you were, a person. But how do you know you are a person who dreamt of being a butterfly, and not a
        butterfly now dreaming of being a person?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Judge where to sleep, what to eat and who is beautiful, from different creatures&rsquo; standpoints.</p>
      <PerspectiveTableViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Zhuangzi">
        <p>
          Zhuang Zhou (fourth century BCE) is the author, at least, of the seven &lsquo;inner chapters&rsquo; of the book
          that bears his name; the rest were added by followers. Where the Daodejing is terse and addressed to rulers, the
          Zhuangzi is full of stories, jokes, talking animals and skilled craftsmen, and it is addressed to anyone.
        </p>
      </Definition>

      <Example title="making all things equal">
        <p>
          The second chapter argues that every judgement of &lsquo;this&rsquo; (shi) and &lsquo;not this&rsquo; (fei) is made
          from a standpoint: what is &lsquo;this&rsquo; from here is &lsquo;that&rsquo; from there. Confucians and Mohists
          each affirm what the other denies. The sage does not take sides, but stands at the &lsquo;pivot of the dao&rsquo;,
          the centre of the circle, from which every perspective can be answered without end.
        </p>
      </Example>

      <Definition title="the butterfly and the cook">
        <p>
          The chapter ends with the butterfly dream: Zhuang Zhou cannot tell whether he dreamt he was a butterfly or the
          butterfly is dreaming him, yet &lsquo;there must be some distinction&rsquo;, which is called the transformation of
          things. In chapter 3, Cook Ding carves an ox so skilfully that his knife stays sharp for nineteen years: he follows
          the natural joints instead of hacking. Skill without forcing is the Zhuangzi&rsquo;s picture of a life well lived.
        </p>
      </Definition>

      <Remark title="sceptic, relativist or something else?">
        <p>
          Readers dispute whether Zhuangzi is a sceptic who doubts all knowledge, a relativist for whom every view is equally
          right, or a perspectivist who frees us from fixation on any one view. His debates with his friend Huizi, such as the
          question of how Zhuangzi could know the fish were happy, show a playful mind that refuses to be pinned down.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dream",
      rung: "check",
      prompt: <p>What does Zhuang Zhou wonder after the butterfly dream?</p>,
      answer: { kind: "choice", options: ["Whether he dreamt of being a butterfly, or a butterfly is dreaming him", "Whether butterflies feel pain", "Whether dreams are prophecies", "Whether he should become a monk"], correct: [0] },
    },
    {
      key: "pivot",
      rung: "check",
      prompt: <p>Where does the sage stand, in chapter 2?</p>,
      answer: { kind: "choice", options: ["At the pivot of the dao, able to respond to every standpoint", "With the Confucians", "With the Mohists", "Outside the world altogether"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, judged as an eel, which place to sleep is right?</p>,
      answer: { kind: "choice", options: ["The damp mud", "A dry house", "High in a tree", "A grassy thicket"], correct: [0] },
    },
    {
      key: "cook",
      rung: "apply",
      prompt: <p>Why does Cook Ding&rsquo;s knife stay sharp for nineteen years?</p>,
      answer: { kind: "choice", options: ["He follows the natural joints instead of hacking", "He sharpens it every day", "He uses a magic knife", "He rarely cuts anything"], correct: [0] },
    },
    {
      key: "shi",
      rung: "apply",
      prompt: <p>According to chapter 2, why do Confucians and Mohists disagree endlessly?</p>,
      answer: { kind: "choice", options: ["Each judges ‘this’ and ‘not this’ from its own standpoint", "One side is lying", "They speak different languages", "They agree, but pretend not to"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the Zhuangzi show that no standpoint is better than any other? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the argument from standpoints, using an example such as the creatures or this and that.",
          "Raises a problem, such as that this claim is itself made from a standpoint, or that Zhuangzi still prefers the sage’s way.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Compare the butterfly dream with Descartes&rsquo;s dream argument. Do they aim at the same conclusion?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Descartes’s use of dreaming to doubt the senses, as a step towards certainty.",
          "States Zhuangzi’s point about the transformation of things, which seeks no foundation.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Daoists urged a return to what is natural. But what is natural to human beings: generosity, or greed? The two great
        Confucians after Confucius gave opposite answers.
      </p>
      <p>
        Next, Mencius and Xunzi on human nature: the child at the well and the four sprouts, against warped wood and the
        claim that goodness is the work of deliberate effort.
      </p>
    </>
  ),
};
