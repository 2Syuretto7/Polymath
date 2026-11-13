import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ParallelViz } from "@/components/viz/ParallelViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.2.1",
  minutes: 85,
  links: {
    revisits: ["p7.1.4", "p7.1.5", "p4.1.3"],
    foreshadows: ["p7.2.2", "p7.2.3", "p27.1.3"],
  },

  puzzle: (
    <>
      <p>
        In 1656 the Jewish community of Amsterdam expelled the twenty-three-year-old Baruch Spinoza with a ban of unusual
        severity. He earned his living grinding lenses, refused a professorship to keep his freedom of thought, and died at
        forty-four. His Ethics, published after his death, is set out like Euclid, with definitions, axioms and
        propositions. Its first part concludes that there is only one substance, God or Nature, and that you and I, the sea
        and the stars are ways that one substance exists. How could anyone prove that?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Compare Descartes&rsquo;s picture of mind and body with Spinoza&rsquo;s. Watch where the arrows of causation run, and
        click the rows.
      </p>
      <ParallelViz />
    </>
  ),

  theory: (
    <>
      <Definition title="substance, attribute, mode">
        <p>
          Spinoza defines a <strong>substance</strong> as what is in itself and is conceived through itself, needing the
          concept of nothing else. An <strong>attribute</strong> is what the intellect perceives of a substance as
          constituting its essence. A <strong>mode</strong> is an affection of a substance: something that is in another and
          is conceived through another, as a wave is a way the sea is. God is defined as an absolutely infinite being: a
          substance with infinitely many attributes, each expressing an infinite essence.
        </p>
      </Definition>

      <Example title="the argument for one substance">
        <p>
          First, two substances cannot share an attribute. If they did, they would have to be told apart by their modes; but
          a substance is prior to its modes, so considered in itself it would be indistinguishable from the other, and they
          would be one. Second, God exists necessarily, since it belongs to the nature of substance to exist, and God has
          every attribute. Third, any other substance would have to share an attribute with God, which the first step
          forbids. So &ldquo;whatever is, is in God, and nothing can be or be conceived without God&rdquo;.
        </p>
      </Example>

      <Definition title="one substance, two attributes">
        <p>
          We know two of God&rsquo;s attributes, thought and extension. They are not two things but two ways the one substance
          is expressed. So &ldquo;the order and connection of ideas is the same as the order and connection of
          things&rdquo;: every bodily event has a corresponding idea, and the human mind is the idea of the human body.
          Mind and body never interact, because they are one and the same thing conceived in two ways. Elisabeth&rsquo;s
          problem does not arise.
        </p>
      </Definition>

      <Remark title="God or Nature">
        <p>
          Spinoza writes <em>Deus sive Natura</em>, God or Nature. His God is not a person who chooses or has purposes:
          everything follows from the divine nature with the same necessity as the properties of a triangle follow from its
          definition. The appendix to Part I attacks the idea that nature acts for ends as a projection of human desire. Was
          he a pantheist, or an atheist in disguise, as his critics said? The poet Novalis called him a God-intoxicated man.
          Leibniz objected to the first step: two substances might share one attribute and differ in another. Others ask why
          infinitely many attributes are needed, when we know only two.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "substance",
      rung: "check",
      prompt: <p>How does Spinoza define a substance?</p>,
      answer: {
        kind: "choice",
        options: [
          "Anything with a body.",
          "What is in itself and is conceived through itself.",
          "Any thing that thinks.",
          "A collection of atoms.",
        ],
        correct: [1],
      },
    },
    {
      key: "attrs",
      rung: "check",
      prompt: <p>Which two attributes of God do human beings know, according to Spinoza?</p>,
      answer: { kind: "choice", options: ["Power and wisdom", "Thought and extension", "Goodness and justice", "Time and space"], correct: [1] },
    },
    {
      key: "share",
      rung: "apply",
      prompt: <p>Why, according to Spinoza, can two substances not share an attribute?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because attributes are too large to share.",
          "Because they could then be told apart only by their modes, yet a substance is prior to its modes, so they would be one.",
          "Because God forbids it.",
          "Because only bodies have attributes.",
        ],
        correct: [1],
      },
    },
    {
      key: "interact",
      rung: "apply",
      prompt: <p>How does Spinoza&rsquo;s view avoid the interaction problem that Elisabeth raised for Descartes?</p>,
      answer: {
        kind: "choice",
        options: [
          "By putting the soul in the pineal gland.",
          "Because mind and body are one thing under two attributes, so there is nothing for one to act on in the other.",
          "By making the mind extended.",
          "By letting God move the body on each occasion.",
        ],
        correct: [1],
      },
    },
    {
      key: "nature",
      rung: "apply",
      prompt: <p>What does the phrase God or Nature express?</p>,
      answer: {
        kind: "choice",
        options: [
          "That God created nature and stands outside it.",
          "That the one substance can be called God or Nature, since there is nothing beyond it.",
          "That nature is evil and God good.",
          "That God is a part of nature among others.",
        ],
        correct: [1],
      },
    },
    {
      key: "argument",
      rung: "prove",
      prompt: <p>Set out Spinoza&rsquo;s argument that there is only one substance in a few steps, and say which step is most open to doubt.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the steps: no two substances share an attribute; God, having all attributes, exists necessarily; so any other substance would share an attribute with God, which is impossible.",
          "Picks a step to doubt with a reason, such as Leibniz's objection to the first step, or doubts about the necessary existence of God.",
        ],
      },
    },
    {
      key: "pantheist",
      rung: "stretch",
      prompt: <p>Was Spinoza a pantheist or an atheist? Argue for your answer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers the case for pantheism: everything is in God, and God is infinite and necessary.",
          "Considers the case for atheism: his God has no will, purposes or personality, and is identified with nature.",
          "Reaches a view. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Spinoza's definitions of substance, attribute and mode, his argument that there is only one substance, how mind and body relate as two attributes, and what God or Nature means.",

  glimpse: (
    <p>
      The next lesson asks how Spinoza, in a world where everything is necessary, can still offer an ethics and a path to
      freedom. Leibniz, two lessons on, answers him with infinitely many substances instead of one.
    </p>
  ),
};
