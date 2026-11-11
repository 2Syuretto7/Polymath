import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { TrialViz } from "@/components/viz/TrialViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "p3.5.1",
  minutes: 65,
  links: {
    revisits: ["p3.3.3", "p3.3.4"],
    foreshadows: ["p16.1.2", "p16.2.1", "m9.7.3"],
  },

  puzzle: (
    <>
      <p>
        In the 1840s, in the maternity wards of the Vienna General Hospital, the doctor Ignaz Semmelweis faced a terrible
        puzzle. In the First Division, where doctors and medical students delivered babies, mothers died of childbed fever
        at several times the rate of the Second Division, where midwives worked. Both divisions were in the same hospital,
        in the same city, breathing the same air.
      </p>
      <p>Why? And how could anyone find out, when guesses were cheap and every guess sounded plausible?</p>
    </>
  ),

  intuition: (
    <>
      <p>
        Science does not stop at guessing. It asks of each guess: if this were true, what else would we see? Then it goes
        and looks, ideally by changing one thing while holding everything else fixed. A modern clinical trial is that idea
        made systematic. Run a trial below, and notice how chance can mislead when the groups are small, and what happens
        when many trials of useless treatments are run.
      </p>
      <TrialViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the hypothetico-deductive method">
        <ol>
          <li>Propose a hypothesis H.</li>
          <li>Deduce a prediction P: if H is true, then P will be observed.</li>
          <li>Test: arrange to see whether P happens.</li>
          <li>If P fails, H (or something assumed with it) is refuted. If P happens, H is confirmed, but not proved.</li>
        </ol>
        <p>
          The asymmetry is logic from Logic I. &ldquo;If H then P; not P; so not H&rdquo; is modus tollens, which is valid.
          &ldquo;If H then P; P; so H&rdquo; affirms the consequent, which is not. A passed test raises H&rsquo;s
          probability, especially if the prediction was unlikely otherwise; it does not make H certain.
        </p>
      </Definition>

      <Example title="Semmelweis at work">
        <p>
          Semmelweis tested hypothesis after hypothesis. An &ldquo;epidemic influence&rdquo; in the air should have struck
          both divisions alike; it did not. Overcrowding could not explain it, since the Second Division was the more
          crowded. A priest who passed through the First Division ringing a bell, on his way to the dying, was asked to
          take another route; the deaths went on. Women in the First Division gave birth lying on their backs, so he
          changed the position; the deaths went on.
        </p>
        <p>
          In 1847 a colleague, Jakob Kolletschka, was cut by a student&rsquo;s scalpel during an autopsy, and died of an
          illness much like childbed fever. Semmelweis guessed that &ldquo;cadaveric matter&rdquo; on the hands of
          doctors and students, who came to the wards from the dissecting room, was the cause; midwives did no autopsies.
          The prediction: washing hands in a solution of chlorinated lime should cut the deaths. He introduced it, and the
          death rate in the First Division fell sharply, to about the level of the Second. The philosopher Carl Hempel
          made this story famous as a model of scientific testing.
        </p>
      </Example>

      <Remark title="auxiliary assumptions">
        <p>
          A hypothesis never makes a prediction alone. It needs help from further assumptions: that the instruments work,
          that the lime solution was strong enough, that the staff actually washed. When a prediction fails, logic tells us
          only that something in the whole package is false. Deciding which is a matter of judgement, and the temptation to
          blame an auxiliary rather than give up a favourite hypothesis is the road to ad hoc rescues.
        </p>
      </Remark>

      <Definition title="the controlled trial">
        <ul>
          <li><strong>Control group</strong>: an otherwise similar group without the treatment, to compare against (Mill&rsquo;s method of difference).</li>
          <li><strong>Randomisation</strong>: assignment by chance, so that hidden factors are spread evenly between the groups.</li>
          <li><strong>Placebo and blinding</strong>: patients, and ideally doctors (&ldquo;double blind&rdquo;), do not know who received the treatment, so expectations cannot affect the outcome or how it is judged.</li>
          <li><strong>Sample size</strong>: enough patients that a real effect stands out from chance variation.</li>
        </ul>
      </Definition>

      <Remark title="replication and the file drawer">
        <p>
          A common test calls a result significant if chance alone would produce one so large only about 1 time in 20. So
          if twenty teams test useless treatments, about one will find a &ldquo;significant&rdquo; effect. If that one is
          published and the other nineteen stay in a file drawer, the published record is misleading. The remedies are
          replication by independent teams, registering a study&rsquo;s plan before it starts, and publishing null
          results.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "proof",
      rung: "check",
      prompt: <p>A hypothesis predicts P, and P is observed. Why does this not prove the hypothesis?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because inferring H from 'if H then P' and P affirms the consequent: something else could have produced P.",
          "Because observations are always unreliable.",
          "Because predictions can never come true.",
          "It does prove it.",
        ],
        correct: [0],
      },
    },
    {
      key: "control",
      rung: "check",
      prompt: <p>What is the main purpose of a control group?</p>,
      answer: {
        kind: "choice",
        options: [
          "To give more patients the treatment.",
          "To show what would have happened without the treatment, for comparison.",
          "To make the trial cheaper.",
          "To check the doctors' honesty.",
        ],
        correct: [1],
      },
    },
    {
      key: "priest",
      rung: "apply",
      prompt: <p>Semmelweis had the priest take another route, and the death rate did not change. What did this show?</p>,
      answer: {
        kind: "choice",
        options: [
          "That the priest's bell caused the deaths.",
          "That the bell hypothesis was refuted, assuming the change was carried out.",
          "That the cadaveric matter hypothesis was proved.",
          "Nothing at all.",
        ],
        correct: [1],
      },
    },
    {
      key: "blind",
      rung: "apply",
      prompt: <p>Why are trials of painkillers usually double blind?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because pain is not real.",
          "Because patients' and doctors' expectations can affect the reported pain and how it is judged.",
          "Because it makes the trial faster.",
          "Because the law requires secrecy about medicine.",
        ],
        correct: [1],
      },
    },
    {
      key: "drawer",
      rung: "apply",
      prompt: (
        <p>
          Forty independent teams each test a different useless supplement, each using a test that chance passes 1 time in
          20. How many &ldquo;significant&rdquo; findings should we expect?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "hd",
      rung: "prove",
      prompt: (
        <p>
          Set out Semmelweis&rsquo;s test of the cadaveric matter hypothesis in the hypothetico-deductive form. Say what
          his success showed, what it did not show, and name one auxiliary assumption the test relied on.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States the hypothesis (cadaveric matter on hands causes childbed fever) and the prediction (handwashing with chlorinated lime will reduce deaths).",
          "Explains that the fall in deaths confirmed the hypothesis strongly but did not prove it, since inferring H from P affirms the consequent.",
          "Names a reasonable auxiliary assumption, such as that the washing was done thoroughly, or that nothing else changed at the same time.",
        ],
      },
    },
    {
      key: "register",
      rung: "stretch",
      prompt: (
        <p>
          Explain how publishing only positive results can make a useless treatment look effective, and how registering a
          trial&rsquo;s plan in advance helps. Can you think of a limit to what registration can achieve?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that chance produces some false positives, and if only those are published, the record overstates the effect.",
          "Explains that registration makes unpublished trials visible and stops researchers changing their outcome measures after seeing the data.",
          "Suggests a limit, such as that registration cannot stop poor design or fraud, or that not all fields can register. Any reasonable point is fine.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the hypothetico-deductive method works, why a failed prediction refutes but a successful one only confirms, and how controls, randomisation and blinding make a trial fair.",

  glimpse: (
    <p>
      Philosophy of Science studies the hypothetico-deductive method and its puzzles, and Karl Popper&rsquo;s view that
      science advances by bold conjectures and attempts to refute them. Probability explains exactly how large a trial
      must be to detect an effect of a given size.
    </p>
  ),
};
