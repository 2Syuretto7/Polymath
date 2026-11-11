import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EquivocationViz, type EquivArg } from "@/components/viz/EquivocationViz";
import type { LessonContent } from "@/lib/types";

const ARGS: EquivArg[] = [
  {
    title: "Theory",
    word: "theory",
    senses: ["tested explanation", "mere guess"],
    premises: [
      {
        text: "Evolution is a theory.",
        gloss: ["evolution is a well-tested explanation of a large body of evidence.", "evolution is a mere guess."],
        truth: [true, false],
      },
      {
        text: "A theory is just a guess.",
        gloss: ["a well-tested explanation is just a guess.", "a mere guess is just a guess."],
        truth: [false, true],
      },
    ],
    conclusion: "evolution is just a guess.",
  },
  {
    title: "Law",
    word: "law",
    senses: ["rule made by a state", "regularity of nature"],
    premises: [
      {
        text: "Anyone who breaks a law should be punished.",
        gloss: ["anyone who breaks a rule made by the state should be punished.", "anyone who breaks a regularity of nature should be punished."],
        truth: [true, false],
      },
      {
        text: "Miracles, if there are any, break laws.",
        gloss: ["miracles break rules made by the state.", "miracles break the regularities of nature."],
        truth: [false, true],
      },
    ],
    conclusion: "anyone who works a miracle should be punished.",
  },
  {
    title: "End",
    word: "end",
    senses: ["goal", "final point"],
    premises: [
      {
        text: "The end of a thing is what it aims at.",
        gloss: ["the goal of a thing is what it aims at.", "the final point of a thing is what it aims at."],
        truth: [true, false],
      },
      {
        text: "Death is the end of life.",
        gloss: ["death is the goal of life.", "death is the final point of life."],
        truth: [false, true],
      },
    ],
    conclusion: "death is what life aims at.",
  },
];

