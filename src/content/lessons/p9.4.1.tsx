import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { StagesViz } from "@/components/viz/StagesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p9.4.1",
  minutes: 85,
  links: {
    revisits: ["p9.1.4", "p5.3.1", "p9.1.5"],
    foreshadows: ["p9.4.2", "p9.4.3", "p19.2.3"],
  },

  puzzle: (
    <>
      <p>
        Hegel built a system in which every standpoint is taken up into a higher one, ending in absolute knowing. S&oslash;ren
        Kierkegaard, in Copenhagen, thought such a system forgot the one thing that matters: the existing individual who must
        decide how to live. You cannot reason your way into a life, he argued. You must choose. His first major book, of
        1843, is called simply <em>Either/Or</em>.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Explore Kierkegaard&rsquo;s three stages, or spheres, of existence. For each, see what it lives for, the despair that
        undoes it, and the way on.
      </p>
      <StagesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the aesthetic">
        <p>
          The aesthetic person lives for the interesting moment: pleasure, novelty, the avoidance of boredom. Some are
          crude seducers, others refined reflective observers who keep every possibility open by committing to none. The
          aesthete&rsquo;s weakness is that they have no continuous self. Their life is a series of moods, and its secret is
          despair.
        </p>
      </Definition>

      <Definition title="the ethical">
        <p>
          The ethical person, represented by Judge William, chooses themselves: they take on commitments, such as marriage
          and work, that give life continuity and make them responsible for who they are. The ethical is the universal,
          the life of duty that anyone could share. Its limit is guilt: the ethical self cannot by its own effort undo what
          it has done.
        </p>
      </Definition>

      <Example title="the religious">
        <p>
          In <em>Fear and Trembling</em>, the pseudonym Johannes de Silentio contemplates Abraham, ordered to sacrifice
          Isaac. If ethics is the highest, Abraham is a murderer. If he is the father of faith, there must be a{" "}
          <strong>teleological suspension of the ethical</strong>, in which the individual stands in an absolute relation to
          God that outranks the universal. Johannes admits he cannot understand Abraham; faith is not a higher reason but a
          paradox.
        </p>
      </Example>

      <Remark title="indirect communication">
        <p>
          Kierkegaard wrote much of his work under pseudonyms, each embodying a standpoint, and refused to tell readers which
          was his. This <strong>indirect communication</strong> forces the reader to decide rather than adopt a conclusion. The
          stages are not a dialectic that carries us upward automatically, as in Hegel, but alternatives between which
          the individual must leap.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "three",
      rung: "check",
      prompt: <p>What are Kierkegaard&rsquo;s three stages of existence?</p>,
      answer: {
        kind: "choice",
        options: ["Thesis, antithesis, synthesis", "Aesthetic, ethical, religious", "Sense, understanding, reason", "Family, civil society, state"],
        correct: [1],
      },
    },
    {
      key: "judge",
      rung: "check",
      prompt: <p>Which figure in Either/Or speaks for the ethical life?</p>,
      answer: { kind: "choice", options: ["Don Giovanni", "Judge William", "Abraham", "Johannes Climacus"], correct: [1] },
    },
    {
      key: "aesthete",
      rung: "apply",
      prompt: <p>What is the deepest problem with the aesthetic life, on Kierkegaard&rsquo;s view?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is too expensive.",
          "It has no continuous self, only a series of moods, and so ends in despair.",
          "It is immoral by definition.",
          "It is too religious.",
        ],
        correct: [1],
      },
    },
    {
      key: "suspension",
      rung: "apply",
      prompt: <p>What is the teleological suspension of the ethical?</p>,
      answer: {
        kind: "choice",
        options: [
          "Forgetting one's duties.",
          "The individual's absolute relation to God outranking the universal demands of ethics, as Abraham's case suggests.",
          "A pause in moral reasoning to gather facts.",
          "The replacement of ethics by aesthetics.",
        ],
        correct: [1],
      },
    },
    {
      key: "pseud",
      rung: "apply",
      prompt: <p>Why did Kierkegaard write under pseudonyms?</p>,
      answer: {
        kind: "choice",
        options: [
          "To avoid the censor.",
          "To communicate indirectly, presenting standpoints so that readers must choose for themselves.",
          "Because he was ashamed of his work.",
          "To sell more books.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Was Abraham right to be willing to sacrifice Isaac? Argue briefly, with Kierkegaard in mind.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the dilemma: ethically Abraham is a would-be murderer, religiously he is the father of faith.",
          "Considers whether anything could justify suspending the ethical, or how one could know the command was divine.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "hegel",
      rung: "stretch",
      prompt: <p>How do Kierkegaard&rsquo;s stages differ from Hegel&rsquo;s shapes of consciousness?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes Hegel's shapes pass into one another by necessity, through determinate negation.",
          "Notes Kierkegaard's stages are joined only by a free choice, a leap, made by an existing individual.",
          "Reaches a view on which picture of human development is more convincing. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Kierkegaard's aesthetic, ethical and religious stages, the despair that undoes the first two, the story of Abraham and the teleological suspension of the ethical, and why he wrote under pseudonyms.",

  glimpse: (
    <p>
      The next lesson looks more closely at faith as a leap and at the absurd, and the one after at truth as subjectivity.
      The existentialists of the twentieth century take up Kierkegaard&rsquo;s anxiety and authenticity.
    </p>
  ),
};
