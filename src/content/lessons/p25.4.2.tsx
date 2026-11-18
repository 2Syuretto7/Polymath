import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["Against enhancement", "For enhancement", "Draws a therapy line"];
const ITEMS: SortItem[] = [
  { text: "The drive to master our children’s nature threatens our appreciation of life as a gift.", cat: "Against enhancement", why: "Michael Sandel, The Case against Perfection (2007): humility, responsibility and solidarity depend on accepting what we are given." },
  { text: "A child whose genome was designed may not see themselves as the sole author of their own life.", cat: "Against enhancement", why: "Jürgen Habermas: genetic design makes another person’s choices part of one’s own nature, unsettling autonomy and equality between generations." },
  { text: "Our revulsion at some biotechnologies may express a wisdom we cannot fully articulate.", cat: "Against enhancement", why: "Leon Kass’s ‘wisdom of repugnance’, an argument critics say mistakes disgust for evidence." },
  { text: "Parents who can choose should select the child expected to have the best life.", cat: "For enhancement", why: "Julian Savulescu’s principle of procreative beneficence." },
  { text: "If it is good to improve a child’s mind by schooling, it is not worse to do it by biology.", cat: "For enhancement", why: "John Harris and others deny any deep moral difference between educational and biological means." },
  { text: "We should welcome technologies that extend our health span, intellect and emotional capacities.", cat: "For enhancement", why: "Nick Bostrom’s transhumanism: human nature is a work in progress." },
  { text: "Justice in health care is owed for restoring normal functioning, not for exceeding it.", cat: "Draws a therapy line", why: "Norman Daniels: medicine protects fair opportunity by maintaining normal species functioning, which marks a line between treatment and enhancement." },
];

export const lesson: LessonContent = {
  id: "p25.4.2",
  minutes: 90,
  links: {
    revisits: ["p25.4.1", "p4.6.1", "p13.2.3"],
    foreshadows: ["p25.4.3", "p30.2.1", "p30.4.2"],
  },

  puzzle: (
    <>
      <p>
        A drug that helps a child with attention difficulties concentrate is medicine. The same drug taken by a healthy
        student before an exam looks like cheating. A gene edit that prevents a disease seems a blessing; one that adds
        height or memory makes many uneasy. Is there a real moral line between treatment and enhancement?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort these claims about enhancement by the view they express.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Which view of enhancement?" />
    </>
  ),

  theory: (
    <>
      <Definition title="therapy and enhancement">
        <p>
          <strong>Therapy</strong> restores or protects normal functioning; <strong>enhancement</strong> improves capacities
          beyond it. The line is hard to draw: vaccines boost the normal immune system, and what counts as normal varies.
          Defenders such as Norman Daniels tie it to a statistical idea of species-typical functioning. Critics say the line
          tracks nothing of moral importance.
        </p>
      </Definition>

      <Definition title="bioconservatism">
        <p>
          <strong>Bioconservatives</strong> such as Michael Sandel, Leon Kass and Jürgen Habermas oppose many enhancements.
          Sandel&rsquo;s worry is not chiefly about safety or fairness but about attitude: parents who design children forget
          that children are gifts, not projects. Habermas worries that designed people may not stand as equals to their
          designers.
        </p>
      </Definition>

      <Example title="liberal and positive views">
        <p>
          Liberal eugenicists such as Nicholas Agar argue that parents, not the state, may choose enhancements, within limits
          that protect the child&rsquo;s open future. Savulescu goes further, saying parents have reason to choose the best
          child they can. Critics, especially in disability studies, reply that such reasoning expresses a negative judgement
          about disabled lives.
        </p>
      </Example>

      <Example title="justice and access">
        <p>
          If enhancements are costly, they may widen inequality, letting the rich buy advantages for their children. Some
          argue this is a reason to ban them; others, to subsidise them, as we do education. The worry is sharp in countries
          where access to basic health care is already unequal.
        </p>
      </Example>

      <Remark title="the good life">
        <p>
          Underlying the debate is a question from ancient ethics: what makes a human life go well? If flourishing is the
          exercise of human capacities, more capacity might mean more flourishing, or it might mean losing the struggles that
          give achievement its worth.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "line",
      rung: "check",
      prompt: <p>What is the usual distinction between therapy and enhancement?</p>,
      answer: { kind: "choice", options: ["Therapy restores normal functioning; enhancement goes beyond it", "Therapy uses drugs; enhancement uses surgery", "Therapy is cheap; enhancement is costly", "Therapy is for adults; enhancement is for children"], correct: [0] },
    },
    {
      key: "sandel",
      rung: "check",
      prompt: <p>What is Sandel&rsquo;s main worry about enhancement?</p>,
      answer: { kind: "choice", options: ["It expresses a drive to mastery that loses sight of life as a gift", "It is always unsafe", "It is too expensive for governments", "It is forbidden by law"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, where does procreative beneficence belong?</p>,
      answer: { kind: "choice", options: ["For enhancement", "Against enhancement", "Draws a therapy line", "None of them"], correct: [0] },
    },
    {
      key: "vacc",
      rung: "apply",
      prompt: <p>Why are vaccines a problem for the therapy and enhancement line?</p>,
      answer: { kind: "choice", options: ["They improve a healthy immune system beyond its normal state, yet seem plainly medical", "They are not effective", "They cure existing disease", "They are always genetic"], correct: [0] },
    },
    {
      key: "disab",
      rung: "apply",
      prompt: <p>What objection do disability scholars raise to selecting the &lsquo;best&rsquo; child?</p>,
      answer: { kind: "choice", options: ["It expresses a negative judgement about the lives of disabled people", "It is too slow", "It ignores the parents’ wishes", "It is the same as education"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should parents be allowed to enhance their children genetically, if it were safe? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States at least one argument for and one against.",
          "Considers fairness, autonomy, giftedness or the therapy line.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is a student who takes a concentration drug before an exam cheating?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Compares the drug with accepted aids such as coffee, tuition or sleep.",
          "Considers fairness to other students or what the exam is meant to test.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Your phone knows where you have been, your searches reveal what you fear, and a few public facts may be enough to
        pick you out of a crowd. What is privacy, and why does it matter if you have nothing to hide?
      </p>
      <p>Next, privacy.</p>
    </>
  ),
};
