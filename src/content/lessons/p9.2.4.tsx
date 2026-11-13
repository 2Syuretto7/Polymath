import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SurplusViz } from "@/components/viz/SurplusViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p9.2.4",
  minutes: 90,
  links: {
    revisits: ["p9.2.3", "p9.2.2", "p9.1.5"],
    foreshadows: ["p14.5.1", "p14.2.1", "p9.3.1"],
  },

  puzzle: (
    <>
      <p>
        In a market, goods exchange for their value, and nobody is cheated. The worker is paid the going wage, the capitalist
        sells at the going price. Yet the capitalist ends up with more money than they started with, again and again. Where
        does the extra come from, if every exchange is fair? This is the riddle that Marx set out to solve in the first
        volume of <em>Capital</em>, published in 1867.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Adjust the length of the working day, and the hours it takes to produce the value of the worker&rsquo;s wage. See
        how the day divides.
      </p>
      <SurplusViz />
    </>
  ),

  theory: (
    <>
      <Definition title="commodities and value">
        <p>
          A <strong>commodity</strong> is a thing produced for exchange. It has a use-value, its usefulness, and an exchange
          value. Following Smith and Ricardo, Marx holds that what makes commodities exchangeable in definite proportions is
          that they are products of human labour, and their <strong>value</strong> is measured by the socially necessary
          labour time needed to produce them.
        </p>
      </Definition>

      <Definition title="labour-power and surplus value">
        <p>
          The worker sells not labour but <strong>labour-power</strong>, the capacity to work for a period. Its value, like
          any commodity&rsquo;s, is the labour needed to produce it: the value of the goods that keep the worker alive and
          able to work. But labour-power, used for a day, can create more value than it costs. The difference is{" "}
          <strong>surplus value</strong>, the source of profit, interest and rent. Every exchange is equal, and yet the
          worker gives unpaid labour: this is <strong>exploitation</strong> in Marx&rsquo;s technical sense.
        </p>
      </Definition>

      <Example title="commodity fetishism">
        <p>
          In a market society, relations between people appear as relations between things: prices seem to belong to
          commodities by nature, as weight belongs to bodies. Marx calls this the <strong>fetishism of commodities</strong>,
          after the religious fetish which people make and then worship. It is why exploitation is invisible: no one sees
          the unpaid hours, only fair prices.
        </p>
      </Example>

      <Remark title="the debate">
        <p>
          Economists after the 1870s replaced the labour theory of value with marginal utility, and argued that profit
          rewards waiting, risk or organisation. Analytical Marxists such as John Roemer redefined exploitation without the
          labour theory, in terms of unequal ownership of productive assets. Even critics often grant that Marx&rsquo;s
          account of capitalism as a dynamic, crisis-prone, globalising system was strikingly prescient.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sells",
      rung: "check",
      prompt: <p>What does the worker sell to the capitalist, according to Marx?</p>,
      answer: { kind: "choice", options: ["Labour", "Labour-power", "Commodities", "Capital"], correct: [1] },
    },
    {
      key: "value",
      rung: "check",
      prompt: <p>What measures the value of a commodity, in Marx&rsquo;s theory?</p>,
      answer: {
        kind: "choice",
        options: ["Its usefulness", "Supply and demand alone", "The socially necessary labour time to produce it", "The price set by the state"],
        correct: [2],
      },
    },
    {
      key: "rate",
      rung: "apply",
      prompt: <p>In a 10-hour day, if 4 hours produce the value of the wage, what is the rate of surplus value as a percentage?</p>,
      answer: { kind: "numeric", value: 150 },
    },
    {
      key: "relative",
      rung: "apply",
      prompt: <p>If productivity rises so that the wage is produced in 3 hours instead of 4, with the day still 10 hours, how many hours of surplus labour are there?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "fetish",
      rung: "apply",
      prompt: <p>What does Marx mean by the fetishism of commodities?</p>,
      answer: {
        kind: "choice",
        options: [
          "A love of shopping.",
          "That social relations between people appear as relations between things, such as prices.",
          "That commodities are sacred.",
          "That money is evil.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is profit a fair reward or a form of exploitation? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Marx's view that profit comes from unpaid surplus labour.",
          "Considers an alternative view, such as profit as reward for risk, waiting or organisation.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "roemer",
      rung: "stretch",
      prompt: <p>Can the charge of exploitation survive without the labour theory of value?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the labour theory of value is widely rejected by economists.",
          "Considers a reformulation, such as Roemer's account in terms of unequal ownership of productive assets.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Marx's account of commodities and value, the difference between labour and labour-power, how surplus value arises even when all exchanges are equal, what commodity fetishism is, and the main objections.",

  glimpse: (
    <p>
      The next chapter turns to Schopenhauer, whose pessimism offers a very different response to Kant and Hegel. Political
      philosophy returns to Marx&rsquo;s critique, and Rawls asks what a just distribution of the products of social
      cooperation would be.
    </p>
  ),
};
