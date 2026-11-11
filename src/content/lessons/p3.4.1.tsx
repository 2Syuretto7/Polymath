import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ProbTreeViz } from "@/components/viz/ProbTreeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p3.4.1",
  minutes: 65,
  links: {
    revisits: ["p3.2.3", "p3.3.1"],
    parallels: ["m9.1.1", "m9.1.3"],
    foreshadows: ["p10.7.1", "p10.7.3"],
  },

  puzzle: (
    <>
      <p>
        Linda is 31, single, outspoken and very bright. She studied philosophy, and as a student she was deeply concerned
        with discrimination and social justice, and took part in protests. Which is more probable?
      </p>
      <ol>
        <li>Linda is a bank teller.</li>
        <li>Linda is a bank teller and is active in the feminist movement.</li>
      </ol>
      <p>
        When the psychologists Amos Tversky and Daniel Kahneman asked questions like this, most people chose the second.
        It feels like a better fit. But it cannot be more probable than the first. Why not?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Every bank teller who is a feminist is a bank teller, so the second option is a part of the first, and a part
        cannot be more likely than the whole. A handful of rules like this one govern all reasoning with chances, and
        a probability tree shows most of them at once: multiply along a path, add across paths. Move the sliders.
      </p>
      <ProbTreeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="probability">
        <p>
          A <strong>probability</strong> is a number from 0 (impossible) to 1 (certain). It can be read as a long-run
          frequency (a fair coin lands heads about half the time) or as a degree of belief (how confident you should be
          that it will rain tomorrow). The rules are the same either way.
        </p>
      </Definition>

      <Definition title="the basic rules">
        <ul>
          <li><strong>Complement</strong>: <span className="mono">P(not A) = 1 − P(A)</span>.</li>
          <li>
            <strong>Or</strong>: <span className="mono">P(A or B) = P(A) + P(B) − P(A and B)</span>. If A and B cannot both
            happen, the last term is 0.
          </li>
          <li>
            <strong>And</strong>: <span className="mono">P(A and B) = P(A) × P(B | A)</span>, where{" "}
            <span className="mono">P(B | A)</span>, read &ldquo;the probability of B given A&rdquo;, is the probability of B
            once we know A has happened.
          </li>
          <li>
            <strong>Total probability</strong>:{" "}
            <span className="mono">P(B) = P(A) × P(B | A) + P(not A) × P(B | not A)</span>, adding the two paths of the tree
            that end in B.
          </li>
        </ul>
      </Definition>

      <Definition title="independence">
        <p>
          A and B are <strong>independent</strong> if learning one does not change the probability of the other:{" "}
          <span className="mono">P(B | A) = P(B)</span>. Then <span className="mono">P(A and B) = P(A) × P(B)</span>. Two
          tosses of a fair coin are independent; rain and a late bus usually are not.
        </p>
      </Definition>

      <Example title="the slippery slope, measured">
        <p>
          The lesson on fallacies of presumption multiplied the chances of the links in a slippery slope. That was the and
          rule applied again and again: the chance that every link holds is the chance of the first, times the chance of
          the second given the first, and so on. Each factor is at most 1, so the product can only shrink.
        </p>
      </Example>

      <Definition title="the conjunction fallacy">
        <p>
          Since <span className="mono">P(B | A) ≤ 1</span>, the and rule gives{" "}
          <span className="mono">P(A and B) ≤ P(A)</span>. Judging a conjunction more probable than one of its parts is the{" "}
          <strong>conjunction fallacy</strong>. It happens because a detailed story that fits our picture of someone feels
          more plausible, though every added detail is one more thing that has to be true.
        </p>
      </Definition>

      <Remark title="the gambler's fallacy">
        <p>
          A roulette wheel has come up red five times running. Is black now &ldquo;due&rdquo;? If the spins are
          independent, no: the wheel has no memory, and the chance of black is what it always was. The opposite mistake
          is also possible. If you do not know whether the wheel is fair, a long run of red is evidence that it favours
          red. Which conclusion is right depends on what you know about the wheel, and the lesson on Bayesian updating
          shows how to weigh it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "complement",
      rung: "check",
      prompt: <p>If the probability of rain tomorrow is 0.3, what is the probability of no rain?</p>,
      answer: { kind: "numeric", value: 0.7 },
    },
    {
      key: "coins",
      rung: "check",
      prompt: <p>Two fair coins are tossed. What is the probability that both land heads?</p>,
      answer: { kind: "numeric", value: 0.25 },
    },
    {
      key: "six",
      rung: "apply",
      prompt: (
        <p>
          A fair die is rolled twice. What is the probability of at least one six? (Hint: use the complement. Give a
          decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 11 / 36, tolerance: 0.001 },
    },
    {
      key: "linda",
      rung: "apply",
      prompt: (
        <p>
          Raj is a quiet, careful person who loves numbers. Which of these is the most probable?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Raj is an accountant who plays chess.",
          "Raj is an accountant.",
          "Raj is an accountant who plays chess and collects stamps.",
          "They are all equally probable.",
        ],
        correct: [1],
      },
    },
    {
      key: "total",
      rung: "apply",
      prompt: (
        <p>
          The chance of rain is 0.3. If it rains, the bus is late with probability 0.6; if not, with probability 0.2. What
          is the probability that the bus is late?
        </p>
      ),
      answer: { kind: "numeric", value: 0.32, tolerance: 0.001 },
    },
    {
      key: "conj",
      rung: "prove",
      prompt: (
        <p>
          Using the and rule, show that <span className="mono">P(A and B)</span> can never exceed{" "}
          <span className="mono">P(A)</span>, and use this to explain what goes wrong in the Linda problem.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes P(A and B) = P(A) × P(B | A) and notes that P(B | A) is at most 1.",
          "Concludes that P(A and B) ≤ P(A).",
          "Applies it to Linda: 'bank teller and feminist' cannot be more probable than 'bank teller', and suggests why people judge otherwise, such as the description fitting a stereotype.",
        ],
      },
    },
    {
      key: "gambler",
      rung: "stretch",
      prompt: (
        <p>
          A coin lands heads ten times in a row. One person says tails is now due. Another says the coin is probably biased
          towards heads. A third says the next toss is still 50:50. Under what assumptions is each of them right, if any?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that 'tails is due' is the gambler's fallacy if tosses are independent: the coin has no memory.",
          "Explains that if the coin is known to be fair, the next toss is 50:50; if its fairness is uncertain, ten heads is evidence of bias towards heads.",
          "Notes that the right answer depends on background knowledge about the coin. A clear informal discussion is enough.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the rules for 'and', 'or' and 'not' with probabilities, what independence means, and why a more detailed story can never be more probable than a part of it.",

  glimpse: (
    <p>
      Probability sets these rules on axioms and proves everything else from them. Epistemology asks whether degrees of
      belief should obey the rules at all, and answers with the Dutch book argument: someone whose degrees of belief break
      them can be offered a set of bets, each fair by their own lights, that together guarantee a loss.
    </p>
  ),
};
