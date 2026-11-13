import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Everything that exists was created by God, and God is wholly good.",
    kind: "premise",
    note: "Augustine accepts both, as a Christian. Together they seem to leave no room for evil at all.",
  },
  {
    claim: "So everything that exists is good, to the degree that it exists.",
    kind: "inference",
    note: "A good creator makes good things. Augustine says this even of the lowest creatures: a worm or a scorpion has its own order and beauty.",
    objection: "This seems to fly in the face of experience. Are diseases and earthquakes good, to the degree that they exist?",
  },
  {
    claim: "Evil is not a thing but a privation: a lack of a good that ought to be there.",
    kind: "premise",
    note: "Blindness is not a substance in the eye but the absence of sight. Augustine learned this idea from the Platonists, especially Plotinus.",
    objection: "Pain seems to be a positive, vivid presence, not a mere absence. Is it plausible that it is only a lack?",
  },
  {
    claim: "Moral evil comes from free will turning away from a higher good towards a lower one.",
    kind: "premise",
    note: "The things chosen are good in themselves: food, money, honour. The evil lies in the disordered choice, loving the lesser more than the greater.",
  },
  {
    claim: "A will able to choose good freely must also be able to choose badly, and a world with such wills is better than one without.",
    kind: "premise",
    note: "In On Free Choice of the Will, Augustine compares free will to hands: they can be used to do wrong, yet a body without hands is lacking a great good.",
    objection: "Could God not have created free beings who always in fact choose well? Mackie later pressed exactly this question.",
  },
  {
    claim: "So God is not the author of evil: evil is not a created thing, and moral evil is the work of created wills.",
    kind: "conclusion",
    note: "The two parts work together. The privation theory says what evil is; the free will defence says where it comes from.",
    objection: "God foresaw the misuse of freedom and created anyway. Does God still bear some responsibility?",
  },
];

export const lesson: LessonContent = {
  id: "p6.1.2",
  minutes: 80,
  links: {
    revisits: ["p1.5.3", "p6.1.1", "p4.7.5"],
    foreshadows: ["p6.1.3", "p23.1.2", "p6.3.1"],
  },

  puzzle: (
    <>
      <p>
        As a young man Augustine spent nine years among the Manichees, who taught that the world is a battlefield between
        two powers, one good and one evil, each as real as the other. It was an easy answer to the question of where evil
        comes from. When he became a Christian he gave it up, and so lost the answer. If one good God made everything,
        where does evil come from? In the Confessions he tells how the question tormented him.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Augustine&rsquo;s answer, which has two parts: what evil is, and where it comes from. Challenge any
        step that troubles you.
      </p>
      <ArgumentStepViz steps={STEPS} title="Augustine on evil" />
    </>
  ),

  theory: (
    <>
      <Definition title="evil as privation">
        <p>
          On the <strong>privation theory</strong>, evil has no being of its own. It is a corruption or lack in something
          good, as blindness is a lack of sight and rot a corruption of wood. It follows that evil is parasitic: there can
          be good without evil, but no evil without some good for it to spoil. A thing wholly evil would have nothing left
          to exist. This is why Augustine can say that God made everything, and yet did not make evil.
        </p>
      </Definition>

      <Definition title="the free will defence">
        <p>
          Moral evil, or sin, Augustine traces to the will. A free will can love things in the right order, or turn from
          the highest good to lower ones. The choice is its own: asked what caused an evil will, Augustine says it has no
          efficient cause but only a deficient one, since it is a failure rather than an achievement. Natural evils, such
          as suffering and death, he treats largely as the consequences or just penalties of the first sin.
        </p>
      </Definition>

      <Example title="the stolen pears">
        <p>
          In Book Two of the Confessions, Augustine recalls stealing pears with friends as a boy. He was not hungry, and
          threw most of them to the pigs. What he loved, he says, was the theft itself, the doing of what was forbidden.
          The pears were good; the act was evil because it loved the wrong thing, and the company of friends made it
          easier. The story shows his view at work: a disordered love, not an evil object.
        </p>
      </Example>

      <Remark title="assessment">
        <p>
          The privation theory answers the question of whether God created evil, but critics say it renames rather than
          removes the problem: the lack of good still needs explaining, and suffering does not feel like an absence. The
          free will defence remains the most discussed theistic answer to the problem of evil, and Alvin Plantinga gave it
          a careful modern form. Its limits are natural evil, which Augustine&rsquo;s account ties to a fall that many
          today do not accept, and the question of how freedom fits with God&rsquo;s foreknowledge, which Augustine also
          addressed and which Boethius takes up next.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "privation",
      rung: "check",
      prompt: <p>According to the privation theory, what is evil?</p>,
      answer: {
        kind: "choice",
        options: [
          "A substance equal in power to good.",
          "The lack or corruption of a good that ought to be there.",
          "An illusion with no effects.",
          "Whatever causes pain.",
        ],
        correct: [1],
      },
    },
    {
      key: "manichee",
      rung: "check",
      prompt: <p>What did the Manichees teach about evil?</p>,
      answer: {
        kind: "choice",
        options: [
          "That evil does not exist.",
          "That good and evil are two real, opposed powers.",
          "That evil is a lack of good.",
          "That evil comes only from free will.",
        ],
        correct: [1],
      },
    },
    {
      key: "blind",
      rung: "apply",
      prompt: <p>Which of these fits the privation theory best? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "Blindness is the absence of sight in an eye that should see.",
          "Disease is a separate evil substance invading the body.",
          "Cowardice is a lack of the courage a person ought to have.",
          "Darkness is a dark substance that fills a room.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "pears",
      rung: "apply",
      prompt: <p>Why does Augustine count the theft of the pears as evil, though the pears themselves were good?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because pears are forbidden food.",
          "Because the evil lay in the disordered love, wanting the theft itself, not in the object.",
          "Because the pears were rotten.",
          "Because he was caught.",
        ],
        correct: [1],
      },
    },
    {
      key: "hands",
      rung: "apply",
      prompt: <p>What point does Augustine make with his comparison between free will and hands?</p>,
      answer: {
        kind: "choice",
        options: [
          "That hands are more important than will.",
          "That something which can be misused may still be a great good, whose absence would be a loss.",
          "That free will is physical.",
          "That God should have made us without hands.",
        ],
        correct: [1],
      },
    },
    {
      key: "assess",
      rung: "prove",
      prompt: (
        <p>
          Does the privation theory solve the problem of evil, or only restate it? Give an argument for your answer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains what the privation theory claims and what it is meant to show: that God did not create evil.",
          "Argues for a view, for example that the lack of good still needs explaining, or that the theory does answer the question it was meant to.",
        ],
      },
    },
    {
      key: "always",
      rung: "stretch",
      prompt: (
        <p>
          Could God have created free beings who always in fact choose well? Consider what this would mean for
          Augustine&rsquo;s free will defence.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the challenge: if it is possible for a free being to choose well every time, an all-powerful God could have created such beings.",
          "Considers a response, such as that God cannot determine free choices, or Plantinga's idea that it may not be up to God what free beings would do, and reaches a view.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Augustine's question about where evil comes from, the privation theory, the free will defence, and one serious objection to his answer.",

  glimpse: (
    <p>
      The next lesson turns to Boethius, writing in prison, who asks how God can foreknow our choices if they are free.
      The question of foreknowledge returns in the Philosophy of Religion course.
    </p>
  ),
};
