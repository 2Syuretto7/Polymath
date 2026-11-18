import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["Exclusivism", "Inclusivism", "Pluralism"];
const ITEMS: SortItem[] = [
  { text: "Only one religion is true, and salvation comes only through explicit faith in it.", cat: "Exclusivism", why: "Truth and salvation are both confined to one tradition, as in the traditional reading of ‘no salvation outside the Church’." },
  { text: "Plantinga: I may reasonably believe my religion is true and others false, even knowing that sincere, intelligent people disagree.", cat: "Exclusivism", why: "Plantinga defends the rationality of exclusivism about truth, arguing that withholding belief would be no less arrogant." },
  { text: "Rahner: a sincere follower of another faith may be saved by Christ without knowing it, an ‘anonymous Christian’.", cat: "Inclusivism", why: "One tradition holds the full truth, but its saving power reaches beyond its explicit members." },
  { text: "The Second Vatican Council: the Church ‘rejects nothing that is true and holy’ in other religions.", cat: "Inclusivism", why: "Other religions contain partial truth, fulfilled in one’s own." },
  { text: "Hick: the great traditions are different human responses to one ultimate Real, each partly shaped by culture.", cat: "Pluralism", why: "No tradition has privileged access; all can lead to transformation from self-centredness to Reality-centredness." },
  { text: "Ramakrishna: as water is called by different names, the one God is worshipped under different names and paths.", cat: "Pluralism", why: "A Hindu pluralism: many paths to one reality. (Some read it instead as an inclusivism within Vedānta.)" },
  { text: "The blind men and the elephant: each touches one part and describes the whole wrongly.", cat: "Pluralism", why: "The parable, found in Jain, Buddhist and Hindu sources, is often used for pluralism. Critics ask who is the sighted narrator." },
];

export const lesson: LessonContent = {
  id: "p23.5.1",
  minutes: 85,
  links: {
    revisits: ["p23.4.4", "p23.4.2", "p10.6.2"],
    foreshadows: ["p23.5.2", "p24.4.2", "p25.2.1"],
  },

  puzzle: (
    <>
      <p>
        Had you been born in Chennai, Riyadh or Rome, you would very likely hold a different religion from the one you hold,
        or the irreligion. Your beliefs about the ultimate seem to depend on the accident of birth. Should that worry you? And
        if your religion is true, what about everyone else&rsquo;s?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort these claims into exclusivism, inclusivism and pluralism.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which view of religious diversity does each claim express?" />
    </>
  ),

  theory: (
    <>
      <Definition title="three positions">
        <p>
          The usual typology, from Alan Race (1983), concerns both truth and salvation. <strong>Exclusivism</strong>: one
          religion is true, and salvation, or liberation, is found only through it. <strong>Inclusivism</strong>: one religion
          is most fully true, but others contain truth and their followers can be saved through it, perhaps unknowingly.{" "}
          <strong>Pluralism</strong>: the great religions are, more or less equally, valid paths to the same ultimate reality.
        </p>
      </Definition>

      <Example title="Hick’s pluralism">
        <p>
          John Hick argued, using Kant&rsquo;s distinction between things as they are and as they appear, that the Real in
          itself is beyond all human concepts. The personal God of the Abrahamic faiths and the impersonal Brahman or
          emptiness of the Indian traditions are different phenomenal appearances of the one Real, shaped by different
          cultures. The test of a tradition is its fruit: whether it turns people from self to Reality, which all the great
          traditions seem to do about equally well.
        </p>
      </Example>

      <Remark title="objections to pluralism">
        <p>
          Critics say pluralism does not respect the religions it describes: almost none of their followers think the Real
          is beyond personal and impersonal alike, so pluralism is a new religion, not a neutral view. If the Real has no
          describable properties, it is unclear in what sense it is one, or real. And pluralism is itself a view that many
          reject, so it faces the same problem of disagreement it was meant to solve.
        </p>
      </Remark>

      <Remark title="disagreement and arrogance">
        <p>
          Exclusivists are charged with arrogance and arbitrariness. Plantinga replied that the pluralist, believing their own
          view while knowing others disagree, is in the same position. The debate connects to the epistemology of
          disagreement: if an equally informed and intelligent peer disagrees with you, conciliationists say you should lower
          your confidence, while steadfast views say you may keep it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "incl",
      rung: "check",
      prompt: <p>What does inclusivism hold?</p>,
      answer: { kind: "choice", options: ["One religion is most fully true, but followers of others can be saved through it", "All religions are equally true", "Only explicit members of one religion can be saved", "No religion is true"], correct: [0] },
    },
    {
      key: "hick",
      rung: "check",
      prompt: <p>On Hick&rsquo;s view, what are the gods and absolutes of the various religions?</p>,
      answer: { kind: "choice", options: ["Different culturally shaped appearances of one Real", "Different beings that all exist", "Inventions with nothing behind them", "Stages of one religion’s history"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, where does Rahner&rsquo;s &lsquo;anonymous Christian&rsquo; belong?</p>,
      answer: { kind: "choice", options: ["Inclusivism", "Exclusivism", "Pluralism", "None of these"], correct: [0] },
    },
    {
      key: "birth",
      rung: "apply",
      prompt: <p>What does the argument from the accident of birth suggest?</p>,
      answer: { kind: "choice", options: ["That one’s religious beliefs are shaped by upbringing, which may undermine confidence in them", "That all religions are false", "That religion is genetic", "That birthplace determines truth"], correct: [0] },
    },
    {
      key: "self",
      rung: "apply",
      prompt: <p>Which objection says pluralism faces the very problem it was meant to solve?</p>,
      answer: { kind: "choice", options: ["Pluralism is itself disputed by many, so the pluralist also holds a view others reject", "Pluralism is too simple", "Pluralism is a form of atheism", "Pluralism denies salvation"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is it arrogant to believe your religion, or your atheism, is true and the others false? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the charge of arrogance or arbitrariness against exclusivism.",
          "Considers Plantinga’s reply, or the epistemology of peer disagreement.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The parable of the blind men and the elephant is told from the point of view of someone who can see the whole elephant. Does that undermine its use for pluralism?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the narrator claims a view of the whole that the blind men lack.",
          "Considers whether the pluralist claims that same privileged view of the Real.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Much of the philosophy of religion has assumed a personal creator God. Several of the world&rsquo;s great traditions,
        many of them from India, have none, and they offer different pictures of the ultimate, the self and liberation.
      </p>
      <p>Next, non-theistic traditions: Buddhism, Advaita Vedānta, Jainism, Sāṃkhya, Daoism and Confucianism.</p>
    </>
  ),
};
