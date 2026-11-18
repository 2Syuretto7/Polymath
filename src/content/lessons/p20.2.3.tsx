import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PadarthaViz } from "@/components/viz/PadarthaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.2.3",
  minutes: 80,
  links: {
    revisits: ["p20.2.2", "p20.1.4", "p0.4.3"],
    foreshadows: ["p20.2.4", "p20.7.1", "p20.5.4"],
  },

  puzzle: (
    <>
      <p>
        Look at a blue lotus drifting on a pond. You see a thing, its colour, its movement, that it is a lotus, and that
        there is no fish under it. Are these all real, and are they the same kind of real? An ontology tries to say what
        kinds of things there are.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a category and find it in the scene.</p>
      <PadarthaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="padārtha">
        <p>
          A <strong>padārtha</strong>, literally &ldquo;the meaning of a word&rdquo;, is a category of what can be known and
          named. The Vaiśeṣika Sūtra of Kaṇāda listed six; later authors added a seventh. The guiding idea is that language and
          knowledge latch onto real structure: to every true cognition corresponds something real.
        </p>
      </Definition>

      <Example title="the seven categories">
        <p>
          <strong>Substance</strong> (dravya), of nine kinds: earth, water, fire, air, ether, time, space, self and mind.{" "}
          <strong>Quality</strong> (guṇa), such as colour, number and pleasure. <strong>Motion</strong> (karma).{" "}
          <strong>Universal</strong> (sāmānya), such as cowness. <strong>Particularity</strong> (viśeṣa), which individuates
          eternal things like atoms. <strong>Inherence</strong> (samavāya), the relation tying qualities to substances and
          universals to their instances. <strong>Absence</strong> (abhāva), added by Udayana and others.
        </p>
      </Example>

      <Definition title="realism about universals and relations">
        <p>
          Vaiśeṣika is realist: universals are real, eternal and perceived along with their instances; inherence is a real
          relation, not a fiction of thought. Buddhists, who held that only momentary particulars are real, attacked both. If
          inherence relates a quality to a substance, what relates inherence to them? The regress was pressed hard, and Nyāya
          answered that inherence is self-linking.
        </p>
      </Definition>

      <Remark title="comparisons">
        <p>
          The scheme invites comparison with Aristotle&rsquo;s categories: substance, quality, and relation appear in both.
          Vaiśeṣika&rsquo;s treatment of absence as a real, knowable category has no Aristotelian counterpart, and it became
          central to the later Navya-Nyāya logic, which analyses negation and absence with great precision.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pad",
      rung: "check",
      prompt: <p>What is a padārtha?</p>,
      answer: { kind: "choice", options: ["A category of what can be known and named", "A kind of inference", "A ritual act", "A sacred text"], correct: [0] },
    },
    {
      key: "inh",
      rung: "check",
      prompt: <p>Which category is the relation between a lotus and its blue colour?</p>,
      answer: { kind: "choice", options: ["Inherence (samavāya)", "Motion (karma)", "Particularity (viśeṣa)", "Absence (abhāva)"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>How many categories does the visualisation list?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "visesa",
      rung: "apply",
      prompt: <p>Why did Vaiśeṣika need particularity (viśeṣa)?</p>,
      answer: {
        kind: "choice",
        options: ["To distinguish eternal things, such as atoms, that share all their qualities", "To explain motion", "To name colours", "To count substances"],
        correct: [0],
      },
    },
    {
      key: "subst",
      rung: "apply",
      prompt: <p>Which is not one of the nine substances?</p>,
      answer: { kind: "choice", options: ["Colour", "Earth", "Self", "Time"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Are absences real? Argue briefly, using the case of seeing that there is no pot on the floor.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Vaiśeṣika view that absences are real because they are known.",
          "Considers an objection, such as that only the bare floor is perceived, or a reply to it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is it a good principle that every true cognition has a real counterpart in the world?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says what the principle explains, such as the success of language and knowledge.",
          "Gives a problem, such as true negative or general statements, or the risk of a crowded ontology.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Among the substances, earth, water, fire and air come in eternal, partless units. Vaiśeṣika is one of the oldest
        atomisms in the world, developed independently of the Greeks and with its own arguments for why division must stop.
      </p>
      <p>
        Next, atomism: why there must be partless atoms, how dyads and triads build up visible things, the role of unseen
        force (adṛṣṭa) in setting atoms moving, and the Buddhist and Vedāntin objections to atoms with no size.
      </p>
    </>
  ),
};
