import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { FreeActsViz } from "@/components/viz/FreeActsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.3.2",
  minutes: 70,
  links: {
    revisits: ["p0.4.3", "p1.1.2"],
    foreshadows: ["p7.5.2", "p11.7.2", "p11.7.3", "p13.4.2"],
  },

  puzzle: (
    <>
      <p>Compare two people who both hand over money.</p>
      <ul>
        <li>Priya gives ₹500 to a charity because she wants to help.</li>
        <li>Sanjay gives ₹500 to a robber who is holding a knife to his throat.</li>
      </ul>
      <p>
        Everyone agrees there is a difference in freedom here: Priya acted freely, Sanjay did not. Now suppose determinism is
        true, so both actions were fixed by the past. Does the difference vanish? If not, what is it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The difference between Priya and Sanjay does not seem to depend on physics at all. Sanjay is <em>forced</em>: someone
        else&rsquo;s threat overrides what he wants. Priya is not: her action flows from her own desires. That difference
        would remain even if both actions were determined.
      </p>
      <p>
        <strong>Compatibilism</strong> builds on this. It says free will is not freedom from causes; it is a particular kind
        of causation, the kind in which your action flows from you rather than from force or compulsion. Test three accounts
        of free action below, and switch determinism on and off.
      </p>
      <FreeActsViz />
    </>
  ),

  theory: (
    <>
      <Quote source={<>David Hume, <cite>An Enquiry Concerning Human Understanding</cite> (1748), section VIII</>}>
        <p>
          By liberty, then, we can only mean a power of acting or not acting, according to the determinations of the will;
          that is, if we choose to remain at rest, we may; if we choose to move, we also may.
        </p>
      </Quote>

      <Definition title="classical compatibilism">
        <p>
          On the <strong>classical</strong> view of Hobbes and Hume, you act freely when you do what you want and nothing
          external prevents you. The opposite of freedom is not causation but <em>constraint</em>: chains, locked doors, threats.
          Whether your wants were themselves caused is beside the point.
        </p>
      </Definition>

      <Remark title="the trouble with compulsion">
        <p>
          The kleptomaniac and the hypnotised man in the visualisation do exactly what they want, and no one forces them. The
          classical view must call them free, which seems wrong. The problem is that their wants are themselves the source of
          the unfreedom.
        </p>
      </Remark>

      <Definition title="Frankfurt's hierarchy of desires">
        <p>
          Harry Frankfurt, in &ldquo;Freedom of the Will and the Concept of a Person&rdquo; (1971), distinguished{" "}
          <strong>first-order desires</strong>, desires for things (to smoke, to steal, to help), from{" "}
          <strong>second-order desires</strong>, desires about which first-order desires to have and act on. The unwilling
          addict wants to smoke, but wants not to want it. On Frankfurt&rsquo;s view you act freely when the desire that
          moves you is one you endorse at the higher level: when your will is the will you want to have.
        </p>
      </Definition>

      <Example title="manipulation">
        <p>
          The hypnotist case is the hardest for every compatibilist. If someone plants in you both a desire and your approval of
          it, you satisfy both classical and hierarchical conditions, yet seem unfree. Compatibilists reply by adding a
          condition about history: free desires must not be produced by bypassing your capacity to reflect. The incompatibilist
          then asks how being produced by the Big Bang and the laws of nature is any better than being produced by a hypnotist.
          This is one of the central battles of the debate.
        </p>
      </Example>

      <Remark title="a wretched subterfuge?">
        <p>
          Kant, in the <cite>Critique of Practical Reason</cite> (1788), called the compatibilism of his day a &ldquo;wretched
          subterfuge&rdquo; that solves the problem by playing with words. Compatibilists answer that they are not changing the
          subject: they are describing the freedom we actually care about, which is the freedom that matters for praise, blame
          and leading one&rsquo;s own life. Surveys of professional philosophers have found compatibilism to be the most widely
          held view.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "constraint",
      rung: "check",
      prompt: <p>On classical compatibilism, what is the opposite of free action?</p>,
      answer: { kind: "choice", options: ["causation", "constraint or force", "determinism", "desire"], correct: [1] },
    },
    {
      key: "second-order",
      rung: "check",
      prompt: <p>&ldquo;I wish I didn&rsquo;t want another biscuit.&rdquo; This expresses a&hellip;</p>,
      answer: { kind: "choice", options: ["first-order desire", "second-order desire", "belief about the past", "fatalist view"], correct: [1] },
    },
    {
      key: "kleptomaniac",
      rung: "apply",
      prompt: <p>Why does the kleptomaniac trouble the classical account?</p>,
      answer: {
        kind: "choice",
        options: [
          "She is forced by someone else.",
          "She does what she wants without external constraint, yet seems unfree.",
          "Her action was undetermined.",
          "She does not want to steal at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "frankfurt",
      rung: "apply",
      prompt: <p>On Frankfurt&rsquo;s account, the unwilling addict who smokes acts&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "freely, since he does what he wants",
          "unfreely, since the desire that moves him is one he does not endorse",
          "freely, since determinism is false",
          "unfreely, since all actions are unfree",
        ],
        correct: [1],
      },
    },
    {
      key: "determinism",
      rung: "apply",
      prompt: <p>In the visualisation, switching determinism on or off changes the verdicts of which account?</p>,
      answer: {
        kind: "choice",
        options: ["classical compatibilism", "hierarchical compatibilism", "libertarianism", "all three"],
        correct: [2],
      },
    },
    {
      key: "manipulation",
      rung: "prove",
      prompt: (
        <p>
          Set out the manipulation argument against compatibilism in standard form, using the hypnotist case. Then give the
          best compatibilist reply you can.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Includes a premise that the manipulated agent satisfies the compatibilist conditions yet is not free.",
          "Includes a premise that there is no relevant difference between manipulation and ordinary deterministic causation.",
          "Concludes that compatibilist conditions are not sufficient for freedom.",
          "Offers a compatibilist reply, such as a historical condition, and explains how it is meant to separate the cases.",
        ],
      },
    },
    {
      key: "verbal",
      rung: "stretch",
      prompt: (
        <p>
          Is Kant right that compatibilism merely changes the meaning of &ldquo;free&rdquo;? Defend an answer, using the Priya
          and Sanjay case.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the charge that compatibilism is a merely verbal solution.",
          "Uses the Priya and Sanjay contrast to identify which kind of freedom ordinary people care about.",
          "Reaches a reasoned verdict, considering at least one point against it.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how someone could believe both that every action is determined and that people sometimes act freely.",

  glimpse: (
    <p>
      Why do we care about free will at all? Largely because of blame and praise. The next lesson asks what moral
      responsibility requires, and meets a famous case that seems to show that the ability to do otherwise is not one of the
      requirements. Hume&rsquo;s account of causation, which underlies his compatibilism, is studied in Early Modern
      Philosophy, and Frankfurt cases return in Metaphysics.
    </p>
  ),
};
