import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ElenchusViz, type ElCase } from "@/components/viz/ElenchusViz";
import type { LessonContent } from "@/lib/types";

const CASES: ElCase[] = [
  {
    name: "Polemarchus on justice",
    who: "In book 1 of the Republic, Polemarchus",
    claims: [
      {
        text: "Justice is helping one's friends and harming one's enemies.",
        thesis: true,
        cost: "This is what Polemarchus gives up. He ends by agreeing with Socrates that it is never just to harm anyone.",
      },
      {
        text: "To harm something, a horse or a dog, is to make it worse with respect to its own excellence.",
        cost: "Then harming would need another sense, such as causing pain or loss without making someone a worse person. Many readers think this is the weakest link.",
      },
      {
        text: "Justice is the human excellence.",
        cost: "Then justice would not be the excellence of a human being as such, which Polemarchus, like most Greeks, would find strange.",
      },
      {
        text: "The just cannot make anyone unjust by their justice, any more than musicians can make people unmusical by their music.",
        cost: "Then an excellence could produce its own opposite, which breaks the comparison with skills like music and horsemanship.",
      },
    ],
    clash: "Harming an enemy makes them worse in human excellence, that is, less just. But the just person cannot make anyone less just. So the just person harms no one.",
  },
  {
    name: "Polus on doing wrong",
    who: "In the Gorgias, Polus",
    claims: [
      {
        text: "Suffering wrong is worse than doing wrong.",
        thesis: true,
        cost: "This is what Polus is forced to give up. Socrates' own view is the reverse: doing wrong is worse than suffering it.",
      },
      {
        text: "Doing wrong is more shameful than suffering it.",
        cost: "Then Polus would take the line Callicles takes later in the dialogue: suffering wrong is both worse and more shameful.",
      },
      {
        text: "When one thing is more shameful than another, it is because it is more painful, or more harmful, or both.",
        cost: "Then shamefulness would not be explained by pain and harm. Many readers think Polus agreed to this too quickly.",
      },
      {
        text: "Doing wrong is not more painful than suffering it.",
        cost: "Almost no one would deny this, and Polus does not.",
      },
    ],
    clash: "Doing wrong is more shameful, but not more painful. So it must be more harmful, that is, worse, which contradicts the thesis.",
  },
];

