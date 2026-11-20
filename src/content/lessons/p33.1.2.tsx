import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { OverlapConsensusViz } from "@/components/viz/OverlapConsensusViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p33.1.2",
  minutes: 90,
  links: {
    revisits: ["p33.1.1", "p14.2.1", "p14.2.2"],
    foreshadows: ["p33.2.2", "p33.3.2", "p33.2.1"],
  },

  puzzle: (
    <>
      <p>
        In <em>A Theory of Justice</em>, Rawls argued for justice as fairness from a Kantian picture of persons as
        autonomous. But many citizens of a free society are not Kantians: they are utilitarians, devout believers, or simply
        pluralists about value. If a just society needs its citizens to support its principles, and they cannot all share
        one philosophy, what could hold it together?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Decide whether each doctrine endorses the political conception from within or only as a compromise.</p>
      <OverlapConsensusViz />
    </>
  ),

  theory: (
    <>
      <Definition title="a political conception of justice">
        <p>
          Rawls came to see that his earlier book presented justice as fairness as part of a comprehensive liberal doctrine,
          which reasonable citizens could reject. <em>Political Liberalism</em> (1993) recasts it as a{" "}
          <strong>political conception</strong>: it applies only to the basic structure of society, can be presented
          independently of any comprehensive doctrine, and is worked up from ideas implicit in a democratic public culture,
          such as citizens as free and equal and society as a fair system of cooperation.
        </p>
      </Definition>

      <Definition title="overlapping consensus">
        <p>
          The political conception is a <strong>module</strong> that each reasonable comprehensive doctrine can fit into and
          endorse on its own terms. When they do, there is an <strong>overlapping consensus</strong>. This differs from a{" "}
          <strong>modus vivendi</strong>, a compromise accepted only because no group can impose its own view: a modus
          vivendi is hostage to shifts in power, whereas an overlapping consensus gives{" "}
          <strong>stability for the right reasons</strong>.
        </p>
      </Definition>

      <Example title="the reasonable and the rational">
        <p>
          Rawls distinguishes the <strong>rational</strong>, the capacity to pursue one&rsquo;s own ends, from the{" "}
          <strong>reasonable</strong>, the willingness to propose and abide by fair terms of cooperation if others do, and to
          accept the burdens of judgement. Only reasonable doctrines need to be included in the consensus; a doctrine that
          would deny others equal liberty is to be contained, not accommodated.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Some argue that political liberalism is not neutral after all, since it privileges doctrines willing to set aside
          their claims to truth in politics. Jürgen Habermas questions whether a consensus reached by bracketing truth can be
          justified rather than merely stable. Others, such as Jean Hampton and Joseph Raz, doubt that a theory of justice
          can avoid taking a stand on the truth of contested moral views. Defenders reply that political liberalism takes a
          stand on justice, not on the whole truth.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pc",
      rung: "check",
      prompt: <p>What makes a conception of justice political in Rawls&rsquo;s sense?</p>,
      answer: { kind: "choice", options: ["It applies to the basic structure and can be presented independently of any comprehensive doctrine", "It is endorsed by a political party", "It concerns only elections", "It rests on a single religious view"], correct: [0] },
    },
    {
      key: "oc",
      rung: "check",
      prompt: <p>What is an overlapping consensus?</p>,
      answer: { kind: "choice", options: ["Agreement on a political conception by reasonable doctrines, each for its own reasons", "A compromise between rival groups of equal strength", "Unanimous agreement on the good life", "A majority vote"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set the religious believer to endorse from within, so all four do. What kind of agreement results?</p>,
      answer: { kind: "choice", options: ["An overlapping consensus", "A modus vivendi", "No agreement", "A majority decision"], correct: [0] },
    },
    {
      key: "mv",
      rung: "apply",
      prompt: <p>Why is a modus vivendi unstable, on Rawls&rsquo;s view?</p>,
      answer: { kind: "choice", options: ["Parties would change the terms if the balance of power shifted in their favour", "It is always unjust", "It requires unanimity", "It cannot be written down"], correct: [0] },
    },
    {
      key: "reas",
      rung: "apply",
      prompt: <p>What does it mean to be reasonable, for Rawls?</p>,
      answer: { kind: "choice", options: ["To propose and abide by fair terms of cooperation, and accept the burdens of judgement", "To pursue one’s own ends efficiently", "To agree with the majority", "To have true beliefs"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is an overlapping consensus a realistic basis for stability in a deeply divided society? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains overlapping consensus and how it differs from a modus vivendi.",
          "Considers an objection, such as the difficulty of reaching it or doubts about neutrality.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a theory of justice avoid claiming to be true?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why Rawls avoids claims of truth for the political conception.",
          "Considers an objection, such as Raz's or Habermas's.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Rawls measures justice by the distribution of primary goods, such as income and liberties. But two people with the
        same goods can live very different lives.
      </p>
      <p>Next, the capabilities approach.</p>
    </>
  ),
};
