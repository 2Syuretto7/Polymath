import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { NecklaceViz } from "@/components/viz/NecklaceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.4.3",
  minutes: 85,
  links: {
    revisits: ["m7.4.2", "m4.1.2", "m7.3.2"],
    foreshadows: ["m21.5.2", "m7.4.4", "m7.5.1"],
  },

  puzzle: (
    <>
      <p>
        How many different necklaces can be made from six beads, each black or white? There are <M>{"2^6 = 64"}</M> ways to
        colour six positions, but turning a necklace round gives the same necklace, so many colourings count as one. Dividing
        by 6 gives <M>{"10\\tfrac23"}</M>, which cannot be right. The orbits have different sizes. Is there a way to count them
        without listing them all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose the number of beads and colours. For each rotation, count the colourings it leaves unchanged, and average.
      </p>
      <NecklaceViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Burnside's lemma">
        <p>
          If a finite group <M>{"G"}</M> acts on a finite set <M>{"X"}</M>, the number of orbits is the average number of
          points fixed by an element:
        </p>
        <MD>{"\\#\\text{orbits} = \\frac{1}{|G|}\\sum_{g \\in G} |\\text{Fix}(g)|, \\qquad \\text{Fix}(g) = \\{x : g\\cdot x = x\\}."}</MD>
      </Theorem>

      <Proof>
        <p>
          Count the pairs <M>{"(g, x)"}</M> with <M>{"g \\cdot x = x"}</M> in two ways. By <M>{"g"}</M>, there are{" "}
          <M>{"\\sum_g |\\text{Fix}(g)|"}</M>. By <M>{"x"}</M>, there are <M>{"\\sum_x |G_x|"}</M>. By orbit-stabiliser,{" "}
          <M>{"|G_x| = |G|/|G \\cdot x|"}</M>, so the points of each orbit together contribute exactly <M>{"|G|"}</M>. So the
          sum is <M>{"|G|"}</M> times the number of orbits.
        </p>
      </Proof>

      <Example title="necklaces and cubes">
        <p>
          For six beads in two colours under rotation, the identity fixes 64 colourings, rotations by 1 or 5 steps fix 2, by 2
          or 4 steps fix 4, and by 3 steps fix 8: <M>{"(64 + 2 + 4 + 8 + 4 + 2)/6 = 14"}</M> necklaces. For the faces of a cube
          in two colours under its 24 rotations, the same method gives 10 distinct cubes.
        </p>
      </Example>

      <Remark title="history and generalisation">
        <p>
          The lemma was known to Cauchy and Frobenius before Burnside put it in his 1897 textbook, which is why some call it
          the lemma that is not Burnside&rsquo;s. George Pólya refined it in 1937 to count colourings by how many of each
          colour they use, with applications to counting chemical isomers and graphs.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does Burnside&rsquo;s lemma say the number of orbits equals?</p>,
      answer: {
        kind: "choice",
        options: ["|X| / |G|", "The average number of points fixed by an element of G", "The number of elements of G", "The largest stabiliser"],
        correct: [1],
      },
    },
    {
      key: "four",
      rung: "check",
      prompt: <p>How many necklaces of 4 beads in 2 colours are there, up to rotation?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "five",
      rung: "apply",
      prompt: <p>How many necklaces of 5 beads in 3 colours are there, up to rotation? Since 5 is prime, every non-identity rotation fixes only the 3 one-coloured necklaces.</p>,
      answer: { kind: "numeric", value: 51 },
    },
    {
      key: "fix",
      rung: "apply",
      prompt: <p>With 8 beads in 2 colours, how many colourings does rotation by 2 steps fix?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "square",
      rung: "apply",
      prompt: <p>Colour the 4 corners of a square black or white. How many colourings are there up to rotation, using C₄?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>In the proof, explain why the points of one orbit together contribute exactly |G| to the sum of the stabiliser sizes. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes each point x in the orbit has |G_x| = |G| / |orbit| by orbit-stabiliser.",
          "Sums over the |orbit| points to get |G|.",
        ],
      },
    },
    {
      key: "flip",
      rung: "stretch",
      prompt: <p>If necklaces can also be turned over, the group is the dihedral group of order 2n. Would you expect more or fewer necklaces? Check with 4 beads and 2 colours.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expects fewer or equal, since more colourings are identified.",
          "Computes for 4 beads: (16 + 2 + 4 + 2 + 4 + 4 + 8 + 8)/8 = 6, the same here, or explains the method. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Burnside's lemma, its proof by counting fixed pairs in two ways, and how to use it to count necklaces up to rotation.",

  glimpse: (
    <p>
      The next lesson turns the counting on the group itself, through conjugation, to give the class equation. Combinatorics
      develops Pólya counting, which refines Burnside&rsquo;s lemma to keep track of the colours used.
    </p>
  ),
};
