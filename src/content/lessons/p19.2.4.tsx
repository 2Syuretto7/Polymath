import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EcstasesViz } from "@/components/viz/EcstasesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p19.2.4",
  minutes: 80,
  links: {
    revisits: ["p19.2.3", "p19.2.1", "p8.1.3"],
    foreshadows: ["p19.2.5", "p19.5.2", "p34.1.1"],
  },

  puzzle: (
    <>
      <p>
        A clock says time is a line of nows, each replacing the last. But the hour before an exam, the hour after bad news
        and an hour with a friend are not lived as interchangeable units. Your past weighs on you, your future draws you
        on. Is the clock&rsquo;s time the real one and lived time a feeling about it, or is it the other way round?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Click each dimension of time, and compare its everyday and owned modes.</p>
      <EcstasesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="care">
        <p>
          The first half of <em>Being and Time</em> gathers Dasein&rsquo;s being into a single structure,{" "}
          <strong>care</strong> (Sorge): being ahead of itself (projecting into possibilities, existence), already in a world
          (thrown into a situation it did not choose, facticity), alongside the things it deals with (absorbed in them,
          falling). Care is not worry; it is the formal shape of a life that matters to itself.
        </p>
      </Definition>

      <Definition title="ecstatic temporality">
        <p>
          The second half argues that the meaning of care is <strong>temporality</strong>. Its three moments correspond to the
          future, having-been and the present, which Heidegger calls <strong>ecstases</strong>, from the Greek for standing
          outside: each is a way Dasein stands out beyond any now. They form one unity, with the future first: Dasein comes
          towards itself from its possibilities, and so comes back to what it has been, and so makes present the situation it
          acts in.
        </p>
      </Definition>

      <Example title="owned and everyday time">
        <p>
          Everyday Dasein awaits what will come, forgets what it has been, and is taken up by whatever is present. Owned or
          authentic temporality anticipates death, retrieves its heritage as possibilities in{" "}
          <strong>repetition</strong>, and acts in the <strong>moment of vision</strong> (Augenblick). The ordinary
          conception of time as an endless sequence of nows is derived from these, by way of the public, datable time used in
          dealing with things: time for lunch, time to sow.
        </p>
      </Example>

      <Remark title="an unfinished book">
        <p>
          <em>Being and Time</em> was meant to go on to show that time is the horizon for understanding Being as such. That
          part never appeared. Heidegger&rsquo;s later thought, after what he called the turn (Kehre), approached Being through
          history, language and art instead. Readers continue to debate whether the turn abandoned the project or completed
          it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "care",
      rung: "check",
      prompt: <p>Which triple gives the three moments of care?</p>,
      answer: {
        kind: "choice",
        options: [
          "Ahead of itself, already in a world, alongside things",
          "Thinking, feeling, willing",
          "Past, present, eternity",
          "Body, mind, spirit",
        ],
        correct: [0],
      },
    },
    {
      key: "prior",
      rung: "check",
      prompt: <p>Which ecstasis has priority, for Heidegger?</p>,
      answer: { kind: "choice", options: ["The future", "The past", "The present", "None of them"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the authentic mode of having-been?</p>,
      answer: { kind: "choice", options: ["Repetition", "Forgetting", "Awaiting", "Making present"], correct: [0] },
    },
    {
      key: "nows",
      rung: "apply",
      prompt: <p>What does Heidegger say about time as a sequence of nows?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is derived from Dasein’s temporality, by way of the public time of everyday concern.",
          "It is the only real time.",
          "It is an illusion with no basis.",
          "It is identical with the moment of vision.",
        ],
        correct: [0],
      },
    },
    {
      key: "example",
      rung: "apply",
      prompt: <p>Which is an example of the everyday present that Heidegger calls making present?</p>,
      answer: {
        kind: "choice",
        options: [
          "Scrolling from one item to the next, taken up by whatever appears",
          "Deciding, in a crisis, what the situation requires",
          "Taking up a family craft as one’s own",
          "Facing one’s own mortality",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the future really have priority over the past and present in a human life? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Heidegger’s view that we understand ourselves from our possibilities, so that the past and present matter in their light.",
          "Considers an objection, such as the weight of the past or the claims of the present moment.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is clock time derived from lived time, or lived time a subjective layer on clock time?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Heidegger’s derivation of the sequence of nows from public, datable time.",
          "Considers the physicist’s reply that time is a dimension of nature independent of anyone’s experience.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the later Heidegger on technology: why a hydroelectric dam and an old wooden bridge reveal the river in
      different ways.
    </p>
  ),
};
