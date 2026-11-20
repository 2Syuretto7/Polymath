import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CHSHViz } from "@/components/viz/CHSHViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p32.2.2",
  minutes: 90,
  links: {
    revisits: ["p32.2.1", "p32.1.2", "p16.5.2"],
    foreshadows: ["p32.2.3", "p32.2.4", "p32.2.5"],
  },

  puzzle: (
    <>
      <p>
        Two particles fly apart to distant laboratories. Whenever both are measured along the same direction, the results
        are perfectly anticorrelated. The obvious explanation is that each particle carries instructions from the start, like
        a pair of gloves split between two boxes. In 1964 John Bell proved that no such explanation can match quantum
        mechanics. What exactly did he rule out?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Set the four measurement angles, and compare the CHSH value with the bound every local theory obeys.</p>
      <CHSHViz />
    </>
  ),

  theory: (
    <>
      <Definition title="EPR and local hidden variables">
        <p>
          Einstein, Podolsky and Rosen argued in 1935 that since one particle&rsquo;s result can be predicted with certainty
          by measuring its distant twin, and nothing travels between them, the result must have been fixed all along: quantum
          mechanics is incomplete. A <strong>local hidden variable theory</strong> supplies such predetermining variables λ,
          with each outcome depending only on λ and the local setting.
        </p>
      </Definition>

      <Example title="the CHSH inequality">
        <p>
          Let E(a, b) be the average product of the ±1 outcomes for settings a and b. Clauser, Horne, Shimony and Holt
          showed in 1969 that any local hidden variable theory, with settings chosen independently of λ, satisfies{" "}
          |E(a, b) + E(a, b′) + E(a′, b) − E(a′, b′)| ≤ 2. For the singlet state quantum mechanics predicts{" "}
          E(a, b) = −cos(a − b), and suitable angles give 2√2.
        </p>
      </Example>

      <Definition title="experiments">
        <p>
          Alain Aspect&rsquo;s experiments of 1982 switched the settings while the particles were in flight. In 2015 three
          groups, in Delft, Vienna and Boulder, closed the main loopholes at once. All found violations in agreement with
          quantum mechanics. Aspect, John Clauser and Anton Zeilinger shared the 2022 Nobel Prize in physics.
        </p>
      </Definition>

      <Remark title="what gives">
        <p>
          The derivation assumes that outcomes are single and definite, that settings are independent of the hidden
          variables, and Bell&rsquo;s condition of local causality. Most conclude, with Bell and Tim Maudlin, that nature is
          nonlocal, though in a way that cannot be used to send signals. Superdeterminists deny setting independence;
          Everettians deny single outcomes. Whether nonlocality can coexist peacefully with relativity is still debated.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "lhv",
      rung: "check",
      prompt: <p>What is a local hidden variable theory?</p>,
      answer: { kind: "choice", options: ["One where outcomes are fixed by shared variables and the local setting alone", "One with no variables at all", "One where particles signal faster than light", "Standard quantum mechanics"], correct: [0] },
    },
    {
      key: "bound",
      rung: "check",
      prompt: <p>What bound does every local hidden variable theory obey in the CHSH inequality?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the best angles, what is S?</p>,
      answer: { kind: "numeric", value: 2.83, tolerance: 0.02 },
    },
    {
      key: "sig",
      rung: "apply",
      prompt: <p>Can the nonlocal correlations in Bell experiments be used to send a message faster than light?</p>,
      answer: { kind: "choice", options: ["No: each side’s results alone look random whatever the other side does", "Yes, instantly", "Only with entangled photons", "Only in three dimensions"], correct: [0] },
    },
    {
      key: "assume",
      rung: "apply",
      prompt: <p>Which assumption do superdeterminists deny?</p>,
      answer: { kind: "choice", options: ["That the measurement settings are independent of the hidden variables", "That outcomes are definite", "That quantum mechanics is accurate", "That the particles exist"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Do Bell experiments show that nature is nonlocal? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what Bell’s theorem assumes and what the experiments show.",
          "Considers a way out, such as superdeterminism or Everett’s denial of single outcomes.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can quantum nonlocality coexist peacefully with special relativity?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes no-signalling from the absence of all nonlocal influence.",
          "Considers what relativity forbids: signals, causes or a preferred frame.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        One way out of both the measurement problem and Bell&rsquo;s theorem is radical: keep the Schrödinger equation
        exactly, and accept that every outcome happens.
      </p>
      <p>Next, Everett&rsquo;s many worlds.</p>
    </>
  ),
};
