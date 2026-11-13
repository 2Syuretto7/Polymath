import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ConsentTestViz } from "@/components/viz/ConsentTestViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p13.1.2",
  minutes: 80,
  links: {
    revisits: ["p5.3.1", "p8.5.2", "p13.1.1"],
    foreshadows: ["p13.1.3", "p14.2.1", "p13.4.3"],
  },

  puzzle: (
    <>
      <p>
        You use a shopkeeper to get rice and an autorickshaw driver to get home. Kant said we must never treat people merely as
        means. What is the difference between using someone, which we do all day, and using them merely as a means?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test each case: could the other person consent to how they are treated?</p>
      <ConsentTestViz />
    </>
  ),

  theory: (
    <>
      <Definition title="contemporary Kantian ethics">
        <p>
          Kantian ethicists today develop Kant&rsquo;s idea that morality rests on the authority of reason and on respect for
          persons as free, rational agents, while revising his own conclusions where they seem mistaken, for example about
          lying to a murderer at the door.
        </p>
      </Definition>

      <Example title="O’Neill on consent">
        <p>
          Onora O&rsquo;Neill reads the formula of humanity as forbidding acts to which others <em>cannot possibly</em>{" "}
          consent, not acts they happen not to consent to. Deception and coercion are the central wrongs, since they bypass or
          override another&rsquo;s agency. She also reads the formula of universal law as a test of whether a principle could
          be adopted by all, not just a logical puzzle.
        </p>
      </Example>

      <Example title="Korsgaard on value">
        <p>
          Christine Korsgaard argues, in <em>The Sources of Normativity</em> (1996), that whenever we act we treat our own
          humanity, our capacity to set ends, as a source of value. Consistency then requires valuing humanity in everyone.
          Moral obligation comes from our practical identity as reflective agents, not from outside.
        </p>
      </Example>

      <Remark title="Rawls and Kantian constructivism">
        <p>
          John Rawls built a Kantian theory of justice, modelling free and equal persons in the original position. Barbara
          Herman stressed the role of judgement: rules of moral salience let a good agent notice which features of a situation
          matter, answering the charge that Kantian ethics is a mechanical procedure.
        </p>
      </Remark>

      <Remark title="objections">
        <p>
          Critics argue that the theory struggles with those who lack rational agency, such as infants and animals, and with
          conflicts between duties. Some Kantians reply by grounding duties to animals in our own humanity, as Korsgaard does
          in <em>Fellow Creatures</em> (2018).
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mere",
      rung: "check",
      prompt: <p>Which act treats someone merely as a means, on O&rsquo;Neill&rsquo;s reading?</p>,
      answer: { kind: "choice", options: ["Paying a taxi driver", "Making a lying promise", "Buying vegetables", "Asking for directions"], correct: [1] },
    },
    {
      key: "possible",
      rung: "check",
      prompt: <p>O&rsquo;Neill&rsquo;s test asks whether others could possibly consent, not whether they actually do. Why?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because deception makes consent impossible, and actual consent can be uninformed or coerced.",
          "Because consent never matters.",
          "Because people always consent.",
          "Because only rulers can consent.",
        ],
        correct: [0],
      },
    },
    {
      key: "korsgaard",
      rung: "apply",
      prompt: <p>What does Korsgaard say we value whenever we act?</p>,
      answer: {
        kind: "choice",
        options: [
          "Our own pleasure",
          "Our humanity, our capacity to set ends",
          "God’s commands",
          "The good of the community",
        ],
        correct: [1],
      },
    },
    {
      key: "herman",
      rung: "apply",
      prompt: <p>What are Barbara Herman&rsquo;s rules of moral salience for?</p>,
      answer: {
        kind: "choice",
        options: [
          "Helping a good agent notice which features of a situation matter morally.",
          "Calculating total welfare.",
          "Ranking virtues.",
          "Writing laws.",
        ],
        correct: [0],
      },
    },
    {
      key: "worker",
      rung: "apply",
      prompt: <p>Why is the case of a desperate worker accepting a pittance hard for a consent-based reading?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the worker actually consents, yet many think they are still wronged.",
          "Because the worker is lying.",
          "Because wages are irrelevant.",
          "Because the employer cannot consent.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is it always wrong to deceive? Argue briefly, from a contemporary Kantian point of view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States why deception bypasses another’s agency.",
          "Considers a hard case, such as the murderer at the door or a surprise party.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a Kantian explain why it is wrong to be cruel to animals?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that animals are not rational agents in Kant’s sense.",
          "Considers Kant’s indirect duty view or Korsgaard’s extension.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between using someone and using them merely as a means, O'Neill's possible consent test, Korsgaard's argument for the value of humanity, and one objection to Kantian ethics.",

  glimpse: (
    <p>
      The next lesson studies Scanlon&rsquo;s contractualism, which grounds morality in principles no one could reasonably
      reject. Rawls&rsquo;s original position applies a Kantian idea to justice, and moral luck tests Kant&rsquo;s focus on
      the will.
    </p>
  ),
};
