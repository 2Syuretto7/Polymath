import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { StatusFunctionViz } from "@/components/viz/StatusFunctionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p33.3.3",
  minutes: 90,
  links: {
    revisits: ["p33.3.2", "p33.3.1", "p4.5.1"],
    foreshadows: ["p34.3.1", "p34.3.2", "p34.2.1"],
  },

  puzzle: (
    <>
      <p>
        A ₹500 note is a piece of paper. Nothing in its fibres or ink makes it worth five hundred rupees, and if everyone
        stopped treating it as money it would be paper again. Yet its value is not a matter of opinion: you cannot pay
        with it by merely believing harder. In what sense are money, borders and marriages real?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose an institution, then withdraw collective acceptance and see what remains.</p>
      <StatusFunctionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="institutional facts">
        <p>
          In <em>The Construction of Social Reality</em> (1995), John Searle distinguishes <strong>brute facts</strong>,
          which hold independently of human institutions, from <strong>institutional facts</strong>, which exist only within
          them. Institutional facts arise by assigning <strong>status functions</strong> to objects that cannot perform
          those functions by their physical features alone, according to rules of the form &ldquo;X counts as Y in context
          C&rdquo;. They are ontologically subjective, since they depend on attitudes, but can be epistemically objective:
          it is simply true that this note is legal tender.
        </p>
      </Definition>

      <Definition title="collective intentionality and deontic powers">
        <p>
          Status functions rest on <strong>collective intentionality</strong>: we accept, together, that X counts as Y.
          Searle holds that &ldquo;we intend&rdquo; cannot be reduced to a sum of &ldquo;I intend&rdquo; plus mutual
          beliefs. Status functions carry <strong>deontic powers</strong>, rights, duties, permissions and authorisations,
          which give people reasons for action independent of their desires. In his later work Searle argues that all
          institutional facts are created by declarations, linguistic acts that make something so by representing it as so.
        </p>
      </Definition>

      <Example title="joint commitment and group agents">
        <p>
          Margaret Gilbert analyses collective action through <strong>joint commitment</strong>: when we agree to go for a
          walk together, each is obligated to the other in a way neither can unilaterally cancel. Philip Pettit and
          Christian List argue that groups such as companies and courts can be agents in their own right, since their
          judgements, aggregated by procedures, can diverge from what most of their members believe.
        </p>
      </Example>

      <Remark title="social construction and critique">
        <p>
          Not all social kinds are institutions in Searle&rsquo;s sense. Sally Haslanger argues that race and gender are
          social positions defined by subordination and privilege, real and causally powerful, but constructed and so open to
          change. Others note that people may sustain an institution without endorsing it, and that caste persists through
          practices many reject; acceptance, on such views, can be a matter of compliance as much as agreement.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "formula",
      rung: "check",
      prompt: <p>What is Searle&rsquo;s formula for constitutive rules?</p>,
      answer: { kind: "choice", options: ["X counts as Y in context C", "X causes Y in context C", "X resembles Y", "X is identical to Y"], correct: [0] },
    },
    {
      key: "brute",
      rung: "check",
      prompt: <p>Which of these is a brute fact, in Searle&rsquo;s sense?</p>,
      answer: { kind: "choice", options: ["Mount Everest has snow near its summit", "This note is legal tender", "This person is a judge", "This line is a national border"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the ₹500 note and withdraw acceptance. What remains?</p>,
      answer: { kind: "choice", options: ["Only the printed piece of paper", "Money worth five hundred rupees", "The rules of the Reserve Bank", "A debt"], correct: [0] },
    },
    {
      key: "deontic",
      rung: "apply",
      prompt: <p>What are deontic powers?</p>,
      answer: { kind: "choice", options: ["Rights, duties, permissions and authorisations carried by a status", "Physical forces between objects", "Preferences of individuals", "Rules of logic"], correct: [0] },
    },
    {
      key: "objective",
      rung: "apply",
      prompt: <p>In what sense, on Searle&rsquo;s view, is the value of money objective?</p>,
      answer: { kind: "choice", options: ["Epistemically: it is a plain fact, though its existence depends on attitudes", "Ontologically: it exists independently of all minds", "It is not objective at all", "Only in a dream"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Are institutional facts as real as physical ones? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Searle’s account of status functions and collective acceptance.",
          "Considers an objection or a contrast, such as dependence on attitudes or the causal power of institutions.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can an institution persist when most of the people who sustain it reject it?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the role of acceptance or compliance.",
          "Considers an example, such as caste, or a reply on Searle’s behalf.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The course on advanced political and social philosophy is complete. Its last questions, about understanding, language and
        the social construction of meaning, are central to the European tradition that followed Heidegger.
      </p>
      <p>Next, the course on continental philosophy after Heidegger begins with Gadamer.</p>
    </>
  ),
};
