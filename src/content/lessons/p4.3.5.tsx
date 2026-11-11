import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DividedLineViz } from "@/components/viz/DividedLineViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.3.5",
  minutes: 80,
  links: {
    revisits: ["p4.3.3", "p4.3.4"],
    foreshadows: ["p4.4.1", "p4.7.5", "p10.5.4"],
  },

  puzzle: (
    <>
      <p>
        Imagine people chained since childhood in an underground cave, facing a wall. Behind them a fire burns, and
        between the fire and their backs, people carry objects whose shadows fall on the wall. The prisoners have never
        seen anything but shadows. They give them names, hold contests in predicting which will come next, and honour
        whoever is best at it.
      </p>
      <p>
        Now one is freed and dragged up into the daylight. What would that be like, and what would happen if they came
        back down to tell the others? Plato says the prisoners are &ldquo;like us&rdquo;. In what way?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Just before the cave, Plato gives a more abstract picture of the same ascent: a line, cut into two unequal parts,
        each cut again in the same ratio. The four segments stand for four states of mind, from looking at reflections
        up to understanding the Forms. Change the ratio and notice something about the middle two.
      </p>
      <DividedLineViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the sun">
        <p>
          Asked what the Good is, Socrates says he can offer only its &ldquo;offspring&rdquo;, an analogy. In the visible
          world, the sun gives light, so that eyes can see and things can be seen, and it also causes things to come to be
          and grow. In the intelligible world, the Form of the Good gives truth to the objects of knowledge and the power of
          knowing to the knower, and it is the source of their being, though the Good itself is &ldquo;beyond being&rdquo;,
          surpassing it in dignity and power.
        </p>
      </Definition>

      <Definition title="the divided line">
        <ul>
          <li><strong>Imaging</strong> (<em>eikasia</em>): taking shadows and reflections for reality.</li>
          <li><strong>Belief</strong> (<em>pistis</em>): trusting the visible things themselves, animals, plants and artefacts.</li>
          <li>
            <strong>Thought</strong> (<em>dianoia</em>): the method of geometers. They use visible diagrams as images of
            what they really study, the square itself and the diagonal itself, and reason down from hypotheses they do
            not justify.
          </li>
          <li>
            <strong>Understanding</strong> (<em>no&ecirc;sis</em>): dialectic, which treats hypotheses as stepping stones,
            rises to an unhypothetical first principle, the Good, and then descends using Forms alone, with no images.
          </li>
        </ul>
        <p>
          The proportions say that each lower segment is to the one above it as image is to original. That the two middle
          segments must come out equal is a consequence Plato never mentions.
        </p>
      </Definition>

      <Example title="the cave">
        <p>
          The freed prisoner, turned towards the fire, is dazzled and in pain, and would rather go back to the shadows.
          Dragged up the steep ascent, he first sees only shadows and reflections in the daylight, then the things
          themselves, then the night sky, and finally the sun, and understands that it governs everything in the visible
          world. Returning to the cave, his eyes are useless in the dark; he loses at the shadow-predicting game, and the
          prisoners laugh at him and say the journey ruined his eyes. If they could, they would kill whoever tried to free
          them, a pointed allusion to Socrates.
        </p>
        <p>
          Socrates tells Glaucon to apply the image to what was said before: the cave to the visible world, the fire to
          the sun, the ascent to the soul&rsquo;s rise to the intelligible, and the sun outside to the Good.
        </p>
      </Example>

      <Remark title="education as turning around">
        <p>
          Education, Socrates says, is not putting knowledge into a soul that lacks it, like putting sight into blind eyes.
          Every soul has the power to learn. Education is the art of <em>turning</em> the whole soul around, from what
          comes to be towards what is. The rest of book 7 sets out the curriculum that does the turning: arithmetic, plane
          and solid geometry, astronomy and harmonics, studied for their abstract structure, then dialectic.
        </p>
      </Remark>

      <Remark title="going back down">
        <p>
          Those who have seen the Good will not want to return to the cave and rule. Socrates insists they must: the law
          aims at the good of the whole city, not of one class, and the philosophers owe their education to the city. The
          best rulers, he adds, are those who do not want to rule. Whether this is fair to the philosophers is one of the
          classic questions of the <em>Republic</em>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sun",
      rung: "check",
      prompt: <p>In the analogy of the sun, the sun is to sight and the visible as the Good is to what?</p>,
      answer: {
        kind: "choice",
        options: ["Pleasure and the body.", "Knowledge and the intelligible.", "The city and its laws.", "Shadows and reflections."],
        correct: [1],
      },
    },
    {
      key: "order",
      rung: "check",
      prompt: <p>Which ordering of the states of mind on the line runs from lowest to highest?</p>,
      answer: {
        kind: "choice",
        options: [
          "belief, imaging, understanding, thought",
          "imaging, belief, thought, understanding",
          "thought, imaging, belief, understanding",
          "imaging, thought, belief, understanding",
        ],
        correct: [1],
      },
    },
    {
      key: "geometer",
      rung: "apply",
      prompt: <p>A geometer proves a theorem about the square itself, using a drawn square and unproved axioms. Which state of mind is this?</p>,
      answer: { kind: "choice", options: ["imaging", "belief", "thought", "understanding"], correct: [2] },
    },
    {
      key: "length",
      rung: "apply",
      prompt: (
        <p>
          A line of length 12 is cut so that the upper part is twice the lower, and each part is cut again in the same
          ratio. What is the length of the second segment from the bottom?
        </p>
      ),
      answer: { kind: "numeric", value: 2.667, tolerance: 0.002 },
    },
    {
      key: "turn",
      rung: "apply",
      prompt: <p>According to book 7, what is education?</p>,
      answer: {
        kind: "choice",
        options: [
          "Putting knowledge into empty souls.",
          "Turning the whole soul around towards what is.",
          "Training the body for war.",
          "Learning to win at predicting shadows.",
        ],
        correct: [1],
      },
    },
    {
      key: "map",
      rung: "prove",
      prompt: (
        <p>
          Show how the stages of the prisoner&rsquo;s journey can be matched with the four segments of the line. Then
          point out one place where the match is unclear, and suggest how to handle it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Matches shadows on the wall with imaging, the objects and fire with belief, the reflections outside with thought, and the things outside and the sun with understanding and the Good.",
          "Identifies a difficulty, for instance that ordinary people do not literally take shadows for reality, or that the reflections outside are an odd image for mathematics.",
          "Proposes a reading that handles it, such as treating the shadows as second-hand opinions about justice. Any reasoned discussion earns full credit.",
        ],
      },
    },
    {
      key: "return",
      rung: "stretch",
      prompt: (
        <p>
          Is it just to make the philosophers go back down into the cave to rule, when they would rather stay in the
          light? Consider Socrates&rsquo; reasons and whether they fit his account of justice as each part doing its own
          work.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States Socrates' reasons: the law aims at the good of the whole city, and the philosophers owe their education to it.",
          "Considers the tension with the philosophers' own good, or with justice in the soul.",
          "Reaches a reasoned verdict. Any thoughtful position earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the analogy of the sun, the four segments of the divided line, the allegory of the cave, and Plato's idea that education turns the soul around.",

  glimpse: (
    <p>
      The <em>Theaetetus</em> starts the question of knowledge again from the beginning, without the Forms. Plotinus, at
      the end of this course, builds a whole philosophy on the Good &ldquo;beyond being&rdquo;. Epistemology asks whether
      mathematics is known by reason alone, as the line suggests.
    </p>
  ),
};
