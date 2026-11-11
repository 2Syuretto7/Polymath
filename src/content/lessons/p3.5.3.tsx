import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["descriptive", "normative"];
const ITEMS: SortItem[] = [
  { text: "Most people in this country eat meat.", cat: "descriptive", why: "It reports what people do. A survey could settle it." },
  { text: "We ought to eat less meat.", cat: "normative", why: "'Ought' says what should be done, not what is done." },
  { text: "Factory-farmed chickens spend their lives in very crowded sheds.", cat: "descriptive", why: "A claim about conditions, checkable by observation, however upsetting." },
  { text: "Causing an animal pointless suffering is wrong.", cat: "normative", why: "'Wrong' passes moral judgement." },
  { text: "Humans have eaten meat for hundreds of thousands of years.", cat: "descriptive", why: "A historical claim. Whether it matters morally is a further, normative question." },
  { text: "A good person keeps their promises.", cat: "normative", why: "'Good' here is a moral evaluation, not a description of what people usually do." },
  { text: "This new law will reduce air pollution by a fifth.", cat: "descriptive", why: "A prediction about effects. Experts may dispute it, but the dispute is about facts." },
];

export const lesson: LessonContent = {
  id: "p3.5.3",
  minutes: 65,
  links: {
    revisits: ["p3.3.2", "p0.4.1"],
    foreshadows: ["p7.5.5", "p13.5.3", "p14.2.1"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;Humans have always eaten meat, and our bodies are built to digest it. So there is nothing wrong with eating
        meat.&rdquo;
      </p>
      <p>
        Whatever you think of the conclusion, something is missing from the argument. Both premises are about what is the
        case; the conclusion is about what is right. How do you get from one to the other? And if moral arguments need
        moral premises, how can moral argument ever get started?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Moral arguments mix two kinds of claim: claims about how things are, and claims about how they ought to be. The
        facts can be checked in the usual ways. The moral premises are where the real disagreement often lies, and they
        are often left unstated. Sort each claim below.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Is each claim about how things are, or about how they ought to be?" />
    </>
  ),

  theory: (
    <>
      <Definition title="descriptive and normative claims">
        <p>
          A <strong>descriptive</strong> claim says how things are, were or will be. A <strong>normative</strong> claim
          says how things ought to be: what is good or bad, right or wrong, required or permitted. Words such as
          &ldquo;ought&rdquo;, &ldquo;should&rdquo;, &ldquo;wrong&rdquo;, &ldquo;fair&rdquo; and &ldquo;good&rdquo; usually
          signal a normative claim.
        </p>
      </Definition>

      <Remark title="no ought from is alone">
        <p>
          David Hume observed that writers on morality pass, without notice, from statements about what is to statements
          about what ought to be, and that this needs explaining. On a common reading, no set of purely descriptive premises
          can validly yield a normative conclusion. So a valid moral argument needs at least one normative premise. In the
          puzzle the missing premise is something like &ldquo;whatever humans have always done, and are built to do, is
          morally permissible&rdquo;. Once stated, it is easy to question: humans have always waged war, too.
        </p>
      </Remark>

      <Example title="making the moral premise explicit">
        <ol>
          <li>Factory farming causes chickens great suffering. (descriptive)</li>
          <li>Causing great suffering is wrong unless there is a weighty reason for it. (normative)</li>
          <li>Cheaper chicken is not a weighty enough reason. (normative)</li>
          <li>So factory farming of chickens is wrong.</li>
        </ol>
        <p>
          Laid out like this, the argument shows its opponents where to push: deny the facts in 1, the principle in 2, or
          the judgement in 3. That is the point of the exercise. It turns a clash of conclusions into a discussion of
          premises.
        </p>
      </Example>

      <Definition title="consistency">
        <p>
          A basic test of moral reasoning is <strong>consistency</strong>: like cases should be treated alike. If you judge
          two cases differently, you owe a relevant difference between them. This turns moral reasoning into the reasoning
          by analogy studied earlier in this course. &ldquo;You think it is wrong to hurt a dog for fun. What is the
          relevant difference between a dog and a pig?&rdquo;
        </p>
      </Definition>

      <Example title="the trolley and the footbridge">
        <p>
          A runaway trolley will kill five people unless you pull a lever that diverts it onto a track where it will kill
          one. Most people say pulling the lever is permitted. Now you stand on a footbridge; the only way to stop the
          trolley is to push a large man into its path, killing him and saving the five. Most people say this is wrong. The
          numbers are the same. Philippa Foot and Judith Jarvis Thomson, who devised and named such cases, asked what
          relevant difference could justify the different verdicts. Using a person as a means? Physical force? Each
          proposed answer is a principle that can be tested on further cases.
        </p>
      </Example>

      <Definition title="reflective equilibrium">
        <p>
          John Rawls described a method he called <strong>reflective equilibrium</strong>. We start with confident
          judgements about cases and with general principles. Where they conflict, we revise one or the other, whichever
          seems less secure, until our principles and judgements fit together. Neither side always wins: sometimes a
          principle overturns a gut reaction, and sometimes a clear case overturns a principle.
        </p>
      </Definition>

      <Remark title="separate the facts from the values">
        <p>
          Many moral disagreements are really factual ones. Two people may agree that a policy is right if it reduces
          poverty, and disagree only about whether it will. Finding out which kind of disagreement you are having is often
          the most useful first step.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "normative",
      rung: "check",
      prompt: <p>Which of these claims are normative? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "Lying is usually wrong.",
          "Most people lie at least once a week.",
          "Governments should protect free speech.",
          "The law protects free speech.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "missing",
      rung: "check",
      prompt: (
        <p>
          &ldquo;This policy will reduce child poverty. So we should adopt it.&rdquo; Which premise is needed to make the
          argument valid?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Child poverty exists.",
          "We should adopt any policy that reduces child poverty.",
          "The policy is popular.",
          "Poverty is measured accurately.",
        ],
        correct: [1],
      },
    },
    {
      key: "consistency",
      rung: "apply",
      prompt: (
        <p>
          Someone says it is fine to keep money a shop gives them by mistake, but wrong for a shop to keep money a customer
          overpays. Which reply presses a consistency challenge?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Shops are rich.",
          "What relevant difference makes keeping the mistaken money right in one case and wrong in the other?",
          "You will get caught.",
          "Everyone does it.",
        ],
        correct: [1],
      },
    },
    {
      key: "factual",
      rung: "apply",
      prompt: (
        <p>
          A and B both believe that a school rule is justified if it improves learning. A thinks banning phones improves
          learning; B thinks it does not. What kind of disagreement is this?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "A moral disagreement about the value of learning.",
          "A factual disagreement about the effects of a ban.",
          "A disagreement about the meaning of 'school'.",
          "No disagreement at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "equilibrium",
      rung: "apply",
      prompt: (
        <p>
          You accept the principle &ldquo;always tell the truth&rdquo;, but you are confident it would be right to lie to a
          murderer asking where your friend is hiding. What would reflective equilibrium recommend?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Keep the principle and accept that you must tell the murderer.",
          "Abandon all moral principles.",
          "Revise the principle, for example to allow lying to prevent grave harm, if the case judgement is the more secure.",
          "Ignore the conflict.",
        ],
        correct: [2],
      },
    },
    {
      key: "reconstruct",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct this argument with its missing normative premise, and say which premise you think is weakest:
          &ldquo;Zoos keep animals in small enclosures far from their natural homes. So zoos should be closed.&rdquo;
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the descriptive premise about enclosures.",
          "Supplies a normative premise, such as 'it is wrong to keep animals in conditions far from their natural ones', perhaps with a premise linking wrongness to closure.",
          "Identifies a weak point, such as conservation benefits or variation between zoos, and explains why. Any thoughtful assessment is fine.",
        ],
      },
    },
    {
      key: "trolley",
      rung: "stretch",
      prompt: (
        <p>
          Suggest a principle that would make it permissible to pull the lever but wrong to push the man from the
          footbridge. Then test your principle on a further case of your own invention.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Proposes a principle, such as that it is wrong to use a person as a means, or to kill by direct physical force, or a version of the doctrine of double effect.",
          "Shows how it separates the lever case from the footbridge case.",
          "Invents a further case and says whether the principle gives a plausible verdict there, revising it if not. Any reasonable attempt earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between descriptive and normative claims, why a moral argument needs a normative premise, and how consistency and reflective equilibrium guide moral reasoning.",

  glimpse: (
    <p>
      Early Modern Philosophy reads Hume&rsquo;s own passage on is and ought. Moral Philosophy studies trolley problems in
      depth, along with the distinction between doing and allowing harm. Political Philosophy meets Rawls, who used
      reflective equilibrium to defend his principles of justice.
    </p>
  ),
};
