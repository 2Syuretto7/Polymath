import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ErsatzWorldViz } from "@/components/viz/ErsatzWorldViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.3.3",
  minutes: 80,
  links: {
    revisits: ["p11.3.2", "p11.2.2", "p11.3.1"],
    foreshadows: ["p11.3.4", "p26.2.1", "p27.2.2"],
  },

  puzzle: (
    <>
      <p>
        There could have been a sister of yours who was never born. But there is no such person, and nothing that is merely
        possible. How can a claim about her be true, if everything there is actually exists?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Build a complete and consistent story of a world. The actualist says such a story, not a concrete universe, is what a
        possible world is.
      </p>
      <ErsatzWorldViz />
    </>
  ),

  theory: (
    <>
      <Definition title="actualism and possibilism">
        <p>
          <strong>Actualism</strong>: everything that exists actually exists; there are no merely possible things.{" "}
          <strong>Possibilism</strong>: there are things that are merely possible, such as Lewis&rsquo;s talking donkeys in
          other worlds.
        </p>
      </Definition>

      <Definition title="ersatz worlds">
        <p>
          Actualists such as Plantinga and Adams keep possible worlds but make them abstract and actual. For Plantinga, a world
          is a maximal possible state of affairs; for Adams, a maximal consistent set of propositions, a{" "}
          <strong>world-story</strong>. Exactly one world-story is true: the actual world.
        </p>
      </Definition>

      <Example title="possible people">
        <p>
          &ldquo;There could have been a sister of yours&rdquo; is true because some world-story includes the proposition that
          you have a sister. The story exists; the sister does not. Plantinga adds individual essences: abstract properties that
          would be had by the sister, if she existed.
        </p>
      </Example>

      <Remark title="costs">
        <p>
          Ersatz worlds take modality as primitive: &ldquo;consistent&rdquo; and &ldquo;possible&rdquo; are not defined in
          non-modal terms, which is Lewis&rsquo;s complaint. They also face the problem of alien properties: a world-story must
          be written in some language, which may lack words for properties nothing actual has. And the Barcan formula, which
          says that if there could be something that is F, there is something that could be F, is hard for the actualist to
          accept. Possibilists can accept it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does actualism say?</p>,
      answer: { kind: "choice", options: ["Only the present exists", "Everything that exists actually exists", "Only concrete things exist", "Nothing is possible"], correct: [1] },
    },
    {
      key: "ersatz",
      rung: "check",
      prompt: <p>For Adams, what is a possible world?</p>,
      answer: { kind: "choice", options: ["A concrete universe", "A maximal consistent set of propositions", "A place in space", "A mental image"], correct: [1] },
    },
    {
      key: "max",
      rung: "apply",
      prompt: <p>A set of propositions settles some questions but leaves others open, without contradiction. What is it, for the ersatzist?</p>,
      answer: {
        kind: "choice",
        options: ["A possible world", "A partial description, true at many worlds", "An impossible world", "The actual world"],
        correct: [1],
      },
    },
    {
      key: "sister",
      rung: "apply",
      prompt: <p>How can the actualist make &ldquo;you could have had a sister&rdquo; true?</p>,
      answer: {
        kind: "choice",
        options: [
          "By finding the sister in another concrete universe",
          "Because some world-story, an actually existing abstract object, includes that you have a sister",
          "By denying the claim",
          "By saying the sister exists but is not actual",
        ],
        correct: [1],
      },
    },
    {
      key: "lewis",
      rung: "apply",
      prompt: <p>What is Lewis&rsquo;s main complaint about ersatz worlds?</p>,
      answer: {
        kind: "choice",
        options: [
          "They are too concrete.",
          "Defining them needs modal notions such as consistency, so modality is left unanalysed.",
          "There are too few of them.",
          "They make modal claims false.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is it a serious cost that ersatz worlds take modality as primitive? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States how ersatz worlds rely on consistency or possibility.",
          "Weighs this against the cost of Lewis’s concrete worlds.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "alien",
      rung: "stretch",
      prompt: <p>Could there have been a property nothing actual has? If so, how could a world-story describe a world with it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the problem of alien properties.",
          "Considers a response, such as purely general descriptions or a richer language of propositions.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between actualism and possibilism, how ersatz worlds work as maximal consistent world-stories, how they handle merely possible people, and the costs Lewis and others raise.",

  glimpse: (
    <p>
      The next lesson asks which properties things have necessarily: essentialism. Modal logic studies the Barcan formulas
      formally, and graduate metaphysics returns to ersatz worlds in depth.
    </p>
  ),
};
