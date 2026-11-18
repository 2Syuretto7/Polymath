import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CredulityViz } from "@/components/viz/CredulityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p23.4.3",
  minutes: 85,
  links: {
    revisits: ["p23.4.2", "p10.5.1", "p10.5.2"],
    foreshadows: ["p23.4.4", "p23.5.1", "p23.5.2"],
  },

  puzzle: (
    <>
      <p>
        Millions of people, in every century and culture, report experiences in which God, or something ultimate, seems
        present to them. If millions reported seeing a comet, we would believe them. Why treat these reports differently, if
        we should?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Start with an experience as of God. Suppose each consideration holds in turn, and see which ones defeat its claim to
        justify belief.
      </p>
      <CredulityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="kinds of experience">
        <p>
          William James, in <em>The Varieties of Religious Experience</em> (1902), described mystical states as ineffable,
          noetic (seeming to give knowledge), transient and passive. Swinburne distinguished experiences of public objects
          seen as religious, like a sunset, from private experiences of God&rsquo;s presence, some with sensory content and
          some without. Rudolf Otto described the numinous: an awe and fascination before something wholly other.
        </p>
      </Definition>

      <Definition title="the principle of credulity">
        <p>
          Richard Swinburne: if it seems to a subject that x is present, then probably x is present, unless there are special
          considerations to the contrary. Without this principle we would have no justification for trusting perception or
          memory at all, since any argument for them uses them. The <strong>principle of testimony</strong> adds that we
          should believe others&rsquo; reports of their experiences, unless we have reason not to. Together they make
          religious experience evidence for God, unless defeated.
        </p>
      </Definition>

      <Example title="Alston’s doxastic practices">
        <p>
          William Alston argued that Christian mystical practice, forming beliefs about God on the basis of experience, checked
          within a tradition, is a socially established doxastic practice like sense perception. We cannot show non-circularly
          that sense perception is reliable either. So it is rational to engage in either, unless shown to be unreliable.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Unlike perception, religious experiences cannot be checked by others in the same way: there is no agreed test for
          whether God was really present. Experiences across traditions conflict, presenting a personal God, an impersonal
          Brahman, or emptiness. Some have natural explanations, such as temporal lobe activity, though every experience has a
          neural basis, and a natural cause is compatible with God acting through it. And testimony is weaker when the
          witnesses already expected to see what they report.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cred",
      rung: "check",
      prompt: <p>What does Swinburne&rsquo;s principle of credulity say?</p>,
      answer: { kind: "choice", options: ["If it seems that x is present, probably x is present, unless there are special considerations against it", "Believe whatever you are told", "Religious experiences are always veridical", "Only public experiences count as evidence"], correct: [0] },
    },
    {
      key: "james",
      rung: "check",
      prompt: <p>Which feature did William James give to mystical states?</p>,
      answer: { kind: "choice", options: ["They are noetic: they seem to give knowledge", "They are always visual", "They last for years", "They are under the subject’s control"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many of the six considerations are defeaters on Swinburne&rsquo;s view?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "neuro",
      rung: "apply",
      prompt: <p>Why does a neural description of a religious experience not by itself defeat it?</p>,
      answer: { kind: "choice", options: ["Every experience, including ordinary perception, has neural correlates", "Neuroscience is unreliable", "God has no brain", "Religious experiences have no neural basis"], correct: [0] },
    },
    {
      key: "alston",
      rung: "apply",
      prompt: <p>What is the core of Alston&rsquo;s parity argument?</p>,
      answer: { kind: "choice", options: ["Sense perception cannot be shown reliable without circularity either, so mystical practice is not worse off", "Mystical experience is more reliable than perception", "Perception is unreliable", "Only Christians have religious experiences"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Do religious experiences give good evidence that God exists? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the principle of credulity, or Alston’s parity argument.",
          "Weighs an objection, such as conflicting experiences or the lack of checks.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should someone who has never had a religious experience give weight to the testimony of those who have?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers the principle of testimony and how we usually trust reports.",
          "Considers what is special about these reports, such as conflict or expectation.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Religious experiences are private. Some religious claims concern public events: water into wine, a man raised from the
        dead. These are miracles, and their evidence is testimony.
      </p>
      <p>Next, miracles: Hume&rsquo;s argument that no testimony could establish one, and its critics.</p>
    </>
  ),
};
