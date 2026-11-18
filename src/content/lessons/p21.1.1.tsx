import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["ren (humaneness)", "li (ritual propriety)", "xiao (filial piety)"];
const ITEMS: SortItem[] = [
  { text: "Fan Chi asked about ren. The Master said, “Love others.”", cat: "ren (humaneness)", why: "Analects 12.22: the simplest statement of ren, care for people." },
  { text: "“Do not impose on others what you yourself do not desire.”", cat: "ren (humaneness)", why: "Analects 12.2, given in answer to a question about ren: the negative golden rule, also called shu, reciprocity." },
  { text: "“Respectfulness without ritual becomes laboured; caution without ritual becomes timidity.”", cat: "li (ritual propriety)", why: "Analects 8.2: good dispositions need the forms of li to be expressed well." },
  { text: "“In mourning, deep grief is better than meticulous ceremony.”", cat: "li (ritual propriety)", why: "After Analects 3.4: ritual matters, but its forms must express real feeling, not replace it." },
  { text: "“While they live, serve them according to ritual; when they die, bury them according to ritual.”", cat: "xiao (filial piety)", why: "Analects 2.5, Confucius’s answer to a question about filial piety: care for parents shaped by li." },
  { text: "“Filial piety and respect for elders: are they not the root of ren?”", cat: "xiao (filial piety)", why: "Analects 1.2, said by the disciple Youzi: virtue learnt first in the family, then extended outwards." },
];

export const lesson: LessonContent = {
  id: "p21.1.1",
  minutes: 80,
  links: {
    revisits: ["p5.4.1", "p5.4.2", "p0.2.4"],
    foreshadows: ["p21.1.2", "p21.1.3", "p21.2.1"],
  },

  puzzle: (
    <>
      <p>
        Bowing, shaking hands, saying thank you: these are conventions, and they vary from place to place. Are they mere
        etiquette, or can they be part of being a good person? Could someone be kind at heart while ignoring every custom,
        or punctilious about every custom while unkind?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort sayings from the <em>Analects</em> by the virtue they are about.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Ren, li, or filial piety?" />
    </>
  ),

  theory: (
    <>
      <Definition title="Confucius and the Analects">
        <p>
          Kongzi, Latinised as Confucius (551&ndash;479 BCE), was a teacher and would-be adviser in the state of Lu, in an
          age of political disorder. The <em>Analects</em> (Lunyu) is a collection of his sayings and conversations with
          disciples, compiled after his death. He presented himself as a transmitter of the ways of the early Zhou dynasty, not
          an innovator.
        </p>
      </Definition>

      <Example title="ren, humaneness">
        <p>
          <strong>Ren</strong> is the highest virtue: humaneness, benevolence, being fully a person among people. Asked about
          it, Confucius answered differently for each disciple, but its core is love of others and{" "}
          <strong>shu</strong>, reciprocity: &ldquo;Do not impose on others what you yourself do not desire.&rdquo; Confucius
          rarely granted that anyone had achieved it.
        </p>
      </Example>

      <Definition title="li, ritual propriety">
        <p>
          <strong>Li</strong> began as the rites of sacrifice and court, and widened to all the forms of proper conduct:
          greetings, mourning, the way a son speaks to a father. Confucius said ren is to &lsquo;restrain oneself and return to
          ritual&rsquo; (12.1). Li gives feeling a shared form; ren keeps ritual from being empty. Filial piety,{" "}
          <strong>xiao</strong>, is where both are first learnt.
        </p>
      </Definition>

      <Remark title="how they relate">
        <p>
          Interpreters disagree whether ren is the inner source and li its outward expression, or whether ren just is li
          performed with the right spirit. Herbert Fingarette argued that li is a kind of &lsquo;holy rite&rsquo; in which
          human dignity is realised through shared forms. Comparisons with Aristotle&rsquo;s virtues, acquired by habituation,
          and with care ethics, rooted in relationships, are natural.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ren",
      rung: "check",
      prompt: <p>What is ren?</p>,
      answer: { kind: "choice", options: ["Humaneness: the highest virtue, centred on love of others", "The rites of sacrifice", "Respect for parents", "Knowledge of the classics"], correct: [0] },
    },
    {
      key: "li",
      rung: "check",
      prompt: <p>What does li cover in the Analects?</p>,
      answer: { kind: "choice", options: ["The forms of proper conduct, from sacrifice to everyday courtesy", "Only temple sacrifices", "Written law", "Physical strength"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many sayings concern filial piety?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "shu",
      rung: "apply",
      prompt: <p>&ldquo;Do not impose on others what you yourself do not desire&rdquo; expresses which idea?</p>,
      answer: { kind: "choice", options: ["Shu, reciprocity", "Li, ritual", "Xiao, filial piety", "Zhengming, correct names"], correct: [0] },
    },
    {
      key: "mourn",
      rung: "apply",
      prompt: <p>Why did Confucius prefer deep grief to meticulous ceremony in mourning?</p>,
      answer: { kind: "choice", options: ["Ritual forms must express genuine feeling", "Because ceremonies are unimportant", "Because grief is a duty", "Because ceremonies are expensive"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can a person be good without following any conventions of courtesy? Argue briefly, using ren and li.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the Confucian view that feeling needs shared forms (li) to be expressed well, and that li needs ren.",
          "Considers an objection, such as conventions that are arbitrary or unjust.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Compare Confucius&rsquo;s view that virtue is learnt first in the family with an ethics of impartial principles. Which is more convincing?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Confucian view of filial piety as the root of ren, extended outwards.",
          "Contrasts it with an impartial view, such as Kant’s or the utilitarians’, or with care ethics.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Ren and li are virtues; the Analects is less interested in rules than in the kind of person who has them. That person
        has a name, which once meant a nobleman by birth.
      </p>
      <p>
        Next, the junzi: Confucius&rsquo;s exemplary person, defined by character rather than birth, contrasted at every turn
        with the petty person, and the role of learning in becoming one.
      </p>
    </>
  ),
};
