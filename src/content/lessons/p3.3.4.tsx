import { Definition, Example, Remark } from "@/components/lesson/Blocks";
import { MillViz, type MillCase } from "@/components/viz/MillViz";
import type { LessonContent } from "@/lib/types";

const CASES: MillCase[] = [
  {
    title: "The dinner",
    factors: ["soup", "chicken", "salad", "prawns", "cake"],
    rows: [
      { name: "Asha", has: [true, true, false, true, false], effect: true },
      { name: "Ben", has: [false, false, true, true, true], effect: true },
      { name: "Chen", has: [true, false, false, true, true], effect: true },
      { name: "Dev", has: [true, true, false, false, true], effect: false },
      { name: "Ema", has: [false, true, true, false, false], effect: false },
      { name: "Farah", has: [true, false, true, false, true], effect: false },
    ],
    note: "Everyone who fell ill ate it, and nobody who stayed well did.",
  },
  {
    title: "Two plants",
    factors: ["fertiliser", "sunlight", "daily water"],
    rows: [
      { name: "plant A", has: [true, true, true], effect: true },
      { name: "plant B", has: [false, true, true], effect: false },
    ],
    note: "Two cases alike in every listed respect but one: the method of difference, which is the logic of a controlled experiment. (The effect here is growing tall.)",
  },
  {
    title: "A hidden factor",
    factors: ["carries a lighter", "drinks coffee", "owns a dog"],
    rows: [
      { name: "person 1", has: [true, true, false], effect: true },
      { name: "person 2", has: [true, false, true], effect: true },
      { name: "person 3", has: [true, true, true], effect: true },
      { name: "person 4", has: [false, true, true], effect: false },
      { name: "person 5", has: [false, true, false], effect: false },
    ],
    note: "But carrying a lighter does not stain fingers yellow. Smoking, which is not in the table, causes both. Mill's methods only choose among the factors someone thought to list.",
  },
];

