import { Definition, Remark } from "@/components/lesson/Blocks";
import { CaseMatrixViz } from "@/components/viz/CaseMatrixViz";
import { RollbackViz } from "@/components/viz/RollbackViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.7.3",
  minutes: 80,
  links: {
    revisits: ["p11.7.1", "p11.7.2", "p11.4.3"],
    foreshadows: ["p11.7.4", "p12.4.1", "p13.4.3"],
  },

  puzzle: (
    <>
      <p>
        Libertarians agree with the consequence argument: if determinism is true, no one is free. But they think we are free,
        so determinism must be false, at least for some of our choices. Yet if a choice is not determined by anything about
        you, how is it any more yours than the outcome of a coin toss?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Roll the world back to the moment before Alice&rsquo;s choice, again and again. What do the replays suggest about her choice?</p>
      <RollbackViz />
    </>
  ),

  theory: (
    <>
      <Definition title="libertarianism">
        <p>
          <strong>Libertarianism</strong> about free will holds that free will is incompatible with determinism, and that we
          have free will, so some of our actions are not determined. Its versions differ over what, besides indeterminism,
          makes an undetermined act free and the agent&rsquo;s own.
        </p>
      </Definition>

      <Definition title="three libertarian accounts">
        <p>
          <strong>Event-causal</strong> (Robert Kane): free acts are caused, indeterministically, by the agent&rsquo;s reasons
          and efforts. In <em>self-forming actions</em>, the agent makes competing efforts, say to keep a promise and to pursue
          a career, and whichever succeeds is endorsed as the agent&rsquo;s own. <strong>Agent-causal</strong> (Roderick
          Chisholm, Timothy O&rsquo;Connor): the agent, a substance, directly causes the decision, and is not just a series of
          events. <strong>Non-causal</strong> (Carl Ginet): a free act is an uncaused mental act with an &ldquo;actish&rdquo;
          feel, explained by reasons rather than caused.
        </p>
      </Definition>

      <Remark title="the luck objection">
        <p>
          If nothing about the agent before the choice settles it, then the same agent, with the same reasons and character,
          might have chosen otherwise. The difference between the world where Alice tells the truth and the one where she lies
          is then a matter of luck, and luck seems to undermine, not support, control. Van Inwagen&rsquo;s rollback dramatises
          this: after many replays, each outcome looks like chance.
        </p>
      </Remark>

      <CaseMatrixViz
        prompt="Click a cell: does the account have a good answer to the problem?"
        theories={["event-causal (Kane)", "agent-causal", "non-causal"]}
        cases={["the luck objection", "fit with science", "explaining the choice"]}
        verdicts={[
          [
            { ok: false, why: "Kane says the agent endorses whichever effort succeeds, so either way the choice is the agent’s own. Critics reply that which effort succeeds is still not up to the agent." },
            { ok: true, why: "It needs only undetermined events in the brain, perhaps amplified quantum effects, which physics allows." },
            { ok: true, why: "Either outcome is explained by the reasons for it, though not contrastively: nothing explains why this rather than that." },
          ],
          [
            { ok: true, why: "The agent, not a chancy event, settles the choice, so it is not luck. Critics ask what the agent adds that an event does not." },
            { ok: false, why: "Substance causation that is not reducible to events is hard to place within a scientific picture of the brain." },
            { ok: false, why: "What explains why the agent caused this decision rather than the other? Reasons do not seem to determine it." },
          ],
          [
            { ok: false, why: "An uncaused act seems even less under control than an indeterministically caused one." },
            { ok: true, why: "It adds no special kind of causation, only uncaused mental acts." },
            { ok: false, why: "It must explain an act by reasons without those reasons causing it, which many find hard to understand." },
          ],
        ]}
      />

      <Remark title="is indeterminism enough, or too much?">
        <p>
          Compatibilists ask what indeterminism adds: if a determined choice is not free, how does adding chance help? Some
          libertarians reply that indeterminism is not the source of freedom but a condition for the agent to be the ultimate
          source of what they do, with no causal chain stretching back before their birth.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does a libertarian about free will believe?</p>,
      answer: {
        kind: "choice",
        options: [
          "Free will is compatible with determinism.",
          "Free will is incompatible with determinism, and we have free will.",
          "No one has free will.",
          "The state should not interfere with choices.",
        ],
        correct: [1],
      },
    },
    {
      key: "agent",
      rung: "check",
      prompt: <p>On agent-causal libertarianism, what causes a free decision?</p>,
      answer: { kind: "choice", options: ["Prior brain events", "The agent, as a substance", "Nothing at all", "God"], correct: [1] },
    },
    {
      key: "kane",
      rung: "apply",
      prompt: <p>In Kane&rsquo;s self-forming actions, what happens?</p>,
      answer: {
        kind: "choice",
        options: [
          "The agent tosses a coin.",
          "The agent makes competing efforts, and whichever succeeds is the agent’s own choice.",
          "God chooses for the agent.",
          "The agent is manipulated by neuroscientists.",
        ],
        correct: [1],
      },
    },
    {
      key: "luck",
      rung: "apply",
      prompt: <p>What does the rollback argument suggest?</p>,
      answer: {
        kind: "choice",
        options: [
          "That determinism is true.",
          "That undetermined choices, replayed, look like matters of chance.",
          "That time travel is possible.",
          "That agents never change their minds.",
        ],
        correct: [1],
      },
    },
    {
      key: "contrast",
      rung: "apply",
      prompt: <p>Why do critics say event-causal libertarianism lacks a contrastive explanation?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because nothing explains why the agent chose this rather than the alternative, given the same prior state.",
          "Because it denies that agents have reasons.",
          "Because it requires God.",
          "Because it accepts determinism.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does the luck objection refute libertarianism? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the luck objection, for example through the rollback.",
          "Considers a libertarian reply, such as Kane’s endorsement of either effort or agent causation.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "add",
      rung: "stretch",
      prompt: <p>If a determined choice is not free, how could adding chance make it free? Is there a good libertarian answer?</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the worry that chance seems to reduce control.",
          "Considers an answer, such as indeterminism making the agent the ultimate source.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what libertarianism about free will claims, the event-causal, agent-causal and non-causal accounts, the luck objection and van Inwagen’s rollback, and how libertarians try to answer it.",

  glimpse: (
    <p>
      The next lesson considers giving up free will altogether, and what follows for blame and punishment. Philosophy of mind
      returns to the question of how mental events can cause anything.
    </p>
  ),
};
