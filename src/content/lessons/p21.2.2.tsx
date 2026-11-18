import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["it is this, and so", "it is this, but not so"];
const ITEMS: SortItem[] = [
  { text: "A white horse is a horse. Riding a white horse is riding a horse.", cat: "it is this, and so", why: "Adding ‘riding’ to both sides preserves the claim: the parallel inference holds." },
  { text: "Huo is a person. Loving Huo is loving a person.", cat: "it is this, and so", why: "The same pattern holds when the added verb fits both terms in the same way." },
  { text: "Her brother is a handsome man. Loving her brother is not loving a handsome man.", cat: "it is this, but not so", why: "Loving one’s brother is family love; ‘loving a handsome man’ suggests something else. The added word changes its sense." },
  { text: "A cart is wood. Riding a cart is not riding wood.", cat: "it is this, but not so", why: "‘Riding’ applies to carts as vehicles, not to the material they are made of." },
  { text: "A boat is wood. Entering a boat is not entering wood.", cat: "it is this, but not so", why: "Like the cart: the verb attaches to the boat as a boat." },
  { text: "Robbers are people. Killing robbers is not killing people.", cat: "it is this, but not so", why: "The Mohists’ own case: punishing robbers is not murder, so impartial care for people is consistent with it." },
];

export const lesson: LessonContent = {
  id: "p21.2.2",
  minutes: 80,
  links: {
    revisits: ["p21.2.1", "p21.1.3", "p0.4.2"],
    foreshadows: ["p21.5.1", "p21.3.2", "p21.4.1"],
  },

  puzzle: (
    <>
      <p>
        &ldquo;A white horse is a horse, so riding a white horse is riding a horse.&rdquo; Fine. &ldquo;Robbers are people,
        so killing robbers is killing people.&rdquo; If that holds, then executing a robber is murder. Both inferences have
        the same shape. Does one fail, and if so, why, when it looks exactly like the other?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Decide which parallel inferences from the Mohist canons hold.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Does adding the same words preserve the claim?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the Later Mohist canons">
        <p>
          Around 300 BCE, Mohist thinkers composed the <strong>Canons</strong> and their explanations, and a dialogue, the{" "}
          <em>Lesser Selection</em> (Xiaoqu), on argument. Their aim was <strong>bian</strong>, disputation: distinguishing
          what is &lsquo;this&rsquo; (shi) from what is &lsquo;not this&rsquo; (fei), to settle which of two opposed claims
          fits the facts.
        </p>
      </Definition>

      <Example title="names and kinds">
        <p>
          The Canons sort names (ming) into three kinds: <strong>unrestricted</strong>, like &lsquo;thing&rsquo;, which
          applies to everything; <strong>classifying</strong>, like &lsquo;horse&rsquo;, which applies to all things of a
          kind; and <strong>private</strong>, like a personal name, which applies to one thing. Names apply to objects (shi)
          by their kinds (lei), and an argument works by &lsquo;extending kinds&rsquo;.
        </p>
      </Example>

      <Definition title="parallel inference">
        <p>
          The Xiaoqu studies <strong>mou</strong>, parallelising: adding the same words to both terms of a true claim. It
          warns that this sometimes works (&lsquo;it is this, and so&rsquo;) and sometimes not (&lsquo;it is this, but not
          so&rsquo;), so &lsquo;one may not use it everywhere&rsquo;. Whether the inference holds depends on what the added
          words do to each term.
        </p>
      </Definition>

      <Remark title="logic in context">
        <p>
          The robber case defended Mohist ethics: caring impartially for people is consistent with killing robbers, because
          that is not &lsquo;killing people&rsquo; in the relevant sense. Critics such as Xunzi called this a confusion of
          names. Modern readers compare it with intensional contexts and the failure of substitution. The contemporary
          Gongsun Long of the School of Names argued, on related ground, that &lsquo;a white horse is not a horse&rsquo;.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "bian",
      rung: "check",
      prompt: <p>What was the aim of bian, disputation, for the Later Mohists?</p>,
      answer: { kind: "choice", options: ["To distinguish what is ‘this’ from what is ‘not this’", "To win debates by any means", "To interpret the classics", "To persuade rulers by flattery"], correct: [0] },
    },
    {
      key: "names",
      rung: "check",
      prompt: <p>In the Mohist classification, what kind of name is &lsquo;horse&rsquo;?</p>,
      answer: { kind: "choice", options: ["Classifying", "Unrestricted", "Private", "Empty"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many inferences are of the form &lsquo;it is this, but not so&rsquo;?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "robber",
      rung: "apply",
      prompt: <p>Why did the Mohists say killing robbers is not killing people?</p>,
      answer: { kind: "choice", options: ["To show punishing robbers is consistent with impartial care for people", "Because robbers are not human", "To defend offensive war", "To mock the Confucians"], correct: [0] },
    },
    {
      key: "cart",
      rung: "apply",
      prompt: <p>Why does &lsquo;a cart is wood&rsquo; not give &lsquo;riding a cart is riding wood&rsquo;?</p>,
      answer: { kind: "choice", options: ["Riding applies to the cart as a vehicle, not to its material", "Carts are not made of wood", "Riding is not an action", "The first claim is false"], correct: [0] },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Is &lsquo;killing robbers is not killing people&rsquo; a good argument or a verbal trick? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Explains how the Mohists distinguished the two descriptions.",
          "Considers Xunzi’s charge of confusing names, or another objection.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Give a modern example where the same words added to both sides of a true identity give a false claim. What does it show?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an example, such as ‘Clark Kent is Superman’ but ‘Lois believes Clark Kent can fly’ is false.",
          "Explains that the added words create a context where substitution fails.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Confucians and Mohists both believed the right words and standards could set the world in order. A short, cryptic
        text answered that the true way cannot be put into words at all.
      </p>
      <p>
        Next, the Daodejing: the dao that cannot be named, the use of emptiness, reversal, wuwei or effortless action, and its
        critique of Confucian virtue.
      </p>
    </>
  ),
};
