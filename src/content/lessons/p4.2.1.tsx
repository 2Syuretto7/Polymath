import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MeasureViz } from "@/components/viz/MeasureViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.2.1",
  minutes: 65,
  links: {
    revisits: ["p0.2.4", "p4.1.2"],
    foreshadows: ["p4.3.3", "p4.4.1", "p5.1.1"],
  },

  puzzle: (
    <>
      <p>
        In fifth-century Athens, power went to whoever could persuade the assembly and the law courts. Into this city came
        travelling teachers who promised, for a fee, to make young men excellent speakers and successful citizens. They
        were the most famous intellectuals of their day, and some of them asked hard questions about truth, the gods and
        justice.
      </p>
      <p>
        Today &ldquo;sophistry&rdquo; means clever but dishonest argument. How did the name of a profession become an
        insult, and is the insult fair?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The most famous sophist, Protagoras, is reported by Plato to have said that a human being is the measure of all
        things. Plato illustrates it with a breeze: the same wind blows on two people, and one feels cold while the other
        does not. Is the wind cold, or not? Move the two people below and try three ways of describing the case.
      </p>
      <MeasureViz />
    </>
  ),

  theory: (
    <>
      <Definition title="who the sophists were">
        <p>
          The <strong>sophists</strong> were itinerant teachers of the later fifth century BCE who taught, for fees, the
          skills of public life: above all rhetoric, but also grammar, the meanings of words, and what they called{" "}
          <em>aret&ecirc;</em>, excellence or virtue, meaning the qualities that make someone succeed as a citizen. The
          best known are Protagoras of Abdera, Gorgias of Leontini, Prodicus of Ceos, who drew fine distinctions between
          near-synonyms, and Hippias of Elis, who claimed to teach almost everything. They did not form a school and did
          not share a doctrine.
        </p>
        <p>
          Much of what we know comes from Plato, who disliked them and made them Socrates&rsquo; opponents. Reading
          charitably means remembering that the portraits are drawn by a rival.
        </p>
      </Definition>

      <Example title="Protagoras">
        <ul>
          <li>
            <strong>The measure doctrine.</strong> In Plato&rsquo;s <em>Theaetetus</em>, Protagoras is quoted as saying that
            a human being is the measure of all things, of the things that are, that they are, and of the things that are
            not, that they are not. Socrates interprets this to mean that each thing is, for each person, as it appears to
            them.
          </li>
          <li>
            <strong>The gods.</strong> A surviving fragment says that he could not know whether the gods exist or what they
            are like, because the subject is obscure and human life is short.
          </li>
          <li>
            <strong>Two arguments.</strong> Later writers report that he said there are two opposing arguments on every
            question, and Aristotle connects him with the art of making the weaker argument the stronger.
          </li>
          <li>
            <strong>Virtue can be taught.</strong> In Plato&rsquo;s <em>Protagoras</em>, he tells a myth in which Zeus gives
            every human being a share of justice and a sense of shame, so that cities can exist. That is why, he argues,
            the Athenians rightly let any citizen speak on questions of justice, and why everyone teaches virtue to
            everyone, with professionals like him only a little better at it.
          </li>
        </ul>
      </Example>

      <Example title="Gorgias">
        <p>
          Gorgias was famous for his dazzling prose style. In <em>On What Is Not</em>, known through later summaries such as
          that in Sextus Empiricus, he argued that nothing exists; that if anything existed, it could not be known; and
          that if it could be known, it could not be communicated to anyone else. Whether this was serious philosophy, a
          parody of Parmenides, or a display of technique is still debated. In the <em>Encomium of Helen</em> he defends
          Helen of Troy, arguing that if she was persuaded by speech she is not to blame, because speech is a powerful
          master that works on the soul as drugs work on the body.
        </p>
      </Example>

      <Definition title="nomos and physis">
        <p>
          A central debate of the period contrasted <em>nomos</em>, law, custom or convention, with <em>physis</em>,
          nature. Are justice and morality natural, the same everywhere, or human agreements that differ from city to
          city? The sophist Antiphon wrote that the demands of law are agreed upon, while those of nature are necessary. In
          Plato&rsquo;s <em>Gorgias</em>, the character Callicles goes further: conventional justice was invented by the
          weak to restrain the strong, while by nature the stronger should have more.
        </p>
      </Definition>

      <Remark title="the self-refutation objection">
        <p>
          In the <em>Theaetetus</em>, Socrates presses an objection to the measure doctrine. Most people believe Protagoras
          is wrong. If every belief is true for the one who holds it, then their belief that he is wrong is true for them,
          and Protagoras, by his own doctrine, has to concede it. A second objection is that about the future, experts
          judge better than others: a doctor judges better than a patient whether the patient will have a fever tomorrow.
          If some judgements are better than others, not all appearances are equally true.
        </p>
      </Remark>

      <Remark title="Socrates and the sophists">
        <p>
          In Aristophanes&rsquo; comedy <em>Clouds</em>, Socrates himself appears as a sophist, running a school that
          teaches young men to win unjust arguments. Plato insists on the differences: Socrates took no fees, claimed to
          have no knowledge to sell, and examined rather than taught. Many readers since the nineteenth century have argued
          that the sophists deserve more credit, as the first to treat language, persuasion and the conventions of society
          as subjects for study.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "who",
      rung: "check",
      prompt: <p>What did the sophists chiefly teach, for fees?</p>,
      answer: {
        kind: "choice",
        options: [
          "Medicine and surgery.",
          "Rhetoric and the excellence needed for success in public life.",
          "Geometry and astronomy only.",
          "The worship of the Olympian gods.",
        ],
        correct: [1],
      },
    },
    {
      key: "measure",
      rung: "check",
      prompt: <p>On the interpretation given in Plato&rsquo;s <em>Theaetetus</em>, what does the measure doctrine say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Human beings are the most important things in the world.",
          "Each thing is, for each person, as it appears to them.",
          "Everything can be measured with instruments.",
          "Only what is measurable exists.",
        ],
        correct: [1],
      },
    },
    {
      key: "nomos",
      rung: "apply",
      prompt: <p>Which claim belongs on the side of <em>nomos</em> in the nomos and physis debate?</p>,
      answer: {
        kind: "choice",
        options: [
          "Fire burns in Greece and in Persia alike.",
          "What counts as just is fixed by the agreements of each city.",
          "The stronger animal eats the weaker.",
          "Human beings need food to live.",
        ],
        correct: [1],
      },
    },
    {
      key: "helen",
      rung: "apply",
      prompt: <p>In the <em>Encomium of Helen</em>, why is Helen not to blame if she was persuaded by speech?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because she never went to Troy.",
          "Because speech acts on the soul with a force like that of drugs on the body, so she was compelled.",
          "Because the gods approved of her choice.",
          "Because persuasion is always honest.",
        ],
        correct: [1],
      },
    },
    {
      key: "future",
      rung: "apply",
      prompt: (
        <p>
          A patient feels sure they will be well tomorrow; their doctor predicts a fever. Tomorrow they have a fever. Why
          is this case a problem for the measure doctrine?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Because fevers are not real.",
          "Because the doctor's judgement turned out better than the patient's, so not every appearance is equally true.",
          "Because the patient is lying.",
          "Because doctors are sophists.",
        ],
        correct: [1],
      },
    },
    {
      key: "refute",
      rung: "prove",
      prompt: (
        <p>
          Set out Socrates&rsquo; self-refutation argument against Protagoras in numbered steps. Then consider a reply: a
          Protagorean says only that the doctrine is true <em>for Protagoras</em>. Does that reply escape the argument, and
          at what cost?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the steps: every belief is true for its holder; many people believe the doctrine is false; so it is false for them; Protagoras must grant this.",
          "Explains the reply: if the doctrine is only true for Protagoras, the opponents' belief does not contradict it.",
          "Weighs the cost, for example that the doctrine then gives no one else a reason to accept it, or that it can no longer be argued for. Any thoughtful assessment earns full credit.",
        ],
      },
    },
    {
      key: "where",
      rung: "stretch",
      prompt: (
        <p>
          Protagorean relativism seems plausible about some things, like whether a wind feels cold or a food tastes good,
          and implausible about others, like whether a bridge will hold. Where would you draw the line, and why? Is
          morality on one side or the other?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies a feature that separates the two kinds of case, such as dependence on the perceiver, or the possibility of prediction and correction.",
          "Applies the criterion to morality, with a reason.",
          "Considers an objection to the line drawn. Any reasoned position is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend who the sophists were, what Protagoras' measure doctrine says and the two objections Plato raises to it, and why 'sophist' came to be an insult.",

  glimpse: (
    <p>
      Thrasymachus, another sophist, defends the view that justice is the advantage of the stronger in book 1 of the{" "}
      <em>Republic</em>. The <em>Theaetetus</em> returns to Protagoras when Plato asks what knowledge is. Introduction to
      Ethics takes up the modern descendants of the nomos side: cultural relativism and subjectivism.
    </p>
  ),
};
