import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { PolyaNecklaceViz } from "@/components/viz/PolyaNecklaceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.5.2",
  minutes: 90,
  links: {
    revisits: ["m7.4.3", "m7.4.2", "m21.5.1"],
    foreshadows: ["m21.5.3", "m32.2.1", "m32.2.2"],
  },

  puzzle: (
    <>
      <p>
        A jeweller strings six beads on a loop, each black or white. There are <M>{"2^6 = 64"}</M> ways to colour the
        positions, but turning or flipping the loop gives the same necklace. How many different necklaces are there? Dividing
        by the number of symmetries cannot be right, since 64 is not a multiple of 12.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Count necklaces of six beads, allowing rotations only or flips too, with two or three colours.</p>
      <PolyaNecklaceViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Burnside's lemma">
        <p>
          If a finite group <M>G</M> acts on a finite set <M>X</M>, the number of orbits is the average number of fixed points:
        </p>
        <MD>{"|X / G| = \\frac{1}{|G|} \\sum_{g \\in G} |\\mathrm{Fix}(g)|."}</MD>
        <p>
          Count pairs <M>{"(g, x)"}</M> with <M>{"gx = x"}</M> in two ways. Each <M>x</M> contributes{" "}
          <M>{"|G_x| = |G| / |Gx|"}</M>, by orbit-stabiliser, so each orbit contributes exactly <M>{"|G|"}</M>.
        </p>
      </Theorem>

      <Definition title="the cycle index">
        <p>
          Let <M>G</M> permute <M>n</M> positions, and colour positions from <M>k</M> colours. A permutation fixes a colouring
          exactly when every cycle is one colour, so it fixes <M>{"k^{c(g)}"}</M> colourings, where <M>{"c(g)"}</M> counts its
          cycles. Record the cycle type in the <strong>cycle index</strong>
        </p>
        <MD>{"Z_G(x_1, \\dots, x_n) = \\frac{1}{|G|} \\sum_{g \\in G} x_1^{c_1(g)} x_2^{c_2(g)} \\cdots x_n^{c_n(g)},"}</MD>
        <p>
          where <M>{"c_i(g)"}</M> is the number of cycles of length <M>i</M>. Setting every <M>{"x_i = k"}</M> counts the
          colourings up to symmetry.
        </p>
      </Definition>

      <Theorem title="Pólya's enumeration theorem (1937)">
        <p>
          Substituting <M>{"x_i = w_1^i + w_2^i + \\cdots + w_k^i"}</M> into <M>{"Z_G"}</M> gives a polynomial in the colour
          weights whose coefficient of <M>{"w_1^{a_1} \\cdots w_k^{a_k}"}</M> is the number of orbits of colourings using colour{" "}
          <M>j</M> exactly <M>{"a_j"}</M> times.
        </p>
      </Theorem>

      <Example title="necklaces and cubes">
        <p>
          For rotations of <M>n</M> beads, rotating by <M>r</M> has <M>{"\\gcd(r, n)"}</M> cycles, giving{" "}
          <M>{"\\frac{1}{n} \\sum_{d \\mid n} \\varphi(d) k^{n/d}"}</M> necklaces: 14 for six beads in two colours. For the
          faces of a cube under its 24 rotations, the cycle index is{" "}
          <M>{"\\frac{1}{24}(x_1^6 + 6x_1^2x_4 + 3x_1^2x_2^2 + 8x_3^2 + 6x_2^3)"}</M>, and two colours give 10 cubes.
        </p>
      </Example>

      <Remark title="history">
        <p>
          Redfield found the method in 1927, but his paper went unnoticed. Pólya rediscovered it and applied it to count
          chemical isomers, such as the substituted benzenes and alkanes, and to trees. The same averaging over a group returns
          in representation theory, where the number of orbits becomes an inner product of characters.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "burnside",
      rung: "check",
      prompt: <p>What does Burnside&rsquo;s lemma say the number of orbits equals?</p>,
      answer: { kind: "choice", options: ["The average number of points fixed by a group element", "The size of the group", "The size of the set divided by the size of the group", "The number of fixed points of the identity"], correct: [0] },
    },
    {
      key: "fixed",
      rung: "check",
      prompt: <p>A permutation of the positions has c cycles. How many k-colourings does it fix?</p>,
      answer: { kind: "choice", options: ["kᶜ", "cᵏ", "k times c", "k!"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many necklaces of six beads in two colours are there when flips are allowed too?</p>,
      answer: { kind: "numeric", value: 13 },
    },
    {
      key: "three",
      rung: "apply",
      prompt: <p>How many necklaces of six beads in three colours are there, up to rotation only?</p>,
      answer: { kind: "numeric", value: 130 },
    },
    {
      key: "cube",
      rung: "apply",
      prompt: <p>Using the cycle index above, how many ways are there to colour the faces of a cube in three colours, up to rotation?</p>,
      answer: { kind: "numeric", value: 57 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Burnside&rsquo;s lemma.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Counts the pairs (g, x) with gx = x in two ways: as the sum of |Fix(g)| and as the sum of |Gₓ|.",
          "Uses orbit-stabiliser, |Gₓ| = |G| / |Gx|.",
          "Notes each orbit O contributes |O| times |G| / |O| = |G|, and divides by |G|.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>How many necklaces of six beads have exactly three black and three white beads, up to rotation? Use Pólya&rsquo;s theorem or count directly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds the colourings with three of each fixed by each rotation: 20 for the identity, 2 for each rotation by 2 or 4 positions, and none for the others.",
          "Averages to get (20 + 2 + 2) / 6 = 4, or lists the four necklaces.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Ordinary generating functions count partitions and unlabelled objects. For labelled objects, such as permutations,
        set partitions and labelled graphs, the right tool divides the <M>n</M>th coefficient by <M>n!</M>.
      </p>
      <p>
        Next, exponential generating functions: why they multiply when labelled structures combine, the exponential formula
        linking connected and all structures, and counting derangements, Bell numbers and labelled trees.
      </p>
    </>
  ),
};
