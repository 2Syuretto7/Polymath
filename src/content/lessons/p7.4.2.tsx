import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RelativityViz } from "@/components/viz/RelativityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.4.2",
  minutes: 80,
  links: {
    revisits: ["p7.4.1", "p7.3.2", "p7.3.3"],
    foreshadows: ["p7.4.3", "p8.3.5", "p18.2.1"],
  },

  puzzle: (
    <>
      <p>
        When Samuel Johnson was told of Berkeley&rsquo;s theory that matter does not exist, he kicked a large stone and said,
        &ldquo;I refute it thus.&rdquo; Berkeley would not have been troubled. He never denied that the stone was hard,
        heavy, grey and real, or that Johnson&rsquo;s foot would hurt. He denied only that there was something behind all
        that, a material substance existing unperceived. What could that denial mean, and why would anyone believe it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Locke placed some qualities in the mind because they vary with the perceiver. Test each quality, primary and
        secondary, against that standard.
      </p>
      <RelativityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="immaterialism">
        <p>
          <strong>Immaterialism</strong> is the view that there is no material substance. Everything that exists is either a
          mind, which Berkeley calls a spirit, or an idea in a mind. Sensible things, such as tables, trees and stones, are{" "}
          <strong>collections of ideas</strong>: an apple is a certain colour, taste, smell, figure and consistency that are
          observed to go together.
        </p>
      </Definition>

      <Definition title="the core argument">
        <p>
          Berkeley&rsquo;s argument is short. Sensible things are the things we perceive by sense. What we perceive by sense
          are our own ideas or sensations. Ideas cannot exist unperceived. So sensible things cannot exist unperceived. To say
          the table exists when no one is in the room means that if I were there I should perceive it, or that some other
          spirit does perceive it.
        </p>
      </Definition>

      <Example title="against Locke">
        <p>
          Berkeley turned Locke&rsquo;s own tools against him. The argument from variation, which Locke used for secondary
          qualities, applies equally to primary ones. Primary qualities cannot even be conceived apart from secondary ones:
          try to imagine an extended body with no colour or texture. And Locke&rsquo;s substratum, the &ldquo;something I
          know not what&rdquo;, is an abstraction of existence from perception. Finally, an idea can be like nothing but
          another idea, so the resemblance Locke claimed between our ideas and material qualities makes no sense.
        </p>
      </Example>

      <Remark title="why it is not scepticism">
        <p>
          Berkeley saw himself as the defender of common sense against sceptics. Locke&rsquo;s view puts a veil of ideas
          between us and the world, so that we can never check whether our ideas match the matter behind them. For Berkeley
          the ideas are the world, so the things we see and touch are known directly. The cost is that things exist only in
          being perceived; the next lesson considers how he keeps the world in existence when we are not looking. Kant, G. E.
          Moore and others later tried to refute idealism, and the debate shaped much of modern philosophy.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "exist",
      rung: "check",
      prompt: <p>What does Berkeley say exists?</p>,
      answer: {
        kind: "choice",
        options: [
          "Only matter",
          "Only minds, or spirits, and the ideas in them",
          "Matter and minds equally",
          "Nothing at all",
        ],
        correct: [1],
      },
    },
    {
      key: "apple",
      rung: "check",
      prompt: <p>What is an apple, for Berkeley?</p>,
      answer: {
        kind: "choice",
        options: [
          "A material substance with qualities",
          "A collection of ideas, such as a colour, taste, smell and shape, observed to go together",
          "An illusion",
          "An abstract idea",
        ],
        correct: [1],
      },
    },
    {
      key: "variation",
      rung: "apply",
      prompt: <p>How does Berkeley use Locke&rsquo;s argument from variation?</p>,
      answer: {
        kind: "choice",
        options: [
          "He rejects it entirely.",
          "He shows primary qualities such as size and shape vary with the perceiver too, so by Locke's reasoning they are also in the mind.",
          "He applies it only to colour.",
          "He uses it to prove matter exists.",
        ],
        correct: [1],
      },
    },
    {
      key: "like",
      rung: "apply",
      prompt: <p>What is the force of Berkeley&rsquo;s claim that an idea can be like nothing but an idea?</p>,
      answer: {
        kind: "choice",
        options: [
          "That ideas are all identical.",
          "That Locke's claim that ideas of primary qualities resemble qualities in matter makes no sense, since a colour or shape can only resemble another colour or shape.",
          "That ideas cannot be compared.",
          "That matter resembles ideas.",
        ],
        correct: [1],
      },
    },
    {
      key: "johnson",
      rung: "apply",
      prompt: <p>Why does Johnson&rsquo;s kick not refute Berkeley?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because Johnson missed the stone.",
          "Because Berkeley accepts the stone's hardness and the pain, which are ideas; he denies only an unperceived material substance behind them.",
          "Because stones are not real for Berkeley.",
          "Because kicking is not perception.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Set out Berkeley&rsquo;s core argument that sensible things cannot exist unperceived, and say which premise you
          would challenge, if any.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the premises: we perceive sensible things; what we perceive are ideas; ideas cannot exist unperceived.",
          "Draws the conclusion that sensible things cannot exist unperceived.",
          "Identifies a premise to challenge, such as the claim that we perceive only ideas, or defends the argument. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "common",
      rung: "stretch",
      prompt: (
        <p>
          Berkeley claimed his view was closer to common sense than Locke&rsquo;s. Is it? Consider what ordinary people
          believe about tables when no one is in the room.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes Berkeley's point that his view removes the veil of ideas, so we perceive real things directly.",
          "Notes the cost: common sense holds that things exist unperceived, which Berkeley must explain away.",
          "Reaches a reasoned position. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Berkeley's immaterialism claims, his short argument that sensible things cannot exist unperceived, how he turned Locke's arguments against matter, and why he thought his view defeated scepticism.",

  glimpse: (
    <p>
      The next lesson examines Berkeley&rsquo;s slogan that to be is to be perceived, his master argument, and the role of
      God in keeping the world in being. Kant&rsquo;s refutation of idealism and the revolt against idealism by Moore and
      Russell will take up the challenge.
    </p>
  ),
};
