import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { KnowledgeInterestsViz } from "@/components/viz/KnowledgeInterestsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p34.2.2",
  minutes: 90,
  links: {
    revisits: ["p34.2.1", "p34.1.1", "p9.2.3"],
    foreshadows: ["p34.3.2", "p34.3.3", "p34.3.1"],
  },

  puzzle: (
    <>
      <p>
        In eighteenth-century London, men argued about politics over coffee, reading newspapers and pamphlets, and their
        opinions came to matter to Parliament. Today more people than ever can publish their views, yet many feel that
        public debate is worse, not better. What would a healthy public sphere look like, and what kind of reason could it
        rely on?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a kind of inquiry, and see which human interest guides it.</p>
      <KnowledgeInterestsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the public sphere">
        <p>
          In <em>The Structural Transformation of the Public Sphere</em> (1962), Jürgen Habermas traced the rise of the
          bourgeois <strong>public sphere</strong>: a space of salons, coffee houses and periodicals in which private
          persons came together to debate matters of common concern, in principle open to all and governed by argument
          rather than rank. He argued that in the twentieth century it was transformed, as mass media and organised
          interests turned citizens from a reasoning public into a consuming audience managed by publicity.
        </p>
      </Definition>

      <Definition title="knowledge and human interests">
        <p>
          Against positivism, which took the natural sciences as the model of all knowledge, Habermas argued in{" "}
          <em>Knowledge and Human Interests</em> (1968) that knowledge is shaped by three{" "}
          <strong>knowledge-constitutive interests</strong>. The <strong>technical</strong> interest in prediction and
          control guides the empirical-analytic sciences; the <strong>practical</strong> interest in mutual understanding
          guides the historical-hermeneutic sciences; and the <strong>emancipatory</strong> interest in freedom from
          domination guides critical theory, on the model of psychoanalysis.
        </p>
      </Definition>

      <Example title="the debate with Gadamer">
        <p>
          Habermas welcomed Gadamer&rsquo;s critique of positivism but objected that tradition and language can be
          systematically distorted by power and labour, so understanding must sometimes be critique. Gadamer replied that
          critique itself stands within a tradition and has no neutral standpoint. The debate shaped Habermas&rsquo;s later
          turn to communicative reason: the standard for criticising distorted communication is built into the
          presuppositions of communication itself.
        </p>
      </Example>

      <Remark title="modernity and its critics">
        <p>
          In <em>The Philosophical Discourse of Modernity</em> (1985), Habermas defended modernity as an
          &ldquo;unfinished project&rdquo; against Nietzsche, Heidegger, Derrida and Foucault, whom he charged with a total
          critique of reason that cannot account for its own standards. Foucault answered that no form of reason or
          communication is free of power. Nancy Fraser added that the bourgeois public sphere excluded women and workers,
          who formed counter-publics of their own.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ps",
      rung: "check",
      prompt: <p>What is the public sphere, in Habermas&rsquo;s account?</p>,
      answer: { kind: "choice", options: ["A space where private persons debate matters of common concern through argument", "The government and its offices", "The market for consumer goods", "The family"], correct: [0] },
    },
    {
      key: "interests",
      rung: "check",
      prompt: <p>Which are Habermas&rsquo;s three knowledge-constitutive interests?</p>,
      answer: { kind: "choice", options: ["Technical, practical and emancipatory", "Economic, political and religious", "Empirical, logical and moral", "Individual, social and natural"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the critique of an ideology of caste. Which interest guides it?</p>,
      answer: { kind: "choice", options: ["The emancipatory interest", "The technical interest", "The practical interest", "No interest at all"], correct: [0] },
    },
    {
      key: "transf",
      rung: "apply",
      prompt: <p>What structural transformation of the public sphere did Habermas describe?</p>,
      answer: { kind: "choice", options: ["Mass media and organised interests turned a reasoning public into a managed audience", "The public sphere became more inclusive and rational", "Coffee houses were banned", "Parliament stopped meeting"], correct: [0] },
    },
    {
      key: "gad",
      rung: "apply",
      prompt: <p>What was at issue between Habermas and Gadamer?</p>,
      answer: { kind: "choice", options: ["Whether understanding within a tradition can criticise distortions of that tradition by power", "Whether texts have authors", "Whether science is possible", "Whether language exists"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is all knowledge shaped by human interests? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Habermas’s thesis of knowledge-constitutive interests.",
          "Considers an objection, such as the worry that it threatens the objectivity of science.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does social media realise the ideal of the public sphere, or betray it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with Habermas’s ideal and his account of its transformation.",
          "Considers evidence or arguments on both sides.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        While Frankfurt defended reason, Paris turned to language as a system. A Swiss linguist&rsquo;s lectures on how
        signs mean became the model for a movement across anthropology, psychoanalysis and literary theory.
      </p>
      <p>Next, structuralism.</p>
    </>
  ),
};
