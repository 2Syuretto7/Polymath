import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { GavagaiViz } from "@/components/viz/GavagaiViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p18.6.3",
  minutes: 80,
  links: {
    revisits: ["p18.6.2", "p18.6.1", "p15.3.2"],
    foreshadows: ["p18.7.1", "p18.7.2", "p27.5.1"],
  },

  puzzle: (
    <>
      <p>
        A linguist meets a people whose language no one has translated. A rabbit runs past, and a speaker says
        &ldquo;Gavagai&rdquo;. The linguist writes down &ldquo;rabbit&rdquo;. But might the word mean &ldquo;rabbit
        part&rdquo;, or &ldquo;a stage in the life of a rabbit&rdquo;? Could any amount of further evidence decide?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Test each translation against the speaker&rsquo;s responses. Can any be ruled out?</p>
      <GavagaiViz />
    </>
  ),

  theory: (
    <>
      <Definition title="radical translation">
        <p>
          In <em>Word and Object</em> (1960), Quine imagined translating a wholly unknown language. The only evidence is
          behaviour: which sentences speakers assent to or dissent from in which stimulus conditions. Sentences such as
          &ldquo;Gavagai&rdquo;, prompted by present stimulation, can be matched by their <strong>stimulus meaning</strong>.
          Truth-functional connectives can be identified too. Beyond that, the linguist must frame{" "}
          <strong>analytical hypotheses</strong> that go beyond any evidence.
        </p>
      </Definition>

      <Definition title="the indeterminacy thesis">
        <p>
          &ldquo;Manuals for translating one language into another can be set up in divergent ways, all compatible with the
          totality of speech dispositions, yet incompatible with one another.&rdquo; This is not just underdetermination by
          the evidence we happen to have, as in physics: Quine held that there is <strong>no fact of the matter</strong> which
          manual is correct, since all the facts are facts of behaviour, and these are already accommodated.
        </p>
      </Definition>

      <Example title="inscrutability of reference">
        <p>
          Rabbit, undetached rabbit part and rabbit stage are present in exactly the same situations. To decide, the linguist
          would ask &ldquo;is this the same gavagai as that?&rdquo;, but that needs the native words for identity and
          plurality, and adjusting their translation can keep any choice consistent. So even the reference of terms is
          inscrutable. Quine later said that the same holds at home: one can reinterpret one&rsquo;s neighbour, and oneself.
        </p>
      </Example>

      <Remark title="significance and responses">
        <p>
          If translation is indeterminate, meanings are not determinate entities that sentences express, which supports
          Quine&rsquo;s scepticism about analyticity and synonymy. Critics such as Chomsky replied that this is only the
          ordinary underdetermination of theory by data. Davidson&rsquo;s radical interpretation accepted a version of the
          thesis but argued that the principle of charity constrains interpretation enough for communication to work.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "thesis",
      rung: "check",
      prompt: <p>What does the indeterminacy of translation claim?</p>,
      answer: {
        kind: "choice",
        options: [
          "Incompatible translation manuals can fit all the behavioural facts, and there is no fact deciding between them.",
          "Translation is difficult in practice.",
          "Some languages cannot be learned.",
          "Every word has exactly one correct translation.",
        ],
        correct: [0],
      },
    },
    {
      key: "evidence",
      rung: "check",
      prompt: <p>What is the only evidence available in Quine&rsquo;s radical translation?</p>,
      answer: {
        kind: "choice",
        options: [
          "Speakers’ assent and dissent in observable stimulus conditions.",
          "The speakers’ intentions, read by introspection.",
          "A bilingual dictionary.",
          "The history of the language.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, record all six scenes. How many of the four translation hypotheses are ruled out?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "same",
      rung: "apply",
      prompt: <p>Why can&rsquo;t the linguist settle the matter by asking &ldquo;is this the same gavagai as that one?&rdquo;</p>,
      answer: {
        kind: "choice",
        options: [
          "Translating the native words for sameness requires analytical hypotheses that can be adjusted to fit any choice.",
          "Rabbits all look alike.",
          "The native speakers would refuse to answer.",
          "Questions cannot be translated at all.",
        ],
        correct: [0],
      },
    },
    {
      key: "under",
      rung: "apply",
      prompt: <p>How did Quine distinguish the indeterminacy of translation from the underdetermination of physics by evidence?</p>,
      answer: {
        kind: "choice",
        options: [
          "In physics there is a fact of the matter that the evidence fails to fix; in translation there is no further fact at all.",
          "Physics has more evidence.",
          "Translation is always determinate.",
          "There is no difference.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the gavagai example show that there is no fact about what a word means? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why the candidate translations fit the same behavioural evidence.",
          "Considers a response, such as Chomsky’s or an appeal to facts beyond behaviour.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Quine said indeterminacy begins at home. Does it make sense to say there is no fact about what you yourself mean by &ldquo;rabbit&rdquo;?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Quine’s claim that one could reinterpret one’s own words systematically without any behavioural difference.",
          "Considers the objection that one knows from the first-person point of view what one means.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, the return of metaphysics: Strawson&rsquo;s descriptive metaphysics and his account of the basic particulars in
      our conceptual scheme.
    </p>
  ),
};
