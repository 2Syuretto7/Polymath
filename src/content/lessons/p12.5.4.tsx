import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["first-order representationalism", "higher-order thought", "higher-order perception"];
const CASES = ["seeing a red rose", "blindsight", "the absent-minded driver", "a dog or an infant", "a higher-order thought with no pain"];
const V: CaseVerdict[][] = [
  [
    { ok: true, why: "The state represents red and is poised to guide belief and action, so it is conscious." },
    { ok: true, why: "Michael Tye says blindsight states are not poised for use by belief and choice, so they are not conscious." },
    { ok: false, why: "The perceptions guide the driving, so the theory seems to count them conscious, though the driver was unaware of the road. A reply is that the driver was conscious but did not remember." },
    { ok: true, why: "Consciousness needs only first-order representation, which animals and infants clearly have." },
    { ok: true, why: "There is no first-order pain, so there is nothing conscious to explain. The verdict is clean." },
  ],
  [
    { ok: true, why: "You are in a state of seeing red, and you think that you are in it. The thought makes the seeing conscious." },
    { ok: true, why: "No higher-order thought accompanies the visual states, so they are unconscious, as the patient reports." },
    { ok: true, why: "The road perceptions lack higher-order thoughts, which explains why the driver was unaware of them." },
    { ok: false, why: "Higher-order thoughts need concepts of mental states, which a dog or an infant may lack. Peter Carruthers accepted that they may not be conscious; most find this hard to believe." },
    { ok: false, why: "David Rosenthal says it would seem to you that you are in pain, so there is a conscious pain with no pain underneath. Critics find this incoherent." },
  ],
  [
    { ok: true, why: "An inner sense monitors the visual state, as outer senses monitor the rose." },
    { ok: true, why: "The inner monitor does not scan these visual states, so they are unconscious." },
    { ok: true, why: "The inner monitor was not attending to the road, as David Armstrong, who introduced the case, suggested." },
    { ok: true, why: "Monitoring need not involve concepts, so simpler creatures can qualify, though no organ of inner sense has been found." },
    { ok: false, why: "A misfiring monitor could represent a pain that is absent, which raises the same puzzle as for higher-order thought." },
  ],
];

export const lesson: LessonContent = {
  id: "p12.5.4",
  minutes: 75,
  links: {
    revisits: ["p12.5.1", "p12.3.1", "p12.5.3"],
    foreshadows: ["p12.5.5", "p12.6.1", "p12.7.3"],
  },

  puzzle: (
    <>
      <p>
        You have driven a familiar road while lost in thought and arrived with no memory of the journey. You must have seen the
        traffic, since you stopped at the signals. Were those perceptions conscious? If not, what was missing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test three theories of consciousness against hard cases. Click a cell to see the theory&rsquo;s verdict.</p>
      <CaseMatrixViz theories={THEORIES} cases={CASES} verdicts={V} prompt="Does the theory give a plausible verdict?" caption="The verdicts are contested, so ask whether you agree with each one. No theory handles every case easily." />
    </>
  ),

  theory: (
    <>
      <Definition title="higher-order theories">
        <p>
          A mental state is conscious when its subject is suitably aware of being in it. On the <strong>higher-order
          thought</strong> theory of David Rosenthal, the awareness is a thought, not based on inference, that one is in the
          state. On <strong>higher-order perception</strong> or inner sense theories, of Armstrong and William Lycan, it is a
          quasi-perceptual monitoring of the state.
        </p>
      </Definition>

      <Example title="unconscious mental states">
        <p>
          The theories start from the fact that many mental states are unconscious: blindsight patients respond to objects they
          say they cannot see, and subliminal stimuli affect choices. What distinguishes conscious states is then not what they
          represent but whether we are aware of them. This promises a reductive, functional explanation of consciousness.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Higher-order thoughts seem too sophisticated for animals and infants. If a higher-order state can misrepresent, it is
          unclear whether the conscious experience matches the first-order state or the higher-order one. First-order
          representationalists, such as Fred Dretske and Michael Tye, reply that a state is conscious when it represents the
          world in the right way for the creature to use, with no awareness of the state needed.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>According to higher-order theories, what makes a mental state conscious?</p>,
      answer: {
        kind: "choice",
        options: [
          "Being caused by the senses.",
          "Being the object of a suitable higher-order representation of it.",
          "Being expressed in language.",
          "Being non-physical.",
        ],
        correct: [1],
      },
    },
    {
      key: "who",
      rung: "check",
      prompt: <p>Who is the main defender of the higher-order thought theory?</p>,
      answer: { kind: "choice", options: ["David Rosenthal", "Thomas Nagel", "Frank Jackson", "John Searle"], correct: [0] },
    },
    {
      key: "blind",
      rung: "apply",
      prompt: <p>How does the higher-order thought theory explain blindsight?</p>,
      answer: {
        kind: "choice",
        options: [
          "The visual states are conscious but forgotten.",
          "The visual states are not accompanied by higher-order thoughts, so they are unconscious.",
          "The patient lacks visual states.",
          "The patient is lying.",
        ],
        correct: [1],
      },
    },
    {
      key: "animals",
      rung: "apply",
      prompt: <p>Why are animals a problem for the higher-order thought theory?</p>,
      answer: {
        kind: "choice",
        options: [
          "They have no first-order states.",
          "They may lack the concepts of mental states that higher-order thoughts require.",
          "They do not perceive.",
          "They are physical.",
        ],
        correct: [1],
      },
    },
    {
      key: "empty",
      rung: "apply",
      prompt: <p>What is the problem of empty higher-order thoughts?</p>,
      answer: {
        kind: "choice",
        options: [
          "Some people never think about their states.",
          "A higher-order thought could represent a pain that does not exist, and it is unclear whether a pain is then conscious.",
          "Higher-order thoughts are always true.",
          "Thoughts have no content.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Was the absent-minded driver&rsquo;s perception of the road conscious? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes the case.",
          "Compares the higher-order and first-order verdicts.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Do higher-order theories answer the hard problem, or only an easy problem about self-monitoring?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that self-monitoring is a function.",
          "Asks why monitoring a state should make it feel like anything.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the higher-order thought and higher-order perception theories of consciousness, how they handle blindsight and the absent-minded driver, and the objections from animals and empty higher-order states.",

  glimpse: (
    <p>
      The next lesson turns to illusionism, which says phenomenal consciousness, as we conceive it, does not exist at all.
      Questions about self-monitoring return when we ask whether artificial systems could be conscious.
    </p>
  ),
};
