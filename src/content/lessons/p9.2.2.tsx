import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["product", "activity", "species-being", "others"];
const ITEMS: SortItem[] = [
  { text: "The car a worker assembles belongs to the company, and confronts them as something they could never afford.", cat: "product", why: "The object of labour stands over against the worker as an alien power, owned by another." },
  { text: "At work they feel outside themselves; only at home, eating and resting, do they feel themselves.", cat: "activity", why: "Labour is forced, not the satisfaction of a need but only a means to satisfy needs outside it." },
  { text: "Work is something to be got through as fast as possible, and avoided like the plague when not compelled.", cat: "activity", why: "Marx's own image: the activity belongs to another, so it is self-sacrifice rather than self-expression." },
  { text: "Humans can produce freely and according to the standards of every species, even by the laws of beauty, but here they only labour to stay alive.", cat: "species-being", why: "What distinguishes human beings, free conscious production, is turned into a mere means of existence." },
  { text: "Fellow workers are rivals for jobs, and the owner is a stranger whose interest opposes theirs.", cat: "others", why: "If a person is alienated from their own activity, they are also estranged from other people." },
  { text: "The more wealth the worker produces, the poorer they become.", cat: "product", why: "The worker puts their life into the object, and it no longer belongs to them but to the object." },
];

export const lesson: LessonContent = {
  id: "p9.2.2",
  minutes: 85,
  links: {
    revisits: ["p9.2.1", "p9.1.3", "p4.6.1"],
    foreshadows: ["p9.2.3", "p9.2.4", "p14.5.1"],
  },

  puzzle: (
    <>
      <p>
        In 1844, aged twenty-six and living in Paris, Karl Marx filled notebooks with reflections on political economy and
        Hegel. They were not published until 1932. In them he asked why work, which could be the fullest expression of human
        powers, is for most people something to be endured. Feuerbach had found human nature alienated in religion. Marx
        found it alienated in the factory.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Marx distinguishes four aspects of alienated labour. Sort each description by what the worker is alienated from.
      </p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="From what is the worker alienated in each case?" />
    </>
  ),

  theory: (
    <>
      <Definition title="species-being">
        <p>
          Humans, for Marx, are distinguished by free, conscious, creative activity, through which they shape nature and see
          themselves in the world they have made. This is their <strong>species-being</strong>
          (<em>Gattungswesen</em>), a term taken from Feuerbach but given an active, practical sense. Production is not
          merely a means to life; properly understood, it is life expressing itself.
        </p>
      </Definition>

      <Definition title="the four aspects of alienated labour">
        <p>
          Under wage labour, the worker is alienated from the <strong>product</strong>, which belongs to another and
          confronts them as an alien power; from the <strong>activity</strong> of labour, which is forced and external;
          from their <strong>species-being</strong>, since free creative activity becomes a mere means of survival; and from{" "}
          <strong>other people</strong>, who appear as competitors or as owners.
        </p>
      </Definition>

      <Example title="echoes of Hegel">
        <p>
          In Hegel&rsquo;s lord and bondsman, labour was the bondsman&rsquo;s path to self-consciousness: in shaping things
          they saw their own mind. Marx agrees that labour is where humans make themselves, but asks what happens when the
          product and the process are owned by someone else. The very activity that should realise us then empties us out.
          Marx praised Hegel for grasping labour as the essence of man, but complained that the only labour Hegel knew was
          abstract mental labour.
        </p>
      </Example>

      <Remark title="the debate">
        <p>
          Is alienation an objective condition, or a feeling? Marx treats it as objective: a worker who enjoys their job may
          still be alienated if the product and process are controlled by another. Later Marxists, existentialists and
          sociologists of work developed the idea in different directions. Critics ask whether the account rests on a
          contestable theory of human nature, and whether any complex economy could avoid a division of labour.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "four",
      rung: "check",
      prompt: <p>How many aspects of alienated labour does Marx distinguish in the 1844 manuscripts?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "species",
      rung: "check",
      prompt: <p>What is species-being, for Marx?</p>,
      answer: {
        kind: "choice",
        options: [
          "The biological classification of humans.",
          "The human capacity for free, conscious, creative activity.",
          "Membership of a social class.",
          "The soul.",
        ],
        correct: [1],
      },
    },
    {
      key: "product",
      rung: "apply",
      prompt: <p>Why does the product of labour confront the worker as an alien power?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because it is badly made.",
          "Because it belongs to another, and the wealth it creates strengthens the power that dominates the worker.",
          "Because the worker does not understand it.",
          "Because it is sold abroad.",
        ],
        correct: [1],
      },
    },
    {
      key: "feuer",
      rung: "apply",
      prompt: <p>How does Marx&rsquo;s idea of alienation differ from Feuerbach&rsquo;s?</p>,
      answer: {
        kind: "choice",
        options: [
          "Marx locates it in religious belief only.",
          "Marx locates it in practical life and labour, not chiefly in religious ideas.",
          "Marx denies alienation exists.",
          "There is no difference.",
        ],
        correct: [1],
      },
    },
    {
      key: "objective",
      rung: "apply",
      prompt: <p>Could a worker who enjoys their job still be alienated, on Marx&rsquo;s view?</p>,
      answer: {
        kind: "choice",
        options: [
          "No, alienation is just a feeling.",
          "Yes, because alienation concerns who owns and controls the product and process, not only how work feels.",
          "Only if they are paid badly.",
          "Only if they are religious.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is work today still alienated in Marx&rsquo;s sense? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies at least one of Marx's aspects of alienation to a modern example.",
          "Considers a reason it may no longer apply, or applies differently.",
          "Reaches a view with a reason. Any reasonable answer earns full credit.",
        ],
      },
    },
    {
      key: "nature",
      rung: "stretch",
      prompt: <p>Does Marx&rsquo;s theory of alienation depend on a theory of human nature? Is that a weakness?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that alienation is measured against species-being, an account of what humans essentially are.",
          "Considers whether such an account is defensible, or whether Marx later moved away from it.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Marx's idea of species-being, the four aspects of alienated labour, how they relate to Hegel and Feuerbach, and the debate over whether alienation is objective.",

  glimpse: (
    <p>
      The next lesson follows Marx from alienation to historical materialism, the theory that material production shapes
      society and history. Capital later analyses exploitation, and political philosophy weighs Marxist critiques of liberal
      society.
    </p>
  ),
};
