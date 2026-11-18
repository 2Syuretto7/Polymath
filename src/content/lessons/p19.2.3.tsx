import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["fear", "anxiety"];
const ITEMS: SortItem[] = [
  { text: "My heart races as the dog bares its teeth.", cat: "fear", why: "A definite threat from a definite thing in the world." },
  { text: "Nothing in particular is wrong, yet everything feels strange, as if I were not at home.", cat: "anxiety", why: "No object threatens; the world as a whole slips away. Heidegger calls this uncanniness." },
  { text: "Dreading the exam on Monday.", cat: "fear", why: "A specific event approaching from within the world." },
  { text: "At a cliff edge, aware that nothing stops me from jumping.", cat: "anxiety", why: "What troubles me is my own freedom, not the drop. Kierkegaard called this the dizziness of freedom." },
  { text: "Worrying that the bank will refuse the loan.", cat: "fear", why: "A determinate possible harm from a determinate source." },
  { text: "What ‘one does’ suddenly offers no guidance at all.", cat: "anxiety", why: "The everyday interpretations of the they lose their grip, which is what anxiety discloses." },
  { text: "Nervous about walking past the station alone at night.", cat: "fear", why: "A threat located in a region of the world." },
  { text: "Facing the fact that I will die, and no one can do it for me.", cat: "anxiety", why: "Anxiety in the face of death is anxiety about one’s own being as such, not about any event." },
];

export const lesson: LessonContent = {
  id: "p19.2.3",
  minutes: 80,
  links: {
    revisits: ["p19.2.2", "p9.4.1", "p1.6.4"],
    foreshadows: ["p19.2.4", "p19.3.2", "p19.6.1"],
  },

  puzzle: (
    <>
      <p>
        Most of what you do each day you do because it is what one does: one eats at this hour, dresses this way, wants these
        things, worries about these matters. Who chose any of it? And if no one did, in what sense is your life your own?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Sort each experience: is it fear of something, or anxiety in Heidegger&rsquo;s sense?</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Fear or anxiety?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the they">
        <p>
          In everyday life Dasein is not primarily itself but <strong>das Man</strong>, &ldquo;the they&rdquo; or
          &ldquo;the one&rdquo;: we enjoy ourselves as one enjoys oneself, judge as one judges, are shocked by what one finds
          shocking. The they is no one in particular, and it relieves each of us of the burden of choosing. Heidegger calls
          this absorption <strong>falling</strong>, marked by idle talk, curiosity and ambiguity. It is not a moral failing but
          the default way of being.
        </p>
      </Definition>

      <Definition title="fear and anxiety">
        <p>
          <strong>Fear</strong> is fear of something definite within the world. <strong>Anxiety</strong> (Angst) has no such
          object: what one is anxious about is being-in-the-world itself. In anxiety the familiar world sinks into
          insignificance and Dasein feels not at home, <strong>uncanny</strong>. That is why anxiety is revealing: it tears
          Dasein away from the they and confronts it with itself, as a being that must choose.
        </p>
      </Definition>

      <Example title="being-towards-death">
        <p>
          Death, for Heidegger, is not an event at the end of life but a possibility that shapes the whole of it. It is
          Dasein&rsquo;s <strong>ownmost</strong> possibility, since no one can die my death for me;{" "}
          <strong>non-relational</strong>; <strong>certain</strong> yet <strong>indefinite</strong> as to when; and{" "}
          <strong>not to be outstripped</strong>. The they tranquillises: &ldquo;one dies&rdquo;, but not yet, and not me.
          Running ahead towards death, without morbid brooding, individualises me and shows my life as a whole that is mine to
          shape.
        </p>
      </Example>

      <Remark title="authenticity">
        <p>
          <strong>Authenticity</strong> (Eigentlichkeit, from eigen, own) is owning one&rsquo;s existence: hearing the call of
          conscience, which says nothing but calls Dasein back to itself, and choosing in <strong>resoluteness</strong>. It does
          not mean escaping the they, which is impossible, or adopting an unusual lifestyle, but taking over one&rsquo;s
          possibilities as one&rsquo;s own. Critics, from Adorno onwards, found the idea empty, a &ldquo;jargon of
          authenticity&rdquo; that tells us to choose but never what.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "they",
      rung: "check",
      prompt: <p>What is &ldquo;the they&rdquo; (das Man)?</p>,
      answer: {
        kind: "choice",
        options: [
          "The anonymous everyone whose ways of doing and judging we take over by default",
          "A particular social class",
          "Other people considered as enemies",
          "The government",
        ],
        correct: [0],
      },
    },
    {
      key: "object",
      rung: "check",
      prompt: <p>How does anxiety differ from fear, for Heidegger?</p>,
      answer: {
        kind: "choice",
        options: [
          "Fear has a definite object in the world; anxiety is about being-in-the-world as such.",
          "Anxiety is stronger fear.",
          "Fear is rational and anxiety is not.",
          "There is no difference.",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, why is the cliff edge a case of anxiety rather than fear?</p>,
      answer: {
        kind: "choice",
        options: [
          "What troubles me is my own freedom to jump, not a threat from the drop.",
          "Because cliffs are not dangerous.",
          "Because I am alone.",
          "Because it is about the future.",
        ],
        correct: [0],
      },
    },
    {
      key: "death",
      rung: "apply",
      prompt: <p>Which of these is not one of Heidegger&rsquo;s marks of death as a possibility?</p>,
      answer: { kind: "choice", options: ["Shared with others", "Ownmost", "Certain yet indefinite", "Not to be outstripped"], correct: [0] },
    },
    {
      key: "auth",
      rung: "apply",
      prompt: <p>Which best describes authenticity in Heidegger&rsquo;s sense?</p>,
      answer: {
        kind: "choice",
        options: [
          "Taking over one’s possibilities as one’s own, rather than by default",
          "Rejecting all social norms",
          "Being sincere in what one says",
          "Living an unusual life",
        ],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is Heidegger&rsquo;s authenticity an empty ideal, as Adorno charged? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States what authenticity asks: owning one’s choices rather than taking them over from the they.",
          "Considers the charge that it gives no guidance about what to choose, or a reply to it.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can awareness of your own death make your life more fully yours? Draw on an example.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains Heidegger’s idea that death individualises, because no one can die for me.",
          "Gives an example and considers whether the effect is clarifying or merely distressing.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <p>
      Next, Heidegger&rsquo;s deepest claim in Being and Time: that care, the being of Dasein, is grounded in temporality.
    </p>
  ),
};
