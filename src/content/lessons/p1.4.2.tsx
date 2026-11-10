import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { OfficerViz } from "@/components/viz/OfficerViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.4.2",
  minutes: 70,
  links: {
    revisits: ["p0.4.2", "p1.2.1"],
    foreshadows: ["p7.3.4", "p30.2.1", "p31.3.1"],
  },

  puzzle: (
    <>
      <p>
        Imagine that one morning a prince wakes up with all the memories, plans and character of a cobbler, and the cobbler
        wakes up with all those of the prince. The prince&rsquo;s body walks into the cobbler&rsquo;s shop and says,
        &ldquo;What am I doing here? I live in the palace.&rdquo;
      </p>
      <p>
        Who is who? Is the person in the prince&rsquo;s body the prince, because it is his body? Or the cobbler, because it
        has the cobbler&rsquo;s mind? Answer before reading on, and notice the reason you give.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Most people say the cobbler is now in the prince&rsquo;s body: we go where our minds go. That suggests the{" "}
        <strong>psychological</strong> answer to the persistence question: you are the same person as someone in the past if
        you are linked to them by memory and other psychological connections.
      </p>
      <p>
        John Locke, who told the story of the prince and the cobbler, made memory central. But Thomas Reid found a problem with
        Locke&rsquo;s version, using a brave officer who had once been a boy. Explore Reid&rsquo;s case below, and then the
        repair that most memory theorists now accept.
      </p>
      <OfficerViz />
    </>
  ),

  theory: (
    <>
      <Quote source={<>John Locke, <cite>An Essay Concerning Human Understanding</cite>, Book II, chapter 27 (second edition, 1694)</>}>
        <p>
          &hellip;a thinking intelligent being, that has reason and reflection, and can consider itself as itself, the same
          thinking thing, in different times and places&hellip;
        </p>
      </Quote>

      <Definition title="the memory theory">
        <p>
          On Locke&rsquo;s view a <strong>person</strong> is defined by consciousness, and a person at one time is the same as
          a person at an earlier time if the later one can remember, from the inside, the earlier one&rsquo;s experiences and
          actions. Identity of person, Locke held, is not identity of body, nor even of soul.
        </p>
      </Definition>

      <Example title="Reid's brave officer">
        <p>
          Reid, in his <cite>Essays on the Intellectual Powers of Man</cite> (1785), imagined a boy flogged for robbing an
          orchard, who becomes a brave officer and remembers the flogging, and later a general who remembers taking the
          standard as an officer but has forgotten the flogging. On Locke&rsquo;s theory the general is the officer and the
          officer is the boy, but the general is not the boy. Since identity is transitive, the theory contradicts itself.
        </p>
      </Example>

      <Definition title="psychological continuity">
        <p>
          The repair: replace direct memory by a <strong>chain</strong> of overlapping links. You are the same person as an
          earlier person if you are connected by a chain of stages, each strongly connected to the next by memories,
          intentions carried out, beliefs, desires and character. The general is linked to the boy through the officer, and
          transitivity is restored.
        </p>
      </Definition>

      <Remark title="Butler's circle">
        <p>
          Joseph Butler objected in 1736 that the theory is circular: to genuinely remember doing something, rather than
          merely seeming to, you must be the person who did it. So memory presupposes personal identity and cannot define it.
          Later philosophers answered with <em>quasi-memory</em>: a state just like memory, caused in the right way by an
          earlier experience, which does not by definition require the same person. Whether quasi-memory is coherent is still
          discussed.
        </p>
      </Remark>

      <Definition title="the bodily and animalist views">
        <p>
          On the <strong>bodily</strong> view you are the same person as someone in the past if you have the same body, or
          the same brain. <strong>Animalism</strong>, a recent version, says that you are a human animal, and you persist as
          long as that animal lives, as any other animal does. A powerful consideration in its favour: you were once a foetus
          with no psychology at all, and you might one day be in a permanent coma. Psychological theories must say that you
          were never a foetus, and would not survive into the coma. The animalist says you would.
        </p>
      </Definition>
    </>
  ),

  practice: [
    {
      key: "locke",
      rung: "check",
      prompt: <p>On Locke&rsquo;s theory, what makes a later person the same as an earlier person?</p>,
      answer: {
        kind: "choice",
        options: ["having the same body", "remembering the earlier person's experiences from the inside", "having the same soul", "looking the same"],
        correct: [1],
      },
    },
    {
      key: "cobbler",
      rung: "check",
      prompt: <p>The prince and the cobbler story is meant to support which kind of view?</p>,
      answer: { kind: "choice", options: ["bodily", "psychological", "animalist", "no-self"], correct: [1] },
    },
    {
      key: "transitive",
      rung: "apply",
      prompt: <p>Reid&rsquo;s brave officer shows that Locke&rsquo;s theory conflicts with which property of identity?</p>,
      answer: { kind: "choice", options: ["that identity is transitive", "that identity is qualitative", "that identity changes over time", "that identity is physical"], correct: [0] },
    },
    {
      key: "repair",
      rung: "apply",
      prompt: <p>How does the psychological continuity view handle Reid&rsquo;s case?</p>,
      answer: {
        kind: "choice",
        options: [
          "It says the general is not the officer.",
          "It links the general to the boy through a chain of overlapping memories via the officer.",
          "It says none of them are the same person.",
          "It requires the general to remember everything.",
        ],
        correct: [1],
      },
    },
    {
      key: "foetus",
      rung: "apply",
      prompt: <p>Which case is a strong point for animalism?</p>,
      answer: {
        kind: "choice",
        options: [
          "The prince and the cobbler.",
          "That you were once a foetus with no psychology.",
          "Reid's brave officer.",
          "The ship of Theseus.",
        ],
        correct: [1],
      },
    },
    {
      key: "butler",
      rung: "prove",
      prompt: (
        <p>
          Explain Butler&rsquo;s circularity objection to the memory theory in your own words, and assess whether the appeal to
          quasi-memory answers it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that genuine memory of doing something requires being the one who did it.",
          "Concludes that defining identity by memory is circular.",
          "Explains quasi-memory as memory-like states caused in the right way, without presupposing identity.",
          "Gives a reasoned view on whether this succeeds.",
        ],
      },
    },
    {
      key: "transplant",
      rung: "stretch",
      prompt: (
        <p>
          Your brain is transplanted into a new body, and your old body is kept alive without a brain. Which one is you? Say
          what the psychological theory, the brain-based bodily theory and animalism would each say, and give your own view.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Says the psychological theory follows the brain, since it carries memories and character.",
          "Says a brain-based bodily theory also follows the brain.",
          "Says animalism may stay with the living animal, the old body, and explains why.",
          "Gives a personal view with a reason.",
        ],
      },
    },
  ],

  teachBack:
    "Explain Reid's brave officer to a friend, and how the idea of a chain of memories rescues Locke's theory.",

  glimpse: (
    <p>
      The next lesson pushes both theories to breaking point with cases from Derek Parfit: teletransportation and a person
      who divides in two. Locke on personal identity has a lesson of its own in Early Modern Philosophy, and Parfit&rsquo;s
      views are studied in depth in the graduate course on ethics.
    </p>
  ),
};
