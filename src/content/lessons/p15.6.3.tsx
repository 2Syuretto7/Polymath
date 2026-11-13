import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BeetleBoxViz } from "@/components/viz/BeetleBoxViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p15.6.3",
  minutes: 85,
  links: {
    revisits: ["p15.6.2", "p15.6.1", "p1.2.2"],
    foreshadows: ["p18.5.1", "p18.5.2", "p16.1.1"],
  },

  puzzle: (
    <>
      <p>
        It seems obvious that you know what your own pain is like, and that the word &ldquo;pain&rdquo; gets its meaning, for
        you, from that inner experience. Could you then invent a language whose words name only your private sensations, which
        nobody else could possibly understand? Wittgenstein argued that you could not. Why not?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Look at how people talk about their &ldquo;beetles&rdquo;, then peek into the boxes and change what they hold.</p>
      <BeetleBoxViz />
    </>
  ),

  theory: (
    <>
      <Definition title="a private language">
        <p>
          In the <em>Philosophical Investigations</em>, §243 onwards, a <strong>private language</strong> is one whose words
          refer to what only the speaker can know, their immediate private sensations, so that another person cannot
          understand it. This is not a code or a diary language someone happens to keep to themselves, which others could in
          principle learn.
        </p>
      </Definition>

      <Example title="the diary of S">
        <p>
          Wittgenstein imagines keeping a diary about a recurring sensation, writing &ldquo;S&rdquo; on each day it occurs,
          having fixed the meaning by concentrating on the sensation. But to fix a meaning is to set up a standard for using the
          sign correctly in future. Here, &ldquo;whatever is going to seem right to me is right. And that only means that here
          we can&rsquo;t talk about &lsquo;right&rsquo;.&rdquo; Checking a memory of S against another memory is like buying
          a second copy of the morning paper to check that the first is true.
        </p>
      </Example>

      <Definition title="the beetle in the box">
        <p>
          Suppose everyone has a box with something they call a &ldquo;beetle&rdquo;, and nobody can look in anyone else&rsquo;s.
          The thing in the box could be different for everyone, could keep changing, or the box could be empty. If the word
          still has a use, the object in the box &ldquo;drops out of consideration as irrelevant&rdquo;. So if our sensation
          words are meaningful, their meaning cannot be fixed by private objects alone; it lies in their public use, connected
          with behaviour and circumstances.
        </p>
      </Definition>

      <Remark title="what the argument does and does not show">
        <p>
          Wittgenstein denies that he is a behaviourist: he does not deny that there are sensations, only a picture of how
          words for them get their meaning. Readers disagree about the argument&rsquo;s structure. Some take it to rest on a
          verificationist premise about checking; Kripke reads it as an application of the rule-following considerations;
          others, such as Simon Blackburn, question whether a solitary speaker really lacks any standard of correctness.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>In Wittgenstein&rsquo;s sense, what is a private language?</p>,
      answer: {
        kind: "choice",
        options: [
          "A language whose words refer to what only the speaker can know, so nobody else could understand it.",
          "A secret code.",
          "A language spoken by only one surviving speaker.",
          "A diary written in English.",
        ],
        correct: [0],
      },
    },
    {
      key: "diary",
      rung: "check",
      prompt: <p>What is the problem with the diarist&rsquo;s sign &ldquo;S&rdquo;?</p>,
      answer: {
        kind: "choice",
        options: [
          "There is no standard of correct use: whatever seems right to the diarist is right.",
          "The diarist forgets to write it.",
          "The sensation never recurs.",
          "Others can read the diary.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what happens to the shared use of &ldquo;beetle&rdquo; when the contents of the boxes change?</p>,
      answer: {
        kind: "choice",
        options: ["Nothing: people say the same things", "It becomes meaningless", "Everyone starts calling them something else", "Only Leela can use the word"],
        correct: [0],
      },
    },
    {
      key: "paper",
      rung: "apply",
      prompt: <p>What point does the example of buying a second copy of the morning paper make?</p>,
      answer: {
        kind: "choice",
        options: [
          "A check that is not independent of what it checks is no check at all.",
          "Newspapers are unreliable.",
          "Memory is always wrong.",
          "Private languages are expensive.",
        ],
        correct: [0],
      },
    },
    {
      key: "behav",
      rung: "apply",
      prompt: <p>Does Wittgenstein conclude that there are no private sensations?</p>,
      answer: {
        kind: "choice",
        options: [
          "No: he rejects a picture of how sensation words get their meaning, not sensations themselves.",
          "Yes: sensations are only behaviour.",
          "Yes: pain is a fiction.",
          "He does not discuss sensations.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a person who has never met anyone else invent a sign for a recurring sensation and use it correctly? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Wittgenstein’s worry, that a solitary speaker has no standard separating seeming right from being right.",
          "Considers a reply, such as regularities in the world or the speaker’s own dispositions supplying a standard.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If the beetle drops out as irrelevant, does that show that the word &ldquo;pain&rdquo; is not about an inner feeling? What do you think?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why the private object plays no role in the public use of the word in the beetle example.",
          "Considers whether pain is like the beetle, given that pain is tied to behaviour and circumstances in ways a hidden beetle is not.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Wittgenstein means by a private language, the diary of S and the problem of a standard of correctness, the beetle in the box, and why Wittgenstein says he is not a behaviourist.",

  glimpse: (
    <p>
      Later lessons return to Wittgenstein&rsquo;s later philosophy as a whole, and to Ryle&rsquo;s attack on the idea of the
      mind as a private theatre. Philosophy of science picks up the question of what makes a claim checkable at all.
    </p>
  ),
};
