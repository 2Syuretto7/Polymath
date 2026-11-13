import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { KindSamplesViz } from "@/components/viz/KindSamplesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p15.2.3",
  minutes: 75,
  links: {
    revisits: ["p15.2.2", "p15.2.1", "p12.6.2"],
    foreshadows: ["p29.2.1", "p27.2.3", "p15.3.1"],
  },

  puzzle: (
    <>
      <p>
        Before 1800 nobody knew what water is made of. Ask a villager then what &ldquo;water&rdquo; means and they would say:
        the clear, drinkable stuff in rivers and wells. Ice is not clear liquid, and fool&rsquo;s gold glitters like gold. So what
        were people talking about when they said &ldquo;water&rdquo; and &ldquo;gold&rdquo;, before science told them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a word and a theory, and see which samples the word applies to.</p>
      <KindSamplesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="natural kind terms">
        <p>
          A <strong>natural kind term</strong> names a kind found in nature, such as water, gold, tiger or electron, as opposed
          to kinds we make, like chair. Kripke and Hilary Putnam argued that such terms work like names. They are introduced
          for samples, &ldquo;this stuff here&rdquo;, and apply to whatever has the same underlying nature as those samples.
          They are rigid: &ldquo;water&rdquo; picks out H₂O in every possible world.
        </p>
      </Definition>

      <Example title="theoretical identities">
        <p>
          If &ldquo;water&rdquo; and &ldquo;H₂O&rdquo; are both rigid and co-refer, then &ldquo;water is H₂O&rdquo; is
          necessary: there is no possible world where water is not H₂O. A world with XYZ in the rivers is a world without
          water, not one where water is XYZ. Yet the identity was found by experiment. Similar claims hold for &ldquo;gold has
          atomic number 79&rdquo; and &ldquo;heat is molecular motion&rdquo;.
        </p>
      </Example>

      <Remark title="stereotypes and the division of labour">
        <p>
          Putnam held that a competent speaker knows the <strong>stereotype</strong>, such as gold&rsquo;s being yellow and
          valuable, but the stereotype does not fix the extension. Most people cannot tell gold from brass; they defer to
          experts who can. Putnam called this the <strong>division of linguistic labour</strong>: reference is fixed by the
          community and the world together, not by each mind alone.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          It is not clear that kinds have single hidden essences. Tea and sea water are both mostly H₂O, yet we do not call tea
          water; and biological species seem defined by history more than by any inner structure. Some argue that what counts
          as &ldquo;the same stuff&rdquo; depends on our interests, so convention returns at the centre of the theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>On the Kripke and Putnam view, what does &ldquo;water&rdquo; apply to?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whatever has the same underlying nature as the samples the term was introduced for.",
          "Whatever is clear and drinkable.",
          "Whatever speakers call water.",
          "Only the water on Earth today.",
        ],
        correct: [0],
      },
    },
    {
      key: "status",
      rung: "check",
      prompt: <p>On this view, what is the status of &ldquo;water is H₂O&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: ["Necessary, and known a posteriori", "Contingent, and known a priori", "Analytic", "False on Twin Earth"],
        correct: [0],
      },
    },
    {
      key: "pyrite",
      rung: "apply",
      prompt: <p>In the visualisation, which theory counts iron pyrites as gold?</p>,
      answer: { kind: "choice", options: ["The descriptive theory", "Kripke and Putnam", "Both", "Neither"], correct: [0] },
    },
    {
      key: "ice",
      rung: "apply",
      prompt: <p>Why do Kripke and Putnam count ice as water?</p>,
      answer: {
        kind: "choice",
        options: [
          "It has the same underlying nature, H₂O, though it does not fit the stereotype of a clear liquid.",
          "It melts into a clear liquid.",
          "People call it frozen water.",
          "It is found in rivers.",
        ],
        correct: [0],
      },
    },
    {
      key: "labour",
      rung: "apply",
      prompt: <p>What is the division of linguistic labour?</p>,
      answer: {
        kind: "choice",
        options: [
          "Ordinary speakers rely on experts to fix exactly what a term like “gold” applies to.",
          "Different words are used by different professions.",
          "Translators divide texts between them.",
          "Children learn words from parents.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Could water have been something other than H₂O? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Kripke and Putnam view that “water is H₂O” is necessary.",
          "Considers the intuition that it could have turned out otherwise, and how the view explains it, for instance as an epistemic possibility.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Tea and sea water are both mostly H₂O, yet we call only one of them water. Does this undermine the view?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the challenge: sameness of chemical make-up does not seem to match our use of the word.",
          "Considers a reply, such as appeal to purity, to our interests, or to a looser notion of the same kind.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Kripke and Putnam treat natural kind terms like water and gold, why water is H₂O would be necessary but known a posteriori, Putnam's stereotypes and division of linguistic labour, and one objection.",

  glimpse: (
    <p>
      Later lessons examine the necessary a posteriori and how we know what is possible. The next chapter turns from reference
      to meaning itself, starting with the verificationist view that a sentence means its method of verification.
    </p>
  ),
};
