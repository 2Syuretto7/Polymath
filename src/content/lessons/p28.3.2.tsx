import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { HypoxiaViz } from "@/components/viz/HypoxiaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p28.3.2",
  minutes: 90,
  links: {
    revisits: ["p28.3.1", "p10.6.2", "p28.1.2"],
    foreshadows: ["p28.4.1", "p28.4.2", "p28.2.3"],
  },

  puzzle: (
    <>
      <p>
        You check a long sum carefully and get 4,812. Then a reliable friend tells you that you took a drug this morning
        that makes people botch arithmetic while feeling sure of it. The numbers on the page have not changed. Should your
        confidence in 4,812 drop?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose how likely the pilot is to be impaired, and compare two views of what they should believe.</p>
      <HypoxiaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="higher-order evidence">
        <p>
          <strong>Higher-order evidence</strong> is evidence about one&rsquo;s own evidence or reasoning: that one is tired,
          drugged, biased or outnumbered by peers. It seems to defeat a belief without bearing on its subject. David
          Christensen (2010) argues that such evidence requires us to &lsquo;bracket&rsquo; our own reasoning, even when
          that reasoning was in fact correct.
        </p>
      </Definition>

      <Definition title="epistemic akrasia">
        <p>
          To be <strong>akratic</strong> is to believe P while believing that one&rsquo;s evidence does not support P.
          Sophie Horowitz (2014) argues that this combination is always irrational: the akratic pilot would have to think,
          &lsquo;the fuel will last, though I am probably wrong to think so&rsquo;.
        </p>
      </Definition>

      <Example title="level-splitting">
        <p>
          Maria Lasonen-Aarnio (2014) and Brian Weatherson (2019) defend <strong>level-splitting</strong>: the pilot&rsquo;s
          first-order evidence still supports the conclusion, so belief in it remains rational, and the higher-order
          evidence should affect only their beliefs about their own rationality. Otherwise, they argue, epistemic rules
          would give conflicting verdicts with no principled way to decide.
        </p>
      </Example>

      <Remark title="the fixed point thesis">
        <p>
          Michael Titelbaum (2015) argues that mistakes about what rationality requires are themselves mistakes of
          rationality, so no evidence could make it rational to be wrong about rationality. This puts pressure on
          conciliatory views, since misleading higher-order evidence would then have no rational effect.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "hoe",
      rung: "check",
      prompt: <p>What is higher-order evidence?</p>,
      answer: { kind: "choice", options: ["Evidence about one’s own evidence or reasoning", "Evidence gathered by experts", "Evidence of the highest probability", "Evidence about future events"], correct: [0] },
    },
    {
      key: "akr",
      rung: "check",
      prompt: <p>What is epistemic akrasia?</p>,
      answer: { kind: "choice", options: ["Believing P while believing that one’s evidence does not support P", "Believing P without any evidence", "Refusing to form beliefs", "Believing two contradictory claims"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with calibrationism and a chance of hypoxia of 0.50, what is the pilot&rsquo;s credence?</p>,
      answer: { kind: "numeric", value: 0.745, tolerance: 0.001 },
    },
    {
      key: "cal",
      rung: "apply",
      prompt: <p>Using the same model, what calibrated credence results when the chance of hypoxia is 0.2?</p>,
      answer: { kind: "numeric", value: 0.892, tolerance: 0.001 },
    },
    {
      key: "fixed",
      rung: "apply",
      prompt: <p>What does Titelbaum&rsquo;s fixed point thesis say?</p>,
      answer: { kind: "choice", options: ["Mistakes about what rationality requires are mistakes of rationality", "Every belief has a fixed probability", "Higher-order evidence always defeats", "Rationality has no requirements"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Should the pilot lower their credence on learning they may be hypoxic? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the case and what is puzzling about it.",
          "Considers a view such as calibrationism, the anti-akrasia principle or level-splitting.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is it ever rational to believe &lsquo;P, but my evidence does not support P&rsquo;?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains the akratic combination.",
          "Considers an argument for or against its rationality, such as Horowitz’s or the level-splitters’.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        So far, whether a belief is rational has depended only on evidence. Yet it can seem that a person with more at
        stake needs more evidence to know the same thing.
      </p>
      <p>Next, pragmatic encroachment.</p>
    </>
  ),
};
