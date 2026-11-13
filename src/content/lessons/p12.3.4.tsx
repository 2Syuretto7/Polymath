import { Definition, Remark } from "@/components/lesson/Blocks";
import { SymbolInferenceViz } from "@/components/viz/SymbolInferenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.3.4",
  minutes: 80,
  links: {
    revisits: ["p12.3.3", "p12.3.1", "p2.1.1"],
    foreshadows: ["p12.6.1", "p12.6.3", "p17.3.3"],
  },

  puzzle: (
    <>
      <p>
        Your beliefs are about the world, and you reason from them to new beliefs that are usually true. A calculator does
        something similar with numbers, yet it is just electricity moving through circuits. How can a physical process respect
        meaning, moving from true thoughts to true thoughts, when physics knows nothing about meaning?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Store some strings in the machine and watch it infer new ones, purely by matching shapes.</p>
      <SymbolInferenceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the computational theory of mind">
        <p>
          The <strong>computational theory of mind</strong> holds that thinking is computation: mental processes are
          operations on mental representations, carried out according to their form. Jerry Fodor&rsquo;s version adds a{" "}
          <strong>language of thought</strong>: representations have a combinatorial syntax and semantics, like sentences, and
          believing that p is having a sentence meaning p stored in a functional &ldquo;belief box&rdquo;.
        </p>
      </Definition>

      <Remark title="how form tracks meaning">
        <p>
          Logic shows that some rules, such as modus ponens, can be stated purely in terms of form, yet always preserve truth.
          Turing showed that a machine can follow such rules mechanically. Put together, a physical system can make
          truth-preserving inferences without understanding anything: if the symbols mean the right things, the causal
          processes respect their meanings. Fodor called this the only serious explanation of rational thought we have.
        </p>
      </Remark>

      <Remark title="productivity and systematicity">
        <p>
          We can think indefinitely many new thoughts, and anyone who can think &ldquo;Ravi loves Priya&rdquo; can think
          &ldquo;Priya loves Ravi&rdquo;. Fodor and Pylyshyn argued that this is explained if thoughts are built from reusable
          parts by rules, as sentences are, and they challenged connectionist networks, which store information in patterns
          of weights, to explain it equally well.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Searle&rsquo;s Chinese room says syntax does not give semantics, so the theory needs a separate account of how
          symbols get their meaning. Connectionists and modern deep learning suggest that intelligent behaviour can arise
          without explicit symbols and rules. And Fodor himself worried about the <em>frame problem</em>: deciding which of
          everything you believe is relevant seems to depend on the whole system, not on local form.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does the computational theory of mind claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Minds are made of silicon.",
          "Thinking is computation: operations on representations according to their form.",
          "Computers have souls.",
          "The mind is a list of facts.",
        ],
        correct: [1],
      },
    },
    {
      key: "lot",
      rung: "check",
      prompt: <p>What is the language of thought?</p>,
      answer: {
        kind: "choice",
        options: [
          "The language you speak at home.",
          "A system of mental representations with a combinatorial syntax and semantics.",
          "Body language.",
          "A programming language.",
        ],
        correct: [1],
      },
    },
    {
      key: "form",
      rung: "apply",
      prompt: <p>Why does the inference engine never derive a false string from true ones?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it knows what the strings mean.",
          "Because its rules, though applied by form alone, are truth-preserving.",
          "Because it checks with the world.",
          "Because it only stores true strings.",
        ],
        correct: [1],
      },
    },
    {
      key: "syst",
      rung: "apply",
      prompt: <p>What is systematicity?</p>,
      answer: {
        kind: "choice",
        options: [
          "Thinking in an orderly way.",
          "The ability to think certain thoughts goes with the ability to think related ones, such as ‘Ravi loves Priya’ and ‘Priya loves Ravi’.",
          "Always reaching the same conclusion.",
          "Following a system of laws.",
        ],
        correct: [1],
      },
    },
    {
      key: "frame",
      rung: "apply",
      prompt: <p>What is the frame problem, as Fodor saw it?</p>,
      answer: {
        kind: "choice",
        options: [
          "Pictures need frames.",
          "Deciding which beliefs are relevant seems to depend on the whole system, not on the local form of symbols.",
          "Computers cannot see.",
          "Thoughts have no structure.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the computational theory explain how thinking can be both physical and rational? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States how formal rules and machines combine to give truth-preserving physical processes.",
          "Considers an objection, such as the Chinese room or the frame problem.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "nets",
      rung: "stretch",
      prompt: <p>Neural networks learn without explicit rules. Does their success count against the language of thought?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes the contrast between symbolic rules and learnt weights.",
          "Considers systematicity, or whether networks implement symbols at a higher level.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the computational theory of mind and the language of thought, how rules that work on form can preserve truth, productivity and systematicity, and the objections from the Chinese room, connectionism and the frame problem.",

  glimpse: (
    <p>
      The next chapter asks how mental states can cause anything. Later, lessons on mental content ask how the symbols get their
      meaning, which the computational theory leaves open.
    </p>
  ),
};
