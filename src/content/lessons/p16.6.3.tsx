import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["observable", "unobservable"];
const ITEMS: SortItem[] = [
  { text: "The moons of Jupiter", cat: "observable", why: "An astronaut near Jupiter could see them with the naked eye; a telescope only brings us closer." },
  { text: "A dinosaur alive 70 million years ago", cat: "observable", why: "A suitably placed human could have seen it. Being in the past does not make something unobservable." },
  { text: "The far side of the Moon", cat: "observable", why: "We need only travel there to look." },
  { text: "A flea", cat: "observable", why: "Small, but visible to the unaided human eye." },
  { text: "A red blood cell", cat: "unobservable", why: "Too small for the unaided eye. Van Fraassen does not count microscope images as observation, though Ian Hacking argued that we do see through a microscope." },
  { text: "An electron", cat: "unobservable", why: "We detect its effects, such as a track in a cloud chamber, but no human could perceive it." },
  { text: "A magnetic field", cat: "unobservable", why: "We observe iron filings and compass needles, not the field itself." },
  { text: "A virus", cat: "unobservable", why: "Far below the limit of the eye, and visible only through an electron microscope." },
];

export const lesson: LessonContent = {
  id: "p16.6.3",
  minutes: 80,
  links: {
    revisits: ["p16.6.1", "p16.6.2", "p16.1.1"],
    foreshadows: ["p16.6.4", "p16.7.1", "p16.7.2"],
  },

  puzzle: (
    <>
      <p>
        A physicist uses the theory of electrons every day, to design circuits and predict what instruments will show. Must
        they also believe that electrons exist? Or could they accept the theory as a superb tool for predicting what can be
        seen, while staying agnostic about the tiny things it describes?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort these as van Fraassen would: observable by unaided human senses in principle, or not.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Observable or unobservable, for van Fraassen?" />
    </>
  ),

  theory: (
    <>
      <Definition title="constructive empiricism">
        <p>
          In <em>The Scientific Image</em> (1980), Bas van Fraassen proposed that the aim of science is not truth but{" "}
          <strong>empirical adequacy</strong>: a theory is empirically adequate if what it says about observable things and
          events, past, present and future, is true. To <strong>accept</strong> a theory is to believe it empirically adequate,
          not to believe it true. About the unobservable, the constructive empiricist suspends judgement.
        </p>
      </Definition>

      <Example title="literal but agnostic">
        <p>
          Unlike older instrumentalists, van Fraassen reads theories literally: &ldquo;there are electrons&rdquo; is true or
          false according to whether there are electrons. He simply declines to believe it. Scientists may still speak within
          the theory, use its terms and rely on it fully in practice; what they commit to is that its observable consequences
          are right.
        </p>
      </Example>

      <Definition title="the observable">
        <p>
          The line falls where human perception, unaided, could in principle detect something under suitable circumstances.
          The moons of Jupiter count, because an astronaut could see them; electrons do not. Van Fraassen holds that
          &ldquo;observable&rdquo; is vague but still usable, and that the line is drawn by science itself, since our
          theories tell us what humans can perceive.
        </p>
      </Definition>

      <Remark title="objections">
        <p>
          Grover Maxwell argued that the line between seeing with glasses, a magnifying glass, a microscope and an electron
          microscope is a continuum, so no principled boundary exists. Others say the epistemic asymmetry is arbitrary: the
          same inference to the best explanation that supports beliefs about unobserved dinosaurs supports beliefs about
          electrons. Van Fraassen replies that empirical adequacy explains success well enough, and that believing less is
          never less rational.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "aim",
      rung: "check",
      prompt: <p>For van Fraassen, what is the aim of science?</p>,
      answer: { kind: "choice", options: ["Empirical adequacy", "Truth about everything", "Usefulness to industry", "Simplicity"], correct: [0] },
    },
    {
      key: "accept",
      rung: "check",
      prompt: <p>What does it mean to accept a theory, for a constructive empiricist?</p>,
      answer: {
        kind: "choice",
        options: ["To believe it is empirically adequate", "To believe it is true", "To use it without believing anything", "To believe its terms refer"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how does van Fraassen classify the moons of Jupiter?</p>,
      answer: { kind: "choice", options: ["Observable", "Unobservable", "Neither", "Fictional"], correct: [0] },
    },
    {
      key: "lit",
      rung: "apply",
      prompt: <p>How does constructive empiricism differ from instrumentalism?</p>,
      answer: {
        kind: "choice",
        options: [
          "It reads theories literally as true or false, but suspends belief about the unobservable.",
          "It denies that theories have any truth value.",
          "It believes in electrons.",
          "It rejects observation.",
        ],
        correct: [0],
      },
    },
    {
      key: "maxwell",
      rung: "apply",
      prompt: <p>What is Grover Maxwell&rsquo;s objection?</p>,
      answer: {
        kind: "choice",
        options: [
          "Seeing through glasses, microscopes and electron microscopes forms a continuum, so the observable has no principled boundary.",
          "Theories are never empirically adequate.",
          "Electrons are observable with the naked eye.",
          "Empiricism is self-refuting.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is it rational to believe in dinosaurs but not in electrons? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States van Fraassen’s line between the observable and the unobservable.",
          "Considers an objection, such as the continuum argument or the parity of inference to the best explanation.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If humans evolved eyes that could see electrons, would constructive empiricism tell us to believe in them? Is that a problem?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that observability is relative to the human epistemic community, so it would.",
          "Discusses whether making belief depend on our perceptual equipment is arbitrary or a sensible humility.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend van Fraassen's constructive empiricism, empirical adequacy, the difference between acceptance and belief, where the line between observable and unobservable falls, and the main objections.",

  glimpse: (
    <p>
      Next, structural realism, a middle way: believe what the equations say about the structure of the world, and be
      cautious about the nature of the things that have it.
    </p>
  ),
};
