import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "God is that than which nothing greater can be conceived.",
    kind: "premise",
    note: "Anselm offers this as a definition that even the fool who says there is no God can understand. It does not say God is the greatest thing that exists, but the greatest that could be thought.",
  },
  {
    claim: "The fool understands this phrase, so that than which nothing greater can be conceived exists in the fool's understanding.",
    kind: "premise",
    note: "A painter has a picture in the understanding before painting it. To exist in the understanding is just to be thought of, whether or not the thing is real.",
    objection: "Does understanding a phrase really put a thing in the mind? Perhaps the fool understands only the words.",
  },
  {
    claim: "To exist in reality as well as in the understanding is greater than to exist in the understanding alone.",
    kind: "premise",
    note: "A painting that has been painted is greater than one merely imagined. This is the premise on which the argument turns.",
    objection: "Kant replied that existence is not a real predicate: it adds nothing to the concept of a thing, so it cannot make the thing greater.",
  },
  {
    claim: "Suppose it exists in the understanding alone. Then we could conceive of it existing in reality too, which would be greater.",
    kind: "inference",
    note: "So we could conceive of something greater than that than which nothing greater can be conceived, which is a contradiction.",
  },
  {
    claim: "Therefore that than which nothing greater can be conceived exists both in the understanding and in reality.",
    kind: "conclusion",
    note: "The argument is a reductio ad absurdum: the supposition that God exists only in thought leads to contradiction.",
    objection: "Gaunilo: by the same reasoning, the most excellent island conceivable must exist. If that is absurd, so is the argument.",
  },
];

export const lesson: LessonContent = {
  id: "p6.3.1",
  minutes: 80,
  links: {
    revisits: ["p6.2.2", "p1.5.1", "p6.1.3"],
    foreshadows: ["p23.2.1", "p7.1.3", "p6.4.2"],
  },

  puzzle: (
    <>
      <p>
        Around 1077 Anselm, a monk at the abbey of Bec in Normandy and later Archbishop of Canterbury, searched for a
        single argument that would prove God exists, needing nothing else. He tells us the search tormented him, until
        one night the argument came to him. It starts from nothing but a definition, and claims to show that denying
        God&rsquo;s existence is self-contradictory. Philosophers have argued about it ever since, and nearly every one who
        thinks it fails disagrees with the others about why.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through the argument of Proslogion chapter two, and challenge the steps that seem suspicious.
      </p>
      <ArgumentStepViz steps={STEPS} title="Anselm's ontological argument" />
    </>
  ),

  theory: (
    <>
      <Definition title="the ontological argument">
        <p>
          An <strong>ontological argument</strong> tries to prove that God exists from the concept of God alone, without
          appeal to experience of the world. That makes it <strong>a priori</strong>, unlike the cosmological argument,
          which starts from the fact that something exists, or the design argument, which starts from order in nature.
          Anselm&rsquo;s version is a reductio: assume that God exists only in the understanding, and derive a
          contradiction.
        </p>
      </Definition>

      <Example title="Gaunilo's island">
        <p>
          A monk named Gaunilo replied on behalf of the fool. Imagine an island more excellent than any other, rich in
          every delight. We understand the description, so the island exists in the understanding. An island that exists
          in reality is more excellent than one that exists only in the mind. So, by Anselm&rsquo;s reasoning, the island
          exists. Since this is absurd, something must be wrong with the reasoning. This is a <strong>parody</strong>: an
          argument of the same form with a false conclusion.
        </p>
      </Example>

      <Definition title="Anselm's reply and the second argument">
        <p>
          Anselm replied that the argument applies only to that than which nothing greater can be conceived, not to the
          greatest of a kind. An island, however fine, is limited and could always be improved. In Proslogion chapter
          three he gave a second argument: a being that cannot be conceived not to exist is greater than one that can. So
          God cannot even be conceived not to exist; God exists <strong>necessarily</strong>. Twentieth-century
          philosophers such as Norman Malcolm and Alvin Plantinga built modal versions on this idea.
        </p>
      </Definition>

      <Remark title="the verdict">
        <p>
          Aquinas rejected the argument, holding that we do not know God&rsquo;s essence well enough to see that it
          includes existence. Descartes revived a version of it. Kant&rsquo;s objection, that existence is not a real
          predicate, is the most famous: saying that a hundred thalers exist does not add a thaler to the concept. Bertrand
          Russell remarked that it is easier to feel convinced that the argument must be fallacious than to find out
          precisely where the fallacy lies.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How does Anselm describe God in the argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "The first cause of motion",
          "That than which nothing greater can be conceived",
          "The designer of the world",
          "The greatest thing that exists",
        ],
        correct: [1],
      },
    },
    {
      key: "apriori",
      rung: "check",
      prompt: <p>What makes the ontological argument a priori?</p>,
      answer: {
        kind: "choice",
        options: [
          "It was written before other arguments.",
          "It reasons from the concept of God alone, not from experience of the world.",
          "It relies on scripture.",
          "It uses probabilities.",
        ],
        correct: [1],
      },
    },
    {
      key: "form",
      rung: "apply",
      prompt: <p>What form does Anselm&rsquo;s argument in Proslogion chapter two take?</p>,
      answer: {
        kind: "choice",
        options: ["An inductive generalisation", "A reductio ad absurdum", "An argument from analogy", "An inference to the best explanation"],
        correct: [1],
      },
    },
    {
      key: "gaunilo",
      rung: "apply",
      prompt: <p>What kind of objection is Gaunilo&rsquo;s island?</p>,
      answer: {
        kind: "choice",
        options: [
          "It denies that God can be conceived.",
          "It is a parody: an argument of the same form with an absurd conclusion, showing the form is faulty.",
          "It shows that islands are greater than God.",
          "It accepts the argument.",
        ],
        correct: [1],
      },
    },
    {
      key: "kant",
      rung: "apply",
      prompt: <p>Which premise does Kant&rsquo;s objection that existence is not a real predicate attack?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the fool understands the phrase.",
          "That existing in reality is greater than existing only in the understanding.",
          "That God is that than which nothing greater can be conceived.",
          "That a contradiction shows a supposition is false.",
        ],
        correct: [1],
      },
    },
    {
      key: "island",
      rung: "prove",
      prompt: <p>Does Anselm&rsquo;s reply defeat Gaunilo&rsquo;s island? Argue for your answer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Anselm's reply: the argument applies only to a being greatest without qualification, while an island is limited by its kind.",
          "Assesses it, for example by asking whether greatness has an intrinsic maximum for islands but not for God, or whether a parody with the same structure still works.",
        ],
      },
    },
    {
      key: "predicate",
      rung: "stretch",
      prompt: (
        <p>
          Explain Kant&rsquo;s claim that existence is not a real predicate, using his example of a hundred thalers. Does it
          refute Anselm&rsquo;s second, modal argument as well as the first?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that adding existence to a concept does not change what is conceived: a hundred real thalers contain no more thalers than a hundred possible ones.",
          "Considers whether the modal argument, which uses necessary existence, escapes this, and reaches a view.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Anselm's ontological argument, Gaunilo's island objection and Anselm's reply, and Kant's objection that existence is not a real predicate.",

  glimpse: (
    <p>
      The next lesson turns to a medieval debate about whether general things such as humanity or redness exist. The
      Philosophy of Religion course returns to the modal ontological argument.
    </p>
  ),
};
