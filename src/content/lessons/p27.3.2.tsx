import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { FusionCountViz } from "@/components/viz/FusionCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p27.3.2",
  minutes: 90,
  links: {
    revisits: ["p27.3.1", "p11.2.1", "p11.5.3"],
    foreshadows: ["p27.5.1", "p27.5.2", "p27.5.3"],
  },

  puzzle: (
    <>
      <p>
        The nihilist says there are no chairs, tables or mountains, only simples arranged in various ways. The
        universalist says there is an object made of your nose and the Moon. Each view is consistent, and each sounds
        absurd. If the vagueness argument is right and one of them must be true, which absurdity is easier to live with?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Increase the number of simples and compare the counts, then show the paraphrase.</p>
      <FusionCountViz />
    </>
  ),

  theory: (
    <>
      <Definition title="nihilism">
        <p>
          <strong>Mereological nihilism</strong> says no things ever compose anything: only simples exist. The nihilist
          keeps ordinary talk acceptable by paraphrase. &lsquo;There is a chair here&rsquo; is false, strictly speaking, but
          &lsquo;there are simples arranged chairwise here&rsquo; is true, and that is what ordinary speakers care about.
          Theodore Sider has defended nihilism as the simplest metaphysics.
        </p>
      </Definition>

      <Definition title="universalism">
        <p>
          <strong>Universalism</strong>, or unrestricted composition, says any things whatever compose something, their
          fusion. Lewis defended it, adding that a fusion is &lsquo;nothing over and above&rsquo; its parts, so believing in
          it is no further commitment: the thesis that composition is like identity. Ordinary speech ignores strange fusions
          because our quantifiers are restricted, just as &lsquo;everyone is here&rsquo; ignores most people.
        </p>
      </Definition>

      <Example title="arguments">
        <ul>
          <li>
            Overdetermination. Trenton Merricks argued that if a baseball broke a window, so did its atoms, acting in
            concert; the baseball adds no causal power and should be eliminated. He made an exception for conscious
            persons, whose powers are not those of their parts.
          </li>
          <li>
            Gunk. If matter might divide without end, with no simples at all, then nihilism would say nothing material
            exists, which seems wrong for such a world. Nihilists reply that gunk may be impossible, or that the thesis is
            contingent.
          </li>
          <li>
            Strange objects. Against universalism, the nose–Moon fusion is unwelcome. Universalists reply that it is
            harmless, being nothing over and above its parts.
          </li>
        </ul>
      </Example>

      <Remark title="is it a real dispute?">
        <p>
          Eli Hirsch argued that the nihilist and the universalist are using &lsquo;there is&rsquo; with different
          meanings, each speaking truly in their own language, so the dispute is verbal. That challenge returns at the end
          of this course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "nih",
      rung: "check",
      prompt: <p>What does mereological nihilism say?</p>,
      answer: { kind: "choice", options: ["Things never compose anything; only simples exist", "Nothing exists at all", "Everything is a part of everything", "Only the whole cosmos exists"], correct: [0] },
    },
    {
      key: "cai",
      rung: "check",
      prompt: <p>What does it mean to say composition is like identity?</p>,
      answer: { kind: "choice", options: ["A fusion is nothing over and above its parts, so believing in it adds no commitment", "Every object is identical to every other", "Parts are identical to wholes only for organisms", "Identity is a kind of parthood"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with 10 simples, how many objects does universalism count?</p>,
      answer: { kind: "numeric", value: 1023, tolerance: 0 },
    },
    {
      key: "gunk",
      rung: "apply",
      prompt: <p>What is the gunk objection to nihilism?</p>,
      answer: { kind: "choice", options: ["In a world where matter divides without end, nihilism implies nothing material exists", "Gunk makes universalism inconsistent", "Gunk is made of simples", "Gunk shows organisms do not exist"], correct: [0] },
    },
    {
      key: "merr",
      rung: "apply",
      prompt: <p>What is Merricks&rsquo;s overdetermination argument against baseballs?</p>,
      answer: { kind: "choice", options: ["The atoms acting in concert already cause the effect, so the baseball adds no causal power", "Baseballs are too small to cause anything", "Causation does not exist", "Baseballs are conscious"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Which is more plausible, nihilism or universalism? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States both views fairly.",
          "Considers at least one argument or objection, such as paraphrase, overdetermination, gunk, strange objects or composition as identity.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the dispute between the nihilist and the universalist merely verbal?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the claim that the two sides mean different things by ‘there is’.",
          "Considers a reply, such as that one meaning of the quantifier is privileged.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        From what exists, metaphysics turns to how it behaves. Do the laws of nature push the world along, or are they
        just patterns in what happens?
      </p>
      <p>Next, Humean supervenience.</p>
    </>
  ),
};
