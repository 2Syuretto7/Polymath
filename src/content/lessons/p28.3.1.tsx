import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DeGrootViz } from "@/components/viz/DeGrootViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p28.3.1",
  minutes: 90,
  links: {
    revisits: ["p28.2.3", "p10.6.2", "p28.1.3"],
    foreshadows: ["p28.3.2", "p28.4.2", "p28.4.1"],
  },

  puzzle: (
    <>
      <p>
        Two doctors, equally skilled and given the same test results, reach different diagnoses. Each knows the other is as
        careful as they are. Should both become less sure? And if philosophers equally careful disagree about the answer to
        this very question, what should they do then?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose how four disagreeing peers weight one another, and follow their credences through rounds of revision.</p>
      <DeGrootViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the equal weight view">
        <p>
          Adam Elga (2007) and David Christensen (2007) defend <strong>conciliationism</strong>: on learning that a peer
          disagrees, give their view the same weight as your own. Christensen&rsquo;s <strong>independence</strong>{" "}
          principle says that, in judging whether the peer has erred, you may not rely on the reasoning under dispute.
        </p>
      </Definition>

      <Definition title="steadfast and total evidence views">
        <p>
          Thomas Kelly (2005, 2010) argues that the person who in fact evaluated the evidence correctly may stay largely
          put: what is rational depends on the total evidence, which includes the first-order evidence and not only the
          fact of disagreement. Jennifer Lackey&rsquo;s justificationist view lets very high justified confidence resist
          revision.
        </p>
      </Definition>

      <Example title="consensus by averaging">
        <p>
          Keith Lehrer and Carl Wagner (1981), following Morris DeGroot (1974), modelled a group in which each member
          repeatedly replaces their credence with a weighted average of everyone&rsquo;s. If the weights connect everyone,
          the group converges to a consensus; the visualisation shows how the weights determine which one.
        </p>
      </Example>

      <Remark title="the self-undermining problem">
        <p>
          Many peers reject conciliationism. Applied to itself, the equal weight view then seems to tell its defenders to
          give it up. Elga replies that any fundamental policy must be dogmatic about itself; critics such as Brian
          Weatherson see this as special pleading. The debate connects with the uniqueness thesis: if the evidence
          permits more than one rational credence, disagreement may show only that a peer chose differently.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ew",
      rung: "check",
      prompt: <p>What does the equal weight view say?</p>,
      answer: { kind: "choice", options: ["Give a disagreeing peer’s view the same weight as your own", "Ignore the views of peers", "Always defer to the more confident person", "Suspend judgement on every question"], correct: [0] },
    },
    {
      key: "indep",
      rung: "check",
      prompt: <p>What does Christensen&rsquo;s independence principle require?</p>,
      answer: { kind: "choice", options: ["Assessing whether the peer erred without relying on the disputed reasoning", "Reasoning independently of all evidence", "Never consulting other people", "Treating every peer as equally reliable on every topic"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose equal weight. What credence does everyone have after one round?</p>,
      answer: { kind: "numeric", value: 0.525, tolerance: 0.001 },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>Two peers have credences 0.8 and 0.4. Under the equal weight view, what credence should each adopt?</p>,
      answer: { kind: "numeric", value: 0.6, tolerance: 0.001 },
    },
    {
      key: "self",
      rung: "apply",
      prompt: <p>What is the self-undermining objection to conciliationism?</p>,
      answer: { kind: "choice", options: ["Since peers disagree about conciliationism, it seems to require giving itself up", "It makes everyone certain", "It cannot handle disagreement between two people", "It ignores the fact of disagreement"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>When you learn that an epistemic peer disagrees with you, should you lower your confidence? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States conciliationism or a steadfast view fairly.",
          "Considers a reason on the other side, such as independence, total evidence or self-undermining.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a conciliationist consistently respond to disagreement about conciliationism?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the self-undermining problem.",
          "Considers a reply, such as Elga’s dogmatism about fundamental policies, or a restriction of the view.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A peer&rsquo;s disagreement is evidence not about the question itself but about whether you reasoned well. Evidence
        of that kind can come from many sources: fatigue, drugs, bias, or thin air at high altitude.
      </p>
      <p>Next, higher-order defeat.</p>
    </>
  ),
};
