import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MarginForErrorViz } from "@/components/viz/MarginForErrorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p29.3.3",
  minutes: 90,
  links: {
    revisits: ["p29.3.2", "p29.3.1", "p26.3.1"],
    foreshadows: ["p29.4.1", "p29.4.2", "p31.1.1"],
  },

  puzzle: (
    <>
      <p>
        Suppose there really is a smallest number of grains that makes a heap, say 300. Then 299 grains is not a heap and
        300 is. That sounds absurd. But every alternative so far has given up some part of classical logic. Could the absurd
        answer be the right one, and its absurdity be only an appearance?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set a hidden cutoff and a margin for error, and see which piles you could know to be heaps.</p>
      <MarginForErrorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="epistemicism">
        <p>
          Epistemicism, defended by Roy Sorensen and Timothy Williamson, holds that vague predicates have sharp boundaries,
          and that vagueness is a kind of ignorance: we cannot know where the boundaries lie. Classical logic and bivalence
          both hold. In the sorites, the tolerance premise is simply false; there is an n such that n grains are not a heap
          and n + 1 grains are.
        </p>
      </Definition>

      <Definition title="margins for error">
        <p>
          Williamson explains the ignorance by a principle of safety. A belief counts as knowledge only if it could not
          easily have been false. Our judgements of &lsquo;heap&rsquo; are inexact, so for a pile close to the cutoff we
          could easily have judged a pile just across the line in the same way. Within this margin around the boundary no
          judgement is knowledge, so the boundary itself is unknowable.
        </p>
      </Definition>

      <Remark title="what fixes the boundary">
        <p>
          The obvious objection is that nothing could fix the cutoff at 300 rather than 301. Williamson replies that meaning
          supervenes on use: the whole pattern of our applications of &lsquo;heap&rsquo; determines a sharp extension, by a
          process too complex for us to survey. Small changes in use would shift the cutoff, which is another reason we
          cannot know it.
        </p>
      </Remark>

      <Example title="Chrysippus">
        <p>
          The Stoic Chrysippus is reported to have advised falling silent as a sorites series approaches the borderline. On
          one reading this anticipates epistemicism: there is a fact of the matter, but no assertion about it would be
          knowledge.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Many find sharp boundaries simply incredible, especially for words like &lsquo;tall&rsquo; whose application
          seems to depend on nothing beyond our usage. Others ask why ignorance should feel like indecision: we do not feel
          that there is something we are missing about a borderline case. Williamson answers that this feeling is itself
          predicted by our inability to know where the line is.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>According to epistemicism, what is vagueness?</p>,
      answer: { kind: "choice", options: ["Ignorance of where sharp boundaries lie", "Truth coming in degrees", "Truth on some sharpenings but not others", "The absence of any boundary at all"], correct: [0] },
    },
    {
      key: "margin",
      rung: "check",
      prompt: <p>What does Williamson&rsquo;s margin for error principle require of knowledge?</p>,
      answer: { kind: "choice", options: ["That the belief could not easily have been false", "That the belief be certain", "That everyone share the belief", "That the belief be about observable things"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the cutoff to 300 grains and the margin to 20. How many pile sizes lie within the margin?</p>,
      answer: { kind: "numeric", value: 40, tolerance: 0 },
    },
    {
      key: "premise",
      rung: "apply",
      prompt: <p>Which premise of the sorites does the epistemicist reject?</p>,
      answer: { kind: "choice", options: ["The tolerance premise", "The base premise", "Modus ponens", "The law of excluded middle"], correct: [0] },
    },
    {
      key: "chrys",
      rung: "apply",
      prompt: <p>What did Chrysippus reportedly advise as a sorites series approaches the borderline?</p>,
      answer: { kind: "choice", options: ["Fall silent", "Answer at random", "Assert both answers", "Deny that the series exists"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is it credible that &lsquo;heap&rsquo; has a sharp but unknowable boundary? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the epistemicist view and its motivation in classical logic.",
          "Considers an objection, such as that nothing in use could fix an exact cutoff, or a reply from the margin for error.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can use determine a sharp meaning that no user can discover?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the claim that meaning supervenes on the overall pattern of use.",
          "Considers whether an unsurveyable pattern can fix a precise extension, perhaps comparing other cases.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Each theory of vagueness has made claims about truth: super-truth, degrees of truth, unknowable truth. What, then, is
        truth itself? One influential answer says there is less to it than philosophers have thought.
      </p>
      <p>Next, deflationism about truth.</p>
    </>
  ),
};
