import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { IdealisedDisagreementViz } from "@/components/viz/IdealisedDisagreementViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p30.4.2",
  minutes: 90,
  links: {
    revisits: ["p30.3.3", "p13.3.3", "p13.3.4"],
    foreshadows: ["p33.1.1", "p33.1.2", "p35.1.2"],
  },

  puzzle: (
    <>
      <p>
        Chemists in Delhi, Lagos and Lima agree about the boiling point of water. People in different places and centuries
        have disagreed deeply about slavery, punishment, sex and the treatment of animals, and careful philosophers still
        disagree about ethics today. Does all this disagreement show that there is no moral truth to be found?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Grant people ideal conditions one at a time, and see which disagreements remain.</p>
      <IdealisedDisagreementViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the argument from relativity">
        <p>
          J. L. Mackie argued in <em>Ethics: Inventing Right and Wrong</em> (1977) that the variation in moral codes is
          better explained by their reflecting different ways of life than by their being perceptions, most of them badly
          distorted, of objective values. Disagreement is not itself the premise; the claim is that error theory gives the
          best explanation of it.
        </p>
      </Definition>

      <Definition title="the realist reply">
        <p>
          Realists such as David Brink reply that much moral disagreement comes from disagreement over non-moral facts, from
          self-interest and partiality, from careless reasoning or from different circumstances, and that it would disappear
          under ideal conditions. Science, too, has had deep disagreements, explained by limited evidence rather than by
          there being no facts. Herodotus reports that some Greeks burned their dead while the Callatians ate theirs, each
          horrified at the other; both were showing respect for the dead.
        </p>
      </Definition>

      <Example title="fundamental disagreement">
        <p>
          John Doris and Alexandra Plakias, drawing on Richard Nisbett and Dov Cohen&rsquo;s studies of a &lsquo;culture of
          honour&rsquo; in the southern United States, argued that some disagreements about violence in response to insult
          persist even when the non-moral facts are agreed. If disagreements like these would survive ideal conditions, the
          realist must say that one side is mistaken without any detectable flaw in its reasoning.
        </p>
      </Example>

      <Remark title="disagreement among peers">
        <p>
          A newer argument asks what you should do when an equally informed and careful thinker disagrees with you.
          Conciliatory views say you should lower your confidence; since thoughtful people disagree about most moral
          questions, this threatens moral scepticism. Replies include that conciliationism undermines itself, since it is
          disputed among epistemologists, and the companions-in-guilt point that philosophy, history and much of science
          contain equally persistent disagreement.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mackie",
      rung: "check",
      prompt: <p>What does Mackie&rsquo;s argument from relativity claim?</p>,
      answer: { kind: "choice", options: ["Moral variation is better explained by different ways of life than by perception of objective values", "Disagreement alone proves there are no moral facts", "All moral codes are equally correct", "Everyone secretly agrees about morality"], correct: [0] },
    },
    {
      key: "reply",
      rung: "check",
      prompt: <p>How do realists such as Brink typically respond?</p>,
      answer: { kind: "choice", options: ["Much disagreement comes from non-moral error, bias or circumstance, and would vanish under ideal conditions", "Moral facts depend on each culture", "Disagreement shows that realism is false", "There is no real moral disagreement at all"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, turn on all three conditions. How many disagreements remain?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "herod",
      rung: "apply",
      prompt: <p>What is Herodotus&rsquo;s story of the Greeks and the Callatians usually taken to show?</p>,
      answer: { kind: "choice", options: ["Different practices can express a shared value, respect for the dead", "The Greeks were right and the Callatians wrong", "There are no shared values across cultures", "Funeral customs are not moral matters at all"], correct: [0] },
    },
    {
      key: "self",
      rung: "apply",
      prompt: <p>Why might a conciliatory view of disagreement undermine itself?</p>,
      answer: { kind: "choice", options: ["Conciliationism is itself disputed by careful epistemologists, so by its own lights one should lower confidence in it", "It requires agreeing with everyone", "It applies only to moral questions", "It implies that disagreement never happens"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does widespread moral disagreement show that there are no objective moral facts? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States an argument from disagreement fairly, such as Mackie’s.",
          "Considers a reply, such as non-moral error, idealisation or disagreement in other fields.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should disagreement from thoughtful people lower your confidence in your own moral views?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Engages with peer disagreement in ethics.",
          "Considers conciliatory and steadfast responses, or the self-undermining worry.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The graduate course in ethics and metaethics is complete. Philosophy of mind meets the laboratory next: scientists
        now propose theories of what makes a brain state conscious, and test them.
      </p>
      <p>Next, the course on graduate philosophy of mind and cognitive science begins with global workspace theory.</p>
    </>
  ),
};
