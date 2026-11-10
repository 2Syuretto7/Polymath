import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { DefinitionTesterViz } from "@/components/viz/DefinitionTesterViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.1.4",
  minutes: 60,
  links: {
    revisits: ["p0.1.1"],
    foreshadows: ["p0.4.2", "p4.2.2", "p4.2.4", "p4.3.3"],
  },

  puzzle: (
    <>
      <p>Define the word <em>chair</em>. Write a definition that fits every chair and nothing that is not a chair.</p>
      <p>
        Then test it. Does it include a throne? An office chair on five wheels? Does it wrongly include a sofa, a bar
        stool, or a tree stump a hiker rests on? You use the word every day without hesitation. Is defining it easy?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Most first attempts fail in one of two ways. &ldquo;Something people sit on&rdquo; lets in the stump and the sofa:
        it is too broad. &ldquo;Four legs and a back&rdquo; shuts out the office chair: it is too narrow. Each failure is
        shown by a single case that everyone already agrees about. Try three definitions below.
      </p>
      <DefinitionTesterViz />
      <p>
        Notice what is happening. You know how to <em>use</em> the word perfectly well, and that knowledge is what lets
        you spot the counterexamples. What you lack is an explicit account of the knowledge you already have. Socrates
        spent his life drawing out exactly this gap, not for chairs but for the words that matter most: courage, justice,
        piety, knowledge. The method he used, question, answer, counterexample, revision, is still the backbone of
        philosophy.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="necessary and sufficient conditions">
        <ul>
          <li>
            A condition is <strong>necessary</strong> for being an X if nothing can be an X without meeting it. Being a
            mammal is necessary for being a dog.
          </li>
          <li>
            A condition is <strong>sufficient</strong> for being an X if anything that meets it is an X. Being a square is
            sufficient for being a rectangle.
          </li>
          <li>
            A classical <strong>definition</strong> gives conditions that are jointly necessary and sufficient: something
            is an X <em>if and only if</em> it meets them. Something is a bachelor if and only if it is an unmarried adult
            man.
          </li>
        </ul>
      </Definition>

      <Definition title="counterexamples to a definition">
        <ul>
          <li>
            A definition is <strong>too broad</strong> if some case meets the conditions but is not an X. That case shows
            the conditions are not sufficient.
          </li>
          <li>
            A definition is <strong>too narrow</strong> if some X fails the conditions. That case shows a condition is not
            necessary.
          </li>
        </ul>
        <p>A single clear case is enough to refute a definition. No number of cases that fit can prove one.</p>
      </Definition>

      <Definition title="the elenchus">
        <p>
          Socrates&rsquo; method of examination, called the <strong>elenchus</strong> (Greek for &ldquo;testing&rdquo; or
          &ldquo;refutation&rdquo;), usually runs like this:
        </p>
        <ol>
          <li>The other person states a thesis, often a definition, that they sincerely believe.</li>
          <li>Socrates secures their agreement to some further claims, each of which seems obviously true.</li>
          <li>He shows that those claims, taken together, contradict the thesis.</li>
          <li>Since the person cannot keep everything they believe, something must go. Usually the thesis is revised, and the examination begins again.</li>
        </ol>
      </Definition>

      <p>
        The key feature is step 2. Socrates does not refute people with his own views. He uses premises they themselves
        accept, so the contradiction is in their own beliefs. That makes the result hard to dismiss: it is not one opinion
        against another.
      </p>

      <Example title="courage, in Plato's Laches">
        <p>
          The general Laches is asked what courage is. He answers that it is staying at your post and facing the enemy
          rather than running away. Socrates points to the Scythian horsemen, who were thought brave and fought as much
          while retreating as while charging. Staying put is not necessary for courage, so the definition is too narrow.
        </p>
        <p>
          Laches tries again: courage is a kind of endurance of the soul. Socrates gets him to agree that courage is always
          a fine and admirable thing, and that foolish endurance, persisting stubbornly in a bad plan, is harmful and not
          admirable. So not all endurance is courage: too broad. &ldquo;Wise endurance&rdquo;, then? But someone who
          wisely endures spending money because they know it will bring a profit is not thereby courageous. The dialogue
          ends without a definition, and with everyone, Socrates included, admitting they do not know what courage is.
        </p>
      </Example>

      <Remark title="why end in not knowing?">
        <p>
          The ending is the point. Socrates claimed that his only wisdom was knowing that he did not know, while others
          thought they knew things they did not. Removing false confidence comes before learning. The same idea is
          familiar from science. In 1974 the physicist Richard Feynman told a graduating class:
        </p>
      </Remark>
      <Quote source={<>Richard Feynman, &ldquo;Cargo Cult Science&rdquo;, Caltech commencement address, 1974</>}>
        <p>The first principle is that you must not fool yourself&mdash;and you are the easiest person to fool.</p>
      </Quote>

      <p>
        Socratic questioning, used on yourself, is a way of not fooling yourself. A practical set of questions, any of
        which you can ask of a claim, including your own:
      </p>
      <ul>
        <li><strong>Clarity.</strong> What do you mean by that word? Can you give an example?</li>
        <li><strong>Assumptions.</strong> What are you taking for granted?</li>
        <li><strong>Reasons.</strong> Why do you think so? What would change your mind?</li>
        <li><strong>Consequences.</strong> If that is true, what else must be true?</li>
        <li><strong>Counterexamples.</strong> Is there a case that fits your account but seems wrong, or the other way round?</li>
      </ul>

      <Remark title="a caution">
        <p>
          Not every useful word may have a classical definition. Later philosophers, notably Wittgenstein, argued that
          words like &ldquo;game&rdquo; are held together by overlapping similarities rather than one shared feature. Even
          so, testing definitions against cases is how you discover that, so the method survives its own limits.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dog",
      rung: "check",
      prompt: <p>Being a mammal is &hellip; for being a dog.</p>,
      answer: {
        kind: "choice",
        options: ["necessary but not sufficient", "sufficient but not necessary", "both necessary and sufficient", "neither"],
        correct: [0],
      },
    },
    {
      key: "square",
      rung: "check",
      prompt: <p>Being a square is &hellip; for being a rectangle.</p>,
      answer: {
        kind: "choice",
        options: ["necessary but not sufficient", "sufficient but not necessary", "both necessary and sufficient", "neither"],
        correct: [1],
      },
    },
    {
      key: "bird",
      rung: "apply",
      prompt: <p>Someone defines a bird as &ldquo;an animal that flies&rdquo;. Select every true statement.</p>,
      answer: {
        kind: "choice",
        options: [
          "A penguin shows the definition is too narrow.",
          "A bat shows the definition is too broad.",
          "A sparrow shows the definition is correct.",
          "A penguin shows the definition is too broad.",
        ],
        correct: [0, 1],
      },
    },
    {
      key: "elenchus",
      rung: "apply",
      prompt: <p>What most distinguishes the elenchus from simply disagreeing with someone?</p>,
      answer: {
        kind: "choice",
        options: [
          "Socrates always ends by stating the correct definition.",
          "The refutation uses premises the other person accepts, so the contradiction lies within their own beliefs.",
          "It relies on scientific evidence.",
          "It shows that the other person is insincere.",
        ],
        correct: [1],
      },
    },
    {
      key: "laches",
      rung: "apply",
      prompt: (
        <p>
          In the <em>Laches</em>, foolish endurance is used against the definition &ldquo;courage is endurance of the
          soul&rdquo;. What kind of counterexample is it?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "It shows the definition is too narrow.",
          "It shows the definition is too broad.",
          "It shows the definition is circular.",
          "It is not a counterexample but a new definition.",
        ],
        correct: [1],
      },
    },
    {
      key: "define",
      rung: "prove",
      prompt: (
        <p>
          Propose a definition of <em>friend</em>. Find a counterexample to it, say whether it shows the definition is too
          broad or too narrow, and revise the definition once. Then test the revision against one more case.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States a definition in the form of conditions.",
          "Gives a specific counterexample and correctly classifies it as too broad or too narrow.",
          "Revises the definition in a way that answers the counterexample.",
          "Tests the revision against a further case honestly.",
        ],
      },
    },
    {
      key: "dialogue",
      rung: "stretch",
      prompt: (
        <p>
          Write a short Socratic dialogue, six to ten lines, examining the thesis &ldquo;justice is giving each person what
          they are owed&rdquo;. Have the questioner secure agreement to a premise and use it to produce a counterexample.
          (Plato opens the <em>Republic</em> this way; try your own before reading his.)
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "The thesis is stated by the interlocutor, not the questioner.",
          "The questioner secures agreement to at least one further premise.",
          "That premise yields a genuine counterexample or contradiction.",
          "The dialogue ends with a revision or an honest admission, not a lecture.",
        ],
      },
    },
  ],

  teachBack:
    "Explain the Socratic method to someone who thinks it is just asking annoying questions. Use the chair or courage example, and say why ending without an answer can still be progress.",

  glimpse: (
    <p>
      This completes your first look at what philosophy is. Next you will learn to read philosophy slowly. Counterexamples
      return as a thinking tool of their own at the end of this course. Socrates returns in person in Ancient Greek
      Philosophy, in the <em>Euthyphro</em>, in a full study of the elenchus, and in the <em>Republic</em>, whose
      question about justice you have just begun.
    </p>
  ),
};
