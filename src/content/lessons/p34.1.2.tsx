import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SuspicionLensViz } from "@/components/viz/SuspicionLensViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p34.1.2",
  minutes: 90,
  links: {
    revisits: ["p34.1.1", "p9.6.2", "p9.2.3"],
    foreshadows: ["p34.2.1", "p34.3.1", "p34.3.2"],
  },

  puzzle: (
    <>
      <p>
        A friend tells you why they left their job: for the sake of their family. You can take the story at its word, or
        suspect it hides ambition, fear or resentment they would not admit. Both responses seem to be ways of
        understanding them. Should interpretation listen, or unmask? And is the story we tell about our own life a
        discovery, or something we make?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a case, then read it as a believer and as each of the three suspicious readers.</p>
      <SuspicionLensViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the conflict of interpretations">
        <p>
          Paul Ricoeur, in <em>Freud and Philosophy</em> (1965), distinguished two styles of interpretation. A{" "}
          <strong>hermeneutics of faith</strong> aims to restore meaning, listening to what a symbol or text says. A{" "}
          <strong>hermeneutics of suspicion</strong> aims to reduce illusion, treating apparent meaning as a disguise.
          Marx, Nietzsche and Freud, the &ldquo;masters of suspicion&rdquo;, each showed that consciousness is not what it
          takes itself to be: it is shaped by class interest, by the will to power, or by unconscious desire.
        </p>
      </Definition>

      <Definition title="the text and its world">
        <p>
          Against Gadamer&rsquo;s stress on belonging to a tradition, Ricoeur gives a place to critical distance. Once
          written, a text is cut loose from its author&rsquo;s intention and its first audience, so it can be explained by
          structural and critical methods as well as understood. What we finally appropriate is not the author&rsquo;s
          mind but the <strong>world of the text</strong>: a possible way of being that it opens in front of us.
        </p>
      </Definition>

      <Example title="narrative identity">
        <p>
          In <em>Time and Narrative</em> (1983&ndash;85) and <em>Oneself as Another</em> (1990), Ricoeur argues that
          human time becomes intelligible through <strong>emplotment</strong>, which configures scattered events into a
          story with a beginning, middle and end. Personal identity has two sides: <em>idem</em>, sameness of character
          over time, and <em>ipse</em>, selfhood that keeps its word even as it changes. A{" "}
          <strong>narrative identity</strong> mediates between them, as we understand ourselves through the stories we tell
          and revise.
        </p>
      </Example>

      <Remark title="suspicion and its limits">
        <p>
          Ricoeur thought suspicion a necessary discipline, but not an end: after critique, one may reach a &ldquo;second
          naïveté&rdquo; in which symbols speak again, now critically understood. Later critics such as Rita Felski have
          argued that literary studies became fixated on suspicious reading, and urged attention to how texts move and
          attach us. Analytic philosophers such as Galen Strawson reject the narrative self altogether, holding that many
          people live well without seeing their lives as stories.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "masters",
      rung: "check",
      prompt: <p>Whom did Ricoeur call the masters of suspicion?</p>,
      answer: { kind: "choice", options: ["Marx, Nietzsche and Freud", "Plato, Aristotle and Kant", "Husserl, Heidegger and Sartre", "Hume, Smith and Mill"], correct: [0] },
    },
    {
      key: "faith",
      rung: "check",
      prompt: <p>What does a hermeneutics of faith aim at?</p>,
      answer: { kind: "choice", options: ["Restoring and listening to the meaning a text or symbol offers", "Unmasking hidden interests", "Proving religious doctrines", "Ignoring the text"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the dream and Freud&rsquo;s reading. What does the dream express?</p>,
      answer: { kind: "choice", options: ["A disguised fulfilment of a wish the dreamer would not avow", "Anxieties about wage labour", "A shared meaning of gratitude", "Nothing at all"], correct: [0] },
    },
    {
      key: "ipse",
      rung: "apply",
      prompt: <p>What does Ricoeur mean by ipse identity?</p>,
      answer: { kind: "choice", options: ["Selfhood shown in keeping one’s word through change", "Sameness of physical body", "Identity of two copies", "Membership of a group"], correct: [0] },
    },
    {
      key: "world",
      rung: "apply",
      prompt: <p>What, for Ricoeur, does a reader finally appropriate from a text?</p>,
      answer: { kind: "choice", options: ["The world of the text: a possible way of being it opens up", "The author’s private mental states", "Only its grammar", "The first audience’s reactions"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should we interpret others&rsquo; accounts of themselves with faith or with suspicion? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the two styles of interpretation fairly.",
          "Considers an example or an objection to one of them.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is a person&rsquo;s identity something like a story?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with Ricoeur’s narrative identity.",
          "Considers an objection, such as Strawson’s.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Suspicion turned on a whole civilisation becomes critical theory. Writing in exile during the Second World War, two
        philosophers asked why the progress of reason had ended in barbarism.
      </p>
      <p>Next, Adorno and Horkheimer.</p>
    </>
  ),
};
