import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CapacitiesViz } from "@/components/viz/CapacitiesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p25.2.1",
  minutes: 90,
  links: {
    revisits: ["p25.1.3", "p5.5.2", "p5.2.1"],
    foreshadows: ["p25.2.2", "p25.3.1", "p25.4.1"],
  },

  puzzle: (
    <>
      <p>
        Most people think it is wrong to cause a dog needless pain, yet eat animals raised in conditions far worse than any
        dog&rsquo;s. Most think every human life has equal worth, yet some humans have fewer mental capacities than some
        animals. Can any principled line be drawn at the species boundary?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Different theories ground moral status in different capacities. Choose a view to see which beings count directly.
      </p>
      <CapacitiesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="equal consideration of interests">
        <p>
          Peter Singer&rsquo;s <em>Animal Liberation</em> (1975) extends Bentham&rsquo;s principle: the interests of every
          being affected by an action are to be given equal weight with the like interests of any other being. The capacity to
          suffer is the precondition of having interests at all. Giving less weight to an animal&rsquo;s pain just because it
          is an animal is <strong>speciesism</strong>, a term coined by Richard Ryder, which Singer compares to racism and
          sexism.
        </p>
      </Definition>

      <Example title="the argument from marginal cases">
        <p>
          Whatever capacity is offered to justify treating all humans better than all animals, such as reason, language or
          moral agency, some humans lack it (newborn infants, people with profound cognitive disabilities) while some animals
          have more of it. If we do not use those humans for food or experiments, consistency forbids using animals of equal or
          greater capacity. Critics prefer the name &lsquo;argument from species overlap&rsquo;, and some reply that membership
          of a kind whose normal members are rational is itself morally relevant.
        </p>
      </Example>

      <Definition title="animal rights">
        <p>
          Tom Regan (1983) rejected Singer&rsquo;s utilitarianism, which permits harming some for the greater good. Beings
          that are <strong>subjects-of-a-life</strong>, with beliefs, desires, memory and a welfare that matters to them, have
          inherent value and a right not to be treated merely as means. On this view, factory farming and most animal
          experimentation are wrong whatever their benefits.
        </p>
      </Definition>

      <Definition title="Kant and indirect duties">
        <p>
          Kant held that only rational beings are ends in themselves. We have no duties to animals, only duties concerning
          them: cruelty is wrong because &lsquo;he who is cruel to animals becomes hard also in his dealings with men&rsquo;.
          Christine Korsgaard has argued that a Kantian should go further, since animals, too, have a good of their own that
          we must value.
        </p>
      </Definition>

      <Remark title="Indian traditions">
        <p>
          Ahiṃsā, non-harm to living beings, is central to Jain ethics and important in Buddhist and Hindu thought, and it
          shaped vegetarian practice across India. The Constitution lists compassion for living creatures among citizens&rsquo;
          fundamental duties, in Article 51A(g), and the Prevention of Cruelty to Animals Act of 1960 forbids unnecessary
          suffering.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "spec",
      rung: "check",
      prompt: <p>What is speciesism?</p>,
      answer: { kind: "choice", options: ["Giving less weight to a being’s interests merely because of its species", "Belief in evolution", "Preferring some animals to others for their beauty", "Studying species"], correct: [0] },
    },
    {
      key: "regan",
      rung: "check",
      prompt: <p>What grounds rights on Regan&rsquo;s view?</p>,
      answer: { kind: "choice", options: ["Being a subject-of-a-life", "Being rational", "Being human", "Being useful"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, on the view of Bentham and Singer, how many of the eight beings clearly count directly?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "marg",
      rung: "apply",
      prompt: <p>What does the argument from marginal cases claim?</p>,
      answer: { kind: "choice", options: ["No capacity separates all humans from all animals, so consistency requires similar treatment of similar capacities", "Animals have no interests", "Humans with disabilities matter less", "Only rational beings count"], correct: [0] },
    },
    {
      key: "kant",
      rung: "apply",
      prompt: <p>Why, according to Kant, is cruelty to animals wrong?</p>,
      answer: { kind: "choice", options: ["It damages our humanity and leads to cruelty towards people", "Animals have rights", "Animals are rational", "It reduces total happiness"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is it wrong to eat meat from factory farms? Argue for a view, using either Singer or Regan.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Singer’s equal consideration or Regan’s rights view.",
          "Considers an objection, such as the special status of humans or the benefits to people.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If fish feel pain, does that change how fishing should be judged compared with farming chickens?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers the evidence or uncertainty about fish sentience.",
          "Compares the kinds and amounts of suffering involved.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Singer and Regan widen moral concern to animals one by one. But what of a river, a forest or a species, which feel
        nothing and are not subjects of a life? Environmental ethics asks whether these matter in themselves.
      </p>
      <p>Next, environmental ethics.</p>
    </>
  ),
};
