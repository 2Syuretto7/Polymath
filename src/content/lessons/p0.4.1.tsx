import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.4.1",
  minutes: 60,
  links: {
    revisits: ["p0.1.2"],
    foreshadows: ["p1.6.1", "p4.3.3", "p12.5.2", "p13.5.3"],
  },

  puzzle: (
    <>
      <p>
        Aristotle taught that heavier bodies fall faster than lighter ones, and for nearly two thousand years most people
        agreed. Galileo, in his <cite>Two New Sciences</cite> (1638), refuted the view with an argument that needs no
        experiment at all. Suppose a heavy stone falls faster than a light one. Now tie them together.
      </p>
      <p>How fast should the pair fall? Think it through before reading on. What has gone wrong?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        On Aristotle&rsquo;s view the answer is two things at once. The light stone, being slower, should hold the heavy one
        back, so the pair falls <em>slower</em> than the heavy stone alone. But the pair is heavier than the heavy stone, so
        it should fall <em>faster</em>. A view that predicts both cannot be right. Without dropping anything, Galileo showed
        that weight cannot be what fixes the speed of falling.
      </p>
      <p>
        That is a <strong>thought experiment</strong>: an imagined situation, described carefully, used to test a claim. It
        is philosophy&rsquo;s laboratory. We cannot run experiments on justice or knowledge, but we can imagine cases, ask
        what we would say about them, and see whether a theory agrees.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="thought experiment">
        <p>
          A <strong>thought experiment</strong> describes a possible situation and asks a question about it, so that our
          answer, the <strong>intuition</strong> the case provokes, can be used as evidence for or against a claim.
        </p>
      </Definition>

      <p>Thought experiments do several different jobs:</p>
      <ul>
        <li><strong>Refuting.</strong> The case shows that a theory has a consequence that cannot be right, as with Galileo.</li>
        <li><strong>Isolating.</strong> The case removes everything except the one factor in question, which real life never does.</li>
        <li><strong>Illustrating.</strong> The case makes an abstract claim vivid enough to grasp and to argue about.</li>
      </ul>

      <Example title="the ring of Gyges">
        <p>
          In Book 2 of Plato&rsquo;s <cite>Republic</cite>, Glaucon tells of a shepherd, Gyges, who finds a ring that makes
          him invisible. Using it, he seduces the queen, kills the king and takes the throne. Glaucon&rsquo;s challenge:
          give two people such rings, one just and one unjust, and they would soon behave alike. If so, people are just only
          because they fear being caught. The case <em>isolates</em> the question &ldquo;is justice worth having for its own
          sake?&rdquo; by removing every outside reward and punishment. The rest of the <cite>Republic</cite> is
          Socrates&rsquo;s attempt to answer it.
        </p>
      </Example>

      <Example title="the runaway tram">
        <p>
          A runaway tram will kill five people unless you pull a lever that diverts it onto a side track, where it will kill
          one. Most people say you may pull it. But most also say you may not push a large stranger off a bridge to stop the
          tram, though the numbers are the same. The first version is due to Philippa Foot (1967); the pairing was developed
          by Judith Jarvis Thomson, who named it the trolley problem. Whatever explains the difference between the cases,
          it cannot be the count of lives alone, which is a problem for any theory that looks only at outcomes.
        </p>
      </Example>

      <p>How to use a thought experiment well:</p>
      <ol>
        <li><strong>State the target.</strong> Which claim is being tested, and what would the case show if our answer is right?</li>
        <li><strong>Specify the case.</strong> Fill in every detail the verdict depends on. An underdescribed case lets each reader imagine a different one.</li>
        <li><strong>Report the intuition honestly.</strong> Say what you would really judge, and notice if others disagree.</li>
        <li><strong>Draw only the conclusion the case supports.</strong> One case can refute a universal claim; it rarely proves one.</li>
      </ol>

      <Remark title="can we trust intuitions?">
        <p>
          Thought experiments rest on our reactions to imagined cases, and those reactions can be distorted by how a case is
          worded, by its vividness, and by our culture. Some philosophers have surveyed ordinary people&rsquo;s reactions and
          found differences that a careful theory must explain. So treat an intuition as evidence, not proof: weighty when it
          is stable, widely shared and survives reflection, weaker when it shifts with irrelevant details. And notice when a
          case is so strange, such as perfect invisibility or exact duplication, that our everyday judgements may not apply.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "galileo",
      rung: "check",
      prompt: <p>What does Galileo&rsquo;s thought experiment show about Aristotle&rsquo;s view?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is contradicted by measurements of falling stones.",
          "It predicts that the tied pair falls both faster and slower than the heavy stone, so it cannot be right.",
          "It is true for heavy stones but not for light ones.",
          "It is true only in a vacuum.",
        ],
        correct: [1],
      },
    },
    {
      key: "job",
      rung: "check",
      prompt: <p>The ring of Gyges removes every outside reward and punishment for being just. Which job is it mainly doing?</p>,
      answer: { kind: "choice", options: ["refuting", "isolating", "illustrating", "counting"], correct: [1] },
    },
    {
      key: "underdescribed",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;Imagine a machine that perfectly copies you. Is the copy you?&rdquo; Select every detail that a careful
          version of this case should specify.
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "whether the original survives the copying",
          "the colour of the machine",
          "whether the copy has all your memories",
          "whether one or many copies are made",
        ],
        correct: [0, 2, 3],
      },
    },
    {
      key: "tram",
      rung: "apply",
      prompt: <p>If pulling the lever is allowed but pushing the stranger is not, what follows?</p>,
      answer: {
        kind: "choice",
        options: [
          "Numbers of lives never matter morally.",
          "Something other than the number of lives saved must make a moral difference.",
          "The thought experiment is useless, since the answers differ.",
          "Pushing is allowed after all.",
        ],
        correct: [1],
      },
    },
    {
      key: "trust",
      rung: "apply",
      prompt: <p>Select every feature that makes an intuition about a case <strong>more</strong> trustworthy as evidence.</p>,
      answer: {
        kind: "choice",
        options: [
          "It stays the same when the case is reworded.",
          "It is shared by people from different backgrounds.",
          "It appears only when the case is described vividly.",
          "It survives careful reflection.",
        ],
        correct: [0, 1, 3],
      },
    },
    {
      key: "build",
      rung: "prove",
      prompt: (
        <p>
          Design a thought experiment to test the claim &ldquo;An action is wrong only if it harms someone.&rdquo; Describe
          the case precisely, say what most people would judge, and say what follows for the claim.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Describes a specific case in which no one is harmed, such as a broken promise to someone who has died or a secret betrayal.",
          "Specifies the details that the verdict depends on.",
          "States a plausible intuitive verdict.",
          "Draws the right conclusion: if the act seems wrong, the claim faces a counterexample.",
        ],
      },
    },
    {
      key: "galileo-twin",
      rung: "stretch",
      prompt: (
        <p>
          Galileo&rsquo;s argument assumes that tying a slower stone to a faster one slows the faster one down. Could a
          defender of Aristotle reject that assumption? Say how, and whether the reply works.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies the assumption that the slower body retards the faster one, or that the tied pair is a single heavier body.",
          "Proposes a reply, such as that the tied pair counts as one body, or that tying changes what the stones are.",
          "Assesses the reply, for instance noting that a thin string should not make so great a difference to a physical law.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a thought experiment is, using Galileo's tied stones, and say why philosophers use them so often.",

  glimpse: (
    <p>
      Next, counterexamples: the single case that refutes a general claim. The ring of Gyges returns in Introduction to
      Philosophy with the question of why be moral, and in full with the <cite>Republic</cite>. Thought experiments drive the
      knowledge argument in Philosophy of Mind and the trolley problems of Applied Ethics.
    </p>
  ),
};
