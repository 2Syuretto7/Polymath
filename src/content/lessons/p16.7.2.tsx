import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { GasBridgeViz } from "@/components/viz/GasBridgeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p16.7.2",
  minutes: 80,
  links: {
    revisits: ["p16.7.1", "p16.5.3", "p12.2.3"],
    foreshadows: ["p16.7.3", "p1.2.1", "p27.4.1"],
  },

  puzzle: (
    <>
      <p>
        The thermodynamicist talks of temperature and pressure; the physicist of molecules and their momenta. In the
        nineteenth century the second was shown to explain the first. Does that mean thermodynamics is &ldquo;nothing
        but&rdquo; mechanics? And could biology, psychology or economics one day be reduced to physics in the same way?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the gas and the temperature, and watch which quantity stays the same.</p>
      <GasBridgeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Nagel’s model of reduction">
        <p>
          Ernest Nagel, in <em>The Structure of Science</em> (1961), proposed that a theory T₂ reduces to a theory T₁ when the
          laws of T₂ can be derived from those of T₁. When T₂ uses terms that T₁ lacks, such as &ldquo;temperature&rdquo;,
          the derivation needs <strong>bridge laws</strong> linking them to T₁&rsquo;s terms, such as &ldquo;temperature is
          proportional to mean molecular kinetic energy&rdquo;. Reduction so understood is a special case of DN explanation.
        </p>
      </Definition>

      <Example title="the gas laws">
        <p>
          From Newtonian mechanics applied to many molecules, plus statistical assumptions and the bridge law, one derives the
          ideal gas law <em>PV = nRT</em>. Strictly, what is derived is an approximation, and only for ideal gases, so later
          writers spoke of deriving a corrected version of the reduced theory, which is analogous to the original.
        </p>
      </Example>

      <Definition title="multiple realisability">
        <p>
          Jerry Fodor, in &ldquo;Special Sciences&rdquo; (1974), argued that most higher-level kinds cannot be linked to
          physical kinds by bridge laws. Money can be coins, notes, shells or numbers in a computer; pain may be realised in
          very different nervous systems. A bridge law would have to be an open-ended disjunction of physical states, which is
          not a natural kind and supports no laws. So the special sciences are <strong>autonomous</strong>: their kinds and
          laws are real but not reducible.
        </p>
      </Definition>

      <Remark title="replies and alternatives">
        <p>
          Reductionists reply that reduction can be local, kind by kind, or that it is enough for each higher-level state to be
          realised by some physical state, a view sometimes called token physicalism. Others replace reduction with{" "}
          <strong>supervenience</strong>: no difference at the higher level without a difference at the physical level. Still
          others look for explanation by mechanisms, which links levels without deriving laws.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "nagel",
      rung: "check",
      prompt: <p>On Nagel&rsquo;s model, what is needed when the reduced theory uses terms the reducing theory lacks?</p>,
      answer: { kind: "choice", options: ["Bridge laws", "New experiments", "Paradigm shifts", "Falsification"], correct: [0] },
    },
    {
      key: "mr",
      rung: "check",
      prompt: <p>What is multiple realisability?</p>,
      answer: {
        kind: "choice",
        options: [
          "A higher-level kind can be realised by many physically different states.",
          "A theory can be confirmed in many ways.",
          "Every physical state realises many minds.",
          "A law has many instances.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at a fixed temperature, which quantity is the same for helium and carbon dioxide?</p>,
      answer: { kind: "choice", options: ["The mean kinetic energy per molecule", "The root mean square speed", "The mass of a molecule", "The shape of the speed distribution"], correct: [0] },
    },
    {
      key: "speed",
      rung: "apply",
      prompt: <p>At the same temperature, helium molecules (mass 4) and nitrogen molecules (mass 28) have the same mean kinetic energy. How many times faster is helium&rsquo;s root mean square speed? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 2.65, tolerance: 0.01 },
    },
    {
      key: "fodor",
      rung: "apply",
      prompt: <p>Why does Fodor think economics will not reduce to physics?</p>,
      answer: {
        kind: "choice",
        options: [
          "Economic kinds such as money are realised in physically heterogeneous ways, so no bridge laws connect them to physical kinds.",
          "Economics is not a science.",
          "Physics is incomplete.",
          "Money does not exist.",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does multiple realisability show that the special sciences cannot be reduced to physics? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Nagel’s model with bridge laws and Fodor’s multiple realisability argument.",
          "Considers a reply, such as local reduction, disjunctive kinds or supervenience.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is the reduction of temperature to molecular motion a discovery about what temperature is, or a change in what we mean by &ldquo;temperature&rdquo;?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Distinguishes the identity reading (temperature is mean kinetic energy) from the correlation reading.",
          "Considers cases where the bridge law fails, such as temperatures of radiation or of spins, or the role of definition.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Nagel's model of reduction with bridge laws, the example of thermodynamics and molecular motion, Fodor's multiple realisability argument, and supervenience as an alternative.",

  glimpse: (
    <p>
      Next, a first look at the philosophy of biology: fitness, natural selection and drift, and whether biology has laws of
      its own.
    </p>
  ),
};
