import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ThreeBedsViz } from "@/components/viz/ThreeBedsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p24.2.1",
  minutes: 90,
  links: {
    revisits: ["p24.1.1", "p4.3.5", "p4.3.4"],
    foreshadows: ["p24.2.2", "p24.3.2", "p24.4.1"],
  },

  puzzle: (
    <>
      <p>
        For over two thousand years, the standard answer to &lsquo;what is art?&rsquo; was: an imitation of reality. Painting
        copies how things look, drama copies how people act. Plato used this answer to condemn the arts; Aristotle used it to
        defend them. Then came abstract painting and instrumental music, which seem to copy nothing at all.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        In Book X of the <em>Republic</em>, Plato describes three beds. Select each to see who makes it and how far it stands
        from the truth.
      </p>
      <ThreeBedsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="mimesis">
        <p>
          The Greek word is <strong>mimesis</strong>: imitation, representation, enactment. The <strong>imitation theory</strong>{" "}
          says that something is art just in case it imitates or represents some part of reality, and that its value lies in
          how well it does so. Painting, sculpture, epic poetry and drama were the model cases.
        </p>
      </Definition>

      <Example title="Plato's charge">
        <p>
          The carpenter makes a bed by looking to the Form of Bed. The painter copies the carpenter&rsquo;s bed, and only as it
          looks from one side. So the painting is an image of an image, third from the truth. The painter needs no knowledge of
          beds, only of appearances. Worse, poetry imitates the emotional parts of the soul and feeds them, so Plato would admit
          to the ideal city only hymns to the gods and praises of good men.
        </p>
      </Example>

      <Example title="Aristotle's defence">
        <p>
          In the <em>Poetics</em>, Aristotle agrees that art is mimesis, but finds it natural and valuable. Humans learn first by
          imitating, and we enjoy looking at accurate likenesses even of things painful to see, because we learn from them.
          Tragedy imitates an action, and by arousing pity and fear achieves <em>katharsis</em> of such emotions. Poetry is more
          philosophical than history, since it speaks of the universal: what such a person would do.
        </p>
      </Example>

      <Definition title="the objections">
        <p>
          As a definition, imitation is neither necessary nor sufficient. Not necessary: instrumental music, abstract painting
          and much architecture represent nothing. Not sufficient: a passport photograph, a road map and a forensic sketch all
          represent, but are not usually counted as art. And as a theory of value, it seems to praise the trompe l&rsquo;oeil
          above the expressive.
        </p>
      </Definition>

      <Remark title="what survives">
        <p>
          Representation remains central to much art, and theories of depiction still ask how a picture represents: by
          resemblance, by convention, or by letting us &lsquo;see in&rsquo; the surface a scene. What fell was the claim that
          representation is what makes something art.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mim",
      rung: "check",
      prompt: <p>What does the imitation theory say makes something art?</p>,
      answer: { kind: "choice", options: ["That it imitates or represents some part of reality", "That it expresses the artist’s emotion", "That the artworld accepts it", "That it is beautiful"], correct: [0] },
    },
    {
      key: "arist",
      rung: "check",
      prompt: <p>How does Aristotle&rsquo;s view of mimesis differ from Plato&rsquo;s?</p>,
      answer: { kind: "choice", options: ["Aristotle finds it natural and a source of learning and pleasure; Plato finds it far from the truth and harmful", "Aristotle denies art imitates", "Plato praises poetry above philosophy", "They agree entirely"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how far from the truth does Plato place the painter&rsquo;s bed? Give the number.</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "nec",
      rung: "apply",
      prompt: <p>Which case shows that imitation is not necessary for art?</p>,
      answer: { kind: "choice", options: ["An instrumental ālāpana in a rāga", "A portrait", "A historical novel", "A play about a king"], correct: [0] },
    },
    {
      key: "suff",
      rung: "apply",
      prompt: <p>Which case shows that imitation is not sufficient for art?</p>,
      answer: { kind: "choice", options: ["A passport photograph", "An abstract painting", "A symphony", "A sonnet"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is Plato right that an artist who imitates appearances needs no knowledge of the things depicted? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Plato’s claim about the painter and the bed.",
          "Considers an objection or example, such as a novelist’s insight into people, or a painter who must understand anatomy.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Aristotle says poetry is more philosophical than history. Does a good film tell you something true that a documentary could not?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Aristotle’s contrast between the universal and the particular.",
          "Gives an example, or considers how fiction can teach.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If art is not essentially copying the world, perhaps it is essentially showing a mind: the artist&rsquo;s feelings,
        made public so that others can share them. This was the great Romantic idea, and Tolstoy and Collingwood gave it two
        very different forms.
      </p>
      <p>Next, the expression theory of art.</p>
    </>
  ),
};
