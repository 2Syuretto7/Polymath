import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { LookViz } from "@/components/viz/LookViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p19.3.3",
  minutes: 80,
  links: {
    revisits: ["p19.3.2", "p9.1.3", "p1.2.2"],
    foreshadows: ["p19.4.1", "p19.5.1", "p19.4.2"],
  },

  puzzle: (
    <>
      <p>
        How do you know other people have minds? Philosophers have offered arguments from analogy: they behave as I do, so
        probably they feel as I do. But think of the moment you are caught doing something shameful. You do not infer that
        someone is there. You burn. What does shame know that the argument from analogy does not?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move through Sartre&rsquo;s keyhole scene and watch who is a subject and who becomes an object.</p>
      <LookViz />
    </>
  ),

  theory: (
    <>
      <Definition title="being-for-others">
        <p>
          Besides being-in-itself and being-for-itself, <em>Being and Nothingness</em> describes a third dimension:{" "}
          <strong>being-for-others</strong>. I have an outside, a self that exists in the eyes of others, which I cannot see
          or control. It is mine, since I am ashamed of it, yet it belongs to the other who sees me.
        </p>
      </Definition>

      <Example title="the keyhole">
        <p>
          Out of jealousy I am peering through a keyhole. Absorbed, I am not an object to myself; there is only the scene and
          my project. Then I hear footsteps. Suddenly I am an eavesdropper, a thing in the corridor with a nature I did not
          choose. This is <strong>the look</strong>. Shame is the recognition that I am the object the other sees. In the
          look the other is not an inference but an immediate presence: a subject for whom I am an object.
        </p>
      </Example>

      <Definition title="conflict">
        <p>
          The other&rsquo;s freedom is the limit of mine: it fixes me, steals my world, and makes me something. I can respond
          by looking back and making the other an object, or by trying to capture their freedom, as in love, or to become
          the object they want, as in masochism. Each attempt fails, because no one can possess another&rsquo;s freedom as
          freedom. Hence Sartre&rsquo;s claim that conflict is the original meaning of being-for-others, dramatised in his
          play <em>No Exit</em>: hell is other people.
        </p>
      </Definition>

      <Remark title="Hegel’s shadow and the critics">
        <p>
          The analysis transforms Hegel&rsquo;s master and slave, where self-consciousness needs recognition from another and
          the struggle for it is a fight. Critics, Beauvoir and Merleau-Ponty among them, argued that Sartre left too little
          room for reciprocity, cooperation and the shared world that precedes any look. Sartre himself later wrote of
          group solidarity, and his ethics remained unfinished.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "look",
      rung: "check",
      prompt: <p>What happens to me under the look of another, for Sartre?</p>,
      answer: { kind: "choice", options: ["I become an object for them, with an outside I cannot control.", "I become invisible.", "I become more free.", "Nothing changes."], correct: [0] },
    },
    {
      key: "shame",
      rung: "check",
      prompt: <p>What does shame reveal, in Sartre&rsquo;s analysis?</p>,
      answer: { kind: "choice", options: ["That I am the object another subject sees", "That I have done wrong by some rule", "That I am alone", "That others are objects"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what happens when I look back?</p>,
      answer: { kind: "choice", options: ["The other becomes an object in my world, until they look again.", "We both become subjects together.", "I disappear.", "The door opens."], correct: [0] },
    },
    {
      key: "analogy",
      rung: "apply",
      prompt: <p>How does Sartre&rsquo;s view differ from the argument from analogy for other minds?</p>,
      answer: {
        kind: "choice",
        options: ["The other is encountered directly in the experience of being seen, not inferred.", "It proves other minds by logic.", "It denies there are other minds.", "It relies on behaviourism."],
        correct: [0],
      },
    },
    {
      key: "hegel",
      rung: "apply",
      prompt: <p>Which earlier analysis does Sartre&rsquo;s account of the look transform?</p>,
      answer: { kind: "choice", options: ["Hegel’s master and slave", "Descartes’s wax", "Plato’s cave", "Hume’s bundle"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is conflict really the original meaning of our relations with others? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Sartre’s view that each freedom limits and objectifies the other.",
          "Considers an objection, such as reciprocity, care, or a shared world prior to any look.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is being watched by a camera the same as being looked at, in Sartre&rsquo;s sense?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that for Sartre the look is the presence of another subject, not of eyes or devices as such.",
          "Considers whether a camera makes me an object for possible others, and so produces the same shame.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Simone de Beauvoir&rsquo;s <em>The Second Sex</em>: how one half of humanity has been made the Other of the
      other half.
    </p>
  ),
};
