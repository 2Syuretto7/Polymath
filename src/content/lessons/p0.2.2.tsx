import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p0.2.2",
  minutes: 50,
  links: {
    foreshadows: ["p0.3.1", "p14.3.1"],
  },

  puzzle: (
    <>
      <p>
        A friend has read a ten-page essay and tells you: &ldquo;It&rsquo;s about free speech.&rdquo; Another says:
        &ldquo;It argues that silencing an opinion harms everyone, even if the opinion is false.&rdquo;
      </p>
      <p>Both are about the same essay. Which tells you more, and what exactly is the difference between them?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        The first names a <em>topic</em>: what the essay is about. The second states a <em>thesis</em>: what the essay
        claims about its topic. Two essays on the same topic can have opposite theses. You can agree or disagree with a
        thesis, but you cannot agree or disagree with a topic.
      </p>
      <p>
        In a philosophical text, almost everything serves the thesis. Reasons support it; examples illustrate it;
        objections are raised so that they can be answered; definitions make it precise. Once you know the thesis, the rest
        of the text falls into place, and you can ask of each paragraph: what is this doing for the thesis? Until you know
        it, the text is a fog of claims.
      </p>
    </>
  ),

  theory: (
    <>
      <Definition title="topic, thesis and argument">
        <ul>
          <li>The <strong>topic</strong> is what a text is about: free speech.</li>
          <li>
            The <strong>thesis</strong> is the main claim the text argues for about its topic: silencing any opinion wrongs
            humanity, whether the opinion is true or false.
          </li>
          <li>The <strong>argument</strong> is the reasons offered for the thesis.</li>
        </ul>
        <p>A thesis is a declarative sentence that could be true or false. A question or a topic is not a thesis.</p>
      </Definition>

      <p>Where to look for the thesis:</p>
      <ul>
        <li><strong>Announcements.</strong> &ldquo;I shall argue that&hellip;&rdquo;, &ldquo;My claim is&hellip;&rdquo;, &ldquo;The aim of this essay is to show&hellip;&rdquo;.</li>
        <li><strong>The beginning and the end.</strong> Introductions state it; conclusions restate it, often more sharply.</li>
        <li><strong>Conclusion markers.</strong> A sentence beginning &ldquo;therefore&rdquo; late in the text is a strong candidate.</li>
        <li><strong>The test question.</strong> For a candidate sentence, ask: is most of the text a reason for this, an illustration of it, or a defence of it? If so, it is the thesis.</li>
      </ul>

      <p>And what to avoid mistaking for it:</p>
      <ul>
        <li><strong>Background.</strong> Facts the author sets out before arguing (&ldquo;Free speech has been debated since antiquity&rdquo;).</li>
        <li><strong>Views the author rejects.</strong> Opponents&rsquo; positions are often stated at length and vividly. Watch for &ldquo;it is often said&rdquo;, &ldquo;some have thought&rdquo;, &ldquo;an objector might reply&rdquo;.</li>
        <li><strong>Intermediate conclusions.</strong> Steps on the way that are themselves argued for, but serve the main claim.</li>
        <li><strong>Striking examples.</strong> A memorable example is the part you remember, not the part that is claimed.</li>
      </ul>

      <Example title="Mill's thesis">
        <p>Here is how Mill states the thesis of <em>On Liberty</em>, chapter 2, early in the chapter:</p>
        <Quote source={<>J. S. Mill, <cite>On Liberty</cite>, chapter 2</>}>
          <p>
            But the peculiar evil of silencing the expression of an opinion is, that it is robbing the human race; posterity
            as well as the existing generation; those who dissent from the opinion, still more than those who hold it. If the
            opinion is right, they are deprived of the opportunity of exchanging error for truth: if wrong, they lose, what is
            almost as great a benefit, the clearer perception and livelier impression of truth, produced by its collision
            with error.
          </p>
        </Quote>
        <p>
          <em>Topic:</em> silencing opinions. <em>Thesis:</em> silencing an opinion harms everyone, whether the opinion is
          true or false. <em>Argument (in outline):</em> if it is true, we lose a truth; if false, we lose the clearer
          understanding of the truth that comes from meeting error. The rest of the chapter develops each case in turn. Notice
          the structure: two cases, covering every possibility, each leading to the same conclusion. Spotting a structure
          like that is what reading for the thesis makes possible.
        </p>
      </Example>

      <Remark title="when the thesis is hidden">
        <p>
          Not every text states its thesis. Plato&rsquo;s dialogues present characters arguing, and scholars still dispute
          what Plato himself believed. Some essays build a thesis gradually and only state it at the end. In such cases,
          formulate the thesis yourself in one sentence, as precisely as you can, and test it against the text: does the
          text support every part of your sentence? This is a skill you will use for every essay you write, because the first
          job of your own essay is to make its thesis impossible to miss.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "topic-thesis",
      rung: "check",
      prompt: <p>Select every sentence that is a <strong>thesis</strong> rather than a topic.</p>,
      answer: {
        kind: "choice",
        options: [
          "The ethics of eating meat.",
          "Eating meat is wrong when there are adequate alternatives.",
          "Is free will compatible with determinism?",
          "Free will is compatible with determinism.",
        ],
        correct: [1, 3],
      },
    },
    {
      key: "mill-cases",
      rung: "check",
      prompt: <p>According to the Mill passage, what is lost by silencing an opinion that is <strong>false</strong>?</p>,
      answer: {
        kind: "choice",
        options: [
          "Nothing at all.",
          "The opportunity to exchange error for truth.",
          "The clearer perception and livelier impression of truth produced by its collision with error.",
          "The right of the majority to decide.",
        ],
        correct: [2],
      },
    },
    {
      key: "rejected",
      rung: "apply",
      prompt: (
        <p>
          An essay begins: &ldquo;It is widely held that we can never know anything about the future. Surely, people say, the
          sun might not rise tomorrow. In this essay I show that this view rests on a confusion about what knowledge
          requires.&rdquo; What is the author&rsquo;s thesis?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "We can never know anything about the future.",
          "The sun might not rise tomorrow.",
          "The view that we cannot know the future rests on a confusion about what knowledge requires.",
          "Knowledge is impossible.",
        ],
        correct: [2],
      },
    },
    {
      key: "role",
      rung: "apply",
      prompt: (
        <p>
          In an essay arguing that zoos should be abolished, the sentence &ldquo;Consider the polar bear, pacing the same
          six metres of concrete for hours each day&rdquo; most likely plays which role?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["The thesis", "An illustration of a reason", "An objection", "Background"],
        correct: [1],
      },
    },
    {
      key: "structure",
      rung: "apply",
      prompt: <p>What is the structure of Mill&rsquo;s argument in the passage?</p>,
      answer: {
        kind: "choice",
        options: [
          "An appeal to authority.",
          "Two cases that together cover every possibility, each leading to the same conclusion.",
          "An analogy between speech and property.",
          "A single example generalised to a rule.",
        ],
        correct: [1],
      },
    },
    {
      key: "own-thesis",
      rung: "prove",
      prompt: (
        <p>
          Choose a short argumentative text you have read recently: an opinion column, a blog post or a chapter. State its
          topic in a few words and its thesis in one sentence. Then name two sentences from the text and say what each does
          for the thesis.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes the topic from the thesis clearly.",
          "States the thesis as a single claim that could be true or false.",
          "Identifies the role of two specific sentences (reason, example, objection, background and so on).",
          "The roles are plausible given the stated thesis.",
        ],
      },
    },
    {
      key: "dialogue-thesis",
      rung: "stretch",
      prompt: (
        <p>
          Plato wrote dialogues, not essays, so it is disputed what his theses are. Explain in a paragraph why a dialogue
          makes the thesis harder to identify, and suggest one method a careful reader could use anyway.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that views are spoken by characters, so no sentence is straightforwardly the author's claim.",
          "Proposes a concrete method, such as tracking which views survive examination or comparing across dialogues.",
          "Acknowledges a limit of the proposed method.",
        ],
      },
    },
  ],

  teachBack:
    "Explain the difference between a topic and a thesis to someone writing their first essay, and tell them how to find the thesis of a text they are reading.",

  glimpse: (
    <p>
      Next you will take a thesis and its reasons and set them out as an argument in standard form. Thesis statements
      return when you write your own philosophy essay in the next chapter, and Mill&rsquo;s argument returns in Political
      Philosophy, where liberty is analysed in full.
    </p>
  ),
};
