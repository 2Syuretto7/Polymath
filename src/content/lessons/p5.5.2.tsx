import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["Singer: equal consideration", "Regan: animal rights", "Kant: indirect duties"];
const ITEMS: SortItem[] = [
  {
    text: "The question is not whether they can reason, nor whether they can talk, but whether they can suffer.",
    cat: "Singer: equal consideration",
    why: "Singer takes this line from Bentham. Sentience, the capacity to suffer and enjoy, is the condition for having interests at all.",
  },
  {
    text: "Like interests count equally, whichever species the being belongs to.",
    cat: "Singer: equal consideration",
    why: "This is the principle of equal consideration of interests. Favouring our own species for its own sake is speciesism, comparable to racism.",
  },
  {
    text: "Animal experiments may be justified if, and only if, the benefits outweigh the suffering, counted impartially.",
    cat: "Singer: equal consideration",
    why: "As a utilitarian, Singer weighs costs and benefits. Most current experiments, he argues, fail the test; but none is ruled out in principle.",
  },
  {
    text: "Many animals are subjects of a life, with beliefs, desires, memory and a welfare of their own, so they have inherent value.",
    cat: "Regan: animal rights",
    why: "Tom Regan's criterion is not sentience alone but being the experiencing subject of a life that can go better or worse for it.",
  },
  {
    text: "Using animals in research is wrong even when the benefits to others are great.",
    cat: "Regan: animal rights",
    why: "Rights, for Regan, work like side constraints: a being with inherent value may not be used merely as a resource, whatever the gains. He called for abolition, not reform.",
  },
  {
    text: "We have no duties directly to animals, but cruelty to them is wrong because it coarsens our treatment of people.",
    cat: "Kant: indirect duties",
    why: "This is Kant's indirect duty view: moral status belongs to rational beings, and animals matter only through their effect on us.",
  },
  {
    text: "Someone who shoots their dog because it can no longer serve them damages the kindly feelings they ought to show to humankind.",
    cat: "Kant: indirect duties",
    why: "A paraphrase of Kant's own example from his lectures on ethics. The wrong lies in the effect on the person's character.",
  },
];

