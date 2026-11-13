import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["family", "civil society", "state"];
const ITEMS: SortItem[] = [
  { text: "Parents raise their children out of love, without keeping accounts.", cat: "family", why: "The family is united by feeling. Its members do not act as separate individuals with competing claims." },
  { text: "A baker sells bread to strangers, each side pursuing their own interest.", cat: "civil society", why: "The system of needs: individuals pursue private ends and, through the market, come to depend on one another." },
  { text: "Craftsmen form a guild that trains apprentices and supports members in hard times.", cat: "civil society", why: "Hegel's corporations give individuals in civil society a second family and a sense of shared purpose." },
  { text: "Citizens see the constitution as the expression of their own freedom.", cat: "state", why: "In the state, individuals consciously will the universal as their own end." },
  { text: "A court settles a contract dispute by public law.", cat: "civil society", why: "The administration of justice belongs to civil society, protecting property and contract among private persons." },
  { text: "A married couple shares property as a common estate.", cat: "family", why: "Marriage makes property a common resource, administered for the family as a unit." },
  { text: "Public officials serve the common good rather than a private interest.", cat: "state", why: "Hegel's universal class of civil servants has the interest of the whole as its business." },
];

export const lesson: LessonContent = {
  id: "p9.1.5",
  minutes: 90,
  links: {
    revisits: ["p9.1.3", "p8.5.2", "p14.1.1"],
    foreshadows: ["p9.2.1", "p14.5.1", "p14.3.1"],
  },

  puzzle: (
    <>
      <p>
        The preface to Hegel&rsquo;s <em>Philosophy of Right</em> of 1820 contains one of the most argued-over sentences in
        philosophy: &ldquo;What is rational is actual, and what is actual is rational.&rdquo; Conservatives read it as a
        blessing on the Prussian state; radicals read it as a demand that reality be made rational. Behind it lies a
        question: is freedom just being left alone, or does it need institutions, and if so which?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Hegel&rsquo;s ethical life has three spheres. Sort each practice into the family, civil society or the state.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Where does each belong in Hegel's ethical life?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the stages of freedom">
        <p>
          The book develops the idea of free will in three parts. <strong>Abstract right</strong> is the freedom of persons
          to own property and make contracts, with punishment as the restoration of right. <strong>Morality</strong> is the
          inner freedom of conscience, the subject&rsquo;s right to act only on what it sees as good. Each is one-sided:
          rights are empty without a shared world, and conscience alone can justify anything, which Hegel thinks is the
          danger of Kant&rsquo;s empty formalism. Both are taken up in <strong>ethical life</strong>,{" "}
          <em>Sittlichkeit</em>: the customs and institutions in which freedom becomes concrete.
        </p>
      </Definition>

      <Definition title="family, civil society, state">
        <p>
          The family is unity through love. <strong>Civil society</strong>, Hegel&rsquo;s great discovery, is the modern
          sphere of the market, where individuals pursue private ends and become bound together by needs, labour and law. It
          generates great wealth but also a &ldquo;rabble&rdquo; of the poor that it cannot absorb. The{" "}
          <strong>state</strong> is the sphere in which individuals knowingly will the common good, which Hegel calls the
          actuality of concrete freedom.
        </p>
      </Definition>

      <Example title="the owl of Minerva">
        <p>
          Hegel denies that philosophy can tell the world how it ought to be. Philosophy is &ldquo;its own time apprehended
          in thoughts&rdquo;, and it always comes too late to give instruction: &ldquo;The owl of Minerva spreads its wings
          only with the falling of the dusk.&rdquo; Philosophy understands a form of life once it has matured.
        </p>
      </Example>

      <Remark title="Left and Right Hegelians">
        <p>
          After his death, Right Hegelians stressed the reconciliation of philosophy with existing religion and the state;
          Young or Left Hegelians, among them Feuerbach, Strauss and Marx, turned his method against both. Popper attacked
          Hegel as an enemy of the open society, while more recent readers see in him a theorist of liberal institutions and
          of the social conditions of freedom.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "three",
      rung: "check",
      prompt: <p>What are the three spheres of Hegel&rsquo;s ethical life?</p>,
      answer: {
        kind: "choice",
        options: [
          "Art, religion and philosophy",
          "Family, civil society and the state",
          "Property, contract and crime",
          "Being, essence and concept",
        ],
        correct: [1],
      },
    },
    {
      key: "owl",
      rung: "check",
      prompt: <p>What does the owl of Minerva image say about philosophy?</p>,
      answer: {
        kind: "choice",
        options: [
          "Philosophy predicts the future.",
          "Philosophy understands a form of life only once it has matured, too late to instruct it.",
          "Philosophy is wisdom about birds.",
          "Philosophy should be done at night.",
        ],
        correct: [1],
      },
    },
    {
      key: "civil",
      rung: "apply",
      prompt: <p>What problem does Hegel think civil society cannot solve on its own?</p>,
      answer: {
        kind: "choice",
        options: ["War", "Poverty, and the creation of a rabble", "Religious disagreement", "The family"],
        correct: [1],
      },
    },
    {
      key: "kant",
      rung: "apply",
      prompt: <p>What is Hegel&rsquo;s criticism of morality based on conscience alone?</p>,
      answer: {
        kind: "choice",
        options: [
          "That it is too demanding.",
          "That it is empty and formal, able to justify almost anything without a shared ethical world.",
          "That it ignores pleasure.",
          "That it depends on God.",
        ],
        correct: [1],
      },
    },
    {
      key: "sitt",
      rung: "apply",
      prompt: <p>What is Sittlichkeit, or ethical life?</p>,
      answer: {
        kind: "choice",
        options: [
          "Private moral feeling.",
          "The customs and institutions in which freedom becomes concrete.",
          "Obedience to a monarch.",
          "Abstract rights of property.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does freedom need institutions, as Hegel thinks, or is it simply being left alone? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Hegel's view that freedom is realised in institutions such as family, market and state.",
          "Considers the opposing view of freedom as non-interference.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "rational",
      rung: "stretch",
      prompt: <p>&ldquo;What is rational is actual, and what is actual is rational.&rdquo; Is this a conservative or a radical claim?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives the conservative reading: existing institutions are justified.",
          "Gives the radical reading: what is merely existing is not 'actual' in Hegel's sense, and reality must become rational.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the stages of Hegel's Philosophy of Right, from abstract right and morality to ethical life, the roles of family, civil society and state, and the debate over 'the rational is actual'.",

  glimpse: (
    <p>
      The next chapter follows the Young Hegelians, beginning with Feuerbach&rsquo;s critique of religion. Marx turns
      Hegel&rsquo;s civil society into a critique of capitalism, and twentieth-century political philosophy argues over
      positive and negative liberty.
    </p>
  ),
};
