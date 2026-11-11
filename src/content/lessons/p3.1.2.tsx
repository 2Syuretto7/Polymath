import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["assuring", "guarding", "discounting", "evaluating"];
const ITEMS: SortItem[] = [
  { text: "Obviously, the new road will cut journey times.", cat: "assuring", why: "'Obviously' tells you not to doubt the claim, but gives no reason. Ask: obvious to whom, and why?" },
  { text: "The new road will probably cut journey times.", cat: "guarding", why: "'Probably' weakens the claim, so it is harder to refute but promises less." },
  { text: "Although the road will cost a great deal, it will cut journey times.", cat: "discounting", why: "'Although' raises an objection, the cost, and sets it aside in favour of the second claim." },
  { text: "The council has made a reckless decision.", cat: "evaluating", why: "'Reckless' is not a neutral description: it judges the decision bad. A reason is still owed." },
  { text: "Studies show that most commuters want the road.", cat: "assuring", why: "'Studies show' assures by pointing to authority without naming it. ('Most' guards the claim as well; the assurance is the stronger move here.)" },
  { text: "In many cases, wider roads lead to more traffic.", cat: "guarding", why: "'In many cases' limits the claim so that a few counterexamples do not refute it." },
  { text: "The road is expensive, but it will save lives.", cat: "discounting", why: "'But' admits the first point and gives more weight to the second." },
  { text: "Only someone who has never sat in a traffic jam could oppose this road.", cat: "assuring", why: "This assures by abuse: it makes doubt look foolish instead of answering it." },
];

