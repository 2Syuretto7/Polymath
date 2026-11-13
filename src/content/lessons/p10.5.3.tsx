import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { PhraseSortViz, type SortItem } from "@/components/viz/PhraseSortViz";
import type { LessonContent } from "@/lib/types";

const CATS = ["genuine memory", "not genuine memory"];
const ITEMS: SortItem[] = [
  {
    text: "You recall blowing out the candles at your tenth birthday party.",
    cat: "genuine memory",
    why: "You experienced it, and that experience is the cause of your present recollection.",
  },
  {
    text: "You know Delhi is the capital of India, though you cannot recall learning it.",
    cat: "genuine memory",
    why: "Semantic memory: the knowledge is retained from when you learnt it, even if the occasion is forgotten.",
  },
  {
    text: "You can still ride a bicycle after twenty years.",
    cat: "genuine memory",
    why: "Procedural memory: a skill retained, though not a belief about the past.",
  },
  {
    text: "You vividly ‘remember’ being lost in a shopping centre as a child; a researcher's suggestion created the image.",
    cat: "not genuine memory",
    why: "Experiments by Elizabeth Loftus implanted such false memories. No past event of yours causes the image.",
  },
  {
    text: "You imagine a scene, and by coincidence it matches an event you witnessed and completely forgot.",
    cat: "not genuine memory",
    why: "Martin and Deutscher's point: matching the past is not enough; the past experience must cause the representation in the right way.",
  },
  {
    text: "Your ‘memory’ of your first day at school was built entirely from your parents' retelling.",
    cat: "not genuine memory",
    why: "Your image comes from their testimony, not from your own experience of the day.",
  },
  {
    text: "You remember parking on level 3, though you feel less sure of it than you did this morning.",
    cat: "genuine memory",
    why: "Memories fade in vividness and confidence, but this one is still caused by your experience of parking.",
  },
];

export const lesson: LessonContent = {
  id: "p10.5.3",
  minutes: 75,
  links: {
    revisits: ["p10.5.2", "p10.3.2", "p1.4.2"],
    foreshadows: ["p10.5.4", "p10.6.1", "p30.2.1"],
  },

  puzzle: (
    <>
      <p>
        Bertrand Russell observed that nothing logically rules out the hypothesis that the world sprang into existence five
        minutes ago, complete with people who &ldquo;remember&rdquo; a wholly unreal past. Memory is our only direct access to
        the past, and it is known to fill gaps and even to invent. How can it give knowledge?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Decide which of these are genuine memories and which only seem to be.</p>
      <PhraseSortViz items={ITEMS} cats={CATS} prompt="Genuine memory, or only an apparent one?" />
    </>
  ),

  theory: (
    <>
      <Definition title="the causal theory of memory">
        <p>
          C. B. Martin and Max Deutscher (1966): you remember an event only if you represent it now, you experienced it then,
          and your past experience is an operative cause of your present representation, through a continuous trace. Accuracy
          alone is not enough.
        </p>
      </Definition>

      <Example title="memory as a preserver">
        <p>
          The traditional view, defended by Tyler Burge, is that memory preserves justification rather than creating it: a
          belief remembered is as justified as when it was first formed. Memory carries forward the results of perception,
          testimony and reasoning, so long proofs can be followed without holding every step in mind at once.
        </p>
      </Example>

      <Remark title="can memory generate justification?">
        <p>
          Jennifer Lackey and others argue that memory can do more. If you formed a belief while you had a defeater for it,
          and you later forget the defeater, your remembered belief may become justified for the first time. And cases of
          forgotten evidence suggest the present seeming to remember may itself be evidence.
        </p>
      </Remark>

      <Remark title="reconstruction and its risks">
        <p>
          Psychologists such as Frederic Bartlett and Elizabeth Loftus showed that remembering is reconstructive: recollections
          are rebuilt each time and can absorb later information. This matters for eyewitness testimony. Yet memory is
          reliable enough for most purposes, and the sceptic about the past must use memory to state the very hypothesis that
          threatens it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "causal",
      rung: "check",
      prompt: <p>According to the causal theory, what is needed besides an accurate representation of a past event?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the representation be vivid.",
          "That your past experience of the event cause your present representation in the right way.",
          "That someone else confirm it.",
          "Nothing else.",
        ],
        correct: [1],
      },
    },
    {
      key: "pres",
      rung: "check",
      prompt: <p>On the preservationist view, memory:</p>,
      answer: {
        kind: "choice",
        options: [
          "Creates new justification.",
          "Preserves justification acquired by other means.",
          "Is never a source of justification.",
          "Is infallible.",
        ],
        correct: [1],
      },
    },
    {
      key: "loftus",
      rung: "apply",
      prompt: <p>What did Loftus&rsquo;s experiments show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That memory is perfectly accurate.",
          "That false memories of whole events can be created by suggestion.",
          "That children have no memories.",
          "That memory is stored in a single place in the brain.",
        ],
        correct: [1],
      },
    },
    {
      key: "russell",
      rung: "apply",
      prompt: <p>What is the point of Russell&rsquo;s five-minute hypothesis?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the world really is five minutes old.",
          "That nothing in our present memories logically guarantees that the past was real.",
          "That memories last five minutes.",
          "That time does not exist.",
        ],
        correct: [1],
      },
    },
    {
      key: "lackey",
      rung: "apply",
      prompt: <p>How might memory generate justification rather than only preserve it?</p>,
      answer: {
        kind: "choice",
        options: [
          "By making beliefs more vivid.",
          "A belief formed in the presence of a defeater can become justified once the defeater is forgotten.",
          "By repeating a belief often.",
          "It cannot, on any view.",
        ],
        correct: [1],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Given that memory is reconstructive and sometimes invents, can it still give knowledge of the past? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the evidence that memory is reconstructive and fallible.",
          "Considers a reply, such as that fallible sources can still be reliable, or the self-undermining nature of total scepticism about memory.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "court",
      rung: "stretch",
      prompt: <p>Should a court convict someone on the confident testimony of a single eyewitness? What does the epistemology of memory suggest?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that confidence and accuracy can come apart in reconstructive memory.",
          "Considers what other evidence or safeguards might be needed.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the causal theory of memory, the view that memory preserves justification and the case for its generating justification, Loftus's false memories and reconstructive remembering, and Russell's five-minute hypothesis.",

  glimpse: (
    <p>
      The next lesson asks whether some knowledge needs no experience at all. Virtue epistemology and debates about personal
      identity also lean on memory.
    </p>
  ),
};
