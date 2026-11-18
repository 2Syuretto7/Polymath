import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["Basic for both", "Basic for Plantinga only", "Basic for neither"];
const ITEMS: SortItem[] = [
  { text: "2 + 2 = 4.", cat: "Basic for both", why: "Self-evident truths are properly basic even for the classical foundationalist." },
  { text: "I am in pain.", cat: "Basic for both", why: "Reports of one’s own present mental states are incorrigible, so classical foundationalism allows them as basic." },
  { text: "I had breakfast this morning.", cat: "Basic for Plantinga only", why: "Memory beliefs are neither self-evident nor incorrigible, so classical foundationalism demands evidence. Plantinga: we rightly hold them without argument." },
  { text: "There is a tree in front of me.", cat: "Basic for Plantinga only", why: "The classical foundationalist must infer it from sensations. Plantinga, with Reid, treats perceptual beliefs as basic." },
  { text: "Other people have minds.", cat: "Basic for Plantinga only", why: "No good argument for it exists, Plantinga argued, yet believing it is plainly rational. This parity is the core of his case." },
  { text: "God created all this, formed by a believer looking at the night sky.", cat: "Basic for Plantinga only", why: "Plantinga’s central claim: formed by a faculty Calvin called the sensus divinitatis, such a belief can be properly basic." },
  { text: "The Great Pumpkin returns every Halloween.", cat: "Basic for neither", why: "Plantinga’s reply to this objection: proper basicality needs suitable grounds, and there is no faculty or experience that grounds this belief." },
  { text: "Water is H₂O.", cat: "Basic for neither", why: "A scientific discovery, believed on the basis of evidence and inference." },
];

export const lesson: LessonContent = {
  id: "p23.4.2",
  minutes: 85,
  links: {
    revisits: ["p23.4.1", "p10.3.2", "p7.1.3"],
    foreshadows: ["p23.4.3", "p23.5.1", "p23.5.2"],
  },

  puzzle: (
    <>
      <p>
        You believe other people have minds, though you have never felt their thoughts and philosophers have never found a
        good argument. Nobody calls you irrational. A believer says the same about God: they have no argument, they simply
        find themselves believing, as you do about other minds. Is that a fair comparison?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Sort these beliefs: which can be held without evidence, on classical foundationalism and on Plantinga&rsquo;s view?
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which beliefs may be held without argument?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the evidentialist challenge">
        <p>
          W. K. Clifford: &lsquo;it is wrong always, everywhere, and for anyone, to believe anything upon insufficient
          evidence&rsquo;. Many atheists, such as Antony Flew, argued that the burden of proof lies with the theist, and that
          belief in God is irrational unless arguments support it. This assumes <strong>classical foundationalism</strong>: a
          belief is rational only if it is properly basic, being self-evident, incorrigible or evident to the senses, or is
          supported by such beliefs.
        </p>
      </Definition>

      <Definition title="Plantinga’s reply">
        <p>
          In &lsquo;Reason and belief in God&rsquo; (1983), Alvin Plantinga, with Nicholas Wolterstorff and William Alston,
          argued that classical foundationalism is self-refuting: the principle itself is neither self-evident, incorrigible
          nor supported by such beliefs. And it condemns beliefs we rightly hold, such as memory and other minds. Remove it,
          and nothing shows that belief in God cannot be properly basic.
        </p>
      </Definition>

      <Example title="warrant and the sensus divinitatis">
        <p>
          In <em>Warranted Christian Belief</em> (2000), Plantinga argued that a belief has warrant if it is produced by
          faculties functioning properly, in a suitable environment, according to a design plan aimed at truth. If God
          exists, God probably gave us a faculty for knowing him, which Calvin called the sensus divinitatis, and belief formed
          by it is warranted. So whether theistic belief is warranted depends on whether theism is true: the question cannot
          be settled by epistemology alone.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          The Great Pumpkin objection: could anyone then call any belief properly basic? Plantinga replied that basic beliefs
          need grounds, such as experiences, and a community may reach its own list of examples. Critics reply with the son of
          the Great Pumpkin: a voodoo believer could say just the same. Others ask whether, once one knows of disagreement and
          of serious arguments against theism, a belief can stay basic without an answer to them.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cf",
      rung: "check",
      prompt: <p>According to classical foundationalism, which beliefs are properly basic?</p>,
      answer: { kind: "choice", options: ["Those that are self-evident, incorrigible or evident to the senses", "Any belief one is sure of", "Only beliefs about God", "Beliefs supported by authority"], correct: [0] },
    },
    {
      key: "self",
      rung: "check",
      prompt: <p>Why did Plantinga call classical foundationalism self-refuting?</p>,
      answer: { kind: "choice", options: ["Its own principle is neither properly basic nor supported by properly basic beliefs", "It contradicts science", "It assumes God exists", "It rejects all basic beliefs"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how should &lsquo;I had breakfast this morning&rsquo; be sorted?</p>,
      answer: { kind: "choice", options: ["Basic for Plantinga only", "Basic for both", "Basic for neither", "It cannot be sorted"], correct: [0] },
    },
    {
      key: "parity",
      rung: "apply",
      prompt: <p>What is the role of belief in other minds in Plantinga&rsquo;s argument?</p>,
      answer: { kind: "choice", options: ["It is rational without good argument, so belief in God might be too", "It proves God exists", "It shows all beliefs need evidence", "It shows we cannot know other minds"], correct: [0] },
    },
    {
      key: "warrant",
      rung: "apply",
      prompt: <p>On Plantinga&rsquo;s later view, what does the warrant of theistic belief depend on?</p>,
      answer: { kind: "choice", options: ["Whether theism is true, since that decides whether a proper faculty produced it", "Whether there is a good argument for it", "How many people share it", "Whether it is useful"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Can belief in God be properly basic? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Plantinga’s parity argument against classical foundationalism.",
          "Considers an objection, such as the Great Pumpkin, or disagreement as a defeater.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If whether theistic belief is warranted depends on whether God exists, has Plantinga answered the sceptic or changed the subject?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Plantinga answers the claim that theism is irrational whether or not it is true.",
          "Considers whether this leaves the believer without a way to show others they are warranted.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Plantinga&rsquo;s basic beliefs are often grounded in experiences: a sense of God&rsquo;s presence, of guilt and
        forgiveness, of awe. Many people report such experiences vividly. Are they evidence?
      </p>
      <p>Next, religious experience, and Swinburne&rsquo;s principle of credulity.</p>
    </>
  ),
};
