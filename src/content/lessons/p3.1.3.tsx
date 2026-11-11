import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ReadingsViz, type AmbigItem } from "@/components/viz/ReadingsViz";
import type { LessonContent } from "@/lib/types";

const ITEMS: AmbigItem[] = [
  {
    sentence: "She sat by the bank and waited.",
    kind: "lexical ambiguity: one word, two meanings",
    readings: [
      { label: "river", gloss: "She sat beside the river's edge and waited." },
      { label: "money", gloss: "She sat beside the building where money is kept and waited." },
    ],
    note: "'Bank' is two words that happen to share a spelling. Context usually settles which is meant, but not always.",
  },
  {
    sentence: "Visiting relatives can be tiring.",
    kind: "syntactic ambiguity: one string of words, two structures",
    readings: [
      { label: "going to visit", gloss: "Going to visit your relatives can be tiring." },
      { label: "relatives who visit", gloss: "Relatives who come to visit you can be tiring." },
    ],
    note: "No single word is ambiguous. The words can be grouped in two ways, and the grouping changes the meaning.",
  },
  {
    sentence: "Every student read a book.",
    kind: "scope ambiguity: which quantifier comes first",
    readings: [
      { label: "each their own", gloss: "For each student there is some book they read, perhaps a different one for each." },
      { label: "one book for all", gloss: "There is one particular book that every student read." },
    ],
    note: "In the notation of Logic I, ∀x∃y differs from ∃y∀x. The second reading implies the first, but not the other way round.",
  },
  {
    sentence: "Nothing is better than eternal happiness.",
    kind: "a quantifier mistaken for a name",
    readings: [
      { label: "no thing", gloss: "There is no thing that is better than eternal happiness." },
      { label: "having nothing", gloss: "Having nothing at all is better than eternal happiness." },
    ],
    note: "The first reading is the natural one. The puzzle's argument needs the second reading in its other premise, so it equivocates.",
  },
];

