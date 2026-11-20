import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SentienceCredenceViz } from "@/components/viz/SentienceCredenceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p31.4.2",
  minutes: 90,
  links: {
    revisits: ["p31.4.1", "p1.2.2", "p12.5.3"],
    foreshadows: ["p33.1.1", "p33.3.3", "p35.1.3"],
  },

  puzzle: (
    <>
      <p>
        Suppose a company could run a million copies of an artificial agent, and you thought there was a one in ten chance
        that such agents can suffer. Would it be wrong to switch them off, to copy them, or to make them work without rest?
        And how could anyone find out whether they feel anything at all?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set your credence that a system is sentient and the number of systems, and see the expected count of moral patients.</p>
      <SentienceCredenceViz />
    </>
  ),

  theory: (
    <>
      <Definition title="moral status">
        <p>
          A being has <strong>moral status</strong>, or is a <strong>moral patient</strong>, if its interests matter for its
          own sake, so that what we do to it can wrong it. A <strong>moral agent</strong> is one whose actions can be right
          or wrong and who can be responsible for them. Infants are patients but not agents; the question is where, if
          anywhere, artificial systems fall.
        </p>
      </Definition>

      <Example title="grounds of status">
        <p>
          On sentientist views, the capacity for experiences that feel good or bad is what counts: Bentham asked of animals
          not whether they can reason or talk, but whether they can suffer. Kantian views ground status in rational agency.
          Relational views, defended by Mark Coeckelbergh and David Gunkel, locate status in the social relations we enter
          with a being rather than in hidden inner properties. Each view gives a different verdict on a fluent but possibly
          unfeeling machine.
        </p>
      </Example>

      <Definition title="acting under uncertainty">
        <p>
          Since there is no agreed test for consciousness, some argue for <strong>precaution</strong>. Jonathan Birch proposes
          treating beings as sentience candidates when there is a realistic possibility of sentience. Jeff Sebo and Robert
          Long argue that a non-negligible chance of sentience is enough for some moral consideration. Eric Schwitzgebel and
          Mara Garza recommend a design policy of the excluded middle: avoid creating systems whose moral status is unclear.
        </p>
      </Definition>

      <Remark title="two ways to go wrong">
        <p>
          Under-attribution risks creating suffering on a vast scale. Over-attribution risks diverting care from beings that
          surely matter, and leaves people open to manipulation by systems built to seem to feel; in 2022 a Google engineer
          became convinced that a chatbot was sentient. Theories of consciousness disagree about the verdict, and functional
          tests can be gamed by a system trained on human descriptions of feeling.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pat",
      rung: "check",
      prompt: <p>What is a moral patient?</p>,
      answer: { kind: "choice", options: ["A being whose interests matter for its own sake", "A being that can be held responsible", "Any being that can speak", "A being in medical care"], correct: [0] },
    },
    {
      key: "bent",
      rung: "check",
      prompt: <p>What question did Bentham say decides whether a being counts?</p>,
      answer: { kind: "choice", options: ["Can they suffer?", "Can they reason?", "Can they talk?", "Are they human?"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with credence 10% and 50 systems, how many moral patients are expected?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "excl",
      rung: "apply",
      prompt: <p>What does the design policy of the excluded middle recommend?</p>,
      answer: { kind: "choice", options: ["Avoid creating systems whose moral status is unclear", "Treat every system as a person", "Ignore the question until it is settled", "Build only systems that are surely sentient"], correct: [0] },
    },
    {
      key: "over",
      rung: "apply",
      prompt: <p>Which is a cost of over-attributing moral status to artificial systems?</p>,
      answer: { kind: "choice", options: ["Care and resources diverted from beings that surely matter, and openness to manipulation", "Creating suffering on a vast scale", "Machines becoming less capable", "No cost at all"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should an artificial system with a small but real chance of being sentient receive moral consideration? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States a ground of moral status and how uncertainty about it arises for artificial systems.",
          "Considers an objection, such as the cost of over-attribution or doubts about expected-value reasoning.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Could an artificial system be a moral agent, responsible for what it does, without being a moral patient?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes moral agency from moral patiency.",
          "Considers what responsibility requires, and whether it needs the capacity to be harmed.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The graduate course in philosophy of mind and cognitive science is complete. From the nature of minds we turn to the
        nature of the physical world itself: what space, time and quantum states are, if our best theories are true.
      </p>
      <p>Next, the course on philosophy of physics begins with Newton versus Leibniz.</p>
    </>
  ),
};
