import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["revolt within limits", "revolt that forgot its limits"];
const ITEMS: SortItem[] = [
  { text: "A slave who, after years of orders, finally says “No, this far and no further.”", cat: "revolt within limits", why: "Camus’s founding image: the no also affirms a limit, and a value shared with others." },
  { text: "A movement that executes its opponents because history will justify it.", cat: "revolt that forgot its limits", why: "Murder justified by a future goal: revolution turned against the value revolt began from." },
  { text: "Strikers who refuse to harm the families of the owners they oppose.", cat: "revolt within limits", why: "Resistance that respects the shared humanity that grounds it." },
  { text: "A rebel who declares that, since God is dead, everything is permitted.", cat: "revolt that forgot its limits", why: "Metaphysical revolt slipping into nihilism, which Camus traces through Ivan Karamazov and others." },
  { text: "Kaliayev, who would not throw his bomb at the Grand Duke because children were in the carriage.", cat: "revolt within limits", why: "Camus’s ‘fastidious assassin’, who accepted that his own act set a limit and paid with his life." },
  { text: "A party that silences its own members in the name of the coming perfect society.", cat: "revolt that forgot its limits", why: "The absolute end excuses any means: what Camus saw in Stalinism." },
  { text: "A writer who protests injustice while refusing to excuse it on either side.", cat: "revolt within limits", why: "Revolt that demands justice without a total system that sacrifices the present." },
  { text: "Terror that promises to end all suffering once the old world is destroyed.", cat: "revolt that forgot its limits", why: "Camus rejects sacrificing living people for a future paradise." },
];

export const lesson: LessonContent = {
  id: "p19.6.2",
  minutes: 80,
  links: {
    revisits: ["p19.6.1", "p19.4.2", "p9.1.3"],
    foreshadows: ["p20.7.4", "p20.7.5", "p20.1.1"],
  },

  puzzle: (
    <>
      <p>
        If the world has no meaning and no God sets limits, why not kill? Camus found this question unavoidable after a
        century of political murder justified by grand ideals. Can the same lucidity that faces the absurd also forbid
        murder?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each act by whether it keeps the limits revolt itself sets, or abandons them.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Within limits, or past them?" />
    </>
  ),

  theory: (
    <>
      <Definition title="I rebel, therefore we exist">
        <p>
          In <em>The Rebel</em> (1951), Camus begins with a slave who says no. The no is also a yes: it affirms a limit beyond
          which the master may not go, and a value worth defending. That value is not the slave&rsquo;s private property; the
          rebel risks death for something shared by all. So revolt reveals a common human nature: &ldquo;I rebel, therefore
          we exist&rdquo;, as the cogito of the absurd age.
        </p>
      </Definition>

      <Example title="metaphysical and historical revolt">
        <p>
          <strong>Metaphysical revolt</strong> protests against the human condition itself: Sade, Ivan Karamazov, Nietzsche.
          Rejecting God, it risks concluding that everything is permitted. <strong>Historical revolt</strong> becomes{" "}
          <strong>revolution</strong> when it seeks to remake the world totally, from the Jacobins to Bolshevism. When the end
          is absolute, every means is allowed, and the revolution kills in the name of the very human dignity revolt began by
          affirming.
        </p>
      </Example>

      <Definition title="measure">
        <p>
          Against this, Camus proposes <strong>measure</strong>, which he associates with &ldquo;Mediterranean thought&rdquo;:
          revolt that keeps its limits, refuses to sacrifice present people for future justice, and accepts its own
          uncertainty. He admires the Russian assassins of 1905 who believed killing could be necessary yet unjustifiable,
          and offered their own lives in return.
        </p>
      </Definition>

      <Remark title="the quarrel with Sartre">
        <p>
          <em>The Rebel</em> was read as an attack on communism. In <em>Les Temps modernes</em> (1952), Francis Jeanson
          reviewed it harshly, and Sartre&rsquo;s reply accused Camus of standing outside history as a moralist. The friendship
          ended. The quarrel is still taken up as a choice between political realism and moral limits on action, and between
          Sartre&rsquo;s and Camus&rsquo;s ways of being committed.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "no",
      rung: "check",
      prompt: <p>What does the slave&rsquo;s no affirm, for Camus?</p>,
      answer: {
        kind: "choice",
        options: ["A limit, and a value shared by all human beings", "Nothing at all", "The master’s authority", "That everything is permitted"],
        correct: [0],
      },
    },
    {
      key: "rev",
      rung: "check",
      prompt: <p>When, for Camus, does revolt turn into murderous revolution?</p>,
      answer: {
        kind: "choice",
        options: ["When it pursues an absolute end that justifies any means", "When it succeeds", "When it uses words", "When it is peaceful"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many items are revolt within limits?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "kal",
      rung: "apply",
      prompt: <p>Why does Camus admire Kaliayev?</p>,
      answer: {
        kind: "choice",
        options: ["He held his act to limits, refusing to kill children, and paid for it with his life", "He killed many people", "He never acted", "He believed history justified everything"],
        correct: [0],
      },
    },
    {
      key: "we",
      rung: "apply",
      prompt: <p>What does &ldquo;I rebel, therefore we exist&rdquo; claim?</p>,
      answer: {
        kind: "choice",
        options: ["Revolt reveals a value common to all, so a shared human nature", "Only rebels exist", "Revolution creates people", "The self is an illusion"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can revolt really supply its own limits, without a God or a moral law? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Camus’s argument that revolt affirms a shared value which murder would deny.",
          "Raises an objection, such as that rebels disagree about the value, or replies to one.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>In the quarrel between Camus and Sartre, whose side would you take, and why?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Camus’s position on limits and Sartre’s charge of moralism.",
          "Weighs one consideration on each side.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        This ends the course on phenomenology and existentialism, from Husserl&rsquo;s return to the things themselves to
        Camus&rsquo;s revolt. Its questions, about the self, freedom, meaning and death, are not only European ones.
      </p>
      <p>
        The next course turns to Indian philosophy, which asked about the self and liberation for nearly three thousand
        years. It begins with the Vedas and Upanishads, where the question &ldquo;who am I?&rdquo; first becomes a
        philosophical inquiry, and where the identity of the self and ultimate reality is first proposed.
      </p>
    </>
  ),
};
