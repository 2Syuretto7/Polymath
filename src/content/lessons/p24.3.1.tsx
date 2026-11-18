import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["Actual intentionalism", "Anti-intentionalism", "Hypothetical intentionalism"];
const ITEMS: SortItem[] = [
  { text: "A poem means what its author meant by it; the critic’s job is to recover that.", cat: "Actual intentionalism", why: "E. D. Hirsch: the author’s meaning is the only determinate and shareable standard of a valid interpretation." },
  { text: "Waves wash marks into the sand that spell a Wordsworth stanza. With no author, they are not words at all.", cat: "Actual intentionalism", why: "Knapp and Michaels’ wave poem: without an intending agent there is no language, only marks that look like it." },
  { text: "The author’s design is neither available nor desirable as a standard for judging the work.", cat: "Anti-intentionalism", why: "Wimsatt and Beardsley’s ‘intentional fallacy’ (1946): the poem belongs to the public, through its language." },
  { text: "A letter the poet wrote about what they ‘really meant’ cannot change what the poem says.", cat: "Anti-intentionalism", why: "For the anti-intentionalist, private evidence is external to the work. Only what the words publicly mean counts." },
  { text: "The birth of the reader must be at the cost of the death of the Author.", cat: "Anti-intentionalism", why: "Roland Barthes (1967): the text is a tissue of quotations, and its unity lies in its destination, not its origin." },
  { text: "Meaning is what an ideal, informed audience would best hypothesise the author intended, whatever they in fact intended.", cat: "Hypothetical intentionalism", why: "Levinson and Tolhurst: interpretation aims at the most plausible attribution of intent, given the work and its public context." },
  { text: "If a novelist privately intended a dull passage as satire, but nothing in the book or its time supports that reading, it is not satire.", cat: "Hypothetical intentionalism", why: "The best-supported hypothesis about intent, not the intent itself, fixes meaning. Private intentions do not count." },
];

export const lesson: LessonContent = {
  id: "p24.3.1",
  minutes: 90,
  links: {
    revisits: ["p24.2.3", "p24.2.2", "p0.2.4"],
    foreshadows: ["p24.3.2", "p24.4.1", "p24.4.2"],
  },

  puzzle: (
    <>
      <p>
        Humpty Dumpty tells Alice that by &lsquo;glory&rsquo; he means &lsquo;a nice knock-down argument&rsquo;. Alice objects
        that it does not mean that. Who is right about what Humpty said? And when a poet says a poem means one thing and a
        critic finds another in it, whose reading wins?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort these claims among three views of how a work&rsquo;s meaning relates to its author&rsquo;s intention.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which view of intention?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the intentional fallacy">
        <p>
          W. K. Wimsatt and Monroe Beardsley argued in 1946 that &lsquo;the design or intention of the author is neither available
          nor desirable as a standard for judging the success of a work of literary art&rsquo;. Not available: often we know
          nothing of it. Not desirable: if the poet succeeded, the poem shows what was intended; if not, the intention is not in
          the poem. Meaning is public, fixed by the language and conventions the work uses.
        </p>
      </Definition>

      <Definition title="actual intentionalism">
        <p>
          The <strong>actual intentionalist</strong> holds that a work means what its author intended. E. D. Hirsch argued that only
          the author&rsquo;s meaning gives interpretation a determinate object. Knapp and Michaels&rsquo; wave poem pushes further:
          marks with no author are not language, so to read them as words is already to posit an intender. Moderate versions, held
          by Noël Carroll and Paisley Livingston, say intentions fix meaning only when the text can bear them, which blocks Humpty
          Dumpty.
        </p>
      </Definition>

      <Definition title="hypothetical intentionalism">
        <p>
          Jerrold Levinson&rsquo;s middle way: a work means what an ideal audience, knowing the work and its public context,
          would best hypothesise the author intended. This keeps meaning tied to an author and to history, while excluding
          private diaries and letters. It explains why we read irony in Swift&rsquo;s <em>A Modest Proposal</em> without asking
          Swift.
        </p>
      </Definition>

      <Example title="categories of art">
        <p>
          Kendall Walton showed that what we perceive in a work depends on the category we place it in. Picasso&rsquo;s{" "}
          <em>Guernica</em> seen as a painting is violent and dynamic. Seen in an imagined category of
          &lsquo;guernicas&rsquo;, works whose surfaces are moulded into varied relief, it might look cold and lifeless. The correct category depends partly on what the artist intended. So even
          anti-intentionalists may need some facts about the maker.
        </p>
      </Example>

      <Remark title="meaning and value">
        <p>
          Two questions are often run together: what a work means, and how good it is. One can be an intentionalist about
          meaning while holding that a work&rsquo;s value lies in what it achieves, not in what was attempted. Many works have
          meanings their makers did not foresee, as when a poem acquires new resonance in a later age.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "fall",
      rung: "check",
      prompt: <p>What is the intentional fallacy?</p>,
      answer: { kind: "choice", options: ["Treating the author’s intention as the standard for a work’s meaning or success", "Ignoring the author entirely", "Reading poems too literally", "Judging art by its moral content"], correct: [0] },
    },
    {
      key: "hyp",
      rung: "check",
      prompt: <p>What fixes meaning for the hypothetical intentionalist?</p>,
      answer: { kind: "choice", options: ["The best hypothesis an ideal, informed audience would form about the author’s intention", "The author’s actual intention", "The reader’s personal response", "The dictionary meaning of the words alone"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, where does the wave poem belong?</p>,
      answer: { kind: "choice", options: ["Actual intentionalism", "Anti-intentionalism", "Hypothetical intentionalism", "None of them"], correct: [0] },
    },
    {
      key: "humpty",
      rung: "apply",
      prompt: <p>Which view most clearly rules against Humpty Dumpty&rsquo;s use of &lsquo;glory&rsquo;?</p>,
      answer: { kind: "choice", options: ["Moderate actual intentionalism: the words cannot bear that meaning", "Extreme actual intentionalism", "Barthes’ death of the author", "None, since Humpty intended it"], correct: [0] },
    },
    {
      key: "letter",
      rung: "apply",
      prompt: <p>A diary reveals a poet meant a love poem as a political allegory, though no reader could tell. What does Levinson say?</p>,
      answer: { kind: "choice", options: ["The poem is not a political allegory, since private evidence does not count", "The poem is now a political allegory", "The poem has no meaning", "The poem is not art"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should the author&rsquo;s intention settle what a work means? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States at least one intentionalist and one anti-intentionalist position.",
          "Considers a case or objection, such as Humpty Dumpty, the wave poem or private letters.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If a text is generated by a machine with no intentions, does it mean anything? Does your answer depend on who reads it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Connects the case to the wave poem or to anti-intentionalism.",
          "Considers whether a user’s or reader’s intentions could supply meaning.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Whatever a novel means, it moves us. We weep for Anna Karenina and fear the monster on the screen, knowing neither
        exists. How can we feel real emotions for people we know are not real?
      </p>
      <p>Next, the paradox of fiction.</p>
    </>
  ),
};
