import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { PrisonersViz } from "@/components/viz/PrisonersViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.6.1",
  minutes: 70,
  links: {
    revisits: ["p0.4.1", "p1.3.3"],
    foreshadows: ["p4.3.3", "p5.1.4", "p14.1.1", "p26.4.3"],
  },

  puzzle: (
    <>
      <p>
        A shepherd named Gyges finds a gold ring. He discovers that when he turns it on his finger, he becomes invisible. Within
        a short time he has used it to enter the royal palace, seize the throne and take whatever he likes, and nobody ever
        finds out.
      </p>
      <p>
        Suppose you had such a ring, and could never be caught or blamed for anything. Would you still have a reason to be
        honest and fair? If your answer is yes, what exactly is that reason?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The story comes from Plato&rsquo;s <cite>Republic</cite>, Book II, where Glaucon tells it to make a sharp point: perhaps
        people are just only because they fear being caught. Remove the fear and the reason seems to vanish.
      </p>
      <p>
        One reply is that cheating usually does not pay in the long run, because we deal with the same people again and
        again. Below is the <strong>prisoner&rsquo;s dilemma</strong>. In a single round, cheating is always better for you,
        whatever the other player does. Increase the number of rounds and see which strategy comes out ahead in the
        tournament.
      </p>
      <PrisonersViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Glaucon's challenge">
        <p>
          Glaucon divides good things into three kinds: those good only in themselves (such as harmless pleasures), those good
          only for their results (such as medicine), and those good both in themselves and for their results (such as health
          and knowledge). Most people, he says, think justice belongs to the second kind: an unpleasant medicine we take to
          avoid punishment. He challenges Socrates to show that justice belongs to the third kind, and is good for the just
          person even if no one ever sees it.
        </p>
      </Definition>

      <Definition title="two kinds of egoism">
        <p>
          <strong>Psychological egoism</strong> is a claim about what people <em>do</em>: everyone always acts in what they
          take to be their own interest. <strong>Ethical egoism</strong> is a claim about what people <em>ought</em> to do:
          each person should act in their own interest. Glaucon&rsquo;s challenge is pressing because, if ethical egoism were
          true, the ring would seem to make injustice the rational choice.
        </p>
      </Definition>

      <Remark title="is psychological egoism true?">
        <p>
          It can seem unanswerable: whatever someone does, even giving their life for a stranger, the egoist says they did it
          because they wanted to. But then the theory has become empty. That an act is done because I want to do it does not
          make it selfish; what matters is <em>what</em> I want, and I can want another person to be well for their own sake.
          Joseph Butler made this point in his sermons of 1726.
        </p>
      </Remark>

      <Quote source={<>Thomas Hobbes, <cite>Leviathan</cite> (1651), chapter 13</>}>
        <p>&hellip; and the life of man, solitary, poor, nasty, brutish, and short.</p>
      </Quote>
      <p>
        Hobbes described what life would be like with no government and no rules: a war of every person against every person.
        Each would gain if all kept their bargains, but no one can trust anyone else to keep them. Hobbes&rsquo;s answer was
        an agreement to give power to a ruler who would enforce bargains. On this view, morality is a set of rules that
        self-interested people would agree to for mutual benefit.
      </p>

      <Example title="the prisoner's dilemma">
        <p>
          The game was studied at the RAND Corporation in 1950, and named by the mathematician Albert Tucker. Each player
          either cooperates or cheats. Whatever the other does, cheating scores more for you, yet if both cheat, both do worse
          than if both had cooperated. In 1980 Robert Axelrod invited experts to submit strategies for a repeated version. The
          winner was the simplest entry, Anatol Rapoport&rsquo;s <strong>tit for tat</strong>: cooperate first, then copy the
          other player&rsquo;s last move.
        </p>
      </Example>

      <Remark title="does this answer Glaucon?">
        <p>
          Only partly. Repeated games show why cooperation is usually wise, but the ring removes exactly the repetition and the
          risk of being found out. Plato&rsquo;s own answer is different: justice is a harmony within the soul, with reason in
          charge of appetite, and the unjust person, however powerful, is inwardly disordered and wretched. Whether that is
          convincing is one of the oldest questions in ethics.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "ring",
      rung: "check",
      prompt: <p>What point is Glaucon making with the story of the ring of Gyges?</p>,
      answer: {
        kind: "choice",
        options: [
          "That invisibility is impossible.",
          "That people may be just only because they fear being caught.",
          "That shepherds are dishonest.",
          "That kings deserve their thrones.",
        ],
        correct: [1],
      },
    },
    {
      key: "egoisms",
      rung: "check",
      prompt: <p>&ldquo;Everyone ought to act in their own interest&rdquo; is a statement of&hellip;</p>,
      answer: { kind: "choice", options: ["psychological egoism", "ethical egoism", "utilitarianism", "Plato's view"], correct: [1] },
    },
    {
      key: "one-round",
      rung: "apply",
      prompt: (
        <p>
          In the visualisation, both cooperating scores 3 each, both cheating scores 1 each, and cheating a cooperator scores
          5 against 0. If the other player cooperates in a single round, how many points do you score by cheating?
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "tft-cheat",
      rung: "apply",
      prompt: <p>With the same scores, over 10 rounds, how many points does always cheat score against tit for tat?</p>,
      answer: { kind: "numeric", value: 14 },
    },
    {
      key: "kinds",
      rung: "apply",
      prompt: <p>Glaucon asks Socrates to show that justice is good&hellip;</p>,
      answer: {
        kind: "choice",
        options: [
          "only for its results, like medicine.",
          "only in itself, like a harmless pleasure.",
          "both in itself and for its results, like health.",
          "for no reason at all.",
        ],
        correct: [2],
      },
    },
    {
      key: "egoism-empty",
      rung: "prove",
      prompt: (
        <p>
          A friend says: &ldquo;Everyone is selfish. Even a mother who gives up her life for her child does it because she
          wants to.&rdquo; Set out the argument, and explain carefully what is wrong with it.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the argument: every act is done because the agent wants to do it, so every act is selfish.",
          "Distinguishes acting on one's own desire from acting for one's own benefit.",
          "Notes that desires can be aimed at another person's good, as Butler argued.",
          "Observes that if every possible act counts as selfish, the claim says nothing.",
        ],
      },
    },
    {
      key: "gyges",
      rung: "stretch",
      prompt: (
        <p>
          You have the ring of Gyges. Give the strongest reason you can for remaining just, and say whether it would persuade
          someone who cares only about their own interest.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains why the ring removes the usual reasons of reputation and punishment.",
          "Offers a reason that survives, such as Plato's harmony of the soul, the value of friendship and trust, or the good of others.",
          "Considers how a committed egoist would respond.",
          "Reaches a reasoned conclusion.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the story of the ring of Gyges, why the prisoner's dilemma suggests cheating does not pay in the long run, and why that may not fully answer Glaucon.",

  glimpse: (
    <p>
      Suppose we have reason to be moral. What then makes an act right or wrong? The next lesson tests three great answers
      against some awkward cases involving trams. Glaucon&rsquo;s challenge returns in Ancient Greek Philosophy, ethical egoism in
      Introduction to Ethics, Hobbes in Political Philosophy, and the prisoner&rsquo;s dilemma in the game theory of Modal
      Logic and Formal Methods.
    </p>
  ),
};
