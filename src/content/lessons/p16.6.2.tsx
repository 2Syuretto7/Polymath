import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TheoryGraveyardViz } from "@/components/viz/TheoryGraveyardViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.6.2",
  minutes: 80,
  links: {
    revisits: ["p16.6.1", "p16.3.1", "p1.1.3"],
    foreshadows: ["p16.6.3", "p16.6.4", "p16.7.1"],
  },

  puzzle: (
    <>
      <p>
        In 1850 a physicist could point to the wave theory of light, with its ether, and say: it predicts interference, the
        bright spot at the centre of a shadow and the laws of reflection; surely it is approximately true. Within sixty years
        the ether was gone. We say the same about our theories today. What makes us different from them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move through history and count the successful theories that were later abandoned.</p>
      <TheoryGraveyardViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the pessimistic induction">
        <p>
          Larry Laudan (1981) argued from the history of science. Many past theories were empirically successful, including
          by making novel predictions, yet by our current lights they were false and their central terms referred to nothing:
          phlogiston, caloric, the ether. So success is not a reliable sign of approximate truth. By induction over the
          history of science, our current successful theories are probably false too.
        </p>
      </Definition>

      <Example title="against the no-miracles argument">
        <p>
          The argument works as a counterexample as much as an induction. The no-miracles argument says success would be a
          miracle unless the theory were approximately true. Laudan&rsquo;s list shows the miracle happening again and again:
          success without truth. If those successes did not need truth, why should ours?
        </p>
      </Example>

      <Definition title="realist replies">
        <p>
          <strong>Restrict the base</strong>: count only mature theories that made novel predictions, which shortens the list.
          <strong> Point to progress</strong>: today&rsquo;s theories are far more accurate and better tested, so the past is a
          poor guide. And <strong>divide and conquer</strong>, the reply of Philip Kitcher and Stathis Psillos: the parts of
          past theories that did the work in their successes, such as Fresnel&rsquo;s equations, were retained; only idle
          parts, such as the ether as a material medium, were discarded. Realism should be selective.
        </p>
      </Definition>

      <Remark title="the trouble with selection">
        <p>
          Critics reply that we identify the &ldquo;working parts&rdquo; only with hindsight, by seeing what survived. A
          scientist in 1850 thought the ether was essential. If we cannot pick out the working parts of our own theories now,
          selective realism gives us no guidance about which parts of current science to believe. Kyle Stanford added a
          related worry: scientists repeatedly failed to conceive of the alternative theories that later replaced theirs.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is the conclusion of the pessimistic induction?</p>,
      answer: {
        kind: "choice",
        options: [
          "Our current successful theories are probably false too.",
          "Science never makes progress.",
          "All theories are equally good.",
          "Unobservable things do not exist.",
        ],
        correct: [0],
      },
    },
    {
      key: "laudan",
      rung: "check",
      prompt: <p>Which of these is on Laudan&rsquo;s list of successful but rejected theories?</p>,
      answer: { kind: "choice", options: ["The caloric theory of heat", "Plate tectonics", "The germ theory of disease", "The atomic theory of matter"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, stand in the year 1840. How many of the listed theories are accepted?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "dc",
      rung: "apply",
      prompt: <p>What does the &ldquo;divide and conquer&rdquo; reply claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "The parts of past theories responsible for their success were retained in later theories.",
          "Past theories were never successful.",
          "Only theories after 1900 count.",
          "Every part of a successful theory is true.",
        ],
        correct: [0],
      },
    },
    {
      key: "hind",
      rung: "apply",
      prompt: <p>What is the main objection to selective realism?</p>,
      answer: {
        kind: "choice",
        options: [
          "We can identify the working parts only with hindsight, so it gives no guidance about current theories.",
          "It believes too much.",
          "It ignores observation.",
          "It is the same as constructive empiricism.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the history of science undermine scientific realism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the pessimistic induction with an example such as the ether or caloric.",
          "Considers a realist reply, such as restricting to mature theories, progress, or selective realism.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is there a part of today&rsquo;s physics you would bet will survive any future revolution? What makes you confident?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Names a candidate, such as conservation of energy, the existence of atoms, or a particular equation.",
          "Gives a reason, such as its role in many independent successes or its survival through past changes.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Laudan's pessimistic induction from successful but false theories such as the ether and caloric, how it challenges the no-miracles argument, and the selective realist reply and its difficulties.",

  glimpse: (
    <p>
      Next, van Fraassen&rsquo;s constructive empiricism, which asks only that theories be true about what is observable.
    </p>
  ),
};
