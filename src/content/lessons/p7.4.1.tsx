import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { AbstractTriangleViz } from "@/components/viz/AbstractTriangleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.4.1",
  minutes: 75,
  links: {
    revisits: ["p7.3.3", "p6.3.2", "p6.5.2"],
    foreshadows: ["p7.4.2", "p11.1.2", "p11.2.2"],
  },

  puzzle: (
    <>
      <p>
        Locke claimed we can form the general idea of a triangle, which is &ldquo;neither oblique nor rectangle, neither
        equilateral, equicrural nor scalenon, but all and none of these at once&rdquo;. George Berkeley, an Irish
        philosopher in his twenties, read this and tried. He could not do it, and he doubted anyone could. But if there are
        no general ideas, how do we think about triangles in general, or prove a theorem about all of them at once?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Move the apex and try to make a triangle that is no particular kind. Then use whichever triangle you have to prove a
        theorem about all triangles.
      </p>
      <AbstractTriangleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Locke's abstract ideas">
        <p>
          For Locke, words become general by standing for <strong>abstract general ideas</strong>. We form them by leaving
          out what is particular: from ideas of Peter, James and Mary we drop what is peculiar to each and keep what they
          share, getting the idea of a human being. This explains how a finite mind, furnished only by particular experiences,
          can think about kinds.
        </p>
      </Definition>

      <Definition title="Berkeley's objection">
        <p>
          In the introduction to his <em>Principles of Human Knowledge</em> (1710), Berkeley argues that such ideas are
          impossible. Every idea is an image, and every image is determinate. I can imagine a hand or an eye apart from the
          body, but whatever hand I imagine has a particular shape and colour. I cannot form the idea of a man who is of no
          particular height, or of motion that is neither swift nor slow. An idea with inconsistent properties, all and none
          at once, is no idea at all.
        </p>
      </Definition>

      <Example title="particulars used as signs">
        <p>
          How then is thought general? Berkeley&rsquo;s answer: an idea, in itself particular, becomes general by being
          made to stand for all other particular ideas of the same sort. A geometer draws one black line an inch long and
          proves something about all lines; the proof holds generally because it uses nothing peculiar to this line. In the
          same way, a demonstration about a triangle holds of every triangle because neither the equality of its sides nor
          the size of its angles was used.
        </p>
      </Example>

      <Remark title="why it mattered">
        <p>
          Berkeley thought abstract ideas were the source of much confusion, above all the idea of matter: existence
          abstracted from being perceived. Rejecting them clears the way for his immaterialism. He is part of a long nominalist
          tradition, reaching back to Ockham: only particulars exist, and generality lies in how we use signs. Hume called
          the objection one of the greatest discoveries made in the republic of letters. Critics reply that Berkeley assumes
          ideas must be images; if a concept can be something other than a picture, it can be general without being vague.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "abstract",
      rung: "check",
      prompt: <p>What is an abstract general idea, in Locke&rsquo;s sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "An innate idea of God.",
          "An idea formed by leaving out what is particular to individual cases and keeping what they share.",
          "A word with no meaning.",
          "A mathematical proof.",
        ],
        correct: [1],
      },
    },
    {
      key: "image",
      rung: "check",
      prompt: <p>What assumption about ideas drives Berkeley&rsquo;s objection?</p>,
      answer: {
        kind: "choice",
        options: [
          "That ideas are innate.",
          "That ideas are like images, and every image is determinate in all its features.",
          "That ideas are words.",
          "That ideas are material.",
        ],
        correct: [1],
      },
    },
    {
      key: "sign",
      rung: "apply",
      prompt: <p>On Berkeley&rsquo;s view, how does a proof about one drawn triangle hold for all triangles?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the drawn triangle is the abstract triangle.",
          "Because the proof uses none of the particular features of the drawn triangle, which stands as a sign for all triangles.",
          "Because all triangles are equilateral.",
          "It does not hold for all triangles.",
        ],
        correct: [1],
      },
    },
    {
      key: "imagine",
      rung: "apply",
      prompt: <p>Which of these can you imagine, according to Berkeley? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "A hand apart from a body",
          "A colour that is no particular shade",
          "An eye apart from a face",
          "Motion that is neither swift nor slow",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "nominal",
      rung: "apply",
      prompt: <p>Which tradition does Berkeley&rsquo;s view belong to?</p>,
      answer: {
        kind: "choice",
        options: [
          "Platonic realism about universals",
          "Nominalism: only particulars exist, and generality lies in how signs are used",
          "Cartesian dualism",
          "Scepticism about mathematics",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Can you form an abstract general idea of a triangle? Give Berkeley&rsquo;s argument that you cannot and one reply on
          Locke&rsquo;s behalf.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States Berkeley's argument: any idea is a determinate image, so it must be of some particular kind of triangle.",
          "Gives a reply, such as that concepts need not be images, or that we can attend to some features while ignoring others.",
          "Reaches a view. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "words",
      rung: "stretch",
      prompt: (
        <p>
          Berkeley also argued that words need not always call up ideas: a word like &ldquo;promise&rdquo; can move us to act
          without any image. How does this bear on Locke&rsquo;s theory of meaning?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes Locke held that words signify ideas in the mind.",
          "Explains Berkeley's point that words have other uses, such as stirring passions or prompting action, without ideas.",
          "Draws a conclusion, perhaps linking to later theories of meaning as use. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Locke's account of abstract general ideas, Berkeley's argument that they are impossible, his alternative account of how particular ideas become general, and why this mattered for his philosophy.",

  glimpse: (
    <p>
      The next lesson shows what Berkeley built on this: if existence apart from perception is an abstraction, perhaps
      material things are nothing but collections of ideas. The Metaphysics course returns to nominalism and to the debate
      over abstract objects.
    </p>
  ),
};
