import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CareLensViz } from "@/components/viz/CareLensViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p5.4.2",
  minutes: 80,
  links: {
    revisits: ["p5.4.1", "p5.3.4", "p5.2.1"],
    foreshadows: ["p5.4.3", "p5.5.3", "p5.5.1"],
  },

  puzzle: (
    <>
      <p>
        In the 1970s the psychologist Lawrence Kohlberg measured moral development by asking children about dilemmas. At
        the top of his scale stood reasoning from universal principles of justice. Girls and women often scored lower.
        Carol Gilligan, who worked with him, listened to the same answers and heard not a failure to reach the top but a
        different voice: one that reasoned from relationships and responsibilities rather than rights and rules. Was the
        scale measuring moral maturity, or only one way of being moral?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Look at each dilemma through each lens in turn. Watch which features of the situation come forward, and which
        fade.
      </p>
      <CareLensViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the ethics of care">
        <p>
          The <strong>ethics of care</strong> takes caring relationships as the heart of morality. It begins from the fact
          that every human life starts in dependence, and that most of us will be dependent again, in illness or old age.
          Nel Noddings described the relation between the one caring and the one cared for: the carer attends to the other
          person, receives their reality, and acts for their sake; the cared for responds, and that response completes the
          relation. Virginia Held argues that care is both a practice, the actual work of looking after people, and a
          value.
        </p>
      </Definition>

      <Example title="justice and care">
        <p>
          Gilligan contrasted two perspectives. The justice perspective sees separate individuals with rights, and asks
          which principle should decide between them, impartially. The care perspective sees people in a web of
          relationships, and asks how to respond to particular needs so that nobody is left alone or hurt. In the Heinz
          dilemma, one child treated the problem as a sum with people; another looked for a way to keep everyone
          connected. Gilligan did not say the second answer was better, only that a theory which counts it as immature is
          missing half of morality.
        </p>
      </Example>

      <Definition title="against impartiality">
        <p>
          Utilitarianism and Kant both ask us to take an impartial view, counting everyone equally. Care ethicists point
          out that a parent who weighed their own child&rsquo;s needs no more than a stranger&rsquo;s would not be admirably
          fair but a bad parent. Partiality towards those in our care is not a bias to be overcome; it is part of what
          morality asks of us. Emotions such as sympathy and attentiveness are not distractions from moral reasoning but
          ways of perceiving what matters.
        </p>
      </Definition>

      <Remark title="questions">
        <p>
          Critics ask whether care can reach distant strangers, whom we will never meet, and whether it needs justice to
          tell it when care becomes exploitation: much caring work has been done unpaid, and mostly by women. Many care
          ethicists agree that care and justice need each other. Held argues that care is the more basic, since without
          care there would be no persons to have rights. Others see the ethics of care as a form of virtue ethics, with
          care as a central virtue; still others insist it is a distinct theory, centred on relationships rather than
          individual character.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "gilligan",
      rung: "check",
      prompt: <p>What did Gilligan claim about Kohlberg&rsquo;s scale?</p>,
      answer: {
        kind: "choice",
        options: [
          "That it was perfectly accurate.",
          "That it treated one moral voice, reasoning from justice, as the only mature one, and missed reasoning from care.",
          "That women reason less well about morality.",
          "That children have no moral views.",
        ],
        correct: [1],
      },
    },
    {
      key: "start",
      rung: "check",
      prompt: <p>Which fact about human life does the ethics of care start from?</p>,
      answer: {
        kind: "choice",
        options: ["That we are rational", "That we are all dependent on others at some points in our lives", "That we seek pleasure", "That we make contracts"],
        correct: [1],
      },
    },
    {
      key: "lens",
      rung: "apply",
      prompt: <p>Which of these questions belong to the care perspective? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "What does this particular person need from me?",
          "Which right has priority?",
          "How can we keep this relationship from breaking?",
          "What would an impartial judge decide?",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "partial",
      rung: "apply",
      prompt: (
        <p>
          A mother spends her savings on her own child&rsquo;s operation rather than on saving two strangers. What would a
          care ethicist say?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "She acted wrongly by failing to maximise.",
          "Her partiality to the child in her care is part of what morality asks, not a bias to correct.",
          "She should have flipped a coin.",
          "Only her intentions matter.",
        ],
        correct: [1],
      },
    },
    {
      key: "noddings",
      rung: "apply",
      prompt: <p>In Noddings&rsquo;s account, what completes the caring relation?</p>,
      answer: {
        kind: "choice",
        options: [
          "A payment for the care.",
          "The response of the one cared for, who receives the care.",
          "A promise from the carer.",
          "The approval of a third party.",
        ],
        correct: [1],
      },
    },
    {
      key: "strangers",
      rung: "prove",
      prompt: (
        <p>
          Can the ethics of care say anything about our obligations to distant strangers, such as people suffering a famine
          in another country? Set out the objection and one reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the worry that care is rooted in personal relationships and so may not reach strangers.",
          "Gives a reply, such as Held's view of caring about as well as caring for, or care supported by just institutions.",
          "Reaches a view. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "virtue",
      rung: "stretch",
      prompt: <p>Is the ethics of care a form of virtue ethics, or a different theory? Argue for your answer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes what the two share: suspicion of abstract rules, attention to particulars, the role of emotion.",
          "Notes a difference, such as the focus on relationships rather than the character of the individual agent.",
          "Takes a reasoned position. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Gilligan's challenge to Kohlberg, the difference between the justice and care perspectives, why care ethics rejects strict impartiality, and the main questions it faces.",

  glimpse: (
    <p>
      The next lesson asks what moral exemplars, real admirable people, can teach us. The applied lessons return to care
      when asking what we owe to the poor and in debates about abortion.
    </p>
  ),
};
