import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["the via moderna", "humanism", "the Reformation", "the new science"];
const ITEMS: SortItem[] = [
  {
    text: "Jean Buridan explains why a thrown stone keeps moving by an impetus the thrower gave it, not by the air pushing it from behind.",
    cat: "the via moderna",
    why: "Buridan, a nominalist arts master at Paris in the fourteenth century, broke with Aristotle's account of projectiles. Impetus is a step towards the idea of inertia.",
  },
  {
    text: "Nicole Oresme draws the changing intensity of a quality as a line of varying height over a stretch of time.",
    cat: "the via moderna",
    why: "Oresme, Buridan's student, pictured qualities geometrically, a forerunner of the graph, and argued that the earth's daily rotation could not be ruled out.",
  },
  {
    text: "Lorenzo Valla shows from its Latin that the Donation of Constantine cannot have been written in the fourth century.",
    cat: "humanism",
    why: "Humanist philology studied texts historically. A document the papacy relied on was exposed as a later forgery by its anachronistic words.",
  },
  {
    text: "Petrarch mocks the logic-choppers of the schools and turns to Cicero and Augustine for wisdom about how to live.",
    cat: "humanism",
    why: "The humanists wanted eloquence and moral wisdom from classical sources, not disputations. Their cry was ad fontes, back to the sources.",
  },
  {
    text: "Luther, trained in Gabriel Biel's nominalist theology, insists that scripture alone, not councils or popes, is the rule of faith.",
    cat: "the Reformation",
    why: "Luther's challenge in 1517 split the Western church. Its question, by what rule do we know what is true, was philosophical as well as religious.",
  },
  {
    text: "Each side asks the other how it knows its rule of faith is the right one, and neither can answer without going in a circle.",
    cat: "the Reformation",
    why: "The historian Richard Popkin argued that this dispute over the criterion of truth revived ancient scepticism, just as Sextus Empiricus was printed in Latin in 1562.",
  },
  {
    text: "Copernicus puts the sun, not the earth, at the centre of the planets' orbits.",
    cat: "the new science",
    why: "Published in 1543, the year of his death, the theory undermined the Aristotelian cosmos in which philosophy and theology had been at home.",
  },
  {
    text: "Galileo says that the book of nature is written in the language of mathematics.",
    cat: "the new science",
    why: "The new science explained nature by number, shape and motion, not by forms and purposes. Philosophy had to make sense of this new kind of knowledge.",
  },
];

