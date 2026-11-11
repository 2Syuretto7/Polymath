import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { AxisTrickViz } from "@/components/viz/AxisTrickViz";
import { RiskViz } from "@/components/viz/RiskViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p3.5.4",
  minutes: 60,
  links: {
    revisits: ["p3.4.2", "p3.3.4", "p3.1.2"],
    foreshadows: ["p10.5.2", "m9.5.2"],
  },

  puzzle: (
    <>
      <p>
        A headline announces: &ldquo;Daily habit doubles your risk of rare cancer.&rdquo; Another, the same week: &ldquo;Study
        finds people who drink coffee live longer.&rdquo; A chart on the evening news shows one party&rsquo;s support
        towering over another&rsquo;s.
      </p>
      <p>
        Each may be accurate in every number it states, and still leave you believing something false. How?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        News has to be short and has to catch the eye, and both pressures push towards the most dramatic true way of
        telling a story. Two of the commonest tricks are visual and numerical. First, see what the starting point of an
        axis does to a chart.
      </p>
      <AxisTrickViz />
      <p>
        Second, a percentage rise in risk means little until you know the risk it is a percentage of. Set a rare risk and
        a common one, and compare.
      </p>
      <RiskViz />
    </>
  ),

  theory: (
    <>
      <Definition title="relative and absolute risk">
        <p>
          A <strong>relative</strong> change compares the new risk with the old as a ratio: &ldquo;risk doubled&rdquo;,
          &ldquo;up 50%&rdquo;. An <strong>absolute</strong> change is the difference: &ldquo;from 1 in 10 000 to 2 in
          10 000&rdquo;. Doubling a 1 in 10 000 risk adds one case per 10 000 people; doubling a 1 in 10 risk adds a
          thousand. Relative figures make better headlines; absolute figures are what you need to decide anything. Always
          ask for the base rate.
        </p>
      </Definition>

      <Remark title="charts">
        <ul>
          <li>A bar chart whose axis does not start at zero exaggerates differences.</li>
          <li>A line chart can be made to look flat or steep by stretching the axes.</li>
          <li>A chart may show raw totals where rates per person would tell a different story: a bigger city has more of almost everything.</li>
          <li>The time window can be chosen to start at a convenient low or end at a convenient high.</li>
        </ul>
      </Remark>

      <Example title="“people who drink coffee live longer”">
        <p>
          A study that follows coffee drinkers and non-drinkers is observational: nobody assigned the coffee. So the
          lessons on Mill&rsquo;s methods apply. Perhaps people too ill to tolerate coffee give it up, which would make
          non-drinkers less healthy for reasons that have nothing to do with coffee. Perhaps coffee drinkers differ in
          income or work. An association is worth knowing, but the headline&rsquo;s verb, &ldquo;live longer&rdquo;, is
          read as a cause.
        </p>
      </Example>

      <Remark title="a checklist">
        <ol>
          <li><strong>Who says so, and how do they know?</strong> A study, an expert in the field, an interested party, an anonymous post? (Remember assuring terms such as &ldquo;studies show&rdquo;.)</li>
          <li><strong>What exactly was found?</strong> In mice or in people? In ten people or ten thousand? Once, or replicated?</li>
          <li><strong>Relative or absolute?</strong> What is the base rate?</li>
          <li><strong>Correlation or cause?</strong> Was there a randomised comparison? What else could explain the link?</li>
          <li><strong>What is left out?</strong> Other studies, the size of the effect, the axis of the chart, the time window.</li>
          <li><strong>Does it fit what is already known?</strong> A single surprising study is more likely to be wrong than a large body of earlier work.</li>
        </ol>
      </Remark>

      <Remark title="what makes the news">
        <p>
          News reports what is unusual. A plane crash is news; ten thousand safe landings are not. So the news is a biased
          sample of events, and a steady diet of it can make rare dangers feel common. This is not a reason to distrust
          every report, only to remember that what is reported was selected, and to ask how often the thing really
          happens.
        </p>
      </Remark>

      <Remark title="the end of this course">
        <p>
          The tools of this course, from argument markers to base rates, are not for winning arguments. They are for
          deciding what to believe and what to do, in a world that is full of people trying to tell you. The best use of
          them is on the claims you most want to be true.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rise",
      rung: "check",
      prompt: (
        <p>
          A risk of 2 in 1000 rises by 50%. What is the new risk, in cases per 1000?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>&ldquo;The new drug cuts the risk of stroke by a third.&rdquo; What kind of figure is this?</p>,
      answer: { kind: "choice", options: ["absolute risk", "relative risk", "a base rate", "a margin of error"], correct: [1] },
    },
    {
      key: "nnt",
      rung: "apply",
      prompt: (
        <p>
          An exposure doubles a risk of 10 in 10 000. How many people must be exposed, on average, for one extra case?
        </p>
      ),
      answer: { kind: "numeric", value: 1000 },
    },
    {
      key: "axis",
      rung: "apply",
      prompt: (
        <p>
          A bar chart shows sales of 98 and 100 units, with the vertical axis starting at 96. How many times taller does
          the second bar look than the first?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "coffee",
      rung: "apply",
      prompt: (
        <p>
          A study finds that people who own dogs have lower blood pressure. Which is the best first question to ask?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Are dogs good pets?",
          "Was this a randomised comparison, or could something else, such as being active enough to walk a dog, explain the link?",
          "How many dogs are there in the country?",
          "Did the newspaper like the study?",
        ],
        correct: [1],
      },
    },
    {
      key: "critique",
      rung: "prove",
      prompt: (
        <p>
          Apply the checklist to this report: &ldquo;Scientists say eating chocolate makes you smarter: countries that eat
          more chocolate win more Nobel prizes per person.&rdquo; Identify at least three problems.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that the data are about countries, not individuals, so they say little about any person who eats chocolate.",
          "Notes that the link is a correlation and suggests a common cause, such as national wealth, which raises both chocolate consumption and research funding.",
          "Raises at least one further point from the checklist, such as the size of the effect, who the 'scientists' are, or whether the finding has been replicated.",
        ],
      },
    },
    {
      key: "fear",
      rung: "stretch",
      prompt: (
        <p>
          Explain how a news diet could lead someone to overestimate the risk of a rare event, such as a shark attack, and
          underestimate a common one. Use the ideas of base rates and biased samples. What habit could correct this?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that news selects unusual, dramatic events, so its reports are a biased sample of what happens.",
          "Connects this to base rates: vivid rare events are remembered and judged common, while common risks (such as road accidents) are rarely reported.",
          "Suggests a corrective habit, such as looking up the actual frequency or base rate. Any sensible suggestion is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between relative and absolute risk, how a chart's axis can mislead, and the questions to ask before believing a news report about a study.",

  glimpse: (
    <p>
      Epistemology asks when we may believe what others tell us, including journalists and experts, and what we owe to
      sources we cannot check. Probability makes correlation precise, and shows how to measure how strongly two
      quantities move together.
    </p>
  ),
};
