import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["consent", "fair play", "gratitude", "natural duty of justice"];
const CASES = ["most people never agreed", "benefits you did not ask for", "why this state in particular", "a seriously unjust law"];
const V: CaseVerdict[][] = [
  [
    { ok: false, why: "Most citizens have never promised to obey, and tacit consent by staying seems too weak, as Hume’s sailor shows." },
    { ok: true, why: "Unrequested benefits create no obligation unless you agreed to them, which matches the intuition." },
    { ok: true, why: "If you did consent, it was to your own state, so particularity is easy." },
    { ok: true, why: "No one can consent to commit serious injustice, so the obligation runs out." },
  ],
  [
    { ok: true, why: "H. L. A. Hart and the early Rawls: those who accept the benefits of a fair cooperative scheme owe their share, whether or not they agreed." },
    { ok: false, why: "Robert Nozick’s public address system: neighbours broadcast entertainment and expect you to take a turn running it. Do you owe a day of your time? Many think not." },
    { ok: true, why: "You benefit from your own state’s scheme, so the obligation is to it." },
    { ok: true, why: "The duty holds only within a fair scheme, so a seriously unjust one does not bind." },
  ],
  [
    { ok: true, why: "Gratitude for benefits received need not rest on consent; Socrates in the Crito compares the laws to parents." },
    { ok: false, why: "Gratitude may be owed, but it seems to require less than strict obedience to every law." },
    { ok: true, why: "Gratitude is owed to the particular state that raised and protected you." },
    { ok: false, why: "Gratitude to a benefactor does not easily explain where obedience stops." },
  ],
  [
    { ok: true, why: "Rawls’s later view: everyone has a natural duty to support just institutions that apply to them, without any act of consent." },
    { ok: true, why: "The duty does not come from benefits, so imposed benefits are irrelevant." },
    { ok: false, why: "A. John Simmons’s particularity problem: a duty to support just institutions seems owed to all just states, not specially to your own. Jeremy Waldron replies that the ones that apply to you have special claims." },
    { ok: true, why: "The duty is to support just institutions, so it does not extend to seriously unjust laws." },
  ],
];

export const lesson: LessonContent = {
  id: "p14.1.4",
  minutes: 80,
  links: {
    revisits: ["p14.1.2", "p14.1.3", "p4.2.3"],
    foreshadows: ["p14.2.1", "p14.4.1", "p14.6.2"],
  },

  puzzle: (
    <>
      <p>
        Waiting at a red light at three in the morning on an empty road, many people stay put. Is that only habit or fear of a
        fine, or do they owe it to the state to obey its laws, simply because they are its laws? And if so, what created that
        debt?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test four accounts of political obligation against four challenges. Click a cell to see the verdict and the reason.</p>
      <CaseMatrixViz
        theories={THEORIES}
        cases={CASES}
        verdicts={V}
        prompt="Does the account meet the challenge?"
        caption="No account passes every test, which has led some philosophers, such as Simmons, to philosophical anarchism: there is no general obligation to obey, though there are often good reasons to do what the law requires."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="political obligation">
        <p>
          A moral obligation to obey the laws of one&rsquo;s own state because they are its laws. A satisfactory account should
          show why the obligation is general, applying to all or most citizens, and particular, binding them to their own state
          rather than to any just state.
        </p>
      </Definition>

      <Example title="Socrates in prison">
        <p>
          In Plato&rsquo;s <em>Crito</em>, Socrates refuses to escape his unjust death sentence. He imagines the laws arguing
          that he owes them obedience as a child owes parents, that he agreed to them by staying in Athens for seventy years,
          and that escape would destroy them. Most later theories develop one of these three arguments.
        </p>
      </Example>

      <Remark title="philosophical anarchism">
        <p>
          If no account works, there may be no general obligation to obey. Philosophical anarchists do not conclude that
          states are illegitimate in every sense, or that we should disobey: we often have independent moral reasons to do what
          the law says, as when it forbids murder. The question is whether the law itself adds a reason.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is political obligation?</p>,
      answer: {
        kind: "choice",
        options: [
          "A moral obligation to obey the laws of one’s own state because they are its laws.",
          "A legal duty to vote.",
          "An obligation to join a political party.",
          "A duty to pay any tax one likes.",
        ],
        correct: [0],
      },
    },
    {
      key: "crito",
      rung: "check",
      prompt: <p>In the <em>Crito</em>, what does Socrates decide?</p>,
      answer: {
        kind: "choice",
        options: ["To escape from prison", "Not to escape, and to accept the sentence", "To appeal to Sparta", "To start a rebellion"],
        correct: [1],
      },
    },
    {
      key: "pa",
      rung: "apply",
      prompt: <p>What is Nozick&rsquo;s public address system example meant to show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That receiving benefits you did not ask for does not by itself oblige you to contribute.",
          "That loudspeakers are unjust.",
          "That consent is never needed.",
          "That gratitude is always owed.",
        ],
        correct: [0],
      },
    },
    {
      key: "particular",
      rung: "apply",
      prompt: <p>What is the particularity problem for the natural duty account?</p>,
      answer: {
        kind: "choice",
        options: [
          "A duty to support just institutions seems owed to all just states, not specially to one’s own.",
          "Particular laws are always unjust.",
          "Citizens are too particular about laws.",
          "It applies only to particular people.",
        ],
        correct: [0],
      },
    },
    {
      key: "anarch",
      rung: "apply",
      prompt: <p>What does a philosophical anarchist conclude?</p>,
      answer: {
        kind: "choice",
        options: [
          "That we must overthrow every government.",
          "That there is no general moral obligation to obey the law as such, though we often have other reasons to do what it requires.",
          "That laws are always just.",
          "That only anarchists may vote.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Do citizens have a moral obligation to obey the law simply because it is the law? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States at least one account, such as consent, fair play or natural duty.",
          "Raises an objection to it, such as the lack of consent or the particularity problem.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is civil disobedience compatible with having a general obligation to obey the law? Consider Gandhi&rsquo;s salt march.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains civil disobedience as public, non-violent law-breaking with acceptance of the penalty.",
          "Considers whether accepting the penalty expresses respect for law, or whether the obligation is outweighed.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what political obligation is, the consent, fair play and natural duty accounts with one objection to each, and what philosophical anarchism concludes.",

  glimpse: (
    <p>
      The next part turns from obedience to justice, beginning with Rawls&rsquo;s original position. Later lessons ask what
      makes democratic decisions legitimate and whether national borders carry moral weight.
    </p>
  ),
};
