import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { DyadicOughtViz } from "@/components/viz/DyadicOughtViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p26.3.2",
  minutes: 90,
  links: {
    revisits: ["p26.3.1", "p26.1.2", "p0.4.2"],
    foreshadows: ["p26.3.3", "p26.3.4", "p26.4.1"],
  },

  puzzle: (
    <>
      <p>
        You ought to post the letter. Then, it seems, you ought to post it or burn it, since that follows logically, and
        what follows from an obligation is obligatory. But burning it is surely not something you ought to do in any sense.
        Can obligation have a logic at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Four worlds, ranked from best to worst. Choose a condition and see which obligations hold given it.
      </p>
      <DyadicOughtViz />
    </>
  ),

  theory: (
    <>
      <Definition title="standard deontic logic">
        <p>
          Georg Henrik von Wright founded deontic logic in 1951. In <strong>standard deontic logic</strong> (SDL), Op,
          &lsquo;it ought to be that p&rsquo;, is a □ operator in the system KD. Permission Pp is ¬O¬p. The axiom D, Op → Pp,
          says obligations are consistent. The frames are serial: each world sees at least one <em>ideal</em> world, where
          everything obligatory holds. T is rejected, since ideal worlds need not include the actual one.
        </p>
      </Definition>

      <Example title="Ross's paradox">
        <p>
          Alf Ross observed that SDL proves Op → O(p ∨ q): if you ought to post the letter, you ought to post it or burn it.
          The inference is valid in any normal modal logic. Defenders reply that it only sounds odd because asserting the
          disjunction suggests that burning would be acceptable.
        </p>
      </Example>

      <Example title="Chisholm's paradox">
        <p>
          Roderick Chisholm, in 1963, gave four sentences that seem consistent and independent: (1) you ought to go and help
          your neighbour; (2) it ought to be that if you go, you tell them you are coming; (3) if you do not go, you ought
          not to tell them; (4) you do not go. Every natural way of writing them in SDL either makes them inconsistent or
          makes one follow from the others. The trouble is <strong>contrary-to-duty</strong> obligations: what you ought to
          do once you have already done wrong.
        </p>
      </Example>

      <Theorem title="dyadic deontic logic">
        <p>
          Bengt Hansson and David Lewis proposed a conditional obligation O(p | q), true when p holds in the best q-worlds.
          Worlds are ranked by how good they are, rather than divided into ideal and non-ideal. Then O(go), O(tell | go),
          O(¬tell | ¬go) and ¬go are jointly consistent, as the visualisation shows.
        </p>
      </Theorem>

      <Remark title="the good Samaritan">
        <p>
          Another puzzle: you ought to help the person who was robbed, and helping them entails that they were robbed. In
          SDL it follows that it ought to be that they were robbed. Puzzles like this suggest that obligation is sensitive
          to the circumstances that are fixed, which dyadic logics try to capture.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sdl",
      rung: "check",
      prompt: <p>Which modal system is standard deontic logic?</p>,
      answer: { kind: "choice", options: ["KD", "S5", "S4", "K4"], correct: [0] },
    },
    {
      key: "t",
      rung: "check",
      prompt: <p>Why does deontic logic reject the axiom T, Op → p?</p>,
      answer: { kind: "choice", options: ["What ought to be is often not the case", "Obligations are inconsistent", "T is not valid in any logic", "Permission requires T"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, given that you stay, is &lsquo;you ought not to tell&rsquo; true or false?</p>,
      answer: { kind: "choice", options: ["True", "False"], correct: [0] },
    },
    {
      key: "ross",
      rung: "apply",
      prompt: <p>Which principle generates Ross&rsquo;s paradox?</p>,
      answer: { kind: "choice", options: ["If p implies q, then Op implies Oq", "Op implies p", "Op implies OOp", "Pp implies Op"], correct: [0] },
    },
    {
      key: "ctd",
      rung: "apply",
      prompt: <p>What is a contrary-to-duty obligation?</p>,
      answer: { kind: "choice", options: ["An obligation that applies once another obligation has been violated", "An obligation that contradicts another", "An obligation with no content", "A permission that cannot be used"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that SDL proves Op → O(p ∨ q).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes p → (p ∨ q) is a tautology, so O(p → (p ∨ q)) by necessitation.",
          "Applies the K axiom to get Op → O(p ∨ q).",
          "States the result as a theorem of SDL.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is Ross&rsquo;s paradox a real problem for deontic logic, or only a quirk of conversation?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the paradox.",
          "Considers a pragmatic reply, such as conversational implicature, or a logical fix.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        &lsquo;There will be a sea battle tomorrow&rsquo; is either true now or false now, it seems. Then is tomorrow already
        settled? Treating past and future as modal operators gives a logic in which to ask.
      </p>
      <p>Next, temporal logic.</p>
    </>
  ),
};
