import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "What is composite can be broken up into its parts; what is not composite, if anything is, cannot.",
    kind: "premise",
    note: "Dying, for a body, is coming apart. Something with no parts has nothing to come apart into.",
  },
  {
    claim: "What is always the same is not composite; what changes all the time is composite.",
    kind: "premise",
    note: "Socrates' examples are the Forms, such as the Equal itself, which never change, against the many equal or beautiful things, which constantly do.",
    objection: "Why should changelessness go with having no parts? A diamond is composite and barely changes; a flame is constantly changing yet hard to divide into lasting parts.",
  },
  {
    claim: "There are two kinds of things: the visible, which always changes, and the invisible, which is always the same.",
    kind: "premise",
    note: "The visible is grasped by the senses; the invisible only by thought.",
  },
  {
    claim: "The body is more like the visible kind, and the soul more like the invisible kind.",
    kind: "premise",
    note: "The soul is invisible, and when it investigates by itself, apart from the senses, it turns to what is pure and unchanging, as if it were akin to it.",
    objection: "'More like' is not 'belongs to'. An argument from resemblance can at best make a conclusion likely, and Socrates himself ends with 'indissoluble, or nearly so'.",
  },
  {
    claim: "So the body is the kind of thing that quickly dissolves, while the soul is entirely indissoluble, or nearly so.",
    kind: "conclusion",
    note: "Socrates' own cautious wording. He goes on to say the argument still leaves room for doubt.",
    objection: "Simmias' objection: the attunement of a lyre is invisible, fine and divine, yet when the lyre is broken the attunement perishes first. If the soul is the attunement of the body, it may perish with it.",
  },
];

