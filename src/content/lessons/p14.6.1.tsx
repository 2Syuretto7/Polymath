import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz, type CaseVerdict } from "@/components/viz/CaseMatrixViz";
import type { LessonContent } from "@/lib/types";

const THEORIES = ["cosmopolitanism", "statism", "humanitarian duty only"];
const CASES = ["a child abroad dies of a cheap-to-prevent disease", "trade rules favour rich countries", "income depends hugely on country of birth", "a citizen and a foreigner equally poor"];
const V: CaseVerdict[][] = [
  [
    { ok: true, why: "Everyone’s interests count equally, wherever they live; Peter Singer’s drowning child argument makes the duty to help strong." },
    { ok: true, why: "Thomas Pogge argues that the global order is imposed by rich states and foreseeably causes poverty, so it is a matter of justice, not charity." },
    { ok: true, why: "Charles Beitz and others argue birthplace is as morally arbitrary as natural talent, so Rawls’s principles should apply globally." },
    { ok: false, why: "Treating them identically seems to deny that fellow citizens, who share institutions and taxes, have any special claims, which many find implausible." },
  ],
  [
    { ok: true, why: "Statists accept a humanitarian duty to prevent such deaths, even though egalitarian justice does not apply." },
    { ok: false, why: "If justice applies only within a coercive state, unfair global rules seem to escape criticism as injustice, which many find too weak." },
    { ok: false, why: "Thomas Nagel argued egalitarian justice applies only where people are jointly subject to coercive law, so the gap between countries is not an injustice in itself." },
    { ok: true, why: "Citizens share a coercive system they jointly author, which generates special egalitarian obligations to one another." },
  ],
  [
    { ok: true, why: "A duty to relieve extreme suffering covers this case." },
    { ok: false, why: "Duties of rescue do not explain why rich countries should stop benefiting from unfair arrangements." },
    { ok: false, why: "Beyond relieving severe deprivation, this view sees nothing wrong with the gap." },
    { ok: true, why: "It leaves room for special duties to compatriots beyond the shared floor." },
  ],
];

export const lesson: LessonContent = {
  id: "p14.6.1",
  minutes: 80,
  links: {
    revisits: ["p14.2.2", "p5.5.3", "p14.5.1"],
    foreshadows: ["p14.6.2", "p14.6.3", "p25.3.1"],
  },

  puzzle: (
    <>
      <p>
        The country a person is born in predicts their lifetime income better than almost anything they do. Rawls argued that
        natural talents are morally arbitrary. Is birthplace not just as arbitrary? Should principles of justice stop at
        national borders?
      </p>
    </>
  ),

  intuition: (
    <>
      <CaseMatrixViz
        theories={THEORIES}
        cases={CASES}
        verdicts={V}
        prompt="Does each view explain our considered judgement about each case?"
        caption="Cosmopolitans explain global injustice but struggle with special duties to compatriots; statists explain those duties but struggle with the global order."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="cosmopolitanism">
        <p>
          Every human being has equal moral standing, and principles of distributive justice apply globally. Strong
          cosmopolitans, such as Charles Beitz and Simon Caney, extend egalitarian principles to the world; Thomas Pogge argues
          that rich countries violate negative duties by imposing a global order that harms the poor.
        </p>
      </Definition>

      <Definition title="statism">
        <p>
          Egalitarian justice applies only among people who share a state. Thomas Nagel argued that it arises from being
          jointly subject to coercive law made in one&rsquo;s name. Rawls, in The Law of Peoples (1999), rejected a global
          difference principle and proposed only a duty to assist burdened societies until they can sustain just institutions.
        </p>
      </Definition>

      <Example title="Pogge's argument">
        <p>
          Pogge points to the resource privilege, by which anyone who seizes power can sell a country&rsquo;s resources, and
          the borrowing privilege, by which they can borrow in its name. These rules of the international order, maintained by
          rich states, reward coups and corruption. On his view, global poverty is not merely a failure to help, but a harm
          rich countries help cause.
        </p>
      </Example>

      <Remark title="practical questions">
        <p>
          The debate bears on aid, trade, migration and climate change. If birthplace is arbitrary, are immigration
          restrictions unjust, as Joseph Carens argues? If states may favour their citizens, how far? The next lesson asks
          whether nations, as distinct from states, have moral significance.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cosmo",
      rung: "check",
      prompt: <p>What does cosmopolitanism hold?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every human being has equal moral standing, and justice applies globally.",
          "Only citizens matter morally.",
          "States should be abolished immediately.",
          "Cities matter more than nations.",
        ],
        correct: [0],
      },
    },
    {
      key: "nagel",
      rung: "check",
      prompt: <p>On Nagel&rsquo;s view, what triggers egalitarian justice?</p>,
      answer: {
        kind: "choice",
        options: ["Joint subjection to coercive law made in one's name", "Trade", "Shared language", "Geography"],
        correct: [0],
      },
    },
    {
      key: "pogge",
      rung: "apply",
      prompt: <p>Why does Pogge call global poverty a matter of negative duties?</p>,
      answer: {
        kind: "choice",
        options: [
          "Rich countries impose a global order that foreseeably harms the poor, so they must stop harming, not merely help.",
          "Because charity is optional.",
          "Because the poor harm themselves.",
          "Because negative numbers measure poverty.",
        ],
        correct: [0],
      },
    },
    {
      key: "lop",
      rung: "apply",
      prompt: <p>In The Law of Peoples, what does Rawls propose instead of a global difference principle?</p>,
      answer: {
        kind: "choice",
        options: [
          "A duty to assist burdened societies until they can sustain just institutions.",
          "Open borders.",
          "A world government.",
          "No duties at all.",
        ],
        correct: [0],
      },
    },
    {
      key: "resource",
      rung: "apply",
      prompt: <p>What is the international resource privilege?</p>,
      answer: {
        kind: "choice",
        options: [
          "Whoever holds power in a country may legally sell its natural resources.",
          "Rich countries own all resources.",
          "Resources are shared equally among nations.",
          "Citizens may sell land abroad.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Should principles of distributive justice apply across borders? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the cosmopolitan argument, for example from the arbitrariness of birthplace.",
          "Considers the statist reply about shared coercive institutions.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If birthplace is morally arbitrary, are restrictions on immigration unjust?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Carens's argument or a similar one.",
          "Considers a reply, such as self-determination or the costs to existing members.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the cosmopolitan and statist views of global justice, Nagel's argument, Rawls's duty of assistance, and Pogge's argument that rich countries harm the global poor.",

  glimpse: (
    <p>
      The next lesson asks whether nations have moral significance, and the last lesson of the course examines human rights.
      Later courses apply these debates to applied ethics and policy.
    </p>
  ),
};
