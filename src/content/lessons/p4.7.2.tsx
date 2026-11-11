import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { IndemonstrablesViz } from "@/components/viz/IndemonstrablesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.7.2",
  minutes: 85,
  links: {
    revisits: ["p4.5.2", "p2.2.3", "p4.1.2"],
    foreshadows: ["p4.7.3", "p2.3.2", "p26.3.4"],
  },

  puzzle: (
    <>
      <p>
        Aristotle&rsquo;s logic is about terms: all men are mortal, some animals are not dogs. But much of our reasoning is
        about whole statements: if it is day, it is light; it is not light; so it is not day. No syllogism captures that.
        The Stoics built a logic of statements, and argued so fiercely about what &ldquo;if&rdquo; means that a poet joked
        even the crows on the rooftops were debating it. And their physics raised a question we still ask: if everything is
        fated, how can anything be up to us?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose an argument form. The table checks every combination of truth values for the first and the second, reading
        &ldquo;if&rdquo; in Philo&rsquo;s way. An argument is valid when no row makes the premises true and the conclusion
        false.
      </p>
      <IndemonstrablesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Stoic system">
        <p>
          The Stoa was founded by Zeno of Citium around 300 BCE, in the painted porch, the <em>stoa poikilê</em>, at Athens.
          Its third head, Chrysippus, wrote over seven hundred books, none surviving whole; the ancients said that without
          Chrysippus there would be no Stoa. The Stoics divided philosophy into three parts, and compared it to a field:
          logic is the wall, physics the soil and trees, and ethics the fruit.
        </p>
      </Definition>

      <Definition title="propositions and the indemonstrables">
        <p>
          The basic unit of Stoic logic is the proposition, <em>axiôma</em>: what is said by a complete declarative
          sentence, true or false. It is a <em>lekton</em>, a sayable, the meaning rather than the sounds or the thing. From
          simple propositions, connectives build complex ones: the conditional, the conjunction and the disjunction, which
          for the Stoics was exclusive. Chrysippus took five argument forms as basic and needing no proof, the
          indemonstrables, writing them with ordinal numbers as variables: if the first, the second; the first; therefore
          the second. Other valid arguments were reduced to these by rules called <em>themata</em>.
        </p>
      </Definition>

      <Example title="what does &ldquo;if&rdquo; mean?">
        <p>
          Philo of Megara said a conditional is false only when it begins with a truth and ends with a falsehood, which is
          today&rsquo;s material conditional. So &ldquo;if it is night, I am talking&rdquo; is true whenever it is day.
          Diodorus Cronus required more: a conditional is true if it neither was nor is possible for it to start with a
          truth and end with a falsehood. Chrysippus required a connection: the conditional is true when the denial of the
          second conflicts with the first. Sextus Empiricus reports Callimachus&rsquo; joke about the crows in this
          context. The debate continues in the logic of conditionals today.
        </p>
      </Example>

      <Definition title="physics: body, god and fate">
        <p>
          Only bodies exist, since only bodies can act or be acted on; void, place, time and sayables merely subsist. The
          world has two principles: passive matter, and an active principle, called god, reason (<em>logos</em>), or
          breath (<em>pneuma</em>), which pervades matter and shapes it from within. Everything happens by fate, an
          unbroken chain of causes, which is also providence, the rational ordering of the whole. The world periodically
          ends in fire and begins again, exactly the same.
        </p>
      </Definition>

      <Remark title="the cylinder and the dog">
        <p>
          If everything is fated, critics asked, why do anything? This was called the lazy argument. Chrysippus replied
          that some outcomes are co-fated with our actions: it is fated that you recover if, and only if, you call the
          doctor. He also used the image of a cylinder. Someone must push it to start it rolling, but it rolls in its own
          way because of its own shape. In the same way, events strike us, but how we respond depends on our own character,
          and that is what makes it ours. A later image, attributed to Zeno and Chrysippus, compares us to a dog tied to a
          cart: it can follow willingly, or be dragged, but it goes either way. This is an early form of compatibilism.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "unit",
      rung: "check",
      prompt: <p>What is the basic unit of Stoic logic, in contrast with Aristotle&rsquo;s?</p>,
      answer: {
        kind: "choice",
        options: ["The term, such as 'man' or 'mortal'.", "The proposition, a complete statement that is true or false.", "The syllogism.", "The definition."],
        correct: [1],
      },
    },
    {
      key: "which",
      rung: "check",
      prompt: (
        <p>
          &ldquo;If it is day, it is light. It is day. Therefore it is light.&rdquo; Which of Chrysippus&rsquo;
          indemonstrables is this? Give its number.
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "third",
      rung: "apply",
      prompt: (
        <p>
          Not both: Dion is walking and Dion is sitting. Dion is walking. What follows by the third indemonstrable?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["Dion is sitting.", "Dion is not sitting.", "Dion is not walking.", "Nothing follows."],
        correct: [1],
      },
    },
    {
      key: "philo",
      rung: "apply",
      prompt: (
        <p>
          On Philo&rsquo;s account, in how many of the four combinations of truth values for its two parts is a conditional
          true?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "counter",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;If it is day, it is light. It is light. Therefore it is day.&rdquo; Which situation shows that this
          argument is invalid?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["It is day and it is light.", "It is day and it is not light.", "It is not day and it is light.", "It is not day and it is not light."],
        correct: [2],
      },
    },
    {
      key: "tables",
      rung: "prove",
      prompt: (
        <p>
          Use truth tables, reading the conditional as Philo did, to show that the second indemonstrable is valid and that
          affirming the consequent is not. Explain in words what the tables show.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Sets out the four rows for the second indemonstrable and shows the only row with both premises true, first false and second false, has the conclusion true.",
          "Sets out the table for affirming the consequent and identifies the row where the first is false and the second true as a counterexample.",
          "Explains that validity means no row makes the premises true and the conclusion false. Small slips in the tables do not matter if the idea is clear.",
        ],
      },
    },
    {
      key: "cylinder",
      rung: "stretch",
      prompt: (
        <p>
          Does Chrysippus&rsquo; cylinder show that we can be responsible for actions that were fated? Explain the analogy,
          and consider whether our characters, like the cylinder&rsquo;s shape, were themselves fated.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the analogy: the push is the external cause, the rolling depends on the cylinder's own shape, as our response depends on our character.",
          "Raises the worry that our character was shaped by earlier causes too, so the response is still fated, and considers a Stoic reply.",
          "Reaches a reasoned verdict, possibly connecting this to modern compatibilism. Any thoughtful position earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how Stoic logic differs from Aristotle's, what the five indemonstrables are, the ancient debate over what 'if' means, and how Chrysippus tried to reconcile fate with responsibility.",

  glimpse: (
    <p>
      The next lesson shows what the Stoics built on this foundation: an ethics in which only virtue is good. Logic I
      develops the logic of propositions in full, and Modal Logic returns to the meaning of conditionals.
    </p>
  ),
};
