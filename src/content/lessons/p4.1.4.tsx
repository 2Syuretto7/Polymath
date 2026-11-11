import { M, MD } from "@/components/Math";
import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ZenoViz } from "@/components/viz/ZenoViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.1.4",
  minutes: 70,
  links: {
    revisits: ["p0.4.4", "m2.9.1"],
    parallels: ["m2.9.2"],
    foreshadows: ["p4.5.5", "m6.1.1"],
  },

  puzzle: (
    <>
      <p>
        Swift Achilles races a tortoise, giving it a head start. By the time Achilles reaches the tortoise&rsquo;s starting
        point, the tortoise has moved a little way on. By the time he reaches that point, it has moved on again. And so on,
        for ever. Each time Achilles reaches where the tortoise was, it is somewhere further. So, the argument concludes,
        he never catches it.
      </p>
      <p>
        Everyone knows that fast runners overtake slow ones. Where exactly does the argument go wrong?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Count the stages and they never end. Add up the time they take and the total is finite. Achilles runs ten times as
        fast as the tortoise, which starts 90 metres ahead; the stages take 9 seconds, 0.9, 0.09 and so on. Step through
        them.
      </p>
      <ZenoViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Zeno's purpose">
        <p>
          Zeno of Elea was Parmenides&rsquo; student. In Plato&rsquo;s dialogue <em>Parmenides</em>, Zeno says that his book
          defended his teacher by showing that the opposite view, that there are many things, leads to consequences even
          more absurd. His paradoxes are reductio arguments: assume plurality or motion, and derive a contradiction or an
          absurdity. Our main source for the paradoxes of motion is Aristotle&rsquo;s <em>Physics</em>.
        </p>
      </Definition>

      <Example title="four paradoxes of motion">
        <ul>
          <li>
            <strong>The dichotomy.</strong> To cross a room you must first cross half of it, then half of what remains, and
            so on. That is infinitely many tasks, and infinitely many tasks cannot be completed. So you cannot cross the
            room, or even start.
          </li>
          <li><strong>Achilles and the tortoise.</strong> As above.</li>
          <li>
            <strong>The arrow.</strong> At each instant a flying arrow occupies a space exactly its own size, so at that
            instant it is not moving. Time is made of instants. So the arrow never moves.
          </li>
          <li>
            <strong>The stadium.</strong> Rows of bodies passing one another seem to show that half a time equals its
            double. Its reconstruction is disputed.
          </li>
        </ul>
      </Example>

      <Remark title="the mathematical answer">
        <p>
          The times of Achilles&rsquo; stages form a geometric series:
        </p>
        <MD>{"9 + 0.9 + 0.09 + \\cdots = \\frac{9}{1 - 0.1} = 10."}</MD>
        <p>
          Calculus showed that infinitely many positive terms can have a finite sum, which is the limit of the partial
          sums. So the infinitely many stages fit into 10 seconds, and at <M>{"t = 10"}</M> both runners are at 100 metres.
          The argument&rsquo;s hidden premise, that infinitely many stages must take infinitely long, is false.
        </p>
      </Remark>

      <Remark title="is that the end of it?">
        <p>
          Some philosophers think the mathematics answers only half the question. It shows that the stages take finite
          time in total. It does not obviously show how anyone can <em>complete</em> an infinite sequence of tasks with no
          last one. Aristotle answered that the stages are only potentially infinite: Achilles&rsquo; run can be divided
          without end, but is not actually made of infinitely many separate parts. The debate about
          &ldquo;supertasks&rdquo;, infinitely many actions done in a finite time, continues.
        </p>
      </Remark>

      <Remark title="the arrow, and motion at an instant">
        <p>
          The modern answer to the arrow, associated with Bertrand Russell, accepts that at each instant the arrow is
          simply somewhere. Motion is nothing more than being at different places at different instants. Velocity at an
          instant is not motion during the instant but a limit of average speeds over shorter and shorter intervals, the
          derivative of calculus.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "purpose",
      rung: "check",
      prompt: <p>What was the purpose of Zeno&rsquo;s paradoxes, according to Plato&rsquo;s account?</p>,
      answer: {
        kind: "choice",
        options: [
          "To prove that Achilles was slow.",
          "To defend Parmenides by showing that belief in plurality and motion leads to absurdity.",
          "To found the study of calculus.",
          "To entertain an audience.",
        ],
        correct: [1],
      },
    },
    {
      key: "sum",
      rung: "check",
      prompt: (
        <p>
          What is <M>{"\\tfrac{1}{2} + \\tfrac{1}{4} + \\tfrac{1}{8} + \\cdots"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "catch",
      rung: "apply",
      prompt: (
        <p>
          Achilles runs 8 m/s and the tortoise 2 m/s, with a 60 m head start. After how many seconds does Achilles catch
          up?
        </p>
      ),
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "stage2",
      rung: "apply",
      prompt: (
        <p>
          In the same race, the first stage takes 7.5 seconds (Achilles covering the 60 m). How long does the second stage
          take?
        </p>
      ),
      answer: { kind: "numeric", value: 1.875, tolerance: 0.001 },
    },
    {
      key: "arrow",
      rung: "apply",
      prompt: <p>How does the &ldquo;at-at&rdquo; theory answer the arrow paradox?</p>,
      answer: {
        kind: "choice",
        options: [
          "Arrows never really fly.",
          "Motion is being at different places at different times; nothing more needs to happen at an instant.",
          "Time is not made of instants.",
          "The arrow moves faster than light.",
        ],
        correct: [1],
      },
    },
    {
      key: "dichotomy",
      rung: "prove",
      prompt: (
        <p>
          Set out the dichotomy paradox as a reductio, identify the premise that the mathematics of series rejects, and
          show the calculation that supports rejecting it for a runner crossing 1 metre at 1 m/s.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the reductio: assume motion is possible; crossing requires completing infinitely many half-distances; infinitely many tasks take infinite time (or cannot be completed); so motion is impossible.",
          "Identifies the premise that infinitely many stages must take infinite time.",
          "Shows the times 1/2 + 1/4 + … = 1 second. May also mention the remaining worry about completing a supertask.",
        ],
      },
    },
    {
      key: "supertask",
      rung: "stretch",
      prompt: (
        <p>
          A lamp is switched on at 0 minutes, off at 1/2 minute, on at 3/4, off at 7/8, and so on. Is it on or off at 1
          minute? What does this puzzle suggest about whether the sum of a series settles every question Zeno raised?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that the switchings all happen before 1 minute, since the times converge to 1.",
          "Observes that the sequence on, off, on, off … has no last term, so nothing in the description fixes the state at 1 minute.",
          "Concludes that convergence of the times does not by itself answer every question about completing infinitely many tasks. Any thoughtful discussion is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Achilles and the tortoise and the arrow, how the sum of a geometric series answers the first, and what worry might remain after the mathematics.",

  glimpse: (
    <p>
      Aristotle&rsquo;s distinction between potential and actual infinity appears later in this course. Real Analysis I
      builds the real numbers and limits with full rigour, finishing the work that Zeno&rsquo;s paradoxes began.
    </p>
  ),
};
