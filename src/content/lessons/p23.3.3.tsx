import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TheodicyGridViz } from "@/components/viz/TheodicyGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p23.3.3",
  minutes: 90,
  links: {
    revisits: ["p23.3.2", "p23.3.1", "p1.3.3"],
    foreshadows: ["p23.4.1", "p23.4.3", "p23.5.1"],
  },

  puzzle: (
    <>
      <p>
        A defence says only that God might have a reason for permitting evil. Many believers want more: a reason that is
        plausibly God&rsquo;s actual one. Several have been offered. Does any single one explain murder, earthquakes, the
        suffering of animals over millions of years, and the torture of a child?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Test four theodicies against five kinds of evil. Click a cell to see why it handles that evil well, partly or
        weakly.
      </p>
      <TheodicyGridViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Augustinian theodicy">
        <p>
          For Augustine, evil is not a substance but a privation, a lack of good that ought to be there, as blindness is a lack
          of sight. God created everything good; evil entered through the free choices of angels and humans, who turned from a
          higher good to a lower one. Natural evil is the consequence of that fall. The theodicy explains moral evil well, but
          depends on a historical fall that modern biology makes hard to accept, since suffering and death long preceded us.
        </p>
      </Definition>

      <Definition title="the Irenaean or soul-making theodicy">
        <p>
          John Hick, following Irenaeus, held that humans are created immature, in God&rsquo;s image but not yet in his
          likeness, and the world is a &lsquo;vale of soul-making&rsquo;. Courage, compassion and trust can only be formed in
          a world with real dangers and real needs. A paradise without pain would be a poor school. Hick also stressed{" "}
          <strong>epistemic distance</strong>: God stays hidden so that our response is free.
        </p>
      </Definition>

      <Definition title="the natural law theodicy">
        <p>
          Richard Swinburne argued that free, responsible action requires a world of regular natural laws, so that we can
          learn the consequences of what we do. The same laws that make fire useful make it burn. On his view, natural evils
          also give us knowledge of how to cause and prevent harm, which responsible choice needs.
        </p>
      </Definition>

      <Example title="horrendous evils">
        <p>
          Marilyn McCord Adams argued that some evils, like a child&rsquo;s torture, are so horrendous that they cast doubt on
          whether the victim&rsquo;s life could be a good to them on the whole. No global good, such as freedom or soul-making,
          can justify sacrificing the victim to it. Only God&rsquo;s own goodness, experienced in intimacy with God, could{" "}
          <strong>defeat</strong> such evils within the victim&rsquo;s life, perhaps by making the suffering a point of
          identification with a God who suffered too.
        </p>
      </Example>

      <Remark title="protest">
        <p>
          In Dostoevsky&rsquo;s <em>The Brothers Karamazov</em>, Ivan does not deny God. He returns his ticket: no future harmony
          could be worth the tears of one tortured child. His challenge is moral rather than evidential. Some, like D. Z.
          Phillips, think theodicy itself is morally objectionable, since it treats suffering as a means to an end.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "priv",
      rung: "check",
      prompt: <p>What does it mean to call evil a privation?</p>,
      answer: { kind: "choice", options: ["It is a lack of a good that ought to be present, not a substance", "It is caused by poverty", "It is a substance created by God", "It is an illusion"], correct: [0] },
    },
    {
      key: "hick",
      rung: "check",
      prompt: <p>What is the central claim of Hick&rsquo;s soul-making theodicy?</p>,
      answer: { kind: "choice", options: ["A world with real hardship is needed to form mature moral and spiritual character", "Evil entered through a historical fall", "Evil is an illusion", "God does not know about evil"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the four theodicies are marked as handling animal suffering before humans existed well?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "swin",
      rung: "apply",
      prompt: <p>Which theodicy best explains why fire burns as well as warms?</p>,
      answer: { kind: "choice", options: ["The natural law theodicy", "The Augustinian theodicy", "Sceptical theism", "The ontological argument"], correct: [0] },
    },
    {
      key: "adams",
      rung: "apply",
      prompt: <p>Why does Marilyn Adams reject global justifications for horrendous evils?</p>,
      answer: { kind: "choice", options: ["They sacrifice the victim for a good the victim may not share", "They are too complicated", "They deny freedom", "They make God too powerful"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Can the soul-making theodicy explain the suffering of a young child who dies of a painful illness? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the soul-making idea that hardship forms character.",
          "Considers the difficulty that the child does not grow from it, and a possible reply such as an afterlife or effects on others.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is Ivan Karamazov&rsquo;s protest an argument against God&rsquo;s existence, or something else?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Ivan does not deny that God exists or that harmony will come.",
          "Treats the protest as a moral refusal, or as a challenge to theodicy itself.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Arguments for and against God have not settled the question. Perhaps belief should not rest on argument at all, or
        perhaps it is rational to believe for practical reasons, when the evidence is unclear.
      </p>
      <p>
        Next, faith and reason, starting with Pascal&rsquo;s wager: whether it can be rational to bet on God.
      </p>
    </>
  ),
};
