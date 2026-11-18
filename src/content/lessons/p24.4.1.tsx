import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EthicismViz } from "@/components/viz/EthicismViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p24.4.1",
  minutes: 90,
  links: {
    revisits: ["p24.3.2", "p24.1.2", "p5.4.1"],
    foreshadows: ["p24.4.2", "p13.1.4", "p25.4.1"],
  },

  puzzle: (
    <>
      <p>
        Leni Riefenstahl&rsquo;s film <em>Triumph of the Will</em> (1935) is widely called a masterpiece of editing and
        composition. It is also a celebration of Hitler. Is it a great film with an evil message, or is it a worse film because
        its message is evil?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Set a work&rsquo;s other aesthetic merits, the moral flaw in the attitudes it invites, and whether that flaw stops
        audiences responding as the work intends. Compare three views of the work&rsquo;s aesthetic value.
      </p>
      <EthicismViz />
    </>
  ),

  theory: (
    <>
      <Definition title="autonomism">
        <p>
          &lsquo;There is no such thing as a moral or an immoral book,&rsquo; wrote Oscar Wilde. &lsquo;Books are well written,
          or badly written. That is all.&rsquo; <strong>Radical autonomism</strong> says moral assessment of art is a category
          mistake. <strong>Moderate autonomism</strong>, defended by James Anderson and Jeffrey Dickinson, allows that works can be
          morally good or bad, but holds that this never affects their aesthetic value.
        </p>
      </Definition>

      <Definition title="moderate moralism">
        <p>
          Noël Carroll&rsquo;s <strong>moderate moralism</strong> says some moral defects are aesthetic defects. A work aims at a
          response: a tragedy at pity, a comedy at laughter. If its moral flaw makes that response unavailable to a morally
          sensitive audience, as when we are asked to pity a character whose cruelty the work admires, the work fails on its
          own terms. Hume made the same point: where vicious manners are not marked with blame, &lsquo;I cannot, nor is it proper
          I should, enter into such sentiments&rsquo;.
        </p>
      </Definition>

      <Definition title="ethicism">
        <p>
          Berys Gaut&rsquo;s <strong>ethicism</strong> is stronger: a work that prescribes an unmerited response, such as
          amusement at suffering, is to that extent aesthetically flawed, whether or not audiences actually resist. The flaw is{" "}
          <em>pro tanto</em>: it can be outweighed, so a flawed work can still be great overall.
        </p>
      </Definition>

      <Example title="immoralism">
        <p>
          Matthew Kieran and others defend <strong>immoralism</strong>: a moral flaw can sometimes be an aesthetic merit. A novel
          like <em>Lolita</em> may succeed partly because it seduces us into seeing the world through a monstrous narrator, and so
          teaches us something about how evil charms. On this view, cognitive value can come through moral defect.
        </p>
      </Example>

      <Remark title="imaginative resistance">
        <p>
          A related puzzle: we readily imagine dragons and time travel, yet resist imagining that, in a story, killing a baby
          girl was right because she was a girl. Philosophers since Hume have asked why moral facts resist fictional
          stipulation in a way that physical facts do not. The answer bears on how far art can move our moral sense.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "auto",
      rung: "check",
      prompt: <p>What does moderate autonomism hold?</p>,
      answer: { kind: "choice", options: ["Works can be morally assessed, but moral value never affects aesthetic value", "Moral assessment of art is a category mistake", "Moral flaws are always aesthetic flaws", "Moral flaws can be aesthetic merits"], correct: [0] },
    },
    {
      key: "gaut",
      rung: "check",
      prompt: <p>On Gaut&rsquo;s ethicism, when is a work aesthetically flawed by its morality?</p>,
      answer: { kind: "choice", options: ["When it prescribes an unmerited response, whether or not audiences resist", "Only when audiences refuse the response", "Never", "Only when it breaks the law"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set other merits to 8 and the moral flaw to 3, with audiences still able to respond as invited. What value does moderate moralism give?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "eth",
      rung: "apply",
      prompt: <p>In the same setting, other merits 8 and moral flaw 3, what value does ethicism give?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "hume",
      rung: "apply",
      prompt: <p>Hume says he cannot &lsquo;enter into&rsquo; sentiments a work invites when vice is not blamed. Which view does this support?</p>,
      answer: { kind: "choice", options: ["Moderate moralism", "Radical autonomism", "Immoralism", "None of them"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Can a moral flaw in a work be an aesthetic flaw? Argue for a view, using an example.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States at least two views, such as autonomism and moralism or ethicism.",
          "Uses an example, real or invented, and considers an objection.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should we still watch or teach a great film whose maker did terrible things, if the film itself is not immoral?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes the moral character of the work from that of its maker.",
          "Considers reasons on both sides, such as learning from the work and not rewarding the maker.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The Western debates have asked whether we really feel emotions for fiction and whether those emotions should be moral.
        Classical Indian aesthetics, from Bharata to Abhinavagupta, began instead from the savouring of emotion itself.
      </p>
      <p>Next, rasa theory in Indian aesthetics.</p>
    </>
  ),
};
