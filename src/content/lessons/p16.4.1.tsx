import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RavenViz } from "@/components/viz/RavenViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.4.1",
  minutes: 80,
  links: {
    revisits: ["p16.1.1", "p16.2.2", "m9.1.4"],
    foreshadows: ["p16.4.2", "p16.4.3", "p28.2.1"],
  },

  puzzle: (
    <>
      <p>
        Seeing a black raven seems to support &ldquo;all ravens are black&rdquo;. That law says the same as &ldquo;everything
        that is not black is not a raven&rdquo;. So seeing a white shoe, a non-black non-raven, should support it equally.
        Can you really do ornithology without leaving your room?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the size of the world, and compare how much a black raven and a white shoe support the hypothesis.</p>
      <RavenViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the paradox">
        <p>
          Carl Hempel, in &ldquo;Studies in the Logic of Confirmation&rdquo; (1945), noted three plausible principles. The{" "}
          <strong>Nicod criterion</strong>: an F that is G confirms &ldquo;all Fs are G&rdquo;. The{" "}
          <strong>equivalence condition</strong>: whatever confirms a hypothesis confirms any logically equivalent one. And{" "}
          the intuition that a white shoe does not confirm &ldquo;all ravens are black&rdquo;. The first two together
          contradict the third.
        </p>
      </Definition>

      <Example title="Hempel’s answer">
        <p>
          Hempel accepted the conclusion: the white shoe does confirm. The sense of paradox, he said, comes from sneaking in
          background knowledge. If we already know the object is not a raven, observing it cannot threaten the law. But if
          we picked a non-black thing at random, not knowing what it was, finding it is not a raven really does lend a tiny
          bit of support.
        </p>
      </Example>

      <Definition title="the Bayesian answer">
        <p>
          On a Bayesian account, evidence E confirms H when it raises its probability, that is, when{" "}
          <em>P(E | H) &gt; P(E | not-H)</em>. Under plausible assumptions both observations confirm, but in very different
          degrees: there are vastly more non-black things than ravens, so finding a non-black thing to be a non-raven was
          almost certain anyway. The shoe confirms, but negligibly.
        </p>
      </Definition>

      <Remark title="lessons">
        <p>
          The paradox shows that confirmation is not a simple logical relation between a hypothesis and its instances; how
          the evidence was sampled, and what else we know, matter. I. J. Good even built cases where a black raven lowers the
          probability that all ravens are black, because of what it reveals about which world we are in.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "nicod",
      rung: "check",
      prompt: <p>What does the Nicod criterion say?</p>,
      answer: {
        kind: "choice",
        options: [
          "An F that is G confirms “all Fs are G”.",
          "A G that is not F refutes “all Fs are G”.",
          "Only experiments confirm laws.",
          "Equivalent hypotheses are confirmed by different evidence.",
        ],
        correct: [0],
      },
    },
    {
      key: "equiv",
      rung: "check",
      prompt: <p>Which statement is logically equivalent to &ldquo;all ravens are black&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: ["All non-black things are non-ravens", "All black things are ravens", "Some ravens are black", "No black things are ravens"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what happens to the white shoe&rsquo;s likelihood ratio as the number of non-black things grows?</p>,
      answer: { kind: "choice", options: ["It gets closer to 1", "It grows without limit", "It drops below 1", "It equals the raven’s"], correct: [0] },
    },
    {
      key: "bayes",
      rung: "apply",
      prompt: <p>On a Bayesian view, when does evidence E confirm hypothesis H?</p>,
      answer: {
        kind: "choice",
        options: ["When E is more probable if H is true than if H is false", "When E is certain", "When E entails H", "When H entails E and E is observed"],
        correct: [0],
      },
    },
    {
      key: "hempel",
      rung: "apply",
      prompt: <p>Why does Hempel think the sense of paradox is misleading?</p>,
      answer: {
        kind: "choice",
        options: [
          "We bring in background knowledge that the object is a shoe, which makes the observation unable to threaten the law.",
          "Because shoes are sometimes black.",
          "Because ravens are rare.",
          "Because the law is false.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does a white shoe confirm that all ravens are black? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets out the Nicod criterion and the equivalence condition and how they lead to the conclusion.",
          "Considers a response, such as Hempel’s acceptance or the Bayesian point about degree.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can observing a black raven ever lower the probability that all ravens are black? Try to describe how.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers two possible worlds with different numbers of ravens, where the hypothesis holds only in the world with few ravens.",
          "Explains that seeing any raven, even a black one, can favour the world with many ravens, where some are white.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Hempel's raven paradox from the Nicod criterion and the equivalence condition, Hempel's own resolution, and the Bayesian answer that the white shoe confirms only negligibly.",

  glimpse: (
    <p>
      Next, Goodman&rsquo;s grue problem shows that even which predicates can be projected from instances is a puzzle. Then
      Bayesian confirmation is developed systematically.
    </p>
  ),
};
