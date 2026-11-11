import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "One must never do wrong, not even in return for a wrong done to oneself.",
    kind: "premise",
    note: "Socrates and Crito agree on this first, and Socrates warns that few people accept it. Harming someone is doing wrong, so one must not return harm for harm.",
    objection: "Granting this, the question is whether escaping an unjust sentence is doing wrong at all. The premise is only as strong as the steps that follow.",
  },
  {
    claim: "If Socrates escapes, he tries, as far as it lies with him, to destroy the laws and the city.",
    kind: "premise",
    note: "The Laws speak: a city cannot survive if the verdicts of its courts have no force and can be set aside by private citizens.",
    objection: "One escape will hardly destroy Athens. The step seems to rely on asking what would happen if everyone did the same, which needs separate support.",
  },
  {
    claim: "The city and its laws brought him into being, raised and educated him, and deserve more respect than a father or mother.",
    kind: "premise",
    note: "So he is not on an equal footing with them, and may not do back to them whatever they do to him.",
    objection: "Even parents may be disobeyed when they command something wrong. And the analogy may prove too much, demanding obedience to any law at all.",
  },
  {
    claim: "By living in Athens for seventy years when he was free to leave, he agreed to obey its laws or else persuade the city that they are wrong.",
    kind: "premise",
    note: "He did not choose Sparta or Crete, which he praised, and at his trial he could have proposed exile as his penalty but did not.",
    objection: "Is staying where you were born really an agreement? Much later, David Hume asked whether a poor peasant who knows no foreign language can be said to be free to leave his country.",
  },
  {
    claim: "So escaping would both harm the city and break a just agreement.",
    kind: "inference",
    note: "From the second, third and fourth steps.",
  },
  {
    claim: "So Socrates must not escape.",
    kind: "conclusion",
    note: "Harming the city and breaking a just agreement are both doing wrong, and the first step forbids doing wrong. Socrates stays, and drinks the hemlock.",
  },
];