export const lesson: LessonContent = {
  id: "p6.5.3",
  minutes: 75,
  links: {
    revisits: ["p6.5.2", "p6.5.1", "p6.4.1"],
    foreshadows: ["p7.1.1", "p16.3.1", "p11.1.2"],
  },

  puzzle: (
    <>
      <p>
        In 1300 a philosopher was almost always a cleric, wrote in Latin for other scholars, commented on Aristotle and
        reasoned within the Christian faith. In 1637 René Descartes published his Discourse on Method in French, for anyone
        with good sense, dismissed most of what he had learnt at school, and began from his own doubts. What happened in
        between? And did the late medieval thinkers prepare the way for modern philosophy, or was it a clean break?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here are eight episodes from the three centuries between Ockham and Descartes. Sort each one into the movement it
        belongs to. Notice how each one weakened a different support of the medieval synthesis.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Sort each episode by the movement it belongs to." />
    </>
  ),

  theory: (
    <>
      <Definition title="the via moderna">
        <p>
          In the universities of the fourteenth and fifteenth centuries, the followers of Ockham were called the{" "}
          <strong>via moderna</strong>, the modern way, against the <strong>via antiqua</strong> of Aquinas and Scotus.
          They were nominalists, expert logicians, and attentive to individual things and experience. At Paris, Jean
          Buridan and Nicole Oresme questioned Aristotle&rsquo;s physics on motion and on the earth&rsquo;s rest. Some
          historians, beginning with Pierre Duhem, have seen in their work the medieval roots of the scientific revolution;
          others think that overstates it.
        </p>
      </Definition>

      <Example title="God's absolute power">
        <p>
          In 1277 the bishop of Paris condemned 219 propositions, among them that God could not make several worlds or move
          the heavens in a straight line. The effect was to push thinkers to imagine what Aristotle had called impossible.
          Late medieval theologians distinguished God&rsquo;s <em>absolute</em> power, to do anything not
          self-contradictory, from God&rsquo;s <em>ordained</em> power, the order God in fact chose. If the order of nature
          is a free choice, it cannot be deduced from first principles: it has to be found out by looking. Whether this
          voluntarism helped science along is still debated, but the thought was available.
        </p>
      </Example>

      <Definition title="humanism and the Reformation">
        <p>
          Renaissance <strong>humanism</strong> recovered classical texts and the skills to read them. Marsilio Ficino
          translated all of Plato into Latin in 1484; Pico della Mirandola praised the dignity of a human being who can
          shape their own nature. The printing press, from about 1450, spread texts quickly and cheaply. Then Luther&rsquo;s
          Reformation, from 1517, broke the authority of a single church. Michel de Montaigne, reading the newly printed
          Sextus Empiricus, adopted the motto &ldquo;What do I know?&rdquo;. A sceptical crisis was in the air when
          Descartes went to school.
        </p>
      </Definition>

      <Remark title="break or continuity">
        <p>
          The new science of Copernicus, Kepler and Galileo replaced explanation by forms and purposes with explanation by
          mathematics and mechanism, and Francis Bacon called for a new method of inquiry. Modern philosophers liked to
          present themselves as starting from nothing. Yet Descartes was taught at a Jesuit college from scholastic
          textbooks, and his vocabulary of substance, mode and essence, and even some of his arguments, are medieval. The
          historian Étienne Gilson showed how much he owed to the schools. The road to modernity had many lanes, and some
          of them ran straight through the Middle Ages.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "moderna",
      rung: "check",
      prompt: <p>What was the via moderna?</p>,
      answer: {
        kind: "choice",
        options: [
          "The school of Renaissance painters in Florence.",
          "The late medieval followers of Ockham, nominalists and logicians, as against the way of Aquinas and Scotus.",
          "The Protestant churches after Luther.",
          "Galileo's experimental method.",
        ],
        correct: [1],
      },
    },
    {
      key: "sextus",
      rung: "check",
      prompt: <p>Whose works, printed in Latin in 1562, revived ancient scepticism in early modern Europe?</p>,
      answer: { kind: "choice", options: ["Plato", "Sextus Empiricus", "Aristotle", "Boethius"], correct: [1] },
    },
    {
      key: "power",
      rung: "apply",
      prompt: (
        <p>
          Why might the idea that the order of nature is a free choice of God encourage observation rather than deduction?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Because a freely chosen order cannot be worked out from first principles, so it must be discovered by looking.",
          "Because God forbids deduction.",
          "Because free choices are always simple.",
          "Because observation proves that God exists.",
        ],
        correct: [0],
      },
    },
    {
      key: "valla",
      rung: "apply",
      prompt: (
        <p>
          Valla showed that the Donation of Constantine used words not found in fourth-century Latin. What kind of argument
          is this?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "A syllogism from Aristotle's logic.",
          "Historical and linguistic criticism of a text, typical of humanist philology.",
          "An appeal to God's absolute power.",
          "A mathematical proof.",
        ],
        correct: [1],
      },
    },
    {
      key: "popkin",
      rung: "apply",
      prompt: <p>How, according to Richard Popkin, did the Reformation contribute to a sceptical crisis?</p>,
      answer: {
        kind: "choice",
        options: [
          "It banned the reading of ancient philosophers.",
          "Its dispute over the rule of faith raised the question of how any criterion of truth could be justified without circularity.",
          "It proved that the earth moves.",
          "It made Latin the only language of learning.",
        ],
        correct: [1],
      },
    },
    {
      key: "break",
      rung: "prove",
      prompt: (
        <p>
          Was early modern philosophy a break with medieval philosophy or a continuation of it? Give one consideration on
          each side and reach a view.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives a consideration for a break, such as the new science, the rejection of forms and purposes, or the turn to the individual's own doubt.",
          "Gives a consideration for continuity, such as Descartes's scholastic training and vocabulary, or the via moderna's criticism of Aristotle.",
          "Reaches a view. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "1277",
      rung: "stretch",
      prompt: (
        <p>
          The condemnation of 1277 forbade teaching that God could not move the heavens in a straight line. How could a
          ban on a proposition help natural philosophy? Consider whether this is a good explanation of later science.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that denying the proposition required admitting possibilities Aristotle ruled out, such as a vacuum or other worlds, so thinkers had to consider them.",
          "Weighs the explanation, for instance noting that the Duhem thesis is disputed or that many other causes were at work.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the main changes between Ockham and Descartes: the via moderna, the idea of God's absolute power, humanism, the Reformation and its sceptical crisis, and the new science, and whether modern philosophy was a break.",

  glimpse: (
    <p>
      The next course opens with Descartes, who answered the sceptical crisis by doubting everything he could, to find
      what could not be doubted. The Philosophy of Science course asks whether scientific revolutions are breaks or
      continuities.
    </p>
  ),
};
