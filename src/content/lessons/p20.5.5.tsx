import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TetralemmaViz } from "@/components/viz/TetralemmaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.5.5",
  minutes: 90,
  links: {
    revisits: ["p20.5.4", "p20.5.3", "p20.2.2"],
    foreshadows: ["p20.5.6", "p20.6.2", "p20.7.6"],
  },

  puzzle: (
    <>
      <p>
        A seed becomes a sprout. Is the sprout already in the seed? Then nothing new arises. Is it wholly other than the seed?
        Then why does a mango seed not give a neem tree? Is it both, or neither? Each answer seems to fail. Perhaps the mistake
        lies in the question, in thinking of seed and sprout as things with fixed natures of their own.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Examine each of the four positions on a question, as Nāgārjuna does.</p>
      <TetralemmaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="emptiness">
        <p>
          For Nāgārjuna (around the second century CE), founder of the <strong>Madhyamaka</strong>, or Middle Way, school,
          everything is <strong>empty</strong> (śūnya) of <strong>own-nature</strong> (svabhāva): nothing exists from its own
          side, independently of causes, parts and conceptual designation. Emptiness is not nothingness. It is dependent
          origination seen rightly: &ldquo;Whatever is dependently arisen, that we call emptiness; it is a dependent
          designation, and it is the middle way&rdquo; (<em>Fundamental Verses on the Middle Way</em> 24.18).
        </p>
      </Definition>

      <Example title="the method">
        <p>
          Nāgārjuna argues by <strong>prasaṅga</strong>, drawing out unwelcome consequences of an opponent&rsquo;s own claims,
          usually across the four corners of the tetralemma. If a thing had own-nature, it could not depend on causes, and
          could not change; but things do arise and change. So the Abhidharma&rsquo;s dharmas, motion, time, causation and the
          self all fail to have own-nature.
        </p>
      </Example>

      <Definition title="the two truths">
        <p>
          The <strong>conventional</strong> truth (saṃvṛti) is the world of everyday practice and language, in which there are
          seeds, sprouts and persons. The <strong>ultimate</strong> truth (paramārtha) is that all of these are empty. The
          ultimate cannot be taught without relying on the conventional (24.10), and emptiness is itself empty: it is not a
          hidden absolute behind the world.
        </p>
      </Definition>

      <Remark title="nihilism and theses">
        <p>
          Opponents charged that emptiness destroys the four noble truths, the path and the Buddha. Nāgārjuna replied that the
          reverse is so: if things had own-nature, suffering could neither arise nor cease, and no path could change anything.
          In the <em>Dispeller of Disputes</em> he answered the Nyāya objection that his own argument must be empty and so
          powerless: &ldquo;I have no thesis&rdquo;. Like a conjured person stopping another illusion, an empty argument can
          still do its work.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "empty",
      rung: "check",
      prompt: <p>What are things empty of, according to Nāgārjuna?</p>,
      answer: { kind: "choice", options: ["Own-nature (svabhāva)", "Existence in every sense", "Qualities", "Matter"], correct: [0] },
    },
    {
      key: "do",
      rung: "check",
      prompt: <p>How does Nāgārjuna relate emptiness to dependent origination?</p>,
      answer: { kind: "choice", options: ["They are the same: what arises dependently is empty", "They are opposites", "Emptiness causes dependent origination", "They are unrelated"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the four positions on how things arise does Nāgārjuna accept?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>Which statement belongs to conventional truth?</p>,
      answer: { kind: "choice", options: ["The sprout grew from the seed", "All things are empty of own-nature", "Emptiness is empty", "Nothing has a nature of its own"], correct: [0] },
    },
    {
      key: "method",
      rung: "apply",
      prompt: <p>What is a prasaṅga argument?</p>,
      answer: {
        kind: "choice",
        options: ["One that draws unwelcome consequences from the opponent’s own claims", "An inference from perception", "An appeal to scripture", "A proof by induction"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the doctrine of emptiness a form of nihilism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the charge, such as that if nothing has a nature, nothing really exists or matters.",
          "States Nāgārjuna’s reply, such as that only empty things can arise, change and be freed.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can someone argue for a position while claiming to have no thesis? Is Nāgārjuna&rsquo;s stance coherent?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains what having no thesis might mean, such as only refuting others on their own terms.",
          "Considers whether the claim that all is empty is itself a thesis.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Madhyamaka emptied everything, mind included. Two centuries later, the brothers Asaṅga and Vasubandhu argued that
        something must be granted conventional reality as the basis of experience, and that it is mind: what we take as an
        external world is the flow of consciousness itself.
      </p>
      <p>
        Next, Yogācāra: Vasubandhu&rsquo;s dream argument against external objects, the storehouse consciousness and its
        seeds, and the three natures.
      </p>
    </>
  ),
};
