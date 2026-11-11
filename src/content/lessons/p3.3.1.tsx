import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SampleViz } from "@/components/viz/SampleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p3.3.1",
  minutes: 60,
  links: {
    revisits: ["p2.1.2", "p3.1.2"],
    foreshadows: ["p7.5.3", "m9.7.1", "m9.7.3"],
  },

  puzzle: (
    <>
      <p>
        In 1936 the American magazine Literary Digest polled its readers and others about the coming presidential election.
        About 2.4 million people replied, and the poll predicted a clear win for Alf Landon. Franklin Roosevelt won in one of
        the largest landslides in American history. George Gallup, polling only a small fraction as many people, called the
        result correctly.
      </p>
      <p>How can a sample of millions be worse than a sample of thousands?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        A generalisation reasons from the part of a population we have looked at to the whole. Two things decide whether
        it works: whether we looked at enough of the population, and whether the part we looked at is like the rest. Size
        controls the random wobble; how the sample is chosen controls bias, and no amount of size can cure bias. Compare a
        random sample of the town with a sample taken at the station.
      </p>
      <SampleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="inductive arguments">
        <p>
          A deductive argument aims to be valid: if the premises are true, the conclusion must be. An{" "}
          <strong>inductive argument</strong> aims only to make its conclusion probable. It is <strong>strong</strong> if
          its premises, when true, make the conclusion likely, and weak otherwise. A strong inductive argument with true
          premises is sometimes called <strong>cogent</strong>.
        </p>
        <p>
          Unlike validity, strength comes in degrees, and it can be destroyed by new information. &ldquo;Every swan I have
          seen is white&rdquo; supports &ldquo;the next swan will be white&rdquo;, until someone shows you a photograph of
          black swans in Australia.
        </p>
      </Definition>

      <Definition title="statistical generalisation">
        <p>The basic form is</p>
        <ol>
          <li>X% of the sampled Fs are G.</li>
          <li>So about X% of all Fs are G.</li>
        </ol>
        <p>
          Its strength depends on the <strong>size</strong> of the sample and on how <strong>representative</strong> it
          is: whether every member of the population had a fair chance of being chosen.
        </p>
      </Definition>

      <Remark title="size and the margin of error">
        <p>
          For a random sample of size n, a useful rule of thumb is that the true proportion lies within about{" "}
          <span className="mono">1/√n</span> of the sample proportion, in about 95 out of 100 samples. A sample of 100
          gives about ±10%, a sample of 1000 about ±3%. Quadrupling the sample only halves the margin. Surprisingly, the
          size of the population hardly matters: a random sample of 1000 is about as good for a city as for a country.
          Probability explains why, through the law of large numbers.
        </p>
      </Remark>

      <Example title="what went wrong in 1936">
        <p>
          The Digest mailed its ballots to its own readers and to names taken largely from telephone directories and lists
          of car owners. In the depths of the Depression, people with telephones and cars were better off than average,
          and less likely to support Roosevelt. On top of this, only about a quarter of those sent a ballot returned it,
          and those who bother to reply may differ from those who do not. A huge sample drawn in a biased way gave a
          precise estimate of the wrong thing.
        </p>
      </Example>

      <Remark title="sources of bias">
        <ul>
          <li><strong>Selection bias</strong>: the method of choosing reaches some groups more easily than others.</li>
          <li><strong>Self-selection</strong>: people choose whether to take part, as in online polls and phone-in surveys.</li>
          <li><strong>Non-response</strong>: those who decline differ from those who answer.</li>
          <li><strong>Wording</strong>: a question that leads (&ldquo;Do you agree that the reckless plan should be stopped?&rdquo;) measures the wording, not the opinion.</li>
        </ul>
      </Remark>

      <Definition title="hasty generalisation">
        <p>
          A <strong>hasty generalisation</strong> draws a general conclusion from too few or too unrepresentative cases:
          &ldquo;My grandfather smoked every day and lived to 95, so smoking is not that harmful.&rdquo; A single vivid
          case, an anecdote, can feel more convincing than a careful study of thousands. That feeling is worth
          distrusting.
        </p>
      </Definition>

      <Remark title="the deeper question">
        <p>
          Even a perfect random sample only makes its conclusion probable, and only if the future and the unobserved
          resemble what we have seen. Why should they? David Hume argued that no argument can show that they will without
          assuming it. That is the problem of induction, and it waits for us in Early Modern Philosophy.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kind",
      rung: "check",
      prompt: <p>Which of these arguments is inductive rather than deductive?</p>,
      answer: {
        kind: "choice",
        options: [
          "All squares have four sides; this is a square; so it has four sides.",
          "Ninety of the hundred voters we chose at random support the plan; so most voters do.",
          "If it rained, the ground is wet; it rained; so the ground is wet.",
          "No reptile is warm-blooded; snakes are reptiles; so snakes are not warm-blooded.",
        ],
        correct: [1],
      },
    },
    {
      key: "margin",
      rung: "check",
      prompt: (
        <p>
          Using the rule of thumb, what is the rough margin of error for a random sample of 400? (Give a decimal, such as
          0.1 for 10%.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.05 },
    },
    {
      key: "size",
      rung: "apply",
      prompt: <p>About how large a random sample gives a margin of error of 2%, by the same rule?</p>,
      answer: { kind: "numeric", value: 2500, tolerance: 0.01 },
    },
    {
      key: "bias",
      rung: "apply",
      prompt: (
        <p>
          A news website asks its readers to vote online on whether the speed limit should be raised. Ten thousand vote,
          and 70% say yes. What is the main problem with concluding that 70% of the country wants a higher limit?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "The sample is too small.",
          "The voters chose themselves, and are readers of one site.",
          "The margin of error is about 30%.",
          "There is no problem.",
        ],
        correct: [1],
      },
    },
    {
      key: "hasty",
      rung: "apply",
      prompt: <p>Which of these is a hasty generalisation?</p>,
      answer: {
        kind: "choice",
        options: [
          "A trial of 5000 randomly assigned patients found the drug lowered blood pressure, so it probably works.",
          "Both taxi drivers I met in that city were rude, so the people there are rude.",
          "In a random sample of 1000 adults, 52% favoured the plan, so about half of adults do.",
          "Every chemistry experiment on water has found it boils at 100 °C at sea level, so it will tomorrow.",
        ],
        correct: [1],
      },
    },
    {
      key: "critique",
      rung: "prove",
      prompt: (
        <p>
          A gym surveys the people using its machines one Monday evening and finds that 85% exercise at least four times a
          week. It advertises: &ldquo;85% of people in this town exercise four times a week.&rdquo; Explain what is wrong,
          and describe a better way to find out.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies selection bias: people at a gym on a Monday evening are much more likely to exercise often than the town as a whole.",
          "Notes any further problem, such as one evening, or the unguarded leap from gym users to the whole town.",
          "Describes a better method, such as a random sample drawn from the whole town, with a reasonable size. Any sensible design is fine.",
        ],
      },
    },
    {
      key: "population",
      rung: "stretch",
      prompt: (
        <p>
          Explain, in your own words, why a random sample of 1000 people is roughly as informative about a country of
          a hundred million as about a city of a million. Use the visualisation, or an analogy with tasting soup, if it
          helps.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that the accuracy of a random sample depends mainly on how many are sampled, not on what fraction of the population that is.",
          "Gives an intuition, such as a well-stirred pot of soup, where one spoonful tells you about the taste whatever the size of the pot.",
          "Notes, perhaps, that this holds only if the sample is random (the soup is stirred). A clear informal explanation is enough.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what makes an inductive generalisation strong, why sample size and representativeness both matter, and how a sample of millions could get an election badly wrong.",

  glimpse: (
    <p>
      Probability proves the law of large numbers, which explains why random samples settle down near the truth, and makes
      the margin of error exact. Early Modern Philosophy meets Hume&rsquo;s problem of induction: what, if anything,
      justifies expecting the unobserved to resemble the observed?
    </p>
  ),
};
