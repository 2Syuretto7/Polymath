import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { LaplaceViz } from "@/components/viz/LaplaceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.3.1",
  minutes: 65,
  links: {
    revisits: ["p0.4.3", "p1.2.1"],
    foreshadows: ["p7.2.5", "p11.4.1", "p11.7.1", "p32.2.1", "m36.5.3"],
  },

  puzzle: (
    <>
      <p>
        This morning you chose what to eat for breakfast. It felt open: you could have chosen otherwise. But your choice came
        from your desires and your mood, which came from your body and your past, which came from your genes and your
        upbringing, which came from events before you were born.
      </p>
      <p>
        If every event is fixed by the events before it, then your breakfast was settled before you were born, before the
        Earth formed. Was it ever really up to you?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        <strong>Determinism</strong> is the thesis that the state of the world at any one time, together with the laws of
        nature, fixes the state of the world at every later time. Nothing about it says the future is <em>known</em>, only
        that it is <em>settled</em>.
      </p>
      <p>
        Below is a tiny deterministic world. Each row is one moment; each cell is fixed by the three cells above it, by a
        single rule. Run it again and the history repeats exactly. Then nudge the present by one cell and watch what happens
        to the future.
      </p>
      <LaplaceViz />
    </>
  ),

  theory: (
    <>
      <Quote source={<>Pierre-Simon Laplace, <cite>A Philosophical Essay on Probabilities</cite> (1814), translated by F. W. Truscott and F. L. Emory</>}>
        <p>
          We ought then to regard the present state of the universe as the effect of its anterior state and as the cause of
          the one which is to follow. Given for one instant an intelligence which could comprehend all the forces by which
          nature is animated and the respective situation of the beings who compose it &hellip; for it, nothing would be
          uncertain and the future, as the past, would be present to its eyes.
        </p>
      </Quote>
      <p>This imagined intelligence is now called <strong>Laplace&rsquo;s demon</strong>.</p>

      <Definition title="three things determinism is not">
        <ul>
          <li>
            <strong>Not fatalism.</strong> Fatalism says some outcome will happen <em>whatever</em> you do: the oracle&rsquo;s
            prophecy comes true however Oedipus tries to escape it. Determinism says the outcome happens <em>because</em> of
            what you do; your choices are links in the chain, not bypassed by it.
          </li>
          <li>
            <strong>Not predictability.</strong> In the visualisation, a one-cell change soon alters much of the world. Real
            systems such as the weather behave like this, so tiny errors in measurement swamp any prediction. A world can be
            fully determined and still unpredictable in practice.
          </li>
          <li>
            <strong>Not a claim about the mind only.</strong> It is a claim about the whole world. If the mind is part of the
            natural world, as the last chapter&rsquo;s physicalists hold, then it is covered too.
          </li>
        </ul>
      </Definition>

      <Remark title="is the world deterministic?">
        <p>
          Newton&rsquo;s mechanics, which Laplace had in mind, is (with some exotic exceptions) deterministic. Quantum
          mechanics, on its standard interpretation, is not: it gives only the probabilities of outcomes. But this may not help
          free will. If your choice is fixed by a chance event in your brain, it is no more up to you than if it was fixed by
          the past. Randomness is not control. This is why many philosophers think free will faces a dilemma: either our
          choices are determined, or they are partly random, and neither seems to make them ours.
        </p>
      </Remark>

      <Example title="an Indian fatalism">
        <p>
          The Ājīvikas, a movement of ancient India contemporary with the Buddha and Mahāvīra, were led by Makkhali Gosāla,
          who taught <em>niyati</em>: that all events, including every human action, are fixed by destiny, and that effort
          makes no difference to one&rsquo;s fate. Buddhist and Jaina texts, our main sources for his views, argued fiercely
          against him, precisely because they held that effort and choice matter for liberation.
        </p>
      </Example>

      <Definition title="the problem stated">
        <p>
          Three claims seem plausible: (1) determinism may well be true; (2) we sometimes act freely; (3) if determinism is
          true, no one ever acts freely. They cannot all be true. <strong>Hard determinists</strong> give up (2).{" "}
          <strong>Libertarians</strong> about free will give up (1), at least for human choices.{" "}
          <strong>Compatibilists</strong> give up (3), and they are the subject of the next lesson.
        </p>
      </Definition>
    </>
  ),

  practice: [
    {
      key: "define",
      rung: "check",
      prompt: <p>Which statement best expresses determinism?</p>,
      answer: {
        kind: "choice",
        options: [
          "Some things will happen whatever we do.",
          "The state of the world at one time, with the laws of nature, fixes every later state.",
          "The future can always be predicted.",
          "Human beings have no minds.",
        ],
        correct: [1],
      },
    },
    {
      key: "fatalism",
      rung: "check",
      prompt: <p>&ldquo;You will die on that day whatever you do, even if you stay at home.&rdquo; This is an expression of&hellip;</p>,
      answer: { kind: "choice", options: ["determinism", "fatalism", "compatibilism", "libertarianism"], correct: [1] },
    },
    {
      key: "predict",
      rung: "apply",
      prompt: <p>What does the visualisation show about determinism and prediction?</p>,
      answer: {
        kind: "choice",
        options: [
          "A deterministic world must be predictable.",
          "A deterministic world can be unpredictable in practice, because tiny differences grow.",
          "Prediction is impossible in principle in any world.",
          "Changing the present does not change the future.",
        ],
        correct: [1],
      },
    },
    {
      key: "triad",
      rung: "apply",
      prompt: <p>A compatibilist rejects which of the three claims?</p>,
      answer: {
        kind: "choice",
        options: [
          "Determinism may well be true.",
          "We sometimes act freely.",
          "If determinism is true, no one ever acts freely.",
          "None of them.",
        ],
        correct: [2],
      },
    },
    {
      key: "quantum",
      rung: "apply",
      prompt: <p>Why might quantum indeterminacy fail to rescue free will?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because quantum mechanics is false.",
          "Because a choice fixed by chance is no more up to you than one fixed by the past.",
          "Because quantum effects only happen in laboratories.",
          "Because indeterminism implies fatalism.",
        ],
        correct: [1],
      },
    },
    {
      key: "argument",
      rung: "prove",
      prompt: (
        <p>
          Write the argument from determinism to the conclusion that no one acts freely in standard form, with numbered
          premises. Then say which premise you find weakest, and why.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Includes a premise stating determinism.",
          "Includes a premise linking determinism to the absence of freedom, such as that a free act must not be fixed in advance.",
          "Draws the conclusion validly.",
          "Identifies a premise to question and gives a reason.",
        ],
      },
    },
    {
      key: "dilemma",
      rung: "stretch",
      prompt: (
        <p>
          &ldquo;Either a choice is determined by prior causes, or it is not; if it is, it is not up to me; if it is not, it is
          random, and so not up to me either.&rdquo; Assess this dilemma. Is there a third option it has missed?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Restates the dilemma clearly.",
          "Examines at least one horn, asking whether 'determined' or 'not determined' really rules out control.",
          "Considers a possible third option, such as agent causation or a compatibilist account of control.",
          "Reaches a reasoned verdict.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the difference between determinism and fatalism, using the example of choosing breakfast.",

  glimpse: (
    <p>
      The next lesson meets the most popular response among philosophers: that free will and determinism are compatible after
      all. The principle that everything has a reason is central to Leibniz in Early Modern Philosophy; the consequence
      argument for incompatibilism is studied in Metaphysics; and chaos, the growth of tiny differences, is made precise in
      Dynamical Systems.
    </p>
  ),
};