export const lesson: LessonContent = {
  id: "p3.2.2",
  minutes: 60,
  links: {
    revisits: ["p3.1.3", "p2.1.3"],
    foreshadows: ["p5.2.1", "p11.5.2"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;Every player in this team is world class. So this is a world-class team.&rdquo; Sports fans know this can
        fail: a side of brilliant individuals can play badly together. Yet &ldquo;every brick in this wall is red, so the
        wall is red&rdquo; is perfectly good.
      </p>
      <p>
        The two arguments look identical in form. If logic is about form, why is one good and the other bad? Something
        other than the shape of the argument must be doing the work.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        An argument is valid only if its words keep the same meaning from premise to premise. When a key word shifts
        sense part-way through, the premises can all look true and the form can look valid, though no single reading
        makes both so. Choose a sense for the key word in each premise below. Use one sense throughout and a premise turns
        false; mix the senses and the argument no longer has a valid form.
      </p>
      <EquivocationViz args={ARGS} />
    </>
  ),

  theory: (
    <>
      <Definition title="fallacies of ambiguity">
        <p>
          A <strong>fallacy of ambiguity</strong> is an argument that seems good only because a word, phrase or sentence
          is read in different ways at different points. Once the readings are separated, either a premise is false or the
          form is invalid.
        </p>
      </Definition>

      <Definition title="equivocation">
        <p>
          <strong>Equivocation</strong> is a shift in the meaning of a single word or phrase between premises, or between
          premise and conclusion. To diagnose it, rewrite each premise with the ambiguous word replaced by an unambiguous
          paraphrase, and check each reading separately. Logic I assumed silently that each symbol keeps one meaning; an
          equivocation breaks that assumption while the words stay the same.
        </p>
      </Definition>

      <Definition title="amphiboly">
        <p>
          <strong>Amphiboly</strong> is the same trick played with grammar instead of a single word: a sentence whose
          structure allows two readings. Herodotus tells how Croesus, king of Lydia, asked the oracle at Delphi whether to
          attack Persia, and was told that if he did, he would destroy a great empire. He attacked, and the empire he
          destroyed was his own. The oracle&rsquo;s sentence was true on either reading, which is what made it safe to
          give.
        </p>
      </Definition>

      <Definition title="composition and division">
        <p>
          The fallacy of <strong>composition</strong> argues that because every part has a property, the whole has it. The
          fallacy of <strong>division</strong> argues the reverse, that because the whole has a property, every part has
          it.
        </p>
        <ul>
          <li>Composition: every player is world class, so the team is world class.</li>
          <li>Division: the orchestra is loud, so each musician is loud.</li>
        </ul>
      </Definition>
      <p>
        These are fallacies of ambiguity because a property word such as &ldquo;good&rdquo; or &ldquo;loud&rdquo; means
        something different when said of a part and of a whole. A good team is one that wins together; a good player is
        one with individual skill. Some properties do transfer: colour, the material something is made of, being located
        in a room. Others do not: weight beyond a limit (each part is light, the whole heavy), being cheap, being
        balanced. So composition is not always a fallacy. The question is always whether this property transfers.
      </p>

      <Example title="a disguised composition">
        <p>
          &ldquo;Each of these extra costs is small, so together they are small.&rdquo; Many small costs can add to a large
          one. The same pattern appears in the reverse direction in &ldquo;the economy is growing, so every family is
          better off&rdquo;, which commits division: a total can grow while some of its parts shrink.
        </p>
      </Example>

      <Remark title="charity before accusation">
        <p>
          An argument that equivocates on one reading may be sound on another. Before calling a fallacy, the charitable
          reader asks whether there is a single sense of the word on which every premise is true. Only if there is none
          has the argument really failed. Often a careful writer meant one sense throughout, and the ambiguity is only in
          the wording.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "comp",
      rung: "check",
      prompt: <p>&ldquo;Each brick is light, so the wall is light.&rdquo; Which fallacy is this?</p>,
      answer: { kind: "choice", options: ["composition", "division", "equivocation on 'brick'", "amphiboly"], correct: [0] },
    },
    {
      key: "div",
      rung: "check",
      prompt: <p>&ldquo;The committee is slow, so each member of the committee is slow.&rdquo; Which fallacy is this?</p>,
      answer: { kind: "choice", options: ["composition", "division", "straw man", "ad hominem"], correct: [1] },
    },
    {
      key: "good",
      rung: "apply",
      prompt: <p>Which of these arguments from parts to whole are good? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "Every part of this bicycle is made of steel, so the bicycle is made of steel.",
          "Every part of this bicycle is cheap, so the bicycle is cheap.",
          "Every page of this book is in the library, so the book is in the library.",
          "Every sentence in this essay is clear, so the essay is clear.",
        ],
        correct: [0, 2],
      },
    },
    {
      key: "feather",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;A feather is light. What is light cannot be dark. So a feather cannot be dark.&rdquo; Which word
          equivocates?
        </p>
      ),
      answer: { kind: "choice", options: ["feather", "light", "dark", "cannot"], correct: [1] },
    },
    {
      key: "croesus",
      rung: "apply",
      prompt: <p>Why could the oracle not be proved wrong whichever side won?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because 'a great empire' could pick out either Lydia or Persia.",
          "Because oracles cannot lie.",
          "Because 'destroy' is vague.",
          "Because Croesus did not attack.",
        ],
        correct: [0],
      },
    },
    {
      key: "theory",
      rung: "prove",
      prompt: (
        <p>
          Diagnose the argument &ldquo;Evolution is only a theory, and a theory is just a guess, so evolution is just a
          guess.&rdquo; Rewrite each premise in each sense of &ldquo;theory&rdquo; and show that no single reading makes
          both premises true.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes the scientific sense (a well-tested explanation) from the everyday sense (a hunch).",
          "Shows that in the scientific sense the first premise is true but the second is false, and in the everyday sense the reverse.",
          "Concludes that the argument equivocates on 'theory'. Any clear wording is fine.",
        ],
      },
    },
    {
      key: "mill",
      rung: "stretch",
      prompt: (
        <p>
          A famous argument runs: each person&rsquo;s happiness is a good to that person, so the general happiness is a good
          to everyone taken together. Critics have called this a fallacy of composition. Explain why, and then suggest a
          more charitable reading on which it might not be one.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the charge: 'good to each person' does not obviously add up to 'good to the aggregate', since the aggregate is not a person who has goods in the same way.",
          "Offers a charitable reading, for example that 'good to the aggregate' just means the sum of goods to individuals, or that the argument only aims to show each person has some reason to value everyone's happiness.",
          "Weighs whether the charitable reading makes the argument succeed. Any thoughtful view is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how an equivocation can make a bad argument look valid, how to diagnose one by rewriting each premise, and why composition is sometimes a fallacy and sometimes not.",

  glimpse: (
    <p>
      Introduction to Ethics meets John Stuart Mill&rsquo;s proof of the principle of utility, from which the argument in
      the last exercise is adapted, and which critics have long accused of both composition and equivocation. Metaphysics
      asks harder questions about parts and wholes: is a statue the same thing as the clay it is made of, when one
      survives being squashed and the other does not?
    </p>
  ),
};
