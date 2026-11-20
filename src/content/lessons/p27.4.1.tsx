import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MosaicLawViz } from "@/components/viz/MosaicLawViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p27.4.1",
  minutes: 90,
  links: {
    revisits: ["p11.4.1", "p11.4.2", "p27.1.2"],
    foreshadows: ["p27.4.2", "p27.5.1", "p27.5.3"],
  },

  puzzle: (
    <>
      <p>
        Hume observed that we never see a necessary connection between a cause and its effect, only one thing followed by
        another, again and again. Perhaps the laws of nature are like that: not rules that make things happen, but
        summaries of what does happen. Can a mere summary explain anything?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change single moments of the mosaic and watch which laws survive.</p>
      <MosaicLawViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Humean supervenience">
        <p>
          David Lewis described the world as a vast <strong>mosaic</strong> of local matters of particular fact: natural
          properties at points of spacetime, related by distance. <strong>Humean supervenience</strong> is the thesis that
          everything else, including laws, chances and causation, supervenes on this mosaic. Two worlds alike in their
          mosaic are alike in every respect.
        </p>
      </Definition>

      <Definition title="the best system account">
        <p>
          Following Mill and Ramsey, Lewis held that the laws are the theorems of the best true deductive system describing
          the mosaic. A system is better the more it says, its <strong>strength</strong>, and the more economically it says
          it, its <strong>simplicity</strong>. The best system balances the two. Chances enter through <strong>fit</strong>:
          a probabilistic system fits better the more likely it makes the actual history.
        </p>
      </Definition>

      <Example title="objections">
        <ul>
          <li>
            Explanation. If laws summarise their instances, then explaining an instance by the law seems circular: the
            instances explain the law, and the law the instances. Armstrong and Tim Maudlin pressed this.
          </li>
          <li>
            Michael Tooley&rsquo;s case. Suppose there are ten kinds of particle, and every pair of kinds interacts by its
            own law, except one pair that never meets. Surely some law governs that pair too, but the mosaic cannot say
            which. Anti-Humeans conclude that laws do not supervene on the mosaic.
          </li>
          <li>
            Entanglement. Quantum mechanics describes entangled states that are not fixed by local facts at each point,
            which threatens the idea that the fundamental facts are local.
          </li>
        </ul>
      </Example>

      <Remark title="the alternative">
        <p>
          David Armstrong, Fred Dretske and Tooley held that laws are relations of necessitation between universals, N(F,
          G), which make every F a G. Bas van Fraassen asked how such a relation could guarantee the regularity, the
          inference problem. The rival anti-Humean view, that properties are powers, is the topic of the next lesson.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hs",
      rung: "check",
      prompt: <p>What is Humean supervenience?</p>,
      answer: { kind: "choice", options: ["The thesis that everything supervenes on the mosaic of local matters of particular fact", "The thesis that laws make events happen", "The thesis that causation is necessary connection", "The thesis that there are no laws"], correct: [0] },
    },
    {
      key: "bsa",
      rung: "check",
      prompt: <p>On the best system account, what makes a system best?</p>,
      answer: { kind: "choice", options: ["It is true and best balances strength and simplicity", "It has the most axioms", "It is believed by most scientists", "It mentions necessary connections"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the mosaic reset to alternating, which system is best?</p>,
      answer: { kind: "choice", options: ["A and B alternate", "No laws", "Every A is followed by B", "Always A"], correct: [0] },
    },
    {
      key: "tool",
      rung: "apply",
      prompt: <p>What does Tooley&rsquo;s case of the particles that never meet aim to show?</p>,
      answer: { kind: "choice", options: ["That some laws are not fixed by the mosaic", "That particles do not exist", "That simplicity is the only virtue", "That every regularity is a law"], correct: [0] },
    },
    {
      key: "inf",
      rung: "apply",
      prompt: <p>What is the inference problem for Armstrong&rsquo;s view?</p>,
      answer: { kind: "choice", options: ["It is unclear how a relation between universals guarantees that every F is a G", "It is unclear how we infer anything at all", "It shows laws are summaries", "It shows the mosaic is not local"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Can Humean laws explain their instances? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the best system account and the circularity worry fairly.",
          "Considers a Humean reply, such as distinguishing scientific explanation from metaphysical grounding.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does quantum entanglement refute Humean supervenience?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why entangled states are not fixed by local facts at each point.",
          "Considers a Humean response, such as moving to a different fundamental space or giving up strict locality.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Anti-Humeans put the necessity back into nature. On one view it lives in properties themselves: to be fragile is
        to be disposed to break when struck.
      </p>
      <p>Next, anti-Humean powers and dispositions.</p>
    </>
  ),
};
