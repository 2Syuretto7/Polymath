import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["contact (saṃyoga)", "inherence (samavāya)", "absence (abhāva)"];
const ITEMS: SortItem[] = [
  { text: "“A pot is on the floor.”", cat: "contact (saṃyoga)", why: "Two substances joined by a separable relation: the pot can be moved and both remain." },
  { text: "“A bird is perched on a tree.”", cat: "contact (saṃyoga)", why: "Contact again: a temporary relation between two substances." },
  { text: "“Blue is in the cloth.”", cat: "inherence (samavāya)", why: "A quality inheres in its substance and cannot exist apart from it." },
  { text: "“Cowness is in this cow.”", cat: "inherence (samavāya)", why: "A universal inheres in each of its instances." },
  { text: "“There is no pot on the floor.”", cat: "absence (abhāva)", why: "A relational absence: the floor is the locus of an absence whose counterpositive is a pot, related by contact." },
  { text: "“A pot is not a cloth.”", cat: "absence (abhāva)", why: "A mutual absence, or difference: the pot lacks identity with cloth." },
];

export const lesson: LessonContent = {
  id: "p20.7.1",
  minutes: 85,
  links: {
    revisits: ["p20.2.2", "p20.2.3", "p2.4.1"],
    foreshadows: ["p20.7.2", "p20.7.6", "p20.7.4"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;There is no blue pot here.&rdquo; Suppose a red pot is standing here. Is the sentence true? It depends on what
        exactly is said to be absent: pots, or blue pots, or blueness. Ordinary language blurs this. Could a technical
        language force every such distinction into the open, without using any symbols?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort these sentences by the relation they express, as a Naiyāyika would.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Contact, inherence, or absence?" />
    </>
  ),

  theory: (
    <>
      <Definition title="Gaṅgeśa and the new Nyāya">
        <p>
          Gaṅgeśa Upādhyāya of Mithilā, in the fourteenth century, wrote the <em>Tattvacintāmaṇi</em>, &lsquo;the
          wish-fulfilling jewel of reflection on truth&rsquo;. Its four books treat the four means of knowledge of Nyāya:
          perception, inference, comparison and testimony. It founded <strong>Navya-Nyāya</strong>, &lsquo;new Nyāya&rsquo;,
          carried on by Raghunātha Śiromaṇi and Gadādhara, and it became the shared language of rigorous argument in India.
        </p>
      </Definition>

      <Example title="a precise technical language">
        <p>
          Every cognition is analysed into a <strong>qualificand</strong> (what it is about), a <strong>qualifier</strong>{" "}
          (what is said of it), and the <strong>relation</strong> between them. An absence has a{" "}
          <strong>counterpositive</strong> (pratiyogin), the thing absent, and a <strong>limitor</strong> (avacchedaka) that
          fixes under which description it is absent. &ldquo;No blue pot here&rdquo; is an absence whose counterpositive is
          limited by blue-pot-ness: a red pot does not make it false. &ldquo;No pot here&rdquo;, limited by pot-ness, would be
          false.
        </p>
      </Example>

      <Definition title="defining pervasion">
        <p>
          Inference rests on pervasion (vyāpti): the reason never occurs without the property. Gaṅgeśa examined and rejected
          many definitions, each failing on some case, and settled on one in terms of absence: the reason is pervaded by the
          property when the reason never occurs in a locus of any absence of the property, with the absence specified by its
          limitor so that partial absences do not count.
        </p>
      </Definition>

      <Remark title="logic without symbols">
        <p>
          Modern scholars such as Daniel Ingalls and Bimal Krishna Matilal compared Navya-Nyāya with formal logic. It does the
          work of quantifiers and variables through abstract nouns: &lsquo;smoke-ness&rsquo;, &lsquo;the counterpositive-ness
          limited by pot-ness&rsquo;. Its language spread to grammar, law and poetics, and was still taught in pandit schools
          in the twentieth century.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "who",
      rung: "check",
      prompt: <p>What work founded Navya-Nyāya?</p>,
      answer: { kind: "choice", options: ["Gaṅgeśa’s Tattvacintāmaṇi", "The Nyāya Sūtra", "The Mīmāṃsā Sūtra", "Dignāga’s Pramāṇasamuccaya"], correct: [0] },
    },
    {
      key: "counter",
      rung: "check",
      prompt: <p>In Navya-Nyāya, what is the counterpositive (pratiyogin) of an absence?</p>,
      answer: { kind: "choice", options: ["The thing that is absent", "The place where it is absent", "The person who notices the absence", "The cause of the absence"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many sentences express an absence?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "limit",
      rung: "apply",
      prompt: <p>A red pot stands here. Which sentence is true?</p>,
      answer: { kind: "choice", options: ["There is an absence of a blue pot here", "There is an absence of a pot here", "There is an absence of pot-ness here", "None of these"], correct: [0] },
    },
    {
      key: "vyapti",
      rung: "apply",
      prompt: <p>Which statement captures Gaṅgeśa&rsquo;s style of defining pervasion?</p>,
      answer: { kind: "choice", options: ["The reason never occurs where the property is absent", "The reason sometimes occurs with the property", "The property is perceived with the reason once", "The reason and property have the same cause"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a natural language made more precise do the work of formal symbols? Argue briefly, using Navya-Nyāya.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes how Navya-Nyāya achieves precision, such as through limitors, counterpositives or abstract nouns.",
          "Weighs a cost or benefit, such as unwieldy length against keeping contact with meaning.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the limitor (avacchedaka) doing the same job as specifying a property or description in modern logic? Compare.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains that the limitor fixes under which description something is present or absent.",
          "Compares this with predicates, scope or quantification in modern logic, noting a likeness or difference.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        While Navya-Nyāya flourished in the pandit schools, colonial rule brought Indian thought face to face with Western
        science and Christianity. Some answered by reviving Vedānta as a universal philosophy for the modern world.
      </p>
      <p>
        Next, Swami Vivekananda: Ramakrishna&rsquo;s disciple, his address at Chicago in 1893, the four yogas, and a
        &lsquo;practical Vedānta&rsquo; that made service to the poor a form of worship.
      </p>
    </>
  ),
};
