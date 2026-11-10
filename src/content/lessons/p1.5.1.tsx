import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { WhyChainViz } from "@/components/viz/WhyChainViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.5.1",
  minutes: 70,
  links: {
    revisits: ["p0.4.4", "p1.3.1"],
    foreshadows: ["p6.2.2", "p6.4.2", "p7.2.5", "p23.2.2"],
  },

  puzzle: (
    <>
      <Quote source={<>G. W. Leibniz, <cite>Principles of Nature and Grace</cite> (1714), §7</>}>
        <p>Why is there something rather than nothing?</p>
      </Quote>
      <p>
        Science explains one thing by another: the Earth by the cloud of dust it formed from, the cloud by the stars that died
        before it. But every explanation of that kind starts from something already there. Can there be an explanation of why
        there is anything at all? Or is that a question with no answer?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Follow a chain of &ldquo;why?&rdquo; questions back as far as it goes. Each answer points to something else, which
        also needs explaining. The <strong>cosmological argument</strong> says the chain cannot simply go on forever, or end in
        nothing: it must end in something that needs no explanation from outside itself. Try it below, then weigh three ways
        the chain might end.
      </p>
      <WhyChainViz />
    </>
  ),

  theory: (
    <>
      <Definition title="contingent and necessary">
        <p>
          A thing is <strong>contingent</strong> if it exists but might not have existed: you, the Earth, the Sun. A thing would
          be <strong>necessary</strong> if it could not have failed to exist; its existence would be explained by its own
          nature.
        </p>
      </Definition>

      <Definition title="the argument from contingency">
        <ol>
          <li>Every contingent thing has an explanation of its existence.</li>
          <li>The universe, the whole collection of contingent things, is itself contingent.</li>
          <li>So the universe has an explanation of its existence.</li>
          <li>That explanation cannot be another contingent thing, since every contingent thing is part of the universe.</li>
          <li>So the explanation is a necessary being, which is what people call God.</li>
        </ol>
        <p>
          Versions of this argument were given by Ibn Sīnā (Avicenna) around 1000, whose <em>Necessary Existent</em> exists
          by its own essence; by Thomas Aquinas in the third of his Five Ways in the <cite>Summa Theologiae</cite>; and by
          Leibniz, who based it on the <strong>principle of sufficient reason</strong>: nothing is so without a reason why it
          is so rather than otherwise.
        </p>
      </Definition>

      <Example title="the kalām argument">
        <p>
          A second family, defended by the Islamic theologian al-Ghazālī in the eleventh century and revived in recent decades,
          argues from the past: whatever begins to exist has a cause; the universe began to exist, since an actually infinite
          past is impossible; so the universe has a cause. Modern defenders point to Big Bang cosmology for the second
          premise; critics reply that physics does not settle whether the Big Bang was an absolute beginning.
        </p>
      </Example>

      <Remark title="objections">
        <ul>
          <li>
            <strong>Composition.</strong> Bertrand Russell objected that the argument moves from &ldquo;each member has a
            cause&rdquo; to &ldquo;the whole has a cause&rdquo;. Every human has a mother, but the human race does not.
          </li>
          <li>
            <strong>Brute facts.</strong> Perhaps the principle of sufficient reason is false, and the existence of the
            universe is simply a fact without explanation.
          </li>
          <li>
            <strong>The gap.</strong> Even if the argument proves a necessary first cause, it is a further step to show that the
            cause is a person, all-powerful, all-knowing and good. Kant argued that the cosmological argument secretly relies on
            the ontological argument to take that step.
          </li>
        </ul>
      </Remark>

      <Remark title="an Indian parallel">
        <p>
          The Nyāya school argued for Īśvara, a supreme maker, from effects: things like the Earth are composite products, and
          products have an intelligent maker, as pots have potters. Udayana, around the eleventh century, defended this
          against Buddhist and Mīmāṃsā critics, who replied, much as Hume later would, that the world is not much like a pot.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "contingent",
      rung: "check",
      prompt: <p>Which is the best example of a contingent thing?</p>,
      answer: { kind: "choice", options: ["the number 2", "the Taj Mahal", "the law that 2 + 2 = 4", "a necessary being"], correct: [1] },
    },
    {
      key: "psr",
      rung: "check",
      prompt: <p>The principle of sufficient reason says that&hellip;</p>,
      answer: {
        kind: "choice",
        options: ["everything has a reason why it is so rather than otherwise", "God exists", "the universe began", "nothing is necessary"],
        correct: [0],
      },
    },
    {
      key: "kalam",
      rung: "apply",
      prompt: <p>Which premise is distinctive of the kalām argument, as against the argument from contingency?</p>,
      answer: {
        kind: "choice",
        options: ["Every contingent thing has an explanation.", "The universe began to exist.", "God is good.", "There is evil in the world."],
        correct: [1],
      },
    },
    {
      key: "composition",
      rung: "apply",
      prompt: <p>&ldquo;Every human has a mother, but the human race does not.&rdquo; This objects to which step?</p>,
      answer: {
        kind: "choice",
        options: [
          "From each contingent thing having an explanation to the whole universe having one.",
          "From the universe having an explanation to that explanation being necessary.",
          "From a necessary being to God.",
          "From God to evil.",
        ],
        correct: [0],
      },
    },
    {
      key: "gap",
      rung: "apply",
      prompt: <p>What is the &ldquo;gap&rdquo; problem for the cosmological argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "It has no premises.",
          "Even a successful argument shows only a necessary cause, not that the cause has God's attributes.",
          "It shows there are two gods.",
          "It assumes the universe is infinite.",
        ],
        correct: [1],
      },
    },
    {
      key: "evaluate",
      rung: "prove",
      prompt: (
        <p>
          Choose the premise of the argument from contingency that you find weakest. Explain why someone might accept it, and
          why you have doubts.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies a specific premise of the argument.",
          "Gives a fair reason someone might accept it.",
          "Gives a reason to doubt it, such as the composition objection or the possibility of brute facts.",
          "Reaches a tentative verdict.",
        ],
      },
    },
    {
      key: "brute",
      rung: "stretch",
      prompt: (
        <p>
          Is &ldquo;the universe is just there, and that&rsquo;s all&rdquo; a satisfying answer to Leibniz&rsquo;s question?
          Compare it with accepting a necessary being. Which leaves less unexplained?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains what accepting the universe as a brute fact involves.",
          "Explains what accepting a necessary being involves, including any puzzles about necessity.",
          "Compares what each leaves unexplained.",
          "Reaches a reasoned conclusion.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the argument from contingency in five steps, and the objection you find strongest.",

  glimpse: (
    <p>
      The next lesson turns from the existence of the world to its order: the argument from design. Ibn Sīnā and Aquinas
      each have lessons in Medieval Philosophy, the principle of sufficient reason is central to Leibniz in Early Modern
      Philosophy, and the cosmological argument is examined in depth in Philosophy of Religion.
    </p>
  ),
};
