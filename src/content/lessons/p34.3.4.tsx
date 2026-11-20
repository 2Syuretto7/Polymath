import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TreeRhizomeViz } from "@/components/viz/TreeRhizomeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p34.3.4",
  minutes: 90,
  links: {
    revisits: ["p34.3.3", "p9.6.4", "p7.2.1"],
    foreshadows: ["p35.1.1", "p35.1.2", "p35.1.3"],
  },

  puzzle: (
    <>
      <p>
        Philosophy usually starts from identity: first there are things, each the same as itself, and then we notice how
        they differ. What if it were the other way round, with difference first and stable things only temporary
        knots in a field of becoming? And what would it mean to organise thought, or a society, without a root or centre?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Cut a node from the tree and from the rhizome, and count the pieces.</p>
      <TreeRhizomeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="difference and repetition">
        <p>
          Gilles Deleuze, in <em>Difference and Repetition</em> (1968), argues that philosophy has subordinated difference
          to identity, treating it as a relation between things already given. He proposes a philosophy of{" "}
          <strong>difference in itself</strong>, in which identities are produced effects. Drawing on Nietzsche&rsquo;s
          eternal return, he reads repetition not as the return of the same but as the return of difference: what returns
          is the power to differ.
        </p>
      </Definition>

      <Definition title="the virtual and the actual">
        <p>
          Following Bergson, Deleuze distinguishes the <strong>virtual</strong>, a real field of tendencies and
          potentials, from the <strong>actual</strong>, the determinate things in which it is expressed. The virtual is not
          the merely possible: it is fully real, and actualisation is a creative process of differentiation, like an egg
          that develops into an organism. From Spinoza he takes a philosophy of immanence, in which there is no
          transcendent order above the world.
        </p>
      </Definition>

      <Example title="rhizomes">
        <p>
          With the psychoanalyst Félix Guattari, in <em>Anti-Oedipus</em> (1972) and <em>A Thousand Plateaus</em> (1980),
          Deleuze contrasts <strong>arborescent</strong> thought, organised like a tree around roots, hierarchies and
          binary branchings, with the <strong>rhizome</strong>, like crabgrass or a network of burrows, in which any point
          can connect to any other and there is no centre. They also describe desire as productive rather than a lack, and
          capitalism as a system that frees flows of desire only to recapture them.
        </p>
      </Example>

      <Remark title="philosophy as creation">
        <p>
          In <em>What Is Philosophy?</em> (1991), Deleuze and Guattari define philosophy as the creation of concepts,
          alongside art, which creates sensations, and science, which creates functions. Admirers find a liberating ontology
          of becoming; critics such as Alain Badiou argue that Deleuze&rsquo;s thought of the One is less pluralist than it
          seems, while others find the style too loose to assess. His books on cinema remain influential in film studies.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "diff",
      rung: "check",
      prompt: <p>What does Deleuze mean by difference in itself?</p>,
      answer: { kind: "choice", options: ["Difference that is prior to identity, which it produces", "A difference between two already identical things", "A mathematical subtraction", "The absence of any change"], correct: [0] },
    },
    {
      key: "virt",
      rung: "check",
      prompt: <p>How does Deleuze understand the virtual?</p>,
      answer: { kind: "choice", options: ["As fully real potential, actualised through differentiation", "As the merely possible, which is not real", "As a computer simulation", "As an illusion"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the tree and cut the root at the top. Into how many pieces does it fall?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "rhiz",
      rung: "apply",
      prompt: <p>What distinguishes a rhizome from a tree, for Deleuze and Guattari?</p>,
      answer: { kind: "choice", options: ["Any point can connect to any other, with no root or centre", "It grows faster", "It has exactly two branches at each point", "It is always underground"], correct: [0] },
    },
    {
      key: "phil",
      rung: "apply",
      prompt: <p>What, according to Deleuze and Guattari, is philosophy?</p>,
      answer: { kind: "choice", options: ["The creation of concepts", "The analysis of ordinary language", "The discovery of eternal truths", "The history of ideas"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should difference be thought of as prior to identity? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Deleuze’s view of difference in itself.",
          "Considers an objection or an example, such as a living thing that changes.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the internet a rhizome in Deleuze and Guattari&rsquo;s sense, or a new kind of tree?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the contrast between tree and rhizome.",
          "Considers features on both sides, such as open linking and platform centralisation.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The course on continental philosophy after Heidegger is complete, and with it the taught philosophy courses. The
        last stage is your own research: learning to find, map and answer a question that others have not yet settled.
      </p>
      <p>Next, the course on research and thesis begins with reading a literature.</p>
    </>
  ),
};
