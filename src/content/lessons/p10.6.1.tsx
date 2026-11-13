import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["true because of skill", "skilful, but true by luck", "true without skill"];
const ITEMS: SortItem[] = [
  {
    text: "A skilled archer aims carefully on a calm day and hits the centre.",
    cat: "true because of skill",
    why: "Accurate, adroit and apt: the hit manifests the archer's skill.",
  },
  {
    text: "A skilled archer's well-aimed arrow is pushed off course by a gust, then pushed back onto the centre by a second gust.",
    cat: "skilful, but true by luck",
    why: "Accurate and adroit, but not apt: the success is due to the wind, not the skill.",
  },
  {
    text: "A beginner shuts their eyes, shoots, and hits the centre.",
    cat: "true without skill",
    why: "Accurate but not adroit: no competence was exercised at all.",
  },
  {
    text: "You read the cricket score in a reliable newspaper and believe it.",
    cat: "true because of skill",
    why: "Your belief is true because of your competent use of a reliable source.",
  },
  {
    text: "A doctor examines carefully and diagnoses correctly, but relied on a test result that belonged to another patient with the same condition.",
    cat: "skilful, but true by luck",
    why: "A Gettier case: competent and correct, yet the correctness is not explained by the competence.",
  },
  {
    text: "Someone believes their horoscope's prediction that they will meet an old friend, and they do.",
    cat: "true without skill",
    why: "True, but formed by an unreliable method, so no intellectual skill is manifested.",
  },
];

export const lesson: LessonContent = {
  id: "p10.6.1",
  minutes: 80,
  links: {
    revisits: ["p10.3.1", "p10.3.3", "p5.4.1"],
    foreshadows: ["p10.6.2", "p10.6.3", "p13.1.4"],
  },

  puzzle: (
    <>
      <p>
        We praise an archer not merely for hitting the target but for hitting it through skill. A lucky hit earns no credit.
        Perhaps knowledge is like that: a true belief that is to the believer&rsquo;s credit, because it comes from their
        intellectual skill. Could this one idea explain what goes wrong in Gettier cases?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each success by whether it is due to skill, skilful but lucky, or not skilful at all.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Is the success due to skill?" />
    </>
  ),

  theory: (
    <>
      <Definition title="virtue epistemology">
        <p>
          Epistemic evaluation centres on the intellectual virtues of agents. <strong>Virtue reliabilists</strong>, such as
          Ernest Sosa and John Greco, take the virtues to be reliable faculties and competences, like good eyesight or sound
          reasoning. <strong>Virtue responsibilists</strong>, such as Linda Zagzebski, take them to be character traits, like
          open-mindedness, intellectual courage and carefulness.
        </p>
      </Definition>

      <Example title="Sosa's AAA structure">
        <p>
          A performance can be <strong>accurate</strong> (successful), <strong>adroit</strong> (skilful) and{" "}
          <strong>apt</strong> (successful because skilful). Knowledge is apt belief: belief that is true because of the
          believer&rsquo;s competence. In Gettier cases the belief is accurate and adroit but not apt.
        </p>
      </Example>

      <Remark title="credit and the value of knowledge">
        <p>
          Greco argues that knowing is getting the truth with credit, as scoring a goal is to the striker&rsquo;s credit. This
          explains why knowledge seems more valuable than mere true belief: achievements are valuable in themselves. The view
          also handles the new evil demon: the deceived twin&rsquo;s beliefs are adroit, which is why they seem justified, but
          not apt.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          In the fake barn case, Henry&rsquo;s true belief seems to come from his perceptual skill, yet many deny it is
          knowledge. And much testimonial knowledge seems to owe more to the speaker than to the hearer: when a stranger tells
          you the way to the station, is your true belief really to your credit?
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "apt",
      rung: "check",
      prompt: <p>In Sosa&rsquo;s terms, what makes a performance apt?</p>,
      answer: {
        kind: "choice",
        options: ["It is successful.", "It is skilful.", "It is successful because it is skilful.", "It is admired by others."],
        correct: [2],
      },
    },
    {
      key: "kinds",
      rung: "check",
      prompt: <p>Which approach takes intellectual virtues to be character traits like open-mindedness?</p>,
      answer: { kind: "choice", options: ["Virtue reliabilism", "Virtue responsibilism", "Coherentism", "Evidentialism"], correct: [1] },
    },
    {
      key: "gettier",
      rung: "apply",
      prompt: <p>How does virtue epistemology diagnose Gettier cases?</p>,
      answer: {
        kind: "choice",
        options: [
          "The belief is false.",
          "The belief is true and competently formed, but not true because of the competence.",
          "The believer lacks any skill.",
          "The belief is unjustified.",
        ],
        correct: [1],
      },
    },
    {
      key: "value",
      rung: "apply",
      prompt: <p>How does the credit view explain why knowledge is more valuable than true belief?</p>,
      answer: {
        kind: "choice",
        options: [
          "Knowledge is always more useful.",
          "Knowledge is an achievement, and achievements are valuable in themselves.",
          "True beliefs are often false.",
          "Knowledge lasts longer.",
        ],
        correct: [1],
      },
    },
    {
      key: "testimony",
      rung: "apply",
      prompt: <p>Why is testimonial knowledge a problem for the credit view?</p>,
      answer: {
        kind: "choice",
        options: [
          "Testimony is never reliable.",
          "The hearer's true belief seems to be due more to the speaker than to the hearer's own skill.",
          "Testimony cannot be true.",
          "Hearers always check what they are told.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the idea of apt belief solve the Gettier problem? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the account of knowledge as apt belief and its diagnosis of a Gettier case.",
          "Considers an objection, such as the fake barn case or testimonial knowledge.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "virtues",
      rung: "stretch",
      prompt: <p>Name an intellectual virtue you would like to have more of, and describe a situation where it would lead you to a truth you might otherwise miss.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Names a virtue, such as open-mindedness, intellectual humility or carefulness.",
          "Describes a situation where it makes a difference to finding the truth.",
          "Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend virtue epistemology, the difference between virtue reliabilism and responsibilism, Sosa's accurate, adroit and apt with the archer, how it diagnoses Gettier cases, and the credit view of the value of knowledge with its objections.",

  glimpse: (
    <p>
      The next lesson asks what intellectual virtue requires when a peer disagrees with you. Virtue ethics is developed in
      moral philosophy.
    </p>
  ),
};
