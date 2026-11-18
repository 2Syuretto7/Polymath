import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FourYogasViz } from "@/components/viz/FourYogasViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.7.2",
  minutes: 80,
  links: {
    revisits: ["p20.4.2", "p20.3.3", "p20.1.2"],
    foreshadows: ["p20.7.3", "p20.7.4", "p20.7.6"],
  },

  puzzle: (
    <>
      <p>
        If, as Advaita says, the self of every person is brahman, then the world is in some sense an appearance. Why, then,
        build hospitals, run famine relief, or teach the poor? Does the claim that we are all one lead away from the world, or
        straight into it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a path and see which part of a person it trains.</p>
      <FourYogasViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Vivekananda">
        <p>
          Narendranath Datta (1863&ndash;1902), Swami Vivekananda, was a disciple of the Bengali mystic Ramakrishna. At the
          World&rsquo;s Parliament of Religions in Chicago in 1893 he opened with &ldquo;Sisters and brothers of
          America&rdquo; and presented Vedānta as a universal religion. In 1897 he founded the Ramakrishna Mission, devoted to
          education and relief work.
        </p>
      </Definition>

      <Example title="practical Vedānta">
        <p>
          From Ramakrishna he took the teaching to serve living beings as God. If the divine is in every person, then service
          to the hungry is worship, and neglect of them is a kind of impiety. He told audiences that religion that cannot wipe
          the widow&rsquo;s tears or feed the orphan was not worth the name.
        </p>
      </Example>

      <Definition title="the four yogas and many religions">
        <p>
          Vivekananda presented four paths to realisation: <strong>karma yoga</strong> (selfless work),{" "}
          <strong>bhakti yoga</strong> (devotion), <strong>jñāna yoga</strong> (knowledge) and <strong>rāja yoga</strong>{" "}
          (meditation, after Patañjali). Different religions, like different yogas, suit different people, and all lead to
          the same truth. Dualism, qualified non-dualism and Advaita are stages on one road, not rival creeds.
        </p>
      </Definition>

      <Remark title="assessment">
        <p>
          Vivekananda shaped how Hinduism is understood worldwide, and inspired Indian nationalists. Critics argue that he
          read the tradition selectively, giving Advaita a unity it never had, and that calling rāja yoga a &lsquo;science&rsquo;
          blurred experience and evidence. His claim that all religions agree also faces the fact that they disagree about
          what the truth is.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "chicago",
      rung: "check",
      prompt: <p>Where did Vivekananda make his famous address of 1893?</p>,
      answer: { kind: "choice", options: ["The World’s Parliament of Religions in Chicago", "The Indian National Congress", "Oxford University", "The Ramakrishna Mission in Calcutta"], correct: [0] },
    },
    {
      key: "service",
      rung: "check",
      prompt: <p>Why is service to others a form of worship in Vivekananda&rsquo;s practical Vedānta?</p>,
      answer: { kind: "choice", options: ["Because the divine is present in every being", "Because it earns merit for heaven", "Because the Vedas command charity", "Because the world is unreal"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which yoga trains the intellect?</p>,
      answer: { kind: "choice", options: ["Jñāna yoga", "Karma yoga", "Bhakti yoga", "Rāja yoga"], correct: [0] },
    },
    {
      key: "raja",
      rung: "apply",
      prompt: <p>Which classical text did Vivekananda follow for rāja yoga?</p>,
      answer: { kind: "choice", options: ["Patañjali’s Yoga Sūtras", "The Mīmāṃsā Sūtra", "Gaṅgeśa’s Tattvacintāmaṇi", "The Nyāya Sūtra"], correct: [0] },
    },
    {
      key: "stages",
      rung: "apply",
      prompt: <p>How did Vivekananda treat dualist and non-dualist Vedānta?</p>,
      answer: { kind: "choice", options: ["As stages on one road to the same truth", "As rival creeds, one of which is false", "As both mistaken", "As unrelated to religion"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Advaita&rsquo;s claim that we are all one support social service, or undermine it? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Vivekananda’s argument that the divine in each person makes service a form of worship.",
          "Raises an objection, such as that if the world is an appearance its suffering is not finally real.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can all religions be paths to the same truth when they make conflicting claims? Discuss.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the pluralist view, using an image such as rivers reaching one sea.",
          "Considers the problem of conflicting claims, and a possible reply, such as distinguishing practice from doctrine.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Vivekananda inherited Advaita&rsquo;s view that the world is in the end an appearance. A younger Bengali, a
        revolutionary turned yogi, rejected that view: the world is real, and spirit is working itself out through it.
      </p>
      <p>
        Next, Sri Aurobindo: involution and evolution, the ladder from matter through mind to the supermind, and an integral
        yoga that aims to transform life rather than escape it.
      </p>
    </>
  ),
};
