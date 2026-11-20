import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PanopticonViz } from "@/components/viz/PanopticonViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p34.3.2",
  minutes: 90,
  links: {
    revisits: ["p34.3.1", "p9.6.2", "p34.2.1"],
    foreshadows: ["p34.3.3", "p34.3.4", "p35.1.2"],
  },

  puzzle: (
    <>
      <p>
        Two hundred years ago, punishment was a public spectacle on the scaffold. Today it happens quietly, behind walls,
        managed by experts who aim to reform rather than to wound. Most people call that progress. But what if the new
        system controls people more thoroughly than the old one, precisely because it reaches their habits, bodies and
        sense of who they are?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Empty the tower, let the inmates see in, and count who keeps the rules.</p>
      <PanopticonViz />
    </>
  ),

  theory: (
    <>
      <Definition title="archaeology and genealogy">
        <p>
          Michel Foucault called his early method <strong>archaeology</strong>: the study of the rules that, in a given
          period, fix what can count as a serious statement in a field such as medicine or the human sciences. In{" "}
          <em>The Order of Things</em> (1966) he described these historical frameworks as <strong>epistemes</strong>.
          From the 1970s, following Nietzsche, he turned to <strong>genealogy</strong>: tracing how present practices that
          seem natural or necessary arose from contingent struggles, so that they can be seen as changeable.
        </p>
      </Definition>

      <Definition title="power/knowledge">
        <p>
          For Foucault, power is not only a possession of rulers that represses from above. It is a network of relations
          running through institutions and everyday practices, and it is <strong>productive</strong>: it produces
          knowledge, categories and kinds of person. Knowledge in turn enables power, as when psychiatry, criminology and
          statistics define the normal and the deviant. He writes &ldquo;power/knowledge&rdquo; to mark that neither comes
          without the other.
        </p>
      </Definition>

      <Example title="discipline and the panopticon">
        <p>
          In <em>Discipline and Punish</em> (1975), Foucault contrasts the spectacle of sovereign punishment with modern{" "}
          <strong>discipline</strong>, which trains bodies through timetables, examinations and constant observation, in
          prisons, schools, barracks and factories alike. Bentham&rsquo;s panopticon is its emblem: because the inmate never
          knows when he is watched, he watches himself. Discipline normalises, ranking individuals against a norm and
          correcting deviations.
        </p>
      </Example>

      <Remark title="resistance and critics">
        <p>
          Foucault held that where there is power there is resistance, and his later work turned to{" "}
          <strong>biopower</strong>, the management of populations through health and birth rates, and to practices of the
          self by which people shape their own lives. Habermas and Nancy Fraser objected that if all norms are effects of
          power, Foucault cannot say why domination is bad or why resistance is better; Charles Taylor argued that freedom
          and truth are presupposed by his own critique.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "prod",
      rung: "check",
      prompt: <p>What does Foucault mean by calling power productive?</p>,
      answer: { kind: "choice", options: ["It creates knowledge, categories and kinds of person, not only prohibitions", "It increases economic output", "It is owned by producers", "It produces nothing"], correct: [0] },
    },
    {
      key: "gen",
      rung: "check",
      prompt: <p>What is the aim of a genealogy, in Foucault&rsquo;s sense?</p>,
      answer: { kind: "choice", options: ["To show that practices which seem necessary arose from contingent struggles", "To trace a family tree", "To prove that the present is the best possible", "To find the single origin of all things"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, empty the tower but keep it opaque. How many of the 12 inmates keep the rules?</p>,
      answer: { kind: "numeric", value: 12, tolerance: 0 },
    },
    {
      key: "disc",
      rung: "apply",
      prompt: <p>Which of these is a disciplinary technique in Foucault&rsquo;s sense?</p>,
      answer: { kind: "choice", options: ["A school examination that ranks pupils against a norm", "A public execution", "A royal pardon", "A peace treaty"], correct: [0] },
    },
    {
      key: "crit",
      rung: "apply",
      prompt: <p>What was the main objection of Habermas and Fraser to Foucault?</p>,
      answer: { kind: "choice", options: ["If all norms are effects of power, he cannot say why domination is wrong", "He ignored history", "He praised prisons", "He believed in a single ruler"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is modern punishment more humane than the scaffold, or only more efficient at control? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Foucault’s contrast between spectacle and discipline.",
          "Considers a reply, such as real gains in humaneness.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can a critic of power/knowledge say that one social order is better than another?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the normative objection to Foucault.",
          "Considers a reply on Foucault’s behalf.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Foucault historicised knowledge. A contemporary turned the same suspicion on the texts of philosophy themselves,
        reading them closely enough to find where they undo their own oppositions.
      </p>
      <p>Next, Derrida and deconstruction.</p>
    </>
  ),
};
