import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["my own experiences", "physical objects", "other minds", "cultural objects"];
const ITEMS: SortItem[] = [
  { text: "an elementary experience", cat: "my own experiences", why: "The basic elements of the whole system: momentary total experiences, taken as unanalysed." },
  { text: "the colour red", cat: "my own experiences", why: "Constructed early, as a class of quality classes picked out by similarity among experiences." },
  { text: "the visual sense", cat: "my own experiences", why: "A sense class, defined from the quality classes and their dimensions." },
  { text: "the table in this room", cat: "physical objects", why: "Built by assigning colours from the visual field to points of a four-dimensional space-time." },
  { text: "the human body", cat: "physical objects", why: "My own body is constructed first, as the physical thing my experiences are most closely tied to; other bodies follow." },
  { text: "a friend’s pain", cat: "other minds", why: "Constructed from the friend’s physical behaviour and expressions, by analogy with my own experiences." },
  { text: "what another person believes", cat: "other minds", why: "Another person’s mental states come only after physical objects, through their bodies and utterances." },
  { text: "the custom of raising a hat in greeting", cat: "cultural objects", why: "A cultural object, constructed from the mental states of many people that manifest it." },
  { text: "the state", cat: "cultural objects", why: "Carnap’s example of a higher cultural object, built from people, their attitudes and their actions." },
];

export const lesson: LessonContent = {
  id: "p18.4.2",
  minutes: 80,
  links: {
    revisits: ["p18.4.1", "p18.2.2", "p18.1.1"],
    foreshadows: ["p18.4.3", "p18.6.1", "p18.6.2"],
  },

  puzzle: (
    <>
      <p>
        Frege and Russell showed how arithmetic might be built from logic alone. Could the same be done for everything we
        know about the world: tables, other people, the state, physics, all defined step by step from one&rsquo;s own
        experiences and a single relation between them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Place each item at the level of Carnap&rsquo;s system where it is constructed.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="At which level is it constructed?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the project">
        <p>
          Rudolf Carnap&rsquo;s <em>Der logische Aufbau der Welt</em> (1928) aims at a <strong>constructional system</strong>:
          every concept of science is to be defined, by the logic of Principia Mathematica, from a small base. The base
          elements are <strong>elementary experiences</strong>, taken whole, and the single basic relation is{" "}
          <strong>recollection of similarity</strong>: x is remembered as partly similar to y. Starting from one&rsquo;s own
          experiences is <strong>methodological solipsism</strong>, a choice of order, not a claim that only one mind exists.
        </p>
      </Definition>

      <Example title="quasi-analysis">
        <p>
          Experiences have no parts to define qualities from, so Carnap uses <strong>quasi-analysis</strong>: a quality class
          is a maximal class of experiences each pair of which is similar. Ideally, all the experiences containing a given
          shade of red form such a class. From quality classes come sense classes, the visual field, and colours; then the
          physical world, by assigning colours to points of space-time; then other minds, through bodies and behaviour; then
          cultural objects.
        </p>
      </Example>

      <Definition title="structure and objectivity">
        <p>
          Carnap held that science aims at <strong>structural</strong> statements, which describe only the pattern of
          relations and can be shared by everyone, whatever their private experiences are like. Every scientific object can,
          in principle, be identified by a purely structural definite description.
        </p>
      </Definition>

      <Remark title="difficulties">
        <p>
          Nelson Goodman showed that quasi-analysis can go wrong: three experiences that pairwise share a colour, but share no
          colour all together, form a quality class that corresponds to no quality. Quine noted that the step to the physical
          world uses principles, such as assigning colours to points as smoothly as possible, that are not definitions at
          all, so the reduction is not achieved. Carnap himself soon moved to a physicalist base.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "basic",
      rung: "check",
      prompt: <p>What is the single basic relation of the Aufbau?</p>,
      answer: { kind: "choice", options: ["Recollection of similarity", "Causation", "Set membership", "Spatial nearness"], correct: [0] },
    },
    {
      key: "msol",
      rung: "check",
      prompt: <p>What is methodological solipsism, in Carnap&rsquo;s sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "Taking one’s own experiences as the starting point of the construction, without claiming that only one mind exists.",
          "The view that only one mind exists.",
          "The view that other minds cannot be known.",
          "A method of introspective psychology.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which level comes immediately before other minds in the order of construction?</p>,
      answer: { kind: "choice", options: ["Physical objects", "Cultural objects", "Elementary experiences", "Mathematical objects"], correct: [0] },
    },
    {
      key: "goodman",
      rung: "apply",
      prompt: <p>Experience x is red and green, y is red and blue, and z is green and blue. Each pair shares a colour. How many maximal classes of pairwise similar experiences do x, y and z form?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "quine",
      rung: "apply",
      prompt: <p>What was Quine&rsquo;s main complaint about the Aufbau&rsquo;s step to the physical world?</p>,
      answer: {
        kind: "choice",
        options: [
          "It relies on principles for assigning qualities to space-time points that are not definitions, so nothing is actually reduced.",
          "It uses too few experiences.",
          "It starts from physics instead of experience.",
          "It uses set theory.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the failure of the Aufbau show that knowledge of the world cannot be reconstructed from experience? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes what the Aufbau tried to do and at least one point where it failed.",
          "Considers whether the failure is a defect of this attempt or of the project, for instance via Quine’s holism or Carnap’s later physicalism.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Carnap said science is objective because its statements are purely structural. Is a purely structural description enough to say anything about the world?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the idea that structure, unlike private quality, can be shared and communicated.",
          "Considers the worry that almost any collection of things can be given a structure of a given shape, so pure structure says little.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, verificationism: Ayer&rsquo;s criterion of meaning, its attempts to admit science while excluding metaphysics, and
      why every version proved too strict or too generous.
    </p>
  ),
};
