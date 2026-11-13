import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { DescriptionViz } from "@/components/viz/DescriptionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p15.1.2",
  minutes: 80,
  links: {
    revisits: ["p15.1.1", "p2.4.4", "p2.4.3"],
    foreshadows: ["p15.1.3", "p15.2.1", "p11.2.1"],
  },

  puzzle: (
    <>
      <p>
        France has had no king since 1870. Is &ldquo;The present King of France is bald&rdquo; true? Surely not. Then by the law
        of excluded middle, &ldquo;The present King of France is not bald&rdquo; should be true. But that seems no better.
        Hegelians, Russell joked, would conclude that he wears a wig.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a reading of the sentence and a situation, and see how Russell&rsquo;s analysis decides its truth.</p>
      <DescriptionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the theory of descriptions">
        <p>
          In &ldquo;On Denoting&rdquo; (1905), Bertrand Russell argued that a definite description such as &ldquo;the F&rdquo;
          is not a referring expression. &ldquo;The F is G&rdquo; says three things: there is at least one F, there is at most
          one F, and every F is G. In logical notation, ∃x (Fx ∧ ∀y (Fy → y = x) ∧ Gx). The description disappears on analysis;
          it is an <strong>incomplete symbol</strong> with no meaning on its own, only in the context of a sentence.
        </p>
      </Definition>

      <Example title="three puzzles solved">
        <p>
          Empty descriptions: &ldquo;The present King of France is bald&rdquo; is meaningful and simply false, since the
          existence clause fails. Its denial is ambiguous between a false narrow-scope reading and a true wide-scope one, so
          excluded middle survives. Informative identity: when George IV wished to know whether Scott was the author of
          Waverley, he wished to know whether exactly one person wrote Waverley and that person was Scott, not whether Scott was
          Scott. Negative existentials: &ldquo;The round square does not exist&rdquo; denies that anything is uniquely round and
          square, so no strange object is needed to be its subject.
        </p>
      </Example>

      <Remark title="names as descriptions">
        <p>
          Russell held that only a few expressions, such as &ldquo;this&rdquo; applied to a present sense datum, are{" "}
          <strong>logically proper names</strong> that refer directly. Ordinary names like &ldquo;Aristotle&rdquo; are
          abbreviated descriptions, such as &ldquo;the teacher of Alexander&rdquo;. This descriptivism, shared in spirit with
          Frege&rsquo;s senses, dominated for sixty years.
        </p>
      </Remark>

      <Remark title="significance">
        <p>
          The theory became a model of philosophical analysis: the grammatical form of a sentence can mislead about its
          logical form. It also lightened ontology, since one can talk meaningfully about what does not exist without granting it
          any kind of being, as Meinong had.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>On Russell&rsquo;s analysis, what does &ldquo;The F is G&rdquo; say?</p>,
      answer: {
        kind: "choice",
        options: [
          "There is exactly one F, and it is G.",
          "The object named by “the F” is G.",
          "Some F is G.",
          "Every G is F.",
        ],
        correct: [0],
      },
    },
    {
      key: "value",
      rung: "check",
      prompt: <p>For Russell, what is the truth value of &ldquo;The present King of France is bald&rdquo;?</p>,
      answer: { kind: "choice", options: ["False", "True", "Neither true nor false", "Meaningless"], correct: [0] },
    },
    {
      key: "wide",
      rung: "apply",
      prompt: <p>In the visualisation, with no king, which reading makes &ldquo;The present King of France is not bald&rdquo; true?</p>,
      answer: {
        kind: "choice",
        options: ["The wide-scope reading", "The narrow-scope reading", "Both readings", "Neither reading"],
        correct: [0],
      },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>If there were two present Kings of France, both bald, why would the sentence still be false?</p>,
      answer: {
        kind: "choice",
        options: [
          "The uniqueness clause fails.",
          "The existence clause fails.",
          "Baldness is vague.",
          "Kings cannot be bald.",
        ],
        correct: [0],
      },
    },
    {
      key: "george",
      rung: "apply",
      prompt: <p>How does Russell explain why George IV&rsquo;s question about Scott and the author of Waverley was not trivial?</p>,
      answer: {
        kind: "choice",
        options: [
          "The question is whether exactly one person wrote Waverley and that person is Scott, which is not the question whether Scott is Scott.",
          "The two expressions have different references.",
          "George IV did not know that Scott existed.",
          "Identity statements are always trivial.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does Russell&rsquo;s theory solve the puzzle of the present King of France? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Russell’s analysis and how it makes the sentence false.",
          "Uses scope to explain the denial, or raises a doubt, such as Strawson’s intuition that the sentence is not false.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "names",
      rung: "stretch",
      prompt: <p>Russell treated ordinary names like &ldquo;Aristotle&rdquo; as disguised descriptions. Is this plausible?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the descriptivist view and what it explains, such as informative identities and empty names.",
          "Considers a difficulty, such as speakers who know no unique description, or different speakers using different descriptions.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Russell's theory of descriptions, how it handles the present King of France with the two scopes of negation, the puzzle of George IV and the author of Waverley, and Russell's view of ordinary names.",

  glimpse: (
    <p>
      The next lesson presents Strawson&rsquo;s reply, that the sentence is neither true nor false. Kripke later attacked the
      view that names are descriptions, and Quine took over Russell&rsquo;s method to decide what a theory says exists.
    </p>
  ),
};
