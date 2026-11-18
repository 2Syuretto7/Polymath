import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { SaptabhangiViz } from "@/components/viz/SaptabhangiViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p20.6.2",
  minutes: 85,
  links: {
    revisits: ["p20.6.1", "p20.5.5", "p2.2.2"],
    foreshadows: ["p20.6.3", "p20.7.1", "p20.7.6"],
  },

  puzzle: (
    <>
      <p>
        Is the pot in your kitchen real? Yes: there it is. Is it also not real? In a sense, yes: it is not a cloth, not in
        Varanasi, not in last century. Is it both? Can you say both at once in one word? Classical logic offers two values,
        true and false. The Jainas thought one needed more.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through the seven predications, each a combination of three basic values.</p>
      <SaptabhangiViz />
    </>
  ),

  theory: (
    <>
      <Definition title="syāt">
        <p>
          <strong>Syādvāda</strong> is the doctrine of <strong>syāt</strong>, &lsquo;in some respect&rsquo; or &lsquo;from
          a certain standpoint&rsquo;. Every assertion about a thing should be prefixed by syāt, marking it as conditional on
          a standpoint. It is the logical expression of anekāntavāda.
        </p>
      </Definition>

      <Example title="the four respects">
        <p>
          The pot exists with respect to its own substance (clay), place (here), time (now) and form (a pot). It does not exist
          with respect to another substance (thread), another place, another time or another form (a cloth). So &ldquo;the pot
          exists&rdquo; and &ldquo;the pot does not exist&rdquo; are both true, in different respects, and do not contradict
          each other.
        </p>
      </Example>

      <Definition title="the sevenfold predication">
        <p>
          From three basic predications, exists, does not exist, and inexpressible, the <strong>saptabhaṅgī</strong> forms
          every non-empty combination, seven in all. &lsquo;Inexpressible&rsquo; (avaktavya) arises when one tries to assert
          existence and non-existence at the same moment and in the same respect: no single word can say both.
        </p>
      </Definition>

      <Remark title="contradiction or many values">
        <p>
          Śaṅkara objected in his commentary on the Brahma Sūtras that contradictory properties cannot belong to one thing, and
          that a doctrine of &lsquo;maybe&rsquo; leaves its own teaching uncertain. Jainas replied that syāt means &lsquo;in a
          definite respect&rsquo;, not &lsquo;perhaps&rsquo;. Modern scholars, such as B. K. Matilal, read syādvāda as a
          many-valued or context-relative logic; others compare it with paraconsistent logics, which tolerate some
          contradictions without collapse.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "syat",
      rung: "check",
      prompt: <p>What does the prefix syāt mean in syādvāda?</p>,
      answer: { kind: "choice", options: ["In some respect, from a standpoint", "Certainly, in every respect", "Never", "According to scripture"], correct: [0] },
    },
    {
      key: "basic",
      rung: "check",
      prompt: <p>Which are the three basic predications?</p>,
      answer: { kind: "choice", options: ["Exists, does not exist, inexpressible", "True, false, unknown", "Past, present, future", "Substance, place, time"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>As in the visualisation, how many non-empty combinations do three basic values give?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "respect",
      rung: "apply",
      prompt: <p>In which respect does the clay pot not exist?</p>,
      answer: { kind: "choice", options: ["As made of thread, in the form of a cloth", "As made of clay", "Here and now", "In the form of a pot"], correct: [0] },
    },
    {
      key: "avak",
      rung: "apply",
      prompt: <p>When does the predication &lsquo;inexpressible&rsquo; arise?</p>,
      answer: {
        kind: "choice",
        options: ["When existence and non-existence are asserted together, in one respect, at once", "When the thing is not perceived", "When scripture is silent", "Whenever a thing changes"],
        correct: [0],
      },
    },
    {
      key: "argue",
      rung: "prove",
      prompt: <p>Does syādvāda violate the law of non-contradiction? Argue briefly.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States Śaṅkara’s objection that one thing cannot have contradictory properties.",
          "Considers the Jaina reply that the predications hold in different respects, so there is no contradiction in one respect.",
          "Reaches a view with a reason.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Is &lsquo;inexpressible&rsquo; best understood as a third truth value, or as a refusal to assign one?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Describes each reading.",
          "Considers what each means for combining it with the other two values.",
          "Reaches a view. Any thoughtful answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Jainas, Buddhists and Vedāntins disagreed deeply, but all accepted karma, rebirth and liberation. One school rejected
        the lot: there is no self beyond the body, no afterlife, no karma, and no knowledge beyond the senses.
      </p>
      <p>
        Next, Cārvāka materialism: the argument that only perception is a means of knowledge, the critique of inference,
        consciousness as an emergent property of matter, and the ethics of a single life.
      </p>
    </>
  ),
};
