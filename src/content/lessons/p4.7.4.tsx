import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { AgrippaViz } from "@/components/viz/AgrippaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p4.7.4",
  minutes: 80,
  links: {
    revisits: ["p4.7.3", "p4.2.4", "p1.1.1"],
    foreshadows: ["p10.2.1", "p10.4.1", "p20.5.5"],
  },

  puzzle: (
    <>
      <p>
        Every philosophy so far has promised peace of mind through knowledge: know the nature of atoms, or of reason, and
        you will be free from fear. The Pyrrhonian sceptics offered a different route. Ask for the reason behind any claim,
        and then the reason behind that, and you will never reach the end. They said that when they gave up the search for
        a final answer, peace came of its own accord. Could suspending all judgement really make anyone happier? And can a
        person live without believing anything?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Try to justify the claim that this honey is sweet. Each move you make meets a sceptical challenge. Is there any
        route that is not blocked?
      </p>
      <AgrippaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="scepticism as an ability">
        <p>
          The movement takes its name from Pyrrho of Elis, who travelled to India with Alexander and wrote nothing. Our main
          source is Sextus Empiricus, a doctor of the second century CE. In his <em>Outlines of Pyrrhonism</em>, scepticism
          is an ability to set appearances and thoughts against each other in any way at all. Because the opposed accounts
          turn out to be of equal force, <em>isostheneia</em>, the sceptic comes first to suspension of judgement,{" "}
          <em>epochê</em>, and then to tranquillity, <em>ataraxia</em>.
        </p>
      </Definition>

      <Example title="the painter&rsquo;s sponge">
        <p>
          Sextus tells of the painter Apelles, who was trying to paint the foam on a horse&rsquo;s mouth and failing.
          Exasperated, he threw at the picture the sponge he used to wipe his brushes, and the mark it left was the foam.
          The sceptics had hoped to reach tranquillity by deciding between conflicting views; when they could not, and
          suspended judgement, tranquillity followed, as a shadow follows a body.
        </p>
      </Example>

      <Definition title="the modes">
        <p>
          The sceptics collected standard ways, called modes, of producing suspension. Aenesidemus gave ten, drawn from
          differences between animals, between people, between the senses, between circumstances, positions and distances,
          mixtures, quantities, relations, frequencies and customs. A tower looks round from far away and square from close
          by. Agrippa gave five, more abstract: <strong>disagreement</strong>, since every question is disputed;{" "}
          <strong>relativity</strong>, since things appear as they do only relative to the observer and to other things;{" "}
          <strong>infinite regress</strong>; <strong>hypothesis</strong>, an unproved assumption; and{" "}
          <strong>reciprocity</strong>, or circularity.
        </p>
      </Definition>

      <Example title="the trilemma">
        <p>
          The last three of Agrippa&rsquo;s modes form a trap for any attempt to justify a belief. Either each reason needs
          a further reason, without end; or the chain loops back to something already in it; or it stops at something
          simply assumed. None of these seems to give knowledge. This trilemma is the ancestor of the modern regress problem
          in epistemology, and foundationalism and coherentism are two attempts to escape it.
        </p>
      </Example>

      <Remark title="living without belief">
        <p>
          Critics from the Stoics to Hume objected that a sceptic cannot act: someone who believes nothing will walk off a
          cliff. Stories circulated that Pyrrho&rsquo;s friends had to keep him from carts and precipices, though Aenesidemus
          denied them. Sextus&rsquo; answer is that the sceptic assents to appearances, not to theories. They live by four
          kinds of guidance: nature, which gives perception and thought; the pressure of feelings, as hunger leads to food;
          laws and customs; and the teaching of practical skills. They suspend judgement only on claims about how things
          really are. Sextus also distinguished his school from the Academic sceptics, Arcesilaus and Carneades, whom he
          took to assert that nothing can be known. The Pyrrhonist does not assert even that, but keeps inquiring.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "follows",
      rung: "check",
      prompt: <p>According to Sextus, what follows suspension of judgement?</p>,
      answer: { kind: "choice", options: ["despair", "tranquillity", "certain knowledge", "virtue"], correct: [1] },
    },
    {
      key: "notmode",
      rung: "check",
      prompt: <p>Which of these is not one of Agrippa&rsquo;s five modes?</p>,
      answer: {
        kind: "choice",
        options: ["disagreement", "infinite regress", "hypothesis", "reciprocity", "appeal to the gods"],
        correct: [4],
      },
    },
    {
      key: "circle",
      rung: "apply",
      prompt: (
        <p>
          &ldquo;This guidebook is reliable, because the guidebook itself says that every page has been carefully
          checked.&rdquo; Which of Agrippa&rsquo;s modes does this fall into?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["disagreement", "infinite regress", "hypothesis", "reciprocity"],
        correct: [3],
      },
    },
    {
      key: "tower",
      rung: "apply",
      prompt: <p>A tower looks round from far away and square from close by. Which kind of mode of Aenesidemus is this?</p>,
      answer: {
        kind: "choice",
        options: [
          "differences between animals",
          "positions, distances and places",
          "customs and laws",
          "frequency of occurrence",
        ],
        correct: [1],
      },
    },
    {
      key: "hungry",
      rung: "apply",
      prompt: <p>A Pyrrhonian sceptic is hungry and eats lunch. Is this consistent with their scepticism?</p>,
      answer: {
        kind: "choice",
        options: [
          "No: eating shows they believe food is good.",
          "Yes: they follow the pressure of feelings and appearances, without a theory about what is really good.",
          "Only if they first prove that the food exists.",
          "Only on days when they are not doing philosophy.",
        ],
        correct: [1],
      },
    },
    {
      key: "trilemma",
      rung: "prove",
      prompt: (
        <p>
          State Agrippa&rsquo;s trilemma and explain why it seems to show that no belief is justified. Then describe one
          response a philosopher might give, and say whether it succeeds.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the three options: infinite regress, circularity, or an unsupported stopping point.",
          "Explains why each seems unable to give justification.",
          "Describes a response, such as foundationalism with self-evident beliefs, coherentism, or infinitism, and assesses it. Any thoughtful assessment earns full credit.",
        ],
      },
    },
    {
      key: "apraxia",
      rung: "stretch",
      prompt: (
        <p>
          Can someone live a full human life while suspending judgement about how things really are? Consider the objection
          that action requires belief, and Sextus&rsquo; reply that the sceptic follows appearances.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the inaction objection clearly.",
          "Explains Sextus' reply about appearances and the fourfold guidance of life, and considers whether following an appearance is itself a kind of belief.",
          "Reaches a reasoned verdict. Any thoughtful position earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what Pyrrhonian scepticism is, how suspension of judgement is supposed to lead to tranquillity, Agrippa's five modes and the trilemma they create, and how Sextus thinks a sceptic can still act.",

  glimpse: (
    <p>
      The last lesson of the course turns to Plotinus, who built the final great system of ancient philosophy. Epistemology
      takes up the regress problem and Cartesian scepticism, and Indian Philosophy meets Nāgārjuna, whose arguments have
      been compared with the sceptics&rsquo;.
    </p>
  ),
};