export const lesson: LessonContent = {
  id: "p4.3.2",
  minutes: 75,
  links: {
    revisits: ["p4.2.3", "p4.3.1", "p1.2.1"],
    foreshadows: ["p4.3.4", "p6.4.3"],
  },

  puzzle: (
    <>
      <p>
        On the day of his execution, Socrates spends his last hours talking with his friends about whether the soul
        survives death. He is calm; they are in tears. He tells them that a true philosopher should welcome death, because
        philosophy has been a lifelong practice of separating the soul from the body.
      </p>
      <p>
        Plato&rsquo;s <em>Phaedo</em> records four arguments that the soul is immortal. Do any of them work? And what is
        the soul supposed to be, if it can exist without a body?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        One of the arguments, the argument from affinity, is easy to state: the soul is like the things that never perish,
        the body like the things that do. Walk through it and challenge the steps, including with the objection that
        Socrates&rsquo; friend Simmias raises.
      </p>
      <ArgumentStepViz steps={STEPS} title="The argument from affinity in the Phaedo (a reconstruction)" />
    </>
  ),

  theory: (
    <>
      <Definition title="the setting">
        <p>
          The dialogue is narrated by Phaedo, who was present, to a friend who was not. Socrates&rsquo; companions include
          two visitors from Thebes, Simmias and Cebes, who press him hard. Plato himself, Phaedo says, was ill and absent.
          Death is defined as the separation of the soul from the body, and the philosopher, who tries to attend to things
          by thought alone rather than through the senses and bodily desires, has been rehearsing that separation all
          along.
        </p>
      </Definition>

      <Example title="the four arguments">
        <ol>
          <li>
            <strong>The cyclical argument.</strong> Opposites come to be from opposites: the larger from the smaller, waking
            from sleeping. So the living come from the dead as the dead come from the living, and souls must exist
            somewhere between lives.
          </li>
          <li>
            <strong>The argument from recollection.</strong> Equal sticks and stones sometimes seem equal to one person and
            unequal to another, but the Equal itself never seems unequal. When we judge that sticks fall short of perfect
            equality, we use a knowledge of the Equal itself that the senses never gave us. So we had it before birth, and
            the soul existed before the body.
          </li>
          <li>
            <strong>The argument from affinity.</strong> As in the visualisation: the soul resembles the unchanging and
            invisible, so it is likely to be indissoluble.
          </li>
          <li>
            <strong>The final argument.</strong> A Form makes things what they are: things are hot by the presence of heat,
            and snow cannot admit heat and stay snow. The soul is what brings life to whatever it occupies, and so it cannot
            admit life&rsquo;s opposite, death. What cannot admit death is immortal, and the immortal, Socrates argues, is
            also indestructible.
          </li>
        </ol>
      </Example>

      <Remark title="two objections">
        <ul>
          <li>
            <strong>Simmias: the attunement.</strong> Perhaps the soul is to the body as the attunement is to a lyre:
            invisible and fine, yet dependent on the strings being in tension. Socrates replies that an attunement cannot
            oppose its instrument, whereas the soul often opposes the body&rsquo;s desires, and that the view conflicts with
            the recollection argument, which Simmias accepts.
          </li>
          <li>
            <strong>Cebes: the weaver.</strong> Even if the soul outlives the body, a weaver outlives many cloaks and yet
            dies before the last one. The soul might wear out many bodies and still perish. The final argument is
            Socrates&rsquo; answer.
          </li>
        </ul>
      </Remark>

      <Remark title="the hatred of arguments">
        <p>
          After the objections, the listeners are dismayed, and Socrates warns against <em>misology</em>, the hatred of
          arguments. People who trust an argument too easily and then see it fail may come to distrust all reasoning, as
          people betrayed by friends come to distrust everyone. The fault, he says, lies with our lack of skill, not with
          argument itself. The dialogue ends with his death, calm and courteous to the last.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "death",
      rung: "check",
      prompt: <p>How does the <em>Phaedo</em> define death?</p>,
      answer: {
        kind: "choice",
        options: [
          "The end of all existence.",
          "The separation of the soul from the body.",
          "A long sleep.",
          "The body becoming invisible.",
        ],
        correct: [1],
      },
    },
    {
      key: "match",
      rung: "check",
      prompt: <p>Which argument appeals to our knowledge of the Equal itself?</p>,
      answer: {
        kind: "choice",
        options: ["The cyclical argument.", "The argument from recollection.", "The argument from affinity.", "The final argument."],
        correct: [1],
      },
    },
    {
      key: "lyre",
      rung: "apply",
      prompt: <p>What is the point of Simmias&rsquo; comparison with the attunement of a lyre?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the soul is a musician.",
          "That something invisible and fine can still depend on a physical thing and perish with it.",
          "That the soul existed before birth.",
          "That music is divine.",
        ],
        correct: [1],
      },
    },
    {
      key: "weaver",
      rung: "apply",
      prompt: <p>What does Cebes&rsquo; weaver show, if it works?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the soul does not exist.",
          "That outlasting one body, or many, does not prove the soul lasts for ever.",
          "That bodies are like cloaks.",
          "That weavers are wise.",
        ],
        correct: [1],
      },
    },
    {
      key: "snow",
      rung: "apply",
      prompt: <p>In the final argument, what role does the example of snow and heat play?</p>,
      answer: {
        kind: "choice",
        options: [
          "It shows that some things cannot admit the opposite of a character they essentially bring, as the soul cannot admit death.",
          "It shows that the soul is cold.",
          "It shows that everything melts eventually.",
          "It shows that heat is a Form.",
        ],
        correct: [0],
      },
    },
    {
      key: "affinity",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct the argument from affinity in standard form. Identify its weakest premise, and assess whether
          Socrates&rsquo; reply to Simmias succeeds against the attunement objection.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives the premises linking compositeness, change, visibility and resemblance, and the cautious conclusion.",
          "Identifies a weak premise, such as the inference from resemblance, with a reason.",
          "Assesses Socrates' reply, for example the point that the soul can oppose the body. Any reasoned verdict earns full credit.",
        ],
      },
    },
    {
      key: "modern",
      rung: "stretch",
      prompt: (
        <p>
          A modern version of Simmias&rsquo; view says the mind is to the brain as the attunement is to the lyre: a
          pattern of activity that cannot exist without it. Is this view stronger or weaker than Simmias&rsquo; version,
          and how might a defender of the <em>Phaedo</em> reply?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the modern view and how it parallels the attunement objection.",
          "Considers a reply, such as the soul's ability to oppose bodily desires, or arguments from the unity or rationality of the mind.",
          "Reaches a reasoned judgement. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the setting of the Phaedo, the four arguments for the immortality of the soul in outline, the objections of Simmias and Cebes, and Socrates' warning against hating arguments.",

  glimpse: (
    <p>
      The final argument depends on the Forms, which the lesson after next examines directly. Medieval Philosophy returns
      to the soul with Aquinas, who, following Aristotle rather than the <em>Phaedo</em>, makes the soul the form of the
      body.
    </p>
  ),
};
