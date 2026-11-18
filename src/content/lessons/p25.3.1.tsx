import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PremiseRejectViz, type Premise } from "@/components/viz/PremiseRejectViz";
import type { LessonContent } from "@/lib/types";

const PREMISES: Premise[] = [
  { text: "Suffering and death from lack of food, shelter and medical care are bad.", who: "Almost no one rejects this", why: "Singer treats it as the one premise every reader will accept, and most critics do." },
  { text: "If it is in our power to prevent something bad from happening, without sacrificing anything of comparable moral importance, we ought to do it.", who: "Critics of demandingness reject this", why: "Taken seriously, it requires giving until we are nearly as poor as those we help. Bernard Williams and others argue that morality must leave room for our own projects and attachments. Liam Murphy proposes that we need only do our fair share, the amount we would give if everyone did their part." },
  { text: "Distance, and the fact that others could help too, make no moral difference.", who: "Defenders of special duties reject this", why: "Some say we owe more to those near us, or that a duty shared by millions falls lightly on each. Singer replies that distance only affects how easily we can help, and that others failing to help does not excuse us, any more than a crowd of bystanders at the pond excuses each of them." },
  { text: "We can prevent much suffering and death from poverty by giving, without sacrificing anything of comparable importance.", who: "Some sceptics about aid reject this", why: "Critics such as Angus Deaton doubt that aid works, or worry it weakens local institutions. Effective altruists answer by measuring which charities do the most good, for example by cost per life saved." },
];

export const lesson: LessonContent = {
  id: "p25.3.1",
  minutes: 90,
  links: {
    revisits: ["p25.2.3", "p5.5.3", "p13.5.4"],
    foreshadows: ["p25.3.2", "p25.4.1", "p30.1.1"],
  },

  puzzle: (
    <>
      <p>
        Peter Singer asked readers to imagine walking past a shallow pond where a child is drowning. You could wade in and
        save the child, though your clothes would be ruined. Everyone agrees you must. Then Singer asked: what is the
        difference between that child and a child dying of a preventable disease far away, whom a donation could save?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here is Singer&rsquo;s argument from &lsquo;Famine, Affluence, and Morality&rsquo; (1972). Reject a premise to see
        who rejects it and why.
      </p>
      <PremiseRejectViz
        premises={PREMISES}
        conclusion="we ought to give a great deal to relieve poverty, and not giving is wrong, not merely less generous."
        intro="The argument is valid, so anyone who accepts the premises must accept the conclusion. Which premise would you give up?"
      />
    </>
  ),

  theory: (
    <>
      <Definition title="Singer's principle">
        <p>
          Singer&rsquo;s strong principle says we must prevent bad things unless doing so sacrifices something of{" "}
          <em>comparable</em> moral importance. A weaker version says: unless it sacrifices anything morally significant.
          Even the weak version, Singer argues, requires far more giving than most comfortable people do. It removes the line
          between duty and charity: giving to the poor is not supererogatory but required.
        </p>
      </Definition>

      <Definition title="effective altruism">
        <p>
          <strong>Effective altruism</strong>, developed by William MacAskill, Toby Ord and others, asks how to do the most
          good with given resources. It uses evidence and cost-effectiveness: some health programmes save a life for a few
          thousand dollars, while others do hundreds of times less good per rupee. Many effective altruists pledge a
          percentage of their income, and some choose careers by the good they can fund or do.
        </p>
      </Definition>

      <Example title="institutions, not only individuals">
        <p>
          Thomas Pogge argues that the affluent do not merely fail to help. Through a global order of trade rules, loans to
          dictators and the sale of resources by illegitimate rulers, they help cause poverty. The duty is then negative,
          not to harm, and calls for reform of institutions, not only donations.
        </p>
      </Example>

      <Remark title="criticisms">
        <p>
          Critics say effective altruism favours what can be measured, such as bed nets, over what cannot, such as political
          change. Others worry about treating the poor as recipients rather than agents. Effective altruists reply that
          systemic change is welcome when evidence supports it. The debate is partly about method and partly about values.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "pond",
      rung: "check",
      prompt: <p>What is the point of Singer&rsquo;s drowning child case?</p>,
      answer: { kind: "choice", options: ["To show that we accept a duty to prevent serious harm at small cost, and then extend it to distant poverty", "To show that children should learn to swim", "To argue that ponds should be fenced", "To show that distance is morally important"], correct: [0] },
    },
    {
      key: "ea",
      rung: "check",
      prompt: <p>What is the central question of effective altruism?</p>,
      answer: { kind: "choice", options: ["How can we do the most good with the resources we have?", "Which charities are the oldest?", "How can we avoid all giving?", "Which religion requires the most charity?"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which premise does Liam Murphy&rsquo;s fair share view target?</p>,
      answer: { kind: "choice", options: ["The principle that we must prevent bad things without comparable sacrifice", "That suffering from poverty is bad", "That aid can prevent suffering", "None of them"], correct: [0] },
    },
    {
      key: "crowd",
      rung: "apply",
      prompt: <p>Ten bystanders watch the child drown and none acts. How does Singer view your duty?</p>,
      answer: { kind: "choice", options: ["It is unchanged, since others failing to help does not excuse you", "It disappears, since the duty is shared", "It becomes one tenth as strong", "It passes to the nearest bystander only"], correct: [0] },
    },
    {
      key: "pogge",
      rung: "apply",
      prompt: <p>What kind of duty does Pogge emphasise?</p>,
      answer: { kind: "choice", options: ["A negative duty not to uphold an unjust global order that harms the poor", "A positive duty of charity only", "No duty at all to distant people", "A duty to one’s own country first"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is failing to give to effective charities as wrong as walking past the drowning child? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Singer’s argument or principle.",
          "Considers at least one disanalogy or objection, such as distance, numbers, demandingness or doubts about aid.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should a talented student choose a high-paying career to give more away, rather than work directly for a cause?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Compares the good done by earning to give and by direct work.",
          "Considers integrity, personal projects, or the harms some careers may do.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Our choices affect not only people alive now, but who will exist and how many. Is a world with more happy people
        better? Must we make the future go well for people who may never be born?
      </p>
      <p>Next, future generations and population ethics.</p>
    </>
  ),
};
