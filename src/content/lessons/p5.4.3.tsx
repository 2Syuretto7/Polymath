import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "We pick out some people, directly, as admirable: we admire them on reflection, not just in passing.",
    kind: "premise",
    note: "Zagzebski starts not from a definition but from an emotion. Admiration is the feeling that someone is to be imitated.",
    objection: "Admiration can be misplaced: crowds have admired tyrants. Zagzebski replies that only admiration that survives reflection counts.",
  },
  {
    claim: "These exemplars fix the reference of our moral words, as samples of water fixed the reference of the word water.",
    kind: "premise",
    note: "Before chemistry, people pointed at water and said: this stuff. Its nature was discovered later. In the same way, we point at a person and say: like that.",
    objection: "Water has a hidden chemical nature to discover. Is there a hidden nature of goodness waiting in the same way?",
  },
  {
    claim: "A virtue is a trait we admire in an exemplar.",
    kind: "inference",
    note: "Courage is whatever it is in the hero that we admire; compassion whatever it is in the saint. Investigation can tell us more about these traits.",
  },
  {
    claim: "A right act is what an exemplar would characteristically do; a good life is a life desired by exemplars.",
    kind: "inference",
    note: "The other moral concepts are defined from the exemplar outward, without first defining the good.",
  },
  {
    claim: "So we learn morality as we learn language: by imitation of admired models, corrected by reflection.",
    kind: "conclusion",
    note: "This fits how children actually learn to be good, and it explains why narratives of good lives move us.",
    objection: "Different cultures admire different people. Does the theory make ethics relative to whom one admires?",
  },
];

export const lesson: LessonContent = {
  id: "p5.4.3",
  minutes: 75,
  links: {
    revisits: ["p5.4.1", "p5.4.2", "p5.1.1"],
    foreshadows: ["p5.5.2", "p5.5.3", "p13.1.4"],
  },

  puzzle: (
    <>
      <p>
        During the Second World War, the people of the French village of Le Chambon-sur-Lignon sheltered several thousand
        refugees, many of them Jewish children, at great risk to themselves. Asked afterwards why they did it, they were
        puzzled by the question. Where else would the refugees go? They did not consult principles or weigh consequences.
        What can such people teach us about morality that a theory cannot, and could a theory be built on them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Linda Zagzebski&rsquo;s exemplarist theory, which builds ethics from admirable people. Challenge the
        steps where you have doubts.
      </p>
      <ArgumentStepViz steps={STEPS} title="Exemplarism, from admiration to a theory" />
    </>
  ),

  theory: (
    <>
      <Definition title="moral exemplars">
        <p>
          A <strong>moral exemplar</strong> is a person whose life or act we admire, on reflection, as a model of goodness.
          Zagzebski distinguishes three broad kinds. <strong>Heroes</strong> show exceptional courage, often in a single
          act. <strong>Saints</strong> show exceptional love or compassion over a lifetime. <strong>Sages</strong> show
          exceptional wisdom. Exemplars are not necessarily perfect: a person can be heroic in one respect and flawed in
          others.
        </p>
      </Definition>

      <Example title="ordinary goodness">
        <p>
          Studies of rescuers in the Second World War, such as those by Samuel and Pearl Oliner, found that many described
          their acts as unremarkable: there was no choice, anyone would have done it. Moral psychologists call this a
          sense of identity: helping was simply part of who they were. This supports the virtue ethicist&rsquo;s picture
          of good character as perception and habit rather than calculation, and it suggests that exemplars are often
          surprisingly ordinary people.
        </p>
      </Example>

      <Definition title="saints and the supererogatory">
        <p>
          J. O. Urmson pointed out that some acts are good to do but not required: a soldier who throws themselves on a
          grenade to save their comrades does more than duty demands. Such acts are{" "}
          <strong>supererogatory</strong>, beyond the call of duty. Utilitarianism struggles to make room for them, since
          it seems to require whatever does the most good. Exemplars often live in this space. Susan Wolf argued that a
          life of complete moral sainthood might not even be desirable, since it would leave no room for other excellences
          such as art or humour.
        </p>
      </Definition>

      <Remark title="learning from exemplars">
        <p>
          Exemplars help with the application objection to virtue ethics: if I do not know what the virtuous person would
          do, I can look at real ones and ask. They also show what is possible, which can move people more than an
          argument. The risks are the ones the steps above raise: admiration can be mistaken, exemplars disagree, and
          imitation without understanding can become hero worship. Reflection, and the company of many exemplars rather
          than one, are the usual safeguards.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kinds",
      rung: "check",
      prompt: <p>Which three kinds of exemplar does Zagzebski distinguish?</p>,
      answer: {
        kind: "choice",
        options: ["Kings, priests and judges", "Heroes, saints and sages", "Parents, teachers and friends", "Leaders, followers and rebels"],
        correct: [1],
      },
    },
    {
      key: "super",
      rung: "check",
      prompt: <p>What is a supererogatory act?</p>,
      answer: {
        kind: "choice",
        options: ["A required act", "A good act that goes beyond what duty demands", "A forbidden act", "An act with no consequences"],
        correct: [1],
      },
    },
    {
      key: "water",
      rung: "apply",
      prompt: <p>Why does Zagzebski compare exemplars to samples of water?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because good people are transparent.",
          "Because we can pick out goodness by pointing at instances before we know its nature, as people did with water before chemistry.",
          "Because both are necessary for life.",
          "Because both can be measured.",
        ],
        correct: [1],
      },
    },
    {
      key: "chambon",
      rung: "apply",
      prompt: (
        <p>
          The villagers of Le Chambon said they did not deliberate about whether to help. Which view does that fit best?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Act utilitarianism, which requires calculation.",
          "The view that good character shows itself in perception and habit, not calculation.",
          "Ethical egoism.",
          "Subjectivism.",
        ],
        correct: [1],
      },
    },
    {
      key: "wolf",
      rung: "apply",
      prompt: <p>What did Susan Wolf argue about moral saints?</p>,
      answer: {
        kind: "choice",
        options: [
          "That everyone should become one.",
          "That a life of complete moral sainthood might not be desirable, leaving no room for other excellences.",
          "That they do not exist.",
          "That they are always religious.",
        ],
        correct: [1],
      },
    },
    {
      key: "relative",
      rung: "prove",
      prompt: (
        <p>
          Different communities admire different people. Does that make an ethics built on exemplars relative? Explain the
          worry and how Zagzebski might reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the worry that if exemplars are picked out by admiration, and admiration varies, so will ethics.",
          "Gives a reply, such as the requirement that admiration survive reflection, or the wide agreement across cultures on certain exemplars.",
          "Reaches a view. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "grenade",
      rung: "stretch",
      prompt: (
        <p>
          Can a utilitarian make room for supererogatory acts, such as throwing oneself on a grenade? Consider whether the
          theory requires the act, and whether that is a problem.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that maximising utilitarianism seems to require the best act, leaving nothing beyond duty.",
          "Considers a response, such as satisficing, rule utilitarianism, or distinguishing what is right from what it is useful to blame.",
          "Reaches a reasoned view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what moral exemplars are, Zagzebski's theory of building ethics from admiration, the idea of supererogation, and what we can and cannot learn from admirable people.",

  glimpse: (
    <p>
      The next chapter turns to applied ethics, beginning with abortion, animals and poverty. The Moral Philosophy
      course returns to exemplars in its study of contemporary virtue ethics.
    </p>
  ),
};
