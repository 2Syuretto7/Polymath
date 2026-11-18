import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MiracleViz } from "@/components/viz/MiracleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p23.4.4",
  minutes: 85,
  links: {
    revisits: ["p23.4.3", "p7.5.3", "p10.5.2"],
    foreshadows: ["p23.5.1", "p23.5.2", "p24.1.2"],
  },

  puzzle: (
    <>
      <p>
        A friend you trust completely tells you they saw a dead man walk out of his grave. You trust them about everything
        else. Should you believe them? And if not, would twelve such friends be enough? Hume thought no amount of ordinary
        testimony could do it. Was he right?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Set how unlikely the miracle is before any testimony, how reliable each witness is, and how many there are. Then make
        the witnesses repeat one source instead of being independent.
      </p>
      <MiracleViz />
    </>
  ),

  theory: (
    <>
      <Definition title="what a miracle is">
        <p>
          Hume defined a miracle as &lsquo;a transgression of a law of nature by a particular volition of the Deity&rsquo;.
          Others prefer a weaker definition, an event that natural causes would not produce, brought about by God, so as not
          to make miracles impossible by definition. Either way, a miracle is meant to be both extraordinary and a sign.
        </p>
      </Definition>

      <Definition title="Hume’s argument">
        <p>
          In section 10 of the <em>Enquiry</em> (1748): a wise person proportions belief to the evidence. A law of nature is
          supported by uniform experience, the strongest possible evidence. Testimony is supported only by our experience of
          its general reliability. So &lsquo;no testimony is sufficient to establish a miracle, unless the testimony be of such
          a kind, that its falsehood would be more miraculous, than the fact, which it endeavours to establish&rsquo;. Hume
          added that in fact no testimony has ever met this standard: reported miracles come from ignorant ages, from people
          who love wonder, and from rival religions whose miracles cancel out.
        </p>
      </Definition>

      <Example title="the Bayesian reading">
        <p>
          Hume&rsquo;s maxim is close to Bayes&rsquo; theorem: believe the miracle only if P(miracle) × P(testimony | miracle)
          exceeds P(no miracle) × P(testimony | no miracle). Charles Babbage, in 1838, and later John Earman, observed that the
          likelihood ratio of independent witnesses multiplies, so enough independent and reliable witnesses can overcome any
          prior that is not zero. The force of Hume&rsquo;s argument depends on how tiny the prior is, and on whether the
          witnesses really are independent.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Earman, in <em>Hume&rsquo;s Abject Failure</em> (2000), argued that Hume&rsquo;s first part rests on a
          straight-rule induction that would also rule out believing in new scientific phenomena. Others reply that Hume never
          claimed miracles are impossible, only that testimony to them, given what we know of human credulity, never in fact
          suffices. And if the existence of God is independently probable, the prior for a miracle is not as low as a purely
          naturalistic prior would make it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How did Hume define a miracle?</p>,
      answer: { kind: "choice", options: ["A transgression of a law of nature by a particular volition of the Deity", "Any surprising event", "An event with no cause", "Something reported in scripture"], correct: [0] },
    },
    {
      key: "maxim",
      rung: "check",
      prompt: <p>What is Hume&rsquo;s maxim about testimony to miracles?</p>,
      answer: { kind: "choice", options: ["Believe it only if its falsehood would be more miraculous than the miracle", "Never believe any testimony", "Believe it if the witness is honest", "Believe it if many people report it"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with prior 10⁻³, reliability 0.9 and 3 independent witnesses, what is the probability of the miracle?</p>,
      answer: { kind: "numeric", value: 0.4219, tolerance: 0.01 },
    },
    {
      key: "dep",
      rung: "apply",
      prompt: <p>In the visualisation, what happens when the witnesses all repeat one source?</p>,
      answer: { kind: "choice", options: ["They count as a single witness, however many there are", "The probability rises faster", "The probability becomes 1", "The prior changes"], correct: [0] },
    },
    {
      key: "cancel",
      rung: "apply",
      prompt: <p>Why did Hume think the miracles of rival religions cancel out?</p>,
      answer: { kind: "choice", options: ["Each religion’s miracles are evidence for it and so against its rivals", "No religion reports miracles", "Miracles are always identical", "Religions agree about miracles"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Could testimony ever make it reasonable to believe a miracle occurred? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Hume’s argument or its Bayesian form.",
          "Considers a reply, such as independent witnesses or a prior raised by evidence for God.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Hume&rsquo;s reasoning would also have led an Indian prince, he says, to disbelieve reports of ice. Is that a problem for Hume?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the prince’s experience of uniform warm weather made frozen water seem impossible.",
          "Considers Hume’s reply that ice is unusual but not contrary to uniform experience, or whether this distinction holds.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Hume pointed out that rival religions report rival miracles. That observation becomes a problem of its own: if many
        religions claim to be true, and their followers seem equally sincere and reasonable, can any one of them be uniquely
        right?
      </p>
      <p>Next, religious diversity: exclusivism, inclusivism and pluralism.</p>
    </>
  ),
};
