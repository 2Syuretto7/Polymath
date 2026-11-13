import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const ITEMS: SortItem[] = [
  { text: "Einstein’s prediction that starlight is bent by the Sun’s gravity", cat: "science", why: "It made a risky prediction that could have failed in 1919 and did not." },
  { text: "A horoscope saying “a challenge at work will test you this month”", cat: "pseudoscience", why: "It is vague enough to fit almost any month, and astrology presents itself as knowledge about the world." },
  { text: "A proof that there are infinitely many primes", cat: "neither", why: "Mathematics is not an empirical science, but it is not pseudoscience either: it does not pretend to test claims by observation." },
  { text: "Homeopathy, defended after failing controlled trials by saying trials disturb the remedies", cat: "pseudoscience", why: "It shields its claims from refutation by ad hoc rescues, while claiming scientific standing." },
  { text: "Plate tectonics, predicting the age of sea-floor rock from its distance from ridges", cat: "science", why: "It made testable predictions about magnetic stripes and ages that were confirmed." },
  { text: "A moral argument that cruelty for fun is wrong", cat: "neither", why: "Ethics is not empirical science, and it makes no false claim to be." },
  { text: "Creation science, presented as biology but holding its conclusion fixed in advance", cat: "pseudoscience", why: "It claims scientific status while no possible evidence is allowed to count against its central claim." },
];

export const lesson: LessonContent = {
  id: "p16.1.3",
  minutes: 80,
  links: {
    revisits: ["p16.1.1", "p16.1.2", "p0.1.2"],
    foreshadows: ["p16.2.1", "p16.3.2", "p16.3.3"],
  },

  puzzle: (
    <>
      <p>
        Astronomy and astrology both study the heavens, use charts and calculations, and have long histories. Courts, schools
        and health services need to tell science from pseudoscience, and most people feel confident that they can. But what,
        exactly, is the difference?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each item, then check the reason given.</p>
      <PhraseSortViz items={ITEMS} cats={["science", "pseudoscience", "neither"]} prompt="Is it science, pseudoscience, or neither?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the demarcation problem">
        <p>
          The <strong>demarcation problem</strong> asks for a criterion that separates science from non-science, and in
          particular from <strong>pseudoscience</strong>: views that claim the authority of science without earning it. Not
          all non-science is pseudoscience; mathematics, ethics and history are not sciences in this sense and do not pretend
          to be.
        </p>
      </Definition>

      <Example title="proposed criteria">
        <p>
          The logical empiricists offered verifiability, which rules out laws. Karl Popper proposed{" "}
          <strong>falsifiability</strong>: a theory is scientific if some possible observation would refute it. He contrasted
          Einstein&rsquo;s theory, which risked refutation in 1919, with Freud&rsquo;s psychoanalysis and Marxist history as
          later defended, which seemed able to explain any outcome. Thomas Kuhn suggested instead that a science is marked by
          puzzle-solving within a shared paradigm.
        </p>
      </Example>

      <Definition title="scepticism about demarcation">
        <p>
          In &ldquo;The Demise of the Demarcation Problem&rdquo; (1983), Larry Laudan argued that every proposed criterion lets
          in obvious pseudosciences or shuts out real sciences, so the problem is a pseudo-problem: we should ask whether a
          claim is well supported, not whether it is scientific. Others, such as Massimo Pigliucci, reply that demarcation is a
          cluster concept: no single criterion, but a family of marks including testability, responsiveness to evidence and
          progress.
        </p>
      </Definition>

      <Remark title="why it matters">
        <p>
          In 1982, in McLean v. Arkansas, a US court struck down a law requiring &ldquo;creation science&rdquo; to be taught
          alongside evolution, relying partly on a list of marks of science. Philosophers criticised the list, but the case
          shows that the question has practical stakes, in education, law, medicine and public funding.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the demarcation problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "The problem of finding a criterion separating science from non-science and pseudoscience",
          "The problem of justifying induction",
          "The problem of drawing borders between countries",
          "The problem of measuring with precision",
        ],
        correct: [0],
      },
    },
    {
      key: "popper",
      rung: "check",
      prompt: <p>What was Popper&rsquo;s criterion of demarcation?</p>,
      answer: { kind: "choice", options: ["Falsifiability", "Verifiability", "Use of mathematics", "Agreement among experts"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, why is a proof about prime numbers sorted as neither science nor pseudoscience?</p>,
      answer: {
        kind: "choice",
        options: [
          "Mathematics is not an empirical science, and it does not pretend to be one.",
          "Because primes are not real.",
          "Because the proof could be wrong.",
          "Because mathematicians are not scientists.",
        ],
        correct: [0],
      },
    },
    {
      key: "pseudo",
      rung: "apply",
      prompt: <p>What makes a view pseudoscience rather than just non-science?</p>,
      answer: {
        kind: "choice",
        options: [
          "It claims the standing of science without meeting its standards.",
          "It is false.",
          "It is unpopular.",
          "It is old.",
        ],
        correct: [0],
      },
    },
    {
      key: "laudan",
      rung: "apply",
      prompt: <p>What does Laudan suggest we ask in place of &ldquo;is it scientific?&rdquo;</p>,
      answer: {
        kind: "choice",
        options: ["Is the claim well supported by evidence?", "Is it published?", "Is it falsifiable?", "Does it use experiments?"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is astrology unscientific because it is unfalsifiable? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers whether astrological claims are in fact falsifiable, for instance claims tested and refuted in studies.",
          "Considers another account of what is wrong, such as failing to respond to refutation or to make progress.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is demarcation a pseudo-problem, as Laudan claims, or can a cluster of marks do the job? What do you think?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Laudan’s argument that every single criterion fails.",
          "Considers the cluster reply, or practical needs such as courts and schools.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the demarcation problem, the difference between non-science and pseudoscience, Popper's falsifiability criterion with his examples, and Laudan's argument that demarcation is a pseudo-problem.",

  glimpse: (
    <p>
      Next, Popper&rsquo;s falsificationism is examined as an account of scientific method, not just a criterion. Lakatos and
      Feyerabend later offer rival pictures of what makes science rational, if anything does.
    </p>
  ),
};
