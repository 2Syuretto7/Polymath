import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { EvilViz } from "@/components/viz/EvilViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.5.3",
  minutes: 75,
  links: {
    revisits: ["p0.4.4", "p1.3.2"],
    foreshadows: ["p7.5.6", "p23.3.1", "p23.3.2", "p23.3.3"],
  },

  puzzle: (
    <>
      <Quote source={<>David Hume, <cite>Dialogues Concerning Natural Religion</cite> (1779), part X, where Philo attributes the questions to Epicurus</>}>
        <p>
          Is he willing to prevent evil, but not able? then is he impotent. Is he able, but not willing? then is he malevolent.
          Is he both able and willing? whence then is evil?
        </p>
      </Quote>
      <p>
        A child dies of a painful disease. An earthquake buries a town. If there is a God who could prevent such things, knows
        about them, and cares, why do they happen? This is the oldest and most powerful argument against the existence of God.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The puzzle can be put as four claims that seem impossible to hold together: God is all-powerful, God is all-knowing,
        God is wholly good, and evil exists. Believers in God want to keep all four. The question is whether they can, and at
        what cost.
      </p>
      <p>
        Below, try each classic response. Each replaces the third claim with a more careful one, adding a reason a good God
        might permit evil. Then look at the hard case each still faces.
      </p>
      <EvilViz />
    </>
  ),

  theory: (
    <>
      <Definition title="two problems of evil">
        <p>
          The <strong>logical problem</strong> claims that God and evil are strictly inconsistent: they cannot both exist. J.
          L. Mackie pressed this in &ldquo;Evil and Omnipotence&rdquo; (1955). The <strong>evidential problem</strong> claims
          only that the evil we observe makes God&rsquo;s existence unlikely. William Rowe (1979) imagined a fawn trapped in a
          forest fire, burned and dying for days, with no one ever knowing. What greater good could that serve?
        </p>
      </Definition>

      <Definition title="defence and theodicy">
        <p>
          A <strong>defence</strong> aims only to show that God and evil are consistent, by describing a reason God{" "}
          <em>might</em> have. A <strong>theodicy</strong> claims to give God&rsquo;s actual reasons. Answering the logical
          problem needs only a defence; the evidential problem asks for more.
        </p>
      </Definition>

      <Example title="the free will defence">
        <p>
          Augustine argued that evil comes from the misuse of free will, not from God. Alvin Plantinga, in{" "}
          <cite>God, Freedom, and Evil</cite> (1974), gave this a rigorous form: a world with free creatures who do much good
          is better than a world without freedom, and even an all-powerful God cannot make creatures who are both truly free
          and guaranteed never to choose wrongly. Most philosophers now agree that this defeats the logical problem, at least
          for the evil humans do. Natural evils such as earthquakes remain harder.
        </p>
      </Example>

      <Example title="soul-making">
        <p>
          John Hick, in <cite>Evil and the God of Love</cite> (1966), developed an idea from the early Christian writer
          Irenaeus: the world is not meant to be a paradise but a place where character is formed. Courage needs danger;
          compassion needs suffering; patience needs hardship. The objection: much suffering destroys character instead of
          building it, and much, like Rowe&rsquo;s fawn, builds no one&rsquo;s.
        </p>
      </Example>

      <Remark title="karma as a theodicy">
        <p>
          Several Indian traditions explain suffering through <em>karma</em>: suffering is the fruit of actions in this or
          earlier lives. In his commentary on the <cite>Brahma Sūtra</cite>, Śaṅkara argued that God is not cruel or partial in
          creating a world of unequal fortunes, since God distributes according to beings&rsquo; own past deeds, as rain falls
          alike on all seeds while each grows according to its kind. Critics ask whether this only pushes the problem back, and
          how a newborn&rsquo;s suffering can be deserved.
        </p>
      </Remark>

      <Remark title="sceptical theism">
        <p>
          A different reply denies that we are in a position to judge. If God exists, God&rsquo;s purposes would be as far
          beyond ours as an adult&rsquo;s are beyond an infant&rsquo;s, so our failure to see a reason for the fawn&rsquo;s
          suffering is weak evidence that there is none. The cost is that the same humility seems to undercut confident claims
          about God&rsquo;s purposes in other places too.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "four",
      rung: "check",
      prompt: <p>Which claim is <em>not</em> one of the four that make up the logical problem of evil?</p>,
      answer: { kind: "choice", options: ["God is all-powerful.", "God is wholly good.", "Evil exists.", "The universe began to exist."], correct: [3] },
    },
    {
      key: "evidential",
      rung: "check",
      prompt: <p>Rowe&rsquo;s fawn is an example used in&hellip;</p>,
      answer: { kind: "choice", options: ["the logical problem of evil", "the evidential problem of evil", "the design argument", "the cosmological argument"], correct: [1] },
    },
    {
      key: "defence",
      rung: "apply",
      prompt: <p>What is the difference between a defence and a theodicy?</p>,
      answer: {
        kind: "choice",
        options: [
          "A defence argues God does not exist; a theodicy argues God does.",
          "A defence shows only that God and evil are consistent; a theodicy claims to give God's actual reasons.",
          "There is no difference.",
          "A defence is about natural evil only.",
        ],
        correct: [1],
      },
    },
    {
      key: "natural",
      rung: "apply",
      prompt: <p>Why is natural evil harder for the free will defence than moral evil?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because natural evil is less painful.",
          "Because earthquakes and diseases are not caused by anyone's free choices.",
          "Because natural evil does not exist.",
          "Because God does not know about natural evil.",
        ],
        correct: [1],
      },
    },
    {
      key: "hick",
      rung: "apply",
      prompt: <p>Hick&rsquo;s soul-making theodicy says suffering exists in order to&hellip;</p>,
      answer: {
        kind: "choice",
        options: ["punish sin", "build character such as courage and compassion", "test God's power", "show that God does not care"],
        correct: [1],
      },
    },
    {
      key: "free-will",
      rung: "prove",
      prompt: (
        <p>
          Explain how the free will defence aims to show that the four claims are consistent. Then raise the strongest
          objection you can, and say whether the defence survives it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that a world with free creatures may be better than one without, even if they sometimes do wrong.",
          "Explains why even an all-powerful God cannot guarantee that free creatures never choose wrongly.",
          "Raises an objection, such as natural evil, or why God does not intervene in the worst cases.",
          "Gives a reasoned verdict.",
        ],
      },
    },
    {
      key: "fawn",
      rung: "stretch",
      prompt: (
        <p>
          Does Rowe&rsquo;s fawn make God&rsquo;s existence unlikely? Weigh the evidential argument against the sceptical theist
          reply, and reach your own view.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States Rowe's evidential argument clearly.",
          "States the sceptical theist reply fairly.",
          "Considers what the reply costs, for instance for arguments from design or for knowledge of God's goodness.",
          "Reaches a reasoned conclusion.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between the logical and the evidential problem of evil, and the best reply you know to each.",

  glimpse: (
    <p>
      This completes the chapter on God. The final chapter of this course turns to value and meaning: why be moral, what makes
      actions right, and whether life has a meaning. The problem of evil is examined in depth in Philosophy of Religion, in
      lessons on the logical problem, the evidential problem and theodicies.
    </p>
  ),
};
