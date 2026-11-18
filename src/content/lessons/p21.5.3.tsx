import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { KnowActViz } from "@/components/viz/KnowActViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p21.5.3",
  minutes: 85,
  links: {
    revisits: ["p21.5.2", "p21.4.1", "p21.1.2"],
    foreshadows: ["p13.4.1", "p13.4.2", "p13.1.4"],
  },

  puzzle: (
    <>
      <p>
        Everyone knows they should be kind to their parents, and many are not. So it seems one can know the good and fail to
        do it. But someone who smells a rotten egg does not first know it stinks and then decide to dislike it. Is moral
        knowledge more like reciting a rule, or more like smelling a smell?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Read four cases as Zhu Xi would, then as Wang Yangming would.</p>
      <KnowActViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Wang Yangming">
        <p>
          Wang Shouren (1472&ndash;1529), called Yangming, was a scholar-official and a successful general. As a young man he
          tried Zhu Xi&rsquo;s method on the bamboo in front of a pavilion and fell ill after seven days. Exiled in 1506 to
          Longchang in remote Guizhou, he had an awakening in 1508: the principle he had sought in things was already
          complete in his own mind. His teachings were collected as <em>Instructions for Practical Living</em> (Chuanxi lu).
        </p>
      </Definition>

      <Definition title="the mind is principle">
        <p>
          Against Zhu Xi&rsquo;s separation of mind and principle, Wang held that <strong>the mind is principle</strong> (xin
          ji li). The principle of filial piety is not in one&rsquo;s parents but in the mind that serves them. When a friend
          pointed to flowering trees on a cliff and asked what they had to do with his mind, Wang replied: before you saw
          them, they and your mind were both at rest; when you looked, their colours became clear at once; so they are not
          outside your mind.
        </p>
      </Definition>

      <Example title="the unity of knowing and acting">
        <p>
          A student, Xu Ai, objected that people know they should be filial yet are not. Wang replied that such people have
          been cut off by selfish desires, and do not yet truly know: &lsquo;there has never been anyone who knows but does
          not act&rsquo;. As the <em>Great Learning</em> says, love a good colour, hate a bad smell: seeing the colour is
          knowing, and loving it is acting, in a single moment. Knowing is the beginning of acting, and acting the completion
          of knowing.
        </p>
      </Example>

      <Remark title="innate knowing">
        <p>
          In later years Wang taught the <strong>extension of innate knowing</strong> (zhi liangzhi), taking the term from
          Mencius: the knowing of good that needs no study, which everyone has, as in the alarm at a child near a well.
          Cultivation is removing what blocks it, not gathering principles from outside. His school spread widely, and in
          Japan, as Yōmeigaku, inspired reformers; critics later blamed his followers for neglecting study for intuition.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mind",
      rung: "check",
      prompt: <p>What is Wang Yangming&rsquo;s central claim against Zhu Xi?</p>,
      answer: { kind: "choice", options: ["The mind is principle", "Principle is only in things", "Qi is evil", "Knowledge must precede action"], correct: [0] },
    },
    {
      key: "unity",
      rung: "check",
      prompt: <p>What does the unity of knowing and acting imply about someone who knows the good but does not do it?</p>,
      answer: { kind: "choice", options: ["They do not yet truly know it", "They know it fully but are weak", "They are a sage", "They should study more books first"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how does Wang read his failure before the bamboo?</p>,
      answer: { kind: "choice", options: ["Principle is not in the bamboo but in the mind", "He needed more days", "Bamboo has no principle but other things do", "He chose the wrong plant"], correct: [0] },
    },
    {
      key: "days",
      rung: "apply",
      prompt: <p>For how many days did Wang investigate the bamboo before falling ill?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "liangzhi",
      rung: "apply",
      prompt: <p>From which earlier thinker did Wang take the term &lsquo;innate knowing&rsquo;?</p>,
      answer: { kind: "choice", options: ["Mencius", "Han Feizi", "Mozi", "Laozi"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Wang right that someone who knows the good but does not do it does not truly know it? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Wang’s view, perhaps with the example of the bad smell.",
          "Considers an objection, such as ordinary weakness of will, where someone sincerely judges an act best and does otherwise.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>In the story of the flowers on the cliff, does Wang mean that unseen flowers do not exist? Offer a reading.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers an idealist reading, that things depend on minds for their existence.",
          "Considers a milder reading, that things matter and become meaningful only in relation to a mind.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        This completes the course. From Confucius to Wang Yangming, Chinese philosophy kept returning to one question: how
        does a person become good, and what does that ask of the state?
      </p>
      <p>
        Wang&rsquo;s claim that real knowing moves us to act has a modern descendant: the debate over whether moral
        judgements motivate by themselves, which the course on moral philosophy takes up as internalism and the Humean
        theory of motivation.
      </p>
    </>
  ),
};
