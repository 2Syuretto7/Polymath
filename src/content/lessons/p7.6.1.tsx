import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ReidSignViz } from "@/components/viz/ReidSignViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p7.6.1",
  minutes: 75,
  links: {
    revisits: ["p7.5.1", "p7.4.2", "p7.5.4"],
    foreshadows: ["p10.4.4", "p10.5.1", "p8.1.1"],
  },

  puzzle: (
    <>
      <p>
        Thomas Reid, a Scottish minister, read Hume&rsquo;s <em>Treatise</em> and was alarmed. He had accepted Berkeley&rsquo;s
        arguments, until he saw where they led: to doubt about matter, about the self, about causation, about everything.
        Hume&rsquo;s reasoning seemed sound. So Reid went back to its starting point, the assumption shared by Descartes,
        Locke, Berkeley and Hume that what we perceive directly are ideas in our own minds. What if that assumption is the
        mistake?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Compare two pictures of perception, and what each says we can know about the world.
      </p>
      <ReidSignViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the theory of ideas">
        <p>
          Reid&rsquo;s name for the shared assumption is the <strong>theory of ideas</strong>: the immediate objects of
          perception, memory and thought are ideas in the mind, images that stand for external things. Once you accept it,
          Reid argues, scepticism follows, because you can never get outside your ideas to check that they match anything. He
          found no argument for the theory, only a habit inherited from the philosophers.
        </p>
      </Definition>

      <Definition title="sensation and perception">
        <p>
          Reid distinguishes <strong>sensation</strong>, a feeling in the mind with no object beyond itself, from{" "}
          <strong>perception</strong>, which includes a conception of an external object and an immediate belief in its
          present existence. When I press a table, I have a sensation of hardness, but what I perceive is the hardness of the
          table. The sensation is a <strong>natural sign</strong>: by the constitution of our nature, it suggests the object,
          as a word suggests its meaning without resembling it.
        </p>
      </Definition>

      <Example title="first principles of common sense">
        <p>
          Some beliefs, Reid holds, are first principles: we cannot help believing them, they appear early in life, they are
          shared by all, and their denial is absurd. Among them: that the things I perceive exist and are what they appear to
          be; that I am the same person through time; that my faculties are not fallacious. The sceptic trusts reason while
          distrusting perception, but both come from the same shop. If one is suspect, so is the other.
        </p>
      </Example>

      <Remark title="legacy">
        <p>
          Reid was dismissed by Kant as appealing to the opinion of the crowd, which is unfair: his common sense is a set of
          principles, not popular opinion. His influence ran through Scottish and American philosophy, faded, and returned in
          the twentieth century. G. E. Moore&rsquo;s defence of common sense, direct realist theories of perception, and the
          reformed epistemology of Alvin Plantinga all owe him something. The question he pressed, whether we perceive things
          or only our ideas of them, is still alive.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "target",
      rung: "check",
      prompt: <p>What assumption did Reid blame for the scepticism of Berkeley and Hume?</p>,
      answer: {
        kind: "choice",
        options: [
          "That God exists.",
          "The theory of ideas: that the immediate objects of perception are ideas in the mind.",
          "That matter exists.",
          "That reason is fallible.",
        ],
        correct: [1],
      },
    },
    {
      key: "sign",
      rung: "check",
      prompt: <p>What role does sensation play in perception, for Reid?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is the object we perceive.",
          "It is a natural sign that suggests the external object, without resembling it.",
          "It is an illusion.",
          "It is an idea copied from an impression.",
        ],
        correct: [1],
      },
    },
    {
      key: "first",
      rung: "apply",
      prompt: <p>Which of these are first principles of common sense, for Reid? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "The things I perceive exist.",
          "My faculties are not fallacious.",
          "Only ideas exist.",
          "I am the same person through time.",
        ],
        correct: [0, 1, 3],
      },
    },
    {
      key: "shop",
      rung: "apply",
      prompt: <p>What is Reid&rsquo;s point that reason and perception come from the same shop?</p>,
      answer: {
        kind: "choice",
        options: [
          "That both are learnt in school.",
          "That a sceptic who trusts reason but distrusts perception is inconsistent, since both are faculties of the same nature.",
          "That reason is better than perception.",
          "That perception is a kind of reasoning.",
        ],
        correct: [1],
      },
    },
    {
      key: "hard",
      rung: "apply",
      prompt: <p>When you press a table, what do you perceive, according to Reid?</p>,
      answer: {
        kind: "choice",
        options: [
          "Only your sensation of hardness.",
          "The hardness of the table itself, by means of a sensation.",
          "An idea of hardness in your mind.",
          "Nothing at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: (
        <p>
          Is Reid&rsquo;s appeal to common sense a good answer to Hume, or does it beg the question? Give a reason on each
          side.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a reason it is a good answer, such as the parity of reason and perception, or the lack of argument for the theory of ideas.",
          "Gives a reason it begs the question, such as assuming what the sceptic doubts.",
          "Reaches a view. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "illusion",
      rung: "stretch",
      prompt: (
        <p>
          A straight stick looks bent in water. Does this support the theory of ideas against Reid&rsquo;s direct realism?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the argument: we see something bent, the stick is straight, so we see something other than the stick.",
          "Gives a direct realist reply, such as that we see the straight stick looking bent, under certain conditions.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Reid's diagnosis of the theory of ideas, his distinction between sensation and perception, how sensations work as natural signs, and his first principles of common sense.",

  glimpse: (
    <p>
      The next lesson turns from perception to space, and the great debate between Newton&rsquo;s followers and Leibniz. The
      Epistemology course takes up Moore&rsquo;s defence of common sense and theories of perception, and Kant offers another
      answer to Hume.
    </p>
  ),
};
