import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ConsistencyTowerViz } from "@/components/viz/ConsistencyTowerViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p17.3.2",
  minutes: 80,
  links: {
    revisits: ["p17.3.1", "p12.3.4", "p12.3.3"],
    foreshadows: ["p17.3.3", "m20.4.3", "p17.5.1"],
  },

  puzzle: (
    <>
      <p>
        Give me any machine that proves theorems of arithmetic. I construct its Gödel sentence and see that it is true, while
        the machine cannot prove it. So I can do something the machine cannot, and this holds for every machine. Does it
        follow that I am not a machine?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Climb the tower of systems, then suppose the starting system is secretly inconsistent.</p>
      <ConsistencyTowerViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the argument">
        <p>
          J. R. Lucas, in &ldquo;Minds, Machines and Gödel&rdquo; (1961), and Roger Penrose, in <em>The Emperor&rsquo;s New
          Mind</em> (1989) and <em>Shadows of the Mind</em> (1994), argued as follows. If a mind were a machine, its
          arithmetical output would be the theorems of some formal system F. By Gödel, F cannot prove its Gödel sentence G.
          But the mind can see that G is true. So the mind is not F, and since F was arbitrary, the mind is not a machine.
        </p>
      </Definition>

      <Example title="the consistency objection">
        <p>
          Hilary Putnam (1960) pointed out the gap: what Gödel gives is that if F is consistent, then G is true. To see G as
          true one must know that F is consistent. For a simple system we may know this; but for a system as complicated as a
          whole human mind, there is no reason to think the mind can tell that it is consistent, and by the second theorem it
          cannot prove so within itself. Human mathematicians have, in fact, believed inconsistent things.
        </p>
      </Example>

      <Definition title="Benacerraf and Gödel">
        <p>
          Paul Benacerraf (1967) concluded that the argument shows at most this: if I am a machine, I cannot know which
          machine I am. Gödel himself, in his 1951 Gibbs lecture, drew only a disjunction: either the human mind infinitely
          surpasses any machine, or there are absolutely undecidable arithmetical problems. He did not claim to know which.
        </p>
      </Definition>

      <Remark title="Penrose’s refinement">
        <p>
          Penrose replied that the relevant system is the one embodying what a mathematician knows to be sound, and that such
          a system must be knowably sound by construction. Critics, among them Solomon Feferman, Stewart Shapiro and David
          Chalmers, argued that this either assumes that we can know our own soundness, which is the point at issue, or leads
          to paradox. Most logicians think the argument fails, but it sharpened the question of what we can know about our own
          reasoning.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "conc",
      rung: "check",
      prompt: <p>What is the conclusion of the Lucas–Penrose argument?</p>,
      answer: {
        kind: "choice",
        options: ["Human minds are not machines.", "Arithmetic is inconsistent.", "Machines can prove their own Gödel sentences.", "Minds are physical."],
        correct: [0],
      },
    },
    {
      key: "gap",
      rung: "check",
      prompt: <p>Which premise do critics such as Putnam say is unsupported?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the mind can know the machine, or itself, to be consistent.",
          "That Gödel’s theorem is true.",
          "That machines follow rules.",
          "That arithmetic contains addition.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, suppose F₀ is secretly inconsistent. How many of the systems on the tower fail to prove their own Gödel sentence?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "godel",
      rung: "apply",
      prompt: <p>What did Gödel himself conclude in his 1951 Gibbs lecture?</p>,
      answer: {
        kind: "choice",
        options: [
          "Either the mind infinitely surpasses any machine, or there are absolutely undecidable arithmetical problems.",
          "The mind is certainly not a machine.",
          "The mind is certainly a machine.",
          "Arithmetic is complete.",
        ],
        correct: [0],
      },
    },
    {
      key: "bena",
      rung: "apply",
      prompt: <p>What did Benacerraf think the argument shows at most?</p>,
      answer: {
        kind: "choice",
        options: [
          "If I am a machine, I cannot know which machine I am.",
          "I am not a machine.",
          "Every machine is inconsistent.",
          "Gödel’s theorem is false.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Gödel&rsquo;s theorem show that minds are not machines? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Lucas–Penrose argument.",
          "States the consistency objection, or Benacerraf’s or Gödel’s weaker conclusion.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Suppose humans are in fact inconsistent reasoners. Does that help or hurt the claim that minds are machines?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that an inconsistent system proves everything, so the Gödelian argument against it has no grip.",
          "Considers whether humans, unlike an inconsistent formal system, can contain contradictions without accepting everything.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Lucas–Penrose argument from Gödel’s theorem, the objection that we cannot know our own consistency, and Gödel’s own disjunction.",

  glimpse: (
    <p>
      Next, computability and the mind: the Church–Turing thesis, what no machine can compute, and whether the mind is a
      computer at all.
    </p>
  ),
};
