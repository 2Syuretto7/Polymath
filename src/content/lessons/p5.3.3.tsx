import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["claim", "liberty", "power", "immunity"];
const ITEMS: SortItem[] = [
  {
    text: "You lent me ₹500, so you have a right that I pay you back.",
    cat: "claim",
    why: "A claim right: it corresponds to a duty on someone else, here my duty to repay.",
  },
  {
    text: "I have a right to sit on a public bench.",
    cat: "liberty",
    why: "A liberty: I have no duty not to sit there. Others have no duty to keep the bench free for me, though they may not drag me off it.",
  },
  {
    text: "You have a right to sell your bicycle.",
    cat: "power",
    why: "A power: you can change other people's rights and duties, transferring ownership to the buyer.",
  },
  {
    text: "Under the constitution, Parliament cannot take away your freedom of speech by an ordinary law.",
    cat: "immunity",
    why: "An immunity: someone else lacks the power to change your position.",
  },
  {
    text: "A tenant's right that the landlord not enter the flat without notice.",
    cat: "claim",
    why: "A claim against the landlord, who has a corresponding duty to stay out.",
  },
  {
    text: "Your right to make a will leaving your property to whom you choose.",
    cat: "power",
    why: "A power to create new rights and duties for others after your death.",
  },
  {
    text: "Your right to wear what you like.",
    cat: "liberty",
    why: "Mainly a liberty: you have no duty to dress otherwise. It is usually protected by claims too, such as the claim that others not tear your clothes off.",
  },
  {
    text: "A diplomat cannot be prosecuted by the courts of the country where they serve.",
    cat: "immunity",
    why: "Diplomatic immunity: the host state lacks the power to subject the diplomat to its criminal courts.",
  },
];

export const lesson: LessonContent = {
  id: "p5.3.3",
  minutes: 80,
  links: {
    revisits: ["p5.3.2", "p5.2.2", "p5.2.1"],
    foreshadows: ["p5.3.4", "p14.2.3", "p5.5.1"],
  },

  puzzle: (
    <>
      <p>
        The Constitution of India guarantees a right to life and personal liberty, and the courts have read into it rights
        to privacy, to clean air and to education. Bentham called the idea of natural rights nonsense, and natural and
        inalienable rights nonsense on stilts. What is a right, that people can disagree so deeply about whether it exists?
        And when rights conflict, or stand in the way of doing a great deal of good, which should give way?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The word &ldquo;right&rdquo; covers several different relations. Sort each example into one of Hohfeld&rsquo;s four
        kinds.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Sort each right into one of Hohfeld's four kinds." />
    </>
  ),

  theory: (
    <>
      <Definition title="Hohfeld&rsquo;s analysis">
        <p>
          The legal theorist Wesley Hohfeld, in 1913, distinguished four kinds of right. A <strong>claim</strong> that X
          do something corresponds to X&rsquo;s duty to do it. A <strong>liberty</strong> to do something is the absence of a
          duty not to. A <strong>power</strong> is the ability to change rights and duties, as in making a promise or a
          will. An <strong>immunity</strong> is protection from someone else&rsquo;s power. Most rights in ordinary speech
          are bundles of these.
        </p>
      </Definition>

      <Example title="negative and positive rights">
        <p>
          A <strong>negative right</strong> is a claim that others not interfere: the right not to be killed, or not to be
          imprisoned without trial. A <strong>positive right</strong> is a claim that others provide something: the right
          to education or to medical care. Libertarians often accept only negative rights; others argue the distinction is
          less sharp than it looks, since protecting negative rights also needs police and courts, paid for by taxes.
        </p>
      </Example>

      <Definition title="what rights do">
        <p>
          Ronald Dworkin described rights as trumps: they override arguments that some policy would increase overall
          welfare. Robert Nozick described them as side constraints: limits on what we may do in pursuit of any goal, even
          the goal of reducing rights violations. You may not kill one innocent person to prevent two other killings. This is
          why rights fit naturally with Kant&rsquo;s idea that persons have dignity, not price.
        </p>
      </Definition>

      <Remark title="where rights come from">
        <p>
          On the <strong>will theory</strong> (H. L. A. Hart), to have a right is to have control over another&rsquo;s duty:
          you can waive it or enforce it. On the <strong>interest theory</strong> (Joseph Raz), you have a right when some
          interest of yours is enough to place others under a duty. The interest theory more easily gives rights to infants
          and perhaps animals, who cannot exercise control. Natural rights theorists, such as Locke, hold that rights exist
          before any law; Mill argued that rights are justified by utility, as protections so important to wellbeing that
          they should hold firm in ordinary cases. Most philosophers now treat rights as very weighty but not absolute,
          giving way in catastrophes, though how large the catastrophe must be is disputed.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "neg",
      rung: "check",
      prompt: <p>The right not to be tortured is</p>,
      answer: { kind: "choice", options: ["a negative right", "a positive right"], correct: [0] },
    },
    {
      key: "corr",
      rung: "check",
      prompt: <p>In Hohfeld&rsquo;s scheme, what corresponds to a claim right held by one person?</p>,
      answer: { kind: "choice", options: ["a duty on another person", "a liberty of another person", "a power of the state", "nothing"], correct: [0] },
    },
    {
      key: "edu",
      rung: "apply",
      prompt: <p>The right of every child to free primary education is</p>,
      answer: { kind: "choice", options: ["a negative right", "a positive right", "an immunity", "a power"], correct: [1] },
    },
    {
      key: "nozick",
      rung: "apply",
      prompt: <p>What does it mean to treat rights as side constraints, in Nozick&rsquo;s sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "Rights should be weighed against welfare like any other good.",
          "You may not violate a person's rights even to reduce the total number of rights violations.",
          "Rights only bind governments.",
          "Rights are side effects of laws.",
        ],
        correct: [1],
      },
    },
    {
      key: "theory",
      rung: "apply",
      prompt: <p>Which theory of rights more easily grants rights to newborn babies?</p>,
      answer: { kind: "choice", options: ["the will theory", "the interest theory"], correct: [1] },
    },
    {
      key: "absolute",
      rung: "prove",
      prompt: (
        <p>
          Are rights absolute? Give an argument that at least one right can be overridden, and an argument that some right
          cannot. Then say which you find stronger.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives an argument for overriding, for example a catastrophe that could be prevented only by a minor rights violation.",
          "Gives an argument for an absolute right, for example the right not to be tortured, or the idea of rights as side constraints.",
          "Weighs the two and reaches a reasoned conclusion. Any thoughtful position earns full credit.",
        ],
      },
    },
    {
      key: "mill",
      rung: "stretch",
      prompt: (
        <p>
          Mill held that rights are justified by their contribution to wellbeing. Can a utilitarian account of rights
          explain why we should respect a right in a case where violating it would do more good? Compare with the rule
          utilitarianism lesson.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains Mill's account of rights as securing especially important interests.",
          "Considers whether this can support respecting rights in the individual case, for example via rules or the value of security.",
          "Reaches a reasoned verdict, possibly noting parallels with the rule worship objection. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Hohfeld's four kinds of right, the difference between negative and positive rights, the ideas of rights as trumps and side constraints, and the will and interest theories.",

  glimpse: (
    <p>
      The next lesson asks whether morality itself is a kind of agreement. Political Philosophy examines Nozick&rsquo;s
      theory of property rights, and the last chapter of this course applies these ideas to abortion.
    </p>
  ),
};
