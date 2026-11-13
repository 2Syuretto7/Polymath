import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["testimonial injustice", "hermeneutical injustice", "neither"];
const ITEMS: SortItem[] = [
  {
    text: "A woman's correct objection in a meeting is ignored until a male colleague repeats it, and then it is praised.",
    cat: "testimonial injustice",
    why: "Her credibility was deflated because of prejudice about her gender.",
  },
  {
    text: "Before the term existed, victims of sexual harassment struggled to make sense of, or describe, what was happening to them.",
    cat: "hermeneutical injustice",
    why: "Fricker's central example: a gap in shared concepts, due to unequal participation in making meanings, left their experience unintelligible.",
  },
  {
    text: "A witness's account is doubted by the police because of the accent and caste name the witness has.",
    cat: "testimonial injustice",
    why: "Identity prejudice lowers the credibility given to the speaker's word.",
  },
  {
    text: "A patient's reports of pain are discounted because doctors assume people of their background exaggerate.",
    cat: "testimonial injustice",
    why: "A credibility deficit caused by prejudice, with harmful consequences.",
  },
  {
    text: "In a community with no concept of depression, a person suffering from it can only understand their condition as laziness.",
    cat: "hermeneutical injustice",
    why: "The shared resources for understanding their experience were missing, to their disadvantage.",
  },
  {
    text: "A known liar's claim is doubted because they have lied many times before.",
    cat: "neither",
    why: "Doubt based on genuine evidence of unreliability is not prejudice.",
  },
  {
    text: "A student is not believed about a mathematical claim that is in fact false.",
    cat: "neither",
    why: "Rejecting a false claim on its merits wrongs no one.",
  },
];

export const lesson: LessonContent = {
  id: "p10.6.3",
  minutes: 80,
  links: {
    revisits: ["p10.5.2", "p10.6.2", "p10.6.1"],
    foreshadows: ["p14.5.2", "p28.3.1", "p10.7.1"],
  },

  puzzle: (
    <>
      <p>
        A patient tells a doctor that their pain is severe, and the doctor writes &ldquo;anxious, probably exaggerating&rdquo;.
        If the doctor&rsquo;s doubt comes from a stereotype about people like the patient, something has gone wrong that is
        more than a factual mistake. Can one wrong someone specifically as a knower?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Classify each case by the kind of injustice, if any, that it involves.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which kind of epistemic injustice, if any?" />
    </>
  ),

  theory: (
    <>
      <Definition title="testimonial injustice">
        <p>
          Miranda Fricker (2007): a speaker suffers <strong>testimonial injustice</strong> when prejudice in the hearer causes
          them to give the speaker less credibility than they otherwise would. The central case involves identity prejudice,
          based on race, gender, caste, class or other social identity.
        </p>
      </Definition>

      <Definition title="hermeneutical injustice">
        <p>
          A person suffers <strong>hermeneutical injustice</strong> when a gap in the shared concepts of their society, caused
          by their group&rsquo;s unequal part in making those concepts, leaves an important part of their experience obscure,
          even to themselves.
        </p>
      </Definition>

      <Example title="the harms">
        <p>
          The primary harm is being wronged in one&rsquo;s capacity as a knower: treated as less than a full giver of knowledge.
          Secondary harms follow, practical ones such as a wrong diagnosis or verdict, and epistemic ones such as losing
          confidence in one&rsquo;s own judgement. The hearer loses too, since they miss knowledge they could have gained.
        </p>
      </Example>

      <Remark title="the remedy and its limits">
        <p>
          Fricker proposes a virtue of testimonial justice: noticing and correcting for the influence of prejudice on one&rsquo;s
          credibility judgements. Critics ask whether individual virtue is enough when the problem is built into institutions,
          and whether credibility excess, believing the privileged too readily, is also an injustice.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "test",
      rung: "check",
      prompt: <p>What is testimonial injustice?</p>,
      answer: {
        kind: "choice",
        options: [
          "Lying under oath.",
          "Giving a speaker less credibility because of prejudice about their identity.",
          "Refusing to testify.",
          "Believing a liar.",
        ],
        correct: [1],
      },
    },
    {
      key: "herm",
      rung: "check",
      prompt: <p>What is hermeneutical injustice?</p>,
      answer: {
        kind: "choice",
        options: [
          "Misreading a text.",
          "Being disadvantaged by a gap in shared concepts that leaves one's experience hard to understand.",
          "Disagreeing about interpretation.",
          "Being a poor writer.",
        ],
        correct: [1],
      },
    },
    {
      key: "liar",
      rung: "apply",
      prompt: <p>Is doubting a known liar a case of testimonial injustice?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes, all doubt is injustice.",
          "No, because the doubt rests on evidence of unreliability, not on prejudice.",
          "Only if the liar is poor.",
          "Only if the liar is telling the truth this time.",
        ],
        correct: [1],
      },
    },
    {
      key: "harm",
      rung: "apply",
      prompt: <p>What does Fricker call the primary harm of epistemic injustice?</p>,
      answer: {
        kind: "choice",
        options: [
          "Financial loss.",
          "Being wronged in one's capacity as a knower.",
          "Physical injury.",
          "Loss of reputation only.",
        ],
        correct: [1],
      },
    },
    {
      key: "virtue",
      rung: "apply",
      prompt: <p>What virtue does Fricker recommend to hearers?</p>,
      answer: {
        kind: "choice",
        options: ["Testimonial justice", "Intellectual courage", "Scepticism", "Credulity"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is individual virtue enough to remedy testimonial injustice, or are institutional changes needed? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Fricker's virtue of testimonial justice.",
          "Considers the objection that prejudice is structural or unconscious.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "own",
      rung: "stretch",
      prompt: <p>Describe a situation, from life or fiction, where someone was not believed because of who they were. What did the listeners lose by not believing them?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes a case where credibility was reduced by prejudice.",
          "Identifies what the hearers lost, such as knowledge or the chance to act well.",
          "Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Fricker's testimonial and hermeneutical injustice with examples, the difference between prejudiced doubt and reasonable doubt, the primary and secondary harms, and the virtue of testimonial justice with its limits.",

  glimpse: (
    <p>
      The next chapter turns to degrees of belief and their rules. Feminist political philosophy develops these concerns about
      power and knowledge further.
    </p>
  ),
};
