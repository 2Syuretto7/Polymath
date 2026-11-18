import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PremiseRejectViz, type Premise } from "@/components/viz/PremiseRejectViz";
import type { LessonContent } from "@/lib/types";

const PREMISES: Premise[] = [
  { text: "We feel genuine emotions, such as pity and fear, towards characters we know to be fictional.", who: "Walton rejects this", why: "Kendall Walton: Charles, watching a horror film, does not really fear the green slime, or he would leave the cinema. He feels quasi-fear, a physiological state, and make-believedly fears the slime as part of a game of make-believe the film prescribes." },
  { text: "To feel pity or fear for something, we must believe that it exists.", who: "Thought theorists reject this", why: "Peter Lamarque and Noël Carroll: emotions can be caused by thoughts we entertain without belief. Standing safely at a cliff edge, the vivid thought of falling makes us afraid. Fiction supplies such thoughts." },
  { text: "We do not believe that fictional characters exist.", who: "Illusion theorists reject this", why: "Coleridge’s ‘willing suspension of disbelief’: absorbed in a story, we half believe it for a time. Critics reply that if we believed, we would phone the police, not stay in our seats." },
];

export const lesson: LessonContent = {
  id: "p24.3.2",
  minutes: 90,
  links: {
    revisits: ["p24.3.1", "p24.2.1", "p7.5.1"],
    foreshadows: ["p24.4.1", "p24.4.2", "p22.6.3"],
  },

  puzzle: (
    <>
      <p>
        You cry when a character dies in a film you know is made up. If a friend told you a sad story and then admitted it was
        invented, your sadness would vanish, and you might feel a fool. Why does knowing a story is fiction not stop the tears?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Three plausible claims cannot all be true. Reject each in turn to see who has rejected it, and why.
      </p>
      <PremiseRejectViz
        premises={PREMISES}
        conclusion="the three claims are inconsistent, so at least one of them must be given up."
        intro="Colin Radford kept all three and concluded that our emotional response to fiction is irrational, though natural. Most philosophers prefer to reject a premise."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="the paradox">
        <p>
          Colin Radford asked in 1975: how can we be moved by the fate of Anna Karenina? We seem to pity her. Pity seems to require
          believing that someone suffers. We know she does not exist. Radford&rsquo;s answer was that our response is
          irrational and inconsistent, though it is natural and we would not want to lose it.
        </p>
      </Definition>

      <Example title="make-believe">
        <p>
          Kendall Walton (1978) said fiction is a prop in a game of make-believe. When Charles shrieks at the slime, it is
          fictional that he fears it, and he really feels the racing heart of quasi-fear. But he has no motivation to flee. So
          we do not feel real pity for Anna; we feel quasi-pity, and in the game we pity her. Critics say this underdescribes our
          tears, which feel like the real thing.
        </p>
      </Example>

      <Example title="thought theory">
        <p>
          On the <strong>thought theory</strong>, emotions need not rest on beliefs. A judgement-free thought, vividly entertained,
          can move us: imagining a loved one dying can bring tears though we know they are well. Fiction supplies thoughts held
          in mind without belief. This keeps the emotions genuine, at the cost of explaining why they do not lead to action.
        </p>
      </Example>

      <Definition title="the cognitive theory of emotion">
        <p>
          The second premise belongs to a cognitive theory of emotion: fear is, or involves, a judgement that something is
          dangerous. Hume noted that poetry can make ideas lively enough to move the passions, though we never take it
          for fact. Perceptual or appraisal theories, on which emotions are fast evaluations not needing belief, make the
          paradox much less pressing.
        </p>
      </Definition>

      <Remark title="why it matters">
        <p>
          The paradox is not only about art. It bears on how emotions relate to belief, on whether imagination can guide action,
          and on why we value tragedy. Aristotle&rsquo;s catharsis assumed we really feel pity and fear in the theatre; the
          rasa theory of Indian aesthetics gives a different answer, which we meet soon.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "radford",
      rung: "check",
      prompt: <p>What was Radford&rsquo;s own conclusion?</p>,
      answer: { kind: "choice", options: ["Our emotional response to fiction is irrational, though natural", "We do not really feel emotions for fiction", "We believe fictional characters exist", "Emotions never need beliefs"], correct: [0] },
    },
    {
      key: "walton",
      rung: "check",
      prompt: <p>What does Walton say Charles feels at the horror film?</p>,
      answer: { kind: "choice", options: ["Quasi-fear, while make-believedly fearing the slime", "Genuine fear of the slime", "Nothing at all", "Fear of the cinema"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, who rejects the claim that pity requires believing in what we pity?</p>,
      answer: { kind: "choice", options: ["Thought theorists such as Lamarque and Carroll", "Walton", "Illusion theorists", "Radford"], correct: [0] },
    },
    {
      key: "cliff",
      rung: "apply",
      prompt: <p>Standing safely behind a railing at a cliff edge, you feel fear when you imagine falling. Which view does this support?</p>,
      answer: { kind: "choice", options: ["The thought theory", "The illusion theory", "Radford’s irrationalism", "None of them"], correct: [0] },
    },
    {
      key: "police",
      rung: "apply",
      prompt: <p>What is the main objection to the illusion theory?</p>,
      answer: { kind: "choice", options: ["If we really believed, we would act, for example by trying to warn or rescue the character", "It makes emotions too weak", "It ignores the author’s intention", "It denies that fiction exists"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Which claim in the paradox of fiction should we give up? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the three claims, or at least the one rejected and why the others hold.",
          "Considers an objection to the chosen solution, such as tears feeling real or the lack of action.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is pity for a character in a novel based on a true story any different from pity for a wholly invented one?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that belief in the real person might make the emotion more like ordinary pity.",
          "Considers whether the fictional elements still need the paradox’s solution.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If fiction moves us, it can move us towards good or bad attitudes. A novel may invite admiration for cruelty; a film
        may be beautifully made propaganda. Does a moral flaw in a work make it worse as art?
      </p>
      <p>Next, aesthetic and moral value.</p>
    </>
  ),
};
