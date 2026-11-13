import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["liberal feminism", "radical feminism", "care ethics", "intersectionality"];
const ITEMS: SortItem[] = [
  {
    text: "Women should have the same legal rights, education and opportunities as men.",
    cat: "liberal feminism",
    why: "The tradition of Mary Wollstonecraft and John Stuart Mill: extend liberal equality to women.",
  },
  {
    text: "Principles of justice must apply inside the family, where unpaid work is unequally shared.",
    cat: "liberal feminism",
    why: "Susan Moller Okin, in Justice, Gender, and the Family, applied Rawls’s principles to the household.",
  },
  {
    text: "The question is not difference but dominance: gender is itself a hierarchy.",
    cat: "radical feminism",
    why: "Catharine MacKinnon argued that treating sex equality as sameness or difference misses the system of male dominance.",
  },
  {
    text: "Some kinds of pornography are a practice of subordination, not mere speech.",
    cat: "radical feminism",
    why: "MacKinnon and Andrea Dworkin’s argument, controversial among feminists and liberals alike.",
  },
  {
    text: "Political theory should start from relationships of care and dependency, not independent individuals.",
    cat: "care ethics",
    why: "Carol Gilligan, Virginia Held and Eva Kittay: everyone is dependent at some point, and care work deserves public support.",
  },
  {
    text: "Black women’s experience of discrimination cannot be captured by adding race discrimination to sex discrimination.",
    cat: "intersectionality",
    why: "Kimberlé Crenshaw coined the term in 1989 for cases that fall between legal categories.",
  },
  {
    text: "A Dalit woman faces caste and gender hierarchy at once, in ways neither analysis alone explains.",
    cat: "intersectionality",
    why: "Indian feminists such as Sharmila Rege argued for a Dalit feminist standpoint along these lines.",
  },
];

export const lesson: LessonContent = {
  id: "p14.5.2",
  minutes: 80,
  links: {
    revisits: ["p14.3.2", "p14.2.4", "p14.3.3"],
    foreshadows: ["p14.5.3", "p14.5.4", "p14.6.3"],
  },

  puzzle: (
    <>
      <p>
        Classical liberal theory concerned the state and the public sphere, and left the family to private life. But much of
        the inequality between women and men is made at home: who cooks, who looks after children and parents, who gives up
        a career. Is that private, or political?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each claim by the strand of feminist thought it best represents.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which strand of feminist thought?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the personal is political">
        <p>
          Feminist political philosophy holds that relations between the sexes, including those in the family and in
          intimate life, are relations of power and so matters of justice. The public and private division of liberal theory
          has hidden this, by treating the household as beyond the reach of political principles.
        </p>
      </Definition>

      <Example title="Okin on the family">
        <p>
          Okin argued that the family is the first school of moral development and a major source of gender inequality:
          because women do most unpaid work, they are vulnerable in the labour market and in marriage. A just society, she
          held, needs just families, and Rawls&rsquo;s parties should not know their sex behind the veil.
        </p>
      </Example>

      <Remark title="difference, dominance and care">
        <p>
          Liberal feminists seek equal rights and opportunity. MacKinnon argued that equality understood as treating likes
          alike accepts a male standard, and that the real issue is domination. Care ethicists argue that justice-centred
          theories neglect dependency and the work of caring, and propose public recognition of care. Carole Pateman&rsquo;s
          The Sexual Contract argued that the social contract presupposes a prior contract subordinating women.
        </p>
      </Remark>

      <Remark title="intersectionality">
        <p>
          Kimberlé Crenshaw showed that anti-discrimination law, built around single categories, failed Black women. The idea
          has spread to analyses of caste, class and disability. Critics ask how to weigh multiple axes, and whether categories
          multiply without end; defenders reply that the point is attention to how structures combine in particular lives.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "slogan",
      rung: "check",
      prompt: <p>What does &ldquo;the personal is political&rdquo; mean?</p>,
      answer: {
        kind: "choice",
        options: [
          "Relations in private life, such as the family, involve power and so raise questions of justice.",
          "Politicians should share personal details.",
          "Everything should be decided by vote.",
          "Personal opinions are political parties.",
        ],
        correct: [0],
      },
    },
    {
      key: "okin",
      rung: "check",
      prompt: <p>What did Okin argue about the family?</p>,
      answer: {
        kind: "choice",
        options: [
          "Principles of justice should apply within it, since it is a source of gender inequality.",
          "It is beyond justice.",
          "It should be abolished.",
          "It is purely natural.",
        ],
        correct: [0],
      },
    },
    {
      key: "mack",
      rung: "apply",
      prompt: <p>Why did MacKinnon reject the sameness and difference approaches to sex equality?</p>,
      answer: {
        kind: "choice",
        options: [
          "Both take a male standard for granted and miss the underlying hierarchy of dominance.",
          "Because men and women are identical.",
          "Because the law should ignore sex.",
          "Because difference is always good.",
        ],
        correct: [0],
      },
    },
    {
      key: "cren",
      rung: "apply",
      prompt: <p>What problem did Crenshaw identify with anti-discrimination law?</p>,
      answer: {
        kind: "choice",
        options: [
          "Built around single categories, it failed people discriminated against as, for example, Black women.",
          "It was too expensive.",
          "It protected only men.",
          "It ignored race entirely.",
        ],
        correct: [0],
      },
    },
    {
      key: "pateman",
      rung: "apply",
      prompt: <p>What is Pateman&rsquo;s sexual contract?</p>,
      answer: {
        kind: "choice",
        options: [
          "A hidden agreement, presupposed by the social contract, that subordinates women to men.",
          "A marriage certificate.",
          "A contract for sex work.",
          "Rawls's original position.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Should principles of justice govern how housework and care are divided within families? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Okin's argument or the slogan that the personal is political.",
          "Considers an objection, such as the value of family privacy or freedom of choice.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a theory of justice built around independent individuals ever give care its due?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the care ethics criticism of justice-centred theories.",
          "Considers a reply, such as including care as a primary good or Kittay's proposals.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the feminist claim that the personal is political, Okin's argument about the family, the differences between liberal and radical feminism and care ethics, and the idea of intersectionality.",

  glimpse: (
    <p>
      The next lessons turn to critical race theory and to Ambedkar on caste and democracy. Human rights debates take up
      whether rights frameworks can address these structures.
    </p>
  ),
};
