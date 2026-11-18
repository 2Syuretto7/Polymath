import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TraditionsViz } from "@/components/viz/TraditionsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p23.5.2",
  minutes: 90,
  links: {
    revisits: ["p23.5.1", "p7.5.4", "p23.1.3"],
    foreshadows: ["p24.4.2", "p24.1.1", "p25.2.1"],
  },

  puzzle: (
    <>
      <p>
        The arguments of this course, ontological, cosmological, from evil, mostly concern a personal God who created the
        world. Yet the Buddha, the Jain Tīrthaṅkaras and the authors of the Sāṃkhya-kārikā argued that there is no creator,
        and still taught paths to liberation. What is religion without God, and how do these traditions argue?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Compare six traditions on four questions: the ultimate, a creator, the self, and liberation.</p>
      <TraditionsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Buddhist arguments against a creator">
        <p>
          Buddhist philosophers argued against Īśvara as creator. Vasubandhu and later Dharmakīrti asked: if a permanent God
          caused the world, the world would arise all at once, since a permanent cause does not change; but things arise in
          succession, depending on changing conditions. And a God who created suffering beings would be either not wholly good
          or not free. These parallel, and predate, many Western arguments.
        </p>
      </Definition>

      <Definition title="no-self and the self">
        <p>
          The Buddhist doctrine of anattā denies a permanent self behind experience, much as Hume found only a bundle of
          perceptions. Advaita Vedānta holds the opposite: the self, ātman, is the one reality, identical with Brahman. Jainism
          and Sāṃkhya hold that there are many eternal selves, each pure consciousness, entangled with matter. The question of
          the self, not of God, is central in Indian philosophy of religion.
        </p>
      </Definition>

      <Example title="Nyāya’s argument for God">
        <p>
          Not every Indian school was non-theistic. The Nyāya philosopher Udayana (tenth century) gave an argument like the
          design argument: the earth is an effect, since it has parts, and every effect has an intelligent maker, as a pot has
          a potter. Buddhist and Mīmāṃsā critics replied that we have never observed a maker of mountains, so the inference
          lacks the needed pattern of examples, a criticism close to Hume&rsquo;s.
        </p>
      </Example>

      <Remark title="what transfers">
        <p>
          Some questions of the course carry over in new forms. The problem of evil becomes the question of why there is
          suffering (duḥkha), answered by karma rather than theodicy. Religious experience becomes meditative insight, whose
          reliability is debated within the traditions. And the question of whether the ultimate is personal divides schools
          within Hinduism itself, between Advaita and the theistic Vedānta of Rāmānuja and Madhva.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "anatta",
      rung: "check",
      prompt: <p>Which tradition holds the doctrine of anattā, no permanent self?</p>,
      answer: { kind: "choice", options: ["Buddhism", "Advaita Vedānta", "Jainism", "Sāṃkhya"], correct: [0] },
    },
    {
      key: "advaita",
      rung: "check",
      prompt: <p>What does Advaita Vedānta say about the self?</p>,
      answer: { kind: "choice", options: ["The true self, ātman, is identical with Brahman", "There is no self", "There are many eternal selves", "The self is the body"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what does classical Sāṃkhya say about a creator God?</p>,
      answer: { kind: "choice", options: ["There is none: prakṛti evolves of itself", "Īśvara creates everything", "The Dao creates", "Brahman creates at the conventional level"], correct: [0] },
    },
    {
      key: "perm",
      rung: "apply",
      prompt: <p>What is the Buddhist argument from succession against a permanent creator?</p>,
      answer: { kind: "choice", options: ["A permanent, unchanging cause would produce its effects all at once, but things arise in succession", "The world has always existed", "God would be too powerful", "There are too many gods"], correct: [0] },
    },
    {
      key: "nyaya",
      rung: "apply",
      prompt: <p>Which Western argument does Udayana&rsquo;s inference most resemble?</p>,
      answer: { kind: "choice", options: ["The design argument", "The ontological argument", "Pascal’s wager", "The argument from religious experience"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is a tradition without a creator God, such as Theravāda Buddhism, a religion? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Offers a working account of what makes something a religion.",
          "Applies it to a non-theistic tradition, considering a feature such as liberation, practice or community.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Karma explains suffering as the result of past actions. Does it solve the problem of evil better than theodicies do, or does it face problems of its own?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States how karma explains suffering without a creator to blame.",
          "Considers a difficulty, such as infinite regress of past lives, or blaming victims.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        This completes the philosophy of religion: the concept of God, the arguments for and against, faith and reason, and
        the diversity of traditions, theistic and not.
      </p>
      <p>
        Next, aesthetics, which asks about beauty and art, and includes the Indian theory of rasa, the aesthetic emotion that
        Abhinavagupta compared to the bliss of realising Brahman.
      </p>
    </>
  ),
};
