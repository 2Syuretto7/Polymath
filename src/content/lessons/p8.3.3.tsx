import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SchemaViz } from "@/components/viz/SchemaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p8.3.3",
  minutes: 75,
  links: {
    revisits: ["p8.3.2", "p8.2.2", "p7.4.1"],
    foreshadows: ["p8.3.4", "p8.6.1", "p19.1.1"],
  },

  puzzle: (
    <>
      <p>
        The concept of a plate and the shape of a plate have something in common: the roundness you think in the one you can
        see in the other. But the concept of cause looks nothing like anything you can see. No sensation is causal in the way
        a plate is round. If the categories are so unlike what intuition gives us, how can they ever be applied to it? Kant
        called his answer &ldquo;an art concealed in the depths of the human soul&rdquo;.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Increase the number of dots. At some point you stop seeing the number and start relying on a rule. Below are the rules
        Kant gives for the categories.
      </p>
      <SchemaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="schema">
        <p>
          A <strong>schema</strong> is a rule or procedure of the imagination for providing a concept with its image. It is
          not itself an image. The image of five dots is a particular; the schema of number is the method of representing any
          number by successive addition. Even empirical concepts work through schemata: the concept of a dog is a rule by
          which my imagination can draw the shape of a four-footed animal in general, without being tied to any particular
          shape.
        </p>
      </Definition>

      <Definition title="transcendental schemata">
        <p>
          The categories have no images at all, so they need a mediating representation that is both intellectual and
          sensible. Kant finds it in time, the form of all intuition. A <strong>transcendental schema</strong> is a
          determination of time according to a rule. The schema of substance is the permanence of the real in time; of cause,
          succession according to a rule; of community, coexistence according to a rule; of necessity, existence at all
          times.
        </p>
      </Definition>

      <Example title="Berkeley's triangle">
        <p>
          Berkeley denied that we have abstract general ideas: any image of a triangle is scalene, isosceles or equilateral.
          Kant agrees about images, and that is exactly why he says concepts work through schemata. The schema of a triangle
          is a rule for constructing triangles, and so applies to all of them, while no image could match all triangles at
          once.
        </p>
      </Example>

      <Remark title="why it matters">
        <p>
          The schematism turns the abstract categories into principles about time, which is what lets the next chapter derive
          the principles of experience: that substance persists, and that every event follows another according to a rule.
          It also restricts the categories: without their temporal schemata they have no use for knowledge, which is why we
          cannot know things in themselves. Many readers have found the chapter obscure, while Heidegger thought it the heart
          of the whole Critique, and the idea that concepts are rules for organising sensory material lives on in cognitive
          science.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What is a schema, for Kant?</p>,
      answer: {
        kind: "choice",
        options: [
          "A particular image.",
          "A rule or procedure of the imagination for providing a concept with its image.",
          "A category.",
          "A thing in itself.",
        ],
        correct: [1],
      },
    },
    {
      key: "medium",
      rung: "check",
      prompt: <p>In what do the transcendental schemata consist?</p>,
      answer: { kind: "choice", options: ["Space", "Time", "Words", "Pleasure"], correct: [1] },
    },
    {
      key: "cause",
      rung: "apply",
      prompt: <p>What is the schema of cause?</p>,
      answer: {
        kind: "choice",
        options: [
          "Permanence of the real in time",
          "Succession of the manifold according to a rule",
          "Existence at all times",
          "Time filled with sensation",
        ],
        correct: [1],
      },
    },
    {
      key: "subst",
      rung: "apply",
      prompt: <p>Which category has as its schema the permanence of the real in time?</p>,
      answer: { kind: "choice", options: ["Substance", "Cause", "Reality", "Possibility"], correct: [0] },
    },
    {
      key: "thousand",
      rung: "apply",
      prompt: <p>Why does Kant use the number 1000 to explain schemata?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is a large prime.",
          "Because we cannot form an image of exactly 1000 things, yet we can think the number by a rule.",
          "Because 1000 is the number of categories.",
          "Because it is the age of the world.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>In a few sentences, explain why the categories need schemata.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Says the categories are pure concepts, wholly unlike sensible intuitions, so it is unclear how they apply.",
          "Says schemata, as rules for determining time, mediate between the two, since time belongs both to intuition and to a priori rules. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "dog",
      rung: "stretch",
      prompt: (
        <p>
          Kant says even the concept of a dog works through a schema. Is a schema anything more than a recognitional ability,
          the skill of telling dogs from other things? Give your view.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Describes a schema as a rule for producing or recognising instances.",
          "Considers whether a recognitional capacity captures this, and what it might miss, such as the a priori role of schemata for the categories.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the problem the schematism addresses, the difference between an image and a schema, why the schemata of the categories are determinations of time, and how this answers Berkeley on general ideas.",

  glimpse: (
    <p>
      The next lesson uses the schemata to prove the Analogies of Experience, including Kant&rsquo;s answer to Hume on
      causation. The faculty of judgement returns in the Critique of Judgement, and phenomenologists take up the idea that
      consciousness is always structured towards objects.
    </p>
  ),
};
