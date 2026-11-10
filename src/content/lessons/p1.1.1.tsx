import { Definition, Example, Quote, Remark } from "@/components/lesson/Blocks";
import { DreamArgumentViz } from "@/components/viz/DreamArgumentViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p1.1.1",
  minutes: 70,
  links: {
    revisits: ["p0.2.1", "p0.4.4"],
    foreshadows: ["p7.1.1", "p10.4.1", "p10.4.4", "p21.3.2"],
  },

  puzzle: (
    <>
      <p>
        Last night you may have dreamt something vivid: a conversation, a journey, an exam you had not prepared for. While
        it lasted, you were completely convinced it was real.
      </p>
      <p>
        Now you are reading these words, and you are convinced this is real. What exactly is the difference? Can you name a
        test, right now, that would show you are not dreaming, one that a dream could not also fake?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Most tests fail on inspection. Pinch yourself? You can dream a pinch. Check whether the experience hangs together? Dreams
        often feel coherent while they last. The worry is not that you <em>are</em> dreaming, but that nothing in your
        experience could show you are not. And if you cannot rule it out, do you really <em>know</em> you are sitting where
        you think you are?
      </p>
      <p>
        That is the <strong>dream argument</strong>, the most famous argument for scepticism about the external world. It
        can be set out as a short, valid argument. Since it is valid, anyone who rejects the conclusion must reject a premise.
        Choose below and see who has taken each route, and at what price.
      </p>
      <DreamArgumentViz />
    </>
  ),

  theory: (
    <>
      <Definition title="scepticism">
        <p>
          <strong>Scepticism</strong> about a subject is the view that we do not, or cannot, have knowledge of it. It is{" "}
          <strong>local</strong> when it targets one area, such as other minds, the past or morality, and{" "}
          <strong>global</strong> when it targets nearly everything. Philosophers study sceptical arguments less because they
          believe the conclusions than because finding exactly what is wrong with them shows what knowledge requires.
        </p>
      </Definition>

      <Quote source={<>René Descartes, <cite>Meditations on First Philosophy</cite> (1641), Meditation I, translated by E. S. Haldane and G. R. T. Ross</>}>
        <p>
          How often has it happened to me that in the night I dreamt that I found myself in this particular place, that I was
          dressed and seated near the fire, whilst in reality I was lying undressed in bed!
        </p>
      </Quote>
      <p>
        Descartes used the argument as part of a method: doubt everything that can be doubted, to find what cannot. He then
        raised the stakes. Even if dreams are made from pieces of real experience, perhaps an all-powerful evil demon deceives
        me about everything, even arithmetic. A modern version: perhaps you are a brain in a vat, kept alive by scientists who
        feed it electrical signals exactly like those a body would send.
      </p>

      <Definition title="the closure principle">
        <p>
          The first premise of the argument rests on a principle: if you know P, and you know that P implies Q, then you are in
          a position to know Q. Knowledge is <strong>closed</strong> under known implication. It sounds obvious: this is how
          we extend our knowledge by reasoning. The sceptic uses it in reverse: you do not know Q (that you are not dreaming),
          so you do not know P (that you are by the fire).
        </p>
      </Definition>

      <Example title="three replies">
        <ul>
          <li>
            <strong>Moore.</strong> In his 1939 lecture &ldquo;Proof of an External World&rdquo;, G. E. Moore held up his hands
            and said, in effect: here is one hand, and here is another, so there are external things. He was more certain of
            this than of any premise a sceptic could offer, so he ran the argument backwards.
          </li>
          <li>
            <strong>Denying closure.</strong> Fred Dretske (1970) and Robert Nozick (1981) argued that knowledge requires
            tracking the truth in nearby situations, and that this does not carry over to remote possibilities like dreaming
            or demons. So you can know you are by the fire without knowing you are not a brain in a vat.
          </li>
          <li>
            <strong>Contextualism.</strong> Philosophers such as David Lewis and Keith DeRose suggest that &ldquo;know&rdquo;,
            like &ldquo;tall&rdquo; or &ldquo;flat&rdquo;, has standards set by the conversation. The sceptic raises the standards;
            in everyday life they are lower, and we speak truly when we say we know.
          </li>
        </ul>
      </Example>

      <Remark title="dreams elsewhere">
        <p>
          The Daoist classic <cite>Zhuangzi</cite>, from the fourth century BCE, tells of Zhuang Zhou dreaming he was a
          butterfly, fluttering happily, unaware of Zhuang Zhou. On waking he could not tell whether he was Zhou who had
          dreamt of being a butterfly, or a butterfly now dreaming of being Zhou. In India, the Buddhist philosopher Vasubandhu
          used dreams in his <cite>Twenty Verses</cite> (fourth or fifth century CE) to argue that experience with all its
          order does not prove that external objects exist. The worry is not a European peculiarity; it seems to occur to
          reflective people wherever they are.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "global",
      rung: "check",
      prompt: <p>&ldquo;We cannot know anything about other people&rsquo;s inner experiences.&rdquo; What kind of scepticism is this?</p>,
      answer: { kind: "choice", options: ["global scepticism", "local scepticism", "contextualism", "not scepticism at all"], correct: [1] },
    },
    {
      key: "closure",
      rung: "check",
      prompt: <p>Which principle does the first premise of the dream argument rely on?</p>,
      answer: {
        kind: "choice",
        options: [
          "Knowledge requires certainty.",
          "If you know P and know that P implies Q, you are in a position to know Q.",
          "Dreams are always less vivid than waking experience.",
          "Whatever is clearly perceived is true.",
        ],
        correct: [1],
      },
    },
    {
      key: "moore",
      rung: "apply",
      prompt: <p>Which premise of the dream argument does Moore reject?</p>,
      answer: {
        kind: "choice",
        options: [
          "If I know I am by the fire, I know I am not dreaming.",
          "I do not know that I am not dreaming.",
          "Neither: he rejects the validity of the argument.",
          "Both premises.",
        ],
        correct: [1],
      },
    },
    {
      key: "valid",
      rung: "apply",
      prompt: <p>The dream argument is valid. What follows?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its conclusion is true.",
          "If its premises are true, its conclusion is true.",
          "Anyone who denies the conclusion must deny at least one premise.",
          "Its premises are true.",
        ],
        correct: [1, 2],
      },
    },
    {
      key: "test",
      rung: "apply",
      prompt: <p>Which proposed test for being awake does not escape the sceptic&rsquo;s worry?</p>,
      answer: {
        kind: "choice",
        options: ["Pinching yourself", "Checking whether the experience is coherent", "Asking someone nearby whether you are awake", "All of these"],
        correct: [3],
      },
    },
    {
      key: "reconstruct",
      rung: "prove",
      prompt: (
        <p>
          Set out the brain-in-a-vat argument in standard form, with numbered premises and a conclusion, and say which premise
          you find weakest and why.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States a closure premise linking knowledge of ordinary facts to knowledge that one is not a brain in a vat.",
          "States the premise that one cannot know one is not a brain in a vat, with a reason such as identical experiences.",
          "Draws the sceptical conclusion validly.",
          "Picks a premise to reject and gives a reason, perhaps from Moore, closure denial or contextualism.",
        ],
      },
    },
    {
      key: "moore-fair",
      rung: "stretch",
      prompt: (
        <p>
          Does Moore&rsquo;s reply beg the question against the sceptic? Give the strongest case for each side, and then your
          own verdict.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains the charge: Moore assumes the very knowledge the sceptic questions.",
          "Explains Moore's side: a valid argument can be run in either direction, and the comparison of certainties is fair.",
          "Reaches a verdict with a reason.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the dream argument as a valid argument with two premises, and describe one way of resisting it.",

  glimpse: (
    <p>
      Next, what knowledge is, and why true belief with good reasons may still fall short of it. Descartes&rsquo;s method of
      doubt is read in full in Early Modern Philosophy. Epistemology returns to scepticism with the debates over closure,
      contextualism and Moore, and Chinese Philosophy reads the butterfly dream in its Daoist setting.
    </p>
  ),
};
