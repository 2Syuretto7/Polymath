import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["strengthens", "weakens", "irrelevant"];
const ITEMS: SortItem[] = [
  {
    text: "Mice and humans share most of the genes involved in how the liver breaks down drugs.",
    cat: "strengthens",
    why: "A similarity that bears directly on the conclusion, how the drug acts in the body.",
  },
  {
    text: "Mice, like humans, are mammals with fur or hair.",
    cat: "irrelevant",
    why: "Hair has nothing to do with drug safety. A similarity has to be relevant to the conclusion to count.",
  },
  {
    text: "Mice break down some drugs several times faster than humans do.",
    cat: "weakens",
    why: "A relevant difference. A dose that is safe in a mouse might build up to harmful levels in a person.",
  },
  {
    text: "The drug was also safe in rats, dogs and monkeys.",
    cat: "strengthens",
    why: "More, and more varied, source cases. Safety across very different species is less likely to be a quirk of one.",
  },
  {
    text: "The mice in the study were all bred in the same laboratory.",
    cat: "weakens",
    why: "Little variety among the source cases. The result might reflect something peculiar to that strain.",
  },
  {
    text: "The conclusion is guarded: the drug is probably safe enough to begin small, closely watched trials in people.",
    cat: "strengthens",
    why: "A modest conclusion is easier to support. The same evidence supports 'safe to try carefully' far better than 'safe for everyone'.",
  },
];

