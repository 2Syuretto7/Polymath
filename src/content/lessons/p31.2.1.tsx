import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ContentPairViz } from "@/components/viz/ContentPairViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p31.2.1",
  minutes: 90,
  links: {
    revisits: ["p12.6.1", "p12.5.1", "p12.5.4"],
    foreshadows: ["p31.2.2", "p31.3.1", "p31.4.1"],
  },

  puzzle: (
    <>
      <p>
        Look at a ripe tomato and try to attend to your experience of its redness, rather than to the tomato. Most people
        find that their attention goes straight through to the tomato and its colour. If experience is transparent in this
        way, is what it is like to see red anything over and above what the experience tells you about the world?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a case, and compare the objection with the representationalist reply.</p>
      <ContentPairViz />
    </>
  ),

  theory: (
    <>
      <Definition title="representationalism">
        <p>
          <strong>Representationalism</strong>, or intentionalism, holds that the phenomenal character of an experience is
          determined by, or identical with, its representational content: two experiences alike in what they represent are
          alike in how they feel. Strong versions, defended by Fred Dretske and Michael Tye, add that the content can be
          explained naturalistically, for instance by what the state has the function of tracking. This would bring
          consciousness within the scope of a theory of mental content.
        </p>
      </Definition>

      <Definition title="the argument from transparency">
        <p>
          Gilbert Harman argued in 1990 that experience is <strong>transparent</strong>: when you try to introspect the
          qualities of your experience, you find only the qualities of the things experienced. If no intrinsic,
          non-representational qualities of experience are available to introspection, the best explanation is that
          phenomenal character just is represented content.
        </p>
      </Definition>

      <Example title="test cases">
        <p>
          Opponents offer cases of the same content with different character: Christopher Peacocke&rsquo;s trees at
          different distances, blurry vision, the inverted spectrum. Representationalists reply case by case that the content
          does differ, for example that blurry experience represents fewer sharp boundaries. Bodily sensations and moods are
          treated as representing states of the body or of the world as a whole.
        </p>
      </Example>

      <Remark title="wide or narrow">
        <p>
          If content is fixed partly by the environment, as externalists hold, then representationalism implies that
          phenomenal character is too. Ned Block imagines someone taken to Inverted Earth, where colours are swapped, wearing
          inverting lenses. Over years their colour contents come to match the locals&rsquo;, but Block argues that what
          their experiences are like does not change, so content and character come apart. Representationalists deny the
          intuition or appeal to narrow content.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What does representationalism claim?</p>,
      answer: { kind: "choice", options: ["Phenomenal character is determined by representational content", "Experiences represent nothing", "Phenomenal character floats free of content", "Only beliefs have content"], correct: [0] },
    },
    {
      key: "transp",
      rung: "check",
      prompt: <p>What is the transparency of experience?</p>,
      answer: { kind: "choice", options: ["Introspection finds only the qualities of the things experienced", "Experiences are always accurate", "Others can see our experiences", "Experience has no qualities"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, whose case concerns two trees of equal size at different distances?</p>,
      answer: { kind: "choice", options: ["Christopher Peacocke", "Michael Tye", "Gilbert Harman", "Ned Block"], correct: [0] },
    },
    {
      key: "blur",
      rung: "apply",
      prompt: <p>How do representationalists usually handle blurry vision?</p>,
      answer: { kind: "choice", options: ["Blurry experience represents less, failing to represent sharp boundaries", "Blurry experience represents blurry objects", "Blur is not an experience", "They concede it refutes the view"], correct: [0] },
    },
    {
      key: "pain",
      rung: "apply",
      prompt: <p>On Tye&rsquo;s view, what does a pain in the foot represent?</p>,
      answer: { kind: "choice", options: ["A disturbance of a certain kind in the foot", "Nothing at all", "The brain", "A belief about the foot"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the transparency of experience support representationalism? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the transparency observation and the inference to representationalism.",
          "Considers an objection, such as a case of same content with different character.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could two people represent ripe tomatoes as red while their colour experiences differ in character?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the inverted spectrum or a similar case.",
          "Considers a representationalist reply.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Representationalism treats a perception and a perfect hallucination as sharing their content. A rival denies that
        they have anything fundamental in common: in perception the world itself is part of the experience.
      </p>
      <p>Next, disjunctivism.</p>
    </>
  ),
};
