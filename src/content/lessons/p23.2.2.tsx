import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PremiseRejectViz, type Premise } from "@/components/viz/PremiseRejectViz";
import type { LessonContent } from "@/lib/types";

const PREMISES: Premise[] = [
  { text: "Every contingent fact has an explanation (the principle of sufficient reason).", who: "Hume and Russell reject this", why: "Some facts may be brute. Russell, debating Copleston: ‘I should say that the universe is just there, and that’s all.’ The demand for an explanation of everything is not self-evident." },
  { text: "The big conjunctive contingent fact, the conjunction of all contingent truths, is contingent.", who: "Few reject this", why: "Any conjunction with a contingent conjunct is contingent. Denying it would make the actual world necessary, which is what the argument is trying to avoid." },
  { text: "Its explanation cannot be contingent, since a contingent explanation would be part of what needs explaining; so it must be a necessary being.", who: "Van Inwagen and Hume–Edwards critics reject this", why: "Van Inwagen: if a necessary fact explained the big fact, it would entail it, making it necessary: modal collapse. Hume and Edwards: explain each part and you have explained the whole; nothing is left over." },
  { text: "A necessary being that explains the world is God.", who: "Rowe and others reject this", why: "The gap problem: nothing shows the necessary being is personal, good, omniscient or unique. It could be an impersonal necessary law, or the universe itself." },
];

export const lesson: LessonContent = {
  id: "p23.2.2",
  minutes: 90,
  links: {
    revisits: ["p23.2.1", "p1.5.1", "p11.4.1"],
    foreshadows: ["p23.2.3", "p23.4.3", "p23.5.1"],
  },

  puzzle: (
    <>
      <p>
        Why is there something rather than nothing? Explain one thing by another and you can always ask about that other.
        Either the questions go on for ever, or they stop at something that explains itself, or they stop at nothing at
        all. Each option sounds strange. Which is least strange?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here is the Leibnizian argument from contingency. Pick the premise you find weakest and see who has rejected it, and
        why.
      </p>
      <PremiseRejectViz
        premises={PREMISES}
        conclusion="God exists, as the necessary being that explains why there is any contingent world at all."
        intro="The argument is valid. A critic must reject at least one premise."
      />
    </>
  ),

  theory: (
    <>
      <Definition title="two families">
        <p>
          The <strong>kalām</strong> argument, met earlier, reasons that the universe began to exist and so has a cause. The{" "}
          <strong>argument from contingency</strong>, from Leibniz and Samuel Clarke, needs no beginning: even a universe
          that always existed is contingent, and calls for an explanation of why it exists at all. This lesson is about the
          second.
        </p>
      </Definition>

      <Definition title="the principle of sufficient reason">
        <p>
          Leibniz: &lsquo;no fact can be real or existent, no statement true, unless there be a sufficient reason why it is so
          and not otherwise&rsquo;. Alexander Pruss defends a version for contingent facts, arguing that we assume it in
          science and daily life, and that without it we could not trust that our perceptions have causes at all.
        </p>
      </Definition>

      <Example title="Copleston and Russell">
        <p>
          In their 1948 radio debate, Copleston argued that a series of contingent beings, even infinite, needs an
          explanation outside itself. Russell replied that the concept of &lsquo;the cause of the universe&rsquo; is
          meaningless, comparing it to inferring that the human race has a mother because every human does: a fallacy of
          composition.
        </p>
      </Example>

      <Remark title="modal collapse">
        <p>
          Peter van Inwagen argued that the strong principle of sufficient reason proves too much. Let the big conjunctive
          contingent fact be explained by some fact. If the explaining fact is necessary and entails the big fact, the big fact
          is necessary too. If it is contingent, it is part of the big fact and explains itself. Either way the principle
          seems to make everything necessary. Defenders reply that explanation need not be entailment: a free choice, or a
          probabilistic cause, can explain without necessitating.
        </p>
      </Remark>

      <Remark title="the gap problem">
        <p>
          William Rowe, who defended the argument as better than its critics allowed, still stressed the gap between a
          necessary being and the God of theism. Further argument is needed: that a necessary being must be unlimited, and so
          perfect, and so personal. These steps are where much recent work goes.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "psr",
      rung: "check",
      prompt: <p>What does the principle of sufficient reason say?</p>,
      answer: { kind: "choice", options: ["Every (contingent) fact has an explanation", "Every event has a physical cause", "Everything is necessary", "God is the explanation of every event"], correct: [0] },
    },
    {
      key: "kalam",
      rung: "check",
      prompt: <p>How does the argument from contingency differ from the kalām?</p>,
      answer: { kind: "choice", options: ["It does not need the universe to have a beginning", "It assumes the universe began", "It relies on design", "It is an ontological argument"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which premise does van Inwagen’s modal collapse objection target?</p>,
      answer: { kind: "choice", options: ["That the explanation must be a necessary being", "That the big fact is contingent", "That the necessary being is God", "None of them"], correct: [0] },
    },
    {
      key: "russell",
      rung: "apply",
      prompt: <p>Russell compared inferring a cause of the universe to inferring that the human race has a mother. What fallacy did he allege?</p>,
      answer: { kind: "choice", options: ["The fallacy of composition", "Begging the question", "Ad hominem", "Affirming the consequent"], correct: [0] },
    },
    {
      key: "he",
      rung: "apply",
      prompt: <p>Hume and Edwards say that once each member of a series is explained, the series is explained. What is the best reply?</p>,
      answer: { kind: "choice", options: ["Explaining each member by an earlier one leaves unexplained why there is any such series at all", "No member can be explained", "The series must be finite", "Hume and Edwards were theists"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is it reasonable to accept that the existence of the universe is a brute fact? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the brute fact view and the principle of sufficient reason it denies.",
          "Weighs a consideration on each side, such as our trust in explanation or van Inwagen’s modal collapse.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If there must be a necessary being, why not say the universe itself, or its laws, are necessary?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers why the universe seems contingent: it could have been different, or absent.",
          "Considers whether a necessary being must have features, such as being unlimited, that the universe lacks.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The cosmological argument asks why there is a world at all. A different argument asks why the world is the kind of
        world that allows life, given that small changes to physics would have ruled it out.
      </p>
      <p>
        Next, fine-tuning: the constants of physics, the likelihood principle, the multiverse reply and the objections to
        both.
      </p>
    </>
  ),
};
