import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ViaNegativaViz } from "@/components/viz/ViaNegativaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p6.2.5",
  minutes: 80,
  links: {
    revisits: ["p6.2.4", "p6.2.2", "p4.7.5"],
    foreshadows: ["p6.4.1", "p6.3.1", "p7.2.1"],
  },

  puzzle: (
    <>
      <p>
        Moses Maimonides was born in Córdoba in 1138, fled persecution with his family, and settled in Cairo, where he
        became the leading rabbi of his age and a physician at the court of Saladin. He wrote The Guide for the Perplexed
        for a student torn between the Torah and Aristotle. The Torah speaks of God&rsquo;s hand, God&rsquo;s anger, God
        sitting on a throne. Philosophy shows that God has no body and no passions. Must the student give up one or the
        other? And if every word we use of God misleads, can we say anything true of God at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Maimonides gives an example. Someone knows the word ship but has never seen one, and is told only what a ship is
        not. Step through the denials and see how much they come to know.
      </p>
      <ViaNegativaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the guide for the perplexed">
        <p>
          The Guide begins with words. Many terms in scripture are <strong>equivocal</strong>: &ldquo;hand&rdquo; can mean
          a body part or power; &ldquo;sitting&rdquo; can mean resting or permanence. Read rightly, scripture never says
          that God has a body. Like Averroes, Maimonides holds that the Torah speaks in the language of human beings, so
          that everyone can be taught, and that its deeper meaning must be drawn out by those who can follow
          demonstration.
        </p>
      </Definition>

      <Definition title="negative theology">
        <p>
          Maimonides argues that no positive attribute can be said of God. God is absolutely one and simple, so God cannot
          have qualities distinct from God&rsquo;s essence; and God is so unlike creatures that our words, made for
          creatures, do not apply. What we can say truly is what God is <strong>not</strong>: not a body, not powerless,
          not ignorant, not many. This is <strong>negative theology</strong>, the <em>via negativa</em>. Each negation, as
          with the ship, brings us closer to the truth, and the more one negates, the more one knows. Statements about
          God&rsquo;s actions, such as that God is merciful, describe the effects of God&rsquo;s acts in the world, not
          God&rsquo;s nature.
        </p>
      </Definition>

      <Example title="creation or eternity">
        <p>
          Aristotle held that the world is eternal. Maimonides examined the arguments on both sides and concluded that
          neither eternity nor creation can be demonstrated. Since reason cannot settle the question, and creation makes
          sense of miracles and of a God who wills, he accepted creation, adding that if eternity had been proved, he
          would have interpreted scripture to fit, as he did for God&rsquo;s body. This is a striking model of how to hold
          a belief where proof runs out.
        </p>
      </Example>

      <Remark title="questions and influence">
        <p>
          Critics have asked whether pure negation tells us anything: to say a stone is not ignorant says nothing about it.
          Maimonides replies that the negations are of privations that might wrongly be thought of God, and that they
          guide the mind towards God as the ship&rsquo;s negations guide it towards a ship. Aquinas, who admired him,
          thought some words apply to God by analogy, and so are not wholly negative. The Guide was read by Christian and
          Muslim scholars as well as Jewish ones, and centuries later by Spinoza, who rejected much of it but kept its
          question of how reason and scripture fit together.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "guide",
      rung: "check",
      prompt: <p>For whom did Maimonides write The Guide for the Perplexed?</p>,
      answer: {
        kind: "choice",
        options: [
          "For children learning to read.",
          "For a student perplexed by apparent conflicts between the Torah and philosophy.",
          "For the caliph's court.",
          "For opponents of all religion.",
        ],
        correct: [1],
      },
    },
    {
      key: "negative",
      rung: "check",
      prompt: <p>What does negative theology claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "That God does not exist.",
          "That we can truly say only what God is not, not what God is.",
          "That all statements about God are false.",
          "That God is evil.",
        ],
        correct: [1],
      },
    },
    {
      key: "hand",
      rung: "apply",
      prompt: <p>How does Maimonides deal with scriptural phrases such as &ldquo;the hand of God&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "He takes them literally.",
          "He treats the terms as equivocal, so that hand here means power, not a body part.",
          "He removes them from scripture.",
          "He says they are mistakes.",
        ],
        correct: [1],
      },
    },
    {
      key: "merciful",
      rung: "apply",
      prompt: <p>On Maimonides&rsquo;s view, what does it mean to call God merciful?</p>,
      answer: {
        kind: "choice",
        options: [
          "That God feels pity as we do.",
          "That God's acts in the world have effects like those of a merciful person, not that God has the emotion.",
          "Nothing at all.",
          "That God is a body.",
        ],
        correct: [1],
      },
    },
    {
      key: "creation",
      rung: "apply",
      prompt: <p>What did Maimonides conclude about whether the world was created or eternal?</p>,
      answer: {
        kind: "choice",
        options: [
          "That eternity has been demonstrated.",
          "That creation has been demonstrated.",
          "That neither can be demonstrated, and he accepted creation on other grounds.",
          "That the question is meaningless.",
        ],
        correct: [2],
      },
    },
    {
      key: "empty",
      rung: "prove",
      prompt: (
        <p>
          A critic says that negative theology tells us nothing, since one can deny anything of anything. How might
          Maimonides reply, and is the reply convincing?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the objection: negations alone seem to leave the subject empty or unidentified.",
          "Gives Maimonides's reply, such as the ship example or that each negation removes a real error, and judges whether it works.",
        ],
      },
    },
    {
      key: "proof",
      rung: "stretch",
      prompt: (
        <p>
          Maimonides said he would have reinterpreted scripture if the eternity of the world had been demonstrated. What
          does this show about how he saw the authority of reason and of scripture? Is his approach a good one?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that demonstrated truths would govern how scripture is read, while scripture decides where reason cannot.",
          "Takes a reasoned position on the approach.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the problem The Guide for the Perplexed addresses, Maimonides's negative theology with the example of the ship, and his view on whether the world was created.",

  glimpse: (
    <p>
      The next chapter returns to Latin Europe, with Anselm&rsquo;s ontological argument and the debate over universals.
      Aquinas, who read Avicenna, Averroes and Maimonides closely, comes after.
    </p>
  ),
};
