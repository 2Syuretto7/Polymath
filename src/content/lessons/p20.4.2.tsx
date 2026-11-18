import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RopeSnakeViz } from "@/components/viz/RopeSnakeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.4.2",
  minutes: 90,
  links: {
    revisits: ["p20.4.1", "p20.1.2", "p20.3.1"],
    foreshadows: ["p20.4.3", "p20.4.4", "p20.7.2"],
  },

  puzzle: (
    <>
      <p>
        In a dream, you meet people, fear dangers and make plans, and while it lasts it is entirely real to you. On waking,
        none of it is destroyed; it simply turns out never to have been what it seemed. Could the waking world be like that,
        relative to something more real?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the classic example, from fear at dusk to the analogy.</p>
      <RopeSnakeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="non-duality">
        <p>
          <strong>Advaita</strong> means non-duality. For Śaṅkara (eighth century CE), brahman, pure undifferentiated
          consciousness and being, is the only reality, and the self (ātman) is identical with it. &ldquo;Brahman is real, the
          world is false, the self is nothing but brahman&rdquo;, as a later summary puts it. The great sayings of the
          Upaniṣads, such as &ldquo;You are that&rdquo;, are read as strict identity.
        </p>
      </Definition>

      <Example title="superimposition and māyā">
        <p>
          The appearance of many things, and of many individual selves, arises from <strong>avidyā</strong>, ignorance, which
          superimposes on brahman features that do not belong to it, as a snake is superimposed on a rope. The world is{" "}
          <strong>māyā</strong>: not nothing, since it appears and works, but not ultimately real, since knowledge sublates
          it. It is &ldquo;indescribable&rdquo; as either real or unreal.
        </p>
      </Example>

      <Definition title="levels of reality">
        <p>
          Later Advaitins distinguish the <strong>ultimate</strong> (pāramārthika), brahman alone; the{" "}
          <strong>conventional</strong> or empirical (vyāvahārika), the shared world of everyday life and science, in which
          causes, duties and a personal God are perfectly real; and the <strong>illusory</strong> (prātibhāsika), private errors
          like the rope-snake, sublated even within ordinary experience.
        </p>
      </Definition>

      <Remark title="liberation and objections">
        <p>
          Liberation is not produced by action but is the removal of ignorance by knowledge: one realises one has always been
          brahman, and can be liberated while still alive (jīvanmukti). Critics pressed questions that later Vedāntins argued
          about for centuries. Whose is the ignorance, if only brahman exists? How can pure consciousness be ignorant? Rāmānuja
          and Madhva built rival Vedāntas from these objections.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "advaita",
      rung: "check",
      prompt: <p>What does Advaita claim about the self?</p>,
      answer: { kind: "choice", options: ["It is identical with brahman", "It is a part of brahman", "It is different from brahman", "It does not exist"], correct: [0] },
    },
    {
      key: "maya",
      rung: "check",
      prompt: <p>What is the status of the world, for Śaṅkara?</p>,
      answer: {
        kind: "choice",
        options: ["Empirically real but not ultimately real: an appearance on brahman", "Completely unreal, like a square circle", "The only reality", "A creation of the individual mind"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s analogy, what does the rope stand for?</p>,
      answer: { kind: "choice", options: ["Brahman", "The world", "Ignorance", "The individual self"], correct: [0] },
    },
    {
      key: "levels",
      rung: "apply",
      prompt: <p>At which level is a dream object real?</p>,
      answer: { kind: "choice", options: ["The illusory (prātibhāsika)", "The ultimate (pāramārthika)", "The conventional (vyāvahārika)", "None"], correct: [0] },
    },
    {
      key: "jivan",
      rung: "apply",
      prompt: <p>What is jīvanmukti?</p>,
      answer: { kind: "choice", options: ["Liberation while still alive", "Rebirth as a god", "Death without rebirth", "Ritual purity"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the rope-snake analogy a good model of the relation between brahman and the world? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what the analogy captures, such as appearance without real change and removal by knowledge.",
          "Notes a disanalogy, such as that the world is shared and stable, or whose ignorance it is.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If the world is only conventionally real, do ethics and duties still matter? How would an Advaitin answer?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that at the conventional level duties are fully binding for one not yet liberated.",
          "Considers whether the ultimate view undermines motivation, or argues it does not.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If brahman alone is real, what becomes of devotion to a personal God and of the many selves who seek liberation?
        Rāmānuja, in the eleventh century, accepted that all is brahman, but held that brahman is qualified by real selves and
        a real world, as a soul is by its body.
      </p>
      <p>
        Next, Rāmānuja&rsquo;s Viśiṣṭādvaita, qualified non-dualism: his seven objections to Advaita&rsquo;s ignorance, the
        relation of body and soul, and why the path of devotion becomes central.
      </p>
    </>
  ),
};
