import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { EuthanasiaGridViz } from "@/components/viz/EuthanasiaGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p25.1.2",
  minutes: 90,
  links: {
    revisits: ["p25.1.1", "p13.5.1", "p8.5.2"],
    foreshadows: ["p25.1.3", "p25.4.2", "p25.2.1"],
  },

  puzzle: (
    <>
      <p>
        A patient with a painful terminal illness asks to die. A doctor may lawfully switch off the ventilator, and the patient
        dies within hours. The same doctor may not give an injection that brings death in minutes, with less suffering. If the
        outcome is the same, and the patient asked for it, why should the method matter?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Euthanasia varies along two axes: whether the patient consents, and whether death comes from an act or an omission.
        Choose a combination to see a case and three verdicts.
      </p>
      <EuthanasiaGridViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the distinctions">
        <p>
          <strong>Voluntary</strong> euthanasia is at the request of a competent patient; <strong>non-voluntary</strong>,
          when the patient cannot express a wish; <strong>involuntary</strong>, against the wishes of a patient who could.{" "}
          <strong>Active</strong> euthanasia is killing, as by lethal injection; <strong>passive</strong> is letting die, by
          withholding or withdrawing treatment. Physician-assisted suicide, in which the patient takes the final step, sits
          between them.
        </p>
      </Definition>

      <Example title="Rachels: Smith and Jones">
        <p>
          James Rachels (1975) imagined two cases. Smith drowns a young cousin in the bath to inherit money. Jones plans the
          same, but finds the child already slipping under, and watches the child drown. Jones is no better than Smith. So killing
          is not in itself worse than letting die. Rachels concluded that if passive euthanasia is permissible, active
          euthanasia, which can spare suffering, is too.
        </p>
      </Example>

      <Definition title="the case for voluntary euthanasia">
        <p>
          Two values support it: <strong>autonomy</strong>, the right to make the central decisions about one&rsquo;s own
          life, including its end; and <strong>beneficence</strong>, preventing pointless suffering. If death is in my interest
          and I choose it, it is hard to see whom the doctor wrongs.
        </p>
      </Definition>

      <Definition title="the case against">
        <p>
          Opponents appeal to the sanctity of life, to the doctor&rsquo;s role as healer, and to the doctrine of double effect,
          which permits giving pain relief that foreseeably shortens life but not intending death. The strongest practical
          argument is the <strong>slippery slope</strong>: once killing is allowed, pressure grows on the old, the disabled and
          the poor to choose death, and safeguards may fail. Defenders reply that evidence from places such as the Netherlands
          and Oregon is disputed, and that well-designed safeguards can work.
        </p>
      </Definition>

      <Remark title="India">
        <p>
          In <em>Aruna Shanbaug v. Union of India</em> (2011), the Supreme Court allowed passive euthanasia under strict
          procedures. In <em>Common Cause v. Union of India</em> (2018), it recognised a right to die with dignity under Article
          21 and gave legal force to advance directives, or living wills. Active euthanasia remains unlawful.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "vol",
      rung: "check",
      prompt: <p>What is non-voluntary euthanasia?</p>,
      answer: { kind: "choice", options: ["Euthanasia of a patient who cannot express a wish", "Euthanasia against a competent patient’s wishes", "Euthanasia at a competent patient’s request", "Refusing treatment for oneself"], correct: [0] },
    },
    {
      key: "rachels",
      rung: "check",
      prompt: <p>What does Rachels&rsquo; Smith and Jones example aim to show?</p>,
      answer: { kind: "choice", options: ["Killing is not in itself morally worse than letting die", "Letting die is always worse", "Killing is always wrong", "Inheritance causes crime"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what does Indian law today say about voluntary active euthanasia?</p>,
      answer: { kind: "choice", options: ["It is unlawful", "It is lawful", "It is lawful with a living will", "It is lawful with court approval"], correct: [0] },
    },
    {
      key: "de",
      rung: "apply",
      prompt: <p>A doctor gives morphine to relieve pain, foreseeing that it will shorten life. Which principle is used to permit this?</p>,
      answer: { kind: "choice", options: ["The doctrine of double effect", "The slippery slope", "Rachels’ equivalence thesis", "The principle of utility"], correct: [0] },
    },
    {
      key: "slope",
      rung: "apply",
      prompt: <p>What does the slippery slope argument claim?</p>,
      answer: { kind: "choice", options: ["Allowing voluntary euthanasia will lead to pressure on vulnerable people and to non-voluntary killing", "Euthanasia is painful", "Patients always change their minds", "Doctors cannot judge pain"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Is there a moral difference between switching off a ventilator and giving a lethal injection, when a dying patient asks? Argue for a view.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the killing and letting die distinction, and Rachels’ challenge to it.",
          "Considers a reason on the other side, such as intention, the doctor’s role or double effect.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Should a living will written years ago bind doctors if the patient, now with dementia, seems content?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies the conflict between the earlier autonomous wish and the present person’s interests.",
          "Considers what makes the earlier and later person the same, or what autonomy requires.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Behind both debates lies a question Epicurus claimed to have dissolved: is death bad for the one who dies? If I do not
        exist once I am dead, whom does my death harm, and when?
      </p>
      <p>Next, the badness of death.</p>
    </>
  ),
};
