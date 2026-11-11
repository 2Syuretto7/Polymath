import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["merely as a means", "as a means, not merely", "as an end"];
const ITEMS: SortItem[] = [
  {
    text: "Buying vegetables from a vendor at the market, at a fair price.",
    cat: "as a means, not merely",
    why: "You use the vendor to get vegetables, and the vendor uses you to earn money. But each agrees freely to the exchange, so neither is used merely as a means.",
  },
  {
    text: "Telling a friend a sad story you made up, so they will lend you money you will not repay.",
    cat: "merely as a means",
    why: "Deception. Your friend cannot consent to what you are really doing, because they do not know what it is. Their reason is bypassed.",
  },
  {
    text: "Threatening a shopkeeper until they hand over the cash.",
    cat: "merely as a means",
    why: "Coercion. The shopkeeper's choice is overridden by force. Onora O'Neill takes deception and coercion as the clearest ways of using someone merely as a means.",
  },
  {
    text: "Asking a stranger for directions.",
    cat: "as a means, not merely",
    why: "You use them as a source of information, but they are free to help or not, and they know what you are asking.",
  },
  {
    text: "Flattering a teacher with praise you do not mean, to get better marks.",
    cat: "merely as a means",
    why: "Manipulation: you try to steer their judgement by means they would reject if they saw them clearly.",
  },
  {
    text: "Patiently explaining a proof because you want a classmate to understand it.",
    cat: "as an end",
    why: "You treat their understanding as worth promoting for its own sake. Kant says we have an imperfect duty to further the ends of others.",
  },
  {
    text: "Respecting a patient's informed refusal of an operation, though you think it would help them.",
    cat: "as an end",
    why: "You treat them as a rational agent entitled to decide about their own life, not as a body to be managed.",
  },
];

export const lesson: LessonContent = {
  id: "p5.3.2",
  minutes: 80,
  links: {
    revisits: ["p5.3.1", "p5.2.2", "p5.1.4"],
    foreshadows: ["p5.3.3", "p8.5.2", "p5.5.2"],
  },

  puzzle: (
    <>
      <p>
        We use other people all the time. A passenger uses a bus driver to get to work; an employer uses workers to make a
        profit; you use a friend to talk through a problem. None of this seems wrong. Yet some uses of people are deeply
        wrong: tricking someone, enslaving them, using them as a shield. What is the difference between using someone and
        using them merely as a means? And why should persons be so special?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Sort each action by how it treats the other person. The line between using someone and using them merely as a means
        is the heart of the lesson.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Sort each action. What makes the first category different?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the formula of humanity">
        <p>
          Kant&rsquo;s second formulation of the categorical imperative tells us to act so that we treat humanity, in our own
          person and in the person of anyone else, always at the same time as an end, and never merely as a means. By
          humanity Kant means our rational nature: the capacity to set our own ends and act on reasons. Kant took the two
          formulations to be different expressions of the same law.
        </p>
      </Definition>

      <Example title="dignity and price">
        <p>
          In the kingdom of ends, Kant says, everything has either a price or a dignity. What has a price can be replaced by
          something else of equal value. What is above all price, and admits of no equivalent, has dignity. Rational beings
          have dignity, so a person cannot be traded against other persons, or against any amount of happiness. This is
          why, for a Kantian, the surgeon may not kill one patient to save five.
        </p>
      </Example>

      <Definition title="merely as a means">
        <p>
          Onora O&rsquo;Neill offers a test: you use someone merely as a means if you treat them in a way to which they could
          not possibly consent. Not just a way they happen not to like, but one in which the possibility of their consent is
          ruled out from the start. Deception does this, because the deceived person does not know what they are agreeing
          to; so does coercion, because their agreement is not asked. Treating someone as an end requires more: helping
          them pursue their own ends, as far as we reasonably can.
        </p>
      </Definition>

      <Remark title="punishment, animals and objections">
        <p>
          Kant drew a strong view of punishment from this formula: punishing a criminal only to deter others would use them
          merely as a means, so punishment must be deserved. He held that we have no duties directly to animals, only
          indirect ones: cruelty to animals is wrong because it damages our humanity and makes us cruel to people. Many
          critics find this inadequate, since animals can suffer whether or not they reason. Others ask what the view says
          about human beings who lack full rational capacities, such as infants, and whether it gives clear answers in hard
          cases where everyone involved is used in some way.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "formula",
      rung: "check",
      prompt: <p>Which is the humanity formula, in paraphrase?</p>,
      answer: {
        kind: "choice",
        options: [
          "Never use another person in any way.",
          "Treat humanity, in yourself and others, always also as an end and never merely as a means.",
          "Maximise the happiness of humanity.",
          "Treat others as they treat you.",
        ],
        correct: [1],
      },
    },
    {
      key: "oneill",
      rung: "check",
      prompt: <p>On O&rsquo;Neill&rsquo;s test, when do you use someone merely as a means?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whenever they benefit you.",
          "When you treat them in a way to which they could not possibly consent.",
          "When they are unhappy with what you do.",
          "Whenever money changes hands.",
        ],
        correct: [1],
      },
    },
    {
      key: "taxi",
      rung: "apply",
      prompt: <p>You take a taxi and pay the fare. How do you treat the driver?</p>,
      answer: { kind: "choice", options: ["merely as a means", "as a means, but not merely", "not as a means at all"], correct: [1] },
    },
    {
      key: "animals",
      rung: "apply",
      prompt: <p>Why, according to Kant, is cruelty to animals wrong?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because animals have dignity.",
          "Because it damages our own humanity and tends to make us cruel to people.",
          "Because it reduces total happiness.",
          "It is not wrong at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "dignity",
      rung: "apply",
      prompt: <p>In Kant&rsquo;s terms, what is the difference between price and dignity?</p>,
      answer: {
        kind: "choice",
        options: [
          "What has a price can be replaced by an equivalent; what has dignity has no equivalent.",
          "Dignity is a very high price.",
          "Price applies to persons, dignity to things.",
          "There is no difference.",
        ],
        correct: [0],
      },
    },
    {
      key: "deception",
      rung: "prove",
      prompt: (
        <p>
          Explain, using O&rsquo;Neill&rsquo;s consent test, why deceiving someone treats them merely as a means, while a fair
          exchange does not. Then raise one difficulty for the test.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the test: treatment to which the other could not possibly consent.",
          "Explains that a deceived person cannot consent to what is really happening, while in a fair exchange both can and do agree.",
          "Raises a difficulty, such as cases involving people who cannot consent, or how to describe what is consented to. Any reasonable difficulty earns full credit.",
        ],
      },
    },
    {
      key: "beings",
      rung: "stretch",
      prompt: (
        <p>
          Kant grounds moral status in rational nature. What follows for animals and for human beings who lack full
          rational capacities? Is there a way for a Kantian to give them direct moral standing?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains Kant's indirect duty view and why it troubles critics.",
          "Considers a Kantian revision, such as Christine Korsgaard's view that we value our animal nature too, or extending standing to those with the potential for, or a kind that has, rational nature.",
          "Reaches a reasoned view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kant's humanity formula, the difference between using someone and using them merely as a means, O'Neill's consent test, the idea of dignity, and Kant's views on punishment and animals.",

  glimpse: (
    <p>
      The next lesson asks what rights are and where they come from. The Kant course examines autonomy, and the last
      chapter of this course asks what we owe to animals.
    </p>
  ),
};
