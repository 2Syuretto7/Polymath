import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DispositionViz } from "@/components/viz/DispositionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p12.2.1",
  minutes: 80,
  links: {
    revisits: ["p12.1.1", "p1.2.2", "p12.1.2"],
    foreshadows: ["p12.2.2", "p12.3.1", "p15.6.3"],
  },

  puzzle: (
    <>
      <p>
        We learn what &ldquo;angry&rdquo; or &ldquo;wants tea&rdquo; means by watching people: their scowls, their reaching for
        the kettle. We never see a mind directly. So perhaps talk of minds is really talk of behaviour, and the &ldquo;inner
        theatre&rdquo; of the dualist is a philosopher&rsquo;s invention. Can every sentence about the mind be translated into
        sentences about what people do?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Try the behaviourist translation of a belief, and see what happens when Ravi&rsquo;s other mental states change.</p>
      <DispositionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="logical behaviourism">
        <p>
          <strong>Logical behaviourism</strong> holds that statements about mental states mean the same as statements about
          behaviour and dispositions to behave. Carl Hempel proposed translating them into physical test sentences; Gilbert
          Ryle analysed mental concepts as dispositions, like the brittleness of glass, which is not a hidden inner state but
          the fact that it would shatter if struck.
        </p>
      </Definition>

      <Example title="Ryle's category mistake">
        <p>
          A visitor to Oxford is shown the colleges, libraries and laboratories, and then asks: &ldquo;But where is the
          university?&rdquo; The visitor has mistaken the university for one more building, when it is the way the buildings
          are organised. Ryle said Descartes made the same mistake, treating the mind as one more thing, a &ldquo;ghost in the
          machine&rdquo;, when it is the organisation of a person&rsquo;s behaviour.
        </p>
      </Example>

      <Remark title="the circularity objection">
        <p>
          A belief leads to behaviour only together with desires, and a desire only together with beliefs. Any behavioural
          translation of one mental state must mention others, so the analysis never reaches pure behaviour. Mental states
          come as a whole system, not one by one.
        </p>
      </Remark>

      <Remark title="pretenders and super-Spartans">
        <p>
          A perfect actor can behave exactly as if in pain without feeling it. Hilary Putnam imagined super-Spartans, who feel
          pain but have trained themselves never to show it, even in their dispositions. If such cases are possible, pain is
          neither necessary nor sufficient for pain behaviour. And the old joke makes the point: two behaviourists make love,
          and one says to the other, &ldquo;That was good for you. How was it for me?&rdquo;
        </p>
      </Remark>

      <Remark title="what survives">
        <p>
          Behaviourism was right that mental concepts are tied to behaviour, and that we learn them publicly; Wittgenstein&rsquo;s
          private language argument develops a related point. Functionalism keeps the link to behaviour but lets inner states
          cause it, and lets mental states be defined together.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does logical behaviourism claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Mental states are brain states.",
          "Statements about mental states mean the same as statements about behaviour and dispositions to behave.",
          "Behaviour is caused by an immaterial mind.",
          "Psychology should ignore behaviour.",
        ],
        correct: [1],
      },
    },
    {
      key: "cat",
      rung: "check",
      prompt: <p>In Ryle&rsquo;s example, what mistake does the visitor make?</p>,
      answer: {
        kind: "choice",
        options: [
          "Going to the wrong city.",
          "Treating the university as one more building alongside the colleges, rather than their organisation.",
          "Thinking colleges are buildings.",
          "Doubting that Oxford exists.",
        ],
        correct: [1],
      },
    },
    {
      key: "circ",
      rung: "apply",
      prompt: <p>Why does the circularity objection threaten behaviourism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because behaviour is circular motion.",
          "Because a mental state produces behaviour only together with other mental states, so translations must mention them.",
          "Because beliefs are always false.",
          "Because animals have no beliefs.",
        ],
        correct: [1],
      },
    },
    {
      key: "spartan",
      rung: "apply",
      prompt: <p>What do super-Spartans show, if they are possible?</p>,
      answer: {
        kind: "choice",
        options: [
          "That pain is not sufficient for pain behaviour, or for dispositions to it.",
          "That everyone is in pain.",
          "That pain causes behaviour.",
          "That dualism is false.",
        ],
        correct: [0],
      },
    },
    {
      key: "brittle",
      rung: "apply",
      prompt: <p>Why does Ryle compare mental states to the brittleness of glass?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because minds break easily.",
          "Because brittleness is a disposition, what the glass would do if struck, not a hidden inner thing.",
          "Because glass is transparent like the mind.",
          "Because both are physical substances.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is the circularity objection fatal to logical behaviourism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the behaviourist claim and the circularity objection.",
          "Considers a reply, for example defining all mental states together, and whether that is still behaviourism.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "learn",
      rung: "stretch",
      prompt: <p>We learn mental words by watching behaviour. Does it follow that they mean something about behaviour?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes how a word is learnt from what it refers to, perhaps with an example such as ‘water’.",
          "Considers what the behaviourist gets right about public criteria.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend logical behaviourism and Ryle’s idea of mental states as dispositions, the category mistake and the ghost in the machine, the circularity objection, the pretender and super-Spartan cases, and what functionalism keeps from behaviourism.",

  glimpse: (
    <p>
      The next lesson looks inside the head: the identity theory says mental states are brain states. Functionalism later
      combines the behaviourist&rsquo;s focus on behaviour with inner causes.
    </p>
  ),
};
