import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DeferralChainViz } from "@/components/viz/DeferralChainViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p34.3.3",
  minutes: 90,
  links: {
    revisits: ["p34.3.1", "p34.1.1", "p19.2.2"],
    foreshadows: ["p34.3.4", "p35.1.1", "p35.1.2"],
  },

  puzzle: (
    <>
      <p>
        Look up a word in a dictionary, and you find other words. Look those up, and you find more. You never reach
        something that is not a word, a meaning simply present without further signs. If that is true of language as a
        whole, what becomes of the old philosophical hope of grounding everything in what is immediately present to the
        mind?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Follow the definitions from &ldquo;meaning&rdquo;, and see where the trail leads.</p>
      <DeferralChainViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the metaphysics of presence">
        <p>
          Jacques Derrida, in <em>Of Grammatology</em> (1967) and other works, argued that Western philosophy has been a{" "}
          <strong>metaphysics of presence</strong>: it privileges what is fully present, such as being, consciousness,
          origin or meaning, over what seems derivative, absent or merely represented. This shows in hierarchical{" "}
          <strong>binary oppositions</strong> such as speech and writing, presence and absence, nature and culture, the
          literal and the metaphorical, in which the first term is treated as primary and pure.
        </p>
      </Definition>

      <Definition title="différance">
        <p>
          Building on Saussure, Derrida coined <strong>différance</strong>, spelt with an a that can be read but not heard
          in French, for the way signs mean both by <em>differing</em> from other signs and by <em>deferring</em> any final
          meaning along an endless chain. Every sign carries the <strong>trace</strong> of the others it is not. So there
          is no transcendental signified, no meaning that is present to itself outside the play of signs.
        </p>
      </Definition>

      <Example title="speech and writing">
        <p>
          Plato in the <em>Phaedrus</em>, Rousseau and Saussure all treat writing as a mere supplement to speech, a
          dangerous copy that lacks the living presence of the speaker. Derrida shows that their own texts depend on
          features they ascribe to writing: repeatability, absence of the author, a gap between sign and meaning. The
          supposedly secondary term turns out to be a condition of the first. <strong>Deconstruction</strong> is this
          patient reading that reverses a hierarchy and then displaces the opposition itself.
        </p>
      </Example>

      <Remark title="reception">
        <p>
          Deconstruction transformed literary studies and influenced law, architecture and political theory. Critics such as
          John Searle, in a sharp exchange with Derrida over speech-act theory, accused it of obscurity and of denying that
          texts have determinate meanings. Derrida replied that he never claimed &ldquo;anything goes&rdquo;: deconstruction
          demands the most rigorous close reading, and his later work turned explicitly to justice, hospitality and
          responsibility.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pres",
      rung: "check",
      prompt: <p>What does Derrida mean by the metaphysics of presence?</p>,
      answer: { kind: "choice", options: ["Philosophy’s privileging of what is fully present over what is derivative or absent", "The belief that only the present moment exists", "A theory of gifts", "A defence of speech over silence in ethics"], correct: [0] },
    },
    {
      key: "diff",
      rung: "check",
      prompt: <p>What two senses does différance combine?</p>,
      answer: { kind: "choice", options: ["Differing and deferring", "Defining and denying", "Doubting and deciding", "Dividing and deriving"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, start from &ldquo;meaning&rdquo; and always take the first link. After how many steps are you back at &ldquo;meaning&rdquo;?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "write",
      rung: "apply",
      prompt: <p>What does Derrida argue about the opposition between speech and writing?</p>,
      answer: { kind: "choice", options: ["Features ascribed to writing turn out to be conditions of speech too", "Speech is always superior", "Writing should be abolished", "The two are unrelated"], correct: [0] },
    },
    {
      key: "decon",
      rung: "apply",
      prompt: <p>Which describes a deconstructive reading?</p>,
      answer: { kind: "choice", options: ["A close reading that reverses a hierarchical opposition in a text and then displaces it", "A summary of the author’s intentions", "A demolition of the text’s argument by counterexample", "A historical account of the text’s reception"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the endless chain of signs mean that texts have no determinate meaning? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Derrida’s view of différance fairly.",
          "Considers an objection, such as Searle’s.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Pick a familiar opposition, such as reason and emotion, and ask whether its &ldquo;lesser&rdquo; term is really secondary.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies an opposition and which term is usually privileged.",
          "Suggests how the privileged term may depend on the other.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Derrida reads the tradition from within. A friend of Foucault&rsquo;s built a philosophy of his own from its
        outsiders, Spinoza, Hume and Nietzsche, in which difference comes before identity.
      </p>
      <p>Next, Deleuze.</p>
    </>
  ),
};
