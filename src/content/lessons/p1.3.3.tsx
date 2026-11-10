import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FrankfurtViz } from "@/components/viz/FrankfurtViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.3.3",
  minutes: 70,
  links: {
    revisits: ["p0.4.2", "p1.3.1"],
    foreshadows: ["p11.7.2", "p11.7.4", "p13.4.3"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;You can&rsquo;t blame me, I couldn&rsquo;t have done anything else.&rdquo; This is one of the oldest excuses
        there is, and often a good one. If a bus driver hits a pedestrian because the brakes failed without warning, we do not
        blame the driver.
      </p>
      <p>
        So it seems that to be responsible for what you did, you must have been able to do otherwise. But is that really the
        condition that matters? Could there be someone who could not have done otherwise and is still to blame?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        In 1969 Harry Frankfurt invented a case to test the condition. Black wants Jones to vote for Asha. He secretly implants
        a device that monitors Jones&rsquo;s brain: if Jones begins to lean towards Bilal, the device will step in and make him
        vote for Asha. As it happens, Jones decides by himself, for his own reasons, to vote for Asha, and the device never
        does anything.
      </p>
      <p>
        Jones could not have voted otherwise. Is he responsible for his vote? Explore both versions of the story below.
      </p>
      <FrankfurtViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the principle of alternate possibilities">
        <p>
          The <strong>principle of alternate possibilities</strong> (PAP) says: a person is morally responsible for what they
          have done only if they could have done otherwise.
        </p>
      </Definition>

      <p>
        Frankfurt concluded that PAP is false. His argument: in the case where Jones decides by himself, he could not have done otherwise, yet he is
        responsible. So PAP is false. What matters for responsibility, on this view, is not what <em>could</em> have
        happened but what <em>actually</em> happened: did the action come from the agent&rsquo;s own reasons? If Frankfurt is
        right, an important argument against compatibilism collapses, since determinism&rsquo;s threat to alternate
        possibilities would no longer be a threat to responsibility.
      </p>

      <Remark title="the flicker of freedom">
        <p>
          Critics reply that Jones still had a sliver of alternative: he could have <em>begun</em> to lean towards Bilal, and
          that flicker is where his responsibility lies. Frankfurt&rsquo;s defenders answer that so slight an alternative,
          one that is not itself a free choice, can hardly be what responsibility rests on. The exchange has continued for
          over fifty years, with ever more ingenious versions of the case.
        </p>
      </Remark>

      <Definition title="reactive attitudes">
        <p>
          P. F. Strawson, in &ldquo;Freedom and Resentment&rdquo; (1962), changed the question. He pointed to the{" "}
          <strong>reactive attitudes</strong>: resentment, gratitude, indignation, forgiveness, love. These are not
          conclusions we reach after settling the metaphysics of determinism; they are part of what it is to live with other
          people at all. To hold someone responsible just is to be prone to such attitudes towards them. We suspend them in
          special cases (&ldquo;he didn&rsquo;t know&rdquo;, &ldquo;she was pushed&rdquo;, &ldquo;he is only a child&rdquo;), but
          the truth of determinism would not make every case special.
        </p>
      </Definition>

      <Example title="the basic argument">
        <p>
          Galen Strawson, P. F. Strawson&rsquo;s son, argued in 1994 for the opposite conclusion. You do what you do because of
          the way you are. To be truly responsible for what you do, you would have to be responsible for the way you are. But
          to have made yourself the way you are, you would already have needed to be some way, for which you would also need to
          be responsible, and so on without end. So no one is ultimately responsible for anything, whether determinism is true
          or not.
        </p>
      </Example>

      <Remark title="moral luck">
        <p>
          Two drivers both drink too much and drive home. One hits a child who runs into the road; the other, by luck, meets
          no one. We blame the first far more, yet the only difference between them was luck. Thomas Nagel and Bernard Williams
          called this <strong>moral luck</strong>. If responsibility should depend only on what is under our control, and
          almost nothing is fully under our control, then the problem of free will reaches into every ordinary judgement of
          blame.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pap",
      rung: "check",
      prompt: <p>The principle of alternate possibilities says that moral responsibility requires&hellip;</p>,
      answer: {
        kind: "choice",
        options: ["that determinism is true", "that you could have done otherwise", "that you endorse your desires", "that someone resents you"],
        correct: [1],
      },
    },
    {
      key: "jones",
      rung: "check",
      prompt: <p>In Frankfurt&rsquo;s case, when Jones decides by himself, what does Black&rsquo;s device do?</p>,
      answer: { kind: "choice", options: ["It forces the decision.", "Nothing at all.", "It makes Jones vote for Bilal.", "It switches off."], correct: [1] },
    },
    {
      key: "target",
      rung: "apply",
      prompt: <p>If Frankfurt&rsquo;s case works, what follows?</p>,
      answer: {
        kind: "choice",
        options: [
          "No one is ever responsible.",
          "Being able to do otherwise is not necessary for moral responsibility.",
          "Determinism is false.",
          "Jones is not responsible.",
        ],
        correct: [1],
      },
    },
    {
      key: "flicker",
      rung: "apply",
      prompt: <p>The &ldquo;flicker of freedom&rdquo; reply says that&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "Jones could still have begun to lean another way, and that is enough alternative.",
          "Black is the one responsible.",
          "the device does not exist.",
          "responsibility requires determinism.",
        ],
        correct: [0],
      },
    },
    {
      key: "reactive",
      rung: "apply",
      prompt: <p>Which of these is a reactive attitude in P. F. Strawson&rsquo;s sense?</p>,
      answer: { kind: "choice", options: ["gratitude", "a belief about physics", "the perception of colour", "a mathematical proof"], correct: [0] },
    },
    {
      key: "frankfurt-form",
      rung: "prove",
      prompt: (
        <p>
          Set out Frankfurt&rsquo;s argument against the principle of alternate possibilities in standard form. Then present
          the flicker of freedom reply and say whether you think it succeeds.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States PAP as the target.",
          "Includes premises that Jones could not have done otherwise, and that Jones is responsible.",
          "Concludes that PAP is false.",
          "States the flicker reply and gives a reasoned assessment of it.",
        ],
      },
    },
    {
      key: "drivers",
      rung: "stretch",
      prompt: (
        <p>
          Are the two drunk drivers equally blameworthy? Defend an answer, and say what your answer implies about whether
          responsibility depends only on what is under our control.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes a clear position on whether the drivers are equally blameworthy.",
          "Explains the role of luck in the difference between them.",
          "Connects the answer to the principle that responsibility depends only on what we control.",
          "Considers at least one objection to the position.",
        ],
      },
    },
  ],

  teachBack:
    "Explain Frankfurt's case to a friend, and why it seems to show that 'I couldn't have done otherwise' is not always an excuse.",

  glimpse: (
    <p>
      This completes the chapter on free will. Next comes personal identity: what makes you, now, the same person as the child
      in your old photographs? Frankfurt cases and the case for giving up responsibility altogether return in Metaphysics, and
      moral luck has its own lesson in Moral Philosophy.
    </p>
  ),
};