export const lesson: LessonContent = {
  id: "p3.1.3",
  minutes: 60,
  links: {
    revisits: ["p0.3.2", "p2.4.2", "p0.4.2"],
    foreshadows: ["p3.2.2", "p15.5.2"],
  },

  puzzle: (
    <>
      <p>Consider this argument.</p>
      <ol>
        <li>Nothing is better than eternal happiness.</li>
        <li>A cheese sandwich is better than nothing.</li>
        <li>So a cheese sandwich is better than eternal happiness.</li>
      </ol>
      <p>
        Both premises seem true. The form looks valid: if A beats B, and B beats C, then A beats C. Yet the conclusion is
        absurd. Something has gone wrong, and it is not in the logic of &ldquo;better than&rdquo;. Where is it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The word &ldquo;nothing&rdquo; is doing two different jobs. In the first premise it means &ldquo;there is no
        thing that&rdquo;; in the second it names a situation, having nothing at all. Once the two senses are separated,
        the argument falls apart. Many bad arguments, and many genuine disagreements, turn on a word or sentence that can
        be read in more than one way. Switch between the readings of each sentence below.
      </p>
      <ReadingsViz items={ITEMS} />
    </>
  ),

  theory: (
    <>
      <Definition title="ambiguity and vagueness">
        <p>
          An expression is <strong>ambiguous</strong> if it has two or more distinct meanings: &ldquo;bank&rdquo;,
          &ldquo;visiting relatives&rdquo;. It is <strong>vague</strong> if it has one meaning with no sharp boundary, so
          that there are borderline cases: &ldquo;tall&rdquo;, &ldquo;bald&rdquo;, &ldquo;heap&rdquo;. Asking &ldquo;which
          meaning?&rdquo; resolves ambiguity. Vagueness is not resolved that way, because there is only one meaning; it can
          only be reduced, by drawing a line for some purpose.
        </p>
      </Definition>

      <Remark title="kinds of ambiguity">
        <ul>
          <li><strong>Lexical</strong>: a single word has several meanings (&ldquo;bank&rdquo;, &ldquo;light&rdquo;, &ldquo;right&rdquo;).</li>
          <li><strong>Syntactic</strong>: the words can be grouped in different ways (&ldquo;old men and women&rdquo;: are the women old too?).</li>
          <li><strong>Scope</strong>: quantifiers, negations or modal words can be read in different orders. &ldquo;All that glitters is not gold&rdquo; usually means that not all of it is gold, not that none of it is.</li>
          <li><strong>Reference</strong>: it is unclear what a pronoun picks out (&ldquo;Asha told Ben that she had won&rdquo;: who won?).</li>
        </ul>
        <p>
          Logic I gave a way to make scope precise: write the sentence in quantifier notation, and the different readings
          become different formulas.
        </p>
      </Remark>

      <Definition title="kinds of definition">
        <ul>
          <li>
            A <strong>lexical definition</strong> reports how a word is already used, and can be right or wrong:
            &ldquo;a &lsquo;sibling&rsquo; is a brother or sister&rdquo;.
          </li>
          <li>
            A <strong>stipulative definition</strong> gives a new word, or an old word in a new context, a meaning by
            decision: &ldquo;call a number &lsquo;perfect&rsquo; if it equals the sum of its proper divisors&rdquo;. It
            cannot be false, only useful or useless.
          </li>
          <li>
            A <strong>precising definition</strong> reduces vagueness for a purpose: &ldquo;for this survey, an adult is
            anyone aged 18 or over&rdquo;. It should respect ordinary use where it is clear, and decide only the
            borderline cases.
          </li>
          <li>
            A <strong>persuasive definition</strong> slips a judgement into a definition so as to win an argument:
            &ldquo;taxation is theft&rdquo;, offered as if it simply reported what &ldquo;taxation&rdquo; means.
          </li>
        </ul>
      </Definition>

      <Remark title="testing a definition">
        <p>
          A definition of the form &ldquo;an X is a Y that Z&rdquo; can fail in two ways. It is{" "}
          <strong>too broad</strong> if it lets in things that are not X, and <strong>too narrow</strong> if it leaves out
          things that are X. Both are shown by counterexamples. &ldquo;A chair is a piece of furniture for sitting
          on&rdquo; is too broad: a sofa fits. &ldquo;A chair is a wooden seat with four legs and a back&rdquo; is too
          narrow: a plastic chair does not fit. A definition can be too broad and too narrow at once.
        </p>
      </Remark>

      <Example title="the featherless biped">
        <p>
          According to Diogenes Laertius, when Plato defined a human being as a featherless animal with two legs, Diogenes
          the Cynic plucked a chicken, brought it into the lecture room and said that here was Plato&rsquo;s human being.
          The definition was then amended to add &ldquo;with broad nails&rdquo;. The story may be a joke, but the method
          is sound: a single clear counterexample shows a definition is too broad.
        </p>
      </Example>

      <Remark title="verbal and real disagreements">
        <p>
          Two people may seem to disagree when they are using a word in different senses. Does a tree that falls in an
          empty forest make a sound? If &ldquo;sound&rdquo; means a vibration in the air, yes; if it means something heard,
          no. Once the senses are separated, nothing may be left to argue about. A good first question in any dispute is:
          do we mean the same thing by the key word? Sometimes the answer reveals that the dispute was verbal; sometimes it
          reveals a real disagreement hiding behind the word.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ambig",
      rung: "check",
      prompt: <p>Which sentence is ambiguous rather than vague?</p>,
      answer: {
        kind: "choice",
        options: ["He is tall.", "They waited by the bank.", "The room is warm.", "That pile is a heap."],
        correct: [1],
      },
    },
    {
      key: "kind",
      rung: "check",
      prompt: (
        <p>
          &ldquo;For this study, a household counts as &lsquo;large&rsquo; if it has six or more members.&rdquo; What kind of
          definition is this?
        </p>
      ),
      answer: { kind: "choice", options: ["lexical", "stipulative", "precising", "persuasive"], correct: [2] },
    },
    {
      key: "syntax",
      rung: "apply",
      prompt: <p>&ldquo;The police were told to stop drinking in the park.&rdquo; What kind of ambiguity is this?</p>,
      answer: { kind: "choice", options: ["lexical", "syntactic", "scope", "none; it is vague"], correct: [1] },
    },
    {
      key: "broad",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;A bird is an animal that can fly.&rdquo; Choose every correct verdict on this definition.
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "It is too broad, because bats can fly.",
          "It is too narrow, because penguins cannot fly.",
          "It is a stipulative definition.",
          "It is correct.",
        ],
        correct: [0, 1],
      },
    },
    {
      key: "scope",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;Every student read a book.&rdquo; Which reading follows from &ldquo;There is one book that every student
          read&rdquo;?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Only the reading on which each student read some book, perhaps different ones.",
          "Only the reading on which one book was read by all.",
          "Both readings.",
          "Neither reading.",
        ],
        correct: [2],
      },
    },
    {
      key: "sandwich",
      rung: "prove",
      prompt: (
        <p>
          Diagnose the cheese sandwich argument from the puzzle. Rewrite each premise to make its meaning of
          &ldquo;nothing&rdquo; explicit, and show that on no single reading are both premises true and the argument
          valid.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Rewrites premise 1 as 'there is no thing better than eternal happiness'.",
          "Rewrites premise 2 as 'a cheese sandwich is better than having nothing at all'.",
          "Explains that the chain 'A beats B, B beats C' needs the same B in both premises, and that on either uniform reading one premise becomes false or the inference fails. Calls this an equivocation, or explains it in other words.",
        ],
      },
    },
    {
      key: "friend",
      rung: "stretch",
      prompt: (
        <p>
          &ldquo;A real friend never criticises you. Priya criticised me, so Priya was never a real friend.&rdquo; What
          kind of definition is at work here, and why does it make the claim impossible to test? Suggest a fairer
          definition of a friend.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies a persuasive or stipulative definition presented as if it were lexical.",
          "Explains that any counterexample (a friend who criticises) is ruled out by definition, so the claim cannot be refuted by experience.",
          "Offers a fairer definition that respects ordinary use, perhaps noting that real friends sometimes criticise out of care. Any thoughtful answer is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between ambiguity and vagueness, the main kinds of definition, and how a counterexample shows that a definition is too broad or too narrow.",

  glimpse: (
    <p>
      The next chapter collects the fallacies that exploit ambiguity, beginning with equivocation, the slip in the cheese
      sandwich argument. Philosophy of Language studies how the meaning of a sentence can shift with its context, and why
      some words, like &ldquo;I&rdquo;, &ldquo;here&rdquo; and &ldquo;tall&rdquo;, change what they pick out from one
      occasion to the next.
    </p>
  ),
};
