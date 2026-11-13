import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BasinViz } from "@/components/viz/BasinViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.3.2",
  minutes: 75,
  links: {
    revisits: ["p7.3.1", "p7.1.4", "p4.1.5"],
    foreshadows: ["p7.4.2", "p10.5.1", "p7.5.1"],
  },

  puzzle: (
    <>
      <p>
        A snowball is white, cold and round. Locke asks us to look closer. Is the whiteness in the snowball in the same way
        as the roundness? If you warm one hand and chill the other, and plunge both into the same basin, the water feels
        cold to one hand and warm to the other. It cannot be both. Yet it feels round, or rather the basin feels the same
        shape, to both hands. Which of the qualities we perceive belong to things themselves, and which only to us?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Put each hand into a basin first, then move both into the lukewarm basin in the middle. Compare what the two hands
        report about heat and about shape.
      </p>
      <BasinViz />
    </>
  ),

  theory: (
    <>
      <Definition title="ideas and qualities">
        <p>
          Locke separates <strong>ideas</strong>, which are in the mind, from <strong>qualities</strong>, which are powers
          in objects to produce ideas in us. The idea of white is in my mind; the quality of the snowball is whatever power
          it has to cause that idea.
        </p>
      </Definition>

      <Definition title="the distinction">
        <p>
          <strong>Primary qualities</strong> are solidity, extension, figure, motion or rest, and number. They are
          inseparable from a body: however small you divide a grain of wheat, each part still has some size, shape and
          motion. Our ideas of them <em>resemble</em> the qualities. <strong>Secondary qualities</strong> are colours,
          sounds, tastes, smells, heat and cold. In the object they are nothing but powers, grounded in the primary qualities
          of its insensible parts, to produce sensations in us. Our ideas of them resemble nothing in the object.
        </p>
      </Definition>

      <Example title="the arguments">
        <p>
          Locke borrowed the corpuscular science of his friend Robert Boyle, in which bodies are made of tiny particles that
          act only by contact and motion. That picture explains how sensations are caused without needing colour in the
          particles. He adds arguments from variation: the same water feels hot and cold; porphyry loses its red in the
          dark; an almond pounded in a mortar changes colour and taste, though nothing has happened to it but a change in the
          texture of its parts. Since only primary qualities were altered, the change in secondary ones must be in us.
        </p>
      </Example>

      <Remark title="Berkeley's challenge">
        <p>
          The distinction echoes Democritus: by convention sweet, by convention colour, in reality atoms and void. George
          Berkeley pressed a reply. Shape and size also vary with the perceiver: a coin looks round from one angle and
          oval from another, and a mite would see a tiny body as huge. If variation shows that heat is only in the mind, it
          shows the same of shape. And can you even imagine a shape with no colour at all? Berkeley concluded that all
          qualities are ideas. Defenders of Locke reply that the distinction rests not on variation but on what our best
          science needs to explain perception.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "primary",
      rung: "check",
      prompt: <p>Which of these are primary qualities, according to Locke? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Shape", "Colour", "Motion", "Taste", "Number"],
        correct: [0, 2, 4],
      },
    },
    {
      key: "resemble",
      rung: "check",
      prompt: <p>What is the difference between our ideas of primary and of secondary qualities?</p>,
      answer: {
        kind: "choice",
        options: [
          "Ideas of primary qualities are innate; ideas of secondary qualities are learnt.",
          "Ideas of primary qualities resemble the qualities in the object; ideas of secondary qualities resemble nothing there.",
          "There is no difference.",
          "Only secondary qualities cause ideas.",
        ],
        correct: [1],
      },
    },
    {
      key: "basin",
      rung: "apply",
      prompt: <p>What is the lukewarm basin meant to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That water has no temperature.",
          "That since the same water cannot be both hot and cold, the felt heat and cold must be in us, not in the water.",
          "That our hands are unreliable for shape.",
          "That heat is a primary quality.",
        ],
        correct: [1],
      },
    },
    {
      key: "power",
      rung: "apply",
      prompt: <p>On Locke&rsquo;s view, what is redness, considered as it is in a ripe tomato?</p>,
      answer: {
        kind: "choice",
        options: [
          "A red sensation located in the tomato.",
          "A power, grounded in the arrangement and motion of its tiny parts, to produce the idea of red in us.",
          "Nothing at all.",
          "A primary quality.",
        ],
        correct: [1],
      },
    },
    {
      key: "berkeley",
      rung: "apply",
      prompt: <p>How did Berkeley turn Locke&rsquo;s argument from variation against him?</p>,
      answer: {
        kind: "choice",
        options: [
          "By denying that heat varies.",
          "By pointing out that shape and size also vary with the perceiver, so the same reasoning puts them in the mind too.",
          "By proving that atoms exist.",
          "By accepting the distinction entirely.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Is colour really in objects? Give Locke&rsquo;s answer and one reason for it, then say whether you agree. A short
          paragraph is plenty.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States Locke's view: colour in the object is only a power to cause ideas, grounded in primary qualities.",
          "Gives a reason, such as the corpuscular explanation of perception or variation in perceived colour.",
          "Gives a view of their own with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "science",
      rung: "stretch",
      prompt: (
        <p>
          Modern physics describes light by wavelength and surfaces by reflectance. Does this support Locke&rsquo;s
          distinction, or does it make colour as real as shape? Argue briefly.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Connects reflectance or wavelength to Locke's idea of a power grounded in the structure of the object.",
          "Considers a complication, such as colour experience depending on the visual system, or reflectance as a real property.",
          "Takes a reasoned position. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Locke's distinction between ideas and qualities, which qualities are primary and which secondary, the arguments he gave, and how Berkeley turned the argument from variation against him.",

  glimpse: (
    <p>
      The next lesson asks what it is that has all these qualities, Locke&rsquo;s puzzling substratum. Berkeley&rsquo;s
      reply, developed in full in the lessons on immaterialism, will dissolve both the distinction and the substratum, and
      the Epistemology course returns to the debate in its study of perception.
    </p>
  ),
};