export const lesson: LessonContent = {
  id: "p5.5.2",
  minutes: 80,
  links: {
    revisits: ["p5.3.2", "p5.2.1", "p5.5.1"],
    foreshadows: ["p25.2.1", "p25.2.2", "p5.5.3"],
  },

  puzzle: (
    <>
      <p>
        Most people would be appalled to see someone kick a dog for fun. Yet tens of billions of land animals are raised
        and killed for food each year, many in conditions that would be illegal if inflicted on pets. Either these two
        attitudes can be reconciled, or one of them is mistaken. In 1975 Peter Singer&rsquo;s <cite>Animal Liberation</cite>{" "}
        argued that the second is, and made the moral status of animals a serious question for philosophy.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Three classic views on animals. Sort each claim by the view that makes it, and notice what each takes to be the
        basis of moral status.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which view makes each claim?" />
    </>
  ),

  theory: (
    <>
      <Definition title="speciesism">
        <p>
          <strong>Speciesism</strong>, a term coined by Richard Ryder and made famous by Singer, is giving less weight to
          a being&rsquo;s interests simply because of the species it belongs to. Singer argues that it is as arbitrary as
          racism or sexism: what matters morally is not membership of a group but the interests at stake. A pig&rsquo;s
          pain matters as much as a similar pain felt by a human being. This does not mean animals and humans must be
          treated identically, since their interests differ: a pig has no interest in voting.
        </p>
      </Definition>

      <Example title="the argument from marginal cases">
        <p>
          Suppose one says that humans matter more because they can reason, talk or make moral choices. Some human beings,
          such as newborns or people with severe cognitive disabilities, cannot do these things either, yet we rightly
          think they have full moral status. So, the argument goes, either such capacities are not what grounds status, or
          we must hold that some animals have the same status as these humans. The name is widely thought unfortunate, and
          many prefer to call it the argument from species overlap. Replies appeal to the kind of being one is, to
          potential, or to special relationships among humans.
        </p>
      </Example>

      <Definition title="rights and relationships">
        <p>
          Regan&rsquo;s rights view forbids using animals as mere means even for great benefits, where Singer&rsquo;s
          utilitarianism weighs them. Christine Korsgaard has argued, against Kant, that a Kantian should recognise duties
          to animals directly: in valuing our own animal nature, our capacity to be hurt and to fare well, we commit
          ourselves to valuing it in other creatures. Contractualists such as Peter Carruthers argue the opposite, that
          morality is an agreement among rational agents and animals are outside it, though we may still care for them.
        </p>
      </Definition>

      <Remark title="practical conclusions">
        <p>
          The views disagree on foundations but often converge in practice. Singer and Regan both condemn factory farming,
          and so do many who reject both theories, since even modest weight for animal suffering seems to count heavily
          against practices that cause so much of it for comparatively small benefits. They differ more on research, on
          painless killing, and on whether reform or abolition is the goal. Many traditions, including the Jain and
          Buddhist principle of ahimsa, non-harm, reached strong conclusions about animals long before modern philosophy.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "spec",
      rung: "check",
      prompt: <p>What is speciesism?</p>,
      answer: {
        kind: "choice",
        options: [
          "The belief that species evolve.",
          "Giving less weight to a being's interests simply because of its species.",
          "Treating all species identically.",
          "Studying the differences between species.",
        ],
        correct: [1],
      },
    },
    {
      key: "bentham",
      rung: "check",
      prompt: <p>For Singer, following Bentham, what capacity is the condition for having interests?</p>,
      answer: { kind: "choice", options: ["Reason", "Language", "Sentience", "Moral agency"], correct: [2] },
    },
    {
      key: "research",
      rung: "apply",
      prompt: (
        <p>
          An experiment on ten mice would very likely lead to a cure for a common disease. Which view could permit it, at
          least in principle?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["Singer's utilitarianism", "Regan's rights view", "Neither", "Both, without qualification"],
        correct: [0],
      },
    },
    {
      key: "marginal",
      rung: "apply",
      prompt: <p>What does the argument from marginal cases, or species overlap, target?</p>,
      answer: {
        kind: "choice",
        options: [
          "The claim that animals feel pain.",
          "Any attempt to ground the special status of all humans in a capacity that some humans lack.",
          "The use of animals as pets.",
          "Vegetarian diets.",
        ],
        correct: [1],
      },
    },
    {
      key: "korsgaard",
      rung: "apply",
      prompt: <p>How does Korsgaard revise Kant&rsquo;s view of animals?</p>,
      answer: {
        kind: "choice",
        options: [
          "She argues animals are rational.",
          "She argues that in valuing our own animal nature we must value it in other creatures, so we have direct duties to them.",
          "She accepts the indirect duty view unchanged.",
          "She argues for utilitarianism.",
        ],
        correct: [1],
      },
    },
    {
      key: "factory",
      rung: "prove",
      prompt: (
        <p>
          Construct an argument against factory farming that does not depend on accepting either Singer&rsquo;s or
          Regan&rsquo;s whole theory. Then state the strongest objection to it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Builds an argument from a modest premise, such as that causing great suffering for small benefits is wrong.",
          "Connects the premise to the facts of factory farming.",
          "States a serious objection, such as doubts about animal experience or the weight of human interests. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "overlap",
      rung: "stretch",
      prompt: (
        <p>
          Assess one reply to the argument from species overlap, such as the appeal to the kind of being one is, or to
          special relationships among humans. Does it succeed without becoming speciesist?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the argument from species overlap fairly.",
          "Explains a reply clearly and considers whether it amounts to speciesism.",
          "Reaches a reasoned view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Singer's principle of equal consideration and the charge of speciesism, Regan's rights view, Kant's indirect duty view and Korsgaard's revision, the argument from species overlap, and where the views agree in practice.",

  glimpse: (
    <p>
      The next lesson asks what the well off owe to people in severe poverty. The Applied Ethics course studies the moral
      status of animals and the environment in more depth.
    </p>
  ),
};
