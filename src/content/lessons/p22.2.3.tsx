import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { AbstractionCountViz } from "@/components/viz/AbstractionCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p22.2.3",
  minutes: 85,
  links: {
    revisits: ["p22.2.2", "p22.2.1", "m1.8.3"],
    foreshadows: ["p22.6.1", "p22.6.4", "p22.5.1"],
  },

  puzzle: (
    <>
      <p>
        Frege&rsquo;s system collapsed because of Basic Law V. But he used that law for only one thing: to derive
        Hume&rsquo;s principle, which says when two concepts have the same number. What if you threw Basic Law V away and
        started from Hume&rsquo;s principle itself? Would logicism be saved?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Count the objects an abstraction principle needs, and compare them with the objects there are.</p>
      <AbstractionCountViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Frege's theorem">
        <p>
          In second-order logic, <strong>Hume&rsquo;s principle</strong> alone implies the Dedekind-Peano axioms of arithmetic,
          once 0, successor and natural number are defined as Frege defined them. This was noticed by Charles Parsons and
          brought to the fore by Crispin Wright in 1983, and proved in detail by George Boolos and Richard Heck. And
          Hume&rsquo;s principle is consistent: it is as consistent as second-order arithmetic.
        </p>
      </Definition>

      <Definition title="neo-logicism">
        <p>
          Wright and Bob Hale propose that Hume&rsquo;s principle is an <strong>abstraction principle</strong>, of the form
          &lsquo;the abstract of F equals the abstract of G exactly when F and G are related by E&rsquo;, for an equivalence E,
          and that such a principle can implicitly define a concept, here <em>number</em>. If so, it is analytic or close to
          it, and arithmetic is known a priori from logic plus a definition: logicism in a new form.
        </p>
      </Definition>

      <Example title="the bad company objection">
        <p>
          Not every abstraction principle is acceptable. Basic Law V has the same form and is inconsistent: it needs more
          abstracts than objects, by Cantor&rsquo;s theorem. Worse, some principles are consistent but cannot hold together
          with Hume&rsquo;s: the Nuisance principle has only finite models, while Hume&rsquo;s principle has only infinite
          ones. So the neo-logicist needs a principled test, such as conservativeness or stability, separating good
          abstractions from bad.
        </p>
      </Example>

      <Remark title="other doubts">
        <p>
          Boolos asked whether a principle that implies the existence of infinitely many objects can be analytic. The Julius
          Caesar problem returns, since Hume&rsquo;s principle still does not say whether Caesar is a number. Dummett worried
          about impredicativity: the concepts quantified over include those defined using numbers. And extending the method
          to real analysis and set theory has proved much harder than to arithmetic.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "theorem",
      rung: "check",
      prompt: <p>What is Frege&rsquo;s theorem?</p>,
      answer: { kind: "choice", options: ["Hume’s principle in second-order logic implies the axioms of arithmetic", "Basic Law V is consistent", "Arithmetic is incomplete", "Numbers are sets"], correct: [0] },
    },
    {
      key: "bad",
      rung: "check",
      prompt: <p>What is the bad company objection?</p>,
      answer: { kind: "choice", options: ["Some principles of the same form as Hume’s are inconsistent or incompatible with it", "Frege kept bad company with Russell", "Hume’s principle is inconsistent", "Abstraction is not logic"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with 3 objects, how many abstracts does Basic Law V need?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "infinite",
      rung: "apply",
      prompt: <p>Why can Hume&rsquo;s principle not hold in a domain of n objects?</p>,
      answer: { kind: "choice", options: ["It needs n + 1 numbers, for the sizes 0 to n", "It needs only one object", "Numbers are not objects", "Finite domains have no concepts"], correct: [0] },
    },
    {
      key: "nuisance",
      rung: "apply",
      prompt: <p>What is the problem with the Nuisance principle?</p>,
      answer: { kind: "choice", options: ["It is consistent but holds only in finite domains, so it conflicts with Hume’s principle", "It is inconsistent on its own", "It implies Basic Law V", "It defines the real numbers"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can Hume&rsquo;s principle be analytic, given that it implies there are infinitely many objects? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the neo-logicist view that the principle implicitly defines the concept of number.",
          "Considers Boolos’s objection that no analytic truth should entail the existence of infinitely many things.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>What test should separate acceptable abstraction principles from bad company? Suggest one and test it on the examples.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Proposes a criterion, such as consistency, conservativeness or compatibility with other good principles.",
          "Checks it against Basic Law V, Hume’s principle and the Nuisance principle.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Another response to the paradoxes gave up on reducing mathematics to logic. Instead, formalise mathematics
        completely, and prove by the most secure methods that the formal system can never produce a contradiction.
      </p>
      <p>
        Next, Hilbert&rsquo;s programme: the axiomatic method, finitary and ideal mathematics, and the plan to secure
        Cantor&rsquo;s paradise with a consistency proof.
      </p>
    </>
  ),
};
