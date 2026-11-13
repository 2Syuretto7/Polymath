import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { IntrospectViz } from "@/components/viz/IntrospectViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.5.4",
  minutes: 75,
  links: {
    revisits: ["p7.3.4", "p7.5.1", "p7.3.3"],
    foreshadows: ["p20.5.2", "p30.2.1", "p8.4.1"],
  },

  puzzle: (
    <>
      <p>
        Descartes was certain of one thing: I think, so I exist. Locke defined the person by consciousness reaching back in
        memory. Both took for granted that there is a self, a single thing that has all my experiences and stays the same
        through them. Hume applied his test. If we have an idea of the self, from what impression is it copied? He looked
        within, and could not find one.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Turn your attention inward and look for the self that has your experiences. Keep looking, and note what you catch
        each time.
      </p>
      <IntrospectViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the argument">
        <p>
          If any impression gives rise to the idea of self, that impression must continue invariably the same through the
          whole course of our lives, since the self is supposed to exist after that manner. But there is no constant and
          invariable impression. Pain and pleasure, grief and joy, succeed each other. So there is no impression of the self,
          and no idea of a self distinct from our perceptions.
        </p>
      </Definition>

      <Definition title="the bundle theory">
        <p>
          The mind, Hume concludes, is nothing but a <strong>bundle or collection of different perceptions</strong>, which
          succeed each other with inconceivable rapidity and are in a perpetual flux. He compares it to a kind of theatre,
          where perceptions pass and repass, but warns that the comparison must not mislead: there is no stage, only the
          successive perceptions.
        </p>
      </Definition>

      <Example title="why we believe in a self">
        <p>
          Why then do we ascribe identity to the mind? For the same reason we ascribe it to a slowly changing plant, or to a
          ship repaired plank by plank: the changes are gradual, and the parts are connected by resemblance and causation.
          Memory plays a central role, by showing us the chain of causes. The identity of the self, Hume argues, is a
          fiction of the imagination, a convenient way of speaking about a closely connected series.
        </p>
      </Example>

      <Remark title="second thoughts and later views">
        <p>
          In an appendix to the <em>Treatise</em> Hume confessed that his account of what unites the perceptions left him
          in a labyrinth, though he never said exactly what troubled him. Critics ask who it is that looks within and finds
          only perceptions; Kant replied that the &ldquo;I think&rdquo; must be able to accompany all my representations,
          as a condition of experience rather than an object of it. Buddhist philosophers had argued for a no-self view
          centuries earlier, and Derek Parfit later defended a reductionist view close to Hume&rsquo;s, arguing that identity
          is not what matters.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "find",
      rung: "check",
      prompt: <p>What does Hume find when he looks within for the self?</p>,
      answer: {
        kind: "choice",
        options: [
          "A simple, unchanging soul.",
          "Only particular perceptions, such as heat, cold, love or pain.",
          "Nothing at all.",
          "God.",
        ],
        correct: [1],
      },
    },
    {
      key: "bundle",
      rung: "check",
      prompt: <p>What is the mind, on Hume&rsquo;s bundle theory?</p>,
      answer: {
        kind: "choice",
        options: [
          "A substance that has perceptions.",
          "A collection of perceptions in constant flux, with nothing further that has them.",
          "The brain.",
          "An immaterial stage.",
        ],
        correct: [1],
      },
    },
    {
      key: "constant",
      rung: "apply",
      prompt: <p>Why does Hume think the idea of self would need a constant impression?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because all impressions are constant.",
          "Because the self is supposed to remain the same throughout life, so its impression would have to as well.",
          "Because he believed in the soul.",
          "Because ideas cannot change.",
        ],
        correct: [1],
      },
    },
    {
      key: "ship",
      rung: "apply",
      prompt: <p>How does Hume explain our belief in a lasting self?</p>,
      answer: {
        kind: "choice",
        options: [
          "We perceive the self directly.",
          "Gradual change and connections of resemblance and causation lead the imagination to treat a series as one thing.",
          "It is innate.",
          "It is proved by the cogito.",
        ],
        correct: [1],
      },
    },
    {
      key: "kant",
      rung: "apply",
      prompt: <p>How did Kant respond to Hume about the self?</p>,
      answer: {
        kind: "choice",
        options: [
          "He agreed completely.",
          "He argued that the I think must be able to accompany all representations, as a condition of experience rather than an object found in it.",
          "He proved the soul is immortal.",
          "He ignored the question.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Does the failure to find a self in introspection show there is no self? Give Hume&rsquo;s reasoning and one
          objection.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States Hume's reasoning: no constant impression of self, so no idea of a self distinct from perceptions.",
          "Gives an objection, such as the self as subject not object, or the question of who is doing the looking.",
          "Reaches a view. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "matter",
      rung: "stretch",
      prompt: (
        <p>
          If Hume is right that the self is a bundle, should we care less about our own future? Consider Parfit&rsquo;s view
          that identity is not what matters.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the link: if there is no further fact of identity, concern for the future self rests on psychological connections.",
          "Considers a consequence, such as less fear of death or more concern for others, or resists it.",
          "Reaches a reasoned position. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Hume's argument that there is no impression of the self, his bundle theory of the mind, his explanation of why we believe in a lasting self, and how Kant and Parfit responded.",

  glimpse: (
    <p>
      The next lesson turns to Hume&rsquo;s ethics and his famous observation about is and ought. Kant&rsquo;s paralogisms
      return to the self, Buddhist no-self views appear in the Indian Philosophy course, and Parfit develops the bundle
      picture in the graduate ethics course.
    </p>
  ),
};
