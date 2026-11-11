import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["attacks the person", "misused authority", "popularity", "straw man", "fair reasoning"];
const ITEMS: SortItem[] = [
  {
    text: "Why listen to her views on tax? She has been divorced twice.",
    cat: "attacks the person",
    why: "Her marriages have nothing to do with whether her views on tax are correct. This is the abusive form of ad hominem.",
  },
  {
    text: "A famous footballer says this vaccine is unsafe, so it must be.",
    cat: "misused authority",
    why: "Fame in one field is not expertise in another. The footballer is an authority on football.",
  },
  {
    text: "Millions of people use this remedy, so it must work.",
    cat: "popularity",
    why: "Many people have believed false things. How many use a remedy is not evidence that it works; a fair trial is.",
  },
  {
    text: "You want to cut the defence budget? So you want to leave the country defenceless.",
    cat: "straw man",
    why: "A cut is not an abolition. The reply attacks a far weaker view than the one actually held.",
  },
  {
    text: "Nearly all climate scientists agree that the Earth is warming, so it is reasonable for me to believe it.",
    cat: "fair reasoning",
    why: "A strong consensus of experts, speaking within their field, is good evidence for someone who cannot check the data themselves.",
  },
  {
    text: "You say smoking is harmful, but you smoke yourself.",
    cat: "attacks the person",
    why: "This is tu quoque, 'you too'. It may show the speaker is inconsistent, but not that smoking is harmless.",
  },
  {
    text: "The witness was 200 metres away at night without glasses, so we should doubt that she recognised the face.",
    cat: "fair reasoning",
    why: "When a conclusion rests on someone's testimony, facts about their ability to know are relevant. This is not an ad hominem.",
  },
  {
    text: "Of course the oil company's scientist says the spill was harmless. They pay her salary.",
    cat: "attacks the person",
    why: "This is the circumstantial form. A motive is a reason to check the evidence carefully, but it does not show the claim is false.",
  },
];

