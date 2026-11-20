import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CapabilityConversionViz } from "@/components/viz/CapabilityConversionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p33.2.1",
  minutes: 90,
  links: {
    revisits: ["p33.1.2", "p14.2.4", "p14.6.1"],
    foreshadows: ["p33.2.2", "p33.3.1", "p33.3.3"],
  },

  puzzle: (
    <>
      <p>
        Two people have the same income. One is in good health; the other uses a wheelchair in a city of stairs and needs
        costly care. Are they equally well off? If not, should justice compare what people have, how satisfied they feel,
        or what they are actually able to do and be?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the income and B&rsquo;s conversion rate, and compare resources with what each person can do.</p>
      <CapabilityConversionViz />
    </>
  ),

  theory: (
    <>
      <Definition title="functionings and capabilities">
        <p>
          Amartya Sen, in his 1979 lecture &lsquo;Equality of What?&rsquo; and later work, argues that the right space for
          judging advantage is neither resources nor utility. A <strong>functioning</strong> is something a person does or
          is: being nourished, moving about, reading, taking part in community life. A person&rsquo;s{" "}
          <strong>capability</strong> is the set of combinations of functionings they could achieve: their real freedom to
          live different lives.
        </p>
      </Definition>

      <Definition title="conversion factors">
        <p>
          Resources matter only as means, and people differ in how they turn resources into functionings. Personal factors,
          such as disability, pregnancy or metabolism; social factors, such as discrimination or norms; and environmental
          factors, such as climate or infrastructure, all affect conversion. Equal resources can therefore mean unequal
          freedom. Utility is also a poor guide, since people adapt their desires to deprivation: a person who expects
          little may report being content.
        </p>
      </Definition>

      <Example title="Nussbaum’s list">
        <p>
          Sen deliberately leaves the selection of capabilities to public reasoning. Martha Nussbaum proposes a list of ten
          central capabilities, including life, bodily health, bodily integrity, senses, imagination and thought, emotions,
          practical reason, affiliation, relationship with other species, play, and control over one&rsquo;s environment. A
          just constitution guarantees each citizen a threshold level of each. The approach shaped the United Nations Human
          Development Index, which combines health, education and income.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          Critics ask how capabilities are to be weighed against one another, and whether any list can be justified without
          a controversial view of the good life, against the ideal of public reason. Defenders of resourcism, such as Ronald
          Dworkin, reply that compensating for handicaps can be built into a resource metric. Others, especially in feminist
          and disability theory, have welcomed the approach for making visible inequalities that income measures hide.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cap",
      rung: "check",
      prompt: <p>What is a capability, in Sen&rsquo;s sense?</p>,
      answer: { kind: "choice", options: ["The set of combinations of functionings a person can achieve", "A person’s income", "A person’s level of happiness", "A legal right"], correct: [0] },
    },
    {
      key: "func",
      rung: "check",
      prompt: <p>Which of these is a functioning?</p>,
      answer: { kind: "choice", options: ["Being adequately nourished", "Owning a bank account", "Having a preference", "A tax rebate"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with income 100 for each and B&rsquo;s conversion rate 0.5, what is B&rsquo;s mobility?</p>,
      answer: { kind: "numeric", value: 50, tolerance: 0 },
    },
    {
      key: "adapt",
      rung: "apply",
      prompt: <p>Why does Sen distrust utility as a measure of advantage?</p>,
      answer: { kind: "choice", options: ["People adapt their preferences to deprivation, so the deprived may report contentment", "Utility cannot be measured at all", "Utility ignores income", "Utility is always equal across people"], correct: [0] },
    },
    {
      key: "list",
      rung: "apply",
      prompt: <p>How do Sen and Nussbaum differ on a list of capabilities?</p>,
      answer: { kind: "choice", options: ["Nussbaum proposes a list of central capabilities; Sen leaves selection to public reasoning", "Sen proposes a list and Nussbaum rejects lists", "Both reject capabilities", "They agree on a list of three"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should justice be measured by capabilities rather than resources? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the capabilities approach and the role of conversion factors.",
          "Considers an objection, such as the problem of weighing capabilities or a resourcist reply.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Does Nussbaum&rsquo;s list conflict with the ideal of public reason?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains why a list might seem to rest on a view of the good life.",
          "Considers Nussbaum's claim that the list can be the object of an overlapping consensus.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Theories of justice usually describe a perfectly just society in which everyone complies. What do they tell us
        about a world full of injustice and partial compliance?
      </p>
      <p>Next, non-ideal theory.</p>
    </>
  ),
};
