import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FrequencyGridViz } from "@/components/viz/FrequencyGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p3.4.2",
  minutes: 60,
  links: {
    revisits: ["p3.3.1", "p3.3.3"],
    parallels: ["m9.1.4"],
    foreshadows: ["p3.5.2", "p16.4.3"],
  },

  puzzle: (
    <>
      <p>
        One in a hundred people of a certain age has a disease. A screening test finds the disease in 90% of people who
        have it, and wrongly flags 9% of people who do not. You test positive.
      </p>
      <p>
        What is the chance that you have the disease? Many people, including many doctors asked questions of this kind,
        answer about 90%. The true answer is under 10%.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Picture a thousand people. Ten have the disease, and nine of those test positive. Of the 990 without it, 9% is about
        89 false alarms. So there are about 98 positives, and only 9 of them are ill. The test is good; the disease is
        rare; the rare cases are swamped by the false alarms from the common ones. Counting people instead of juggling
        percentages makes this easy to see.
      </p>
      <FrequencyGridViz />
    </>
  ),

  theory: (
    <>
      <Definition title="base rate">
        <p>
          The <strong>base rate</strong> of a feature is how common it is in the population, before any particular
          evidence is considered. The <strong>base-rate fallacy</strong> is judging how likely something is from specific
          evidence alone, ignoring how common or rare it was to begin with.
        </p>
      </Definition>

      <Remark title="two conditional probabilities">
        <p>
          The heart of the mistake is confusing <span className="mono">P(positive | disease)</span>, which is 90%, with{" "}
          <span className="mono">P(disease | positive)</span>, which is what you want to know. They can be wildly
          different. Every pope is a man, but very few men are popes. The second number depends on the base rate; the first
          does not.
        </p>
      </Remark>

      <Example title="natural frequencies">
        <p>
          The psychologist Gerd Gigerenzer showed that people reason far better when the same information is given as
          counts of people (&ldquo;10 out of 1000 have the disease; 9 of those 10 test positive; 89 of the 990 others test
          positive&rdquo;) than as percentages. A good habit: when a problem gives you conditional probabilities, turn them
          into a population of a thousand or so and count.
        </p>
      </Example>

      <Definition title="the prosecutor's fallacy">
        <p>
          A DNA profile found at a crime scene matches a suspect, and only one person in a million has that profile. The
          prosecutor says there is only a one in a million chance that the suspect is innocent. That confuses{" "}
          <span className="mono">P(match | innocent)</span> with <span className="mono">P(innocent | match)</span>. In a
          city of ten million, about ten people match. If nothing else links the suspect to the crime, the match alone
          makes their guilt something like one chance in ten, not a near certainty. The other evidence matters a great
          deal.
        </p>
      </Definition>

      <Remark title="where base rates hide">
        <p>
          The same structure appears in security screening, spam filters, fraud alerts and job interviews: whenever a
          fairly accurate test looks for something rare, most alarms are false. It also appears in everyday judgement.
          A description that sounds like a librarian more than a farmer may still be more likely to fit a farmer, if
          farmers far outnumber librarians.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: (
        <p>
          In the puzzle, which number is the base rate?
        </p>
      ),
      answer: { kind: "choice", options: ["1 in 100", "90%", "9%", "under 10%"], correct: [0] },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>A test &ldquo;detects 95% of cases&rdquo;. Which probability is this?</p>,
      answer: {
        kind: "choice",
        options: ["P(positive | has the condition)", "P(has the condition | positive)", "P(has the condition)", "P(positive)"],
        correct: [0],
      },
    },
    {
      key: "count",
      rung: "apply",
      prompt: (
        <p>
          A condition affects 2% of people. A test finds 95% of cases and gives false alarms for 5% of people without it.
          Using a population of 1000, what is the chance that someone who tests positive has the condition? (Give a
          decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 19 / 68, tolerance: 0.02 },
    },
    {
      key: "taxi",
      rung: "apply",
      prompt: (
        <p>
          In a city, 85% of taxis are green and 15% are blue. A witness says the taxi in an accident was blue. Tests show
          the witness identifies colours correctly 80% of the time, in conditions like those of the accident. What is the
          probability that the taxi was blue? (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.12 / 0.29, tolerance: 0.02 },
    },
    {
      key: "dna",
      rung: "apply",
      prompt: (
        <p>
          A blood type found at a scene is shared by 1 person in 50 000. In a region of 2 million people, about how many
          people have it?
        </p>
      ),
      answer: { kind: "numeric", value: 40 },
    },
    {
      key: "doctor",
      rung: "prove",
      prompt: (
        <p>
          A patient tests positive on the screening test in the puzzle and is told, &ldquo;The test is 90% accurate, so
          you almost certainly have it.&rdquo; Write a short, kind explanation for the patient of why that is wrong, using
          natural frequencies.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses a concrete population, such as 1000 people, with about 10 who have the disease.",
          "Counts about 9 true positives and about 89 false positives, so about 98 positives in all.",
          "Concludes that only about 9 in 98, under 10%, of positives have the disease, and suggests a further test. A kind tone and approximate numbers are fine.",
        ],
      },
    },
    {
      key: "prosecutor",
      rung: "stretch",
      prompt: (
        <p>
          Explain the prosecutor&rsquo;s fallacy in your own words. Then explain how a DNA match can still be very strong
          evidence when combined with other evidence, such as the suspect having been seen near the scene.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes the probability of a match if innocent from the probability of innocence given a match.",
          "Explains that in a large population several people may match, so the match alone may not make guilt very likely.",
          "Explains that other evidence narrows the pool of plausible suspects (raises the prior), after which the match can make guilt very likely. Any clear explanation is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why a positive result on a good test for a rare condition may well be a false alarm, using a population of a thousand people, and what the prosecutor's fallacy is.",

  glimpse: (
    <p>
      The next lesson turns base rates into a general method, Bayes&rsquo; theorem. Later in this course, legal reasoning
      returns to the use and misuse of statistics in court. Philosophy of Science builds a whole theory of how evidence
      confirms hypotheses on the same foundation.
    </p>
  ),
};
