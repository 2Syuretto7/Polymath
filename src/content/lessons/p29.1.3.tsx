import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { GenQuantifierViz } from "@/components/viz/GenQuantifierViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p29.1.3",
  minutes: 90,
  links: {
    revisits: ["p29.1.2", "p29.1.1", "p15.1.2"],
    foreshadows: ["p29.3.1", "p29.2.2", "p29.4.1"],
  },

  puzzle: (
    <>
      <p>
        First-order logic gives us &lsquo;every&rsquo; and &lsquo;some&rsquo;, and from them &lsquo;no&rsquo;,
        &lsquo;at least three&rsquo; and &lsquo;exactly two&rsquo;. Yet &lsquo;most students passed&rsquo; cannot be said
        in first-order logic at all. If ordinary determiners outrun the logic built to capture them, what do they mean?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set how many things lie in A and B, in A only and in B only, and see which determiners come out true.</p>
      <GenQuantifierViz />
    </>
  ),

  theory: (
    <>
      <Definition title="determiners as relations">
        <p>
          Following Mostowski, Lindström and then Barwise and Cooper (1981), a determiner denotes a relation between two
          sets: the restrictor A, given by the noun, and the scope B, given by the rest of the sentence. &lsquo;Every A is
          B&rsquo; holds when A is a subset of B; &lsquo;some&rsquo; when A and B overlap; &lsquo;most&rsquo; when more of A
          is in B than outside it. A noun phrase such as &lsquo;most students&rsquo; is then a set of sets, matching the
          type ⟨⟨e, t⟩, t⟩ from type theory.
        </p>
      </Definition>

      <Definition title="conservativity">
        <p>
          A determiner D is <strong>conservative</strong> if D(A, B) holds exactly when D(A, A ∩ B) does: &lsquo;most
          students passed&rsquo; says the same as &lsquo;most students are students who passed&rsquo;. Keenan and Stavi
          proposed that every determiner in every natural language is conservative, though most logically possible
          relations between sets are not.
        </p>
      </Definition>

      <Remark title="counting">
        <p>
          If a determiner is also topic-neutral, so that only the sizes of the sets matter, and its meaning does not change
          when the universe grows, then its truth depends on just two numbers, |A ∩ B| and |A − B|. Van Benthem drew the
          resulting number triangle, on which each determiner is a pattern of true and false cells.
        </p>
      </Remark>

      <Example title="monotonicity and ‘ever’">
        <p>
          &lsquo;Some&rsquo; is upward monotone in its scope: &lsquo;some student smokes cigars&rsquo; entails &lsquo;some
          student smokes&rsquo;. &lsquo;No&rsquo; is downward monotone: &lsquo;no student smokes&rsquo; entails &lsquo;no
          student smokes cigars&rsquo;. Ladusaw observed that negative polarity words such as &lsquo;ever&rsquo; and
          &lsquo;any&rsquo; appear in downward monotone positions: &lsquo;no student has ever been to Leh&rsquo; is fine,
          &lsquo;some student has ever been to Leh&rsquo; is not.
        </p>
      </Example>

      <Remark title="beyond first-order logic">
        <p>
          Barwise and Cooper proved that &lsquo;most&rsquo; cannot be defined in first-order logic, even over finite
          domains. Natural language thus contains quantifiers beyond the reach of Frege&rsquo;s logic, yet they are
          tightly constrained by conservativity and monotonicity.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cons",
      rung: "check",
      prompt: <p>What does it mean for a determiner D to be conservative?</p>,
      answer: { kind: "choice", options: ["D(A, B) holds exactly when D(A, A ∩ B) holds", "D(A, B) holds exactly when D(B, A) holds", "D is definable in first-order logic", "D is upward monotone"], correct: [0] },
    },
    {
      key: "only",
      rung: "check",
      prompt: <p>Which of these fails conservativity?</p>,
      answer: { kind: "choice", options: ["Only", "Every", "Most", "Exactly two"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set &lsquo;in A and B&rsquo; to 3. What is the smallest number &lsquo;in A only&rsquo; that makes &lsquo;most As are B&rsquo; false?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "mono",
      rung: "apply",
      prompt: <p>&lsquo;Every student smokes cigars&rsquo; entails &lsquo;every student smokes&rsquo;. What does this show about &lsquo;every&rsquo;?</p>,
      answer: { kind: "choice", options: ["It is upward monotone in its scope", "It is downward monotone in its scope", "It is not conservative", "It is not first-order definable"], correct: [0] },
    },
    {
      key: "npi",
      rung: "apply",
      prompt: <p>Which sentence is acceptable?</p>,
      answer: { kind: "choice", options: ["No student has ever been to Leh.", "Some student has ever been to Leh.", "Most students have ever been to Leh.", "Exactly two students have ever been to Leh."], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is conservativity a fact about logic or a fact about human language? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States conservativity correctly.",
          "Notes that many relations between sets, such as ‘A has more members than B’, are not conservative, or offers another consideration.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Since &lsquo;most&rsquo; is not first-order definable, should semantics abandon first-order logic as its framework?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the result that ‘most’ outruns first-order logic.",
          "Considers a reply, such as moving to generalised quantifiers or higher-order logic, or keeping first-order logic for its good properties.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Formal semantics treats meanings as functions on possible worlds. Kripke showed that this picture forces a surprising
        split between what could not have been otherwise and what can be known without looking.
      </p>
      <p>Next, the necessary a posteriori.</p>
    </>
  ),
};
