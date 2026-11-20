import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MoralUncertaintyViz } from "@/components/viz/MoralUncertaintyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p30.4.1",
  minutes: 90,
  links: {
    revisits: ["p30.3.3", "p13.1.1", "p30.1.2"],
    foreshadows: ["p30.4.2", "p33.1.1", "p35.1.1"],
  },

  puzzle: (
    <>
      <p>
        You think it fairly unlikely that animals have serious moral status. But if they do, eating meat is a grave wrong;
        if they do not, it is a small pleasure. Should you act on the theory you find most plausible, or hedge against the
        one you think is probably false?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change your credence in the first theory, and compare two ways of deciding.</p>
      <MoralUncertaintyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="moral uncertainty">
        <p>
          An agent is <strong>morally uncertain</strong> when they divide their confidence between moral views, even
          knowing all the empirical facts. The question is what it is appropriate, or rational, to do in such a state:
          not what is right, which depends on the true theory, but what one ought to do given one&rsquo;s uncertainty.
        </p>
      </Definition>

      <Definition title="two approaches">
        <p>
          <strong>My Favourite Theory</strong>: act on the theory in which you have most credence. <strong>Maximise
          expected choiceworthiness</strong>, defended by William MacAskill, Krister Bykvist and Toby Ord in{" "}
          <em>Moral Uncertainty</em> (2020): weigh each option&rsquo;s choiceworthiness on each theory by your credence in
          that theory, and choose the option with the highest total, as in decisions under empirical uncertainty.
        </p>
      </Definition>

      <Example title="hedging">
        <p>
          With 30 per cent credence in a theory on which eating meat scores −100, and 70 per cent in one on which it scores
          +10, the expected choiceworthiness of eating meat is −23, so the expectational view recommends the vegetarian diet,
          though My Favourite Theory says to eat meat. Similar reasoning has been applied to abortion and to the moral
          status of future people.
        </p>
      </Example>

      <Remark title="problems">
        <p>
          <strong>Intertheoretic comparisons</strong>: what makes a unit of wrongness on one theory equal to a unit on
          another? Some theories, such as absolutist deontology, give no numbers at all, and the answer can be made to
          depend on arbitrary scaling. <strong>Fanaticism</strong>: a tiny credence in a theory with enormous stakes may
          swamp everything else. <strong>Regress</strong>: one may also be uncertain how to handle uncertainty. And
          Elizabeth Harman and Brian Weatherson argue that moral uncertainty does not matter: acting wrongly is not excused
          by moral ignorance, so only the true theory counts.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mft",
      rung: "check",
      prompt: <p>What does My Favourite Theory recommend?</p>,
      answer: { kind: "choice", options: ["Acting on the moral theory in which you have most credence", "Acting on the theory with the highest stakes", "Doing nothing under uncertainty", "Averaging all theories equally"], correct: [0] },
    },
    {
      key: "mec",
      rung: "check",
      prompt: <p>What does maximising expected choiceworthiness involve?</p>,
      answer: { kind: "choice", options: ["Weighting each option’s choiceworthiness on each theory by one’s credence in that theory", "Choosing the option most theories favour", "Choosing at random", "Following the law"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set credence in the first theory to 30%. What is the expected choiceworthiness of eating meat?</p>,
      answer: { kind: "numeric", value: -23, tolerance: 0 },
    },
    {
      key: "inter",
      rung: "apply",
      prompt: <p>What is the problem of intertheoretic comparisons?</p>,
      answer: { kind: "choice", options: ["It is unclear how to put different theories’ values on a common scale", "Theories never disagree", "Credences cannot be numbers", "Empirical facts are uncertain"], correct: [0] },
    },
    {
      key: "fan",
      rung: "apply",
      prompt: <p>What is the worry about fanaticism?</p>,
      answer: { kind: "choice", options: ["A small credence in a theory with huge stakes can dominate the decision", "Fanatics have too much credence", "The expected view ignores high stakes", "Uncertainty makes everyone a fanatic"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should we hedge against moral theories we think are probably false? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains at least one approach, such as My Favourite Theory or maximising expected choiceworthiness.",
          "Considers an objection, such as intertheoretic comparisons, fanaticism or the claim that only the true theory matters.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>If you are uncertain about how to act under moral uncertainty, does a regress follow?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the higher-order uncertainty and how a regress might arise.",
          "Considers a way to stop it, or why it may be harmless.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Moral uncertainty is personal; moral disagreement is social. Thoughtful people disagree about ethics as they do
        not about arithmetic. Does that show there is no fact of the matter?
      </p>
      <p>Next, moral disagreement.</p>
    </>
  ),
};
