import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["liberty protected", "society may step in"];
const ITEMS: SortItem[] = [
  {
    text: "An adult takes up a dangerous mountaineering habit, risking only their own life.",
    cat: "liberty protected",
    why: "Purely self-regarding. Others may argue, warn and plead, but may not compel.",
  },
  {
    text: "A newspaper prints the claim that corn dealers starve the poor.",
    cat: "liberty protected",
    why: "Mill’s own example: as an opinion in print, it must be free, however unfair.",
  },
  {
    text: "The same claim is shouted to an angry mob outside a corn dealer’s house.",
    cat: "society may step in",
    why: "Now it is a positive instigation to harm. Context turns expression into an act that endangers others.",
  },
  {
    text: "A police officer is drunk while on duty.",
    cat: "society may step in",
    why: "Being drunk is self-regarding, but failing in a duty owed to others is not. Mill allows punishment here.",
  },
  {
    text: "Someone holds religious views the great majority finds offensive.",
    cat: "liberty protected",
    why: "Offence is not harm in Mill’s sense. The tyranny of the majority is exactly what the essay opposes.",
  },
  {
    text: "Parents refuse to have their child educated at all.",
    cat: "society may step in",
    why: "The child is another person. Mill supported compulsory education, with the state testing results rather than running schools.",
  },
  {
    text: "A person is about to step onto a bridge known to be unsafe, and there is no time to warn them.",
    cat: "society may step in",
    why: "Mill says they may be seized and turned back: this is no real infringement, since they do not want to fall into the river.",
  },
];

export const lesson: LessonContent = {
  id: "p9.5.2",
  minutes: 80,
  links: {
    revisits: ["p9.5.1", "p5.2.1", "p14.1.2"],
    foreshadows: ["p9.5.3", "p14.3.1", "p14.4.2"],
  },

  puzzle: (
    <>
      <p>
        In 1859 Mill published a short book that he expected to outlast everything else he wrote. On Liberty asks when
        society, by law or by the pressure of opinion, may rightly interfere with an individual. His answer is one simple
        principle. Is it as simple as it looks?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Decide, for each case, whether Mill would protect the person&rsquo;s liberty or let society step in.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Does the harm principle allow interference here?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the harm principle">
        <p>
          &ldquo;The only purpose for which power can be rightfully exercised over any member of a civilised community, against
          his will, is to prevent harm to others.&rdquo; A person&rsquo;s own good, physical or moral, is not a sufficient
          warrant. Over themselves, over their own body and mind, the individual is sovereign.
        </p>
      </Definition>

      <Definition title="the tyranny of the majority">
        <p>
          Mill&rsquo;s worry is not only the state. In a democracy, the majority can impose its opinions and customs through
          social pressure, which &ldquo;leaves fewer means of escape&rdquo; than legal penalties, penetrating into the details
          of life and enslaving the soul itself.
        </p>
      </Definition>

      <Example title="the arguments for free discussion">
        <p>
          Silencing an opinion is wrong whether or not it is true. If it is true, we lose the truth, and to silence it assumes
          our own infallibility. If it is partly true, as most opinions are, we lose the part we lack. If it is wholly false,
          we lose the clearer understanding of the truth that comes from its collision with error. And a truth never
          challenged becomes a dead dogma, held as a prejudice, its meaning in danger of being lost.
        </p>
      </Example>

      <Example title="individuality">
        <p>
          Mill borrows from Wilhelm von Humboldt the ideal of the full development of each person&rsquo;s powers. People are
          not machines built to a model but trees that need to grow on all sides. Society benefits from &ldquo;experiments of
          living&rdquo;, and eccentricity is itself a service against the despotism of custom.
        </p>
      </Example>

      <Remark title="questions for the principle">
        <p>
          What counts as harm? If offence or the decline of shared morals counts, the principle protects little; if only
          physical injury counts, it may protect too much. Is any conduct purely self-regarding? James Fitzjames Stephen
          argued that society must enforce morality, a debate revived by Devlin and Hart over laws on homosexuality. Mill also
          restricted the principle to &ldquo;the maturity of their faculties&rdquo;, excluding children and, notoriously,
          peoples he called backward, a limit that sits uneasily with his own argument about fallibility. His partner Harriet
          Taylor shaped the book, and their joint work led to The Subjection of Women (1869).
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "principle",
      rung: "check",
      prompt: <p>According to the harm principle, when may power be exercised over a person against their will?</p>,
      answer: {
        kind: "choice",
        options: ["To make them better off.", "Only to prevent harm to others.", "Whenever the majority disapproves.", "To uphold religious morality."],
        correct: [1],
      },
    },
    {
      key: "corn",
      rung: "check",
      prompt: <p>What does Mill&rsquo;s corn dealer example show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That some opinions must be banned.",
          "That the same words can be protected opinion in print but a punishable incitement before a mob.",
          "That corn dealers deserve criticism.",
          "That newspapers should be regulated.",
        ],
        correct: [1],
      },
    },
    {
      key: "dogma",
      rung: "apply",
      prompt: <p>Why does Mill think we should hear objections even to an opinion we know is true?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because no opinion is ever true.",
          "Because unchallenged truth becomes dead dogma, held without understanding.",
          "Because the majority is always wrong.",
          "Because objections are entertaining.",
        ],
        correct: [1],
      },
    },
    {
      key: "seatbelt",
      rung: "apply",
      prompt: <p>A law requires adults to wear seatbelts for their own protection. On the harm principle as Mill states it, is this law justified?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes, because it prevents harm.",
          "Not by that reason alone: preventing harm to oneself is paternalism, which the principle excludes.",
          "Yes, because the majority supports it.",
          "The principle says nothing about laws.",
        ],
        correct: [1],
      },
    },
    {
      key: "majority",
      rung: "apply",
      prompt: <p>Which of these is an example of what Mill calls social tyranny?</p>,
      answer: {
        kind: "choice",
        options: [
          "A fine for dangerous driving.",
          "A community shunning anyone who dresses unconventionally.",
          "A court ruling on a contract.",
          "A tax on imports.",
        ],
        correct: [1],
      },
    },
    {
      key: "offence",
      rung: "prove",
      prompt: <p>Should serious offence count as harm under the harm principle? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why counting offence would greatly widen what society may forbid.",
          "Considers the other side, such as cases of deep distress or public indecency.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "slavery",
      rung: "stretch",
      prompt: <p>Mill says a person may not sell themselves into slavery. Is this consistent with the harm principle?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the sale looks self-regarding, so the principle seems to allow it.",
          "States Mill's reply: the principle of freedom cannot require that a person be free not to be free.",
          "Assesses whether this reply is a principled limit or a paternalist exception. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Mill's harm principle, the tyranny of the majority, his arguments for freedom of discussion, his ideal of individuality, and the main questions critics have raised.",

  glimpse: (
    <p>
      The next lesson turns to Mill&rsquo;s Utilitarianism and his refinement of Bentham. Political philosophy later
      distinguishes negative and positive liberty, and theories of deliberative democracy return to free discussion.
    </p>
  ),
};
