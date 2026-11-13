import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TwoClocksViz } from "@/components/viz/TwoClocksViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.2.4",
  minutes: 85,
  links: {
    revisits: ["p7.2.3", "p7.1.5", "p1.5.3"],
    foreshadows: ["p7.2.5", "p11.3.1", "p7.5.6"],
  },

  puzzle: (
    <>
      <p>
        On 1 November 1755 an earthquake, fire and tsunami destroyed Lisbon and killed tens of thousands of people, many of
        them at prayer on All Saints&rsquo; Day. Voltaire responded with a poem and then with Candide, whose Doctor Pangloss
        insists through every catastrophe that all is for the best in the best of all possible worlds. The target was
        Leibniz. Did Leibniz really hold that this is the best possible world, and is the view as foolish as Voltaire made it
        look?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Leibniz explained the agreement of mind and body with an image of two clocks that always show the same time. Compare
        the three hypotheses he considered.
      </p>
      <TwoClocksViz />
    </>
  ),

  theory: (
    <>
      <Definition title="pre-established harmony">
        <p>
          Monads have no windows, so no created substance acts on another. Yet my perceptions match what happens to my body,
          and my body moves as I will. Leibniz&rsquo;s explanation is the <strong>pre-established harmony</strong>: in creating
          the world, God chose substances whose inner developments, each following its own law, correspond perfectly at every
          moment. The soul follows the laws of final causes, of desires and purposes; the body follows the laws of efficient
          causes, of motion; and the two kingdoms agree.
        </p>
      </Definition>

      <Example title="choosing among possible worlds">
        <p>
          A <strong>possible world</strong> is a complete, consistent way things could have been. Infinitely many are
          possible, and God, being omniscient, knows them all, being good, wants the best, and being omnipotent, can create it.
          So the actual world is the best possible. &ldquo;Best&rdquo; does not mean containing no evil. It means the
          greatest variety of phenomena produced by the simplest laws, as a geometer prefers the construction that achieves
          most with least, and the greatest perfection of minds.
        </p>
      </Example>

      <Definition title="theodicy">
        <p>
          In the Theodicy of 1710 Leibniz defends God&rsquo;s justice. Evil is of three kinds: metaphysical evil, the
          limitation of any created thing; physical evil, suffering; and moral evil, sin. God does not will evils for their
          own sake, but permits them as inseparable from the best whole, much as a shadow sets off a painting or a dissonance
          enriches music. Removing any evil would change the whole world, which, since everything is connected, would make it
          worse overall.
        </p>
      </Definition>

      <Remark title="Voltaire and after">
        <p>
          Candide mocks a version of the view that explains every misfortune as locally for the best, which Leibniz did not
          hold: he claimed only that the whole is best, not that each part is good. Still, critics ask whether a world with
          the suffering of Lisbon could really be the best, whether there is a best world at all rather than an endless series
          of better ones, and whether God is then free, since a perfect being could not choose otherwise. Leibniz replied that
          God&rsquo;s choice is certain but not necessary: the alternatives remain possible in themselves.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "harmony",
      rung: "check",
      prompt: <p>What is the pre-established harmony?</p>,
      answer: {
        kind: "choice",
        options: [
          "God moving the body each time the soul wills.",
          "The agreement of all substances, created by God so that each unfolds by its own law in correspondence with the rest.",
          "Music played at creation.",
          "The influence of the body on the soul.",
        ],
        correct: [1],
      },
    },
    {
      key: "best",
      rung: "check",
      prompt: <p>For Leibniz, what makes a world best?</p>,
      answer: {
        kind: "choice",
        options: [
          "Containing no evil at all.",
          "The greatest variety and richness of phenomena from the simplest laws, and the greatest perfection of minds.",
          "Containing the most pleasure.",
          "Being the oldest world.",
        ],
        correct: [1],
      },
    },
    {
      key: "occasion",
      rung: "apply",
      prompt: <p>Why did Leibniz reject occasionalism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it denies God exists.",
          "Because it makes God intervene at every moment, a perpetual miracle unworthy of a perfect workman.",
          "Because it makes the body act on the soul.",
          "Because it is the same as his own view.",
        ],
        correct: [1],
      },
    },
    {
      key: "pangloss",
      rung: "apply",
      prompt: <p>What does Voltaire&rsquo;s Pangloss get wrong about Leibniz&rsquo;s view?</p>,
      answer: {
        kind: "choice",
        options: [
          "Nothing: Pangloss states it exactly.",
          "He treats each misfortune as itself for the best, while Leibniz claimed only that the whole world is the best possible, evils included.",
          "He denies that God exists.",
          "He thinks the world is the worst possible.",
        ],
        correct: [1],
      },
    },
    {
      key: "evils",
      rung: "apply",
      prompt: <p>Which three kinds of evil does Leibniz distinguish?</p>,
      answer: {
        kind: "choice",
        options: ["Metaphysical, physical and moral", "Natural, social and divine", "Small, large and infinite", "Past, present and future"],
        correct: [0],
      },
    },
    {
      key: "argument",
      rung: "prove",
      prompt: <p>Set out Leibniz&rsquo;s argument that this is the best of all possible worlds, and give one objection.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the argument from God's knowledge, goodness and power to the creation of the best possible world.",
          "Gives an objection, such as the extent of suffering, the possibility that there is no best world, or the threat to God's freedom.",
        ],
      },
    },
    {
      key: "freedom",
      rung: "stretch",
      prompt: (
        <p>
          If a perfect God must create the best world, was God free to do otherwise? Explain Leibniz&rsquo;s answer and say
          whether it works.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the worry that a perfect being could not choose a worse world, so the choice was necessary.",
          "Explains Leibniz's reply that the choice is certain or morally necessary but not absolutely necessary, since other worlds remain possible in themselves.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the pre-established harmony and the image of the two clocks, Leibniz's argument that this is the best possible world, what best means, and how Voltaire attacked the view.",

  glimpse: (
    <p>
      The next lesson examines the principle behind God&rsquo;s choice: nothing happens without a sufficient reason. Hume&rsquo;s
      Dialogues will take up the argument from evil again, and Metaphysics returns to possible worlds.
    </p>
  ),
};
