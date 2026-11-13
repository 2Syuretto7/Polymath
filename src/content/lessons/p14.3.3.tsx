import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArgumentStepViz, type ArgStep } from "@/components/viz/ArgumentStepViz";
import type { LessonContent } from "@/lib/types";

const STEPS: ArgStep[] = [
  {
    claim: "Rawls’s parties choose principles behind a veil, knowing nothing of their ends or attachments.",
    kind: "premise",
    note: "This models persons as prior to and independent of their ends: the self chooses its ends, rather than being constituted by them.",
  },
  {
    claim: "So the liberal self is ‘unencumbered’: it could stand back from any of its commitments.",
    kind: "inference",
    note: "Michael Sandel’s description of the self that Rawls’s theory presupposes.",
    objection: "Rawls replied that the original position is a device of representation, not a metaphysics of the person: the self is political, not metaphysical.",
  },
  {
    claim: "But some commitments, to family, nation, faith or community, partly make us who we are.",
    kind: "premise",
    note: "Alasdair MacIntyre: I am someone’s child, a citizen of this city, a member of this tradition. My life is a narrative within these.",
  },
  {
    claim: "Such constitutive attachments are not chosen and cannot be set aside at will without losing ourselves.",
    kind: "inference",
    note: "Hence obligations of solidarity and membership that we never agreed to.",
    objection: "Liberals reply that people can and do question inherited roles, as in leaving a caste or a faith, and that a just state must protect that possibility.",
  },
  {
    claim: "So a politics neutral between conceptions of the good, built on the unencumbered self, misdescribes us and neglects the common good.",
    kind: "conclusion",
    note: "Communitarians, including Sandel, Taylor, MacIntyre and Walzer, favour a politics of the common good and of shared meanings.",
  },
];

export const lesson: LessonContent = {
  id: "p14.3.3",
  minutes: 80,
  links: {
    revisits: ["p14.2.1", "p14.3.1", "p5.4.1"],
    foreshadows: ["p14.4.2", "p14.6.2", "p14.5.2"],
  },

  puzzle: (
    <>
      <p>
        Behind Rawls&rsquo;s veil you do not know your religion, your family, your caste or your country. But are you even a
        person without these? Communitarians argue that liberal theory starts from a self that does not exist.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Sandel&rsquo;s argument and open the objections.</p>
      <ArgumentStepViz title="The unencumbered self" steps={STEPS} />
    </>
  ),

  theory: (
    <>
      <Definition title="communitarianism">
        <p>
          A family of views, prominent in the 1980s, holding that persons are partly constituted by their communities and
          traditions, that the good of community is central to politics, and that liberal neutrality about the good life is
          neither possible nor desirable.
        </p>
      </Definition>

      <Example title="four critics">
        <p>
          Michael Sandel attacked the unencumbered self of Rawls&rsquo;s theory. Alasdair MacIntyre, in After Virtue, argued
          that modern moral language is fragments of lost traditions, and that the virtues need a community and a shared
          narrative. Charles Taylor argued that the capacities liberals prize can only develop within a society, which
          individuals therefore have obligations to sustain. Michael Walzer argued that justice is relative to the social
          meanings of goods within a community, so different spheres, such as medicine, money and office, need different
          principles.
        </p>
      </Example>

      <Remark title="the liberal reply">
        <p>
          Rawls&rsquo;s later Political Liberalism presents his theory as political, not metaphysical: it applies to citizens
          in their public role, and leaves them free to see themselves as constituted by their attachments in private life.
          Will Kymlicka argued that liberals can value community, including cultural membership, as a context for choice,
          while insisting on the right to revise one&rsquo;s ends.
        </p>
      </Remark>

      <Remark title="the worry about community">
        <p>
          Critics note that communities can be oppressive: shared meanings may include hierarchies of caste or gender.
          Feminists and others ask whose voice defines the common good, and liberals answer that individual rights protect
          members, especially dissenters, from the community itself.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "unenc",
      rung: "check",
      prompt: <p>What is the unencumbered self, in Sandel&rsquo;s critique?</p>,
      answer: {
        kind: "choice",
        options: [
          "A self prior to and independent of its ends and attachments.",
          "A self without possessions.",
          "A self with no rights.",
          "A self that is unemployed.",
        ],
        correct: [0],
      },
    },
    {
      key: "walzer",
      rung: "check",
      prompt: <p>What is Walzer&rsquo;s idea of spheres of justice?</p>,
      answer: {
        kind: "choice",
        options: [
          "Different goods, with different social meanings, call for different distributive principles.",
          "Justice is the same everywhere.",
          "Only money matters.",
          "Justice applies only to states.",
        ],
        correct: [0],
      },
    },
    {
      key: "rawls",
      rung: "apply",
      prompt: <p>How did the later Rawls answer the communitarian critique?</p>,
      answer: {
        kind: "choice",
        options: [
          "By presenting his theory as political, not metaphysical: a conception of citizens, not of the self in general.",
          "By abandoning the original position altogether.",
          "By adopting utilitarianism.",
          "By accepting that the self has no attachments.",
        ],
        correct: [0],
      },
    },
    {
      key: "kym",
      rung: "apply",
      prompt: <p>How does Kymlicka reconcile liberalism with the value of community?</p>,
      answer: {
        kind: "choice",
        options: [
          "Cultural membership provides a context of choice, while individuals keep the right to revise their ends.",
          "By banning communities.",
          "By making community membership compulsory.",
          "By ignoring culture.",
        ],
        correct: [0],
      },
    },
    {
      key: "mac",
      rung: "apply",
      prompt: <p>What did MacIntyre argue in After Virtue?</p>,
      answer: {
        kind: "choice",
        options: [
          "That modern moral language is fragments of lost traditions, and the virtues need a community and shared narrative.",
          "That virtues are innate.",
          "That ethics is purely individual.",
          "That rights are all that matter.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Are some of our obligations unchosen, arising from membership rather than agreement? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the communitarian claim with an example, such as family or national obligations.",
          "Considers the liberal reply about the right to revise or exit.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "caste",
      rung: "stretch",
      prompt: <p>If a community&rsquo;s shared meanings include caste hierarchy, can a communitarian criticise it from within?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the worry that shared meanings can be oppressive.",
          "Considers internal criticism, such as appeal to the tradition's own ideals or dissenting voices, and the liberal alternative.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the communitarian critique of liberalism, Sandel's unencumbered self, the views of MacIntyre, Taylor and Walzer, and the replies of the later Rawls and Kymlicka.",

  glimpse: (
    <p>
      The next chapter turns to democracy: why it is justified, and how deliberation might improve it. Nationalism and
      feminist political philosophy revisit questions about community and identity.
    </p>
  ),
};
