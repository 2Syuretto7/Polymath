import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PopulationViz } from "@/components/viz/PopulationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p25.3.2",
  minutes: 90,
  links: {
    revisits: ["p25.3.1", "p13.1.1", "p5.2.1"],
    foreshadows: ["p30.2.2", "p30.2.3", "p25.4.2"],
  },

  puzzle: (
    <>
      <p>
        A country can deplete its resources and live well now, leaving a poorer world in two centuries. But the policy also
        changes who marries whom and when, so the people living then will be different people. They would not have existed
        under the other policy. Are they wronged by a choice without which they would never have been born?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Population A has ten people at a high level of welfare. Change the size and welfare of population B, and see which
        world each view prefers.
      </p>
      <PopulationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the non-identity problem">
        <p>
          Derek Parfit, in <em>Reasons and Persons</em> (1984), noticed that many choices affect who will exist. A
          fourteen-year-old who chooses to have a child now, rather than wait, has a child whose life may go less well than
          that of a later child. But the later child would be a different person. If the actual child&rsquo;s life is worth
          living, the choice made no one worse off. Yet it still seems wrong. So not every wrong is a wrong to someone.
        </p>
      </Definition>

      <Definition title="person-affecting and impersonal views">
        <p>
          A <strong>person-affecting</strong> view says an outcome is worse only if it is worse for someone. Jan Narveson put
          it as: &lsquo;we are in favour of making people happy, but neutral about making happy people.&rsquo; An{" "}
          <strong>impersonal</strong> view compares outcomes as wholes, whoever is in them. It handles the non-identity
          problem, but must say how to compare populations of different sizes.
        </p>
      </Definition>

      <Example title="the Repugnant Conclusion">
        <p>
          The <strong>total view</strong> ranks worlds by the sum of welfare. Then for any world of very happy people there is
          a better one, with a vast number of people whose lives are barely worth living. Parfit called this the Repugnant
          Conclusion. The <strong>average view</strong> avoids it, but implies that adding a happy person can make things
          worse just because they are less happy than average. A <strong>critical-level</strong> view counts a life only by
          how far it rises above some positive level, but then counts some lives worth living as making things worse.
        </p>
      </Example>

      <Remark title="impossibility and longtermism">
        <p>
          Gustaf Arrhenius proved theorems showing that no ranking of populations satisfies a short list of plausible
          conditions together, so some intuition must go. Meanwhile, longtermists such as William MacAskill and Toby Ord
          argue that because the future could contain vast numbers of people, reducing the risk of human extinction is among
          the most important things we can do. How strong that argument is depends heavily on which population view is true.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "nip",
      rung: "check",
      prompt: <p>What is the non-identity problem?</p>,
      answer: { kind: "choice", options: ["Choices that seem wrong may make no one worse off, because they change who exists", "We cannot know who future people will be", "Personal identity over time is unclear", "Twins are not identical"], correct: [0] },
    },
    {
      key: "rc",
      rung: "check",
      prompt: <p>Which view leads directly to the Repugnant Conclusion?</p>,
      answer: { kind: "choice", options: ["The total view", "The average view", "Narveson’s person-affecting view", "Egoism"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set B to 200 people at welfare 10. What is B&rsquo;s total welfare?</p>,
      answer: { kind: "numeric", value: 2000 },
    },
    {
      key: "avg",
      rung: "apply",
      prompt: <p>Adding one person at welfare 50 to A, where everyone has welfare 100, does what on the average view?</p>,
      answer: { kind: "choice", options: ["Makes the outcome worse, though the new life is good", "Makes it better", "Leaves it unchanged", "Is undefined"], correct: [0] },
    },
    {
      key: "narv",
      rung: "apply",
      prompt: <p>Narveson&rsquo;s slogan expresses which kind of view?</p>,
      answer: { kind: "choice", options: ["A person-affecting view", "A total view", "An average view", "A critical-level view"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Do we wrong future people by depleting resources, if they would not exist otherwise? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the non-identity problem.",
          "Considers a response, such as impersonal value, rights violations or a threshold of a decent life.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the Repugnant Conclusion really repugnant, or should we accept it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the Repugnant Conclusion and the total view.",
          "Considers what accepting it or rejecting it costs, such as the problems for the average view.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Machines now decide who gets a loan, which post we see, and sometimes where a car steers. Can they be fair, who is
        responsible when they err, and could a machine itself ever matter morally?
      </p>
      <p>Next, the ethics of artificial intelligence.</p>
    </>
  ),
};
