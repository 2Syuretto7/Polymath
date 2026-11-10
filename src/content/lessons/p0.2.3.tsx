import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { ArgumentTaggerViz } from "@/components/viz/ArgumentTaggerViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.2.3",
  minutes: 65,
  links: {
    foreshadows: ["p2.1.1", "p2.1.2", "p3.1.1", "p1.6.4", "p4.7.1"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;You shouldn&rsquo;t worry about the exam. You&rsquo;ve done every past paper, and anyone who has done every
        past paper will pass.&rdquo;
      </p>
      <p>
        Pull this apart. What is being claimed, and what is offered as the reason? If the conclusion turned out false,
        which part would have to be to blame?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The claim is &ldquo;you shouldn&rsquo;t worry&rdquo;. The reasons are &ldquo;you&rsquo;ve done every past
        paper&rdquo; and &ldquo;anyone who has done every past paper will pass&rdquo;. Set out on separate lines, the
        argument becomes visible, and so does its weak point: the second reason is doubtful.
      </p>
      <p>
        That is what <strong>reconstruction</strong> does. Real texts mix reasons, examples, asides and rhetoric, in any
        order. Reconstructing an argument means extracting its bones: the premises and the conclusion, in order, with
        anything unstated made explicit, so that you can see exactly what you would have to deny to reject it. Try it on two
        short passages.
      </p>
      <ArgumentTaggerViz />
    </>
  ),

  theory: (
    <>
      <Definition title="argument, premise, conclusion">
        <p>
          An <strong>argument</strong> is a set of claims, the <strong>premises</strong>, offered as reasons to believe
          another claim, the <strong>conclusion</strong>. An argument is not a quarrel; it is a structure of support.
        </p>
      </Definition>

      <Definition title="standard form">
        <p>An argument in <strong>standard form</strong> lists the premises, numbered, then the conclusion:</p>
        <ol className="standard-form">
          <li>You have done every past paper.</li>
          <li>Anyone who has done every past paper will pass.</li>
        </ol>
        <p className="standard-form-conclusion">So, you will pass (and so need not worry).</p>
      </Definition>

      <Definition title="valid and sound, a first look">
        <p>
          An argument is <strong>valid</strong> if the conclusion must be true whenever all the premises are true: there is
          no possible situation with true premises and a false conclusion. It is <strong>sound</strong> if it is valid and its
          premises are in fact true. The exam argument is valid, but probably not sound, since premise 2 is doubtful. These
          ideas are the subject of a whole course in logic.
        </p>
      </Definition>

      <p>A method for reconstructing an argument from a text:</p>
      <ol>
        <li><strong>Find the conclusion.</strong> Often the thesis; look for conclusion markers (therefore, so, hence, it follows that).</li>
        <li><strong>Find the stated reasons.</strong> Look for premise markers (because, since, for, given that, after all).</li>
        <li><strong>Strip everything else.</strong> Examples, background, repetition and rhetoric are not premises.</li>
        <li><strong>Paraphrase</strong> each premise as a clear, complete declarative sentence.</li>
        <li><strong>Fill the gaps.</strong> If the conclusion does not yet follow, add the premise the author must be assuming, the <em>hidden premise</em>, and mark it as added.</li>
        <li><strong>Check.</strong> If all the premises were true, would the conclusion have to be? If not, keep filling, or note that the argument is not meant to be conclusive.</li>
      </ol>

      <Example title="Epicurus on death">
        <p>
          In his <em>Letter to Menoeceus</em>, the Greek philosopher Epicurus (341&ndash;270 BCE) argues that we should not
          fear death:
        </p>
        <Quote source={<>Epicurus, <cite>Letter to Menoeceus</cite>, translated by R. D. Hicks</>}>
          <p>
            Accustom thyself to believe that death is nothing to us, for good and evil imply sentience, and death is the
            privation of all sentience.
          </p>
        </Quote>
        <p>Following the method, with the conclusion signalled by &ldquo;believe that&rdquo; and the reasons by &ldquo;for&rdquo;:</p>
        <ol className="standard-form">
          <li>Something can be good or bad for a person only if that person can experience it.</li>
          <li>Death is the end of all experience.</li>
          <li><em>(Hidden)</em> If something is neither good nor bad for us, it is not rational to fear it.</li>
        </ol>
        <p className="standard-form-conclusion">So, death is nothing to us: it is neither good nor bad for us, and it is not rational to fear it.</p>
        <p>
          Now the argument can be assessed. Premise 3 had to be supplied, since Epicurus&rsquo;s word &ldquo;nothing&rdquo;
          is doing double work. And premise 1 is where most critics push: can something harm you without your experiencing
          it, as being betrayed behind your back seems to? Reconstruction showed exactly where the debate must take place.
        </p>
      </Example>

      <Remark title="hidden premises, honestly">
        <p>
          When you add a hidden premise, add the most plausible one that makes the argument work, not the weakest. It is
          tempting to supply something silly and then knock it down. That is not reconstruction but sabotage, and it teaches
          you nothing about whether the author was right. This is the principle of charity, the subject of the next lesson.
        </p>
      </Remark>

      <Remark title="arguments inside arguments">
        <p>
          A premise may itself be supported by further reasons. Then the argument has a structure: a sub-argument for the
          premise, and the main argument from the premise. In standard form, write the sub-conclusion as a numbered line and
          note which lines it comes from: &ldquo;3. (from 1 and 2)&rdquo;. Long texts are trees of such arguments, and their
          thesis is the root.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "conclusion",
      rung: "check",
      prompt: (
        <p>
          &ldquo;Since the bridge is closed and the ferry has stopped for the night, we will have to stay in town.&rdquo;
          Which is the conclusion?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["The bridge is closed.", "The ferry has stopped for the night.", "We will have to stay in town."],
        correct: [2],
      },
    },
    {
      key: "valid",
      rung: "check",
      prompt: <p>An argument is valid when&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "its premises and conclusion are all true.",
          "it is impossible for the premises to be true and the conclusion false.",
          "most people find it convincing.",
          "its conclusion is true.",
        ],
        correct: [1],
      },
    },
    {
      key: "hidden",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;Cats are mammals, so cats are warm-blooded.&rdquo; Which hidden premise makes this argument valid?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Some mammals are warm-blooded.",
          "All mammals are warm-blooded.",
          "All warm-blooded animals are mammals.",
          "Cats are popular pets.",
        ],
        correct: [1],
      },
    },
    {
      key: "not-premise",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;Smoking should be banned in parks. Second-hand smoke harms people nearby, and parks are shared spaces where
          people cannot easily avoid it. Last summer my niece had an asthma attack at the lake.&rdquo; Select every sentence
          that is a <strong>premise</strong>.
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Smoking should be banned in parks.",
          "Second-hand smoke harms people nearby.",
          "Parks are shared spaces where people cannot easily avoid it.",
          "Last summer my niece had an asthma attack at the lake.",
        ],
        correct: [1, 2],
      },
    },
    {
      key: "epicurus",
      rung: "apply",
      prompt: <p>Which premise of the reconstructed Epicurus argument do most critics challenge?</p>,
      answer: {
        kind: "choice",
        options: [
          "Something can be good or bad for a person only if they can experience it.",
          "Death is the end of all experience.",
          "Everyone dies.",
        ],
        correct: [0],
      },
    },
    {
      key: "reconstruct",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct Mill&rsquo;s argument from the passage in the last lesson (silencing an opinion robs the human race,
          whether the opinion is right or wrong) in standard form. Include any hidden premise you need, and mark it as
          hidden.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the conclusion: silencing an opinion harms people whether the opinion is true or false.",
          "Includes a premise for each case: if true, a truth is lost; if false, the clearer perception of truth is lost.",
          "Includes the exhaustive-cases premise (every opinion is either true or false) or an equivalent, marked as hidden.",
          "The premises, if true, would make the conclusion follow.",
        ],
      },
    },
    {
      key: "find-and-fix",
      rung: "stretch",
      prompt: (
        <p>
          Find a short argument in an advertisement, a speech or a social-media post. Reconstruct it in standard form with any
          hidden premises, then say whether it is valid, and which premise you would challenge first and why.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Quotes or describes a real argument.",
          "Gives a reconstruction in standard form with numbered premises and a conclusion.",
          "Supplies plausible hidden premises, not deliberately weak ones.",
          "Assesses validity and identifies the most doubtful premise with a reason.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what it means to put an argument in standard form, and why doing so makes it easier to disagree well. Use the Epicurus example or one of your own.",

  glimpse: (
    <p>
      Next, charitable interpretation: how to reconstruct an argument so that it is as strong as it can honestly be. Logic I
      opens with arguments, validity and soundness, studied with full precision, and Critical Reasoning begins with argument
      markers. Epicurus&rsquo;s argument returns in the lesson on death in Introduction to Philosophy and in Ancient Greek
      Philosophy.
    </p>
  ),
};
