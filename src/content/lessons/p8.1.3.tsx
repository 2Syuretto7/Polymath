import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FormsFilterViz } from "@/components/viz/FormsFilterViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p8.1.3",
  minutes: 85,
  links: {
    revisits: ["p8.1.2", "p7.4.2", "p7.6.2"],
    foreshadows: ["p8.2.1", "p8.3.5", "p9.1.2"],
  },

  puzzle: (
    <>
      <p>
        Berkeley said that to be is to be perceived, and Kant&rsquo;s first readers accused him of saying the same thing in
        longer words. Kant was furious. He insisted that he was an empirical realist: tables and planets really exist in space,
        independent of my perceiving them. Yet he also called himself a transcendental idealist, holding that space and time
        are not features of things in themselves. How can both be true?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Experience, for Kant, is what results when the mind receives something and gives it form. Remove each contribution of
        the mind in turn, and see what is left.
      </p>
      <FormsFilterViz />
    </>
  ),

  theory: (
    <>
      <Definition title="appearances and things in themselves">
        <p>
          <strong>Transcendental idealism</strong> is the doctrine that the objects of our experience are{" "}
          <strong>appearances</strong>: things as they are given to us, under the forms of our sensibility, space and time,
          and organised by the concepts of our understanding, the categories. Things as they are in themselves, apart from
          these conditions, we cannot know. Kant calls them <strong>things in themselves</strong>, or noumena.
        </p>
      </Definition>

      <Definition title="sensibility and understanding">
        <p>
          Knowledge needs two faculties. <strong>Sensibility</strong> receives intuitions, the immediate presentations of
          particulars. <strong>Understanding</strong> thinks them through concepts. &ldquo;Thoughts without content are empty,
          intuitions without concepts are blind.&rdquo; Neither alone gives knowledge, which is why reason, trying to think of
          God or the soul without any intuition, produces only illusion.
        </p>
      </Definition>

      <Example title="empirical realism">
        <p>
          Within experience, the distinction between real and illusory holds as usual. The moon exists whether or not anyone
          looks at it, since it belongs to the one law-governed spatial world that possible experience reveals. What is
          ideal, for Kant, is not the moon but the spatial and temporal form of the whole world of appearances. That is the
          difference from Berkeley, for whom unperceived objects exist only in some mind&rsquo;s perceiving.
        </p>
      </Example>

      <Remark title="one world or two?">
        <p>
          Interpreters divide. On the two-world reading, appearances and things in themselves are distinct entities, and
          appearances are something like mental representations. On the two-aspect reading, there is one set of things,
          considered either as they appear to us or as they are in themselves. Either way, the idea that the mind shapes its
          world runs through German idealism, phenomenology and much of modern thought about cognition.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "forms",
      rung: "check",
      prompt: <p>What are the two forms of sensibility, for Kant?</p>,
      answer: { kind: "choice", options: ["Substance and cause", "Space and time", "Matter and form", "God and soul"], correct: [1] },
    },
    {
      key: "blind",
      rung: "check",
      prompt: <p>Complete Kant&rsquo;s saying: thoughts without content are empty, intuitions without concepts are &hellip;</p>,
      answer: { kind: "choice", options: ["false", "blind", "free", "infinite"], correct: [1] },
    },
    {
      key: "know",
      rung: "apply",
      prompt: <p>What can we know, according to transcendental idealism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Things in themselves, by pure reason.",
          "Nothing at all.",
          "Appearances, the objects of possible experience, but not things as they are in themselves.",
          "Only our own ideas, never external objects.",
        ],
        correct: [2],
      },
    },
    {
      key: "berkeley",
      rung: "apply",
      prompt: <p>How does Kant distinguish his view from Berkeley&rsquo;s?</p>,
      answer: {
        kind: "choice",
        options: [
          "Kant denies that bodies exist.",
          "Kant holds that bodies exist in space independently of being perceived, and that only the form of the world of appearances is ideal.",
          "Kant holds that God perceives everything.",
          "There is no difference.",
        ],
        correct: [1],
      },
    },
    {
      key: "readings",
      rung: "apply",
      prompt: <p>What does the two-aspect reading of transcendental idealism say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Appearances and things in themselves are two different sets of objects.",
          "There is one set of things, considered either as they appear to us or as they are in themselves.",
          "Things in themselves are mental.",
          "Only appearances exist.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, explain how Kant can be both an empirical realist and a transcendental idealist.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says empirical realism means objects in space are real and exist independently of particular perceptions.",
          "Says transcendental idealism means space, time and the categories are forms the mind contributes, so we know things only as they appear. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "cause",
      rung: "stretch",
      prompt: (
        <p>
          Kant says things in themselves affect our sensibility. But causation is a category, which applies only to
          appearances. Is this a contradiction? Give your view.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the objection, raised by Jacobi: affection seems to apply causation beyond experience.",
          "Considers a reply, such as that we may think, though not know, a ground of appearances, or the two-aspect reading.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what transcendental idealism says about appearances and things in themselves, the roles of sensibility and understanding, and how Kant can call himself an empirical realist too.",

  glimpse: (
    <p>
      The next chapter, the Transcendental Aesthetic, argues that space and time are forms of intuition and shows how this
      grounds geometry. Later chapters deduce the categories and expose the illusions of pure reason, and the Philosophy of
      Mind course takes up the idea of a mind that structures its experience.
    </p>
  ),
};
