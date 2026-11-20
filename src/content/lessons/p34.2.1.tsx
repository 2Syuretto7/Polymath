import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PseudoIndividualityViz } from "@/components/viz/PseudoIndividualityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p34.2.1",
  minutes: 90,
  links: {
    revisits: ["p34.1.2", "p9.2.2", "p8.5.2"],
    foreshadows: ["p34.2.2", "p34.3.2", "p34.3.4"],
  },

  puzzle: (
    <>
      <p>
        The Enlightenment promised that reason would free people from myth and domination. By the 1940s, the most
        scientifically advanced societies had produced total war, propaganda and industrialised murder. Was this a betrayal
        of reason, or something reason itself had prepared? And is a world of endless entertainment a sign of freedom?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the number of standard parts, release a few hits, and count the choices.</p>
      <PseudoIndividualityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the dialectic of enlightenment">
        <p>
          In <em>Dialectic of Enlightenment</em> (1944, revised 1947), Max Horkheimer and Theodor Adorno, members of the
          Frankfurt School, argue that &ldquo;myth is already enlightenment, and enlightenment reverts to mythology&rdquo;.
          Reason began as a means of mastering nature through calculation. Pursued one-sidedly, it becomes{" "}
          <strong>instrumental reason</strong>: it asks only how to achieve ends, never which ends are worth having, and it
          extends its domination from nature to human beings and finally to the self.
        </p>
      </Definition>

      <Definition title="the culture industry">
        <p>
          Film, radio and popular music, they argue, form a <strong>culture industry</strong> that produces standardised
          goods for profit. Its products differ in detail but follow fixed formulas, offering{" "}
          <strong>pseudo-individuality</strong>: the appearance of choice and uniqueness. Leisure becomes an extension of
          work, training people in passive consumption and conformity, so that domination is accepted as amusement.
        </p>
      </Definition>

      <Example title="Odysseus and the Sirens">
        <p>
          Their reading of the <em>Odyssey</em> makes Odysseus the prototype of the bourgeois self. To hear the
          Sirens&rsquo; song and survive, he has himself bound to the mast while his oarsmen, ears stopped with wax, row on.
          He enjoys art as a powerless spectacle; they labour without hearing it. Self-preservation is bought by
          renunciation, and the division of labour divides experience itself.
        </p>
      </Example>

      <Remark title="negative dialectics and its critics">
        <p>
          Adorno later developed <strong>negative dialectics</strong>, a thinking that resists the identification of things
          with the concepts that grasp them, and found in difficult modernist art a refuge for what the administered world
          suppresses. Critics, including Habermas, objected that a total critique of reason undercuts the reason it must
          itself use, and others defended popular culture as more varied and active than the theory allows.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "instr",
      rung: "check",
      prompt: <p>What is instrumental reason?</p>,
      answer: { kind: "choice", options: ["Reason that calculates means to given ends without asking which ends are worth pursuing", "Reason used in music", "Reason that rejects calculation", "Pure logical deduction"], correct: [0] },
    },
    {
      key: "ci",
      rung: "check",
      prompt: <p>What is pseudo-individuality, in Adorno and Horkheimer&rsquo;s critique?</p>,
      answer: { kind: "choice", options: ["The appearance of uniqueness and choice among standardised products", "Genuine artistic originality", "The loss of all products", "Collective ownership of culture"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set four parts per slot. How many apparently different songs does the catalogue offer?</p>,
      answer: { kind: "numeric", value: 64, tolerance: 0 },
    },
    {
      key: "sirens",
      rung: "apply",
      prompt: <p>What does the episode of Odysseus and the Sirens illustrate for Adorno and Horkheimer?</p>,
      answer: { kind: "choice", options: ["Self-preservation through renunciation, and art enjoyed powerlessly while others labour", "The triumph of myth over reason", "The joy of popular music", "The virtue of sailors"], correct: [0] },
    },
    {
      key: "perf",
      rung: "apply",
      prompt: <p>What was Habermas&rsquo;s main objection to the total critique of reason?</p>,
      answer: { kind: "choice", options: ["It undercuts the very reason it needs in order to criticise", "It praised reason too much", "It ignored culture", "It was too optimistic"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does popular entertainment make people less free? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the culture industry thesis fairly.",
          "Considers an objection, such as the active and varied uses people make of popular culture.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can reason be criticised without relying on reason?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with the worry about a performative contradiction.",
          "Considers a reply, such as distinguishing instrumental from other forms of reason.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        AdornoAdorno&rsquo;s student and successor soughtrsquo;s one-time assistant, who became the leading figure of the next generation, sought to rescue the Enlightenment from its first critics, by finding in
        language and public debate a form of reason that is not merely instrumental.
      </p>
      <p>Next, Habermas.</p>
    </>
  ),
};
