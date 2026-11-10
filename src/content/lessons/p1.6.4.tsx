import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { DeathViz } from "@/components/viz/DeathViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.6.4",
  minutes: 70,
  links: {
    revisits: ["p1.4.3", "p1.2.1"],
    foreshadows: ["p4.7.1", "p25.1.3", "p30.2.1"],
  },

  puzzle: (
    <>
      <p>
        Think about the billions of years before you were born. You did not exist, and that does not trouble you at all. Now
        think about the endless time after you die. You will not exist then either. Yet almost everyone fears death.
      </p>
      <p>
        If the time before your birth is nothing to you, why should the time after your death be any different? And if
        death is simply your not existing, who is it bad for?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The Greek philosopher Epicurus argued that death cannot harm us, and his Roman follower Lucretius added the argument
        from symmetry above. Both hoped to free people from fear. Many philosophers today reply that death is bad not because
        it is painful or frightening to be dead, but because of what it takes away.
      </p>
      <p>Below, a life is set between two stretches of non-existence. Switch between the two views and move the age at death.</p>
      <DeathViz />
    </>
  ),

  theory: (
    <>
      <Quote source={<>Epicurus, <cite>Letter to Menoeceus</cite></>}>
        <p>
          Death, the most frightening of evils, is nothing to us; for while we exist, death is not present, and when death is
          present, we do not exist.
        </p>
      </Quote>

      <Definition title="the Epicurean argument">
        <ol>
          <li>Something is bad for a person only if they can experience it.</li>
          <li>Once dead, a person can experience nothing.</li>
          <li>So being dead is not bad for the person who dies.</li>
          <li>It is unreasonable to fear what is not bad for you.</li>
          <li>So it is unreasonable to fear death.</li>
        </ol>
        <p>Here death means the state of being dead, not the process of dying, which can certainly be painful.</p>
      </Definition>

      <Definition title="the deprivation account">
        <p>
          Thomas Nagel (1970) rejected premise 1. Some harms are not experienced: a person who is betrayed behind their back,
          and never finds out, has still been harmed. Death is bad for a person because it <strong>deprives</strong> them of
          the good life they would otherwise have had. The harm is the difference between the life they had and the life they
          would have had.
        </p>
      </Definition>

      <Remark title="when is death bad?">
        <p>
          The Epicurean presses: if death harms you, when does it do so? Not while you are alive, since you are not yet dead;
          not afterwards, since you no longer exist. Some reply that the harm is timeless, like the fact that one life went
          better than another. Others say it occurs at the moment of death, or throughout the time you would have lived.
        </p>
      </Remark>

      <Example title="Lucretius's symmetry">
        <p>
          In <cite>On the Nature of Things</cite>, Book III, Lucretius compares the time after death to a mirror held up to the
          time before birth. The deprivation account must explain the asymmetry: being born later also deprives you of years
          of life. Nagel answered that you could not have been born much earlier, since someone born from a different sperm and
          egg would not be you, whereas you could have died later. Others, such as Fred Feldman, have questioned whether the
          asymmetry is really rational at all.
        </p>
      </Example>

      <Remark title="would immortality be good?">
        <p>
          If death is bad because it deprives us of more life, would living forever be best? Bernard Williams argued (1973)
          that it would not: a person with a fixed character would eventually exhaust everything that could interest them, and
          endless life would become unbearable boredom. His example was Elina Makropulos, from Karel &#268;apek&rsquo;s play,
          who at 342 has stopped taking the elixir that keeps her alive. Whether he was right depends partly on questions about
          personal identity from earlier in this course: would a person who changed enough to stay interested still be you?
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "epicurus",
      rung: "check",
      prompt: <p>Which premise of the Epicurean argument does the deprivation account reject?</p>,
      answer: {
        kind: "choice",
        options: [
          "Something is bad for a person only if they can experience it.",
          "Once dead, a person can experience nothing.",
          "It is unreasonable to fear what is not bad for you.",
          "None of them.",
        ],
        correct: [0],
      },
    },
    {
      key: "lucretius",
      rung: "check",
      prompt: <p>Lucretius&rsquo;s symmetry argument compares the time after death with&hellip;</p>,
      answer: { kind: "choice", options: ["the process of dying", "the time before birth", "sleep", "old age"], correct: [1] },
    },
    {
      key: "years",
      rung: "apply",
      prompt: (
        <p>
          On the deprivation account as shown in the visualisation, which assumes a life of 85 years, how many years of life
          does death at 30 take away?
        </p>
      ),
      answer: { kind: "numeric", value: 55 },
    },
    {
      key: "betrayal",
      rung: "apply",
      prompt: <p>What is Nagel&rsquo;s example of the secret betrayal meant to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That friends cannot be trusted.",
          "That a person can be harmed by something they never experience.",
          "That death is painful.",
          "That the dead can feel.",
        ],
        correct: [1],
      },
    },
    {
      key: "dying",
      rung: "apply",
      prompt: <p>The Epicurean argument is about&hellip;</p>,
      answer: {
        kind: "choice",
        options: ["the state of being dead", "the painful process of dying", "the death of others", "the fear of hell"],
        correct: [0],
      },
    },
    {
      key: "asymmetry",
      rung: "prove",
      prompt: (
        <p>
          Set out Lucretius&rsquo;s symmetry argument in premises and conclusion. Then explain how a defender of the deprivation
          account can reply, and whether the reply works.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the argument: we rightly do not regret prenatal non-existence; posthumous non-existence is relevantly similar; so we should not fear it.",
          "Explains the deprivation account.",
          "Presents a reply, such as Nagel's point that one could not have been born much earlier.",
          "Assesses the reply.",
        ],
      },
    },
    {
      key: "immortal",
      rung: "stretch",
      prompt: (
        <p>
          Would an endless life be good for you? Consider Bernard Williams&rsquo;s argument from boredom, and say how your
          answer bears on whether death is bad.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States Williams's argument clearly.",
          "Considers at least one reply, such as repeatable pleasures or a changing character.",
          "Connects the question to the deprivation account.",
          "Reaches a reasoned conclusion.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Epicurus's argument that death is nothing to us, and how the deprivation account replies.",

  glimpse: (
    <p>
      This completes the introduction to philosophy: knowledge, mind, free will, personal identity, God, morality, meaning and death,
      each met once at a first pass. Epicurus returns in Ancient Greek Philosophy, the badness of death in Applied Ethics, and
      Parfit&rsquo;s view that personal identity is not what matters, which changes how one may feel about death, in Graduate
      Ethics and Metaethics.
    </p>
  ),
};
