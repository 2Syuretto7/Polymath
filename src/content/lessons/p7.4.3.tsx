import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { QuadTreeViz } from "@/components/viz/QuadTreeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.4.3",
  minutes: 80,
  links: {
    revisits: ["p7.4.2", "p7.1.3", "p7.2.4"],
    foreshadows: ["p7.5.1", "p8.3.5", "p18.2.1"],
  },

  puzzle: (
    <>
      <p>
        A well-known limerick, written long after Berkeley, asks whether God must find it exceedingly odd that the tree
        continues to be when there&rsquo;s no one about in the quad. The reply comes back: the tree continues to be, since
        observed by yours faithfully, God. The joke is a fair summary. If to be is to be perceived, what happens to the world
        when we close our eyes, and can Berkeley answer without making God do all the work?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Turn the perceivers on and off, and compare three verdicts on whether the tree exists. Then try to conceive the tree
        existing with nobody perceiving it.
      </p>
      <QuadTreeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="esse est percipi">
        <p>
          For sensible things, Berkeley holds, <strong>to be is to be perceived</strong>: <em>esse est percipi</em>. For minds,
          to be is to perceive, <em>esse est percipere</em>. Ideas are passive and depend on minds; minds are active, and we
          know our own by a direct awareness Berkeley calls a <strong>notion</strong>, not an idea.
        </p>
      </Definition>

      <Definition title="the master argument">
        <p>
          In the <em>Principles</em> Berkeley says he is content to rest everything on one challenge: if you can conceive it
          possible for a sensible object to exist unperceived, he will concede. But when you try, you form the idea of a tree
          with no one to see it, and that idea is in your mind, so the tree is perceived after all, by you. The mind,
          &ldquo;taking no notice of itself&rdquo;, is deluded into thinking it conceives bodies existing unthought of.
        </p>
      </Definition>

      <Example title="God and the order of nature">
        <p>
          Berkeley needs God for two jobs. First, continuity: when no finite mind perceives the tree, it still exists in the
          mind of God, so the world is not flickering in and out of being. Second, the source of sensations: I cannot choose
          what I see when I open my eyes, so my ideas of sense must be caused by another mind. Their regularity, which we call
          the laws of nature, is the language in which God speaks to us. This is also an argument for God&rsquo;s existence,
          drawn from the existence of the sensible world.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Critics say the master argument confuses the act of conceiving with what is conceived. When I imagine an unseen
          tree, the idea is in my mind, but the content of the idea is a tree that no one perceives, and that content may be
          perfectly coherent. Others ask how God perceives: God cannot have sensations of pain or colour, yet if God has no
          such ideas, the tree in God&rsquo;s mind is not the tree I see. And the view seems to make science a study of
          God&rsquo;s habits rather than of things. Kant and later G. E. Moore offered refutations of idealism, and the
          debate between idealists and realists shaped philosophy into the twentieth century.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "esse",
      rung: "check",
      prompt: <p>What does esse est percipi mean?</p>,
      answer: {
        kind: "choice",
        options: [
          "To be is to perceive.",
          "To be is to be perceived.",
          "To perceive is to doubt.",
          "To be is to be extended.",
        ],
        correct: [1],
      },
    },
    {
      key: "god",
      rung: "check",
      prompt: <p>Which jobs does God do in Berkeley&rsquo;s system? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "Keeps sensible things in existence when no finite mind perceives them.",
          "Causes our ideas of sense, in a regular order.",
          "Creates material substance.",
          "Makes us choose what we see.",
        ],
        correct: [0, 1],
      },
    },
    {
      key: "master",
      rung: "apply",
      prompt: <p>What is the move at the heart of the master argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "That trees do not exist.",
          "That in trying to conceive an unperceived object, you conceive it, so it is not unperceived.",
          "That God perceives everything.",
          "That perception is unreliable.",
        ],
        correct: [1],
      },
    },
    {
      key: "reply",
      rung: "apply",
      prompt: <p>What is the standard objection to the master argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "That trees are not ideas.",
          "That it confuses the act of conceiving, which is mine, with the content conceived, which can be a tree no one perceives.",
          "That God does not exist.",
          "That we cannot conceive trees at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "sense",
      rung: "apply",
      prompt: <p>Why does Berkeley think our ideas of sense are caused by another mind?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because matter causes them.",
          "Because they do not depend on our will, as ideas of imagination do, and only minds are active causes.",
          "Because we dream them.",
          "Because they are innate.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Does the master argument succeed? State it in your own words, give one objection, and say what you think.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the argument: to conceive an unperceived tree is to have an idea of it, so it is perceived after all.",
          "Gives an objection, such as the distinction between the act and the content of conceiving.",
          "Reaches a view. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "science",
      rung: "stretch",
      prompt: (
        <p>
          On Berkeley&rsquo;s view, the laws of nature are regularities in the ideas God gives us. Can this account make room
          for science, including entities nobody perceives, such as electrons?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains Berkeley's view of laws as God's regular order among our ideas.",
          "Considers unobserved entities, perhaps as useful fictions for predicting ideas, or as perceived by God.",
          "Reaches a reasoned position. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Berkeley's principle that to be is to be perceived, his master argument and its main objection, and the two roles God plays in keeping the sensible world in existence and in order.",

  glimpse: (
    <p>
      The next chapter turns to Hume, who accepted Berkeley&rsquo;s arguments against matter but would not follow him to God,
      and pushed empiricism to scepticism. Kant later offered a refutation of idealism, and Moore and Russell led a revolt
      against it at the start of the twentieth century.
    </p>
  ),
};
