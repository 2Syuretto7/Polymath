import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { GroundChainViz } from "@/components/viz/GroundChainViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p27.1.1",
  minutes: 90,
  links: {
    revisits: ["p11.2.3", "p11.2.1", "p26.1.2"],
    foreshadows: ["p27.1.2", "p27.1.3", "p27.4.1"],
  },

  puzzle: (
    <>
      <p>
        Socrates exists, and so does the set whose only member is Socrates. Necessarily, one exists if and only if the
        other does. Still, it seems the set exists because Socrates does, and not the other way round. Modal notions
        cannot tell the two apart. What is this &lsquo;because&rsquo;, and is it a respectable notion?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Click facts to see what each holds in virtue of, and what it helps to ground.</p>
      <GroundChainViz />
    </>
  ),

  theory: (
    <>
      <Definition title="grounding">
        <p>
          <strong>Grounding</strong> is a relation of non-causal metaphysical determination: the facts Γ ground the fact A
          when A obtains in virtue of Γ. Writers such as Kit Fine, Gideon Rosen and Jonathan Schaffer revived the notion
          around 2009–2010, arguing that much traditional metaphysics asks what grounds what, not merely what exists.
        </p>
      </Definition>

      <Definition title="standard structural principles">
        <ul>
          <li><strong>Irreflexivity:</strong> nothing grounds itself.</li>
          <li><strong>Asymmetry:</strong> if A grounds B, B does not ground A.</li>
          <li><strong>Transitivity:</strong> if A grounds B and B grounds C, A grounds C.</li>
          <li><strong>Factivity:</strong> if Γ grounds A, then Γ and A all obtain.</li>
          <li><strong>Necessitation:</strong> if Γ fully grounds A, then necessarily, if Γ obtains, A obtains.</li>
        </ul>
        <p>Each has been challenged; Jonathan Schaffer, for example, offers counterexamples to transitivity.</p>
      </Definition>

      <Example title="why not supervenience?">
        <p>
          Supervenience is defined modally: B supervenes on A if there can be no difference in B without a difference in A.
          But necessary truths supervene on everything, and mutual supervenience is common, as with Socrates and his
          singleton. Supervenience is reflexive and need not be asymmetric, so it cannot capture the direction of
          dependence. Grounding is hyperintensional: necessarily equivalent facts can differ in what they ground.
        </p>
      </Example>

      <Theorem title="logical grounding principles">
        <p>
          Fine&rsquo;s impure logic of ground includes: a true disjunct grounds a disjunction; true conjuncts together ground
          a conjunction; a true instance grounds an existential generalisation. From these, &lsquo;p&rsquo; grounds
          &lsquo;p ∨ p&rsquo;. Paradoxes arise when combined with truth: if p grounds &lsquo;&lsquo;p&rsquo; is true&rsquo;,
          self-referential sentences generate cycles, a puzzle studied by Fine and Krämer.
        </p>
      </Theorem>

      <Remark title="sceptics">
        <p>
          Jessica Wilson argues that &lsquo;grounding&rsquo; is too coarse to do useful work: the real explanatory content
          lies in specific relations such as composition, realisation and determinable–determinate, and the general notion
          adds nothing. Defenders reply that a general notion is needed to state theses such as physicalism, that everything
          is grounded in the physical.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>Which best describes grounding?</p>,
      answer: { kind: "choice", options: ["Non-causal metaphysical determination: one fact obtains in virtue of others", "Causation between events", "Logical entailment between sentences", "Mere necessary co-existence"], correct: [0] },
    },
    {
      key: "hyper",
      rung: "check",
      prompt: <p>Why can supervenience not capture the asymmetry between Socrates and his singleton?</p>,
      answer: { kind: "choice", options: ["Each supervenes on the other, since they necessarily co-exist", "Supervenience is causal", "Sets do not exist", "Supervenience is irreflexive"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, select &lsquo;the ball is coloured&rsquo;. How many facts does it hold in virtue of, directly or indirectly?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "disj",
      rung: "apply",
      prompt: <p>On Fine&rsquo;s principles, what grounds &lsquo;Socrates is human or a stone&rsquo;?</p>,
      answer: { kind: "choice", options: ["Socrates is human", "Socrates is a stone", "Nothing: it is fundamental", "Both disjuncts together"], correct: [0] },
    },
    {
      key: "physicalism",
      rung: "apply",
      prompt: <p>Which thesis is naturally stated in terms of grounding?</p>,
      answer: { kind: "choice", options: ["Every fact is grounded in physical facts", "Every event has a cause", "Every sentence is true or false", "Every set has a power set"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is grounding a single relation, or just a label for many specific ones? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a position: unity (a general relation) or Wilson’s pluralism (specific relations only).",
          "Gives a consideration for it, such as stating physicalism, or the explanatory work done by specific relations.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Must every chain of grounds end in something fundamental?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains well-foundedness and the alternative of infinite descent, as in gunk or endless levels.",
          "Considers an argument on one side, such as the claim that reality would otherwise be ‘borrowed’ without end.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If some facts ground the others, which facts are at the bottom? The fundamental may be a set of facts, a structure
        of relations, or something else again.
      </p>
      <p>Next, fundamentality and structure.</p>
    </>
  ),
};
