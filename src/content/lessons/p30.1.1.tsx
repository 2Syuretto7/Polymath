import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ReasonWeighViz } from "@/components/viz/ReasonWeighViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p30.1.1",
  minutes: 90,
  links: {
    revisits: ["p13.1.3", "p13.4.1", "p13.3.4"],
    foreshadows: ["p30.1.2", "p30.3.2", "p30.3.3"],
  },

  puzzle: (
    <>
      <p>
        The building is on fire, and that is a reason to leave it. Is it a reason because you want to live? Because leaving
        would be good? Or is the fact that it counts in favour of leaving simply basic, something that cannot be explained
        in any other terms?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Switch considerations on and off, and choose which kinds count as reasons for Asha&rsquo;s belief.</p>
      <ReasonWeighViz />
    </>
  ),

  theory: (
    <>
      <Definition title="reasons fundamentalism">
        <p>
          T. M. Scanlon, in <em>What We Owe to Each Other</em> (1998), took a reason to be &lsquo;a consideration that counts
          in favour of&rsquo; some action or attitude, and held that this notion cannot be explained in other terms.{" "}
          <strong>Reasons fundamentalism</strong>, defended also by Derek Parfit and John Skorupski, adds that every other
          normative notion, such as ought, good or rational, can be explained in terms of reasons. Reasons stand to
          normativity as sets stand to mathematics.
        </p>
      </Definition>

      <Definition title="the buck-passing account of value">
        <p>
          On Scanlon&rsquo;s account, being good is not itself a reason-giving property. To be good is to have other
          properties that give reasons to respond favourably: to desire, admire, protect or promote the thing. Value
          &lsquo;passes the buck&rsquo; to the reasons that the ordinary features of things provide.
        </p>
      </Definition>

      <Example title="Parfit’s agony argument">
        <p>
          In <em>On What Matters</em> (2011), Parfit imagines a man with Future Tuesday Indifference: he cares about pain
          as normal, except that he is indifferent to any agony he will suffer on a future Tuesday. Subjectivists say our
          reasons come from our desires, so this man has no reason to avoid Tuesday agony. Parfit concludes that subjectivism
          is false: the nature of agony itself gives reason to avoid it, whatever one wants.
        </p>
      </Example>

      <Remark title="the wrong kind of reasons">
        <p>
          A demon threatens to punish you unless you admire him. You have a reason to admire him, it seems, yet that does not
          make him admirable, so the buck-passing account seems to count the wrong reasons. Parfit distinguished{" "}
          <strong>object-given</strong> reasons, provided by facts about what the attitude is directed at, from{" "}
          <strong>state-given</strong> reasons, provided by the benefits of having the attitude. Only the former, he held,
          are reasons for the attitude; the latter are reasons to want or cause oneself to have it.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Humeans, following Bernard Williams on internal reasons, reply that a reason must connect with the agent&rsquo;s
          motivations. Others ask how we could know primitive normative facts, and whether they are the &lsquo;queer&rsquo;
          entities Mackie rejected. Fundamentalists answer that we know them by careful intuition, as in logic and
          mathematics.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "scanlon",
      rung: "check",
      prompt: <p>How did Scanlon characterise a reason?</p>,
      answer: { kind: "choice", options: ["As a consideration that counts in favour of something", "As a desire together with a belief", "As whatever maximises the good", "As a command of God"], correct: [0] },
    },
    {
      key: "buck",
      rung: "check",
      prompt: <p>What does the buck-passing account of value say?</p>,
      answer: { kind: "choice", options: ["To be good is to have other properties that give reasons to respond favourably", "Goodness is the only source of reasons", "Value is whatever people are willing to pay for", "Nothing is good or bad"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, switch every consideration on and count only reasons for the belief. What is the balance?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "tuesday",
      rung: "apply",
      prompt: <p>Which view is Parfit&rsquo;s example of Future Tuesday Indifference meant to refute?</p>,
      answer: { kind: "choice", options: ["Subjectivism, on which reasons come from the agent’s desires", "Utilitarianism", "Moral realism", "Contractualism"], correct: [0] },
    },
    {
      key: "demon",
      rung: "apply",
      prompt: <p>A demon will punish you unless you admire him. On Parfit&rsquo;s distinction, what kind of reason is this?</p>,
      answer: { kind: "choice", options: ["A state-given reason, to want or bring about the admiration", "An object-given reason for admiring him", "No reason at all", "A reason to believe he is admirable"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Can the notion of a reason be explained in terms of desire? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a desire-based account of reasons, such as Williams’s internalism.",
          "Considers a case such as Future Tuesday Indifference, or a reply on the Humean side.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If someone pays you to believe that it will rain tomorrow, do you have a reason to believe it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes reasons bearing on the truth of the belief from reasons bearing on the benefit of having it.",
          "Considers whether the payment is a reason for the belief or only a reason to want it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If reasons are basic, what is rationality? Someone can believe they ought to do something and fail to intend it,
        and seem irrational without missing any reason. Rationality seems to demand coherence, and it is unclear why
        coherence matters.
      </p>
      <p>Next, rationality and its requirements.</p>
    </>
  ),
};
