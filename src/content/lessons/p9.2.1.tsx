import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ProjectionViz } from "@/components/viz/ProjectionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p9.2.1",
  minutes: 85,
  links: {
    revisits: ["p9.1.4", "p7.5.6", "p8.4.3"],
    foreshadows: ["p9.2.2", "p9.2.3", "p14.5.1"],
  },

  puzzle: (
    <>
      <p>
        Hegel taught that spirit comes to know itself through human history, art and religion. Ludwig Feuerbach, one of his
        students, turned this around. In <em>The Essence of Christianity</em> of 1841 he argued that it is not God who comes
        to self-knowledge through humanity, but humanity that has been coming to know itself, without realising it, through
        the idea of God. Engels later recalled the book&rsquo;s effect: &ldquo;we all became at once Feuerbachians.&rdquo;
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose human qualities to attribute to God, and see what is left on the human side. Then take them back.
      </p>
      <ProjectionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="religion as projection">
        <p>
          Feuerbach holds that consciousness of God is self-consciousness of the human <strong>species</strong>. An
          individual is limited, but the species is not: its reason, love and will are, taken as a whole, without bound.
          Religion takes these perfections, detaches them from humanity and worships them as a separate being. The secret of
          theology, he concludes, is anthropology.
        </p>
      </Definition>

      <Definition title="the inversion of Hegel">
        <p>
          Feuerbach charges Hegel with the same error as theology: making thought the subject and real things its
          predicates. Philosophy should begin instead from the sensuous, embodied human being, who thinks because they live,
          not the reverse. Reverse the subject and predicate in Hegel, he said, and you have the truth.
        </p>
      </Definition>

      <Example title="the poverty of the human being">
        <p>
          &ldquo;To enrich God, man must become poor; that God may be all, man must be nothing.&rdquo; The more perfections
          are given to God, the more the believer sees in themselves only sin and weakness. This splitting of human nature
          against itself Feuerbach calls an <strong>alienation</strong>. The cure is to recognise the projection, and to love
          humanity as religion loved God.
        </p>
      </Example>

      <Remark title="from Feuerbach to Marx">
        <p>
          Marx accepted the critique of religion but thought it stopped too soon. Why do people project their powers onto
          heaven? Because their earthly life is divided and unfree. In the <em>Theses on Feuerbach</em> of 1845 he wrote that
          Feuerbach treated the human essence as a fixed species-nature and ignored practical, social activity. The eleventh
          thesis became famous: philosophers have only interpreted the world; the point is to change it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "book",
      rung: "check",
      prompt: <p>What is Feuerbach&rsquo;s main work on religion?</p>,
      answer: {
        kind: "choice",
        options: ["The Essence of Christianity", "Phenomenology of Spirit", "Capital", "Fear and Trembling"],
        correct: [0],
      },
    },
    {
      key: "secret",
      rung: "check",
      prompt: <p>According to Feuerbach, the secret of theology is what?</p>,
      answer: { kind: "choice", options: ["Metaphysics", "Anthropology", "Logic", "Physics"], correct: [1] },
    },
    {
      key: "species",
      rung: "apply",
      prompt: <p>Why does Feuerbach link God to the human species rather than to individuals?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because individuals do not exist.",
          "Because the species' powers of reason, love and will are unlimited as a whole, unlike any individual's, and these are what God is imagined to have.",
          "Because the species is divine.",
          "Because God created the species.",
        ],
        correct: [1],
      },
    },
    {
      key: "hegel",
      rung: "apply",
      prompt: <p>What does Feuerbach say is wrong with Hegel?</p>,
      answer: {
        kind: "choice",
        options: [
          "That Hegel was too empirical.",
          "That Hegel made thought the subject and real things its predicates, repeating theology's inversion.",
          "That Hegel ignored religion.",
          "That Hegel was a materialist.",
        ],
        correct: [1],
      },
    },
    {
      key: "marx",
      rung: "apply",
      prompt: <p>What did Marx think Feuerbach had missed?</p>,
      answer: {
        kind: "choice",
        options: [
          "That God exists.",
          "The social and practical conditions that lead people to project their powers onto heaven.",
          "The importance of logic.",
          "Nothing at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Feuerbach&rsquo;s projection theory show that God does not exist? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the theory: ideas of God are human qualities projected and idealised.",
          "Considers whether explaining the origin of a belief settles its truth, the genetic fallacy worry.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "eleven",
      rung: "stretch",
      prompt: <p>&ldquo;Philosophers have only interpreted the world; the point is to change it.&rdquo; Is this fair to philosophy?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the thesis as a demand that theory serve practical transformation.",
          "Considers a reply, such as that understanding is needed for good change, or that interpretation is itself an action.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Feuerbach's claim that theology is anthropology, how religion projects human powers onto God, why he thought Hegel made the same mistake, and how Marx took the critique further.",

  glimpse: (
    <p>
      The next lessons follow Marx, who turns Feuerbach&rsquo;s alienation into a critique of labour under capitalism and then
      into historical materialism. Political philosophy later examines Marxist critiques of liberal society.
    </p>
  ),
};