export const lesson: LessonContent = {
  id: "p3.2.1",
  minutes: 60,
  links: {
    revisits: ["p3.1.2", "p0.2.4"],
    foreshadows: ["p4.2.1", "p10.5.2", "p10.6.2"],
  },

  puzzle: (
    <>
      <p>
        A doctor who smokes tells you to stop smoking. You reply: &ldquo;You smoke, so why should I listen?&rdquo; This
        feels like a point scored. But the doctor&rsquo;s habit does nothing to the lungs of smokers; the evidence that
        smoking harms is the same whoever reports it.
      </p>
      <p>
        On the other hand, if a witness who was drunk at the time says they saw the crime, their drunkenness seems very
        relevant. When is a fact about the speaker a reason to doubt what they say, and when is it a distraction?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A <em>fallacy of relevance</em> offers premises that, even if true, have no bearing on whether the conclusion is
        true. They work because they are about something we care about: a person&rsquo;s character, a famous name, what
        everyone thinks. The skill is to ask of each premise: if this were true, would it make the conclusion more likely?
        Sort the examples below, and notice that two of them are not fallacies at all.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Decide what each piece of reasoning does. Two of them are fair." />
    </>
  ),

  theory: (
    <>
      <Definition title="fallacy">
        <p>
          A <strong>fallacy</strong> is a common pattern of reasoning that is bad, yet can look good. Fallacies of
          relevance are those in which the premises, true or not, do not bear on the conclusion.
        </p>
      </Definition>

      <Definition title="ad hominem">
        <p>
          An argument <strong>ad hominem</strong> (&ldquo;against the person&rdquo;) rejects a claim because of a fact about
          the person who makes it. Three forms are common:
        </p>
        <ul>
          <li><strong>abusive</strong>: attacking character (&ldquo;she is dishonest&rdquo;, &ldquo;he is a fool&rdquo;);</li>
          <li><strong>circumstantial</strong>: pointing to an interest or motive (&ldquo;of course they would say that&rdquo;);</li>
          <li><strong>tu quoque</strong>: pointing to the speaker&rsquo;s own inconsistency (&ldquo;you do it too&rdquo;).</li>
        </ul>
        <p>
          The test is whether the argument depends on trusting the speaker. If someone gives reasons, the reasons stand or
          fall on their own, whoever gives them. If someone asks us to believe a claim on their word, their reliability
          is exactly what matters, and questioning it is fair.
        </p>
      </Definition>

      <Definition title="appeal to authority">
        <p>
          An appeal to authority accepts a claim because someone says it. It is often reasonable: nobody can check
          everything, and most of what we know we learned from others. It is fallacious when the authority is not an
          expert in the relevant field, is not named, is in a minority of experts presented as the consensus, or has an
          interest that has not been taken into account.
        </p>
      </Definition>

      <Definition title="appeal to popularity">
        <p>
          An appeal to popularity, or <strong>ad populum</strong>, takes a claim to be true because many people believe it.
          Numbers can matter where the question is about convention (which side of the road people drive on) or where many
          independent observers checked for themselves. Usually they do not: belief spreads by imitation as well as by
          evidence.
        </p>
      </Definition>

      <Definition title="straw man">
        <p>
          A <strong>straw man</strong> argument attacks a weaker or more extreme version of an opponent&rsquo;s view than
          the one they actually hold, then claims victory over the view itself. Its cure is the principle of charity from
          Thinking and Writing Philosophically: before you reply, state the other view in a form its holder would accept,
          and in its strongest form.
        </p>
      </Definition>

      <Example title="red herrings and appeals to emotion">
        <p>
          A <strong>red herring</strong> changes the subject to something easier to argue about. Asked whether a new
          factory will pollute the river, a spokesperson replies that it will bring three hundred jobs. Jobs matter, but
          they do not answer the question. Appeals to pity, fear or anger work the same way: an emotion may be entirely
          fitting, and still not be evidence for the claim on the table.
        </p>
      </Example>

      <Remark title="naming a fallacy is not a refutation">
        <p>
          An argument can be fallacious and its conclusion still true. &ldquo;The sky is blue, because my teacher said
          so&rdquo; is a weak argument for a true conclusion. Showing that an argument fails shows only that it gives no
          support; to show the conclusion false, you need an argument of your own. Rejecting a claim merely because it
          was argued for badly is sometimes called the fallacy fallacy.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "abuse",
      rung: "check",
      prompt: (
        <p>
          &ldquo;You can&rsquo;t trust that study on sugar. The lead author is rude to her students.&rdquo; Which fallacy is
          this?
        </p>
      ),
      answer: { kind: "choice", options: ["ad hominem", "appeal to popularity", "straw man", "red herring"], correct: [0] },
    },
    {
      key: "tuquoque",
      rung: "check",
      prompt: <p>Which of these is a tu quoque?</p>,
      answer: {
        kind: "choice",
        options: [
          "You say I should recycle, but you threw a bottle in the bin yesterday.",
          "Everyone recycles now, so it must be worth doing.",
          "A famous actor says recycling is pointless.",
          "You want more recycling? So you want to ban all plastic.",
        ],
        correct: [0],
      },
    },
    {
      key: "authority",
      rung: "apply",
      prompt: <p>Which appeal to authority is most reasonable?</p>,
      answer: {
        kind: "choice",
        options: [
          "A Nobel-winning physicist says a certain diet cures cancer.",
          "The national meteorological office forecasts heavy rain tomorrow.",
          "A website I found says the moon landings were faked.",
          "My uncle, who is very clever, says the stock market will rise.",
        ],
        correct: [1],
      },
    },
    {
      key: "straw",
      rung: "apply",
      prompt: (
        <p>
          A: &ldquo;Schools should teach less memorisation and more problem solving.&rdquo; B: &ldquo;So you think children
          shouldn&rsquo;t know any facts at all? That&rsquo;s absurd.&rdquo; What has B done?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["Made a fair objection.", "Attacked a straw man.", "Appealed to authority.", "Made a tu quoque."],
        correct: [1],
      },
    },
    {
      key: "fallacyfallacy",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;Your argument for the new park was an appeal to popularity, so the town doesn&rsquo;t need a new
          park.&rdquo; What is wrong with this reply?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Nothing; a fallacious argument has a false conclusion.",
          "A bad argument for a conclusion does not show the conclusion is false.",
          "It is itself an appeal to popularity.",
          "It is a straw man.",
        ],
        correct: [1],
      },
    },
    {
      key: "relevant",
      rung: "prove",
      prompt: (
        <p>
          Explain, with one example of each, the difference between an attack on a person that is a fallacy and a
          question about a person that is relevant to whether we should accept their claim.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives an example where a fact about the speaker is irrelevant, because the claim is supported by reasons or evidence that stand on their own.",
          "Gives an example where the claim rests on the speaker's word, so their reliability (eyesight, expertise, honesty, interest) is relevant.",
          "States the general test in their own words: does the argument depend on trusting the speaker?",
        ],
      },
    },
    {
      key: "steel",
      rung: "stretch",
      prompt: (
        <p>
          Someone argues: &ldquo;People who want stricter gun laws just want to take everyone&rsquo;s guns away.&rdquo;
          Rewrite the view being attacked in its strongest form, and then write a reply that engages with that version.
          (You may take either side on the underlying question.)
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States a charitable version of the view, such as support for background checks, licensing or limits on certain weapons, rather than total confiscation.",
          "Writes a reply that addresses that version, whether in support or against.",
          "Avoids new fallacies in the reply. The side taken does not affect the credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what makes a fallacy of relevance, the forms of ad hominem, when appealing to an authority is reasonable, and why spotting a fallacy does not show that the conclusion is false.",

  glimpse: (
    <p>
      Ancient Greek Philosophy meets the sophists, teachers of persuasion whom Plato accused of caring more for winning
      than for truth. Epistemology takes the fair half of this lesson seriously: when may we believe something on another
      person&rsquo;s word, and what should we do when equally reliable people disagree with us?
    </p>
  ),
};
