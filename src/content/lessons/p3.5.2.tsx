import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ThresholdViz } from "@/components/viz/ThresholdViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p3.5.2",
  minutes: 65,
  links: {
    revisits: ["p3.3.2", "p3.4.2"],
    foreshadows: ["p10.6.3", "p14.1.4"],
  },

  puzzle: (
    <>
      <p>
        The English judge William Blackstone wrote in the 1760s that it is better that ten guilty persons escape than that
        one innocent suffer. Most people agree with something like this. But why ten? Why not two, or a hundred? And what
        could it mean, in practice, to set the rules of a trial so as to get a ratio like that?
      </p>
      <p>
        Courts must also decide what the law says, when a statute&rsquo;s words did not foresee the case before them. How
        do judges reason about that?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Evidence comes in degrees, and the evidence against innocent and guilty defendants overlaps: some innocent people
        look guilty, and some guilty people leave little trace. Any bar for conviction will sometimes convict the innocent
        and sometimes free the guilty. Raising the bar trades one error for the other. Move it and see.
      </p>
      <ThresholdViz />
    </>
  ),

  theory: (
    <>
      <Definition title="burden and standard of proof">
        <p>
          The <strong>burden of proof</strong> says which side must prove its case; the <strong>standard of proof</strong>{" "}
          says how strongly. In common-law systems, including India&rsquo;s, the prosecution in a criminal trial bears the
          burden, and the defendant is presumed innocent. The standard is proof <strong>beyond reasonable doubt</strong>.
          In civil cases, such as a dispute over a contract, the usual standard is the <strong>balance of
          probabilities</strong>: more likely than not.
        </p>
        <p>
          The difference reflects the costs of error. Wrongly imprisoning someone is thought far worse than wrongly
          freeing them, so the bar is set high; in a civil dispute, the two kinds of error are thought roughly equal, so
          the bar is set at the middle.
        </p>
      </Definition>

      <Remark title="reasoning about the facts">
        <p>
          Establishing what happened uses every tool of this course: testimony and its reliability, inference to the best
          explanation (the prosecution&rsquo;s story against the defence&rsquo;s), and probability. The prosecutor&rsquo;s
          fallacy from the base-rate lesson is a real danger in court, and courts have sometimes been misled by experts who
          multiplied probabilities that were not independent.
        </p>
      </Remark>

      <Definition title="precedent">
        <p>
          Under the doctrine of <strong>precedent</strong>, courts follow earlier decisions on the same point of law. What
          binds is the <strong>ratio decidendi</strong>, the principle needed to reach the earlier decision, not remarks
          made in passing (<strong>obiter dicta</strong>). A later court that does not want to follow a precedent may{" "}
          <strong>distinguish</strong> it, by finding a relevant difference between the cases. This is argument by
          analogy, with the stakes made explicit.
        </p>
      </Definition>

      <Example title="no vehicles in the park">
        <p>
          The legal philosopher H. L. A. Hart, in 1958, imagined a rule forbidding vehicles in a public park. A car is
          clearly a vehicle. But what about bicycles, roller skates or toy cars, Hart asked? Lon Fuller, replying to him,
          imagined an army lorry mounted on a plinth as a war memorial, and others have added an ambulance answering a
          call. A <strong>literal</strong> reading looks only at the words. A{" "}
          <strong>purposive</strong> reading asks what the rule was for, perhaps quiet and safety, and applies it in that
          light. Hart&rsquo;s point was that every general rule has a clear core and a penumbra of uncertain cases, the
          vagueness of the definitions lesson in legal form.
        </p>
      </Example>

      <Remark title="Blackstone's ratio, as a calculation">
        <p>
          The visualisation shows that a ratio like ten to one is a choice of threshold, given how the evidence is
          distributed. It also shows that the ratio depends on how many defendants are in fact guilty, which nobody
          knows exactly. A standard of proof is a moral decision about which errors to risk, made workable by reasoning
          about evidence.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "burden",
      rung: "check",
      prompt: <p>In a criminal trial, who bears the burden of proof?</p>,
      answer: { kind: "choice", options: ["The defendant.", "The prosecution.", "The judge.", "Both equally."], correct: [1] },
    },
    {
      key: "civil",
      rung: "check",
      prompt: <p>What is the usual standard of proof in a civil case?</p>,
      answer: {
        kind: "choice",
        options: ["beyond reasonable doubt", "the balance of probabilities", "absolute certainty", "a confession"],
        correct: [1],
      },
    },
    {
      key: "ratio",
      rung: "apply",
      prompt: (
        <p>
          A judge decides that a shop is liable for a customer&rsquo;s fall on a wet floor because it knew of the spill and
          did nothing. In passing, the judge adds that shops should also check their floors every hour. Which part binds
          later courts as precedent?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Both parts equally.",
          "The principle that a shop that knows of a hazard and does nothing is liable.",
          "The remark about hourly checks.",
          "Neither part.",
        ],
        correct: [1],
      },
    },
    {
      key: "distinguish",
      rung: "apply",
      prompt: (
        <p>
          A later shop is sued after a fall on a spill that happened seconds before, which no one could have noticed. How
          might its lawyer distinguish the earlier case?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "By pointing out that the shop sells different goods.",
          "By arguing that, unlike the earlier shop, this one did not know and could not have known of the spill.",
          "By saying the earlier judge was wrong.",
          "By noting that the floors are a different colour.",
        ],
        correct: [1],
      },
    },
    {
      key: "purpose",
      rung: "apply",
      prompt: (
        <p>
          The rule says &ldquo;no vehicles in the park&rdquo;. An ambulance drives in to reach an injured person. On a
          purposive reading aimed at keeping the park safe and quiet, is this forbidden?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Yes, because an ambulance is a vehicle.",
          "No, because letting the ambulance in serves the rule's purpose of safety rather than defeating it.",
          "Yes, because rules must be read literally.",
          "The question cannot be answered.",
        ],
        correct: [1],
      },
    },
    {
      key: "tradeoff",
      rung: "prove",
      prompt: (
        <p>
          Using the visualisation, explain why no standard of proof can eliminate both wrongful convictions and wrongful
          acquittals, and what happens to each as the bar is raised.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that the evidence against innocent and guilty defendants overlaps, so some innocent defendants look guilty and some guilty ones do not.",
          "States that raising the bar reduces wrongful convictions but increases wrongful acquittals, and lowering it does the reverse.",
          "Concludes that the choice of bar reflects a judgement about which error is worse. Numbers from the visualisation are welcome but not required.",
        ],
      },
    },
    {
      key: "blackstone",
      rung: "stretch",
      prompt: (
        <p>
          Should the standard of proof be the same for every crime, from a parking offence to murder? Use the idea of the
          costs of the two kinds of error to defend an answer.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Identifies the two errors and that their costs may differ between crimes, for example in the severity of punishment.",
          "Considers an argument for varying the standard (for instance, a lower bar where wrongful conviction costs little) and an argument against it (fairness, simplicity, the stigma of any conviction).",
          "Takes and defends a view. Any thoughtful position is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the burden and standard of proof, why any bar for conviction trades one kind of error for another, and how judges reason from precedent and from the purpose of a rule.",

  glimpse: (
    <p>
      Epistemology asks whose testimony courts and others tend to believe, and the injustice done when someone is given
      less credibility because of who they are. Political Philosophy asks why we should obey the law at all, and what
      legitimate authority is.
    </p>
  ),
};