export const lesson: LessonContent = {
  id: "p3.1.2",
  minutes: 55,
  links: {
    revisits: ["p0.3.3", "p0.2.4"],
    foreshadows: ["p3.2.1", "p15.4.3", "p10.5.2"],
  },

  puzzle: (
    <>
      <p>Compare these two claims.</p>
      <ol>
        <li>&ldquo;All politicians lie.&rdquo;</li>
        <li>&ldquo;Some politicians sometimes say things they believe to be false.&rdquo;</li>
      </ol>
      <p>
        The first is bold, and a single honest politician refutes it. The second is almost certainly true, but it hardly
        says anything. Every arguer faces this trade between strength and safety. What words do people use to manage it,
        and how can a reader tell when the trade is being made honestly?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Beside the markers that show the shape of an argument, there are words that adjust how much a claim promises, and
        how much it invites challenge. Some shore a claim up (&ldquo;certainly&rdquo;), some pull it back
        (&ldquo;probably&rdquo;), some wave away an objection (&ldquo;but&rdquo;), and some quietly pass judgement
        (&ldquo;reckless&rdquo;). Sort the sentences below by the main move each one makes.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Choose the main move each sentence makes." />
    </>
  ),

  theory: (
    <>
      <Definition title="assuring">
        <p>
          An <strong>assuring term</strong> tells the listener that a reason exists, or that doubt would be foolish,
          without giving the reason. There are three common kinds:
        </p>
        <ul>
          <li>authoritative: &ldquo;studies show&rdquo;, &ldquo;experts agree&rdquo;, &ldquo;research has found&rdquo;;</li>
          <li>reflexive: &ldquo;I am certain&rdquo;, &ldquo;I have no doubt&rdquo;, &ldquo;I assure you&rdquo;;</li>
          <li>abusive: &ldquo;only a fool would deny&rdquo;, &ldquo;any sensible person can see&rdquo;.</li>
        </ul>
        <p>
          Assurance is not always a trick. A good writer cannot argue for everything, and pointing to a real body of
          evidence is fair. But assurance tends to appear where the argument is weakest, so it marks a place to look
          hard.
        </p>
      </Definition>

      <Definition title="guarding">
        <p>
          A <strong>guarding term</strong> weakens a claim so that it is easier to defend: &ldquo;probably&rdquo;,
          &ldquo;most&rdquo;, &ldquo;some&rdquo;, &ldquo;in many cases&rdquo;, &ldquo;I believe&rdquo;, &ldquo;may&rdquo;,
          &ldquo;tends to&rdquo;. Guarding is often a virtue: it makes a claim match the evidence. The risk is guarding
          so far that the claim says nothing, or guarding a premise and then forgetting the guard.
        </p>
      </Definition>

      <Example title="the dropped guard">
        <p>
          &ldquo;Most of the students I spoke to liked the new timetable. So the students like the new timetable.&rdquo;
          The premise is guarded twice, by &ldquo;most&rdquo; and by &ldquo;I spoke to&rdquo;, and the conclusion by
          neither. The argument quietly moves from some students to all. Compare the guards on premise and conclusion
          whenever you check an argument.
        </p>
      </Example>

      <Definition title="discounting">
        <p>
          A <strong>discounting term</strong> mentions a possible objection and sets it aside: &ldquo;but&rdquo;,
          &ldquo;although&rdquo;, &ldquo;even though&rdquo;, &ldquo;however&rdquo;, &ldquo;nevertheless&rdquo;,
          &ldquo;still&rdquo;. &ldquo;A but B&rdquo; asserts both A and B, and adds that B matters more, at least here. So
          &ldquo;the hotel is expensive but close to the beach&rdquo; and &ldquo;the hotel is close to the beach but
          expensive&rdquo; state the same facts and recommend opposite things.
        </p>
      </Definition>
      <p>
        Discounting is honest when the objection is fairly stated and genuinely outweighed. It is a trick when a weak
        version of the objection is raised so that it can be dismissed, while the strong version is never mentioned. This
        is the skill from Thinking and Writing Philosophically, of answering the best objection, seen from the
        reader&rsquo;s side.
      </p>

      <Definition title="evaluating and slanting">
        <p>
          <strong>Evaluative terms</strong> such as &ldquo;good&rdquo;, &ldquo;reckless&rdquo;, &ldquo;should&rdquo; and
          &ldquo;excellent&rdquo; pass judgement. They are fine when the judgement is argued for. <strong>Slanting</strong>{" "}
          is the use of words that carry a judgement while posing as description: &ldquo;regime&rdquo; for
          &ldquo;government&rdquo;, &ldquo;scheme&rdquo; for &ldquo;plan&rdquo;, &ldquo;stubborn&rdquo; for
          &ldquo;firm&rdquo;. A slanted premise can smuggle in the very conclusion it is meant to support.
        </p>
      </Definition>

      <Remark title="reading with a pencil">
        <p>
          A practical habit: when you read an argument that matters, circle the assuring terms and ask what reason stands
          behind each, underline the guards and check they survive to the conclusion, and box each discounted objection
          and ask whether it was stated at its strongest. Do the same to your own writing before anyone else does.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "guards",
      rung: "check",
      prompt: <p>Which of these are guarding terms? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["probably", "obviously", "most", "but"], correct: [0, 2] },
    },
    {
      key: "but",
      rung: "check",
      prompt: (
        <p>
          &ldquo;Although the flat is small, it is right next to the station.&rdquo; Which point does the speaker treat as
          more important?
        </p>
      ),
      answer: { kind: "choice", options: ["The flat is small.", "The flat is next to the station.", "Neither; they are equal."], correct: [1] },
    },
    {
      key: "abusive",
      rung: "apply",
      prompt: <p>Which of these is an abusive assurance?</p>,
      answer: {
        kind: "choice",
        options: [
          "Research published last year found the same result.",
          "I am quite sure of this.",
          "No serious person still believes the old theory.",
          "The old theory is probably false.",
        ],
        correct: [2],
      },
    },
    {
      key: "dropped",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;Many of the reviews I read praised the film. So the film is good.&rdquo; What is the clearest weakness?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The premise is guarded but the conclusion is not.",
          "It uses an abusive assurance.",
          "It has no conclusion marker.",
          "It discounts an objection unfairly.",
        ],
        correct: [0],
      },
    },
    {
      key: "safest",
      rung: "apply",
      prompt: <p>Which claim is hardest to refute, and so says the least?</p>,
      answer: {
        kind: "choice",
        options: ["All swans are white.", "Most swans are white.", "Some swans may be white.", "Swans are generally white."],
        correct: [2],
      },
    },
    {
      key: "analyse",
      rung: "prove",
      prompt: (
        <p>
          Identify each assuring, guarding, discounting and evaluative term in this passage, and say what each does:
          &ldquo;Clearly the school must ban phones. Of course, some parents want to reach their children, but that is a
          minor concern. Phones probably harm concentration, and any sensible teacher has seen the damage.&rdquo;
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Finds the assurances, such as 'clearly' and 'any sensible teacher has seen', and notes that they give no reason (the second is abusive).",
          "Finds the discounting move ('of course … but'), and notes that the parents' concern is set aside, perhaps too quickly, as 'minor'.",
          "Finds the guard 'probably', and may notice that the conclusion ('must ban') is not guarded to match.",
          "Notes the evaluative words, such as 'minor' or 'damage'. Not every term needs to be found for full credit.",
        ],
      },
    },
    {
      key: "experts",
      rung: "stretch",
      prompt: (
        <p>
          &ldquo;Experts agree&rdquo; is an assuring phrase. When is pointing to expert agreement a good reason to accept a
          claim, and when is it a bad one? Give one example of each.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Says it can be a good reason when the experts are real experts in the relevant field, genuinely agree, and the claim is within their expertise.",
          "Says it is a bad reason when the experts are unnamed, outside their field, divided, or have an interest in the answer.",
          "Gives a sensible example of each. Many answers are possible.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what assuring, guarding and discounting terms do, why a guard on a premise should survive to the conclusion, and when 'experts agree' is a fair move.",

  glimpse: (
    <p>
      The next chapter turns these warning signs into a catalogue of fallacies, starting with appeals that are not
      relevant to the truth of a claim. Philosophy of Language explains how &ldquo;but&rdquo; can contrast two things
      without stating the contrast, through Grice&rsquo;s idea of implicature. Epistemology asks when testimony, including
      the testimony of experts, gives us knowledge.
    </p>
  ),
};
