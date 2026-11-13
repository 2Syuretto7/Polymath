import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { RuleFollowViz } from "@/components/viz/RuleFollowViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p15.6.1",
  minutes: 85,
  links: {
    revisits: ["p15.3.3", "p15.5.2", "p1.1.3"],
    foreshadows: ["p15.6.2", "p15.6.3", "p18.5.1"],
  },

  puzzle: (
    <>
      <p>
        A teacher shows a pupil the series 2, 4, 6, 8 and says &ldquo;go on adding 2&rdquo;. The pupil does well up to 1000,
        then writes 1004, 1008, 1012. Told they have gone wrong, they reply that they went on in the same way. What could the
        teacher point to, in the examples, the instruction or the pupil&rsquo;s mind, that shows 1002 was the right next step?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Set how far training went, and look along the series. The two rules agree on every number used in training and part ways
        later.
      </p>
      <RuleFollowViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the rule-following problem">
        <p>
          In the <em>Philosophical Investigations</em> (1953), Wittgenstein asks what it is to follow a rule, such as the rule
          for a word or for continuing a series. Any finite set of examples is consistent with many rules. An explanation of
          the rule is itself made of words or signs that must be interpreted, and any interpretation can be interpreted
          differently. So neither the examples nor an inner rendering of them seems to fix what counts as going on in the same
          way.
        </p>
      </Definition>

      <Example title="the paradox of §201">
        <p>
          Wittgenstein puts it sharply: &ldquo;no course of action could be determined by a rule, because every course of action
          can be made out to accord with the rule.&rdquo; He then says this rests on a misunderstanding, since there is a way of
          grasping a rule which is not an interpretation, but which is shown in what we call &ldquo;obeying the rule&rdquo; and
          &ldquo;going against it&rdquo; in actual cases.
        </p>
      </Example>

      <Definition title="rules as practices">
        <p>
          Wittgenstein&rsquo;s positive suggestion is that following a rule is a <strong>practice</strong>, or custom. We are
          trained, we react as others do, and our agreement in reactions, in what he calls our form of life, is what gives
          the words &ldquo;right&rdquo; and &ldquo;wrong&rdquo; their grip. &ldquo;When I obey a rule, I do not choose. I obey
          the rule blindly.&rdquo; This does not mean anything goes, but that the standard is located in the public practice,
          not in a mental item that contains all future applications in advance.
        </p>
      </Definition>

      <Remark title="readings">
        <p>
          Some readers, following Kripke, take Wittgenstein to state a sceptical paradox and offer a sceptical solution.
          Others, such as John McDowell and Gordon Baker with Peter Hacker, read him as dissolving the problem: the paradox only
          arises if understanding must be an interpretation, and once that assumption is dropped, grasping a rule is simply a
          matter of mastering a technique.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "problem",
      rung: "check",
      prompt: <p>What is the core of the rule-following problem?</p>,
      answer: {
        kind: "choice",
        options: [
          "Finite examples and explanations seem consistent with many rules, so it is unclear what fixes the correct continuation.",
          "Rules are too hard to remember.",
          "Some rules contradict each other.",
          "Pupils cannot add.",
        ],
        correct: [0],
      },
    },
    {
      key: "practice",
      rung: "check",
      prompt: <p>Where does Wittgenstein locate the standard of correctness for following a rule?</p>,
      answer: {
        kind: "choice",
        options: ["In a shared practice or custom", "In a private mental image", "In the dictionary", "Nowhere: anything goes"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what does the pupil write right after 1000?</p>,
      answer: { kind: "numeric", value: 1004 },
    },
    {
      key: "interp",
      rung: "apply",
      prompt: <p>Why can&rsquo;t the teacher settle the matter by adding an explanation such as &ldquo;keep doing the same thing&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "The explanation also needs interpreting, and the pupil can take “the same” in their own way.",
          "Because explanations are forbidden.",
          "Because the pupil is not listening.",
          "Because “same” has no meaning.",
        ],
        correct: [0],
      },
    },
    {
      key: "blind",
      rung: "apply",
      prompt: <p>What does Wittgenstein mean by obeying a rule &ldquo;blindly&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "Acting as trained without consulting a further interpretation at each step.",
          "Acting at random.",
          "Following a rule one cannot see written down.",
          "Following a rule one disagrees with.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can the pupil&rsquo;s past training alone fix that 1002 is correct? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the training examples fit both the ordinary rule and the deviant one.",
          "Considers what else might fix correctness, such as intentions, dispositions or a shared practice.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does the rule-following problem also threaten the meaning of everyday words like &ldquo;table&rdquo;? Explain your answer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that past uses of “table” are finite and fit deviant extensions as well.",
          "Considers how a practice, or something else, could fix the correct application to new cases.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Wittgenstein's pupil who writes 1004 after 1000, why examples and interpretations seem unable to fix a rule, the paradox of §201, and the idea that following a rule is a practice.",

  glimpse: (
    <p>
      Next, Kripke turns Wittgenstein&rsquo;s remarks into a sceptical paradox about meaning addition by &ldquo;plus&rdquo;.
      Then comes the private language argument, which asks whether there could be rules only one person could follow.
    </p>
  ),
};
