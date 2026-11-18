import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ConsiderabilityViz } from "@/components/viz/ConsiderabilityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p25.2.2",
  minutes: 90,
  links: {
    revisits: ["p25.2.1", "p5.5.2", "p7.2.2"],
    foreshadows: ["p25.2.3", "p25.3.2", "p25.3.1"],
  },

  puzzle: (
    <>
      <p>
        Imagine the last person alive, after some catastrophe, setting out to destroy every tree and river before they die.
        No one will ever be harmed, and no animal will suffer. Do they do anything wrong? If you feel they do, you think nature
        has value beyond its use to us.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Each view draws the circle of direct moral concern in a different place. Choose a view to see what it includes.</p>
      <ConsiderabilityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the last man">
        <p>
          Richard Routley&rsquo;s &lsquo;last man&rsquo; argument (1973) targets anthropocentrism, the view that only humans
          matter directly. If destroying the natural world is wrong even with no humans to be affected, then nature has value
          not derived from human interests. This is the question of <strong>intrinsic value</strong> in nature.
        </p>
      </Definition>

      <Definition title="biocentrism">
        <p>
          Paul Taylor&rsquo;s <em>Respect for Nature</em> (1986) holds that every living thing, plant or animal, has a good of its
          own: it can flourish or be damaged. Each is a teleological centre of life with inherent worth, and we should not
          regard ourselves as superior to other species. Albert Schweitzer had earlier called for &lsquo;reverence for
          life&rsquo;.
        </p>
      </Definition>

      <Definition title="ecocentrism and the land ethic">
        <p>
          Aldo Leopold&rsquo;s <em>A Sand County Almanac</em> (1949) proposed a land ethic: &lsquo;A thing is right when it tends
          to preserve the integrity, stability, and beauty of the biotic community. It is wrong when it tends otherwise.&rsquo;
          On this <strong>holist</strong> view, species and ecosystems matter, not only individuals. Arne Næss&rsquo;s deep
          ecology (1973) likewise rejected &lsquo;shallow&rsquo; environmentalism concerned only with human welfare.
        </p>
      </Definition>

      <Example title="the charge of eco-fascism">
        <p>
          Holism can conflict sharply with concern for individuals. Culling deer to protect a forest&rsquo;s plants is
          defensible on Leopold&rsquo;s view, but seems to treat individual animals as means. Tom Regan called this
          &lsquo;environmental fascism&rsquo;, since it might even license sacrificing humans for the biotic community.
          Defenders reply that the land ethic adds to our duties to persons rather than overriding them.
        </p>
      </Example>

      <Remark title="Chipko">
        <p>
          In the Chipko movement of the 1970s in the Himalayan foothills of present-day Uttarakhand, village women hugged
          trees to stop commercial felling. It combined livelihood, local control and reverence for the forest, and showed that
          environmental concern need not be a choice between human and natural interests.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "anthro",
      rung: "check",
      prompt: <p>What does anthropocentrism hold?</p>,
      answer: { kind: "choice", options: ["Only humans matter directly; nature matters through its effects on humans", "All living things matter equally", "Ecosystems matter more than individuals", "Nothing has intrinsic value"], correct: [0] },
    },
    {
      key: "last",
      rung: "check",
      prompt: <p>What does the &lsquo;last man&rsquo; argument aim to show?</p>,
      answer: { kind: "choice", options: ["Nature has value not derived from human interests", "Humans are the only valuable beings", "Destroying nature is always permitted", "Animals feel pain"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which view counts all living things but not species and ecosystems as such?</p>,
      answer: { kind: "choice", options: ["Biocentrism", "Ecocentrism", "Sentientism", "Anthropocentrism"], correct: [0] },
    },
    {
      key: "holism",
      rung: "apply",
      prompt: <p>Why is Leopold&rsquo;s land ethic called holist?</p>,
      answer: { kind: "choice", options: ["It gives moral weight to wholes such as species and ecosystems, not only individuals", "It treats all individuals equally", "It is about the whole of humanity", "It rejects all value in nature"], correct: [0] },
    },
    {
      key: "cull",
      rung: "apply",
      prompt: <p>Culling an overpopulated deer herd to save a forest is most easily justified by which view?</p>,
      answer: { kind: "choice", options: ["Ecocentrism", "Regan’s animal rights", "Sentientism focused on individual deer", "Kant’s view"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the last person act wrongly in destroying the natural world? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Routley’s scenario and what it is meant to show.",
          "Considers an anthropocentric reply, such as that the wrong lies in the person’s character.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Some rivers, such as the Whanganui in New Zealand, have been given legal personhood. Is that a good way to protect nature?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers what legal personhood achieves, such as standing in court.",
          "Considers whether it reflects or distorts the river’s value.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Climate change brings these questions together at a global scale: harms spread across nations and generations,
        caused by billions of individually tiny acts. Who must do what, and how should the burdens be shared?
      </p>
      <p>Next, climate ethics.</p>
    </>
  ),
};
