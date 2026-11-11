import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { VeilViz } from "@/components/viz/VeilViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p5.3.4",
  minutes: 85,
  links: {
    revisits: ["p5.3.3", "p5.1.4", "p1.6.1"],
    foreshadows: ["p14.1.1", "p14.2.1", "p13.1.3"],
  },

  puzzle: (
    <>
      <p>
        Suppose there were no laws, no police and no shared morality. Thomas Hobbes, writing during the English Civil War,
        thought that life would then be a war of every one against every one, with no industry, no arts, no society, and
        life solitary, poor, nasty, brutish and short. If that is what the absence of morality looks like, perhaps morality
        is simply the agreement that rescues us from it. But nobody ever signed such an agreement. Can an imaginary contract
        bind anyone?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a society for yourself without knowing where in it you will end up. Compare the two ways of deciding, then
        lift the veil to see where you landed.
      </p>
      <VeilViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Hobbes and the state of nature">
        <p>
          In <em>Leviathan</em> (1651), Hobbes argued that in a state of nature, people who are roughly equal in strength,
          competing for scarce goods and fearing one another, would each be rational to strike first. The result is worse
          for everyone than mutual restraint, but no one can afford to restrain themselves alone, as in the
          prisoner&rsquo;s dilemma. The way out is a contract: each gives up the liberty to harm others, on condition that
          others do the same, and a sovereign with power to enforce the agreement makes it safe to keep.
        </p>
      </Definition>

      <Example title="morality as a contract">
        <p>
          James Rachels states the general theory: morality consists in the set of rules, governing how people are to treat
          one another, that rational people will agree to accept for their mutual benefit, on the condition that others
          follow them as well. This explains why morality binds us, since it serves our interests; why it has the content it
          does, rules against killing, stealing and lying; and when it is permissible to break the rules, namely when others
          are not keeping them.
        </p>
      </Example>

      <Definition title="Rawls and the veil of ignorance">
        <p>
          John Rawls, in <em>A Theory of Justice</em> (1971), used a different contract, imagined in an original position
          behind a veil of ignorance. The parties do not know their class, sex, talents, or even their idea of a good life,
          so they cannot bend the principles in their own favour. Rawls argued that they would choose equal basic liberties
          and the difference principle: inequalities are allowed only if they benefit the worst off. John Harsanyi argued
          instead that rational parties would maximise average wellbeing, which leads to utilitarianism.
        </p>
      </Definition>

      <Remark title="objections">
        <p>
          No one ever agreed to the contract, and Hume asked whether a peasant who cannot afford to leave their country can
          be said to consent to its rules. Contract theorists reply that the contract is hypothetical: it describes rules
          that it would be rational to agree to. A harder problem concerns those who cannot bargain: animals, infants, and
          future generations. A Hobbesian contract seems to give them no protection, since they have nothing to offer in
          exchange. T. M. Scanlon&rsquo;s contractualism answers by asking instead which principles no one could reasonably
          reject, a test that can include the interests of those who cannot speak for themselves.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hobbes",
      rung: "check",
      prompt: <p>According to Hobbes, what would life be like without a common power to keep everyone in check?</p>,
      answer: {
        kind: "choice",
        options: [
          "Peaceful and cooperative.",
          "A war of every one against every one.",
          "Governed by natural sympathy.",
          "Much the same as now.",
        ],
        correct: [1],
      },
    },
    {
      key: "veil",
      rung: "check",
      prompt: <p>Which of these is hidden from the parties behind Rawls&rsquo;s veil of ignorance? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["their social class", "their talents", "their conception of a good life", "general facts about human society"],
        correct: [0, 1, 2],
      },
    },
    {
      key: "maximin",
      rung: "apply",
      prompt: <p>In the visualisation, which society does the rule of maximising the worst position choose?</p>,
      answer: { kind: "choice", options: ["strict equality", "steep ladder", "lifted floor", "aristocracy"], correct: [2] },
    },
    {
      key: "average",
      rung: "apply",
      prompt: <p>In the visualisation, what is the average wellbeing in the steep ladder society?</p>,
      answer: { kind: "numeric", value: 7.5 },
    },
    {
      key: "left",
      rung: "apply",
      prompt: <p>Which objection says that a Hobbesian contract leaves some beings unprotected?</p>,
      answer: {
        kind: "choice",
        options: [
          "Animals, infants and future generations cannot bargain, so the contract seems to give them nothing.",
          "The contract is too demanding.",
          "The contract depends on God's commands.",
          "The contract makes morality relative.",
        ],
        correct: [0],
      },
    },
    {
      key: "argument",
      rung: "prove",
      prompt: (
        <p>
          Reconstruct Hobbes&rsquo;s argument from the state of nature to the need for a social contract and a sovereign.
          Identify the premise you find most open to doubt.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States premises about rough equality, scarcity, and mutual fear or distrust.",
          "Explains why each person's rational choice leads to conflict, and why an enforced contract is needed to make restraint safe.",
          "Identifies and discusses a doubtful premise, such as Hobbes's view of human nature. Any reasoned discussion earns full credit.",
        ],
      },
    },
    {
      key: "rawls",
      rung: "stretch",
      prompt: (
        <p>
          Would you choose by maximising the worst position, as Rawls argued, or by maximising the average, as Harsanyi
          argued? Consider attitudes to risk, the stakes involved, and whether ignorance of probabilities matters.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains both decision rules and what they recommend in the visualisation.",
          "Weighs considerations such as the very high stakes, the lack of known probabilities behind a thick veil, and the cost of maximin in passing up large gains.",
          "Reaches a reasoned choice. Any thoughtful position earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Hobbes's state of nature and why it calls for a contract, the general contract theory of morality, Rawls's veil of ignorance and the choice between maximin and average, and the objections from consent and from those who cannot bargain.",

  glimpse: (
    <p>
      The next chapter turns to virtue ethics and other alternatives. Political Philosophy begins with Hobbes and returns
      to Rawls&rsquo;s original position, and Moral Philosophy studies Scanlon&rsquo;s contractualism.
    </p>
  ),
};