export const lesson: LessonContent = {
  id: "p3.3.4",
  minutes: 65,
  links: {
    revisits: ["p3.3.1", "p3.1.1"],
    foreshadows: ["p7.5.2", "p11.4.1", "m9.5.2", "p16.5.2"],
  },

  puzzle: (
    <>
      <p>
        Six friends share a meal. The next day three of them are ill. Everyone ate different combinations of five dishes.
        Which dish was to blame?
      </p>
      <p>
        You probably already know how to start: look for something all the ill people ate and the well people did not.
        That instinct can be made into a method. But it can also be fooled, and it is worth knowing how.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A cause should be there when its effect is, and absent when its effect is absent, other things being equal. Lay
        the cases out in a table and test each candidate factor. Click a column heading to test that factor. The third
        table shows how a factor can pass every test and still not be the cause.
      </p>
      <MillViz cases={CASES} />
    </>
  ),

  theory: (
    <>
      <p>
        John Stuart Mill set out five methods for finding causes in his <em>System of Logic</em> of 1843. They codify
        reasoning that people had long used, and that scientists still use, usually without naming it.
      </p>

      <Definition title="Mill's methods">
        <ul>
          <li>
            <strong>Agreement</strong>: if the cases in which the effect occurs share only one relevant factor, that factor
            is probably the cause, or part of it.
          </li>
          <li>
            <strong>Difference</strong>: if a case with the effect and a case without it differ in only one relevant
            factor, that factor is probably the cause, or part of it.
          </li>
          <li>
            <strong>Joint method</strong>: use both. The factor is present in all cases with the effect and absent in all
            cases without it.
          </li>
          <li>
            <strong>Residues</strong>: subtract the part of an effect explained by known causes; what remains is due to the
            remaining factors.
          </li>
          <li>
            <strong>Concomitant variation</strong>: if the effect varies in step with a factor, more of the one going with
            more of the other, they are probably causally connected.
          </li>
        </ul>
      </Definition>

      <Example title="residues and variation">
        <p>
          You weigh a lorry with its load at 12 tonnes; the empty lorry weighs 8 tonnes; so the load weighs 4 tonnes. That
          is the method of residues in its simplest form, and the anomaly in the orbit of Uranus, the part not explained by
          the known planets, was a residue too. For concomitant variation: if crops grow taller, field by field, the more
          rain falls, rain is probably a cause of their growth.
        </p>
      </Example>

      <Remark title="how the methods are fooled">
        <ul>
          <li>
            <strong>Unlisted factors</strong>. The methods choose only among the factors in the table. If the real cause
            is not listed, a factor that merely goes with it can pass every test, as the lighter does.
          </li>
          <li>
            <strong>Common causes</strong>. Ice cream sales and drownings rise and fall together, because hot weather
            causes both. Concomitant variation is not enough.
          </li>
          <li>
            <strong>Reverse causation</strong>. People who use walking sticks fall more often; the falls, or the frailty
            behind them, lead to the sticks.
          </li>
          <li>
            <strong>Several causes, or joint causes</strong>. An effect may have different causes in different cases, or
            need two factors together, so no single factor passes.
          </li>
          <li>
            <strong>Post hoc</strong>. That one thing came after another does not show the first caused it: &ldquo;I wore
            my lucky shirt and we won.&rdquo;
          </li>
        </ul>
      </Remark>

      <Remark title="why experiments work">
        <p>
          A controlled experiment builds the method of difference on purpose: make two groups alike in every way, change
          one factor, and watch. Random assignment to the groups is the modern refinement. It does not list the possible
          hidden factors; it makes them as likely to fall in one group as the other, so that on average they cancel out.
          That is how a randomised trial can defeat the hidden factor which fools a table of observed cases.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "difference",
      rung: "check",
      prompt: (
        <p>
          Two identical cars are driven on the same route by the same driver; one has new tyres and uses less fuel. Which of
          Mill&rsquo;s methods does this use?
        </p>
      ),
      answer: { kind: "choice", options: ["agreement", "difference", "residues", "concomitant variation"], correct: [1] },
    },
    {
      key: "variation",
      rung: "check",
      prompt: <p>Which of these uses the method of concomitant variation?</p>,
      answer: {
        kind: "choice",
        options: [
          "Everyone who caught the illness had drunk from the same well.",
          "The more hours students practised, the higher, on average, their scores.",
          "After removing the known weight of the box, 2 kg remained unexplained.",
          "The plant with fertiliser grew; the otherwise identical one without did not.",
        ],
        correct: [1],
      },
    },
    {
      key: "agreement",
      rung: "apply",
      prompt: (
        <p>
          Four people get a rash. All four used the same new soap; they ate different foods, wore different clothes and
          live in different towns. Which conclusion does the method of agreement suggest?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["The soap probably caused the rash.", "The food caused the rash.", "Nothing can be concluded.", "The rash caused them to buy the soap."],
        correct: [0],
      },
    },
    {
      key: "common",
      rung: "apply",
      prompt: (
        <p>
          In towns with more fire engines at a fire, there tends to be more damage. What is the best account of this?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Fire engines cause damage.",
          "A common cause: bigger fires bring more engines and do more damage.",
          "Damage causes fire engines to be built.",
          "It is a coincidence.",
        ],
        correct: [1],
      },
    },
    {
      key: "residue",
      rung: "apply",
      prompt: (
        <p>
          A household&rsquo;s electricity bill is 900 units. The fridge accounts for 300, the lights for 150 and the heater
          for 350. How many units does the method of residues assign to other causes?
        </p>
      ),
      answer: { kind: "numeric", value: 100 },
    },
    {
      key: "joint",
      rung: "prove",
      prompt: (
        <p>
          Five students sat an exam. Those who passed were A (attended revision classes, slept well), B (attended, used
          flashcards) and C (attended, slept well, used flashcards). Those who failed were D (slept well, used flashcards)
          and E (used flashcards). Apply the joint method, state its verdict, and name one way the verdict could be wrong.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Finds that attending revision classes is present in every pass and absent in every fail, while sleeping well and flashcards are not.",
          "Concludes that attending is probably a cause, or part of the cause, of passing.",
          "Names a way it could be wrong, such as an unlisted factor (keener students both attend and pass), a small number of cases, or joint causes.",
        ],
      },
    },
    {
      key: "trial",
      rung: "stretch",
      prompt: (
        <p>
          Observational studies once suggested that a certain vitamin pill protected against heart disease: people who
          took it had fewer heart attacks. Randomised trials later found no such effect. Using this lesson&rsquo;s ideas,
          explain how both findings could arise.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Suggests a hidden common cause, such as that people who choose to take vitamins also exercise, eat well or smoke less.",
          "Explains that random assignment spreads such factors evenly between groups, so the trial isolates the pill's own effect.",
          "Concludes that the observational link was due to the hidden factor, not the pill. A clear informal account is enough.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Mill's methods of agreement, difference and concomitant variation, how a hidden factor or a common cause can fool them, and why randomised experiments help.",

  glimpse: (
    <p>
      Probability makes concomitant variation precise as correlation, and shows exactly how little it proves on its own.
      Early Modern Philosophy meets Hume&rsquo;s view that we never observe causation itself, only one thing regularly
      following another. Metaphysics asks whether a cause is anything more than a regularity, and Philosophy of Science
      asks what makes an explanation causal.
    </p>
  ),
};