export const lesson: LessonContent = {
  id: "p3.3.2",
  minutes: 60,
  links: {
    revisits: ["p0.4.2", "p2.1.3"],
    foreshadows: ["p23.2.3", "p25.1.1", "p3.5.2"],
  },

  puzzle: (
    <>
      <p>
        Suppose you are walking on a heath and find a watch on the ground. Its gears, springs and hands fit together to
        tell the time. You would not think it had formed by chance; you would infer a watchmaker. William Paley, in 1802,
        argued that the eye, with its lens, retina and muscles, is like the watch, and so must also have had a designer.
      </p>
      <p>
        The eye is like a watch in some ways and unlike it in others. How do we decide whether an argument from likeness
        is strong?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        An argument from analogy notices that two things are alike in some ways and concludes that they are alike in
        another. Its strength depends on whether the likenesses are the kind that matter for the conclusion. Before a new
        drug is given to people, it is tested on animals. Sort each consideration below by whether it strengthens or
        weakens the analogy from mice to humans, or is irrelevant.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Does each consideration strengthen the analogy, weaken it, or make no difference?" />
    </>
  ),

  theory: (
    <>
      <Definition title="argument from analogy">
        <p>The basic form is</p>
        <ol>
          <li>A has properties P₁, P₂, &hellip;, Pₙ.</li>
          <li>B has properties P₁, P₂, &hellip;, Pₙ.</li>
          <li>A has property Q.</li>
          <li>So B probably has property Q.</li>
        </ol>
        <p>
          A is the <strong>source</strong> (or analogue) and B the <strong>target</strong>. The argument is inductive: at
          best it makes the conclusion probable.
        </p>
      </Definition>

      <Remark title="what makes an analogy strong">
        <ul>
          <li><strong>Relevance</strong>: the shared properties should be ones that help bring about, or are connected with, Q. One relevant likeness outweighs many irrelevant ones.</li>
          <li><strong>Disanalogies</strong>: relevant differences between source and target weaken the argument.</li>
          <li><strong>Number and variety of sources</strong>: several different sources that all have Q make it less likely that Q depends on something special to one of them.</li>
          <li><strong>Modesty of the conclusion</strong>: as with generalisations, a guarded conclusion needs less support.</li>
        </ul>
      </Remark>

      <Example title="the watch and the eye">
        <p>
          Paley&rsquo;s argument has a relevant likeness at its heart: both watch and eye have many parts arranged so that
          they work together for a purpose. Hume, in his <em>Dialogues Concerning Natural Religion</em>, published in 1779,
          had already pressed objections against design arguments of this kind. We have seen watches being made, but never
          seen a world or an eye made; a watch shows signs of many makers and of trial and error, so the analogy might
          equally suggest many imperfect designers. In 1859 Darwin offered a rival explanation of how the parts of an eye
          could come to work together without a designer, which removes much of the analogy&rsquo;s force. The case
          shows that the strength of an analogy depends on what other explanations are available.
        </p>
      </Example>

      <Definition title="refutation by logical analogy">
        <p>
          A different use of analogy attacks an argument by giving another argument of the same form whose premises are
          plainly true and whose conclusion is plainly false. &ldquo;If that reasoning worked, so would this&rdquo;.
          &ldquo;Some politicians are honest and some politicians are corrupt, so some honest people are corrupt&rdquo; is
          refuted by &ldquo;some animals are cats and some animals are dogs, so some cats are dogs&rdquo;. This is the
          method of counterexample from Thinking and Writing Philosophically, applied to the form of an argument as studied
          in Logic I.
        </p>
      </Definition>

      <Remark title="analogy in law and ethics">
        <p>
          Lawyers argue from precedent: this case is like an earlier one in the respects the court relied on, so it should
          be decided the same way, and the other side looks for a relevant difference. Moral philosophers use invented
          cases in the same spirit, arguing that a real situation is like a clear imagined one in all the respects that
          matter. In both fields the hard work is deciding which respects matter.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "target",
      rung: "check",
      prompt: (
        <p>
          &ldquo;This new phone is made by the same company, with the same battery, as my last phone, whose battery lasted
          three years. So this battery will probably last about three years.&rdquo; What is the target of the analogy?
        </p>
      ),
      answer: { kind: "choice", options: ["the old phone", "the new phone", "the company", "three years"], correct: [1] },
    },
    {
      key: "relevant",
      rung: "check",
      prompt: <p>In the phone argument, which similarity matters most for the conclusion?</p>,
      answer: {
        kind: "choice",
        options: ["Both phones are black.", "Both phones have the same battery.", "Both phones were bought in a sale.", "Both phones have the same ringtone."],
        correct: [1],
      },
    },
    {
      key: "disanalogy",
      rung: "apply",
      prompt: <p>Which fact would most weaken the phone argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "The new phone has a larger screen that uses much more power.",
          "The new phone is a different colour.",
          "The new phone cost more.",
          "The new phone came in a smaller box.",
        ],
        correct: [0],
      },
    },
    {
      key: "variety",
      rung: "apply",
      prompt: <p>Which addition most strengthens the phone argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "My old phone's battery lasted three years and one month.",
          "Five friends with this battery in different models of phone all report about three years.",
          "The company's advertisements say the battery is excellent.",
          "I feel confident about it.",
        ],
        correct: [1],
      },
    },
    {
      key: "logical",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;Every country that has adopted this tax has a high income, so adopting this tax makes a country rich.&rdquo;
          Which reply is a refutation by logical analogy?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Some poor countries also have the tax.",
          "Every country with many skyscrapers has a high income, but building skyscrapers does not make a country rich.",
          "The economists who designed the tax are biased.",
          "Most people dislike taxes.",
        ],
        correct: [1],
      },
    },
    {
      key: "paley",
      rung: "prove",
      prompt: (
        <p>
          Set out Paley&rsquo;s design argument in the standard form of an argument from analogy, and assess its strength
          using the criteria of this lesson.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Sets out the form: a watch has many parts working together for a purpose; the eye (or the world) has such parts; the watch had a designer; so the eye probably had a designer.",
          "Discusses at least one criterion, such as the relevance of the likeness, a disanalogy (we have seen watches made), or the number and variety of sources.",
          "Mentions, perhaps, that a rival explanation such as natural selection affects the strength of the inference. A balanced verdict either way is fine.",
        ],
      },
    },
    {
      key: "precedent",
      rung: "stretch",
      prompt: (
        <p>
          A court once held that a shopkeeper who leaves a wet floor unmarked is liable when a customer slips. Now a library
          is sued by a visitor who tripped over a loose carpet. Write the argument by analogy each side might make, and say
          which relevant similarity or difference you think should decide the case.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes the visitor's argument: both are hazards on premises open to the public, which the occupier could have fixed or marked.",
          "Writes a library's reply that points to a possible relevant difference, such as whether the library knew of the hazard, whether it was obvious, or whether the library charges for entry.",
          "Says which consideration should decide it and why. Any reasonable judgement is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the form of an argument from analogy, the features that make one strong or weak, and how a logical analogy can show that an argument's form is bad.",

  glimpse: (
    <p>
      Philosophy of Religion returns to the design argument in its modern form, the argument from the fine-tuning of the
      laws of physics. Applied Ethics weighs famous analogies, such as the comparison between pregnancy and being attached
      to a stranger who needs your kidneys. Later in this course, legal reasoning shows analogy at work in the courts.
    </p>
  ),
};