export const lesson: LessonContent = {
  id: "p4.2.3",
  minutes: 75,
  links: {
    revisits: ["p4.2.2", "p1.6.4"],
    foreshadows: ["p4.3.2", "p14.1.4"],
  },

  puzzle: (
    <>
      <p>
        In 399 BCE an Athenian jury of several hundred citizens found Socrates guilty of impiety and corrupting the young,
        and sentenced him to death. While he waited in prison, his friend Crito arranged an escape: the guards could be
        bribed, friends abroad would welcome him, and the verdict was unjust anyway.
      </p>
      <p>
        Socrates refused, and died. Was he right to obey a city that was wronging him? And how does that fit with what he
        had told the jury a month before, that he would sooner disobey them than give up philosophy?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        In Plato&rsquo;s <em>Crito</em>, Socrates imagines the Laws of Athens coming to question him as he is about to slip
        away. Their speech is one of the first arguments in history about why citizens should obey the law. Walk through a
        reconstruction of it, and challenge the steps you doubt.
      </p>
      <ArgumentStepViz steps={STEPS} title="The argument of the Laws in the Crito (a reconstruction)" />
    </>
  ),

  theory: (
    <>
      <Definition title="the charges">
        <p>
          Plato&rsquo;s <em>Apology</em> presents Socrates&rsquo; defence speech. The formal charge, brought by Meletus with
          Anytus and Lycon, was that Socrates did wrong by corrupting the young and by not believing in the gods the city
          believes in, but in other new divine beings. Socrates says he fears an older set of accusers more: the years of
          rumour, as in Aristophanes&rsquo; <em>Clouds</em>, that he studied the heavens and taught people to make the
          weaker argument the stronger.
        </p>
      </Definition>

      <Example title="questioning Meletus">
        <p>Socrates cross-examines his accuser, and two arguments stand out.</p>
        <ul>
          <li>
            <strong>Corruption.</strong> Bad people harm those around them. No one wants to be harmed. So no one corrupts
            their companions willingly. If Socrates corrupts the young unwillingly, he needs instruction, not prosecution.
          </li>
          <li>
            <strong>Atheism.</strong> Meletus says Socrates believes in no gods at all. But the charge says he believes in
            new divine beings, and divine beings are gods or children of gods. The charge contradicts itself, Socrates
            says, like a riddle.
          </li>
        </ul>
      </Example>

      <Example title="the mission">
        <p>
          Socrates explains his way of life as a service to the god. His friend Chaerephon asked the oracle at Delphi
          whether anyone was wiser than Socrates, and was told that no one was. Puzzled, Socrates questioned people with a
          reputation for wisdom, and found that they thought they knew what they did not. The next lesson looks at this
          closely. He compares himself to a gadfly sent to rouse a large, sluggish horse, the city. If they offered to
          release him on condition that he stop philosophising, he says, he would obey the god rather than them. The
          unexamined life, he tells the jury, is not worth living for a human being.
        </p>
      </Example>

      <Remark title="verdict and penalty">
        <p>
          The jury voted to convict. Socrates remarks that if only thirty votes had gone the other way he would have been
          acquitted. Under Athenian procedure the accused then proposed a counter-penalty. Socrates first suggested,
          provocatively, that he deserved free meals at public expense, like an Olympic victor, and then offered a fine
          that his friends, Plato among them, would guarantee. The jury chose death. In his closing words he argues that
          death is either like a dreamless sleep or a journey to a place where he can question the great dead, and that
          neither is to be feared.
        </p>
      </Remark>

      <Remark title="the Apology and the Crito">
        <p>
          The two dialogues seem to pull apart. The <em>Apology</em> says he would disobey an order to stop philosophising;
          the <em>Crito</em> says he must obey the city&rsquo;s verdict. One reconciliation uses the Laws&rsquo; own
          formula, persuade or obey. Socrates may refuse to <em>do</em> wrong when ordered, as the <em>Apology</em> says he
          did twice: refusing an illegal motion in the assembly, and refusing the Thirty Tyrants&rsquo; order to arrest
          Leon of Salamis. But he must not evade a legal penalty, since suffering wrong is not doing wrong. Whether this
          distinction holds up is a good question for an essay.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "charge",
      rung: "check",
      prompt: <p>What were the formal charges against Socrates? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "Corrupting the young.",
          "Not believing in the gods of the city, but in new divine beings.",
          "Taking bribes.",
          "Betraying Athens to Sparta.",
        ],
        correct: [0, 1],
      },
    },
    {
      key: "unexamined",
      rung: "check",
      prompt: <p>According to the <em>Apology</em>, what kind of life is not worth living for a human being?</p>,
      answer: {
        kind: "choice",
        options: ["A poor life.", "The unexamined life.", "A life without honour.", "A life in exile."],
        correct: [1],
      },
    },
    {
      key: "votes",
      rung: "apply",
      prompt: <p>How many votes does Socrates say would have needed to change for him to be acquitted?</p>,
      answer: { kind: "numeric", value: 30 },
    },
    {
      key: "willing",
      rung: "apply",
      prompt: <p>Why, according to Socrates, would no one corrupt their companions willingly?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because corruption is illegal.",
          "Because corrupt companions would harm them, and no one wants to be harmed.",
          "Because the young cannot be corrupted.",
          "Because the gods forbid it.",
        ],
        correct: [1],
      },
    },
    {
      key: "persuade",
      rung: "apply",
      prompt: <p>The Laws say a citizen must &ldquo;persuade or obey&rdquo;. Which action fits this formula?</p>,
      answer: {
        kind: "choice",
        options: [
          "Bribing a guard to escape after losing a fair hearing.",
          "Arguing in court that a law is unjust, and accepting the penalty if the court is not persuaded.",
          "Ignoring any law one thinks is unjust.",
          "Leaving the city secretly at night.",
        ],
        correct: [1],
      },
    },
    {
      key: "laws",
      rung: "prove",
      prompt: (
        <p>
          Set out the Laws&rsquo; argument in the <em>Crito</em> in no more than six numbered steps. Choose the premise you
          think weakest and give the strongest objection to it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Includes the principle never to do wrong, and at least two of: harm to the city, the parent analogy, the agreement.",
          "Draws the conclusion that Socrates must not escape, in a form that follows from the premises.",
          "Identifies a premise and states a relevant objection, for example to tacit consent or to the claim that one escape destroys the laws. Any reasoned choice is fine.",
        ],
      },
    },
    {
      key: "consistent",
      rung: "stretch",
      prompt: (
        <p>
          Is the Socrates of the <em>Apology</em>, who would disobey an order to stop philosophising, consistent with the
          Socrates of the <em>Crito</em>, who refuses to escape? Defend an answer, using the distinction between doing and
          suffering wrong.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the apparent tension between the two dialogues clearly.",
          "Considers the reconciliation through 'persuade or obey' or doing versus suffering wrong, with the examples of the illegal motion or Leon of Salamis if helpful.",
          "Reaches a reasoned verdict on whether the reconciliation works. Any thoughtful view earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why Socrates was tried, how he defended himself in the Apology, why he refused to escape in the Crito, and whether the two dialogues are consistent.",

  glimpse: (
    <p>
      Plato&rsquo;s <em>Phaedo</em> describes Socrates&rsquo; last day and his arguments that the soul survives death.
      Political Philosophy returns to the question of the <em>Crito</em> as the problem of political obligation, where
      consent theories like the Laws&rsquo; argument face the same objections.
    </p>
  ),
};
