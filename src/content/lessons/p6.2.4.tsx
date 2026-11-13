import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["demonstrative", "dialectical", "rhetorical"];
const ITEMS: SortItem[] = [
  {
    text: "Every effect needs a cause; the world is an effect; so the world needs a cause. Each premise is shown to be true from first principles.",
    cat: "demonstrative",
    why: "A demonstration proceeds by valid reasoning from premises known to be certainly true. Averroes thought only trained philosophers could follow it.",
  },
  {
    text: "As our opponents themselves admit, nothing comes from nothing; so on their own principles the world must have a source.",
    cat: "dialectical",
    why: "Dialectic reasons from premises that are generally accepted or granted by the other side, not proved. It suits theologians, in Averroes's view.",
  },
  {
    text: "Look at the heavens and the rain that feeds the crops: surely such a gift has a giver who cares for you.",
    cat: "rhetorical",
    why: "Rhetoric persuades through examples, images and appeals to feeling. Averroes held that this is how most people come to true belief, and that it is legitimate.",
  },
  {
    text: "Wise and respected scholars have always agreed on this, so we may accept it.",
    cat: "dialectical",
    why: "An appeal to what reputable people accept is a typical starting point for dialectic, as in Aristotle's Topics.",
  },
  {
    text: "Just as a house shows its builder, so the ordered world shows its maker.",
    cat: "rhetorical",
    why: "An analogy that persuades by a vivid image rather than proving each premise.",
  },
  {
    text: "Whatever moves is moved by another; an infinite series of movers that are themselves moved is impossible; so there is an unmoved mover.",
    cat: "demonstrative",
    why: "This is Aristotle's argument from motion, which Averroes regarded as a true demonstration in physics.",
  },
];

export const lesson: LessonContent = {
  id: "p6.2.4",
  minutes: 80,
  links: {
    revisits: ["p6.2.3", "p6.2.1", "p4.5.2"],
    foreshadows: ["p6.2.5", "p6.4.1", "p6.4.3"],
  },

  puzzle: (
    <>
      <p>
        Abu al-Walid ibn Rushd, known in Latin as Averroes, was a judge in Seville and Córdoba and a physician to the
        caliph. In about 1180 he wrote a short legal opinion asking whether the religious law permits the study of
        philosophy, forbids it, or commands it. His answer was startling: for those able to do it, the law commands it.
        But then what should happen when philosophy and scripture seem to disagree?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Averroes, following Aristotle, distinguished three kinds of argument, suited to three kinds of people. Sort each
        argument by its kind.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Sort each argument by the kind of reasoning it uses." />
    </>
  ),

  theory: (
    <>
      <Definition title="the decisive treatise">
        <p>
          In The Decisive Treatise, Averroes argues that the Quran commands people to reflect on the world and so to know
          its maker. The best way to reflect is by <strong>demonstration</strong>, and the study of demonstration is
          philosophy, so philosophy is obligatory for those able to pursue it. And since &ldquo;truth does not contradict
          truth&rdquo;, a demonstrated truth cannot really conflict with scripture.
        </p>
      </Definition>

      <Definition title="interpretation">
        <p>
          When the apparent sense of a verse conflicts with a demonstrated conclusion, the verse must be read
          allegorically, by <strong>interpretation</strong> (<em>ta&rsquo;wil</em>). Scripture speaks in images because it
          addresses everyone: the many, persuaded by rhetoric; the theologians, by dialectic; and the few, by
          demonstration. The interpretations suited to the few should not be taught to the many, who could only be
          confused by them.
        </p>
      </Definition>

      <Example title="the incoherence of the incoherence">
        <p>
          Averroes answered al-Ghazali point by point in The Incoherence of the Incoherence. On causation, he argued that
          to deny that things have their own powers is to deny that they have natures, and then nothing could be known. On
          the eternity of the world, he argued that the dispute was partly verbal, and that al-Ghazali had treated
          philosophers&rsquo; dialectical arguments as if they were their real demonstrations.
        </p>
      </Example>

      <Remark title="the commentator">
        <p>
          Averroes wrote commentaries on nearly all of Aristotle, so thorough that medieval Latin writers called him
          simply the Commentator. Through them, Europe learned to read Aristotle closely. His view that there is one
          material intellect shared by all humans caused alarm in Paris, since it seemed to rule out personal immortality.
          The Latin Averroists who followed him were accused of a doctrine of double truth, something true in philosophy
          and false in faith. Averroes himself held the opposite: that there is one truth, reached by different paths.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "command",
      rung: "check",
      prompt: <p>What did Averroes conclude about the study of philosophy in The Decisive Treatise?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is forbidden.",
          "It is commanded by the religious law for those able to pursue it.",
          "It is permitted but useless.",
          "It should replace religion.",
        ],
        correct: [1],
      },
    },
    {
      key: "truth",
      rung: "check",
      prompt: <p>Which principle underlies Averroes&rsquo;s view of philosophy and scripture?</p>,
      answer: {
        kind: "choice",
        options: ["Faith is above reason", "Truth does not contradict truth", "There are two truths", "Nothing can be known"],
        correct: [1],
      },
    },
    {
      key: "conflict",
      rung: "apply",
      prompt: (
        <p>
          A demonstrated conclusion seems to conflict with the literal meaning of a verse. What does Averroes say should be
          done?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Reject the demonstration.",
          "Interpret the verse allegorically, so the conflict disappears.",
          "Accept both as true in different senses.",
          "Stop studying philosophy.",
        ],
        correct: [1],
      },
    },
    {
      key: "audience",
      rung: "apply",
      prompt: <p>On Averroes&rsquo;s view, which kind of argument suits most people?</p>,
      answer: {
        kind: "choice",
        options: ["Demonstrative", "Dialectical", "Rhetorical", "None at all"],
        correct: [2],
      },
    },
    {
      key: "double",
      rung: "apply",
      prompt: <p>Was Averroes himself committed to the doctrine of double truth?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes, he taught that something can be true in philosophy and false in religion.",
          "No, he held that there is one truth, which philosophy and scripture reach in different ways.",
          "Yes, but only for mathematics.",
          "He never discussed truth.",
        ],
        correct: [1],
      },
    },
    {
      key: "elitism",
      rung: "prove",
      prompt: (
        <p>
          Averroes held that the interpretations suited to philosophers should not be taught to the many. Is this view
          defensible? Argue for an answer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States his reason: the many, persuaded by images, could lose their faith without gaining demonstration.",
          "Gives a reasoned assessment, for example weighing respect for different abilities against the value of openness and equal access to truth.",
        ],
      },
    },
    {
      key: "natures",
      rung: "stretch",
      prompt: (
        <p>
          Compare Averroes&rsquo;s defence of natural causes with al-Ghazali&rsquo;s occasionalism. Which better fits the
          practice of science, and why?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Sets out both views: Averroes ties knowledge to natures with real powers; al-Ghazali allows only reliable regularities created by God.",
          "Reaches a reasoned verdict about which suits science better, with an argument.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why Averroes thought the religious law commands philosophy, how he dealt with conflicts between philosophy and scripture, the three kinds of argument, and his reply to al-Ghazali.",

  glimpse: (
    <p>
      The next lesson meets Maimonides, born in the same city as Averroes, who faced the same questions as a Jewish
      philosopher. Aquinas takes up the relation of faith and reason in a later chapter.
    </p>
  ),
};
