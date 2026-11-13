import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CityViz } from "@/components/viz/CityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p6.2.1",
  minutes: 80,
  links: {
    revisits: ["p4.3.3", "p4.6.5", "p4.5.2"],
    foreshadows: ["p6.2.2", "p6.2.4", "p6.4.1"],
  },

  puzzle: (
    <>
      <p>
        In ninth- and tenth-century Baghdad, scholars translated almost all of Aristotle and much of Plato and Galen into
        Arabic, often by way of Syriac. Abu Nasr al-Farabi, who died in 950, mastered this inheritance so thoroughly that
        later writers called him the Second Teacher, after Aristotle, the First. He faced a question that would shape
        philosophy in three religions for centuries: if reason, through philosophy, can find the truth, what is
        revealed religion for?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Al-Farabi classified cities by what their citizens cooperate to achieve. Choose an aim and see what kind of city
        it makes.
      </p>
      <CityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="happiness and the virtuous city">
        <p>
          For al-Farabi, as for Aristotle, the goal of human life is <strong>happiness</strong>, the perfection of our
          highest part, the intellect. Nobody can reach it alone, so humans form communities. The{" "}
          <strong>virtuous city</strong> is one whose members cooperate to attain true happiness. Its ruler must know what
          happiness is and how to reach it, which makes the ideal ruler a philosopher, as in Plato&rsquo;s Republic. Cities
          that aim at lesser goods, such as wealth, pleasure or honour, are <strong>ignorant cities</strong>.
        </p>
      </Definition>

      <Definition title="philosophy and religion">
        <p>
          Al-Farabi held that philosophy and religion express the same truths in different ways. Philosophy uses
          demonstration, strict proof from true premises, and is accessible to few. Religion presents the same truths in
          images and symbols, using persuasion, so that a whole people can grasp and live by them. The founding prophet,
          on this view, is a philosopher with a powerful imagination, able to translate truth into a form everyone can
          follow. Religion is not false, but it is philosophy&rsquo;s image.
        </p>
      </Definition>

      <Example title="the emanation of intellects">
        <p>
          Drawing on Plotinus, al-Farabi pictured the universe as flowing from the First Cause, which is one and thinks
          itself. From it emanates a first intellect, from that a second, and so on through ten intellects linked to the
          heavenly spheres. The tenth, the <strong>Active Intellect</strong>, governs our world and lights up human minds
          so that we can grasp universal truths, as the sun lets the eye see colours. The prophet receives its light in
          imagination as well as in thought.
        </p>
      </Example>

      <Remark title="influence and questions">
        <p>
          Al-Farabi also wrote on logic, which he defended as a universal grammar of thought, against grammarians who saw
          it as merely Greek, and on music, in a treatise read for centuries. His view of religion as philosophy for the
          many raised hard questions. Does it make revelation dispensable for the philosopher? Avicenna and Averroes
          developed his picture, and al-Ghazali attacked it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "second",
      rung: "check",
      prompt: <p>Why was al-Farabi called the Second Teacher?</p>,
      answer: {
        kind: "choice",
        options: [
          "He was the second caliph's tutor.",
          "He was ranked after Aristotle, the First Teacher, as a master of philosophy and logic.",
          "He wrote the second Arabic grammar.",
          "He taught Avicenna directly.",
        ],
        correct: [1],
      },
    },
    {
      key: "virtuous",
      rung: "check",
      prompt: <p>What makes a city virtuous, for al-Farabi?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its wealth and power.",
          "Its citizens cooperate to attain true happiness, under a ruler who knows what that is.",
          "Every citizen is free to do as they like.",
          "It has no ruler.",
        ],
        correct: [1],
      },
    },
    {
      key: "ignorant",
      rung: "apply",
      prompt: <p>Which of these would al-Farabi count as ignorant cities? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "A city whose citizens aim above all at honour.",
          "A city whose citizens aim at the happiness that comes from knowledge and virtue.",
          "A city whose citizens aim at accumulating wealth.",
          "A city whose citizens aim at pleasure.",
        ],
        correct: [0, 2, 3],
      },
    },
    {
      key: "religion",
      rung: "apply",
      prompt: <p>How does al-Farabi see the relation between philosophy and religion?</p>,
      answer: {
        kind: "choice",
        options: [
          "Religion is false and should be abolished.",
          "They express the same truths, philosophy by demonstration and religion by images and persuasion.",
          "Philosophy is false and religion true.",
          "They concern entirely different subjects.",
        ],
        correct: [1],
      },
    },
    {
      key: "active",
      rung: "apply",
      prompt: <p>What role does the Active Intellect play in human knowledge?</p>,
      answer: {
        kind: "choice",
        options: [
          "It stores our memories.",
          "It lights up human minds so they can grasp universal truths, as the sun lets the eye see.",
          "It moves our bodies.",
          "It creates matter.",
        ],
        correct: [1],
      },
    },
    {
      key: "dispensable",
      rung: "prove",
      prompt: (
        <p>
          If religion presents in images the truths that philosophy proves, does a philosopher still need religion? Argue
          for an answer, considering al-Farabi&rsquo;s view.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the worry: if philosophy already has the truths, religion seems to add nothing for the philosopher.",
          "Gives a reasoned answer, for example that the philosopher still lives in a community that needs religion, or that religion offers law and practice as well as belief.",
        ],
      },
    },
    {
      key: "plato",
      rung: "stretch",
      prompt: (
        <p>
          Compare al-Farabi&rsquo;s philosopher-prophet with Plato&rsquo;s philosopher-king. What did al-Farabi add, and
          why might he have needed to?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes the shared idea: the best ruler knows the good, so rule should belong to the wise.",
          "Identifies the addition, prophecy and imaginative power to communicate truth to the many, and connects it to his setting in a society founded on revelation.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend al-Farabi's idea of the virtuous city and the ignorant cities, how he related philosophy and religion, and his picture of the Active Intellect.",

  glimpse: (
    <p>
      The next lesson meets Avicenna, who built on al-Farabi to draw a famous distinction between what a thing is and the
      fact that it is.
    </p>
  ),
};
