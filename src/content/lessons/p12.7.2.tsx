import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["classical cognitivism", "enactivism"];
const ITEMS: SortItem[] = [
  { text: "Perception builds a detailed inner model of the world.", cat: "classical cognitivism", why: "The classical view: the brain reconstructs the scene inside and then reasons about the model." },
  { text: "The world serves as its own best model.", cat: "enactivism", why: "Rodney Brooks’s slogan, taken up by enactivists: look again rather than store a copy." },
  { text: "Seeing is a skilled activity, like feeling a bottle by moving your hand over it.", cat: "enactivism", why: "Kevin O’Regan and Alva Noë’s sensorimotor theory: perception is mastery of how sensations change as you move." },
  { text: "The mind is software that could run on any hardware.", cat: "classical cognitivism", why: "The functionalist and computational picture treats the body as an input and output device." },
  { text: "Cognition arises from the living organism making sense of its world.", cat: "enactivism", why: "Varela, Thompson and Rosch tied mind to life itself, through the idea of autonomous, self-maintaining systems." },
  { text: "Thinking is manipulating symbols according to rules.", cat: "classical cognitivism", why: "The core of the computational theory of mind and the language of thought." },
  { text: "A baseball fielder catches a ball by running so its image moves steadily, not by computing its trajectory.", cat: "enactivism", why: "An example of skilled coupling with the environment replacing internal calculation." },
];

export const lesson: LessonContent = {
  id: "p12.7.2",
  minutes: 75,
  links: {
    revisits: ["p12.7.1", "p12.3.4", "p12.5.1"],
    foreshadows: ["p12.7.3", "p19.5.1", "p31.3.1"],
  },

  puzzle: (
    <>
      <p>
        Close your eyes and pick up a bottle. You feel the whole bottle, though at each moment your fingers touch only a few
        spots. Where is the experience of the whole bottle: in a model built in the brain, or in the skilled movement of your
        hand?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each claim by whether it belongs to the classical picture of the mind or to enactivism.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Classical cognitivism or enactivism?" />
    </>
  ),

  theory: (
    <>
      <Definition title="enactivism">
        <p>
          Francisco Varela, Evan Thompson and Eleanor Rosch, in <em>The Embodied Mind</em> (1991), argued that cognition is not
          the representation of a pre-given world by a pre-given mind but the <strong>enactment</strong> of a world through the
          history of an organism&rsquo;s actions. Mind is embodied, embedded in an environment, and continuous with life.
        </p>
      </Definition>

      <Example title="sensorimotor theory">
        <p>
          Kevin O&rsquo;Regan and Alva Noë (2001) held that seeing is a way of exploring the environment, guided by implicit
          knowledge of sensorimotor contingencies: how what you sense changes as you move. Change blindness, where people miss
          large changes to a scene, suggests we do not store detailed inner pictures. The world is available on demand.
        </p>
      </Example>

      <Remark title="radical enactivism">
        <p>
          Daniel Hutto and Erik Myin argue that basic minds, such as those of infants and many animals, have no content at all:
          they engage with the world without representing it. Content arrives only with language and social practices. This
          avoids the hard problem of content from the previous unit, but critics doubt it can explain planning, imagination or
          memory of absent things.
        </p>
      </Remark>

      <Remark title="relation to the extended mind">
        <p>
          Clark&rsquo;s extended mind keeps internal representations and functionalism but moves some of them outside the head.
          Enactivists reject the representational and functionalist framework itself, drawing on phenomenology, especially
          Merleau-Ponty.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does enactivism say cognition is?</p>,
      answer: {
        kind: "choice",
        options: [
          "Symbol manipulation in the brain.",
          "The enactment of a world through an organism’s activity, embodied and embedded.",
          "A non-physical substance.",
          "Behaviour alone.",
        ],
        correct: [1],
      },
    },
    {
      key: "book",
      rung: "check",
      prompt: <p>Which book launched enactivism in 1991?</p>,
      answer: { kind: "choice", options: ["The Embodied Mind", "The Concept of Mind", "Consciousness Explained", "Minds, Brains and Programs"], correct: [0] },
    },
    {
      key: "change",
      rung: "apply",
      prompt: <p>What does change blindness suggest, according to sensorimotor theorists?</p>,
      answer: {
        kind: "choice",
        options: [
          "That we do not store detailed inner pictures of the scene.",
          "That vision is unreliable in principle.",
          "That people are not conscious.",
          "That memory is perfect.",
        ],
        correct: [0],
      },
    },
    {
      key: "radical",
      rung: "apply",
      prompt: <p>What do radical enactivists say about basic minds?</p>,
      answer: {
        kind: "choice",
        options: [
          "They have rich content.",
          "They engage with the world without representational content.",
          "They do not exist.",
          "They are computers.",
        ],
        correct: [1],
      },
    },
    {
      key: "obj",
      rung: "apply",
      prompt: <p>Which capacity is hardest for a view without representations to explain?</p>,
      answer: {
        kind: "choice",
        options: ["Catching a ball", "Walking", "Planning a trip to a place you have never seen", "Grasping a cup"],
        correct: [2],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does seeing require an inner model of the world? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the classical and the sensorimotor views.",
          "Uses an example such as change blindness or imagination.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If enactivism is right, could a disembodied computer program ever have a mind?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Connects mind to life, body or sensorimotor engagement.",
          "Considers robots or embodied agents as a middle case.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what enactivism claims, the sensorimotor theory of perception with an example, radical enactivism, and how enactivism differs from the extended mind.",

  glimpse: (
    <p>
      The final lesson of the course asks whether today&rsquo;s artificial systems could have minds. Phenomenology, studied
      later, develops the ideas of embodiment that enactivism borrows.
    </p>
  ),
};