export const lesson: LessonContent = {
  id: "p4.2.4",
  minutes: 70,
  links: {
    revisits: ["p0.1.4", "p4.2.3"],
    foreshadows: ["p4.3.1", "p4.4.1", "p4.6.3"],
  },

  puzzle: (
    <>
      <p>
        Socrates said that the only thing he knew was that he knew nothing, or near enough. Yet he spent his life showing
        other people that their beliefs were wrong, and he went to his death for convictions he held with complete
        firmness: that it is never right to do wrong, and that doing wrong harms the wrongdoer more than the victim.
      </p>
      <p>
        How can someone who claims to know nothing refute anyone, or be so sure of anything?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Socrates&rsquo; method, the elenchus, does not set his opinions against yours. It finds claims you already accept
        and shows that they cannot all be true together. That proves something is wrong, but not by itself what. Try it
        below: give up any one of the claims and the contradiction disappears. Which would you give up?
      </p>
      <ElenchusViz cases={CASES} />
    </>
  ),

  theory: (
    <>
      <Example title="the oracle">
        <p>
          In the <em>Apology</em>, Socrates explains that the oracle at Delphi said no one was wiser than he was. Knowing he
          was not wise, he set out to find someone wiser and so understand the riddle. He questioned politicians, who
          seemed wise to many and above all to themselves, and found they were not. He questioned poets, and found they
          composed by a kind of inspiration and could not explain their own poems. He questioned craftsmen, who did know
          their crafts, but who thought this made them wise about the most important matters too.
        </p>
        <p>
          He concluded that he was wiser in one small respect: where he did not know, he did not think he knew. Human
          wisdom, he suggests, is worth little or nothing, and the god used Socrates as an example to show it.
        </p>
      </Example>

      <Definition title="the standard elenchus">
        <p>A common pattern in the early dialogues, as analysed by Gregory Vlastos, runs:</p>
        <ol>
          <li>The interlocutor asserts a thesis p, which Socrates thinks false.</li>
          <li>Socrates secures agreement to further premises, q and r, without arguing for them.</li>
          <li>He shows that q and r together imply not-p.</li>
          <li>He then treats not-p as established, and p as refuted.</li>
        </ol>
      </Definition>

      <Remark title="the problem of the elenchus">
        <p>
          Logically, steps 1 to 3 show only that p, q and r are not all true. They do not show that p is the false one.
          The interlocutor could keep the thesis and drop q or r instead, as the visualisation lets you do. So how can
          Socrates claim to have shown that p is false? Vlastos suggested that Socrates relied on a further belief: that
          anyone who holds a false moral belief always also holds true beliefs that imply its negation. If that is right,
          repeated testing finds which beliefs survive. Others reply that the elenchus was never meant to prove; it tests
          people, showing them that they do not know, and that is enough for its purpose.
        </p>
      </Remark>

      <Remark title="does Socrates know anything?">
        <p>
          He sometimes speaks as if he does. In the <em>Apology</em> he says he knows that it is wicked and shameful to do
          wrong and to disobey one who is better, whether god or man. One proposal, again from Vlastos, distinguishes two
          kinds of knowledge: certain knowledge, which Socrates disclaims, and knowledge in a weaker sense, beliefs that
          have survived every elenctic test so far, which he can claim. Another reading treats the disavowal as{" "}
          <em>irony</em>, a mask that hides what Socrates really thinks. Thrasymachus, in the <em>Republic</em>, accuses
          him of exactly that.
        </p>
      </Remark>

      <Definition title="the priority of definition">
        <p>
          Socrates often says that until we know what virtue is, we cannot know anything about it, such as whether it can
          be taught. In 1966 Peter Geach called this the &ldquo;Socratic fallacy&rdquo;: if we needed a definition before
          we could recognise any examples, we could never test a definition against examples, and Socrates himself does
          exactly that. Defenders reply that Socrates demands a definition for <em>knowledge</em>, while allowing that we
          can have true <em>beliefs</em> about examples without one.
        </p>
      </Definition>

      <Remark title="the Socratic paradoxes">
        <p>
          The convictions that survived Socrates&rsquo; testing were startling enough to be called paradoxes. Virtue is a
          kind of knowledge. No one does wrong willingly: anyone who truly knew what was best would do it, so wrongdoing
          comes from ignorance. And doing wrong is worse for the wrongdoer than suffering it, because it damages the soul.
          The first two deny that one can know the better and choose the worse, the phenomenon later called akrasia, or
          weakness of will.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "oracle",
      rung: "check",
      prompt: <p>What did the oracle at Delphi tell Chaerephon?</p>,
      answer: {
        kind: "choice",
        options: [
          "That Socrates would be put to death.",
          "That no one was wiser than Socrates.",
          "That Socrates knew everything.",
          "That Athens would fall.",
        ],
        correct: [1],
      },
    },
    {
      key: "respect",
      rung: "check",
      prompt: <p>In what respect did Socrates conclude he was wiser than the people he questioned?</p>,
      answer: {
        kind: "choice",
        options: [
          "He knew more facts.",
          "He did not think he knew what he did not know.",
          "He was a better speaker.",
          "He had been taught by the god.",
        ],
        correct: [1],
      },
    },
    {
      key: "logic",
      rung: "apply",
      prompt: (
        <p>
          An interlocutor accepts p, q and r, and Socrates shows that q and r together imply not-p. What follows by logic
          alone?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["p is false.", "q is false.", "At least one of p, q and r is false.", "All three are false."],
        correct: [2],
      },
    },
    {
      key: "craftsmen",
      rung: "apply",
      prompt: <p>What did Socrates find was wrong with the craftsmen?</p>,
      answer: {
        kind: "choice",
        options: [
          "They knew nothing about their crafts.",
          "They knew their crafts, but thought this made them wise about the most important things too.",
          "They refused to speak to him.",
          "They composed by inspiration.",
        ],
        correct: [1],
      },
    },
    {
      key: "akrasia",
      rung: "apply",
      prompt: <p>Which ordinary experience seems to count against the claim that no one does wrong willingly?</p>,
      answer: {
        kind: "choice",
        options: [
          "Making an honest mistake in arithmetic.",
          "Eating a third slice of cake while fully believing it would be better not to.",
          "Learning a new language.",
          "Disagreeing with a friend about politics.",
        ],
        correct: [1],
      },
    },
    {
      key: "problem",
      rung: "prove",
      prompt: (
        <p>
          State the problem of the elenchus precisely, using the Polemarchus example from this lesson. Then explain one
          response to it and say whether you find it convincing.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that the argument shows only that the thesis and the agreed premises are inconsistent, not which is false.",
          "Applies this to Polemarchus, noting that he could have given up a premise, such as the account of harm, instead of the thesis.",
          "Describes a response, such as Vlastos's assumption, the weaker sense of knowledge, or the view that the elenchus tests people rather than proving theses, and evaluates it. Any reasoned evaluation earns full credit.",
        ],
      },
    },
    {
      key: "willingly",
      rung: "stretch",
      prompt: (
        <p>
          Defend or criticise the Socratic claim that no one does wrong willingly. What would Socrates say about the cake
          example, and is that reply convincing?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the claim and the reasoning behind it: anyone who truly knew what was best would do it.",
          "Considers the akrasia objection and a Socratic reply, for instance that at the moment of choice the person does not really know, or misjudges near and distant goods.",
          "Reaches a reasoned position. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the story of the oracle and what Socrates concluded from it, how the elenchus works and what it can and cannot prove, and how Socrates can claim to know nothing while holding firm moral convictions.",

  glimpse: (
    <p>
      In the <em>Meno</em>, Plato confronts a challenge to the whole Socratic project: if you do not know what you are
      looking for, how can you search for it? The <em>Theaetetus</em> has Socrates call himself a midwife who delivers
      other people&rsquo;s ideas. Aristotle&rsquo;s ethics takes up akrasia directly, and disagrees with Socrates.
    </p>
  ),
};
