import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["natural attitude", "after the epoché"];
const ITEMS: SortItem[] = [
  { text: "The tree outside my window will still be there tomorrow.", cat: "natural attitude", why: "It posits the tree as existing independently of my experience, which is exactly the thesis the epoché suspends." },
  { text: "The tree appears green and swaying, partly hidden by the window frame.", cat: "after the epoché", why: "It describes how the tree is given, without asserting anything about what exists beyond the appearing." },
  { text: "Light reflected by the leaves stimulates my retina.", cat: "natural attitude", why: "Physiology takes for granted the world of bodies and causes; it is a science of the natural attitude." },
  { text: "The tree is given in profiles, its far side meant but unseen.", cat: "after the epoché", why: "A description of the structure of the perceptual act and its horizon." },
  { text: "Perhaps I am only dreaming the tree.", cat: "natural attitude", why: "Doubting still takes a position on existence, a negative one. The epoché takes no position at all, which is how it differs from Descartes." },
  { text: "This seeing has the character of certainty; that memory of it feels faded.", cat: "after the epoché", why: "The modes of givenness and belief-characters of acts are what the reduced field contains." },
  { text: "Trees are made of cells, and cells of molecules.", cat: "natural attitude", why: "A scientific claim about the world; after the epoché it is set aside, not refuted." },
  { text: "Whether I see, remember or imagine it, the same tree is meant.", cat: "after the epoché", why: "An identity within experience, between the objects of different acts, which phenomenology describes." },
];

export const lesson: LessonContent = {
  id: "p19.1.2",
  minutes: 75,
  links: {
    revisits: ["p19.1.1", "p7.1.1", "p4.7.4"],
    foreshadows: ["p19.1.3", "p19.2.1", "p19.5.1"],
  },

  puzzle: (
    <>
      <p>
        You cannot study your own glasses while looking through them. In everyday life we look through experience at the
        world, and take the world&rsquo;s existence for granted. How could we turn round and look at the experience itself,
        without simply swapping one set of assumptions for another?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each statement: does it speak from within the natural attitude, or describe what remains after the epoché?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Natural attitude or after the epoché?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the natural attitude">
        <p>
          In ordinary life and in the sciences we live in the <strong>natural attitude</strong>: the world is simply there,
          existing in itself, and we are things within it. Husserl calls this its general thesis. It is not a belief we
          formed; it is the unnoticed background of every belief.
        </p>
      </Definition>

      <Definition title="the epoché and the reduction">
        <p>
          The <strong>epoché</strong>, a word Husserl borrowed from the ancient sceptics, is a suspension: we put the general
          thesis out of play, in brackets. We do not deny that the world exists, nor doubt it; we refrain from using it. What
          remains is the world exactly as it appears, now considered as appearing. The{" "}
          <strong>phenomenological reduction</strong> leads us back (Latin <em>reducere</em>) from the world to the
          consciousness in which it is given, a field of pure experience, and in later works to a transcendental ego for whom
          the world has its sense.
        </p>
      </Definition>

      <Example title="not Descartes">
        <p>
          In <em>Cartesian Meditations</em> (1931) Husserl presented his method as a radicalised Descartes, but he
          criticised Descartes for turning the ego into a thinking substance, a small piece of the world, and for using doubt
          to reach certainties from which to deduce the rest. The epoché proves nothing and removes nothing: it opens a field
          for description. A second technique, the <strong>eidetic reduction</strong>, varies an example freely in
          imagination to find what cannot be varied, its essence: a perceived thing can change colour, but not cease to be
          given in profiles.
        </p>
      </Example>

      <Remark title="can it be done?">
        <p>
          Critics doubted that anyone can step out of the natural attitude. Heidegger held that we are always already in a
          world, so that bracketing it distorts what we are. Merleau-Ponty wrote that the most important lesson of the
          reduction is the impossibility of a complete reduction. Others found the turn to a transcendental ego a slide into
          idealism, the worry that split Husserl from many of his students.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "epoche",
      rung: "check",
      prompt: <p>What does the epoché do to the belief that the world exists?</p>,
      answer: {
        kind: "choice",
        options: ["It suspends it, neither affirming nor denying it", "It denies it", "It doubts it", "It proves it"],
        correct: [0],
      },
    },
    {
      key: "natural",
      rung: "check",
      prompt: <p>What is the natural attitude?</p>,
      answer: {
        kind: "choice",
        options: [
          "Our everyday taking for granted that the world exists in itself",
          "A preference for natural over artificial things",
          "The method of the natural sciences only",
          "A view about human nature",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, why does &ldquo;Perhaps I am only dreaming the tree&rdquo; belong to the natural attitude?</p>,
      answer: {
        kind: "choice",
        options: [
          "Doubt still takes a position on existence, a negative one, while the epoché takes none.",
          "Dreams are natural.",
          "Because it mentions a tree.",
          "Because it is false.",
        ],
        correct: [0],
      },
    },
    {
      key: "eidetic",
      rung: "apply",
      prompt: <p>Which is an example of eidetic variation?</p>,
      answer: {
        kind: "choice",
        options: [
          "Imagining a melody faster, slower and in another key, to see what it must keep to remain a melody",
          "Measuring the frequency of each note",
          "Asking people what melodies they like",
          "Doubting that the melody was played",
        ],
        correct: [0],
      },
    },
    {
      key: "sceptic",
      rung: "apply",
      prompt: <p>Where did Husserl find the word &ldquo;epoché&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: ["In ancient scepticism, where it meant suspension of judgement", "In Kant", "In Descartes", "In Brentano"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can the epoché really be performed? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains what the epoché asks of us: to suspend, not deny, the thesis of the world’s existence.",
          "Considers an objection, such as Heidegger’s or Merleau-Ponty’s, or a reply on Husserl’s behalf.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is phenomenology after the reduction a form of idealism?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the reduction considers the world only as it has sense for consciousness.",
          "Distinguishes a methodological restriction from a claim that only consciousness exists, or compares Kant’s transcendental idealism.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Husserl&rsquo;s last great theme: the lifeworld that science forgets, and the crisis he thought this forgetting
      caused.
    </p>
  ),
};
