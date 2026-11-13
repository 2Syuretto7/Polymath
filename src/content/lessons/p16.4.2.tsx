import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { GrueLanguageViz } from "@/components/viz/GrueLanguageViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.4.2",
  minutes: 80,
  links: {
    revisits: ["p16.4.1", "p1.1.3", "p7.5.3"],
    foreshadows: ["p16.4.3", "p16.7.1", "p28.2.1"],
  },

  puzzle: (
    <>
      <p>
        Every emerald anyone has examined has been green, so we expect the next one to be green. Every emerald examined so
        far has also been grue, a word Nelson Goodman made up. By exactly the same reasoning we should expect the next one to
        be grue, which, after a certain date, means blue. What makes &ldquo;green&rdquo; the right word to project and
        &ldquo;grue&rdquo; the wrong one?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Project one of the two hypotheses, then describe the result in each vocabulary.</p>
      <GrueLanguageViz />
    </>
  ),

  theory: (
    <>
      <Definition title="grue">
        <p>
          Fix a future time t. In <em>Fact, Fiction, and Forecast</em> (1955), Goodman defined an object to be{" "}
          <strong>grue</strong> if it is examined before t and is green, or is not examined before t and is blue. It is{" "}
          <strong>bleen</strong> if examined before t and blue, or not examined before t and green. All our evidence about
          emeralds fits &ldquo;all emeralds are green&rdquo; and &ldquo;all emeralds are grue&rdquo; equally, yet the two
          predict different colours for emeralds first examined after t.
        </p>
      </Definition>

      <Example title="the new riddle of induction">
        <p>
          Hume asked why we should trust induction at all. Goodman&rsquo;s &ldquo;new riddle&rdquo; is different: even if we
          trust it, which generalisations does it support? A purely formal rule, such as &ldquo;instances of a generalisation
          confirm it&rdquo;, treats green and grue alike. The raven paradox already showed that confirmation is not settled by
          logical form; grue shows this even for the predicates involved.
        </p>
      </Example>

      <Definition title="the symmetry">
        <p>
          It is tempting to say grue is suspect because it mentions a time. But in the grue/bleen vocabulary, green is the
          odd one: an object is green if it is examined before t and grue, or not examined before t and bleen. Each pair can
          be defined from the other, so neither is intrinsically simpler or free of time.
        </p>
      </Definition>

      <Example title="Goodman’s answer: entrenchment">
        <p>
          Goodman proposed that a predicate is <strong>projectible</strong> to the extent that it is{" "}
          <strong>entrenched</strong>: it, or predicates with the same extension, have been projected successfully in the past.
          &ldquo;Green&rdquo; has a long record of successful projection; &ldquo;grue&rdquo; has none. Critics reply that
          this describes our habits without justifying them.
        </p>
      </Example>

      <Remark title="other responses">
        <p>
          Some appeal to natural kinds, holding that green marks a real similarity among things and grue does not, as in
          David Lewis&rsquo;s idea of natural properties. Bayesians say the evidence fits both hypotheses, so the choice is
          made by prior probabilities, which leaves the question of why the green hypothesis deserves the higher prior.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>An emerald is first examined after t and is blue. Is it grue?</p>,
      answer: { kind: "choice", options: ["Yes", "No, it is bleen", "No, it is green", "It cannot be decided"], correct: [0] },
    },
    {
      key: "riddle",
      rung: "check",
      prompt: <p>How does Goodman&rsquo;s new riddle differ from Hume&rsquo;s problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "It asks which generalisations induction supports, not whether induction is justified at all.",
          "It asks whether the future will resemble the past.",
          "It concerns deduction rather than induction.",
          "It shows that emeralds are blue.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, project &ldquo;all emeralds are green&rdquo; and describe in grue/bleen words. What happens at t?</p>,
      answer: {
        kind: "choice",
        options: ["The emeralds appear to change from grue to bleen", "Nothing appears to change", "The emeralds turn blue", "The emeralds appear to change from bleen to grue"],
        correct: [0],
      },
    },
    {
      key: "green",
      rung: "apply",
      prompt: <p>Using grue and bleen, which definition of green is correct?</p>,
      answer: {
        kind: "choice",
        options: [
          "Examined before t and grue, or not examined before t and bleen",
          "Examined before t and bleen, or not examined before t and grue",
          "Grue and bleen at once",
          "Grue at every time",
        ],
        correct: [0],
      },
    },
    {
      key: "entrench",
      rung: "apply",
      prompt: <p>What makes a predicate entrenched, for Goodman?</p>,
      answer: {
        kind: "choice",
        options: [
          "It, or a predicate with the same extension, has been projected successfully many times before.",
          "It does not mention a time.",
          "It names a primary quality.",
          "It is short.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is there a principled reason to project green rather than grue? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the problem: the evidence fits both hypotheses equally, yet they predict differently.",
          "Considers a response, such as the time objection and the symmetry reply, entrenchment, or natural kinds.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does machine learning face a version of the grue problem when a model generalises from training data?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that many functions fit the training data and differ on new inputs.",
          "Connects the choice among them to inductive bias, playing the role of entrenchment or priors.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Goodman's grue, why the evidence supports 'all emeralds are grue' as well as 'all emeralds are green', the symmetry between the two vocabularies, and Goodman's answer in terms of entrenchment.",

  glimpse: (
    <p>
      Next, Bayesian confirmation theory measures how evidence raises the probability of a hypothesis, and locates the grue
      problem in the choice of priors.
    </p>
  ),
};
