import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RecognitionSphereViz } from "@/components/viz/RecognitionSphereViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p33.3.1",
  minutes: 90,
  links: {
    revisits: ["p33.2.2", "p14.3.3", "p14.5.2"],
    foreshadows: ["p33.3.2", "p33.3.3", "p33.2.1"],
  },

  puzzle: (
    <>
      <p>
        Two workers earn the same wage. One is treated with respect; the other does work that society calls dirty and is
        looked down upon for it. Distribution is equal, yet one of them suffers an injustice. What exactly is wrong, and
        what would put it right?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a harm, and see which sphere of recognition it violates and which remedy it calls for.</p>
      <RecognitionSphereViz />
    </>
  ),

  theory: (
    <>
      <Definition title="recognition">
        <p>
          In Hegel&rsquo;s account, self-consciousness is achieved only through being <strong>recognised</strong> by
          another self-consciousness. The master who is recognised by a slave gains nothing, since the slave&rsquo;s
          recognition is not that of an equal; full selfhood needs mutual recognition among free persons. On this view our
          identities and our sense of our own worth are formed in relations with others, and can be damaged by them.
        </p>
      </Definition>

      <Definition title="Honneth’s three spheres">
        <p>
          Axel Honneth, in <em>The Struggle for Recognition</em> (1992), distinguishes three spheres. In{" "}
          <strong>love</strong>, care in close relationships builds basic self-confidence. In <strong>rights</strong>,
          equal legal status builds self-respect. In <strong>solidarity</strong>, esteem for one&rsquo;s contribution to a
          shared life builds self-esteem. Each has a matching form of disrespect, from abuse to exclusion to denigration,
          and Honneth reads social conflicts as struggles against such disrespect.
        </p>
      </Definition>

      <Example title="the politics of recognition">
        <p>
          Charles Taylor argued in 1992 that misrecognition can &ldquo;inflict harm&rdquo; by imprisoning people in a
          demeaning picture of themselves. A politics of equal dignity treats everyone alike; a politics of difference asks
          that distinct identities, such as that of French-speaking Quebec, be acknowledged and sometimes protected. Taylor
          thought liberal societies could accommodate some of this without abandoning basic rights.
        </p>
      </Example>

      <Remark title="redistribution or recognition?">
        <p>
          Nancy Fraser worries that recognition politics can displace economic justice and reify group identities. She
          treats misrecognition as a matter of <strong>status subordination</strong>, not damaged psychology, and proposes
          one norm, <strong>participatory parity</strong>: justice requires arrangements that let all take part in social
          life as peers. Some injustices, like those of class, call mainly for redistribution; others, like those of
          sexuality, mainly for recognition; gender and race are &ldquo;bivalent&rdquo; and need both.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hegel",
      rung: "check",
      prompt: <p>What did Hegel claim about recognition?</p>,
      answer: { kind: "choice", options: ["Self-consciousness is achieved only through mutual recognition by another", "Recognition is purely legal", "People form identities entirely alone", "Only rulers need recognition"], correct: [0] },
    },
    {
      key: "spheres",
      rung: "check",
      prompt: <p>Which are Honneth&rsquo;s three spheres of recognition?</p>,
      answer: { kind: "choice", options: ["Love, rights and solidarity", "Wealth, power and status", "Family, market and state", "Reason, will and desire"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose &ldquo;Low pay for care work&rdquo;. What remedy does Fraser&rsquo;s view call for?</p>,
      answer: { kind: "choice", options: ["Both recognition and redistribution", "Recognition alone", "Redistribution alone", "Neither"], correct: [0] },
    },
    {
      key: "vote",
      rung: "apply",
      prompt: <p>In Honneth&rsquo;s scheme, which sphere does denial of the vote violate?</p>,
      answer: { kind: "choice", options: ["Rights, damaging self-respect", "Love, damaging self-confidence", "Solidarity, damaging self-esteem", "None of them"], correct: [0] },
    },
    {
      key: "parity",
      rung: "apply",
      prompt: <p>What is Fraser&rsquo;s norm of participatory parity?</p>,
      answer: { kind: "choice", options: ["Justice requires arrangements that let everyone take part in social life as peers", "Everyone must receive identical income", "Every identity must be celebrated equally", "Only votes must be equal"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is misrecognition a distinct kind of injustice, or can it be reduced to unfair distribution? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what misrecognition is, with an example.",
          "Considers the case for reducing it to distribution, or Fraser’s two-dimensional view.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a politics of recognition avoid fixing people into rigid group identities?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the worry about reification.",
          "Considers a reply, such as Fraser’s status model or Taylor’s view.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Recognition is won and lost in communication: in what we say to and about one another. One philosopher built a
        whole theory of reason, law and democracy on the conditions of communication free from domination.
      </p>
      <p>Next, Habermas on discourse.</p>
    </>
  ),
};
