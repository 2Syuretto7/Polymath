import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { CommonCauseViz } from "@/components/viz/CommonCauseViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p11.4.1",
  minutes: 80,
  links: {
    revisits: ["p7.5.2", "p7.5.3", "p4.5.4"],
    foreshadows: ["p11.4.2", "p11.4.3", "p27.4.1"],
  },

  puzzle: (
    <>
      <p>
        When one billiard ball strikes another, we say the first causes the second to move. Hume pointed out that we never
        see the causing itself, only one event followed by another, again and again. Is causation then nothing more than
        regular succession?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Look at the regularities over fourteen days, then intervene on the barometer by hand on days without a pressure drop.
        Which regularity survives?
      </p>
      <CommonCauseViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the regularity theory">
        <p>
          Following Hume, c causes e if and only if c precedes e, c and e are contiguous in space and time, and events like c
          are always followed by events like e. There is no necessary connection in the objects, only constant conjunction;
          our sense of necessity is a habit of the mind.
        </p>
      </Definition>

      <Example title="Mackie's INUS conditions">
        <p>
          A short circuit causes a house fire, though it is not sufficient (oxygen and flammable material are needed) nor
          necessary (a dropped lamp could have done it). J. L. Mackie proposed that a cause is an{" "}
          <strong>INUS</strong> condition: an Insufficient but Non-redundant part of an Unnecessary but Sufficient
          condition.
        </p>
      </Example>

      <Remark title="objections">
        <p>
          <strong>Common causes</strong>: a falling barometer is regularly followed by storms, but both are effects of falling
          pressure. <strong>Accidental regularities</strong>: perhaps every gold sphere is under a kilometre wide, but not
          because anything prevents a bigger one. <strong>Singular causation</strong>: it seems a unique event could cause
          another, with no regularity to cover it. Regularity theorists reply by restricting regularities to laws of nature,
          as in the best system account.
        </p>
      </Remark>

      <Remark title="direction">
        <p>
          Hume made causes precede effects by definition. That rules out backwards causation by fiat, and leaves open why the
          asymmetry holds. Later theories try to derive the direction of causation from something deeper, such as the
          asymmetry of counterfactuals or of thermodynamics.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>On Hume&rsquo;s regularity theory, what is causation in the objects?</p>,
      answer: { kind: "choice", options: ["A necessary connection we perceive", "Constant conjunction of events of one type with events of another", "A power in the cause", "God’s will"], correct: [1] },
    },
    {
      key: "inus",
      rung: "check",
      prompt: <p>What does INUS stand for?</p>,
      answer: {
        kind: "choice",
        options: [
          "Insufficient but Non-redundant part of an Unnecessary but Sufficient condition",
          "Independent Natural Uniform Succession",
          "Inferred Necessity of Universal Sequences",
          "Instantaneous Non-temporal Unique Succession",
        ],
        correct: [0],
      },
    },
    {
      key: "common",
      rung: "apply",
      prompt: <p>Falling barometers are always followed by storms. Why is this a problem for the simple regularity theory?</p>,
      answer: {
        kind: "choice",
        options: [
          "Barometers are unreliable.",
          "The theory counts the barometer as a cause, though both events are effects of a common cause.",
          "Storms have no causes.",
          "The regularity is not constant.",
        ],
        correct: [1],
      },
    },
    {
      key: "accid",
      rung: "apply",
      prompt: <p>Which is the best example of an accidental regularity?</p>,
      answer: {
        kind: "choice",
        options: [
          "Every sphere of uranium-235 is under 50 kilograms.",
          "Every gold sphere is under a kilometre wide.",
          "Every electron has negative charge.",
          "Heated metals expand.",
        ],
        correct: [1],
      },
    },
    {
      key: "fire",
      rung: "apply",
      prompt: <p>Why is the short circuit not a necessary condition of the fire?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because the fire could have been started another way",
          "Because oxygen was also needed",
          "Because short circuits never cause fires",
          "Because the fire happened before it",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Can the regularity theory distinguish causes from effects of a common cause? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the regularity theory and the common cause problem.",
          "Considers a reply, such as appeal to laws, INUS structure or further regularities.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "single",
      rung: "stretch",
      prompt: <p>Could a completely unique event, such as the Big Bang, be a cause? What does the regularity theory say?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the theory needs events of a type to recur.",
          "Considers a reply, such as covering by general laws.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Hume's regularity theory of causation, Mackie's INUS conditions with an example, and the objections from common causes, accidental regularities and singular causation.",

  glimpse: (
    <p>
      The next lesson considers Lewis&rsquo;s counterfactual theory, and the one after process theories based on physics.
      Graduate metaphysics returns to the Humean picture of laws in depth.
    </p>
  ),
};
