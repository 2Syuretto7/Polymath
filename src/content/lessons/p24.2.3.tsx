import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { ArtTheoryViz } from "@/components/viz/ArtTheoryViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p24.2.3",
  minutes: 90,
  links: {
    revisits: ["p24.2.2", "p24.1.2", "p5.1.1"],
    foreshadows: ["p24.3.1", "p24.4.1", "p24.4.2"],
  },

  puzzle: (
    <>
      <p>
        In 1964 Andy Warhol exhibited wooden boxes painted to look exactly like the cartons of Brillo soap pads in a
        supermarket. The cartons were not art; Warhol&rsquo;s boxes were. Nothing you could see tells them apart. So whatever
        makes something art cannot be something you see.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Test three theories against seven cases. Select a cell to read the verdict and its reason. Notice where each theory
        says yes, and where it struggles.
      </p>
      <ArtTheoryViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the artworld">
        <p>
          Arthur Danto, in &lsquo;The Artworld&rsquo; (1964), argued that to see something as art requires &lsquo;something the
          eye cannot descry: an atmosphere of artistic theory, a knowledge of the history of art&rsquo;. Brillo Box is art
          because, in a context of theory, it is about something: it makes a statement about art and commerce. Later Danto said
          artworks are embodied meanings.
        </p>
      </Definition>

      <Definition title="the institutional theory">
        <p>
          George Dickie gave the idea an institutional form. In his first version (1974), a work of art is (1) an artefact
          (2) on which some person or persons acting on behalf of the artworld have conferred the status of candidate for
          appreciation. The <strong>artworld</strong> is the loose social practice of artists, curators, critics, publics and
          the like. In his later version (1984), an artwork is an artefact of a kind created to be presented to an artworld
          public.
        </p>
      </Definition>

      <Example title="what it explains">
        <p>
          It explains Duchamp&rsquo;s Fountain and Dickie&rsquo;s driftwood placed in a gallery: these become art by being
          presented, not by how they look. It explains why the hardware-shop urinal is not art. And it leaves evaluation open: a
          bad painting is still art, and the theory is classificatory, not a theory of what makes art good.
        </p>
      </Example>

      <Definition title="the objections">
        <p>
          Circularity: the artworld is defined by art, and art by the artworld. Dickie accepts this, but calls it informative.
          Outsiders: a person alone on an island, or the painters at Chauvet thirty thousand years ago, seem able to make art
          with no institution in sight. And Richard Wollheim asked whether the artworld confers status for reasons. If so, the
          reasons are what make something art; if not, the status is arbitrary.
        </p>
      </Definition>

      <Remark title="other answers">
        <p>
          Jerrold Levinson&rsquo;s historical definition says something is art if it is intended to be regarded in a way that
          earlier art was correctly regarded. Berys Gaut&rsquo;s cluster account lists criteria such as expressing emotion,
          being skilful and being formally complex, none necessary but enough of them sufficient. Morris Weitz had argued that
          art is an open concept, unified only by family resemblance, and cannot be defined at all.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dickie",
      rung: "check",
      prompt: <p>On Dickie&rsquo;s first version, what makes an artefact a work of art?</p>,
      answer: { kind: "choice", options: ["Someone acting on behalf of the artworld conferring on it the status of candidate for appreciation", "Its beauty", "Its resemblance to reality", "The sincerity of its maker’s feelings"], correct: [0] },
    },
    {
      key: "danto",
      rung: "check",
      prompt: <p>Why do Warhol&rsquo;s Brillo boxes matter to Danto?</p>,
      answer: { kind: "choice", options: ["They look identical to non-art, so what makes them art must be invisible", "They are beautiful", "They express Warhol’s sadness", "They were very expensive"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for how many of the seven cases does the institutional theory say &lsquo;yes&rsquo;?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "circ",
      rung: "apply",
      prompt: <p>What is the circularity objection?</p>,
      answer: { kind: "choice", options: ["The artworld is defined in terms of art, and art in terms of the artworld", "Art is defined by beauty, and beauty by art", "The theory says everything is art", "The theory ignores emotion"], correct: [0] },
    },
    {
      key: "cave",
      rung: "apply",
      prompt: <p>Which case is hardest for the institutional theory?</p>,
      answer: { kind: "choice", options: ["Cave paintings made long before any artworld existed", "Fountain", "Driftwood shown in a gallery", "Brillo Box"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Does the artworld make things art, or does it recognise things that are art already? Argue for a view, using Wollheim&rsquo;s dilemma.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the dilemma: status conferred for reasons, or arbitrarily.",
          "Considers what follows on each side, for example that the reasons do the defining work.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is a kōlam drawn each morning at a doorway art, on the institutional theory? On your own view?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Applies the institutional theory, asking whether there is an artworld or practice that presents it.",
          "Considers another account, such as expression or a cluster view.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        If artworks are embodied meanings, we must ask how their meaning is fixed. Is a poem&rsquo;s meaning whatever the poet
        intended, or what the words say to a competent reader, or what the best reading makes of it?
      </p>
      <p>Next, the artist&rsquo;s intention and the intentional fallacy.</p>
    </>
  ),
};
