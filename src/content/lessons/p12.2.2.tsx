import { Definition, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["discovered by investigation", "known from the meanings of the words"];
const ITEMS: SortItem[] = [
  { text: "Water is H₂O.", cat: "discovered by investigation", why: "Chemistry discovered it; no one could know it just by understanding the word ‘water’." },
  { text: "A vixen is a female fox.", cat: "known from the meanings of the words", why: "Understanding ‘vixen’ is enough." },
  { text: "Lightning is an electrical discharge.", cat: "discovered by investigation", why: "Smart’s favourite model: an identity found by science, not by analysing the word." },
  { text: "The morning star is the evening star.", cat: "discovered by investigation", why: "Babylonian astronomers found that both are Venus." },
  { text: "A fortnight is fourteen nights.", cat: "known from the meanings of the words", why: "It is true by definition." },
  { text: "Pain is C-fibre firing.", cat: "discovered by investigation", why: "The identity theorist’s claim is of this kind: if true, it is a discovery of neuroscience, not of dictionaries." },
];

export const lesson: LessonContent = {
  id: "p12.2.2",
  minutes: 80,
  links: {
    revisits: ["p12.2.1", "p12.1.2", "p6.5.2"],
    foreshadows: ["p12.2.3", "p12.5.3", "p29.2.1"],
  },

  puzzle: (
    <>
      <p>
        Lightning turned out to be an electrical discharge, and heat turned out to be molecular motion. These were not two
        things linked; they were one thing, described in two ways. Could pain likewise turn out to be a process in the brain?
        And if &ldquo;pain&rdquo; does not mean &ldquo;brain process&rdquo;, does that matter?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort these identity statements by how we come to know them.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="How do we come to know each identity?" />
    </>
  ),

  theory: (
    <>
      <Definition title="type identity theory">
        <p>
          U. T. Place and J. J. C. Smart proposed that each type of mental state is identical with a type of brain state:
          pain is, for example, C-fibre firing. The identity is not a claim about meaning but a <em>theoretical identity</em>{" "}
          discovered a posteriori, like water and H₂O.
        </p>
      </Definition>

      <Remark title="the case for identity">
        <p>
          Smart argued from simplicity. If sensations were extra to brain processes, they would be &ldquo;nomological
          danglers&rdquo;: outside physics, linked to it by brute laws that serve no further purpose. Ockham&rsquo;s razor says
          not to multiply entities. Identity also solves the interaction problem: if pain is a brain process, it causes
          wincing in the ordinary physical way.
        </p>
      </Remark>

      <Remark title="Leibniz's law objections">
        <p>
          A brain process has a location and a speed, but does an after-image? An after-image may be orange, but no brain
          process is orange. Smart replied with a <strong>topic-neutral</strong> analysis: to report an orange after-image is
          to say something is going on in me like what goes on when I see an orange, which leaves open what that something
          is. The orange belongs to what is seen, not to the experience.
        </p>
      </Remark>

      <ArgumentStepViz
        title="Kripke's modal argument"
        steps={[
          { claim: "Identities between rigidly designated things are necessary: if pain = C-fibre firing, then necessarily pain = C-fibre firing.", kind: "premise", note: "If a = b and both names pick out the same thing in every world, there is no world where they differ." },
          { claim: "It seems possible that there be pain without C-fibre firing, or C-fibre firing without pain.", kind: "premise", note: "We can easily conceive of it.", objection: "We can also seem to conceive of heat without molecular motion. Why trust the appearance here?" },
          { claim: "With heat, the appearance is explained away: we conceive of the feeling of heat without molecular motion, not heat itself.", kind: "premise", note: "Heat is picked out by a contingent feature, the sensation it causes." },
          { claim: "With pain, it cannot be explained away: to feel pain is to have pain. There is no gap between how pain seems and what it is.", kind: "inference", note: "So the possibility seems genuine.", objection: "Later physicalists argue that phenomenal concepts are special, and explain the illusion of contingency in another way." },
          { claim: "So pain is not identical with C-fibre firing.", kind: "conclusion", note: "Kripke took this as a serious problem for the identity theory." },
        ]}
      />
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does type identity theory claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Each type of mental state is identical with a type of brain state.",
          "Mental words mean the same as brain words.",
          "Each mental state is caused by a brain state.",
          "Mental states are behaviour.",
        ],
        correct: [0],
      },
    },
    {
      key: "apost",
      rung: "check",
      prompt: <p>On Smart&rsquo;s view, how would we know that pain is a brain process?</p>,
      answer: { kind: "choice", options: ["By analysing the word ‘pain’", "By scientific investigation, as with lightning", "By introspection alone", "We could never know"], correct: [1] },
    },
    {
      key: "dangler",
      rung: "apply",
      prompt: <p>What are &ldquo;nomological danglers&rdquo;, and why does Smart dislike them?</p>,
      answer: {
        kind: "choice",
        options: [
          "Unfinished theories, which are untestable.",
          "Non-physical sensations linked to physics by brute laws, which offend simplicity.",
          "Neurons without connections.",
          "Laws that change over time.",
        ],
        correct: [1],
      },
    },
    {
      key: "topic",
      rung: "apply",
      prompt: <p>How does a topic-neutral analysis answer the objection that after-images are orange but brain processes are not?</p>,
      answer: {
        kind: "choice",
        options: [
          "It says brain processes are orange.",
          "It says reporting an after-image is reporting something going on like what happens when I see an orange, leaving open what it is.",
          "It denies after-images exist.",
          "It says orange is a brain process.",
        ],
        correct: [1],
      },
    },
    {
      key: "kripke",
      rung: "apply",
      prompt: <p>Why, according to Kripke, is pain unlike heat?</p>,
      answer: {
        kind: "choice",
        options: [
          "Pain is hotter.",
          "Heat is picked out by a contingent sensation, but pain is picked out by how it feels, so there is no appearance to explain away.",
          "Heat does not exist.",
          "Pain is a physical substance.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Kripke&rsquo;s argument refute the identity theory? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the necessity of identity and the apparent possibility of pain without C-fibre firing.",
          "Evaluates the disanalogy with heat, or a physicalist reply.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "simple",
      rung: "stretch",
      prompt: <p>Is simplicity a good reason to believe that sensations are brain processes?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Smart’s simplicity argument.",
          "Considers whether simplicity can outweigh the apparent difference between experiences and brain processes.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the type identity theory and why it is a scientific rather than a meaning claim, Smart’s simplicity argument against nomological danglers, the Leibniz’s law objections and the topic-neutral reply, and Kripke’s modal argument.",

  glimpse: (
    <p>
      The next lesson presents the objection that ended the identity theory&rsquo;s dominance: multiple realisability. The
      modal argument returns with zombies, and philosophy of language examines necessary truths known a posteriori.
    </p>
  ),
};
