import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.1.3",
  minutes: 50,
  links: {
    revisits: ["p0.1.1"],
    foreshadows: ["p3.2.1", "p3.2.3", "p5.1.2", "p1.3.3", "p4.7.3"],
  },

  puzzle: (
    <>
      <p>An argument at dinner ends with someone saying, kindly and firmly:</p>
      <p><em>&ldquo;Look, everyone&rsquo;s opinion is equally valid. Who&rsquo;s to say who is right?&rdquo;</em></p>
      <p>
        It sounds open-minded. Is it true? Before reading on, try applying the sentence to itself, and to the opinion
        that the earth is flat.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        If every opinion is equally valid, then so is the opinion that some opinions are better than others. The sentence
        undercuts itself. And nobody really believes it: the person saying it would not accept that a flat-earth opinion
        is as good as an astronomer&rsquo;s, or that a stranger&rsquo;s opinion about their own health is as good as
        their doctor&rsquo;s.
      </p>
      <p>
        Yet there is something right in the neighbourhood. Everyone has an equal <em>right</em> to hold and voice an
        opinion, and many questions are hard enough that confidence is out of place. The sentence runs together a true
        claim about rights and humility with a false claim about correctness.
      </p>
      <p>
        That is philosophy in everyday life. Ordinary conversation is full of philosophical claims in disguise:
        &ldquo;it&rsquo;s only natural&rdquo;, &ldquo;I had no choice&rdquo;, &ldquo;that&rsquo;s just your
        opinion&rdquo;, &ldquo;everything happens for a reason&rdquo;. They do real work: they end arguments, excuse
        actions and justify choices. The philosophical habit is to slow down, notice them, and ask whether they are true.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="assumption and hidden premise">
        <p>
          An <strong>assumption</strong> is a claim taken for granted rather than argued for. When an argument only
          works if some unstated claim is true, that claim is a <strong>hidden premise</strong>. Bringing hidden premises
          into the open is the single most useful thing philosophy teaches.
        </p>
      </Definition>

      <Definition title="self-refutation">
        <p>
          A claim is <strong>self-refuting</strong> if its being true would make it false, or if asserting it undermines
          the reason for believing it. &ldquo;There are no truths&rdquo;, if true, would be a truth.
        </p>
      </Definition>

      <p>Three questions do most of the work. Ask them of any claim that matters, starting with your own.</p>
      <ol>
        <li><strong>What exactly is being claimed?</strong> Which words are vague or carry two meanings?</li>
        <li><strong>What are the reasons?</strong> What would have to be true for those reasons to support the claim?</li>
        <li><strong>What follows?</strong> If the claim were true, what else would be true, and do we accept that?</li>
      </ol>

      <p>Here is how they handle four common sayings.</p>

      <Example title="&ldquo;That's just your opinion&rdquo;">
        <p>
          <em>What is claimed?</em> Usually that the other person&rsquo;s view is merely personal, so it need not be taken
          seriously. <em>What follows?</em> The same is true of the speaker&rsquo;s view, so the remark cannot settle
          anything. The useful question is not whose opinion it is but what reasons support it. Some questions really are
          matters of taste (is coriander delicious?); many are not (is the bridge safe?). Part of the work is telling them
          apart.
        </p>
      </Example>

      <Example title="&ldquo;It's natural, so it's fine&rdquo;">
        <p>
          <em>What is claimed?</em> &ldquo;Natural&rdquo; has several meanings: occurring in nature without human
          action, common among humans, in line with a thing&rsquo;s purpose, or simply familiar. <em>What are the
          reasons?</em> On each meaning, the step to &ldquo;fine&rdquo; needs a hidden premise, and each version fails
          somewhere: disease is natural in the first sense, and spectacles are unnatural in it. This is the is–ought gap
          from the last lesson, wearing everyday clothes.
        </p>
      </Example>

      <Example title="&ldquo;I had no choice&rdquo;">
        <p>
          Sometimes literally true (the brakes failed). More often it means the alternatives were costly. <em>What
          follows?</em> If costly alternatives remove choice, then almost nobody chooses anything, and nobody deserves
          praise either. The phrase raises a deep question, what it takes to be responsible for an action, that has its
          own lessons later.
        </p>
      </Example>

      <Example title="&ldquo;Who's to say?&rdquo;">
        <p>
          This runs together two questions: <em>who decides</em> what is true, and <em>whether</em> there is a truth to
          decide. No one person &ldquo;says&rdquo; whether a bridge will hold, yet it either holds or falls. Whether moral
          questions are like the bridge or like coriander is one of the great open questions of ethics. It cannot be
          settled by a rhetorical question.
        </p>
      </Example>

      <Remark title="philosophy as a way of living">
        <p>
          For many ancient schools, philosophy was not mainly a subject but a discipline of life. The Stoics practised
          daily exercises to separate what is in our control from what is not. Buddhist traditions treat careful attention
          to how the mind forms beliefs and cravings as the path out of suffering. The three questions above are a small
          version of the same idea: examining what you believe changes how you live.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hidden",
      rung: "check",
      prompt: (
        <p>
          &ldquo;She is a brilliant surgeon, so she must be right about the economy.&rdquo; Which hidden premise does the
          argument need?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Surgeons are usually wealthy.",
          "Expertise in one field carries over to an unrelated field.",
          "The economy is a matter of opinion.",
          "Brilliant people are never wrong.",
        ],
        correct: [1],
      },
    },
    {
      key: "self-refuting",
      rung: "check",
      prompt: <p>Select every self-refuting claim.</p>,
      answer: {
        kind: "choice",
        options: [
          "There are no truths.",
          "All generalisations are false.",
          "Some claims are false.",
          "I cannot write a single sentence in English.",
        ],
        correct: [0, 1, 3],
      },
    },
    {
      key: "confusion",
      rung: "apply",
      prompt: <p>&ldquo;Everyone&rsquo;s opinion is equally valid&rdquo; most plausibly runs together which two claims?</p>,
      answer: {
        kind: "choice",
        options: [
          "That everyone has an equal right to an opinion, and that every opinion is equally likely to be correct.",
          "That opinions are personal, and that facts are public.",
          "That science is uncertain, and that ethics is certain.",
          "That disagreement is common, and that agreement is impossible.",
        ],
        correct: [0],
      },
    },
    {
      key: "natural",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;Using medicine is unnatural.&rdquo; Select every reading of &ldquo;natural&rdquo; on which this sentence is
          true.
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Occurring in nature without human manufacture.",
          "Common among human beings.",
          "Morally fine.",
        ],
        correct: [0],
      },
    },
    {
      key: "who-decides",
      rung: "apply",
      prompt: <p>What does &ldquo;Who&rsquo;s to say?&rdquo; typically run together?</p>,
      answer: {
        kind: "choice",
        options: [
          "Who has the authority to decide, and whether there is a fact to be decided.",
          "What is legal, and what is popular.",
          "What is known a priori, and what is known a posteriori.",
          "A question of taste, and a question of manners.",
        ],
        correct: [0],
      },
    },
    {
      key: "overheard",
      rung: "prove",
      prompt: (
        <p>
          Write down a sentence you have heard or said recently that hides a philosophical assumption. Apply the three
          questions to it: what exactly is claimed, what reasons support it, and what follows. End with your verdict.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Quotes or paraphrases a real everyday sentence.",
          "States the hidden assumption explicitly.",
          "Applies all three questions, not just one.",
          "Reaches a reasoned verdict rather than a bare opinion.",
        ],
      },
    },
    {
      key: "steelman",
      rung: "stretch",
      prompt: (
        <p>
          Rewrite &ldquo;everyone&rsquo;s opinion is equally valid&rdquo; as the strongest claim in its neighbourhood that
          you think is actually true. Then say what that claim does and does not allow someone to conclude in an argument.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Offers a precise, defensible reformulation (for instance about rights, humility or matters of taste).",
          "Explains what the reformulation permits.",
          "Explains what it does not permit, such as ending a factual dispute.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend, without making them feel foolish, what is wrong with 'everyone's opinion is equally valid', and what is right about it.",

  glimpse: (
    <p>
      Next comes the oldest method for examining such claims: Socratic questioning. The everyday moves you analysed here
      return as named fallacies in Critical Reasoning. Whether moral questions are like the bridge or like coriander is
      taken up as subjectivism in Introduction to Ethics, &ldquo;I had no choice&rdquo; returns with moral responsibility,
      and the Stoic practice of separating what is up to us returns in Ancient Greek Philosophy.
    </p>
  ),
};
