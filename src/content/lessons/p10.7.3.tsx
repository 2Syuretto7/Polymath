import { ArgumentStepViz } from "@/components/viz/ArgumentStepViz";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { DutchBookViz } from "@/components/viz/DutchBookViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p10.7.3",
  minutes: 80,
  links: {
    revisits: ["p10.7.1", "p10.7.2", "p3.4.4"],
    foreshadows: ["p26.4.1", "p28.2.1", "p16.4.3"],
  },

  puzzle: (
    <>
      <p>
        Probabilism says credences should obey the probability axioms. But why? Someone whose confidence in rain and in no rain
        adds up to 1.2 seems confused, yet they have contradicted no fact. Is there a way to show that incoherent credences are
        a genuine failing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Treat your credence as the price in rupees you think fair for a ticket that pays ₹100 if the claim is true. Set prices
        for A and for not A, and see whether a bookie can make you lose money however things turn out.
      </p>
      <DutchBookViz />
    </>
  ),

  theory: (
    <>
      <Definition title="betting quotients">
        <p>
          Following Ramsey and de Finetti, link credence to betting: if Cr(A) = p, you regard ₹100p as a fair price for a bet
          that pays ₹100 if A is true and nothing otherwise, and you would buy or sell it at that price. A <strong>Dutch
          book</strong> is a set of bets, each fair by your lights, that together guarantee you a loss.
        </p>
      </Definition>

      <Theorem title="Dutch book theorem">
        <p>
          If your credences violate the probability axioms, there is a Dutch book against you. Conversely, if they obey the
          axioms, no Dutch book exists.
        </p>
      </Theorem>

      <Example title="a book against incoherence">
        <p>
          Say Cr(rain) = 0.6 and Cr(no rain) = 0.6. You will pay ₹60 for each ticket, ₹120 in all. Exactly one ticket pays ₹100,
          so you are sure to lose ₹20. If your credences summed to 0.8 instead, a bookie would buy both tickets from you for ₹80
          and pay out ₹100.
        </p>
      </Example>

      <ArgumentStepViz
        title="The Dutch book argument"
        steps={[
          { claim: "Your credences fix the prices at which you would accept bets.", kind: "premise", note: "The betting interpretation of credence.", objection: "People may refuse to bet, or value money non-linearly." },
          { claim: "If credences break the axioms, some set of such bets loses money however the world turns out.", kind: "premise", note: "The Dutch book theorem, a piece of mathematics." },
          { claim: "Being open to sure loss is a rational defect.", kind: "premise", note: "You would be valuing the same thing two ways.", objection: "You can avoid the loss simply by refusing to bet with clever bookies." },
          { claim: "So incoherent credences are irrational.", kind: "conclusion", note: "The defect is in the credences, which the bets merely reveal." },
        ]}
      />

      <Remark title="objections and depragmatisation">
        <p>
          The argument seems to make a point about epistemic rationality turn on money and bookies. Defenders reply that the
          bets only dramatise an inconsistency: incoherent credences value one and the same bet differently depending on how
          it is described. A different route, the <strong>accuracy argument</strong> of James Joyce, shows that any incoherent
          credences are less accurate than some coherent credences in every possible world, with no betting at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a Dutch book?</p>,
      answer: {
        kind: "choice",
        options: [
          "A book of betting odds",
          "A set of bets, each fair by the agent’s credences, that together guarantee a loss",
          "A bet that pays only in Holland",
          "Any bet the agent loses",
        ],
        correct: [1],
      },
    },
    {
      key: "thm",
      rung: "check",
      prompt: <p>According to the Dutch book theorem, which agents are open to a Dutch book?</p>,
      answer: {
        kind: "choice",
        options: ["All agents", "Exactly those whose credences violate the probability axioms", "Agents with credences above 0.5", "No agents"],
        correct: [1],
      },
    },
    {
      key: "loss",
      rung: "apply",
      prompt: <p>Cr(A) = 0.7 and Cr(not A) = 0.5. With ₹100 tickets, how many rupees are you sure to lose if a bookie sells you both tickets at your prices?</p>,
      answer: { kind: "numeric", value: 20, tolerance: 0.01 },
    },
    {
      key: "under",
      rung: "apply",
      prompt: <p>Cr(A) = 0.3 and Cr(not A) = 0.4. What should the bookie do to make a sure profit?</p>,
      answer: {
        kind: "choice",
        options: [
          "Sell you both tickets",
          "Buy both tickets from you, at ₹70 in all, and collect ₹100",
          "Buy only the A ticket",
          "Nothing: these credences are safe",
        ],
        correct: [1],
      },
    },
    {
      key: "joyce",
      rung: "apply",
      prompt: <p>How does the accuracy argument differ from the Dutch book argument?</p>,
      answer: {
        kind: "choice",
        options: [
          "It appeals to money rather than truth.",
          "It shows incoherent credences are dominated in accuracy, with no appeal to betting.",
          "It rejects probabilism.",
          "It only applies to certainty.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>&ldquo;I will just never bet, so Dutch books cannot touch me.&rdquo; Does this defeat the argument? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the Dutch book argument.",
          "Considers the reply that the bets only reveal an inconsistency in how one values things.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "money",
      rung: "stretch",
      prompt: <p>Someone values ₹100 for sure more than a 50% chance of ₹200. Does this risk aversion undermine the link between credences and betting prices?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that betting prices may reflect attitudes to risk or the value of money, not just credence.",
          "Suggests a response, such as small stakes, utilities instead of money, or the accuracy argument.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how credences are linked to betting prices, what a Dutch book is with a small example, the main objection to the argument, and how the accuracy argument avoids betting altogether.",

  glimpse: (
    <p>
      This completes the course in epistemology. Expected utility theory builds decisions from credences and values, graduate
      epistemology examines Bayesian norms in depth, and philosophy of science uses them to say when evidence confirms a theory.
    </p>
  ),
};
