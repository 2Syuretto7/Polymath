import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { KripkeToposViz } from "@/components/viz/KripkeToposViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m39.4.3",
  minutes: 90,
  links: {
    revisits: ["m39.1.1", "m39.3.1", "m39.2.1"],
    foreshadows: ["m38.1.1", "m38.1.2", "m38.2.1"],
  },

  puzzle: (
    <>
      <p>
        In sets, a subset of X is the same as a function from X to the two truth values. In sheaves on a space, or in sets
        that grow over time, the same trick works, but the object of truth values is bigger, and the law of excluded middle
        can fail. What kind of category has its own object of truth values, and its own logic?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose when p becomes true, and see which formulas hold at each stage.</p>
      <KripkeToposViz />
    </>
  ),

  theory: (
    <>
      <Definition title="elementary toposes">
        <p>
          An <strong>elementary topos</strong> is a category with finite limits, exponentials <M>{"Y^X"}</M> (so that{" "}
          <M>{"\\mathrm{Hom}(Z \\times X, Y) \\cong \\mathrm{Hom}(Z, Y^X)"}</M>), and a <strong>subobject classifier</strong>
          : an object Ω with a map true : 1 → Ω such that every subobject of every X is the pullback of true along a unique
          map X → Ω. So <M>{"\\mathrm{Sub}(X) \\cong \\mathrm{Hom}(X, \\Omega)"}</M>, naturally in X.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          In sets, Ω = {"{"}0, 1{"}"}. In presheaves on a category C, Ω(c) is the set of sieves on c, collections of arrows
          into c closed under precomposition. In sheaves on a space X, Ω(U) is the set of open subsets of U. For the stages
          0 ≤ 1 ≤ 2 ≤ …, a truth value at stage 0 says from which stage on something holds.
        </p>
      </Example>

      <Theorem title="internal logic">
        <p>
          In any topos, each Sub(X) is a Heyting algebra, and Ω is an internal Heyting algebra. Logical connectives and
          quantifiers can be interpreted inside the topos, giving sound semantics for intuitionistic higher-order logic.
          Excluded middle holds exactly when Ω is a Boolean algebra, as in sets but not in most sheaf toposes.
        </p>
      </Theorem>

      <Remark title="geometry and logic">
        <p>
          Grothendieck introduced toposes of sheaves on sites as generalised spaces for étale cohomology; Lawvere and Tierney
          found the elementary axioms around 1970. Cohen&rsquo;s forcing can be read as building a topos of sheaves in which
          the continuum hypothesis fails. Every geometric theory has a classifying topos, whose points are the models of the
          theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "omega",
      rung: "check",
      prompt: <p>What does a subobject classifier Ω classify?</p>,
      answer: { kind: "choice", options: ["Subobjects: Sub(X) corresponds to maps X → Ω", "Isomorphism classes of objects", "Limits of diagrams", "Exponential objects"], correct: [0] },
    },
    {
      key: "set",
      rung: "check",
      prompt: <p>What is Ω in the category of sets?</p>,
      answer: { kind: "choice", options: ["A two-element set of truth values", "The empty set", "The natural numbers", "The power set of every set"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with p becoming true at stage 3, from which stage on does p ∨ ¬p hold?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "sh",
      rung: "apply",
      prompt: <p>In sheaves on a space X, what is Ω(U)?</p>,
      answer: { kind: "choice", options: ["The set of open subsets of U", "The two-element set", "The points of U", "The closed subsets of X"], correct: [0] },
    },
    {
      key: "logic",
      rung: "apply",
      prompt: <p>What is the internal logic of a topos in general?</p>,
      answer: { kind: "choice", options: ["Intuitionistic: excluded middle may fail", "Always classical", "Paraconsistent", "Propositional only"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that in sets, subsets of X correspond to functions X → {"{"}0, 1{"}"}, with each subset the pullback of 1.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sends a subset S to its characteristic function, 1 on S and 0 off it.",
          "Notes the pullback of {1} along the characteristic function is S.",
          "Shows uniqueness: any function with pullback S must take value 1 exactly on S.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>In sets through time, explain why ¬¬p holds at every stage when p becomes true at some stage.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes ¬p holds at a stage only if p holds at no later stage, so ¬p holds nowhere.",
          "Notes ¬¬p holds at a stage if ¬p holds at no later stage, which is true everywhere.",
          "Contrasts this with p itself, which fails before stage k. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The course on category theory is complete. A topos is a universe in which mathematics can be done; model theory
        asks the reverse question, which universes satisfy a given theory, and how far a theory can tell its models apart.
      </p>
      <p>Next, the course on model theory and computability begins with elementary equivalence.</p>
    </>
  ),
};
