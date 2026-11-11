import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PondViz } from "@/components/viz/PondViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p5.5.3",
  minutes: 85,
  links: {
    revisits: ["p5.2.1", "p5.4.3", "p5.4.2"],
    foreshadows: ["p25.3.1", "p25.3.2", "p25.2.3"],
  },

  puzzle: (
    <>
      <p>
        You pass a shallow pond and see a small child drowning. You could wade in and pull the child out, but your clothes
        and phone would be ruined. Surely you must save the child; walking on would be monstrous. In 1972, writing about
        the famine and refugee crisis in East Bengal, now Bangladesh, Peter Singer asked why that judgement does not carry over to the millions of
        children dying of preventable causes, whom we could help for less than the cost of a phone. If it does, most of us
        are failing a serious moral duty every day.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Start with the pond, then turn on, one by one, the differences between it and giving to relieve poverty. At which
        point, if any, does the obligation disappear?
      </p>
      <PondViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Singer&rsquo;s argument">
        <p>
          The argument of <cite>Famine, Affluence, and Morality</cite> has three steps. First, suffering and death from
          lack of food, shelter and medical care are bad. Second, if it is in our power to prevent something bad from
          happening without thereby sacrificing anything of comparable moral importance, we ought to do it. Third, by
          giving to effective aid we can prevent such suffering without sacrificing anything comparably important. So we
          ought to give, and not as charity, which is optional, but as duty. Singer adds a weaker version of the second
          premise, requiring only that we sacrifice nothing <em>morally significant</em>, which still requires a great
          deal.
        </p>
      </Definition>

      <Example title="the demandingness objection">
        <p>
          On the strong version, we should keep giving until giving more would make us as badly off as those we help.
          Critics say a theory that demands so much must be mistaken: it erases the line between duty and the
          supererogatory, and leaves no room for personal projects, relationships and a life of one&rsquo;s own. Singer
          replies that a moral theory is not refuted by being demanding, only by being wrong, and that our sense of what is
          reasonable was formed when we could not help distant people at all. Many readers settle on a middle position, a
          substantial but limited duty, such as the tenth of income that Sikh tradition asks for as{" "}
          <em>dasvandh</em>, or that some modern pledges propose.
        </p>
      </Example>

      <Definition title="justice, not only charity">
        <p>
          Other philosophers reach strong conclusions by different routes. Thomas Pogge argues that the affluent do not
          merely fail to help: through the global trade rules, borrowing arrangements and resource deals they support, they
          take part in an institutional order that harms the poor. Our duty is then the stricter negative duty not to harm,
          and to compensate. Onora O&rsquo;Neill, from a Kantian starting point, argues that we must not act on principles
          that the poor could not possibly share, and that institutions which make others too vulnerable to refuse are
          unjust. On these views, poverty is a question of justice, not only of kindness.
        </p>
      </Definition>

      <Remark title="effective altruism and its critics">
        <p>
          Singer&rsquo;s argument helped inspire <strong>effective altruism</strong>: the attempt to use evidence and
          reason to do the most good with one&rsquo;s giving, for instance by funding malaria nets or deworming rather than
          less effective causes. Critics ask whether focusing on measurable results neglects the political causes of
          poverty, which are harder to measure, and whether it treats the poor as recipients rather than as agents. Care
          ethicists add that relationships and solidarity, not only transfers, are part of what is owed. These are
          debates about how best to help, and most participants agree that the well off should do far more than they do.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "premise",
      rung: "check",
      prompt: <p>Which is the key moral premise of Singer&rsquo;s argument, in its strong form?</p>,
      answer: {
        kind: "choice",
        options: [
          "We should give a tenth of our income.",
          "If we can prevent something bad without sacrificing anything of comparable moral importance, we ought to do it.",
          "We should help only those near us.",
          "Charity is always optional.",
        ],
        correct: [1],
      },
    },
    {
      key: "charity",
      rung: "check",
      prompt: <p>According to Singer, is giving to famine relief charity or duty?</p>,
      answer: {
        kind: "choice",
        options: ["Charity: good but optional", "Duty: wrong not to do", "Neither", "It depends on one's religion"],
        correct: [1],
      },
    },
    {
      key: "murphy",
      rung: "apply",
      prompt: <p>What is the fair share view of our obligations?</p>,
      answer: {
        kind: "choice",
        options: [
          "We must give everything we can.",
          "We must do only what would be required of us if everyone did their share.",
          "We owe nothing to strangers.",
          "We should give only to the nearest people.",
        ],
        correct: [1],
      },
    },
    {
      key: "pogge",
      rung: "apply",
      prompt: <p>What kind of duty does Pogge think the affluent are failing?</p>,
      answer: {
        kind: "choice",
        options: [
          "A positive duty of kindness only.",
          "A negative duty not to harm, by taking part in an unjust global order.",
          "A duty to their own families.",
          "No duty at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "demanding",
      rung: "apply",
      prompt: <p>What does the demandingness objection claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the poor demand too much.",
          "That a theory requiring us to give nearly everything leaves no room for a life of one's own, and so must be mistaken.",
          "That aid never works.",
          "That only governments should give.",
        ],
        correct: [1],
      },
    },
    {
      key: "relevant",
      rung: "prove",
      prompt: (
        <p>
          Choose one difference between the drowning child and distant poverty, and argue whether it is morally relevant.
          Consider how Singer would reply.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies a difference, such as distance, the number of others who could help, or the ongoing nature of need.",
          "Argues whether it changes the obligation, with a reason.",
          "Considers Singer's reply. Any reasonable answer, whatever its conclusion, earns full credit.",
        ],
      },
    },
    {
      key: "how",
      rung: "stretch",
      prompt: (
        <p>
          Is the best response to global poverty individual giving, political change, or both? Draw on Singer, Pogge and
          at least one critic of effective altruism.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains Singer's case for individual giving and Pogge's institutional view.",
          "Considers a criticism, such as neglect of political causes or of the agency of the poor.",
          "Reaches a reasoned view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Singer's drowning child and his argument about famine, the strong and moderate versions, the demandingness objection, Pogge's and O'Neill's views of poverty as a question of justice, and the debate about effective altruism.",

  glimpse: (
    <p>
      This completes the introduction to ethics. The Applied Ethics course returns to poverty and effective altruism, and
      to our obligations to future generations and the climate.
    </p>
  ),
};
