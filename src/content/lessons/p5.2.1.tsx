import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { HappinessSumViz } from "@/components/viz/HappinessSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p5.2.1",
  minutes: 85,
  links: {
    revisits: ["p5.1.4", "p1.6.2", "p4.7.1"],
    foreshadows: ["p5.2.2", "p13.1.1", "p13.2.1"],
  },

  puzzle: (
    <>
      <p>
        In the late eighteenth century, English law hanged people for over two hundred offences, including petty theft.
        Jeremy Bentham asked a simple question of each law: does it increase or decrease human happiness? The question
        turned out to be radical. Applied honestly, it condemned cruel punishments, the neglect of the poor, and later, in
        the hands of his followers, the subjection of women and the suffering of animals. Can one principle really be the
        whole of morality?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A town council must choose one project. Each person gains or loses some wellbeing. Change whose wellbeing counts,
        and see which project wins.
      </p>
      <HappinessSumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the principle of utility">
        <p>
          Bentham opens his <em>Introduction to the Principles of Morals and Legislation</em> (1789) by saying that nature
          has placed humankind under two sovereign masters, pain and pleasure: they alone tell us what we ought to do and
          determine what we shall do. The <strong>principle of utility</strong> approves or disapproves of every action by
          its tendency to increase or decrease the happiness of everyone affected. Three ideas are combined: only
          consequences matter; the consequences that matter are happiness and unhappiness; and everyone&rsquo;s happiness
          counts equally.
        </p>
      </Definition>

      <Example title="the felicific calculus">
        <p>
          Bentham proposed to measure a pleasure or pain by its intensity, duration, certainty, nearness in time,
          fecundity (its tendency to produce more of the same kind), purity (its tendency not to produce the opposite kind),
          and extent, the number of people it reaches. Add the pleasures, subtract the pains, and compare the totals for
          each possible action. Nobody thinks this can be done precisely, but rough comparisons of this kind are made every
          day, by governments and by individuals.
        </p>
      </Example>

      <Definition title="Mill: higher and lower pleasures">
        <p>
          John Stuart Mill, in <em>Utilitarianism</em> (1861), defended the greatest happiness principle against the charge
          that it was a philosophy fit only for pigs. Pleasures differ in quality as well as quantity. One pleasure is
          higher than another if nearly everyone who has experienced both prefers it, even at the cost of some discomfort.
          Such competent judges prefer the pleasures of the intellect, the feelings and the imagination. It is better, Mill
          wrote, to be a dissatisfied human than a satisfied pig, and a dissatisfied Socrates than a satisfied fool; if the
          pig or the fool thinks otherwise, it is because they know only their own side.
        </p>
      </Definition>

      <Example title="Mill&rsquo;s proof">
        <p>
          Mill argued that the only evidence that something is visible is that people see it, and likewise the only
          evidence that something is desirable is that people desire it. Each person desires their own happiness, so each
          person&rsquo;s happiness is a good to that person, and the general happiness is a good to everyone together. G. E.
          Moore objected that &ldquo;visible&rdquo; means able to be seen, while &ldquo;desirable&rdquo; means worthy of
          being desired, not able to be desired. Others question the step from each person&rsquo;s happiness to the sum.
        </p>
      </Example>

      <Remark title="a reforming philosophy">
        <p>
          Impartiality had radical consequences. Bentham argued that the question about animals is not whether they can
          reason or talk, but whether they can suffer. Mill argued in <em>The Subjection of Women</em> for the equality of
          the sexes, and in Parliament for women&rsquo;s votes. Modern utilitarians, such as Peter Singer, argue from the
          same starting point that the well-off owe much more to the world&rsquo;s poor than they usually give.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "principle",
      rung: "check",
      prompt: <p>What does the principle of utility say?</p>,
      answer: {
        kind: "choice",
        options: [
          "Act so as to maximise your own happiness.",
          "Judge every action by its tendency to increase or decrease the happiness of everyone affected.",
          "Follow the rules of your society.",
          "Never use a person merely as a means.",
        ],
        correct: [1],
      },
    },
    {
      key: "dims",
      rung: "check",
      prompt: <p>Which of these is not one of Bentham&rsquo;s dimensions for measuring a pleasure?</p>,
      answer: { kind: "choice", options: ["intensity", "duration", "extent", "nobility"], correct: [3] },
    },
    {
      key: "council",
      rung: "apply",
      prompt: <p>In the visualisation, with everyone counted equally, what is the total for the free clinic?</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "judges",
      rung: "apply",
      prompt: <p>For Mill, what makes one pleasure higher in quality than another?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is more intense.",
          "It lasts longer.",
          "Nearly everyone who has experienced both prefers it, even at some cost.",
          "It is approved by the law.",
        ],
        correct: [2],
      },
    },
    {
      key: "animals",
      rung: "apply",
      prompt: <p>According to Bentham, what is the morally relevant question about animals?</p>,
      answer: {
        kind: "choice",
        options: ["Can they reason?", "Can they talk?", "Can they suffer?", "Are they useful to us?"],
        correct: [2],
      },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct Mill&rsquo;s proof of the principle of utility as premises and a conclusion. Then explain Moore&rsquo;s
          objection and one other weakness.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the analogy with visibility, the premise that each person desires their own happiness, and the conclusion that the general happiness is desirable.",
          "Explains Moore's point that 'desirable' means worth desiring, not able to be desired.",
          "Identifies another weakness, such as the step from each person's good to the good of the aggregate, or the claim that happiness is the only thing desired. A reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "quality",
      rung: "stretch",
      prompt: (
        <p>
          Critics say that if some pleasures are better than others in quality and not just in quantity, then something
          other than pleasure must make them better, so Mill is no longer a pure hedonist. Is this right? How might Mill
          reply?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the objection: quality seems to require a standard of value beyond the amount of pleasure.",
          "Offers a reply, such as that quality is a feature of the pleasure itself, as experienced, or that the preference of competent judges is the test.",
          "Reaches a reasoned verdict. Any thoughtful position earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the principle of utility and its three ideas, Bentham's felicific calculus, Mill's distinction between higher and lower pleasures, and Mill's proof with Moore's objection.",

  glimpse: (
    <p>
      The next lesson collects the strongest objections to utilitarianism, from justice, rights and promises. Moral
      Philosophy follows consequentialism in its modern refined forms, and the debate about hedonism.
    </p>
  ),
};
