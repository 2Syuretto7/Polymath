import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { JusticeLandscapeViz } from "@/components/viz/JusticeLandscapeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p33.2.2",
  minutes: 90,
  links: {
    revisits: ["p33.2.1", "p14.2.1", "p14.5.3"],
    foreshadows: ["p33.3.1", "p33.3.2", "p33.1.2"],
  },

  puzzle: (
    <>
      <p>
        A theory of justice describes a perfectly just society, in which everyone complies with fair rules. Our society is
        nothing like that. Does knowing what perfect justice looks like tell us what to do here and now, when people break
        the rules and history has left deep injustices behind? Or could steering towards the ideal sometimes make things
        worse?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a route from where we are, and watch how justice rises and falls along the way.</p>
      <JusticeLandscapeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="ideal and non-ideal theory">
        <p>
          John Rawls divided political philosophy into <strong>ideal theory</strong>, which asks what principles would
          govern a well-ordered society under <strong>strict compliance</strong> and reasonably favourable conditions, and{" "}
          <strong>non-ideal theory</strong>, which asks how to act when people do not comply or conditions are unfavourable.
          Rawls held that ideal theory comes first: it sets the target against which non-ideal policies, such as
          punishment, civil disobedience or reform, are judged as steps towards it.
        </p>
      </Definition>

      <Definition title="the comparative approach">
        <p>
          Amartya Sen, in <em>The Idea of Justice</em> (2009), rejects this priority. To choose between a Dalí and a
          Picasso we need not know that the Mona Lisa is the best painting in the world. Likewise, we can judge that
          abolishing slavery or ending famine makes a society more just without any account of perfect justice. Sen calls
          Rawls&rsquo;s method <strong>transcendental institutionalism</strong>, and proposes instead a{" "}
          <strong>comparative</strong> approach that ranks realisable alternatives and attends to how people actually live.
        </p>
      </Definition>

      <Example title="ideal theory as ideology">
        <p>
          Charles Mills argued in 2005 that ideal theory is not neutral. By idealising away the history of racial
          domination, it leaves unasked the questions most urgent for the people that history harmed, such as
          reparations and corrective justice, and it presents an abstract picture that suits the interests of those who
          benefit from the actual order. Mills did not reject Rawls&rsquo;s principles; he proposed applying them first to
          the correction of injustice.
        </p>
      </Example>

      <Remark title="the tyranny of the ideal">
        <p>
          Gerald Gaus models justice as a rugged landscape over possible social worlds. A distant ideal may lie across a
          valley, so that moving towards it lowers justice for a long time; and because we see the far terrain only dimly,
          we may not even know where the ideal is. Others, such as A. John Simmons, reply that without an ideal we cannot
          tell whether a local improvement leads anywhere, or whether it makes the ideal harder to reach later.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ideal",
      rung: "check",
      prompt: <p>What does Rawlsian ideal theory assume?</p>,
      answer: { kind: "choice", options: ["Strict compliance with just principles and reasonably favourable conditions", "That everyone is selfish", "That no institutions exist", "That injustice can never be corrected"], correct: [0] },
    },
    {
      key: "sen",
      rung: "check",
      prompt: <p>What does Sen&rsquo;s comparative approach claim?</p>,
      answer: { kind: "choice", options: ["We can rank alternatives as more or less just without knowing what perfect justice is", "Justice requires a complete ideal first", "Justice cannot be compared at all", "Only institutions matter"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose &ldquo;head for the ideal&rdquo; and set progress to 100%. What is the lowest justice score on the way?</p>,
      answer: { kind: "numeric", value: 2.5, tolerance: 0.1 },
    },
    {
      key: "mills",
      rung: "apply",
      prompt: <p>What was Charles Mills&rsquo;s main charge against ideal theory?</p>,
      answer: { kind: "choice", options: ["By idealising away histories of domination, it neglects corrective justice and serves the privileged", "It is too concerned with race", "It has no principles at all", "It ignores the economy entirely"], correct: [0] },
    },
    {
      key: "gaus",
      rung: "apply",
      prompt: <p>Why, on Gaus&rsquo;s picture, can aiming at the ideal be harmful?</p>,
      answer: { kind: "choice", options: ["The path to it may pass through states worse than the present, and the distant terrain is uncertain", "The ideal is always unjust", "Ideals cannot be described", "Any change makes things worse"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Do we need a theory of perfect justice to know how to make our society more just? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the case for ideal theory or the comparative approach fairly.",
          "Considers an objection, such as Sen’s paintings analogy or the worry about local peaks.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should a theory of justice for a society shaped by past injustice begin from corrective justice?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with Mills or a similar argument.",
          "Considers a reply on behalf of ideal theory.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Many injustices that non-ideal theory confronts are not only about who gets what. They concern how people are seen
        and valued by others, and how that shapes how they see themselves.
      </p>
      <p>Next, recognition.</p>
    </>
  ),
};
