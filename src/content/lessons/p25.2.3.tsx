import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { BurdenShareViz } from "@/components/viz/BurdenShareViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p25.2.3",
  minutes: 90,
  links: {
    revisits: ["p25.2.2", "p13.5.4", "p5.3.4"],
    foreshadows: ["p25.3.1", "p25.3.2", "p25.4.2"],
  },

  puzzle: (
    <>
      <p>
        A Sunday drive in a large car adds a tiny amount of carbon dioxide to the air. No storm, flood or heatwave would be
        any different if you stayed at home. Yet billions of such acts together are changing the climate. Who is responsible,
        and who should pay to fix it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Three invented countries must share the burden of cutting emissions. Choose a principle to see how the shares change.
      </p>
      <BurdenShareViz />
    </>
  ),

  theory: (
    <>
      <Definition title="a perfect moral storm">
        <p>
          Stephen Gardiner argues that climate change combines three features that each make ethical action hard. It is{" "}
          <strong>global</strong>: causes and effects are spread across nations with no authority over them all. It is{" "}
          <strong>intergenerational</strong>: the costs of acting fall now, while most benefits go to people not yet born. And
          it is <strong>theoretical</strong>: our moral concepts were not built for diffuse harms over centuries. Together
          they tempt each generation to pass the problem on.
        </p>
      </Definition>

      <Definition title="principles of burden sharing">
        <p>
          The <strong>polluter pays</strong> principle assigns costs by historical emissions. Against it: earlier emitters
          did not know the harm, and many are dead. The <strong>beneficiary pays</strong> principle answers that today&rsquo;s
          rich countries still enjoy the wealth those emissions built. The <strong>ability to pay</strong> principle looks
          only at capacity. <strong>Equal per capita</strong> shares treat the atmosphere&rsquo;s capacity to absorb carbon as
          a common resource to which each person has an equal claim.
        </p>
      </Definition>

      <Example title="subsistence and luxury emissions">
        <p>
          Henry Shue distinguishes the emissions a poor farmer needs to cook and survive from those of a second car or a
          long-haul holiday. Asking the poor to cut subsistence emissions to protect the luxuries of the rich would be
          unjust, whatever the formula says. This idea is close to the 1992 UN principle of &lsquo;common but differentiated
          responsibilities&rsquo;, which India has long defended in climate negotiations.
        </p>
      </Example>

      <Example title="individual responsibility">
        <p>
          Walter Sinnott-Armstrong argues that no individual is obliged to stop joyriding, since one person&rsquo;s emissions
          make no difference to any harm. The duty, on this view, is political: to press governments for laws that work.
          Critics reply that tiny contributions can raise the probability of harm, or that we should not take part in a
          collective harm, even if our share is small.
        </p>
      </Example>

      <Remark title="the future">
        <p>
          Climate policy chooses which people will exist, since it changes who meets whom and when. So the people harmed by
          our emissions may owe their existence to them. This non-identity problem returns when we turn to future
          generations.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "storm",
      rung: "check",
      prompt: <p>Which three features make climate change a &lsquo;perfect moral storm&rsquo;, according to Gardiner?</p>,
      answer: { kind: "choice", options: ["It is global, intergenerational and theoretical", "It is local, sudden and natural", "It is cheap, visible and reversible", "It is religious, legal and economic"], correct: [0] },
    },
    {
      key: "shue",
      rung: "check",
      prompt: <p>What distinction does Shue draw?</p>,
      answer: { kind: "choice", options: ["Between subsistence emissions and luxury emissions", "Between carbon dioxide and methane", "Between land and sea", "Between voluntary and compulsory travel"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, under equal per capita shares, what percentage of the burden goes to Country C?</p>,
      answer: { kind: "numeric", value: 50 },
    },
    {
      key: "ign",
      rung: "apply",
      prompt: <p>Which objection does the beneficiary pays principle answer?</p>,
      answer: { kind: "choice", options: ["That early emitters did not know the harm and are now dead", "That the atmosphere is infinite", "That poor countries emit too much", "That no one can pay"], correct: [0] },
    },
    {
      key: "sa",
      rung: "apply",
      prompt: <p>According to Sinnott-Armstrong, where does an individual&rsquo;s climate duty lie?</p>,
      answer: { kind: "choice", options: ["In pressing governments for effective laws", "In giving up all driving", "Nowhere, since climate change is natural", "In planting one tree per journey"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Which principle should decide how countries share the burden of climate change? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States at least two principles, such as polluter pays, beneficiary pays, ability to pay or equal per capita.",
          "Considers an objection, such as excusable ignorance or the needs of the poor.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If your emissions make no difference to any harm, do you have any reason to reduce them?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the no-difference argument.",
          "Considers a reply, such as expected harm, complicity, fairness or setting an example.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A child is drowning in a shallow pond. Saving the child would ruin your expensive shoes. Of course you should wade
        in. But children die every day of preventable poverty, and a donation could save one.
      </p>
      <p>Next, poverty and effective altruism.</p>
    </>
  ),
};
