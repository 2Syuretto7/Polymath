import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["instrumental: better outcomes", "intrinsic: equal say", "public equality"];
const CASES = ["experts would decide better", "a benevolent dictator delivers growth", "most voters are ill-informed", "the majority votes for an unjust law"];
const V: CaseVerdict[][] = [
  [
    { ok: false, why: "If democracy is valuable only for its results, Plato’s rule by the wise, or Jason Brennan’s epistocracy, wins whenever experts would do better." },
    { ok: false, why: "On a purely instrumental view, a reliably benevolent dictator would be just as good, which many find wrong." },
    { ok: true, why: "Instrumentalists can point to evidence that democracies avoid catastrophes such as famines, as Amartya Sen argued, despite ill-informed voters." },
    { ok: true, why: "The view explains why the outcome is bad: democracy is valued for good outcomes, and this one is not." },
  ],
  [
    { ok: true, why: "Even if experts would choose better, ruling others without their equal say fails to respect them as equals." },
    { ok: true, why: "Growth does not make up for denying citizens an equal voice in decisions that bind them." },
    { ok: true, why: "Equal say is owed to people as persons, not earned by being well informed." },
    { ok: false, why: "If equal say is all that matters, it is hard to explain what is wrong when the procedure yields injustice." },
  ],
  [
    { ok: true, why: "Thomas Christiano: in a society of disagreement, only an equal say publicly shows equal concern for everyone’s interests." },
    { ok: true, why: "A dictator, however benevolent, does not treat citizens as equals in a way they can see." },
    { ok: true, why: "Public equality does not depend on voters’ competence." },
    { ok: true, why: "Christiano argues that the same value limits democracy: violating basic rights or public equality itself is not justified by a vote." },
  ],
];

export const lesson: LessonContent = {
  id: "p14.4.1",
  minutes: 80,
  links: {
    revisits: ["p4.3.3", "p14.1.3", "p14.3.2"],
    foreshadows: ["p14.4.2", "p14.4.3", "p26.4.4"],
  },

  puzzle: (
    <>
      <p>
        Plato compared democracy to a ship whose passengers vote on the course instead of trusting the navigator. If some
        people know better, why should everyone have an equal vote? And if democracy is good only because it produces good
        decisions, would we abandon it if something else did better?
      </p>
    </>
  ),

  intuition: (
    <>
      <CaseMatrixViz
        theories={THEORIES}
        cases={CASES}
        verdicts={V}
        prompt="Does the justification give a satisfying answer to each challenge?"
        caption="Instrumental views struggle with experts and dictators; purely procedural views struggle with unjust outcomes. Public equality tries to do better on both."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="instrumental justifications">
        <p>
          Democracy is justified by its results: it protects interests, because people are the best guardians of their own;
          it avoids disasters, since governments must answer to voters; and it fosters active, informed citizens, as Mill
          argued. The justification is only as strong as the evidence that democracy does better than the alternatives.
        </p>
      </Definition>

      <Definition title="intrinsic justifications">
        <p>
          Democracy is valuable in itself, because it embodies equality or self-government. Giving each person an equal say in
          collective decisions treats them as equals, whatever the outcome. Peter Singer and Jeremy Waldron stress fair
          compromise among people who disagree.
        </p>
      </Definition>

      <Example title="public equality">
        <p>
          Thomas Christiano argues that people disagree about justice and have fallible judgement, so equal concern for their
          interests must be realised in a way everyone can see. Equal say in democratic procedures does this. The same
          principle sets limits: democracy cannot rightly abolish the liberties that make public equality possible.
        </p>
      </Example>

      <Remark title="epistocracy and its critics">
        <p>
          Jason Brennan argues that many voters are ignorant or irrational, and that giving extra votes to the informed might
          produce better results. Critics reply that any test of competence would be controlled by the powerful, that
          experts have interests of their own, and that diverse ordinary citizens may decide better together than a few
          experts, a theme of epistemic democracy.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "instr",
      rung: "check",
      prompt: <p>What does an instrumental justification of democracy appeal to?</p>,
      answer: { kind: "choice", options: ["Its good results", "Its age", "Its popularity", "Its complexity"], correct: [0] },
    },
    {
      key: "plato",
      rung: "check",
      prompt: <p>What was the point of Plato&rsquo;s ship of state?</p>,
      answer: {
        kind: "choice",
        options: [
          "Ruling requires expertise, which most voters lack.",
          "Ships should be democratic.",
          "Everyone should learn navigation.",
          "Democracy is the best system.",
        ],
        correct: [0],
      },
    },
    {
      key: "famine",
      rung: "apply",
      prompt: <p>Amartya Sen argued that no substantial famine has occurred in a functioning democracy with a free press. What kind of justification does this support?</p>,
      answer: { kind: "choice", options: ["Instrumental", "Intrinsic", "Epistocratic", "None"], correct: [0] },
    },
    {
      key: "dict",
      rung: "apply",
      prompt: <p>Why does the benevolent dictator challenge purely instrumental views?</p>,
      answer: {
        kind: "choice",
        options: [
          "If results are all that matter, a dictator with better results would be preferable, which many find wrong.",
          "Because dictators are always cruel.",
          "Because dictators hold elections.",
          "It does not challenge them.",
        ],
        correct: [0],
      },
    },
    {
      key: "christiano",
      rung: "apply",
      prompt: <p>On Christiano&rsquo;s view, why must equality be public?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because people disagree and judge fallibly, equal concern must be realised in a way all can see.",
          "Because laws must be published.",
          "Because voting is done in public.",
          "Because the press must report it.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Should better-informed citizens get more votes? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the epistocratic argument from voter ignorance.",
          "Considers an objection, such as public equality, who sets the test, or the value of diversity.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If democracy is intrinsically valuable, may a majority vote away the rights of a minority?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the tension between majority rule and rights.",
          "Considers the view that democracy's own values limit what majorities may do.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between instrumental and intrinsic justifications of democracy, the challenge from Plato and epistocracy, the benevolent dictator problem, and Christiano's idea of public equality.",

  glimpse: (
    <p>
      The next lesson presents deliberative democracy, which looks beyond voting to reasoned discussion. Epistemic democracy
      asks whether crowds of ordinary citizens can be wise, and social choice theory studies what voting rules can achieve.
    </p>
  ),
};
