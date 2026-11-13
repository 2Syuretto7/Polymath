import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { UniversalsViz } from "@/components/viz/UniversalsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.1.1",
  minutes: 80,
  links: {
    revisits: ["p4.3.4", "p6.3.2", "p4.5.1"],
    foreshadows: ["p11.1.2", "p11.1.3", "p11.2.2"],
  },

  puzzle: (
    <>
      <p>
        A tomato and a cricket ball are different things in different places. Yet they are alike: both are red. Is there
        something they have in common, one and the same thing present in both? If so, what kind of thing could be in two
        places at once?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a property and see how the realist accounts for the things that have it. Then glance at the other theories,
        which the next two lessons examine.
      </p>
      <UniversalsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="universals">
        <p>
          A <strong>universal</strong> is a repeatable entity: one and the same thing that can be had, or{" "}
          <strong>instantiated</strong>, by many particulars at once. <strong>Realism</strong> about universals says there are
          such things, for instance redness, mass, or the relation of being taller than.
        </p>
      </Definition>

      <ArgumentStepViz
        title="The one over many argument"
        steps={[
          { claim: "Many distinct things are of the same type: many things are red.", kind: "premise", note: "A datum everyone accepts." },
          { claim: "This sameness of type needs an explanation.", kind: "premise", note: "Why are they alike, rather than merely all called the same?", objection: "The ostrich nominalist says it is a basic fact needing no explanation." },
          { claim: "The best explanation is that there is one thing they all share.", kind: "inference", note: "Something literally identical in each.", objection: "Classes, resemblance or tropes might explain it with no repeatable entity." },
          { claim: "So there are universals.", kind: "conclusion", note: "One over the many." },
        ]}
      />

      <Example title="Platonic and Aristotelian realism">
        <p>
          For Plato the Forms exist apart from things, outside space and time, and things participate in them. For Aristotle,
          and for David Armstrong today, universals exist only in their instances: redness is wholly present wherever red
          things are, and there are no uninstantiated universals.
        </p>
      </Example>

      <Remark title="sparse or abundant?">
        <p>
          Is there a universal for every predicate? Then &ldquo;is either a cow or a planet&rdquo; and &ldquo;is not
          self-instantiating&rdquo; would name universals, and the second leads to a Russell-style paradox. Armstrong instead
          holds a <strong>sparse</strong> theory: universals are the genuine respects of resemblance, such as charge and mass,
          and it is for natural science to discover which they are.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Can one thing be wholly present in Mumbai and in Delhi at once? And Bradley&rsquo;s regress: if a is F because a
          instantiates F-ness, then instantiation is a relation linking a and F-ness, which seems to need a further
          instantiation relation, and so on. Realists reply that instantiation is not a further universal but a basic tie.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a universal?</p>,
      answer: {
        kind: "choice",
        options: ["A very general belief", "A repeatable entity that many particulars can have at once", "A word that applies to many things", "The class of all things"],
        correct: [1],
      },
    },
    {
      key: "plato",
      rung: "check",
      prompt: <p>How does Aristotelian realism differ from Platonic realism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Aristotelians deny there are universals.",
          "Aristotelians hold that universals exist only in their instances; Platonists that they exist apart from them.",
          "Platonists hold universals are physical.",
          "There is no difference.",
        ],
        correct: [1],
      },
    },
    {
      key: "omm",
      rung: "apply",
      prompt: <p>Which premise of the one over many argument does an ostrich nominalist reject?</p>,
      answer: {
        kind: "choice",
        options: [
          "That many things are of the same type",
          "That sameness of type needs an explanation",
          "That there are particulars",
          "That universals would be abstract",
        ],
        correct: [1],
      },
    },
    {
      key: "sparse",
      rung: "apply",
      prompt: <p>On Armstrong&rsquo;s sparse theory, which predicate most plausibly corresponds to a universal?</p>,
      answer: {
        kind: "choice",
        options: ["has a charge of −1 elementary unit", "is either a cow or a planet", "is mentioned in this lesson", "is not self-instantiating"],
        correct: [0],
      },
    },
    {
      key: "bradley",
      rung: "apply",
      prompt: <p>What is Bradley&rsquo;s regress?</p>,
      answer: {
        kind: "choice",
        options: [
          "If instantiation is itself a relation needing to be instantiated, a further relation is needed, without end.",
          "Every universal must be explained by a larger universal.",
          "Every particular is made of smaller particulars.",
          "Knowledge of universals requires infinitely many beliefs.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the fact that two things are both red need a universal to explain it? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the one over many argument.",
          "Considers an alternative, such as treating it as a brute fact or explaining it by resemblance.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "where",
      rung: "stretch",
      prompt: <p>Can the same universal be wholly present in Mumbai and in Delhi at once, or is that incoherent?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why multiple location seems odd for a single thing.",
          "Considers a reply, such as that universals are a different kind of entity from particulars, or a Platonist view.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a universal is, the one over many argument for realism, the difference between Platonic and Aristotelian realism and between sparse and abundant theories, and one objection such as Bradley's regress.",

  glimpse: (
    <p>
      The next lesson looks at nominalists, who deny universals, and the one after at tropes, which are particular properties.
      Later, the question of abstract objects widens the debate beyond properties.
    </p>
  ),
};
