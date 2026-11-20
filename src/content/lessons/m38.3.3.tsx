import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SaturationViz } from "@/components/viz/SaturationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m38.3.3",
  minutes: 90,
  links: {
    revisits: ["m38.3.2", "m38.3.1", "m38.2.3"],
    foreshadows: ["m38.5.2", "m38.5.1", "m38.4.1"],
  },

  puzzle: (
    <>
      <p>
        The orders ℤ and ℤ + ℤ, one copy of the integers followed by another, satisfy exactly the same first-order
        sentences. But in ℤ + ℤ an element can have another infinitely far above it, and in ℤ none can. Is there a model of
        this theory that contains every kind of element the theory permits, and is it unique?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a model of the theory of (ℤ, &lt;), and count which types over the element a it realises.</p>
      <SaturationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="saturation">
        <p>
          Let κ be an infinite cardinal. A structure M is <strong>κ-saturated</strong> if for every A ⊆ M with |A| &lt; κ,
          every type over A is realised in M. It is <strong>saturated</strong> if it is |M|-saturated. ω-saturation asks
          that every type over a finite set be realised.
        </p>
      </Definition>

      <Definition title="homogeneity">
        <p>
          M is <strong>strongly homogeneous</strong> if every elementary map between finite tuples, that is any{" "}
          <M>{"\\bar{a} \\mapsto \\bar{b}"}</M> with <M>{"\\mathrm{tp}(\\bar{a}) = \\mathrm{tp}(\\bar{b})"}</M>, extends to an
          automorphism of M. Saturated models are homogeneous in this sense, by a back-and-forth argument that uses
          saturation at every step to find images and preimages.
        </p>
      </Definition>

      <Theorem title="uniqueness and existence">
        <p>
          Two saturated models of the same complete theory with the same cardinality are isomorphic, again by back and
          forth. A complete countable theory has a countable saturated model exactly when <M>{"S_n(\\emptyset)"}</M> is
          countable for every n. Every model has a κ-saturated elementary extension for every κ, built by realising types
          repeatedly in a chain of elementary extensions.
        </p>
      </Theorem>

      <Example title="saturated models in practice">
        <p>
          (ℚ, &lt;) is saturated, and ℤ × ℚ, a copy of ℤ for each rational, is the countable saturated model of the theory
          of (ℤ, &lt;). For algebraically closed fields of characteristic 0, the algebraic closure of{" "}
          <M>{"\\mathbb{Q}(t_1, t_2, \\ldots)"}</M> is the countable saturated model, while the algebraic numbers form the
          prime model, omitting the type of a transcendental; ℂ is saturated, since its transcendence degree equals its
          cardinality.
        </p>
      </Example>

      <Remark title="the monster model">
        <p>
          Model theorists often work inside a single very saturated and homogeneous model, the monster model, in which every
          small model of the theory embeds elementarily and every type over a small set is realised. Questions about all
          models become questions about definable sets and automorphisms of one structure, much as algebraic geometers work
          inside an algebraically closed field of large transcendence degree.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for M to be ω-saturated?</p>,
      answer: { kind: "choice", options: ["Every type over a finite subset of M is realised in M", "M is countable", "Every type over M is isolated", "M has no proper elementary extension"], correct: [0] },
    },
    {
      key: "uniq",
      rung: "check",
      prompt: <p>When are two saturated models of a complete theory isomorphic?</p>,
      answer: { kind: "choice", options: ["When they have the same cardinality", "Always", "Never", "When both are countable and atomic"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose ℤ + ℤ with a in the first copy. How many of the two non-isolated types over a are realised?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "alg",
      rung: "apply",
      prompt: <p>Is the field of algebraic numbers an ω-saturated model of the theory of algebraically closed fields of characteristic 0?</p>,
      answer: { kind: "choice", options: ["No: it omits the type of an element transcendental over ℚ", "Yes, since it is algebraically closed", "Yes, since it is countable", "The question does not make sense"], correct: [0] },
    },
    {
      key: "q",
      rung: "apply",
      prompt: <p>Is (ℚ, &lt;) ω-saturated?</p>,
      answer: { kind: "choice", options: ["Yes: every type over finitely many rationals is realised, by density", "No: it omits √2", "No: it is countable", "Only with endpoints added"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that (ℤ, &lt;) is not ω-saturated.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes, for each n, a formula φₙ(x, a) saying that there are at least n elements strictly between a and x, with a < x.",
          "Notes that every finite subset of {φₙ(x, a) : n ∈ ℕ} is satisfied in ℤ, so it is a type over {a}.",
          "Notes that no integer is infinitely far above a, so the type is omitted in ℤ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Sketch why two countable saturated models of the same complete theory are isomorphic.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Sets up a back-and-forth between enumerations of the two models, extending a finite elementary map at each step.",
          "Uses saturation to realise the type of the next element over the finite tuple already matched.",
          "Concludes that the union of the maps is an isomorphism. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Model theory measures structures by the sets they can define. Computability theory measures sets of numbers by how
        hard they are to compute, relative to one another.
      </p>
      <p>Next, Turing reducibility.</p>
    </>
  ),
};
