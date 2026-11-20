import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PublicReasonViz } from "@/components/viz/PublicReasonViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p33.1.1",
  minutes: 90,
  links: {
    revisits: ["p14.2.1", "p14.4.2", "p14.3.1"],
    foreshadows: ["p33.1.2", "p33.3.2", "p33.2.2"],
  },

  puzzle: (
    <>
      <p>
        A legislator votes for a welfare law because their faith commands care for the poor. Another citizen, an atheist,
        will be taxed to pay for it. The law may be just, but has the atheist been given a reason they could accept? In a
        society divided by religion and philosophy, what kind of reasons may be used to justify coercive laws?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a reason offered for a law, and see whether it counts on the consensus and convergence views.</p>
      <PublicReasonViz />
    </>
  ),

  theory: (
    <>
      <Definition title="reasonable pluralism">
        <p>
          John Rawls, in <em>Political Liberalism</em> (1993), takes as a permanent feature of free societies the{" "}
          <strong>fact of reasonable pluralism</strong>: citizens hold different and incompatible comprehensive doctrines,
          religious, moral and philosophical, and this is not owing to error or bad faith. The <strong>burdens of
          judgement</strong>, such as conflicting evidence, vague concepts and differing life experience, mean that reasonable
          people exercising their reason freely will disagree.
        </p>
      </Definition>

      <Definition title="the liberal principle of legitimacy">
        <p>
          Political power is coercive and is exercised by citizens collectively over one another. Rawls holds that its
          exercise is legitimate only when it accords with a constitution whose essentials all citizens may reasonably be
          expected to endorse, in light of principles acceptable to them as free and equal. When officials and citizens
          debate constitutional essentials and basic justice, they should therefore appeal to <strong>public reason</strong>:
          political values, such as liberty, equality and fairness, and methods of inquiry that all can share.
        </p>
      </Definition>

      <Example title="the proviso">
        <p>
          Rawls does not ban religious argument from public life. Under his <strong>proviso</strong>, citizens may appeal to
          their comprehensive doctrines, provided that in due course they give properly public reasons for the positions
          they support. He cites the abolitionists and Martin Luther King Jr., whose religious rhetoric supported
          constitutional values of equal citizenship. The duty of civility is moral, not legal: no one is to be silenced.
        </p>
      </Example>

      <Remark title="critics">
        <p>
          Nicholas Wolterstorff argues that public reason asks religious citizens to split their integrity, and favours
          secular citizens. Joseph Raz and others ask whether the principle of legitimacy itself could be endorsed by all
          reasonable citizens, or whether public reason fails its own test. Gerald Gaus and Kevin Vallier propose a{" "}
          <strong>convergence</strong> view: a law is publicly justified if each citizen has sufficient reason to endorse it,
          even if those reasons differ and are not shared.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "plural",
      rung: "check",
      prompt: <p>What is the fact of reasonable pluralism?</p>,
      answer: { kind: "choice", options: ["Free societies contain reasonable but incompatible comprehensive doctrines", "Everyone agrees on the good life", "Disagreement always stems from error", "Only one religion is reasonable"], correct: [0] },
    },
    {
      key: "legit",
      rung: "check",
      prompt: <p>When is political power legitimate, on Rawls&rsquo;s liberal principle of legitimacy?</p>,
      answer: { kind: "choice", options: ["When exercised in accordance with a constitution all citizens may reasonably be expected to endorse", "When a majority votes for it", "When it promotes the true religion", "When it maximises total welfare"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose Scripture. On the convergence view, can this reason count towards justifying the law?</p>,
      answer: { kind: "choice", options: ["Yes: it is a sufficient reason for the citizen who holds it", "No: only shared reasons count", "Only if a majority shares it", "Only if it is written into the constitution"], correct: [0] },
    },
    {
      key: "proviso",
      rung: "apply",
      prompt: <p>What does Rawls&rsquo;s proviso allow?</p>,
      answer: { kind: "choice", options: ["Appeal to comprehensive doctrines, if public reasons are given in due course", "Any argument whatever, at any time", "No religious language in public", "Only scientific arguments"], correct: [0] },
    },
    {
      key: "self",
      rung: "apply",
      prompt: <p>What is the self-defeat objection to public reason?</p>,
      answer: { kind: "choice", options: ["The principle of legitimacy may not itself be acceptable to all reasonable citizens", "Public reason defeats all laws", "Religious citizens defeat secular ones", "Votes cancel each other out"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should citizens refrain from voting on purely religious grounds? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the idea of public reason and why it bears on voting.",
          "Considers an objection, such as integrity or the convergence view.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does public reason pass its own test?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the worry that some reasonable citizens reject the principle of legitimacy.",
          "Considers a reply, such as restricting the principle to the political domain.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Public reason is one part of a larger answer to how a stable and just society is possible among people divided by
        reasonable doctrines.
      </p>
      <p>Next, political liberalism.</p>
    </>
  ),
};
